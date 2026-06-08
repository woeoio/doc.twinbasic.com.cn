---
title: Shape
parent: VB Package
permalink: /tB/Packages/VB/Shape/
---

# Shape 类

**Shape**是无窗口轻量级控件，直接在其容器上绘制一组固定几何图元中的一种——矩形、正方形、椭圆、圆形、圆角矩形、圆角正方形、五角星或指向四个基本方向的箭头。它纯粹用于视觉呈现：背景、装饰图、面板分隔线、高亮以及任何使用重量级[**PictureBox**](/official/Reference/VB/PictureBox/)显得过重的地方。

**Shape**没有交互元素——无焦点、无标题、无鼠标/键盘/拖动事件。形状类型及其外观完全通过属性选择；控件唯一引发的事件是[**Initialize**](#initialize)。默认属性是[**Shape**](#shape)，默认事件是[**Initialize**](#initialize)。

```vb
Private Sub Form_Load()
    shpPanel.Shape       = vbShapeRoundedRectangle
    shpPanel.BorderColor = vbBlack
    shpPanel.BorderWidth = 2
    shpPanel.FillStyle   = vbFSSolid
    shpPanel.FillColor   = RGB(240, 240, 240)
    shpPanel.BackStyle   = vbBFOpaque
End Sub
```


## 无窗口渲染

**Shape**没有`hWnd`。框架在父级的绘制周期中将其绘制到父级的绘图表面上，因此控件开销很小——不会为其创建Win32窗口，除了一小块状态外没有每实例开销。其权衡与任何无窗口控件相同：

- 无焦点、无键盘输入、无`KeyDown` / `KeyPress` / `KeyUp` / `GotFocus` / `LostFocus` / `Validate`。
- 无任何鼠标事件——要使区域可点击，在其上方放置透明的[**Label**](/official/Reference/VB/Label/)。
- 没有可传递给API函数的`hWnd`，也没有`SetFocus`。
- 不能承载子控件。

对于需要这些功能的场景，请改用[**PictureBox**](/official/Reference/VB/PictureBox/)或自定义**UserControl**。

## 形状类型

[**Shape**](#shape)选择绘制哪种图元，作为[**ShapeConstants**](/official/Reference/VBRUN/Constants/ShapeConstants)的成员：

| 常量                          | 值 | 绘制为                                                   |
|-------------------------------|----|----------------------------------------------------------|
| **vbShapeRectangle**          | 0  | 填充控件边界的矩形。                                     |
| **vbShapeSquare**             | 1  | 内接于边界的正方形——较短边决定尺寸，较长边居中。         |
| **vbShapeOval**               | 2  | 填充边界的椭圆。                                         |
| **vbShapeCircle**             | 3  | 内接于边界的圆——较短边决定直径。                         |
| **vbShapeRoundedRectangle**   | 4  | 圆角矩形；圆角半径来自[**RoundedCornerSize**](#roundedcornersize)。 |
| **vbShapeRoundedSquare**      | 5  | 内接于边界的圆角正方形。                                 |
| **vbShapeStar**               | 6  | 正星形多边形；通过[**VariationA**](#variationa)、[**VariationB**](#variationb)和[**VariationC**](#variationc)配置。 |
| **vbShapeArrowLeft**          | 7  | 向左的箭头。                                             |
| **vbShapeArrowRight**         | 8  | 向右的箭头。                                             |
| **vbShapeArrowUp**            | 9  | 向上的箭头。                                             |
| **vbShapeArrowDown**          | 10 | 向下的箭头。                                             |

对于**vbShapeCircle**、**vbShapeSquare**和**vbShapeRoundedSquare**，绘制的图元是正方形的：使用控件宽度和高度中的较短者，图元沿较长轴居中。控件的边界矩形不变。

## 星形和箭头

星形和箭头通过三个**Variation**属性参数化，均为**Long**，默认值为哨兵值`-1`，选择内置默认几何：

对于**vbShapeStar**：

- [**VariationA**](#variationa) — 点数，钳制到包含范围`2`--`30`。默认`5`。
- [**VariationB**](#variationb) — 内半径因子，控制星形臂的"粗细"。值越大臂越细。默认选择使内半径为外半径一半的值。
- [**VariationC**](#variationc) — 顶点展开除数，`1`到`12`的整数。值越低产生越密集的点；值越高产生越常规的星形。默认`12`（有效除数为`2`）。

对于**vbShapeArrowLeft**、**vbShapeArrowRight**、**vbShapeArrowUp**、**vbShapeArrowDown**：

- [**VariationA**](#variationa) — 箭头沿横轴方向的"高度"，作为控件横轴尺寸的百分比（`0`--`100`）。默认`30`（即`0.30`）。
- [**VariationB**](#variationb) — 箭头沿纵轴方向的"深度"，作为控件纵轴尺寸的百分比（`0`--`100`）。默认`50`（即`0.50`）。

[**VariationC**](#variationc)在箭头中未使用。

## 背景、填充和渐变

**Shape**按三个逻辑层绘制：

1. 控件的背景，由[**BackStyle**](#backstyle)和[**BackColor**](#backcolor)控制。当[**BackStyle**](#backstyle)为**vbBFTransparent**（默认）时，绘制形状之外但在控件边界矩形之内的像素显示父级在下面绘制的内容。当**vbBFOpaque**时，这些像素用[**BackColor**](#backcolor)填充。
2. 形状的内部，由[**FillStyle**](#fillstyle)、[**FillColor**](#fillcolor)和（渐变的）[**FillColorAlt**](#fillcoloralt)控制。
3. 形状的轮廓，由[**BorderStyle**](#borderstyle)、[**BorderColor**](#bordercolor)和[**BorderWidth**](#borderwidth)控制。

[**FillStyle**](#fillstyle)是[**FillStyleConstantsEx**](/official/Reference/VBRUN/Constants/FillStyleConstantsEx)的成员：

| 常量                    | 值 | 内部                                                     |
|-------------------------|----|----------------------------------------------------------|
| **vbFSSolid**           | 0  | 用[**FillColor**](#fillcolor)填充。                     |
| **vbFSTransparent**     | 1  | 无填充（默认——形状内部透出）。                           |
| **vbHorizontalLine**    | 2  | [**FillColor**](#fillcolor)的水平阴影线。               |
| **vbVerticalLine**      | 3  | [**FillColor**](#fillcolor)的垂直阴影线。               |
| **vbUpwardDiagonal**    | 4  | `/`方向对角阴影线。                                     |
| **vbDownwardDiagonal**  | 5  | `\`方向对角阴影线。                                     |
| **vbCross**             | 6  | 正交交叉阴影线。                                         |
| **vbDiagonalCross**     | 7  | 对角交叉阴影线。                                         |
| **vbGradientNS**        | 8  | 从[**FillColor**](#fillcolor)（顶部）到[**FillColorAlt**](#fillcoloralt)（底部）的垂直渐变。 |
| **vbGradientWE**        | 9  | 从[**FillColor**](#fillcolor)（左侧）到[**FillColorAlt**](#fillcoloralt)（右侧）的水平渐变。 |

渐变样式（**vbGradientNS**、**vbGradientWE**）使用Win32 `GradientFill` GDI原语，该原语不支持为旋转应用的世界变换：当[**Angle**](#angle)非零时，渐变样式回退为[**FillColor**](#fillcolor)的纯色填充。阴影线和渐变样式使用匹配形状类型的GDI区域裁剪到形状轮廓。

## 边框

轮廓使用Win32 GDI画笔绘制：

- [**BorderColor**](#bordercolor) — 画笔颜色（默认为系统窗口文本颜色）。
- [**BorderWidth**](#borderwidth) — 画笔宽度（像素，默认`1`）。
- [**BorderStyle**](#borderstyle) — 画笔图案，作为[**BorderStyleConstants**](/official/Reference/VBRUN/Constants/BorderStyleConstants)的成员：**vbTransparent**（0——无轮廓）、**vbBSSolid**（1，默认）、**vbBSDash**（2）、**vbBSDot**（3）、**vbBSDashDot**（4）、**vbBSDashDotDot**（5）或**vbBSInsideSolid**（6）。

与[**Line**](/official/Reference/VB/Line/)一样，当[**BorderWidth**](#borderwidth)大于`1`时，GDI强制使用实线画笔——虚线和点线图案仅在宽度`1`时有效。

## 旋转

[**Angle**](#angle)围绕控件左上角以度为单位逆时针旋转渲染形状。`0`（默认）为自然方向；`90`为逆时针旋转四分之一圈；`0`到`360`之间的值给出任意旋转。控件在父级上的边界矩形不变——因此大旋转角度可能将可见形状推出矩形。渲染的像素仅受父级裁剪区域约束，不受**Shape**自身矩形约束。

渐变填充样式不支持旋转——参见[背景、填充和渐变](#background-fill-and-gradients)。

## 绘制模式

[**DrawMode**](#drawmode)选择将绘制像素与目标组合的光栅操作。[**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants)的成员：**vbCopyPen**（默认——不透明绘制）或XOR/AND/NOT/合并变体之一。非默认模式主要用于在现有背景上绘制的"橡皮筋"反馈——同一XOR应用两次可相互抵消，恢复原始像素。

## 属性

### Anchors

决定控件的哪些边随父级对应边调整的边集合。只读——通过返回的**Anchors**对象设置各个`.Left`、`.Top`、`.Right`、`.Bottom`标志。

### Angle

渲染形状的旋转角度，以度为单位，围绕控件左上角逆时针旋转。**Double**，默认`0`。详见[旋转](#rotation)及渐变填充注意事项。

### BackColor

当[**BackStyle**](#backstyle)为**vbBFOpaque**时绘制到**Shape**边界矩形（形状自身轮廓之外）的颜色。**OLE_COLOR**，默认为系统窗口背景颜色。当[**BackStyle**](#backstyle)为**vbBFTransparent**时无效。

### BackStyle

形状周围的边界矩形是否用[**BackColor**](#backcolor)填充或保持透明。[**BackFillStyleConstants**](/official/Reference/VBRUN/Constants/BackFillStyleConstants)的成员：**vbBFTransparent**（0，默认）或**vbBFOpaque**（1）。

### BorderColor

形状轮廓的颜色，作为**OLE_COLOR**。默认为系统窗口文本颜色。

### BorderStyle

用于轮廓的画笔图案。[**BorderStyleConstants**](/official/Reference/VBRUN/Constants/BorderStyleConstants)的成员：**vbTransparent**（0）、**vbBSSolid**（1，默认）、**vbBSDash**（2）、**vbBSDot**（3）、**vbBSDashDot**（4）、**vbBSDashDotDot**（5）或**vbBSInsideSolid**（6）。当[**BorderWidth**](#borderwidth)大于`1`时Win32强制为**vbBSSolid**。

### BorderWidth

轮廓画笔宽度，以像素为单位。**Long**，默认`1`。大于`1`的宽度忽略[**BorderStyle**](#borderstyle)并始终绘制实线。

### Container

承载此**Shape**的控件——通常是窗体、[**Frame**](/official/Reference/VB/Frame/)或**UserControl**。用**Get**读取，用**Set**更改。

### ControlType

标识此控件的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbShape**。此常量与[**Line**](/official/Reference/VB/Line/)控件共享——两者都是无窗口几何图元。

### Dock

**Shape**在其容器中的停靠位置。[**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants)的成员：**vbDockNone**（默认）、**vbDockLeft**、**vbDockTop**、**vbDockRight**、**vbDockBottom**或**vbDockFill**。停靠的形状忽略[**Anchors**](#anchors)。

### DrawMode

形状绘制在将像素与目标组合时应用的光栅操作。[**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants)的成员：**vbCopyPen**（默认）为普通不透明绘制；其他值产生XOR、AND、NOT和其他像素混合效果。

### FillColor

用于填充形状内部的主要颜色。**OLE_COLOR**，默认为系统滚动条颜色。用于纯色和阴影线填充的唯一颜色，以及渐变填充的起始颜色。当[**FillStyle**](#fillstyle)为**vbFSTransparent**时无效。

### FillColorAlt

用作渐变填充终点的次要颜色。**OLE_COLOR**，默认为`vbWhite`。仅在[**FillStyle**](#fillstyle)为**vbGradientNS**或**vbGradientWE**时使用。

### FillStyle

用于填充形状内部的图案，作为[**FillStyleConstantsEx**](/official/Reference/VBRUN/Constants/FillStyleConstantsEx)的成员。默认**vbFSTransparent**（1）——内部不绘制，透出底层父级像素。完整表格及渐变与旋转组合的注意事项见[背景、填充和渐变](#background-fill-and-gradients)。

### Height

控件的高度，默认以缇为单位（或以容器的**ScaleMode**单位）。**Double**。

### Index

当**Shape**是控件数组的一部分时，此实例在数组中的**Long**零基索引。在非数组实例上读取**Index**会引发运行时错误343（*对象不是数组*）。运行时只读。

### Left

从容器左边缘到控件左边缘的水平距离。**Double**。

### Name

**Shape**在其父窗体上的唯一设计时名称。运行时只读。

### Parent

对最终包含**Shape**的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）的引用。只读。

### RoundedCornerSize

当[**Shape**](#shape)为**vbShapeRoundedRectangle**或**vbShapeRoundedSquare**时绘制的圆角弧半径，以容器的**ScaleMode**单位。**Long**，默认`20`。对其他形状类型忽略。

### Shape

控件绘制的几何图元。**默认属性。**

语法：*object*.**Shape** [ = *value* ]

*value*
: [**ShapeConstants**](/official/Reference/VBRUN/Constants/ShapeConstants)的成员。完整表格见[形状类型](#shape-kinds)。

通过默认属性路径访问时（如`Shape1 = vbShapeOval`），值作为匹配底层枚举的**Long**读写。

### TabIndex

::: info
继承自无窗口控件基类但无效果：**Shape**不接受焦点，无论此值如何都会被TAB键导航跳过。
:::

### TabStop

::: info
继承自无窗口控件基类但无效果：**Shape**不接受焦点，无法通过TAB键到达。
:::

### Tag

应用程序可用于将自定义数据与**Shape**关联的自由格式**String**。框架忽略此属性。

### Top

从容器顶部到控件顶部的垂直距离。**Double**。

### VariationA

星形和箭头形状类型的第一几何参数。**Long**，默认`-1`（选择当前形状的内置默认值）。每种形状的含义见[星形和箭头](#stars-and-arrows)。

### VariationB

星形和箭头形状类型的第二几何参数。**Long**，默认`-1`。见[星形和箭头](#stars-and-arrows)。

### VariationC

第三几何参数，仅**vbShapeStar**使用。**Long**，默认`-1`。见[星形和箭头](#stars-and-arrows)。

### Visible

**Shape**是否绘制。**Boolean**，默认**True**。

### Width

控件的宽度，默认以缇为单位（或以容器的**ScaleMode**单位）。**Double**。

## 方法

### Move

在单次调用中重新定位并可选地调整**Shape**的尺寸。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**。

*Top*、*Width*、*Height*
: *可选* 对应属性的新值。省略的值保持不变。

### Refresh

强制立即重绘**Shape**在父级绘图表面上的边界矩形。

语法：*object*.**Refresh**

### ZOrder

将**Shape**带到容器内无窗口同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront**（0，默认）或**vbSendToBack**（1）。

## 事件

### Initialize

在**Shape**已连接到其容器的绘制周期但首次绘制之前引发一次。适用于依赖容器状态的最后一刻设置。**默认事件。**

语法：*object*\_**Initialize**( )