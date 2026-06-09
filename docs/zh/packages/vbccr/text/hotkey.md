---
title: 热键控件（HotKey）
description: 热键控件（HotKey） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e67fcb7e-ecd0-4a17-b7dd-59f3c1c9992c'
  PropagateID: 'e67fcb7e-ecd0-4a17-b7dd-59f3c1c9992c'
  ReservedCode1: 'ca6dc564-77fe-4798-8e45-eae51f7f5144'
  ReservedCode2: 'ca6dc564-77fe-4798-8e45-eae51f7f5144'
---

# 热键控件（HotKey）

提供 Windows 标准热键输入控件，允许用户选择快捷键组合。

## 枚举

### HkeInvalidKeyCombinationConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| HkeInvalidKeyCombinationNone | 1 | 无效组合：无修饰键 |
| HkeInvalidKeyCombinationShift | 2 | 无效组合：仅 Shift |
| HkeInvalidKeyCombinationCtrl | 4 | 无效组合：仅 Ctrl |
| HkeInvalidKeyCombinationAlt | 8 | 无效组合：仅 Alt |
| HkeInvalidKeyCombinationShiftCtrl | 16 | 无效组合：Shift+Ctrl |
| HkeInvalidKeyCombinationShiftAlt | 32 | 无效组合：Shift+Alt |
| HkeInvalidKeyCombinationCtrlAlt | 64 | 无效组合：Ctrl+Alt |
| HkeInvalidKeyCombinationShiftCtrlAlt | 128 | 无效组合：Shift+Ctrl+Alt |

## 属性

### Name

`Property Get Name() As String`

返回控件的名称。

### Tag

`Property Get/Let Tag() As String`

返回/设置控件的标记值。

### Parent

`Property Get Parent() As Object`

返回控件的父对象。

### Container

`Property Get/Set Container() As Object`

返回/设置控件的容器。

### Left

`Property Get/Let Left() As Single`

返回/设置控件左边缘的位置。

### Top

`Property Get/Let Top() As Single`

返回/设置控件上边缘的位置。

### Width

`Property Get/Let Width() As Single`

返回/设置控件的宽度。

### Height

`Property Get/Let Height() As Single`

返回/设置控件的高度。

### Visible

`Property Get/Let Visible() As Boolean`

返回/设置控件是否可见。

### ToolTipText

`Property Get/Let ToolTipText() As String`

返回/设置控件的工具提示文本。

### HelpContextID

`Property Get/Let HelpContextID() As Long`

返回/设置控件的帮助上下文 ID。

### WhatsThisHelpID

`Property Get/Let WhatsThisHelpID() As Long`

返回/设置控件的"这是什么"帮助 ID。

### DragIcon

`Property Get/Let/Set DragIcon() As IPictureDisp`

返回/设置拖动操作时显示的图标。

### DragMode

`Property Get/Let DragMode() As Integer`

返回/设置拖动模式（手动或自动）。

### hWnd

`Property Get hWnd() As LongPtr`

返回热键控件的窗口句柄。

### hWndUserControl

`Property Get hWndUserControl() As LongPtr`

返回 UserControl 的窗口句柄。

### Font

`Property Get/Let/Set Font() As StdFont`

返回/设置控件使用的字体。

### VisualStyles

`Property Get/Let VisualStyles() As Boolean`

返回/设置是否启用视觉样式。

### Enabled

`Property Get/Let Enabled() As Boolean`

返回/设置控件是否可用。

### OLEDropMode

`Property Get/Let OLEDropMode() As OLEDropModeConstants`

返回/设置 OLE 放置模式。参见通用枚举。

### MousePointer

`Property Get/Let MousePointer() As CCMousePointerConstants`

返回/设置鼠标指针类型。参见通用枚举。

### MouseIcon

`Property Get/Let/Set MouseIcon() As IPictureDisp`

返回/设置自定义鼠标图标。

### MouseTrack

`Property Get/Let MouseTrack() As Boolean`

返回/设置是否启用鼠标进入/离开跟踪。

### BackColor

`Property Get/Let BackColor() As OLE_COLOR`

返回/设置控件的背景色。

### BorderStyle

`Property Get/Let BorderStyle() As CCBorderStyleConstants`

返回/设置控件的边框样式。参见通用枚举。

