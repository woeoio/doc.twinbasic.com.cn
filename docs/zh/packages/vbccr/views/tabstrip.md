---
title: 选项卡控件（TabStrip）
description: 选项卡控件（TabStrip） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a6ad5cd0-f362-4a9b-b796-af1349b26b06'
  PropagateID: 'a6ad5cd0-f362-4a9b-b796-af1349b26b06'
  ReservedCode1: '423fe1e1-a67c-4555-a52a-04efba93bd70'
  ReservedCode2: '423fe1e1-a67c-4555-a52a-04efba93bd70'
---

# 选项卡控件（TabStrip）

提供可自定义的选项卡容器，支持多种放置位置、多行标签、分隔符、自绘和OLE拖放。

## 枚举

### TbsPlacementConstants

选项卡放置位置常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TbsPlacementTop | 0 | 顶部放置 |
| TbsPlacementBottom | 1 | 底部放置 |
| TbsPlacementLeft | 2 | 左侧放置 |
| TbsPlacementRight | 3 | 右侧放置 |

### TbsStyleConstants

选项卡控件样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TbsStyleTab | 0 | 标准选项卡样式 |
| TbsStyleButton | 1 | 按钮样式 |
| TbsStyleFlatButton | 2 | 扁平按钮样式 |

### TbsTabStyleConstants

选项卡标签样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TbsTabStyleTab | 0 | 标准标签样式 |
| TbsTabStyleButton | 1 | 按钮标签样式 |

### TbsTabWidthStyleConstants

选项卡宽度样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TbsTabWidthStyleJustified | 0 | 根据标签宽度自动调整 |
| TbsTabWidthStyleFixed | 1 | 固定宽度 |
| TbsTabWidthStyleVariable | 2 | 可变宽度 |

### TbsTabAlignmentConstants

选项卡标签对齐方式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TbsTabAlignmentNear | 0 | 靠近起始边对齐 |
| TbsTabAlignmentCenter | 1 | 居中对齐 |
| TbsTabAlignmentFar | 2 | 靠近结束边对齐 |

### TbsHitResultConstants

命中测试结果常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TbsHitNowhere | 0 | 未命中任何选项卡 |
| TbsHitTab | 1 | 命中选项卡 |
| TbsHitDivider | 2 | 命中分隔符 |
| TbsHitDisplay | 3 | 命中显示区域 |

### TbsDrawModeConstants

自绘模式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TbsDrawModeNormal | 0 | 正常绘制 |
| TbsDrawModeOwnerDraw | 1 | 自绘模式 |

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

返回/设置拖动模式（手动或自动）。

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

### Font

```vb
Public Property Get Font() As StdFont
Public Property Let Font(ByVal NewFont As StdFont)
Public Property Set Font(ByVal NewFont As StdFont)
```

返回/设置字体。

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

### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

返回/设置背景色。

### ImageList

```vb
Public Property Get ImageList() As Variant
Public Property Let ImageList(ByVal Value As Variant)
Public Property Set ImageList(ByVal Value As Variant)
```

返回/设置关联的ImageList控件。可以是对象引用、字符串键名或LongPtr句柄。

### Placement

```vb
Public Property Get Placement() As TbsPlacementConstants
Public Property Let Placement(ByVal Value As TbsPlacementConstants)
```

返回/设置选项卡的放置位置。

### MultiRow

```vb
Public Property Get MultiRow() As Boolean
Public Property Let MultiRow(ByVal Value As Boolean)
```

返回/设置选项卡是否允许多行显示。

### MultiSelect

```vb
Public Property Get MultiSelect() As Boolean
Public Property Let MultiSelect(ByVal Value As Boolean)
```

返回/设置是否允许选择多个选项卡。

### HotTracking

```vb
Public Property Get HotTracking() As Boolean
Public Property Let HotTracking(ByVal Value As Boolean)
```

返回/设置是否启用热点跟踪。

### Style

```vb
Public Property Get Style() As TbsStyleConstants
Public Property Let Style(ByVal Value As TbsStyleConstants)
```

返回/设置选项卡控件样式。

### TabStyle

```vb
Public Property Get TabStyle() As TbsTabStyleConstants
Public Property Let TabStyle(ByVal Value As TbsTabStyleConstants)
```

