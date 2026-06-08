---
title: "DirListBox 目录列表框"
parent: VB Package
permalink: /tB/Packages/VB/DirListBox/
---

# DirListBox 类

**DirListBox**是一个Win32原生列表控件，用于显示单个路径的目录树：当前文件夹的祖先目录显示在上方（每个带有关闭文件夹图标，按深度缩进），当前文件夹的直接子目录显示在下方（每个带有打开文件夹图标，全缩进）。双击某个条目会导航到该目录，并引发[**Change**](#change)事件。该控件通常在设计时放置在**Form**或**UserControl**上，与[**DriveListBox**](/official/Reference/VB/DriveListBox/)和[**FileListBox**](/official/Reference/VB/FileListBox/)一起使用，通过连接它们的**Change**事件来构建完整的文件选择器。默认属性是[**Path**](#path)，默认事件是[**Change**](#change)。

```vb
Private Sub Form_Load()
    Drive1.Drive = "C:\"
    Dir1.Path = Drive1.Drive
    File1.Path = Dir1.Path
End Sub

Private Sub Drive1_Change()
    Dir1.Path = Drive1.Drive
End Sub

Private Sub Dir1_Change()
    File1.Path = Dir1.Path
End Sub
```


## Path、ListIndex 和 PathSelected

该控件围绕三个密切相关的属性构建：

- [**Path**](#path) -- *当前*目录的绝对路径。通过代码（或双击某个条目）设置它来导航列表。控件首次创建时默认为[**App.Path**](/official/Reference/VB/App/#path)。
- [**ListIndex**](#listindex) -- 用户*选中*的条目索引。`-1`选择当前文件夹本身（祖先条目中最深的一个）；`0`及以上选择依次的子目录。选择条目与导航到该条目是独立的操作——选择只是移动高亮显示。
- [**PathSelected**](#pathselected) -- 如果激活当前选中条目将成为**Path**的绝对路径。对于祖先条目，它会沿目录树向上回溯；对于子目录，它会拼接**Path**和条目名称。

激活条目——通过双击，或由外部调用者赋值**Path**——会执行导航、重新填充列表并引发[**Change**](#change)。将**Path**设置为当前值是空操作（不引发事件）。

## List、ListCount 和 NewIndex

[**ListCount**](#listcount)是当前文件夹的子目录数量（*不*包括上方显示的祖先条目）。[**List**](#list)从零索引到`ListCount - 1`，返回对应子目录的*完整路径*——从代码中迭代时很方便：

```vb
Dim i As Long
For i = 0 To Dir1.ListCount - 1
    Debug.Print Dir1.List(i)
Next
```

[**NewIndex**](#newindex)跟踪列表填充过程中最近条目（祖先或子目录）插入的位置；它在运行时很少使用，但某些兼容性代码会读取它。

[**TopIndex**](#topindex)控制列表子目录部分的垂直滚动。当[**WheelScrollEvent**](#wheelscrollevent)为**True**时，鼠标滚轮和滚动条交互会引发[**Scroll**](#scroll)。

## 属性

### Appearance

确定操作系统如何绘制控件的边框。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。与[**BorderStyle**](#borderstyle)组合使用，可选平面单线边框或凹陷的客户端边缘。

### BackColor

背景颜色，类型为**OLE_COLOR**。默认为系统窗口背景色。用作除选中项之外所有列表项的填充色（选中项使用系统高亮色绘制）。

### BorderStyle

[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants)的成员：**vbNoBorder** (0)或**vbFixedSingleBorder** (1，默认)。与[**Appearance**](#appearance)组合使用：3D外观加单线边框产生标准的凹陷客户端边缘；平面外观加单线边框产生一像素轮廓线。

### CausesValidation

确定先前获得焦点的控件的[**Validate**](#validate)事件是否在此控件获得焦点之前运行。**Boolean**，默认**True**。

### ControlType

只读的[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值，将此控件标识为目录列表框。始终为**vbDirListBox**。

### DragIcon

控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时自动拖动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual** (0，默认——从代码调用[**Drag**](#drag))或**vbAutomatic** (1)。

### Enabled

确定控件是否接受用户输入。禁用的目录列表框仍显示其内容，但变暗并忽略键盘和鼠标交互。**Boolean**，默认**True**。

### Font

用于渲染目录名的**StdFont**。便捷属性**FontName**、**FontSize**、**FontBold**、**FontItalic**、**FontStrikethru**和**FontUnderline**读写此对象的相应成员。当[**IntegralHeight**](#integralheight)为**True**时，更改字体会重新缩放每项的行高。

### ForeColor

未选中条目的文本颜色，类型为**OLE_COLOR**。默认为系统窗口文本色。禁用条目使用系统灰色文本色绘制，选中条目使用系统高亮文本色绘制，不受此设置影响。

### Height

控件的高度，默认以缇为单位（或使用容器的**ScaleMode**单位）。当[**IntegralHeight**](#integralheight)为**True**时，操作系统将其量化为整行数。**Single**。

### HelpContextID

标识应用程序帮助文件中主题的**Long**值，当用户在控件具有焦点时按**F1**时检索。

### hWnd

底层列表框的Win32窗口句柄，类型为**LongPtr**。只读。可用于传递给API函数。

### Index

当控件是控件数组的一部分时，此实例在数组中的从零开始的**Long**索引。运行时只读。

### IntegralHeight

当为**True**（默认）时，操作系统调整控件高度，使可见部分显示完整行而非部分行。当为**False**时，控件精确遵循[**Height**](#height)。**Boolean**。在运行时更改此属性会重新创建底层窗口。

### Left

从容器的左边缘到控件左边缘的水平距离。**Single**。

### List

给定索引处子目录的完整路径。只读。

语法：*object*.**List**( *Index* )

*Index*
: *必需* 从零开始的**Long**位置，从`0`到`ListCount - 1`。当前文件夹上方显示的祖先条目不能通过**List**访问。

### ListCount

当前[**Path**](#path)的子目录数量，类型为**Long**。只读。当前文件夹上方显示的祖先条目不计入。

### ListIndex

列表子目录部分中选中条目的从零开始的索引，或`-1`选择当前文件夹本身。读取或写入低于`-1`的值会沿祖先栈进一步上移。**Long**。赋值与当前值不同的值会选中该条目并引发[**Click**](#click)。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于控件上时用作鼠标光标的**StdPicture**。

### MousePointer

指针位于控件上时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### NewIndex

最近列表填充步骤插入条目的从零开始的索引，如果列表为空则为`-1`。**Long**，只读。

### OLEDragMode

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。（VB6本身对此控件的自动拖动实现也是不可用的。）
:::

### OLEDropMode

控件如何响应OLE放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone**或**vbOLEDropManual**。DirListBox不支持自动放置模式。

### Opacity

控件的不透明度百分比（0--100，默认100）。超出范围的值在**Initialize**时被钳制。子控件需要Windows 8或更高版本。

### Parent

对包含此控件的**Form**（或**UserControl**）的引用。只读。

### Path

当前目录的绝对路径。**默认属性。**

语法：*object*.**Path** [ = *string* ]

读取**Path**返回列表当前显示的路径——驱动器加连接的祖先名称。设置**Path**会重新填充列表以显示新目录及其子目录，如果新值与当前值不同则引发[**Change**](#change)。赋值不存在的路径（或非目录路径）会引发运行时错误76（*Path not found*）。

**DriveListBox**和**DirListBox**控件在此属性上接受彼此的"驱动器 [卷标]"格式——`Dir1.Path = Drive1.Drive`无需手动剥离即可正常工作。

### PathSelected

当前选中条目引用的绝对路径。**String**，只读。对于[**ListIndex**](#listindex)为`-1`（当前文件夹），这与[**Path**](#path)相同；对于祖先条目，沿目录树向上回溯；对于子目录，返回**Path**加上子目录名称。这是用户双击选中条目时控件赋给**Path**的值。

### TabIndex

控件在窗体TAB键导航顺序中的位置。**Long**。

### TabStop

用户是否可以通过按**TAB**键到达控件。**Boolean**，默认**True**。禁用的控件无论此设置如何都会被跳过。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### ToolTipText

当用户将鼠标悬停在控件上时作为工具提示显示的多行**String**。

### Top

从容器顶部到控件顶部的垂直距离。**Single**。

### TopIndex

可见区域顶部显示的子目录的从零开始的索引。赋值会滚动列表使该子目录位于顶部，当值实际改变时引发[**Scroll**](#scroll)。**Long**。

### TransparencyKey

一个**OLE_COLOR**值，设置后在渲染的控件中变为完全透明。默认`-1`禁用此效果。子控件需要Windows 8或更高版本。

### Visible

控件是否显示。**Boolean**，默认**True**。

### VisualStyles

绘制控件时是否使用操作系统主题引擎。**Boolean**，默认**True**。

### WhatsThisHelpID

标识应用程序帮助文件中"这是什么？"弹出帮助主题的**Long**值。参见[**ShowWhatsThis**](#showwhatsthis)。

### WheelScrollEvent

当为**True**（默认）时，控件上的鼠标滚轮通知引发[**Scroll**](#scroll)事件；当为**False**时，滚轮仍会滚动列表但[**Scroll**](#scroll)被抑制。**Boolean**。VB6从不为滚轮事件引发**Scroll**；将此设置为**False**可完全匹配该行为。

### Width

控件的宽度。**Single**。

## 方法

### Drag

开始、完成或取消手动拖放操作。通常在[**DragMode**](#dragmode)为**vbManual**时从[**MouseDown**](#mousedown)处理程序中调用。

语法：*object*.**Drag** [ *Action* ]

*Action*
: *可选* [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants)的成员：**vbCancel** (0)、**vbBeginDrag** (1，默认)或**vbEndDrag** (2)。

### Move

在单次调用中重新定位并可选地调整控件大小。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**值。

*Top*、*Width*、*Height*
: *可选* 对应属性的新值。省略的值保持不变。

### OLEDrag

从控件发起OLE拖动操作，引发[**OLEStartDrag**](#olestartdrag)事件以便应用程序填充**DataObject**。

语法：*object*.**OLEDrag**

### Refresh

从磁盘重新读取当前[**Path**](#path)的内容并重绘控件。当目录在应用程序外部被修改时很有用——控件不会自行监视文件系统。不引发[**Change**](#change)。

语法：*object*.**Refresh**

### SetFocus

将输入焦点移至控件。控件必须同时[**Visible**](#visible)和[**Enabled**](#enabled)，否则引发运行时错误5（*Invalid procedure call or argument*）。

语法：*object*.**SetFocus**

### ShowWhatsThis

以"这是什么？"弹出的方式显示由[**WhatsThisHelpID**](#whatsthishelpid)标识的主题。

语法：*object*.**ShowWhatsThis**

### ZOrder

将控件置于其同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront** (0，默认)或**vbSendToBack** (1)。

## 事件

### Change

在[**Path**](#path)更改后引发——无论用户双击了条目还是代码赋值了不同的**Path**值。对于与当前值相同的赋值不引发，在[**Initialize**](#initialize)之前发生的初始填充期间也不引发。**默认事件。**

语法：*object*\_**Change**( )

### Click

在[**ListIndex**](#listindex)更改后引发——无论用户点击了不同的条目、使用键盘移动选择，还是代码赋值了不同的[**ListIndex**](#listindex)值。当选择被取消时也会引发（例如点击最后一个条目下方的空白区域）。

语法：*object*\_**Click**( )

### DragDrop

手动拖动操作在目标控件上结束时在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

手动拖动操作进行中时在光标下方的控件上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### GotFocus

控件获得输入焦点时引发。

语法：*object*\_**GotFocus**( )

### Initialize

在底层窗口创建且初始路径（[**App.Path**](/official/Reference/VB/App/#path)）加载后立即引发一次。twinBASIC新增——VB6在此控件上没有等效功能。

语法：*object*\_**Initialize**( )

### KeyDown

用户在控件具有焦点时按下任意键引发。

语法：*object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

用户键入产生ANSI击键的字符时引发。

语法：*object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

用户在控件具有焦点时释放键引发。

语法：*object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LostFocus

控件失去输入焦点时引发。

语法：*object*\_**LostFocus**( )

### MouseDown

用户在控件上按下任意鼠标按钮时引发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

光标在控件上移动时引发。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

用户在控件上释放鼠标按钮时引发。

语法：*object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

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

### Scroll

列表的可见部分滚动时引发——通过滚动条、键盘或（当[**WheelScrollEvent**](#wheelscrollevent)为**True**时）鼠标滚轮。新偏移量可从[**TopIndex**](#topindex)读取。

语法：*object*\_**Scroll**( )

### Validate

焦点移动到另一个[**CausesValidation**](#causesvalidation)为**True**的控件时引发。将*Cancel*设置为**True**可使焦点保留在此控件上。

语法：*object*\_**Validate**( *Cancel* **As Boolean** )