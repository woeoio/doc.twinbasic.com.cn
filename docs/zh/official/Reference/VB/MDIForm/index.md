---
title: "MDIForm MDI窗体"
parent: VB Package
permalink: /tB/Packages/VB/MDIForm/
---

# MDIForm 类

**MDIForm**是一个顶级Win32窗口，承载一个*MDI客户区*——一个凹陷的工作表面，其中出现一个或多个标记为MDI子窗体的[**Form**](/official/Reference/VB/Form/)实例，每个都在父窗口内有自己的标题栏。twinBASIC项目最多可包含一个MDI窗体。与普通[**Form**](/official/Reference/VB/Form/)不同，MDIForm没有绘图表面、没有字体属性、没有图形原语——它纯粹是其子窗体的框架，加上菜单、工具栏和（可选）绘制在子窗体后面的单个背景[**Picture**](#picture)的宿主。

默认属性是[**Controls**](#controls)，默认事件是[**Load**](#load)。

```vb
' 在MDIForm1的代码隐藏中：
Private Sub MDIForm_Load()
    Caption = "Editor"
    AutoShowChildren = True
End Sub

Private Sub mnuWindowCascade_Click()
    Arrange vbCascade
End Sub

' 在标记MDIChild = True的子窗体（Form1）中：
Private Sub Form_Load()
    Caption = "Untitled"
End Sub

' 在启动模块中：
Sub Main()
    MDIForm1.Show
    Form1.Show                      ' 在MDIForm1的客户区内打开
End Sub
```


## 生命周期

MDIForm从创建到销毁经历与普通[**Form**](/official/Reference/VB/Form/)相同的六个事件：

| 事件                            | 时机                                                                                |
|----------------------------------|-------------------------------------------------------------------------------------|
| [**Initialize**](#initialize)    | 底层窗口存在之前。窗体的子窗体和控件尚不存在。                                      |
| [**Load**](#load)                | 窗口创建且子控件（工具栏带、状态栏、菜单）实例化后，窗体首次显示之前。              |
| [**Activate**](#activate)        | MDI父窗体或其某个子窗体变为活动窗口时。                                             |
| [**Deactivate**](#deactivate)    | 激活移动到MDI组外的另一个窗口时。                                                   |
| [**QueryUnload**](#queryunload)  | 卸载之前。将*Cancel*设置为非零值保持窗体打开。关闭MDI父窗体时首先在每个打开的MDI子窗体上运行**QueryUnload**，然后在父窗体自身上运行。 |
| [**Unload**](#unload)            | **QueryUnload**批准后。将*Cancel*设置为非零值保持窗体打开。                         |
| [**Terminate**](#terminate)      | 窗口销毁且类实例释放后。                                                            |

## MDI子窗体

MDI子窗体是任何**MDIChild**属性为**True**（在设计时设置）的[**Form**](/official/Reference/VB/Form/)。显示或取消隐藏此类窗体会将其父级设为MDI客户区：其[**Left**](/official/Reference/VB/Form/#left)和[**Top**](/official/Reference/VB/Form/#top)变为相对于客户区左上角，其标题栏绘制在父窗口内部而非桌面上，最大化时其系统菜单和最小化/最大化按钮合并到父窗口的标题栏中。

[**ActiveForm**](#activeform)返回当前获得焦点的子窗体，无子窗体打开时返回**Nothing**。MDI父窗体上的[**Activate**](#activate)和[**Deactivate**](#deactivate)仅在激活跨过MDI组的外部边界时引发；激活在组*内部*移动时在受影响的子窗体上引发**Activate** / **Deactivate**。

[**AutoShowChildren**](#autoshowchildren)决定MDI子窗体类被加载但未显式显示时发生什么——当为**True**（默认）时，子窗体自动变为可见；当为**False**时，子窗体保持隐藏直到代码对其调用**Show**。

[**Arrange**](#arrange)在单次调用中布局打开的子窗体：层叠、水平平铺、垂直平铺或沿底部边缘排列最小化子窗体的图标。

```vb
mnuWindowCascade.Click       => Me.Arrange vbCascade
mnuWindowTileH.Click         => Me.Arrange vbTileHorizontal
mnuWindowTileV.Click         => Me.Arrange vbTileVertical
mnuWindowArrangeIcons.Click  => Me.Arrange vbArrangeIcons
```

## 窗口外观

MDIForm始终使用可调整大小的边框样式——没有[**BorderStyle**](/official/Reference/VB/Form/#borderstyle)属性，标题栏始终存在，系统菜单和最小化/最大化按钮始终显示，窗体始终出现在任务栏中。[**Caption**](#caption)设置标题栏文本。[**Icon**](#icon)提供系统菜单、任务栏和Alt-Tab使用的小/大图标。[**WindowState**](#windowstate)（[**FormWindowStateConstants**](/official/Reference/VBRUN/Constants/FormWindowStateConstants)）在运行时读取或设置正常/最小化/最大化状态。

[**MinWidth**](#minwidth)、[**MinHeight**](#minheight)、[**MaxWidth**](#maxwidth)和[**MaxHeight**](#maxheight)在交互式调整大小期间以缇为单位约束*客户区*。[**Moveable**](#moveable)决定用户是否可以通过标题栏拖动窗体。

[**Opacity**](#opacity)和[**TransparencyKey**](#transparencykey)启用Windows的分层窗口功能，用于半透明窗体和裁剪形状。

[**BackColor**](#backcolor)绘制MDI客户区的背景——默认为系统**vbApplicationWorkspace**颜色而非3D面色。[**Picture**](#picture)设置后绘制在**BackColor**之上作为客户区背景，元文件缩放以填充区域，位图以其自然大小居中。[**PictureDpiScaling**](#picturedpiscaling)在绘制前按当前DPI因子缩放位图。MDIForm上没有屏幕绘图API——在MDIForm上调用**Form**接口的[**Cls**](/official/Reference/VB/Form/#cls)、[**Circle**](/official/Reference/VB/Form/#circle)、[**Line**](/official/Reference/VB/Form/#line)、[**PSet**](/official/Reference/VB/Form/#pset)、[**PaintPicture**](/official/Reference/VB/Form/#paintpicture)和**Print**成员会引发运行时错误438（*Object doesn't support this property or method*）。

当MDI子窗体被移动或调整大小使其矩形超出可见客户区时，垂直和水平滚动条自动出现；这通过MDI父窗体的**ScrollBars**属性在设计时固定，运行时不公开。

## 菜单和弹出菜单

在窗体设计时设计的菜单结构自动出现在MDIForm的标题栏中。当MDI子窗体最大化时，子窗体自己的菜单（如果有）合并到父窗体的菜单栏中，在子窗体保持最大化期间替换父菜单。经典的VB6*窗口列表*功能——列出每个打开的MDI子窗体以便快速切换的菜单子树——在MDIForm上的[**Menu**](/official/Reference/VB/Menu/)设置了**WindowList**属性时自动支持。

[**PopUpMenu**](#popupmenu)在指定位置将窗体的某个菜单显示为上下文菜单弹出窗口，当用户选择项目时引发菜单的**Click**事件。

```vb
Private Sub MDIForm_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
    If Button = vbRightButton Then PopUpMenu mnuContext
End Sub
```

## 与Form的区别

由于MDIForm是框架而非绘图表面，**Form**接口的以下成员在其上*不受支持*——访问它们会引发运行时错误380（属性）或438（方法）：

| 类别                         | 成员                                                                              |
|------------------------------|--------------------------------------------------------------------------------------|
| 绘图                         | **AutoRedraw**、**ClipControls**、**HasDC**、**hDC**、**Image**、**CurrentX**、**CurrentY**、**DrawMode**、**DrawStyle**、**DrawWidth**、**FillColor**、**FillStyle**、**ForeColor**、**FontTransparent**、**Cls**、**Circle**、**Line**、**PSet**、**PaintPicture** |
| 字体                         | **Font**、**FontName**、**FontSize**、**FontBold**、**FontItalic**、**FontStrikethru**、**FontUnderline**、**TextWidth** |
| 几何                         | **ScaleLeft**、**ScaleTop**、**ScaleMode**、**Scale**、**ScaleX**、**ScaleY**（[**ScaleWidth**](#scalewidth)和[**ScaleHeight**](#scaleheight)受支持但只读） |
| 窗口装饰                     | **BorderStyle**、**ControlBox**、**MaxButton**、**MinButton**、**ShowInTaskbar**、**WhatsThisButton** |
| 其他                         | **KeyPreview**（且[**Form**](/official/Reference/VB/Form/)的**KeyDown** / **KeyUp** / **KeyPress**事件在**MDIForm**上不存在）、**MDIChild**、**NegotiateMenus**、**Palette**、**PaletteMode**、**PrintForm**、**Point**、**Refresh**（在MDIForm上引发438，尽管在普通Form上正常工作） |
| 行为特殊                     | **TextHeight**返回`0`而非引发错误。（保留VB6错误以兼容。）                              |

## 属性

### ActiveControl

活动MDI子窗体上当前拥有输入焦点的控件，类型为**Control**对象，无子窗体获得焦点时为**Nothing**。只读。

### ActiveForm

当前活动的MDI子窗体，类型为**Object**，无子窗体打开时为**Nothing**。只读。每次激活在子窗体之间移动时更新，就在子窗体上相应的[**Activate**](#activate)和[**Deactivate**](#deactivate)事件引发之前。

### AlwaysShowKeyboardCues

当为**True**时，窗体始终在[**Caption**](#caption)和菜单项的访问键字符上显示下划线，而非仅在用户按**Alt**后显示。**Boolean**，运行时只读。在设计时设置。

### Appearance

[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。

::: info
保留用于VB6兼容；此属性在MDI窗体上无可观察效果。
:::

### AutoShowChildren

当为**True**（默认）时，加载MDI子窗体类也会显示它；当为**False**时，子窗体类可加载到内存中而不变为可见，直到代码对其调用**Show**。**Boolean**。

### BackColor

MDI客户区中绘制的颜色，类型为**OLE_COLOR**。默认为系统**vbApplicationWorkspace**颜色。用作[**Picture**](#picture)和每个MDI子窗体标题栏及外边框后面的画布。

### Caption

标题栏文本。**String**。

语法：*object*.**Caption** [ = *string* ]

当MDI子窗体最大化时，Windows用方括号中的子窗体标题装饰**Caption**——`Editor - [Untitled]`——应用程序通常通过不修改**Caption**来让装饰保持自动。

### Controls

此窗体承载的每个控件的集合，可按控件名称或从零开始的位置索引。**默认属性。**只读——控件由运行时添加到集合中，而非用户代码。集合包含窗体的菜单、工具栏、状态栏和任何对齐控件；MDI子窗体*不是*此集合的成员（它们是托管在MDI客户区中的独立顶级窗体，可通过[**ActiveForm**](#activeform)和运行时的**Forms**集合访问）。

### ControlType

只读的[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值，将此控件标识为窗体。始终为**vbForm**。

### Count

[**Controls**](#controls)中的控件数，类型为**Long**。只读。等同于`Me.Controls.Count`。

### DpiScaleFactorX

窗体当前所在显示器的水平DPI缩放因子，类型为**Double**。96 DPI时为`1.0`，120 DPI时为`1.25`，144 DPI时为`1.5`，以此类推。只读。

### DpiScaleFactorY

窗体当前所在显示器的垂直DPI缩放因子。当前始终等于[**DpiScaleFactorX**](#dpiscalefactorx)。只读。

### Enabled

确定窗体是否接受用户输入。禁用的MDI父窗体忽略键盘和鼠标输入，标题栏变暗，并禁用每个打开的MDI子窗体。**Boolean**，默认**True**。

### Height

窗体的外部高度，以缇为单位（或使用调用代码的**ScaleMode**单位）。**Double**。运行时受[**MinHeight**](#minheight)和[**MaxHeight**](#maxheight)约束（当它们非零时）。

### HelpContextID

标识应用程序帮助文件中主题的**Long**值，当用户在窗体具有焦点时按**F1**时检索。

### hWnd

MDI父框架的Win32窗口句柄，类型为**LongPtr**。只读。可用于传递给API函数。MDI客户区是一个单独的子窗口，有自己的句柄，只能通过Win32调用访问。

### Icon

标题栏、任务栏和Alt-Tab中显示的图标。**vbPicTypeIcon**类型的**StdPicture**。赋值非图标图片会使图标保持不变。

### Left

窗体外部矩形的水平位置，以缇为单位（或使用调用代码的**ScaleMode**单位），从屏幕左边缘测量。**Double**。

### LinkMode

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中未实现。
:::

### LinkTopic

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中未实现。
:::

### MaxHeight

窗体*客户区*的最大高度，以缇为单位。**Double**，默认`0`（无限制）。在交互式调整大小时遵守。

### MaxWidth

窗体*客户区*的最大宽度，以缇为单位。**Double**，默认`0`（无限制）。在交互式调整大小时遵守。

### MinHeight

窗体*客户区*的最小高度，以缇为单位。**Double**，默认`0`（无限制）。在交互式调整大小时遵守。

### MinWidth

窗体*客户区*的最小宽度，以缇为单位。**Double**，默认`0`（无限制）。在交互式调整大小时遵守。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于窗体框架或客户区（而非子窗体自身表面）上时用作鼠标光标的**StdPicture**。

### MousePointer

指针位于窗体框架或客户区上时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Moveable

用户是否可以通过标题栏拖动窗体。**Boolean**，默认**True**。

### Name

窗体的唯一设计时名称。运行时只读。也是生成的窗体类的类名。

### NegotiateToolbars

::: info
保留用于与VB6的ActiveX文档菜单协商功能兼容；目前在twinBASIC中未实现。
:::

### OLEDropMode

窗体如何响应其框架和客户区上的OLE放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone**或**vbOLEDropManual**。MDIForm不支持自动放置模式。

### Opacity

窗体的不透明度百分比（0--100，默认100）。超出范围的值在**Initialize**时被钳制。低于100的值会使窗体变为分层窗口；打开的MDI子窗体随父窗体一起变为半透明。

### Picture

作为MDI客户区背景绘制的**StdPicture**。绘制在[**BackColor**](#backcolor)之上，每个MDI子窗体之后。位图从左上角以其自然大小绘制；元文件拉伸以填充整个客户区。赋值**Nothing**移除背景。

### PictureDpiScaling

当为**True**时，[**Picture**](#picture)在绘制前按当前DPI因子缩放。**Boolean**，默认**False**。对元文件图片无效（它们始终拉伸）。

### RightToLeft

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。
:::

### ScaleHeight

MDI*客户区*的高度（承载子窗体的凹陷区域），以缇为单位。**Double**，只读——赋值会引发运行时错误383（*'ScaleHeight' property is read-only*）。

### ScaleWidth

MDI*客户区*的宽度，以缇为单位。**Double**，只读——赋值会引发运行时错误383。

### StartUpPosition

窗体首次显示时其初始位置的确定方式。[**StartUpPositionConstants**](/official/Reference/VBRUN/Constants/StartUpPositionConstants)的成员：**vbStartUpManual**、**vbStartUpOwner**、**vbStartUpScreen**或**vbStartUpWindowsDefault**（默认）。运行时只读——在设计时设置。

### TabFocusAutoSelect

当为**True**时，此窗体（或其任何MDI子窗体）上自身**TabFocusAutoSelect**也为**True**的[**TextBox**](/official/Reference/VB/TextBox/)在焦点通过**TAB**键进入时自动选择其内容。**Boolean**，默认**False**。

### Tag

应用程序可用于将自定义数据与窗体关联的自由格式**String**。框架忽略此属性。

### Top

窗体外部矩形的垂直位置，以缇为单位（或使用调用代码的**ScaleMode**单位），从屏幕上边缘测量。**Double**。

### TopMost

窗体是否位于始终置顶的Z顺序层。**Boolean**，运行时只读。在设计时设置。

### TransparencyKey

一个**OLE_COLOR**值，设置后在渲染的窗体中变为完全透明——点击穿透到下方的内容，对应像素不绘制。默认`-1`禁用此效果。

### Visible

窗体是否显示。**Boolean**，默认**True**。当窗体隐藏时设置**Visible**为**True**等同于调用[**Show**](#show) **vbModeless**；设置为**False**等同于调用[**Hide**](#hide)。MDI子窗体无论可见性如何都绑定到父窗体——隐藏父窗体也会隐藏所有子窗体。

### WhatsThisHelp

当为**True**时，[**WhatsThisMode**](#whatsthismode)进入Windows的"这是什么？"光标模式。**Boolean**，默认**False**。标题栏帮助按钮功能在MDIForm上不可用。

### Width

窗体的外部宽度，以缇为单位（或使用调用代码的**ScaleMode**单位）。**Double**。运行时受[**MinWidth**](#minwidth)和[**MaxWidth**](#maxwidth)约束（当它们非零时）。

### WindowState

窗口的正常/最小化/最大化状态。[**FormWindowStateConstants**](/official/Reference/VBRUN/Constants/FormWindowStateConstants)的成员：**vbNormal** (0，默认)、**vbMinimized** (1)或**vbMaximized** (2)。在运行时设置时，如果窗体可见则立即更新窗口位置。

## 方法

### Arrange

在单次调用中布局打开的MDI子窗体。

语法：*object*.**Arrange** *Arrangement*

*Arrangement*
: *必需* [**FormArrangeConstants**](/official/Reference/VBRUN/Constants/FormArrangeConstants)的成员：**vbCascade** (0)、**vbTileHorizontal** (1)、**vbTileVertical** (2)或**vbArrangeIcons** (3——沿客户区底部排列最小化子窗体的图标)。其他值引发运行时错误5（*Invalid procedure call or argument*）。

### Close

启动窗体的卸载序列——[**QueryUnload**](#queryunload)，然后[**Unload**](#unload)，然后[**Terminate**](#terminate)——在之前对每个打开的MDI子窗体执行相同序列。父窗体或任何子窗体上前两个事件中的任何一个都可以通过将*Cancel*设置为非零值来取消关闭。等同于语言语句`Unload Me`。

语法：*object*.**Close**

### Hide

隐藏窗体而不卸载。类实例、其子窗体和控件被保留；调用[**Show**](#show)（或赋值[**Visible**](#visible) = **True**）将其带回。等同于赋值**Visible** = **False**。

语法：*object*.**Hide**

### Move

在单次调用中重新定位并可选地调整窗体大小。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**值。

*Top*、*Width*、*Height*
: *可选* 对应属性的新值。省略的值保持不变。

### OLEDrag

从窗体发起OLE拖动操作，引发[**OLEStartDrag**](#olestartdrag)事件以便应用程序填充**DataObject**。

语法：*object*.**OLEDrag**

### PopUpMenu

在指定位置将[**Menu**](/official/Reference/VB/Menu/)显示为上下文菜单弹出窗口。

语法：*object*.**PopUpMenu** *Menu* [, *Flags* [, *X* [, *Y* [, *DefaultMenu* ] ] ] ]

*Menu*
: *必需* 要显示的**Menu**控件。菜单必须已存在于窗体上。

*Flags*
: *可选* [**MenuControlConstants**](/official/Reference/VBRUN/Constants/MenuControlConstants)的组合，控制对齐和哪些鼠标按钮触发菜单项。

*X*, *Y*
: *可选* 锚定菜单的屏幕相对位置，以缇为单位。默认为当前鼠标位置。

*DefaultMenu*
: *可选* 以粗体渲染为默认操作的**Menu**子项。

### SetFocus

激活窗体。如果MDI子窗体打开，焦点移到该子窗体上最后持有焦点的控件；否则焦点移到父窗体的框架。

语法：*object*.**SetFocus**

### Show

使窗体可见。首次调用时触发[**Load**](#load)。

语法：*object*.**Show** [ *Modal* [, *OwnerForm* ] ]

*Modal*
: *可选* [**FormShowConstants**](/official/Reference/VBRUN/Constants/FormShowConstants)的成员：**vbModeless** (0，默认——调用立即返回)或**vbModal** (1)。MDI父窗体通常以无模式方式显示；模态显示被接受但不常见。

*OwnerForm*
: *可选* 对于模态显示，此窗体打开时被禁用的窗体；默认为当前活动窗体。

### ValidateControls

在活动MDI子窗体上引发当前活动控件的**Validate**事件。如果处理程序将*Cancel*设置为**True**，**ValidateControls**会引发运行时错误380（*Invalid property value*）；调用者可以用`On Error`包装以检测验证失败。

语法：*object*.**ValidateControls**

### WhatsThisMode

进入Windows的"这是什么？"光标模式——下一次点击控件会引发该控件的帮助而非激活它。[**WhatsThisHelp**](#whatsthishelp)必须为**True**。

语法：*object*.**WhatsThisMode**

### ZOrder

将窗体置于顶级Z顺序的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront** (0，默认)或**vbSendToBack** (1)。

## 事件

### Activate

当MDI父窗体或其任何子窗体成为应用程序中的活动窗口时引发——通常在首次显示后[**Load**](#load)之后，以及每当激活从另一个窗口返回到MDI组时。

语法：*object*\_**Activate**( )

### Click

用户单击MDI父窗体的框架区域（即标题栏点击测试区域或直接在客户区背景上，没有MDI子窗体覆盖的位置）时引发。

语法：*object*\_**Click**( )

### DblClick

用户双击MDI父窗体的框架区域时引发。

语法：*object*\_**DblClick**( )

### Deactivate

当MDI父窗体的激活移动到MDI组外的另一个窗口时引发。激活在父窗体与其自身子窗体之间移动不会在父窗体上引发**Deactivate**。

语法：*object*\_**Deactivate**( )

### DPIChange

当窗体移动到具有不同DPI比例的显示器时引发，*但仅当*应用程序是每显示器DPI感知的（`PROCESS_PER_MONITOR_DPI_AWARE`）。事件的*NewDPI*参数给出新的有效DPI；子控件和MDI子窗体自动重新缩放。twinBASIC新增。

语法：*object*\_**DPIChange**( *NewDPI* **As Long** )

### DragDrop

手动拖动操作在目标控件上结束时在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

手动拖动操作进行中时在光标下方的控件上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### Initialize

在底层窗口创建之前且窗体的任何子控件（或MDI子窗体）存在之前引发一次。用于设置窗体级字段的初始值。不能从此事件引用窗体的控件。

语法：*object*\_**Initialize**( )

### LinkClose

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中不会引发。
:::

### LinkError

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中不会引发。
:::

### LinkExecute

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中不会引发。
:::

### LinkOpen

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中不会引发。
:::

### Load

在MDI父窗体的窗口和所有对齐子控件（工具栏、状态栏、菜单）创建后，窗体首次出现在屏幕上之前引发。动态填充菜单和执行需要控件存在的任何初始化的经典位置。**默认事件。**

语法：*object*\_**Load**( )

### MouseDown

用户在MDI父窗体的客户区（即非MDI子窗体上方）按下任意鼠标按钮时引发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

光标在MDI父窗体的客户区上移动时引发。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

用户在MDI父窗体的客户区上释放鼠标按钮时引发。

语法：*object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseWheel

鼠标滚轮在MDI父窗体的客户区上滚动时引发。twinBASIC新增。

语法：*object*\_**MouseWheel**( *Delta* **As Integer**, *Horizontal* **As Boolean** )

### OLECompleteDrag

OLE拖动操作完成时在源控件上引发，指示目标接受了哪种效果（复制、移动、无）。

语法：*object*\_**OLECompleteDrag**( *Effect* **As Long** )

### OLEDragDrop

用户将数据放置到目标控件上时在目标控件上引发。

语法：*object*\_**OLEDragDrop**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### OLEDragOver

OLE拖动经过目标控件时在目标控件上引发。

语法：*object*\_**OLEDragOver**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### OLEGiveFeedback

拖动期间在源控件上引发，以便应用程序调整光标或其他视觉反馈。

语法：*object*\_**OLEGiveFeedback**( *Effect* **As Long**, *DefaultCursors* **As Boolean** )

### OLESetData

当目标请求已注册但尚未提供的数据格式时在源控件上引发。

语法：*object*\_**OLESetData**( *Data* **As DataObject**, *DataFormat* **As Integer** )

### OLEStartDrag

OLE拖动开始时在源控件上引发，以便应用程序填充**DataObject**并选择允许的效果。

语法：*object*\_**OLEStartDrag**( *Data* **As DataObject**, *AllowedEffects* **As Long** )

### QueryUnload

在窗体卸载之前引发，给应用程序确认或取消关闭的机会。将*Cancel*设置为非零值保持窗体（及所有打开的MDI子窗体）打开。当MDI父窗体关闭时，**QueryUnload**在每个打开的MDI子窗体上引发*之后*才在父窗体上引发——任何子窗体取消都会停止级联。

语法：*object*\_**QueryUnload**( *Cancel* **As Integer**, *UnloadMode* **As Integer** )

*Cancel*
: 设置为非零值（任何非零值，约定为**1**）以取消关闭。

*UnloadMode*
: [**QueryUnloadConstants**](/official/Reference/VBRUN/Constants/QueryUnloadConstants)的成员，标识触发关闭的原因——关闭按钮、代码、Windows关机或MDI父窗体关闭。

### Resize

当MDI父窗体调整大小时引发——由用户、代码、操作系统在[**WindowState**](#windowstate)更改后或首次显示时的初始布局。事件仅在父窗体上引发；当客户区调整大小级联到MDI子窗体时，子窗体接收自己的**Resize**事件。

语法：*object*\_**Resize**( )

### Terminate

在窗体的窗口销毁且类实例即将释放后引发。此时控件和MDI子窗体不再可访问。

语法：*object*\_**Terminate**( )

### Unload

在[**QueryUnload**](#queryunload)批准后且窗体窗口销毁之前引发。将*Cancel*设置为非零值保持窗体打开并阻止卸载。

语法：*object*\_**Unload**( *Cancel* **As Integer** )

*Cancel*
: 设置为非零值（任何非零值，约定为**1**）以取消卸载。