返回/设置选项卡标签样式。

### TabWidthStyle

```vb
Public Property Get TabWidthStyle() As TbsTabWidthStyleConstants
Public Property Let TabWidthStyle(ByVal Value As TbsTabWidthStyleConstants)
```

返回/设置选项卡宽度样式。

### TabFixedWidth

```vb
Public Property Get TabFixedWidth() As Single
Public Property Let TabFixedWidth(ByVal Value As Single)
```

返回/设置固定宽度样式下选项卡的宽度。

### TabFixedHeight

```vb
Public Property Get TabFixedHeight() As Single
Public Property Let TabFixedHeight(ByVal Value As Single)
```

返回/设置固定高度样式下选项卡的高度。

### TabMinWidth

```vb
Public Property Get TabMinWidth() As Single
Public Property Let TabMinWidth(ByVal Value As Single)
```

返回/设置选项卡的最小宽度。

### TabAlignment

```vb
Public Property Get TabAlignment() As TbsTabAlignmentConstants
Public Property Let TabAlignment(ByVal Value As TbsTabAlignmentConstants)
```

返回/设置选项卡标签的对齐方式。

### Separators

```vb
Public Property Get Separators() As Boolean
Public Property Let Separators(ByVal Value As Boolean)
```

返回/设置是否在选项卡之间显示分隔符。

### ShowTips

```vb
Public Property Get ShowTips() As Boolean
Public Property Let ShowTips(ByVal Value As Boolean)
```

返回/设置是否显示工具提示。

### DrawMode

```vb
Public Property Get DrawMode() As TbsDrawModeConstants
Public Property Let DrawMode(ByVal Value As TbsDrawModeConstants)
```

返回/设置绘制模式。

### TabScrollWheel

```vb
Public Property Get TabScrollWheel() As Boolean
Public Property Let TabScrollWheel(ByVal Value As Boolean)
```

返回/设置是否允许使用鼠标滚轮切换选项卡。

### DoubleBuffer

```vb
Public Property Get DoubleBuffer() As Boolean
Public Property Let DoubleBuffer(ByVal Value As Boolean)
```

返回/设置是否启用双缓冲绘制。

### Transparent

```vb
Public Property Get Transparent() As Boolean
Public Property Let Transparent(ByVal Value As Boolean)
```

返回/设置选项卡控件是否透明。

### Tabs

```vb
Public Property Get Tabs() As TbsTabs
```

返回选项卡集合。

### ClientLeft

```vb
Public Property Get ClientLeft() As Single
```

返回客户区域的左边距。

### ClientTop

```vb
Public Property Get ClientTop() As Single
```

返回客户区域的顶边距。

### ClientWidth

```vb
Public Property Get ClientWidth() As Single
```

返回客户区域的宽度。

### ClientHeight

```vb
Public Property Get ClientHeight() As Single
```

返回客户区域的高度。

### SelectedItem

```vb
Public Property Get SelectedItem() As TbsTab
Public Property Let SelectedItem(ByVal Value As TbsTab)
```

返回/设置当前选中的选项卡。

### RowCount

```vb
Public Property Get RowCount() As Long
```

返回选项卡行数。

## 方法

### Refresh

```vb
Public Sub Refresh()
```

强制完全重绘对象。

### DeselectAll

```vb
Public Sub DeselectAll()
```

取消所有选项卡的选中状态。

### HitTest

```vb
Public Function HitTest(ByVal X As Single, ByVal Y As Single) As TbsHitResultConstants
```

对指定坐标进行命中测试，返回命中结果。

### DrawBackground

```vb
Public Sub DrawBackground(ByVal hdc As LongPtr, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
```

在指定设备上下文中绘制选项卡控件背景。

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

### TabBeforeClick

```vb
Public Event TabBeforeClick(ByVal Tab As TbsTab, ByRef Cancel As Boolean)
```

选项卡即将被点击时触发。Cancel为True时取消切换。

### TabClick

```vb
Public Event TabClick(ByVal Tab As TbsTab)
```

选项卡被点击时触发。

### ItemDraw

```vb
Public Event ItemDraw(ByVal Index As Long, ByVal ItemData As Long, ByVal hdc As LongPtr, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
```

