---
title: 字体组合框控件（FontCombo）
description: 字体组合框控件（FontCombo） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '287f5799-e83f-4bbc-90f9-b6e030e037aa'
  PropagateID: '287f5799-e83f-4bbc-90f9-b6e030e037aa'
  ReservedCode1: 'e709c653-16a1-4e15-944a-c08f27ee2ef0'
  ReservedCode2: 'e709c653-16a1-4e15-944a-c08f27ee2ef0'
---

# 字体组合框控件（FontCombo）

提供带最近使用列表的字体选择组合框控件，可枚举系统字体并按类型和间距过滤。

## 枚举

### FtcStyleConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| FtcStyleDropDownCombo | 0 | 下拉组合框（可输入） |
| FtcStyleSimpleCombo | 1 | 简单组合框（列表始终可见） |
| FtcStyleDropDownList | 2 | 下拉列表（仅选择） |

### FtcFontTypeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| FtcFontTypeTrueType | 0 | 仅 TrueType 字体 |
| FtcFontTypeBitmap | 1 | 仅位图字体 |
| FtcFontTypeBitmapTrueType | 2 | 位图和 TrueType 字体 |

### FtcFontPitchConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| FtcFontPitchAll | 0 | 所有间距 |
| FtcFontPitchFixed | 1 | 固定间距 |
| FtcFontPitchVariable | 2 | 可变间距 |

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

### HelpContextID

```vb
Property Get/Let HelpContextID() As Long
```

返回/设置控件的帮助上下文 ID。

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

返回组合框的窗口句柄。

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

返回 UserControl 的窗口句柄。

### hWndEdit

```vb
Property Get hWndEdit() As LongPtr
```

返回编辑框部分的窗口句柄。

### hWndList

```vb
Property Get hWndList() As LongPtr
```

返回列表部分的窗口句柄。

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

### BackColor

```vb
Property Get/Let BackColor() As OLE_COLOR
```

返回/设置控件的背景色。

### ForeColor

```vb
Property Get/Let ForeColor() As OLE_COLOR
```

返回/设置控件的前景色。

### Enabled

```vb
Property Get/Let Enabled() As Boolean
```

返回/设置控件是否可用。

### OLEDragMode

```vb
Property Get/Let OLEDragMode() As VBRUN.OLEDragConstants
```

返回/设置 OLE 拖动模式。

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

```vb
Property Get/Let/Set MouseIcon() As IPictureDisp
```

返回/设置自定义鼠标图标。

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

### BuddyControl

```vb
Property Get/Set/Let BuddyControl() As Variant
```

返回/设置关联的伙伴控件，当选择字体时通知伙伴控件更新。

### Style

```vb
Property Get/Let Style() As FtcStyleConstants
```

返回/设置组合框的样式。

### FontType

```vb
Property Get/Let FontType() As FtcFontTypeConstants
```

返回/设置显示的字体类型过滤。

### FontPitch

```vb
Property Get/Let FontPitch() As FtcFontPitchConstants
```

返回/设置显示的字体间距过滤。

### Locked

```vb
Property Get/Let Locked() As Boolean
```

返回/设置控件是否锁定（禁止编辑和选择）。

### Text

```vb
Property Get/Let Text() As String
```

返回/设置编辑框中的文本。

### Default

```vb
Property Get/Let Default() As String
```

返回/设置默认字体名称。

### ExtendedUI

```vb
Property Get/Let ExtendedUI() As Boolean
```

返回/设置是否使用扩展用户界面。

### MaxDropDownItems

```vb
Property Get/Let MaxDropDownItems() As Integer
```

返回/设置下拉列表中可见的最大项目数。

### IntegralHeight

```vb
Property Get/Let IntegralHeight() As Boolean
```

返回/设置是否只显示完整项目（不截断部分项目）。

### MaxLength

```vb
Property Get/Let MaxLength() As Long
```

返回/设置编辑框中可输入的最大字符数。

### HorizontalExtent

```vb
Property Get/Let HorizontalExtent() As Single
```

返回/设置列表的水平滚动宽度。

### IMEMode

```vb
Property Get/Let IMEMode() As CCIMEModeConstants
```

返回/设置输入法编辑器模式。参见通用枚举。

### ScrollTrack

```vb
Property Get/Let ScrollTrack() As Boolean
```

返回/设置滚动条是否实时跟踪。

### AutoSelect

```vb
Property Get/Let AutoSelect() As Boolean
```

返回/设置获得焦点时是否自动选中编辑框文本。

### AlwaysFindExact

```vb
Property Get/Let AlwaysFindExact() As Boolean
```

