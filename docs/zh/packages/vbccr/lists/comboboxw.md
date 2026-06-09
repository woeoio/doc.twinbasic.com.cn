---
title: 组合框控件（ComboBoxW）
description: 组合框控件（ComboBoxW） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'bc45de8a-b09c-408b-afa2-bfe6b52c4dad'
  PropagateID: 'bc45de8a-b09c-408b-afa2-bfe6b52c4dad'
  ReservedCode1: '8475e430-da3f-419b-969f-82b93e882e9a'
  ReservedCode2: '8475e430-da3f-419b-969f-82b93e882e9a'
---

# 组合框控件（ComboBoxW）

增强型组合框控件，支持视觉样式、自绘、大小写控制和提示文本。

## 枚举

### CboStyleConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CboStyleDropDownCombo | 0 | 下拉组合框 |
| CboStyleSimpleCombo | 1 | 简单组合框 |
| CboStyleDropDownList | 2 | 下拉列表 |

### CboCharacterCasingConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CboCharacterCasingNormal | 0 | 正常大小写 |
| CboCharacterCasingUpper | 1 | 大写 |
| CboCharacterCasingLower | 2 | 小写 |

### CboDrawModeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CboDrawModeNormal | 0 | 正常模式 |
| CboDrawModeOwnerDrawFixed | 1 | 固定高度自绘 |
| CboDrawModeOwnerDrawVariable | 2 | 可变高度自绘 |

## 属性

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

### OLEDropMode

```vb
Property Get OLEDropMode() As OLEDropModeConstants
Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)
```

OLE 拖放模式。参见通用枚举。

### Redraw

```vb
Property Get Redraw() As Boolean
Property Let Redraw(ByVal Value As Boolean)
```

是否允许重绘。

### Style

```vb
Property Get Style() As CboStyleConstants
Property Let Style(ByVal Value As CboStyleConstants)
```

组合框样式。

### Locked

```vb
Property Get Locked() As Boolean
Property Let Locked(ByVal Value As Boolean)
```

是否锁定（不可编辑）。

### Text

```vb
Property Get Text() As String
Property Let Text(ByVal Value As String)
```

编辑框文本。

### ExtendedUI

```vb
Property Get ExtendedUI() As Boolean
Property Let ExtendedUI(ByVal Value As Boolean)
```

扩展用户界面模式。

### MaxDropDownItems

```vb
Property Get MaxDropDownItems() As Long
Property Let MaxDropDownItems(ByVal Value As Long)
```

下拉列表最大显示项数。

### IntegralHeight

```vb
Property Get IntegralHeight() As Boolean
Property Let IntegralHeight(ByVal Value As Boolean)
```

是否按整项高度调整列表大小。

### MaxLength

```vb
Property Get MaxLength() As Long
Property Let MaxLength(ByVal Value As Long)
```

编辑框最大字符数。

### CueBanner

```vb
Property Get CueBanner() As String
Property Let CueBanner(ByVal Value As String)
```

提示文本（编辑框为空时显示）。

### UseListBackColor

```vb
Property Get UseListBackColor() As Boolean
Property Let UseListBackColor(ByVal Value As Boolean)
```

是否使用自定义列表背景色。

### ListBackColor

```vb
Property Get ListBackColor() As OLE_COLOR
Property Let ListBackColor(ByVal Value As OLE_COLOR)
```

下拉列表背景色。

### UseListForeColor

```vb
Property Get UseListForeColor() As Boolean
Property Let UseListForeColor(ByVal Value As Boolean)
```

是否使用自定义列表前景色。

### ListForeColor

```vb
Property Get ListForeColor() As OLE_COLOR
Property Let ListForeColor(ByVal Value As OLE_COLOR)
```

下拉列表前景色。

### Sorted

```vb
Property Get Sorted() As Boolean
Property Let Sorted(ByVal Value As Boolean)
```

是否自动排序。

### HorizontalExtent

```vb
Property Get HorizontalExtent() As Long
Property Let HorizontalExtent(ByVal Value As Long)
```

下拉列表水平滚动范围。

### DisableNoScroll

```vb
Property Get DisableNoScroll() As Boolean
Property Let DisableNoScroll(ByVal Value As Boolean)
```

当项目不足以填满时是否禁用滚动条而非隐藏。

### CharacterCasing

```vb
Property Get CharacterCasing() As CboCharacterCasingConstants
Property Let CharacterCasing(ByVal Value As CboCharacterCasingConstants)
```

字符大小写模式。

### DrawMode

```vb
Property Get DrawMode() As CboDrawModeConstants
Property Let DrawMode(ByVal Value As CboDrawModeConstants)
```

绘制模式。

### IMEMode

```vb
Property Get IMEMode() As CCIMEModeConstants
Property Let IMEMode(ByVal Value As CCIMEModeConstants)
```

输入法模式。参见通用枚举。

### ScrollTrack

```vb
Property Get ScrollTrack() As Boolean
Property Let ScrollTrack(ByVal Value As Boolean)
```

是否启用滚动跟踪。

### AutoSelect

```vb
Property Get AutoSelect() As Boolean
Property Let AutoSelect(ByVal Value As Boolean)
```

是否自动选择匹配项。

### AlwaysFindExact

