---
title: TextRendering
parent: Styles
permalink: /tB/Packages/CustomControls/Styles/TextRendering
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '01290bfc-3205-421d-b9f8-bb2d8f861191'
  PropagateID: '01290bfc-3205-421d-b9f8-bb2d8f861191'
  ReservedCode1: 'd685d9fa-082d-4720-bdc1-0488444029d0'
  ReservedCode2: 'd685d9fa-082d-4720-bdc1-0488444029d0'
---

# TextRendering 类
聚合在控件内绘制一段文本所需的一切：字体、内边距、提供文本颜色的填充、可选的轮廓数组、可用区域内的对齐以及溢出行为。通过 `<state>.TextRendering`、[**WaynesLabel.TextRendering**](/official/Reference/CustomControls/WaynesLabel#textrendering) 和 [**CellRenderingOptions.TextRendering**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions#textrendering) 访问。

新构造的 **TextRendering** 将其 [**Fill**](#fill) 预设为纯黑色，使文本立即可见。

```vb
With lblTitle.TextRendering
    .Font.Size = 18
    .Font.Weight = tbBold
    .Alignment = tbAlignMiddleCenter
    .Fill.ColorPoints.SetSolidColor vbWhite
End With
```

[**Fill**](#fill) 可以像纯色一样持有渐变，因此字形本身可以绘制上到下或角到角的颜色过渡。[**Outlines**](#outlines) 是围绕字形绘制的 [**Border**](/official/Reference/CustomControls/Styles/Borders#border-class) 元素数组——单条细黑轮廓产生"贴纸"外观；用不同 [**StrokeSize**](/official/Reference/CustomControls/Styles/Borders#strokesize) 值分层多条轮廓产生发光或投影效果：

```vb
With lblBanner.TextRendering
    .Font.Size = 32
    .Font.Weight = tbBold
    .Alignment = tbAlignMiddleCenter
    .Fill.SetSimplePattern vbWhite, &HCCCCFF, _
            Pattern:=tbGradientNorthToSouth
    Dim outline(0 To 0) As Border
    Set outline(0) = New Border
    outline(0).StrokeSize = 2
    outline(0).Fill.ColorPoints.SetSolidColor vbBlack
    .Outlines = outline
End With
```

将 [**OverflowMode**](#overflowmode) 设为 **tbShrinkToFit** 可在文本过长超出可用宽度时缩小字形而非用省略号截断——适用于宽度固定的标签，其标题由运行时从不可预测长度的数据设置。

## 属性

### Alignment

文本在可用区域内（在 [**Padding**](#padding) 应用后）的水平和垂直定位。[**TextAlignment**](/official/Reference/CustomControls/Enumerations/TextAlignment) 的成员。默认：**tbAlignMiddleCenter**。

### Fill

提供文本颜色或渐变的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。构造时预设为纯黑色填充。

### Font

给出字体大小、粗细、斜体/下划线/删除线标志的 [**FontStyle**](#fontstyle-class) 子对象。

### OverflowMode

超出可用宽度的文本如何截断。[**TextOverflowMode**](/official/Reference/CustomControls/Enumerations/TextOverflowMode) 的成员。默认：**tbAppendEllipsis**。

### Outlines

描述围绕渲染字形绘制的一条或多条轮廓的 [**Border**](/official/Reference/CustomControls/Styles/Borders#border-class) 元素数组。可读写；未初始化数组表示无轮廓。

### Padding

持有在文本边界矩形内围绕文本插入的逐侧内边距的 [**Padding**](/official/Reference/CustomControls/Styles/Padding) 子对象。[**Alignment**](#alignment) 应用于带内边距的区域。

## 事件

### OnChanged

[**Alignment**](#alignment) 或 [**OverflowMode**](#overflowmode) 被赋值时、[**Outlines**](#outlines) 被替换或其任一元素触发 **OnChanged** 时、或 [**Font**](#font)、[**Padding**](#padding) 或 [**Fill**](#fill) 触发自身的 **OnChanged** 时触发。

## FontStyle 类

控制 [**TextRendering**](#) 如何布局文本的字体度量。通过 [**TextRendering.Font**](#font) 访问。

### Italic

当 **True** 时，字形以斜体样式渲染。**Boolean**。默认：**False**。

### Size

字体大小（排版磅）。[**PointSize**](/official/Reference/CustomControls/Enumerations/PointSize)。默认：12。

### Strikeout

当 **True** 时，在每个字形中间绘制水平删除线。**Boolean**。默认：**False**。

### Underline

当 **True** 时，在每个字形下方绘制下划线。**Boolean**。默认：**False**。

### Weight

OpenType `wght` 刻度上的字体粗细。[**FontWeight**](/official/Reference/CustomControls/Enumerations/FontWeight) 的成员。默认：**tbNormal**。

### OnChanged

五个字体样式字段中任一个被赋值时触发。父 [**TextRendering**](#) 监听此事件并重新触发自身的。