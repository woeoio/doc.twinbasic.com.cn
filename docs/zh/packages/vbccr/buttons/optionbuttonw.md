---
title: 选项按钮控件（OptionButtonW）
description: 选项按钮控件（OptionButtonW） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8a26cf70-22b9-4e25-9395-80ecbe84b230'
  PropagateID: '8a26cf70-22b9-4e25-9395-80ecbe84b230'
  ReservedCode1: '9585eb9a-fe26-41e7-b29f-69b5fccd044c'
  ReservedCode2: '9585eb9a-fe26-41e7-b29f-69b5fccd044c'
---

# 选项按钮控件（OptionButtonW）

封装 Windows 系统按钮控件（Button），以单选按钮样式运行，支持图形样式、所有者绘制、图像列表及视觉样式。

## 枚举

### OptImageListAlignmentConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| OptImageListAlignmentLeft | 0 | 左对齐 |
| OptImageListAlignmentRight | 1 | 右对齐 |
| OptImageListAlignmentTop | 2 | 顶部对齐 |
| OptImageListAlignmentBottom | 3 | 底部对齐 |
| OptImageListAlignmentCenter | 4 | 居中对齐 |

### OptDrawModeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| OptDrawModeNormal | 0 | 标准模式，由系统绘制 |
| OptDrawModeOwnerDraw | 1 | 所有者绘制模式，由代码处理绘制 |

### CCAppearanceConstants

参见通用枚举。

### CCLeftRightAlignmentConstants

参见通用枚举。

### CCVerticalAlignmentConstants

参见通用枚举。

### CCMousePointerConstants

参见通用枚举。

### CCRightToLeftModeConstants

参见通用枚举。

### OLEDropModeConstants

参见通用枚举。

## 属性

### Value
`Property Get Value() As OLE_OPTEXCLUSIVE`
`Property Let Value(ByVal NewValue As OLE_OPTEXCLUSIVE)`

选项按钮的选中状态。True 表示选中。

### Caption
`Property Get Caption() As String`
`Property Let Caption(ByVal Value As String)`

显示在控件上的文本标题。

### Alignment
`Property Get Alignment() As CCLeftRightAlignmentConstants`
`Property Let Alignment(ByVal Value As CCLeftRightAlignmentConstants)`

选项按钮标题的对齐方式（左侧或右侧）。参见通用枚举。

### TextAlignment
`Property Get TextAlignment() As VBRUN.AlignmentConstants`
`Property Let TextAlignment(ByVal Value As VBRUN.AlignmentConstants)`

标题文本的对齐方式（左对齐、居中或右对齐）。

### PushLike
`Property Get PushLike() As Boolean`
`Property Let PushLike(ByVal Value As Boolean)`

是否使控件外观和行为类似下压按钮。

### Picture
`Property Get Picture() As IPictureDisp`
`Property Let Picture(ByVal Value As IPictureDisp)`
`Property Set Picture(ByVal Value As IPictureDisp)`

显示在控件上的图片。

### WordWrap
`Property Get WordWrap() As Boolean`
`Property Let WordWrap(ByVal Value As Boolean)`

是否允许标题文本换行以防止溢出。

### Transparent
`Property Get Transparent() As Boolean`
`Property Let Transparent(ByVal Value As Boolean)`

是否以底层背景的副本模拟透明背景。设计时忽略此属性。

### VerticalAlignment
`Property Get VerticalAlignment() As CCVerticalAlignmentConstants`
`Property Let VerticalAlignment(ByVal Value As CCVerticalAlignmentConstants)`

垂直对齐方式。参见通用枚举。

### Style
`Property Get Style() As VBRUN.ButtonConstants`
`Property Let Style(ByVal Value As VBRUN.ButtonConstants)`

控件外观样式，标准或图形。当 DrawMode 不为 Normal 时，Style 必须为 Standard。

### DisabledPicture
`Property Get DisabledPicture() As IPictureDisp`
`Property Let DisabledPicture(ByVal Value As IPictureDisp)`
`Property Set DisabledPicture(ByVal Value As IPictureDisp)`

按钮禁用时显示的图片。仅当 Style 为图形样式时适用。

### DownPicture
`Property Get DownPicture() As IPictureDisp`
`Property Let DownPicture(ByVal Value As IPictureDisp)`
`Property Set DownPicture(ByVal Value As IPictureDisp)`

按钮按下时显示的图片。仅当 Style 为图形样式时适用。

