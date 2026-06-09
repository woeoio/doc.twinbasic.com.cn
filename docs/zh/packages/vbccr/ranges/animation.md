---
title: 动画控件（Animation）
description: 动画控件（Animation） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '282bf26f-c131-44b4-b1e4-d467b2bac5f1'
  PropagateID: '282bf26f-c131-44b4-b1e4-d467b2bac5f1'
  ReservedCode1: 'b421acd3-3b87-4565-8bc0-0fce3ed9cdce'
  ReservedCode2: 'b421acd3-3b87-4565-8bc0-0fce3ed9cdce'
---

# 动画控件（Animation）

封装 SysAnimate32 系统动画控件，用于播放无声 AVI 动画。

## 枚举

### CCBackStyleConstants

参见通用枚举。

## 属性

### AutoPlay
`Property Get AutoPlay() As Boolean`
`Property Let AutoPlay(ByVal Value As Boolean)`

自动播放，控件创建后立即开始播放。

### BackStyle
`Property Get BackStyle() As CCBackStyleConstants`
`Property Let BackStyle(ByVal Value As CCBackStyleConstants)`

背景样式，透明或不透明。

### Center
`Property Get Center() As Boolean`
`Property Let Center(ByVal Value As Boolean)`

是否将 AVI 动画居中显示。

### RightToLeft
`Property Get RightToLeft() As Boolean`
`Property Let RightToLeft(ByVal Value As Boolean)`

从右到左显示方向。

### RightToLeftLayout
`Property Get RightToLeftLayout() As Boolean`
`Property Let RightToLeftLayout(ByVal Value As Boolean)`

从右到左镜像布局。

### RightToLeftMode
`Property Get RightToLeftMode() As CCRightToLeftModeConstants`
`Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)`

从右到左模式。参见通用枚举。

### hWnd
`Property Get hWnd() As LongPtr`

动画控件的窗口句柄。

### hWndUserControl
`Property Get hWndUserControl() As LongPtr`

用户控件的窗口句柄。

### Font
`Property Get Font() As StdFont`
`Property Let Font(ByVal NewFont As StdFont)`
`Property Set Font(ByVal NewFont As StdFont)`

字体。

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

是否可用。

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

### Playing
`Property Get Playing() As Boolean`

是否正在播放。只读。

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

拖动图标。

### DragMode
`Property Get DragMode() As Integer`
`Property Let DragMode(ByVal Value As Integer)`

拖动模式。

## 方法

### Play
`Public Sub Play(Optional ByVal FromFrame As Variant, Optional ByVal ToFrame As Variant, Optional ByVal RepeatCount As Variant)`

播放动画。可指定起始帧、结束帧和重复次数。

### StopPlay
`Public Sub StopPlay()`

停止播放动画。

### LoadFile
`Public Sub LoadFile(ByVal PathName As String)`

从文件加载 AVI 动画。

### LoadRes
`Public Sub LoadRes(ByVal ResourceID As Variant)`

从资源加载 AVI 动画。支持字符串或数字资源 ID。

### Unload
`Public Sub Unload()`

卸载当前动画。

### Refresh
`Public Sub Refresh()`

强制重绘控件。

### OLEDrag
`Public Sub OLEDrag()`

启动 OLE 拖放操作。

### Drag
`Public Sub Drag(Optional ByRef Action As Variant)`

开始、结束或取消拖动操作。

### ZOrder
`Public Sub ZOrder(Optional ByRef Position As Variant)`

调整 Z 顺序。

### SetFocus
`Public Sub SetFocus()`

获取焦点。

### Move
`Public Sub Move(ByVal Left As Single, Optional ByVal Top As Variant, Optional ByVal Width As Variant, Optional ByVal Height As Variant)`

移动并调整控件位置和大小。

## 事件

### Click
`Public Event Click()`

单击。

### DblClick
`Public Event DblClick()`

双击。

### Change
`Public Event Change()`

动画状态改变时触发。

### PreviewKeyDown
`Public Event PreviewKeyDown(KeyCode As Integer, Shift As Integer)`

按键前事件，在 KeyDown 之前触发。

### PreviewKeyUp
`Public Event PreviewKeyUp(KeyCode As Integer, Shift As Integer)`

按键释放前事件，在 KeyUp 之前触发。

### KeyDown
`Public Event KeyDown(KeyCode As Integer, Shift As Integer)`

按键按下。

### KeyUp
`Public Event KeyUp(KeyCode As Integer, Shift As Integer)`

按键释放。

### KeyPress
`Public Event KeyPress(KeyAscii As Integer)`

按键字符。

### MouseDown
`Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`

鼠标按下。

### MouseMove
`Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

鼠标移动。

### MouseUp
`Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

鼠标释放。

### MouseEnter
`Public Event MouseEnter()`

鼠标进入控件。

### MouseLeave
`Public Event MouseLeave()`

鼠标离开控件。

### OLECompleteDrag
`Public Event OLECompleteDrag(Effect As Long)`

OLE 拖放完成。

### OLEDragDrop
`Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`

OLE 拖放落下。

### OLEDragOver
`Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`

OLE 拖放悬停。

### OLEGiveFeedback
`Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`

OLE 给出反馈。

### OLESetData
`Public Event OLESetData(Data As DataObject, DataFormat As Integer)`

OLE 设置数据。

### OLEStartDrag
`Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)`

OLE 开始拖动。

## 代码示例

### 基本用法

```vb
' 加载并播放 AVI 动画
Animation1.LoadFile "C:\Icons\filecopy.avi"
Animation1.AutoPlay = True

' 从第 5 帧播放到第 20 帧，重复 3 次
Animation1.Play 5, 20, 3

' 停止播放
Animation1.StopPlay

' 从资源加载
Animation1.LoadRes 101

' 卸载动画
Animation1.Unload
```