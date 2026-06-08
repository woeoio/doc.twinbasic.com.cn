---
title: "文档开发"
nav_order: 9
permalink: /Documentation/Development/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1bb83c30-4fde-4209-b796-33362e1e3146'
  PropagateID: '1bb83c30-4fde-4209-b796-33362e1e3146'
  ReservedCode1: '16555233-8d5a-474d-b116-242f5529213c'
  ReservedCode2: '16555233-8d5a-474d-b116-242f5529213c'
---

# 文档开发

本节涵盖与twinBASIC文档相关的一切：编译器和IDE依赖的URL契约、内容贡献者的构建/预览/部署工作流、仓库中的每个脚本和批处理文件，以及生成站点的 `tbdocs` 静态站点生成器的内部机制。

## 工具链概览

三个命令处理整个构建和验证工作流。`build.bat` 从Markdown源生成三个输出树；`check.bat` 验证两个HTML树的链接完整性；`book.bat` 从第三个渲染PDF。

![Toolchain overview](/assets/images/mmd/toolchain-overview.svg)

`build.bat` 必须在另外两个之前运行——`check.bat` 从 `_site/` 和 `_site-offline/` 读取，而 `book.bat` 从 `_site-pdf/` 读取。干净的 `build.bat && check.bat` 是"可以提交"的标准。

## 构建管线

单次 `build.bat` 运行驱动 `tbdocs` 经过八个阶段加一个Mermaid预阶段。

![Build pipeline, eight phases plus the Mermaid pre-phase](/assets/images/mmd/build-phases.svg)

阶段1--6生成在线树（`_site/`）。阶段7将其镜像为 `file://` 可浏览的离线副本。阶段8组装稀疏PDF源树，`book.bat` 稍后将其渲染为最终PDF。[管线阶段](/official/Documentation/Pipeline-Stages)页面记录了每个阶段的接口契约；[tbdocs构建器](/official/Documentation/Builder)页面涵盖了设计原理。

## 子页面

- [永久链接](/official/Documentation/Permanent-Links) —— IDE帮助系统、源代码中 `[Documentation(...)]` 属性链接和外部引用解析所依赖的稳定 `/tB/` URL契约。
- [构建与部署](/official/Documentation/Building) —— 编辑内容的日常工作流：要求、构建、本地服务、链接检查、Mermaid图、截图和GitHub Pages部署。
- [工具与脚本](/official/Documentation/Tools) —— 文档工具链中每个脚本、批处理文件和CLI标志的单行参考（目标读者：文档贡献者）。
- [tbdocs构建器](/official/Documentation/Builder) —— 位于[`builder/`](https://github.com/twinbasic/documentation/tree/main/builder)下的 `tbdocs` 静态站点生成器的详细技术文档。修改构建管线本身时阅读此页。子页面：
    - [管线阶段](/official/Documentation/Pipeline-Stages) —— 按阶段的接口参考：函数签名、读/写和每个导出符号。
    - [书籍配置](/official/Documentation/Book-Configuration) —— PDF章节清单的 `_book.yml` 键参考。
    - [扩展构建器](/official/Documentation/Extending) —— 添加新管线阶段或markdown-it插件的教程。
- [PDF生成](/official/Documentation/PDF-Generation) —— PDF渲染器的内部机制：`render-book.mjs`、paged.browser.js和pdf-lib垫片。
- [库补丁](/official/Documentation/Fixes) —— 对 `paged.browser.js` 和 `fast-*.mjs` pdf-lib垫片的每项修改：上游问题、应用的修复和机制。

> AI生成