```vb
Property Get AlwaysFindExact() As Boolean
Property Let AlwaysFindExact(ByVal Value As Boolean)
```

是否始终精确查找。

### ListCount

```vb
Property Get ListCount() As Long
```

列表项数。只读。

### List

```vb
Property Get List(ByVal Index As Long) As String
Property Let List(ByVal Index As Long, ByVal Value As String)
```

按索引存取列表项。

### ListIndex

```vb
Property Get ListIndex() As Long
Property Let ListIndex(ByVal Value As Long)
```

当前选中项索引。

### ItemData

```vb
Property Get ItemData(ByVal Index As Long) As Long
Property Let ItemData(ByVal Index As Long, ByVal Value As Long)
```

列表项关联数据。

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

列表顶部可见项索引。

### SelStart

```vb
Property Get SelStart() As Long
Property Let SelStart(ByVal Value As Long)
```

选中文本起始位置。

### SelLength

```vb
Property Get SelLength() As Long
Property Let SelLength(ByVal Value As Long)
```

选中文本长度。

### SelText

```vb
Property Get SelText() As String
Property Let SelText(ByVal Value As String)
```

选中文本。

### ItemHeight

```vb
Property Get ItemHeight() As Single
Property Let ItemHeight(ByVal Value As Single)
```

列表项高度。

### FieldHeight

```vb
Property Get FieldHeight() As Single
```

编辑框高度。只读。

### DroppedDown

```vb
Property Get DroppedDown() As Boolean
Property Let DroppedDown(ByVal Value As Boolean)
```

下拉列表是否展开。

### DropDownWidth

```vb
Property Get DropDownWidth() As Long
Property Let DropDownWidth(ByVal Value As Long)
```

下拉列表宽度。

### DropDownHeight

```vb
Property Get DropDownHeight() As Long
Property Let DropDownHeight(ByVal Value As Long)
```

下拉列表高度。

### hWndEdit

```vb
Property Get hWndEdit() As LongPtr
```

编辑框窗口句柄。只读。

### hWndList

```vb
Property Get hWndList() As LongPtr
```

列表框窗口句柄。只读。

### hWnd / hWndUserControl / Font / Enabled / MousePointer / MouseIcon / MouseTrack

参见公共属性。

### Name / Tag / Parent / Container / Left / Top / Width / Height / Visible / ToolTipText / HelpContextID / WhatsThisHelpID / DragIcon / DragMode

参见标准扩展器属性。

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

移除列表项。

### Clear

```vb
Public Sub Clear()
```

清空所有列表项。

### Refresh

```vb
Public Sub Refresh()
```

强制重绘。

### FindItem

```vb
Public Function FindItem(ByVal SearchString As String, Optional ByVal StartIndex As Long, Optional ByVal FindMode As Long) As Long
```

查找列表项，返回索引。

### GetIdealHorizontalExtent

```vb
Public Function GetIdealHorizontalExtent() As Long
```

获取理想的水平滚动范围。

### SelectItem

```vb
Public Sub SelectItem(ByVal SearchString As String)
```

选择匹配的列表项。

### OLEDrag

```vb
Public Sub OLEDrag()
```

启动 OLE 拖放。

### Drag / ZOrder / SetFocus / Move

参见标准方法。

## 事件

### Click

```vb
Public Event Click()
```

### DblClick

```vb
Public Event DblClick()
```

### Scroll

```vb
Public Event Scroll()
```

列表滚动时触发。

### Change

```vb
Public Event Change()
```

文本内容改变时触发。

### ContextMenu

```vb
Public Event ContextMenu()
```

右键菜单。

### DropDown

```vb
Public Event DropDown()
```

下拉列表展开。

### CloseUp

```vb
Public Event CloseUp()
```

下拉列表关闭。

### ItemMeasure

```vb
Public Event ItemMeasure(ByVal Index As Long, ByVal ItemWidth As Long, ByVal ItemHeight As Long)
```

自绘测量事件。

### ItemDraw

```vb
Public Event ItemDraw(ByVal Index As Long, ByVal ItemState As Long, ByVal hDC As LongPtr, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
```

自绘绘制事件。

### KeyDown / KeyUp / KeyPress

### MouseDown / MouseMove / MouseUp / MouseEnter / MouseLeave

### OLECompleteDrag / OLEDragDrop / OLEDragOver / OLEGiveFeedback / OLESetData / OLEStartDrag

## 代码示例

### 基本用法

```vb
' 添加项目
ComboBoxW1.AddItem "苹果"
ComboBoxW1.AddItem "香蕉"
ComboBoxW1.ListIndex = 0

' 设置提示文本
ComboBoxW1.CueBanner = "请选择水果..."

' 大写模式
ComboBoxW1.CharacterCasing = CboCharacterCasingUpper

' 自绘模式
ComboBoxW1.DrawMode = CboDrawModeOwnerDrawFixed
```

### 自绘示例

```vb
Private Sub ComboBoxW1_ItemDraw(ByVal Index As Long, ByVal ItemState As Long, _
    ByVal hDC As LongPtr, ByVal Left As Long, ByVal Top As Long, _
    ByVal Right As Long, ByVal Bottom As Long)
    ' 绘制自定义列表项
End Sub
```