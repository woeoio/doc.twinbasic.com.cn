---
title: "FileListBox 文件列表框"
parent: VB Package
permalink: /tB/Packages/VB/FileListBox/
---

# FileListBox 类

**FileListBox**是一个Win32原生列表控件，显示单个目录中的文件，通过通配符模式和一组文件属性开关进行筛选。通常在设计时放置在**Form**或**UserControl**上，与[**DriveListBox**](/official/Reference/VB/DriveListBox/)和[**DirListBox**](/official/Reference/VB/DirListBox/)配对构成完整的文件选择器——它们的**Change**事件馈入**FileListBox.Path**，用户从列表中选择文件名。默认属性是[**FileName**](#filename)，默认事件是[**Click**](#click)。

```vb
Private Sub Form_Load()
    Drive1.Drive = "C:\"
    Dir1.Path = Drive1.Drive
    File1.Path = Dir1.Path
    File1.Pattern = "*.txt;*.log"
End Sub

Private Sub Drive1_Change()
    Dir1.Path = Drive1.Drive
End Sub

Private Sub Dir1_Change()
    File1.Path = Dir1.Path
End Sub

Private Sub File1_DblClick()
    OpenFile File1.PathWithBackslash & File1.FileName
End Sub
```


## Path和Pattern

[**Path**](#path)是列出文件的目录。控件首次创建时默认为[**App.Path**](/official/Reference/VB/App/#path)。从代码设置它会重新加载列表、引发[**PathChange**](#pathchange)并修剪尾部反斜杠（驱动器根目录除外）。设置不带反斜杠的纯驱动器标识符——`"C:"`——会被静默拒绝；请使用`"C:\"`。赋值不存在的路径会引发运行时错误76（*Path not found*）。[**PathWithBackslash**](#pathwithbackslash)返回始终带尾部反斜杠的相同值，与[**FileName**](#filename)拼接时很方便。

[**Pattern**](#pattern)是一个或多个用分号分隔的通配符掩码（`"*.txt;*.doc"`）。每个掩码使用**Like**运算符进行不区分大小写的匹配；文件匹配*任何*掩码都会显示。默认为`"*.*"`。设置**Pattern**会在新值与之前不同时重新加载列表并引发[**PatternChange**](#patternchange)。

## 文件属性筛选器

五个**Boolean**属性决定模式匹配后包含哪些文件：

| 属性                          | 为**True**时的含义（默认值加粗）                                                 |
|-------------------------------|-----------------------------------------------------------------------------------|
| [**Archive**](#archive)       | **包含设置了存档位的文件。**                                                       |
| [**Hidden**](#hidden)         | 包含隐藏文件。                                                                     |
| [**Normal**](#normal)         | **包含无特殊属性的文件。**                                                         |
| [**ReadOnly**](#readonly)     | **包含只读文件。**                                                                 |
| [**System**](#system)         | 包含系统文件。                                                                     |

文件所携带的每个属性都被允许时才能通过。**Normal**是特殊情况：它控制不携带*任何*属性的文件，因此在其他属性保持默认的情况下设置**Normal = False**会将列表限制为明确具有某个已包含属性的文件。更改这些属性中的任何一个都会重新加载列表并引发[**PatternChange**](#patternchange)——该事件与[**Pattern**](#pattern)共享，与VB6行为匹配，尽管名称有误导性。

## 选择文件

[**MultiSelect**](#multiselect)在单项、简单和扩展选择模式之间选择（[**MultiSelectConstants**](/official/Reference/VBRUN/Constants/MultiSelectConstants)）。更改它会重新创建底层窗口（路径、模式和当前选择会自动恢复）。

[**ListIndex**](#listindex)获取或设置焦点条目（`-1`表示无），[**FileName**](#filename)返回其文本。[**Selected**](#selected)读取或写入任何单个条目的选择状态；[**SelCount**](#selcount)计算当前选中条目数；[**SelectedIndices**](#selectedindices)以**Collection**返回它们：

```vb
Dim idx As Variant
For Each idx In File1.SelectedIndices()
    Debug.Print File1.PathWithBackslash & File1.List(idx)
Next
```

## OLE拖放

当[**OLEDragMode**](#oledragmode)设置为**vbOLEDragAutomatic**时，拖动选中的条目（或多选模式下的多个条目）会启动OLE拖动，其数据为对应的完整路径。[**OLEDropMode**](#oledropmode)控制放置目标行为，仅限于**vbOLEDropNone**或**vbOLEDropManual**。

## 属性

### Appearance

确定操作系统如何绘制控件的边框。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。与[**BorderStyle**](#borderstyle)组合使用，可选平面单线边框或凹陷的客户端边缘。

### Archive

当为**True**（默认）时，带存档属性的文件包含在列表中。**Boolean**。更改此属性会重新加载列表并引发[**PatternChange**](#patternchange)。

### BackColor

背景颜色，类型为**OLE_COLOR**。默认为系统窗口背景色。

### BorderStyle

[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants)的成员：**vbNoBorder** (0)或**vbFixedSingleBorder** (1，默认)。与[**Appearance**](#appearance)组合使用：3D外观加单线边框产生标准凹陷客户端边缘；平面外观加单线边框产生一像素轮廓线。

### CausesValidation

确定先前获得焦点的控件的[**Validate**](#validate)事件是否在此控件获得焦点之前运行。**Boolean**，默认**True**。

### ControlType

只读的[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值，将此控件标识为文件列表框。始终为**vbFileListBox**。

### DragIcon

控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时自动拖动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual** (0，默认——从代码调用[**Drag**](#drag))或**vbAutomatic** (1)。

### Enabled

确定控件是否接受用户输入。禁用的文件列表框仍显示其内容但变暗并忽略键盘和鼠标交互。**Boolean**，默认**True**。

### FileName

当前[**ListIndex**](#listindex)处文件的名称，不带任何前导路径。**默认属性。**

语法：*object*.**FileName** [ = *string* ]

读取**FileName**返回高亮条目的文本，当[**ListIndex**](#listindex)为`-1`时返回空字符串。设置**FileName**会在列表中搜索精确的不区分大小写匹配，如果找到则选中该条目；如果无匹配条目，赋值无可见效果。

### Font

用于渲染文件名的**StdFont**。便捷属性**FontName**、**FontSize**、**FontBold**、**FontItalic**、**FontStrikethru**和**FontUnderline**读写此对象的相应成员。当[**IntegralHeight**](#integralheight)为**True**时，更改字体会重新缩放每项的行高。

### ForeColor

未选中条目的文本颜色，类型为**OLE_COLOR**。默认为系统窗口文本色。禁用条目使用系统灰色文本色绘制，选中条目使用系统高亮文本色绘制，不受此设置影响。

### Height

控件的高度，默认以缇为单位（或使用容器的**ScaleMode**单位）。当[**IntegralHeight**](#integralheight)为**True**时，操作系统将其量化为整行数。**Single**。

### HelpContextID

标识应用程序帮助文件中主题的**Long**值，当用户在控件具有焦点时按**F1**时检索。

### Hidden

当为**True**时，带隐藏属性的文件包含在列表中。**Boolean**，默认**False**。更改此属性会重新加载列表并引发[**PatternChange**](#patternchange)。

### hWnd

底层列表框的Win32窗口句柄，类型为**LongPtr**。只读。可用于传递给API函数。

### Index

当控件是控件数组的一部分时，此实例在数组中的从零开始的**Long**索引。运行时只读。

### IntegralHeight

当为**True**（默认）时，操作系统调整控件高度使可见部分显示完整行而非部分行。当为**False**时，控件精确遵循[**Height**](#height)。**Boolean**。在运行时更改此属性会重新创建底层窗口。

### Left

从容器的左边缘到控件左边缘的水平距离。**Single**。

### List

条目的文本，按从零开始的位置索引。只读。

语法：*object*.**List**( *Index* )

*Index*
: *必需* 从零开始的**Long**条目位置。

### ListCount

列表中当前显示的文件数，类型为**Long**。只读。

### ListIndex

焦点条目的从零开始的索引，无焦点条目时为`-1`。**Long**。在多选模式下焦点条目和选中条目是独立的——参见[**Selected**](#selected)。赋值与当前值不同的值会聚焦该条目并引发[**Click**](#click)。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于控件上时用作鼠标光标的**StdPicture**。

### MousePointer

指针位于控件上时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### MultiSelect

选择模式。[**MultiSelectConstants**](/official/Reference/VBRUN/Constants/MultiSelectConstants)的成员：**vbMultiSelectNone** (0，默认——单项选择)、**vbMultiSelectSimple** (1——每次单击切换)或**vbMultiSelectExtended** (2——**Shift**选择范围，**Ctrl**切换单项)。在运行时更改此属性会重新创建底层窗口；当前路径、模式、顶部索引和焦点条目会恢复，但多项选择不会。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### Normal

当为**True**（默认）时，无属性位的文件包含在列表中。当为**False**时，仅显示明确携带某个已包含属性的文件。**Boolean**。更改此属性会重新加载列表并引发[**PatternChange**](#patternchange)。

### OLEDragMode

控件是否作为自动OLE拖动源。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDragConstants)的成员：**vbOLEDragManual** (0，默认——从代码调用[**OLEDrag**](#oledrag))或**vbOLEDragAutomatic** (1——拖动条目会启动OLE拖动，其**Text**数据为选中文件的完整路径，多选模式下为路径列表)。

### OLEDropMode

控件如何响应OLE放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone**或**vbOLEDropManual**。FileListBox不支持自动放置模式。

### Opacity

控件的不透明度百分比（0--100，默认100）。超出范围的值在**Initialize**时被钳制。子控件需要Windows 8或更高版本。

### Parent

对包含此控件的**Form**（或**UserControl**）的引用。只读。

### Path

列出文件的目录。**String**。控件首次创建时默认为[**App.Path**](/official/Reference/VB/App/#path)。

语法：*object*.**Path** [ = *string* ]

读取**Path**返回当前显示的目录——不带尾部反斜杠（驱动器根目录除外，始终返回为`"C:\"`）。设置**Path**会在新值与当前值不同时重新加载列表并引发[**PathChange**](#pathchange)。不带反斜杠的纯驱动器标识符（`"C:"`）会被静默拒绝；请使用`"C:\"`。赋值不存在的路径会引发运行时错误76（*Path not found*）。

### PathWithBackslash

与[**Path**](#path)相同的值，但始终带尾部反斜杠。**String**，只读。与[**FileName**](#filename)拼接构建完整路径时很方便。

### Pattern

用于筛选文件列表的通配符掩码，或分号分隔的掩码列表。**String**，默认`"*.*"`。

语法：*object*.**Pattern** [ = *string* ]

文件匹配*任何*掩码时显示（不区分大小写，使用**Like**运算符）。设置空字符串被视为`"*.*"`。更改**Pattern**会在新值与当前值不同时重新加载列表并引发[**PatternChange**](#patternchange)。

```vb
File1.Pattern = "*.txt;*.log"   ' .txt或.log文件
```

### ReadOnly

当为**True**（默认）时，带只读属性的文件包含在列表中。**Boolean**。更改此属性会重新加载列表并引发[**PatternChange**](#patternchange)。注意**ReadOnly**是twinBASIC中的保留字，必须通过成员访问（`File1.ReadOnly`）或在声明中转义（`[ReadOnly]`）来引用。

### SelCount

当前选中的条目数，类型为**Long**。只读。当[**MultiSelect**](#multiselect)为**vbMultiSelectNone**时等于`0`或`1`。

### Selected

单个条目的选择状态。

语法：*object*.**Selected**( *Index* ) [ = *boolean* ]

*Index*
: *必需* 从零开始的**Long**条目位置。

读取**Selected(*Index*)**在该条目被选中时返回**True**。赋值与当前值不同的值会更新选择并引发[**Click**](#click)；在单项选择模式（**vbMultiSelectNone**）下赋值**True**会聚焦该条目，赋值**False**无明显效果。

### System

当为**True**时，带系统属性的文件包含在列表中。**Boolean**，默认**False**。更改此属性会重新加载列表并引发[**PatternChange**](#patternchange)。

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

可见区域顶部显示条目的从零开始的索引。赋值会滚动列表使该条目位于顶部，当值实际改变时引发[**Scroll**](#scroll)。**Long**。

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

从磁盘重新读取当前[**Path**](#path)的内容并重绘控件。当目录在应用程序外部被修改时很有用——控件不会自行监视文件系统。不引发[**PathChange**](#pathchange)或[**PatternChange**](#patternchange)。

语法：*object*.**Refresh**

### SelectedIndices

以升序**Long**值的**Collection**返回每个当前选中条目的从零开始的索引。用于迭代多选而无需扫描每个索引的[**Selected**](#selected)。

语法：*object*.**SelectedIndices**

```vb
Dim idx As Variant
For Each idx In File1.SelectedIndices()
    Debug.Print File1.PathWithBackslash & File1.List(idx)
Next
```

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

### Click

焦点条目更改后引发——无论用户点击了不同的条目、使用键盘移动焦点，还是代码赋值了不同的[**ListIndex**](#listindex)或[**Selected**](#selected)值。选择被取消时也会引发。**默认事件。**

语法：*object*\_**Click**( )

### DblClick

用户双击条目时引发。与[**DirListBox**](/official/Reference/VB/DirListBox/)不同，**FileListBox**在双击时*不会*导航——通常应用程序监听**DblClick**来打开用户选择的文件。

语法：*object*\_**DblClick**( )

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

在底层窗口创建且从[**App.Path**](/official/Reference/VB/App/#path)加载初始文件列表后立即引发一次。twinBASIC新增——VB6在此控件上没有等效功能。

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

OLE拖动开始时在源控件上引发，以便应用程序填充**DataObject**并选择允许的效果。无论拖动是自动启动的（[**OLEDragMode**](#oledragmode)设置为**vbOLEDragAutomatic**）还是通过显式[**OLEDrag**](#oledrag)调用都会引发。

语法：*object*\_**OLEStartDrag**( *Data* **As DataObject**, *AllowedEffects* **As Long** )

### PathChange

在[**Path**](#path)更改后引发——通常因为代码赋值了新值。对于与当前值相同的赋值不引发。

语法：*object*\_**PathChange**( )

### PatternChange

在[**Pattern**](#pattern)更改*或*某个文件属性筛选属性——[**Archive**](#archive)、[**Hidden**](#hidden)、[**Normal**](#normal)、[**ReadOnly**](#readonly)、[**System**](#system)——更改后引发。对于与当前值相同的模式赋值不引发。共享事件与VB6行为匹配，尽管名称有误导性。

语法：*object*\_**PatternChange**( )

### Scroll

列表的可见部分滚动时引发——通过滚动条、键盘或（当[**WheelScrollEvent**](#wheelscrollevent)为**True**时）鼠标滚轮。新偏移量可从[**TopIndex**](#topindex)读取。

语法：*object*\_**Scroll**( )

### Validate

焦点移动到另一个[**CausesValidation**](#causesvalidation)为**True**的控件时引发。将*Cancel*设置为**True**可使焦点保留在此控件上。

语法：*object*\_**Validate**( *Cancel* **As Boolean** )