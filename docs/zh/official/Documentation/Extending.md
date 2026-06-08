---
title: "扩展构建器"
parent: tbdocs Builder
nav_order: 3
permalink: /Documentation/Development/Extending
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e3940bfb-690f-4289-8fb5-c7b761a4bcd2'
  PropagateID: 'e3940bfb-690f-4289-8fb5-c7b761a4bcd2'
  ReservedCode1: 'fcae5eb9-2cb3-4d22-a215-168e7e765216'
  ReservedCode2: 'fcae5eb9-2cb3-4d22-a215-168e7e765216'
---

# 扩展构建器

如何向 `tbdocs` 添加新的管线阶段或自定义 markdown-it 插件。本指南假定你具备现代 JavaScript（async/await、ES 模块）的工作知识，但不需要了解构建管线内部机制。先阅读[管线阶段](/official/Documentation/Pipeline-Stages)了解每个阶段操作的数据契约。

## 两个扩展点

**新管线阶段** --- 一个新的 `.mjs` 模块，从 `pages` 数组或 `site` 对象读取数据并向磁盘或页面字段写入输出。该模块导出一个异步函数。`tbdocs.mjs` 中的编排器在固定序列的正确位置调用它。不涉及插件注册表或钩子系统。

**新 markdown-it 插件** --- 一个配置共享 markdown-it 实例以添加额外解析或渲染规则的函数。在 `render.mjs` 内的 `createMarkdownIt` 中注册。阶段 2 的 SEO 标题提取和阶段 3 的正文渲染都使用同一个实例，因此插件在每个页面上运行。

::: important
阶段模块的更改不会热重载。编辑阶段模块后，停止并重启 `serve.bat`（Ctrl+C，然后重新运行）以加载更改。
:::

---

## 添加管线阶段

### 1. 编写模块

创建 `builder/my-stage.mjs`。导出一个异步函数。标准签名接收 `pages` 数组、`site` 对象和阶段需要的任何额外上下文（通常是 `destRoot`），并返回用于日志记录的统计对象：

```js
import { writeFileMkdirp } from "./write.mjs";
import path from "node:path";

export async function myStage(pages, site, destRoot) {
  const manifest = pages.map(p => ({
    url: p.permalink,
    title: p.frontmatter.title ?? null,
  }));

  const dest = path.join(destRoot, "pages-manifest.json");
  await writeFileMkdirp(dest, JSON.stringify(manifest, null, 2));

  return { entries: manifest.length };
}
```

使用 `write.mjs` 导出的 I/O 工具 --- `writeFileMkdirp`、`mkdirRec`、`runLimited`、`safeWrite` --- 而不是原始的 `fs.writeFile` 调用。它们处理目录创建并在错误消息中包含目标路径。

::: important
如果阶段写入磁盘，请检查 `opts.dryRun` 并在其为 `true` 时跳过所有文件系统写入。`dryRun` 标志通过编排器接收的同一个 `opts` 对象传递，必须传播到所有 I/O 操作。
:::

