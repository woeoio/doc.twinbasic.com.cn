---
title: "PDF 生成"
parent: Documentation Development
nav_order: 8
permalink: /Documentation/Development/PDF-Generation
---

# PDF 生成

两阶段PDF管线的内部机制：`tbdocs`阶段8组装稀疏的`_site-pdf/`源树，然后`book/render-book.mjs`通过无头Chromium + paged.js + pdf-lib将其渲染为`_pdf/twinBASIC Book.pdf`。在修改渲染器、打印样式表或paged.js包时阅读此页。

## 数据流

![PDF render pipeline](/assets/images/mmd/pdf-render-pipeline.svg)

两个阶段是解耦的：`tbdocs`构建`_site-pdf/`作为其正常运行的一部分；`render-book.mjs`仅在`book.bat`显式调用时运行。这使得`puppeteer`和`pdf-lib`（两者都很大）不进入站点生成器的依赖树。

## 运行渲染器

```
node book/render-book.mjs <input.html> -o <output.pdf>
                      [--outline-tags h1,h2,h3,h4]
                      [-t <timeout-ms>]
                      [--additional-script <path>]...
```

| 标志 | 默认值 | 描述 |
|---|---|---|
| `<input.html>` | 必需 | 已组装HTML文件的路径（通常为`_site-pdf/book.html`）。 |
| `-o` / `--output` | 必需 | 目标PDF路径。 |
| `--outline-tags` | `h1,h2,h3,h4` | 逗号分隔的标题标签，用于包含在PDF书签树中。 |
| `-t` / `--timeout` | `0`（禁用） | 每次操作的puppeteer超时时间（毫秒）。 |
| `--additional-script` | — | 在paged.js包之后注入额外的页面内脚本。可重复使用。 |

`book.bat`运行标准的生产调用：

```batch
node ..\book\render-book.mjs _site-pdf\book.html -o "_pdf\twinBASIC Book.pdf" ^
     --outline-tags h1,h2,h3,h4 ^
     --additional-script ..\perf\detach-pages.js
```

始终先运行`build.bat`以填充`_site-pdf/`。

## render-book.mjs

`book/render-book.mjs`驱动三个阶段。其辅助模块位于`book/lib/`。

### 阶段1：渲染

打开无头Chromium实例，在`file://`下加载`book.html`，并调用`PagedPolyfill.preview()`运行CSS Paged Media排版引擎。返回时，DOM中包含每个`.pagedjs_page`元素，对应一个输出PDF页面。

**Chromium启动标志：**

| 标志 | 原因 |
|---|---|
| `--allow-file-access-from-files` | paged.js通过XHR从`file://` URL获取`print.css`。没有此标志Chrome会拒绝请求。 |
| `--disable-gpu` + `--disable-software-rasterizer` | 将GPU进程从约100MB缩减到约16MB，并让Skia跳过GPU初始化路径，从而为生成阶段节省约5秒。 |

在`page.goto()`之后、加载任何脚本之前，驱动程序注入：

```js
window.PagedConfig = { auto: false };
```

这阻止paged.js在包加载时自动运行。然后通过`page.addScriptTag()`按顺序注入脚本：

1. `lib/paged.browser.js` --- paged.js CSS Paged Media polyfill。
2. `lib/progress-handler.js` --- 注册一个处理器，在每页排版完成后将`[render-progress] page=N elapsed=Xs`记录到浏览器控制台。
3. 任何`--additional-script`路径（生产环境添加`perf/detach-pages.js`）。

接下来通过`page.evaluate()`调用`PagedPolyfill.preview()`。在vendor包中，该调用是完全同步的；`page.evaluate()`上的`await`仅仅是puppeteer将结果带回Node所需的CDP往返。

`perf/detach-pages.js`实现了激进分离优化：在每个页面排版完成后立即从DOM中物理移除该页面，然后在`afterRendered`时按顺序恢复所有页面。这使得`getBoundingClientRect`（paged.js对每页调用）保持在约0.7毫秒/页的平缓速度，而不是在1638页的书中以约8毫秒/页的速度增长。CSS计数器在分离页面间会断裂，因此`print.css`使用`var(--page-num)`（paged.js为每页写入的自定义属性）而不是`counter(page)`来生成页码。

### 阶段2：生成

提取文档元数据并构建大纲树，然后调用`page.pdf()`从Chromium内部写入器生成原始PDF。

**元数据提取**通过`page.evaluate()`返回：

