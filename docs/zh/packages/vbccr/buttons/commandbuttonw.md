---
title: 命令按钮控件（CommandButtonW）
description: 命令按钮控件（CommandButtonW） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f2689a2e-697f-49df-a5ff-80943f57b7b4'
  PropagateID: 'f2689a2e-697f-49df-a5ff-80943f57b7b4'
  ReservedCode1: '1601056d-5b7a-435d-b088-841c77294221'
  ReservedCode2: '1601056d-5b7a-435d-b088-841c77294221'
---

# 命令按钮控件（CommandButtonW）

增强型命令按钮控件，支持视觉样式、分割按钮、自绘和图片标题共存。

## 枚举

### CmdImageListAlignmentConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CmdImageListAlignmentLeft | 0 | 左对齐 |
| CmdImageListAlignmentRight | 1 | 右对齐 |
| CmdImageListAlignmentTop | 2 | 顶部对齐 |
| CmdImageListAlignmentBottom | 3 | 底部对齐 |
| CmdImageListAlignmentCenter | 4 | 居中对齐 |

### CmdDrawModeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CmdDrawModeNormal | 0 | 正常模式 |
| CmdDrawModeOwnerDraw | 1 | 自绘模式 |

## 属性

### Default

```vb
Property Get Default() As Boolean
Property Let Default(ByVal Value As Boolean)
```

是否为默认按钮（Enter 键触发）。

### Cancel

```vb
Property Get Cancel() As Boolean
Property Let Cancel(ByVal Value As Boolean)
```

