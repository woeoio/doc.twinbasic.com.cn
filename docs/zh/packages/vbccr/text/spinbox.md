---
title: 数值调节控件（SpinBox）
description: 数值调节控件（SpinBox） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5fd57163-f2e5-4a82-bc48-7bcd636fcb67'
  PropagateID: '5fd57163-f2e5-4a82-bc48-7bcd636fcb67'
  ReservedCode1: '1c7db5e5-19e0-4216-9411-02aec016d51e'
  ReservedCode2: '1c7db5e5-19e0-4216-9411-02aec016d51e'
---

# 数值调节控件（SpinBox）

提供带编辑框的数值调节控件，支持十六进制显示、千位分隔符、加速递增和OLE拖放。

## 枚举

### SpbNumberStyleConstants

数字显示样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SpbNumberStyleDecimal | 0 | 十进制 |
| SpbNumberStyleHexadecimal | 1 | 十六进制 |

## 属性

### Name

```vb
Public Property Get Name() As String
```

返回在代码中标识对象的名称。

### Tag

```vb
Public Property Get Tag() As String
Public Property Let Tag(ByVal Value As String)
```

存储程序所需的额外数据。

### Parent

```vb
Public Property Get Parent() As Object
```

返回对象所在的对象。

### Container

```vb
Public Property Get Container() As Object
Public Property Set Container(ByVal Value As Object)
```

返回/设置对象的容器。

### Left

```vb
Public Property Get Left() As Single
Public Property Let Left(ByVal Value As Single)
```

返回/设置对象与其容器左边缘的距离。

### Top

```vb
Public Property Get Top() As Single
Public Property Let Top(ByVal Value As Single)
```

返回/设置对象与其容器顶边缘的距离。

### Width

```vb
Public Property Get Width() As Single
Public Property Let Width(ByVal Value As Single)
```

返回/设置对象的宽度。

### Height

```vb
Public Property Get Height() As Single
Public Property Let Height(ByVal Value As Single)
```

返回/设置对象的高度。

### Visible

```vb
Public Property Get Visible() As Boolean
Public Property Let Visible(ByVal Value As Boolean)
```

返回/设置对象是否可见。

### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

返回/设置鼠标悬停时显示的提示文本。

### HelpContextID

```vb
Public Property Get HelpContextID() As Long
Public Property Let HelpContextID(ByVal Value As Long)
```

返回/设置关联的上下文帮助ID。

### WhatsThisHelpID

```vb
Public Property Get WhatsThisHelpID() As Long
Public Property Let WhatsThisHelpID(ByVal Value As Long)
```

返回/设置关联的上下文帮助ID。

### DragIcon

```vb
Public Property Get DragIcon() As IPictureDisp
Public Property Let DragIcon(ByVal Value As IPictureDisp)
Public Property Set DragIcon(ByVal Value As IPictureDisp)
```

返回/设置拖放操作中显示的图标。

### DragMode

```vb
Public Property Get DragMode() As Integer
Public Property Let DragMode(ByVal Value As Integer)
```

返回/设置拖动模式。

### hWnd

```vb
Public Property Get hWnd() As LongPtr
```

返回控件句柄。

### hWndUserControl

```vb
Public Property Get hWndUserControl() As LongPtr
```

返回UserControl句柄。

### hWndEdit

```vb
Public Property Get hWndEdit() As LongPtr
```

返回内嵌编辑框句柄。

### Font

```vb
Public Property Get Font() As StdFont
Public Property Let Font(ByVal NewFont As StdFont)
Public Property Set Font(ByVal NewFont As StdFont)
```

返回/设置字体。

### VisualStyles

```vb
Public Property Get VisualStyles() As Boolean
Public Property Let VisualStyles(ByVal Value As Boolean)
```

返回/设置是否启用视觉样式。需要comctl32.dll 6.0或更高版本。

### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

返回/设置背景色。

### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

