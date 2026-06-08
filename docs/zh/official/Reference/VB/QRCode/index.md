---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7b22bea2-0ddd-4602-bb1f-7ecd96a6e329'
  PropagateID: '7b22bea2-0ddd-4602-bb1f-7ecd96a6e329'
  ReservedCode1: '7557c95f-45be-49a2-a78e-23e3cbc3c46c'
  ReservedCode2: '7557c95f-45be-49a2-a78e-23e3cbc3c46c'
---

---
title: QRCode
parent: VB Package
permalink: /tB/Packages/VB/QRCode/
---

# QRCode 类

**QRCode**是无窗口轻量级控件，从其[**Payload**](#payload)——URL、纯文本或原始字节数组——渲染QR码。编码由嵌入的`qrcodegen`库在进程内执行，结果矩阵在设计时和运行时直接绘制在父级上。每当任何编码属性更改时图片会自动重新生成，因此QR控件可以声明式地连接到数据绑定或其他UI状态，无需额外管道。

与[**Image**](/official/Reference/VB/Image/)一样，QRCode没有`hWnd`且不可聚焦。它是在窗体中嵌入可扫描码（登录、支付、Wi-Fi凭据、联系人卡片、应用深度链接等）而不为重量级[**PictureBox**](/official/Reference/VB/PictureBox/)付出代价的正确选择。

默认属性是[**Picture**](#picture)（只读生成图像），默认事件是[**Click**](#click)。

```vb
Private Sub Form_Load()
    QRCode1.Payload = "https://www.twinbasic.com"
    QRCode1.EccMode = vbQRCodegenEccHigh    ' 30 % parity
    QRCode1.ForeColor = vbBlue
End Sub

Private Sub QRCode1_Click()
    MsgBox "QR code clicked"
End Sub
```


## 无窗口渲染

**QRCode**没有`hWnd`。框架在父级的绘制周期中将其直接绘制到父级的绘图表面上。其权衡与任何无窗口控件相同：

- 无焦点、无键盘输入、无`KeyDown` / `KeyPress` / `KeyUp` / `GotFocus` / `LostFocus` / `Validate`。
- 没有可传递给API函数的`hWnd`，也没有`SetFocus`。
- 不能承载子控件。

对于需要这些功能的QR码，将**QRCode**承载在[**PictureBox**](/official/Reference/VB/PictureBox/)或[**Frame**](/official/Reference/VB/Frame/)内，并将可聚焦控件放在旁边。

## 编码负载

[**Payload**](#payload)属性是**Variant**，接受**String**（文本或URL）或一维**Byte()**数组（用于二进制数据）。编码器根据字符串内容自动选择最紧凑的段模式——数字、字母数字或字节；对于字节数组，无条件使用字节模式，数据按原样编码。空负载会将[**Picture**](#picture)清除为**Nothing**；在设计时，矩形会显示*（无负载文本）*占位符。

每当[**Payload**](#payload)、[**ForeColor**](#forecolor)、[**ModuleSize**](#modulesize)、[**SquareModules**](#squaremodules)、[**EccMode**](#eccmode)、[**EccBoost**](#eccboost)、[**MinVersion**](#minversion)、[**MaxVersion**](#maxversion)或[**MaskType**](#masktype)更改时，QR码会重新生成，新图片通过[**Picture**](#picture)可见。[**Refresh**](#refresh)仅重绘——不会强制重新编码。

## 纠错

QR码嵌入Reed-Solomon奇偶校验流，允许解码器从矩阵部分损坏中恢复。[**EccMode**](#eccmode)选择矩阵专用于奇偶校验的比例：

| 常量                            | 值 | 约恢复率 |
|---------------------------------|----|----------|
| **vbQRCodegenEccLow**           | 0  | 7%       |
| **vbQRCodegenEccMedium**        | 1  | 15%      |
| **vbQRCodegenEccQuartile**      | 2  | 25%      |
| **vbQRCodegenEccHigh**          | 3  | 30%      |

当[**EccBoost**](#eccboost)为**True**（默认）时，编码器在负载仍适合相同QR版本的情况下将奇偶校验级别提升到超出配置的最低值——自动实现更好的弹性。

## 版本和掩码

QR码*版本*（1到40）设置矩阵大小：版本1为21×21模块，版本40为177×177模块。[**MinVersion**](#minversion)和[**MaxVersion**](#maxversion)约束编码器的搜索；它选择范围内适合所选[**EccMode**](#eccmode)下负载的最小版本。默认值（`1`和`40`）跨越完整范围。`1..40`外的值被钳制，如果**MinVersion**最终大于**MaxVersion**，则重置为`1`。

[**MaskType**](#masktype)选择应用于矩阵的八种掩码之一，以打破混淆扫描器的模式。**vbQRCodegenMaskAuto**（-1，默认）选择具有最佳惩罚分数的掩码；八个命名值**vbQRCodegenMask0**到**vbQRCodegenMask7**强制使用特定掩码——适用于可重现性。

## 模块渲染

[**ModuleSize**](#modulesize)是生成[**Picture**](#picture)中一个模块的像素大小。默认`120`。图片在绘制时按比例缩小到控件矩形，因此[**ModuleSize**](#modulesize)的选择仅在图片被保存或提取供其他用途（剪贴板、拖放、**SavePicture**……）时有影响。

[**SquareModules**](#squaremodules)选择图片中每个模块的绘制方式：充填正方形（**True**，默认）或充填圆形（**False**——大多数扫描器仍可容忍的风格选择）。

[**Square**](#square)与此不同，控制图片*在控件上*的渲染：为**True**（默认）时图片信箱式居中，无论控件宽高比如何保持正方形；为**False**时图片拉伸以填充矩形。

## 边框

[**BorderStyle**](#borderstyle)选择无边框（默认）和围绕矩形绘制的单凹陷边框。当边框存在时，[**Appearance**](#appearance)选择3-D和平面（单色）版本。

## OLE 拖放

**QRCode**支持OLE拖放操作的两端：

- [**OLEDragMode**](#oledragmode)控制源端。使用**vbOLEDragAutomatic**时，在控件上方按住鼠标并开始拖动会自动将当前[**Picture**](#picture)复制到结果**DataObject**中——便于将生成的QR码拖到另一个图片显示或拖到资源管理器中的文件。使用**vbOLEDragManual**（默认）时，拖动必须通过从[**MouseDown**](#mousedown)处理程序调用[**OLEDrag**](#oledrag)来发起。
- [**OLEDropMode**](#oledropmode)控制目标端。使用**vbOLEDropManual**时，[**OLEDragOver**](#oledragover)和[**OLEDragDrop**](#oledragdrop)事件触发，应用程序可以决定如何处理——例如将[**Payload**](#payload)设置为放置的文本。**vbOLEDropAutomatic**在**QRCode**上不受支持，赋值它会导致运行时错误5（*无效的过程调用或参数*）。

## 数据绑定

设置[**DataSource**](#datasource)和[**DataField**](#datafield)将控件连接到[**Data**](/official/Reference/VB/Data/)控件记录集的字段。绑定是不对称的：

- *入站*（记录集→控件）：非空、非空白的字段值被解释为文本并赋值给[**Payload**](#payload)；QR码随后重新编码并重绘。Null和空值将[**Picture**](#picture)清除为**Nothing**。
- *出站*（控件→记录集）：当前QR[**Picture**](#picture)被序列化为字节数组并写回绑定字段——适用于存储渲染码的快照，但注意绑定输出的内容与输入不同。

## 属性

### Anchors

决定控件的哪些边随父级对应边调整的边集合。只读——通过返回的**Anchors**对象设置各个`.Left`、`.Top`、`.Right`、`.Bottom`标志。

### Appearance

边框的样式，作为[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。仅在[**BorderStyle**](#borderstyle)为**vbFixedSingleBorder**时有意义。

### BorderStyle

绘制在矩形周围的边框样式。[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants)的成员：**vbNoBorder**（0，默认）或**vbFixedSingleBorder**（1）。

### Container

承载此**QRCode**的控件——通常是窗体、[**Frame**](/official/Reference/VB/Frame/)、[**PictureBox**](/official/Reference/VB/PictureBox/)或**UserControl**。用**Get**读取，用**Set**更改。

### ControlType

标识底层控件类型的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbImage**——QRCode与[**Image**](/official/Reference/VB/Image/)共享其控件类型标签。

### DataChanged

绑定的[**Picture**](#picture)自上次从[**DataSource**](#datasource)保存或刷新以来是否已被写入。**Boolean**。设置**DataChanged** = **True**也会将绑定记录集标记为脏。

### DataField

绑定的[**DataSource**](#datasource)记录集中设置[**Payload**](#payload)的字段名称。**String**。

### DataFormat

当应用程序需要自定义处理时，在原始记录集值和显示的负载之间转换的**StdDataFormat**。用**Set**设置。

### DataMember

当[**DataSource**](#datasource)公开多个记录集时，要绑定的成员名称。**String**。

### DataSource

对[**Data**](/official/Reference/VB/Data/)控件（或其他**DataSource**提供者）的引用，其记录集为[**DataField**](#datafield)提供值。用**Set**设置。

### Dock

控件在其容器中的停靠位置。[**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants)的成员：**vbDockNone**（默认）、**vbDockLeft**、**vbDockTop**、**vbDockRight**、**vbDockBottom**或**vbDockFill**。停靠的控件忽略[**Anchors**](#anchors)。

### DragIcon

在控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时自行拖动（手动VB拖动形式，与OLE拖动不同）。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual**（0，默认——从代码调用[**Drag**](#drag)）或**vbAutomatic**（1）。

### EccBoost

当**True**（默认）时，编码器被允许在负载仍适合相同QR版本时将实际奇偶校验级别提升到[**EccMode**](#eccmode)之上。**Boolean**。设为**False**以获得对不同长度负载可重现的输出。

### EccMode

编码时使用的最低纠错级别。**QRCodegenEccConstants**（在VB包中定义）的成员：

| 常量                           | 值 | 约恢复率 |
|--------------------------------|----|----------|
| **vbQRCodegenEccLow**          | 0  | 7%       |
| **vbQRCodegenEccMedium**       | 1  | 15%      |
| **vbQRCodegenEccQuartile**    | 2  | 25%      |
| **vbQRCodegenEccHigh**         | 3  | 30%      |

默认**vbQRCodegenEccLow**。超出范围的值被钳制。

### Enabled

决定控件是否接受鼠标输入。禁用的**QRCode**仍正常绘制但不引发鼠标事件。**Boolean**，默认**True**。

### ForeColor

生成QR码中深色模块的颜色，作为**OLE_COLOR**。默认**vbBlack**。浅色模块始终透明——控件的父级透过它们显示，因此将**QRCode**放置在对比色背景上。

### Height

控件的高度，默认以缇为单位（或以容器的**ScaleMode**单位）。**Double**。

### Index

当控件是控件数组的一部分时，此实例在数组中的**Long**零基索引。在非数组实例上读取**Index**会引发运行时错误343（*对象不是数组*）。运行时只读。

### Left

从容器左边缘到控件左边缘的水平距离。**Double**。

### MaskType

应用于编码矩阵的掩码，以打破混淆扫描器的模式。**QRCodegenMaskConstants**（在VB包中定义）的成员：**vbQRCodegenMaskAuto**（-1，默认——选择具有最低惩罚分数的掩码）或**vbQRCodegenMask0**……**vbQRCodegenMask7**之一（强制使用对应编号的掩码）。超出范围的值回退到**vbQRCodegenMaskAuto**。

### MaxVersion

编码器允许选择的最大QR版本。**Long**，默认`40`。钳制到`1..40`。如果[**MinVersion**](#minversion)在编码时超过**MaxVersion**，**MinVersion**被重置为`1`。

### MinVersion

编码器允许选择的最小QR版本。**Long**，默认`1`。编码器选择`MinVersion..MaxVersion`范围内在请求的[**EccMode**](#eccmode)下适合负载的最小版本。钳制到`1..40`。

### ModuleSize

生成[**Picture**](#picture)中一个QR模块的像素大小。**Long**，默认`120`。图片在绘制时按比例缩放到控件矩形，因此较大的**ModuleSize**仅在图片以其原生分辨率捕获或保存时有影响。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针在控件上方时用作鼠标光标的**StdPicture**。

### MousePointer

指针在控件上方时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### OLEDragMode

当用户开始拖动控件时是否自动启动OLE拖动。[**OLEDragConstants**](/official/Reference/VBRUN/Constants/OLEDragConstants)的成员：**vbOLEDragManual**（0，默认——应用程序调用[**OLEDrag**](#oledrag)）或**vbOLEDragAutomatic**（1——框架自动将当前[**Picture**](#picture)复制到结果**DataObject**中）。

### OLEDropMode

控件如何响应到达其上的OLE放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone**（0，默认）或**vbOLEDropManual**（1）。**QRCode**不支持自动放置；赋值**vbOLEDropAutomatic**会引发运行时错误5（*无效的过程调用或参数*）。

### Parent

对最终包含控件的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）的引用。只读。

### Payload

QR码中编码的数据。**Variant**，默认`"https://www.twinbasic.com"`。

语法：*object*.**Payload** [ = *value* ]

接受用于文本或URL负载的**String**，或用于任意二进制数据的一维**Byte()**数组。编码器根据字符串内容自动选择最紧凑的段模式——数字、字母数字或字节。赋值空值会将[**Picture**](#picture)清除为**Nothing**。

### Picture

生成的QR码，作为**StdPicture**。**默认属性。**只读——由编码器从[**Payload**](#payload)和其他编码属性生成。当[**Payload**](#payload)为空时返回**Nothing**。

### Square

生成的图片是否在控件矩形内以1:1宽高比渲染（**True**，默认——图片居中信箱式显示）或拉伸以填充（**False**）。**Boolean**。

### SquareModules

编码矩阵的每个模块在图片中是否绘制为充填正方形（**True**，默认）或充填圆形（**False**）。**Boolean**。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### ToolTipText

用户悬停在控件上方时作为工具提示显示的多行**String**。

### Top

从容器顶部到控件顶部的垂直距离。**Double**。

### Visible

控件是否显示。**Boolean**，默认**True**。隐藏的**QRCode**在运行时完全跳过绘制传递，除了在IDE设计器中它们始终渲染以便开发者定位。

### WhatsThisHelpID

标识应用程序帮助文件中"这是什么？"帮助弹出主题的**Long**。参见[**ShowWhatsThis**](#showwhatsthis)。

### Width

控件的宽度，默认以缇为单位（或以容器的**ScaleMode**单位）。**Double**。

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

从控件发起OLE拖动操作，引发[**OLEStartDrag**](#olestartdrag)事件以便应用程序填充**DataObject**（或者，如果源已被预填充，则立即开始拖动）。

语法：*object*.**OLEDrag**

### Refresh

强制立即重绘控件在父级绘图表面上的矩形。*不会*重新编码QR——为此需重新赋值[**Payload**](#payload)（或任何编码属性），这会自动触发重新生成。

语法：*object*.**Refresh**

### ShowWhatsThis

以"这是什么？"弹窗形式显示由[**WhatsThisHelpID**](#whatsthishelpid)标识的主题。

语法：*object*.**ShowWhatsThis**

### ZOrder

将**QRCode**带到容器内无窗口同级堆栈的前面或后面。

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

在OLE拖动开始时在源控件上引发，以便应用程序填充**DataObject**并选择允许的效果。当[**OLEDragMode**](#oledragmode)为**vbOLEDragAutomatic**且用户开始拖动时也会自动引发。

语法：*object*\_**OLEStartDrag**( *Data* **As DataObject**, *AllowedEffects* **As Long** )