```js
{
  title:  string,   // <title> text content
  lang:   string,   // <html lang="..."> value
  [name]: string,   // one entry per <meta name="..."> tag
}
```

**大纲提取**通过`parseOutline(page, outlineTags)`（参见[`outline.mjs`](#outlinemjs)）返回嵌套的`OutlineNode[]`树。

**PDF生成**通过`page.pdf()`：

```js
page.pdf({
  printBackground:     true,
  displayHeaderFooter: false,
  preferCSSPageSize:   true,   // use the A4 size from print.css @page rules
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
})
```

`preferCSSPageSize: true`使Chromium使用`print.css`中声明的尺寸，而非硬编码的默认值。该调用在返回之前在内部缓冲整个文档——没有中间进度信号。在约50秒的调用运行期间，一个500毫秒的心跳在TTY上向stdout写入已用时间计数器。

### 阶段3：处理

用书签树和文档元数据增强Chromium的原始PDF，然后保存最终输出。

`page.pdf()`的原始缓冲区是有效但最小的PDF：没有`/Outlines`条目，并带有Chromium的默认元数据。处理阶段按顺序运行四个操作：

1. **`measureRawPdf(rawPdf)`** --- 遍历原始字节而不分配任何对象。返回`dictSlots`和`arraySlots`计数，用于在加载前预调整两个shim后备数组的大小（参见[`measure-pass.mjs`](#measure-passmjs)）。

2. **`PDFDocument.load(rawPdf)`** --- 将原始PDF解析为pdf-lib的内存模型。fast-* shim（参见[pdf-lib补丁](/official/Documentation/Fixes-PDFLib)）已从import块激活；此调用使用其优化的数据结构。

3. **`setMetadata(pdfDoc, meta)`**和**`setOutline(pdfDoc, outline)`** --- 将`/Info`字典和`/Outlines`树写入文档（参见[`postprocesser.mjs`](#postprocessermjs)和[`outline.mjs`](#outlinemjs)）。

4. **`parallelSave(pdfDoc, { objectsPerStream: 500 })`** --- 将修改后的文档序列化为字节，在libuv线程池上并行运行deflate（参见[`parallel-deflate.mjs`](#parallel-deflatemjs)）。

## lib/ 引用

### outline.mjs

两个导出：`parseOutline`在浏览器中通过puppeteer运行；`setOutline`在Node中对pdf-lib文档运行。

**`parseOutline(page, tags)`** --- 查询`document.querySelectorAll(tags.join(','))`，按文档顺序遍历结果，并构建嵌套树。每个节点：

```js
// OutlineNode
{
  title:       string,        // heading innerText, HTML-stripped
  destination: string,        // percent-encoded heading id (# → #25)
  children:    OutlineNode[],
  closed?:     true,          // present when the heading or its ancestor
                               // article carries data-pdf-bookmark-closed
}
```

该函数还在`<body>`之前为每个标题注入一个包含`<a href="#id">`链接的隐藏`<div>`。没有这些链接，Chromium的PDF写入器不会注册命名目标，因此大纲中的`/Dest`条目将无处解析。

`closed`节点在PDF `/Outlines`树中产生负的`/Count`，PDF阅读器使用它来显示折叠的书签。

**`setOutline(pdfDoc, outline, enableWarnings?)`** --- 通过`pdfDoc.context.nextRef()`为每个大纲节点分配PDF引用，每个节点写入一个链接的`PDFDict`，并将`pdfDoc.catalog.Outlines`设置为根引用。每个节点的`Dest`是一个PDF名称，Chromium的`/Dests`目录将其映射到页码和坐标。

### postprocesser.mjs

**`setMetadata(pdfDoc, meta)`** --- 从阶段2收集的元数据对象写入标准`/Info`字典条目。始终将`ModDate`设置为当前时间。在从Chromium继承的`Creator`字符串后追加`" + Paged.js"`，并保留Chromium的`"Skia/PDF mXX"` `Producer`字符串。

**`setTrimBoxes(pdfDoc, pages)`** --- 从`PagedPolyfill`暴露的框数据设置每页的`/TrimBox`条目。在生产管线中未被调用（页面没有出血区域），但对于带裁切标记的印刷就绪输出可用。

### measure-pass.mjs

**`measure(bytes)`** --- 对原始PDF缓冲区的无分配字节遍历器。解析PDF语法（间接对象、字典、数组、流、嵌入的ObjStm）而不实例化任何PDFObject。返回：

```js
{
  indirectObjects:    number,
  dicts:              number,
  dictSlots:          number,   // total key + value slots across all dicts
  arrays:             number,
  arraySlots:         number,   // total element slots across all arrays
  refs:               number,
  names:              number,
  numbers:            number,
  strings:            number,
  hexStrings:         number,
  streams:            number,
  objStms:            number,
  objStmInner:        number,
  maxDictSlots:       number,
  maxArraySlots:      number,
  maxRecursion:       number,
  totalStreamBytes:   number,
  totalInflatedBytes: number,
}
```

`dictSlots`和`arraySlots`驱动fast-dict-onebuf和fast-array-onebuf shim上的`setExpectedDictSlots()`和`setExpectedArraySlots()`。在`PDFDocument.load()`之前调用这些函数可以让每个shim预分配其后备数组到测量大小，从而消除解析期间V8的增长调整大小。

内部的`Measurer`类在深度索引的`Int32Array` / `Uint8Array`栈上保持每字典状态（`/Length`、`/Type`、`/N`、`/First`），而非每对象的堆记录。栈深度为64；在书上观察到的最大深度为4。

### parallel-deflate.mjs

**`parallelSave(pdfDoc, opts?)`** --- `pdfDoc.save({ useObjectStreams: true })`的替代品。运行与`PDFDocument.save()`相同的预序列化步骤（`flush`、`updateFieldAppearances`），然后调用自定义的`ParallelStreamWriter`，将保存分为三个阶段：

1. **分类** --- 与pdf-lib的`PDFStreamWriter.computeBufferSize`逻辑相同。将间接对象分为`uncompressedObjects`（PDF流、加密引用、生成号≠0）和`compressedChunks`（其余所有内容，按`objectsPerStream`分块）。

2. **并行deflate** --- 实例化所有`PDFObjectStream`对象，然后触发`Promise.all(streams.map(s => deflateAsync(s.getUnencodedContents())))`。每个deflate在libuv线程池上运行。结果直接写入每个流的`contentsCache.value`，因此阶段3只发现缓存命中。

3. **大小计算与输出** --- 与上游相同。每次`computeIndirectObjectSize`调用都是阶段2的缓存命中。xref流（依赖于阶段3中固定的字节偏移量）在其内容最终确定后立即通过`deflateSync`同步deflate。

默认选项及其生产值：

```js
{
  objectsPerStream: 50,          // production: 500
  encodeStreams:    true,
  parallel:         true,
  addDefaultPage:   true,
  updateFieldAppearances: true,
}
```

`objectsPerStream: 500`（生产值）产生的PDF比pdf-lib默认值50小约5%，因为更大的deflate窗口能捕获分组对象间更多的重复字符串。

返回`{ bytes: Uint8Array, streamCount: number }`。

### progress-handler.js

一个最小的浏览器内脚本，注册一个`Paged.Handler`子类，带有一个钩子：

```js
class ProgressHandler extends Paged.Handler {
  afterPageLayout(_pageElement, _page, _breakToken) {
    this.count++;
    const elapsed = ((performance.now() - start) / 1000).toFixed(1);
    console.log(`[render-progress] page=${this.count} elapsed=${elapsed}`);
  }
}
Paged.registerHandlers(ProgressHandler);
```

`render-book.mjs`通过`page.on('console', ...)`拦截这些控制台消息，并在TTY上向stdout写入`\r`覆盖的进度行，在stdout被管道传输时每100页写一行。

## paged.browser.js

`book/lib/paged.browser.js`是[Paged.js](https://pagedjs.org/) v0.4.3（MIT）的vendor包副本，带有少量补丁。Paged.js是CSS Paged Media polyfill：它从链接的样式表中读取`@page`规则，将文档分割为离散的DOM页面，解析CSS计数器，并将`string-set`声明中的运行页眉和页脚复制到每页的边距框中。然后Chromium将结果DOM渲染为PDF。

### 全局API

两个全局变量控制polyfill：

**`window.PagedConfig`** --- 加载时读取的配置对象。

| 键 | 类型 | 描述 |
|---|---|---|
| `auto` | `boolean` | 当为`false`时，paged.js在包加载时不会自动运行。驱动程序在注入包之前设置此项。 |

**`window.PagedPolyfill`** --- 主polyfill对象，在包加载后可用。

| 成员 | 描述 |
|---|---|
| `PagedPolyfill.preview()` | 运行完整排版管线。在vendor包中这是完全同步的。 |

### 处理程序系统

Paged.js提供了用于观察和拦截排版过程的插件API。处理程序是扩展`Paged.Handler`并通过`Paged.registerHandlers()`在`preview()`调用之前注册的类。

```js
class MyHandler extends Paged.Handler {
  constructor(chunker, polisher, caller) {
    super(chunker, polisher, caller);
  }
  afterPageLayout(pageElement, page, breakToken) {
    // fires after each page is fully laid out
  }
}
Paged.registerHandlers(MyHandler);
```

关键生命周期钩子（均可选覆盖）：

| 钩子 | 签名 | 触发时机 |
|---|---|---|
| `beforeParsed` | `(content)` | 在源文档被处理之前。 |
| `afterParsed` | `(parsed)` | 在源文档处理完成后、排版开始之前。 |
| `beforePageLayout` | `(page)` | 在新页面排版之前。 |
| `afterPageLayout` | `(pageElement, page, breakToken)` | 在每页完全排版后。`pageElement`是`.pagedjs_page` DOM节点；`breakToken`携带下一页开始的位置。 |
| `finalizePage` | `(pageElement, page, breakToken)` | 在页面最终确定后。调用时间略晚于`afterPageLayout`；`detach-pages.js`使用它从DOM中移除前一页。 |
| `afterRendered` | `(pages)` | 在所有页面渲染完成后、`page.pdf()`运行之前。`detach-pages.js`使用它按文档顺序恢复页面。 |

### DOM输出

`preview()`完成后，文档包含：

- 一个添加到`<body>`的`.pagedjs_pages`容器，包裹所有页面。
- 每个输出PDF页面对应一个`.pagedjs_page`。每个页面包含`.pagedjs_area > .pagedjs_content`，其中是切片后的章节内容。
- 从`@page`边距规则（`@top-right`、`@bottom-right`等）渲染的边距框，承载`string-set`跟踪的运行页眉和页脚页码。

`render-book.mjs`在`preview()`之后读取页面计数：

```js
document.querySelectorAll('.pagedjs_pages > .pagedjs_page').length
```

### 同步渲染

在上游paged.js中，排版过程每100个对象就让出一次浏览器事件循环。vendor包移除了这些让出门控，使`preview()`成为单一的同步调用。由于渲染器运行在无头Chromium内部，浏览器响应性无关紧要，因此这是安全的。

驱动程序中的`await page.evaluate(...)`包装是puppeteer对CDP往返的要求——并不表示`preview()`是异步的。CDP响应仅在Chromium内部的同步执行完全完成后才到达。

### CSS互操作

Paged.js通过XHR获取链接的样式表以提取`@page`规则。在`file://`下，Chrome会阻止此操作，除非在启动时向Chromium传递`--allow-file-access-from-files`。

paged.js处理的`docs/assets/css/print.css`中的关键`@page`规则：

| 规则 | 效果 |
|---|---|
| `@page { size: A4; margin: 22mm; }` | 基础页面尺寸和边距。 |
| `@page { @bottom-right { content: string(part-title) " - " var(--page-num); } }` | 页脚：部分名称和页码。 |
| `@page { @top-right { content: string(chapter-title); } }` | 运行页眉：当前章节标题。 |

`string(chapter-title)`由每个`<article class="page">`开头的隐藏`.header-string` `<span>`填充，其中`print.css`设置`string-set: chapter-title content(text)`。`var(--page-num)`是paged.js在排版期间写入每个`.pagedjs_page`元素的CSS自定义属性；`counter(page)`才是自然选择，但当`detach-pages.js`从DOM中移除已最终确定的页面时会断裂，因此改用自定义属性。

## 另见

- [Book配置](/official/Documentation/Book-Configuration) --- 控制`book.html`内容的`_book.yml`清单。
- [管线阶段](/official/Documentation/Pipeline-Stages) --- 阶段8的`pdf.mjs`和`book.mjs`接口约定。
- [tbdocs构建器](/official/Documentation/Builder) --- tbdocs管线中阶段8的设计理念。
- [pdf-lib补丁](/official/Documentation/Fixes-PDFLib) --- 每个`fast-*.mjs` shim的详细描述：上游问题、修复和机制。
- [Paged.js补丁](/official/Documentation/Fixes-PagedJS) --- 对`paged.browser.js`每个补丁的详细描述。

> AI生成