是否为取消按钮（Esc 键触发）。

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
Property Get ImageListAlignment() As CmdImageListAlignmentConstants
Property Let ImageListAlignment(ByVal Value As CmdImageListAlignmentConstants)
```

ImageList 图标对齐方式。

### ImageListMargin

```vb
Property Get ImageListMargin() As Single
Property Let ImageListMargin(ByVal Value As Single)
```

ImageList 图标边距。

### Caption

```vb
Property Get Caption() As String
Property Let Caption(ByVal Value As String)
```

标题文本。

### Alignment

```vb
Property Get Alignment() As VBRUN.AlignmentConstants
Property Let Alignment(ByVal Value As VBRUN.AlignmentConstants)
```

文本水平对齐。

### VerticalAlignment

```vb
Property Get VerticalAlignment() As CCVerticalAlignmentConstants
Property Let VerticalAlignment(ByVal Value As CCVerticalAlignmentConstants)
```

文本垂直对齐。参见通用枚举。

### Picture

```vb
Property Get Picture() As IPictureDisp
Property Let Picture(ByVal Value As IPictureDisp)
Property Set Picture(ByVal Value As IPictureDisp)
```

图片。

### PictureAndCaption

```vb
Property Get PictureAndCaption() As Boolean
Property Let PictureAndCaption(ByVal Value As Boolean)
```

是否同时显示图片和标题。需要 comctl32.dll 6.1 或更高版本。

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

### SplitButton

```vb
Property Get SplitButton() As Boolean
Property Let SplitButton(ByVal Value As Boolean)
```

是否显示为分割按钮。需要 comctl32.dll 6.1 或更高版本。

### SplitButtonAlignment

```vb
Property Get SplitButtonAlignment() As CCLeftRightAlignmentConstants
Property Let SplitButtonAlignment(ByVal Value As CCLeftRightAlignmentConstants)
```

分割按钮对齐方式。参见通用枚举。

### SplitButtonNoSplit

```vb
Property Get SplitButtonNoSplit() As Boolean
Property Let SplitButtonNoSplit(ByVal Value As Boolean)
```

分割按钮不显示分割线。

### SplitButtonGlyph

```vb
Property Get SplitButtonGlyph() As IPictureDisp
Property Let SplitButtonGlyph(ByVal Value As IPictureDisp)
Property Set SplitButtonGlyph(ByVal Value As IPictureDisp)
```

分割按钮的下拉箭头图标。

### Style

```vb
Property Get Style() As VBRUN.ButtonConstants
Property Let Style(ByVal Value As VBRUN.ButtonConstants)
```

按钮样式（标准或图形）。

### DisabledPicture

```vb
Property Get DisabledPicture() As IPictureDisp
Property Let DisabledPicture(ByVal Value As IPictureDisp)
Property Set DisabledPicture(ByVal Value As IPictureDisp)
```

禁用状态图片。

### DownPicture

```vb
Property Get DownPicture() As IPictureDisp
Property Let DownPicture(ByVal Value As IPictureDisp)
Property Set DownPicture(ByVal Value As IPictureDisp)
```

按下状态图片。

### UseMaskColor

```vb
Property Get UseMaskColor() As Boolean
Property Let UseMaskColor(ByVal Value As Boolean)
```

是否使用遮罩色。

### MaskColor

```vb
Property Get MaskColor() As OLE_COLOR
Property Let MaskColor(ByVal Value As OLE_COLOR)
```

遮罩色。

### DrawMode

```vb
Property Get DrawMode() As CmdDrawModeConstants
Property Let DrawMode(ByVal Value As CmdDrawModeConstants)
```

绘制模式。

### Value

```vb
Property Get Value() As Boolean
Property Let Value(ByVal NewValue As Boolean)
```

按钮值，设为 True 时触发 Click 事件。

### Pushed

```vb
Property Get Pushed() As Boolean
Property Let Pushed(ByVal Value As Boolean)
```

是否处于按下状态。

### Hot

```vb
Property Get Hot() As Boolean
```

是否处于热状态。只读。

### DroppedDown

```vb
Property Get DroppedDown() As Boolean
Property Let DroppedDown(ByVal Value As Boolean)
```

分割按钮是否已下拉。

### hWnd / hWndUserControl / Font / Enabled / OLEDropMode / MousePointer / MouseIcon / MouseTrack / RightToLeft / RightToLeftLayout / RightToLeftMode

参见公共属性。

### Name / Tag / Parent / Container / Left / Top / Width / Height / Visible / ToolTipText / HelpContextID / WhatsThisHelpID / DragIcon / DragMode

参见标准扩展器属性。

## 方法

### Refresh

```vb
Public Sub Refresh()
```

强制重绘。

### PerformClick

```vb
Public Sub PerformClick()
```

模拟用户点击按钮。

### SetShield

```vb
Public Function SetShield(ByVal State As Boolean) As Long
```

设置 UAC 提升图标。成功返回 1。需要 comctl32.dll 6.1 或更高版本。

### GetIdealSize

```vb
Public Sub GetIdealSize(ByRef Width As Single, ByRef Height As Single)
```

获取按钮的理想尺寸。需要 comctl32.dll 6.0 或更高版本。

### OLEDrag

```vb
Public Sub OLEDrag()
```

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

热状态改变。

### DropDown

```vb
Public Event DropDown()
```

分割按钮下拉时触发。

### OwnerDraw

```vb
Public Event OwnerDraw(ByVal DisplayAsDefault As Boolean, ByVal ItemAction As Long, ByVal ItemState As Long, ByVal hDC As LongPtr, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
```

自绘事件。

### KeyDown / KeyUp / KeyPress

### MouseDown / MouseMove / MouseUp / MouseEnter / MouseLeave

### OLECompleteDrag / OLEDragDrop / OLEDragOver / OLEGiveFeedback / OLESetData / OLEStartDrag

## 代码示例

### 基本用法

```vb
' 设置默认按钮
CommandButtonW1.Default = True
CommandButtonW1.Caption = "确定"

' 图形按钮
CommandButtonW1.Style = vbButtonGraphical
Set CommandButtonW1.Picture = LoadPicture("ok.bmp")

' 图片和标题共存
CommandButtonW1.PictureAndCaption = True
```

### 分割按钮

```vb
CommandButtonW1.SplitButton = True

Private Sub CommandButtonW1_DropDown()
    ' 显示上下文菜单
    PopupMenu mnuOptions
End Sub
```

### UAC 提升图标

```vb
CommandButtonW1.SetShield True
```

### 获取理想尺寸

```vb
Dim w As Single, h As Single
CommandButtonW1.GetIdealSize w, h
CommandButtonW1.Width = w
CommandButtonW1.Height = h
```