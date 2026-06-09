---
title: MCIWnd 控件（MCIWnd）
description: MCIWnd 控件（MCIWnd） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7fd7de91-89c5-45e5-a731-d51f19ad8cbf'
  PropagateID: '7fd7de91-89c5-45e5-a731-d51f19ad8cbf'
  ReservedCode1: 'ce2075b2-6932-4c72-8523-fb5ff7b9c4b1'
  ReservedCode2: 'ce2075b2-6932-4c72-8523-fb5ff7b9c4b1'
---

# MCIWnd 控件（MCIWnd）

封装 MCIWnd 窗口类，提供多媒体设备控制和音视频播放功能。

## 枚举

### MciFormatConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| MciFormatMpeg | 0 | MPEG 格式 |
| MciFormatAvi | 1 | AVI 格式 |
| MciFormatMidi | 2 | MIDI 格式 |
| MciFormatWave | 3 | Wave 格式 |
| MciFormatOle | 4 | OLE 存储 |
| MciFormatOleStream | 5 | OLE 流 |
| MciFormatRiff | 6 | RIFF 格式 |
| MciFormatExif | 7 | Exif 格式 |
| MciFormatJpeg | 8 | JPEG 格式 |
| MciFormatPng | 9 | PNG 格式 |
| MciFormatGif | 10 | GIF 格式 |

### MciModeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| MciModeNotOpen | 524 | 设备未打开 |
| MciModeStop | 525 | 设备已停止 |
| MciModePlay | 526 | 设备正在播放 |
| MciModeRecord | 527 | 设备正在录制 |
| MciModeSeek | 528 | 设备正在定位 |
| MciModePause | 529 | 设备已暂停 |
| MciModeReady | 530 | 设备就绪 |

### MciNotifyConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| MciNotifyAborted | &H4 | 操作被中止 |
| MciNotifySuperseded | &H8 | 操作被替代 |
| MciNotifySuccessful | &H1 | 操作成功完成 |
| MciNotifyFailure | &H2 | 操作失败 |

### MciCaptionConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| MciCaptionOff | 0 | 不显示标题 |
| MciCaptionFileName | 1 | 显示文件名 |
| MciCaptionDevice | 2 | 显示设备名称 |
| MciCaptionMode | 3 | 显示当前模式 |
| MciCaptionPosition | 4 | 显示当前位置 |
| MciCaptionLength | 5 | 显示媒体长度 |
| MciCaptionError | 6 | 显示错误信息 |
| MciCaptionInfo | 7 | 显示所有信息 |

### CCBorderStyleConstants

参见通用枚举。

### CCMousePointerConstants

参见通用枚举。

## 属性

### Command

```vb
Property Let Command(ByVal Value As String)
```

向 MCI 设备发送命令字符串。

### CommandReturn

```vb
Property Get CommandReturn() As String
```

返回最后一次 MCI 命令的返回结果。只读。

### FileName

```vb
Property Get FileName() As String
Property Let FileName(ByVal Value As String)
```

要打开或加载的媒体文件名。

### DeviceAlias

```vb
Property Get DeviceAlias() As String
```

返回设备的别名。只读。

### DeviceID

```vb
Property Get DeviceID() As Long
```

返回设备的 ID。只读。

### Device

```vb
Property Get Device() As String
```

返回当前设备类型。只读。

### NewDevice

```vb
Property Let NewDevice(ByVal Value As String)
```

设置要打开的新设备类型。只写。

### Error

```vb
Property Get Error() As Long
```

返回最近的 MCI 错误代码。只读。

### ErrorString

```vb
Property Get ErrorString() As String
```

返回最近的 MCI 错误描述字符串。只读。

### TimeFormat

```vb
Property Get TimeFormat() As MciFormatConstants
Property Let TimeFormat(ByVal Value As MciFormatConstants)
```

时间格式。

### Mode

```vb
Property Get Mode() As MciModeConstants
```

返回当前设备模式。只读。

### ModeString

```vb
Property Get ModeString() As String
```

返回当前设备模式的字符串描述。只读。

### Position

```vb
Property Get Position() As Long
```

返回当前位置。只读。

### PositionString

```vb
Property Get PositionString() As String
```

返回当前位置的字符串表示。只读。

### StartPosition

```vb
Property Get StartPosition() As Long
```

返回起始位置。只读。

### Length

```vb
Property Get Length() As Long
```

返回媒体总长度。只读。

### EndPosition

```vb
Property Get EndPosition() As Long
```

返回结束位置。只读。

