---
title: 虚拟列表框控件（VListBox）
description: 虚拟列表框控件（VListBox） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7d9fafe2-ec35-4eba-a4cc-46497bd58296'
  PropagateID: '7d9fafe2-ec35-4eba-a4cc-46497bd58296'
  ReservedCode1: '848367ed-e8ce-46af-be6c-1a27776e341c'
  ReservedCode2: '848367ed-e8ce-46af-be6c-1a27776e341c'
---

# 虚拟列表框控件（VListBox）

提供虚拟数据列表框，使用LBS_NODATA样式实现大数据量展示，按需提供数据，支持多选、自绘、插入标记和OLE拖放。

## 枚举

### VlbDrawModeConstants

绘制模式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| VlbDrawModeNormal | 0 | 标准绘制模式 |
| VlbDrawModeOwnerDrawFixed | 1 | 固定高度自绘模式 |

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

返回/设置帮助上下文ID。

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

### OLEDragMode

```vb
Public Property Get OLEDragMode() As VBRUN.OLEDragConstants
Public Property Let OLEDragMode(ByVal Value As VBRUN.OLEDragConstants)
```

返回/设置OLE拖拽模式。

### OLEDragDropScroll

```vb
Public Property Get OLEDragDropScroll() As Boolean
Public Property Let OLEDragDropScroll(ByVal Value As Boolean)
```

返回/设置OLE拖放时是否自动滚动。

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

### Redraw

```vb
Public Property Get Redraw() As Boolean
Public Property Let Redraw(ByVal Value As Boolean)
```

返回/设置是否重绘。禁用后可加速大量操作。

### BorderStyle

