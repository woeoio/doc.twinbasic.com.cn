---
title: "Paged.js 补丁"
parent: Library Patches
grand_parent: Documentation Development
nav_order: 1
permalink: /Documentation/Development/Fixes/PagedJS
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '891ae9b2-fc7b-4b96-b5b6-1deb0322833b'
  PropagateID: '891ae9b2-fc7b-4b96-b5b6-1deb0322833b'
  ReservedCode1: '551ca7ae-8b16-40a1-b9e9-569e7142fb84'
  ReservedCode2: '551ca7ae-8b16-40a1-b9e9-569e7142fb84'
---

# Paged.js 补丁

`book/lib/paged.browser.js` 是 paged.js v0.4.3（MIT）的内置修补副本。上游 paged.js 为交互式浏览器设计：它让出事件循环以在长时间渲染期间保持页面响应，全程使用异步函数，并注册观察和调整大小回调。这些在无头、非交互式 Chromium 进程中都无用，唯一的目标是尽快生成 PDF。本页记录了每个补丁及其原理。

## 同步执行链

**问题。** 上游 paged.js 由 `async function` 链构建。核心让出机制是 `waitForTick()`，在核心 `*layout` 生成器内每 100 个布局对象调用一次。在 1651 页的书籍上，这增加了数千次强制事件循环轮转。除 `waitForTick()` 外，异步机制本身 --- 每个函数编译为 tslib `__awaiter` + `__generator` 状态机 --- 即使在从不实际让出的路径上也为每次调用分配一个 Promise。

在无头 Chromium 中，事件循环不与任何面向用户的交互共享；让出只会增加延迟而无任何好处。`preview()` 返回 Promise 也使每页钩子架构复杂化：意外异步的处理程序可能让其可等待的工作被静默丢弃。

**修复。** 十四个方法被重写为同步等效方法，整个文件中标记为 `[PATCH: sync-chain]`。

| 方法 | 变更 |
|---|---|
| `*layout()` | 同步生成器；`renderer.next()` 同步返回。 |
| `render()` | 普通同步；不再有每页异步状态机。 |
| `renderTo()` | 移除 `async`；`renderTo` 同步返回。 |
| `layout()` | 移除 `async`；同步调用 `renderTo` 和 `handleBreaks`。 |
| `handleBreaks()` | 不再等待钩子触发；`Hook.trigger()` 在全同步路径上返回 `undefined`。 |
| `flow()` | 移除所有五个 `await` 站点；`beforeParsed`/`afterParsed`/`afterRendered` 钩子同步调用并由 `_assertSync` 保护。 |
| `renderOnIdle()` / `renderAsync()` | 完全移除；两者都在不必要的异步机制中包裹 `renderer.next()`。 |
| `clonePage()` | 移除 `async`；仅通过 `Footnotes` 处理程序可达，当文档没有脚注时该处理程序自禁用。 |
| `loadFonts()` | 重写为同步断言。`render-book.mjs` 中的 `waitUntil: "load"` 保证在 paged.js 运行前每个 `FontFace` 已加载。 |
| `parse()` | 移除 `async`；此管线中为其触发的钩子注册的处理程序没有异步的。 |
| `request()` | 替换为同步 XHR（`XMLHttpRequest` 且 `async=false`），直接返回 `responseText`。 |
| `add()` | 移除 `async`；所有输入都是行内 `{url: text}` 对象，无需获取。 |
| `convertViaSheet()` | 移除 `async`；`request()` 现在直接返回文本。 |

在每个接收 `Hook.trigger()` 同步哨兵值的调用站点添加了保护函数 `_assertSync(triggerResult, hookName)`。如果处理程序返回 thenable，`_assertSync` 立即抛出包含钩子名称的异常，而非静默丢弃异步工作。

::: info
`render-book.mjs` 中的 `await page.evaluate(...)` 是 puppeteer 对 CDP 往返的要求，而非 `preview()` 在 Chromium 内部是异步的标志。`await` 仅在 Chromium 的同步执行完成且 CDP 响应返回到 Node 后才解析。
:::

## 钩子分发快速路径

**问题。** `Hook.trigger()` 总是返回 `Promise.all(promises)`，将每个同步处理程序结果包裹在 `new Promise(resolve => resolve(...))` 中。调用者总是等待结果，即使没有异步处理程序也支付微任务边界。`Hook.triggerSync()`（用于每页钩子的同步变体）总是分配结果数组并对其调用 `.forEach`，即使 `this.hooks` 为空。此管线中 `onOverflow` 和 `onBreakToken` 钩子注册了零个处理程序；`triggerSync` 每次渲染被调用约 3300 次纯属分发开销。

