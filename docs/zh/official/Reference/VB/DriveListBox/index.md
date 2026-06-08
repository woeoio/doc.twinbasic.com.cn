---
title: DriveListBox
parent: VB Package
permalink: /tB/Packages/VB/DriveListBox/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c1b63425-fa79-4f64-9616-8399287e38c7'
  PropagateID: 'c1b63425-fa79-4f64-9616-8399287e38c7'
  ReservedCode1: 'c9b33f53-3d80-4a8b-a4d3-fb0318db3250'
  ReservedCode2: 'c9b33f53-3d80-4a8b-a4d3-fb0318db3250'
---

# DriveListBox 类

**DriveListBox** 是一个 Win32 原生下拉组合框控件，自动填充操作系统报告的驱动器列表。用户从列表中选择一个驱动器；代码通过 [**Drive**](#drive) 读取所选驱动器，通常将其传递给 [**DirListBox**](/official/Reference/VB/DirListBox/)（可直接赋值给其 [**Path**](/official/Reference/VB/DirListBox/#path) 属性），并与 [**FileListBox**](/official/Reference/VB/FileListBox/) 一起构建文件选择器。该控件通常在设计时放置在 **Form** 或 **UserControl** 上。默认属性为 [**Drive**](#drive)，默认事件为 [**Change**](#change)。

```vb
Private Sub Form_Load()
    Drive1.Drive = "C:"
    Dir1.Path = Drive1.Drive
    File1.Path = Dir1.Path
End Sub

Private Sub Drive1_Change()
    Dir1.Path = Drive1.Drive
End Sub
```


## 驱动器列表

当底层窗口创建时，列表通过向操作系统查询所有当前连接的驱动器自动填充。每个条目将驱动器字母与卷标组合，或者---对于网络驱动器---与驱动器映射到的 UNC 路径组合：

| 条目格式          | 含义                                                          |
|----------------------|------------------------------------------------------------------|
| `c: [Windows]`       | 固定或可移动磁盘；方括号中为卷标。               |
| `d:`（无方括号）   | 驱动器存在但无卷标（未格式化，或空 CD-ROM）。|
| `z: [\\srv\share]`   | 网络驱动器；方括号中为 UNC 路径。                             |

每个条目为自绘模式，图标根据驱动器类型选择---关闭的磁盘、可移动、固定、CD-ROM、网络或 RAM 磁盘。列表不能通过代码编辑：[**AddItem**](/official/Reference/VB/ComboBox/#additem)、[**RemoveItem**](/official/Reference/VB/ComboBox/#removeitem) 和 [**Clear**](/official/Reference/VB/ComboBox/#clear) 存在于类型库中仅为了 VB6 源代码兼容性，但调用时会引发运行时错误 438（*对象不支持此属性或方法*）。调用 [**Refresh**](#refresh) 可从操作系统重新读取驱动器集合---在插入可移动介质或映射网络驱动器后很有用。

[**ListCount**](#listcount) 是条目数，[**List**](#list) 通过从零开始的索引返回任意条目的文本，[**TopIndex**](#topindex) 控制下拉部分打开时的垂直滚动。[**NewIndex**](#newindex) 报告列表填充期间最后添加的条目位置（仅在从代码重新读取列表时有意义）。

## Drive 属性语义

读取 [**Drive**](#drive) 返回当前选中条目的*显示文本*---驱动器字母、冒号以及（如适用）方括号中的卷标或 UNC 路径，与组合框中显示的完全一致。

对 [**Drive**](#drive) 赋值仅检查值的**第一个字符**，并选择驱动器字母匹配的条目（不区分大小写，按前缀匹配）。第一个字符之后的任何内容都被忽略，因此 `"C"`、`"C:"` 和 `"C:\Windows"` 都会选择 **C:** 驱动器。如果没有条目与该字母匹配（例如，请求的驱动器当前未连接），赋值将被静默忽略，保持先前的选择不变。赋值与当前选择相同的值不会引发 [**Change**](#change)；赋值不同的值则会引发。

```vb
Drive1.Drive = "D"          ' 如果驱动器 D 存在则选择，否则无操作
Debug.Print Drive1.Drive    ' "d: [Backup]"（显示文本）
```

## OLE 拖放

[**OLEDropMode**](#oledropmode) 允许控件作为放置目标（仅限 **vbOLEDropNone** 或 **vbOLEDropManual**）。此控件不支持源端自动 OLE 拖动---VB6 的 `OLEDragMode` 属性在此控件上无效，在 twinBASIC 中已省略。如果需要手动拖动，可从代码调用 [**OLEDrag**](#oledrag)。

## 属性

### Appearance

确定操作系统如何绘制控件边框。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants) 的成员：**vbAppearFlat** 或 **vbAppear3d**（默认）。

### BackColor

下拉列表条目的背景色，类型为 **OLE_COLOR**。默认为系统窗口背景色。选中的条目使用系统高亮色绘制，不受此设置影响。更改此属性会调用 [**Refresh**](#refresh)，使新颜色立即生效。

### CausesValidation

确定在此控件获得焦点之前，先前聚焦控件的 [**Validate**](#validate) 事件是否运行。**Boolean**，默认 **True**。

### ControlType

只读的 [**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants) 值，将此控件标识为驱动器列表框。始终为 **vbDriveListBox**。

### DragIcon

在控件被拖放时用作鼠标光标的 **StdPicture**（参见 [**Drag**](#drag) 和 [**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时自动拖动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants) 的成员：**vbManual**（0，默认---从代码调用 [**Drag**](#drag)）或 **vbAutomatic**（1）。

### Drive

当前选中的驱动器。**默认属性。**

语法：*object*.**Drive** [ = *string* ]

读取时返回选中条目的显示文本---驱动器字母、冒号以及（如适用）方括号中的卷标或 UNC 路径。写入时仅检查 *string* 的第一个字符并选择驱动器字母匹配的条目；与任何现有驱动器不匹配的值将被静默忽略。赋值更改选择时会引发 [**Change**](#change)。详见上文的 [Drive 属性语义](#drive-property-semantics)。

### Enabled

确定控件是否接受用户输入。禁用的驱动器列表框仍显示当前选择，但变灰并忽略键盘和鼠标交互。**Boolean**，默认 **True**。

### Font

用于渲染驱动器条目的 **StdFont**。便捷属性 **FontName**、**FontSize**、**FontBold**、**FontItalic**、**FontStrikethru** 和 **FontUnderline** 读取或写入此对象的相应成员。

### ForeColor

未选中条目的文本颜色，类型为 **OLE_COLOR**。默认为系统窗口文本色。禁用的条目使用系统灰色文本色绘制，选中的条目使用系统高亮文本色绘制，不受此设置影响。更改此属性会调用 [**Refresh**](#refresh)。

### Height

下拉框关闭时控件的高度，默认以缇为单位（或使用容器的 **ScaleMode** 单位）。**Single**。下拉部分的大小由操作系统决定。

### HelpContextID

一个 **Long**，标识应用程序帮助文件中的主题，当控件有焦点时用户按 **F1** 会检索此值。

### hWnd

底层组合框的 Win32 窗口句柄，类型为 **LongPtr**。只读。适用于传递给 API 函数。

### Index

当控件是控件数组的一部分时，此实例在数组中的 **Long** 类型从零开始的索引。运行时只读。

### Left

从容器的左边缘到控件左边缘的水平距离。**Single**。

### List

指定索引处驱动器条目的显示文本。只读。

语法：*object*.**List**( *Index* )

*Index*
: *必需* 一个 **Long** 类型的从零开始的条目位置，从 `0` 到 `ListCount - 1`。

### ListCount

列表中当前驱动器条目的数量，类型为 **Long**。只读。

### ListIndex

选中条目的从零开始的索引，如果未选中任何条目则为 `-1`。**Long**。赋值与当前值不同的值会选中该条目并引发 [**Change**](#change)。

### MouseIcon

当 [**MousePointer**](#mousepointer) 为 **vbCustom** 且指针位于控件上方时用作鼠标光标的 **StdPicture**。

### MousePointer

指针位于控件上方时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants) 的成员。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### NewIndex

最近一次列表填充步骤插入条目的从零开始的索引，如果列表为空则为 `-1`。**Long**。在列表填充期间更新（[**Initialize**](#initialize) 期间和 [**Refresh**](#refresh) 之后）；运行时很少使用，但某些 VB6 兼容代码会读取此值。

### OLEDropMode

控件如何响应 OLE 放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants) 的受限成员：**vbOLEDropNone** 或 **vbOLEDropManual**。DriveListBox 不支持自动放置模式。

### Opacity

控件的不透明度百分比（0--100，默认 100）。范围外的值在 **Initialize** 时被钳位。子控件需要 Windows 8 或更高版本。

### Parent

对包含此控件的 **Form**（或 **UserControl**）的引用。只读。

### TabIndex

控件在窗体 TAB 键导航顺序中的位置。**Long**。

### TabStop

用户是否可以通过按 **TAB** 键到达此控件。**Boolean**，默认 **True**。禁用的控件无论此设置如何都会被跳过。

### Tag

一个自由格式的 **String**，应用程序可用于将自定义数据与控件关联。框架忽略此属性。

### ToolTipText

当用户将鼠标悬停在控件上方时作为工具提示显示的多行 **String**。

### Top

从容器顶部到控件顶部的垂直距离。**Single**。

### TopIndex

下拉部分顶部显示的条目的从零开始的索引。赋值会滚动列表使该条目位于顶部，并在值实际更改时引发 [**Scroll**](#scroll)。**Long**。

### TransparencyKey

一个 **OLE_COLOR**，设置后在渲染的控件中变为完全透明。默认 `-1` 禁用此效果。子控件需要 Windows 8 或更高版本。

### Visible

控件是否显示。**Boolean**，默认 **True**。

### VisualStyles

绘制控件时是否使用操作系统主题引擎。**Boolean**。

### WhatsThisHelpID

一个 **Long**，标识应用程序帮助文件中的"这是什么？"帮助弹出主题。参见 [**ShowWhatsThis**](#showwhatsthis)。

### WheelScrollEvent

当为 **True**（默认）时，下拉列表上的鼠标滚轮通知会引发 [**Scroll**](#scroll) 事件；当为 **False** 时，滚轮仍会滚动列表但 [**Scroll**](#scroll) 被抑制。**Boolean**。VB6 从未为滚轮事件引发 **Scroll**；将此设置为 **False** 可完全匹配该行为。

### Width

控件的宽度。**Single**。

## 方法

### Drag

当 [**DragMode**](#dragmode) 为 **vbManual** 时，开始、完成或取消手动拖放操作。DriveListBox 本身不引发鼠标事件，因此调用通常位于父 **Form** 或容器的鼠标处理程序中。

语法：*object*.**Drag** [ *Action* ]

*Action*
: *可选* [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants) 的成员：**vbCancel**（0）、**vbBeginDrag**（1，默认）或 **vbEndDrag**（2）。

### Move

在单次调用中重新定位并可选地调整控件大小。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 一个 **Single**，给出新的水平位置。

*Top*、*Width*、*Height*
: *可选* 对应属性的新值。省略的值保持不变。

### OLEDrag

从控件发起 OLE 拖动操作，引发 [**OLEStartDrag**](#olestartdrag) 事件以便应用程序填充 **DataObject**。

语法：*object*.**OLEDrag**

### Refresh

从操作系统重新读取当前连接的驱动器集合，重新填充列表，然后重绘控件。在插入可移动介质或映射/断开网络驱动器后很有用---控件本身不会监视这些事件。不会引发 [**Change**](#change)，即使先前选中的驱动器不再存在（选择会移到条目 `0`）。

语法：*object*.**Refresh**

### SetFocus

将输入焦点移至控件。控件必须同时 [**Visible**](#visible) 和 [**Enabled**](#enabled)，否则引发运行时错误 5（*无效的过程调用或参数*）。

语法：*object*.**SetFocus**

### ShowWhatsThis

以"这是什么？"弹出窗口的形式显示由 [**WhatsThisHelpID**](#whatsthishelpid) 标识的主题。

语法：*object*.**ShowWhatsThis**

### ZOrder

将控件置于其同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants) 的成员：**vbBringToFront**（0，默认）或 **vbSendToBack**（1）。

## 事件

### Change

在选中的驱动器更改后引发---无论是用户从下拉列表中选择了不同的条目，还是代码向 [**Drive**](#drive) 或 [**ListIndex**](#listindex) 赋了不同的值。与当前选择匹配的赋值不会引发此事件，[**Refresh**](#refresh) 或 [**Initialize**](#initialize) 之前的初始填充期间也不会引发。**默认事件。**

语法：*object*\_**Change**( )

### CloseUp

当下拉部分关闭时引发---可能是因为用户选择了条目、点击了其他位置或按了 **Esc**。

语法：*object*\_**CloseUp**( )

### DragDrop

当手动拖动操作在目标控件上结束时，在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

当手动拖动操作进行时，在光标下方的控件上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### DropDown

当用户打开下拉部分时引发。

语法：*object*\_**DropDown**( )

### GotFocus

当控件获得输入焦点时引发。

语法：*object*\_**GotFocus**( )

### Initialize

在底层窗口创建且初始驱动器列表已加载后立即引发一次。twinBASIC 新增---VB6 在此控件上没有等效事件。

语法：*object*\_**Initialize**( )

### KeyDown

当控件有焦点时用户按下任意键引发。

语法：*object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

当用户输入产生 ANSI 按键的字符时引发。

语法：*object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

当控件有焦点时用户释放按键引发。

语法：*object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LostFocus

当控件失去输入焦点时引发。

语法：*object*\_**LostFocus**( )

### OLECompleteDrag

当 OLE 拖动操作完成时，在源控件上引发，指示目标接受了哪种效果（复制、移动、无）。

语法：*object*\_**OLECompleteDrag**( *Effect* **As Long** )

### OLEDragDrop

当用户在目标控件上放置数据时，在目标控件上引发。

语法：*object*\_**OLEDragDrop**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### OLEDragOver

当 OLE 拖动经过目标控件时，在目标控件上引发。

语法：*object*\_**OLEDragOver**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### OLEGiveFeedback

在拖动期间在源控件上引发，以便应用程序调整光标或其他视觉反馈。

语法：*object*\_**OLEGiveFeedback**( *Effect* **As Long**, *DefaultCursors* **As Boolean** )

### OLESetData

当目标请求已注册但尚未提供的数据格式时，在源控件上引发。

语法：*object*\_**OLESetData**( *Data* **As DataObject**, *DataFormat* **As Integer** )

### OLEStartDrag

在 OLE 拖动开始时在源控件上引发，以便应用程序填充 **DataObject** 并选择允许的效果。

语法：*object*\_**OLEStartDrag**( *Data* **As DataObject**, *AllowedEffects* **As Long** )

### Scroll

当下拉列表被滚动时引发---通过滚动条、键盘或（当 [**WheelScrollEvent**](#wheelscrollevent) 为 **True** 时）鼠标滚轮。新的偏移可从 [**TopIndex**](#topindex) 读取。

语法：*object*\_**Scroll**( )

### Validate

当焦点正在移动到另一个 [**CausesValidation**](#causesvalidation) 为 **True** 的控件时引发。将 *Cancel* 设置为 **True** 可使焦点保持在此控件上。

语法：*object*\_**Validate**( *Cancel* **As Boolean** )