```vb
Public Property Get BorderStyle() As CCBorderStyleConstants
Public Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

返回/设置边框样式。参见通用枚举。

### MultiColumn

```vb
Public Property Get MultiColumn() As Boolean
Public Property Let MultiColumn(ByVal Value As Boolean)
```

返回/设置是否多列显示。

### IntegralHeight

```vb
Public Property Get IntegralHeight() As Boolean
Public Property Let IntegralHeight(ByVal Value As Boolean)
```

返回/设置是否调整高度为完整项。仅设计时可设置。

### AllowSelection

```vb
Public Property Get AllowSelection() As Boolean
Public Property Let AllowSelection(ByVal Value As Boolean)
```

返回/设置是否允许选择项。

### MultiSelect

```vb
Public Property Get MultiSelect() As VBRUN.MultiSelectConstants
Public Property Let MultiSelect(ByVal Value As VBRUN.MultiSelectConstants)
```

返回/设置多选模式。使用VBRUN.MultiSelectConstants常量（vbMultiSelectNone=0, vbMultiSelectSimple=1, vbMultiSelectExtended=2）。

### HorizontalExtent

```vb
Public Property Get HorizontalExtent() As Single
Public Property Let HorizontalExtent(ByVal Value As Single)
```

返回/设置水平滚动范围。仅在MultiColumn为False时有效。

### UseTabStops

```vb
Public Property Get UseTabStops() As Boolean
Public Property Let UseTabStops(ByVal Value As Boolean)
```

返回/设置是否识别和展开制表符。

### DisableNoScroll

```vb
Public Property Get DisableNoScroll() As Boolean
Public Property Let DisableNoScroll(ByVal Value As Boolean)
```

返回/设置不需要滚动条时是否禁用而非隐藏。

### DrawMode

```vb
Public Property Get DrawMode() As VlbDrawModeConstants
Public Property Let DrawMode(ByVal Value As VlbDrawModeConstants)
```

返回/设置绘制模式。仅设计时可设置。

### InsertMarkColor

```vb
Public Property Get InsertMarkColor() As OLE_COLOR
Public Property Let InsertMarkColor(ByVal Value As OLE_COLOR)
```

返回/设置插入标记颜色。

### ScrollTrack

```vb
Public Property Get ScrollTrack() As Boolean
Public Property Let ScrollTrack(ByVal Value As Boolean)
```

返回/设置是否启用滚动跟踪（拖动滑块时实时滚动）。

### ListCount

```vb
Public Property Get ListCount() As Long
Public Property Let ListCount(ByVal Value As Long)
```

返回/设置列表项数量。虚拟列表中为数据项总数。

### List

```vb
Public Property Get List(ByVal Index As Long) As String
```

获取指定索引的列表项文本。通过GetVirtualItem事件获取数据。

### ListIndex

```vb
Public Property Get ListIndex() As Long
Public Property Let ListIndex(ByVal Value As Long)
```

返回/设置当前选中项索引。

### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

返回/设置当前选中项文本。设置时触发FindVirtualItem查找匹配项。

### SelCount

```vb
Public Property Get SelCount() As Long
```

返回选中项数量。

### Selected

```vb
Public Property Get Selected(ByVal Index As Long) As Boolean
Public Property Let Selected(ByVal Index As Long, ByVal Value As Boolean)
```

返回/设置指定索引项的选中状态。

### ItemHeight

```vb
Public Property Get ItemHeight() As Single
Public Property Let ItemHeight(ByVal Value As Single)
```

返回/设置项高度。

### TopIndex

```vb
Public Property Get TopIndex() As Long
Public Property Let TopIndex(ByVal Value As Long)
```

返回/设置列表顶部可见项索引。

### AnchorIndex

```vb
Public Property Get AnchorIndex() As Long
Public Property Let AnchorIndex(ByVal Value As Long)
```

返回/设置锚点项索引（多项选择的起始项）。

### InsertMark

```vb
Public Property Get InsertMark(Optional ByRef After As Boolean) As Long
Public Property Let InsertMark(Optional ByRef After As Boolean, ByVal Value As Long)
```

返回/设置插入标记位置。After参数指示插入标记在项目的上方(False)还是下方(True)。设为-1取消插入标记。

### OLEDraggedItem

```vb
Public Property Get OLEDraggedItem() As Long
```

返回当前OLE拖拽项的索引。

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

### SetFocus

```vb
Public Sub SetFocus()
```

将焦点移到指定对象。

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

### SetSelRange

```vb
Public Sub SetSelRange(ByVal StartIndex As Long, ByVal EndIndex As Long)
```

设置选择范围（多选模式下）。

### SetColumnWidth

```vb
Public Sub SetColumnWidth(ByVal Value As Single)
```

设置多列列表的列宽。

### ItemsPerColumn

```vb
Public Function ItemsPerColumn() As Long
```

获取每列项数。

### SelectedIndices

```vb
Public Function SelectedIndices() As Collection
```

返回所有选中项索引的集合。

### HitTest

```vb
Public Function HitTest(ByVal X As Single, ByVal Y As Single) As Long
```

命中测试，返回指定坐标处的项索引。不在任何项上返回-1。

### HitTestInsertMark

```vb
Public Function HitTestInsertMark(ByVal X As Single, ByVal Y As Single, Optional ByRef After As Boolean) As Long
```

插入标记命中测试，同时获取插入标记应出现在项目上方还是下方。

### FindItem

```vb
Public Function FindItem(ByVal Text As String, Optional ByVal Index As Long = -1, Optional ByVal Partial As Boolean) As Long
```

查找列表项。返回匹配项索引，未找到返回-1。

### GetIdealHorizontalExtent

```vb
Public Function GetIdealHorizontalExtent() As Single
```

获取理想的水平滚动范围。

### SelectItem

```vb
Public Function SelectItem(ByVal Text As String, Optional ByVal Index As Long = -1) As Long
```

搜索并选择匹配的列表项。返回选中项索引。

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

### Scroll

```vb
Public Event Scroll()
```

列表滚动时触发。

### ContextMenu

```vb
Public Event ContextMenu(ByVal X As Single, ByVal Y As Single)
```

右键上下文菜单事件。X和Y为-1时表示键盘触发（Shift+F10）。

### GetVirtualItem

```vb
Public Event GetVirtualItem(ByVal Item As Long, ByRef Text As String)
```

请求虚拟项数据时触发。需设置Text参数返回项文本。

### FindVirtualItem

```vb
Public Event FindVirtualItem(ByVal StartIndex As Long, ByVal SearchText As String, ByVal Partial As Boolean, ByRef FoundIndex As Long)
```

搜索虚拟项时触发。需设置FoundIndex返回匹配项索引，未找到设为-1。

### IncrementalSearch

```vb
Public Event IncrementalSearch(ByVal SearchString As String, ByVal StartIndex As Long, ByRef FoundIndex As Long)
```

增量搜索时触发。需设置FoundIndex返回匹配项索引。

### ItemDraw

```vb
Public Event ItemDraw(ByVal Item As Long, ByVal ItemAction As Long, ByVal ItemState As Long, ByVal hDC As Long, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
```

自绘项时触发（DrawMode为OwnerDrawFixed时）。

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

按键预览事件。设置IsInputKey为True可将按键标记为输入键。

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

按键释放预览事件。

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
' 设置虚拟列表框
With VListBox1
    .ListCount = 10000
    .MultiSelect = vbMultiSelectExtended
    .InsertMarkColor = vbBlue
    .ScrollTrack = True
End With

' 提供虚拟项数据
Private Sub VListBox1_GetVirtualItem(ByVal Item As Long, ByRef Text As String)
    Text = "第 " & CStr(Item + 1) & " 项"
End Sub

' 查找虚拟项
Private Sub VListBox1_FindVirtualItem(ByVal StartIndex As Long, _
    ByVal SearchText As String, ByVal Partial As Boolean, ByRef FoundIndex As Long)
    FoundIndex = -1
End Sub

' 自绘项示例
Private Sub VListBox1_ItemDraw(ByVal Item As Long, ByVal ItemAction As Long, _
    ByVal ItemState As Long, ByVal hDC As Long, ByVal Left As Long, _
    ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
    ' 自定义绘制代码
End Sub
```