**修复。** `[PATCH: hook-fast-path]` 当所有处理程序完成且未返回 thenable 时，`trigger()` 返回 `undefined`（同步哨兵）而非已解析的 Promise。调用者被重写为：

```js
let p = hook.trigger(...);
if (p) await p;
```

`[PATCH: hook-fast-path-sync]` 当 `this.hooks` 为空时，`triggerSync()` 立即返回 `undefined`，跳过数组分配和 `.forEach`。

在每个现在接收同步哨兵值的调用站点，`_assertSync(result, hookName)` 在结果为 thenable 时抛出，将静默正确性风险转化为可诊断的错误。

## DOM 元素查找

### indexOfRefs 字典

**问题。** `findElement(ref, root)` 通过其 `data-ref` 属性查找元素。当 `indexOfRefs` 快速路径字典未填充时，它回退到 `root.querySelector("[data-ref='X']")`，扫描整个 `root` 子树。在 1651 页的书籍上，仅 `createBreakToken` 内的 848 + 42 次此类扫描就占用了超过一秒的渲染时间。

**修复。** `[PATCH: findRef fast-path]` 在 `addRefs()` 遍历期间，每个具有 `data-ref` 属性的元素被记录到 `root.indexOfRefs` 中。后续的 `findElement` 调用命中字典并完全跳过 `querySelector` 扫描。

### 片段合并

**问题。** 当 `append()` 重建祖先并通过 `dest.appendChild(fragment)` 插入时，重建节点的 `data-ref` 映射未被带入 `dest.indexOfRefs`。后续的 `findElement(rebuiltAncestor, dest)` 调用未命中字典并回退到 `querySelector`。

**修复。** `[PATCH: findRef fast-path]` 在 `dest.appendChild(fragment)` 之后，`fragment.indexOfRefs` 在单次遍历中合并到 `dest.indexOfRefs`。

### 源 indexOfRefs 表示

**问题。** 源内容的 `indexOfRefs` 是普通 JavaScript 对象（`{}`）。当键计数很大时，V8 将此类对象表示为哈希映射：每条目约 40-50 字节。键是转换为顺序整数的十进制字符串 UUID 计数器。

**修复。** `[PATCH: source-indexOfRefs-array]` 源 `indexOfRefs` 现在是普通 `Array`。V8 将其存储为 `PACKED_ELEMENTS`（密集数组模式）：每槽约 8 字节。`[PATCH: source-indexOfRefs-presize]` 数组在遍历前从 `HTMLCollection.length` 预设大小，消除遍历期间的几何增长后备存储重新分配。

## 父节点查找缓存

**问题。** `append()` 的内层循环通过调用 `findElement(srcParent, dest)` 为每个源节点解析目标父节点（`destParent`）。源树中的连续兄弟共享相同的 `srcParent`；每个兄弟独立调用 `findElement`。

**修复。** `[PATCH: parent-lookup-cache]` `Layout` 实例上的单条备忘存储最后的 `(srcParent, dest) → destParent` 解析。连续兄弟命中缓存并跳过字典查找。备忘在每次 `renderTo` 调用开始时失效，因为 `removeOverflow` 可能在两次调用之间分离了缓存的 `destParent`。

## data-ref 属性缓存

**问题。** `element.dataset.ref` 内部调用 `getAttribute` 并在每次访问时分配新的 JS 字符串。`addRefs` 遍历和 `append()` 各读取同一属性值两次：一次用于存在检查，一次用于 `indexOfRefs` 写入。

**修复。** `[PATCH: addRefs-uuid-local]` / `[PATCH: append-ref-local]` 通过 `getAttribute` 将属性读取一次到局部变量并在两个操作中复用。这在 `addRefs` 遍历中每个元素和每次 append 调用中各保存一次字符串分配 --- 书籍上约 50,000 次调用，按 A/B 采样对测量约 1.5 MB 堆减少。

## 渲染队列调度器

**问题。** 内部渲染队列使用 `requestAnimationFrame` 作为其每任务节拍。在无头 puppeteer 渲染中，`rAF` 即使没有可视输出和交互也仍等待下一个合成器帧。在 1651 页的书籍上，每页队列迭代累积了约 700 ms 的 V8 空闲时间来自 `rAF` 延迟回调。

**修复。** `[PATCH: queue-tick]` 每任务回调使用 `queueMicrotask` 而非 `requestAnimationFrame` 调度。它在微任务检查点触发而非等待合成器帧。

## 页面布局正确性

### maxChars 冻结

**问题。** 上游以 `!settings.maxChars` 为门控条件来决定是否更新每页 `maxChars` 估计值。在第一次带非空页面的遍历中，`settings.maxChars` 被设置，门控阻止了任何后续更新。对于开头页面较短的书籍（标题页、部分分隔），估计永久偏小，导致后续满文本页面上的不必要溢出检查。

