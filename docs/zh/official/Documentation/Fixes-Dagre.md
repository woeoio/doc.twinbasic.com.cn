---
title: "Mermaid Dagre 补丁"
parent: Library Patches
grand_parent: Documentation Development
nav_order: 3
permalink: /Documentation/Development/Fixes/Dagre
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4127acf0-22fd-465d-963c-6e5750754be4'
  PropagateID: '4127acf0-22fd-465d-963c-6e5750754be4'
  ReservedCode1: '328cac3d-ed55-4651-88f2-14f06482dc1f'
  ReservedCode2: '328cac3d-ed55-4651-88f2-14f06482dc1f'
---

# Mermaid Dagre 补丁

`node_modules/mermaid/dist/chunks/mermaid.esm/dagre-ZXKKJJHT.mjs` 是 mermaid 流程图解析器与 dagre 分层图布局算法之间的适配器。`builder/scripts/patch-dagre.mjs` 对其应用了五处补丁，作为仓库根 `package.json` 上的 npm `postinstall` 钩子连接，因此新的 `npm install` 会自动重新应用。本页记录了每个补丁 --- dagre 上游做什么、为何破坏了构建管线图表、以及做了哪些改动。

所有补丁都针对同一个捆绑文件。Mermaid（精确锁定在 11.15.0 以保持块文件名中的指纹哈希稳定）将 dagre 内联到 `dagre-ZXKKJJHT.mjs` 中，npm 包的加载路径直接导入该块，因此修补 `node_modules/dagre-d3-es/` 下的原始 `dagre-d3-es` 源在运行时无效。

## 带跨集群边的每集群方向（补丁 A）

**问题。** Mermaid 的 `extractor()` 仅当集群没有跨越其边界的边时才会将带 `direction LR`（或 `RL`）的子图提取到自己的布局过程 --- 当集群有跨边界边时，留在父图中作为复合节点，dagre 的主布局静默忽略其每集群的 `rankdir`。结果是：任何连接到自身外部内容的 `direction LR` 子图都会以从上到下方式渲染。

这是[构建管线图](/assets/images/mmd/build-phases.svg)背后的布局问题。`row1` 和 `row2` 是 LR 子图，但 `row1` 的最后一个节点连接到 `row2` 的第一个节点，这使两行都有外部连接，因此两者都未被提取，都渲染为垂直堆栈。

**修复。** 扩展 `extractor()` 中的 else 分支，使同时有外部连接和显式 `clusterData.dir` 的集群仍被提取到自己的子图中。在 `copy()` 移出子节点之前，每条跨越集群边界的边被重新路由为使用集群占位节点本身；原始端点节点 ID 保留在重新路由边上作为 `_patchOrigV` 和 `_patchOrigW`，以便补丁 B 稍后修复渲染路径。

```js
for (const { e: _e, child: _c, other: _other } of _patchEdges) {
  const _eData = graph.edge(_e);
  if (!_eData._patchOrigV) _eData._patchOrigV = _e.v;
  if (!_eData._patchOrigW) _eData._patchOrigW = _e.w;
  graph.removeEdge(_e.v, _e.w, _e.name);
  if (_e.v === _c) {
    graph.setEdge(node, _other, _eData, _e.name);
  } else {
    graph.setEdge(_other, node, _eData, _e.name);
  }
}
```

重新路由后，父图的跨集群边变为 `Cluster → ExternalCluster`，子图仅携带其内部边。Dagre 然后作为两次独立的遍历布局父图（此处为从上到下）和子图（从左到右）。

## 跨集群边端点（补丁 B）

**问题。** 一旦补丁 A 将跨集群边从 `Child → ExternalNode` 重新路由为 `Cluster → ExternalCluster`，dagre 将其布局为两个集群边界框中心之间的直线残段。视觉上那是两行框之间间隙中的短垂直线 --- 原始源和目标节点无从寻觅。

**修复。** 在 `recursiveRender()` 内，父图布局定位集群框后，跨集群边的路点被替换为从原始端点节点实际渲染位置计算的 L 形路由：

