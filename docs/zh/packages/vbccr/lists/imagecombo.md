---
title: 图像组合框控件（ImageCombo）
description: 图像组合框控件（ImageCombo） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f38ce5df-f7e2-486e-a3db-10ab2ace81e0'
  PropagateID: 'f38ce5df-f7e2-486e-a3db-10ab2ace81e0'
  ReservedCode1: '36f7e1a0-eb64-43d4-8b37-29fd88d65999'
  ReservedCode2: '36f7e1a0-eb64-43d4-8b37-29fd88d65999'
---

# 图像组合框控件（ImageCombo）

提供支持图标显示的增强型组合框控件，每个项目可关联图像列表中的图标。

## 枚举

### ImcStyleConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| ImcStyleDropDownCombo | 0 | 下拉组合框（可输入） |
| ImcStyleSimpleCombo | 1 | 简单组合框（列表始终可见） |
| ImcStyleDropDownList | 2 | 下拉列表（仅选择） |

### ImcEndEditReasonConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| ImcEndEditReasonLostFocus | 1 | 编辑结束原因：失去焦点 |
| ImcEndEditReasonReturn | 2 | 编辑结束原因：按回车键 |
| ImcEndEditReasonEscape | 3 | 编辑结束原因：按 Escape 键 |
| ImcEndEditReasonDropDown | 4 | 编辑结束原因：下拉选择 |

### ImcEllipsisFormatConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| ImcEllipsisFormatNone | 0 | 不使用省略号 |
| ImcEllipsisFormatEnd | 1 | 文本末尾使用省略号 |

## ImcComboItem 对象

表示图像组合框中的一个项目。

### ImcComboItem 属性

#### Index

```vb
Property Get Index() As Long
```

返回项目在集合中的索引。只读。

#### Key

```vb
Property Get/Let Key() As String
```

返回/设置项目的键值。

#### Tag

```vb
Property Get/Let/Set Tag() As Variant
```

返回/设置项目的附加数据。

#### Text

```vb
Property Get/Let Text() As String
```

返回/设置项目的文本。

#### Image

```vb
Property Get/Let Image() As Variant
```

返回/设置项目关联的图像索引或键。

#### ImageIndex

```vb
Property Get ImageIndex() As Long
```

返回项目关联的图像索引。只读。

#### SelImage

```vb
Property Get/Let SelImage() As Variant
```

返回/设置项目选中时关联的图像索引或键。

#### SelImageIndex

```vb
Property Get SelImageIndex() As Long
```

返回项目选中时关联的图像索引。只读。

#### Indentation

```vb
Property Get/Let Indentation() As Long
```

返回/设置项目的缩进级别（以图标宽度为单位）。

#### Selected

```vb
Property Get/Let Selected() As Boolean
```

返回/设置项目是否被选中。

#### Data

```vb
Property Get/Let Data() As LongPtr
```

返回/设置项目的附加数值数据。

## ImcComboItems 集合

表示图像组合框中所有项目的集合。

### ImcComboItems 属性和方法

#### NewEnum

```vb
Public Function NewEnum() As IEnumVARIANT
```

返回枚举器，支持 For Each 语法。

#### Add

```vb
Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Text As String, Optional ByVal Image As Variant, Optional ByVal SelImage As Variant, Optional ByVal Indentation As Variant) As ImcComboItem
```

添加一个项目到集合中，返回新创建的 ImcComboItem 对象。

#### Item

```vb
Public Property Get Item(ByVal Index As Variant) As ImcComboItem
```

按索引或键返回项目。

#### Exists

```vb
Public Function Exists(ByVal Index As Variant) As Boolean
```

检查指定索引或键的项目是否存在。

#### Count

```vb
Public Property Get Count() As Long
```

返回集合中的项目数量。

#### Clear

```vb
Public Sub Clear()
```

移除集合中的所有项目。

#### Remove

```vb
Public Sub Remove(ByVal Index As Variant)
```

按索引或键移除一个项目。

## 属性

### ControlsEnum

```vb
Property Get ControlsEnum() As VBRUN.ParentControls
```

返回父控件枚举器。

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

返回图像组合框的窗口句柄。

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

返回 UserControl 的窗口句柄。

### hWndCombo

```vb
Property Get hWndCombo() As LongPtr
```

