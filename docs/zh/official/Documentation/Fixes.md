---
title: "库补丁"
parent: Documentation Development
nav_order: 9
permalink: /Documentation/Development/Fixes
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ea9de070-0d03-4ff2-8fcb-a40343efcb55'
  PropagateID: 'ea9de070-0d03-4ff2-8fcb-a40343efcb55'
  ReservedCode1: '30188a2f-9a0c-442f-953c-c0ec61aa17d3'
  ReservedCode2: '30188a2f-9a0c-442f-953c-c0ec61aa17d3'
---

# 库补丁

若干第三方库包含树内修改。`book/lib/paged.browser.js` 是 paged.js v0.4.3（MIT）的补丁副本；该目录下的十三个 `fast-*.mjs` 文件是应用于 pdf-lib 运行时导出的副作用垫片，在每次 PDF 处理阶段之前生效；`builder/scripts/patch-dagre.mjs` 是一个 `postinstall` 钩子，重写 mermaid 内置的 dagre 适配器以修复每集群布局问题。本节记录了每一处修改：上游行为是什么、为何不适用于构建管线、以及做了哪些改动。

## 子页面

- [Paged.js 补丁](/official/Documentation/Fixes-PagedJS) --- 对 `book/lib/paged.browser.js` 的修改：同步执行链、钩子分发快速路径、DOM 查找优化、布局正确性修复以及杂项无头浏览器专用变更。
- [pdf-lib 补丁](/official/Documentation/Fixes-PDFLib) --- 十三个 `fast-*.mjs` 垫片和 `parallel-deflate.mjs`，重新调整 pdf-lib 的解析器、对象模型和序列化器以优化处理阶段。
- [Mermaid Dagre 补丁](/official/Documentation/Fixes-Dagre) --- 对 `node_modules/mermaid/dist/chunks/mermaid.esm/dagre-ZXKKJJHT.mjs` 的五处补丁，使 `direction LR` 子图在有跨集群边或无内部边时能正确工作。

> AI生成