返回/设置前景色。

### Enabled

```vb
Public Property Get Enabled() As Boolean
Public Property Let Enabled(ByVal Value As Boolean)
```

返回/设置对象是否能响应用户事件。

### OLEDropMode

```vb
Public Property Get OLEDropMode() As OLEDropModeConstants
Public Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)
```

返回/设置对象是否可以作为OLE放置目标。

### MousePointer

```vb
Public Property Get MousePointer() As CCMousePointerConstants
Public Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

返回/设置鼠标悬停时显示的指针类型。参见通用枚举。

### MouseIcon

```vb
Public Property Get MouseIcon() As IPictureDisp
Public Property Let MouseIcon(ByVal Value As IPictureDisp)
Public Property Set MouseIcon(ByVal Value As IPictureDisp)
```

返回/设置自定义鼠标图标。

### MouseTrack

```vb
Public Property Get MouseTrack() As Boolean
Public Property Let MouseTrack(ByVal Value As Boolean)
```

返回/设置是否在鼠标进入或离开控件时触发事件。

### RightToLeft

```vb
Public Property Get RightToLeft() As Boolean
Public Property Let RightToLeft(ByVal Value As Boolean)
```

返回/设置从右到左显示方向。

### RightToLeftMode

```vb
Public Property Get RightToLeftMode() As CCRightToLeftModeConstants
Public Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

返回/设置从右到左模式。参见通用枚举。

### Min

```vb
Public Property Get Min() As Long
Public Property Let Min(ByVal Value As Long)
```

返回/设置最小值。

### Max

```vb
Public Property Get Max() As Long
Public Property Let Max(ByVal Value As Long)
```

返回/设置最大值。

### Value

```vb
Public Property Get Value() As Long
Public Property Let Value(ByVal NewValue As Long)
```

返回/设置当前值。

### Increment

```vb
Public Property Get Increment() As Long
Public Property Let Increment(ByVal Value As Long)
```

返回/设置每次点击的递增/递减量。

### Wrap

```vb
Public Property Get Wrap() As Boolean
Public Property Let Wrap(ByVal Value As Boolean)
```

返回/设置值是否循环。当为True时，超过最大值回到最小值，反之亦然。

### HotTracking

```vb
Public Property Get HotTracking() As Boolean
Public Property Let HotTracking(ByVal Value As Boolean)
```

返回/设置是否启用热点跟踪。

### Alignment

```vb
Public Property Get Alignment() As CCLeftRightAlignmentConstants
Public Property Let Alignment(ByVal Value As CCLeftRightAlignmentConstants)
```

返回/设置上下按钮的对齐方式。参见通用枚举。

### ThousandsSeparator

```vb
Public Property Get ThousandsSeparator() As Boolean
Public Property Let ThousandsSeparator(ByVal Value As Boolean)
```

返回/设置是否显示千位分隔符。

### NumberStyle

```vb
Public Property Get NumberStyle() As SpbNumberStyleConstants
Public Property Let NumberStyle(ByVal Value As SpbNumberStyleConstants)
```

返回/设置数字显示样式。

### ArrowKeysChange

```vb
Public Property Get ArrowKeysChange() As Boolean
Public Property Let ArrowKeysChange(ByVal Value As Boolean)
```

返回/设置是否允许方向键改变值。

### AllowOnlyNumbers

```vb
Public Property Get AllowOnlyNumbers() As Boolean
Public Property Let AllowOnlyNumbers(ByVal Value As Boolean)
```

返回/设置是否只允许输入数字。

### TextAlignment

```vb
Public Property Get TextAlignment() As VBRUN.AlignmentConstants
Public Property Let TextAlignment(ByVal Value As VBRUN.AlignmentConstants)
```

返回/设置文本对齐方式。

### Locked

```vb
Public Property Get Locked() As Boolean
Public Property Let Locked(ByVal Value As Boolean)
```