### Volume

```vb
Property Get Volume() As Long
Property Let Volume(ByVal Value As Long)
```

音量。

### Speed

```vb
Property Get Speed() As Long
Property Let Speed(ByVal Value As Long)
```

播放速度。

### Repeat

```vb
Property Get Repeat() As Boolean
Property Let Repeat(ByVal Value As Boolean)
```

是否循环播放。

### ErrorDlg

```vb
Property Get ErrorDlg() As Boolean
Property Let ErrorDlg(ByVal Value As Boolean)
```

是否显示错误对话框。

### Record

```vb
Property Get Record() As Boolean
Property Let Record(ByVal Value As Boolean)
```

是否处于录制模式。

### Playbar

```vb
Property Get Playbar() As Boolean
Property Let Playbar(ByVal Value As Boolean)
```

是否显示播放条。

### Menu

```vb
Property Get Menu() As Boolean
Property Let Menu(ByVal Value As Boolean)
```

是否显示菜单。

### AllowOpen

```vb
Property Get AllowOpen() As Boolean
Property Let AllowOpen(ByVal Value As Boolean)
```

是否允许通过用户界面打开文件。

### AutoSizeWindow

```vb
Property Get AutoSizeWindow() As Boolean
Property Let AutoSizeWindow(ByVal Value As Boolean)
```

是否自动调整窗口大小以适应媒体。

### AutoSizeMovie

```vb
Property Get AutoSizeMovie() As Boolean
Property Let AutoSizeMovie(ByVal Value As Boolean)
```

是否自动调整媒体大小以适应窗口。

### TimerFreq

```vb
Property Get TimerFreq() As Long
Property Let TimerFreq(ByVal Value As Long)
```

计时器频率。

### Zoom

```vb
Property Get Zoom() As Long
Property Let Zoom(ByVal Value As Long)
```

缩放比例。

### Caption

```vb
Property Get Caption() As MciCaptionConstants
Property Let Caption(ByVal Value As MciCaptionConstants)
```

标题显示模式。

### BackColor

```vb
Property Get BackColor() As OLE_COLOR
Property Let BackColor(ByVal Value As OLE_COLOR)
```

背景颜色。

### BorderStyle

```vb
Property Get BorderStyle() As CCBorderStyleConstants
Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

边框样式。参见通用枚举。

### VisualStyles

```vb
Property Get VisualStyles() As Boolean
Property Let VisualStyles(ByVal Value As Boolean)
```

是否启用视觉样式。

### hWnd

```vb
Property Get hWnd() As LongPtr
```

MCIWnd 控件的窗口句柄。

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

用户控件的窗口句柄。

### Font

```vb
Property Get Font() As StdFont
Property Let Font(ByVal NewFont As StdFont)
Property Set Font(ByVal NewFont As StdFont)
```

字体。

### Enabled

```vb
Property Get Enabled() As Boolean
Property Let Enabled(ByVal Value As Boolean)
```

是否可用。

### MousePointer

```vb
Property Get MousePointer() As CCMousePointerConstants
Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

鼠标指针样式。参见通用枚举。

### MouseIcon

```vb
Property Get MouseIcon() As IPictureDisp
Property Let MouseIcon(ByVal Value As IPictureDisp)
Property Set MouseIcon(ByVal Value As IPictureDisp)
```

自定义鼠标图标。

### MouseTrack

```vb
Property Get MouseTrack() As Boolean
Property Let MouseTrack(ByVal Value As Boolean)
```

是否启用鼠标进入/离开跟踪。

### RightToLeft

```vb
Property Get RightToLeft() As Boolean
Property Let RightToLeft(ByVal Value As Boolean)
```

从右到左显示方向。

### RightToLeftMode