返回/设置是否始终精确查找匹配项。

### RecentMax

```vb
Property Get/Let RecentMax() As Integer
```

返回/设置最近使用列表的最大项目数（0-9），0 表示不显示最近列表。

### RecentBackColor

```vb
Property Get/Let RecentBackColor() As OLE_COLOR
```

返回/设置最近使用列表的背景色。

### RecentForeColor

```vb
Property Get/Let RecentForeColor() As OLE_COLOR
```

返回/设置最近使用列表的前景色。

### RecentCount

```vb
Property Get RecentCount() As Long
```

返回最近使用列表中的项目数。只读。

### ListCount

```vb
Property Get ListCount() As Long
```

返回列表中的项目总数。只读。

### List

```vb
Property Get List(ByVal Index As Long) As String
```

返回指定索引处的列表项文本。只读。

### ListIndex

```vb
Property Get/Let ListIndex() As Long
```

返回/设置当前选中项的索引。

### ItemData

```vb
Property Get/Let ItemData(ByVal Index As Long) As LongPtr
```

返回/设置指定索引项的附加数据。

### SelStart

```vb
Property Get/Let SelStart() As Long
```

返回/设置选中文本的起始位置。

### SelLength

```vb
Property Get/Let SelLength() As Long
```

返回/设置选中文本的长度。

### SelText

```vb
Property Get/Let SelText() As String
```

返回/设置当前选中的文本。

### ItemHeight

```vb
Property Get ItemHeight() As Single
```

返回列表项目的高度。只读。

### FieldHeight

```vb
Property Get FieldHeight() As Single
```

返回编辑框（或静态文本）部分的高度。只读。

### DroppedDown

```vb
Property Get/Let DroppedDown() As Boolean
```

返回/设置下拉列表是否展开。

### DropDownWidth

```vb
Property Get/Let DropDownWidth() As Single
```

返回/设置下拉列表的宽度。简单样式下不支持。

### TopIndex

```vb
Property Get/Let TopIndex() As Long
```

返回/设置列表中顶部可见项的索引。

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

### SetFocus

```vb
Public Sub SetFocus()
```

将焦点移到该控件。

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

### FindItem

```vb
Public Function FindItem(ByVal Text As String, Optional ByVal Index As Long = -1, Optional ByVal Partial As Boolean) As Long
```

在字体组合框中查找项目并返回其索引。Partial 为 True 时进行部分匹配。

### GetIdealHorizontalExtent

```vb
Public Function GetIdealHorizontalExtent() As Single
```

获取水平滚动宽度的理想值。

### SelectItem

```vb
Public Function SelectItem(ByVal Text As String, Optional ByVal Index As Long = -1) As Long
```

搜索以指定字符串开头的项目并选中它。不区分大小写。

### SaveRecent

```vb
Public Function SaveRecent() As Variant
```

保存最近使用列表，返回字符串数组。

### RestoreRecent

```vb
Public Sub RestoreRecent(ByVal ArgList As Variant)
```

从之前保存的状态恢复最近使用列表。

### ClearRecent

```vb
Public Sub ClearRecent()
```

清除最近使用列表的内容。

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

### Scroll

```vb
Public Event Scroll()
```

滚动列表时发生。

### Change

```vb
Public Event Change()
```

控件内容发生变化时发生。

### ContextMenu

```vb
Public Event ContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)
```

右键单击或按 Shift+F10 时发生。设置 Handled 为 True 可阻止默认上下文菜单。

### DropDown

```vb
Public Event DropDown()
```

下拉列表即将展开时发生。

### CloseUp

```vb
Public Event CloseUp()
```

下拉列表关闭时发生。

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

在 KeyDown 事件之前发生，可设置 IsInputKey 标记按键是否为输入键。

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

在 KeyUp 事件之前发生。

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

按下键盘键时发生。

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

释放键盘键时发生。

### KeyPress

```vb
Public Event KeyPress(KeyChar As Integer)
```

按下并释放字符键时发生。

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
    With FontCombo1
        .Style = FtcStyleDropDownCombo
        .FontType = FtcFontTypeTrueType
        .FontPitch = FtcFontPitchAll
        .RecentMax = 5
    End With
End Sub

Private Sub FontCombo1_Click()
    Me.Font.Name = FontCombo1.Text
    Debug.Print "选中字体: " & FontCombo1.Text
End Sub

Private Sub Form_Unload(Cancel As Integer)
    Dim v As Variant
    v = FontCombo1.SaveRecent
    SaveSetting App.Title, "FontCombo", "Recent", Join(v, vbTab)
End Sub
```