---
title: 滑块控件（Slider）
description: 滑块控件（Slider） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6951514b-df01-4552-81fa-df5493b4f886'
  PropagateID: '6951514b-df01-4552-81fa-df5493b4f886'
  ReservedCode1: '2744a9f1-0a2e-4323-8876-a0f95eb145cd'
  ReservedCode2: '2744a9f1-0a2e-4323-8876-a0f95eb145cd'
---

# 滑块控件（Slider）

提供可自定义的滑块控件，支持水平/垂直方向、刻度样式、选择范围、自绘和OLE拖放。

## 枚举

### SldOrientationConstants

控件方向常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SldOrientationHorizontal | 0 | 水平方向 |
| SldOrientationVertical | 1 | 垂直方向 |

### SldTipSideConstants

提示文本位置常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SldTipSideAboveLeft | 0 | 提示显示在上方/左侧 |
| SldTipSideBelowRight | 1 | 提示显示在下方/右侧 |

### SldTickStyleConstants

刻度样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SldTickStyleBottomRight | 0 | 底部/右侧刻度 |
| SldTickStyleTopLeft | 1 | 顶部/左侧刻度 |
| SldTickStyleBoth | 2 | 两侧刻度 |
| SldTickStyleNone | 3 | 无刻度 |

### SldDrawModeConstants

绘制模式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SldDrawModeNormal | 0 | 正常绘制 |
| SldDrawModeOwnerDraw | 1 | 自绘模式 |

### SldOwnerDrawItemConstants

自绘项常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SldOwnerDrawItemTics | 1 | 刻度线 |
| SldOwnerDrawItemThumb | 2 | 滑块 |
| SldOwnerDrawItemChannel | 3 | 通道 |

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

### RightToLeftLayout

```vb
Public Property Get RightToLeftLayout() As Boolean
Public Property Let RightToLeftLayout(ByVal Value As Boolean)
```

返回/设置从右到左布局。

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

### TickFrequency

```vb
Public Property Get TickFrequency() As Long
Public Property Let TickFrequency(ByVal Value As Long)
```

返回/设置刻度频率。

### Orientation

```vb
Public Property Get Orientation() As SldOrientationConstants
Public Property Let Orientation(ByVal Value As SldOrientationConstants)
```

返回/设置控件方向。

### SmallChange

```vb
Public Property Get SmallChange() As Long
Public Property Let SmallChange(ByVal Value As Long)
```

返回/设置按下箭头键时的变化量。

### LargeChange

```vb
Public Property Get LargeChange() As Long
Public Property Let LargeChange(ByVal Value As Long)
```

返回/设置按下PageUp/PageDown或点击通道时的变化量。

### TickStyle

```vb
Public Property Get TickStyle() As SldTickStyleConstants
Public Property Let TickStyle(ByVal Value As SldTickStyleConstants)
```

返回/设置刻度样式。

### ShowTip

```vb
Public Property Get ShowTip() As Boolean
Public Property Let ShowTip(ByVal Value As Boolean)
```

返回/设置是否显示值提示。

### TipSide

```vb
Public Property Get TipSide() As SldTipSideConstants
Public Property Let TipSide(ByVal Value As SldTipSideConstants)
```

返回/设置提示显示位置。

### SelectRange

```vb
Public Property Get SelectRange() As Boolean
Public Property Let SelectRange(ByVal Value As Boolean)
```

返回/设置是否启用选择范围。

### SelStart

```vb
Public Property Get SelStart() As Long
Public Property Let SelStart(ByVal Value As Long)
```

返回/设置选择范围的起始位置。

### SelLength

```vb
Public Property Get SelLength() As Long
Public Property Let SelLength(ByVal Value As Long)
```

返回/设置选择范围的长度。

### Transparent

```vb
Public Property Get Transparent() As Boolean
Public Property Let Transparent(ByVal Value As Boolean)
```

返回/设置控件背景是否透明。

### HideThumb

```vb
Public Property Get HideThumb() As Boolean
Public Property Let HideThumb(ByVal Value As Boolean)
```

返回/设置是否隐藏滑块。

### Reversed

```vb
Public Property Get Reversed() As Boolean
Public Property Let Reversed(ByVal Value As Boolean)
```

返回/设置是否反转滑块方向。

### DrawMode

```vb
Public Property Get DrawMode() As SldDrawModeConstants
Public Property Let DrawMode(ByVal Value As SldDrawModeConstants)
```

返回/设置绘制模式。

### ThumbLeft

```vb
Public Property Get ThumbLeft() As Single
```

返回滑块左边距。

### ThumbTop

```vb
Public Property Get ThumbTop() As Single
```

返回滑块顶边距。

### ThumbWidth

```vb
Public Property Get ThumbWidth() As Single
```

返回滑块宽度。

### ThumbHeight

```vb
Public Property Get ThumbHeight() As Single
```

返回滑块高度。

### ChannelLeft

```vb
Public Property Get ChannelLeft() As Single
```

返回通道左边距。

### ChannelTop

```vb
Public Property Get ChannelTop() As Single
```

返回通道顶边距。

### ChannelWidth

```vb
Public Property Get ChannelWidth() As Single
```

返回通道宽度。

### ChannelHeight

```vb
Public Property Get ChannelHeight() As Single
```

返回通道高度。

## 方法

### Refresh

```vb
Public Sub Refresh()
```

强制完全重绘对象。

### ClearSel

```vb
Public Sub ClearSel()
```

清除选择范围。

### GetNumTicks

```vb
Public Function GetNumTicks() As Long
```

返回刻度数量。

### GetTickPosition

```vb
Public Function GetTickPosition(ByVal Index As Long) As Single
```

返回指定刻度的位置。

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

### Click

```vb
Public Event Click()
```

用户单击控件时触发。

### Scroll

```vb
Public Event Scroll()
```

用户拖动滑块时触发。

### Change

```vb
Public Event Change()
```

值改变后触发。

### ContextMenu

```vb
Public Event ContextMenu(ByVal X As Single, ByVal Y As Single)
```

右键点击控件时触发。

### ModifyTipText

```vb
Public Event ModifyTipText(ByRef Text As String)
```

提示文本即将显示时触发，可修改提示文本。

### ItemDraw

```vb
Public Event ItemDraw(ByVal Item As SldOwnerDrawItemConstants, ByRef Cancel As Boolean, ByVal ItemState As Long, ByVal hDC As Long, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
```

自绘项时触发。Item为自绘项类型，Cancel可取消默认绘制，hDC为设备上下文。

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
' 设置滑块控件
With Slider1
    .Min = 0
    .Max = 100
    .Value = 50
    .TickFrequency = 10
    .SmallChange = 1
    .LargeChange = 10
    .SelectRange = True
    .SelStart = 20
    .SelLength = 60
End With

' 响应值变化
Private Sub Slider1_Change()
    Debug.Print "当前值: " & Slider1.Value
End Sub

' 自定义提示文本
Private Sub Slider1_ModifyTipText(ByRef Text As String)
    Text = "进度: " & Slider1.Value & "%"
End Sub
```