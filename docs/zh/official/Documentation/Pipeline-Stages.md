---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '80be37ff-1274-469e-8d18-2cff14700cc3'
  PropagateID: '80be37ff-1274-469e-8d18-2cff14700cc3'
  ReservedCode1: '85fd4246-d0dd-4825-9520-033616d18809'
  ReservedCode2: '85fd4246-d0dd-4825-9520-033616d18809'
---

---
title: "管线阶段"
parent: tbdocs Builder
nav_order: 1
permalink: /Documentation/Development/Pipeline-Stages
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2d4bc025-2b28-49c3-bc14-7294d62bf9f4'
  PropagateID: '2d4bc025-2b28-49c3-bc14-7294d62bf9f4'
  ReservedCode1: 'b8bf2da6-ff77-40f6-91e1-6aec70fac1e8'
  ReservedCode2: 'b8bf2da6-ff77-40f6-91e1-6aec70fac1e8'
---

# 管线阶段

`tbdocs`构建管线中每个阶段的完整接口参考。每节覆盖一个模块：其入口点签名、从前置阶段读取的数据、为后续阶段写入的数据，以及每个导出符号。

设计理念和叙述性描述见[tbdocs构建器](/official/Documentation/Builder)。要添加新阶段或markdown-it插件，请参阅[扩展构建器](/official/Documentation/Extending)。

## 数据模型

管线通过每个阶段传递两个可变数据结构。

### 页面对象（`pages[]`）

`discover`为每个具有可解析YAML frontmatter的`.md`或`.html`源文件创建一个页面对象。后续阶段添加新字段；没有阶段会删除或重命名早期阶段设置的字段。后续阶段可以安全地假设早期阶段的所有字段都已存在。

| 字段 | 添加者 | 类型 | 描述 |
|---|---|---|---|
| `srcPath` | 阶段1 | `string` | 源文件的绝对文件系统路径。 |
| `srcRel` | 阶段1 | `string` | 相对于`srcRoot`的POSIX风格路径，例如`Reference/Core/Dim.md`。 |
| `ext` | 阶段1 | `string` | 小写文件扩展名：`.md`或`.html`。 |
| `frontmatter` | 阶段1 | `object` | 已解析的YAML frontmatter。所有frontmatter键可在此访问（例如`frontmatter.title`、`frontmatter.parent`、`frontmatter.nav_order`）。 |
| `rawContent` | 阶段1 | `string` | frontmatter块之后的正文文本。 |
| `permalink` | 阶段1 | `string` | URL路径，取自`frontmatter.permalink`或从`srcRel`派生。 |
| `destPath` | 阶段1 | `string` | 输出根目录中的文件系统路径，例如`Reference/Core/Dim.html`。 |
| `layoutDefault` | 阶段1 | `boolean` | 当frontmatter没有显式`layout:`键时为`true`。 |
| `imageScope` | 阶段1 | `boolean` | 当`srcRel`包含`Images/`段时为`true`。阶段3使用此字段验证图片路径。 |
| `navPath` | 阶段2（nav） | `string` | 斜杠连接的导航链：`grand_parent / parent / title`。仅在有非空`title`的页面上设置。 |
| `navLevels` | 阶段2（nav） | `object` | 侧边栏树中的位置索引。阶段4使用此字段生成每页激活CSS。 |
| `breadcrumbs` | 阶段2（nav） | `Page[]` | 从根到当前页面的祖先链，最近者优先。 |
| `children` | 阶段2（nav） | `Page[]` | 导航顺序中的直接子页面。 |
| `seoTitle` | 阶段2（seo） | `string` | HTML剥离、空白折叠的页面标题，用于`<title>`和`og:title`。 |
| `seoFullTitle` | 阶段2（seo） | `string` | 非首页为`"<seoTitle> -- <siteTitle>"`；首页等于`seoTitle`。 |
| `seoCanonical` | 阶段2（seo） | `string` | 绝对规范URL（scheme + host + baseurl + permalink）。 |
| `seoIsHome` | 阶段2（seo） | `boolean` | 当页面的permalink是已知主页URL时为`true`（例如`/`）。 |
| `renderedContent` | 阶段3 | `string` | markdown-it生成的HTML正文。尚未包裹站点布局。 |
| `html` | 阶段4 | `string` | 完整的HTML文档，可直接写入磁盘。`layout: book-combined`页面无此字段，由阶段8管理。 |

