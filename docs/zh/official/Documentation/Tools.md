---
title: "工具与脚本"
parent: "文档开发"
nav_order: 3
permalink: /Documentation/Development/Tools
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '67576b9b-ab92-484e-b1b2-7b94f8c9f22e'
  PropagateID: '67576b9b-ab92-484e-b1b2-7b94f8c9f22e'
  ReservedCode1: '18e0f2d8-14dc-4de9-98ca-3a42f36be429'
  ReservedCode2: '18e0f2d8-14dc-4de9-98ca-3a42f36be429'
---

# 工具与脚本

文档仓库中每个可执行文件的单行参考：`docs/` 下的Windows批处理包装器、`scripts/` 下的跨平台Node和Python脚本、`tbdocs` 编排器及其CLI标志，以及PDF渲染驱动器。如果你在寻找日常工作流而非速查表，[构建与部署](/official/Documentation/Building)页面更适合；如果你在修改构建管线本身，[tbdocs内部机制](/official/Documentation/Builder)页面更深入。

## docs/下的批处理包装器

每个批处理文件使用 `@pushd "%~dp0"` 从仓库根目录运行，无论从何处调用。POSIX等效命令在各批处理条目下方列出。

### build.bat

    build.bat [extra tbdocs flags]

渲染文档。包装 `node builder\tbdocs.mjs --src docs` 并通过 `%*` 转发额外参数。生成 `_site/`、`_site-offline/` 和 `_site-pdf/`，受 `--no-offline` / `--no-pdf` 标志和 `_config.yml` 中的 `also_build_offline` / `also_build_pdf` 键控制。当前源码树的构建时间端到端约3秒。

### serve.bat

    serve.bat

启动长期开发进程。包装 `node builder\tbdocs.mjs --src docs --serve` 并通过 `%*` 转发额外参数。初始构建后，HTTP服务器绑定到端口4000（传 `--port <N>` 使用不同端口），递归源码树监视器在每次更改时触发防抖重建，连接到页面的浏览器通过SSE在每次成功重建后自动重载。离线和PDF传递在每次重建时跳过。Ctrl+C干净退出。**仅记录失败（4xx、5xx、服务器异常）**——成功请求无输出。

### check.bat

    check.bat

以两个并行传递对渲染的 `_site/` 和 `_site-offline/` 树运行 `scripts/check_links.mjs`。离线传递还运行 `--forbid "https://docs.twinbasic.com"` 以标记离线重写遗漏的任何存活站点链接。两个传递都断言链接完整性、HTML良构性、重复 `id` 检测、锚点解析和无障碍提示；在线传递额外检查 `sitemap.xml` 和搜索索引。需要先运行 `build.bat`。

### book.bat

    book.bat

