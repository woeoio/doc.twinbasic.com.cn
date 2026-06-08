---
title: Column
parent: WaynesGrid
permalink: /tB/Packages/CustomControls/WaynesGrid/Column
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '92296d82-df02-40b2-92e5-b2d9dddddae5'
  PropagateID: '92296d82-df02-40b2-92e5-b2d9dddddae5'
  ReservedCode1: 'bd19733f-ca1f-4fbc-8395-b4e717af93df'
  ReservedCode2: 'bd19733f-ca1f-4fbc-8395-b4e717af93df'
---

# Column 类
[**WaynesGrid**](/official/Reference/CustomControls/WaynesGrid/) 的一列。具有显示在列标题行中的 [**Caption**](#caption) 和用户可在运行时拖动的 [**Width**](#width)。[**WaynesGrid.Columns**](/official/Reference/CustomControls/WaynesGrid/#columns) 的元素。

```vb
ReDim Grid1.Columns(2)
Set Grid1.Columns(0) = New Column
Grid1.Columns(0).Caption = "ID"
Grid1.Columns(0).Width = 80
```

## 属性

### Caption

列标题单元格中显示的文本。**String**。默认：`"Column"`。

### Width

列的宽度（像素，未经 DPI 缩放）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。默认：100。用户可在运行时通过拖动列右边缘的调整条编辑；运行时赋值立即更新网格。

## 事件

### OnChanged

[**Caption**](#caption) 或 [**Width**](#width) 被赋值时触发。父 [**WaynesGrid**](/official/Reference/CustomControls/WaynesGrid/) 监听此事件并请求重绘。