---
title: 虚拟组合框控件（VirtualCombo）
description: 虚拟组合框控件（VirtualCombo） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f7987d4a-fb14-406b-880c-fc6a9adc193c'
  PropagateID: 'f7987d4a-fb14-406b-880c-fc6a9adc193c'
  ReservedCode1: '9ccf6a3f-3fd4-4c2e-8f3f-1e467d143c91'
  ReservedCode2: '9ccf6a3f-3fd4-4c2e-8f3f-1e467d143c91'
---

# 虚拟组合框控件（VirtualCombo）

提供虚拟数据组合框，使用LBS_NODATA样式实现大数据量展示，按需提供数据，支持自绘、增量搜索和OLE拖放。

## 枚举

### VcbStyleConstants

组合框样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| VcbStyleDropDownCombo | 0 | 下拉组合框（可编辑） |
| VcbStyleSimpleCombo | 1 | 简单组合框 |
| VcbStyleDropDownList | 2 | 下拉列表框（不可编辑） |

### VcbDrawModeConstants

绘制模式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| VcbDrawModeNormal | 0 | 标准绘制模式 |
| VcbDrawModeOwnerDrawFixed | 1 | 固定高度自绘模式 |

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

### hWndEdit

```vb
Public Property Get hWndEdit() As LongPtr
```

返回编辑框句柄。

### hWndList

```vb
Public Property Get hWndList() As LongPtr
```

返回下拉列表框句柄。

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

### Style

```vb
Public Property Get Style() As VcbStyleConstants
Public Property Let Style(ByVal Value As VcbStyleConstants)
```

返回/设置组合框样式。仅设计时可设置。

### Locked

```vb
Public Property Get Locked() As Boolean
Public Property Let Locked(ByVal Value As Boolean)
```

返回/设置是否锁定（禁止编辑和选择）。

### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

返回/设置编辑框文本。

### Default

```vb
Public Property Get Default() As String
Public Property Let Default(ByVal Value As String)
```

返回/设置默认文本。

### ExtendedUI

```vb
Public Property Get ExtendedUI() As Boolean
Public Property Let ExtendedUI(ByVal Value As Boolean)
```

返回/设置是否使用扩展用户界面（F4键打开下拉列表，ESC键关闭）。

### MaxDropDownItems

```vb
Public Property Get MaxDropDownItems() As Integer
Public Property Let MaxDropDownItems(ByVal Value As Integer)
```

返回/设置下拉列表最大显示项数。

### IntegralHeight

```vb
Public Property Get IntegralHeight() As Boolean
Public Property Let IntegralHeight(ByVal Value As Boolean)
```

返回/设置是否调整高度为完整项。仅设计时可设置。

### MaxLength

```vb
Public Property Get MaxLength() As Long
Public Property Let MaxLength(ByVal Value As Long)
```

返回/设置编辑框最大文本长度。

### UseListBackColor

```vb
Public Property Get UseListBackColor() As Boolean
Public Property Let UseListBackColor(ByVal Value As Boolean)
```

返回/设置是否使用列表背景色。

### UseListForeColor

```vb
Public Property Get UseListForeColor() As Boolean
Public Property Let UseListForeColor(ByVal Value As Boolean)
```

返回/设置是否使用列表前景色。

### ListBackColor

```vb
Public Property Get ListBackColor() As OLE_COLOR
Public Property Let ListBackColor(ByVal Value As OLE_COLOR)
```

返回/设置下拉列表背景色。

### ListForeColor

```vb
Public Property Get ListForeColor() As OLE_COLOR
Public Property Let ListForeColor(ByVal Value As OLE_COLOR)
```

返回/设置下拉列表前景色。

### HorizontalExtent

```vb
Public Property Get HorizontalExtent() As Single
Public Property Let HorizontalExtent(ByVal Value As Single)
```

返回/设置下拉列表水平滚动范围。

### DrawMode

```vb
Public Property Get DrawMode() As VcbDrawModeConstants
Public Property Let DrawMode(ByVal Value As VcbDrawModeConstants)
```

返回/设置绘制模式。仅设计时可设置。

### IMEMode

