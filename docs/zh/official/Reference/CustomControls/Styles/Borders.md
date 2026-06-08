---
title: Borders
parent: Styles
permalink: /tB/Packages/CustomControls/Styles/Borders
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '85523959-137d-401b-af58-c93be95f3167'
  PropagateID: '85523959-137d-401b-af58-c93be95f3167'
  ReservedCode1: 'de0608db-54eb-4805-942f-e3f27702f329'
  ReservedCode2: 'de0608db-54eb-4805-942f-e3f27702f329'
---

# Borders 类
绘制在区域周围的边框笔触集合。每条笔触是独立的 [**Border**](#border-class) 子对象，具有自己的粗细、填充和混合行为，按源顺序分层。单条细黑色轮廓是单元素集合——最简单的构建方式是调用 [**SetSimpleBorder**](#setsimpleborder)。

通过 `<state>.Borders`、[**CellRenderingOptions.Borders**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions#borders) 以及滑块的 `<sliderState>.BackgroundBorders` / `BlockBorders` 访问。[**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) 的 **Outlines** 成员上的 [**Border**](#border-class) 子对象数组使用相同的元素类型。

```vb
btnGo.NormalState.Borders.SetSimpleBorder StrokeSize:=1, ColorRGB:=vbBlack
```

分层边框——按顺序绘制多条 [**Border**](#border-class) 实例——直接赋给 [**Elements**](#elements) 数组。每个元素可以有自己的 [**StrokeSize**](#strokesize) 和 [**Fill**](/official/Reference/CustomControls/Styles/Fill)，因此细黑轮廓可以位于宽彩色带之上，或三条不同颜色的色带叠加形成"阴影"：

```vb
Dim elems(0 To 2) As Border
Set elems(0) = New Border
elems(0).StrokeSize = 4
elems(0).Fill.ColorPoints.SetSolidColor vbBlack
Set elems(1) = New Border
elems(1).StrokeSize = 7
elems(1).Fill.ColorPoints.SetSolidColor &H99CCFF       ' light blue band
Set elems(2) = New Border
elems(2).StrokeSize = 4
elems(2).Fill.ColorPoints.SetSolidColor &H4D7AB4       ' deeper blue
btnGo.NormalState.Borders.Elements = elems
```

单个 [**Border**](#border-class) 也可以显示渐变而非纯色——为其 [**Fill**](#fill) 成员赋多 stop [**Fill**](/official/Reference/CustomControls/Styles/Fill)。在半透明边框上将 [**BlendWithBackgroundFill**](#blendwithbackgroundfill) 设为 **True** 可使其与控件自身的 **BackgroundFill** 混合而非与控件下方的内容混合。

## 属性

### Elements

[**Border**](#border-class) 子对象数组，从索引 0 向外按顺序绘制。可读写，但实际上通过 [**SetSimpleBorder**](#setsimpleborder) 或 [**SetSimpleBorderRGBA**](#setsimpleborderrgba) 填充。

## 方法

### SetSimpleBorder

用给定粗细和完全不透明颜色的单条边框笔触替换 [**Elements**](#elements) 数组。

语法：*object*.**SetSimpleBorder** *StrokeSize*, *ColorRGB*

*StrokeSize*
: *必需* **Long**，给出笔触粗细（像素）。

*ColorRGB*
: *必需* **Long** RGB 颜色，用于笔触填充。

### SetSimpleBorderRGBA

用单条边框笔触替换 [**Elements**](#elements) 数组，其 alpha 取自提供的 [**ColorRGBA**](/official/Reference/CustomControls/Enumerations/ColorRGBA) 而非强制不透明。适用于仅作为视觉内边距存在的透明边框（滑块在 **BlockBorders** 上使用完全透明边框以在背景内缩进滑块）。

语法：*object*.**SetSimpleBorderRGBA** *StrokeSize*, *ColorRGBA*

*StrokeSize*
: *必需* **Long**，给出笔触粗细（像素）。

*ColorRGBA*
: *必需* [**ColorRGBA**](/official/Reference/CustomControls/Enumerations/ColorRGBA) 值，用于笔触填充。

## 事件

### OnChanged

[**Elements**](#elements) 数组被重新赋值或任一 [**Border**](#border-class) 元素触发其自身的 **OnChanged** 时触发。

## Border 类

单条边框笔触。[**Borders.Elements**](#elements) 的元素，也是 [**TextRendering.Outlines**](/official/Reference/CustomControls/Styles/TextRendering#outlines) 的元素。

### BlendWithBackgroundFill

当 **True** 时，边框颜色与控件的 **BackgroundFill** 进行 alpha 混合而非与控件下方绘制的内容混合。使半透明边框颜色使用背景色调而非窗体的颜色。**Boolean**。默认：**False**。

### Fill

提供用于绘制边框的颜色或渐变的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。新构造的 [**Border**](#border-class) 对象将其预设为纯黑色填充。

### StrokeSize

笔触粗细（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。默认：1。

### New

用默认纯黑色 [**Fill**](#fill) 构造 [**Border**](#border-class)。

语法：**New Border**

### OnChanged

[**StrokeSize**](#strokesize)、[**Fill**](#fill) 或 [**BlendWithBackgroundFill**](#blendwithbackgroundfill) 被赋值时，或包含的 [**Fill**](#fill) 触发其自身的 **OnChanged** 时触发。