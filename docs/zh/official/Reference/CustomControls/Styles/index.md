---
title: Styles
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/Styles/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a39dd02e-e0d8-4cac-9931-726aebf1c45c'
  PropagateID: 'a39dd02e-e0d8-4cac-9931-726aebf1c45c'
  ReservedCode1: '9aa9670a-e003-45d0-b9ae-2676b7d2b7bd'
  ReservedCode2: '9aa9670a-e003-45d0-b9ae-2676b7d2b7bd'
---

# 样式

[**CustomControls**](/official/Reference/CustomControls/) 包的具体 `Waynes…` 控件使用的共享外观辅助类。每个都是相关视觉设置的小型容器——[**Fill**](/official/Reference/CustomControls/Styles/Fill) 是颜色或渐变，[**Borders**](/official/Reference/CustomControls/Styles/Borders) 是边框笔触数组，[**Corners**](/official/Reference/CustomControls/Styles/Corners) 是每个角的形状和半径，等等。控件通过 `Public WithEvents …` 属性组合它们：[**WaynesButton**](/official/Reference/CustomControls/WaynesButton/) 持有四个 [**WaynesButtonState**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState) 子对象（Normal / Hover / Focused / Pressed），每个有自己的 [**BackgroundFill**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState#backgroundfill)、[**Borders**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState#borders)、[**Corners**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState#corners) 和 [**TextRendering**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState#textrendering)。

每个样式对象在其任意公共字段被赋值时触发 **OnChanged** 事件。承载控件监听每个子对象上的此事件并请求框架重绘，因此运行时所做的样式更改会立即反映。

| 类 | 作用 |
|----|------|
| [Anchors](/official/Reference/CustomControls/Styles/Anchors) | 容器调整大小时控件的哪些边附着到容器 |
| [Borders](/official/Reference/CustomControls/Styles/Borders) | 绘制在区域周围的边框笔触数组；包含逐笔触 `Border` 子对象 |
| [Corners](/official/Reference/CustomControls/Styles/Corners) | 区域的四个角形状/半径；包含逐角 `Corner` 子对象 |
| [Fill](/official/Reference/CustomControls/Styles/Fill) | 绘制区域的颜色或渐变；包含持有渐变 stops 的 `FillColorPoint` 和 `FillColorPoints` 子对象 |
| [Line](/official/Reference/CustomControls/Styles/Line) | 单条网格线或调整条笔触；比完整边框更细的形状 |
| [Padding](/official/Reference/CustomControls/Styles/Padding) | [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) 内文本的逐侧内边距 |
| [TextRendering](/official/Reference/CustomControls/Styles/TextRendering) | 文本的字体、内边距、填充、轮廓、对齐和溢出；包含持有字体度量的 `FontStyle` 子对象 |

样式类在 **CustomControlsPackage** 源码中声明为 `Private Class`——无法从包外使用 `New` 创建，无法在引用项目中声明如 `Dim x As Fill` 类型的变量。应用程序代码仅通过挂在具体控件上的属性链访问每个样式对象。