---
title: "ComboBox 组合框"
parent: VB Package
permalink: /tB/Packages/VB/ComboBox/
---

# ComboBox 类

**ComboBox**是一个Win32原生控件，将编辑字段与下拉列表组合在一起，允许用户键入值或从列表中选择。该控件通常在设计时放置在**Form**或**UserControl**上。默认属性是[**Text**](#text)，默认事件是[**Change**](#change)。

```vb
Private Sub Form_Load()
    With Combo1
        .AddItem "Apple"
        .AddItem "Banana"
        .AddItem "Cherry"
        .ListIndex = 0
    End With
End Sub

Private Sub Combo1_Click()
    Debug.Print "Picked: " & Combo1.Text
End Sub
```


## 样式

[**Style**](#style)选择三种Win32组合框变体之一（[**ComboBoxConstants**](/official/Reference/VBRUN/Constants/ComboBoxConstants)）：

| 常量                      | 值 | 布局                                                                   |
|---------------------------|-----|------------------------------------------------------------------------|
| **vbComboDropdown**       | 0   | 可编辑文本+下拉按钮+下拉列表。默认值。                                 |
| **vbComboSimple**         | 1   | 可编辑文本+永久可见列表（无下拉按钮）。                               |
| **vbComboDropdownList**   | 2   | 仅下拉列表——用户必须选择一个值；禁止键入。                             |

在运行时更改**Style**会重新创建底层窗口（现有列表内容和选择被保留）。[**Sorted**](#sorted)和[**IntegralHeight**](#integralheight)以相同方式重新创建窗口。

## 编辑列表

条目保存在操作系统组合框控件内部；[**List**](#list)和[**ItemData**](#itemdata)数组是对该存储的映射。条目通过[**AddItem**](#additem)添加，通过[**RemoveItem**](#removeitem)移除，整个列表通过[**Clear**](#clear)清空。每次[**AddItem**](#additem)调用后，[**NewIndex**](#newindex)报告条目插入的位置——当[**Sorted**](#sorted)为**True**且位置无法从调用预测时非常有用。

```vb
Combo1.Sorted = True
Combo1.AddItem "Cherry"
Combo1.AddItem "Apple"          ' 插入到索引0 — Combo1.NewIndex = 0
Combo1.ItemData(Combo1.NewIndex) = 42
```

## 选择和文本

[**ListIndex**](#listindex)是选中条目的索引，无选中时为`-1`。从代码设置它会高亮对应条目并引发[**Click**](#click)（仅当值实际更改时）。[**TopIndex**](#topindex)控制下拉部分打开时哪个条目出现在顶部。

[**Text**](#text)读取或写入可编辑区域，但在**vbComboDropdownList**模式下没有编辑字段——此时赋值字符串会以不区分大小写的精确匹配搜索列表，找到则选中该条目，否则不做任何操作。任何模式下读取**Text**都返回当前显示文本。

对于有编辑区域的样式（**vbComboDropdown**和**vbComboSimple**），[**SelStart**](#selstart)、[**SelLength**](#sellength)和[**SelText**](#seltext)反映或修改用户的文本选择。在**vbComboDropdownList**模式下读写这些属性会引发运行时错误380。

## OLE拖放

[**OLEDragMode**](#oledragmode)控制源端拖动（仅对有编辑区域的样式有意义——当设置为**vbOLEDragAutomatic**时，在编辑区域拖动选中文本会以该文本为数据启动OLE拖动）。[**OLEDropMode**](#oledropmode)控制放置目标行为，仅限于**vbOLEDropNone**或**vbOLEDropManual**。

## 属性

### Appearance

确定操作系统如何绘制控件的边框。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。

### BackColor

编辑区域和列表背景的颜色，类型为**OLE_COLOR**。默认为系统窗口背景色。

### BorderStyle

[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants)的成员：**vbNoBorder** (0)或**vbFixedSingleBorder** (1，默认)。在运行时更改会重新同步边框而不重新创建窗口。

### CausesValidation

确定先前获得焦点的控件的[**Validate**](#validate)事件是否在此控件获得焦点之前运行。**Boolean**，默认**True**。

### ControlType

只读的[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值，将此控件标识为组合框。始终为**vbComboBox**。

### DragIcon

控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时自动拖动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual** (0，默认——从代码调用[**Drag**](#drag))或**vbAutomatic** (1)。

### Enabled

确定控件是否接受用户输入。禁用的组合框显示当前文本但变暗并忽略键盘和鼠标交互。**Boolean**，默认**True**。

### Font

用于渲染编辑区域和下拉列表中文本的**StdFont**。便捷属性**FontName**、**FontSize**、**FontBold**、**FontItalic**、**FontStrikethru**和**FontUnderline**读写此对象的相应成员。当[**IntegralHeight**](#integralheight)为**True**时，更改字体可能会垂直调整控件大小。

### ForeColor

文本颜色，类型为**OLE_COLOR**。默认为系统窗口文本色。

### Height

控件的高度，默认以缇为单位（或使用容器的**ScaleMode**单位）。对于**vbComboDropdown**和**vbComboDropdownList**，这是关闭状态的控件高度（下拉部分的大小单独控制——参见[**MaxDropDownItems**](#maxdropdownitems)）。对于**vbComboSimple**，这是包括始终可见列表在内的总高度。**Single**。

### HelpContextID

标识应用程序帮助文件中主题的**Long**值，当用户在控件具有焦点时按**F1**时检索。

### hWnd

底层组合框的Win32窗口句柄，类型为**LongPtr**。只读。可用于传递给API函数。

### Index

当控件是控件数组的一部分时，此实例在数组中的从零开始的**Long**索引。运行时只读。

### IntegralHeight

当为**True**（默认）时，操作系统调整控件高度使列表可见部分显示完整条目而非部分条目。当为**False**时，控件精确遵循[**Height**](#height)。**Boolean**。在运行时更改此属性会重新创建底层窗口。

### ItemData

应用程序可关联到每个条目的**LongPtr**。使用与[**List**](#list)相同的从零开始的位置索引。

语法：*object*.**ItemData**( *Index* ) [ = *value* ]

*Index*
: *必需* 从零开始的**Long**条目位置。

```vb
Combo1.AddItem "Apple"
Combo1.ItemData(Combo1.NewIndex) = customerID
```

### Left

从容器的左边缘到控件左边缘的水平距离。**Single**。

### List

条目的文本，按从零开始的位置索引。设置**List(*Index*)**会移除该位置的现有条目并在同一索引重新插入新值——注意当[**Sorted**](#sorted)为**True**时这可能改变最终位置。

语法：*object*.**List**( *Index* ) [ = *string* ]

### ListCount

列表中的条目数，类型为**Long**。只读。

### ListIndex

选中条目的从零开始的索引，无选中时为`-1`。**Long**。赋值与当前值不同的值会选中该条目并引发[**Click**](#click)。

### Locked

当为**True**时，用户可以在控件中滚动和选择，但不能在编辑区域键入或用键盘或鼠标滚轮更改选择。**Boolean**，默认**False**。当[**Style**](#style)为**vbComboDropdownList**时无效（没有可锁定的编辑区域）。

### MaxDropDownItems

用户打开下拉部分时显示的最大条目数。**Long**，默认`0`——为零时由操作系统选择高度（通常为8个条目）。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于控件上时用作鼠标光标的**StdPicture**。

### MousePointer

指针位于控件上时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### NewIndex

最近一次[**AddItem**](#additem)调用插入条目的从零开始的索引，如果自控件创建以来未添加条目则为`-1`。当[**Sorted**](#sorted)为**True**且最终位置无法从调用预测时特别有用。**Long**，只读。

### OLEDragMode

控件的编辑区域是否可作为自动OLE拖动源。[**OLEDragConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的成员：**vbOLEDragManual** (0，默认——从代码调用[**OLEDrag**](#oledrag))或**vbOLEDragAutomatic** (1——在编辑区域拖动选中文本会以该文本为数据启动OLE拖动，且放置效果**vbDropEffectMove**会清除选择)。

### OLEDropMode

控件如何响应OLE放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone**或**vbOLEDropManual**。ComboBox不支持自动放置模式。

### Opacity

控件的不透明度百分比（0--100，默认100）。超出范围的值在**Initialize**时被钳制。子控件需要Windows 8或更高版本。

### Parent

对包含此控件的**Form**（或**UserControl**）的引用。只读。

### RightToLeft

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。
:::

### SelLength

编辑区域中选中的字符数。**Long**。当[**Style**](#style)为**vbComboDropdownList**时读写此属性会引发运行时错误380。

### SelStart

编辑区域中第一个选中字符的从零开始的位置，或无文本选中时的插入点位置。**Long**。当[**Style**](#style)为**vbComboDropdownList**时读写此属性会引发运行时错误380。

### SelText

编辑区域中当前选中的文本。赋值字符串会用该字符串替换选择并将插入点定位在插入文本之后。**String**。当[**Style**](#style)为**vbComboDropdownList**时读写此属性会引发运行时错误380。

### Sorted

当为**True**时，通过[**AddItem**](#additem)添加的条目按字母顺序插入，不考虑*Index*参数；当为**False**（默认）时，条目插入到请求的位置（或追加到末尾）。**Boolean**。在运行时更改此属性会重新创建底层窗口并重新添加现有条目。

### Style

选择三种组合框变体之一。[**ComboBoxConstants**](/official/Reference/VBRUN/Constants/ComboBoxConstants)的成员：**vbComboDropdown** (0，默认)、**vbComboSimple** (1)或**vbComboDropdownList** (2)。参见上方的[样式](#style)部分了解布局差异。在运行时更改**Style**会重新创建底层窗口。

### TabIndex

控件在窗体TAB键导航顺序中的位置。**Long**。

### TabStop

用户是否可以通过按**TAB**键到达控件。**Boolean**，默认**True**。禁用的控件无论此设置如何都会被跳过。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### Text

编辑区域中显示的文本，或当[**Style**](#style)为**vbComboDropdownList**时选中条目的文本。**默认属性。**

语法：*object*.**Text** [ = *string* ]

对于**vbComboDropdown**和**vbComboSimple**，赋值会直接写入编辑区域，如果新值与当前值不同则引发[**Change**](#change)。对于**vbComboDropdownList**，赋值会搜索列表（不区分大小写，精确匹配），如果找到匹配项则选中；如果无匹配项，赋值无可见效果。

### ToolTipText

当用户将鼠标悬停在控件上时作为工具提示显示的多行**String**。

### Top

从容器顶部到控件顶部的垂直距离。**Single**。

### TopIndex

下拉（或始终可见）列表顶部显示条目的从零开始的索引。赋值会滚动列表使该条目位于顶部。**Long**。

### TransparencyKey

一个**OLE_COLOR**值，设置后在渲染的控件中变为完全透明。默认`-1`禁用此效果。子控件需要Windows 8或更高版本。

### Visible

控件是否显示。**Boolean**，默认**True**。

### VisualStyles

绘制控件时是否使用操作系统主题引擎。**Boolean**，默认**True**。

### WhatsThisHelpID

标识应用程序帮助文件中"这是什么？"弹出帮助主题的**Long**值。参见[**ShowWhatsThis**](#showwhatsthis)。

### WheelScrollEvent

当为**True**（默认）时，下拉列表上的鼠标滚轮通知引发[**Scroll**](#scroll)事件；当为**False**时，滚轮仍会滚动列表但[**Scroll**](#scroll)被抑制。**Boolean**。VB6从不为滚轮事件引发**Scroll**；将此设置为**False**可完全匹配该行为。

### Width

控件的宽度。**Single**。

## 方法

### AddItem

向列表插入新条目并将结果位置存储在[**NewIndex**](#newindex)中。

语法：*object*.**AddItem** *Value* [, *Index* ]

*Value*
: *必需* 新条目文本的**String**。

*Index*
: *可选* 要插入的从零开始的**Long**位置。省略则追加到末尾。当[**Sorted**](#sorted)为**True**时忽略。

### Clear

移除列表中的所有条目并清除[**ListIndex**](#listindex)。

语法：*object*.**Clear**

### Drag

开始、完成或取消手动拖放操作。

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

强制控件立即重绘。

语法：*object*.**Refresh**

### RemoveItem

移除给定从零开始位置处的条目。其下方的条目上移一位。

语法：*object*.**RemoveItem** *Index*

*Index*
: *必需* 从零开始的**Long**位置。

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

编辑区域文本更改时引发——无论用户在其中键入还是代码赋值了不同的[**Text**](#text)值。在**vbComboDropdownList**模式下不引发（没有编辑区域）。**默认事件。**

语法：*object*\_**Change**( )

### Click

[**ListIndex**](#listindex)更改后引发——无论用户从列表中选择了条目还是代码赋值了不同的[**ListIndex**](#listindex)值。再次赋值当前值不会引发**Click**。

语法：*object*\_**Click**( )

### CloseUp

下拉部分关闭时引发——因为用户选择了条目、点击了其他地方或按了**Esc**。在**vbComboSimple**模式下不引发（列表始终可见）。

语法：*object*\_**CloseUp**( )

### DblClick

用户双击始终可见列表中的条目时引发（**vbComboSimple**模式）。

语法：*object*\_**DblClick**( )

### DragDrop

手动拖动操作在目标控件上结束时在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

手动拖动操作进行中时在光标下方的控件上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### DropDown

用户打开下拉部分时引发。在**vbComboSimple**模式下不引发（列表始终可见）。

语法：*object*\_**DropDown**( )

### GotFocus

控件获得输入焦点时引发。

语法：*object*\_**GotFocus**( )

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

下拉（或始终可见）列表滚动时引发——通过滚动条、键盘或鼠标滚轮。通过将[**WheelScrollEvent**](#wheelscrollevent)设置为**False**可抑制滚轮驱动的滚动事件。

语法：*object*\_**Scroll**( )

### Validate

焦点移动到另一个[**CausesValidation**](#causesvalidation)为**True**的控件时引发。将*Cancel*设置为**True**可使焦点保留在此控件上。

语法：*object*\_**Validate**( *Cancel* **As Boolean** )