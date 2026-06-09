---
title: 命令链接控件（CommandLink）
description: 命令链接控件（CommandLink） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5c2870b1-57fb-49b5-8955-0de1e5c6c3e0'
  PropagateID: '5c2870b1-57fb-49b5-8955-0de1e5c6c3e0'
  ReservedCode1: '9172b52a-9748-497f-acfc-08d4774b5437'
  ReservedCode2: '9172b52a-9748-497f-acfc-08d4774b5437'
---

# 命令链接控件（CommandLink）

Windows 命令链接按钮控件，显示标题、提示文本和可选图标。

## 枚举

无控件专用枚举。

## 属性

### Default
`Property Get Default() As Boolean`
`Property Let Default(ByVal Value As Boolean)`

是否为默认按钮。

### Cancel
`Property Get Cancel() As Boolean`
`Property Let Cancel(ByVal Value As Boolean)`

是否为取消按钮。

### VisualStyles
`Property Get VisualStyles() As Boolean`
`Property Let VisualStyles(ByVal Value As Boolean)`

是否启用视觉样式。

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

背景色。

### ImageList
`Property Get ImageList() As Variant`
`Property Let ImageList(ByVal Value As Variant)`
`Property Set ImageList(ByVal Value As Variant)`

关联的 ImageList 控件。

### Caption
`Property Get Caption() As String`
`Property Let Caption(ByVal Value As String)`

标题文本。

### Hint
`Property Get Hint() As String`
`Property Let Hint(ByVal Value As String)`

提示文本（标题下方的说明文字）。

### Picture
`Property Get Picture() As IPictureDisp`
`Property Let Picture(ByVal Value As IPictureDisp)`
`Property Set Picture(ByVal Value As IPictureDisp)`

图标。

### Transparent
`Property Get Transparent() As Boolean`
`Property Let Transparent(ByVal Value As Boolean)`

透明背景（运行时有效）。

### RightToLeft
`Property Get RightToLeft() As Boolean`
`Property Let RightToLeft(ByVal Value As Boolean)`

从右到左显示。

### RightToLeftLayout
`Property Get RightToLeftLayout() As Boolean`
`Property Let RightToLeftLayout(ByVal Value As Boolean)`

从右到左镜像布局。

### RightToLeftMode
`Property Get RightToLeftMode() As CCRightToLeftModeConstants`
`Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)`

从右到左模式。参见通用枚举。

### Value
`Property Get Value() As Boolean`
`Property Let Value(ByVal NewValue As Boolean)`

按钮值，设为 True 时触发 Click 事件。

### Pushed
`Property Get Pushed() As Boolean`
`Property Let Pushed(ByVal Value As Boolean)`

是否处于按下状态。

### Hot
`Property Get Hot() As Boolean`

是否处于热状态。只读。

### hWnd / hWndUserControl / Font / Enabled / OLEDropMode / MousePointer / MouseIcon / MouseTrack

参见公共属性。

### Name / Tag / Parent / Container / Left / Top / Width / Height / Visible / ToolTipText / HelpContextID / WhatsThisHelpID / DragIcon / DragMode

参见标准扩展器属性。

## 方法

### Refresh
`Public Sub Refresh()`

强制重绘。

### PerformClick
`Public Sub PerformClick()`

模拟用户点击。

### SetShield
`Public Function SetShield(ByVal State As Boolean) As Long`

设置 UAC 提升图标。成功返回 1。

### GetIdealHeight
`Public Function GetIdealHeight() As Single`

获取控件的理想高度。

### OLEDrag
`Public Sub OLEDrag()`

### Drag / ZOrder / SetFocus / Move

参见标准方法。

## 事件

### Click
`Public Event Click()`

单击。

### DblClick
`Public Event DblClick()`

双击。

### HotChanged
`Public Event HotChanged()`

热状态改变。

### KeyDown / KeyUp / KeyPress

### MouseDown / MouseMove / MouseUp / MouseEnter / MouseLeave

### OLECompleteDrag / OLEDragDrop / OLEDragOver / OLEGiveFeedback / OLESetData / OLEStartDrag

## 代码示例

### 基本用法

```vb
' 设置命令链接
CommandLink1.Caption = "保存文件"
CommandLink1.Hint = "将当前文档保存到磁盘"
CommandLink1.Default = True

' 设置 UAC 提升图标
CommandLink1.SetShield True

' 获取理想高度并调整
CommandLink1.Height = CommandLink1.GetIdealHeight
```

### 响应点击

```vb
Private Sub CommandLink1_Click()
    MsgBox "您点击了: " & CommandLink1.Caption
End Sub
```