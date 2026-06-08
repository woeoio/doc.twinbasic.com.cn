---
title: PropertyPage
parent: VB Package
permalink: /tB/Packages/VB/PropertyPage/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '356a828a-f986-47dd-9627-167453522d7e'
  PropagateID: '356a828a-f986-47dd-9627-167453522d7e'
  ReservedCode1: 'a1e5f9a1-fd53-40f8-8feb-5ad2d34d3125'
  ReservedCode2: 'a1e5f9a1-fd53-40f8-8feb-5ad2d34d3125'
---

# PropertyPage 类

**PropertyPage**是一个容器，支撑COM属性页对话框的单个标签页——从ActiveX控件属性浏览器上的**(Custom)**条目调用的弹出窗口。它暴露**IPropertyPage2** COM接口，以便任何支持ActiveX属性页的主机（twinBASIC IDE、经典VB6、Office等）可以将其放置在自己的属性表框架内，将要编辑的控件传递给它，并将页面的更改应用回它们。

设计属性页与设计小型对话框[**Form**](/official/Reference/VB/Form/)非常相似：将子控件放到上面，编写事件处理程序，自由使用其绘图表面。它与众不同之处在于生命周期，由主机而非应用程序控制：

1. 主机每个对话框实例化一次属性页类。
2. 主机调用**IPropertyPage2.SetObjects**传递选定的ActiveX控件。框架将其存储在[**SelectedControls**](#selectedcontrols)中并引发[**SelectionChanged**](#selectionchanged)。
3. 当用户编辑值时，页面处理程序设置[**Changed**](#changed) = **True**以启用对话框的*Apply*按钮。
4. 当用户点击*OK*或*Apply*时，主机引发[**ApplyChanges**](#applychanges)，以便页面可以将新值写回到[**SelectedControls**](#selectedcontrols)。
5. 对话框关闭时，框架引发[**Terminate**](#terminate)并释放类实例。

默认属性为[**Controls**](#controls)；默认设计器事件为[**SelectionChanged**](#selectionchanged)。

```vb
Private Sub PropertyPage_SelectionChanged()
    ' 将第一个选定控件的属性镜像到编辑器控件中。
    txtCaption.Text = SelectedControls(0).Caption
End Sub

Private Sub txtCaption_Change()
    ' 任何用户编辑都将页面标记为脏，使主机启用Apply。
    Me.Changed = True
End Sub

Private Sub PropertyPage_ApplyChanges()
    ' 将编辑器值写回到每个选定控件。
    Dim ctl As Object
    For Each ctl In SelectedControls
        ctl.Caption = txtCaption.Text
    Next
End Sub
```


## 与主机通信

[**SelectedControls**](#selectedcontrols)是主机希望此标签页编辑的控件的只读集合。主机在引发[**SelectionChanged**](#selectionchanged)之前填充它；页面在其存活期间保持这些引用。集合支持索引访问（`SelectedControls(0)`）、枚举（`For Each ctl In SelectedControls`）和**Count**成员。

[**Changed**](#changed)是页面用于与主机通信的双向标志。设置为**True**启用主机的*Apply*按钮；框架通过**IPropertyPageSite.OnStatusChange**立即通知主机。设置为**False**清除标志——框架在引发[**ApplyChanges**](#applychanges)之后自动执行此操作。

[**EditProperty**](#editproperty)声明用于VB6兼容性，但运行时当前未引发；希望对来自主机的按属性编辑请求做出反应的页面需要等待该连接实现。

[**ValidateControls**](#validatecontrols)从代码显式触发焦点子控件的**Validate**事件；如果验证失败，会引发运行时错误380。在[**ApplyChanges**](#applychanges)中用于在编辑器值格式错误时拒绝应用时很有用。

## 标准大小

VB6属性页对话框框架以两种标准大小之一绘制每个标签页——小型（250 × 62对话框单位）或大型（250 × 110对话框单位）——由主机根据属性表中最大页面的[**StandardSize**](#standardsize)选择。在设计时赋值[**StandardSize**](#standardsize)告诉主机请求哪种大小；在运行时读取它返回页面实际绘制的大小，当[**Width**](#width)和[**Height**](#height)已从任一预设更改时返回**StandardSizeCustom**。值以**EnumStandardSize**单位表示：**StandardSizeCustom** (0)、**StandardSizeSmall** (1)或**StandardSizeLarge** (2)。

## 绘图表面

**PropertyPage**本身就是一个图形表面。完整的VB6绘图原语集——[**Cls**](#cls)、[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)、[**PaintPicture**](#paintpicture)和[**Print**](#print)语句——写入其设备上下文，使用[**ForeColor**](#forecolor)、[**FillColor**](#fillcolor)/[**FillStyle**](#fillstyle)、[**DrawWidth**](#drawwidth)、[**DrawMode**](#drawmode)和[**DrawStyle**](#drawstyle)设置画笔和填充，使用[**Font**](#font)设置文本。当前画笔位置由[**CurrentX**](#currentx)和[**CurrentY**](#currenty)跟踪；[**TextWidth**](#textwidth)和[**TextHeight**](#textheight)以当前字体测量字符串；[**ScaleX**](#scalex)和[**ScaleY**](#scaley)在比例模式之间转换单个坐标。

坐标系由[**ScaleMode**](#scalemode)、[**ScaleLeft**](#scaleleft)、[**ScaleTop**](#scaletop)、[**ScaleWidth**](#scalewidth)和[**ScaleHeight**](#scaleheight)控制，与[**Form**](/official/Reference/VB/Form/)上的方式完全相同。[**AutoRedraw**](#autoredraw)控制绘制输出是否在重绘之间持久保存——当**False**（默认）时，[**Paint**](#paint)事件必须在每次失效时重绘；当**True**时，页面保持一个在失效期间存活的离屏缓冲区，**Paint**事件被禁止。

## 控件和容器

[**Controls**](#controls)是此页面上每个子控件的集合，可通过名称或从零开始的索引访问。页面可直接枚举（`For Each ctrl In Me`）——[**Count**](#count)和[**\_Default**](#controls)成员转发给它。

[**ActiveControl**](#activecontrol)返回获得焦点的子控件，如果此页面上没有控件获得焦点则为**Nothing**。[**SetFocus**](#setfocus)将焦点给予页面本身，然后转发到页面的Tab顺序。[**KeyPreview**](#keypreview)将按键通过页面的[**KeyDown**](#keydown)、[**KeyUp**](#keyup)和[**KeyPress**](#keypress)事件路由，在焦点控件看到它们*之前*——适用于处理**Escape**或页面级快捷键。

## 属性

### ActiveControl

此页面上当前具有输入焦点的控件，作为**Control**对象，当此页面上没有控件获得焦点时为**Nothing**。只读。

### Appearance

[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。

::: info
保留用于VB6兼容性；此属性对属性页没有可观察效果。
:::

### AutoRedraw

在页面上执行的绘制是否在失效之间持久保存。**Boolean**，默认**False**。

当**False**时，绘图原语——[**Cls**](#cls)、[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)、[**PaintPicture**](#paintpicture)和[**Print**](#print)——直接绘制到屏幕，页面必须在其[**Paint**](#paint)事件中在受影响区域失效时重绘它们。当**True**时，页面保持一个离屏位图，绘图原语绘制到其中（并同时到屏幕），位图在失效期间存活，**Paint**事件被禁止。

### BackColor

页面客户区的背景颜色，作为**OLE_COLOR**。默认为系统3-D表面颜色。

### Caption

主机在属性表框架中此页面标签上显示的文本。**String**。

语法：*object*.**Caption** [ = *string* ]

框架在主机调用**IPropertyPage2.GetPageInfo**时读取当前值，因此在页面激活之前所做的更改会生效；之后所做的更改被大多数主机忽略。

### Changed

页面是否有未应用的编辑。**Boolean**，默认**False**。

将**Changed**设置为**True**通过**IPropertyPageSite.OnStatusChange**通知主机页面为脏——主机通常会启用其*Apply*按钮。框架在引发[**ApplyChanges**](#applychanges)之前自动将标志清除回**False**，因此处理程序无需自行重置。

### ClipControls

在绘制期间是否将子控件从页面的绘图区域中裁剪出来。**Boolean**，默认**True**。运行时只读——在设计时设置。

### Controls

此页面承载的每个控件的集合，可通过控件名或从零开始的索引访问。**默认属性。**只读——控件由运行时添加到集合中，而非用户代码。

```vb
Dim ctrl As Control
For Each ctrl In Me.Controls
    ctrl.Enabled = False
Next
```

### ControlType

标识此控件为属性页的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbPropertyPage**。

### Count

[**Controls**](#controls)中的控件数量，作为**Long**。只读。等同于`Me.Controls.Count`。

### CurrentX

水平画笔位置，以[**ScaleMode**](#scalemode)单位，用于省略起始坐标的绘图原语（例如[**Print**](#print)和[**Line**](#line)的矩形形式）。**Double**。

### CurrentY

垂直画笔位置，以[**ScaleMode**](#scalemode)单位，用于省略起始坐标的绘图原语。**Double**。

### DpiScaleFactorX

页面当前所在显示器的水平DPI缩放因子，作为**Double**。96 DPI时为`1.0`，120 DPI时为`1.25`，144 DPI时为`1.5`，依此类推。只读。

### DpiScaleFactorY

页面当前所在显示器的垂直DPI缩放因子。当前始终等于[**DpiScaleFactorX**](#dpiscalefactorx)。只读。

### DrawMode

绘图原语在将画笔与目标组合时应用的光栅操作。[**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants)的成员，默认**vbCopyPen**。

### DrawStyle

绘图原语使用的画笔线型。[**DrawStyleConstants**](/official/Reference/VBRUN/Constants/DrawStyleConstants)的成员：**vbSolid**（默认）、**vbDash**、**vbDot**、**vbDashDot**、**vbDashDotDot**、**vbInvisible**或**vbInsideSolid**。

### DrawWidth

绘图原语的画笔宽度（以像素为单位）。**Long**，默认`1`。宽度大于1时强制[**DrawStyle**](#drawstyle)回到**vbSolid**（Win32 GDI限制）。

### FillColor

由[**Circle**](#circle)和[**Line**](#line)的矩形形式绘制的闭合形状的填充颜色。**OLE_COLOR**，默认`0`（黑色）。仅在[**FillStyle**](#fillstyle)不为**vbFSTransparent**时使用。

### FillStyle

闭合形状的填充图案。[**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants)的成员：**vbFSSolid**、**vbFSTransparent**（默认）、**vbHorizontalLine**、**vbVerticalLine**、**vbUpwardDiagonal**、**vbDownwardDiagonal**、**vbCross**或**vbDiagonalCross**。

### Font

此页面上[**Print**](#print)语句和其他文本绘制使用的**StdFont**。便捷属性[**FontName**](#fontname)、[**FontSize**](#fontsize)、[**FontBold**](#fontbold)、[**FontItalic**](#fontitalic)、[**FontStrikethru**](#fontstrikethru)和[**FontUnderline**](#fontunderline)读写此对象的相应成员。

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

当**True**（默认）时，页面上绘制的文本具有透明背景，使底层绘制在文本后面可见。当**False**时，文本绘制在由[**BackColor**](#backcolor)填充的 opaque 矩形上。**Boolean**。

### FontUnderline

[**Font**](#font)`.Underline`的快捷方式。**Boolean**。

### ForeColor

[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)以及[**Print**](#print)绘制的文本使用的画笔颜色。**OLE_COLOR**。

### HasDC

页面是否为其绘图表面保持私有设备上下文（`CS_OWNDC`）。**Boolean**，在属性页上始终为**True**。只读。

### hDC

页面的Win32设备上下文句柄，作为**LongPtr**。只读。当底层窗口尚未创建时返回`0`。适用于传递给GDI API调用。

### Height

页面的外部高度，默认以缇为单位（或以调用代码的**ScaleMode**单位）。**Double**。主机通常根据[**StandardSize**](#standardsize)设置页面大小；显式赋值**Height**切换到自定义大小。

### HelpContextID

标识应用程序帮助文件中主题的**Long**，当用户在页面具有焦点时按**F1**时检索。

### hWnd

页面的Win32窗口句柄，作为**LongPtr**。只读。适用于传递给API函数。

### KeyPreview

当**True**时，页面的[**KeyDown**](#keydown)、[**KeyUp**](#keyup)和[**KeyPress**](#keypress)事件在焦点控件收到相同按键*之前*触发。**Boolean**，默认**False**。适用于页面级快捷键；事件之后仍在焦点控件上触发。

### Left

页面外部矩形在主机属性表框架中的水平位置，以缇为单位。**Double**。由主机通过**IPropertyPage2.Activate**和**Move**设置；很少从用户代码赋值。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于页面上（且不在有自己设置的子控件上）时用作鼠标光标的**StdPicture**。

### MousePointer

当指针位于页面上（且不在有自己设置的子控件上）时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

属性页类的唯一设计时名称。运行时只读。也是生成的属性页类的类名。

### OLEDropMode

页面如何响应OLE放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone**或**vbOLEDropManual**。属性页上不支持自动放置模式。

### Palette

::: info
保留用于VB6的256色调色板功能的兼容性；twinBASIC中当前未实现。
:::

### PaletteMode

::: info
保留用于VB6的256色调色板功能的兼容性；twinBASIC中当前未实现。
:::

### Picture

作为页面背景绘制的**StdPicture**。在任何绘图原语或子控件之前绘制。赋值**Nothing**移除背景。

### PictureDpiScaling

当**True**时，[**Picture**](#picture)在绘制前按当前DPI因子缩放。**Boolean**，默认**False**。

### RightToLeft

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

### ScaleHeight

逻辑绘图矩形的高度，以[**ScaleMode**](#scalemode)单位。**Double**。设置它（或[**ScaleWidth**](#scalewidth)、[**ScaleLeft**](#scaleleft)或[**ScaleTop**](#scaletop)）会隐式将**ScaleMode**切换为**vbUser**。

### ScaleLeft

页面客户区左边缘的逻辑水平坐标，以[**ScaleMode**](#scalemode)单位。**Double**。默认`0`。

### ScaleMode

[**CurrentX**](#currentx)、[**CurrentY**](#currenty)、绘图原语、[**TextWidth**](#textwidth)和[**TextHeight**](#textheight)使用的度量单位。[**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)的成员：**vbTwips**（默认）、**vbPoints**、**vbPixels**、**vbCharacters**、**vbInches**、**vbMillimeters**、**vbCentimeters**或**vbUser**（由四个**Scale\***属性定义矩形）。

### ScaleTop

页面客户区顶边缘的逻辑垂直坐标，以[**ScaleMode**](#scalemode)单位。**Double**。默认`0`。

### ScaleWidth

逻辑绘图矩形的宽度，以[**ScaleMode**](#scalemode)单位。**Double**。设置它会隐式将**ScaleMode**切换为**vbUser**。

### SelectedControls

主机要求此页面编辑的对象集合，作为**SelectedControls**实例。只读。框架在引发[**SelectionChanged**](#selectionchanged)之前填充集合，并在[**Terminate**](#terminate)时清除它。

返回的对象暴露三个成员：

- `Count` **As Long**——选定对象的数量（当主机尚未调用**SetObjects**或已清除选择时为`0`）。
- `Item(`*Index*`)` **As Object**——从零开始的索引访问。**默认成员**，因此`SelectedControls(0)`返回第一个对象。
- `_NewEnum`——支持`For Each ctl In SelectedControls`。

项目以**Object**形式返回，因此使用**CallByName**或后期绑定成员访问来读写其属性。

```vb
For Each ctl In SelectedControls
    ctl.Caption = txtCaption.Text
Next
```

### StandardSize

页面在主机属性表框架中的标准大小。**EnumStandardSize**的成员：**StandardSizeCustom** (0)、**StandardSizeSmall** (1——250 × 62对话框单位)或**StandardSizeLarge** (2——250 × 110对话框单位)。

语法：*object*.**StandardSize** [ = *value* ]

读取**StandardSize**将页面的当前像素大小与小型/大型预设进行比较，当两者都不匹配时返回**StandardSizeCustom**。赋值**StandardSizeSmall**或**StandardSizeLarge**相应地调整页面大小；赋值**StandardSizeCustom**是空操作（保持大小不变）。此属性仅在代码中暴露——VB6在设计时属性表上暴露了它，但从未在运行时对象模型中暴露。

### Tag

应用程序可用于将自定义数据与页面关联的自由格式**String**。框架忽略此属性。

### Top

页面外部矩形在主机属性表框架中的垂直位置，以缇为单位。**Double**。由主机设置；很少从用户代码赋值。

### Width

页面的外部宽度，默认以缇为单位（或以调用代码的**ScaleMode**单位）。**Double**。主机通常根据[**StandardSize**](#standardsize)设置页面大小；显式赋值**Width**切换到自定义大小。

## 方法

### Circle

使用[**ForeColor**](#forecolor)绘制轮廓，[**FillColor**](#fillcolor)/[**FillStyle**](#fillstyle)填充内部，在页面上绘制圆、椭圆或弧。

语法：*object*.**Circle** [ **Step** ] ( *X*, *Y* ), *Radius* [, [ *Color* ] [, [ *Start* ] [, [ *End* ] [, *Aspect* ] ] ] ]

*X*, *Y*
: *必需* 圆心，以[**ScaleMode**](#scalemode)单位。**Step**使圆心相对于([**CurrentX**](#currentx), [**CurrentY**](#currenty))。

*Radius*
: *必需* 以**ScaleMode**单位给出半径的**Single**。

*Color*
: *可选* 轮廓的**OLE_COLOR**；默认为[**ForeColor**](#forecolor)。

*Start*, *End*
: *可选* 以弧度为单位的角，用于绘制弧而非完整圆。

*Aspect*
: *可选* 垂直半径与水平半径的比率。`1.0`为圆形；偏离`1.0`的值产生椭圆。

### Cls

清除由[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)、[**PaintPicture**](#paintpicture)和[**Print**](#print)执行的任何绘制，重新绘制[**BackColor**](#backcolor)，并将[**CurrentX**](#currentx) / [**CurrentY**](#currenty)重置为`0`。不影响[**Picture**](#picture)背景或子控件。

语法：*object*.**Cls**

### Line

使用[**ForeColor**](#forecolor)（或显式颜色）和[**DrawWidth**](#drawwidth)/[**DrawStyle**](#drawstyle)在页面上绘制直线或矩形。

语法：*object*.**Line** [ [ **Step** ] ( *X1*, *Y1* ) ] -[ **Step** ] ( *X2*, *Y2* ) [, [ *Color* ] [, **B** [ **F** ] ] ]

*X1*, *Y1*
: *可选* 起始点，以[**ScaleMode**](#scalemode)单位。**Step**使点相对于([**CurrentX**](#currentx), [**CurrentY**](#currenty))。省略时，从当前画笔位置开始绘制。

*X2*, *Y2*
: *必需* 终止点，以**ScaleMode**单位。**Step**使点相对于(*X1*, *Y1*)。

*Color*
: *可选* 线条的**OLE_COLOR**；默认为[**ForeColor**](#forecolor)。

**B**
: *可选* 绘制一个以(*X1*, *Y1*)和(*X2*, *Y2*)为对角的矩形，而非线条。

**F**
: *可选* 与**B**组合时，用[**ForeColor**](#forecolor)而非[**FillColor**](#fillcolor)/[**FillStyle**](#fillstyle)填充矩形。

### OLEDrag

从页面发起OLE拖动操作，触发[**OLEStartDrag**](#olestartdrag)事件以便应用程序填充**DataObject**。

语法：*object*.**OLEDrag**

### PaintPicture

将**StdPicture**绘制到页面上，支持可选的缩放和光栅操作。

语法：*object*.**PaintPicture** *Picture*, *X1*, *Y1* [, *Width1* [, *Height1* [, *X2* [, *Y2* [, *Width2* [, *Height2* [, *Opcode* [, *StretchQuality* ] ] ] ] ] ] ] ]

*Picture*
: *必需* 要绘制的**StdPicture**。

*X1*, *Y1*
: *必需* 目标左上角，以[**ScaleMode**](#scalemode)单位。

*Width1*, *Height1*
: *可选* 目标大小；默认为图片的自然大小。

*X2*, *Y2*, *Width2*, *Height2*
: *可选* 图片内的源矩形；默认为整个图片。

*Opcode*
: *可选* 光栅操作代码（[**RasterOpConstants**](/official/Reference/VBRUN/Constants/RasterOpConstants)的成员）。默认为**vbSrcCopy**。

*StretchQuality*
: *可选* 缩放时的插值方法。默认为普通质量。

### Point

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。在VB6中，此方法返回绘图表面单个像素的**OLE_COLOR**。
:::

语法：*object*.**Point**( *X*, *Y* )

### Print

使用[**Font**](#font)将文本写入页面的绘图表面，从[**CurrentX**](#currentx) / [**CurrentY**](#currenty)开始并随之推进。通过VB6 **Print**语句分派，因此多个表达式可以用`;`（无间距）或`,`（跳到下一个打印区域）分隔。**Spc(n)**插入*n*个空格，**Tab(n)**移到打印列*n*。输出遵循[**Font**](#font)、[**ForeColor**](#forecolor)和[**FontTransparent**](#fonttransparent)，当[**AutoRedraw**](#autoredraw)为**True**时记录到持久离屏位图，从而在失效期间存活。

语法：*object*.**Print** \[ *expressionlist* ] \[ **;** \| **,** ]

末尾的`;`或`,`抑制换行，使下一次**Print**调用在同一行继续。

### PSet

将页面上的单个像素设置为指定颜色。

语法：*object*.**PSet** [ **Step** ] ( *X*, *Y* ) [, *Color* ]

*X*, *Y*
: *必需* 像素位置，以[**ScaleMode**](#scalemode)单位。**Step**使位置相对于([**CurrentX**](#currentx), [**CurrentY**](#currenty))。

*Color*
: *可选* **OLE_COLOR**；默认为[**ForeColor**](#forecolor)。

### Refresh

强制页面立即重绘，当[**AutoRedraw**](#autoredraw)为**False**时触发[**Paint**](#paint)。

语法：*object*.**Refresh**

### Scale

通过一次调用设置页面的逻辑绘图矩形——赋值[**ScaleLeft**](#scaleleft)、[**ScaleTop**](#scaletop)、[**ScaleWidth**](#scalewidth)和[**ScaleHeight**](#scaleheight)。将[**ScaleMode**](#scalemode)切换为**vbUser**。不带参数调用**Scale**会将矩形重置为与客户区1:1映射（以像素为单位）。

语法：*object*.**Scale** [ ( *X1*, *Y1* )-( *X2*, *Y2* ) ]

*X1*, *Y1*
: *可选* 左上角的逻辑坐标。

*X2*, *Y2*
: *可选* 右下角的逻辑坐标。

### ScaleX

将水平长度从一种[**ScaleMode**](#scalemode)转换为另一种。

语法：*object*.**ScaleX**( *Width* [, *FromScale* [, *ToScale* ] ] )

*Width*
: *必需* 给出源长度的**Single**。

*FromScale*, *ToScale*
: *可选* [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)的成员。省略时默认为当前**ScaleMode**。

### ScaleY

将垂直长度从一种[**ScaleMode**](#scalemode)转换为另一种。

语法：*object*.**ScaleY**( *Height* [, *FromScale* [, *ToScale* ] ] )

*Height*
: *必需* 给出源长度的**Single**。

*FromScale*, *ToScale*
: *可选* [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)的成员。省略时默认为当前**ScaleMode**。

### SetFocus

激活页面并将输入焦点给予其第一个可获得焦点的子控件（或此页面上最后持有焦点的控件）。

语法：*object*.**SetFocus**

### TextHeight

返回给定字符串使用页面当前[**Font**](#font)绘制时将占用的 height，以[**ScaleMode**](#scalemode)单位。嵌入式换行会被遵循。

语法：*object*.**TextHeight**( *Str* )

*Str*
: *必需* 要测量的**String**。

### TextWidth

返回给定字符串使用页面当前[**Font**](#font)绘制时将占用的 width，以[**ScaleMode**](#scalemode)单位。当*Str*包含嵌入式换行时返回最长行的宽度。

语法：*object*.**TextWidth**( *Str* )

*Str*
: *必需* 要测量的**String**。

### ValidateControls

触发此页面上当前活动控件的**Validate**事件。如果处理程序将*Cancel*设置为**True**，**ValidateControls**会引发运行时错误380（*Invalid property value*）；调用者可以用`On Error`包装此调用以检测失败的验证。在[**ApplyChanges**](#applychanges)中用于在编辑器值格式错误时拒绝应用时很有用。

语法：*object*.**ValidateControls**

## 事件

### ApplyChanges

当主机调用**IPropertyPage2.Apply**时引发——通常是因为用户在属性表对话框上点击了*OK*或*Apply*。处理程序应将页面当前的编辑器值写回到[**SelectedControls**](#selectedcontrols)中的每个对象。框架在处理程序运行之前将[**Changed**](#changed)清除为**False**。当应用时[**Changed**](#changed)已经为**False**时不引发。

语法：*object*\_**ApplyChanges**( )

### Click

当用户单击页面的客户区时引发（即不在任何子控件上）。

语法：*object*\_**Click**( )

### DblClick

当用户双击页面的客户区时引发。

语法：*object*\_**DblClick**( )

### DPIChange

当页面移动到具有不同DPI缩放的显示器时引发，*但仅当*应用程序是按显示器DPI感知的（`PROCESS_PER_MONITOR_DPI_AWARE`）。事件的*NewDPI*参数给出新的有效DPI；子控件会自动重新缩放。

语法：*object*\_**DPIChange**( *NewDPI* **As Long** )

### DragDrop

当手动拖动操作在目标控件上结束时在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

当手动拖动操作进行中时在光标下方的控件上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### EditProperty

::: info
声明用于VB6兼容性；twinBASIC中当前未引发。主机的**IPropertyPage2.EditProperty**请求已被确认但尚未传播到托管事件。
:::

实现后，当主机要求页面将焦点给予与命名属性对应的编辑器时引发——通常是因为用户在属性浏览器中双击了该属性。

语法：*object*\_**EditProperty**( *PropertyName* **As String** )

*PropertyName*
: 主机希望编辑的属性名称。

### GotFocus

当页面获得输入焦点且页面上没有启用的子控件可以代替获取焦点时引发。

语法：*object*\_**GotFocus**( )

### Initialize

引发一次，在页面的窗口和所有控件创建之后且页面已注册到其主机的框架之后，在[**SelectionChanged**](#selectionchanged)首次引发之前。这是用不依赖于选定对象的静态数据（选择列表、默认值等）填充编辑器控件的经典位置。

语法：*object*\_**Initialize**( )

### KeyDown

当用户按下任意键时引发。默认在焦点控件上触发；[**KeyPreview**](#keypreview)为**True**时，首先在页面上触发。

语法：*object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

当用户输入产生ANSI按键的字符时引发。默认在焦点控件上触发；[**KeyPreview**](#keypreview)为**True**时，首先在页面上触发。

语法：*object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

当用户释放键时引发。默认在焦点控件上触发；[**KeyPreview**](#keypreview)为**True**时，首先在页面上触发。

语法：*object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LostFocus

当页面失去输入焦点时引发。

语法：*object*\_**LostFocus**( )

### MouseDown

当用户在页面的客户区按下任意鼠标按钮时引发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

当光标在页面的客户区上移动时引发。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

当用户在页面的客户区释放鼠标按钮时引发。

语法：*object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

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

在OLE拖动开始时在源控件上引发，以便应用程序填充**DataObject**并选择允许的效果。

语法：*object*\_**OLEStartDrag**( *Data* **As DataObject**, *AllowedEffects* **As Long** )

### Paint

当页面的失效部分需要重绘时引发。当[**AutoRedraw**](#autoredraw)为**True**时被禁止——页面的持久离屏缓冲区被位块传输到屏幕。

语法：*object*\_**Paint**( )

### SelectionChanged

在主机调用**IPropertyPage2.SetObjects**给页面一组新的编辑对象或清除选择之后引发。处理程序应读取[**SelectedControls**](#selectedcontrols)并将这些对象的共同状态镜像到页面的编辑器控件中。**默认设计器事件。**

语法：*object*\_**SelectionChanged**( )

### Terminate

当页面正在被销毁时引发——一次在其窗口从主机的属性表框架上取消挂钩时，另一次在类实例的最后一个引用被释放时。处理程序在[**SelectedControls**](#selectedcontrols)仍然填充时运行，给它最后的机会在被编辑对象释放之前从中读取状态。

语法：*object*\_**Terminate**( )