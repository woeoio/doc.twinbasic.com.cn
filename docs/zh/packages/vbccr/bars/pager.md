---
title: 分页控件（Pager）
description: 分页控件（Pager） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'bd3a5b6b-a426-434b-b4bf-d19750f5a810'
  PropagateID: 'bd3a5b6b-a426-434b-b4bf-d19750f5a810'
  ReservedCode1: 'cc1acb93-42ba-4329-8ebb-6d5e8eb81816'
  ReservedCode2: 'cc1acb93-42ba-4329-8ebb-6d5e8eb81816'
---

# 分页控件（Pager）

封装 SysPager 系统分页控件，用于创建可滚动的控件区域，通过左右或上下按钮滚动关联的伙伴控件。

## 枚举

### PgrOrientationConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| PgrOrientationHorizontal | 0 | 水平方向 |
| PgrOrientationVertical | 1 | 垂直方向 |

### PgrDirectionConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| PgrDirectionLeft | 0 | 向左滚动 |
| PgrDirectionRight | 1 | 向右滚动 |
| PgrDirectionUp | 2 | 向上滚动 |
| PgrDirectionDown | 3 | 向下滚动 |

### PgrButtonConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| PgrButtonLeftTop | 0 | 左端/上端按钮 |
| PgrButtonRightBottom | 1 | 右端/下端按钮 |

### PgrButtonStateConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| PgrButtonStateNormal | 0 | 正常 |
| PgrButtonStateInvisible | 1 | 隐藏 |
| PgrButtonStateGrayed | 2 | 灰色（禁用） |
| PgrButtonStateInactive | 4 | 非活动 |
| PgrButtonStateHot | 8 | 热态 |

### CCMousePointerConstants

参见通用枚举。

## 属性

### BuddyControl

```vb
Property Get BuddyControl() As Variant
Property Let BuddyControl(ByVal Value As Variant)
```

关联的伙伴控件。可传递控件对象、控件名称或 hWnd。

### Orientation

```vb
Property Get Orientation() As PgrOrientationConstants
Property Let Orientation(ByVal Value As PgrOrientationConstants)
```

分页控件方向。

### BorderWidth

```vb
Property Get BorderWidth() As Long
Property Let BorderWidth(ByVal Value As Long)
```

边框宽度（像素）。

### AutoScroll

```vb
Property Get AutoScroll() As Boolean
Property Let AutoScroll(ByVal Value As Boolean)
```

是否自动滚动。

### ButtonSize

```vb
Property Get ButtonSize() As Long
Property Let ButtonSize(ByVal Value As Long)
```

按钮大小（像素）。

### OLEDragDropScroll

```vb
Property Get OLEDragDropScroll() As Boolean
Property Let OLEDragDropScroll(ByVal Value As Boolean)
```

OLE 拖放时是否自动滚动。

### Value

```vb
Property Get Value() As Single
Property Let Value(ByVal Value As Single)
```

当前滚动位置。

### VisualStyles

```vb
Property Get VisualStyles() As Boolean
Property Let VisualStyles(ByVal Value As Boolean)
```

是否启用视觉样式。

### hWnd

```vb
Property Get hWnd() As LongPtr
```

分页控件的窗口句柄。

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

用户控件的窗口句柄。

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

### MousePointer

```vb
Property Get MousePointer() As CCMousePointerConstants
Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

鼠标指针样式。参见通用枚举。

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

是否启用鼠标进入/离开跟踪。

### RightToLeft

```vb
Property Get RightToLeft() As Boolean
Property Let RightToLeft(ByVal Value As Boolean)
```

从右到左显示方向。

### RightToLeftMode

```vb
Property Get RightToLeftMode() As CCRightToLeftModeConstants
Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

从右到左模式。参见通用枚举。

### Name

```vb
Property Get Name() As String
```

控件名称。只读。

### Tag

```vb
Property Get Tag() As String
Property Let Tag(ByVal Value As String)
```

自定义数据。

### Parent

```vb
Property Get Parent() As Object
```

父对象。只读。

### Container

```vb
Property Get Container() As Object
Property Set Container(ByVal Value As Object)
```

容器对象。

### Left

```vb
Property Get Left() As Single
Property Let Left(ByVal Value As Single)
```

左边距。

### Top

```vb
Property Get Top() As Single
Property Let Top(ByVal Value As Single)
```

顶边距。

### Width

```vb
Property Get Width() As Single
Property Let Width(ByVal Value As Single)
```

宽度。

### Height

```vb
Property Get Height() As Single
Property Let Height(ByVal Value As Single)
```

高度。

### Visible

```vb
Property Get Visible() As Boolean
Property Let Visible(ByVal Value As Boolean)
```

是否可见。

### ToolTipText

```vb
Property Get ToolTipText() As String
Property Let ToolTipText(ByVal Value As String)
```

工具提示文本。

### HelpContextID

```vb
Property Get HelpContextID() As Long
Property Let HelpContextID(ByVal Value As Long)
```

帮助上下文 ID。

### WhatsThisHelpID

```vb
Property Get WhatsThisHelpID() As Long
Property Let WhatsThisHelpID(ByVal Value As Long)
```

"这是什么"帮助 ID。

### DragIcon

```vb
Property Get DragIcon() As IPictureDisp
Property Let DragIcon(ByVal Value As IPictureDisp)
Property Set DragIcon(ByVal Value As IPictureDisp)
```

拖拽图标。

### DragMode

```vb
Property Get DragMode() As Integer
Property Let DragMode(ByVal Value As Integer)
```

拖拽模式。

## 方法

### ReCalcSize

```vb
Public Sub ReCalcSize()
```

重新计算分页控件和伙伴控件的大小。

### GetButtonState

```vb
Public Function GetButtonState(ByVal Button As PgrButtonConstants) As PgrButtonStateConstants
```

获取指定按钮的状态。

### Drag

```vb
Public Sub Drag([ByRef Action As Variant])
```

开始、结束或取消拖放操作。

### SetFocus

```vb
Public Sub SetFocus()
```

将焦点移至控件。

### ZOrder

```vb
Public Sub ZOrder([ByRef Position As Variant])
```

设置控件的 Z 顺序。

### OLEDrag

```vb
Public Sub OLEDrag()
```

启动 OLE 拖放操作。

### Refresh

```vb
Public Sub Refresh()
```

强制重绘控件。

## 事件

### Scroll

```vb
Public Event Scroll()
```

滚动位置发生改变时触发。

### CalcSize

```vb
Public Event CalcSize()
```

需要重新计算伙伴控件大小前触发。

### HotChanged

```vb
Public Event HotChanged()
```

按钮热态改变时触发。

### Click

```vb
Public Event Click()
```

单击控件时触发。

### DblClick

```vb
Public Event DblClick()
```

双击控件时触发。

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

按下鼠标按钮时触发。

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

释放鼠标按钮时触发。

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

移动鼠标时触发。

### MouseEnter

```vb
Public Event MouseEnter()
```

鼠标进入控件时触发。

### MouseLeave

```vb
Public Event MouseLeave()
```

鼠标离开控件时触发。

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

OLE 拖放完成时触发。

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

OLE 拖放经过控件时触发。

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

OLE 拖放需要更改光标时触发。

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

OLE 拖放开始时触发。

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

OLE 拖放完成时触发。

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

OLE 放置目标请求数据时触发。

## 代码示例

```vb
' 设置水平分页控件与图片框关联
Pager1.Orientation = PgrOrientationHorizontal
Set Pager1.BuddyControl = Picture1
Pager1.ButtonSize = 16
Call Pager1.ReCalcSize
```