```js
const _sx = (_srcC.x - _srcC.width / 2 - _srcMx) + _srcN.x;
const _dx = (_dstC.x - _dstC.width / 2 - _dstMx) + _dstN.x;
const _srcEdgeY = (_srcC.y - _srcC.height / 2 - _srcMy) + _srcN.y + _srcN.height / 2;
const _dstEdgeY = (_dstC.y - _dstC.height / 2 - _dstMy) + _dstN.y - _dstN.height / 2;
const _srcBot = _srcC.y + _srcC.height / 2;
const _dstTop = _dstC.y - _dstC.height / 2;
const _gapY = (_srcBot + _dstTop) / 2;
edge.points = [
  { x: _sx, y: _srcEdgeY },   // exit source on its bottom edge
  { x: _sx, y: _srcBot },     // straight down past the source cluster rect
  { x: _sx, y: _gapY },       // into the gap between cluster rows
  { x: _dx, y: _gapY },       // across the gap to the destination column
  { x: _dx, y: _dstTop },     // down to the destination cluster rect
  { x: _dx, y: _dstEdgeY }    // enter destination on its top edge
];
```

`_Mx` / `_My` 减法考虑了 mermaid 的 `updateNodeBounds` 中一个微妙的簿记差异：它存储集群节点的 `x`/`y` 为边界框中心，但 `width`/`height` 为集群矩形尺寸（即不包含子图的 `marginx`/`marginy`），因此 `(_srcC.x - _srcC.width/2)` 给出矩形左边缘而非 SVG 组原点。减去子图边距恢复真实的组原点，使绝对坐标正确映射回来。

使用 mermaid 默认的 `curveBasis` 插值器，六个路点渲染为平滑曲线，从源节点底边出发，扫过两个集群行之间的间隙，进入目标节点顶边。

## 跨集群箭头 z 顺序（补丁 C）

**问题。** Mermaid 以固定声明顺序渲染顶层 SVG 子元素：`clusters`、`edgePaths`、`edgeLabels`、`nodes`。跨集群边的路径位于顶层 `edgePaths` 组中，在 `nodes` 之前渲染。集群子图（及其集群矩形）位于 `nodes` 内。因此集群矩形绘制在跨集群箭头之上。

**修复。** 在 `recursiveRender` 完成插入父图中的所有边后，如果其中任何边是跨集群边（携带补丁 A 的 `_patchOrigV`/`_patchOrigW`），整个顶层 `edgePaths` 组通过 d3 的 `selection.raise()` 移动到父元素的末尾：

```js
if (graph.edges().some(_re => {
  const _red = graph.edge(_re);
  return _red && _red._patchOrigV && _red._patchOrigW;
})) {
  edgePaths.raise();
}
```

集群子图内的内边位于其自己的 SVG 组中，因此保持其自然的组内排序，不受影响。

## 无边 LR 子图（补丁 D）

**问题。** Dagre 的 `rank` 步骤基于节点之间的边分配每个节点的排名；在 LR 布局中，排名成为 x 坐标列。当子图的子节点之间没有边时，dagre 将每个节点放在排名 0，排名 0 是单列 --- 因此子节点无论声明了 `direction LR` 与否都垂直堆叠。

[`pdf-render-pipeline.mmd` PHASE8 子图](/assets/images/mmd/pdf-render-pipeline.svg)就遇到这个问题：它列出了从 `pdf.mjs` 调用的三个兄弟函数，不是序列，因此 `ASM`、`CSS` 和 `IMG` 之间没有箭头。没有补丁它们在垂直列中渲染。

**修复。** 在 `recursiveRender` 内 `layout(graph)` 运行之前，按父节点分组每个节点，并在连续的孤立兄弟对之间注入仅布局链式边 --- 两端都没有兄弟间边的对：

```js
const _patchSiblingMap = new Map();
for (const _n of graph.nodes()) {
  const _p = graph.parent(_n) || "__root__";
  if (!_patchSiblingMap.has(_p)) _patchSiblingMap.set(_p, []);
  _patchSiblingMap.get(_p).push(_n);
}
for (const _siblings of _patchSiblingMap.values()) {
  if (_siblings.length < 2) continue;
  const _siblingSet = new Set(_siblings);
  const _isolated = new Set();
  for (const _s of _siblings) {
    let _hasSiblingEdge = false;
    const _ne = graph.nodeEdges(_s) || [];
    for (const _e of _ne) {
      const _other = _e.v === _s ? _e.w : _e.v;
      if (_siblingSet.has(_other)) { _hasSiblingEdge = true; break; }
    }
    if (!_hasSiblingEdge) _isolated.add(_s);
  }
  for (let _pi = 0; _pi < _siblings.length - 1; _pi++) {
    const _u = _siblings[_pi];
    const _v = _siblings[_pi + 1];
    if (_isolated.has(_u) && _isolated.has(_v)) {
      graph.setEdge(_u, _v, { _patchInvisible: true, weight: 1, minlen: 1 });
    }
  }
}
```