```vb
Public Property Get IMEMode() As CCIMEModeConstants
Public Property Let IMEMode(ByVal Value As CCIMEModeConstants)
```

返回/设置输入法模式。参见通用枚举。

### ScrollTrack

```vb
Public Property Get ScrollTrack() As Boolean
Public Property Let ScrollTrack(ByVal Value As Boolean)
```

返回/设置是否启用滚动跟踪（拖动滑块时实时滚动）。

### AutoSelect

```vb
Public Property Get AutoSelect() As Boolean
Public Property Let AutoSelect(ByVal Value As Boolean)
```

返回/设置是否自动选择匹配项。

### AlwaysFindExact

```vb
Public Property Get AlwaysFindExact() As Boolean
Public Property Let AlwaysFindExact(ByVal Value As Boolean)
```

返回/设置是否始终进行精确查找。

### ListCount

```vb
Public Property Get ListCount() As Long
```

返回列表项数量。

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

### SelStart

```vb
Public Property Get SelStart() As Long
Public Property Let SelStart(ByVal Value As Long)
```

返回/设置选择起始位置。

### SelLength

```vb
Public Property Get SelLength() As Long
Public Property Let SelLength(ByVal Value As Long)
```

返回/设置选择长度。

### SelText

```vb
Public Property Get SelText() As String
Public Property Let SelText(ByVal Value As String)
```

返回/设置选择的文本。

### ItemHeight

```vb
Public Property Get ItemHeight() As Single
Public Property Let ItemHeight(ByVal Value As Single)
```

返回/设置项高度。

### FieldHeight

```vb
Public Property Get FieldHeight() As Single
```

返回编辑框高度。

### DroppedDown

```vb
Public Property Get DroppedDown() As Boolean
Public Property Let DroppedDown(ByVal Value As Boolean)
```

返回/设置是否处于下拉状态。

### DropDownWidth

```vb
Public Property Get DropDownWidth() As Single
Public Property Let DropDownWidth(ByVal Value As Single)
```

返回/设置下拉列表宽度。

### DropDownHeight

```vb
Public Property Get DropDownHeight() As Single
Public Property Let DropDownHeight(ByVal Value As Single)
```

返回/设置下拉列表高度。

### TopIndex

```vb
Public Property Get TopIndex() As Long
Public Property Let TopIndex(ByVal Value As Long)
```

返回/设置下拉列表顶部可见项索引。

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

下拉列表滚动时触发。

### Change

```vb
Public Event Change()
```

文本内容改变时触发。

### ContextMenu

```vb
Public Event ContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)
```

右键上下文菜单事件。设置Handled为True可禁止默认菜单。

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

### DropDown

```vb
Public Event DropDown()
```

下拉列表展开时触发。

### CloseUp

```vb
Public Event CloseUp()
```

下拉列表关闭时触发。

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

## 辅助模块

### VirtualComboBase.bas

自定义窗口类辅助模块，注册/释放"VComboBoxWndClass"窗口类，为ComboLBox添加LBS_NODATA样式。

#### VcbWndRegisterClass

```vb
Public Sub VcbWndRegisterClass()
```

注册自定义窗口类。

#### VcbWndReleaseClass

```vb
Public Sub VcbWndReleaseClass()
```

释放自定义窗口类。

## 代码示例

### 基本用法

```vb
' 设置虚拟组合框
With VirtualCombo1
    .Style = VcbStyleDropDownList
    .ListCount = 1000
    .MaxDropDownItems = 15
End With

' 提供虚拟项数据
Private Sub VirtualCombo1_GetVirtualItem(ByVal Item As Long, ByRef Text As String)
    Text = "项目 " & CStr(Item)
End Sub

' 查找虚拟项
Private Sub VirtualCombo1_FindVirtualItem(ByVal StartIndex As Long, _
    ByVal SearchText As String, ByVal Partial As Boolean, ByRef FoundIndex As Long)
    FoundIndex = -1
End Sub

' 监听下拉事件
Private Sub VirtualCombo1_DropDown()
    Debug.Print "下拉列表已打开"
End Sub

Private Sub VirtualCombo1_Change()
    Debug.Print "当前文本: " & VirtualCombo1.Text
End Sub
```