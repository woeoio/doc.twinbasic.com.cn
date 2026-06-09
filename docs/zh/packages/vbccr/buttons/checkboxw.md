---
title: 复选框控件（CheckBoxW）
description: 复选框控件（CheckBoxW） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '62ac43b1-146e-4b3d-a9b7-063b85f95675'
  PropagateID: '62ac43b1-146e-4b3d-a9b7-063b85f95675'
  ReservedCode1: '826fb674-75f0-4899-bbe1-0ce7777ca36e'
  ReservedCode2: '826fb674-75f0-4899-bbe1-0ce7777ca36e'
---

# 复选框控件（CheckBoxW）

增强型复选框控件，支持视觉样式、自绘、ImageList 图标和 PushLike 模式。

## 枚举

### ChkImageListAlignmentConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| ChkImageListAlignmentLeft | 0 | 左对齐 |
| ChkImageListAlignmentRight | 1 | 右对齐 |
| ChkImageListAlignmentTop | 2 | 顶部对齐 |
| ChkImageListAlignmentBottom | 3 | 底部对齐 |
| ChkImageListAlignmentCenter | 4 | 居中对齐 |

### ChkDrawModeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| ChkDrawModeNormal | 0 | 正常模式，由系统绘制 |
| ChkDrawModeOwnerDraw | 1 | 自绘模式，由代码绘制 |

## 属性

### VisualStyles

```vb
Property Get VisualStyles() As Boolean
Property Let VisualStyles(ByVal Value As Boolean)
```

是否启用视觉样式。

### Appearance

```vb
Property Get Appearance() As CCAppearanceConstants
Property Let Appearance(ByVal Value As CCAppearanceConstants)
```

外观样式。参见通用枚举。

### BackColor

```vb
Property Get BackColor() As OLE_COLOR
Property Let BackColor(ByVal Value As OLE_COLOR)
```

背景色。

### ForeColor

```vb
Property Get ForeColor() As OLE_COLOR
Property Let ForeColor(ByVal Value As OLE_COLOR)
```

前景色。

### ImageList

```vb
Property Get ImageList() As Variant
Property Let ImageList(ByVal Value As Variant)
Property Set ImageList(ByVal Value As Variant)
```

关联的 ImageList 控件。

### ImageListAlignment

```vb
Property Get ImageListAlignment() As ChkImageListAlignmentConstants
Property Let ImageListAlignment(ByVal Value As ChkImageListAlignmentConstants)
```

ImageList 图标对齐方式。

### ImageListMargin

```vb
Property Get ImageListMargin() As Single
Property Let ImageListMargin(ByVal Value As Single)
```

ImageList 图标边距。

### Value

```vb
Property Get Value() As Integer
Property Let Value(ByVal Value As Integer)
```

复选框状态（0-未选中，1-选中，2-灰显）。

### Caption

```vb
Property Get Caption() As String
Property Let Caption(ByVal Value As String)
```

标题文本。

### Alignment

```vb
Property Get Alignment() As CCLeftRightAlignmentConstants
Property Let Alignment(ByVal Value As CCLeftRightAlignmentConstants)
```

复选框的对齐方式。参见通用枚举。

### TextAlignment

```vb
Property Get TextAlignment() As VBRUN.AlignmentConstants
Property Let TextAlignment(ByVal Value As VBRUN.AlignmentConstants)
```

文本对齐方式。

### PushLike

```vb
Property Get PushLike() As Boolean
Property Let PushLike(ByVal Value As Boolean)
```

是否以按钮样式显示。

### Picture

```vb
Property Get Picture() As IPictureDisp
Property Let Picture(ByVal Value As IPictureDisp)
Property Set Picture(ByVal Value As IPictureDisp)
```

图片。

### WordWrap

```vb
Property Get WordWrap() As Boolean
Property Let WordWrap(ByVal Value As Boolean)
```

是否自动换行。

### Transparent

```vb
Property Get Transparent() As Boolean
Property Let Transparent(ByVal Value As Boolean)
```

是否透明背景（运行时有效）。

### VerticalAlignment

```vb
Property Get VerticalAlignment() As CCVerticalAlignmentConstants
Property Let VerticalAlignment(ByVal Value As CCVerticalAlignmentConstants)
```

