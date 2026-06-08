---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '205f5baa-786f-4038-9ccf-47efcdffca0b'
  PropagateID: '205f5baa-786f-4038-9ccf-47efcdffca0b'
  ReservedCode1: 'f7aa8fd8-a85a-484d-bb88-235682333a88'
  ReservedCode2: 'f7aa8fd8-a85a-484d-bb88-235682333a88'
---

---
title: "ListBox 列表框"
parent: VB Package
permalink: /tB/Packages/VB/ListBox/
---

# ListBox 类

**ListBox**是一个Win32原生控件，显示垂直滚动的条目列表，可选多列布局，用户从中选择一个条目——或[**MultiSelect**](#multiselect)非零时选择任意数量的条目。每个条目是一个字符串，带有可选的**LongPtr**值，应用程序可通过[**ItemData**](#itemdata)与条目一起存储。该控件通常在设计时放置在**Form**或**UserControl**上。默认属性是[**Text**](#text)，默认事件是[**Click**](#click)。

```vb
Private Sub Form_Load()
    With List1
        .AddItem "Apple"
        .AddItem "Banana"
        .AddItem "Cherry"
        .ItemData(0) = 100
        .ItemData(1) = 200
        .ItemData(2) = 300
        .ListIndex = 0
    End With
End Sub

Private Sub List1_Click()
    Debug.Print "Picked: " & List1.Text & " (data = " & List1.ItemData(List1.ListIndex) & ")"
End Sub
```


## 样式

[**Style**](#style)选择三种渲染模式之一（[**ListBoxConstants**](/official/Reference/VBRUN/Constants/ListBoxConstants)）：

| 常量                        | 值 | 布局                                                                                       |
|-----------------------------|-----|--------------------------------------------------------------------------------------------|
| **vbListBoxStandard**       | 0   | 纯文本条目，默认。                                                                         |
| **vbListBoxCheckbox**       | 1   | 每个条目显示独立的复选框，用户可切换而不更改选择。                                       |
| **vbListBoxColorSwatch**    | 2   | 每个条目在其文本前显示颜色色板，以[**ItemData**](#itemdata)中存储的颜色绘制。              |

在运行时更改**Style**会重新创建底层窗口，保留条目、[**ItemData**](#itemdata)值、当前选择、滚动位置和（复选框模式下）选中状态。[**Sorted**](#sorted)、[**MultiSelect**](#multiselect)、[**IntegralHeight**](#integralheight)和[**UseTabStops**](#usetabstops)以相同方式重新创建窗口。

[**MultiSelect**](#multiselect)仅在**vbListBoxStandard**下有意义。其他样式始终表现为**vbMultiSelectNone**——**vbListBoxCheckbox**的逐项切换取代了多选功能，色板纯粹是显示变体。

## 编辑列表

条目保存在操作系统列表框控件内部；[**List**](#list)和[**ItemData**](#itemdata)数组是对该存储的映射。条目通过[**AddItem**](#additem)添加，通过[**RemoveItem**](#removeitem)移除，整个列表通过[**Clear**](#clear)清空。每次[**AddItem**](#additem)调用后，[**NewIndex**](#newindex)报告条目插入的位置——当[**Sorted**](#sorted)为**True**且位置无法从调用预测时非常有用。

```vb
List1.Sorted = True
List1.AddItem "Cherry"
List1.AddItem "Apple"           ' 插入到索引0 — List1.NewIndex = 0
List1.ItemData(List1.NewIndex) = 42
```

对超出列表末尾的索引进行索引会引发运行时错误5（*Invalid procedure call or argument*）。对[**AddItem**](#additem)和[**RemoveItem**](#removeitem)的超出范围或其他被拒绝的调用会引发相同错误。

## 选择

[**ListIndex**](#listindex)是焦点条目的从零开始的索引，无焦点时为`-1`。[**Text**](#text)返回该索引处的文本。在单选模式（**vbMultiSelectNone**）下，焦点条目也是选中条目，对[**ListIndex**](#listindex)赋值会选中它并在值实际更改时引发[**Click**](#click)。在**vbMultiSelectSimple**和**vbMultiSelectExtended**下，焦点条目独立于选择集；使用[**Selected**](#selected)读取或写入任何单个条目的选择状态，使用[**SelCount**](#selcount)计算数量。[**SelectedIndices**](#selectedindices)以**Collection**返回选中索引，方便迭代。

```vb
Dim idx As Variant
For Each idx In List1.SelectedIndices()
    Debug.Print List1.List(idx)
Next
```

为[**Text**](#text)赋值字符串会以不区分大小写的精确匹配搜索列表（使用`LB_FINDSTRINGEXACT`），找到则选中该条目；如果无匹配条目，[**ListIndex**](#listindex)设为`-1`并清除当前选择。当[**ListIndex**](#listindex)为`-1`时读取[**Text**](#text)会引发运行时错误5。

## 多列显示

当[**Columns**](#columns)大于零时，操作系统将条目布局为多个并排列，并为控件提供水平滚动条而非通常的垂直滚动条。列宽自动设置为控件的像素宽度除以[**Columns**](#columns)——赋值新[**Width**](#width)不会重新划分列；重新赋值[**Columns**](#columns)以刷新布局。

单列/多列的区别在底层窗口创建时固定。在运行时，[**Columns**](#columns)可以在非零值之间升高或降低以重新划分同一控件，但在零和非零之间切换会引发运行时错误380（*Invalid property value*）。多列布局要求在设计时为[**Columns**](#columns)赋非零值。

## 复选框样式

在**vbListBoxCheckbox**模式下，每个条目在其文本前绘制小复选框，大小由[**MaxCheckboxSize**](#maxcheckboxsize)决定（96 DPI下的像素值；由系统DPI缩放）。用户通过点击复选框、点击条目后按**空格**或点击已是焦点条目的条目本身来切换复选框。每次切换引发[**ItemCheck**](#itemcheck)，带有受影响的索引。[**Selected**](#selected)在此模式下读取或写入逐项选中状态（而非选择状态）。焦点条目仍通过[**ListIndex**](#listindex)跟踪，当焦点在条目之间移动时标准[**Click**](#click)事件仍会引发。

选中状态保存在内部数组中，在[**AddItem**](#additem)和[**RemoveItem**](#removeitem)调用之间保留（现有条目保持其状态；新条目从未选中开始）。

## 数据绑定

设置[**DataSource**](#datasource)和[**DataField**](#datafield)将控件的[**Text**](#text)连接到[**Data**](/official/Reference/VB/Data/)控件记录集的字段。每次移动时绑定字段作为字符串读取，对[**Text**](#text)赋值通过将[**DataChanged**](#datachanged)设置为**True**将记录集标记为已修改。无法强制转换为字符串的字段值被视为空字符串而非引发错误。

## OLE拖放

当[**OLEDragMode**](#oledragmode)设置为**vbOLEDragAutomatic**时，从列表拖动条目会启动OLE拖动，其**Text**数据为拖动条目的字符串（单选模式）或每个选中条目的文本以**vbCrLf**分隔连接（**vbMultiSelectSimple**或**vbMultiSelectExtended**模式下）。[**OLEDropMode**](#oledropmode)控制放置目标行为，仅限于**vbOLEDropNone**或**vbOLEDropManual**。

## 属性

### Anchors

列表框的对应边缘跟随父控件调整大小时所依据的父控件边缘集合。只读——通过返回的**Anchors**对象分配单独的`.Left`、`.Top`、`.Right`、`.Bottom`标志。

### Appearance

确定操作系统如何绘制控件的边框。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。与[**BorderStyle**](#borderstyle)组合使用：3D外观加单线边框产生标准凹陷客户端边缘；平面外观加单线边框产生一像素轮廓线。

### BackColor

列表区域的背景颜色，类型为**OLE_COLOR**。默认为系统窗口背景色。选中状态绘制的条目忽略**BackColor**而使用系统高亮色。

### BorderStyle

[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants)的成员：**vbNoBorder** (0)或**vbFixedSingleBorder** (1，默认)。在运行时更改会重新同步边框而不重新创建窗口。

### CausesValidation

确定先前获得焦点的控件的[**Validate**](#validate)事件是否在此控件获得焦点之前运行。**Boolean**，默认**True**。

### Columns

多列布局中的列数，或`0`表示带垂直滚动条的单列列表。**Long**，默认`0`。参见[多列显示](#multi-column-display)。

语法：*object*.**Columns** [ = *value* ]

在运行时在零和非零之间切换会引发运行时错误380（*Invalid property value*）。在两个非零值之间重新赋值是允许的并重新划分可见区域。

### Container

承载此列表框的控件——通常是窗体、[**Frame**](/official/Reference/VB/Frame/)或**UserControl**。使用**Get**读取，使用**Set**更改。

### ControlType

只读的[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值，将此控件标识为列表框。始终为**vbListBox**。

### DataChanged

绑定的[**Text**](#text)自上次保存或从[**DataSource**](#datasource)刷新以来是否已被写入。**Boolean**。设置**DataChanged** = **True**也会将绑定记录集标记为已修改。

### DataField

绑定[**DataSource**](#datasource)记录集中由[**Text**](#text)镜像的字段名称。**String**。

### DataFormat

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。
:::

### DataMember

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。
:::

### DataSource

对[**Data**](/official/Reference/VB/Data/)控件（或其他**DataSource**提供程序）的引用，其记录集为[**DataField**](#datafield)提供值。使用**Set**设置。

### Dock

列表框在其容器中的停靠位置。[**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants)的成员：**vbDockNone**（默认）、**vbDockLeft**、**vbDockTop**、**vbDockRight**、**vbDockBottom**或**vbDockFill**。停靠列表框忽略[**Anchors**](#anchors)。

### DragIcon

控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时自动拖动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual** (0，默认——从代码调用[**Drag**](#drag))或**vbAutomatic** (1)。

### Enabled

确定控件是否接受用户输入。禁用的列表框仍显示其内容但变暗并忽略键盘和鼠标交互。**Boolean**，默认**True**。

### Font

用于渲染条目文本的**StdFont**。便捷属性**FontName**、**FontSize**、**FontBold**、**FontItalic**、**FontStrikethru**和**FontUnderline**读写此对象的相应成员。当[**IntegralHeight**](#integralheight)为**True**时更改字体会重新缩放每项的行高，并在**vbListBoxCheckbox**和**vbListBoxColorSwatch**模式下强制重新计算行高。

### ForeColor

未选中条目的文本颜色，类型为**OLE_COLOR**。默认为系统窗口文本色。禁用条目使用系统灰色文本色绘制，选中条目使用系统高亮文本色绘制，不受此设置影响。

### Height

控件的高度，默认以缇为单位（或使用容器的**ScaleMode**单位）。当[**IntegralHeight**](#integralheight)为**True**时，操作系统在**Initialize**时将其量化为整行数。**Single**。

### HelpContextID

标识应用程序帮助文件中主题的**Long**值，当用户在控件具有焦点时按**F1**时检索。

### hWnd

底层列表框的Win32窗口句柄，类型为**LongPtr**。只读。可用于传递给API函数。

### Index

当控件是控件数组的一部分时，此实例在数组中的从零开始的**Long**索引。在非数组实例上读取**Index**会引发运行时错误343（*Object not an array*）。运行时只读。

### IntegralHeight

当为**True**（默认）时，操作系统调整控件高度使可见部分显示完整行而非部分行。当为**False**时，控件精确遵循[**Height**](#height)，底部行可能被裁剪。**Boolean**。在运行时更改此属性会重新创建底层窗口。

### ItemData

应用程序可关联到每个条目的**LongPtr**。使用与[**List**](#list)相同的从零开始的位置索引。

语法：*object*.**ItemData**( *Index* ) [ = *value* ]

*Index*
: *必需* 从零开始的**Long**条目位置。

在**vbListBoxColorSwatch**模式下，**ItemData**由绘制代码读取为色板中绘制的**OLE_COLOR**——典型用途是用调色板颜色列表填充它供用户选择。在其他样式中**ItemData**纯粹由应用程序定义。

```vb
List1.AddItem "Highlight"
List1.ItemData(List1.NewIndex) = vbYellow
```

设计时通过窗体设计器存储的值保持为**Long**而非**LongPtr**，以便设计的窗体保持平台无关；运行时属性为**LongPtr**，必要时符号扩展设计时值。

### Left

从容器的左边缘到控件左边缘的水平距离。**Single**。

### List

条目的文本，按从零开始的位置索引。设置**List(*Index*)**会移除该位置的现有条目并在同一索引重新插入新值——注意当[**Sorted**](#sorted)为**True**时这可能改变最终位置。

语法：*object*.**List**( *Index* ) [ = *string* ]

*Index*
: *必需* 从零开始的**Long**条目位置。超出范围的索引引发运行时错误5。

### ListCount

列表中的条目数，类型为**Long**。只读。

### ListIndex

焦点条目的从零开始的索引，无焦点条目时为`-1`。**Long**。在多选模式下焦点条目和选中条目是独立的——参见[**Selected**](#selected)。赋值与当前值不同的值会聚焦该条目并引发[**Click**](#click)。

### MaxCheckboxSize

**vbListBoxCheckbox**模式下绘制的逐项复选框的最大大小，96 DPI下的像素值。**Long**，默认`15`。实际使用的大小为此值（由系统DPI缩放）和从当前字体计算的行高中较小者，因此复选框从不超过一行。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于控件上时用作鼠标光标的**StdPicture**。

### MousePointer

指针位于控件上时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### MultiSelect

选择模式。[**MultiSelectConstants**](/official/Reference/VBRUN/Constants/MultiSelectConstants)的成员：**vbMultiSelectNone** (0，默认——单项选择)、**vbMultiSelectSimple** (1——每次单击切换)或**vbMultiSelectExtended** (2——**Shift**选择范围，**Ctrl**切换单项)。在运行时更改此属性会重新创建底层窗口；条目、[**ItemData**](#itemdata)值、焦点条目和（**vbListBoxCheckbox**模式下）选中状态会恢复，但多项选择不会。仅在**vbListBoxStandard**模式下有效——参见[样式](#style)。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### NewIndex

最近一次[**AddItem**](#additem)调用插入条目的从零开始的索引，如果自控件创建以来未添加条目则为`-1`。当[**Sorted**](#sorted)为**True**且最终位置无法从调用预测时特别有用。**Long**，只读。

### OLEDragMode

控件是否作为自动OLE拖动源。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDragConstants)的成员：**vbOLEDragManual** (0，默认——从代码调用[**OLEDrag**](#oledrag))或**vbOLEDragAutomatic** (1——拖动条目会启动OLE拖动，其**Text**数据为单选模式下拖动条目的文本，或多选模式下以**vbCrLf**分隔的每个选中条目的文本)。

### OLEDropMode

控件如何响应OLE放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone**或**vbOLEDropManual**。ListBox不支持自动放置模式。

### Opacity

控件的不透明度百分比（0--100，默认100）。超出范围的值在**Initialize**时被钳制。子控件需要Windows 8或更高版本。

### Parent

对最终包含此列表框的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）的引用。只读。

### RightToLeft

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。
:::

### SelCount

当前选中的条目数，类型为**Long**。只读。当[**MultiSelect**](#multiselect)为**vbMultiSelectNone**或[**Style**](#style)为非标准时始终为`0`或`1`。

### Selected

单个条目的选择状态——或在**vbListBoxCheckbox**模式下的选中状态。

语法：*object*.**Selected**( *Index* ) [ = *boolean* ]

*Index*
: *必需* 从零开始的**Long**条目位置。

在**vbListBoxStandard**模式下，读取**Selected(*Index*)**在该条目被选中时返回**True**，赋值会更新选择。在单选模式（**vbMultiSelectNone**）下，赋值**True**选中该条目；赋值**False**无明显效果。在多选模式下，赋值独立于焦点条目切换相应条目在选择集中的成员资格。每次更改状态的赋值引发[**Click**](#click)。

在**vbListBoxCheckbox**模式下，**Selected(*Index*)**读取或写入逐项选中状态。每次更改状态的赋值引发[**ItemCheck**](#itemcheck)。

在**vbListBoxColorSwatch**模式下，**Selected(*Index*)**表现为与单选标准模式相同（色板样式纯粹是显示变体）。

### Sorted

当为**True**时，通过[**AddItem**](#additem)添加的条目按字母顺序插入，不考虑*Index*参数；当为**False**（默认）时，条目插入到请求的位置（或追加到末尾）。**Boolean**。在运行时更改此属性会重新创建底层窗口并重新添加现有条目。

### Style

选择三种渲染模式之一。[**ListBoxConstants**](/official/Reference/VBRUN/Constants/ListBoxConstants)的成员：**vbListBoxStandard** (0，默认)、**vbListBoxCheckbox** (1)或**vbListBoxColorSwatch** (2)。参见上方的[样式](#style)部分了解布局和行为差异。在运行时更改**Style**会重新创建底层窗口。

### TabIndex

控件在窗体TAB键导航顺序中的位置。**Long**。

### TabStop

用户是否可以通过按**TAB**键到达控件。**Boolean**，默认**True**。禁用的控件无论此设置如何都会被跳过。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### Text

焦点条目的文本，或当[**ListIndex**](#listindex)为`-1`时的空字符串。**默认属性。**

语法：*object*.**Text** [ = *string* ]

读取**Text**返回`List(ListIndex)`——无焦点条目时读取会引发运行时错误5（*Invalid procedure call or argument*）。设置**Text**会搜索列表进行精确的不区分大小写匹配（使用`LB_FINDSTRINGEXACT`），找到则选中匹配条目；如果无匹配条目，[**ListIndex**](#listindex)设为`-1`并清除当前选择。

### ToolTipText

当用户将鼠标悬停在控件上时作为工具提示显示的多行**String**。

### Top

从容器顶部到控件顶部的垂直距离。**Single**。

### TopIndex

可见区域顶部显示条目的从零开始的索引。**Long**。赋值会滚动列表使该条目位于顶部；当值实际改变时引发[**Scroll**](#scroll)事件。

### TransparencyKey

一个**OLE_COLOR**值，设置后在渲染的控件中变为完全透明。默认`-1`禁用此效果。子控件需要Windows 8或更高版本。

### UseTabStops

当为**True**（默认）时，条目文本中嵌入的`vbTab`字符扩展为操作系统标准列表框制表位，因此可以在单列列表中渲染多列对齐的文本。当为**False**时，制表符按原样绘制。**Boolean**。在运行时更改此属性会重新创建底层窗口。

### Visible

控件是否显示。**Boolean**，默认**True**。

### VisualStyles

绘制控件时是否使用操作系统主题引擎。**Boolean**，默认**True**。影响**vbListBoxCheckbox**模式下逐项复选框的渲染（主题化 vs. 经典平面样式框）。

### WhatsThisHelpID

标识应用程序帮助文件中"这是什么？"弹出帮助主题的**Long**值。参见[**ShowWhatsThis**](#showwhatsthis)。

### WheelScrollEvent

当为**True**（默认）时，控件上的鼠标滚轮通知引发[**Scroll**](#scroll)事件；当为**False**时，滚轮仍会滚动列表但[**Scroll**](#scroll)被抑制。**Boolean**。VB6从不为滚轮事件引发**Scroll**；将此设置为**False**可完全匹配该行为。

### Width

控件的宽度。**Single**。在多列布局中，也决定列宽——参见[多列显示](#multi-column-display)。

## 方法

### AddItem

向列表插入新条目并将结果位置存储在[**NewIndex**](#newindex)中。在**vbListBoxCheckbox**模式下新条目未选中；现有条目保持其选中状态。

语法：*object*.**AddItem** *Value* [, *Index* ]

*Value*
: *必需* 新条目文本的**String**。

*Index*
: *可选* 要插入的从零开始的**Long**位置。省略则追加到末尾。超出范围的索引引发运行时错误5。当[**Sorted**](#sorted)为**True**时忽略。

### Clear

移除列表中的所有条目，包括任何关联的[**ItemData**](#itemdata)值和选中状态。

语法：*object*.**Clear**

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

强制控件立即重绘。

语法：*object*.**Refresh**

### RemoveItem

移除给定从零开始位置处的条目及其[**ItemData**](#itemdata)值。其下方的条目上移一位，且（**vbListBoxCheckbox**模式下）它们的选中状态随之上移。

语法：*object*.**RemoveItem** *Index*

*Index*
: *必需* 从零开始的**Long**位置。

### SelectedIndices

以升序**Long**值的**Collection**返回每个当前选中条目的从零开始的索引。用于迭代多选而无需扫描每个索引的[**Selected**](#selected)。

语法：*object*.**SelectedIndices**

```vb
Dim idx As Variant
For Each idx In List1.SelectedIndices()
    Debug.Print idx & ": " & List1.List(idx)
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

焦点条目更改后引发——无论用户点击了不同的条目、使用键盘移动焦点，还是代码赋值了不同的[**ListIndex**](#listindex)或[**Selected**](#selected)值。先前选中条目被取消时也会引发（`LBN_SELCANCEL`）。**默认事件。**

语法：*object*\_**Click**( )

### DblClick

用户双击条目时引发。通常用于对高亮条目执行操作——例如打开它。

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

在底层窗口创建且设计时条目已添加后立即引发一次。twinBASIC新增——VB6在此控件上没有等效功能。

语法：*object*\_**Initialize**( )

### ItemCheck

在**vbListBoxCheckbox**模式下，每当条目的选中状态更改时引发——无论用户点击了其复选框、按了**空格**还是代码赋值了[**Selected**](#selected)。在其他样式中不引发。

语法：*object*\_**ItemCheck**( *Item* **As Integer** )

*Item*
: 被切换条目的从零开始的索引。

::: info
索引超过32768的条目不会引发**ItemCheck**，因为事件签名使用**Integer**。请直接读取[**Selected**](#selected)来检查更高索引的条目。
:::

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

### Scroll

列表的可见部分滚动时引发——通过滚动条、键盘或（当[**WheelScrollEvent**](#wheelscrollevent)为**True**时）鼠标滚轮。新偏移量可从[**TopIndex**](#topindex)读取。

语法：*object*\_**Scroll**( )

### Validate

焦点移动到另一个[**CausesValidation**](#causesvalidation)为**True**的控件时引发。将*Cancel*设置为**True**可使焦点保留在此控件上。

语法：*object*\_**Validate**( *Cancel* **As Boolean** )