### 站点对象（`site`）

在阶段2末尾构建并原样传递给每个后续阶段。

| 字段 | 类型 | 描述 |
|---|---|---|
| `config` | `object` | 已解析的`_config.yml`，已应用CLI覆盖（`--baseurl`、`--url`）。 |
| `navTree` | `object` | 由`nav.mjs`生成的顶级导航层次结构。 |
| `seoSiteTitle` | `string` | 从`config.title`渲染的站点标题。 |
| `seoLogoUrl` | `string` | 站点logo的绝对URL。 |
| `buildInfo` | `object` | 来自git的`{ commit: string, commitDate: string }`。两者在git仓库之外均回退到`"unknown"`。 |
| `bookData` | `object\|null` | 已解析的`_book.yml`，章节选择器已解析为`Page`引用。文件缺失时为`null`。参见[Book配置](/official/Documentation/Book-Configuration)。 |
| `data` | `object` | `_book.yml`加载为`{ book: … }`，缺失时为`{}`。 |
| `markdown` | `MarkdownIt` | 共享markdown-it实例，在阶段2设置期间构建一次，由阶段2的SEO处理和阶段3的渲染处理复用。 |

### 静态文件（`staticFiles[]`）

同样由阶段1生成。每个不是页面的文件——图片、字体、预构建的CSS/JS，以及任何没有frontmatter的`.md`/`.html`文件——都成为静态文件对象。此数组在阶段1之后不再增长。

| 字段 | 类型 | 描述 |
|---|---|---|
| `srcPath` | `string` | 绝对源路径。 |
| `srcRel` | `string` | 相对于`srcRoot`的POSIX路径。 |
| `destRel` | `string` | 输出根目录内的相对路径（当前与`srcRel`相同）。 |
| `size` | `number` | 发现时的文件大小（字节）。 |

---

## 预阶段：`mermaid.mjs`

在阶段1之前运行，以便任何新生成的`.svg`文件出现在阶段1的静态文件清单中。

**入口点**

```js
regenerateMermaid(srcRoot: string): Promise<{
  processed: number,
  regenerated: number,
  failed: number,
  setupSkipped?: true,
}>
```

枚举`<srcRoot>/assets/images/mmd/*.mmd`，比较修改时间与同路径下的`.svg`兄弟文件，并直接驱动`puppeteer` + `mermaid`包将每个过期的`.mmd`渲染为`.svg`。一次浏览器启动覆盖整个批次。当没有`.mmd`文件过期时，调用为空操作。

渲染在页面内`page.evaluate`中运行，通过请求拦截源（`https://tbdocs-mermaid.invalid`）动态导入`mermaid.esm.mjs`。拦截将请求映射回`node_modules/mermaid/dist/`；需要源技巧是因为Chromium在`file://`上加载时阻止了`mermaid.esm.mjs`触发的`import()`链。IIFE包（`mermaid.min.js`）可以避开该约束，但会内联+压缩经过补丁的dagre块（参见[Mermaid Dagre补丁](/official/Documentation/Fixes-Dagre)），因此带拦截的ESM路径是保持补丁生效的唯一方式。

两种失败模式区分：

- **设置失败**（`puppeteer` / `mermaid`未安装，Chrome运行时缺失）返回`{ ..., setupSkipped: true }`，警告一次，并保留磁盘上的SVG。编排器**不会**翻转退出码。
- **每图渲染失败**（损坏的`.mmd`，mermaid渲染抛出异常）不会中止批次——循环继续以便每个损坏的图在单次运行中暴露，每个失败图保留先前的SVG，编排器根据`failed`计数翻转`process.exitCode = 1`。

**读取：** `<srcRoot>/assets/images/mmd/*.mmd`及其`.svg`兄弟文件；`node_modules/mermaid/dist/**`（通过`import.meta.url`根的`createRequire`解析）。
**写入：** 过期`.mmd`源旁边的`.svg`文件。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `regenerateMermaid` | `(srcRoot) → Promise<{ processed, regenerated, failed, setupSkipped? }>` | 主入口点。 |

---

## 阶段1：`discover.mjs`

