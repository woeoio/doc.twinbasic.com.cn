---
title: Frame
parent: VB Package
permalink: /tB/Packages/VB/Frame/
---

# Frame 类

**Frame**是Win32原生容器控件，在一组带标题的边框内将一组相关控件分组。它有两个不同的用途——视觉上提示包含的控件属于同一组，以及为[**OptionButton**](/official/Reference/VB/OptionButton/)控件提供逻辑分组：同一框架内的选项按钮互斥，但与窗体上其他位置的选项按钮独立。在设计时拖放到框架上的控件成为其子级，移动、隐藏、禁用或销毁框架会随之移动、隐藏、禁用或销毁整个组。

框架本身不能接收输入焦点。其[**Caption**](#caption)中的助记标记（`&`）有效，但按**Alt+**该字符会将焦点移到TAB顺序中的下一个控件而非框架本身——与[**Label**](/official/Reference/VB/Label/)完全相同。

默认属性是[**Caption**](#caption)，默认事件是[**Click**](#click)。

```vb
Private Sub Form_Load()
    fraOutput.Caption = "&Output format"
    optHTML.Caption     = "&HTML"
    optMarkdown.Caption = "&Markdown"
    optPlain.Caption    = "&Plain text"
    optHTML.Value = True            ' default selection within fraOutput
End Sub

Private Sub fraOutput_Click()
    Debug.Print "Frame clicked (between the option buttons)"
End Sub
```


## 容器行为

框架是真正的容器：其中每个控件的Win32父级是框架的`hWnd`，其坐标相对于框架的客户区而非窗体。因此：

- 切换[**Visible**](#visible)或[**Enabled**](#enabled)会影响每个包含的控件。
- 调用[**Move**](#move)重新定位框架，子控件随其移动而不会各自引发调整大小。
- 框架的[**Anchors**](#anchors)和[**Dock**](#dock)设置使其随父级拉伸，因此整个组一起调整大小。
- 控件的[**Container**](#container)属性返回其所在的框架（框架自身的[**Container**](#container)返回承载它的窗体或其他框架）。

## 标题、助记符和边框

[**Caption**](#caption)中的文本由标准Win32分组框样式沿边框的顶部边缘渲染。标题中的和号将下一个字符标记为键盘助记符；使用`&&`显示字面和号。按**Alt+**标记字符将焦点移到TAB顺序中的下一个控件——框架本身不获取焦点。

[**BorderStyle**](#borderstyle)选择标准带标题单线边框（**vbFixedSingleBorder**，默认）和无边框模式（**vbNoBorder**）。在**vbNoBorder**模式下，标准分组框渲染被完全绕过——既不绘制线条也不绘制标题文本——框架成为纯矩形区域。[**Appearance**](#appearance)进一步选择标准边框的3-D和平面变体。

## OptionButton 分组

每个框架定义自己的选项按钮组。当用户选择父级为此框架的[**OptionButton**](/official/Reference/VB/OptionButton/)时，同一框架上的所有其他选项按钮会自动清除，但窗体上（或同级框架中）的选项按钮不受影响。使用框架在同一窗体上呈现多个独立的单选式选择：

```vb
' Two independent option-button groups on one form:
'   fraSize:    optSmall, optMedium, optLarge
'   fraColour:  optRed, optGreen, optBlue
```

## 透明度和不透明度

[**Opacity**](#opacity)和[**TransparencyKey**](#transparencykey)启用了Windows的分层窗口功能。将[**Opacity**](#opacity)设置为100以下会使框架及其包含的控件半透明；将[**TransparencyKey**](#transparencykey)设置为某种颜色会使该颜色的像素在屏幕上完全透明。这两个功能在框架包含子控件时需要Windows 8或更高版本——否则仅影响框架自身的背景。

## 属性

### Anchors

决定框架的哪些边随父级对应边调整的边集合。只读——通过返回的**Anchors**对象设置各个`.Left`、`.Top`、`.Right`、`.Bottom`标志。

### Appearance

决定操作系统绘制框架边框的方式。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。

### BackColor

框架客户区的背景色，作为**OLE_COLOR**。默认为系统3D表面颜色。绘制在包含控件的后面。

### BorderStyle

框架边框的样式。[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants)的成员：**vbFixedSingleBorder**（1，默认——带标题的分组框线条）或**vbNoBorder**（0）。使用**vbNoBorder**时标题也被抑制，框架成为无边框背景面板。

### Caption

沿框架边框顶部边缘渲染的文本。**String**。**默认属性。**

语法：*object*.**Caption** [ = *string* ]

和号将下一个字符标记为助记符；`&&`产生字面和号。字符串直接从底层窗口读取——赋值给**Caption**会立即更新渲染。

### ClipControls

在绘制期间子控件是否被裁剪出框架的绘制区域。**Boolean**，默认**True**。在运行时更改**ClipControls**会重新创建底层窗口。

### Container

承载此框架的控件——通常是窗体或其他框架。用**Get**读取，用**Set**更改。设置**Container**在运行时将框架重新设置为其他容器的子级。

### ControlType

标识此控件为框架的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbFrame**。

### Dock

框架在其容器中的停靠位置。[**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants)的成员：**vbDockNone**（默认）、**vbDockLeft**、**vbDockTop**、**vbDockRight**、**vbDockBottom**或**vbDockFill**。停靠的框架忽略[**Anchors**](#anchors)。

### DragIcon

在框架被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

框架是否应在用户按住鼠标时自行拖动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual**（0，默认——从代码调用[**Drag**](#drag)）或**vbAutomatic**（1）。

### Enabled

决定框架及其包含的控件是否接受用户输入。禁用的框架会使内容变暗，忽略鼠标和键盘交互。**Boolean**，默认**True**。更改**Enabled**会触发立即重绘以使边框反映新状态。

### Font

用于渲染[**Caption**](#caption)的**StdFont**。便捷属性**FontBold**、**FontItalic**、**FontName**、**FontSize**、**FontStrikethru**和**FontUnderline**读写此对象的对应成员。

### FontBold

`Font.Bold`的快捷方式。**Boolean**。

### FontItalic

`Font.Italic`的快捷方式。**Boolean**。

### FontName

`Font.Name`的快捷方式。**String**。

### FontSize

`Font.Size`的快捷方式。**Single**，以磅为单位。

### FontStrikethru

`Font.Strikethrough`的快捷方式。**Boolean**。

### FontUnderline

`Font.Underline`的快捷方式。**Boolean**。

### ForeColor

用于绘制[**Caption**](#caption)的颜色，作为**OLE_COLOR**。默认为系统按钮文本颜色。

### Height

框架的高度，默认以缇为单位（或以容器的**ScaleMode**单位）。**Double**。

### HelpContextID

标识应用程序帮助文件中主题的**Long**，当用户在框架下方有活动控件时调用上下文帮助时检索。

### hWnd

框架的Win32窗口句柄，作为**LongPtr**。只读。适用于传递给API函数。

### Index

当框架是控件数组的一部分时，此实例在数组中的**Long**零基索引。在非数组实例上读取**Index**会引发运行时错误343（*对象不是数组*）。运行时只读。

### Left

从容器左边缘到框架左边缘的水平距离。**Double**。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针在框架上方时用作鼠标光标的**StdPicture**。

### MousePointer

指针在框架上方（且不在有自身设置的子控件上方）时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### MultiFramePosition

当框架承载在[**MultiFrame**](/official/Reference/VB/MultiFrame/)布局容器内时，此框架在**MultiFrame**有序序列中的**Long**零基位置。默认`-1`（未分配位置）。在**MultiFrame**外部该值被忽略。

### MultiFrameSize

当框架承载在[**MultiFrame**](/official/Reference/VB/MultiFrame/)内时，其尺寸作为**MultiFrame**可用范围的百分比（`0`表示"均匀共享"）。**Double**。在**MultiFrame**外部该值被忽略。

### Name

框架在其父窗体上的唯一设计时名称。运行时只读。

### OLEDropMode

框架如何响应OLE放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone**或**vbOLEDropManual**。Frame不支持自动放置模式；赋值**vbOLEDropAutomatic**会引发运行时错误5。

### Opacity

框架的不透明度百分比（0--100，默认100）。超出范围的值在**Initialize**时被钳制。低于100的值在框架有子控件时需要Windows 8或更高版本；进程外子窗口不受影响。

### OriginalMultiFramePosition

[**MultiFrame**](/official/Reference/VB/MultiFrame/)上次重排时框架的[**MultiFramePosition**](#multiframeposition)。**Long**，默认`-1`。由**MultiFrame**布局引擎在框架移动后用于压缩位置；通常不从用户代码写入。

### Parent

对最终包含框架的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）的引用。只读。与[**Container**](#container)不同，后者返回直接父级（窗体*或*封闭框架）。

### RightToLeft

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。
:::

### TabIndex

框架在窗体TAB键导航顺序中的位置。**Long**。框架本身不接收焦点，但**TabIndex**控制框架的助记符将焦点转发到哪里：**Alt+**标记字符移到**TabIndex**大于此值的下一个可聚焦控件。

### Tag

应用程序可用于将自定义数据与框架关联的自由格式**String**。框架忽略此属性。

### ToolTipText

用户悬停在框架边框或背景上方时作为工具提示显示的多行**String**。

### Top

从容器顶部到框架顶部的垂直距离。**Double**。

### TransparencyKey

设置后成为渲染框架中完全透明的**OLE_COLOR**——点击穿过到下面内容，相应像素不绘制。默认`-1`禁用效果。框架有子控件时需要Windows 8或更高版本。

### Visible

框架及其包含的控件是否显示。**Boolean**，默认**True**。

### VisualStyles

绘制框架边框和标题时是否使用操作系统主题引擎。**Boolean**，默认**True**。

### WhatsThisHelpID

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。参见[**ShowWhatsThis**](#showwhatsthis)。
:::

### Width

框架的宽度。**Double**。

## 方法

### Drag

开始、完成或取消手动拖放操作。通常在[**DragMode**](#dragmode)为**vbManual**时从[**MouseDown**](#mousedown)处理程序调用。

语法：*object*.**Drag** [ *Action* ]

*Action*
: *可选* [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants)的成员：**vbCancel**（0）、**vbBeginDrag**（1，默认）或**vbEndDrag**（2）。

### Move

在单次调用中重新定位并可选地调整框架的尺寸。包含的控件随其重新定位。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**。

*Top*、*Width*、*Height*
: *可选* 对应属性的新值。省略的值保持不变。

### OLEDrag

从框架发起OLE拖动操作，引发[**OLEStartDrag**](#olestartdrag)事件以便应用程序填充**DataObject**。

语法：*object*.**OLEDrag**

### Refresh

强制立即重绘框架及其边框。

语法：*object*.**Refresh**

### SetFocus

尝试将输入焦点移到框架。由于框架不可聚焦，此调用对哪个控件持有焦点没有可见效果，但提供它是为了与控件API其余部分保持一致，以及与通用调用**SetFocus**的代码兼容。

语法：*object*.**SetFocus**

### ShowWhatsThis

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。
:::

语法：*object*.**ShowWhatsThis**

### ZOrder

将框架带到容器内同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront**（0，默认）或**vbSendToBack**（1）。

## 事件

### Click

当用户单击框架的客户区或边框（即不在任何包含的控件上方）时引发。**默认事件。**

语法：*object*\_**Click**( )

### DblClick

当用户双击框架的客户区或边框时引发。

语法：*object*\_**DblClick**( )

### DragDrop

当手动拖动操作在此框架上结束时在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

当手动拖动操作在框架上方进行时在框架上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### Initialize

在框架的底层窗口已创建但尚未填充任何包含的控件后引发一次。适用于设置框架子级在其自身初始化时将读取的初始值。

语法：*object*\_**Initialize**( )

### MouseDown

当用户在框架的客户区或边框上方按下任意鼠标按钮时引发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

当光标在框架的客户区或边框上方移动时引发。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

当用户在框架的客户区或边框上方释放鼠标按钮时引发。

语法：*object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseWheel

当鼠标滚轮在框架上方转动时引发。twinBASIC新增。

语法：*object*\_**MouseWheel**( *Delta* **As Integer**, *Horizontal* **As Boolean** )

### OLECompleteDrag

当OLE拖动操作完成时在源控件上引发，指示目标接受了哪种效果（复制、移动、无）。

语法：*object*\_**OLECompleteDrag**( *Effect* **As Long** )

### OLEDragDrop

当用户在框架上放置数据时在框架上引发。

语法：*object*\_**OLEDragDrop**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### OLEDragOver

当OLE拖动经过框架时在框架上引发。

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