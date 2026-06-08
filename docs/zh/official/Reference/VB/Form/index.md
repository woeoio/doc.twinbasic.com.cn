---
title: Form
parent: VB Package
permalink: /tB/Packages/VB/Form/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '413cebf1-c105-49fd-9ade-65d1c8fce68a'
  PropagateID: '413cebf1-c105-49fd-9ade-65d1c8fce68a'
  ReservedCode1: '558953d8-40f3-465e-8e68-3a255d56fa93'
  ReservedCode2: '558953d8-40f3-465e-8e68-3a255d56fa93'
---

# Form 类

**Form** 是一个顶级 Win32 窗口，承载单个 twinBASIC 用户界面的控件、菜单和绘图表面。在 IDE 中设计的每个窗体都成为派生自**Form**的自身类——其控件成为该类的成员，其事件处理程序成为其上的方法，文件名成为类名。窗体外的代码通常通过全局默认实例引用（`MyForm.Show`）隐式实例化它，或使用`New MyForm`显式实例化。默认属性为[**Controls**](#controls)，默认事件为[**Load**](#load)。

```vb
' 在 Form1 的代码隐藏中：
Private Sub Form_Load()
    Caption = "Welcome"
    Me.MinWidth = 4000          ' 缇，≈ 2 英寸
    Me.MinHeight = 3000
End Sub

Private Sub Form_QueryUnload(Cancel As Integer, UnloadMode As Integer)
    If MsgBox("Quit?", vbYesNo) = vbNo Then Cancel = 1
End Sub

' 在启动模块中：
Sub Main()
    Form1.Show vbModal
End Sub
```


## 生命周期

窗体从创建到销毁经历六个不同事件：

| 事件                            | 时机                                                                                |
|----------------------------------|-------------------------------------------------------------------------------------|
| [**Initialize**](#initialize)    | 底层窗口存在之前。窗体的控件尚未创建。       |
| [**Load**](#load)                | 窗口和所有控件创建之后，窗体首次显示之前。 |
| [**Activate**](#activate)        | 窗体成为应用程序中的活动窗口时。                         |
| [**Deactivate**](#deactivate)    | 另一个窗体（或另一个应用程序的窗口）夺取激活时。          |
| [**QueryUnload**](#queryunload)  | 卸载之前。将*Cancel*设置为非零可保持窗体打开。                    |
| [**Unload**](#unload)            | **QueryUnload**通过之后。将*Cancel*设置为非零可保持窗体打开。   |
| [**Terminate**](#terminate)      | 窗口销毁且类实例释放之后。             |

关闭窗体经过**QueryUnload**_和_**Unload**两者，因此任一都可以否决。**QueryUnload**的*UnloadMode*参数（[**QueryUnloadConstants**](/official/Reference/VBRUN/Constants/QueryUnloadConstants)）报告用户是点击了关闭按钮、代码调用了**Unload**、Windows 正在关机、MDI 父窗体正在关闭等。

## 显示窗体

[**Show**](#show)使窗体可见。它接受一个可选的[**FormShowConstants**](/official/Reference/VBRUN/Constants/FormShowConstants)参数：**vbModeless**（默认——调用立即返回，用户可与其他窗体交互）或**vbModal**（调用阻塞直到窗体关闭，应用程序中的其他窗体变得不可响应）。MDI 子窗体不能以模态方式显示；尝试这样做会引发运行时错误 404。

```vb
dlgOptions.Show vbModal, Me      ' 模态，由调用窗体拥有
```

[**Hide**](#hide)和[**Close**](#close)反转效果：**Hide**仅清除[**Visible**](#visible)；**Close**运行完整的卸载序列（**QueryUnload**然后**Unload**然后**Terminate**）。经典的`Unload <FormName>`语句在语言层面等同于**Close**。

[**StartUpPosition**](#startupposition)（[**StartUpPositionConstants**](/official/Reference/VBRUN/Constants/StartUpPositionConstants)）在首次**Show**时读取以决定窗体放置位置；之后由用户（或代码通过[**Move**](#move)和[**WindowState**](#windowstate)）控制位置。

## 窗口外观

[**BorderStyle**](#borderstyle)（[**FormBorderStyleConstants**](/official/Reference/VBRUN/Constants/FormBorderStyleConstants)）在可调整大小、固定、对话框、工具和无边框框架之间选择。[**Caption**](#caption)是标题栏文本。[**ControlBox**](#controlbox)、[**MaxButton**](#maxbutton)和[**MinButton**](#minbutton)切换系统菜单和调整大小按钮。[**Icon**](#icon)提供系统菜单、任务栏和 Alt-Tab 使用的小/大图标。[**WindowState**](#windowstate)（[**FormWindowStateConstants**](/official/Reference/VBRUN/Constants/FormWindowStateConstants)）在运行时读取或设置正常/最小化/最大化状态。

[**MinWidth**](#minwidth)、[**MinHeight**](#minheight)、[**MaxWidth**](#maxwidth)和[**MaxHeight**](#maxheight)在交互式调整大小期间以缇为单位约束*客户区*。[**Moveable**](#moveable)决定用户是否可以通过标题栏拖动窗体；[**ShowInTaskbar**](#showintaskbar)决定窗体是否出现在任务栏和 Alt-Tab 列表中。

[**Opacity**](#opacity)和[**TransparencyKey**](#transparencykey)启用 Windows 的分层窗口功能，实现半透明窗体和镂空形状。

## 绘图表面

**Form** 本身是一个图形表面——代码可以直接在其上绘制线条、形状和文本。坐标系由[**ScaleMode**](#scalemode)（默认**vbTwips**——经典 VB6 行为）和[**ScaleLeft**](#scaleleft) / [**ScaleTop**](#scaletop) / [**ScaleWidth**](#scalewidth) / [**ScaleHeight**](#scaleheight)属性控制，它们共同描述窗体的逻辑绘图矩形。将**ScaleMode**设置为**vbUser**允许四个**Scale\***属性定义任意矩形；[**Scale**](#scale)方法在单次调用中完成此操作。

绘图原语为[**Cls**](#cls)、[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)、[**PaintPicture**](#paintpicture)和[**Print**](#print)语句（`Form1.Print "Hello"`）——均使用[**ForeColor**](#forecolor)、[**FillColor**](#fillcolor)、[**FillStyle**](#fillstyle)、[**DrawWidth**](#drawwidth)、[**DrawMode**](#drawmode)和[**DrawStyle**](#drawstyle)作为画笔和填充，并使用窗体的[**Font**](#font)绘制文本。当前画笔位置由[**CurrentX**](#currentx)和[**CurrentY**](#currenty)跟踪；[**TextWidth**](#textwidth)和[**TextHeight**](#textheight)以当前字体测量字符串。[**ScaleX**](#scalex)和[**ScaleY**](#scaley)在比例模式之间转换单个坐标。

[**AutoRedraw**](#autoredraw)控制绘图输出是否在重绘时持久保留：当**False**（默认）时，[**Paint**](#paint)事件必须在每次失效时重绘；当**True**时，窗体保持一个在失效时存活的离屏缓冲区，**Paint**事件被抑制。设置[**Picture**](#picture)在绘图层后面放置位图；[**Image**](#image)以**StdPicture**形式返回渲染的组合表面。

```vb
Private Sub Form_Paint()
    Me.ScaleMode = vbPixels
    Me.ForeColor = vbBlue
    Me.DrawWidth = 3
    Me.Line (10, 10)-(120, 80), , B          ' 矩形
    Me.CurrentX = 16 : Me.CurrentY = 16
    Me.Print "Hello, twinBASIC"
End Sub
```

## 控件和验证

[**Controls**](#controls)是窗体上每个控件的集合，可按名称或零基位置索引。**Form** 也可直接枚举——`For Each ctrl In Form1`产生与`For Each ctrl In Form1.Controls`相同的项。[**Count**](#count)是`Controls.Count`的简写。[**ActiveControl**](#activecontrol)返回当前获得焦点的子控件，或当此窗体上没有控件获得焦点时返回**Nothing**。

[**KeyPreview**](#keypreview)将击键路由到窗体的[**KeyDown**](#keydown)、[**KeyUp**](#keyup)和[**KeyPress**](#keypress)事件，*在*焦点控件看到它们*之前*——适用于应用程序级热键处理。[**ValidateControls**](#validatecontrols)从代码显式触发活动控件的**Validate**事件；如果验证处理程序设置*Cancel*，则引发运行时错误 380。

## 菜单和弹出菜单

在窗体设计时设计的菜单结构自动出现在窗体的标题栏中。[**PopUpMenu**](#popupmenu)将其中一个菜单作为上下文菜单弹出显示在指定位置，当用户选择项目时触发菜单的**Click**事件。

```vb
Private Sub Form_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
    If Button = vbRightButton Then PopUpMenu mnuContext
End Sub
```

## 属性

### ActiveControl

此窗体上当前获得输入焦点的控件，为**Control**对象，或当此窗体上没有控件获得焦点时为**Nothing**。只读。

### AlwaysShowKeyboardCues

当**True**时，窗体始终显示[**Caption**](#caption)和菜单项中访问键字符的下划线，而不是仅在用户按**Alt**后显示。**Boolean**，运行时只读。在设计时设置。

### Appearance

决定操作系统如何绘制控件边框。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。

::: info
保留用于 VB6 兼容性；该属性在窗体上没有可观察效果。
:::

### AutoRedraw

在窗体上执行的绘图是否在失效时持久保留。**Boolean**，默认**False**。

当**False**时，绘图原语——[**Cls**](#cls)、[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)、[**PaintPicture**](#paintpicture)和[**Print**](#print)——直接绘制到屏幕，窗体必须在[**Paint**](#paint)事件中在受影响区域失效时重绘它们。当**True**时，窗体保持一个离屏位图，绘图原语绘制到其中（并立即到屏幕），位图在失效时存活，**Paint**事件被抑制。读取[**Image**](#image)返回此位图。

### BackColor

窗体客户区的背景色，为**OLE_COLOR**。默认为系统 3D 面颜色。用作[**Cls**](#cls)的填充色和[**Picture**](#picture)后面的画布。

### BorderStyle

窗口框架样式。[**FormBorderStyleConstants**](/official/Reference/VBRUN/Constants/FormBorderStyleConstants)的成员：**vbBSNone**、**vbFixedSingle**、**vbSizable**（默认）、**vbFixedDialog**、**vbFixedToolWindow**、**vbSizableToolWindow**、**vbSizableNoTitleBar**（twinBASIC 新增）或**vbSizableToolWindowNoTitleBar**（twinBASIC 新增）。运行时更改被接受，但仅在窗口发生另一次更改后生效——通常是重新赋值[**Caption**](#caption)。

### Caption

标题栏文本。**String**。

语法：*object*.**Caption** [ = *string* ]

设置**Caption**会立即更新标题栏并重新同步标题栏样式标志（因此它可以恢复因前一个**Caption**为空而隐藏的标题栏）。

### ClipControls

在绘制期间子控件是否从窗体的绘图区域中裁剪出去。**Boolean**，默认**True**。运行时只读——在设计时设置。

### ControlBox

窗体标题栏是否显示系统菜单（以及关闭按钮）。**Boolean**，默认**True**。在运行时设置会重新同步标题栏样式标志。

### Controls

此窗体承载的每个控件的集合，可按控件名称或零基位置索引。**默认属性。**只读——控件由运行时添加到集合中，而非用户代码。

```vb
Dim ctrl As Control
For Each ctrl In Me.Controls
    ctrl.Enabled = False
Next
```

### Count

[**Controls**](#controls)中的控件数量，为**Long**。只读。等效于`Me.Controls.Count`。

### ControlType

标识此控件为窗体的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbForm**。

### CurrentX

水平画笔位置，以[**ScaleMode**](#scalemode)单位表示，由省略起始坐标的绘图原语使用（例如[**Print**](#print)和[**Line**](#line)的矩形形式）。**Double**。

### CurrentY

垂直画笔位置，以[**ScaleMode**](#scalemode)单位表示，由省略起始坐标的绘图原语使用。**Double**。

### DpiScaleFactorX

窗体当前所在显示器的水平 DPI 缩放因子，为**Double**。96 DPI 时为`1.0`，120 DPI 时为`1.25`，144 DPI 时为`1.5`，以此类推。只读。

### DpiScaleFactorY

窗体当前所在显示器的垂直 DPI 缩放因子。当前始终等于[**DpiScaleFactorX**](#dpiscalefactorx)。只读。

### DrawMode

绘图原语在将画笔与目标组合时应用的光栅操作。[**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants)的成员：**vbCopyPen**（默认）是正常不透明绘制；其他值产生 XOR、AND、NOT 和其他像素混合效果。

### DrawStyle

绘图原语使用的画笔线型。[**DrawStyleConstants**](/official/Reference/VBRUN/Constants/DrawStyleConstants)的成员：**vbSolid**（默认）、**vbDash**、**vbDot**、**vbDashDot**、**vbDashDotDot**、**vbInvisible**或**vbInsideSolid**。

### DrawWidth

绘图原语的画笔宽度，以像素为单位。**Long**，默认`1`。宽度大于 1 会强制[**DrawStyle**](#drawstyle)回到**vbSolid**（Win32 GDI 限制）。

### Enabled

决定窗体是否接受用户输入。禁用的窗体忽略键盘和鼠标输入并使其控件变暗。**Boolean**，默认**True**。

### FillColor

由[**Circle**](#circle)和[**Line**](#line)矩形形式绘制的封闭形状的填充色。**OLE_COLOR**，默认`0`（黑色）。仅在[**FillStyle**](#fillstyle)不为**vbFSTransparent**时使用。

### FillStyle

封闭形状的填充图案。[**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants)的成员：**vbFSSolid**、**vbFSTransparent**（默认）、**vbHorizontalLine**、**vbVerticalLine**、**vbUpwardDiagonal**、**vbDownwardDiagonal**、**vbCross**或**vbDiagonalCross**。

### Font

本窗体上[**Print**](#print)语句和其他文本绘制使用的**StdFont**。便利属性**FontName**、**FontSize**、**FontBold**、**FontItalic**、**FontStrikethru**和**FontUnderline**读取或写入此对象的相应成员。

### FontTransparent

当**True**（默认）时，在窗体上绘制的文本具有透明背景，底层绘图在文本后面可见。当**False**时，文本绘制在以[**BackColor**](#backcolor)填充的不透明矩形上。**Boolean**。

### ForeColor

由[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)使用的画笔颜色和[**Print**](#print)绘制的文本颜色。**OLE_COLOR**。

### hDC

窗体的 Win32 设备上下文句柄，为**LongPtr**。只读。当底层窗口尚未创建时返回`0`。适用于传递给 GDI API 调用。

### HasDC

窗体是否为其绘图表面保持专用设备上下文（`CS_OWNDC`）。**Boolean**，默认**True**。运行时只读——在设计时设置。

### Height

窗体的外部高度，默认以缇为单位（或容器**ScaleMode**单位）。**Double**。设置它会调整窗口大小。运行时受[**MinHeight**](#minheight)和[**MaxHeight**](#maxheight)约束（非零时）。

### HelpContextID

标识应用程序帮助文件中主题的**Long**，当用户在窗体获得焦点时按**F1**时检索。

### hWnd

窗体的 Win32 窗口句柄，为**LongPtr**。只读。适用于传递给 API 函数。

### Icon

标题栏、任务栏和 Alt-Tab 中显示的图标。**vbPicTypeIcon**类型的**StdPicture**。赋值非图标图片会将图标清除为默认 Windows 应用程序图标。

### Image

以**StdPicture**形式返回渲染的绘图表面。只读。当[**AutoRedraw**](#autoredraw)为**True**时最有用——返回的图片是持久的离屏缓冲区。

### KeyPreview

当**True**时，窗体的[**KeyDown**](#keydown)、[**KeyUp**](#keyup)和[**KeyPress**](#keypress)事件在焦点控件接收相同击键*之前*触发。**Boolean**，默认**False**。适用于应用程序级热键；事件之后仍在焦点控件上触发。

### Left

窗体外部矩形的水平位置，以缇为单位（或调用代码的**ScaleMode**单位），从屏幕左边缘测量——或对于 MDI 子窗体，从 MDI 父窗体客户区的左边缘测量。**Double**。

### LinkMode

::: info
保留用于 VB6 DDE 功能兼容性；twinBASIC 中当前未实现。
:::

### LinkTopic

::: info
保留用于 VB6 DDE 功能兼容性；twinBASIC 中当前未实现。
:::

### MaxButton

标题栏是否显示最大化按钮。**Boolean**，默认**True**，运行时只读。在设计时设置。

### MaxHeight

窗体*客户区*的最大高度，以缇为单位。**Double**，默认`0`（无限制）。在交互式调整大小时生效。

### MaxWidth

窗体*客户区*的最大宽度，以缇为单位。**Double**，默认`0`（无限制）。在交互式调整大小时生效。

### MDIChild

当**True**时，窗体作为子窗体承载在[**MDIForm**](/official/Reference/VB/MDIForm/)中。**Boolean**，只读——在设计时设置。MDI 子窗体不能以模态方式显示。

### MinButton

标题栏是否显示最小化按钮。**Boolean**，默认**True**，运行时只读。在设计时设置。

### MinHeight

窗体*客户区*的最小高度，以缇为单位。**Double**，默认`0`（无限制）。在交互式调整大小时生效。

### MinWidth

窗体*客户区*的最小宽度，以缇为单位。**Double**，默认`0`（无限制）。在交互式调整大小时生效。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于窗体上方（且不在有自身设置的子控件上）时用作鼠标光标的**StdPicture**。

### MousePointer

当指针位于窗体上方（且不在有自身设置的子控件上）时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Moveable

用户是否可以通过标题栏拖动窗体。**Boolean**，默认**True**。

### Name

窗体的唯一设计时名称。运行时只读。也是生成的窗体类的类名。

### NegotiateMenus

::: info
保留用于 VB6 ActiveX 文档菜单协商功能兼容性；twinBASIC 中当前未实现。
:::

### OLEDropMode

窗体如何响应 OLE 放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone**或**vbOLEDropManual**。Form 不支持自动放置模式。

### Opacity

窗体的不透明度百分比（0--100，默认 100）。超出范围的值在**Initialize**时被钳制。低于 100 的值会使窗体成为分层窗口。

### Palette

::: info
保留用于 VB6 256 色调色板功能兼容性；twinBASIC 中当前未实现。
:::

### PaletteMode

::: info
保留用于 VB6 256 色调色板功能兼容性；twinBASIC 中当前未实现。
:::

### Picture

作为窗体背景绘制的**StdPicture**。在任何绘图原语或子控件之前绘制。赋值**Nothing**移除背景。

### PictureDpiScaling

当**True**时，[**Picture**](#picture)在绘制前按当前 DPI 因子缩放。**Boolean**，默认**False**。

### RightToLeft

::: info
保留用于 VB6 兼容性；twinBASIC 中当前未实现。
:::

### ScaleHeight

逻辑绘图矩形的高度，以[**ScaleMode**](#scalemode)单位表示。**Double**。设置它（或[**ScaleWidth**](#scalewidth)、[**ScaleLeft**](#scaleleft)或[**ScaleTop**](#scaletop)）会隐式将**ScaleMode**切换为**vbUser**。

### ScaleLeft

窗体客户区左边缘的逻辑水平坐标，以[**ScaleMode**](#scalemode)单位表示。**Double**。默认`0`。

### ScaleMode

由[**CurrentX**](#currentx)、[**CurrentY**](#currenty)、绘图原语、[**TextWidth**](#textwidth)和[**TextHeight**](#textheight)使用的度量单位。[**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)的成员：**vbTwips**（默认）、**vbPoints**、**vbPixels**、**vbCharacters**、**vbInches**、**vbMillimeters**、**vbCentimeters**或**vbUser**（四个**Scale\***属性定义矩形）。

### ScaleTop

窗体客户区顶边缘的逻辑垂直坐标，以[**ScaleMode**](#scalemode)单位表示。**Double**。默认`0`。

### ScaleWidth

逻辑绘图矩形的宽度，以[**ScaleMode**](#scalemode)单位表示。**Double**。设置它会隐式将**ScaleMode**切换为**vbUser**。

### ShowInTaskbar

窗体是否出现在 Windows 任务栏和 Alt-Tab 列表中。**Boolean**，默认**True**。运行时只读——在设计时设置。

### StartUpPosition

窗体首次显示时如何确定初始位置。[**StartUpPositionConstants**](/official/Reference/VBRUN/Constants/StartUpPositionConstants)的成员：**vbStartUpManual**、**vbStartUpOwner**、**vbStartUpScreen**或**vbStartUpWindowsDefault**（默认）。运行时只读——在设计时设置。

### TabFocusAutoSelect

当**True**时，此窗体上自身**TabFocusAutoSelect**也为**True**的[**TextBox**](/official/Reference/VB/TextBox/)在通过**TAB**键进入焦点时自动选中其内容。**Boolean**，默认**False**。

### Tag

应用程序可用于将自定义数据与窗体关联的自由格式**String**。框架不使用此属性。

### Top

窗体外部矩形的垂直位置，以缇为单位（或调用代码的**ScaleMode**单位），从屏幕顶边缘测量——或对于 MDI 子窗体，从 MDI 父窗体客户区的顶边缘测量。**Double**。

### TopMost

窗体是否位于置顶层 z 顺序层。**Boolean**，运行时只读。在设计时设置。

### TransparencyKey

一个**OLE_COLOR**，设置后在渲染的窗体中变为完全透明——点击穿透到下方内容，相应像素不绘制。默认`-1`禁用效果。

### Visible

窗体是否可见。**Boolean**，默认**True**。在窗体隐藏时将**Visible**设置为**True**等效于调用[**Show**](#show) **vbModeless**；设置为**False**等效于调用[**Hide**](#hide)。

### WhatsThisButton

当**True**时，标题栏显示"?"帮助按钮——但仅当[**MinButton**](#minbutton)为**False**、[**MaxButton**](#maxbutton)为**False**、[**ControlBox**](#controlbox)为**True**且[**BorderStyle**](#borderstyle)不是工具窗口样式时。**Boolean**。

### WhatsThisHelp

当**True**时，[**WhatsThisMode**](#whatsthismode)和标题栏帮助按钮进入 Windows 的"这是什么？"光标模式。**Boolean**，默认**False**。

### Width

窗体的外部宽度，默认以缇为单位（或容器**ScaleMode**单位）。**Double**。设置它会调整窗口大小。运行时受[**MinWidth**](#minwidth)和[**MaxWidth**](#maxwidth)约束（非零时）。

### WindowState

窗口的正常/最小化/最大化状态。[**FormWindowStateConstants**](/official/Reference/VBRUN/Constants/FormWindowStateConstants)的成员：**vbNormal**（0，默认）、**vbMinimized**（1）或**vbMaximized**（2）。在运行时设置会立即更新窗口位置（如果窗体可见）。

## 方法

### Circle

使用[**ForeColor**](#forecolor)绘制轮廓，使用[**FillColor**](#fillcolor)/[**FillStyle**](#fillstyle)填充内部，在窗体上绘制圆、椭圆或弧。

语法：*object*.**Circle** [ **Step** ] ( *X*, *Y* ), *Radius* [, [ *Color* ] [, [ *Start* ] [, [ *End* ] [, *Aspect* ] ] ] ]

*X*, *Y*
: *必需* 圆心，以[**ScaleMode**](#scalemode)单位表示。**Step**使圆心相对于（[**CurrentX**](#currentx)，[**CurrentY**](#currenty)）。

*Radius*
: *必需* 以**ScaleMode**单位给出半径的**Single**。

*Color*
: *可选* 轮廓的**OLE_COLOR**；默认为[**ForeColor**](#forecolor)。

*Start*、*End*
: *可选* 以弧度为单位的角，用于绘制弧而非完整圆。

*Aspect*
: *可选* 垂直与水平半径的比率。`1.0`为圆形；偏离`1.0`的值产生椭圆。

### Cls

清除由[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)、[**PaintPicture**](#paintpicture)和[**Print**](#print)执行的任何绘图，以[**BackColor**](#backcolor)重绘，并将[**CurrentX**](#currentx) / [**CurrentY**](#currenty)重置为`0`。不影响[**Picture**](#picture)背景或子控件。

语法：*object*.**Cls**

### Close

启动窗体的卸载序列——[**QueryUnload**](#queryunload)，然后[**Unload**](#unload)，然后[**Terminate**](#terminate)。前两个事件中的任一都可以通过将*Cancel*设置为非零来取消关闭。等效于语言语句`Unload Me`。

语法：*object*.**Close**

### Hide

隐藏窗体而不卸载它。类实例及其控件被保留；调用[**Show**](#show)（或赋值[**Visible**](#visible) = **True**）可再次显示。等效于赋值**Visible** = **False**。

语法：*object*.**Hide**

### Line

使用[**ForeColor**](#forecolor)（或显式颜色）和[**DrawWidth**](#drawwidth)/[**DrawStyle**](#drawstyle)在窗体上绘制直线或矩形。

语法：*object*.**Line** [ [ **Step** ] ( *X1*, *Y1* ) ] -[ **Step** ] ( *X2*, *Y2* ) [, [ *Color* ] [, **B** [ **F** ] ] ]

*X1*, *Y1*
: *可选* 起点，以[**ScaleMode**](#scalemode)单位表示。**Step**使点相对于（[**CurrentX**](#currentx)，[**CurrentY**](#currenty)）。省略时，从当前画笔位置开始绘制。

*X2*, *Y2*
: *必需* 终点，以**ScaleMode**单位表示。**Step**使点相对于（*X1*，*Y1*）。

*Color*
: *可选* 线条的**OLE_COLOR**；默认为[**ForeColor**](#forecolor)。

**B**
: *可选* 绘制以（*X1*，*Y1*）和（*X2*，*Y2*）为对角的矩形而非线条。

**F**
: *可选* 与**B**组合时，使用[**ForeColor**](#forecolor)而非[**FillColor**](#fillcolor)/[**FillStyle**](#fillstyle)填充矩形。

### Move

在单次调用中重新定位并可选地调整窗体大小。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**。

*Top*、*Width*、*Height*
: *可选* 对应属性的新值。省略的值保持不变。

### OLEDrag

从窗体启动 OLE 拖动操作，触发[**OLEStartDrag**](#olestartdrag)事件以便应用程序填充**DataObject**。

语法：*object*.**OLEDrag**

### PaintPicture

将**StdPicture**绘制到窗体上，支持可选缩放和光栅操作。

语法：*object*.**PaintPicture** *Picture*, *X1*, *Y1* [, *Width1* [, *Height1* [, *X2* [, *Y2* [, *Width2* [, *Height2* [, *Opcode* [, *StretchQuality* ] ] ] ] ] ] ] ]

*Picture*
: *必需* 要绘制的**StdPicture**。

*X1*, *Y1*
: *必需* 目标左上角，以[**ScaleMode**](#scalemode)单位表示。

*Width1*, *Height1*
: *可选* 目标尺寸；默认为图片的自然尺寸。

*X2*, *Y2*, *Width2*, *Height2*
: *可选* 图片内的源矩形；默认为整个图片。

*Opcode*
: *可选* 光栅操作代码（[**RasterOpConstants**](/official/Reference/VBRUN/Constants/RasterOpConstants)的成员）。默认为**vbSrcCopy**。

*StretchQuality*
: *可选* 缩放时的插值方法。默认为正常质量。

### PopUpMenu

将[**Menu**](/official/Reference/VB/Menu/)作为上下文菜单弹出显示在指定位置。

语法：*object*.**PopUpMenu** *Menu* [, *Flags* [, *X* [, *Y* [, *DefaultMenu* ] ] ] ]

*Menu*
: *必需* 要显示的**Menu**控件。菜单必须已存在于窗体上（或其 MDI 父窗体上）。

*Flags*
: *可选* [**MenuControlConstants**](/official/Reference/VBRUN/Constants/MenuControlConstants)的组合，控制对齐方式和哪些鼠标按钮触发菜单项。

*X*, *Y*
: *可选* 锚定菜单的屏幕相对位置，以[**ScaleMode**](#scalemode)单位表示。默认为当前鼠标位置。

*DefaultMenu*
: *可选* 以粗体渲染为默认操作的**Menu**子项。

### Point

::: info
保留用于 VB6 兼容性；twinBASIC 中当前未实现。在 VB6 中此方法返回绘图表面单个像素的**OLE_COLOR**。
:::

语法：*object*.**Point**( *X*, *Y* )

### Print

使用[**Font**](#font)将文本写入窗体的绘图表面，从[**CurrentX**](#currentx) / [**CurrentY**](#currenty)开始并随着输出推进。通过 VB6 **Print**语句分派，因此多个表达式可以用`;`（无间距）或`,`（跳到下一个打印区）分隔。**Spc(n)**插入*n*个空格，**Tab(n)**移到打印列*n*。输出遵循[**Font**](#font)、[**ForeColor**](#forecolor)和[**FontTransparent**](#fonttransparent)，当[**AutoRedraw**](#autoredraw)为**True**时，记录到持久离屏位图中以在失效时存活。

语法：*object*.**Print** \[ *expressionlist* ] \[ **;** \| **,** ]

末尾的`;`或`,`抑制换行，使下一个**Print**调用继续在同一行；没有末尾分隔符时，画笔推进到下一行的开头。

```vb
Me.CurrentX = 10 : Me.CurrentY = 10
Me.Print "Name: "; sName, "Age: "; nAge      ' 两个字段，制表符分隔
Me.Print                                     ' 空行
Me.Print "Total: " & Format$(Total, "0.00")
```

### PrintForm

通过[**Printer**](/official/Reference/VB/Printer/)对象将窗体当前视觉状态的屏幕截图发送到默认打印机。

语法：*object*.**PrintForm** [ *ImplicitEndDoc* [, *OutputAtCurrentPosition* ] ]

*ImplicitEndDoc*
: *可选* 当**True**（默认）时，打印作业在返回前完成；当**False**时，窗体作为页面发送但打印作业保持打开以供进一步输出。

*OutputAtCurrentPosition*
: *可选* 当**True**时，窗体在打印机当前画笔位置渲染而非页面原点。**Boolean**，默认**False**。

### PSet

将窗体上的单个像素设置为指定颜色。

语法：*object*.**PSet** [ **Step** ] ( *X*, *Y* ) [, *Color* ]

*X*, *Y*
: *必需* 像素位置，以[**ScaleMode**](#scalemode)单位表示。**Step**使位置相对于（[**CurrentX**](#currentx)，[**CurrentY**](#currenty)）。

*Color*
: *可选* **OLE_COLOR**；默认为[**ForeColor**](#forecolor)。

### Refresh

强制窗体立即重绘，当[**AutoRedraw**](#autoredraw)为**False**时触发[**Paint**](#paint)。

语法：*object*.**Refresh**

### Scale

通过分配[**ScaleLeft**](#scaleleft)、[**ScaleTop**](#scaletop)、[**ScaleWidth**](#scalewidth)和[**ScaleHeight**](#scaleheight)在单次调用中设置窗体的逻辑绘图矩形。将[**ScaleMode**](#scalemode)切换为**vbUser**。不带参数调用**Scale**将矩形重置为与客户区以像素 1:1 映射。

语法：*object*.**Scale** [ ( *X1*, *Y1* )-( *X2*, *Y2* ) ]

*X1*, *Y1*
: *可选* 左上角的逻辑坐标。

*X2*, *Y2*
: *可选* 右下角的逻辑坐标。

### ScaleX

将水平长度从一个[**ScaleMode**](#scalemode)转换为另一个。

语法：*object*.**ScaleX**( *Width* [, *FromScale* [, *ToScale* ] ] )

*Width*
: *必需* 给出源长度的**Single**。

*FromScale*、*ToScale*
: *可选* [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)的成员。省略时默认为当前**ScaleMode**。

### ScaleY

将垂直长度从一个[**ScaleMode**](#scalemode)转换为另一个。

语法：*object*.**ScaleY**( *Height* [, *FromScale* [, *ToScale* ] ] )

*Height*
: *必需* 给出源长度的**Single**。

*FromScale*、*ToScale*
: *可选* [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)的成员。省略时默认为当前**ScaleMode**。

### SetFocus

激活窗体并将输入焦点赋予[**TabIndex**](/official/Reference/VB/TextBox/#tabindex)为`0`的控件（或此窗体上最后持有焦点的控件）。

语法：*object*.**SetFocus**

### Show

使窗体可见。在首次调用时触发[**Load**](#load)。

语法：*object*.**Show** [ *Modal* [, *OwnerForm* ] ]

*Modal*
: *可选* [**FormShowConstants**](/official/Reference/VBRUN/Constants/FormShowConstants)的成员：**vbModeless**（0，默认——调用立即返回）或**vbModal**（1——调用阻塞直到窗体关闭且用户无法与其他窗体交互）。

*OwnerForm*
: *可选* 对于模态显示，在此窗体打开期间被禁用的窗体；默认为当前活动窗体。

### TextHeight

返回给定字符串使用窗体当前[**Font**](#font)绘制时将占用的宽度，以[**ScaleMode**](#scalemode)单位表示。

语法：*object*.**TextHeight**( *Str* )

*Str*
: *必需* 要测量的**String**。

### TextWidth

返回给定字符串使用窗体当前[**Font**](#font)绘制时将占用的宽度，以[**ScaleMode**](#scalemode)单位表示。

语法：*object*.**TextWidth**( *Str* )

*Str*
: *必需* 要测量的**String**。

### ValidateControls

触发此窗体上当前活动控件的**Validate**事件。如果处理程序将*Cancel*设置为**True**，**ValidateControls**引发运行时错误 380（*Invalid property value*）；调用者可以用`On Error`包裹以检测失败的验证。适用于在保存或关闭之前检查待处理的输入。

语法：*object*.**ValidateControls**

### WhatsThisMode

进入 Windows 的"这是什么？"光标模式——下次点击控件会触发该控件的帮助而非激活它。[**WhatsThisHelp**](#whatsthishelp)必须为**True**。

语法：*object*.**WhatsThisMode**

### ZOrder

将窗体置于顶级 z 顺序的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront**（0，默认）或**vbSendToBack**（1）。

## 事件

### Activate

当窗体成为应用程序中的活动窗口时触发——无论是[**Load**](#load)后首次显示，还是从另一个窗口重新获得激活时。

语法：*object*\_**Activate**( )

### Click

当用户单击窗体客户区（即不在任何子控件上）时触发。

语法：*object*\_**Click**( )

### DblClick

当用户双击窗体客户区时触发。

语法：*object*\_**DblClick**( )

### Deactivate

当应用程序中的另一个窗口从此窗体夺取激活时触发。当激活移到不同应用程序的窗口时不触发。

语法：*object*\_**Deactivate**( )

### DPIChange

当窗体移动到具有不同 DPI 缩放的显示器时触发，*但仅当*应用程序是每显示器 DPI 感知的（`PROCESS_PER_MONITOR_DPI_AWARE`）。事件的*NewDPI*参数给出新的有效 DPI；子控件自动重新缩放。twinBASIC 新增。

语法：*object*\_**DPIChange**( *NewDPI* **As Long** )

### DragDrop

当手动拖动操作在目标控件上结束时在该控件上触发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

当手动拖动操作进行中时在光标下方的控件上触发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### GotFocus

当窗体获得输入焦点且没有启用的子控件可以代替它获得焦点时触发。没有可聚焦子控件的窗体直接获得焦点。

语法：*object*\_**GotFocus**( )

### Initialize

触发一次，在底层窗口创建之前和窗体的任何子控件存在之前。适用于设置窗体级字段的初始值。不能从此事件引用窗体的控件。

语法：*object*\_**Initialize**( )

### KeyDown

当用户按下任何键时触发。默认在焦点控件上触发；当[**KeyPreview**](#keypreview)为**True**时，先在窗体上触发。

语法：*object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

当用户键入产生 ANSI 击键的字符时触发。默认在焦点控件上触发；当[**KeyPreview**](#keypreview)为**True**时，先在窗体上触发。

语法：*object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

当用户释放键时触发。默认在焦点控件上触发；当[**KeyPreview**](#keypreview)为**True**时，先在窗体上触发。

语法：*object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LinkClose

::: info
保留用于 VB6 DDE 功能兼容性；twinBASIC 中当前不触发。
:::

### LinkError

::: info
保留用于 VB6 DDE 功能兼容性；twinBASIC 中当前不触发。
:::

### LinkExecute

::: info
保留用于 VB6 DDE 功能兼容性；twinBASIC 中当前不触发。
:::

### LinkOpen

::: info
保留用于 VB6 DDE 功能兼容性；twinBASIC 中当前不触发。
:::

### Load

在窗体的窗口和所有控件创建之后，窗体首次显示在屏幕之前触发。经典的初始化位置——填充控件、附加数据源以及执行需要控件存在的任何初始化。**默认事件。**

语法：*object*\_**Load**( )

### LostFocus

当窗体失去输入焦点时触发。

语法：*object*\_**LostFocus**( )

### MouseDown

当用户在窗体客户区上方按下任何鼠标按钮时触发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

当光标在窗体客户区上方移动时触发。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

当用户在窗体客户区上方释放鼠标按钮时触发。

语法：*object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseWheel

当鼠标滚轮在窗体上方转动时触发。twinBASIC 新增。

语法：*object*\_**MouseWheel**( *Delta* **As Integer**, *Horizontal* **As Boolean** )

### OLECompleteDrag

当 OLE 拖动操作完成时在源控件上触发，指示目标接受了哪种效果（复制、移动、无）。

语法：*object*\_**OLECompleteDrag**( *Effect* **As Long** )

### OLEDragDrop

当用户将数据放置在目标控件上时触发。

语法：*object*\_**OLEDragDrop**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### OLEDragOver

当 OLE 拖动经过目标控件时在该控件上触发。

语法：*object*\_**OLEDragOver**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### OLEGiveFeedback

在拖动期间在源控件上触发，以便应用程序可以调整光标或其他视觉反馈。

语法：*object*\_**OLEGiveFeedback**( *Effect* **As Long**, *DefaultCursors* **As Boolean** )

### OLESetData

当目标请求已注册但尚未提供的数据格式的数据时在源控件上触发。

语法：*object*\_**OLESetData**( *Data* **As DataObject**, *DataFormat* **As Integer** )

### OLEStartDrag

在 OLE 拖动开始时在源控件上触发，以便应用程序可以填充**DataObject**并选择允许的效果。

语法：*object*\_**OLEStartDrag**( *Data* **As DataObject**, *AllowedEffects* **As Long** )

### Paint

当窗体的失效部分需要重绘时触发。当[**AutoRedraw**](#autoredraw)为**True**时被抑制——窗体的持久离屏缓冲区被位块传送到屏幕。

语法：*object*\_**Paint**( )

### QueryUnload

在窗体卸载之前触发，给应用程序确认或取消关闭的机会。将*Cancel*设置为非零可保持窗体打开。始终在[**Unload**](#unload)之前触发。

语法：*object*\_**QueryUnload**( *Cancel* **As Integer**, *UnloadMode* **As Integer** )

*Cancel*
: 设置为非零（任何非零值，约定为**1**）以取消关闭。

*UnloadMode*
: [**QueryUnloadConstants**](/official/Reference/VBRUN/Constants/QueryUnloadConstants)的成员，标识触发关闭的原因——关闭按钮、代码、Windows 关机、MDI 父窗体或所有者窗体。

### Resize

当窗体调整大小时触发——由用户、代码、操作系统在[**WindowState**](#windowstate)更改后或首次显示期间的初始布局触发。

语法：*object*\_**Resize**( )

### Terminate

在窗体的窗口已销毁且类实例即将释放后触发。此时控件不再可访问。

语法：*object*\_**Terminate**( )

### Unload

在[**QueryUnload**](#queryunload)通过之后和窗体窗口销毁之前触发。将*Cancel*设置为非零可保持窗体打开并阻止卸载。

语法：*object*\_**Unload**( *Cancel* **As Integer** )

*Cancel*
: 设置为非零（任何非零值，约定为**1**）以取消卸载。