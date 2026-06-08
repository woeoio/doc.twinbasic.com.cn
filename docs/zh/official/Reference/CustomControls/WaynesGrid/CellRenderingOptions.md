---
title: CellRenderingOptions
parent: WaynesGrid
permalink: /tB/Packages/CustomControls/WaynesGrid/CellRenderingOptions
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '43391e67-8502-4547-9910-7c1b3aafebf2'
  PropagateID: '43391e67-8502-4547-9910-7c1b3aafebf2'
  ReservedCode1: 'ae4d774f-91fd-4dd2-b899-a05b2b48a8c8'
  ReservedCode2: 'ae4d774f-91fd-4dd2-b899-a05b2b48a8c8'
---

# CellRenderingOptions 类
描述 [**WaynesGrid**](/official/Reference/CustomControls/WaynesGrid/) 中一个*类别*单元格的样式对象组合。每个网格有六个并行实例——列标题、行标题、普通单元格、悬停单元格、选中单元格以及全行或全列多选内的单元格各一个——网格在绘制时为每个单元格选择适当的实例。

```vb
With Grid1.SelectedCellOptions
    .Fill.ColorPoints.SetSolidColor &HFFEEAA   ' pale blue
    .Borders.SetSimpleBorder StrokeSize:=2, ColorRGB:=vbBlue
End With
```

## 属性

### Borders

绘制在单元格周围的 [**Borders**](/official/Reference/CustomControls/Styles/Borders)。

### Corners

控制单元格逐角形状和半径的 [**Corners**](/official/Reference/CustomControls/Styles/Corners)。大多单元格使用默认的直角 90° 角；圆角仅在单个高亮单元格上有意义，而非列中每个单元格。

### Cursor

光标悬停在此类别单元格上时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants) 的成员。默认 **vbDefault**；网格在列标题和行标题实例上内部设置 **vbHand** 以指示这些行/列可点击进行多选。

### Fill

绘制单元格背景的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。新构造的 **CellRenderingOptions** 实例默认为纯中灰色背景（[**WAYNESCOLOR_GREY**](#) —— `&H808080`）。

### TextRendering

控制单元格文本（由 [**GetCellText**](/official/Reference/CustomControls/WaynesGrid/#getcelltext) 事件提供）绘制方式的 [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering)。

## 方法

### New

用默认中灰色填充构造 [**CellRenderingOptions**](#)。

语法：**New CellRenderingOptions**

## 事件

### OnChanged

任一包含的样式对象触发其自身的 **OnChanged** 或 [**Cursor**](#cursor) 被赋值时触发。父 [**WaynesGrid**](/official/Reference/CustomControls/WaynesGrid/) 监听此事件并请求重绘。