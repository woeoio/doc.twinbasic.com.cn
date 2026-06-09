---
title: 列表框控件（ListBoxW）
description: 列表框控件（ListBoxW） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '182792ed-ba6e-4325-905f-ae578031b987'
  PropagateID: '182792ed-ba6e-4325-905f-ae578031b987'
  ReservedCode1: 'e124333c-704a-49aa-be69-b5d14971ede4'
  ReservedCode2: 'e124333c-704a-49aa-be69-b5d14971ede4'
---

# 列表框控件（ListBoxW）

封装 Win32 原生列表框控件，支持复选框/单选样式、所有者绘制、插入标记和多列显示。

## 枚举

### LstStyleConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LstStyleStandard | 0 | 标准列表框 |
| LstStyleCheckbox | 1 | 复选框样式 |
| LstStyleOption | 2 | 单选按钮样式 |

### LstDrawModeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LstDrawModeNormal | 0 | 系统绘制 |
| LstDrawModeOwnerDrawFixed | 1 | 所有者绘制固定高度 |
| LstDrawModeOwnerDrawVariable | 2 | 所有者绘制可变高度 |

### CCBorderStyleConstants

参见通用枚举。

### CCMousePointerConstants

参见通用枚举。

### CCRightToLeftModeConstants

参见通用枚举。

## 属性

### Text

```vb
Property Get Text() As String
Property Let Text(ByVal Value As String)
```

当前选定项的文本。

### List

```vb
Property Get List(ByVal Index As Long) As String
Property Let List(ByVal Index As Long, ByVal Value As String)
```

按索引获取或设置列表项文本。

### ItemData

```vb
Property Get ItemData(ByVal Index As Long) As LongPtr
Property Let ItemData(ByVal Index As Long, ByVal Value As LongPtr)
```

按索引获取或设置列表项的关联数据。

### ItemChecked

```vb
Property Get ItemChecked(ByVal Index As Long) As Boolean
Property Let ItemChecked(ByVal Index As Long, ByVal Value As Boolean)
```

按索引获取或设置项的选中状态（Style 为 Checkbox 或 Option 时有效）。

### ListCount

```vb
Property Get ListCount() As Long
```

列表项总数。只读。

### ListIndex

```vb
Property Get ListIndex() As Long
Property Let ListIndex(ByVal Value As Long)
```

当前选定项的索引。

### NewIndex

```vb
Property Get NewIndex() As Long
```

最近添加项的索引。只读。

### TopIndex

```vb
Property Get TopIndex() As Long
Property Let TopIndex(ByVal Value As Long)
```

列表中第一个可见项的索引。

### AnchorIndex

```vb
Property Get AnchorIndex() As Long
Property Let AnchorIndex(ByVal Value As Long)
```

选择锚点的索引。

### SelCount

```vb
Property Get SelCount() As Long
```

选定项数量。只读。

### Selected

```vb
Property Get Selected(ByVal Index As Long) As Boolean
Property Let Selected(ByVal Index As Long, ByVal Value As Boolean)
```

按索引获取或设置项的选定状态。

### ItemHeight

```vb
Property Get ItemHeight(Optional ByVal Index As Long) As Single
Property Let ItemHeight(Optional ByVal Index As Long, ByVal Value As Single)
```

项的高度。可变高度所有者绘制模式下可按索引设置。

### InsertMark

```vb
Property Get InsertMark(Optional ByRef After As Boolean) As Long
Property Let InsertMark(Optional ByRef After As Boolean, ByVal Value As Long)
```

插入标记的索引。

### OptionIndex

```vb
Property Get OptionIndex() As Long
Property Let OptionIndex(ByVal Value As Long)
```

单选按钮样式中选中项的索引。

### OLEDraggedItem

```vb
Property Get OLEDraggedItem() As Long
```

OLE 拖放操作中拖动项的索引。只读。

### Style

```vb
Property Get Style() As LstStyleConstants
Property Let Style(ByVal Value As LstStyleConstants)
```

列表框样式。设计时只读。

### DrawMode

```vb
Property Get DrawMode() As LstDrawModeConstants
Property Let DrawMode(ByVal Value As LstDrawModeConstants)
```

绘制模式。设计时只读。

### MultiSelect

```vb
Property Get MultiSelect() As VBRUN.MultiSelectConstants
Property Let MultiSelect(ByVal Value As VBRUN.MultiSelectConstants)
```

多选模式。

### Sorted

```vb
Property Get Sorted() As Boolean
Property Let Sorted(ByVal Value As Boolean)
```