从 `docs\_site-pdf\book.html` 渲染PDF书到 `docs\_pdf\twinBASIC Book.pdf`。调用 `node book\render-book.mjs`（见[下方](#bookrender-bookmjs)）。需要 `build.bat` 已填充 `_site-pdf/` 和通过 `npx puppeteer browsers install chrome` 安装的Chromium。首次调用在缺少 `puppeteer` 时自动运行 `npm install`。输出文件名由此处的 `-o` 参数设置；要重命名PDF，需在 `book.bat` 和 `.github/workflows/jekyll-gh-pages.yml` 中更新。

## CLI工具

### tbdocs --- node builder/tbdocs.mjs

静态站点生成器入口。`build.bat` 调用 `node builder\tbdocs.mjs --src docs`；CI以相同方式调用。

完整调用：

    node builder/tbdocs.mjs [--src <path>] [--dest <path>]
                            [--baseurl <prefix>] [--url <origin>]
                            [--dry-run]
                            [--no-offline] [--no-pdf] [--tolerate-missing-images]
                            [--profile-offline]
                            [--serve] [--port <N>]

| 标志 | 作用 |
|---|---|
| `--src <path>` | 源根目录。默认：相对于工作目录的 `docs`。 |
| `--dest <path>` | 在线树目标。默认：`<src>/_site`。离线树位于 `<dest>-offline`，PDF树位于 `<dest>-pdf`。 |
| `--baseurl <prefix>` | 覆盖 `_config.yml` 的 `baseurl`。CI用于在fork部署时注入GitHub Pages基础路径。 |
| `--url <origin>` | 覆盖 `_config.yml` 的 `url`。CI用于使规范URL匹配实际部署源而非配置的生产主机。 |
| `--dry-run` | 跳过所有文件系统写入。用于基准测试或验证发现/计算/渲染。 |
| `--no-offline` | 跳过离线树传递。 |
| `--no-pdf` | 跳过PDF树传递。 |
| `--tolerate-missing-images` | 将阶段8的缺失图片错误降级为警告。当源码树正在编辑且可能临时引用尚不存在的图片时使用。 |
| `--profile-offline` | 打印离线树传递的每子步骤计时。 |
| `--serve` | 启动长期开发服务器（监视+重建+SSE实时重载）。每次重建跳过离线和PDF传递。 |
| `--port <N>` | `--serve` 模式的HTTP端口。默认：4000。 |

### scripts/check_links.mjs

    node scripts/check_links.mjs [pass-args...] [/sep/ [pass-args...] ...]

离线（仅文件系统）链接检查器加可选完整性检查。多个 `/sep/` 分隔的传递通过 `worker_threads` 并行运行。相关标志：

| 标志 | 作用 |
|---|---|
| `--offline` | 必需。在线（网络）链接检查未实现。 |
| `--root-dir <path>` | 解析根绝对URL所依据的文件系统根目录。 |
| `--fallback-extensions <list>` | 当链接目标原样不存在时追加的扩展名逗号分隔列表。使用 `html` 镜像GitHub Pages的无扩展名URL行为。 |
| `--index-files <list>` | 当URL解析到目录时尝试的文件名逗号分隔列表。使用 `'index.html,.'` 也接受目录本身作为有效目标。 |
| `--base-path <prefix>` | 在解析前从根绝对URL中去除此前缀。CI中设置 `--baseurl` 时使用。 |
| `--include-fragments` | 根据目标页面的ID解析 `#fragment` 锚点。 |
| `--forbid <prefix>` | 可重复。如果任何提取的链接以 `prefix` 开头则运行失败。离线传递用于捕获离线重写遗漏的存活站点链接（裸前缀和 `prefix/` 豁免）。 |
| `--check-html` | 断言HTML良构性。 |
| `--check-a11y` | 显示无障碍提示（缺少 `alt` 等）。 |
| `--check-ids` | 标记页面内重复的 `id` 属性。 |
| `--check-sitemap` | 断言 `sitemap.xml` 覆盖每个页面。 |
| `--check-search` | 断言搜索索引条目解析到现有页面。 |
| `--check-canonical` | 断言每个页面的规范URL匹配其位置。 |
| `--no-fail` | 将失败降级为信息输出（即使有断链也退出码0）。 |

退出码1表示断链；退出码2表示仅完整性失败（完整性检查与链接提取共享同一SAX解析传递）。脚本对 `(target, fragment)` 去重，因此每个唯一文件系统检查恰好触发一次，无论多少页面链接到同一目标——在当前源码树上（约733k链接出现，约12k唯一目标横跨1,127个HTML文件/124 MB）每个传递在开发机上约2.2秒运行。

### scripts/crawl_check.mjs

    node scripts/crawl_check.mjs <start-url> [--concurrency N] [--timeout MS] [--skip-external]

已部署站点的在线链接爬虫。从 `<start-url>` 开始，GET每个同源/同基础路径页面递归，提取链接，验证每个链接响应2xx（跨源HEAD，同源GET）。所有链接可达退出0，任何断链退出1。在手动 `workflow_dispatch` 部署后用于验证已发布站点——`check_links.mjs` 覆盖本地文件系统；`crawl_check.mjs` 覆盖实时部署的站点。

### scripts/convert_em_dash_separators.py

    python scripts/convert_em_dash_separators.py

将 `docs/` 下Markdown源中的字面短划线/长划线字符规范化为其kramdown智能引号ASCII源形式（`--` 表示短划线，`---` 表示长划线）。站点禁止源代码中出现字面 `–` / `—`——如果有混入，这是规范的修复工具。跳过围栏代码块和内联代码跨度。

### book/render-book.mjs

    node book/render-book.mjs <input.html> -o <output.pdf> [options]

`book.bat` 调用的PDF渲染器。它是一个通用HTML转PDF转换器：以预构建的 `_site-pdf/book.html` 作为唯一文档输入，不了解 `_data/book.yml`——所有章节结构、标题级别和大纲条目已由 `tbdocs` 阶段8嵌入HTML中。直接使用 `puppeteer` + `paged.js` + `pdf-lib`，因此控制了 `pdf-lib` 的 `parseSpeed`（默认值在加载时每100个对象之间让出事件循环，为100秒构建增加约32秒无意义开销——参见[perf/README.md](https://github.com/twinbasic/documentation/blob/main/perf/README.md)的诊断）。替代了早期的 `npx pagedjs-cli ...` 调用。

`book.bat` 使用的关键选项：

| 标志 | 作用 |
|---|---|
| `-o <output.pdf>` | 输出PDF路径。 |
| `--outline-tags h1,h2,h3,h4` | 包含在PDF大纲/书签中的标题级别。 |
| `--additional-script <path>` | 在paged.js运行前注入的脚本路径。`book.bat` 传递 `perf\detach-pages.js`，它从Chromium的布局树中隐藏每个已定型的页面，并在 `page.pdf()` 运行前全部恢复，通过绕过paged.js的二次溢出遍历器将1,638页书籍的渲染时间从约104秒降至约51秒。 |

## 配置文件

构建管线还读取少量声明性文件。它们不可执行，但构建行为依赖于它们。

| 文件 | 作用 |
|---|---|
| `docs/_config.yml` | 站点配置。`tbdocs` 读取 `url`、`baseurl`、`title`、`logo`、`also_build_offline`、`also_build_pdf`、`offline_exclude`、`exclude`、页脚/辅助链接旋钮、GitHub编辑链接旋钮和离线下载链接旋钮。Jekyll专用键（`markdown`、`kramdown`、`theme`、`highlighter`、`defaults`块、`compress_html`块）被忽略。 |
| `docs/_book.yml` | PDF书的章节清单。条目通过选择器模式（`page` / `pages` / `nav_page` / `nav_pages` / `no_descent`）解析为页面，并通过 `landing_page:`、`landing_is_target:`、`no_outline_entry:`、`no_heading_shift:` 和 `outline_closed:` 控制PDF大纲行为。完整模式记录在文件头部。阶段2解析章节数组；阶段8组装 `book.html`。 |
| `builder/themes/Light.theme`、`Dark.theme`、`Classic.theme` | 从BETA安装程序供应商的twinBASIC IDE主题文件。`builder/highlight-theme.mjs` 将其解析为Symbol键控的调色板，驱动渲染器的scope到类映射和生成的 `tb-highlight.css`。当IDE添加新调色板条目时从安装程序刷新。 |
| `builder/twinbasic.tmLanguage.json` | twinBASIC语言的TextMate语法。Shiki使用它对每个 ` ```vb ` 代码块进行分词。 |

> AI生成