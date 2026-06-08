---
title: "书籍配置"
parent: tbdocs Builder
nav_order: 2
permalink: /Documentation/Development/Book-Configuration
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cd571e6d-b588-43d0-a525-50308f9e1375'
  PropagateID: 'cd571e6d-b588-43d0-a525-50308f9e1375'
  ReservedCode1: 'b452f829-b5a2-4b32-b1f7-ffc4caa4f4c1'
  ReservedCode2: 'b452f829-b5a2-4b32-b1f7-ffc4caa4f4c1'
---

# 书籍配置

`docs/_book.yml` 定义 PDF 书籍的章节清单：哪些页面出现、以什么顺序、以及它们如何映射到命名的部分和章节。`book.mjs` 在阶段 2（解析页面选择器）和阶段 8（组装 `book.html`）期间读取此文件。参阅[管线阶段](/official/Documentation/Pipeline-Stages)了解相关的接口契约。

## 文件位置与加载顺序

**文件：** `docs/_book.yml`

`data.mjs` 在阶段 2 期间加载 `_book.yml` 并使其作为 `site.data.book` 可用。编排器然后将 `site.data.book` 暴露为 `site.bookData` 并传递给 `resolveBookChapters`。该调用遍历整个结构并将每个选择器解析为具体的 `Page[]`，存储为 `entry._chapters`，因此阶段 8 的 `assembleBook` 无需再做页面查找。

运行 `build.bat` 然后运行 `book.bat` 以查看更改的效果。`check.bat` 完整性检查也会运行 PDF 构建阶段。

## 顶层结构

```yaml
front_matter:
  - <entry>      # 零个或多个条目，在第一个 Part 之前发出
  - ...

parts:
  - <part>       # 一个或多个编号 Part
  - ...
```

**`front_matter`** 条目在标题页和第一个编号 Part 之间发出。它们不生成分隔页和部分编号。

**`parts`** 条目每个生成一个编号分隔页。一个部分可以包含一组平面页面或有序的 `chapters` 列表，每个章节生成自己的子分隔页。

