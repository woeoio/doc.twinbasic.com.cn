---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '66060a7a-957e-4e97-bb08-32bf4ac0ac71'
  PropagateID: '66060a7a-957e-4e97-bb08-32bf4ac0ac71'
  ReservedCode1: '43423b64-3c3c-4f38-8bdb-afc3158d1ed4'
  ReservedCode2: '43423b64-3c3c-4f38-8bdb-afc3158d1ed4'
---

---
title: Image
parent: VB Package
permalink: /tB/Packages/VB/Image/
---

# Image 类

**Image**是无窗口轻量级控件，用于显示图片——位图、JPEG、GIF、PNG、图标、光标或Windows图元文件。它是[**PictureBox**](/official/Reference/VB/PictureBox/)的小巧高效替代：没有底层Win32窗口、没有绘图表面、没有子控件、没有焦点——只有父级上的一个矩形，绘制[**Picture**](#picture)中的内容。Image控件非常适合logo、装饰图、自定义绘制按钮、字形行以及任何使用重量级**PictureBox**显得过重的地方。

默认属性是[**Picture**](#picture)，默认事件是[**Click**](#click)。

```vb
Private Sub Form_Load()
    Set imgLogo.Picture  = LoadPicture(App.Path & "\logo.png")
    imgLogo.Stretch      = True
    imgLogo.BorderStyle  = vbFixedSingleBorder
End Sub

Private Sub imgLogo_Click()
    MsgBox "Logo clicked"
End Sub
```


## 无窗口渲染

**Image**没有`hWnd`。框架在父级的绘制周期中将其直接绘制到父级的绘图表面上，因此控件比[**PictureBox**](/official/Reference/VB/PictureBox/)开销小得多，不添加自己的Win32窗口。其权衡与任何无窗口控件相同：

- 无焦点、无键盘输入、无`KeyDown` / `KeyPress` / `KeyUp` / `GotFocus` / `LostFocus` / `Validate`。
- 没有可传递给API函数的`hWnd`，也没有`SetFocus`。
- 不能承载子控件。

对于需要这些功能的场景，请改用[**PictureBox**](/official/Reference/VB/PictureBox/)。

## 拉伸和自动调整尺寸

[**Stretch**](#stretch)是尺寸行为的主开关：

- **Stretch = False**（默认）：图片以其自然像素尺寸绘制，每次赋值新的[**Picture**](#picture)时**Image**自动调整自身大小以匹配。用户仍可手动调整控件大小——一旦如此，图片会被裁剪或在自然边界周围填充（*不会*重新拉伸）。
- **Stretch = True**：图片被缩放以填充**Image**的矩形。重采样算法由[**StretchMode**](#stretchmode)选择；不保持宽高比。

图元文件（`vbPicTypeMetafile`、`vbPicTypeEMetafile`）是矢量的——它们始终缩放以适应且无论[**Stretch**](#stretch)设置如何都保持宽高比。

[**PictureDpiScaling**](#picturedpiscaling)为**True**时，在绘制前将自然像素尺寸乘以当前DPI缩放因子——有助于使logo在高DPI显示器上与96-DPI显示器上保持相同的物理尺寸。

## 旋转

[**Angle**](#angle)以度为单位围绕控件矩形的左上角逆时针旋转渲染图片。`0`为自然方向；`90`为逆时针旋转四分之一圈；`0`到`360`之间的值给出任意旋转。控件的边界矩形不变——因此大旋转角度可能将可见图片推出矩形。[**Click**](#click)、[**MouseDown**](#mousedown)和其他鼠标事件的命中测试仍使用未旋转的矩形。

## 边框

[**BorderStyle**](#borderstyle)选择无边框（默认）和围绕矩形绘制的单凹陷边框。当边框存在时，[**Appearance**](#appearance)选择3-D和平面（单色）版本。

## 源端和目标端OLE拖放

**Image**控件支持OLE拖放操作的两端：

- [**OLEDragMode**](#oledragmode)控制源端。使用**vbOLEDragAutomatic**时，在**Image**上方按住鼠标并开始拖动会自动将当前[**Picture**](#picture)复制到结果**DataObject**中。使用**vbOLEDragManual**（默认）时，拖动必须通过从[**MouseDown**](#mousedown)处理程序调用[**OLEDrag**](#oledrag)来发起。
- [**OLEDropMode**](#oledropmode)控制目标端。使用**vbOLEDropManual**时，[**OLEDragOver**](#oledragover)和[**OLEDragDrop**](#oledragdrop)事件触发，由应用程序决定如何处理。**vbOLEDropAutomatic**在**Image**上不受支持，赋值它会导致运行时错误5。

## 数据绑定

设置[**DataSource**](#datasource)和[**DataField**](#datafield)将[**Picture**](#picture)连接到[**Data**](/official/Reference/VB/Data/)控件记录集的字段。绑定字段在每次移动时作为二进制图片数据读取；将**Nothing**赋值给**Picture**会将空值等效写回记录集，任何其他赋值会通过绑定字段序列化图片的字节。

## 属性

### Anchors

决定**Image**的哪些边随父级对应边调整的边集合。只读——通过返回的**Anchors**对象设置各个`.Left`、`.Top`、`.Right`、`.Bottom`标志。

### Angle

渲染图片的旋转角度，以度为单位，围绕控件矩形的左上角逆时针旋转。**Double**，默认`0`。

### Appearance

边框的样式，作为[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。仅在[**BorderStyle**](#borderstyle)为**vbFixedSingleBorder**时有意义。

### BorderStyle

绘制在矩形周围的边框样式。[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants)的成员：**vbNoBorder**（0，默认）或**vbFixedSingleBorder**（1）。

### Container

承载此**Image**的控件——通常是窗体、[**Frame**](/official/Reference/VB/Frame/)或**UserControl**。用**Get**读取，用**Set**更改。

### ControlType

标识此控件为图像的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbImage**。

### DataChanged

绑定的[**Picture**](#picture)自上次从[**DataSource**](#datasource)保存或刷新以来是否已被写入。**Boolean**。设置**DataChanged** = **True**也会将绑定记录集标记为脏。

### DataField

绑定的[**DataSource**](#datasource)记录集中由[**Picture**](#picture)镜像的字段名称。**String**。

### DataFormat

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。
:::

### DataMember

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。
:::

### DataSource

对[**Data**](/official/Reference/VB/Data/)控件（或其他**DataSource**提供者）的引用，其记录集为[**DataField**](#datafield)提供值。用**Set**设置。

### Dock

**Image**在其容器中的停靠位置。[**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants)的成员：**vbDockNone**（默认）、**vbDockLeft**、**vbDockTop**、**vbDockRight**、**vbDockBottom**或**vbDockFill**。停靠的图像忽略[**Anchors**](#anchors)。

### DragIcon

在控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时自行拖动（手动VB拖动形式，与OLE拖动不同）。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual**（0，默认——从代码调用[**Drag**](#drag)）或**vbAutomatic**（1）。

### Enabled

决定控件是否接受鼠标输入。禁用的**Image**仍正常绘制但忽略鼠标事件。**Boolean**，默认**True**。

### Height

控件的高度，默认以缇为单位（或以容器的**ScaleMode**单位）。**Double**。当[**Stretch**](#stretch)为**False**且赋值新[**Picture**](#picture)时，高度自动调整到图片的自然像素高度。

### Index

当控件是控件数组的一部分时，此实例在数组中的**Long**零基索引。在非数组实例上读取**Index**会引发运行时错误343（*对象不是数组*）。运行时只读。

### Left

从容器左边缘到控件左边缘的水平距离。**Double**。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针在控件上方时用作鼠标光标的**StdPicture**。

### MousePointer

指针在控件上方时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### OLEDragMode

当用户开始拖动**Image**时是否自动启动OLE拖动。[**OLEDragConstants**](/official/Reference/VBRUN/Constants/OLEDragConstants)的成员：**vbOLEDragManual**（0，默认——应用程序调用[**OLEDrag**](#oledrag)）或**vbOLEDragAutomatic**（1——框架自动将当前[**Picture**](#picture)复制到结果**DataObject**中）。

### OLEDropMode

**Image**如何响应到达其上的OLE放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone**（0，默认）或**vbOLEDropManual**（1）。**Image**不支持自动放置；赋值**vbOLEDropAutomatic**会引发运行时错误5（*无效的过程调用或参数*）。

### Parent

对最终包含此控件的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）的引用。只读。

### Picture

控件渲染的**StdPicture**。**默认属性。**

语法：`Set` *object*.**Picture** = *picture*

赋值**Nothing**恢复空图片而非移除表面。在[**Stretch**](#stretch)为**False**时赋值新图片会自动调整控件到图片的自然像素尺寸；在[**Stretch**](#stretch)为**True**时保留现有矩形并将新图片缩放以适应。

### PictureDpiScaling

当**True**时，图片的自然像素尺寸在绘制前（并被自动调整尺寸逻辑使用）乘以当前DPI缩放因子。**Boolean**，默认**False**。

### Stretch

图片是否被缩放以填充控件矩形（**True**）或以自然尺寸渲染并自动调整控件以适应（**False**，默认）。完整规则见[拉伸和自动调整尺寸](#stretch-and-auto-sizing)。图元文件无论此设置如何始终缩放。

### StretchMode

当[**Stretch**](#stretch)为**True**且图片被缩放时使用的重采样算法。`Image.StretchModeConstants`的成员：

| 常量                          | 值 | 算法                                                                     |
|-------------------------------|----|--------------------------------------------------------------------------|
| **vbStretchHalftone**         | 0  | GDI `STRETCH_HALFTONE`（默认——良好的通用质量）。                        |
| **vbStretchColorOnColor**     | 1  | GDI `STRETCH_COLORONCOLOR`（最快、最低质量——最近邻）。                   |
| **vbStretchLanczos8**         | 2  | 自定义Lanczos重采样器，8瓣核（最高质量，最慢）。                         |
| **vbStretchLanczos3**         | 3  | 自定义Lanczos重采样器，3瓣核（高质量）。                                 |
| **vbStretchBicubic**          | 4  | 自定义双三次重采样器。                                                   |
| **vbStretchBilinear**         | 5  | 自定义双线性重采样器。                                                   |

Lanczos、双三次和双线性模式仅适用于实际需要调整尺寸的位图——图元文件和未缩放的位图回退到GDI模式。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### ToolTipText

用户悬停在控件上方时作为工具提示显示的多行**String**。

### Top

从容器顶部到控件顶部的垂直距离。**Double**。

### Visible

控件是否显示。**Boolean**，默认**True**。

### WhatsThisHelpID

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。参见[**ShowWhatsThis**](#showwhatsthis)。
:::

### Width

控件的宽度，默认以缇为单位（或以容器的**ScaleMode**单位）。**Double**。当[**Stretch**](#stretch)为**False**且赋值新[**Picture**](#picture)时，宽度自动调整到图片的自然像素宽度。

## 方法

### Drag

开始、完成或取消手动VB样式拖动操作。与OLE拖动不同——参见[**OLEDrag**](#oledrag)。

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

从此**Image**发起OLE拖动操作，引发[**OLEStartDrag**](#olestartdrag)事件以便应用程序填充**DataObject**（或者，如果源已被预填充，则立即开始拖动）。

语法：*object*.**OLEDrag**

### Refresh

强制立即重绘**Image**在父级绘图表面上的矩形。

语法：*object*.**Refresh**

### ShowWhatsThis

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。
:::

语法：*object*.**ShowWhatsThis**

### ZOrder

将**Image**带到容器内无窗口同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront**（0，默认）或**vbSendToBack**（1）。

## 事件

### Click

当用户单击控件矩形时引发。**默认事件。**

语法：*object*\_**Click**( )

### DblClick

当用户双击控件矩形时引发。

语法：*object*\_**DblClick**( )

### DragDrop

当手动VB样式拖动操作在目标控件上结束时在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

当手动VB样式拖动操作进行中时在光标下方的控件上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### Initialize

在控件已连接到其容器的绘制周期但首次绘制之前引发一次。适用于依赖容器状态的最后一刻设置。

语法：*object*\_**Initialize**( )

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