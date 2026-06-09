---
title: Unicode 标签控件（LabelW）
description: Unicode 标签控件（LabelW） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b606ce09-795a-4d93-9d2a-2df44a186053'
  PropagateID: 'b606ce09-795a-4d93-9d2a-2df44a186053'
  ReservedCode1: '1e732736-5795-435c-863e-2fffd6b0fc94'
  ReservedCode2: '1e732736-5795-435c-863e-2fffd6b0fc94'
---

# Unicode 标签控件（LabelW）

增强型 Unicode 标签控件，替代 VB6 标准 Label 控件，提供文本效果、边框效果、鼠标跟踪等增强功能。

## 枚举

### LblTextEffectsConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LblTextEffectNone | 0 | 无效果 |
| LblTextEffectShadow | 1 | 阴影 |
| LblTextEffectEmboss | 2 | 浮雕 |
| LblTextEffectEngrave | 3 | 刻纹 |

### LblBorderEffectsConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LblBorderEffectNone | 0 | 无边框效果 |
| LblBorderEffectSoftEdge | 1 | 柔和边缘 |
| LblBorderEffectEtched | 2 | 蚀刻 |

### CCBackStyleConstants

参见通用枚举。

### CCAppearanceConstants

参见通用枚举。

### CCBorderStyleConstants

参见通用枚举。

### CCMousePointerConstants

参见通用枚举。

### CCVerticalAlignmentConstants

参见通用枚举。

### CCRightToLeftModeConstants

参见通用枚举。

## 属性

### Alignment
`Property Get Alignment() As Long`
`Property Let Alignment(ByVal Value As Long)`

文本对齐方式。0 = 左对齐，1 = 右对齐，2 = 居中。

### AutoSize
`Property Get AutoSize() As Boolean`
`Property Let AutoSize(ByVal Value As Boolean)`

是否自动调整大小以适应内容。

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

背景颜色。

### BackStyle
`Property Get BackStyle() As CCBackStyleConstants`
`Property Let BackStyle(ByVal Value As CCBackStyleConstants)`

背景样式。参见通用枚举。

### BorderStyle
`Property Get BorderStyle() As CCBorderStyleConstants`
`Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)`

边框样式。参见通用枚举。

### Caption
`Property Get Caption() As String`
`Property Let Caption(ByVal Value As String)`

显示文本。

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

是否可用。

### Font
`Property Get Font() As StdFont`
`Property Let Font(ByVal NewFont As StdFont)`
`Property Set Font(ByVal NewFont As StdFont)`

字体。

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

### UseMnemonic
`Property Get UseMnemonic() As Boolean`
`Property Let UseMnemonic(ByVal Value As Boolean)`

是否将 & 字符解释为快捷键前缀。

### TextEffect
`Property Get TextEffect() As LblTextEffectsConstants`
`Property Let TextEffect(ByVal Value As LblTextEffectsConstants)`

文本效果。

### TextEffectColor
`Property Get TextEffectColor() As OLE_COLOR`
`Property Let TextEffectColor(ByVal Value As OLE_COLOR)`

文本效果颜色。

### BorderEffect
`Property Get BorderEffect() As LblBorderEffectsConstants`
`Property Let BorderEffect(ByVal Value As LblBorderEffectsConstants)`

边框效果。

### BorderEffectColor
`Property Get BorderEffectColor() As OLE_COLOR`
`Property Let BorderEffectColor(ByVal Value As OLE_COLOR)`

边框效果颜色。

### WordWrap
`Property Get WordWrap() As Boolean`
`Property Let WordWrap(ByVal Value As Boolean)`

是否自动换行。

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

### Appearance
`Property Get Appearance() As CCAppearanceConstants`
`Property Let Appearance(ByVal Value As CCAppearanceConstants)`

外观样式。参见通用枚举。

### VerticalAlignment
`Property Get VerticalAlignment() As CCVerticalAlignmentConstants`
`Property Let VerticalAlignment(ByVal Value As CCVerticalAlignmentConstants)`

垂直对齐方式。参见通用枚举。

### hWnd
`Property Get hWnd() As LongPtr`

窗口句柄。只读。

### ToolTipText
`Property Get ToolTipText() As String`
`Property Let ToolTipText(ByVal Value As String)`

工具提示文本。

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

宽度。

### Height
`Property Get Height() As Single`
`Property Let Height(ByVal Value As Single)`

高度。

### Visible
`Property Get Visible() As Boolean`
`Property Let Visible(ByVal Value As Boolean)`

可见性。

## 方法

### Refresh
`Sub Refresh()`

强制重绘。

### AboutBox
`Sub AboutBox()`

显示关于对话框。

## 事件

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
' 带阴影效果的标签
With LabelW1
    .Caption = "欢迎使用 VBCCR"
    .TextEffect = LblTextEffectShadow
    .TextEffectColor = vbGrayText
    .Font.Size = 14
    .Font.Bold = True
End With

' 响应鼠标进入/离开
Private Sub LabelW1_MouseEnter()
    LabelW1.ForeColor = vbBlue
End Sub

Private Sub LabelW1_MouseLeave()
    LabelW1.ForeColor = vbWindowText
End Sub

' 垂直居中的蚀刻边框标签
With LabelW2
    .Caption = "设置"
    .VerticalAlignment = ccVCenter
    .BorderEffect = LblBorderEffectEtched
    .BorderEffectColor = vb3DShadow
End With
```