是否自动排序。

### MultiColumn

```vb
Property Get MultiColumn() As Boolean
Property Let MultiColumn(ByVal Value As Boolean)
```

是否启用多列显示。

### IntegralHeight

```vb
Property Get IntegralHeight() As Boolean
Property Let IntegralHeight(ByVal Value As Boolean)
```

是否只显示完整项。设计时可设置。

### AllowSelection

```vb
Property Get AllowSelection() As Boolean
Property Let AllowSelection(ByVal Value As Boolean)
```

是否允许选择项。

### UseTabStops

```vb
Property Get UseTabStops() As Boolean
Property Let UseTabStops(ByVal Value As Boolean)
```

是否识别和展开制表符。

### DisableNoScroll

```vb
Property Get DisableNoScroll() As Boolean
Property Let DisableNoScroll(ByVal Value As Boolean)
```

无需滚动时是否禁用（而非隐藏）滚动条。

### HorizontalExtent

```vb
Property Get HorizontalExtent() As Single
Property Let HorizontalExtent(ByVal Value As Single)
```

水平滚动宽度。

### InsertMarkColor

```vb
Property Get InsertMarkColor() As OLE_COLOR
Property Let InsertMarkColor(ByVal Value As OLE_COLOR)
```

插入标记的颜色。

### ScrollTrack

```vb
Property Get ScrollTrack() As Boolean
Property Let ScrollTrack(ByVal Value As Boolean)
```

是否在拖动滚动条时实时滚动内容。

### Redraw

```vb
Property Get Redraw() As Boolean
Property Let Redraw(ByVal Value As Boolean)
```

是否在更改项时重绘列表框。禁用可加速批量添加。

### BorderStyle

