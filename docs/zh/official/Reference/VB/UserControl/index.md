---
title: UserControl
parent: VB Package
permalink: /tB/Packages/VB/UserControl/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'bb20eca1-499a-4383-85b1-a2ea95763af9'
  PropagateID: 'bb20eca1-499a-4383-85b1-a2ea95763af9'
  ReservedCode1: '689874c2-e7ef-4417-a3d7-aef52e2cd75b'
  ReservedCode2: '689874c2-e7ef-4417-a3d7-aef52e2cd75b'
---

# UserControl 类

**UserControl** 是twinBASIC中设计可重用ActiveX控件的基类。在IDE中设计的每个控件都成为派生自**UserControl**的类——其子控件成为该类的成员，其事件处理程序成为其上的方法，文件名则成为向运行时注册的COM类名。嵌入控件的主机（twinBASIC IDE、经典VB6、Office或其他ActiveX容器）通过标准ActiveX控件接口与之交互，而设计时代码隐藏文件则将其作为常规twinBASIC类进行访问。

**UserControl**在运行时不作为外部窗体的属性直接可见。主机将其包装在**Extender**对象中，该对象添加了标准容器属性（**Top**、**Left**、**Width**、**Height**、**Name**、**Visible**、**TabIndex**等），用户代码通过[**Extender**](#extender)访问扩展器。内部**UserControl**保持一个图形表面、一个私有属性包，以及主机通过其加载和保存控件持久状态的生命周期事件。

默认设计器事件为[**Initialize**](#initialize)——在IDE中双击控件表面会添加`UserControl_Initialize`处理程序。

```vb
' 在 MyMonthView 的代码隐藏文件中：
Private mFirstDay As Date

Private Sub UserControl_InitProperties()
    mFirstDay = Date              ' 主机首次实例化新控件时
End Sub

Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
    mFirstDay = PropBag.ReadProperty("FirstDay", Date)
End Sub

Private Sub UserControl_WriteProperties(PropBag As PropertyBag)
    PropBag.WriteProperty "FirstDay", mFirstDay, Date
End Sub

Public Property Get FirstDay() As Date
    FirstDay = mFirstDay
End Property

Public Property Let FirstDay(ByVal Value As Date)
    mFirstDay = Value
    PropertyChanged "FirstDay"    ' 通知主机设计表面已修改
    UserControl.Refresh
End Property
```


## 生命周期

用户控件实例从创建到销毁最多经历七个不同事件。主机控制此序列：

| 事件                                  | 时机                                                                                                |
|----------------------------------------|-----------------------------------------------------------------------------------------------------|
| [**Initialize**](#initialize)          | 底层窗口创建之前。子控件尚未创建。                            |
| [**InitProperties**](#initproperties)  | 仅一次，用于没有已保存属性包的新实例（在设计表面上的新放置）。       |
| [**ReadProperties**](#readproperties)  | 仅一次，用于从属性包重新加载的实例（首次保存后的每次加载）。               |
| [**Resize**](#resize)                  | 主机首次设置控件大小时，以及随后的每次大小更改。                         |
| [**Show**](#show) / [**Hide**](#hide)  | 主机更改容器的可见性时——通常是在主机的设计视图/运行视图切换时。 |
| [**WriteProperties**](#writeproperties)| 主机要求控件持久化其状态时——设计时保存、主机发起的序列化。 |
| [**Terminate**](#terminate)            | 窗口已销毁且类实例即将被释放之后。                 |

对于每个实例，[**Initialize**](#initialize)之后恰好运行**InitProperties**或**ReadProperties**之一，取决于主机是否有已保存的属性包。[**WriteProperties**](#writeproperties)仅在自上次保存以来至少调用过一次[**PropertyChanged**](#propertychanged)时才会触发，因此从不将自身标记为脏的处理程序永远不会被要求写入。

## 持久属性

公共读/写成员会自动作为设计时属性暴露给主机。持久存储通过传递给[**ReadProperties**](#readproperties)和[**WriteProperties**](#writeproperties)的[**PropertyBag**](/official/Reference/VBRUN/PropertyBag/)对象进行；属性包存储字符串键和一小组变体友好类型。调用[**PropertyChanged**](#propertychanged)（可选地传入属性名）会设置主机的*脏*标志，使主机知道在下次保存时调用[**WriteProperties**](#writeproperties)。

```vb
Public Property Let Caption(ByVal Value As String)
    Label1.Caption = Value
    PropertyChanged "Caption"
End Property
```

## 主机集成

[**Extender**](#extender)返回主机对此控件的包装器——通常是一个暴露**Top**、**Left**、**Width**、**Height**、**Name**、**Visible**、**TabIndex**、**TabStop**、**Container**、**Parent**及任何主机特有附加属性的对象。[**Parent**](#parent)是`Extender.Parent`的简写——最终承载控件的窗体（或工作表、页面）。[**ParentControls**](#parentcontrols)是该父级上每个同级控件的实时枚举器，用于设计时检查。

[**Ambient**](#ambient)暴露主机的环境属性（主机希望子控件遵循的颜色、字体、区域设置和设计/运行模式标志）。其中任何一项更改都会触发[**AmbientChanged**](#ambientchanged)事件，并传入受影响属性的名称。

[**Verbs**](#verbs)和[**VerbInvoked**](#verbinvoked)允许控件注册主机可调用的命令（出现在主机为此控件显示的上下文菜单中的条目）。[**PropertyPages**](#propertypages)注册主机应通过属性浏览器提供的附加[**PropertyPage**](/official/Reference/VB/PropertyPage/)类的**CLSID**。

## 绘图表面

**UserControl**本身就是一个图形表面。完整的VB6绘图原语集——[**Cls**](#cls)、[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)、[**PaintPicture**](#paintpicture)和[**Print**](#print)语句——写入其设备上下文，使用[**ForeColor**](#forecolor)、[**FillColor**](#fillcolor)/[**FillStyle**](#fillstyle)、[**DrawWidth**](#drawwidth)、[**DrawMode**](#drawmode)和[**DrawStyle**](#drawstyle)设置画笔和填充，使用[**Font**](#font)设置文本。当前画笔位置由[**CurrentX**](#currentx)和[**CurrentY**](#currenty)跟踪；[**TextWidth**](#textwidth)和[**TextHeight**](#textheight)以当前字体测量字符串；[**ScaleX**](#scalex)和[**ScaleY**](#scaley)在比例模式之间转换单个坐标。

坐标系由[**ScaleMode**](#scalemode)、[**ScaleLeft**](#scaleleft)、[**ScaleTop**](#scaletop)、[**ScaleWidth**](#scalewidth)和[**ScaleHeight**](#scaleheight)控制，与[**Form**](/official/Reference/VB/Form/)上的方式完全相同。[**AutoRedraw**](#autoredraw)控制绘制输出是否在重绘之间持久保存——当**False**（默认）时，[**Paint**](#paint)事件必须在每次失效时重绘；当**True**时，控件保持一个在失效期间存活的离屏缓冲区，**Paint**事件被禁止。

[**BackStyle**](#backstyle)在 opaque 背景（默认——**BackColor**填充表面）和透明背景（背景保持不变，使控件后面的内容可见）之间选择。透明**UserControl**通常是无窗口的（[**Windowless**](#windowless) = **True**），以便鼠标命中测试遵循绘制的形状而非边界矩形。

## 无窗口模式

将[**Windowless**](#windowless)设置为**True**请求主机在不为其分配自己的**HWND**的情况下嵌入控件。控件的绘制通过`IViewObject::Draw`进行，鼠标命中测试通过`IViewObjectEx::QueryHitPoint`进行，依此类推；[**HitTest**](#hittest)事件在每次命中测试请求时触发，以便控件可以细化哪些像素注册为"命中"。许多主机支持无窗口激活（twinBASIC IDE、Office）；部分主机不支持——当发生这种情况时，框架在激活时透明地回退到有窗口模式。

[**hWnd**](#hwnd)在控件无窗口激活时返回`0`。[**PreKeyEvents**](#prekeyevents)——以及[**PreKeyDown**](#prekeydown) / [**PreKeyUp**](#prekeyup)事件——在无窗口**UserControl**上不可用。

## 子控件和焦点

**UserControl**可以承载在设计时放置在其上的子控件。[**Controls**](#controls)是每个此类子控件的集合，可通过控件名或从零开始的索引访问。控件可直接枚举（`For Each ctrl In UserControl`）——[**Count**](#count)和[**InternalEnumerator**](#internalenumerator)转发给它。[**ContainedControls**](#containedcontrols)枚举相同的集合，但以原始`IUnknown`引用的形式，用于底层COM工作。

[**ActiveControl**](#activecontrol)返回获得焦点的子控件，当此表面上没有控件获得焦点时返回**Nothing**。[**SetFocus**](#setfocus)将焦点给予**UserControl**本身，然后转发到其Tab顺序。[**KeyPreview**](#keypreview)将按键通过**UserControl**的[**KeyDown**](#keydown)、[**KeyUp**](#keyup)和[**KeyPress**](#keypress)事件路由，在焦点子控件看到它们*之前*——适用于处理**Escape**、**Tab**或容器级快捷键。

[**EnterFocus**](#enterfocus)和[**ExitFocus**](#exitfocus)在焦点进入或离开**UserControl**整体（控件本身或任何后代）时触发；[**GotFocus**](#gotfocus)和[**LostFocus**](#lostfocus)仅在**UserControl**自己的窗口——而非子控件——持有焦点时触发。

## 属性

### AccessKeys

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。在VB6中，该字符串列出了单字符访问键，与**Alt**组合按下时会在**UserControl**上触发[**AccessKeyPress**](#accesskeypress)。
:::

### ActiveControl

此表面上当前具有输入焦点的控件，作为**Control**对象，当此控件上没有子控件获得焦点时为**Nothing**。只读。

### Alignable

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。在VB6中，**True**值告诉主机控件遵循其容器的**Align**属性（以便可以停靠到窗体边缘）。
:::

### Ambient

主机的[**AmbientProperties**](/official/Reference/VBRUN/AmbientProperties/)的快照。只读。返回主机`IDispatch`的实时透传包装器，因此每次成员访问都读取当前的环境值。任何环境属性的更改都会触发[**AmbientChanged**](#ambientchanged)，并传入属性名。

### Appearance

[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。仅在[**BorderStyle**](#borderstyle)为**vbFixedSingleBorder**时有意义——控制边框是平面还是3-D绘制。

### AutoRedraw

控件上的绘制是否在失效之间持久保存。**Boolean**，默认**False**。

当**False**时，绘图原语——[**Cls**](#cls)、[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)、[**PaintPicture**](#paintpicture)和[**Print**](#print)——直接绘制到屏幕，控件必须在其[**Paint**](#paint)事件中在受影响区域失效时重绘它们。当**True**时，控件保持一个离屏位图，绘图原语绘制到其中（并同时到屏幕），位图在失效期间存活，**Paint**事件被禁止。读取[**Image**](#image)返回此位图。

### BackColor

控件表面的背景颜色，作为**OLE_COLOR**。默认为系统3-D表面颜色。当[**BackStyle**](#backstyle)为**vbBFTransparent**时无可见效果。

### BackStyle

控件的背景是否为 opaque 或透明。[**BackFillStyleConstants**](/official/Reference/VBRUN/Constants/BackFillStyleConstants)的成员：**vbBFTransparent** (0)或**vbBFOpaque** (1, 默认)。将**BackStyle**设置为**vbBFTransparent**会阻止框架在每次绘制时用[**BackColor**](#backcolor)清除表面——当控件希望在后面的内容上绘制非矩形形状时很有用。通常与[**Windowless**](#windowless) = **True**一起使用。

### BorderStyle

控件周围绘制的边框。[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants)的成员：**vbNoBorder** (0, 默认)或**vbFixedSingleBorder** (1)。与[**Appearance**](#appearance)组合以选择平面或3-D边框。

### CanGetFocus

**UserControl**是否可以获取输入焦点。**Boolean**，默认**True**。在设计时设置。返回**False**的控件会被主机的**TAB**导航跳过；适用于纯装饰性控件。

### ClipBehavior

框架在绘制期间如何将控件裁剪到其分配的**Region**。**VbClipBehavior**的成员：**vbClipNone** (0)或**vbClipUseRegion** (1, 默认)。仅在控件向主机提供非矩形**Region**时（通常通过[**Windowless**](#windowless)命中测试）有意义。

### ContainedControls

此**UserControl**承载的子控件的实时枚举器，以原始`IUnknown`引用而非通过[**Controls**](#controls)暴露的类型化**Control**对象返回。只读。主要用于底层COM场景。

### ContainerHwnd

承载此**UserControl**的主机容器的Win32窗口句柄，作为**LongPtr**。只读。当控件由不暴露窗口的对象承载（或激活尚未发生）时返回`0`。

### ControlContainer

**UserControl**是否作为容器承载在设计时放置到其上的其他ActiveX控件。**Boolean**，运行时只读。在设计时设置。将**ControlContainer**设置为**True**告诉主机在遍历窗体的控件集合时枚举此控件的子控件。

### Controls

此**UserControl**承载的每个子控件的集合，可通过控件名或从零开始的索引访问。只读——控件由运行时添加到集合中，而非用户代码。

```vb
Dim ctrl As Control
For Each ctrl In UserControl.Controls
    ctrl.Enabled = False
Next
```

### ControlType

标识此控件为用户控件的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbUserControl**。

### Count

[**Controls**](#controls)中的控件数量，作为**Long**。只读。等同于`UserControl.Controls.Count`。

### CurrentX

水平画笔位置，以[**ScaleMode**](#scalemode)单位，用于省略起始坐标的绘图原语（例如[**Print**](#print)和[**Line**](#line)的矩形形式）。**Double**。

### CurrentY

垂直画笔位置，以[**ScaleMode**](#scalemode)单位，用于省略起始坐标的绘图原语。**Double**。

### DataBindingBehavior

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。在VB6中，此属性声明控件是否可以数据绑定，如果是，是否支持简单绑定或复杂绑定。
:::

### DataMembers

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。VB6复杂数据绑定数据源接口的一部分。
:::

### DataSourceBehavior

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。在VB6中，此属性声明控件是否可以*提供*数据源供其他控件绑定。
:::

### DefaultCancel

此**UserControl**是否作为其主机窗体的**Cancel**按钮。**Boolean**，默认**False**。在设计时设置。当**True**时，在窗体具有焦点时按**Escape**会在控件上触发[**AccessKeyPress**](#accesskeypress)并传入**Escape**键码。

### DpiScale

控件当前所在显示器的当前DPI缩放因子，作为**Double**。96 DPI时为`1.0`，120 DPI时为`1.25`，144 DPI时为`1.5`，依此类推。只读。

### DrawMode

绘图原语在将画笔与目标组合时应用的光栅操作。[**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants)的成员，默认**vbCopyPen**。

### DrawStyle

绘图原语使用的画笔线型。[**DrawStyleConstants**](/official/Reference/VBRUN/Constants/DrawStyleConstants)的成员：**vbSolid**（默认）、**vbDash**、**vbDot**、**vbDashDot**、**vbDashDotDot**、**vbInvisible**或**vbInsideSolid**。

### DrawWidth

绘图原语的画笔宽度（以像素为单位）。**Long**，默认`1`。宽度大于1时强制[**DrawStyle**](#drawstyle)回到**vbSolid**（Win32 GDI限制）。

### EditAtDesignTime

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。在VB6中，**True**值允许用户通过右键菜单上的**(Edit)**动词在设计时激活控件的UI。
:::

### Enabled

决定控件是否接受用户输入。禁用的控件呈灰色显示并忽略键盘和鼠标交互。**Boolean**，默认**True**。

### EventsFrozen

主机是否暂时暂停了控件的事件传递。**Boolean**，只读。主机在敏感操作期间（例如从设计视图切换到运行视图）引发`IOleControl::FreezeEvents(TRUE)`，以便控件在其周围环境不一致时不引发事件。

### Extender

主机围绕此**UserControl**的扩展器包装器，作为**Object**。只读。扩展器是主机向用户代码暴露的窗体上的控件对象——它提供标准容器属性（**Top**、**Left**、**Width**、**Height**、**Name**、**Visible**、**TabIndex**、**TabStop**、**Container**、**Parent**、**DragMode**、**DragIcon**等）以及主机喜欢的任何附加属性。当没有扩展器可用时返回**Nothing**（控件尚未被嵌入，或主机过于简单无法提供）。

### FillColor

由[**Circle**](#circle)和[**Line**](#line)的矩形形式绘制的闭合形状的填充颜色。**OLE_COLOR**，默认`0`（黑色）。仅在[**FillStyle**](#fillstyle)不为**vbFSTransparent**时使用。

### FillStyle

闭合形状的填充图案。[**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants)的成员：**vbFSSolid**、**vbFSTransparent**（默认）、**vbHorizontalLine**、**vbVerticalLine**、**vbUpwardDiagonal**、**vbDownwardDiagonal**、**vbCross**或**vbDiagonalCross**。

### Font

此控件上[**Print**](#print)语句和其他文本绘制使用的**StdFont**。便捷属性[**FontBold**](#fontbold)、[**FontItalic**](#fontitalic)、[**FontName**](#fontname)、[**FontSize**](#fontsize)、[**FontStrikethru**](#fontstrikethru)和[**FontUnderline**](#fontunderline)读写此对象的相应成员。

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

当**True**（默认）时，控件上绘制的文本具有透明背景，使底层绘制在文本后面可见。当**False**时，文本绘制在由[**BackColor**](#backcolor)填充的 opaque 矩形上。**Boolean**。

### FontUnderline

[**Font**](#font)`.Underline`的快捷方式。**Boolean**。

### ForceResizeToContainer

控件是否自动调整自身大小以填充主机的容器区域，而不考虑在设计器中分配的任何显式大小。**Boolean**，运行时只读。在设计时设置。适用于应始终跨越可用空间的全窗格控件。

### ForeColor

[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)以及[**Print**](#print)绘制的文本使用的画笔颜色。**OLE_COLOR**。

### ForwardFocus

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。在VB6中，**True**值告诉主机在主机激活**UserControl**时将焦点从**UserControl**的外壳窗口转发到其第一个子控件。
:::

### FormDesignerId

将设计的代码隐藏类与特定设计器文件关联的唯一GUID格式**String**。运行时只读——由IDE设置。

### HasDC

控件是否为其绘图表面保持私有设备上下文（`CS_OWNDC`）。**Boolean**，默认**True**。运行时只读——在设计时设置。

### HitBehavior

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。在VB6中，此属性在无窗口控件的边界矩形命中测试和像素精确（基于区域或基于绘制）命中测试之间选择。
:::

### hDC

控件的Win32设备上下文句柄，作为**LongPtr**。只读。当底层窗口尚未创建时返回`0`。适用于传递给GDI API调用。

### hWnd

控件的Win32窗口句柄，作为**LongPtr**。只读。当控件无窗口激活（[**Windowless**](#windowless) = **True**）时返回`0`。适用于传递给API函数。

### Hyperlink

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。在VB6中，此属性返回一个**Hyperlink**对象，允许控件在浏览器可用时导航主机的浏览器。
:::

### Image

将渲染的绘图表面作为**StdPicture**返回。只读。当[**AutoRedraw**](#autoredraw)为**True**时最有用——返回的图片是持久的离屏缓冲区。

### Index

当控件是控件数组的一部分时，此实例在数组中从零开始的**Long**索引。运行时只读。对于不在数组中的控件，返回`0`并将`HRESULT`设置为`0x800A0157`（*Object not an array*）。

### InvisibleAtRuntime

**UserControl**在运行时是否隐藏。**Boolean**，运行时只读。在设计时设置。适用于仅用于提供主机侧服务（计时器、数据源）而没有视觉外观的控件。

### KeyPreview

当**True**时，**UserControl**的[**KeyDown**](#keydown)、[**KeyUp**](#keyup)和[**KeyPress**](#keypress)事件在焦点子控件收到相同按键*之前*触发。**Boolean**，默认**False**。适用于控件范围的快捷键；事件之后仍在焦点子控件上触发。

### Left

**UserControl**在其主机容器内的水平位置，以主机的坐标单位。**Double**。通常由主机控制（或由开发者通过扩展器的**Move**方法），而非直接赋值。

### MaskColor

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。在VB6中，此颜色用作提供给**MaskPicture**的位图的透明键。
:::

### MaskPicture

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。在VB6中，此图片与**MaskColor**一起使用，为**UserControl**提供非矩形形状。
:::

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于控件上时用作鼠标光标的**StdPicture**。

### MousePointer

当指针位于控件上时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

**UserControl**类的唯一设计时名称。运行时只读。也是生成的用户控件类的类名。主机的扩展器暴露自己的**Name**来标识窗体上的实例——内部**UserControl**的**Name**标识*类*。

### Palette

::: info
保留用于VB6的256色调色板功能的兼容性；twinBASIC中当前未实现。
:::

### PaletteMode

::: info
保留用于VB6的256色调色板功能的兼容性；twinBASIC中当前未实现。
:::

### Parent

包含此**UserControl**的窗体（或其他主机对象），作为**Object**。只读。等同于`Extender.Parent`。

### ParentControls

主机父级上每个同级控件的实时集合——在设计时用于检查或与同一表面上的其他控件协调。只读。支持索引访问（`ParentControls(0)`）、枚举（`For Each ctl In ParentControls`）和**Count**成员。其**ParentControlsType**属性在*扩展器*包装视图（默认——项目是主机的扩展器对象）和*原始*视图（项目是每个控件的内部`IUnknown`）之间切换。

### PictureDpiScaling

::: info
框架在**Form**和大多数固有控件上识别此名称，但当前未在**UserControl**上暴露它。绘图管线始终以**Picture**的自然像素大小渲染。
:::

### Picture

作为控件背景绘制的**StdPicture**。在任何绘图原语或子控件之前绘制。赋值**Nothing**移除背景。

### PreKeyEvents

是否为此**UserControl**的后代引发[**PreKeyDown**](#prekeydown)和[**PreKeyUp**](#prekeyup)事件。**Boolean**，运行时只读——在设计时设置。当[**Windowless**](#windowless)为**True**时不可用。

### PropertyPages

标识主机应通过属性浏览器的**(Custom)**条目提供的[**PropertyPage**](/official/Reference/VB/PropertyPage/)类的**String** **CLSID**数组。在主机的`ISpecifyPropertyPages::GetPages`调用时读取。顺序重要——数组顺序是属性表对话框中的标签页顺序。

```vb
Private Sub UserControl_Initialize()
    ReDim PropertyPages(0 To 1)
    PropertyPages(0) = "{<clsid-of-the-general-page>}"
    PropertyPages(1) = "{<clsid-of-the-colour-page>}"
End Sub
```

### Public

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。在VB6中，此属性声明**UserControl**类是否在其自身项目之外可见；在twinBASIC中，类声明上的**Public**修饰符起相同作用。
:::

### RightToLeft

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

### ScaleHeight

逻辑绘图矩形的高度，以[**ScaleMode**](#scalemode)单位。**Double**。设置它（或[**ScaleWidth**](#scalewidth)、[**ScaleLeft**](#scaleleft)或[**ScaleTop**](#scaletop)）会隐式将**ScaleMode**切换为**vbUser**。

### ScaleLeft

控件客户区左边缘的逻辑水平坐标，以[**ScaleMode**](#scalemode)单位。**Double**。默认`0`。

### ScaleMode

[**CurrentX**](#currentx)、[**CurrentY**](#currenty)、绘图原语、[**TextWidth**](#textwidth)和[**TextHeight**](#textheight)使用的度量单位。[**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)的成员：**vbTwips**（默认）、**vbPoints**、**vbPixels**、**vbCharacters**、**vbInches**、**vbMillimeters**、**vbCentimeters**或**vbUser**（由四个**Scale\***属性定义矩形）。

### ScaleTop

控件客户区顶边缘的逻辑垂直坐标，以[**ScaleMode**](#scalemode)单位。**Double**。默认`0`。

### ScaleWidth

逻辑绘图矩形的宽度，以[**ScaleMode**](#scalemode)单位。**Double**。设置它会隐式将**ScaleMode**切换为**vbUser**。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### Top

**UserControl**在其主机容器内的垂直位置，以主机的坐标单位。**Double**。通常由主机控制。

### Verbs

向主机的`IOleObject::EnumVerbs`枚举器注册的**String**名称数组——每个条目出现在主机为此控件的右键菜单上。调用其中一个会触发[**VerbInvoked**](#verbinvoked)并传入动词名称。

```vb
Private Sub UserControl_Initialize()
    ReDim Verbs(0 To 1)
    Verbs(0) = "Re&fresh"
    Verbs(1) = "&Configure..."
End Sub

Private Sub UserControl_VerbInvoked(ByVal Verb As String)
    Select Case Verb
        Case "Re&fresh"     : DoRefresh
        Case "&Configure...": ShowConfigDialog
    End Select
End Sub
```

### Width

控件的宽度，默认以缇为单位（或以调用代码的**ScaleMode**单位）。**Double**。设置它会调整控件大小并触发[**Resize**](#resize)。在设计器上，主机的扩展器通过往返更新，使设计时网格反映新大小。

### Height

控件的高度。**Double**。设置它会调整控件大小并触发[**Resize**](#resize)。

### Windowless

控件是否支持无窗口激活。**Boolean**，默认**False**。运行时只读——在设计时设置。参见[无窗口模式](#无窗口模式)。

## 方法

### AsyncRead

::: info
声明用于VB6兼容性；twinBASIC中当前未实现。在VB6中，此方法会从主机提供的URL启动异步获取，并在数据到达时引发[**AsyncReadComplete**](#asyncreadcomplete)。
:::

语法：*object*.**AsyncRead** *Target*, *AsyncType*, [, *PropertyName* [, *AsyncReadOptions* ] ]

### CancelAsyncRead

::: info
声明用于VB6兼容性；twinBASIC中当前未实现。[**AsyncRead**](#asyncread)的配套方法。
:::

语法：*object*.**CancelAsyncRead** [ *Property* ]

### CanPropertyChange

::: info
声明用于VB6兼容性；twinBASIC中当前未实现。在VB6中，当**DataSource**的命名属性可写时返回**True**——用于数据绑定控件在将编辑值推回源之前检查。
:::

语法：*object*.**CanPropertyChange**( *PropertyName* )

### Circle

使用[**ForeColor**](#forecolor)绘制轮廓，[**FillColor**](#fillcolor)/[**FillStyle**](#fillstyle)填充内部，在控件上绘制圆、椭圆或弧。

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

### DataMemberChanged

::: info
声明用于VB6兼容性；twinBASIC中当前未实现。数据源行为的配套方法。
:::

语法：*object*.**DataMemberChanged** *DataMember*

### Enumerator

返回支持`For Each`遍历**UserControl**[**Controls**](#controls)的`IUnknown`枚举器。只读。作为[Enumerator]成员暴露，以便`For Each ctl In UserControl`直接遍历子控件。

### Line

使用[**ForeColor**](#forecolor)（或显式颜色）和[**DrawWidth**](#drawwidth)/[**DrawStyle**](#drawstyle)在控件上绘制直线或矩形。

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

从控件发起OLE拖动操作，触发[**OLEStartDrag**](#olestartdrag)事件以便应用程序填充**DataObject**。

语法：*object*.**OLEDrag**

### PaintPicture

将**StdPicture**绘制到控件上，支持可选的缩放和光栅操作。

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

### PopUpMenu

::: info
声明用于VB6兼容性；twinBASIC中当前未在**UserControl**上实现。**UserControl**没有自己的菜单结构——通过扩展器或父窗体的[**PopUpMenu**](/official/Reference/VB/Form/#popupmenu)调用主机弹出菜单。
:::

语法：*object*.**PopUpMenu** *Menu* [, *Flags* [, *X* [, *Y* [, *DefaultMenu* ] ] ] ]

### Print

使用[**Font**](#font)将文本写入控件的绘图表面，从[**CurrentX**](#currentx) / [**CurrentY**](#currenty)开始并随之推进。通过VB6 **Print**语句分派，因此多个表达式可以用`;`（无间距）或`,`（跳到下一个打印区域）分隔。**Spc(n)**插入*n*个空格，**Tab(n)**移到打印列*n*。输出遵循[**Font**](#font)、[**ForeColor**](#forecolor)和[**FontTransparent**](#fonttransparent)，当[**AutoRedraw**](#autoredraw)为**True**时记录到持久离屏位图，从而在失效期间存活。

语法：*object*.**Print** \[ *expressionlist* ] \[ **;** \| **,** ]

末尾的`;`或`,`抑制换行，使下一次**Print**调用在同一行继续；没有尾部分隔符时，画笔推进到下一行的开头。

### PropertyChanged

通知主机**UserControl**的某个持久属性已更改，标记设计表面（或属性包）为脏，使主机在下次保存时调用[**WriteProperties**](#writeproperties)。

语法：*object*.**PropertyChanged** [ *PropertyName* ]

*PropertyName*
: *可选* 已更改属性的名称，作为**String**。提供时，框架还会以匹配的**DispId**触发COM **IPropertyNotifySink::OnChanged**事件，以便数据绑定容器刷新自身。省略则发送通用的"有内容更改"通知。

### PSet

将控件上的单个像素设置为指定颜色。

语法：*object*.**PSet** [ **Step** ] ( *X*, *Y* ) [, *Color* ]

*X*, *Y*
: *必需* 像素位置，以[**ScaleMode**](#scalemode)单位。**Step**使位置相对于([**CurrentX**](#currentx), [**CurrentY**](#currenty))。

*Color*
: *可选* **OLE_COLOR**；默认为[**ForeColor**](#forecolor)。

### Refresh

强制控件立即重绘，当[**AutoRedraw**](#autoredraw)为**False**时触发[**Paint**](#paint)。

语法：*object*.**Refresh**

### Scale

通过一次调用设置控件的逻辑绘图矩形——赋值[**ScaleLeft**](#scaleleft)、[**ScaleTop**](#scaletop)、[**ScaleWidth**](#scalewidth)和[**ScaleHeight**](#scaleheight)。将[**ScaleMode**](#scalemode)切换为**vbUser**。不带参数调用**Scale**会将矩形重置为与客户区1:1映射（以像素为单位）。

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

激活**UserControl**并将输入焦点给予其第一个可获得焦点的子控件（或此表面上最后持有焦点的控件）。

语法：*object*.**SetFocus**

### Size

通过一次调用设置**UserControl**的范围，以缇表示。框架转换为HIMETRIC，调用`IOleObject::SetExtent`通知主机，在设计模式下运行时更新设计表面。

语法：*object*.**Size** *Width*, *Height*

*Width*, *Height*
: *必需* 以缇为单位的新尺寸。

### TextHeight

返回给定字符串使用控件当前[**Font**](#font)绘制时将占用的 height，以[**ScaleMode**](#scalemode)单位。嵌入式换行会被遵循。

语法：*object*.**TextHeight**( *Str* )

*Str*
: *必需* 要测量的**String**。

### TextWidth

返回给定字符串使用控件当前[**Font**](#font)绘制时将占用的 width，以[**ScaleMode**](#scalemode)单位。当*Str*包含嵌入式换行时返回最长行的宽度。

语法：*object*.**TextWidth**( *Str* )

*Str*
: *必需* 要测量的**String**。

### ValidateControls

::: info
声明用于VB6兼容性；twinBASIC中当前未实现。在VB6中，此方法从代码触发焦点子控件的**Validate**事件；在**UserControl**上，主机通常通过窗体级的[**ValidateControls**](/official/Reference/VB/Form/#validatecontrols)处理验证。
:::

语法：*object*.**ValidateControls**

## 事件

### AccessKeyPress

::: info
声明用于VB6兼容性；twinBASIC中仅部分实现。运行时当前在主机使用**Escape**、**Return**或**Execute**键调用`IOleControl::OnMnemonic`时引发此事件——通常是因为[**DefaultCancel**](#defaultcancel)（或等效的默认按钮）将默认操作按键路由到控件。
:::

语法：*object*\_**AccessKeyPress**( *KeyAscii* **As Integer** )

### AmbientChanged

当主机更改通过[**Ambient**](#ambient)暴露的环境属性之一时引发——通常是其[**Font**](#font)、颜色、区域设置或运行/设计模式标志发生变化。*PropertyName*参数命名已更改的环境属性。

语法：*object*\_**AmbientChanged**( *PropertyName* **As String** )

*PropertyName*
: 标识环境属性的**String**——例如`"BackColor"`、`"Font"`、`"LocaleID"`、`"UserMode"`。

### AsyncReadComplete

::: info
声明用于VB6兼容性；twinBASIC中当前未引发。[**AsyncRead**](#asyncread)的配套事件。
:::

语法：*object*\_**AsyncReadComplete**( *AsyncProp* **As AsyncProperty** )

### AsyncReadProgress

::: info
声明用于VB6兼容性；twinBASIC中当前未引发。[**AsyncRead**](#asyncread)的配套事件。
:::

语法：*object*\_**AsyncReadProgress**( *AsyncProp* **As AsyncProperty** )

### Click

当用户单击控件表面时引发（即不在任何子控件上）。

语法：*object*\_**Click**( )

### DblClick

当用户双击控件表面时引发。

语法：*object*\_**DblClick**( )

### DPIChange

当控件移动到具有不同DPI缩放的显示器时引发，*但仅当*应用程序是按显示器DPI感知的（`PROCESS_PER_MONITOR_DPI_AWARE`）。事件的*NewDPI*参数给出新的有效DPI；子控件会自动重新缩放。twinBASIC新增。

语法：*object*\_**DPIChange**( *NewDPI* **As Long** )

### DragDrop

::: info
声明用于VB6兼容性；twinBASIC中当前未在**UserControl**上引发。手动拖放由主机的扩展器而非内部**UserControl**处理。
:::

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

::: info
声明用于VB6兼容性；twinBASIC中当前未在**UserControl**上引发。参见[**DragDrop**](#dragdrop)。
:::

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### EnterFocus

当输入焦点移入**UserControl**时引发——**UserControl**本身或其任何后代。在任何子控件的**GotFocus**之前触发。

语法：*object*\_**EnterFocus**( )

### ExitFocus

当输入焦点离开**UserControl**时引发——即移到非后代的控件。在离开的子控件的**LostFocus**之后触发。

语法：*object*\_**ExitFocus**( )

### GetDataMember

::: info
声明用于VB6兼容性；twinBASIC中当前未引发。[**DataMembers**](#datamembers)的配套事件。
:::

语法：*object*\_**GetDataMember**( *DataMember* **As String**, *Data* **As Object** )

### GotFocus

当**UserControl**自己的窗口获得输入焦点且没有启用的子控件可以代替获取焦点时引发。

语法：*object*\_**GotFocus**( )

### Hide

当主机隐藏容器时引发——通常是在从运行视图切换到设计视图时，或当包含的标签页变为非活动时。

语法：*object*\_**Hide**( )

### HitTest

当控件无窗口时，为主机每个`IViewObjectEx::QueryHitPoint`请求引发。将*HitResult*设置为非零**HitResult**值告诉主机给定像素对于鼠标路由而言是否为"命中"——适用于非矩形无窗口控件。

语法：*object*\_**HitTest**( *X* **As Single**, *Y* **As Single**, *HitResult* **As Integer** )

### Initialize

引发一次，在底层窗口创建之前且控件的任何子控件存在之前。适用于设置窗体级字段的初始值。从此事件中无法引用控件的子控件。**默认设计器事件。**

语法：*object*\_**Initialize**( )

### InitProperties

在全新**UserControl**实例的首次激活时引发一次——在其属性包存在之前。这是为持久属性分配初始值的经典位置。在后续加载时不引发；在那些情况下，改为运行[**ReadProperties**](#readproperties)。

语法：*object*\_**InitProperties**( )

### KeyDown

当用户在**UserControl**具有焦点时按下任意键引发。默认在焦点子控件上触发；[**KeyPreview**](#keypreview)为**True**时，首先在**UserControl**上触发。

语法：*object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

当用户输入产生ANSI按键的字符时引发。默认在焦点子控件上触发；[**KeyPreview**](#keypreview)为**True**时，首先在**UserControl**上触发。

语法：*object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

当用户释放键时引发。默认在焦点子控件上触发；[**KeyPreview**](#keypreview)为**True**时，首先在**UserControl**上触发。

语法：*object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LostFocus

当**UserControl**自己的窗口失去输入焦点时引发。

语法：*object*\_**LostFocus**( )

### MouseDown

当用户在控件表面上按下任意鼠标按钮时引发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

当光标在控件表面上移动时引发。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

当用户在控件表面上释放鼠标按钮时引发。

语法：*object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseWheel

当鼠标滚轮在控件上滚动时引发。twinBASIC新增。

语法：*object*\_**MouseWheel**( *Delta* **As Integer**, *Horizontal* **As Boolean** )

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

当控件的失效部分需要重绘时引发。当[**AutoRedraw**](#autoredraw)为**True**时被禁止——控件的持久离屏缓冲区被位块传输到屏幕。

语法：*object*\_**Paint**( )

### PreKeyDown

在**UserControl**或其任何后代的任意位置按下任意键时引发，在焦点子控件看到它*之前*——以便处理程序可以消费按键。需要[**PreKeyEvents**](#prekeyevents)为**True**。当[**Windowless**](#windowless)为**True**时不引发。twinBASIC新增。

语法：*object*\_**PreKeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### PreKeyUp

在**UserControl**或其任何后代的任意位置释放任意键时引发，在焦点子控件看到它*之前*。需要[**PreKeyEvents**](#prekeyevents)为**True**。当[**Windowless**](#windowless)为**True**时不引发。twinBASIC新增。

语法：*object*\_**PreKeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### ReadProperties

当主机向控件传递包含先前保存状态的属性包时引发——即除第一次之外的每次加载。处理程序从*PropBag*中读取它关心的值并应用到其字段。*PropBag*的**ReadProperty**方法接受键、默认值和类型提示。

语法：*object*\_**ReadProperties**( *PropBag* **As PropertyBag** )

*PropBag*
: 主机提供的[**PropertyBag**](/official/Reference/VBRUN/PropertyBag/)，包含持久化的值。

### Resize

当**UserControl**被调整大小时引发——由主机在初始布局期间、由用户代码赋值[**Width**](#width)或[**Height**](#height)、或由主机响应设计器拖动。

语法：*object*\_**Resize**( )

### Show

当主机使容器可见时引发——通常是在从设计视图切换到运行视图时，或当包含的标签页变为活动时。

语法：*object*\_**Show**( )

### Terminate

在**UserControl**的窗口已销毁且类实例即将被释放之后引发。此时子控件不再可访问。

语法：*object*\_**Terminate**( )

### VerbInvoked

当主机调用[**Verbs**](#verbs)中声明的动词之一时引发——通常是因为用户从主机的右键上下文菜单中选择了它。

语法：*object*\_**VerbInvoked**( *Verb* **As String** )

*Verb*
: 被调用动词的名称，与在[**Verbs**](#verbs)中注册时完全相同。

### WriteProperties

当主机要求控件持久化其当前状态时引发——设计时保存和主机发起的序列化。处理程序通过**WriteProperty**将每个持久值写入*PropBag*，它接受键、值和（可选地）与[**ReadProperties**](#readproperties)处理程序使用的相同默认值，以便往返默认值不被写入。仅当自上次保存以来至少调用过一次[**PropertyChanged**](#propertychanged)时才引发。

语法：*object*\_**WriteProperties**( *PropBag* **As PropertyBag** )

*PropBag*
: 主机提供的[**PropertyBag**](/official/Reference/VBRUN/PropertyBag/)，用于写入持久化的值。