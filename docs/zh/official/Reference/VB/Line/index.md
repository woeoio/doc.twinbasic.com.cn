---
title: Line
parent: VB Package
permalink: /tB/Packages/VB/Line/
---

# Line 类

**Line**是无窗口轻量级控件，在其容器上从一个点到另一个点绘制单一直线段。它纯粹用于视觉呈现——分隔窗体区域、为标题加下划线、绘制注释引导线——没有自身的交互元素：没有鼠标事件、没有焦点、没有标题。

**Line**通过其两个端点[**X1**](#x1) / [**Y1**](#y1)和[**X2**](#x2) / [**Y2**](#y2)定位，而非`Left` / `Top` / `Width` / `Height`矩形。默认属性为[**Visible**](#visible)，默认事件为[**Initialize**](#initialize)。

```vb
Private Sub Form_Load()
    linUnderHeading.X1 = 120 :  linUnderHeading.Y1 = 320
    linUnderHeading.X2 = 4800 : linUnderHeading.Y2 = 320
    linUnderHeading.BorderColor = vbBlue
    linUnderHeading.BorderWidth = 2
End Sub
```


## 端点

[**X1**](#x1) / [**Y1**](#y1)是直线的一个端点；[**X2**](#x2) / [**Y2**](#y2)是另一个端点。坐标以容器的**ScaleMode**单位（默认为缇）表示，从容器的客户区左上角测量。直线在两点之间绘制，无论哪个点"在前"——交换端点不改变结果。

控件没有自身的`Width`或`Height`；边界矩形由两个端点派生。在设计时调整**Line**大小会移动被拖动的端点。

## 画笔

直线使用Win32 GDI画笔绘制，其外观由以下属性控制：

- [**BorderColor**](#bordercolor)——画笔颜色（默认为系统窗口文本颜色）。
- [**BorderWidth**](#borderwidth)——画笔宽度，以像素为单位（默认`1`）。
- [**BorderStyle**](#borderstyle)——画笔模式，作为[**BorderStyleConstants**](/official/Reference/VBRUN/Constants/BorderStyleConstants)的成员：**vbTransparent** (0)、**vbBSSolid** (1, 默认)、**vbBSDash** (2)、**vbBSDot** (3)、**vbBSDashDot** (4)、**vbBSDashDotDot** (5)或**vbBSInsideSolid** (6)。

GDI在此有硬性限制：当[**BorderWidth**](#borderwidth)大于`1`时，即使[**BorderStyle**](#borderstyle)请求虚线或点线模式，操作系统也强制使用实线画笔。如果模式重要，请使用宽度`1`。

## 绘制模式

[**DrawMode**](#drawmode)选择将画笔与目标像素组合的光栅操作。作为[**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants)的成员：**vbCopyPen**（默认——不透明绘制）或XOR / AND / NOT / 合并变体之一。非默认模式主要用于在现有背景上绘制的"橡皮筋"反馈——两次应用相同的XOR会抵消自身，恢复原始像素。

## 无交互

与大多数其他控件不同，**Line**不引发任何类型的鼠标、键盘或焦点事件，也没有[**Caption**](/official/Reference/VB/Label/#caption)、[**Enabled**](/official/Reference/VB/Label/#enabled)或**ToolTipText**。要使区域可点击，请在上面放置一个透明的[**Label**](/official/Reference/VB/Label/)。

## 属性

### BorderColor

线条颜色，类型为**OLE_COLOR**。默认为系统窗口文本颜色。

### BorderStyle

画笔模式。作为[**BorderStyleConstants**](/official/Reference/VBRUN/Constants/BorderStyleConstants)的成员：**vbTransparent** (0)、**vbBSSolid** (1, 默认)、**vbBSDash** (2)、**vbBSDot** (3)、**vbBSDashDot** (4)、**vbBSDashDotDot** (5)或**vbBSInsideSolid** (6)。当[**BorderWidth**](#borderwidth)大于`1`时被Win32强制为**vbBSSolid**。

### BorderWidth

画笔宽度，以像素为单位。**Long**，默认`1`。大于`1`的宽度忽略[**BorderStyle**](#borderstyle)并始终绘制实线。

### Container

承载此线条的控件——通常是窗体、[**Frame**](/official/Reference/VB/Frame/)或**UserControl**。使用**Get**读取，使用**Set**更改。

### ControlType

标识此控件的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。**Line**与[**Shape**](/official/Reference/VB/Shape/)控件共享**vbShape**常量——两者都是无窗口、基于点的几何图元，没有专用的控件类型标识符。

### DrawMode

线条绘制将画笔与目标组合时应用的光栅操作。作为[**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants)的成员：**vbCopyPen**（默认）为正常不透明绘制；其他值产生XOR、AND、NOT和其他像素混合效果。

### Index

当线条是控件数组的一部分时，此实例在数组中从0开始的**Long**索引。在非数组实例上读取**Index**会引发运行时错误343（*对象不是数组*）。运行时只读。

### Name

控件在其父级上的唯一设计时名称。运行时只读。

### Parent

对最终包含此线条的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）的引用。只读。

### Tag

应用程序可用于将自定义数据与线条关联的自由格式**String**。框架忽略。

### Visible

线条是否显示。**Boolean**，默认**True**。**默认属性。**

### X1

第一个端点的水平位置，以容器的**ScaleMode**单位。**Double**。

### X2

第二个端点的水平位置，以容器的**ScaleMode**单位。**Double**。

### Y1

第一个端点的垂直位置，以容器的**ScaleMode**单位。**Double**。

### Y2

第二个端点的垂直位置，以容器的**ScaleMode**单位。**Double**。

## 方法

### ZOrder

将线条移到其容器内无窗口同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront** (0, 默认)或**vbSendToBack** (1)。

## 事件

### Initialize

在线条连接到其容器的绘制周期后、首次绘制前引发一次。**默认事件。**

语法：*object*\_**Initialize**( )