```vb
Property Get BorderStyle() As CCBorderStyleConstants
Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

边框样式。参见通用枚举。

### VisualStyles

```vb
Property Get VisualStyles() As Boolean
Property Let VisualStyles(ByVal Value As Boolean)
```

是否启用视觉样式。

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

### AllowDropFiles

```vb
Property Get AllowDropFiles() As Boolean
Property Let AllowDropFiles(ByVal Value As Boolean)
```

是否允许拖放文件。

### OLEDragMode

```vb
Property Get OLEDragMode() As VBRUN.OLEDragConstants
Property Let OLEDragMode(ByVal Value As VBRUN.OLEDragConstants)
```

OLE 拖动模式。

### OLEDragDropScroll

```vb
Property Get OLEDragDropScroll() As Boolean
Property Let OLEDragDropScroll(ByVal Value As Boolean)
```

OLE 拖放时是否自动滚动。

### OLEDropMode

```vb
Property Get OLEDropMode() As OLEDropModeConstants
Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)
```

OLE 放置模式。

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

### hWnd

```vb
Property Get hWnd() As LongPtr
```

列表框控件的窗口句柄。

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

用户控件的窗口句柄。

### ToolTipText

```vb
Property Get ToolTipText() As String
Property Let ToolTipText(ByVal Value As String)
```

工具提示文本。

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

拖动图标。

### DragMode

```vb
Property Get DragMode() As Integer
Property Let DragMode(ByVal Value As Integer)
```

拖动模式。

## 方法

### AddItem

```vb
Public Sub AddItem(ByVal Item As String, Optional ByVal Index As Variant)
```

添加列表项。

### RemoveItem

```vb
Public Sub RemoveItem(ByVal Index As Long)
```

移除指定索引的列表项。

### Clear

```vb
Public Sub Clear()
```

清除所有列表项。

### Refresh

```vb
Public Sub Refresh()
```

强制重绘控件。

### SetSelRange

```vb
Public Sub SetSelRange(ByVal StartIndex As Long, ByVal EndIndex As Long)
```

设置选择范围（多选模式下）。

### SetColumnWidth

```vb
Public Sub SetColumnWidth(ByVal Value As Single)
```

设置多列模式下列的宽度。

### SelectItem

```vb
Public Function SelectItem(ByVal Text As String, Optional ByVal Index As Long = -1) As Long
```

选择匹配文本的项，返回选中项索引。

### FindItem

```vb
Public Function FindItem(ByVal Text As String, Optional ByVal Index As Long = -1, Optional ByVal Partial As Boolean) As Long
```

查找匹配文本的项，返回索引。

### HitTest

```vb
Public Function HitTest(ByVal X As Single, ByVal Y As Single) As Long
```

命中测试，返回指定坐标处的项索引。

### HitTestInsertMark

```vb
Public Function HitTestInsertMark(ByVal X As Single, ByVal Y As Single, Optional ByRef After As Boolean) As Long
```

插入标记命中测试，返回插入位置索引。

### ItemsPerColumn

```vb
Public Function ItemsPerColumn() As Long
```

获取每列项数。

### SelectedIndices

```vb
Public Function SelectedIndices() As Collection
```

获取所有选定项索引的集合。

### CheckedIndices

```vb
Public Function CheckedIndices() As Collection
```

获取所有选中项（复选框/单选）索引的集合。

### GetIdealHorizontalExtent

```vb
Public Function GetIdealHorizontalExtent() As Single
```

获取理想的水平滚动宽度。

### OLEDrag

```vb
Public Sub OLEDrag()
```

启动 OLE 拖放操作。

### Drag

```vb
Public Sub Drag(Optional ByRef Action As Variant)
```

开始、结束或取消拖动操作。

### SetFocus

```vb
Public Sub SetFocus()
```

获取焦点。

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

调整 Z 顺序。

### Move

```vb
Public Sub Move(ByVal Left As Single, Optional ByVal Top As Variant, Optional ByVal Width As Variant, Optional ByVal Height As Variant)
```

移动并调整控件位置和大小。

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

### Scroll

```vb
Public Event Scroll()
```

滚动时触发。

### ItemCheck

```vb
Public Event ItemCheck(ByVal Item As Long)
```

项被选中或取消选中时触发。

### ItemBeforeCheck

```vb
Public Event ItemBeforeCheck(ByVal Item As Long, ByRef Cancel As Boolean)
```

项即将被选中或取消选中时触发，可取消。

### ItemMeasure

```vb
Public Event ItemMeasure(ByVal Item As Long, ByRef ItemHeight As Long)
```

可变高度所有者绘制模式下测量项高度时触发。

### ItemDraw

```vb
Public Event ItemDraw(ByVal Item As Long, ByVal ItemAction As Long, ByVal ItemState As Long, ByVal hDC As Long, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
```

所有者绘制模式下绘制项时触发。

### DropFiles

```vb
Public Event DropFiles(ByRef FileList As Variant, ByVal X As Single, ByVal Y As Single)
```

拖放文件到控件时触发。

### ContextMenu

```vb
Public Event ContextMenu(ByVal X As Single, ByVal Y As Single)
```

右键菜单请求时触发。

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

按键前事件，在 KeyDown 之前触发。

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

按键释放前事件，在 KeyUp 之前触发。

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

按键按下。

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

按键释放。

### KeyPress

```vb
Public Event KeyPress(KeyChar As Integer)
```

按键字符。

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

鼠标按下。

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

鼠标移动。

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

鼠标释放。

### MouseEnter

```vb
Public Event MouseEnter()
```

鼠标进入控件。

### MouseLeave

```vb
Public Event MouseLeave()
```

鼠标离开控件。

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

OLE 拖放完成。

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

OLE 拖放落下。

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

OLE 拖放悬停。

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

OLE 给出反馈。

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

OLE 设置数据。

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

OLE 开始拖动。

## 代码示例

### 基本用法

```vb
' 添加列表项
ListBoxW1.AddItem "项目 1"
ListBoxW1.AddItem "项目 2", 0

' 设置当前选中项
ListBoxW1.ListIndex = 0

' 获取选中项文本
Dim s As String
s = ListBoxW1.Text
```

### 复选框和单选样式

```vb
' 复选框样式（设计时设置）
' ListBoxW1.Style = LstStyleCheckbox

' 获取选中项
Dim i As Long
For i = 0 To ListBoxW1.ListCount - 1
    If ListBoxW1.ItemChecked(i) Then
        Debug.Print ListBoxW1.List(i)
    End If
Next i
```

### 所有者绘制

```vb
' 可变高度所有者绘制（设计时设置 DrawMode = LstDrawModeOwnerDrawVariable）
Private Sub ListBoxW1_ItemMeasure(ByVal Item As Long, ByRef ItemHeight As Long)
    ItemHeight = 30
End Sub

Private Sub ListBoxW1_ItemDraw(ByVal Item As Long, ByVal ItemAction As Long, _
    ByVal ItemState As Long, ByVal hDC As Long, _
    ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
    ' 自定义绘制逻辑
End Sub
```

### 批量添加

```vb
' 禁用重绘加速批量添加
ListBoxW1.Redraw = False
Dim i As Long
For i = 1 To 1000
    ListBoxW1.AddItem "Item " & i
Next i
ListBoxW1.Redraw = True
```