---
title: WaynesButtonState
parent: WaynesButton
permalink: /tB/Packages/CustomControls/WaynesButton/WaynesButtonState
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '21fc4f5b-ea61-400f-8d97-8ccb27f3b4a8'
  PropagateID: '21fc4f5b-ea61-400f-8d97-8ccb27f3b4a8'
  ReservedCode1: '4f553b31-90c3-4fb6-b58c-bb2ce4d39bd7'
  ReservedCode2: '4f553b31-90c3-4fb6-b58c-bb2ce4d39bd7'
---

# WaynesButtonState 类
描述 [**WaynesButton**](/official/Reference/CustomControls/WaynesButton/) 单个视觉状态的四个样式对象组合——角、背景填充、边框和文本渲染。每个按钮有四个并行实例，分别通过 [**NormalState**](/official/Reference/CustomControls/WaynesButton/#normalstate)、[**HoverState**](/official/Reference/CustomControls/WaynesButton/#hoverstate)、[**FocusedState**](/official/Reference/CustomControls/WaynesButton/#focusedstate) 和 [**PressedState**](/official/Reference/CustomControls/WaynesButton/#pressedstate) 访问；按钮在每次重绘时根据鼠标/焦点状态选择一个。

新构造的 **WaynesButtonState** 对象预设 **BackgroundFill** 为纯中蓝色，四个角为 15 像素曲线。按状态覆盖以使按钮在不同状态下呈现不同外观。

该类型本身为 `Private Class`——实例只能通过 **WaynesButton.…State** 属性访问，无法在包外声明 **WaynesButtonState** 类型的变量。

```vb
With btnGo.NormalState
    .BackgroundFill.ColorPoints.SetSolidColor vbBlue
    .TextRendering.Fill.ColorPoints.SetSolidColor vbWhite
End With

With btnGo.HoverState
    .BackgroundFill.SetSimplePattern vbBlue, &HE0E0FF, _
            Pattern:=tbGradientNorthToSouth
    .Borders.SetSimpleBorder StrokeSize:=2, ColorRGB:=vbBlue
End With
```

## 属性

### BackgroundFill

绘制按钮背景的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。

### Borders

绘制按钮边框笔触的 [**Borders**](/official/Reference/CustomControls/Styles/Borders)。

### Corners

控制逐角形状和半径的 [**Corners**](/official/Reference/CustomControls/Styles/Corners)。

### TextRendering

控制按钮 [**Caption**](/official/Reference/CustomControls/WaynesButton/#caption) 绘制方式的 [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering)。

## 方法

### InitializeDefaults

将状态对象重置为包的默认值——纯中蓝色 **BackgroundFill** 和 15 像素曲线角。如果未加载序列化数据，则在父按钮首次初始化时自动调用。

语法：*object*.**InitializeDefaults**

## 事件

### OnChanged

四个包含的样式对象中任一个触发其自身的 **OnChanged** 时触发。父 [**WaynesButton**](/official/Reference/CustomControls/WaynesButton/) 监听此事件并请求重绘。