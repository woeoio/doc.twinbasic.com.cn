---
title: CustomControls
parent: Tutorials
permalink: /Tutorials/CustomControls/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'bd719162-68ee-4743-bcb2-7d597263acec'
  PropagateID: 'bd719162-68ee-4743-bcb2-7d597263acec'
  ReservedCode1: '1b3732c5-f312-493d-94e9-cd91f32ff36b'
  ReservedCode2: '1b3732c5-f312-493d-94e9-cd91f32ff36b'
---

# CustomControls

twinBASIC现在提供对CustomControls的实验性支持。CustomControls使用BASIC语言实现，允许开发者直接从twinBASIC环境中设计控件。

主要亮点：

- 完全自绘控件，无外部或第三方依赖（极小体积）
- 支持32位RGBA实现完全Alpha透明
- 支持高DPI模式（每显示器），设计新控件时几乎无需额外考虑
- 通过twinBASIC集成调试器提供完整调试支持
- 针对效率设计，支持包含数百个元素的复杂控件（如具有数百单元格的DataGrid）
- 针对灵活性设计，支持圆角、多重边框、背景渐变等
- 窗体引擎支持锚定和停靠，CustomControl开发者无需任何额外考虑
- 通过内置窗体设计器进行简单的属性表同步

## 另见

- [CustomControls包参考](/official/Reference/CustomControls/) —— 内置 `Waynes…` 控件及其构建框架的完整参考，包括[`ICustomControl`](/official/Reference/CustomControls/Framework/ICustomControl)、[`Canvas`](/official/Reference/CustomControls/Framework/Canvas)和样式辅助工具（[`Fill`](/official/Reference/CustomControls/Styles/Fill)、[`Corners`](/official/Reference/CustomControls/Styles/Corners)、[`Borders`](/official/Reference/CustomControls/Styles/Borders)、[`TextRendering`](/official/Reference/CustomControls/Styles/TextRendering)、……）

> AI生成