---
title: Corners
parent: Styles
permalink: /tB/Packages/CustomControls/Styles/Corners
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '74855688-ec4e-43d1-9afc-719a668f1dbc'
  PropagateID: '74855688-ec4e-43d1-9afc-719a668f1dbc'
  ReservedCode1: 'cf94a6ad-c56d-408f-a486-196fdf66586f'
  ReservedCode2: 'cf94a6ad-c56d-408f-a486-196fdf66586f'
---

# Corners 类
渲染区域的四个角。每个角是独立的 [**Corner**](#corner-class) 子对象——形状和半径可以逐角不同——使控件可以圆化一个角同时凹口另一个角。通过 `<state>.Corners`、[**CellRenderingOptions.Corners**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions#corners) 以及滑块的 `<sliderState>.BackgroundCorners` / `BlockCorners` 访问。

```vb
With btnGo.NormalState.Corners
    .SetAll tbCurve, 12       ' all four corners 12px rounded
    .TopRight.Shape = tbNotched
End With
```

三个 [**CornerShape**](/official/Reference/CustomControls/Enumerations/CornerShape) 值可以在单个控件上混合使用。单独设置 [**TopLeft**](#topleft)、[**TopRight**](#topright)、[**BottomLeft**](#bottomleft) 和 [**BottomRight**](#bottomright) 可完全控制轮廓：

```vb
With btnTab.NormalState.Corners
    .TopLeft.Shape = tbCurve     : .TopLeft.Radius = 12
    .TopRight.Shape = tbCurve    : .TopRight.Radius = 12
    .BottomLeft.Shape = tbNotched : .BottomLeft.Radius = 0
    .BottomRight.Shape = tbNotched : .BottomRight.Radius = 0
End With
```

圆形控件就是将所有四个角设为 [**tbCurve**](/official/Reference/CustomControls/Enumerations/CornerShape#tbCurve) 且半径大于等于控件较小维度一半的方形控件——包示例窗体中的 `Circle` 按钮正是如此。

## 属性

### BottomLeft

控制左下角的 [**Corner**](#corner-class) 子对象。

### BottomRight

控制右下角的 [**Corner**](#corner-class) 子对象。

### TopLeft

控制左上角的 [**Corner**](#corner-class) 子对象。

### TopRight

控制右上角的 [**Corner**](#corner-class) 子对象。

## 方法

### SetAll

在单次调用中将所有四个角设为相同的形状和半径。等同于为 [**TopLeft**](#topleft)、[**TopRight**](#topright)、[**BottomLeft**](#bottomleft) 和 [**BottomRight**](#bottomright) 各赋相同的值。

语法：*object*.**SetAll** *Shape*, *Radius*

*Shape*
: *必需* [**CornerShape**](/official/Reference/CustomControls/Enumerations/CornerShape) 的成员。

*Radius*
: *必需* [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)，给出曲线/凹口/切角的半径。

## 事件

### OnChanged

四个角子对象中任一个更改时触发——无论是通过 **Corners** 对象上的直接属性设置还是通过 **Corner** 子对象传播的 **OnChanged**。

## Corner 类

[**Corners**](#) 对象的单个角。具有 [**Shape**](#shape)（曲线、凹口或切角）和 [**Radius**](#radius)（像素）。

### Radius

角的半径（像素）。含义取决于 [**Shape**](#shape)：对于 **tbCurve** 是四分之一圆的半径，对于 **tbNotched** 是切割深度，对于 **tbCutOut** 是挖空区域的深度。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。默认：0（无论 **Shape** 如何都是直角 90° 角）。

### Shape

角的绘制方式。[**CornerShape**](/official/Reference/CustomControls/Enumerations/CornerShape) 的成员：**tbCurve**（默认）、**tbNotched** 或 **tbCutOut**。

### OnChanged

[**Shape**](#shape) 或 [**Radius**](#radius) 被赋值时触发。父 [**Corners**](#) 监听此事件并重新触发自身的。