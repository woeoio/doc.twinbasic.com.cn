---
title: IP 地址控件（IPAddress）
description: IP 地址控件（IPAddress） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8b8027e5-8f24-42a6-86ce-e1f7fa5e5238'
  PropagateID: '8b8027e5-8f24-42a6-86ce-e1f7fa5e5238'
  ReservedCode1: '5de1a978-8a5f-4a28-8911-02c295d086bc'
  ReservedCode2: '5de1a978-8a5f-4a28-8911-02c295d086bc'
---

# IP 地址控件（IPAddress）

封装 SysIPAddress32 系统控件，用于输入和显示 IPv4 地址。

## 枚举

### IPATextConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| IPAEmpty | 0 | 空地址 |
| IPAInvalid | -1 | 无效地址 |

### IPAFocusConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| IPAFocusField1 | 0 | 第 1 字段 |
| IPAFocusField2 | 1 | 第 2 字段 |
| IPAFocusField3 | 2 | 第 3 字段 |
| IPAFocusField4 | 3 | 第 4 字段 |

### CCAppearanceConstants

参见通用枚举。

### CCBorderStyleConstants

参见通用枚举。

### CCMousePointerConstants

参见通用枚举。

### CCIMEModeConstants

参见通用枚举。

### CCRightToLeftModeConstants

参见通用枚举。

### OLEDropModeConstants

参见通用枚举。

## 属性

### Text
`Property Get Text() As IPATextConstants`
`Property Let Text(ByVal Value As IPATextConstants)`

IP 地址的数值表示。IPAEmpty（0）表示空地址，IPAInvalid（-1）表示无效地址。

### Field1
`Property Get Field1() As Byte`
`Property Let Field1(ByVal Value As Byte)`

第 1 字段值（0-255）。

### Field2
`Property Get Field2() As Byte`
`Property Let Field2(ByVal Value As Byte)`

第 2 字段值（0-255）。

### Field3
`Property Get Field3() As Byte`
`Property Let Field3(ByVal Value As Byte)`

第 3 字段值（0-255）。

### Field4
`Property Get Field4() As Byte`
`Property Let Field4(ByVal Value As Byte)`

第 4 字段值（0-255）。

### Field1RangeMin
`Property Get Field1RangeMin() As Byte`
`Property Let Field1RangeMin(ByVal Value As Byte)`

第 1 字段最小值。默认 0。

### Field1RangeMax
`Property Get Field1RangeMax() As Byte`
`Property Let Field1RangeMax(ByVal Value As Byte)`

第 1 字段最大值。默认 255。

### Field2RangeMin
`Property Get Field2RangeMin() As Byte`
`Property Let Field2RangeMin(ByVal Value As Byte)`

第 2 字段最小值。默认 0。

### Field2RangeMax
`Property Get Field2RangeMax() As Byte`
`Property Let Field2RangeMax(ByVal Value As Byte)`

第 2 字段最大值。默认 255。

### Field3RangeMin
`Property Get Field3RangeMin() As Byte`
`Property Let Field3RangeMin(ByVal Value As Byte)`

第 3 字段最小值。默认 0。

### Field3RangeMax
`Property Get Field3RangeMax() As Byte`
`Property Let Field3RangeMax(ByVal Value As Byte)`

第 3 字段最大值。默认 255。

### Field4RangeMin
`Property Get Field4RangeMin() As Byte`
`Property Let Field4RangeMin(ByVal Value As Byte)`

第 4 字段最小值。默认 0。

### Field4RangeMax
`Property Get Field4RangeMax() As Byte`
`Property Let Field4RangeMax(ByVal Value As Byte)`

第 4 字段最大值。默认 255。

### FocusField
`Property Get FocusField() As IPAFocusConstants`
`Property Let FocusField(ByVal Value As IPAFocusConstants)`

当前焦点字段。

### BorderStyle
`Property Get BorderStyle() As CCBorderStyleConstants`
`Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)`

边框样式。参见通用枚举。

### Font
`Property Get Font() As StdFont`
`Property Let Font(ByVal NewFont As StdFont)`
`Property Set Font(ByVal NewFont As StdFont)`

字体。

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

是否可用。

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

背景颜色。

### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

前景颜色。

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

### RightToLeftLayout
`Property Get RightToLeftLayout() As Boolean`
`Property Let RightToLeftLayout(ByVal Value As Boolean)`

