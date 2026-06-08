---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9835fb96-979d-4b56-b685-fbfde9761bf4'
  PropagateID: '9835fb96-979d-4b56-b685-fbfde9761bf4'
  ReservedCode1: 'e28cc916-a8fb-4b41-bce3-2cfb7f6a8860'
  ReservedCode2: 'e28cc916-a8fb-4b41-bce3-2cfb7f6a8860'
---

---
title: CheckBox
parent: VB Package
permalink: /tB/Packages/VB/CheckBox/
---

# CheckBox 类

**CheckBox**是Win32原生控件，显示一个小方框，可选后跟文本标题，用于让用户在两个值之间做出选择，如*是*/*否*、*真*/*假*或*开*/*关*。也可以从代码将其设为第三种不确定（灰色）状态，通常表示"不适用"或"混合"。

控件通常在设计时放置在**Form**或**UserControl**上。默认属性是[**Value**](#value)，默认事件是[**Click**](#click)。

```vb
Private Sub Form_Load()
    Check1.Caption = "I &agree to the terms"
    Check1.Value = vbUnchecked
End Sub

Private Sub Check1_Click()
    cmdContinue.Enabled = (Check1.Value = vbChecked)
End Sub
```


## 三态行为

[**Value**](#value)的类型为[**CheckBoxConstants**](/official/Reference/VBRUN/Constants/CheckBoxConstants)：

| 常量             | 值 | 含义                                   |
|------------------|----|----------------------------------------|
| **vbUnchecked**  | 0  | 复选框未选中。                         |
| **vbChecked**    | 1  | 复选框已选中。                         |
| **vbGrayed**     | 2  | 复选框处于不确定（灰色）状态。         |

点击未选中或灰色的复选框会选中它；点击已选中或灰色的复选框会取消选中。灰色状态只能从代码到达——赋值**vbGrayed**给**Value**以显示。赋值负数会引发运行时错误380（*无效属性值*）。

```vb
Check1.Value = vbGrayed     ' show the indeterminate state
```

## 标题和助记符

显示在方框旁边（或当[**Alignment**](#alignment)为`tbRightJustify`时在方框之前）的文本来自[**Caption**](#caption)。标题中的和号将下一个字符标记为键盘助记符：按**Alt+**该字符将焦点移到复选框并切换其值。使用`&&`显示字面和号。

```vb
Check1.Caption = "Use && in folder names"   ' renders as: Use & in folder names
```

## 图形样式

当[**Style**](#style)为**vbButtonGraphical**时，复选框为所有者绘制，显示赋给[**Picture**](#picture)、[**DownPicture**](#downpicture)和[**DisabledPicture**](#disabledpicture)的位图，而非标准方块。[**PictureAlignment**](#picturealignment)、[**Padding**](#padding)和[**PictureDpiScaling**](#picturedpiscaling)控制图片相对于标题的定位方式。

## 数据绑定

设置[**DataSource**](#datasource)和[**DataField**](#datafield)将控件的[**Value**](#value)连接到**Data**控件记录集的字段。绑定字段作为**Boolean**读取：非零/`True`值将[**Value**](#value)设为**vbChecked**，零/`False`设为**vbUnchecked**。赋值非Boolean字段值会引发运行时错误13（*类型不匹配*）。

## 属性

### Alignment

指定[**Caption**](#caption)文本出现在方框的哪一侧。

语法：*object*.**Alignment** [ = *value* ]

*value*
: [**AlignmentConstantsNoCenter**](/official/Reference/VBRUN/Constants/AlignmentConstantsNoCenter)的成员：**tbLeftJustify**（0，默认——标题在方框右侧）或**tbRightJustify**（1——标题在方框左侧）。

### Appearance

决定操作系统绘制控件边框的方式。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。

### BackColor

背景色，作为**OLE_COLOR**。默认为系统3D表面颜色。

### Caption

显示在复选框旁边的文本。和号将下一个字符标记为助记符；`&&`产生字面和号。字符串直接从底层窗口读取——赋值给**Caption**会立即反映。

语法：*object*.**Caption** [ = *string* ]

### CausesValidation

决定先前聚焦控件的[**Validate**](#validate)事件是否在此控件获得焦点之前运行。**Boolean**，默认**True**。

### ControlType

标识此控件为复选框的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbCheckBox**。

### DataField

绑定的[**DataSource**](#datasource)记录集中由[**Value**](#value)镜像的字段名称。**String**。

### DataSource

对**Data**控件（或其他**DataSource**提供者）的引用，其记录集为[**DataField**](#datafield)提供值。用**Set**设置。

### DisabledPicture

当控件禁用且[**Style**](#style)为**vbButtonGraphical**时，替代[**Picture**](#picture)绘制的**StdPicture**。

### DownPicture

当控件处于按下状态且[**Style**](#style)为**vbButtonGraphical**时，替代[**Picture**](#picture)绘制的**StdPicture**。

### DragIcon

在控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时自行拖动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual**（0，默认——从代码调用[**Drag**](#drag)）或**vbAutomatic**（1）。

### Enabled

决定控件是否接受用户输入。禁用的复选框显示其当前值但变暗，忽略键盘和鼠标交互。**Boolean**，默认**True**。

### Font

用于渲染[**Caption**](#caption)的**StdFont**。便捷属性**FontName**、**FontSize**、**FontBold**、**FontItalic**、**FontStrikethru**和**FontUnderline**读写此对象的对应成员。

### ForeColor

标题的文本颜色，作为**OLE_COLOR**。默认为系统按钮文本颜色。

### Height

控件的高度，默认以缇为单位（或以容器的**ScaleMode**单位）。**Single**。

### HelpContextID

标识应用程序帮助文件中主题的**Long**，当用户在控件有焦点时按**F1**时检索。

### hWnd

底层按钮的Win32窗口句柄，作为**LongPtr**。只读。适用于传递给API函数。

### Index

当控件是控件数组的一部分时，此实例在数组中的**Long**零基索引。运行时只读。

### Left

从容器左边缘到控件左边缘的水平距离。**Single**。

### MaskColor

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。
:::

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针在控件上方时用作鼠标光标的**StdPicture**。

### MousePointer

指针在控件上方时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### OLEDropMode

控件如何响应OLE放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone**或**vbOLEDropManual**。CheckBox不支持自动放置模式。

### Opacity

控件的不透明度百分比（0--100，默认100）。超出范围的值在**Initialize**时被钳制。子控件需要Windows 8或更高版本。

### Padding

在图片和标题之间插入的空像素数（当[**PictureAlignment**](#picturealignment)为**vbAlignLeft**或**vbAlignRight**时）或在标题和对应边缘之间（当**vbAlignTop**或**vbAlignBottom**时）。**Long**，默认2。仅在[**Style**](#style)为**vbButtonGraphical**时有意义。

### Parent

对包含此控件的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）的引用。只读。

### Picture

当[**Style**](#style)为**vbButtonGraphical**时绘制在控件上的**StdPicture**。赋值**Nothing**恢复空图片而非移除位图表面。

### PictureAlignment

当[**Style**](#style)为**vbButtonGraphical**时[**Picture**](#picture)相对于标题的定位方式。[**AlignConstants**](/official/Reference/VBRUN/Constants/AlignConstants)的成员：**vbAlignNone**、**vbAlignTop**（默认）、**vbAlignBottom**、**vbAlignLeft**、**vbAlignRight**。

### PictureDpiScaling

当**True**时，绘制前按当前DPI因子缩放[**Picture**](#picture)、[**DownPicture**](#downpicture)和[**DisabledPicture**](#disabledpicture)。**Boolean**，默认**False**。

### RightToLeft

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。使用[**Alignment**](#alignment)将标题翻转到方框左侧。
:::

### Style

在标准Win32复选框外观和所有者绘制图形按钮之间选择。[**ButtonConstants**](/official/Reference/VBRUN/Constants/ButtonConstants)的成员：**vbButtonStandard**（0，默认）或**vbButtonGraphical**（1）。在运行时更改**Style**会重新创建底层窗口。

### TabIndex

控件在窗体TAB键导航顺序中的位置。**Long**。

### TabStop

用户是否可以通过按**TAB**键到达控件。**Boolean**，默认**True**。禁用的控件无论此设置如何都会被跳过。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### ToolTipText

用户悬停在控件上方时作为工具提示显示的多行**String**。

### Top

从容器顶部到控件顶部的垂直距离。**Single**。

### TransparencyKey

设置后成为渲染控件中完全透明的**OLE_COLOR**。默认`-1`禁用效果。子控件需要Windows 8或更高版本。

### UseMaskColor

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。
:::

### Value

复选框的当前状态。**默认属性。**

语法：*object*.**Value** [ = *value* ]

*value*
: [**CheckBoxConstants**](/official/Reference/VBRUN/Constants/CheckBoxConstants)的成员：**vbUnchecked**（0）、**vbChecked**（1）或**vbGrayed**（2）。负数会引发运行时错误380。

赋值与当前值不同的值会引发[**Click**](#click)事件。

### Visible

控件是否显示。**Boolean**，默认**True**。

### VisualStyles

绘制控件时是否使用操作系统主题引擎。**Boolean**。

### WhatsThisHelpID

标识应用程序帮助文件中"这是什么？"帮助弹出主题的**Long**。参见[**ShowWhatsThis**](#showwhatsthis)。

### Width

控件的宽度。**Single**。

## 方法

### Drag

开始、完成或取消手动拖放操作。通常在[**DragMode**](#dragmode)为**vbManual**时从[**MouseDown**](#mousedown)处理程序调用。

语法：*object*.**Drag** [ *Action* ]

*Action*
: *可选* [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants)的成员：**vbCancel**（0）、**vbBeginDrag**（1，默认）或**vbEndDrag**（2）。

### Move

在单次调用中重新定位并可选地调整控件的尺寸。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**。

*Top*、*Width*、*Height*
: *可选* 对应属性的新值。省略的值保持不变。

### OLEDrag

从控件发起OLE拖动操作，引发[**OLEStartDrag**](#olestartdrag)事件以便应用程序填充**DataObject**。

语法：*object*.**OLEDrag**

### Refresh

强制立即重绘控件。

语法：*object*.**Refresh**

### SetFocus

将输入焦点移到控件。控件必须同时[**Visible**](#visible)和[**Enabled**](#enabled)，否则引发运行时错误5（*无效的过程调用或参数*）。

语法：*object*.**SetFocus**

### ShowWhatsThis

以"这是什么？"弹窗形式显示由[**WhatsThisHelpID**](#whatsthishelpid)标识的主题。

语法：*object*.**ShowWhatsThis**

### ZOrder

将控件带到同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront**（0，默认）或**vbSendToBack**（1）。

## 事件

### Click

在[**Value**](#value)更改后引发——无论用户点击了方框、按了访问键还是在代码中赋了不同的值。**默认事件。**

语法：*object*\_**Click**( )

### DragDrop

当手动拖动操作在目标控件上结束时在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

当手动拖动操作进行中时在光标下方的控件上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### GotFocus

当控件获得输入焦点时引发。

语法：*object*\_**GotFocus**( )

### KeyDown

当控件有焦点时用户按下任意键时引发。

语法：*object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

当用户输入产生ANSI按键的字符时引发。

语法：*object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

当控件有焦点时用户释放键时引发。

语法：*object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LostFocus

当控件失去输入焦点时引发。

语法：*object*\_**LostFocus**( )

### MouseDown

当用户在控件上方按下任意鼠标按钮时引发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

当光标在控件上方移动时引发。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

当用户在控件上方释放鼠标按钮时引发。

语法：*object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### OLECompleteDrag

当OLE拖动操作完成时在源控件上引发，指示目标接受了哪种效果（复制、移动、无）。

语法：*object*\_**OLECompleteDrag**( *Effect* **As Long** )

### OLEDragDrop

当用户在目标控件上放置数据时在目标控件上引发。

语法：*object*\_**OLEDragDrop**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### OLEDragOver

当OLE拖动经过目标控件时在目标控件上引发。

语法：*object*\_**OLEDragOver**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### OLEGiveFeedback

在拖动期间在源控件上引发，以便应用程序调整光标或其他视觉反馈。

语法：*object*\_**OLEGiveFeedback**( *Effect* **As Long**, *DefaultCursors* **As Boolean** )

### OLESetData

当目标请求已注册但尚未提供的格式的数据时在源控件上引发。

语法：*object*\_**OLESetData**( *Data* **As DataObject**, *DataFormat* **As Integer** )

### OLEStartDrag

在OLE拖动开始时在源控件上引发，以便应用程序填充**DataObject**并选择允许的效果。

语法：*object*\_**OLEStartDrag**( *Data* **As DataObject**, *AllowedEffects* **As Long** )

### Validate

当焦点移动到[**CausesValidation**](#causesvalidation)为**True**的另一个控件时引发。将*Cancel*设为**True**使焦点保留在此控件上。

语法：*object*\_**Validate**( *Cancel* **As Boolean** )