自绘模式下绘制选项卡时触发。

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(KeyCode As Integer, Shift As Integer)
```

在KeyDown事件之前触发，用于预处理键盘输入。

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(KeyCode As Integer, Shift As Integer)
```

在KeyUp事件之前触发。

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

按下键盘按键时触发。

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

释放键盘按键时触发。

### KeyPress

```vb
Public Event KeyPress(KeyAscii As Integer)
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

## 子对象

### TbsTab 类

选项卡标签对象。

#### TbsTab 属性

#### Index

```vb
Public Property Get Index() As Long
```

选项卡在集合中的索引。

#### Key

```vb
Public Property Get Key() As String
Public Property Let Key(ByVal Value As String)
```

选项卡的唯一标识键。

#### Tag

```vb
Public Property Get Tag() As Variant
Public Property Let Tag(ByVal Value As Variant)
```

额外数据。

#### Caption

```vb
Public Property Get Caption() As String
Public Property Let Caption(ByVal Value As String)
```

选项卡标题。

#### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

工具提示文本。

#### Image

```vb
Public Property Get Image() As Variant
Public Property Let Image(ByVal Value As Variant)
```

选项卡图像。

#### ImageIndex

```vb
Public Property Get ImageIndex() As Long
```

图像索引。

#### Selected

```vb
Public Property Get Selected() As Boolean
Public Property Let Selected(ByVal Value As Boolean)
```

是否选中。

#### Pressed

```vb
Public Property Get Pressed() As Boolean
Public Property Let Pressed(ByVal Value As Boolean)
```

是否按下。

#### HighLighted

```vb
Public Property Get HighLighted() As Boolean
Public Property Let HighLighted(ByVal Value As Boolean)
```

是否高亮显示。

#### Left

```vb
Public Property Get Left() As Single
```

选项卡左边距。

#### Top

```vb
Public Property Get Top() As Single
```

选项卡顶边距。

#### Width

```vb
Public Property Get Width() As Single
```

选项卡宽度。

#### Height

```vb
Public Property Get Height() As Single
```

选项卡高度。

### TbsTabs 类

选项卡集合。

#### TbsTabs 成员

#### NewEnum

```vb
Public Function NewEnum() As IUnknown
```

枚举器（隐藏）。

#### Add

```vb
Public Function Add(Optional ByVal Index As Variant, Optional ByVal Key As Variant, Optional ByVal Caption As Variant, Optional ByVal Image As Variant) As TbsTab
```

添加选项卡。

#### Item

```vb
Public Function Item(ByVal Index As Variant) As TbsTab
```

获取选项卡（默认成员）。

#### Exists

```vb
Public Function Exists(ByVal Index As Variant) As Boolean
```

检查选项卡是否存在。

#### Count

```vb
Public Property Get Count() As Long
```

选项卡数量。

#### Clear

```vb
Public Sub Clear()
```

清除所有选项卡。

#### Remove

```vb
Public Sub Remove(ByVal Index As Variant)
```

移除选项卡。

## 代码示例

### 基本用法

```vb
' 创建选项卡
With TabStrip1.Tabs
    .Add , "Tab1", "常规"
    .Add , "Tab2", "高级"
    .Add , "Tab3", "关于"
End With

' 设置选项卡样式
TabStrip1.Placement = TbsPlacementTop
TabStrip1.Style = TbsStyleTab
TabStrip1.TabWidthStyle = TbsTabWidthStyleFixed
TabStrip1.TabFixedWidth = 80
TabStrip1.MultiRow = False
TabStrip1.HotTracking = True

' 处理选项卡切换
Private Sub TabStrip1_TabBeforeClick(ByVal Tab As TbsTab, ByRef Cancel As Boolean)
    If Tab.Key = "Tab3" Then
        Cancel = True
        MsgBox "此选项卡已禁用"
    End If
End Sub

Private Sub TabStrip1_TabClick(ByVal Tab As TbsTab)
    MsgBox "选中的选项卡: " & Tab.Caption
End Sub

' 使用客户区域定位子控件
Private Sub TabStrip1_TabClick(ByVal Tab As TbsTab)
    Dim l As Single, t As Single
    l = TabStrip1.ClientLeft
    t = TabStrip1.ClientTop
    Frame1.Move l, t, TabStrip1.ClientWidth, TabStrip1.ClientHeight
End Sub
```