`front_matter` 条目和部分（及其章节）都共用下面描述的[选择器模式](#selector-schema)和[通用条目选项](#common-entry-options)。

## 选择器模式

每个条目可以组合以下任何键来选择它贡献给书籍的页面。默认所有匹配都是 `contains` --- 页面的 URL 或导航路径必须包含前缀字符串。在条目上设置 `no_descent: true` 可将其所有匹配切换为精确相等。

| 键 | 类型 | 描述 |
|---|---|---|
| `page` | `string` | 单个 URL 前缀。单元素 `pages:` 列表的简写。 |
| `pages` | `string[]` | URL 前缀列表。每个前缀与页面的 `permalink` 字段匹配。 |
| `nav_page` | `string` | 单个导航路径前缀。单元素 `nav_pages:` 列表的简写。页面的导航路径是其斜杠连接的 `grand_parent / parent / title` 链，由 `nav.mjs` 填充。 |
| `nav_pages` | `string[]` | 导航路径前缀列表，与每个页面的 `navPath` 字段匹配。 |
| `no_descent` | `boolean` | 当为 `true` 时，将此条目上的每个匹配从 `contains` 切换为精确相等。当前缀如 `/Foo/` 应仅匹配索引页而非其子页面时使用，或当 `page: /` 否则会扫入站点上的每个页面时使用。 |

所有选择器键可以在一个条目中组合使用。同时有 `page` 和 `nav_page` 的条目收集两个选择的并集。章节条目上的选择器与包含部分的选择器独立 --- 章节收集自己的页面；部分不会自动继承它们。

## 通用条目选项

front_matter 条目、部分和章节都支持这些选项。部分和章节行为不同的地方，部分形式在前，章节形式在括号中注明。

### `title` / `subtitle`

```yaml
title: "VBA Package"
subtitle: "Standard runtime modules --- Strings, Math, FileSystem, and the rest"
```

`title` 是分隔标题的文本 --- 部分用 H1，章节用 H2。`subtitle` 是在 `title` 下方渲染的可选副标题。两者都用作 PDF 书签标签。

当设置了 `landing_is_target:` 时，`title` 被注入登录页的文章中，而不是在独立的分隔页上渲染。

### `landing_page`

```yaml
landing_page: /tB/Packages/VBA
```

单个绝对 URL。命名页在条目的内容列表中最先发出，在任何前缀扫入的页面之前。它被排除在前缀匹配之外，因此不会被发出两次。其源 H1 被重写器剥离，因此分隔标题仍然是条目的唯一 PDF 大纲条目。与 `foreword_page:` 不同，`landing_page` 以正常的连续页眉和常规文章样式渲染。

### `landing_is_target`

```yaml
landing_page: /tB/Packages/VBA
landing_is_target: true
```

需要 `landing_page:`。设置后，分隔页静默渲染，条目 `title` 作为 H1（部分）或 H2（章节）注入登录页文章的开头。PDF 书签导航到登录页而非空白分隔页。登录页的源 H1 仍被剥离。

与 `outline_closed:` 配对以使书签开始时折叠。

### `no_outline_entry`

```yaml
no_outline_entry: true
```

将分隔 `title` 作为静默 `<p>` 而非 H1 或 H2 发出。PagedJS 在构建 PDF 大纲时跳过静默段落，因此条目没有自己的书签。条目页面中的第一个内容标题成为书签目标。

与 `landing_page:` 组合时，跳过登录页源 H1 的剥离 --- 登录页自己的第一个标题成为书签目标。

与 `no_heading_shift:` 配对以将该标题保持在正确的深度。

### `no_heading_shift`

```yaml
no_heading_shift: true
```

控制标题组装器如何移动级别以防止组合的 `book.html` 中出现多个 H1。参阅下面的[标题移动机制](#heading-shift-mechanics)。

### `outline_closed`

```yaml
outline_closed: true
```

使此条目的 PDF 书签开始时折叠（子项在 PDF 阅读器中展开前隐藏）。`data-pdf-bookmark-closed` 属性标记在：

- 分隔 H1 / H2，对于有可见分隔标题的条目；
- 第一个内容文章，对于 `no_outline_entry` 条目（PagedJS 通过 `closest()` 找到标题）；
- 注入的标题本身，对于 `landing_is_target` 条目。

## 仅部分选项

### `foreword_page`

```yaml
foreword_page: /tB/Packages/
```

单个绝对 URL。命名页作为 `<article class="part-foreword">` 在部分分隔之后、任何章节分隔之前发出。无连续页眉（CSS 为前言文章抑制页面装饰）。前言的源 H1 不被剥离，也不成为 PDF 大纲条目。

与 `landing_page:` 在两个方面不同：源 H1 被保留，前言本身没有大纲贡献。

### `chapters`

```yaml
chapters:
  - title: VBA Package
    ...
  - title: VBRUN Package
    ...
```

有序章节条目列表。每个章节生成自己的分隔页（H2）并使用相同的选择器模式和上述通用条目选项。除与部分共用的之外，不存在章节专有选项。

## 标题移动机制

PDF 组装器移动标题级别以防止源 H1 与部分和章节分隔标题竞争：

- **部分（无章节）：** 部分中的每个页面接收 +1 移动 --- 源 H1 渲染为 H2，H2 渲染为 H3，以此类推。在部分条目上设置 `no_heading_shift: true` 以跳过此移动，保持源 H1 为 H1。
- **部分内的章节：** 每个页面总共接收 +2 移动（来自部分的基准 +1，加上章节级别的额外 +1）--- 源 H1 渲染为 H3。在章节条目上设置 `no_heading_shift: true` 以仅跳过额外的 +1，使源 H1 渲染为 H2 而非 H3。

典型模式：当单页部分或章节应使用登录页自己的 H1 作为 PDF 书签目标而不需要上方冗余的静默分隔时，将 `no_outline_entry: true` 与 `no_heading_shift: true` 配对。

## 排序顺序

在每个条目内，选定的页面按 `sortByNavOrder` 排序：

1. **索引页优先** --- URL 以 `/` 结尾的任何页面。
2. **有 `nav_order` 的页面** --- 按 `nav_order` 值升序，以 `title` 作为平局决胜。
3. **无 `nav_order` 的页面** --- 按 `title` 字母顺序。
4. **按所属索引分组** --- 索引页面及其直接子页面保持相邻。

`landing_page:` URL 始终排在排序集之前的第一位，并被排除在排序集之外，因此不会被发出两次。

## 实例说明

### 带 `landing_is_target` 的章节

```yaml
- title: VBA Package
  subtitle: Standard runtime modules --- Strings, Math, FileSystem, and the rest
  landing_page: /tB/Packages/VBA
  page: /tB/Modules/
  landing_is_target: true
  outline_closed: true
```

这在 PDF 中生成：

1. 静默渲染的章节分隔（无可见的 H2 页面），因为 `landing_is_target: true`。
2. `/tB/Packages/VBA` 处的 VBA 登录页 --- 第一篇文章，`"VBA Package"` 作为 H2 注入其内容顶部。其原始源 H1 被剥离。
3. URL 包含 `/tB/Modules/` 的每个页面，按 `sortByNavOrder` 排序。
4. 此章节的 PDF 书签导航到 VBA 登录页并开始时折叠。

---

### 带可见分隔和 `nav_page` 选择器的章节

```yaml
- title: Operators
  nav_page: Reference Section/Operators
  outline_closed: true
```

这生成：

1. 可见的 H2 分隔页，标题为 "Operators"。
2. 所有 `navPath` 包含 `Reference Section/Operators` 的页面，按导航顺序。
3. PDF 书签导航到分隔页，开始时折叠。

---

### 带 `no_outline_entry` 和 `no_descent` 的前言条目

```yaml
front_matter:
  - title: Introduction
    page: /
    no_outline_entry: true
    no_heading_shift: true
    no_descent: true
    outline_closed: true
```

这生成：

1. 仅根页面（`/`）--- `no_descent: true` 阻止 `/` 扫入站点上的每个页面。
2. 分隔标题 "Introduction" 渲染为静默 `<p>`（无自身书签）。页面的源 H1 成为 PDF 书签目标。
3. 因为设置了 `no_heading_shift: true`，源 H1 渲染为 H1 而非 H2。
4. 书签开始时折叠。

---

### 带前言和嵌套章节的部分

```yaml
- title: Packages
  subtitle: The runtime and library packages shipped with twinBASIC
  outline_closed: true
  foreword_page: /tB/Packages/
  chapters:
    - title: VBA Package
      ...
    - title: VBRUN Package
      ...
```

这生成：

1. 部分分隔页（H1），标题为 "Packages"。
2. `/tB/Packages/` 处的页面作为前言文章发出（无连续页眉，无大纲条目）。其 H1 被保留。
3. 每个章节的章节分隔页（H2），后跟该章节按导航顺序排列的页面。

## 另见

- [管线阶段](/official/Documentation/Pipeline-Stages) -- `book.mjs` 接口契约。
- [tbdocs 构建器](/official/Documentation/Builder) -- `book.mjs` 的设计理念。

> AI生成