遍历源树并生成后续每个阶段消费的`pages`和`staticFiles`数组。

**入口点**

```js
discover(srcRoot: string, ignore: string[]): Promise<{ pages: Page[], staticFiles: StaticFile[] }>
```

对`srcRoot`运行单次`fast-glob`调用，使用从`_config.yml`读取并由编排器传入的`exclude:`列表。对于每个`.md`或`.html`文件，尝试解析YAML frontmatter。具有可解析frontmatter的文件成为页面对象；其他所有内容成为静态文件对象。页面按基本名排序（镜像Jekyll的读取器）；静态文件按相对路径排序。

**读取：** `srcRoot`下的源文件。
**写入（页面字段）：** `srcPath`、`srcRel`、`ext`、`frontmatter`、`rawContent`、`permalink`、`destPath`、`layoutDefault`、`imageScope`。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `discover` | `(srcRoot, ignore) → Promise<{ pages, staticFiles }>` | 主入口点。 |

---

## 阶段2：计算

阶段2按顺序运行多个模块（`captureBuildInfo`并行运行）。它们共同构建`site`对象并向每个页面添加导航、SEO和书籍章节数据。

### `nav.mjs`

从每个页面的`title`、`parent`和`grand_parent` frontmatter键计算导航树。阶段2中唯一可能中止构建的子步骤——它在孤立或模糊的`parent:`声明上抛出异常。

**入口点**

```js
computeNav(pages: Page[], config: object): { navTree: object }
```

按顺序运行六个子步骤：导航路径、导航完整性检查、共享状态构建（`byTitle` / `byParentTitle`映射、`topLevel`列表、`orderedChildren`映射）、导航树、导航级别、面包屑、子页面。返回站点对象的导航树；直接在每个页面对象上写入导航相关字段。

**读取：** `frontmatter.title`、`frontmatter.parent`、`frontmatter.grand_parent`、`frontmatter.nav_order`、`frontmatter.nav_exclude`、`page.permalink`、`config.nav_sort`、`config.case_insensitive`。
**写入（页面字段）：** `navPath`、`navLevels`、`breadcrumbs`、`children`。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `computeNav` | `(pages, config) → { navTree }` | 主入口点。 |

---

### `seo.mjs`

为每个页面和整个站点预计算SEO元数据。

**入口点**

```js
precomputeSeo(pages: Page[], config: object, markdown: MarkdownIt): { seoSiteTitle: string, seoLogoUrl: string }
```

对于每个页面，将标题通过`renderTitle`（markdown-it渲染 → 剥离HTML → 折叠空白 → 转义HTML实体）并写入四个SEO字段到页面对象。返回`seoSiteTitle`和`seoLogoUrl`给站点对象。要求共享的markdown-it实例已通过`createMarkdownIt`构建。

**读取：** `frontmatter.title`、`frontmatter.permalink`、`page.permalink`、`config.title`、`config.url`、`config.baseurl`、`config.logo`、`site.markdown`。
**写入（页面字段）：** `seoTitle`、`seoFullTitle`、`seoCanonical`、`seoIsHome`。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `precomputeSeo` | `(pages, config, markdown) → { seoSiteTitle, seoLogoUrl }` | 主入口点。 |
| `renderTitle` | `(text: string, markdown: MarkdownIt) → string` | 将一个标题字符串通过完整的markdown-it + 剥离HTML管线。 |
| `stripHtml` | `(s: string) → string` | 从字符串中剥离所有HTML标签。为`search.mjs`重新导出。 |
| `absoluteUrl` | `(input: string, config: object) → string` | 使用`config.url`和`config.baseurl`将根相对路径解析为绝对URL。为`sitemap.mjs`和`redirects.mjs`重新导出。 |
| `relativeUrl` | `(input: string, config: object) → string` | 将`config.baseurl`前缀添加到根相对路径。 |

---

### `book.mjs` --- 阶段2部分

将`_book.yml`章节选择器解析为具体的`Page`数组，使阶段8无需再进行页面查找。

**阶段2入口点**

```js
resolveBookChapters(bookData: object | null, pages: Page[]): void
```

