---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4ac6c990-b6b5-4907-8df7-21c47b18dfbc'
  PropagateID: '4ac6c990-b6b5-4907-8df7-21c47b18dfbc'
  ReservedCode1: '22e935a0-ec24-46ce-868d-dcd32e35acf9'
  ReservedCode2: '22e935a0-ec24-46ce-868d-dcd32e35acf9'
---

---
title: "OptionButton 选项按钮"
parent: VB Package
permalink: /tB/Packages/VB/OptionButton/
---

# OptionButton 类

**OptionButton**是一个Win32原生控件，显示一个小的圆形选择器，后面可选文本标题，用于在一组相关选项中让用户进行单项选择。共享相同[**Container**](#container)的选项按钮形成*互斥组*：选中一个会自动清除同一容器中的其他选项按钮。

该控件通常在设计时放置在[**Form**](/official/Reference/VB/Form/)、[**Frame**](/official/Reference/VB/Frame/)或**UserControl**上。默认属性是[**Value**](#value)，默认事件是[**Click**](#click)。

```vb
Private Sub Form_Load()
    optHTML.Caption     = "&HTML"
    optMarkdown.Caption = "&Markdown"
    optPlain.Caption    = "&Plain text"
    optHTML.Value       = True            ' default selection
End Sub

Private Sub optHTML_Click()
    Debug.Print "Output format: HTML"
End Sub
```


## 互斥行为

将一个选项按钮的[**Value**](#value)设置为**True**会清除[**Container**](#container)相同的所有其他选项按钮——通常是父窗体或[**Frame**](/official/Reference/VB/Frame/)。同级Frame中的选项按钮不受影响，因此单个窗体可以承载任意数量的独立组：将属于一个组的按钮放在一个Frame上，属于不同组的按钮放在另一个Frame上（或直接放在窗体上）。

```vb
' 两个独立组在同一窗体上：
'   fraSize:   optSmall, optMedium, optLarge   (fraSize的子控件)
'   fraColour: optRed, optGreen, optBlue       (fraColour的子控件)
```

将[**Value**](#value)设置为**False**从不会取消选择其他按钮——没有自动*回退*到其他选项，因此应用程序通常通过在启动时将其中一个设置为**True**来保证每组中恰好有一个按钮被选中。将**False**赋值给当前选中的按钮会使该组无选中状态，直到用户（或代码）选择另一个。

## Click语义

[**Click**](#click)仅在[**Value**](#value)从**False**转换为**True**时引发——无论用户点击了按钮、按了访问键还是在代码中赋值**True**。重新点击已选中的选项按钮不会产生效果，将**False**赋值给已选中的按钮*不会*引发[**Click**](#click)。该事件在窗体加载期间也不会引发；它在控件的[**Initialize**](#initialize)事件运行后开始引发。

## 标题和助记符

选择器旁边（或当[**Alignment**](#alignment)为`tbRightJustify`时在选择器之前）显示的文本来自[**Caption**](#caption)。标题中的&符号将下一个字符标记为键盘助记符：按**Alt+**该字符可将焦点移到选项按钮并选中它。使用`&&`显示字面&符号。

```vb
optTerms.Caption = "I &agree to the terms"
optTerms.Caption = "Use && in folder names"   ' 显示为: Use & in folder names
```

## 图形样式

当[**Style**](#style)为**vbButtonGraphical**时，选项按钮为所有者绘制模式，显示分配给[**Picture**](#picture)、[**DownPicture**](#downpicture)和[**DisabledPicture**](#disabledpicture)的位图，而非标准的圆形选择器。[**PictureAlignment**](#picturealignment)、[**Padding**](#padding)和[**PictureDpiScaling**](#picturedpiscaling)控制图片相对于标题的定位方式。

## 属性

### Alignment

指定[**Caption**](#caption)文本出现在选择器的哪一侧。

语法：*object*.**Alignment** [ = *value* ]

*value*
: [**AlignmentConstantsNoCenter**](/official/Reference/VBRUN/Constants/AlignmentConstantsNoCenter)的成员：**tbLeftJustify** (0，默认——标题在选择器右侧)或**tbRightJustify** (1——标题在选择器左侧)。

### Anchors

选项按钮的对应边缘跟随父控件调整大小时所依据的父控件边缘集合。只读——通过返回的**Anchors**对象分配单独的`.Left`、`.Top`、`.Right`、`.Bottom`标志。

### Appearance

确定操作系统如何绘制控件的边框。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。

### BackColor

背景颜色，类型为**OLE_COLOR**。默认为系统3D面色。

### Caption

选项按钮旁边显示的文本。&符号标记下一个字符为助记符；`&&`产生字面&符号。字符串直接从底层窗口读取——赋值给**Caption**会立即反映。

语法：*object*.**Caption** [ = *string* ]

### CausesValidation

确定先前获得焦点的控件的[**Validate**](#validate)事件是否在此控件获得焦点之前运行。**Boolean**，默认**True**。

### Container

承载此选项按钮的控件——通常是[**Frame**](/official/Reference/VB/Frame/)或父窗体。使用**Get**读取，使用**Set**更改。在运行时设置**Container**会将选项按钮重新父级化到不同的组；它自动从旧组的互斥集合中排除并包含在新组中。

### ControlType

只读的[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值，将此控件标识为选项按钮。始终为**vbOptionButton**。

### DisabledPicture

当控件禁用且[**Style**](#style)为**vbButtonGraphical**时替代[**Picture**](#picture)绘制的**StdPicture**。

### Dock

选项按钮在其容器中的停靠位置。[**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants)的成员：**vbDockNone**（默认）、**vbDockLeft**、**vbDockTop**、**vbDockRight**、**vbDockBottom**或**vbDockFill**。停靠控件忽略[**Anchors**](#anchors)。

### DownPicture

当[**Style**](#style)为**vbButtonGraphical**时，控件处于按下/选中状态时替代[**Picture**](#picture)绘制的**StdPicture**。

### DragIcon

控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时自动拖动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual** (0，默认——从代码调用[**Drag**](#drag))或**vbAutomatic** (1)。

### Enabled

确定控件是否接受用户输入。禁用的选项按钮显示其当前值但变暗并忽略键盘和鼠标交互。**Boolean**，默认**True**。

### Font

用于渲染[**Caption**](#caption)的**StdFont**。便捷属性**FontName**、**FontSize**、**FontBold**、**FontItalic**、**FontStrikethru**和**FontUnderline**读写此对象的相应成员。

### ForeColor

标题的文本颜色，类型为**OLE_COLOR**。默认为系统按钮文本色。

### Height

控件的高度，默认以缇为单位（或使用容器的**ScaleMode**单位）。**Single**。

### HelpContextID

标识应用程序帮助文件中主题的**Long**值，当用户在控件具有焦点时按**F1**时检索。

### hWnd

底层按钮的Win32窗口句柄，类型为**LongPtr**。只读。可用于传递给API函数。

### Index

当控件是控件数组的一部分时，此实例在数组中的从零开始的**Long**索引。在非数组实例上读取**Index**会引发运行时错误343（*Object not an array*）。运行时只读。

### Left

从容器的左边缘到控件左边缘的水平距离。**Single**。

### MaskColor

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。
:::

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于控件上时用作鼠标光标的**StdPicture**。

### MousePointer

指针位于控件上时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### OLEDropMode

控件如何响应OLE放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone**或**vbOLEDropManual**。OptionButton不支持自动放置模式。

### Opacity

控件的不透明度百分比（0--100，默认100）。超出范围的值在**Initialize**时被钳制。子控件需要Windows 8或更高版本。

### Padding

图片和标题之间（当[**PictureAlignment**](#picturealignment)为**vbAlignLeft**或**vbAlignRight**时）或标题与对应边缘之间（当**vbAlignTop**或**vbAlignBottom**时）插入的空白像素数。**Long**，默认2。仅在[**Style**](#style)为**vbButtonGraphical**时有意义。

### Parent

对最终包含此控件的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）的引用。只读。与[**Container**](#container)不同，后者返回直接父级——对于放置在[**Frame**](/official/Reference/VB/Frame/)内的选项按钮，**Container**返回Frame而**Parent**返回窗体。

### Picture

当[**Style**](#style)为**vbButtonGraphical**时在控件上绘制的**StdPicture**。赋值**Nothing**恢复空图片而非移除位图表面。

### PictureAlignment

当[**Style**](#style)为**vbButtonGraphical**时[**Picture**](#picture)相对于标题的定位方式。[**AlignConstants**](/official/Reference/VBRUN/Constants/AlignConstants)的成员：**vbAlignNone**、**vbAlignTop**（默认）、**vbAlignBottom**、**vbAlignLeft**、**vbAlignRight**。

### PictureDpiScaling

当为**True**时，在绘制前按当前DPI因子缩放[**Picture**](#picture)、[**DownPicture**](#downpicture)和[**DisabledPicture**](#disabledpicture)。**Boolean**，默认**False**。

### RightToLeft

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。使用[**Alignment**](#alignment)将标题翻转到选择器左侧。
:::

### Style

在标准Win32选项按钮外观和所有者绘制图形按钮之间选择。[**ButtonConstants**](/official/Reference/VBRUN/Constants/ButtonConstants)的成员：**vbButtonStandard** (0，默认)或**vbButtonGraphical** (1)。在运行时更改**Style**会重新创建底层窗口。

### TabIndex

控件在窗体TAB键导航顺序中的位置。**Long**。

### TabStop

用户是否可以通过按**TAB**键到达控件。**Boolean**，默认**True**。TAB键导航也遵循选项按钮组约定：一旦焦点进入一个组，箭头键在组内成员之间移动焦点（和选择），而非在不相关的控件之间移动。禁用的控件无论此设置如何都会被跳过。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### ToolTipText

当用户将鼠标悬停在控件上时作为工具提示显示的多行**String**。

### Top

从容器顶部到控件顶部的垂直距离。**Single**。

### TransparencyKey

一个**OLE_COLOR**值，设置后在渲染的控件中变为完全透明。默认`-1`禁用此效果。子控件需要Windows 8或更高版本。

### UseMaskColor

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。
:::

### Value

选项按钮的当前状态。**默认属性。**

语法：*object*.**Value** [ = *value* ]

*value*
: **Boolean**：**True**表示选项按钮被选中，**False**表示被清除。

赋值**True**会清除同一[**Container**](#container)中的所有其他选项按钮并引发[**Click**](#click)。赋值**False**仅清除此按钮不影响其他按钮，且不引发[**Click**](#click)。赋值按钮已持有的值不会产生效果。

### Visible

控件是否显示。**Boolean**，默认**True**。

### VisualStyles

绘制控件时是否使用操作系统主题引擎。**Boolean**。

### WhatsThisHelpID

标识应用程序帮助文件中"这是什么？"弹出帮助主题的**Long**值。参见[**ShowWhatsThis**](#showwhatsthis)。

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

强制控件立即重绘。

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

### Click

当[**Value**](#value)从**False**转换为**True**时引发——无论用户点击了选择器、按了访问键还是在代码中赋值**True**。在窗体首次显示时不引发、在不更改值的点击时不引发、或在**Value**设置为**False**时不引发。**默认事件。**

语法：*object*\_**Click**( )

### DblClick

用户双击选项按钮时引发。配对的第一次点击如果更改了[**Value**](#value)也会引发[**Click**](#click)；第二次点击在此处传递。

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

在控件的底层窗口创建且其设计时[**Value**](#value)已应用后引发一次。[**Click**](#click)在**Initialize**运行前不会引发，因此设计时选择不会引发虚假事件。

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

### Validate

焦点移动到另一个[**CausesValidation**](#causesvalidation)为**True**的控件时引发。将*Cancel*设置为**True**可使焦点保留在此控件上。

语法：*object*\_**Validate**( *Cancel* **As Boolean** )