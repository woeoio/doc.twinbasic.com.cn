---
title: TextBox
parent: VB Package
permalink: /tB/Packages/VB/TextBox/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '849a94c7-f320-45b8-9bb7-84018c318945'
  PropagateID: '849a94c7-f320-45b8-9bb7-84018c318945'
  ReservedCode1: '89523cc4-2b41-4833-b622-d5b2de8d85a6'
  ReservedCode2: '89523cc4-2b41-4833-b622-d5b2de8d85a6'
---

# TextBox 类

**TextBox** 是一个 Win32 原生编辑控件，允许用户输入和编辑文本。它可配置为单行字段（默认）或带可选滚动条的多行编辑器，可以掩码内容用于密码输入，限制仅接受数字输入，以及在为空时显示占位符"提示横幅"。

该控件通常在设计时放置在[**Form**](/official/Reference/VB/Form/)或**UserControl**上。默认属性为[**Text**](#text)，默认设计器事件为[**Change**](#change)。

```vb
Private Sub Form_Load()
    Text1.MultiLine  = True
    Text1.ScrollBars = vbVertical
    Text1.TextHint   = "Type your message here..."
End Sub

Private Sub Text1_Change()
    lblCount.Caption = Len(Text1.Text) & " characters"
End Sub
```


## 单行和多行模式

[**MultiLine**](#multiline)在单行编辑（默认）和多行编辑器之间选择：

- **单行。** 控件接受单行文本。按下**Enter**不会插入换行符——它由窗体的默认按钮（如果有）处理。[**ScrollBars**](#scrollbars)和大多数自动换行设置被忽略。
- **多行。** 控件接受并显示多行文本，根据客户端宽度自动换行。**Enter**在控件内插入换行符。[**ScrollBars**](#scrollbars)决定显示水平、垂直、两者还是不显示滚动条。

在运行时更改[**MultiLine**](#multiline)、[**ScrollBars**](#scrollbars)或[**HideSelection**](#hideselection)会重新创建底层窗口——内容、当前的[**MaxLength**](#maxlength)、[**PasswordChar**](#passwordchar)和[**Locked**](#locked)状态在重建过程中保持不变。

## 密码掩码

当[**PasswordChar**](#passwordchar)设置为非空字符串时，该字符串的第一个字符将显示在用户键入的每个字符的位置。读取[**Text**](#text)仍返回真实字符。将[**PasswordChar**](#passwordchar)设置回空字符串可恢复正常显示。

密码掩码是单行编辑功能——在[**MultiLine**](#multiline)为**True**时设置[**PasswordChar**](#passwordchar)对显示文本没有可见效果。

```vb
txtPassword.PasswordChar = "•"      ' 为每个字符显示一个圆点
```

## 提示横幅

[**TextHint**](#texthint)设置一个占位符字符串，当[**Text**](#text)为空时以暗淡颜色显示——用于提示预期内容而不占据实际文本。默认情况下，控件获得焦点后提示即隐藏；将[**TextHintAlways**](#texthintalways)设置为**True**可使提示在空控件获得焦点时仍然可见（直到用户开始输入）。

## 选区

[**SelStart**](#selstart)、[**SelLength**](#sellength)和[**SelText**](#seltext)读取和修改用户的文本选区。在没有活动选区时读取其中任何一个会返回插入符位置和空的[**SelText**](#seltext)。设置[**SelStart**](#selstart)或[**SelLength**](#sellength)会将插入符滚动到可见区域；设置[**SelText**](#seltext)会将当前选区替换为指定字符串，并将插入符定位到插入文本之后。

默认情况下，控件失去焦点时选区高亮即隐藏。将[**HideSelection**](#hideselection)设置为**False**可在另一个控件获得焦点时仍保持高亮可见——当应用程序需要在搜索或验证后引起用户注意某个文本范围时很有用。

## 仅限数字

当[**NumbersOnly**](#numbersonly)为**True**时，编辑控件会静默拒绝任何非十进制数字的按键。符号字符、小数分隔符和千位分隔符*不被*接受——该属性是操作系统**ES_NUMBER**样式的简单封装，仅提供数字过滤。请使用[**KeyPress**](#keypress)处理程序进行更复杂的验证。

## OLE 拖放

[**OLEDragMode**](#oledragmode)控制源端拖动。当设置为**vbOLEDragAutomatic**时，在编辑区域拖动选中文本会启动 OLE 拖动操作，其有效载荷为选中的文本；如果目标以**vbDropEffectMove**接受放置，则选中的范围会从文本框中移除。

[**OLEDropMode**](#oledropmode)控制放置目标行为：**vbOLEDropNone**忽略放置，**vbOLEDropManual**触发[**OLEDragOver**](#oledragover)和[**OLEDragDrop**](#oledragdrop)以便应用程序决定如何处理，**vbOLEDropAutomatic**让框架在插入符位置插入放置的文本而不触发这些事件。

## 数据绑定

设置[**DataSource**](#datasource)和[**DataField**](#datafield)可将控件的[**Text**](#text)连接到[**Data**](/official/Reference/VB/Data/)控件记录集的字段。绑定值在每次行更改时作为字符串读取（**Null**字段变为空字符串），当前[**Text**](#text)在行保存时写回。修改[**Text**](#text)——无论是通过用户输入还是代码赋值——都会设置[**DataChanged**](#datachanged)并将记录集行标记为已修改。

## 属性

### Alignment

控件内文本的水平对齐方式。

语法：*object*.**Alignment** [ = *value* ]

*value*
: [**AlignmentConstants**](/official/Reference/VBRUN/Constants/AlignmentConstants)的成员：**vbLeftJustify**（0，默认）、**vbRightJustify**（1）或**vbCenter**（2）。当平台编辑控件在单行模式下不原生支持居中和右对齐时，需要[**MultiLine**](#multiline)为**True**；tB 在两种模式下均支持。

### Anchors

父容器边缘的集合，文本框的对应边缘在父容器调整大小时跟随。只读——通过返回的**Anchors**对象分配各自的`.Left`、`.Top`、`.Right`、`.Bottom`标志。

### Appearance

决定操作系统如何绘制控件边框。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。仅在[**BorderStyle**](#borderstyle)为**vbFixedSingleBorder**时有意义——在凹陷的 3D 边缘和薄平边框之间选择。

### BackColor

编辑区的背景色，为**OLE_COLOR**。默认为系统窗口背景色。

### BorderStyle

文本框是否绘制边框。[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants)的成员：**vbNoBorder**（0）或**vbFixedSingleBorder**（1，默认）。边框的具体外观取决于[**Appearance**](#appearance)。

### CausesValidation

决定先前焦点控件的[**Validate**](#validate)事件是否在此控件获得焦点之前运行。**Boolean**，默认**True**。

### Container

承载此文本框的控件——通常是窗体、[**Frame**](/official/Reference/VB/Frame/)或[**PictureBox**](/official/Reference/VB/PictureBox/)。使用**Get**读取，使用**Set**更改。在运行时设置**Container**会重新设定文本框的父容器。

### ControlType

标识此控件为文本框的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbTextBox**。

### DataChanged

运行时只读的**Boolean**，当[**Text**](#text)自上次保存后被修改时变为**True**，在更改写回记录集后清除。

### DataField

绑定[**DataSource**](#datasource)记录集中由[**Text**](#text)镜像的字段名称。**String**。

### DataFormat

::: info
保留用于 VB6 兼容性；twinBASIC 中当前未实现。
:::

一个**StdDataFormat**，用于在原始记录集值和显示文本之间进行转换。

### DataMember

::: info
保留用于 VB6 兼容性；twinBASIC 中当前未实现。
:::

当[**DataSource**](#datasource)公开多个记录集时，要绑定的成员名称。

### DataSource

对[**Data**](/official/Reference/VB/Data/)控件（或其他**DataSource**提供程序）的引用，其记录集为[**DataField**](#datafield)提供值。使用**Set**设置。

### Dock

文本框在其容器内的停靠位置。[**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants)的成员：**vbDockNone**（默认）、**vbDockLeft**、**vbDockTop**、**vbDockRight**、**vbDockBottom**或**vbDockFill**。停靠的文本框忽略[**Anchors**](#anchors)。

### DragIcon

控件拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否在用户按住鼠标时自行拖动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual**（0，默认——从代码调用[**Drag**](#drag)）或**vbAutomatic**（1）。

### Enabled

决定控件是否接受用户输入。禁用的文本框显示当前文本但呈暗淡状态，忽略键盘和鼠标交互。**Boolean**，默认**True**。

### Font

用于渲染文本的**StdFont**。便利属性[**FontName**](#fontname)、[**FontSize**](#fontsize)、[**FontBold**](#fontbold)、[**FontItalic**](#fontitalic)、[**FontStrikethru**](#fontstrikethru)和[**FontUnderline**](#fontunderline)读取或写入此对象的相应成员。

### FontBold

[**Font**](#font)`.Bold`的快捷方式。**Boolean**。

### FontItalic

[**Font**](#font)`.Italic`的快捷方式。**Boolean**。

### FontName

[**Font**](#font)`.Name`的快捷方式。**String**。

### FontSize

[**Font**](#font)`.Size`的快捷方式——磅值。**Single**。

### FontStrikethru

[**Font**](#font)`.Strikethrough`的快捷方式。**Boolean**。

### FontUnderline

[**Font**](#font)`.Underline`的快捷方式。**Boolean**。

### ForeColor

文本颜色，为**OLE_COLOR**。默认为系统窗口文本颜色。

### Height

控件的高度，默认以缇为单位（或容器**ScaleMode**单位）。**Single**。

### HelpContextID

标识应用程序帮助文件中主题的**Long**，当用户在控件获得焦点时按**F1**时检索。

### HideSelection

当**True**（默认）时，控件失去焦点时选区高亮即隐藏；当**False**时，焦点移到其他位置后高亮仍保持可见。**Boolean**。在运行时更改会重新创建底层窗口。

### hWnd

底层编辑控件的 Win32 窗口句柄，为**LongPtr**。只读。适用于传递给 API 函数。

### Index

当控件是控件数组的一部分时，此实例在数组中的**Long**零基索引。在非数组实例上读取**Index**会引发运行时错误 343（*Object not an array*）。运行时只读。

### Left

从容器的左边缘到控件左边缘的水平距离。**Single**。

### LinkItem

::: info
保留用于 VB6 DDE 兼容性；twinBASIC 中当前未实现。
:::

### LinkMode

::: info
保留用于 VB6 DDE 兼容性；twinBASIC 中当前未实现。
:::

[**LinkModeConstants**](/official/Reference/VBRUN/Constants/LinkModeConstants)的成员。

### LinkTimeout

::: info
保留用于 VB6 DDE 兼容性；twinBASIC 中当前未实现。
:::

### LinkTopic

::: info
保留用于 VB6 DDE 兼容性；twinBASIC 中当前未实现。
:::

### Locked

当**True**时，用户可以滚动、选择和复制文本但不能修改。**Boolean**，默认**False**。与[**Enabled**](#enabled)不同——锁定的文本框仍正常绘制并继续触发焦点和鼠标事件，而禁用的文本框呈暗淡状态并完全忽略输入。

### MaxLength

用户可在控件中键入的最大字符数。**Long**，默认`0`——为零时，操作系统施加其自身限制（单行通常为 32 767 个字符，多行大得多）。将**MaxLength**设置为低于当前文本长度不会截断已有内容，但会阻止进一步键入，直到用户删除足够的字符。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于控件上方时用作鼠标光标的**StdPicture**。

### MousePointer

指针位于控件上方时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### MultiLine

当**True**时，控件接受多行文本，显示自动换行，并将**Enter**路由为插入换行符。当**False**（默认）时，控件容纳单行。**Boolean**。在运行时更改会重新创建底层窗口。

### Name

控件在父窗体上的唯一设计时名称。运行时只读。

### NumbersOnly

当**True**时，编辑控件拒绝除十进制数字**0**--**9**之外的按键。**Boolean**，默认**False**。不验证代码赋值的值、符号字符、小数点或千位分隔符——请使用[**KeyPress**](#keypress)处理程序进行额外验证。

### OLEDragMode

控件的选中文本是否可作为自动 OLE 拖动源。[**OLEDragConstants**](/official/Reference/VBRUN/Constants/OLEDragConstants)的成员：**vbOLEDragManual**（0，默认——从代码调用[**OLEDrag**](#oledrag)）或**vbOLEDragAutomatic**（1）。

### OLEDropMode

控件如何响应 OLE 放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的成员：**vbOLEDropNone**、**vbOLEDropManual**或**vbOLEDropAutomatic**（在插入符位置插入放置的文本而不触发[**OLEDragDrop**](#oledragdrop)）。

### Opacity

控件的不透明度百分比（0--100，默认 100）。超出范围的值在**Initialize**时被钳制。子控件需要 Windows 8 或更高版本。

### Parent

对最终包含此控件的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）的引用。只读。与[**Container**](#container)不同，后者返回直接父容器。

### PasswordChar

一个**String**，其第一个字符显示在每个键入字符的位置以掩码屏幕内容。**String**，默认为空（无掩码）。读取[**Text**](#text)仍返回真实字符。仅在单行模式下有效。

### RightToLeft

::: info
保留用于 VB6 兼容性；twinBASIC 中当前未实现。
:::

### ScrollBars

多行文本框显示哪些滚动条。[**ScrollBarConstants**](/official/Reference/VBRUN/Constants/ScrollBarConstants)的成员：**vbSBNone**（0，默认）、**vbHorizontal**（1）、**vbVertical**（2）或**vbBoth**（3）。当[**MultiLine**](#multiline)为**False**时忽略。在运行时更改会重新创建底层窗口。

当自动换行的多行文本框启用垂直滚动条时，水平滚动条会禁用自动换行——行将延伸超出右边缘而不换行。

### SelLength

当前选中的字符数。**Long**。设置它会从[**SelStart**](#selstart)扩展或收缩选区，并将插入符滚动到可见区域。

### SelStart

选区起始的零基位置，或无文本选中时的插入符位置。**Long**。设置它会清除现有选区，将插入符移动到新位置，并将插入符滚动到可见区域。

### SelText

当前选中的文本。赋值字符串会替换选区并将插入符定位到插入文本之后。**String**。

### TabFocusAutoSelect

当**True**（默认）时，用户通过**TAB**键将焦点移入文本框时自动选中全部内容。**Boolean**。父窗体的`TabFocusAutoSelect`属性也必须为**True**此设置才生效——当窗体级开关为**False**时，每控件的值被忽略。

### TabIndex

控件在窗体 TAB 键导航顺序中的位置。**Long**。

### TabStop

用户是否可以通过按**TAB**键到达控件。**Boolean**，默认**True**。禁用的控件无论此设置如何都会被跳过。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架不使用此属性。

### Text

控件中显示的文本。**String**。**默认属性。**

语法：*object*.**Text** [ = *string* ]

赋值与当前值不同的值会触发[**Change**](#change)事件并刷新显示。赋值相同的值为无操作。在多行模式下，换行符使用平台的原生换行编码存储（Windows 上为`vbCrLf`）。

### TextHint

当[**Text**](#text)为空时以暗淡颜色显示的占位符**String**——Win32 *提示横幅*。默认为空（无提示）。用户开始输入后提示即消失。

### TextHintAlways

当**True**时，[**TextHint**](#texthint)在空控件获得输入焦点时也显示；当**False**（默认）时，控件获得焦点后提示即消失。**Boolean**。

### ToolTipText

当用户将鼠标悬停在控件上方时显示为工具提示的多行**String**。

### Top

从容器顶部到控件顶部的垂直距离。**Single**。

### TransparencyKey

一个**OLE_COLOR**，设置后在渲染的控件中变为完全透明。默认`-1`禁用效果。子控件需要 Windows 8 或更高版本。

### Visible

控件是否可见。**Boolean**，默认**True**。

### VisualStyles

绘制控件时是否使用操作系统主题引擎。**Boolean**，默认**True**。

### WhatsThisHelpID

标识应用程序帮助文件中"这是什么？"帮助弹出主题的**Long**。参见[**ShowWhatsThis**](#showwhatsthis)。

### WheelScrollEvent

当**True**（默认）时，多行文本框上的鼠标滚轮通知触发[**Scroll**](#scroll)事件；当**False**时，滚轮仍滚动内容但[**Scroll**](#scroll)被抑制。**Boolean**。VB6 不会为滚轮事件触发**Scroll**；将此设置为**False**可完全匹配该行为。

### Width

控件的宽度。**Single**。

## 方法

### Drag

开始、完成或取消手动拖放操作。通常在[**DragMode**](#dragmode)为**vbManual**时从[**MouseDown**](#mousedown)处理程序调用。

语法：*object*.**Drag** [ *Action* ]

*Action*
: *可选* [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants)的成员：**vbCancel**（0）、**vbBeginDrag**（1，默认）或**vbEndDrag**（2）。

### LinkExecute

::: info
保留用于 VB6 DDE 兼容性；twinBASIC 中当前未实现。
:::

### LinkPoke

::: info
保留用于 VB6 DDE 兼容性；twinBASIC 中当前未实现。
:::

### LinkRequest

::: info
保留用于 VB6 DDE 兼容性；twinBASIC 中当前未实现。
:::

### LinkSend

::: info
保留用于 VB6 DDE 兼容性；twinBASIC 中当前未实现。
:::

### Move

在单次调用中重新定位并可选地调整控件大小。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**。

*Top*、*Width*、*Height*
: *可选* 对应属性的新值。省略的值保持不变。

### OLEDrag

从控件启动 OLE 拖动操作，触发[**OLEStartDrag**](#olestartdrag)事件以便应用程序填充**DataObject**。

语法：*object*.**OLEDrag**

### Refresh

强制控件立即重绘。

语法：*object*.**Refresh**

### SetFocus

将输入焦点移至控件。控件必须同时为[**Visible**](#visible)和[**Enabled**](#enabled)，否则引发运行时错误 5（*Invalid procedure call or argument*）。

语法：*object*.**SetFocus**

### ShowWhatsThis

将[**WhatsThisHelpID**](#whatsthishelpid)标识的主题显示为"这是什么？"弹出窗口。

语法：*object*.**ShowWhatsThis**

### ZOrder

将控件置于同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront**（0，默认）或**vbSendToBack**（1）。

## 事件

### Change

当[**Text**](#text)更改时触发——无论是通过用户输入还是代码赋值。在[**Initialize**](#initialize)期间不触发；从序列化窗体加载的首次文本不会产生**Change**事件。**默认设计器事件。**

语法：*object*\_**Change**( )

### Click

当用户用任何鼠标按钮单击控件时触发。当鼠标按下被此控件捕获且点击不是来自双击时，从[**MouseUp**](#mouseup)处理程序发出。

语法：*object*\_**Click**( )

### DblClick

当用户双击控件时触发。抑制否则会从第二次[**MouseUp**](#mouseup)触发的合成[**Click**](#click)。

语法：*object*\_**DblClick**( )

### DragDrop

当手动拖动操作在目标控件上结束时在该控件上触发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

当手动拖动操作进行中时在光标下方的控件上触发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### GotFocus

当控件获得输入焦点时触发。

语法：*object*\_**GotFocus**( )

### Initialize

在底层窗口创建后触发一次，[**Text**](#text)、[**Locked**](#locked)、[**MaxLength**](#maxlength)、[**TextHint**](#texthint)和[**PasswordChar**](#passwordchar)已从序列化数据应用。[**Change**](#change)不会为此初始文本加载而触发。

语法：*object*\_**Initialize**( )

### KeyDown

当用户在控件获得焦点时按下任何键时触发。

语法：*object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

当用户键入产生 ANSI 击键的字符时触发。

语法：*object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

当用户在控件获得焦点时释放键时触发。

语法：*object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LinkClose

::: info
保留用于 VB6 DDE 兼容性；twinBASIC 中当前未实现。
:::

### LinkError

::: info
保留用于 VB6 DDE 兼容性；twinBASIC 中当前未实现。
:::

### LinkNotify

::: info
保留用于 VB6 DDE 兼容性；twinBASIC 中当前未实现。
:::

### LinkOpen

::: info
保留用于 VB6 DDE 兼容性；twinBASIC 中当前未实现。
:::

### LostFocus

当控件失去输入焦点时触发。

语法：*object*\_**LostFocus**( )

### MouseDown

当用户在控件上方按下任何鼠标按钮时触发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

当光标在控件上方移动时触发。当[**OLEDragMode**](#oledragmode)为**vbOLEDragAutomatic**时，**MouseMove**还跟踪光标是否在选中文本上方，以便 IBeam 光标在自动拖动前切换为指针。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

当用户在控件上方释放鼠标按钮时触发。

语法：*object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseWheel

当用户在控件获得焦点或光标在其上方时旋转鼠标滚轮时触发。twinBASIC 新增——无对等的 VB6 事件。

语法：*object*\_**MouseWheel**( *Delta* **As Integer**, *Horizontal* **As Boolean** )

*Delta*
: 以`WHEEL_DELTA`（120）为单位的正或负滚动增量。

*Horizontal*
: **True**表示水平滚轮旋转，**False**表示标准垂直滚轮。

### OLECompleteDrag

当 OLE 拖动操作完成时在源控件上触发，指示目标接受了哪种效果（复制、移动、无）。

语法：*object*\_**OLECompleteDrag**( *Effect* **As Long** )

### OLEDragDrop

当用户将数据放置在目标控件上时触发（当[**OLEDropMode**](#oledropmode)为**vbOLEDropManual**时）。

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

在 OLE 拖动开始时在源控件上触发，以便应用程序可以填充**DataObject**并选择允许的效果。当[**OLEDragMode**](#oledragmode)为**vbOLEDragAutomatic**且用户从非空选区开始拖动时也会自动触发。

语法：*object*\_**OLEStartDrag**( *Data* **As DataObject**, *AllowedEffects* **As Long** )

### Scroll

当多行文本框被滚动时触发——通过滚动条（包括拖动滑块）、键盘或鼠标滚轮。滚轮驱动的滚动可通过将[**WheelScrollEvent**](#wheelscrollevent)设置为**False**来抑制。twinBASIC 新增——无对等的 VB6 事件。

语法：*object*\_**Scroll**( )

### Validate

当焦点移动到[**CausesValidation**](#causesvalidation)为**True**的另一个控件时触发。将*Cancel*设置为**True**可将焦点保持在此控件上。

语法：*object*\_**Validate**( *Cancel* **As Boolean** )