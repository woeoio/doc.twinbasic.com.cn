---
title: WaynesSliderState
parent: WaynesSlider
permalink: /tB/Packages/CustomControls/WaynesSlider/WaynesSliderState
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '691c1664-46bd-440e-9347-a1d12abd67f1'
  PropagateID: '691c1664-46bd-440e-9347-a1d12abd67f1'
  ReservedCode1: 'be5b8833-7b33-4925-be74-ad4179a4d5a1'
  ReservedCode2: 'be5b8833-7b33-4925-be74-ad4179a4d5a1'
---

# WaynesSliderState 类
描述 [**WaynesSlider**](/official/Reference/CustomControls/WaynesSlider/) 单个视觉状态的样式对象组合。每个滑块持有三个并行实例（[**NormalState**](/official/Reference/CustomControls/WaynesSlider/#normalstate)、[**HoverState**](/official/Reference/CustomControls/WaynesSlider/#hoverstate)、[**FocusedState**](/official/Reference/CustomControls/WaynesSlider/#focusedstate)）；滑块在每次重绘时根据鼠标/焦点状态选择一个。

状态有两半——*背景*（滑块后面的完整轨道）和*滑块*（指示 [**Value**](/official/Reference/CustomControls/WaynesSlider/#value) 的可拖动矩形）。每半部分有其自己的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)、[**Borders**](/official/Reference/CustomControls/Styles/Borders) 和 [**Corners**](/official/Reference/CustomControls/Styles/Corners)。状态上的 [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) 控制可选的 [**DisplayFormat**](/official/Reference/CustomControls/WaynesSlider/#displayformat) 文本如何绘制在滑块上。

[**InitializeDefaultValues**](#initializedefaultvalues) 预设滑块为纯中蓝色（[**WAYNESCOLOR_BLUE**](#) —— `&HAC7220`）填充、2 像素黑色背景边框和作为背景内部内边距的透明滑块边框。

该类型本身为 `Public Class` 但无法从包外实例化——实例只能通过滑块的 **NormalState** / **HoverState** / **FocusedState** 属性访问。

## 属性

### BackgroundBorders

绘制在背景轨道周围的 [**Borders**](/official/Reference/CustomControls/Styles/Borders)。

### BackgroundCorners

控制背景轨道逐角形状和半径的 [**Corners**](/official/Reference/CustomControls/Styles/Corners)。

### BackgroundFill

绘制背景轨道的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。

### BlockBorders

绘制在滑块周围的 [**Borders**](/official/Reference/CustomControls/Styles/Borders)。

### BlockCorners

控制滑块逐角形状和半径的 [**Corners**](/official/Reference/CustomControls/Styles/Corners)。

### BlockFill

绘制滑块的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。

### BlockWidth

滑块的宽度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。默认：100。当 [**Direction**](/official/Reference/CustomControls/WaynesSlider/#direction) 为 **Vertical** 时，这是滑块的*高度*而非宽度；滑块的另一维度占滑块控件的全部可用范围。

### TextRendering

控制可选 [**DisplayFormat**](/official/Reference/CustomControls/WaynesSlider/#displayformat) 文本如何在滑块上渲染的 [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering)。

## 方法

### InitializeDefaultValues

将状态对象重置为包的默认值——纯中蓝色滑块填充、2 像素黑色背景边框和透明滑块边框。如果未加载序列化数据，则在父滑块首次初始化时自动调用。

语法：*object*.**InitializeDefaultValues**

## 事件

### OnChanged

任一包含的样式对象触发其自身的 **OnChanged** 或 [**BlockWidth**](#blockwidth) 被赋值时触发。父 [**WaynesSlider**](/official/Reference/CustomControls/WaynesSlider/) 监听此事件并请求重绘。