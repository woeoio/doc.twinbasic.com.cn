---
title: Line
parent: Styles
permalink: /tB/Packages/CustomControls/Styles/Line
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9c34b6b2-4301-485d-a29e-d71647baed97'
  PropagateID: '9c34b6b2-4301-485d-a29e-d71647baed97'
  ReservedCode1: '07f7c22a-bf5f-43ef-bdd7-3f30234a84d4'
  ReservedCode2: '07f7c22a-bf5f-43ef-bdd7-3f30234a84d4'
---

# Line 类
用于绘制网格线、分隔线或调整条的单条笔触——比完整 [**Border**](/official/Reference/CustomControls/Styles/Borders#border-class) 更简单（无背景混合标志、无包围 **Elements** 数组）。通过 [**WaynesGrid.VerticalLineOptions**](/official/Reference/CustomControls/WaynesGrid/#verticallineoptions)、[**HorizontalLineOptions**](/official/Reference/CustomControls/WaynesGrid/#horizontallineoptions) 和 [**ResizerBar**](/official/Reference/CustomControls/WaynesGrid/#resizerbar) 访问。

```vb
With WaynesGrid1.VerticalLineOptions
    .StrokeSize = 1
    .Fill.ColorPoints.SetSolidColor &HD0D0D0    ' pale grey
End With
```

## 属性

### Fill

提供用于绘制线条的颜色或渐变的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。

### StrokeSize

笔触粗细（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。默认：0（在赋非零值之前不绘制线条）。

## 事件

### OnChanged

[**StrokeSize**](#strokesize) 或 [**Fill**](#fill) 被赋值时，或包含的 [**Fill**](#fill) 触发其自身的 **OnChanged** 时触发。