垂直对齐。参见通用枚举。

### Style

```vb
Property Get Style() As VBRUN.ButtonConstants
Property Let Style(ByVal Value As VBRUN.ButtonConstants)
```

外观样式（标准或图形）。

### DisabledPicture

```vb
Property Get DisabledPicture() As IPictureDisp
Property Let DisabledPicture(ByVal Value As IPictureDisp)
Property Set DisabledPicture(ByVal Value As IPictureDisp)
```

禁用状态图片。Style 为图形时有效。

### DownPicture

```vb
Property Get DownPicture() As IPictureDisp
Property Let DownPicture(ByVal Value As IPictureDisp)
Property Set DownPicture(ByVal Value As IPictureDisp)
```

按下状态图片。Style 为图形时有效。

### UseMaskColor

```vb
Property Get UseMaskColor() As Boolean
Property Let UseMaskColor(ByVal Value As Boolean)
```

是否使用遮罩色。Style 为图形时有效。

### MaskColor

```vb
Property Get MaskColor() As OLE_COLOR
Property Let MaskColor(ByVal Value As OLE_COLOR)
```

遮罩色。Style 为图形时有效。

### DrawMode

```vb
Property Get DrawMode() As ChkDrawModeConstants
Property Let DrawMode(ByVal Value As ChkDrawModeConstants)
```

绘制模式。

### Pushed

```vb
Property Get Pushed() As Boolean
```

是否处于按下状态。只读。

### Hot

```vb
Property Get Hot() As Boolean
```

是否处于热状态（鼠标悬停）。只读。

### hWnd

```vb
Property Get hWnd() As LongPtr
```

窗口句柄。

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

用户控件窗口句柄。

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

### OLEDropMode

```vb
Property Get OLEDropMode() As OLEDropModeConstants
Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)
```

OLE 拖放模式。参见通用枚举。

### MousePointer

```vb
Property Get MousePointer() As CCMousePointerConstants
Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

鼠标指针。参见通用枚举。

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

鼠标进入/离开跟踪。

### Name / Tag / Parent / Container / Left / Top / Width / Height / Visible / ToolTipText / HelpContextID / WhatsThisHelpID / DragIcon / DragMode

参见标准扩展器属性。

## 方法

### Refresh

```vb
Public Sub Refresh()
```

强制重绘。

### OLEDrag

```vb
Public Sub OLEDrag()
```

启动 OLE 拖放。

### Drag / ZOrder / SetFocus / Move

参见标准方法。

## 事件

### Click

```vb
Public Event Click()
```

单击。

### DblClick

```vb
Public Event DblClick()
```

双击。

### HotChanged

```vb
Public Event HotChanged()
```

热状态改变时触发。

### OwnerDraw

```vb
Public Event OwnerDraw(ByVal ItemAction As Long, ByVal ItemState As Long, ByVal hDC As LongPtr, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
```

自绘事件。DrawMode 为 OwnerDraw 时触发。

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

### KeyPress

```vb
Public Event KeyPress(KeyAscii As Integer)
```

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

### MouseEnter

```vb
Public Event MouseEnter()
```

### MouseLeave

```vb
Public Event MouseLeave()
```

### OLECompleteDrag / OLEDragDrop / OLEDragOver / OLEGiveFeedback / OLESetData / OLEStartDrag

参见 OLE 拖放事件。

## 代码示例

### 基本用法

```vb
' 设置三态复选框
CheckBoxW1.Value = vbChecked    ' 选中
CheckBoxW2.Value = vbUnchecked  ' 未选中
CheckBoxW3.Value = vbGrayed     ' 灰显

' PushLike 按钮样式
CheckBoxW1.PushLike = True

' 关联 ImageList
Set CheckBoxW1.ImageList = ImageList1
CheckBoxW1.ImageListAlignment = ChkImageListAlignmentLeft
```

### 自绘模式

```vb
Private Sub CheckBoxW1_OwnerDraw(ByVal ItemAction As Long, ByVal ItemState As Long, _
    ByVal hDC As LongPtr, ByVal Left As Long, ByVal Top As Long, _
    ByVal Right As Long, ByVal Bottom As Long)
    ' 在此绘制自定义复选框
End Sub
```