如果阶段向页面对象写入新字段，请在 `runBuild` 中它们首次出现的位置添加，并在[管线阶段](/official/Documentation/Pipeline-Stages#page-objects-pages)的数据模型表中列出，以便其他开发者知道哪个阶段设置了每个字段。

### 2. 在 `tbdocs.mjs` 中注册阶段

在 `builder/tbdocs.mjs` 顶部添加导入：

```js
import { myStage } from "./my-stage.mjs";
```

然后在 `runBuild` 中的正确位置调用阶段。大多数辅助阶段属于阶段 5（写入）之后和阶段 7（离线）之前，这样在线树在它们运行时已完成：

```js
const myStats = await myStage(pages, site, destRoot);
t.lap("my-stage");
if (myStats) {
  console.log(`  my-stage: ${myStats.entries} entries`);
}
```

`t.lap("my-stage")` 记录该步骤的墙钟时间；标签出现在构建结束时的时间摘要行中。

### 3. 处理 `dryRun` 标志

当 `dryRun` 为 `true` 时，阶段应记录它会做什么而不触及文件系统：

```js
export async function myStage(pages, site, destRoot, { dryRun = false } = {}) {
  const manifest = pages.map(p => ({ url: p.permalink, title: p.frontmatter.title ?? null }));

  if (dryRun) {
    console.log(`[dry-run] my-stage: would write ${manifest.length} entries`);
    return { entries: manifest.length };
  }

  const dest = path.join(destRoot, "pages-manifest.json");
  await writeFileMkdirp(dest, JSON.stringify(manifest, null, 2));
  return { entries: manifest.length };
}
```

### 4. 验证

运行 `build.bat` 并在输出中查找时间标签。然后运行 `check.bat` 确认新输出不会破坏现有链接解析或页面数量守卫。

---

## 添加 markdown-it 插件

### 背景

`render.mjs` 中的 `createMarkdownIt` 构建整个管线使用的唯一 markdown-it 实例。它以固定顺序应用 `markdown-it-attrs`、`markdown-it-deflist`、`markdown-it-footnote` 和大约十个树内插件。新插件成为该顺序的一部分。

同一个实例用于阶段 2 的 SEO 标题提取（通过 `renderTitle`）和阶段 3 的正文渲染（通过 `renderPhase`）。更改内联内容渲染方式的插件会影响两个阶段。添加新 token 的块级插件通常只影响阶段 3，因为 `renderTitle` 会剥离所有 HTML。

### 1. 编写插件

markdown-it 插件是一个接收 `md` 实例（和可选的选项对象）并通过添加规则、覆盖渲染器函数或调整选项来修改它的函数。

**渲染器覆盖示例** --- 将每个 `<table>` 包裹在可滚动容器中：

```js
export function tableWrapPlugin(md) {
  const originalOpen = md.renderer.rules.table_open
    ?? ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options));

  const originalClose = md.renderer.rules.table_close
    ?? ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options));

  md.renderer.rules.table_open = (tokens, idx, options, env, self) =>
    "<div class=\"table-wrapper\">" + originalOpen(tokens, idx, options, env, self);

  md.renderer.rules.table_close = (tokens, idx, options, env, self) =>
    originalClose(tokens, idx, options, env, self) + "</div>";
}
```

**块规则示例** --- 一个发出 `<div class="callout">` 的新围栏语法：

```js
export function calloutPlugin(md) {
  md.block.ruler.before("fence", "callout", (state, startLine, endLine, silent) => {
    const pos = state.bMarks[startLine] + state.tShift[startLine];
    const max = state.eMarks[startLine];
    if (state.src.slice(pos, pos + 3) !== ":::") return false;
    if (silent) return true;

    const label = state.src.slice(pos + 3, max).trim();
    state.push("callout_open", "div", 1).attrSet("class", `callout callout-${label}`);
    state.line = startLine + 1;

    while (state.line < endLine) {
      if (state.src.slice(state.bMarks[state.line] + state.tShift[state.line], state.eMarks[state.line]) === ":::") {
        state.line++;
        break;
      }
      state.line++;
    }
    state.push("callout_close", "div", -1);
    return true;
  });
}
```

有关完整的 markdown-it 规则 API --- 块规则、内联规则、核心规则、渲染器规则覆盖 --- 请参阅 [markdown-it 文档](https://markdown-it.github.io/markdown-it/)和 `render.mjs` 中现有的树内插件作为示例。

### 2. 在 `render.mjs` 中注册

打开 `builder/render.mjs`。在文件顶部（与其他树内插件导入一起）添加导入：

```js
import { tableWrapPlugin } from "./table-wrap-plugin.mjs";
```

找到 `createMarkdownIt` 并在插件链中添加 `md.use(tableWrapPlugin)`。**顺序很重要** --- 将新插件放在它依赖的插件之后，放在可能与其 token 类型冲突的插件之前：

```js
export function createMarkdownIt(ctx) {
  const md = new MarkdownIt({ ... });
  // ... existing npm plugins ...
  // ... existing in-tree plugins ...
  md.use(tableWrapPlugin);   // new plugin, appended after existing ones
  return md;
}
```

### 3. 验证

运行 `build.bat` 并在浏览器中打开受影响的页面（或使用 `serve.bat` 进行实时重载）。然后运行 `check.bat` 确认没有链接损坏且构建干净退出。注意控制台输出中阶段 3 的时间 --- 在每个页面上遍历完整 token 流的块规则可能为约 1-2 秒的热路径增加可测量的时间。

---

## 测试两种扩展类型

对构建器的任何更改都适用相同的四步工作流程：

1. **`build.bat`** --- 运行完整管线；干净退出意味着无构建时错误。
2. **`serve.bat`** --- 实时重载服务器；在浏览器中导航到受影响的页面以发现视觉回归。
3. **`check.bat`** --- 离线链接和完整性检查；捕获更改引入的损坏链接和缺失页面。
4. **`book.bat`** --- 重新运行 PDF 构建；如果阶段或插件影响阶段 8 或 `book.html` 输出则需要。

干净运行全部四步是"准备好提交"的标准。

::: info
`check.bat` 需要先运行 `build.bat`；它从 `_site/` 和 `_site-offline/` 读取。
:::

---

## 另见

- [管线阶段](/official/Documentation/Pipeline-Stages) -- 每个阶段的完整数据模型和导出引用。
- [tbdocs 构建器](/official/Documentation/Builder) -- 管线的叙述性设计理念。
- [构建与部署](/official/Documentation/Building) -- 内容贡献者的日常构建工作流程。

> AI生成