从右到左镜像布局。

### RightToLeftMode
`Property Get RightToLeftMode() As CCRightToLeftModeConstants`
`Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)`

从右到左模式。参见通用枚举。

### IMEMode
`Property Get IMEMode() As CCIMEModeConstants`
`Property Let IMEMode(ByVal Value As CCIMEModeConstants)`

输入法编辑器模式。参见通用枚举。

### OLEDropMode
`Property Get OLEDropMode() As OLEDropModeConstants`
`Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)`

OLE 拖放模式。参见通用枚举。

### Appearance
`Property Get Appearance() As CCAppearanceConstants`
`Property Let Appearance(ByVal Value As CCAppearanceConstants)`

外观样式。参见通用枚举。

### hWnd
`Property Get hWnd() As LongPtr`

IP 地址控件的窗口句柄。只读。

### ToolTipText
`Property Get ToolTipText() As String`
`Property Let ToolTipText(ByVal Value As String)`

工具提示文本。

### hWndUserControl
`Property Get hWndUserControl() As LongPtr`

用户控件的窗口句柄。只读。

### Name
`Property Get Name() As String`

控件名称。只读。

### Tag
`Property Get Tag() As Variant`
`Property Let Tag(ByVal Value As Variant)`
`Property Set Tag(ByVal Value As Variant)`

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

宽度（设计时使用）。

### Height
`Property Get Height() As Single`
`Property Let Height(ByVal Value As Single)`

高度（设计时使用）。

### Visible
`Property Get Visible() As Boolean`
`Property Let Visible(ByVal Value As Boolean)`

可见性。

## 方法

### Refresh
`Sub Refresh()`

强制重绘。

### Clear
`Sub Clear()`

清除 IP 地址，将所有字段设为空。

### SetFocusField
`Sub SetFocusField(ByVal FocusField As IPAFocusConstants)`

设置焦点到指定字段。

### AboutBox
`Sub AboutBox()`

显示关于对话框。

## 事件

### Change
`Event Change()`

IP 地址改变时触发。

### FieldChange
`Event FieldChange(ByVal Field As Integer)`

指定字段改变时触发。

### KeyDown
`Event KeyDown(KeyCode As Integer, Shift As Integer)`

按键按下时触发。

### KeyUp
`Event KeyUp(KeyCode As Integer, Shift As Integer)`

按键释放时触发。

### KeyPress
`Event KeyPress(KeyChar As Integer)`

按键输入时触发。

### Click
`Event Click()`

单击时触发。

### DblClick
`Event DblClick()`

双击时触发。

### MouseDown
`Event MouseDown(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)`

鼠标按下时触发。

### MouseUp
`Event MouseUp(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)`

鼠标释放时触发。

### MouseMove
`Event MouseMove(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)`

鼠标移动时触发。

### MouseEnter
`Event MouseEnter()`

鼠标进入控件时触发。

### MouseLeave
`Event MouseLeave()`

鼠标离开控件时触发。

### OLEStartDrag
`Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)`

OLE 拖拽开始时触发。

### OLEGiveFeedback
`Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`

OLE 拖拽反馈。

### OLESetData
`Event OLESetData(Data As DataObject, DataFormat As Integer)`

OLE 设置数据。

### OLECompleteDrag
`Event OLECompleteDrag(Effect As Long)`

OLE 拖拽完成。

### OLEDragOver
`Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`

OLE 拖拽经过时触发。

### OLEDragDrop
`Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`

OLE 拖放时触发。

## 代码示例

```vb
' 设置 IP 地址（数值形式）
IPAddress1.Text = &H0100007F  ' 127.0.0.1

' 逐字段设置
IPAddress1.Field1 = 192
IPAddress1.Field2 = 168
IPAddress1.Field3 = 1
IPAddress1.Field4 = 100

' 读取 IP 地址
If IPAddress1.Text <> IPAEmpty Then
    MsgBox "IP: " & IPAddress1.Field1 & "." & IPAddress1.Field2 & "." & _
           IPAddress1.Field3 & "." & IPAddress1.Field4
End If

' 设置字段范围限制
IPAddress1.Field1RangeMin = 10
IPAddress1.Field1RangeMax = 192

' 监听变化
Private Sub IPAddress1_FieldChange(ByVal Field As Integer)
    Debug.Print "字段 " & Field & " 已更改"
End Sub
```