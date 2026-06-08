---
title: PictureBox
parent: VB Package
permalink: /tB/Packages/VB/PictureBox/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '768fa9e5-8e91-430c-8785-cd0c79cbc174'
  PropagateID: '768fa9e5-8e91-430c-8785-cd0c79cbc174'
  ReservedCode1: '44bd2266-e79a-412d-bcd6-2ccff5a44896'
  ReservedCode2: '44bd2266-e79a-412d-bcd6-2ccff5a44896'
---

# PictureBox 类

**PictureBox**是一个Win32原生控件，将三种角色合为一体：

1. **图片显示**——可以显示加载到其[**Picture**](#picture)属性中的位图、GIF、JPEG、图标、光标或图元文件。
2. **绘图表面**——暴露VB6图形方法（[**Line**](#line)、[**Circle**](#circle)、[**PSet**](#pset)、[**Print**](#print)、[**PaintPicture**](#paintpicture)等），写入控件的设备上下文。
3. **容器**——可以承载在设计时放置在其上的子控件，类似于[**Frame**](/official/Reference/VB/Frame/)，并可以在其父级内停靠或对齐。

控件通常在设计时放置在[**Form**](/official/Reference/VB/Form/)、[**Frame**](/official/Reference/VB/Frame/)或**UserControl**上。默认属性为[**Picture**](#picture)；默认设计器事件为[**Click**](#click)。

```vb
Private Sub Form_Load()
    Set picLogo.Picture = LoadPicture(App.Path & "\logo.png")
    picLogo.AutoSize = True

    picCanvas.AutoRedraw = True
    picCanvas.ScaleMode = vbPixels
    picCanvas.Line (0, 0)-(picCanvas.ScaleWidth, picCanvas.ScaleHeight), vbRed, B
    picCanvas.Print "Hello, world!"
End Sub
```


## 图片显示

设置[**Picture**](#picture)将**StdPicture**赋值给控件。当[**AutoSize**](#autosize)为**True**时，控件以容器的**ScaleMode**单位调整自身大小以精确适配图片（加上1或2像素的边框，取决于[**Appearance**](#appearance)）；否则图片以其自然大小绘制，锚定在左上角，并被裁剪到控件的边界。将**Nothing**赋值给**Picture**会清除显示的图像，但不会擦除通过图形方法绘制的任何内容。

图片直接从传递给**LoadPicture**的文件中读取，或者——当设置了[**DataField**](#datafield) / [**DataSource**](#datasource)时——从绑定的记录集字段读取。任何赋值给**\_Default**（控件的默认属性）的内容都会转发到**Picture**。

## 绘图表面

**PictureBox**拥有自己的设备上下文，可通过[**hDC**](#hdc)寻址，并支持完整的VB6矢量绘图表面：[**Cls**](#cls)、[**Line**](#line)、[**Circle**](#circle)、[**PSet**](#pset)、[**Print**](#print)和[**PaintPicture**](#paintpicture)。画笔和画刷属性来自[**ForeColor**](#forecolor)、[**BackColor**](#backcolor)、[**FillColor**](#fillcolor)、[**FillStyle**](#fillstyle)、[**DrawWidth**](#drawwidth)、[**DrawMode**](#drawmode)和[**DrawStyle**](#drawstyle)。[**CurrentX**](#currentx)和[**CurrentY**](#currenty)跟踪当前的"图形画笔"位置，以便后续调用可以省略起始坐标。

```vb
picCanvas.Line (10, 10)-Step(100, 50), vbBlue, BF   ' 填充矩形
picCanvas.Circle (200, 100), 40, vbGreen            ' 圆
picCanvas.CurrentX = 10 : picCanvas.CurrentY = 100
picCanvas.Print "Drawn over a Picture"              ' 画笔位置的文本
```

[**Print**](#print)通过IDispatch接口使用VB6 *Print*语句语法（`pic.Print expr [, ;] expr …`）分派，支持**Spc(n)**和**Tab(n)**控制空白和列。调用会推进[**CurrentX**](#currentx) / [**CurrentY**](#currenty)并遵循[**Font**](#font)、[**ForeColor**](#forecolor)和[**FontTransparent**](#fonttransparent)。

## AutoRedraw和持久图像

当[**AutoRedraw**](#autoredraw)为**False**（默认）时，图形方法直接写入可见的设备上下文，当控件被揭开、调整大小或重绘时操作系统可能会擦除该绘制——通常应用程序从[**Paint**](#paint)处理程序中重绘。

当[**AutoRedraw**](#autoredraw)为**True**时，图形方法被记录到一个离屏持久位图中，每当控件需要重绘时自动位块传输到控件上。控件不再触发[**Paint**](#paint)事件；位图通过[**Image**](#image)以只读方式暴露，适合用**SavePicture**保存或赋值给另一个**PictureBox**或[**Image**](/official/Reference/VB/Image/)控件。将**AutoRedraw**从**False**切换到**True**保留当前内容；将其切换回**False**则丢弃持久位图。

## 坐标系

**PictureBox**有自己的坐标系，独立于其父级。[**ScaleMode**](#scalemode)选择内置单位（[**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)——**vbTwips**、**vbPoints**、**vbPixels**、**vbCharacters**、**vbInches**、**vbMillimeters**、**vbCentimeters**）；赋值[**ScaleLeft**](#scaleleft)、[**ScaleTop**](#scaletop)、[**ScaleWidth**](#scalewidth)或[**ScaleHeight**](#scaleheight)（或使用两个对角点调用[**Scale**](#scale)）切换到**vbUser**并重新映射表面，使赋值值直接寻址角——适用于自然轴不匹配像素坐标的数学绘图。

[**ScaleX**](#scalex)和[**ScaleY**](#scaley)在任意两种比例模式之间转换距离，而不改变活动模式。

## 容器行为

在设计时放置到**PictureBox**上的控件成为其子控件：它们的坐标相对于其客户区，并随其一起移动和隐藏。[**Container**](#container)返回直接父级（窗体、框架或另一个图片框）；[**Parent**](#parent)返回最终承载它的窗体。[**ClipControls**](#clipcontrols)决定在[**Paint**](#paint)处理程序运行之前是否将子控件从绘制区域中裁剪出来；关闭它可以加速只触及子控件未覆盖区域的图形密集型绘制代码。

## 数据绑定

设置[**DataSource**](#datasource)和[**DataField**](#datafield)将控件的[**Picture**](#picture)绑定到[**Data**](/official/Reference/VB/Data/)控件记录集的二进制字段：每次行更改时读取字段并对其调用**LoadPicture**，行保存时将当前**Picture**的往返字节表示写回。[**DataChanged**](#datachanged)在用户修改显示的图片时被设置。

## 属性

### Align

::: info
隐藏。为与VB6窗体中将图片框锚定到窗体一边的做法兼容而提供。请改用[**Dock**](#dock)和[**Anchors**](#anchors)。
:::

### Anchors

父级的边缘集合，图片框的对应边缘在父级调整大小时跟随。只读——通过返回的**Anchors**对象分配单独的`.Left`、`.Top`、`.Right`、`.Bottom`标志。

### Appearance

决定操作系统如何绘制边框。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。仅在[**BorderStyle**](#borderstyle)为**vbFixedSingleBorder**时有意义。

### AutoRedraw

控制图形输出是否记录到持久位图。**Boolean**，默认**False**。参见[AutoRedraw和持久图像](#autoredraw和持久图像)。

### AutoSize

当**True**时，控件调整自身大小以适配赋值的[**Picture**](#picture)。**Boolean**，默认**False**。当[**Picture**](#picture)为**Nothing**时无效。

### BackColor

控件绘图表面的背景颜色，作为**OLE_COLOR**。默认为系统3-D表面颜色。赋新值会使表面失效并触发重绘。

### BorderStyle

图片框是否绘有边框。[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants)的成员：**vbNoBorder** (0)或**vbFixedSingleBorder** (1, 默认)。边框的精确外观取决于[**Appearance**](#appearance)。

### CausesValidation

决定之前焦点控件的[**Validate**](#validate)事件是否在此控件获得焦点之前运行。**Boolean**，默认**True**。

### ClipControls

当**True**（默认）时，在[**Paint**](#paint)事件触发之前，子控件被从图片框的绘制区域中裁剪出来，因此绘制命令不能覆盖它们。设置为**False**允许[**Paint**](#paint)处理程序在整个客户区绘制，当应用程序知道所包含的控件不与绘制区域重叠时速度更快。

### Container

承载此图片框的控件——通常是窗体、[**Frame**](/official/Reference/VB/Frame/)或另一个图片框。使用**Get**读取，使用**Set**更改。在运行时设置**Container**会将图片框重新父级化。

### ControlType

标识此控件为图片框的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbPictureBox**。

### CurrentX

下一次图形调用将开始的水平坐标（以[**ScaleMode**](#scalemode)单位），除非它覆盖此值。**Single**。由[**Line**](#line)、[**Circle**](#circle)、[**PSet**](#pset)、[**Print**](#print)和[**Cls**](#cls)（将其重置为0）自动更新。

### CurrentY

下一次图形调用将开始的垂直坐标（以[**ScaleMode**](#scalemode)单位）。**Single**。参见[**CurrentX**](#currentx)。

### DataChanged

运行时专用的**Boolean**，当绑定的图片自上次保存以来已被修改时变为**True**，当更改已写回记录集时被清除。

### DataField

在绑定的[**DataSource**](#datasource)的记录集中，其内容被加载到[**Picture**](#picture)的二进制字段的名称。**String**。

### DataFormat

当应用程序需要自定义处理时，在原始记录集值和显示的图片之间转换的**StdDataFormat**。**Object**。使用**Set**设置。

### DataMember

当[**DataSource**](#datasource)暴露多个记录集时，要绑定的成员名称。**String**。

### DataSource

引用[**Data**](/official/Reference/VB/Data/)控件（或其他**DataSource**提供者），其记录集为[**DataField**](#datafield)提供值。使用**Set**设置。

### Dock

图片框在其容器中停靠的位置。[**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants)的成员：**vbDockNone**（默认）、**vbDockLeft**、**vbDockTop**、**vbDockRight**、**vbDockBottom**或**vbDockFill**。停靠的图片框忽略[**Anchors**](#anchors)。

### DragIcon

在控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时拖动自身。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual** (0, 默认——从代码调用[**Drag**](#drag))或**vbAutomatic** (1)。

### DrawMode

通过图形方法绘制时使用的光栅操作。[**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants)的成员，默认**vbCopyPen** (13—— opacity 覆写)。

### DrawStyle

线条绘制方法使用的画笔样式。[**DrawStyleConstants**](/official/Reference/VBRUN/Constants/DrawStyleConstants)的成员：**vbSolid** (0, 默认)、**vbDash**、**vbDot**、**vbDashDot**、**vbDashDotDot**、**vbInvisible**或**vbInsideSolid**。当[**DrawWidth**](#drawwidth)大于1时强制为实线。

### DrawWidth

[**Line**](#line)、[**Circle**](#circle)和[**PSet**](#pset)使用的画笔厚度（以像素为单位）。**Long**，默认1。大于1的值强制[**DrawStyle**](#drawstyle)为**vbSolid**。

### Enabled

决定控件是否接受用户输入。**Boolean**，默认**True**。禁用的图片框仍会绘制和显示其图片，但不引发鼠标、键盘或焦点事件。

### FillColor

由[**Line**](#line)（带`F`标志）和[**Circle**](#circle)绘制的闭合形状使用的填充颜色，作为**OLE_COLOR**。默认**0**（黑色）。仅在[**FillStyle**](#fillstyle)不为**vbFSTransparent**时生效。

### FillStyle

用于填充闭合形状的图案。[**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants)的成员：**vbFSTransparent** (1, 默认)、**vbFSSolid** (0)或一种阴影样式。**Transparent**完全抑制填充，因此只绘制轮廓。

### Font

用于渲染由[**Print**](#print)绘制的文本并由[**TextWidth**](#textwidth) / [**TextHeight**](#textheight)测量的**StdFont**。便捷属性[**FontName**](#fontname)、[**FontSize**](#fontsize)、[**FontBold**](#fontbold)、[**FontItalic**](#fontitalic)、[**FontStrikethru**](#fontstrikethru)和[**FontUnderline**](#fontunderline)读写此对象的相应成员。

### FontBold

[**Font**](#font)`.Bold`的快捷方式。**Boolean**。

### FontItalic

[**Font**](#font)`.Italic`的快捷方式。**Boolean**。

### FontName

[**Font**](#font)`.Name`的快捷方式。**String**。

### FontSize

[**Font**](#font)`.Size`的快捷方式——点大小。**Single**。

### FontStrikethru

[**Font**](#font)`.Strikethrough`的快捷方式。**Boolean**。

### FontTransparent

当**True**（默认）时，[**Print**](#print)绘制的文本使字形之间的背景像素保持不变；当**False**时，字形的背景用[**BackColor**](#backcolor)填充。**Boolean**。

### FontUnderline

[**Font**](#font)`.Underline`的快捷方式。**Boolean**。

### ForeColor

图形方法画笔（线条、圆、点）和[**Print**](#print)文本使用的颜色，作为**OLE_COLOR**。默认为系统按钮文本颜色。

### HasDC

当**True**（默认）时，控件拥有在绘制之间存活的持久设备上下文，使[**hDC**](#hdc)在调用之间保持稳定。当**False**时，设备上下文按需获取并在每次操作后释放；这更节省内存，但排除了依赖稳定[**hDC**](#hdc)值的绘制方法。

### hDC

给出图片框绘图表面的Win32设备上下文句柄的**LongPtr**。只读。适用于传递给GDI API调用。

### Height

控件的高度，默认以缇为单位（或以容器的**ScaleMode**单位）。**Single**。

### HelpContextID

标识应用程序帮助文件中主题的**Long**，当用户在控件具有焦点时按**F1**时检索。

### hWnd

图片框的Win32窗口句柄，作为**LongPtr**。只读。适用于传递给API函数。

### Image

给出图片框当前内容的只读**StdPicture**——包括分配的[**Picture**](#picture)*和*绘制到表面上的任何内容——作为单个位图，适合用**SavePicture**保存、复制到剪贴板或赋值给另一个图片显示。仅在[**AutoRedraw**](#autoredraw)为**True**或持久位图以其他方式存在时可用。

### Index

当控件是控件数组的一部分时，此实例在数组中从零开始的**Long**索引。在非数组实例上读取**Index**会引发运行时错误343（*Object not an array*）。运行时只读。

### Left

从容器的左边缘到控件左边缘的水平距离。**Single**。

### LinkItem

::: info
保留用于VB6 DDE兼容性；twinBASIC中当前未实现。
:::

### LinkMode

::: info
保留用于VB6 DDE兼容性；twinBASIC中当前未实现。
:::

[**LinkModeConstants**](/official/Reference/VBRUN/Constants/LinkModeConstants)的成员。

### LinkTimeout

::: info
保留用于VB6 DDE兼容性；twinBASIC中当前未实现。
:::

### LinkTopic

::: info
保留用于VB6 DDE兼容性；twinBASIC中当前未实现。
:::

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于控件上时用作鼠标光标的**StdPicture**。

### MousePointer

当指针位于控件上时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### Negotiate

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

### OLEDragMode

图片框如何发起OLE拖动操作。[**OLEDragConstants**](/official/Reference/VBRUN/Constants/OLEDragConstants)的成员：**vbOLEDragManual** (0, 默认——从代码调用[**OLEDrag**](#oledrag))或**vbOLEDragAutomatic** (1，当用户开始鼠标拖动时，以当前[**Picture**](#picture)作为载荷启动拖动)。

### Opacity

控件的 opacity 百分比（0--100，默认100）。超出范围的值在**Initialize**时被钳制。子控件需要Windows 8或更高版本。

### Parent

引用最终包含此控件的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）。只读。与[**Container**](#container)不同，后者返回直接父级。

### Picture

在控件客户区中显示的图片。**StdPicture**。**默认属性。**使用**Set**赋值新图片，**Nothing**清除。当[**AutoSize**](#autosize)为**True**时赋值会调整控件大小以适配。

### PictureDpiScaling

当**True**时，[**Picture**](#picture)和图形方法输出在绘制前按当前DPI因子缩放，使以96-dpi创作的图片在高DPI显示器上以物理大小呈现。**Boolean**，默认**False**。

### RightToLeft

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

### ScaleHeight

以[**ScaleMode**](#scalemode)单位表示的绘图表面的高度。**Double**。读写——赋值会将[**ScaleMode**](#scalemode)切换为**vbUser**并重新缩放垂直轴，使控件的客户区跨越新值。

### ScaleLeft

映射到绘图表面左边缘的X坐标。**Double**，默认0。赋值会将[**ScaleMode**](#scalemode)切换为**vbUser**。

### ScaleMode

[**Left**](#left)、[**Top**](#top)、[**Width**](#width)、[**Height**](#height)、[**CurrentX**](#currentx)、[**CurrentY**](#currenty)和每个图形方法使用的单位。[**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)的成员：**vbUser** (0)、**vbTwips** (1, 默认)、**vbPoints**、**vbPixels**、**vbCharacters**、**vbInches**、**vbMillimeters**或**vbCentimeters**。

### ScaleTop

映射到绘图表面顶边缘的Y坐标。**Double**，默认0。赋值会将[**ScaleMode**](#scalemode)切换为**vbUser**。

### ScaleWidth

以[**ScaleMode**](#scalemode)单位表示的绘图表面的宽度。**Double**。读写——赋值会将[**ScaleMode**](#scalemode)切换为**vbUser**。

### TabIndex

控件在窗体TAB键导航顺序中的位置。**Long**。

### TabStop

用户是否可以通过按**TAB**键到达控件。**Boolean**，默认**True**。禁用的控件无论此设置如何都会被跳过。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### ToolTipText

当用户将鼠标悬停在控件上时作为工具提示显示的多行**String**。

### Top

从容器的顶部到控件顶部的垂直距离。**Single**。

### TransparencyKey

设置后变为完全透明的**OLE_COLOR**。默认`-1`禁用此效果。子控件需要Windows 8或更高版本。

### Visible

控件是否显示。**Boolean**，默认**True**。

### WhatsThisHelpID

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

标识"What's This?"帮助弹出主题的**Long**。参见[**ShowWhatsThis**](#showwhatsthis)。

### Width

控件的宽度。**Single**。

## 方法

### Circle

在绘图表面上绘制圆、椭圆或椭圆弧。

语法：*object*.**Circle** [ **Step** ] ( *X*, *Y* ), *Radius* [, *Color* [, *Start* [, *End* [, *Aspect* ] ] ] ]

*X*, *Y*
: *必需* 以[**ScaleMode**](#scalemode)单位表示的圆心坐标。**Single**。以**Step**为前缀时，解释为相对于[**CurrentX**](#currentx) / [**CurrentY**](#currenty)。

*Radius*
: *必需* 沿X轴的半径。**Single**。

*Color*
: *可选* 轮廓的**OLE_COLOR**。默认为[**ForeColor**](#forecolor)。

*Start*, *End*
: *可选* 以弧度为单位的起始和结束角（0到2π）。负值被解释为完整弧度并将弧端点与圆心用弦连接。省略则绘制完整圆。

*Aspect*
: *可选* Y/X纵横比。**1.0**为圆（默认）；其他值为椭圆。

[**CurrentX**](#currentx)和[**CurrentY**](#currenty)留在圆心处。

### Cls

将绘图表面清除为[**BackColor**](#backcolor)，丢弃通过图形方法绘制的所有内容（如果[**AutoRedraw**](#autoredraw)为**True**则包括持久位图），并将[**CurrentX**](#currentx) / [**CurrentY**](#currenty)重置为**0**。分配的[**Picture**](#picture)不受影响。

语法：*object*.**Cls**

### Drag

开始、完成或取消手动拖放操作。通常在[**DragMode**](#dragmode)为**vbManual**时从[**MouseDown**](#mousedown)处理程序调用。

语法：*object*.**Drag** [ *Action* ]

*Action*
: *可选* [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants)的成员：**vbCancel** (0)、**vbBeginDrag** (1, 默认)或**vbEndDrag** (2)。

### Line

绘制直线、矩形轮廓或填充矩形。

语法：*object*.**Line** [ [ **Step** ] ( *X1*, *Y1* ) ] **-** [ **Step** ] ( *X2*, *Y2* ) [, *Color* [, **B** [**F**] ] ]

*X1*, *Y1*
: *可选* 起始坐标。**Single**。省略时，线条从[**CurrentX**](#currentx) / [**CurrentY**](#currenty)开始。**Step**使它们相对于当前画笔位置。

*X2*, *Y2*
: *必需* 终止坐标。**Single**。**Step**使它们相对于起始点。

*Color*
: *可选* 线条的**OLE_COLOR**。默认为[**ForeColor**](#forecolor)。

*B*
: *可选* 存在时，绘制以*(X1, Y1)*和*(X2, Y2)*为对角的矩形，而非线条。

*F*
: *可选* 仅在**B**有效时使用。以当前[**FillStyle**](#fillstyle)用[**FillColor**](#fillcolor)填充矩形。

[**CurrentX**](#currentx) / [**CurrentY**](#currenty)留在*(X2, Y2)*处。

### Move

通过一次调用重新定位并可选地调整控件大小。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**。

*Top*, *Width*, *Height*
: *可选* 相应属性的新值。省略的值保持不变。

### OLEDrag

从控件发起OLE拖动操作，触发[**OLEStartDrag**](#olestartdrag)事件以便应用程序填充**DataObject**。

语法：*object*.**OLEDrag**

### PaintPicture

将图片绘制到表面上，可选缩放、裁剪或应用光栅操作。

语法：*object*.**PaintPicture** *Picture*, *X1*, *Y1* [, *Width1* [, *Height1* [, *X2* [, *Y2* [, *Width2* [, *Height2* [, *Opcode* [, *StretchQuality* ] ] ] ] ] ] ] ]

*Picture*
: *必需* 要绘制的**IPictureDisp**——通常是另一个图片显示的[**Picture**](#picture)或[**Image**](#image)。

*X1*, *Y1*
: *必需* 以[**ScaleMode**](#scalemode)单位表示的目标左上角。

*Width1*, *Height1*
: *可选* 目标大小。默认为图片的自然大小。

*X2*, *Y2*, *Width2*, *Height2*
: *可选* *Picture*内的源矩形。默认为整个图片。

*Opcode*
: *可选* 传递给**BitBlt**的光栅操作代码——例如**&HCC0020**（`vbSrcCopy`，默认）或**&H660046**（`vbSrcInvert`）。

*StretchQuality*
: *可选* `vbStretchQuality`值：**vbQualityNormal**（默认）或**vbQualityHigh**（使用半色调拉伸以获得更好的缩小效果）。

### Point

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

在VB6中，返回给定坐标处像素的颜色作为**Long**，如果点在绘图表面之外则返回**-1**。

语法：*object*.**Point**( *X* **As Single**, *Y* **As Single** ) **As Long**

### Print

使用[**Font**](#font)将文本写入绘图表面，从[**CurrentX**](#currentx) / [**CurrentY**](#currenty)开始并随之推进。通过**Print**语句分派，因此多个表达式可以用`;`（无间距）或`,`（跳到下一个打印区域）分隔。**Spc(n)**插入*n*个空格，**Tab(n)**移到打印列*n*。

语法：*object*.**Print** \[ *expressionlist* ] \[ **;** \| **,** ]

末尾的`;`或`,`抑制换行，使下一次[**Print**](#print)调用在同一行继续。

### PSet

设置单个像素。

语法：*object*.**PSet** [ **Step** ] ( *X*, *Y* ) [, *Color* ]

*X*, *Y*
: *必需* 以[**ScaleMode**](#scalemode)单位表示的坐标。**Step**使它们相对于[**CurrentX**](#currentx) / [**CurrentY**](#currenty)。

*Color*
: *可选* **OLE_COLOR**。默认为[**ForeColor**](#forecolor)。

[**CurrentX**](#currentx) / [**CurrentY**](#currenty)留在设置的点处。

### Refresh

强制立即重绘。当[**AutoRedraw**](#autoredraw)为**True**时，将持久位图复制到可见表面；否则使控件失效并触发[**Paint**](#paint)事件。

语法：*object*.**Refresh**

### Scale

为表面定义用户坐标系。不带参数调用**Scale**会将[**ScaleMode**](#scalemode)重置为**vbTwips**。

语法：*object*.**Scale** [ ( *X1*, *Y1* ) **-** ( *X2*, *Y2* ) ]

*X1*, *Y1*
: *必需*（与第二对一起）映射到左上角的坐标——设置[**ScaleLeft**](#scaleleft)和[**ScaleTop**](#scaletop)。

*X2*, *Y2*
: *必需* 映射到右下角的坐标——设置[**ScaleWidth**](#scalewidth) = `X2 - X1`和[**ScaleHeight**](#scaleheight) = `Y2 - Y1`。[**ScaleMode**](#scalemode)切换为**vbUser**。

### ScaleX

将水平距离从一种比例模式转换为另一种，而不改变[**ScaleMode**](#scalemode)。

语法：*object*.**ScaleX**( *Width* [, *FromScale* [, *ToScale* ] ] ) **As Single**

*Width*
: *必需* 要转换的值。**Single**。

*FromScale*, *ToScale*
: *可选* [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)的成员。*FromScale*默认为控件的当前[**ScaleMode**](#scalemode)；*ToScale*默认为**vbTwips**。

### ScaleY

[**ScaleX**](#scalex)的垂直对应，用于转换高度。

语法：*object*.**ScaleY**( *Height* [, *FromScale* [, *ToScale* ] ] ) **As Single**

### SetFocus

将输入焦点移到控件。控件必须同时[**Visible**](#visible)和[**Enabled**](#enabled)，否则会引发运行时错误5（*Invalid procedure call or argument*）。

语法：*object*.**SetFocus**

### ShowWhatsThis

将以[**WhatsThisHelpID**](#whatsthishelpid)标识的主题显示为"What's This?"弹出窗口。

语法：*object*.**ShowWhatsThis**

### TextHeight

以[**ScaleMode**](#scalemode)单位测量给定字符串以当前[**Font**](#font)渲染时的高度——包括行间距前导，因此结果适合在文本行之间推进[**CurrentY**](#currenty)。嵌入式换行会被遵循。

语法：*object*.**TextHeight**( *Str* **As String** ) **As Single**

### TextWidth

以[**ScaleMode**](#scalemode)单位测量给定字符串以当前[**Font**](#font)渲染时的宽度。当*Str*包含嵌入式换行时返回最长行的宽度。

语法：*object*.**TextWidth**( *Str* **As String** ) **As Single**

### ZOrder

将控件带到其同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront** (0, 默认)或**vbSendToBack** (1)。

### LinkExecute

::: info
保留用于VB6 DDE兼容性；twinBASIC中当前未实现。
:::

### LinkPoke

::: info
保留用于VB6 DDE兼容性；twinBASIC中当前未实现。
:::

### LinkRequest

::: info
保留用于VB6 DDE兼容性；twinBASIC中当前未实现。
:::

### LinkSend

::: info
保留用于VB6 DDE兼容性；twinBASIC中当前未实现。
:::

## 事件

### Change

当[**Picture**](#picture)被赋新值时引发——无论是从代码还是从绑定的记录集。

语法：*object*\_**Change**( )

### Click

当用户用任意鼠标按钮点击控件时引发。**默认设计器事件。**

语法：*object*\_**Click**( )

### DblClick

当用户双击控件时引发。

语法：*object*\_**DblClick**( )

### DragDrop

当手动拖动操作在目标控件上结束时在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

当手动拖动操作进行中时在光标下方的控件上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### GotFocus

当控件获得输入焦点时引发。

语法：*object*\_**GotFocus**( )

### Initialize

在底层窗口创建且[**Picture**](#picture)从序列化数据加载之后引发一次。

语法：*object*\_**Initialize**( )

### KeyDown

当控件具有焦点时用户按下任意键引发。

语法：*object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

当用户输入产生ANSI按键的字符时引发。

语法：*object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

当控件具有焦点时用户释放键引发。

语法：*object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LinkClose

::: info
保留用于VB6 DDE兼容性；twinBASIC中当前未实现。
:::

### LinkError

::: info
保留用于VB6 DDE兼容性；twinBASIC中当前未实现。
:::

### LinkNotify

::: info
保留用于VB6 DDE兼容性；twinBASIC中当前未实现。
:::

### LinkOpen

::: info
保留用于VB6 DDE兼容性；twinBASIC中当前未实现。
:::

### LostFocus

当控件失去输入焦点时引发。

语法：*object*\_**LostFocus**( )

### MouseDown

当用户在控件上按下任意鼠标按钮时引发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

当光标在控件上移动时引发。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

当用户在控件上释放鼠标按钮时引发。

语法：*object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseWheel

当控件具有焦点或光标在其上时用户旋转鼠标滚轮引发。twinBASIC新增——无等效的VB6事件。

语法：*object*\_**MouseWheel**( *Delta* **As Integer**, *Horizontal* **As Boolean** )

*Delta*
: 以`WHEEL_DELTA` (120)为单位的正或负滚动增量。

*Horizontal*
: 水平滚轮旋转为**True**，标准垂直滚轮为**False**。

### OLECompleteDrag

当OLE拖动操作完成时在源控件上引发，指示目标接受了哪种效果（复制、移动、无）。

语法：*object*\_**OLECompleteDrag**( *Effect* **As Long** )

### OLEDragDrop

当用户将数据放到目标控件上时在目标控件上引发。

语法：*object*\_**OLEDragDrop**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### OLEDragOver

当OLE拖动经过目标控件时在目标控件上引发。

语法：*object*\_**OLEDragOver**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### OLEGiveFeedback

在拖动期间在源控件上引发，以便应用程序调整光标或其他视觉反馈。

语法：*object*\_**OLEGiveFeedback**( *Effect* **As Long**, *DefaultCursors* **As Boolean** )

### OLESetData

当目标以已注册但尚未提供的格式请求数据时在源控件上引发。

语法：*object*\_**OLESetData**( *Data* **As DataObject**, *DataFormat* **As Integer** )

### OLEStartDrag

在OLE拖动开始时在源控件上引发，以便应用程序填充**DataObject**并选择允许的效果。当[**OLEDragMode**](#oledragmode)为**vbOLEDragAutomatic**且用户开始拖动时也会自动引发。

语法：*object*\_**OLEStartDrag**( *Data* **As DataObject**, *AllowedEffects* **As Long** )

### Paint

当控件需要重绘其客户区时引发——通常是因为被揭开、调整大小或调用了[**Refresh**](#refresh)。当[**AutoRedraw**](#autoredraw)为**True**时不引发；改为位块传输持久位图。

语法：*object*\_**Paint**( )

### Resize

在控件的[**Height**](#height)或[**Width**](#width)更改后引发。适用于重新排列子控件或重新缩放绘制内容。

语法：*object*\_**Resize**( )

### Validate

当焦点移向另一个[**CausesValidation**](#causesvalidation)为**True**的控件时引发。将*Cancel*设置为**True**使焦点保持在此控件上。

语法：*object*\_**Validate**( *Cancel* **As Boolean** )