---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9cddc0d5-0082-4872-b29d-c7109f4b043e'
  PropagateID: '9cddc0d5-0082-4872-b29d-c7109f4b043e'
  ReservedCode1: '4f023289-bdf9-4939-ba1d-5943ce0287b4'
  ReservedCode2: '4f023289-bdf9-4939-ba1d-5943ce0287b4'
---

---
title: "Label 标签"
parent: VB Package
permalink: /tB/Packages/VB/Label/
---

# Label 类

**Label**是一个无窗口轻量级控件，用于显示只读文本。标签通常用作输入控件旁边的静态标题（"姓名："、"邮箱："），由代码保持更新的状态显示，或作为键盘助记锚点将**Alt+**按键路由到下一个可聚焦控件。因为**Label**没有自己的`hWnd`，所以比配置为只读的[**TextBox**](/official/Reference/VB/TextBox/)开销小得多——但它在键盘意义上也是非交互的：不能获取焦点、引发键事件或通过**TAB**键选择。

默认属性是[**Caption**](#caption)，默认事件是[**Click**](#click)。

```vb
Private Sub Form_Load()
    lblName.Caption  = "&Name:"            ' Alt+N将焦点转发到下一个控件
    lblName.AutoSize = True
    txtName.Text     = ""                  ' 接收Alt+N的TextBox
End Sub

Private Sub Timer1_Timer()
    lblClock.Caption = Format$(Now, "hh:mm:ss")
End Sub
```


## 无窗口渲染

与[**Image**](/official/Reference/VB/Image/)一样，**Label**没有`hWnd`。框架在父控件的绘制周期中将其直接绘制到父控件的绘图表面上。权衡是相同的：

- 无焦点、无键盘输入、无`KeyDown` / `KeyPress` / `KeyUp` / `GotFocus` / `LostFocus` / `Validate`。
- 无`hWnd`可传递给API函数，无`SetFocus`。
- 不能承载子控件。

对于用户可编辑（或需要获取焦点）的文本，改用`Locked = True`的[**TextBox**](/official/Reference/VB/TextBox/)。

## 助记符和访问键

标签本身不获取焦点，但参与键盘助记符路由。当[**UseMnemonic**](#usemnemonic)为**True**（默认）时，[**Caption**](#caption)中的&符号将下一个字符标记为助记符——按**Alt+**该字符将焦点移到标签之后*按TAB顺序的下一个可聚焦控件*。使用`&&`显示字面&符号。将[**UseMnemonic**](#usemnemonic)设置为**False**可禁用特殊处理并按原样渲染&符号。

```vb
lblName.Caption = "&Name:"           ' Alt+N → 下一个控件（通常是txtName）
lblHelp.Caption = "Use && to escape" ' 显示为: Use & to escape
```

约定是将**Label**在TAB顺序中紧接在其标题的控件之前，这样助记符自然指向该控件。

## Caption布局

[**Alignment**](#alignment)和[**VerticalAlignment**](#verticalalignment)共同定位标签矩形内的标题：

| 属性                                           | 成员                                                                                              |
|------------------------------------------------|---------------------------------------------------------------------------------------------------|
| [**Alignment**](#alignment)                    | **vbLeftJustify** (0，默认)、**vbRightJustify** (1)、**vbCenter** (2)                              |
| [**VerticalAlignment**](#verticalalignment)    | **vbVerticalAlignTop** (0，默认)、**vbVerticalAlignMiddle** (1)、**vbVerticalAlignBottom** (2)  |

[**WordWrap**](#wordwrap)为**True**时，当标题否则会超出[**Width**](#width)时在空白处将标题分成多行。[**LineSpacing**](#linespacing)在行间插入额外的垂直间距（以缇为单位）。

[**AutoSize**](#autosize)为**True**时，每当标题、字体、边框或自动换行设置更改时，标签会重新调整大小以适应其标题。自动调整大小在父控件的设备上下文中测量当前字体，因此在高DPI显示器上产生正确结果。当**AutoSize**为**False**时，标题被裁剪到标签的矩形内（仍遵循[**WordWrap**](#wordwrap)和对齐设置）。

## 旋转

[**Angle**](#angle)以度为单位逆时针绕控件矩形左上角旋转渲染的标题。`0`为自然方向，`90`为逆时针四分之一转，以此类推。控件的边界矩形不变——因此大旋转角度可能将可见文本推到矩形之外。[**Click**](#click)和鼠标事件的点击测试仍使用未旋转的矩形。

## 边框样式

[**BorderStyle**](#borderstyle)在三种样式之间选择：

| 常量                      | 值 | 描述                                                                                    |
|---------------------------|-----|-----------------------------------------------------------------------------------------|
| **vbNoBorder**            | 0   | 无边框（默认）。                                                                         |
| **vbFixedSingleBorder**   | 1   | 凹陷的Win32风格边框。[**Appearance**](#appearance)选择3D或平面。                        |
| **vbCustomBorder**        | 2   | 通过[**BorderCustomOptions**](#bordercustomoptions)配置的逐边自定义边框。               |

使用**vbCustomBorder**时，[**BorderCustomOptions**](#bordercustomoptions)返回一个对象，其`.Left`、`.Top`、`.Right`和`.Bottom`属性各自有独立的**Size**（线粗，以缇为单位）、**Padding**（边框与标题之间的内边距，以缇为单位）和**Color**值：

```vb
lblBox.BorderStyle = vbCustomBorder
With lblBox.BorderCustomOptions
    .Top.Size = 30 :  .Top.Color = vbRed :   .Top.Padding = 60
    .Bottom.Size = 30 : .Bottom.Color = vbRed : .Bottom.Padding = 60
End With
```

## 背景

[**BackStyle**](#backstyle)在**vbBFOpaque**（默认——在标题下绘制[**BackColor**](#backcolor)）和**vbBFTransparent**（不绘制背景——父控件绘制的内容会透过来）之间选择。在[**PictureBox**](/official/Reference/VB/PictureBox/)、[**Image**](/official/Reference/VB/Image/)或自定义绘制的窗体背景上叠加标题时，透明标签是必不可少的。在*报表模式*下创建的新标签默认为**vbBFTransparent**。

## 数据绑定

设置[**DataSource**](#datasource)和[**DataField**](#datafield)将[**Caption**](#caption)连接到[**Data**](/official/Reference/VB/Data/)控件记录集的字段。每次移动时绑定字段作为字符串读取，对[**Caption**](#caption)赋值会将记录集标记为已修改。[**DataFieldAggregate**](#datafieldaggregate)和[**DataFieldAggregateValue**](#datafieldaggregatevalue)由报表引擎用于显示运行汇总。

## 属性

### Alignment

[**Caption**](#caption)在标签矩形内的水平放置。[**AlignmentConstants**](/official/Reference/VBRUN/Constants/AlignmentConstants)的成员：**vbLeftJustify** (0，默认)、**vbRightJustify** (1)或**vbCenter** (2)。

### Anchors

标签的对应边缘跟随父控件调整大小时所依据的父控件边缘集合。只读——通过返回的**Anchors**对象分配单独的`.Left`、`.Top`、`.Right`、`.Bottom`标志。

### Angle

渲染标题的旋转角度，以度为单位，逆时针绕控件矩形左上角旋转。**Double**，默认`0`。

### Appearance

边框的样式，[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。仅在[**BorderStyle**](#borderstyle)为**vbFixedSingleBorder**时有意义。

### AutoSize

标签是否重新调整大小以适应其[**Caption**](#caption)、[**Font**](#font)、边框和自动换行设置。**Boolean**，默认**False**。当为**True**时，每当这些输入中的任何一个更改时都会重新调整大小。

### BackColor

当[**BackStyle**](#backstyle)为**vbBFOpaque**时绘制在标题后面的颜色。**OLE_COLOR**，默认为系统3D面色。

### BackStyle

标签是否绘制背景。[**BackFillStyleConstants**](/official/Reference/VBRUN/Constants/BackFillStyleConstants)的成员：**vbBFOpaque** (1，默认——绘制[**BackColor**](#backcolor))或**vbBFTransparent** (0——让父控件绘制的内容透过来)。

### BorderCustomOptions

**vbCustomBorder**样式的逐边配置。只读；返回的对象公开`.Left`、`.Top`、`.Right`、`.Bottom`子对象，每个都有`Size`、`Padding`和`Color`属性。参见[边框样式](#border-styles)。

### BorderStyle

标签周围绘制的边框样式。[**ControlBorderStyleConstantsCustom**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstantsCustom)的成员：**vbNoBorder** (0，默认)、**vbFixedSingleBorder** (1)或**vbCustomBorder** (2)。参见[边框样式](#border-styles)。

### Caption

标签渲染的文本。**String**。**默认属性。**

语法：*object*.**Caption** [ = *string* ]

当[**UseMnemonic**](#usemnemonic)为**True**时，&符号将下一个字符标记为助记符；`&&`产生字面&符号。赋值与当前值不同的值会引发[**Change**](#change)事件；赋值当前值为静默空操作。

### Container

承载此标签的控件——通常是窗体、[**Frame**](/official/Reference/VB/Frame/)或**UserControl**。使用**Get**读取，使用**Set**更改。

### ControlType

只读的[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值，将此控件标识为标签。始终为**vbLabel**。

### DataChanged

绑定的[**Caption**](#caption)自上次保存或从[**DataSource**](#datasource)刷新以来是否已被写入。**Boolean**。设置**DataChanged** = **True**也会将绑定记录集标记为已修改。

### DataField

绑定[**DataSource**](#datasource)记录集中由[**Caption**](#caption)镜像的字段名称。**String**。

### DataFieldAggregate

报表引擎应累积到[**DataFieldAggregateValue**](#datafieldaggregatevalue)中的运行聚合类型。`Label.AggregateConstants`的成员：

| 常量                  | 值 | 描述                                                              |
|-----------------------|-----|-------------------------------------------------------------------|
| **vbAggregateNone**   | 0   | 无聚合（默认）。                                                   |
| **vbAggregateSum**    | 1   | 对报表访问的行中的绑定数值求和。                                   |

仅在标签在[**Report**](/official/Reference/VB/Report/)节中渲染时使用。

### DataFieldAggregateValue

报表引擎计算的累积聚合值，公开为**Decimal**。在生成报表时由引擎更新；用户代码可从事件处理程序中读取但通常不写入。

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

标签在其容器中的停靠位置。[**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants)的成员：**vbDockNone**（默认）、**vbDockLeft**、**vbDockTop**、**vbDockRight**、**vbDockBottom**或**vbDockFill**。停靠标签忽略[**Anchors**](#anchors)。

### DragIcon

控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时自动拖动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual** (0，默认——从代码调用[**Drag**](#drag))或**vbAutomatic** (1)。

### Enabled

标签是否接受鼠标输入并以正常文本颜色渲染[**Caption**](#caption)。禁用的标签仍会绘制，但使用系统灰色文本色并忽略鼠标事件。**Boolean**，默认**True**。

### Font

用于渲染[**Caption**](#caption)的**StdFont**。便捷属性**FontBold**、**FontItalic**、**FontName**、**FontSize**、**FontStrikethru**和**FontUnderline**读写此对象的相应成员。默认为Segoe UI, 8磅。

### FontBold

`Font.Bold`的快捷方式。**Boolean**。

### FontItalic

`Font.Italic`的快捷方式。**Boolean**。

### FontName

`Font.Name`的快捷方式。**String**，默认`"Segoe UI"`。

### FontSize

`Font.Size`的快捷方式。**Single**，以磅为单位。默认`8`。

### FontStrikethru

`Font.Strikethrough`的快捷方式。**Boolean**。

### FontUnderline

`Font.Underline`的快捷方式。**Boolean**。

### ForeColor

[**Caption**](#caption)的文本颜色，类型为**OLE_COLOR**。默认为系统按钮文本色。当[**Enabled**](#enabled)为**False**时替换为系统灰色文本色。

### Height

控件的高度，默认以缇为单位（或使用容器的**ScaleMode**单位）。**Double**。当[**AutoSize**](#autosize)为**True**时自动计算。

### Index

当标签是控件数组的一部分时，此实例在数组中的从零开始的**Long**索引。在非数组实例上读取**Index**会引发运行时错误343（*Object not an array*）。运行时只读。

### Left

从容器的左边缘到标签左边缘的水平距离。**Double**。

### LineSpacing

在自动换行或多行标题的行间插入的额外垂直间距，以缇为单位。**Long**，默认`0`。

### LinkItem

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中未实现。
:::

### LinkMode

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中未实现。
:::

### LinkTimeout

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中未实现。
:::

### LinkTopic

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中未实现。
:::

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于控件上时用作鼠标光标的**StdPicture**。

### MousePointer

指针位于控件上时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### OLEDropMode

标签如何响应OLE放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone** (0，默认)或**vbOLEDropManual** (1)。Label不支持自动放置；赋值**vbOLEDropAutomatic**会引发运行时错误5（*Invalid procedure call or argument*）。

### Parent

对最终包含此控件的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）的引用。只读。

### RightToLeft

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。使用[**Alignment**](#alignment)的`vbRightJustify`来右对齐标题。
:::

### TabIndex

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。标签不可聚焦，因此该值仅影响助记符路由——目前由设计时Z顺序控制。
:::

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### ToolTipText

当用户将鼠标悬停在标签上时作为工具提示显示的多行**String**。

### Top

从容器顶部到标签顶部的垂直距离。**Double**。

### UseMnemonic

[**Caption**](#caption)中的`&`是否将下一个字符标记为键盘助记符。**Boolean**，默认**True**。为**False**时，&符号按原样渲染。

### VerticalAlignment

标题在标签矩形内的垂直放置。[**VerticalAlignmentConstants**](/official/Reference/VBRUN/Constants/VerticalAlignmentConstants)的成员：**vbVerticalAlignTop** (0，默认)、**vbVerticalAlignMiddle** (1)或**vbVerticalAlignBottom** (2)。

### Visible

标签是否显示。**Boolean**，默认**True**。

### WhatsThisHelpID

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。参见[**ShowWhatsThis**](#showwhatsthis)。
:::

### Width

控件的宽度，默认以缇为单位（或使用容器的**ScaleMode**单位）。**Double**。当[**AutoSize**](#autosize)为**True**时自动计算。

### WordWrap

当标题否则会超出[**Width**](#width)时是否在空白处分成多行。**Boolean**，默认**False**。

## 方法

### Drag

开始、完成或取消手动VB风格拖动操作。与OLE拖动不同——参见[**OLEDrag**](#oledrag)。

语法：*object*.**Drag** [ *Action* ]

*Action*
: *可选* [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants)的成员：**vbCancel** (0)、**vbBeginDrag** (1，默认)或**vbEndDrag** (2)。

### LinkExecute

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中未实现。
:::

语法：*object*.**LinkExecute** *Command*

### LinkPoke

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中未实现。
:::

语法：*object*.**LinkPoke**

### LinkRequest

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中未实现。
:::

语法：*object*.**LinkRequest**

### LinkSend

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中未实现。
:::

语法：*object*.**LinkSend**

### Move

在单次调用中重新定位并可选地调整标签大小。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**值。

*Top*、*Width*、*Height*
: *可选* 对应属性的新值。省略的值保持不变。

### OLEDrag

从标签发起OLE拖动操作，引发[**OLEStartDrag**](#olestartdrag)事件以便应用程序填充**DataObject**。

语法：*object*.**OLEDrag**

### Refresh

强制立即重绘父控件绘图表面上的标签矩形。

语法：*object*.**Refresh**

### ShowWhatsThis

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。
:::

语法：*object*.**ShowWhatsThis**

### ZOrder

将标签置于其容器内无窗口同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront** (0，默认)或**vbSendToBack** (1)。

## 事件

### Change

当[**Caption**](#caption)被赋值与当前内容不同的值时引发。

语法：*object*\_**Change**( )

### Click

用户单击标签矩形时引发。**默认事件。**

语法：*object*\_**Click**( )

### DblClick

用户双击标签矩形时引发。

语法：*object*\_**DblClick**( )

### DragDrop

手动VB风格拖动操作在目标控件上结束时在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

手动VB风格拖动操作进行中时在光标下方的控件上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### Initialize

在标签连接到其容器的绘制周期后但首次绘制前引发一次。用于依赖容器状态的最后时刻设置。

语法：*object*\_**Initialize**( )

### LinkClose

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中不会引发。
:::

### LinkError

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中不会引发。
:::

### LinkNotify

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中不会引发。
:::

### LinkOpen

::: info
保留用于与VB6的DDE功能兼容；目前在twinBASIC中不会引发。
:::

### MouseDown

用户在标签上按下任意鼠标按钮时引发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

光标在标签上移动时引发。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

用户在标签上释放鼠标按钮时引发。

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