**修复。** `[PATCH: maxChars-propagate]` 移除 `!settings.maxChars` 门控。估计值每页重新计算。

### maxChars 估计算法

**问题。** 更新后的 `maxChars` 估计是最近四页文本内容长度的滚动平均值。滚动平均值被短页面（章节末尾、全页图片）拉低，导致估计对后续的正常页面偏低预测，触发过多的溢出检查。

**修复。** `[PATCH: maxChars-running-max]` 滚动平均值替换为运行最大值。估计跟踪到目前为止看到的最大页面而非最近均值。

### 循环检测

**问题。** 断开 token 的循环检测在 Array 上使用 `tokens.lastIndexOf(breakToken)`，每页最多扫描 N 个条目。在 1651 页渲染中这是 O(n²)。

**修复。** `[PATCH: tokens-set]` Array 替换为 `Set`，将每次查找成本从 O(n) 降低到 O(1)。

## 边距组渲染

**问题。** `finalizePage` 钩子通过在布局时读取 `getComputedStyle()` 计算每页边距组的 `grid-template-columns` 和 `grid-template-rows` 值。这触发布局刷新且每页运行一次。

**修复。** `[PATCH: emit static grid-template rules]` grid-template 决策树提升到 `AtPage.emitMarginGridTemplates()`，在 CSS 解析阶段从 `afterTreeWalk` 调用一次。它从解析的 `@page` AST 读取每个边距格的有效 `hasContent` / `max-width` / `max-height` --- 在 CSS 遍历期间作为字符串捕获 --- 并将静态 `grid-template-columns` / `grid-template-rows` 规则发出到样式表中。浏览器通过层叠将它们应用于每个匹配的页面类。每页的 `finalizePage` 仅保留布局后真正需要 DOM 检查的情况。

## 内容准备

### innerHTML 往返

**问题。** `[PATCH: wrap-content-move]` 上游通过 `innerHTML` 将 `<body>` 内容序列化为字符串并重新解析到 `<template>` 来将其移入 paged.js 的布局容器。对于大型书籍，此序列化代价高昂且销毁活跃 DOM 节点，需要完全重新解析。

**修复。** 子节点通过 `appendChild` 直接移入活文档拥有的普通 `DocumentFragment`。片段存储在标记 `<template>` 元素的 `_pagedjsContent` 扩展属性上，使重入调用返回已移入的片段而非尝试移动已分离的节点。

### 空白过滤器

**问题。** `[PATCH: whitespace-filter-opt-in]` 空白过滤器 --- 将元素间空白文本节点包裹在 `<span class="w">` 中以防止 paged.js 在分页处丢弃 --- 默认在所有文档上运行。

**修复。** 过滤器默认禁用。`book.html` 的元素间空白在文件被 paged.js 读取之前由 tbdocs 构建管线剥离，因此过滤器找不到要包裹的内容。

## 处理程序自禁用

**问题。** `Footnotes` 和类似处理程序在启动时无条件注册每页钩子（`renderNode`、`afterPageLayout`、`beforePageLayout`、`afterOverflowRemoved`），即使文档不包含脚注。这些钩子在每个页面上触发却无事可做。

**修复。** `[PATCH: handler-self-disable]` 处理程序跟踪其注册的每个 `(hook, bound)` 对。`[PATCH: footnotes-self-disable]` `Footnotes` 处理程序在 `afterParsed` 中检查解析文档中是否存在任何 `float: footnote` CSS 规则或 `data-note="footnote"` 元素。如果两者都不存在，它在布局开始前从所有每页钩子中移除自身。

相关的 `[PATCH: extract-vs-delete]` 在 `Footnotes` 每页处理程序中保护 `removed` 访问：当 `removeOverflow` 走了 `deleteContents` 快速路径（渲染区域无脚注）时，`removed` 为 `null`。该保护防止在该路径上对 `null` 的未检查属性访问。

## ResizeObserver

**问题。** `[PATCH: disable-resize-observer]` 上游在布局包装器上注册 `ResizeObserver` 以检测后期加载资源（字体、图片）引起的布局后回流。在无头管线中，`waitUntil: "load"` 保证在 paged.js 运行前所有资源都已存在并加载；观察者从不触发。

**修复。** 此分支中 `addResizeObserver()` 为空操作。

## 另见

- [pdf-lib 补丁](/official/Documentation/Fixes-PDFLib) -- 处理阶段应用的 pdf-lib 垫片。
- [PDF 生成](/official/Documentation/PDF-Generation) -- paged.js 包如何融入三阶段渲染管线。

> AI生成