### UseMaskColor
`Property Get UseMaskColor() As Boolean`
`Property Let UseMaskColor(ByVal Value As Boolean)`

是否使用 MaskColor 属性作为透明色。仅当 Style 为图形样式时适用。

### MaskColor
`Property Get MaskColor() As OLE_COLOR`
`Property Let MaskColor(ByVal Value As OLE_COLOR)`

图片中作为透明色（遮罩）的颜色。仅当 Style 为图形样式时适用。

### DrawMode
`Property Get DrawMode() As OptDrawModeConstants`
`Property Let DrawMode(ByVal Value As OptDrawModeConstants)`

绘制模式，标准或所有者绘制。

### ImageList
`Property Get ImageList() As Variant`
`Property Let ImageList(ByVal Value As Variant)`
`Property Set ImageList(ByVal Value As Variant)`

关联的图像列表控件。图像列表应包含单个图片（用于所有状态）或每种状态的独立图片。需要 comctl32.dll 6.0 或更高版本。

### ImageListAlignment
`Property Get ImageListAlignment() As OptImageListAlignmentConstants`
`Property Let ImageListAlignment(ByVal Value As OptImageListAlignmentConstants)`

图像列表中图像的对齐方式。需要 comctl32.dll 6.0 或更高版本。

### ImageListMargin
`Property Get ImageListMargin() As Single`
`Property Let ImageListMargin(ByVal Value As Single)`

图像列表中图像的边距。需要 comctl32.dll 6.0 或更高版本。

### Pushed
`Property Get Pushed() As Boolean`
`Property Let Pushed(ByVal Value As Boolean)`

选项按钮是否处于按下状态。

### Hot
`Property Get Hot() As Boolean`
`Property Let Hot(ByVal Value As Boolean)`

选项按钮是否处于热态（鼠标悬停）。只读，写入时引发错误 383。需要 comctl32.dll 6.0 或更高版本。

### VisualStyles
`Property Get VisualStyles() As Boolean`
`Property Let VisualStyles(ByVal Value As Boolean)`

是否启用视觉样式。需要 comctl32.dll 6.0 或更高版本。

### Appearance
`Property Get Appearance() As CCAppearanceConstants`
`Property Let Appearance(ByVal Value As CCAppearanceConstants)`

控件外观，平面或三维效果。参见通用枚举。

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

背景颜色。

### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

前景颜色。

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

是否可用。

### OLEDropMode
`Property Get OLEDropMode() As OLEDropModeConstants`
`Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)`

OLE 拖放目标模式。参见通用枚举。

### MousePointer
`Property Get MousePointer() As CCMousePointerConstants`
`Property Let MousePointer(ByVal Value As CCMousePointerConstants)`

鼠标指针样式。参见通用枚举。

### MouseIcon
`Property Get MouseIcon() As IPictureDisp`
`Property Let MouseIcon(ByVal Value As IPictureDisp)`
`Property Set MouseIcon(ByVal Value As IPictureDisp)`

自定义鼠标图标。

### MouseTrack
`Property Get MouseTrack() As Boolean`
`Property Let MouseTrack(ByVal Value As Boolean)`

是否启用鼠标进入/离开跟踪。

### RightToLeft
`Property Get RightToLeft() As Boolean`
`Property Let RightToLeft(ByVal Value As Boolean)`

从右到左显示方向。

### RightToLeftMode
`Property Get RightToLeftMode() As CCRightToLeftModeConstants`
`Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)`

从右到左模式。参见通用枚举。

### Font
`Property Get Font() As StdFont`
`Property Let Font(ByVal NewFont As StdFont)`
`Property Set Font(ByVal NewFont As StdFont)`

字体。

### hWnd
`Property Get hWnd() As LongPtr`

选项按钮控件的窗口句柄。

### hWndUserControl
`Property Get hWndUserControl() As LongPtr`

用户控件的窗口句柄。

### Name
`Property Get Name() As String`

控件名称。只读。

### Tag
`Property Get Tag() As String`
`Property Let Tag(ByVal Value As String)`

自定义数据。

### Parent
`Property Get Parent() As Object`

父对象。只读。

### Container
`Property Get Container() As Object`
`Property Set Container(ByVal Value As Object)`

容器对象。

### Left
`Property Get Left() As Single`
`Property Let Left(ByVal Value As Single)`

左边距。

### Top
`Property Get Top() As Single`
`Property Let Top(ByVal Value As Single)`

顶边距。

