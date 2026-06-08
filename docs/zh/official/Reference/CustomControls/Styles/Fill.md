---
title: Fill
parent: Styles
permalink: /tB/Packages/CustomControls/Styles/Fill
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0b4f8365-2b01-40bc-86df-167ed09c0225'
  PropagateID: '0b4f8365-2b01-40bc-86df-167ed09c0225'
  ReservedCode1: 'b28053d4-e40d-42e2-9b1d-10d858b4a6b1'
  ReservedCode2: 'b28053d4-e40d-42e2-9b1d-10d858b4a6b1'
---

# Fill 类
绘制区域的颜色或渐变——控件的背景、边框的主体、网格线的填充、文本的前景。**Fill** 有两部分：[**Pattern**](#pattern) 选择渐变方向（或 `tbPatternNone` 表示透明），以及 [**ColorPoints**](#colorpoints) 包含一个或多个颜色 stops 的集合，提供实际颜色。

单色填充就是单 stop 填充：用 `Long` 颜色调用 [**ColorPoints.SetSolidColor**](#setsolidcolor)，或在父 **Fill** 上调用 [**SetSimplePattern**](#setsimplepattern) 实现双色渐变。

```vb
btnGo.NormalState.BackgroundFill.ColorPoints.SetSolidColor vbBlue
btnGo.HoverState.BackgroundFill.SetSimplePattern vbBlue, vbWhite, _
        Pattern:=tbGradientNorthToSouth
```

对于三个或更多颜色 stops，构建 [**FillColorPoint**](#fillcolorpoint-class) 实例并传给 [**SetColorPoints**](#setcolorpoints)。stops 接受完全不透明的 ARGB 字面量（`&HFF` alpha 在高字节）——参见 [**ColorRGBA**](/official/Reference/CustomControls/Enumerations/ColorRGBA) 了解编码：

```vb
With pnlHeader.BackgroundFill
    .Pattern = tbGradientNorthToSouth
    .ColorPoints.SetColorPoints _
        New FillColorPoint(&HFFF3E58F, 0), _
        New FillColorPoint(&HFF99CCFF, 50), _
        New FillColorPoint(&HFF014C99, 100)
End With
```

## 属性

### ColorPoints

持有渐变 stops 的 [**FillColorPoints**](#fillcolorpoints-class) 集合。始终存在且已预分配；赋新 stops 通过调用此对象上的方法完成而非替换集合。

### Pattern

[**ColorPoints**](#colorpoints) 中的颜色如何映射到区域。[**FillPattern**](/official/Reference/CustomControls/Enumerations/FillPattern) 的成员。默认：**tbGradientNorthToSouth**。使用 **tbPatternNone** 使 **Fill** 透明。

## 方法

### SetSimplePattern

用两个纯色之间的双 stop 渐变替换颜色 stops，可选同时调整 [**Granularity**](#granularity) 和 [**Pattern**](#pattern)。颜色以普通 `Long` 值给出（`vb…` 颜色常量或十六进制字面量）；不透明 alpha 掩码自动 OR 进去。

语法：*object*.**SetSimplePattern** *Value1RGB*, *Value2RGB* [, *Granularity* [, *Pattern* ] ]

*Value1RGB*
: *必需* **Long** RGB 颜色，第一个渐变 stop（位置 0）。

*Value2RGB*
: *必需* **Long** RGB 颜色，第二个渐变 stop（位置 100）。

*Granularity*
: *可选* 赋给 [**Granularity**](#granularity) 的颜色表大小。默认：100。

*Pattern*
: *可选* [**FillPattern**](/official/Reference/CustomControls/Enumerations/FillPattern) 的成员。默认：**tbGradientNorthToSouth**。

### SetSimplePatternRGBA

与 [**SetSimplePattern**](#setsimplepattern) 相同，但接受带有自身 alpha 通道的原始 32 位 [**ColorRGBA**](/official/Reference/CustomControls/Enumerations/ColorRGBA) 值而非三字节 RGB 颜色。

语法：*object*.**SetSimplePatternRGBA** *Value1RGBA*, *Value2RGBA* [, *Granularity* [, *Pattern* ] ]

*Value1RGBA*
: *必需* [**ColorRGBA**](/official/Reference/CustomControls/Enumerations/ColorRGBA)（ABGR）值，第一个渐变 stop。

*Value2RGBA*
: *必需* [**ColorRGBA**](/official/Reference/CustomControls/Enumerations/ColorRGBA)（ABGR）值，第二个渐变 stop。

*Granularity*
: *可选* 赋给 [**Granularity**](#granularity) 的颜色表大小。默认：100。

*Pattern*
: *可选* [**FillPattern**](/official/Reference/CustomControls/Enumerations/FillPattern) 的成员。默认：**tbGradientNorthToSouth**。

## 事件

### OnChanged

[**Pattern**](#pattern) 被赋值或 [**ColorPoints**](#colorpoints) 集合触发其自身的 **OnChanged** 时触发。

## FillColorPoints 类

定义 [**Fill**](#) 颜色渐变的 [**FillColorPoint**](#fillcolorpoint-class) stops 集合。通过 [**Fill.ColorPoints**](#colorpoints) 访问。内部为 **FillColorPoint** 数组加 [**Granularity**](#granularity) 整数。

### Granularity

插值 stops 的生成颜色表大小。值越高渐变越平滑；值为 2 产生仅两种颜色之间的硬过渡，无论集合中有多少 stops。**Long**。默认：100。

### Values

[**FillColorPoint**](#fillcolorpoint-class) 渐变 stops 数组。可读写，但实际上通过 [**SetSolidColor**](#setsolidcolor)、[**SetSolidColorRGBA**](#setsolidcolorrgba)、[**SetColorPoints**](#setcolorpoints) 或 [**SetColorPointsArray**](#setcolorpointsarray) 方法填充而非直接赋数组。

### SetSolidColor

用单个完全不透明 stop 替换 stop 数组。接受三字节 `Long` 颜色并 OR 进不透明 alpha 掩码。

语法：*object*.**SetSolidColor** *ValueRGB*

*ValueRGB*
: *必需* **Long** RGB 颜色。

### SetSolidColorRGBA

用单个 stop 替换 stop 数组，其 alpha 取自提供的值而非强制不透明。

语法：*object*.**SetSolidColorRGBA** *ValueRGBA*

*ValueRGBA*
: *必需* [**ColorRGBA**](/official/Reference/CustomControls/Enumerations/ColorRGBA)（ABGR）值。

### SetColorPoints

用提供的 [**FillColorPoint**](#fillcolorpoint-class) 值按顺序替换 stop 数组。

语法：*object*.**SetColorPoints** *ColorPoint1* [, *ColorPoint2*, … ]

*ColorPoint1*, *ColorPoint2*, …
: *必需* 一个或多个 [**FillColorPoint**](#fillcolorpoint-class) 对象，通过 `ParamArray` 以 **Variant** 传入。

### SetColorPointsArray

用现有 [**FillColorPoint**](#fillcolorpoint-class) 数组的内容替换 stop 数组。

语法：*object*.**SetColorPointsArray** *ColorPoints* ( )

*ColorPoints*
: *必需* [**FillColorPoint**](#fillcolorpoint-class) 数组。未初始化或空数组使集合不变。

### OnChanged

stop 数组被重新赋值或任一 stop 触发其自身的 **OnChanged**，或 [**Granularity**](#granularity) 被赋值时触发。父 [**Fill**](#) 监听此事件并重新触发自身的。

## FillColorPoint 类

单个渐变 stop——颜色及沿渐变的位置（0--100%）。[**FillColorPoints.Values**](#values) 数组的元素。

### Color

stop 的颜色，32 位 ABGR 值。[**ColorRGBA**](/official/Reference/CustomControls/Enumerations/ColorRGBA)。

### PositionPercent

stop 沿渐变的位置，0 到 100 的百分比。**Double**。双 stop 渐变通常在 0 和 100 位置；25 / 50 / 75 的中间 stops 产生平滑的多色过渡。

### New

构造 [**FillColorPoint**](#fillcolorpoint-class)。无参重载不设置任何字段；双参数重载设置两个字段。

语法：**New FillColorPoint** [ ( *ColorRGBA*, *PositionPercent* ) ]

*ColorRGBA*
: *可选* [**ColorRGBA**](/official/Reference/CustomControls/Enumerations/ColorRGBA) 值，赋给 [**Color**](#color)。

*PositionPercent*
: *可选* **Double**，赋给 [**PositionPercent**](#positionpercent)。

### OnChanged

[**Color**](#color) 或 [**PositionPercent**](#positionpercent) 被赋值时触发。父 [**FillColorPoints**](#fillcolorpoints-class) 监听此事件。