```vb
Property Get RightToLeftMode() As CCRightToLeftModeConstants
Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

从右到左模式。参见通用枚举。

### Name

```vb
Property Get Name() As String
```

控件名称。只读。

### Tag

```vb
Property Get Tag() As String
Property Let Tag(ByVal Value As String)
```

自定义数据。

### Parent

```vb
Property Get Parent() As Object
```

父对象。只读。

### Container

```vb
Property Get Container() As Object
Property Set Container(ByVal Value As Object)
```

容器对象。

### Left

```vb
Property Get Left() As Single
Property Let Left(ByVal Value As Single)
```

左边距。

### Top

```vb
Property Get Top() As Single
Property Let Top(ByVal Value As Single)
```

顶边距。

### Width

```vb
Property Get Width() As Single
Property Let Width(ByVal Value As Single)
```

宽度。

### Height

```vb
Property Get Height() As Single
Property Let Height(ByVal Value As Single)
```

高度。

### Visible

```vb
Property Get Visible() As Boolean
Property Let Visible(ByVal Value As Boolean)
```

是否可见。

### ToolTipText

```vb
Property Get ToolTipText() As String
Property Let ToolTipText(ByVal Value As String)
```

工具提示文本。

### HelpContextID

```vb
Property Get HelpContextID() As Long
Property Let HelpContextID(ByVal Value As Long)
```

帮助上下文 ID。

### WhatsThisHelpID

```vb
Property Get WhatsThisHelpID() As Long
Property Let WhatsThisHelpID(ByVal Value As Long)
```

"这是什么"帮助 ID。

### DragIcon

```vb
Property Get DragIcon() As IPictureDisp
Property Let DragIcon(ByVal Value As IPictureDisp)
Property Set DragIcon(ByVal Value As IPictureDisp)
```

拖拽图标。

### DragMode

```vb
Property Get DragMode() As Integer
Property Let DragMode(ByVal Value As Integer)
```

拖拽模式。

## 方法

### ShowOpen

```vb
Public Sub ShowOpen()
```

显示打开文件对话框。

### ShowSave

```vb
Public Sub ShowSave()
```

显示保存文件对话框。

### CanSave

```vb
Public Function CanSave() As Boolean
```

判断是否可以保存当前媒体。

### Eject

```vb
Public Sub Eject()
```

弹出当前媒体。

### CanEject

```vb
Public Function CanEject() As Boolean
```

判断设备是否支持弹出操作。

### PlayFrom

```vb
Public Sub PlayFrom(ByVal StartPosition As Long)
```

从指定位置开始播放。

### PlayTo

```vb
Public Sub PlayTo(ByVal EndPosition As Long)
```

播放到指定位置后停止。

### PlayReverse

```vb
Public Sub PlayReverse()
```

反向播放。

### CanPlay

```vb
Public Function CanPlay() As Boolean
```

判断设备是否支持播放。

### CanRecord

```vb
Public Function CanRecord() As Boolean
```

判断设备是否支持录制。

### CanConfig

```vb
Public Function CanConfig() As Boolean
```

判断设备是否支持配置。

### CanWindow

```vb
Public Function CanWindow() As Boolean
```

判断设备是否支持窗口显示。

### Drag

```vb
Public Sub Drag([ByRef Action As Variant])
```

开始、结束或取消拖放操作。

### SetFocus

```vb
Public Sub SetFocus()
```

将焦点移至控件。

### ZOrder

```vb
Public Sub ZOrder([ByRef Position As Variant])
```

设置控件的 Z 顺序。

### OLEDrag

```vb
Public Sub OLEDrag()
```

启动 OLE 拖放操作。

### Refresh

```vb
Public Sub Refresh()
```

强制重绘控件。

## 事件

### ModeChange

```vb
Public Event ModeChange()
```

设备模式发生改变时触发。

### PositionChange

```vb
Public Event PositionChange()
```

当前位置发生改变时触发。

### MediaChange

```vb
Public Event MediaChange()
```

当前媒体发生改变时触发。

### Error

```vb
Public Event Error()
```

发生 MCI 错误时触发。

### Notify

```vb
Public Event Notify()
```

MCI 操作完成通知。

### Signal

```vb
Public Event Signal()
```

收到信号时触发。

### Click

```vb
Public Event Click()
```

单击控件时触发。

### DblClick

```vb
Public Event DblClick()
```

双击控件时触发。

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

按下鼠标按钮时触发。

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

释放鼠标按钮时触发。

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

移动鼠标时触发。

### MouseEnter

```vb
Public Event MouseEnter()
```

鼠标进入控件时触发。

### MouseLeave

```vb
Public Event MouseLeave()
```

鼠标离开控件时触发。

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

OLE 拖放完成时触发。

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

OLE 拖放经过控件时触发。

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

OLE 拖放需要更改光标时触发。

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

OLE 拖放开始时触发。

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

OLE 拖放完成时触发。

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

OLE 放置目标请求数据时触发。

## 代码示例

```vb
' 打开并播放 AVI 文件
MCIWnd1.FileName = "C:\video.avi"
MCIWnd1.Playbar = True
MCIWnd1.Command = "play"

' 录制音频
MCIWnd1.NewDevice = "waveaudio"
MCIWnd1.Command = "open new"
MCIWnd1.Record = True
MCIWnd1.Command = "record"
```