### Width
`Property Get Width() As Single`
`Property Let Width(ByVal Value As Single)`

宽度。

### Height
`Property Get Height() As Single`
`Property Let Height(ByVal Value As Single)`

高度。

### Visible
`Property Get Visible() As Boolean`
`Property Let Visible(ByVal Value As Boolean)`

是否可见。

### ToolTipText
`Property Get ToolTipText() As String`
`Property Let ToolTipText(ByVal Value As String)`

工具提示文本。

### HelpContextID
`Property Get HelpContextID() As Long`
`Property Let HelpContextID(ByVal Value As Long)`

帮助上下文 ID。

### WhatsThisHelpID
`Property Get WhatsThisHelpID() As Long`
`Property Let WhatsThisHelpID(ByVal Value As Long)`

"这是什么"帮助 ID。

### DragIcon
`Property Get DragIcon() As IPictureDisp`
`Property Let DragIcon(ByVal Value As IPictureDisp)`
`Property Set DragIcon(ByVal Value As IPictureDisp)`

拖拽图标。

### DragMode
`Property Get DragMode() As Integer`
`Property Let DragMode(ByVal Value As Integer)`

拖拽模式。

## 方法

### Drag
`Public Sub Drag([ByRef Action As Variant])`

开始、结束或取消拖放操作。

### SetFocus
`Public Sub SetFocus()`

将焦点移至控件。

### ZOrder
`Public Sub ZOrder([ByRef Position As Variant])`

设置控件的 Z 顺序。

### OLEDrag
`Public Sub OLEDrag()`

启动 OLE 拖放操作。

### Refresh
`Public Sub Refresh()`

强制重绘控件。

## 事件

### Click
`Public Event Click()`

在控件上按下并释放鼠标按钮时触发。

### DblClick
`Public Event DblClick()`

在控件上双击鼠标时触发。

### HotChanged
`Public Event HotChanged()`

选项按钮的热态状态发生变化时触发。需要 comctl32.dll 6.0 或更高版本。

### OwnerDraw
`Public Event OwnerDraw(ByVal Action As Long, ByVal State As Long, ByVal hDC As Long, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)`

所有者绘制按钮的某个视觉方面发生变化时触发。

### PreviewKeyDown
`Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)`

在 KeyDown 事件之前触发。

### PreviewKeyUp
`Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)`

在 KeyUp 事件之前触发。

### KeyDown
`Public Event KeyDown(KeyCode As Integer, Shift As Integer)`

按下按键时触发。

### KeyUp
`Public Event KeyUp(KeyCode As Integer, Shift As Integer)`

释放按键时触发。

### KeyPress
`Public Event KeyPress(KeyChar As Integer)`

按键字符输入时触发。

### MouseDown
`Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`

按下鼠标按钮时触发。

### MouseMove
`Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

移动鼠标时触发。

### MouseUp
`Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

释放鼠标按钮时触发。

### MouseEnter
`Public Event MouseEnter()`

鼠标进入控件时触发。

### MouseLeave
`Public Event MouseLeave()`

鼠标离开控件时触发。

### OLECompleteDrag
`Public Event OLECompleteDrag(Effect As Long)`

OLE 拖放操作完成或取消后触发。

### OLEDragDrop
`Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`

数据通过 OLE 拖放操作放到控件上时触发。

### OLEDragOver
`Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`

OLE 拖放操作期间鼠标移过控件时触发。

### OLEGiveFeedback
`Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`

OLE 拖放操作中需要更改鼠标光标时触发。

### OLESetData
`Public Event OLESetData(Data As DataObject, DataFormat As Integer)`

放置目标请求 OLEDragStart 期间未提供的数据时触发。

### OLEStartDrag
`Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)`

OLE 拖放操作启动时触发。

## 代码示例

```vb
' 基本选项按钮
OptionButtonW1.Caption = "选项 A"
OptionButtonW1.Value = True

' 图形样式
OptionButtonW1.Style = vbButtonGraphical
Set OptionButtonW1.Picture = LoadPicture("C:\icon.bmp")
Set OptionButtonW1.DownPicture = LoadPicture("C:\icon_down.bmp")

' 按下式选项按钮
OptionButtonW1.PushLike = True

' 使用图像列表
Set OptionButtonW1.ImageList = ImageList1
OptionButtonW1.ImageListAlignment = OptImageListAlignmentLeft
OptionButtonW1.ImageListMargin = 4

' 所有者绘制
OptionButtonW1.DrawMode = OptDrawModeOwnerDraw
```