返回 ComboBoxEx 控件的窗口句柄。

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

### RightToLeftLayout

```vb
Property Get/Let RightToLeftLayout() As Boolean
```

返回/设置是否启用从右到左布局镜像。

### RightToLeftMode

```vb
Property Get/Let RightToLeftMode() As CCRightToLeftModeConstants
```

返回/设置从右到左模式。参见通用枚举。

### ImageList

```vb
Property Get/Set/Let ImageList() As Variant
```

返回/设置关联的 ImageList 控件，用于提供项目图标。

### Style

```vb
Property Get/Let Style() As ImcStyleConstants
```

返回/设置组合框的样式。

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

返回/设置默认值。

### Indentation

```vb
Property Get/Let Indentation() As Long
```

返回/设置新项目的默认缩进级别。

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

### ShowImages

```vb
Property Get/Let ShowImages() As Boolean
```

返回/设置是否显示项目图标。

### MaxLength

```vb
Property Get/Let MaxLength() As Long
```

返回/设置编辑框中可输入的最大字符数。

### IMEMode

```vb
Property Get/Let IMEMode() As CCIMEModeConstants
```

返回/设置输入法编辑器模式。参见通用枚举。

### EllipsisFormat

```vb
Property Get/Let EllipsisFormat() As ImcEllipsisFormatConstants
```

返回/设置文本超出宽度时的省略号格式。

### ScrollTrack

```vb
Property Get/Let ScrollTrack() As Boolean
```

返回/设置滚动条是否实时跟踪。

### ComboItems

```vb
Property Get ComboItems() As ImcComboItems
```

返回组合框项目集合。只读。

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

### TopItem

```vb
Property Get/Set TopItem() As ImcComboItem
```

返回/设置列表顶部可见的项目。

### SelectedItem

```vb
Property Get/Set SelectedItem() As ImcComboItem
```

返回/设置当前选中的项目。

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

### OLEDraggedItem

```vb
Property Get OLEDraggedItem() As ImcComboItem
```

返回 OLE 拖放操作中当前被拖动的项目。只读。

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

### GetItemHeight

```vb
Public Function GetItemHeight() As Single
```

返回列表项目的高度（考虑图标高度）。

### FindItem

```vb
Public Function FindItem(ByVal Text As String, Optional ByVal Index As Long, Optional ByVal Partial As Boolean, Optional ByVal Wrap As Boolean) As ImcComboItem
```

在列表中查找项目并返回该项目的引用。Partial 为 True 时进行部分匹配，Wrap 为 True 时从开头继续搜索。

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

### ItemDrag

```vb
Public Event ItemDrag(ByVal Item As ImcComboItem, ByVal Button As Integer)
```

项目发起拖放操作时发生。

### BeginEdit

```vb
Public Event BeginEdit()
```

用户激活下拉列表或点击编辑框时发生。

### EndEdit

```vb
Public Event EndEdit(ByVal Changed As Boolean, ByVal NewIndex As Long, ByVal NewText As String, ByVal Reason As ImcEndEditReasonConstants)
```

编辑操作结束时发生。Changed 指示文本是否改变，NewIndex 为新选中项索引，NewText 为新文本，Reason 为结束原因。

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
    Set ImageCombo1.ImageList = ImageList1
    With ImageCombo1
        .Style = ImcStyleDropDownCombo
        .ShowImages = True
        .MaxDropDownItems = 10
    End With

    Dim Item As ImcComboItem
    Set Item = ImageCombo1.ComboItems.Add(, "k1", "项目一", 1, 2)
    Set Item = ImageCombo1.ComboItems.Add(, "k2", "项目二", 1, 2)
    Set Item = ImageCombo1.ComboItems.Add(, "k3", "子项目", 3, 4)
    Item.Indentation = 1
End Sub

Private Sub ImageCombo1_Click()
    If Not ImageCombo1.SelectedItem Is Nothing Then
        Debug.Print "选中: " & ImageCombo1.SelectedItem.Text
    End If
End Sub

Private Sub ImageCombo1_EndEdit(ByVal Changed As Boolean, ByVal NewIndex As Long, ByVal NewText As String, ByVal Reason As ImcEndEditReasonConstants)
    If Changed Then
        Debug.Print "编辑完成: " & NewText
    End If
End Sub
```