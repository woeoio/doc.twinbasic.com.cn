---
title: 增强框架控件（FrameW）
description: 增强框架控件（FrameW） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '844a1652-d21a-46d4-a068-32ba4c9c0934'
  PropagateID: '844a1652-d21a-46d4-a068-32ba4c9c0934'
  ReservedCode1: '6831cad1-dcd0-4773-9256-d6e67ff333af'
  ReservedCode2: '6831cad1-dcd0-4773-9256-d6e67ff333af'
---

# 增强框架控件（FrameW）

提供支持视觉样式、透明背景和图片显示的容器框架控件，可作为其他控件的容器。

## 枚举

无专有公共枚举。使用以下通用枚举：CCAppearanceConstants、CCLeftRightAlignmentConstants、CCMousePointerConstants、CCRightToLeftModeConstants、OLEDropModeConstants。

## 属性

### Name

```vb
Property Get Name() As String
```

返回控件的名称。

### Tag

```vb
Property Get/Let Tag() As String
```

返回/设置控件的标记值。

### Parent

```vb
Property Get Parent() As Object
```

返回控件的父对象。

### Container

```vb
Property Get/Set Container() As Object
```

返回/设置控件的容器。

### Left

```vb
Property Get/Let Left() As Single
```

返回/设置控件左边缘的位置。

### Top

```vb
Property Get/Let Top() As Single
```

返回/设置控件上边缘的位置。

### Width

```vb
Property Get/Let Width() As Single
```

返回/设置控件的宽度。

### Height

```vb
Property Get/Let Height() As Single
```

返回/设置控件的高度。

### Visible

```vb
Property Get/Let Visible() As Boolean
```

返回/设置控件是否可见。

### ToolTipText

```vb
Property Get/Let ToolTipText() As String
```

返回/设置控件的工具提示文本。

### WhatsThisHelpID

```vb
Property Get/Let WhatsThisHelpID() As Long
```

返回/设置控件的"这是什么"帮助 ID。

### DragIcon

```vb
Property Get/Let/Set DragIcon() As IPictureDisp
```

返回/设置拖动操作时显示的图标。

### DragMode

```vb
Property Get/Let DragMode() As Integer
```

返回/设置拖动模式（手动或自动）。

### hWnd

```vb
Property Get hWnd() As LongPtr
```

返回控件的窗口句柄。

### Font

```vb
Property Get/Let/Set Font() As StdFont
```

返回/设置控件使用的字体。

### VisualStyles

```vb
Property Get/Let VisualStyles() As Boolean
```

返回/设置是否启用视觉样式。

### Appearance

```vb
Property Get/Let Appearance() As CCAppearanceConstants
```

返回/设置控件的视觉外观。参见通用枚举。

### BackColor

```vb
Property Get/Let BackColor() As OLE_COLOR
```

返回/设置控件的背景色。

### ForeColor

```vb
Property Get/Let ForeColor() As OLE_COLOR
```

返回/设置控件的前景色（标题文字颜色）。

### Enabled

```vb
Property Get/Let Enabled() As Boolean
```

返回/设置控件是否可用。

### OLEDropMode

```vb
Property Get/Let OLEDropMode() As OLEDropModeConstants
```

返回/设置 OLE 放置模式。参见通用枚举。

### MousePointer

```vb
Property Get/Let MousePointer() As CCMousePointerConstants
```

返回/设置鼠标指针类型。参见通用枚举。

### MouseIcon

无此属性。框架控件不支持自定义鼠标图标。

### MouseTrack

```vb
Property Get/Let MouseTrack() As Boolean
```

返回/设置是否启用鼠标进入/离开跟踪。

### RightToLeft

```vb
Property Get/Let RightToLeft() As Boolean
```

返回/设置是否启用从右到左布局。

### RightToLeftMode

```vb
Property Get/Let RightToLeftMode() As CCRightToLeftModeConstants
```

返回/设置从右到左模式。参见通用枚举。

### BorderStyle

```vb
Property Get/Let BorderStyle() As Integer
```

返回/设置控件的边框样式。值：0 (vbBSNone) 无边框，1 (vbFixedSingle) 固定单线边框。

### Caption

```vb
Property Get/Let Caption() As String
```

返回/设置框架标题文本。

### UseMnemonic

```vb
Property Get/Let UseMnemonic() As Boolean
```

返回/设置标题中的 & 符号是否作为访问键。

### Alignment

```vb
Property Get/Let Alignment() As VBRUN.AlignmentConstants
```

返回/设置标题的对齐方式。

### Transparent

```vb
Property Get/Let Transparent() As Boolean
```

返回/设置控件是否透明。

### Picture

```vb
Property Get/Let/Set Picture() As IPictureDisp
```

返回/设置框架中显示的图片。

### PictureAlignment

```vb
Property Get/Let PictureAlignment() As CCLeftRightAlignmentConstants
```

返回/设置图片的对齐方式。参见通用枚举。

### ContainedControls

```vb
Property Get ContainedControls() As VBRUN.ContainedControls
```

返回框架包含的控件集合。只读。

## 方法

### OLEDrag

```vb
Public Sub OLEDrag()
```

启动 OLE 拖动操作。

### Drag

```vb
Public Sub Drag(Optional ByRef Action As Variant)
```

开始、结束或取消拖动操作。

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

设置控件在其层级中的 Z 顺序位置。

### Refresh

```vb
Public Sub Refresh()
```

强制完全重绘控件。

## 事件

### Click

```vb
Public Event Click()
```

单击控件时发生。

### DblClick

```vb
Public Event DblClick()
```

双击控件时发生。

### Resize

```vb
Public Event Resize()
```

控件大小改变时发生。

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

按下鼠标按钮时发生。

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

移动鼠标时发生。

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

释放鼠标按钮时发生。

### MouseEnter

```vb
Public Event MouseEnter()
```

鼠标进入控件时发生。

### MouseLeave

```vb
Public Event MouseLeave()
```

鼠标离开控件时发生。

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

OLE 拖放操作完成或取消后，在源控件上发生。

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

数据通过 OLE 拖放操作放置到控件上时发生。

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

OLE 拖放操作期间鼠标移过控件时发生。

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

OLE 拖放操作期间需要更改鼠标光标时，在源控件上发生。

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

放置目标请求数据时，在源控件上发生。

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

OLE 拖放操作启动时发生。

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    With FrameW1
        .Caption = "选项设置"
        .BorderStyle = vbFixedSingle
        .UseMnemonic = True
        .Alignment = vbLeftJustify
        .VisualStyles = True
    End With
End Sub

Private Sub FrameW1_Resize()
    Debug.Print "框架尺寸: " & FrameW1.Width & " x " & FrameW1.Height
End Sub
```