### Value

`Property Get/Let Value(Optional ByRef Modifiers As Integer) As VBRUN.KeyCodeConstants`

返回/设置热键的键码。Modifiers 参数接收修饰键标志（Shift=1, Ctrl=2, Alt=4）。

### RawValue

`Property Get/Let RawValue() As Long`

返回/设置热键的原始数值（低字节为键码，高字节为修饰键标志）。

### Text

`Property Get Text() As String`

返回热键的显示文本。只读。

## 方法

### OLEDrag

`Public Sub OLEDrag()`

启动 OLE 拖动操作。

### Drag

`Public Sub Drag(Optional ByRef Action As Variant)`

开始、结束或取消拖动操作。

### SetFocus

`Public Sub SetFocus()`

将焦点移到该控件。

### ZOrder

`Public Sub ZOrder(Optional ByRef Position As Variant)`

设置控件在其层级中的 Z 顺序位置。

### Refresh

`Public Sub Refresh()`

强制完全重绘控件。

### SetRules

`Public Sub SetRules(ByVal InvalidKeyCombinations As HkeInvalidKeyCombinationConstants, Optional ByVal DefaultModifiers As VBRUN.ShiftConstants)`

设置无效键组合规则和默认修饰键。InvalidKeyCombinations 指定不允许的修饰键组合，DefaultModifiers 指定用户输入无效组合时替换为的默认修饰键。

### SetApplicationHotKey

`Public Function SetApplicationHotKey(Optional ByVal hWnd As LongPtr) As Long`

将当前热键注册为窗口的应用程序热键。返回值为 WM_SETHOTKEY 消息的返回值。

## 事件

### Click

`Public Event Click()`

单击控件时发生。

### DblClick

`Public Event DblClick()`

双击控件时发生。

### Change

`Public Event Change()`

热键值发生变化时发生。

### PreviewKeyDown

`Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)`

在 KeyDown 事件之前发生，可设置 IsInputKey 标记按键是否为输入键。

### PreviewKeyUp

`Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)`

在 KeyUp 事件之前发生。

### KeyDown

`Public Event KeyDown(KeyCode As Integer, Shift As Integer)`

按下键盘键时发生。

### KeyUp

`Public Event KeyUp(KeyCode As Integer, Shift As Integer)`

释放键盘键时发生。

### KeyPress

`Public Event KeyPress(KeyChar As Integer)`

按下并释放字符键时发生。

### MouseDown

`Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`

按下鼠标按钮时发生。

### MouseMove

`Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

移动鼠标时发生。

### MouseUp

`Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

释放鼠标按钮时发生。

### MouseEnter

`Public Event MouseEnter()`

鼠标进入控件时发生。

### MouseLeave

`Public Event MouseLeave()`

鼠标离开控件时发生。

### OLECompleteDrag

`Public Event OLECompleteDrag(Effect As Long)`

OLE 拖放操作完成或取消后，在源控件上发生。

### OLEDragDrop

`Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`

数据通过 OLE 拖放操作放置到控件上时发生。

### OLEDragOver

`Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`

OLE 拖放操作期间鼠标移过控件时发生。

### OLEGiveFeedback

`Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`

OLE 拖放操作期间需要更改鼠标光标时，在源控件上发生。

### OLESetData

`Public Event OLESetData(Data As DataObject, DataFormat As Integer)`

放置目标请求数据时，在源控件上发生。

### OLEStartDrag

`Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)`

OLE 拖放操作启动时发生。

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    With HotKey1
        .SetRules HkeInvalidKeyCombinationNone Or _
                   HkeInvalidKeyCombinationShift, vbCtrlMask
        .VisualStyles = True
    End With
End Sub

Private Sub HotKey1_Change()
    Dim Modifiers As Integer
    Dim KeyCode As VBRUN.KeyCodeConstants
    KeyCode = HotKey1.Value(Modifiers)
    Debug.Print "热键: " & HotKey1.Text
    Debug.Print "原始值: " & HotKey1.RawValue
End Sub

Private Sub cmdRegisterHotKey_Click()
    Dim Result As Long
    Result = HotKey1.SetApplicationHotKey(Me.hWnd)
    If Result = 1 Then
        Debug.Print "热键注册成功"
    Else
        Debug.Print "热键注册失败"
    End If
End Sub
```