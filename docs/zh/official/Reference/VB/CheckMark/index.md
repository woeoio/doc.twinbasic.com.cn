---
title: CheckMark
parent: VB Package
permalink: /tB/Packages/VB/CheckMark/
---

# CheckMark 类

**CheckMark**是无窗口控件，绘制单个勾选字形——已勾选、未勾选或灰色——该字形会缩放以填充其矩形区域。与[**CheckBox**](/official/Reference/VB/CheckBox/)不同，它没有标题、没有字体，不能获取焦点或接收键盘输入；它本质上是复选框的方框部分，以布局所需的任意大小渲染。这使它特别适用于报表和其他密集布局中固定大小的系统勾选框看起来不协调的场景，但也适用于**Form**或**UserControl**。

默认属性是[**Value**](#value)，默认事件是[**Click**](#click)。

```vb
Private Sub Form_Load()
    Check1.Value = vbUnchecked
End Sub

Private Sub Check1_Click()
    Debug.Print "Check is now: " & Check1.Value
End Sub
```


## 三态行为

[**Value**](#value)的类型为[**CheckBoxConstants**](/official/Reference/VBRUN/Constants/CheckBoxConstants)：

| 常量             | 值 | 含义                                   |
|------------------|----|----------------------------------------|
| **vbUnchecked**  | 0  | 勾选已清除。                           |
| **vbChecked**    | 1  | 勾选已选中。                           |
| **vbGrayed**     | 2  | 勾选处于不确定（灰色）状态。           |

用户点击仅在**vbChecked**和**vbUnchecked**之间切换**Value**。灰色状态只能从代码到达——赋值**vbGrayed**给**Value**以显示。

```vb
Check1.Value = vbGrayed     ' show the indeterminate state
```

## 绘制模式

[**VisualStyles**](#visualstyles)选择字形的渲染方式：

- **VisualStyles = False**（默认）——使用GDI **DrawFrameControl**原语绘制。遵循[**Appearance**](#appearance)：**vbAppear3d**使用经典的凸起/凹陷外观，**vbAppearFlat**使用单像素轮廓。禁用的勾选或处于**vbGrayed**状态的勾选在虚线三态图案上绘制。
- **VisualStyles = True**——通过操作系统主题引擎（UXTHEME）绘制，因此字形使用当前视觉样式主题。此模式下**Appearance**被忽略。

## 背景

[**BackStyle**](#backstyle)控制字形后面的矩形区域在绘制字形之前是否填充：

- **vbBFTransparent**（默认）——仅绘制字形；容器绘制的内容透过显示。
- **vbBFOpaque**——先用[**BackColor**](#backcolor)填充矩形。

## 属性

### Anchors

决定控件的哪些边随容器对应边调整的**Anchors**对象。只读——通过返回的对象设置各个边。

### Appearance

当[**VisualStyles**](#visualstyles)为**False**时字形的阴影方式。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppear3d**（默认）或**vbAppearFlat**。当[**VisualStyles**](#visualstyles)为**True**时被忽略。

### BackColor

背景色，作为**OLE_COLOR**。默认为系统3D表面颜色。仅在[**BackStyle**](#backstyle)为**vbBFOpaque**时使用。

### BackStyle

控件在绘制字形之前是否填充其矩形区域。**BackFillStyleConstants**的成员：**vbBFTransparent**（默认）或**vbBFOpaque**。

### Container

承载此**CheckMark**的直接容器（**Form**、**Frame**、**PictureBox**或其他容器控件）。用**Set**赋新值可将控件移动到不同的容器。

### ControlType

标识此控件为勾选标记的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbCheckMark**。

### Dock

控件是否填充容器的一条边或整个内部区域。**DockModeConstants**的成员，默认**vbDockNone**。

### DragIcon

在控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时自行拖动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual**（0，默认——从代码调用[**Drag**](#drag)）或**vbAutomatic**（1）。

### Enabled

决定控件是否响应鼠标输入。禁用的**CheckMark**仍显示其当前值但变暗，忽略点击。**Boolean**，默认**True**。

### Height

控件的高度，默认以缇为单位（或以容器的**ScaleMode**单位）。**Single**。

### Index

当控件是控件数组的一部分时，此实例在数组中的**Long**零基索引。在非数组控件上读取**Index**会引发运行时错误343（*对象不是数组*）。运行时只读。

### Left

从容器左边缘到控件左边缘的水平距离。**Single**。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针在控件上方时用作鼠标光标的**StdPicture**。

### MousePointer

指针在控件上方时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### Parent

对包含此控件的**Form**（或**UserControl**）的引用。只读。

### TabIndex

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。控件不可聚焦，因此该属性在运行时无效。
:::

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### ToolTipText

用户悬停在控件上方时作为工具提示显示的多行**String**。

### Top

从容器顶部到控件顶部的垂直距离。**Single**。

### Value

勾选的当前状态。**默认属性。**

语法：*object*.**Value** [ = *value* ]

*value*
: [**CheckBoxConstants**](/official/Reference/VBRUN/Constants/CheckBoxConstants)的成员：**vbUnchecked**（0）、**vbChecked**（1）或**vbGrayed**（2）。

用户点击仅在**vbChecked**和**vbUnchecked**之间切换**Value**；**vbGrayed**只能从代码设置。

### Visible

控件是否显示。**Boolean**，默认**True**。

### VisualStyles

当**True**时，字形通过操作系统主题引擎绘制；当**False**（默认）时，使用**DrawFrameControl**绘制并遵循[**Appearance**](#appearance)。**Boolean**。

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

当用户用左鼠标按钮点击控件时引发——在[**Value**](#value)在**vbChecked**和**vbUnchecked**之间切换之后。**默认事件。**

语法：*object*\_**Click**( )

### DblClick

当用户双击控件时引发。

语法：*object*\_**DblClick**( )

### DragDrop

当手动拖动操作在目标控件上结束时在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

当手动拖动操作进行中时在光标下方的控件上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

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