两个值得指出的设计选择：

- **按父节点分组，而非叶子过滤。** 当 `recursiveRender` 递归进入子图时，它会将父集群作为节点重新添加并将子节点重新挂载到它下面，因此此时的 `graph.nodes()` 返回 `[ASM, CSS, IMG, PHASE8]`。按 `graph.parent()` 分组将叶子放入 `"PHASE8"` 组，`PHASE8` 本身放入 `"__root__"` 组，因此子节点永远不会被链接到自己的父节点。（早期版本使用 `children().length === 0` 叶子过滤器；当嵌套子图中的两个复合兄弟需要链接时，这破坏了 dagre 的排名步骤。）
- **仅孤立对。** 当一个兄弟的边没有一条指向同组中另一个兄弟时，该兄弟是"孤立的"。仅当两个兄弟都是孤立的时候才添加链式边。这保留了扇出拓扑：在 `build-phases.mmd` 的 row3 中，`P7` 和 `P8` 都有来自兄弟 `P6` 的入边，因此两者都不是孤立的，不添加 `P7 → P8` --- 扇出保持为扇出。

**行为示例。**

| 子图（`direction LR`） | 无补丁 D 时 dagre 的行为 | 补丁 D 添加了什么 | 结果 |
|---|---|---|---|
| `A; B; C`（无边） | 全部排名 0，单列 | `A → B`、`B → C` | 三列，按声明顺序 |
| `A → B; C; D` | A、C、D 在排名 0；B 在排名 1 | 仅 `C → D`（A 和 B 不是孤立的） | A 和 B 在自己的行，C 和 D 在下方行，分两列 |
| `P6 → P7; P6 → P8` | P6 在排名 0；P7、P8 共享排名 1 | 无（P7 和 P8 各有来自 P6 的兄弟边） | 扇出：P6 在列 0，P7 在 P8 上方在列 1 |

::: info
链式边反映 mermaid 解析子节点的顺序。对于精细控制或复杂拓扑，作者仍应编写显式 `-->` 边（或 `~~~` 不可见边）；补丁 D 仅自动排列严格孤立相邻兄弟。
:::

## 渲染时的不可见边（补丁 E）

**问题。** 补丁 D 的链式边仅用于 dagre 的布局 --- 它们没有视觉意义，会在兄弟框之间绘制为令人困惑的箭头。

**修复。** 在 `recursiveRender` 中布局后边循环顶部的守卫跳过任何标记了 `_patchInvisible` 的边：

```js
graph.edges().forEach(function(e) {
  const edge = graph.edge(e);
  if (edge._patchInvisible) return;
  log.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(edge), edge);
  edge.points.forEach((point) => point.y += subGraphTitleTotalMargin / 2);
  ...
});
```

`processEdges()` 在 `recursiveRender` 中在 `layout()` 之前运行，因此补丁 D 注入的不可见边在 `insertEdgeLabel` 迭代时尚未在图中 --- 它们仅存在于补丁 D 的 setEdge 调用和补丁 E 的跳过之间，中间隔着 `layout()`。补丁 D 和 E 共同检测 dagre 会处理不当的拓扑，并修补布局而不改变用户的可见图表。

## 补丁应用

`builder/scripts/patch-dagre.mjs` 作为仓库根 npm `postinstall` 钩子运行（依赖整合后仓库根只有一个 `package.json`；不再有 `builder/` 下的单独安装）。在新的 `npm install` 上，脚本按顺序应用所有五个补丁；重新运行时它检测已应用的补丁（通过检查每个补丁独有的标记字符串）并跳过。脚本还携带早期补丁版本的迁移路径：它检测进行中的升级并将先前版本的文本转换为当前版本，而非使 `postinstall` 失败。

仓库根 `package.json` 中对 `mermaid` 的精确锁定保持 `ZXKKJJHT` 指纹稳定：mermaid 在每次发布时重新生成其包哈希，因此浮动的 `^11.15.0` 可能在补丁更新时漂移块文件名并破坏 postinstall 目标路径。精确锁定以手动 mermaid 更新的少量 lockfile 变更为代价换取构建确定性。

如果 mermaid 升级到更改 `dagre-ZXKKJJHT.mjs` 结构的版本，脚本将以 `target not found` 明确失败，`patch-dagre.mjs` 中的补丁文本需要针对新源重新生成 --- 补丁是精确的字符串替换，而非正则匹配。

> AI生成