返回/设置是否锁定编辑框内容不可编辑。

### HideSelection

```vb
Public Property Get HideSelection() As Boolean
Public Property Let HideSelection(ByVal Value As Boolean)
```

返回/设置控件失去焦点时是否隐藏选定内容。

### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

返回/设置编辑框中的文本。

### SelStart

```vb
Public Property Get SelStart() As Long
Public Property Let SelStart(ByVal Value As Long)
```

返回/设置选定文本的起始位置。

### SelLength

```vb
Public Property Get SelLength() As Long
Public Property Let SelLength(ByVal Value As Long)
```

返回/设置选定文本的长度。

### SelText

```vb
Public Property Get SelText() As String
Public Property Let SelText(ByVal Value As String)
```

返回/设置选定文本。

## 方法

### Refresh

```vb
Public Sub Refresh()
```

强制完全重绘对象。

### SetAcceleration

```vb
Public Sub SetAcceleration(ByVal Delays As Variant, ByVal Increments As Variant)
```

设置加速递增参数。Delays和Increments为数组，指定延迟时间和递增量。

### ValidateText

```vb
Public Sub ValidateText()
```

验证编辑框中的文本是否为有效数值。

### OLEDrag

```vb
Public Sub OLEDrag()
```

启动OLE拖放操作。

### Drag

```vb
Public Sub Drag(Optional ByRef Action As Variant)
```

开始、结束或取消拖动操作。

### SetFocus

```vb
Public Sub SetFocus()
```

将焦点移至控件。

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

设置Z顺序。

## 事件

### DownClick

```vb
Public Event DownClick()
```

点击向下按钮时触发。

### UpClick

```vb
Public Event UpClick()
```

点击向上按钮时触发。

### BeforeChange

```vb
Public Event BeforeChange(ByVal Value As Long, ByRef Delta As Long)
```

值即将改变时触发。Value为当前值，Delta为预期变化量，可修改Delta控制实际变化。

### Change

```vb
Public Event Change()
```

值改变后触发。

### TextChange

```vb
Public Event TextChange()
```

编辑框文本改变后触发。

### ContextMenu

```vb
Public Event ContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)
```

右键点击控件时触发。Handled为True时阻止默认上下文菜单。

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

按键前预览。IsInputKey为True表示该键为输入键。

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

按键释放前预览。

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

按下键盘键时触发。

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

释放键盘键时触发。

### KeyPress

```vb
Public Event KeyPress(KeyChar As Integer)
```

按下并释放ANSI键时触发。

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

按下鼠标按钮时触发。

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

移动鼠标时触发。

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

释放鼠标按钮时触发。

### MouseEnter

```vb
Public Event MouseEnter()
```

鼠标进入控件区域时触发。

### MouseLeave

```vb
Public Event MouseLeave()
```

鼠标离开控件区域时触发。

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

OLE拖放操作完成时触发。

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

OLE拖放操作放置时触发。

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

OLE拖放操作悬停时触发。

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

OLE拖放操作给反馈时触发。

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

OLE拖放操作设置数据时触发。

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

OLE拖放操作开始时触发。

## 代码示例

### 基本用法

```vb
' 设置SpinBox控件
With SpinBox1
    .Min = 0
    .Max = 1000
    .Value = 100
    .Increment = 10
    .Wrap = True
    .HotTracking = True
    .ThousandsSeparator = True
End With

' 设置加速递增
Dim Delays(0 To 2) As Long, Increments(0 To 2) As Long
Delays(0) = 500: Increments(0) = 10
Delays(1) = 300: Increments(1) = 50
Delays(2) = 100: Increments(2) = 100
SpinBox1.SetAcceleration Delays, Increments

' 限制值变化范围
Private Sub SpinBox1_BeforeChange(ByVal Value As Long, ByRef Delta As Long)
    If Value + Delta > 1000 Then Delta = 1000 - Value
End Sub
```