---
title: 上下调整控件（UpDown）
description: 上下调整控件（UpDown） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3adcef3c-7aae-4864-865b-e826f5f39b10'
  PropagateID: '3adcef3c-7aae-4864-865b-e826f5f39b10'
  ReservedCode1: '83d1bfd7-9b4a-4690-87a1-612b519a06f2'
  ReservedCode2: '83d1bfd7-9b4a-4690-87a1-612b519a06f2'
---

# 上下调整控件（UpDown）

提供数值递增/递减的旋转按钮，支持伙伴控件同步、循环和十六进制显示。

## 枚举

### UdnOrientationConstants

控件方向常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| UdnOrientationVertical | 0 | 垂直方向 |
| UdnOrientationHorizontal | 1 | 水平方向 |

### UdnNumberStyleConstants

数字显示样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| UdnNumberStyleDecimal | 0 | 十进制 |
| UdnNumberStyleHexadecimal | 1 | 十六进制 |

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

### BuddyControl

```vb
Public Property Get BuddyControl() As Variant
Public Property Let BuddyControl(ByVal Value As Variant)
Public Property Set BuddyControl(ByVal Value As Variant)
```

返回/设置关联的伙伴控件。

### BuddyProperty

```vb
Public Property Get BuddyProperty() As String
Public Property Let BuddyProperty(ByVal Value As String)
```

返回/设置伙伴控件的属性名，用于同步数据。

### SyncBuddy

```vb
Public Property Get SyncBuddy() As Boolean
Public Property Let SyncBuddy(ByVal Value As Boolean)
```

返回/设置是否与伙伴控件自动同步值。

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
Public Property Let Value(ByVal Value As Long)
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

### Orientation

```vb
Public Property Get Orientation() As UdnOrientationConstants
Public Property Let Orientation(ByVal Value As UdnOrientationConstants)
```

返回/设置控件方向。

### ThousandsSeparator

```vb
Public Property Get ThousandsSeparator() As Boolean
Public Property Let ThousandsSeparator(ByVal Value As Boolean)
```

返回/设置是否显示千位分隔符。

### NumberStyle

```vb
Public Property Get NumberStyle() As UdnNumberStyleConstants
Public Property Let NumberStyle(ByVal Value As UdnNumberStyleConstants)
```

返回/设置数字显示样式。

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

### SyncFromBuddy

```vb
Public Sub SyncFromBuddy()
```

从伙伴控件同步值到UpDown控件。

## 事件

### DownClick

```vb
Public Event DownClick()
```

点击向下/向左按钮时触发。

### UpClick

```vb
Public Event UpClick()
```

点击向上/向右按钮时触发。

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
' 设置UpDown控件
With UpDown1
    .Min = 0
    .Max = 100
    .Value = 50
    .Increment = 5
    .Wrap = True
    Set .BuddyControl = Text1
    .BuddyProperty = "Text"
    .SyncBuddy = True
End With

' 限制值变化范围
Private Sub UpDown1_BeforeChange(ByVal Value As Long, ByRef Delta As Long)
    If Value + Delta > 100 Then Delta = 0
End Sub

' 响应值变化
Private Sub UpDown1_Change()
    Debug.Print "当前值: " & UpDown1.Value
End Sub
```