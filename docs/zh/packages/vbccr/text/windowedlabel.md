---
title: 窗口化标签控件（WindowedLabel）
description: 窗口化标签控件（WindowedLabel） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6ccedb70-2a53-432d-9fcb-87e87a9b9399'
  PropagateID: '6ccedb70-2a53-432d-9fcb-87e87a9b9399'
  ReservedCode1: 'be98ae19-dbdd-4911-a58c-31f8ddf2a025'
  ReservedCode2: 'be98ae19-dbdd-4911-a58c-31f8ddf2a025'
---

# 窗口化标签控件（WindowedLabel）

提供具有窗口句柄的标签控件，支持省略号显示、垂直对齐、自动换行和透明背景等增强功能。

## 枚举

### WlbEllipsisFormatConstants

省略号格式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| WlbEllipsisNone | 0 | 不显示省略号 |
| WlbEllipsisEnd | 1 | 在文本末尾显示省略号 |
| WlbEllipsisPath | 2 | 在路径中间显示省略号（保留文件名） |
| WlbEllipsisWord | 3 | 在单词边界显示省略号 |

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

### Font

```vb
Public Property Get Font() As StdFont
Public Property Let Font(ByVal NewFont As StdFont)
Public Property Set Font(ByVal NewFont As StdFont)
```

返回/设置字体。

### Appearance

```vb
Public Property Get Appearance() As CCAppearanceConstants
Public Property Let Appearance(ByVal Value As CCAppearanceConstants)
```

返回/设置外观样式。参见通用枚举。

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

### Alignment

```vb
Public Property Get Alignment() As VBRUN.AlignmentConstants
Public Property Let Alignment(ByVal Value As VBRUN.AlignmentConstants)
```

返回/设置文本水平对齐方式。

### BorderStyle

```vb
Public Property Get BorderStyle() As CCBorderStyleConstants
Public Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

返回/设置边框样式。参见通用枚举。

### Caption

```vb
Public Property Get Caption() As String
Public Property Let Caption(ByVal Value As String)
```

返回/设置标签文本。

### Default

```vb
Public Property Get Default() As String
Public Property Let Default(ByVal Value As String)
```

返回/设置默认文本。

### UseMnemonic

```vb
Public Property Get UseMnemonic() As Boolean
Public Property Let UseMnemonic(ByVal Value As Boolean)
```

返回/设置是否处理助记符前缀（&字符）。

### AutoSize

```vb
Public Property Get AutoSize() As Boolean
Public Property Let AutoSize(ByVal Value As Boolean)
```

返回/设置是否自动调整大小以适应内容。

### WordWrap

```vb
Public Property Get WordWrap() As Boolean
Public Property Let WordWrap(ByVal Value As Boolean)
```

返回/设置是否自动换行。

### SingleLine

```vb
Public Property Get SingleLine() As Boolean
Public Property Let SingleLine(ByVal Value As Boolean)
```

返回/设置是否强制单行显示。

### EllipsisFormat

```vb
Public Property Get EllipsisFormat() As WlbEllipsisFormatConstants
Public Property Let EllipsisFormat(ByVal Value As WlbEllipsisFormatConstants)
```

返回/设置省略号格式。

### MimicTextBox

```vb
Public Property Get MimicTextBox() As Boolean
Public Property Let MimicTextBox(ByVal Value As Boolean)
```

返回/设置是否模拟文本框外观（3D边框+白色背景）。

### VerticalAlignment

```vb
Public Property Get VerticalAlignment() As CCVerticalAlignmentConstants
Public Property Let VerticalAlignment(ByVal Value As CCVerticalAlignmentConstants)
```

返回/设置垂直对齐方式。参见通用枚举。

### Transparent

```vb
Public Property Get Transparent() As Boolean
Public Property Let Transparent(ByVal Value As Boolean)
```

返回/设置是否使用透明背景。

### DisplayedCaption

```vb
Public Property Get DisplayedCaption() As String
```

返回实际显示的文本（包含省略号处理后的结果）。

## 方法

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

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

设置Z顺序。

### Refresh

```vb
Public Sub Refresh()
```

强制完全重绘对象。

## 事件

### Click

```vb
Public Event Click()
```

用户单击控件时触发。

### DblClick

```vb
Public Event DblClick()
```

用户双击控件时触发。

### Change

```vb
Public Event Change()
```

Caption属性改变时触发。

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
' 设置窗口化标签
With WindowedLabel1
    .Caption = "C:\Users\Documents\Very\Long\Path\FileName.txt"
    .AutoSize = False
    .EllipsisFormat = WlbEllipsisPath
    .VerticalAlignment = CCVerticalAlignmentCenter
    .WordWrap = False
    .SingleLine = True
    .UseMnemonic = False
End With

' 监听文本变化
Private Sub WindowedLabel1_Change()
    Debug.Print "显示文本: " & WindowedLabel1.DisplayedCaption
End Sub

' 模拟文本框外观的标签
With WindowedLabel1
    .MimicTextBox = True
    .BorderStyle = CCBorderStyleSunken
End With
```