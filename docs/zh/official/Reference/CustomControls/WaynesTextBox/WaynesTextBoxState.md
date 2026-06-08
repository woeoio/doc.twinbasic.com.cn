---
title: WaynesTextBoxState
parent: WaynesTextBox
permalink: /tB/Packages/CustomControls/WaynesTextBox/WaynesTextBoxState
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a75a39ea-e5ec-4602-b7f4-6f5fbd175636'
  PropagateID: 'a75a39ea-e5ec-4602-b7f4-6f5fbd175636'
  ReservedCode1: 'a24ffdf7-7ac0-42a7-893e-4f2ac2c1e4c1'
  ReservedCode2: 'a24ffdf7-7ac0-42a7-893e-4f2ac2c1e4c1'
---

# WaynesTextBoxState 类
描述 [**WaynesTextBox**](/official/Reference/CustomControls/WaynesTextBox/) 单个视觉状态的样式对象组合。每个文本框持有三个并行实例（[**NormalState**](/official/Reference/CustomControls/WaynesTextBox/#normalstate)、[**HoverState**](/official/Reference/CustomControls/WaynesTextBox/#hoverstate)、[**FocusedState**](/official/Reference/CustomControls/WaynesTextBox/#focusedstate)）；文本框在每次重绘时根据焦点/悬停状态选择一个。

除常见的背景/边框/角/文本渲染四重奏外，**WaynesTextBoxState** 还增加了选择高亮颜色、插入符颜色和宽度，以及三个装饰器填充用于文本框自动绘制的 *ERROR* / *WARNING* / *INFO* 字面子字符串装饰。

[**InitializeDefaultValues**](#initializedefaultvalues) 和 [**InitializeDefaultValues_Focused**](#initializedefaultvalues_focused) 用合理的默认值填充状态——焦点变体使用不同的选择背景和插入符颜色。

该类型本身为 `Public Class` 但标记为 `[COMCreatable(False)]`——实例只能通过文本框的 **NormalState** / **HoverState** / **FocusedState** 属性访问。

## 属性

### BackgroundFill

绘制文本框背景的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。默认纯白色。

### Borders

文本框周围绘制的 [**Borders**](/official/Reference/CustomControls/Styles/Borders)。默认 1 像素黑色边框。

### CaretFill

绘制插入符的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。正常状态默认纯黑色，焦点状态默认橙色。

### CaretWidth

插入符的宽度（像素）。**Long**。默认：1。

### Corners

控制逐角形状和半径的 [**Corners**](/official/Reference/CustomControls/Styles/Corners)。默认 **tbCurve**，半径 5。

### DecorationERROR

在 [**Value**](/official/Reference/CustomControls/WaynesTextBox/#value) 中检测到子字符串 `ERROR` 时绘制内联波浪装饰的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。默认纯红色。

### DecorationINFO

在 [**Value**](/official/Reference/CustomControls/WaynesTextBox/#value) 中检测到子字符串 `INFO` 时绘制内联背景高亮装饰的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。默认浅蓝色。

### DecorationWARNING

在 [**Value**](/official/Reference/CustomControls/WaynesTextBox/#value) 中检测到子字符串 `WARNING` 时绘制内联 2 像素直线下划线装饰的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。默认深蓝色。

### SelectedBackgroundFill

绘制选中文本背后背景的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。正常状态默认中灰色，焦点状态默认蓝色。

### SelectedTextFill

绘制选中字形本身的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。默认纯白色。

### TextRendering

控制 [**Value**](/official/Reference/CustomControls/WaynesTextBox/#value) 绘制方式的 [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering)。默认左对齐，左右 5 像素内边距，**tbDisallowPartialChars** 溢出。

## 方法

### InitializeDefaultValues

用包默认值填充每个字段——由 [**NormalState**](/official/Reference/CustomControls/WaynesTextBox/#normalstate) 和 [**HoverState**](/official/Reference/CustomControls/WaynesTextBox/#hoverstate) 使用。

语法：*object*.**InitializeDefaultValues**

### InitializeDefaultValues_Focused

先调用 [**InitializeDefaultValues**](#initializedefaultvalues)，然后用焦点特定颜色覆盖 [**SelectedBackgroundFill**](#selectedbackgroundfill) 和 [**CaretFill**](#caretfill)。

语法：*object*.**InitializeDefaultValues_Focused**

## 事件

### OnChanged

任一包含的样式对象触发其自身的 **OnChanged** 或 [**CaretWidth**](#caretwidth) 被赋值时触发。父 [**WaynesTextBox**](/official/Reference/CustomControls/WaynesTextBox/) 监听此事件并请求重绘。