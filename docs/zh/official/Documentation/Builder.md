---
title: "tbdocs 构建器"
parent: Documentation Development
nav_order: 4
permalink: /Documentation/Development/Builder
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "e72f6c74-68e0-4642-be3d-7b7308d48f61"
  PropagateID: "e72f6c74-68e0-4642-be3d-7b7308d48f61"
  ReservedCode1: "1c3ea464-6010-4131-aa40-c0ff8993cfae"
  ReservedCode2: "1c3ea464-6010-4131-aa40-c0ff8993cfae"
---

# tbdocs 构建器

位于[`builder/`](https://github.com/twinbasic/documentation/tree/main/builder)的`tbdocs`静态站点生成器的详细技术文档。在修改构建管线本身时阅读此页；仅需要构建、预览和发布文档的内容贡献者不需要了解这些内容。

模块级文档与代码放在一起：

- [`builder/README.md`](https://github.com/twinbasic/documentation/blob/main/builder/README.md) --- 快速入门和每模块映射。
- [`builder/PLAN.md`](https://github.com/twinbasic/documentation/blob/main/builder/PLAN.md) --- 架构概述和完整的十一阶段管线。
- [`builder/PLAN-1.md`](https://github.com/twinbasic/documentation/blob/main/builder/PLAN-1.md)到[`PLAN-11.md`](https://github.com/twinbasic/documentation/blob/main/builder/PLAN-11.md) --- 每阶段规范：输入、输出、边缘情况、验收检查。
- [`builder/FUTURE-WORK.md`](https://github.com/twinbasic/documentation/blob/main/builder/FUTURE-WORK.md) --- 待办事项，按分歧调查/延迟增强分组。

子页面：

- [管线阶段](/official/Documentation/Pipeline-Stages) --- 完整接口引用：函数签名、每阶段读/写、每个导出符号。
- [Book配置](/official/Documentation/Book-Configuration) --- PDF章节清单的`_book.yml`键参考。
- [扩展构建器](/official/Documentation/Extending) --- 添加新管线阶段或markdown-it插件的教程。

## tbdocs存在的原因

站点最初由**Jekyll** + **just-the-docs**主题构建。十一阶段移植到Node.js + 少量依赖集产生了与Jekyll字节等效的输出（减去有文档记录的允许列表）。收益是端到端构建时间（约11秒→约3秒）和25倍更快的GENERATE阶段——十个Ruby插件总计约1,460行折叠为四个约650行的JS模块。Ruby工具链（Gemfile、`_plugins/`、`_includes/`、`_layouts/`、`_sass/`）在切换后保留在仓库中一个发布周期作为参考，然后被删除——项目不再以任何形式依赖Ruby。

## 架构

一个入口点，约17个生产模块。内容模型是固定的（markdown + YAML frontmatter），输出结构是固定的（三个树），模板是一个带变体的布局。

| 文件                                                                                                      | 角色                                                                                                      |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`tbdocs.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/tbdocs.mjs)                   | 入口点。解析CLI标志，分发到`runBuild`或`runServe`，打印每阶段计时。                                       |
| [`serve.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/serve.mjs)                     | 阶段12开发服务器：HTTP静态文件服务器 + 递归监视器 + SSE实时重载。                                         |
| [`discover.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/discover.mjs)               | 阶段1。遍历`docs/`，解析frontmatter，将每个文件分类为页面或静态文件。                                     |
| [`nav.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/nav.mjs)                         | 阶段2导航子步骤：导航路径、完整性检查、导航树、导航级别、面包屑、子页面。                                 |
| [`seo.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/seo.mjs)                         | 阶段2 SEO预计算：每页标题/规范URL/og:标签。                                                               |
| [`book.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/book.mjs)                       | 阶段2书籍章节解析 + 阶段8 book.html组装。                                                                 |
| [`build-info.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/build-info.mjs)           | 阶段2 git提交哈希 + 提交日期捕获。                                                                        |
| [`data.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/data.mjs)                       | 阶段2 `_book.yml`加载器。                                                                                 |
| [`mermaid.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/mermaid.mjs)                 | 阶段11（B1）预处理：`.mmd` → `.svg`重新生成。                                                             |
| [`scss.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/scss.mjs)                       | 阶段11（B3）预处理：通过Dart Sass编译`docs/assets/css/just-the-docs-combined.scss`为just-the-docs样式表。 |
| [`render.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/render.mjs)                   | 阶段3 markdown-it管线：GFM admonitions、kramdown风格属性、deflist、脚注、标题ID、TOC、相对链接重写。      |
| [`highlight.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/highlight.mjs)             | 阶段3 Shiki引导加twinBASIC语法。发出just-the-docs包装结构。                                               |
| [`highlight-theme.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/highlight-theme.mjs) | 阶段11（B2）主题加载器：读取`themes/*.theme`，派生调色板，发出`tb-highlight.css`和作用域到类的查找。      |
| [`template.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/template.mjs)               | 阶段4布局。用直接JS字符串拼接替代约13个Liquid include。                                                   |
| [`compress.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/compress.mjs)               | 阶段4 HTML空白压缩。                                                                                      |
| [`write.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/write.mjs)                     | 阶段5在线树写入器。                                                                                       |
| [`paths.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/paths.mjs)                     | 共享的permalink到目标路径辅助模块。                                                                       |
| [`redirects.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/redirects.mjs)             | 阶段6重定向存根生成器。                                                                                   |
| [`sitemap.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/sitemap.mjs)                 | 阶段6 sitemap.xml + robots.txt。                                                                          |
| [`search.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/search.mjs)                   | 阶段6 Lunr索引发射器（`search-data.json`）。                                                              |
| [`offline.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/offline.mjs)                 | 阶段7离线树：URL重写、`file://`浏览的JS修补。                                                             |
| [`pdf.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/pdf.mjs)                         | 阶段8稀疏PDF源树。                                                                                        |

`builder/`位于仓库根目录（不在`docs/`下），因此它不属于旧版渲染器读取的Jekyll源树。`build.bat`路径写入`docs/_site/`、`docs/_site-offline/`和`docs/_site-pdf/`——与Jekyll使用的目标相同，因此部署工具保持不变。`serve.bat`路径写入单独的`docs/_serve/`树，这样一次性`build.bat`运行（例如刷新PDF）永远不会覆盖运行中的服务会话输出。

## 构建阶段

| 阶段 | 模块                                                               | 任务                                                  | 时间        |
| ---- | ------------------------------------------------------------------ | ----------------------------------------------------- | ----------- |
| 1    | `discover.mjs`                                                     | 读取带frontmatter的`.md` / `.html`；枚举静态文件      | 约120毫秒   |
| 2    | `nav.mjs` / `seo.mjs` / `book.mjs` / `build-info.mjs` / `data.mjs` | 计算导航树、SEO、书籍章节、git提交信息、`_book.yml`   | 约60毫秒    |
| 3    | `render.mjs` + `highlight.mjs`                                     | Markdown → HTML正文                                   | 约1-2秒     |
| 4    | `template.mjs` + `compress.mjs`                                    | 包裹布局、锚点标题、压缩空白                          | 约200毫秒   |
| 5    | `write.mjs`                                                        | 写入`_site/`                                          | 约400毫秒   |
| 6    | `redirects.mjs` / `sitemap.mjs` / `search.mjs`                     | 重定向存根、sitemap.xml、search-data.json、robots.txt | 约100毫秒   |
| 7    | `offline.mjs`                                                      | URL重写副本到`_site-offline/`                         | 约1,000毫秒 |
| 8    | `pdf.mjs` + `book.mjs`                                             | 稀疏`_site-pdf/`树（book.html + CSS + 图片）          | 约150毫秒   |

阶段9、10和11是历史性的：阶段9是无输出的QoL步骤，阶段10退役了Jekyll，阶段11引入了改变输出的奇偶校验更新。都不增加运行时步骤。阶段12添加了`--serve`开发服务器模式（独立的生命周期，非构建阶段；写入`docs/_serve/`并默认跳过离线+PDF传递，使重建循环保持在一秒以内）。每阶段的`PLAN-N.md`文件保留了实现历史。

## 依赖

仓库根目录的单个`package.json`包含所有内容——静态站点生成器的依赖、PDF渲染器的依赖，以及两者都消费的少数包。没有每`builder/`的`package.json`（早期拆分已合并；之前的安排需要CI中运行`npm ci --prefix builder`，最终通过`@mermaid-js/mermaid-cli`拖入了重复的puppeteer-core）：

```json
{
  "devDependencies": {
    "acorn": "^8.0",
    "acorn-walk": "^8.0",
    "fast-glob": "^3.3",
    "gray-matter": "^4.0",
    "html-entities": "^2.6.0",
    "htmlparser2": "^12.0.0",
    "js-yaml": "^4.1",
    "markdown-it": "^14.0",
    "markdown-it-attrs": "^4.3",
    "markdown-it-deflist": "^3.0",
    "markdown-it-footnote": "^4.0",
    "mermaid": "11.15.0",
    "pdf-lib": "1.17.1",
    "puppeteer": "25.0.4",
    "sass": "^1.0",
    "shiki": "^1.0"
  },
  "scripts": {
    "postinstall": "node builder/scripts/patch-dagre.mjs"
  }
}
```

没有模板引擎，没有框架，没有打包器。`acorn` + `acorn-walk`解析上游`just-the-docs.js`，使离线修补器可以定位AST而非正则匹配字符串；`markdown-it-{attrs,deflist,footnote}`覆盖了旧版渲染器支持的kramdown扩展；`shiki`做语法高亮；`lunr`驱动搜索索引。`mermaid`和`puppeteer`共同驱动`.mmd` → `.svg`预阶段（每批次一个无头Chromium，取代旧的每图`npx mmdc`分叉）；`puppeteer`与PDF渲染器（`book/render-book.mjs`）共享。`sass`（Dart Sass）在每次构建时将vendor的just-the-docs SCSS加上自定义部分编译为站点样式表，取代Jekyll-Sass预编译步骤。`pdf-lib` + `html-entities` + `htmlparser2`是PDF渲染器自身的工具链。`postinstall`运行`builder/scripts/patch-dagre.mjs`，该脚本重写mermaid捆绑的dagre适配器——参见[Mermaid Dagre补丁](/official/Documentation/Fixes-Dagre)。

`mermaid`是**精确锁定**的（`"11.15.0"`，而非`"^11.15.0"`）。dagre补丁针对一个块文件名，其哈希组件（`dagre-ZXKKJJHT.mjs`）在每次mermaid发布时重新生成，因此浮动范围可能在透明补丁升级时破坏postinstall。

## 逐模块深入

每小节覆盖一个模块的设计理念和实现细节。函数签名、数据约定和每个模块的完整导出表参见[管线阶段](/official/Documentation/Pipeline-Stages)。模块按管线顺序呈现。

### [tbdocs.mjs](https://github.com/twinbasic/documentation/blob/main/builder/tbdocs.mjs) --- 入口点和编排器

`_config.yml`首先加载，使其`exclude:`列表可以传递给`discover()`。`captureBuildInfo()`在配置加载后立即作为promise启动，使两个`git` shell调用与I/O密集的发现和随后的CPU密集导航计算重叠；结果仅在其他阶段2子步骤完成后才被`await`。共享的markdown-it实例通过`initHighlighter` + `createMarkdownIt`构建一次并存储在`site.markdown`上，使阶段2的SEO预计算和阶段3的正文渲染器使用相同配置的管线——标题通过与页面正文文本相同的破折号、引号和脚注剥离规则。

末尾的漂移守卫（`if (pages.length < 836)`）在发现丢失页面时设置`process.exitCode = 1`——静默丢弃内容的发现规则回归表现为非零退出码，即使构建本身"成功"了。

### [serve.mjs](https://github.com/twinbasic/documentation/blob/main/builder/serve.mjs) --- 阶段12开发服务器

300毫秒防抖将快速文件变更合并为单次重建。轻量注入中间件在HTTP响应时将SSE客户端脚本拼接在`</body>`之前，使磁盘上的`_serve/`与`runBuild --dest docs/_serve`在服务模式之外产生的字节相同。

`shouldRebuild`沿三个轴过滤监视器事件：前缀（`_site/`、`_site-offline/`、`_site-pdf/`、`_serve/`、`_pdf/`、`node_modules/`、`.git/`）、基本名模式（点文件、编辑器交换文件、vim写入的`4913`哨兵文件），以及特定`assets/images/mmd/*.svg`路径。最后一点值得说明：这些SVG是由mermaid预阶段在`srcRoot`下生成的，因此没有此过滤器，每次`.mmd`编辑会触发监视器两次（一次在`.mmd`保存，一次在重建期间的`.svg`写入），排队的第二次重建是无操作的，会在约3秒后触发冗余的浏览器重载。过滤器将`.mmd`视为真相来源，`.svg`视为构建产物，与`_site/`写入已被排除的方式一致。

### [discover.mjs](https://github.com/twinbasic/documentation/blob/main/builder/discover.mjs) --- 阶段1

`_config.yml`中的`exclude:`列表作为`ignore`参数传入并直接转发给`fast-glob`。它跳过每个下划线前缀的文件和目录（`_config.yml`、`_book.yml`、`_site/`、`_site-offline/`、`_site-pdf/`、任意深度的每个`_Images/`）、SCSS源（`**/*.scss`，由[`scss.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/scss.mjs)单独编译）、Mermaid源（`**/*.mmd`，保留`.svg`兄弟文件），以及明显的缓存目录。

最终的`pages.sort(byName)`镜像Jekyll的`site.pages.sort_by!(&:name)`——按基本名排序，fast-glob的输入顺序用于打破平局（阶段2的`nav_order`随后确定性解决）。

### [nav.mjs](https://github.com/twinbasic/documentation/blob/main/builder/nav.mjs) --- 阶段2导航

共享状态方法是JS移植相比其所取代的Ruby插件获得25倍加速的原因——每个Ruby插件以前都是从零重建相同的中间映射。

完整性检查是唯一可能导致构建在阶段2中途中止的路径。两种失败模式：**模糊**（多个页面共享`parent:`中声明的标题，且`grand_parent:`不能消歧）和**孤立**（没有页面有该标题）。两者都报告每个有问题页面的一个错误以及`srcRel`路径，使修复显而易见。

`sortPages`实现Jekyll的四桶排序：数字`nav_order`，然后是字符串`nav_order`，然后是数字`title`，然后是字符串`title`。`case_insensitive`通过`_config.yml`选择启用。`buildNavNode`中的循环防御（`chain.some`检查）将树深度限制在`NAV_TREE_MAX_DEPTH = 16`，使循环的`parent:`链封顶而非无限递归。

### [seo.mjs](https://github.com/twinbasic/documentation/blob/main/builder/seo.mjs) --- 阶段2 SEO预计算

它取代的Liquid过滤器链是`text | markdownify | strip_html | normalize_whitespace | escape_once`——`renderTitle()`是JS移植（markdown-it渲染，然后`stripHtml`辅助函数，然后`\s+`折叠 + 修剪，然后仅通过`HTML_ESCAPE_ONCE_REGEXP`转义五个HTML活动字符）。

站点上836个页面标题中的834个是纯ASCII字符串，管线折叠为单字符转义；剩下的两个（`Concat.md`和`LineContinuation.md`——标题包含`&`和`\`）行使了包裹和剥离路径。共享的markdown-it实例是必需的；如果编排器忘记先通过`createMarkdownIt`构建它，阶段2会快速失败。

`stripHtml`和`absoluteUrl`也为[`search.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/search.mjs)（搜索索引内容清理器）和[`sitemap.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/sitemap.mjs) / [`redirects.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/redirects.mjs)（绝对URL组合）导出——用于规范标签的相同字节级URL辅助函数与阶段6辅助写入器共享。

### [book.mjs](https://github.com/twinbasic/documentation/blob/main/builder/book.mjs) --- 阶段2章节解析 + 阶段8组装

按行数计算最大的模块（约990行），按节注释分为两个清晰标记的半部分。

**§A：阶段2章节解析。** `resolveBookChapters(bookData, pages)`遍历`_data/book.yml`中的每个条目/部分/有章节的部分章节，并将其`page` / `pages` / `nav_page` / `nav_pages` / `no_descent`选择器模式解析为存储为条目上`_chapters`的具体`Array<Page>`。`landing_page` / `foreword_page`在同一次传递中预解析为其`Page`引用，使阶段8无需再遍历页面。`sortByNavOrder`实现Jekyll的按拥有索引分组排序：每个索引页及其叶子保持在一起，组顺序按引导项的`[nav_order, title]`排列。

**§B--§F：阶段8 book.html组装。** `assembleBook(site, pages)`是纯计算遍历器——发出标题页，然后按顺序遍历`bookData.front_matter`和`bookData.parts`，然后运行`rewriteBookHrefs`（书内`href="/X"` → `href="#ch-X"`，适用于贡献到PDF的任何页面），然后`compressHtml`。`bookChapterTransform`中的每章节正文转换运行五遍：

1. 剥离`src="<baseurl>/"`前缀；
2. 为打印解包`<details>` / `<summary>`；
3. 将`<span>`间空白包裹在`<span class="w">`中，使pagedjs的页面分割器不会在分页处折叠它（12个模式，最长的优先）；
4. 按`n in [0, 3]`偏移标题级别，上限为`h7-stub`；
5. 为每个标题id和章节内`href="#"`添加章节锚点前缀。

每个部分和章节分隔页包含条目标题为H1/H2标题（或设置了`no_outline_entry:`时的静默`<p>`），成为PDF书签目标。当条目设置了`landing_is_target:`时，标题被直接注入到落地页文章中，使PDF书签导航到那里而非空白分隔页；`rewriteBookHrefs`的落地H1剥离通过`data-divider-heading`属性跳过注入的标题。`outline_closed:`在标题上标记`data-pdf-bookmark-closed`（或对`no_outline_entry`条目标记在第一个内容文章上），`book/lib/outline.mjs`中的`parseOutline`读取该属性为该书签节点写入负的PDF `/Count`。完整模式记录在`_data/book.yml`文件头中。

`augmentWithRedirectStubs`从每个真实页面的`redirect_from`合成虚拟`Page`记录，使交叉引用重写器仍然捕获旧版URL，就像Jekyll的`jekyll-redirect-from`所做的那样（其存根出现在`site.pages`中并被扫入查找表）。`chapterAnchorFromUrl`是URL → `ch-…` slug辅助函数，同时生成`id="..."`和`#…` href目标。

### [build-info.mjs](https://github.com/twinbasic/documentation/blob/main/builder/build-info.mjs) --- 阶段2 git捕获

两个git shell调用在失败时回退到`"unknown"`，使tarball安装或稀疏检出永不中止构建。

### [data.mjs](https://github.com/twinbasic/documentation/blob/main/builder/data.mjs) --- 阶段2数据加载器

取代了原本位于[`book.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/book.mjs)中的book专用YAML加载；后者保留`loadBookData`作为尚未迁移的线束的向后兼容包装器。

### [mermaid.mjs](https://github.com/twinbasic/documentation/blob/main/builder/mermaid.mjs) --- 阶段11（B1）预处理器

直接驱动`puppeteer` + 树内`mermaid`包。早期此模块通过`npx mmdc` shell调用`@mermaid-js/mermaid-cli`，每图分叉一个新的node + Chrome进程并附带自己的捆绑puppeteer-core（强制重复Chrome下载）；直接路径将两者折叠为整个批次的一次浏览器启动和依赖树中的一项。

渲染在单次`page.evaluate`中运行，动态导入`mermaid.esm.mjs`并调用`mermaid.render('my-svg', definition, container)`，然后通过`XMLSerializer`序列化结果`<svg>`。SVG id与mermaid-cli的默认值匹配，以便任何先前提交的SVG与新输出干净地比对。裸HTML页面是一个`data:text/html` URL，带一个`<div id="container">`；不加载其他任何内容。

**拦截shim。** Chromium在`file://`上加载时阻止`mermaid.esm.mjs`触发的相对`import()`链，因此请求通过虚拟源`https://tbdocs-mermaid.invalid/*`路由，`page.setRequestInterception(true)`将其解析回`node_modules/mermaid/dist/*`——与mermaid-cli自身的`puppeteerIntercept.js`使用的技巧相同，精简为一个根和一个MIME类型。需要shim是因为替代方案（IIFE包`mermaid.min.js`）会内联+压缩经过补丁的dagre块，并会静默撤销[Mermaid Dagre补丁](/official/Documentation/Fixes-Dagre)中记录的布局修复。

**失败模式。** 两类，分别处理：

- **设置**（`puppeteer`导入失败，mermaid未安装，`puppeteer.launch()`因缺少Chrome而失败）：警告一次并附带恢复命令（`npm install` / `npx puppeteer browsers install chrome --install-deps`），保留每个磁盘上的SVG，返回`{ ..., setupSkipped: true }`。编排器**不会**翻转退出码——全新检出仍然构建成功，只是没有图表更新。
- **每图渲染**（损坏的`.mmd`语法，mermaid在`page.evaluate`内渲染抛出）：警告并附上解析器错误（包括行+列+预期标记列表），保留该图先前的SVG，**继续**处理批次其余部分使每个损坏图在单次运行中暴露，递增返回的`failed`计数。编排器根据该计数翻转`process.exitCode = 1`，使CI捕获坏图。

### [scss.mjs](https://github.com/twinbasic/documentation/blob/main/builder/scss.mjs) --- 阶段11（B3）SCSS编译器

通过Dart Sass（[`sass`](https://www.npmjs.com/package/sass) npm包）运行`docs/assets/css/just-the-docs-combined.scss`，并将结果作为`assets/css/just-the-docs-combined.css`推送到`generatedAssets`。取代了以前存在于`builder/assets/`下的Jekyll时代预编译CSS；现在编辑任何SCSS部分会在下次构建时反映，无需重新提取。

加载路径按顺序堆叠搜索：`docs/_sass/`优先（我们的`custom/`下的自定义部分），然后`builder/vendor/just-the-docs/_sass/`（v0.10.1的gem）。Jekyll依赖的相同遮蔽仍然适用——`@import "custom/custom"`解析到我们的`docs/_sass/custom/custom.scss`，因为加载路径顺序将我们的`_sass/`放在前面。

入口点将gem的`_includes/css/just-the-docs.scss.liquid` Liquid模板复制为纯SCSS：它导入`support/support`，然后`custom/setup`，然后`color_schemes/light`（始终），然后`modules`——在根级发出完整的浅色主题规则集。相同的导入块在`html.dark-mode { ... }`包装器内重新运行，用`color_schemes/dark`替代，使每个模块规则在深色调色板下再着陆一次，限定在深色模式类下。

失败模式：

- **设置**（`sass`未安装）是硬错误，附带`npm install`提示——没有预编译CSS回退。
- **内容**（任何SCSS部分中的语法错误）打印源位置，设置`process.exitCode = 1`，并继续构建，保留任何先前的`_site/` CSS。CI捕获非零退出。

上游Dart Sass对多个gem-vendor构造（`darken()`、根级`@import`）发出弃用警告；它们是上游噪音，不在这里可操作，除非fork gem。

### [render.mjs](https://github.com/twinbasic/documentation/blob/main/builder/render.mjs) --- 阶段3 markdown管线

最大的单一模块（约1,580行）和运行时热路径——这是主导约1--2秒构建时间的内容。

`createMarkdownIt(ctx)`是配置核心。基础选项（`html: true`、`xhtmlOut: true`、`breaks: false`、`linkify: false`、`typographer: true`、`quotes: """''"`）匹配kramdown的默认值。插件层层叠加：`markdown-it-attrs`使用kramdown的`{: ` / `}`分隔符，`markdown-it-deflist`，`markdown-it-footnote`使用kramdown渲染规则（`fnref:N` / `reversefootnote` / `<div class="footnotes">`形状；参见`configureFootnotes`），加上一堆树内插件：

- **`standaloneIalForwardPlugin`** --- kramdown将独立`{:...}` IAL附加到下一个块，而非上一个；markdown-it-attrs搞反了。
- **`tightLooseListPlugin`** --- kramdown按项决定列表项是否带`<p>`包裹；markdown-it在列表级别决定。后遍隐藏`paragraph_open` / `paragraph_close`标记以匹配。
- **`looseDeflistPlugin`** --- 同一规则应用于`<dd>`正文，触发条件更窄（仅`dt` → `dd`的空行间隔算数）。
- **`headerIdPlugin`** --- `kramdownSlug`算法（小写、丢弃`\p{L}\p{N}\p{M}\p{Pc}\-`外的字符、空格替换为`-`、用`-1`、`-2`...去重）。
- **`tocPlugin`** --- 检测`* TOC\n{:toc}`模式（其标记携带`toc`属性的子弹列表）并替换为嵌套的`<ul id="markdown-toc">`。
- **`relativeLinksPlugin`** --- 源内`[X](Y.md)` → `[X](/permalink-of-Y)`重写，通过`buildLinkTables`生成的`byPath` / `byUrl` / `byRedirect`链接表。
- **`blockHtmlRecursionPlugin`** --- 从html_blocks中剥离`markdown="1"`（markdown-it在空行分隔正文内容时已递归），对`markdown="span"`正文运行kramdown风格智能引号转换，规范化原始块HTML（裸词属性扩展为`attr=""`、仅空白正文折叠），并将独立内联元素如`<br>` / `<img>`包裹在`<p>`中。
- **`kramdownDashesPlugin`** --- `--` → en-dash、`---` → em-dash、`<<` / `>>` → guillemets，加上所有格撇号扫描和kramdown应用的交叉强调智能引号规则，这些规则markdown-it的typographer看不到，因为它对标记兄弟是盲的。
- **`kramdownEllipsisPlugin`** --- 恢复markdown-it会折叠为单个`…`的`....` / `.....`模式。
- **`flattenAdjacentStrongPlugin`** --- 强制从左到右的`**`配对，而非CommonMark的首选嵌套算法。

`fence` / `code_block` / `code_inline` / `table_open` / `th_open` / `ordered_list_open`上的渲染规则覆盖处理较小的差异（Rouge形状的包装器、table-wrap div、`<ol>`上无`start`、`style: text-align:`间距）。五个预渲染文本遍（`stripLiquidRawTags`、`rewriteTripleAsteriskEmphasis`、`encodeSpacesInMediaUrls`、`rewriteListItemSetextHeadings`、`absorbTrailingHtmlComments`、`rewriteAdmonitions`）在markdown-it看到源字符串之前重写它；两个后渲染遍（`normaliseVoidTags`、`padEmptyCells`）修复kramdown的`<br />`风格XHTML空元素输出和`<td> </td>`空单元格怪癖。GFM admonition重写（`rewriteAdmonitions`）发出与jekyll-gfm-admonitions相同的五个SVG octicon（info、light-bulb、report、alert、stop），带有`class="markdown-alert markdown-alert-<type>" markdown="1"`使内部正文通过markdown解析器递归。

### [highlight.mjs](https://github.com/twinbasic/documentation/blob/main/builder/highlight.mjs) --- 阶段3语法高亮器

包装结构——`<div class="language-X highlighter-rouge"><div class="highlight"><pre class="highlight"><code>...</code></pre></div></div>`——是just-the-docs chrome的CSS所期望的，因此包装类输出和调色板CSS共享单一事实来源。`TB_ALIASES`接受`tb`、`twinbasic`、`vb`、`vba`（全部路由到捆绑的tB语法）；其他围栏语言路由到Shiki的捆绑列表（`js`、`json`、`ruby`、`html`、`yaml`等）。空信息字符串穿透到`language-plaintext`。

`renderThemedSpans`是每标记运行合并器：相同类的相邻标记合并为一个`<span>`，使多行块注释成为单个彩色块，行继续标记（`_<whitespace>\n`）将下一行的前导空白吸收到同一span中（镜像tB词法分析器的继续处理），注释运行上的尾部换行延迟使下一行的继续注释合并。阶段11（B5）向包装输出添加了`COPY_BUTTON_HTML`——上游just-the-docs.js以前做的运行时DOM注入循环已移除，点击处理程序通过`closest()`绑定到预渲染的按钮。

### [highlight-theme.mjs](https://github.com/twinbasic/documentation/blob/main/builder/highlight-theme.mjs) --- 阶段11（B2）主题加载器

取代了Ruby时代存在的两步`scripts/extract_theme_colors.py` → SCSS部分 → Jekyll-Sass编译间接层；`.theme`源现在直接馈入渲染器。

`SCOPE_TO_SYMBOL`是TextMate作用域 → tB符号的映射（例如`keyword.declaration` → `Keyword`、`comment.line` → `Comment`、`constant.numeric` → `LiteralNumeric`）。更具体的作用域在其父作用域之前，使渲染器对每个标记作用域链的由内向外遍历在正确的层级停止。没有条目的符号继承默认的`.highlight`文本颜色——这是有意为之，使纯标点和通用标识符不获得包裹`<span>`。

`loadHighlightTheme()`按其（浅色属性，深色属性）元组对符号分组，为每个唯一元组分配一个CSS类——因此共享两个调色板属性的任意两个符号折叠为单个类。类ID（`c1`、`c2`、...）从元组派生且排序稳定；在没有主题更改的情况下重建产生字节相同的输出。CSS在根级为每个类发出浅色调色板规则，然后在`html.dark-mode .highlight .cN`下发出相同的集合，使chrome的主题切换与页面其余部分同步翻转语法高亮。

### [template.mjs](https://github.com/twinbasic/documentation/blob/main/builder/template.mjs) --- 阶段4布局

布局是直接JS模板字面量拼接——没有Liquid，没有模板引擎。子函数与上游just-the-docs include集一一对应：`renderHead`（charset / 深色模式早期脚本 / CSS / 激活样式 / lunr / just-the-docs.js / viewport / SEO / favicon，按上游的精确顺序）、`renderSidebar` + `renderNavTree`（带按标题循环防御的递归导航遍历器）、`renderHeader` + `renderSearchInput` + `renderAuxNav`、`renderBreadcrumbs`、`injectAnchorHeadings`（正则遍，在每个有id的标题旁添加`<a class="anchor-heading">`）、`renderChildrenNav`（索引页的自动生成子页面列表）、`renderFooter` + `renderFooterCustom` + `renderEditAndOfflineBlock`。

`navActivationCss(page)`是每页的`<style id="jtd-nav-activation">`块——从`page.navLevels`派生的定位`:nth-child(N)`选择器，加粗活动叶子、旋转其展开器箭头、展开活动子树的`<ul>`、关闭其他所有链接的background-image继承。CSS结构与上游`activation.scss.liquid`部分逐字匹配，使渲染的样式块与Jekyll会产生的字节匹配。`formatDate`实现了项目`last_edit_time_format`实际使用的strftime标记（`%b %e %Y at %I:%M %p`）加上常见伴随标记，对未知标记抛出异常，使未来的格式更改能被立即检测到。

### [compress.mjs](https://github.com/twinbasic/documentation/blob/main/builder/compress.mjs) --- 阶段4空白压缩

`collapseWhitespace`使用显式`[ \t\n\r\f\v]+`字符类而非JS的`\s`简写——后者还会匹配U+00A0（不间断空格）和其他十几个Unicode空白字符，这会破坏kramdown在blockquote、footnote-backref和`<kbd>`标记中发出的`&nbsp;`缩进。输入有尾部换行时保留尾部换行。

### [write.mjs](https://github.com/twinbasic/documentation/blob/main/builder/write.mjs) --- 阶段5在线写入器

`mkdirRec`缓存加上进行中折叠跳过了当前约1,080文件清单上约76%的重复`fs.mkdir`调用。

两条安全护栏。`isUnderProject(destRoot)`（也导出并被[`offline.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/offline.mjs)和[`pdf.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/pdf.mjs)复用）拒绝任何不是项目树后代的目标根目录，因此`--dest ~`永远不会意外`rm -rf`整个主目录。`assertNoDestinationCollisions`在静态文件的`destRel`会覆盖页面的`destPath`时抛出——在真实页面旁放置`.html`的内容树排版错误会否则静默获胜。多个工具函数为阶段6/7/8子步骤写入器共享而导出：`mkdirRec`、`runLimited`（并发限制的每项运行器，`LIMIT = 64`）、`safeWrite`（在消息中包含`dest`路径的错误包装写入辅助函数）、`writeFileMkdirp`。

### [paths.mjs](https://github.com/twinbasic/documentation/blob/main/builder/paths.mjs) --- 共享permalink到目标辅助模块

二十三行。由阶段1和阶段6共享；四条规则参见[管线阶段](/official/Documentation/Pipeline-Stages#pathsmjs)。

### [redirects.mjs](https://github.com/twinbasic/documentation/blob/main/builder/redirects.mjs) --- 阶段6重定向存根

`deriveRedirectStubs`是纯计算推导（导出以便离线处理可以在不重新推导的情况下读取存根列表）。它防范两种冲突形状：会覆盖真实页面的`redirect_from` URL（带两个源路径的清晰错误），以及声称相同重定向目标的两个不同页面。两者都会立即使构建失败，而非让第二个写入器静默覆盖第一个。

### [sitemap.mjs](https://github.com/twinbasic/documentation/blob/main/builder/sitemap.mjs) --- 阶段6站点地图 + robots.txt

绝对URL按字母顺序排序，使重复运行产生字节相同的输出。源树中`permalink: /robots.txt`会遮蔽生成的——防御性检查，当前没有页面设置该值。

### [search.mjs](https://github.com/twinbasic/documentation/blob/main/builder/search.mjs) --- 阶段6 Lunr索引发射器

`sanitiseContent`是kramdown奇偶校验的内容规范化器——14个字符串替换在块边界间插入`.` / `|`分隔符（使搜索片段显示逻辑断裂而非粘合的散文），然后`stripHtml`，然后"Table of contents"移除，然后折叠连续ASCII空白遍（窄集，镜像Ruby的`String#strip`语义使`&nbsp;`缩进不被破坏——与[`compress.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/compress.mjs)压缩遍防范的相同问题）。顺序对与just-the-docs Liquid模板的字节奇偶校验至关重要；重新排列步骤会改变输出。

### [offline.mjs](https://github.com/twinbasic/documentation/blob/main/builder/offline.mjs) --- 阶段7离线镜像

第二大模块（约950行）。内部节在源码中标记为`§A`到`§I`。

`computeRelative`是URL解析器核心：绝对URL → 在磁盘上解析的页面相对路径。它运行`resolveRaw`（剥离baseurl，在`sitePaths`集合中的`<path>` / `<path>.html` / `<path>/index.html`候选中选取），然后沿`../`上行到与页面自身段的最长公共前缀，然后重新追加下降部分加上编码尾部。`computeRelUrl`类似地处理已是页面相对的输入。结果缓存（`rawResolution`、`seg`、每fileDir的`result`）将每构建成本折叠到接近唯一URL计数的线性。

每页的侧边栏导航块在每个页面上字节相同（它不依赖于每页的`page`对象；活动高亮在head-style块中，非内联`class=`属性），因此`writeOfflinePages`运行预遍，渲染每个目标目录的第一个页面，切出导航，并缓存`{input, output}`对。同一目标目录中的后续页面用占位符替换输入切片，在约80KB更小的字符串上运行重写器，然后将缓存输出拼接回来。每次构建节省约200毫秒（阶段9 §5.3，B7）。缓存未命中时回退到带警告的完整重写使其保持为纯优化，而非正确性依赖。

just-the-docs.js修补器从阶段11（B11）开始基于AST：`deriveOfflineJtdJs`用`acorn`解析上游源码，扫描名为`navLink`和`initSearch`的`FunctionDeclaration`节点，并切入两个替换实现（`JTD_NAVLINK_REPLACEMENT`、`JTD_INITSEARCH_FN_REPLACEMENT`）。未修补区域与上游源码保持字节相同，上游的表面编辑（变量重命名、被修补正文内的空白）可以存活——先前的锚定正则修补器在两者上都会断裂。构建时的解析错误是重新提取产生了acorn无法读取的内容的明确信号；没有防御性回退发布，因为just-the-docs.js仅在刻意的gem升级操作时重新提取。

`deriveOfflineSearchDataJs`将`search-data.json`包装为`window.SEARCH_DATA = {...}`（`<script src=>`在`file://`下无法获取JSON）并通过`JSON.parse + JSON.stringify`不缩进地压缩——阶段11（B10）削减了离线资产占用约1.1MB。原始`search-data.json`列在`_config.yml`的`offline_exclude`中，在离线树中不存在；`.js`包装器是离线站点携带的唯一搜索资产。`copyOfflineThemeAssets`将`offline_exclude`应用于所有主题资产文件，而非仅特别修补的`just-the-docs.js`。

### [pdf.mjs](https://github.com/twinbasic/documentation/blob/main/builder/pdf.mjs) --- 阶段8 PDF源树

图片路径收集器折叠到`assembleBook`的每章节发出中（阶段9 §5.9）；组装HTML的后遍正则扫描作为导出的`extractImagePaths`辅助函数为差异工具保留，但不再在写入器中运行。`resolveBookPage`在源树中强制恰好一个`layout: book-combined`页面（在零个或多个时抛出——两者都是无歧义的配置错误）。

`reportMissingImages`实现了pdfify.rb的严格模式：每路径错误日志，然后在`!tolerateMissingImages`时抛出。每次阶段8调用默认以严格模式运行——组装书中缺失的图片是构建失败而非警告，因为替代方案是直到发布前没人注意到的带破损图片占位符的PDF。`--tolerate-missing-images`标志（在阶段12中从`--serving`重命名）将抛出降级为警告，用于迭代工作。

## 资源布局

站点部署时的`/assets/`树由三个来源组装：

| 磁盘上的来源                    | 存放内容                                                                                                                                                                                                                                                                                                                                                                     | 交付阶段                                                                                                                                                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/assets/`                  | 项目自有内容：SCSS入口点、项目JS（`theme-switch.js`）、手写样式表（`print.css`、`just-the-docs-head-nav.css`）、Mermaid图表（`.mmd`源 + `.svg`渲染），以及贡献者添加的任何内容图片。                                                                                                                                                                                         | 由[`discover.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/discover.mjs)发现，由[`write.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/write.mjs)的`copyStaticFiles`复制。 |
| `builder/vendor/just-the-docs/` | 从just-the-docs gem（v0.10.1）vendor：`_sass/`（主题的SCSS源，馈入编译）和`assets/js/just-the-docs.js` + `assets/js/vendor/lunr.min.js`（chrome运行时，原样复制）。参见[`builder/vendor/just-the-docs/README.md`](https://github.com/twinbasic/documentation/blob/main/builder/vendor/just-the-docs/README.md)了解清单、重新vendor程序和对`just-the-docs.js`应用的树内补丁。 | `_sass/`由[`scss.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/scss.mjs)消费；`assets/`由`write.mjs`的`copyTheme`复制。                                                                        |
| 进程内生成                      | `just-the-docs-combined.css`（来自[`scss.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/scss.mjs)）和`tb-highlight.css`（来自[`highlight-theme.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/highlight-theme.mjs)）。两者都不提交；每次运行都重建。                                                                                 | 推送到[`tbdocs.mjs`](https://github.com/twinbasic/documentation/blob/main/builder/tbdocs.mjs)中的`generatedAssets`；由`write.mjs`的`writeGeneratedAssets`在`copyTheme`之后写入，使生成内容在冲突时获胜。            |

任一复制路径中的CSS文件在部署baseurl非空时获得baseurl重写（`url("/path")` → `url("<baseurl>/path")`）；相同转换应用于生成的CSS，使SCSS入口点发出的`url("/favicon.png")`在子路径部署下正确解析。

不再有主题重新提取步骤——SCSS源在树中，构建在每次运行时通过Dart Sass编译它们。升级just-the-docs只是重新vendor新gem标签的`_sass/`和`assets/js/`（程序见vendor README），如果上游改动了则重新应用`just-the-docs.js`补丁，然后重建。

## 验证

构建后的站点完整性由`check.bat`断言，它对`_site/`和`_site-offline/`运行`scripts/check_links.mjs`。CI工作流运行相同的步骤加上`crawl_check.mjs`部署后检查。

构建本身在`tbdocs.mjs`末尾包含一个小的守卫：

```js
if (pages.length < 836) {
  console.error(`WARN: page count ${pages.length} below baseline 836`);
  process.exitCode = 1;
}
```

因此意外丢失页面的发现规则回归表现为非零退出码。

## 不在builder/中的内容

一些构建相关代码位于仓库根目录而非`builder/`下：

- **PDF渲染** --- `book/render-book.mjs`加上其`book/lib/*.mjs`辅助模块和`paged.browser.js`包。`tbdocs`生成`_site-pdf/book.html`；实际PDF渲染通过`book.bat`单独运行。驱动程序有意不属于站点生成器：`pdf-lib`是仅在PDF时使用的重度依赖。`puppeteer`在`render-book.mjs`和`builder/mermaid.mjs`间共享（一个Chromium二进制，两个消费者）。完整内部机制参见[PDF生成](/official/Documentation/PDF-Generation)。
- **链接检查** --- `scripts/check_links.mjs`从磁盘读取构建后输出；不属于生成器。
- **外部链接爬取** --- `scripts/crawl_check.mjs`从HTTP读取；不属于生成器。
- **Mermaid源文件** --- `docs/assets/images/mmd/*.mmd`是源，`*.svg`是`tbdocs`按需重新生成的构建产物。

> AI生成