遍历`bookData.front_matter`和`bookData.parts`（及其`chapters`子数组）中的每个条目，将每个选择器解析为`Page[]`，并将结果存储为`entry._chapters`。预解析`landing_page`和`foreword_page` URL为其`Page`引用。就地操作；不返回任何值。选择器模式参见[Book配置](/official/Documentation/Book-Configuration)。

**读取：** `bookData`（由`data.mjs`加载）、`page.permalink`、`page.navPath`。
**写入：** 每个`bookData`条目上的`entry._chapters`（非页面字段）。在声明了`landing_page:` / `foreword_page:`的条目上设置`_landing`和`_foreword`引用。

阶段8的`assembleBook`位于同一模块中；参见下面的[阶段8](#phase-8-pdfmjs--bookmjs)。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `loadBookData` | `(srcRoot: string) → Promise<object\|null>` | 向后兼容包装器，直接加载`_book.yml`。优先使用`data.mjs`。 |
| `resolveBookChapters` | `(bookData, pages) → void` | 阶段2入口点。 |
| `sortByNavOrder` | `(input: Page[]) → Page[]` | 对页面数组排序：索引页（URL以`/`结尾）优先，然后按`nav_order`升序并以标题作为决胜，然后按标题字母顺序。 |
| `chapterAnchorFromUrl` | `(url: string, fallbackTitle?: string) → string` | 将页面URL转换为用于书内交叉引用的`ch-…`锚点slug。 |
| `bookChapterTransform` | `(body: string, baseurl: string, headingShiftN: number, chapterAnchor: string) → string` | 对渲染后的HTML字符串应用所有每章节正文转换：baseurl前缀剥离、`<details>` / `<summary>`解包、pagedjs分页的空白包裹、标题级别偏移和章节锚点前缀添加。 |
| `assembleBook` | `(site: object, pages: Page[]) → string` | 阶段8入口点。返回已组装的`book.html`字符串。 |
| `rewriteBookHrefs` | `(html: string, site: object, pages: Page[]) → string` | 将书内绝对`href="/X"`引用重写为页内`href="#ch-X"`片段锚点。 |

---

### `build-info.mjs`

为PDF标题页捕获git提交哈希和日期。

**入口点**

```js
captureBuildInfo(): Promise<{ commit: string, commitDate: string }>
```

发起两个并行的`git` shell调用（`rev-parse --short HEAD`和`log -1 --format=%cs`）。在任何失败时回退到`"unknown"`，使构建在git仓库之外永不中止。编排器在阶段1之后立即启动此promise，使shell调用与CPU密集的导航计算重叠。

**读取：** 本地git仓库状态。
**写入：** 不向页面写入（结果直接返回给编排器）。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `captureBuildInfo` | `() → Promise<{ commit, commitDate }>` | 主入口点。 |

---

### `data.mjs`

从`srcRoot`加载`_book.yml`。

**入口点**

```js
loadData(srcRoot: string): Promise<object>
```

返回`{ book: <parsed YAML> }`，文件不存在时返回`{}`。编排器将结果存储在`site.data`，并将`site.data.book`暴露为`site.bookData`。

**读取：** `<srcRoot>/_book.yml`。
**写入：** 不向页面写入（结果直接返回）。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `loadData` | `(srcRoot) → Promise<object>` | 主入口点。 |

---

### 阶段2设置 --- 共享markdown-it实例

在阶段2完成之前，编排器构建共享的markdown-it实例，阶段2的SEO处理和阶段3的渲染处理都复用此实例。按顺序调用`render.mjs`中的三个函数：

```js
const highlighter = await initHighlighter();
const linkTables  = buildLinkTables(pages);
const markdown    = createMarkdownIt({ highlighter, linkTables, baseurl, staticFiles });
```

这些函数的文档在下面的[阶段3](#phase-3-rendermjs)中，因为它们定义在`render.mjs`中。这里在阶段2期间调用它们仅为了让SEO处理能共享相同配置的管线。

---

## 阶段3：`render.mjs`

通过markdown-it将每个页面的`rawContent`渲染为HTML。

**入口点**

```js
renderPhase(pages: Page[], site: object, staticFiles?: StaticFile[]): Promise<void>
```

使用共享的`site.markdown`实例将每个页面的`rawContent`渲染为`page.renderedContent`。跳过`layout: book-combined`的页面（阶段8管理这些）。

**读取：** `page.rawContent`、`page.frontmatter`、`page.imageScope`、`site.markdown`、`site.config.baseurl`、`staticFiles`（用于图片路径验证）。
**写入（页面字段）：** `renderedContent`。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `renderPhase` | `(pages, site, staticFiles?) → Promise<void>` | 主入口点。 |
| `createMarkdownIt` | `({ highlighter, linkTables, baseurl, staticFiles }) → MarkdownIt` | 配置并返回一个已应用所有插件和渲染规则覆盖的markdown-it实例。如何添加插件参见[扩展构建器](/official/Documentation/Extending)。 |
| `initHighlighter` | `() → Promise<{ render, themeCss }>` | 使用捆绑的twinBASIC语法初始化Shiki（内部委托给`highlight.mjs`）。`render(code, lang)`返回高亮HTML；`themeCss`是生成的`tb-highlight.css`字符串，未加载主题时为`null`。 |
| `buildLinkTables` | `(pages: Page[]) → { byPath, byUrl, byRedirect }` | 构建以`srcRel`、`permalink`和`redirect_from`条目为键的查找表。供相对链接插件在渲染时将源内`[X](Y.md)`链接解析为绝对URL使用。 |
| `kramdownSlug` | `(text: string) → string` | 将标题文本转换为kramdown兼容的锚点slug：小写、剥离非单词字符、用`-1`、`-2`等去重。 |
| `rewriteAdmonitions` | `(src: string) → string` | 预渲染文本遍：将GFM `> [!NOTE]` / `[!IMPORTANT]` / `[!WARNING]` / `[!TIP]` / `[!CAUTION]`块转换为`markdown-alert markdown-alert-<type>`类结构。 |

---

## 阶段4：`template.mjs`和`compress.mjs`

阶段4将每个页面的`renderedContent`包裹在完整站点布局中，然后压缩生成的HTML。

### `template.mjs`

**入口点**

```js
templatePhase(pages: Page[], site: object): Promise<void>
```

预计算每次构建的静态侧边栏HTML一次，然后通过直接JS模板字面量拼接（无模板引擎）将每个页面的`renderedContent`包裹在just-the-docs布局中。在存储结果之前对每个页面的输出调用`compressHtml`。跳过`layout: book-combined`页面。

**读取：** 阶段1--3设置的所有页面字段、所有`site`字段。
**写入（页面字段）：** `html`。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `templatePhase` | `(pages, site) -> Promise<void>` | 主入口点。 |
| `navActivationCss` | `(page: Page) → string` | 从`page.navLevels`生成每页的`<style id="jtd-nav-activation">`块。阶段12的开发服务器在修补SSE重载脚本时调用此函数。 |
| `injectAnchorHeadings` | `(html: string) → string` | 在每个有`id`属性的标题旁添加`<a class="anchor-heading">`。 |

---

### `compress.mjs`

`templatePhase`内部调用`compressHtml`。该函数也为独立使用而导出。

**入口点**

```js
compressHtml(html: string): string
```

按`<pre>…</pre>`块分割，在非`<pre>`段中折叠ASCII空白为单个空格并修剪。使用显式字符类`[ \t\n\r\f\v]+`而非`\s`以保留`&nbsp;`缩进中的不间断空格。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `compressHtml` | `(html) → string` | 压缩`<pre>`块外的空白。 |

---

## 阶段5：`write.mjs`

将内存中的页面集和静态文件实体化到磁盘。

**入口点**

```js
writePhase(
  pages: Page[],
  staticFiles: StaticFile[],
  {
    destRoot: string,
    dryRun?: boolean,
    generatedAssets?: { rel: string, content: string }[],
    baseurl?: string
  }
): Promise<{ pages: { written, skipped }, theme: { copied }, staticFiles: { copied } }>
```

清除然后重新创建`destRoot`，然后并行运行三个操作：将每个`page.html`写入其`destPath`；将vendor的just-the-docs JS从`builder/vendor/just-the-docs/assets/`复制到`<destRoot>/assets/`；复制每个`staticFiles[]`条目（包括现在位于`docs/assets/`下的项目自有主题文件）。CSS `url()` baseurl重写运行在两个复制路径和生成的CSS资产上，使根绝对`url("/path")`引用在非空baseurl下正确解析。并行批次之后，`writeGeneratedAssets`顺序写入`generatedAssets[]`（SCSS编译的CSS和高亮主题CSS），使它们在相对路径冲突时获胜。跳过`page.html`为`undefined`的页面。

**读取：** `page.html`、`page.destPath`、`staticFile.srcPath`、`staticFile.destRel`。
**写入：** `<destRoot>/**`（在线树）。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `writePhase` | `(pages, staticFiles, opts) → Promise<stats>` | 主入口点。 |
| `WRITE_LIMIT` | `64` | `runLimited`的并发上限。阶段6、7和8将此值传递给自己的`runLimited`调用以实现一致的I/O节流。 |
| `isUnderProject` | `(destRoot: string) → boolean` | 仅当`destRoot`是项目根目录的后代时返回`true`。阶段7和8用作防止破坏性`--dest`值的守卫。 |
| `mkdirRec` | `(dir: string) → Promise<void>` | 带有进行中去重缓存的递归`mkdir`。由阶段6、7和8共享。 |
| `runLimited` | `<T>(items: T[], limit: number, fn: (T) → Promise<any>) → Promise<void>` | 以最多`limit`个并发操作运行每个项上的`fn`。 |
| `writeFileMkdirp` | `(filePath: string, content: string\|Buffer) → Promise<void>` | 将`content`写入`filePath`，按需创建父目录。 |
| `safeWrite` | `(dest: string, fn: () → Promise<any>) → Promise<void>` | 包装写入回调，在回调抛出时在错误消息中包含`dest`重新抛出。 |

---

## 阶段6：辅助模块

阶段6并发运行三个写入器。都不写入页面对象；都写入`<destRoot>/`。

### `redirects.mjs`

**入口点**

```js
writeRedirects(pages: Page[], site: object, destRoot: string): Promise<{ written: number }>
```

对于每个有`redirect_from:` frontmatter条目的页面，为每个源URL写入一个HTML存根。每个存根使用`<script>location=…</script>`、`<meta http-equiv="refresh">`、`<link rel="canonical">`、`<meta name="robots" content="noindex">`和可见的`<a>`回退，以支持无脚本/无meta-refresh环境。

**读取：** `page.frontmatter.redirect_from`、`page.permalink`、`site.config`。
**写入：** `<destRoot>/`下的重定向存根HTML文件。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `writeRedirects` | `(pages, site, destRoot) → Promise<{ written }>` | 主入口点。 |
| `deriveRedirectStubs` | `(pages, site) -> Array<{ from, to, destPath }>` | 存根列表的纯推导，不写入磁盘。导出以便`offline.mjs`可以在不重新运行推导的情况下读取列表。 |

---

### `sitemap.mjs`

**入口点**

```js
writeSitemap(pages: Page[], site: object, destRoot: string): Promise<{ entries: number }>
```

按jekyll-sitemap规则过滤页面（删除`sitemap: false`和`/404.html`），按绝对URL字母顺序排序以实现字节相同的重复运行，并输出`sitemap.xml`。同时写入带`Sitemap:`引用的`robots.txt`。

**读取：** `page.permalink`、`page.frontmatter.sitemap`、`site.config`。
**写入：** `<destRoot>/sitemap.xml`、`<destRoot>/robots.txt`。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `writeSitemap` | `(pages, site, destRoot) → Promise<{ entries }>` | 主入口点。 |
| `deriveSitemapUrls` | `(pages, site) -> string[]` | 返回将出现在站点地图中的已排序绝对URL列表，不写入磁盘。 |
| `extractSitemapUrls` | `(xml: string) → string[]` | 解析现有`sitemap.xml`字符串并提取其`<loc>`值。用于比较两次构建。 |
| `renderRobotsTxt` | `(config: object) → string` | 生成`robots.txt`内容字符串。 |

---

### `search.mjs`

**入口点**

```js
writeSearchData(pages: Page[], site: object, destRoot: string): Promise<{ entries: number }>
```

将每个有标题且非`search_exclude`的页面按标题分割，为每个标题限定段发出一个搜索索引条目，并写入Lunr兼容的JSON索引。

**读取：** `page.renderedContent`、`page.frontmatter.title`、`page.frontmatter.search_exclude`、`page.permalink`、`page.seoTitle`、`site.config`。
**写入：** `<destRoot>/assets/js/search-data.json`。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `writeSearchData` | `(pages, site, destRoot) → Promise<{ entries }>` | 主入口点。 |
| `deriveSearchEntries` | `(pages, site) -> object[]` | 返回搜索索引条目数组，不写入磁盘。 |

---

## 阶段7：`offline.mjs`

将`<destRoot>/`镜像到`<destRoot>-offline/`，将每个URL重写为页面相对路径，使树可在`file://`下打开。

**入口点**

```js
writeOffline(
  pages: Page[],
  staticFiles: StaticFile[],
  site: object,
  destRoot: string,
  { auxStats?: object, profileOffline?: boolean }
): Promise<{ html, css, redirects, statics, assets, excluded, unresolved }>
```

读取阶段5和6写入的每个文件，将绝对URL重写为相对路径，并写入`<destRoot>-offline/`。通过AST（acorn）修补`just-the-docs.js`，用离线兼容的实现替换`navLink`和`initSearch`。写入`search-data.js`，将搜索索引包装为`window.SEARCH_DATA`赋值，使离线搜索在`file://`下工作（浏览器在那里阻止`XMLHttpRequest`）。`offline_exclude`模式同等应用于页面、静态文件和主题资产；`search-data.json`列在`offline_exclude`中，在离线树中不存在——只有`.js`包装器存在。

**读取：** `<destRoot>`（在线树）下的所有文件、`auxStats.redirects`（来自阶段6的重定向存根列表）。
**写入：** 所有文件到`<destRoot>-offline/`。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `writeOffline` | `(pages, staticFiles, site, destRoot, opts) → Promise<stats>` | 主入口点。 |
| `buildOfflineState` | `(pages, staticFiles, site, destRoot, { stubs? }) → Promise<OfflineState>` | 构造所有离线推导函数使用的状态对象（站点路径集、解析缓存、每目录导航缓存）。 |
| `deriveOfflinePage` | `(page: Page, state: OfflineState) → string` | 为离线使用重写一个页面的HTML。 |
| `deriveOfflineRedirect` | `(stub, state: OfflineState) → string` | 为离线使用重写一个重定向存根的HTML。 |
| `deriveOfflineCss` | `(cssIn: string, themeRel: string, state: OfflineState) → string` | 将CSS文件中的`url()`引用重写为页面相对路径。 |
| `deriveOfflineJtdJs` | `(src: string) → string` | 通过AST修补`just-the-docs.js`：用离线兼容的实现替换`navLink`和`initSearch`。构建时的解析失败是重新提取产生不可读源的信号。 |
| `deriveOfflineSearchDataJs` | `(jsonBytes: Buffer) → string` | 将`search-data.json`包装为`window.SEARCH_DATA = …`并进行压缩。 |

---

## 阶段8：`pdf.mjs` + `book.mjs`

生成`render-book.mjs`渲染为PDF的稀疏`<destRoot>-pdf/`树。

**入口点**

```js
writePdf(
  pages: Page[],
  staticFiles: StaticFile[],
  site: object,
  destRoot: string,
  { tolerateMissingImages?: boolean }
): Promise<{ bookBytes, css, images, missing }>
```

调用`book.mjs`的`assembleBook(site, pages)`生成`book.html`，复制`print.css`和`tb-highlight.css`，并收集`book.html`中引用的每张图片。默认将缺失图片报告为构建错误；`--tolerate-missing-images`将其降级为警告。

**读取：** `site.bookData`（章节选择器已由阶段2的`resolveBookChapters`解析）、所有页面的`page.html`、`staticFiles`。
**写入：** `<destRoot>-pdf/book.html`、`<destRoot>-pdf/*.css`、`<destRoot>-pdf/`中的图片副本。

**`book.mjs`阶段8入口点**

```js
assembleBook(site: object, pages: Page[]): string
```

遍历`site.bookData`，发出标题页，然后按顺序遍历`front_matter`和`parts`。对于每个章节，调用`bookChapterTransform`应用五种正文转换。然后运行`rewriteBookHrefs`将书内绝对href转换为`#ch-…`片段锚点。返回完整的`book.html` HTML字符串。

**所有导出（`pdf.mjs`）**

| 符号 | 签名 | 描述 |
|---|---|---|
| `writePdf` | `(pages, staticFiles, site, destRoot, opts) → Promise<stats>` | 主入口点。 |
| `deriveBookOutputs` | `(pages, site) -> { bookHtml: string, images: string[] }` | 纯计算版本：返回已组装的HTML和图片路径列表，不写入磁盘。 |
| `extractImagePaths` | `(html: string) → string[]` | 从HTML字符串中提取所有图片`src` / `href`路径。 |

`book.mjs`的导出参见上面的[阶段2 `book.mjs`](#bookmjs--phase-2-half)。

---

## 阶段12：`serve.mjs`

长期运行的开发服务器，通过`tbdocs --serve`激活。这是一次性构建的独立生命周期；跳过阶段7（离线）和阶段8（PDF）。

**入口点**

```js
runServe(opts: BuildOpts): Promise<void>
```

运行初始一次性在线构建（预阶段、阶段1--5），然后在`opts.port`（默认`4000`）上启动HTTP服务器，递归源树监视器和`/_tbdocs/reload`的SSE端点。300毫秒防抖在文件更改时触发重建。重建成功后，向每个连接的浏览器标签页发送重载事件。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `runServe` | `(opts: BuildOpts) → Promise<void>` | 主入口点。`BuildOpts`与`runBuild`接受的对象相同。 |

---

## 共享辅助模块

### `paths.mjs`

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `permalinkToDestPath` | `(permalink: string) → string` | 将permalink URL转换为目标文件路径。`/` → `index.html`；`/foo/` → `foo/index.html`；带`.html`、`.htm`或`.xml`扩展名的路径保持不变；所有其他路径追加`.html`。由阶段1和阶段6使用。 |

---

### `highlight-theme.mjs`

由`highlight.mjs`中的`initHighlighter`内部调用；通常不被其他阶段直接调用。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `loadHighlightTheme` | `(themesDir?: string) → Promise<{ scopeToClass, css }>` | 读取`Light.theme`和`Dark.theme`，按其(light-props, dark-props)对将TextMate作用域分组，为每个唯一对分配一个CSS类，并返回作用域到类的查找和生成的`tb-highlight.css`内容。 |

---

## `tbdocs.mjs` --- 编排器

编排器排序所有阶段并组装`site`对象。它本身不是一个阶段。

**所有导出**

| 符号 | 签名 | 描述 |
|---|---|---|
| `runBuild` | `(opts: BuildOpts) → Promise<{ pages, staticFiles, site, destRoot }>` | 运行完整管线（预阶段、阶段1--8）。返回最终状态以便外部线束可以链接额外工作。 |
| `makeTimer` | `() → { lap(label: string): void, summary(): string }` | 轻量计时器。`lap(label)`记录自上次计时以来的毫秒数；`summary()`以`"label=Nms …"`字符串返回所有计时。 |

`BuildOpts`字段：

| 字段 | 默认值 | 描述 |
|---|---|---|
| `src` | `"docs"` | 源根目录，相对于`cwd`。 |
| `dest` | `null` | 目标根目录。默认为`<src>/_site`。 |
| `baseurl` | `null` | 覆盖`config.baseurl`。 |
| `url` | `null` | 覆盖`config.url`。 |
| `dryRun` | `false` | 跳过所有文件系统写入。 |
| `skipOffline` | `null` | 跳过阶段7。`null`从`_config.yml`读取`also_build_offline`。 |
| `skipPdf` | `null` | 跳过阶段8。`null`从`_config.yml`读取`also_build_pdf`。 |
| `tolerateMissingImages` | `false` | 在阶段8中将缺失图片错误降级为警告。 |
| `profileOffline` | `false` | 在控制台输出中发出阶段7的每子步骤计时。 |
| `serve` | `false` | 启动阶段12而非一次性构建。 |
| `port` | `4000` | 阶段12的HTTP端口。 |

## 另见

- [tbdocs构建器](/official/Documentation/Builder) --- 架构概述和叙述性设计理念。
- [Book配置](/official/Documentation/Book-Configuration) --- `_book.yml`键参考。
- [扩展构建器](/official/Documentation/Extending) --- 添加新管线阶段或markdown-it插件的教程。

> AI生成