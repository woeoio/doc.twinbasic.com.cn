---
title: 列表视图控件（ListView）
description: 列表视图控件（ListView） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '037337be-9c03-4899-afc3-7f4208933724'
  PropagateID: '037337be-9c03-4899-afc3-7f4208933724'
  ReservedCode1: 'c3682db0-a17a-481f-a1d9-97c57cb784c4'
  ReservedCode2: 'c3682db0-a17a-481f-a1d9-97c57cb784c4'
---

# 列表视图控件（ListView）

封装 SysListView32 系统列表视图控件，支持大图标、小图标、列表、报表和平铺视图，以及分组、虚拟模式、列筛选等高级功能。

## 枚举

### LvwViewConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwViewIcon | 0 | 大图标视图 |
| LvwViewSmallIcon | 1 | 小图标视图 |
| LvwViewList | 2 | 列表视图 |
| LvwViewReport | 3 | 报表视图 |
| LvwViewTile | 4 | 平铺视图 |

### LvwArrangeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwArrangeNone | 0 | 不排列 |
| LvwArrangeAutoLeft | 1 | 自动靠左排列 |
| LvwArrangeAutoTop | 2 | 自动靠顶排列 |
| LvwArrangeLeft | 3 | 靠左排列 |
| LvwArrangeTop | 4 | 靠顶排列 |

### LvwColumnHeaderAlignmentConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwColumnHeaderAlignmentLeft | 0 | 左对齐 |
| LvwColumnHeaderAlignmentRight | 1 | 右对齐 |
| LvwColumnHeaderAlignmentCenter | 2 | 居中 |

### LvwColumnHeaderSortArrowConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwColumnHeaderSortArrowNone | 0 | 无排序箭头 |
| LvwColumnHeaderSortArrowDown | 1 | 向下箭头（升序） |
| LvwColumnHeaderSortArrowUp | 2 | 向上箭头（降序） |

### LvwColumnHeaderAutoSizeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwColumnHeaderAutoSizeToItems | 0 | 根据项自动调整 |
| LvwColumnHeaderAutoSizeToHeader | 1 | 根据表头自动调整 |

### LvwColumnHeaderFilterTypeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwColumnHeaderFilterTypeText | 0 | 文本筛选 |
| LvwColumnHeaderFilterTypeNumber | 1 | 数值筛选 |

### LvwLabelEditConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwLabelEditAutomatic | 0 | 自动标签编辑 |
| LvwLabelEditManual | 1 | 手动标签编辑 |
| LvwLabelEditDisabled | 2 | 禁用标签编辑 |

### LvwSortOrderConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwSortOrderAscending | 0 | 升序 |
| LvwSortOrderDescending | 1 | 降序 |

### LvwSortTypeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwSortTypeBinary | 0 | 二进制排序 |
| LvwSortTypeText | 1 | 文本排序 |
| LvwSortTypeNumeric | 2 | 数值排序 |
| LvwSortTypeCurrency | 3 | 货币排序 |
| LvwSortTypeDate | 4 | 日期排序 |
| LvwSortTypeLogical | 5 | 逻辑排序 |

### LvwPictureAlignmentConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwPictureAlignmentTopLeft | 0 | 左上 |
| LvwPictureAlignmentTopRight | 1 | 右上 |
| LvwPictureAlignmentBottomLeft | 2 | 左下 |
| LvwPictureAlignmentBottomRight | 3 | 右下 |
| LvwPictureAlignmentCenter | 4 | 居中 |
| LvwPictureAlignmentTile | 5 | 平铺 |

### LvwGroupHeaderAlignmentConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwGroupHeaderAlignmentLeft | 0 | 左对齐 |
| LvwGroupHeaderAlignmentRight | 1 | 右对齐 |
| LvwGroupHeaderAlignmentCenter | 2 | 居中 |

### LvwGroupFooterAlignmentConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwGroupFooterAlignmentLeft | 0 | 左对齐 |
| LvwGroupFooterAlignmentRight | 1 | 右对齐 |
| LvwGroupFooterAlignmentCenter | 2 | 居中 |

### LvwVisualThemeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwVisualThemeStandard | 0 | 标准主题 |
| LvwVisualThemeExplorer | 1 | 资源管理器主题 |

### LvwVirtualPropertyConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwVirtualPropertyText | 1 | 文本属性 |
| LvwVirtualPropertyIcon | 2 | 图标属性 |
| LvwVirtualPropertyIndentation | 4 | 缩进属性 |
| LvwVirtualPropertyToolTipText | 8 | 工具提示文本属性 |
| LvwVirtualPropertyBold | 16 | 粗体属性 |
| LvwVirtualPropertyForeColor | 32 | 前景色属性 |
| LvwVirtualPropertyChecked | 64 | 选中属性 |

### LvwFindDirectionConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LvwFindDirectionUndefined | 0 | 未定义 |
| LvwFindDirectionPrior | vbKeyPageUp | 向上翻页方向 |
| LvwFindDirectionNext | vbKeyPageDown | 向下翻页方向 |
| LvwFindDirectionEnd | vbKeyEnd | End 方向 |
| LvwFindDirectionHome | vbKeyHome | Home 方向 |
| LvwFindDirectionLeft | vbKeyLeft | 左方向 |
| LvwFindDirectionUp | vbKeyUp | 上方向 |
| LvwFindDirectionRight | vbKeyRight | 右方向 |
| LvwFindDirectionDown | vbKeyDown | 下方向 |

### CCBorderStyleConstants

参见通用枚举。

### CCAppearanceConstants

参见通用枚举。

### CCMousePointerConstants

参见通用枚举。

### CCIMEModeConstants

参见通用枚举。

### CCBackStyleConstants

参见通用枚举。

### CCRightToLeftModeConstants

参见通用枚举。

### CCScrollOrientationConstants

参见通用枚举。

### OLEDropModeConstants

参见通用枚举。

## 属性

### View

```vb
Property Get View() As LvwViewConstants
Property Let View(ByVal Value As LvwViewConstants)
```

视图模式。

### Arrange

```vb
Property Get Arrange() As LvwArrangeConstants
Property Let Arrange(ByVal Value As LvwArrangeConstants)
```

图标排列方式。

### SortKey

```vb
Property Get SortKey() As Integer
Property Let SortKey(ByVal Value As Integer)
```

排序关键列索引。

### SortOrder

```vb
Property Get SortOrder() As LvwSortOrderConstants
Property Let SortOrder(ByVal Value As LvwSortOrderConstants)
```

排序顺序。

### SortType

```vb
Property Get SortType() As LvwSortTypeConstants
Property Let SortType(ByVal Value As LvwSortTypeConstants)
```

排序类型。

### Sorted

```vb
Property Get Sorted() As Boolean
Property Let Sorted(ByVal Value As Boolean)
```

是否启用排序。

### LabelEdit

```vb
Property Get LabelEdit() As LvwLabelEditConstants
Property Let LabelEdit(ByVal Value As LvwLabelEditConstants)
```

标签编辑模式。

### LabelWrap

```vb
Property Get LabelWrap() As Boolean
Property Let LabelWrap(ByVal Value As Boolean)
```

是否允许标签换行。

### MultiSelect

```vb
Property Get MultiSelect() As Boolean
Property Let MultiSelect(ByVal Value As Boolean)
```

是否允许多选。

### FullRowSelect

```vb
Property Get FullRowSelect() As Boolean
Property Let FullRowSelect(ByVal Value As Boolean)
```

是否整行选中。

### GridLines

```vb
Property Get GridLines() As Boolean
Property Let GridLines(ByVal Value As Boolean)
```

是否显示网格线。

### Checkboxes

```vb
Property Get Checkboxes() As Boolean
Property Let Checkboxes(ByVal Value As Boolean)
```

是否显示复选框。

### HideSelection

```vb
Property Get HideSelection() As Boolean
Property Let HideSelection(ByVal Value As Boolean)
```

失去焦点时是否隐藏选中状态。

### HideColumnHeaders

```vb
Property Get HideColumnHeaders() As Boolean
Property Let HideColumnHeaders(ByVal Value As Boolean)
```

是否隐藏列标题。

### AllowColumnReorder

```vb
Property Get AllowColumnReorder() As Boolean
Property Let AllowColumnReorder(ByVal Value As Boolean)
```

是否允许拖动重排列。

### AllowColumnCheckboxes

```vb
Property Get AllowColumnCheckboxes() As Boolean
Property Let AllowColumnCheckboxes(ByVal Value As Boolean)
```

是否允许列复选框。

### AllowDropFiles

```vb
Property Get AllowDropFiles() As Boolean
Property Let AllowDropFiles(ByVal Value As Boolean)
```

是否允许拖放文件。

### ShowInfoTips

```vb
Property Get ShowInfoTips() As Boolean
Property Let ShowInfoTips(ByVal Value As Boolean)
```

是否显示信息提示。

### ShowLabelTips

```vb
Property Get ShowLabelTips() As Boolean
Property Let ShowLabelTips(ByVal Value As Boolean)
```

是否显示标签提示。

### ShowColumnTips

```vb
Property Get ShowColumnTips() As Boolean
Property Let ShowColumnTips(ByVal Value As Boolean)
```

是否显示列提示。

### DoubleBuffer

```vb
Property Get DoubleBuffer() As Boolean
Property Let DoubleBuffer(ByVal Value As Boolean)
```

是否启用双缓冲。

### VisualStyles

```vb
Property Get VisualStyles() As Boolean
Property Let VisualStyles(ByVal Value As Boolean)
```

是否启用视觉样式。

### VisualTheme

```vb
Property Get VisualTheme() As LvwVisualThemeConstants
Property Let VisualTheme(ByVal Value As LvwVisualThemeConstants)
```

视觉主题。

### HoverSelection

```vb
Property Get HoverSelection() As Boolean
Property Let HoverSelection(ByVal Value As Boolean)
```

是否启用悬停选择。

### HoverSelectionTime

```vb
Property Get HoverSelectionTime() As Long
Property Let HoverSelectionTime(ByVal Value As Long)
```

悬停选择延迟时间（毫秒）。

### HotTracking

```vb
Property Get HotTracking() As Boolean
Property Let HotTracking(ByVal Value As Boolean)
```

是否启用热跟踪。

### HighlightHot

```vb
Property Get HighlightHot() As Boolean
Property Let HighlightHot(ByVal Value As Boolean)
```

是否高亮显示热项。

### UnderlineHot

```vb
Property Get UnderlineHot() As Boolean
Property Let UnderlineHot(ByVal Value As Boolean)
```

是否为热项添加下划线。

### InsertMarkColor

```vb
Property Get InsertMarkColor() As OLE_COLOR
Property Let InsertMarkColor(ByVal Value As OLE_COLOR)
```

插入标记的颜色。

### TextBackground

```vb
Property Get TextBackground() As CCBackStyleConstants
Property Let TextBackground(ByVal Value As CCBackStyleConstants)
```

文本背景样式。参见通用枚举。

### ClickableColumnHeaders

```vb
Property Get ClickableColumnHeaders() As Boolean
Property Let ClickableColumnHeaders(ByVal Value As Boolean)
```

列标题是否可点击。

### HighlightColumnHeaders

```vb
Property Get HighlightColumnHeaders() As Boolean
Property Let HighlightColumnHeaders(ByVal Value As Boolean)
```

是否高亮显示列标题。

### TrackSizeColumnHeaders

```vb
Property Get TrackSizeColumnHeaders() As Boolean
Property Let TrackSizeColumnHeaders(ByVal Value As Boolean)
```

是否跟踪列标题大小。

### ResizableColumnHeaders

```vb
Property Get ResizableColumnHeaders() As Boolean
Property Let ResizableColumnHeaders(ByVal Value As Boolean)
```

列标题是否可调整大小。

### Picture

```vb
Property Get Picture() As IPictureDisp
Property Let Picture(ByVal Value As IPictureDisp)
Property Set Picture(ByVal Value As IPictureDisp)
```

背景图片。

### PictureAlignment

```vb
Property Get PictureAlignment() As LvwPictureAlignmentConstants
Property Let PictureAlignment(ByVal Value As LvwPictureAlignmentConstants)
```

背景图片对齐方式。

### PictureWatermark

```vb
Property Get PictureWatermark() As Boolean
Property Let PictureWatermark(ByVal Value As Boolean)
```

是否将背景图片作为水印。

### TileViewLines

```vb
Property Get TileViewLines() As Long
Property Let TileViewLines(ByVal Value As Long)
```

平铺视图中的文本行数。

### SnapToGrid

```vb
Property Get SnapToGrid() As Boolean
Property Let SnapToGrid(ByVal Value As Boolean)
```

是否对齐到网格。

### GroupView

```vb
Property Get GroupView() As Boolean
Property Let GroupView(ByVal Value As Boolean)
```

是否启用分组视图。

### GroupSubsetCount

```vb
Property Get GroupSubsetCount() As Long
Property Let GroupSubsetCount(ByVal Value As Long)
```

分组子集显示数量。

### UseColumnChevron

```vb
Property Get UseColumnChevron() As Boolean
Property Let UseColumnChevron(ByVal Value As Boolean)
```

是否使用列折叠按钮。

### UseColumnFilterBar

```vb
Property Get UseColumnFilterBar() As Boolean
Property Let UseColumnFilterBar(ByVal Value As Boolean)
```

是否使用列筛选栏。

### AutoSelectFirstItem

```vb
Property Get AutoSelectFirstItem() As Boolean
Property Let AutoSelectFirstItem(ByVal Value As Boolean)
```

是否自动选择第一项。

### IMEMode

```vb
Property Get IMEMode() As CCIMEModeConstants
Property Let IMEMode(ByVal Value As CCIMEModeConstants)
```

输入法模式。参见通用枚举。

### VirtualMode

```vb
Property Get VirtualMode() As Boolean
Property Let VirtualMode(ByVal Value As Boolean)
```

是否启用虚拟模式。

### VirtualItemCount

```vb
Property Get VirtualItemCount() As Long
Property Let VirtualItemCount(ByVal Value As Long)
```

虚拟模式下的项总数。

### VirtualDisabledInfos

```vb
Property Get VirtualDisabledInfos() As LvwVirtualPropertyConstants
Property Let VirtualDisabledInfos(ByVal Value As LvwVirtualPropertyConstants)
```

虚拟模式下禁用的属性掩码。

### ListItems

```vb
Property Get ListItems() As LvwListItems
```

列表项集合。只读。

### VirtualListItems

```vb
Property Get VirtualListItems() As LvwVirtualListItems
```

虚拟列表项集合。只读。

### ColumnHeaders

```vb
Property Get ColumnHeaders() As LvwColumnHeaders
```

列标题集合。只读。

### Groups

```vb
Property Get Groups() As LvwGroups
```

分组集合。只读。

### WorkAreas

```vb
Property Get WorkAreas() As LvwWorkAreas
```

工作区域集合。只读。

### TopItem

```vb
Property Get TopItem() As LvwListItem
```

第一个可见项。只读。

### SelectedItem

```vb
Property Get SelectedItem() As LvwListItem
Property Let SelectedItem(ByVal Value As LvwListItem)
Property Set SelectedItem(ByVal Value As LvwListItem)
```

当前选中项。

### HotItem

```vb
Property Get HotItem() As LvwListItem
Property Let HotItem(ByVal Value As LvwListItem)
Property Set HotItem(ByVal Value As LvwListItem)
```

热项（鼠标悬停项）。

### SelectionMark

```vb
Property Get SelectionMark() As LvwListItem
Property Let SelectionMark(ByVal Value As LvwListItem)
Property Set SelectionMark(ByVal Value As LvwListItem)
```

选择标记项。

### DropHighlight

```vb
Property Get DropHighlight() As LvwListItem
Property Let DropHighlight(ByVal Value As LvwListItem)
Property Set DropHighlight(ByVal Value As LvwListItem)
```

拖放高亮项。

### InsertMark

```vb
Property Get InsertMark(Optional ByRef After As Boolean) As LvwListItem
Property Let InsertMark(Optional ByRef After As Boolean, ByVal Value As LvwListItem)
Property Set InsertMark(Optional ByRef After As Boolean, ByVal Value As LvwListItem)
```

插入标记项。

### OLEDraggedItem

```vb
Property Get OLEDraggedItem() As LvwListItem
```

OLE 拖放操作中拖动的项。只读。

### SelectedGroup

```vb
Property Get SelectedGroup() As LvwGroup
Property Let SelectedGroup(ByVal Value As LvwGroup)
Property Set SelectedGroup(ByVal Value As LvwGroup)
```

当前选中的分组。

### SelectedColumn

```vb
Property Get SelectedColumn() As LvwColumnHeader
Property Let SelectedColumn(ByVal Value As LvwColumnHeader)
Property Set SelectedColumn(ByVal Value As LvwColumnHeader)
```

当前选中的列。

### ColumnOrder

```vb
Property Get ColumnOrder() As Variant
Property Let ColumnOrder(ByVal ArgList As Variant)
```

列顺序数组。

### ColumnWidth

```vb
Property Get ColumnWidth() As Single
Property Let ColumnWidth(ByVal Value As Single)
```

当前列宽。

### ColumnFilterChangedTimeout

```vb
Property Get ColumnFilterChangedTimeout() As Long
Property Let ColumnFilterChangedTimeout(ByVal Value As Long)
```

列筛选变更超时时间。

### IconSpacingWidth

```vb
Property Get IconSpacingWidth() As Single
Property Let IconSpacingWidth(ByVal Value As Single)
```

图标间距宽度。

### IconSpacingHeight

```vb
Property Get IconSpacingHeight() As Single
Property Let IconSpacingHeight(ByVal Value As Single)
```

图标间距高度。

### IncrementalSearchString

```vb
Property Get IncrementalSearchString() As String
```

增量搜索字符串。只读。

### Redraw

```vb
Property Get Redraw() As Boolean
Property Let Redraw(ByVal Value As Boolean)
```

是否启用重绘。

### BorderStyle

```vb
Property Get BorderStyle() As CCBorderStyleConstants
Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

边框样式。参见通用枚举。

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

### Icons

```vb
Property Get Icons() As Variant
Property Set Icons(ByVal Value As Variant)
Property Let Icons(ByVal Value As Variant)
```

大图标图像列表。

### SmallIcons

```vb
Property Get SmallIcons() As Variant
Property Set SmallIcons(ByVal Value As Variant)
Property Let SmallIcons(ByVal Value As Variant)
```

小图标图像列表。

### ColumnHeaderIcons

```vb
Property Get ColumnHeaderIcons() As Variant
Property Set ColumnHeaderIcons(ByVal Value As Variant)
Property Let ColumnHeaderIcons(ByVal Value As Variant)
```

列标题图像列表。

### GroupIcons

```vb
Property Get GroupIcons() As Variant
Property Set GroupIcons(ByVal Value As Variant)
Property Let GroupIcons(ByVal Value As Variant)
```

分组标题图像列表。

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

### OLEDragDropScrollOrientation

```vb
Property Get OLEDragDropScrollOrientation() As CCScrollOrientationConstants
Property Let OLEDragDropScrollOrientation(ByVal Value As CCScrollOrientationConstants)
```

OLE 拖放自动滚动方向。参见通用枚举。

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

### HotMousePointer

```vb
Property Get HotMousePointer() As CCMousePointerConstants
Property Let HotMousePointer(ByVal Value As CCMousePointerConstants)
```

热项鼠标指针样式。参见通用枚举。

### HotMouseIcon

```vb
Property Get HotMouseIcon() As IPictureDisp
Property Let HotMouseIcon(ByVal Value As IPictureDisp)
Property Set HotMouseIcon(ByVal Value As IPictureDisp)
```

热项自定义鼠标图标。

### HeaderMousePointer

```vb
Property Get HeaderMousePointer() As CCMousePointerConstants
Property Let HeaderMousePointer(ByVal Value As CCMousePointerConstants)
```

列标题鼠标指针样式。参见通用枚举。

### HeaderMouseIcon

```vb
Property Get HeaderMouseIcon() As IPictureDisp
Property Let HeaderMouseIcon(ByVal Value As IPictureDisp)
Property Set HeaderMouseIcon(ByVal Value As IPictureDisp)
```

列标题自定义鼠标图标。

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

### RightToLeftLayout

```vb
Property Get RightToLeftLayout() As Boolean
Property Let RightToLeftLayout(ByVal Value As Boolean)
```

从右到左镜像布局。

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

列表视图控件的窗口句柄。

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

用户控件的窗口句柄。

### hWndHeader

```vb
Property Get hWndHeader() As LongPtr
```

列标题控件的窗口句柄。

### hWndLabelEdit

```vb
Property Get hWndLabelEdit() As LongPtr
```

标签编辑框的窗口句柄。

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

### Refresh

```vb
Public Sub Refresh()
```

强制重绘控件。

### HitTest

```vb
Public Function HitTest(ByVal X As Single, ByVal Y As Single, Optional ByRef SubItemIndex As Variant) As LvwListItem
```

命中测试，返回指定坐标处的列表项。

### HitTestInsertMark

```vb
Public Function HitTestInsertMark(ByVal X As Single, ByVal Y As Single, Optional ByRef After As Boolean) As LvwListItem
```

插入标记命中测试，返回插入位置的列表项。

### FindItem

```vb
Public Function FindItem(ByVal Text As String, Optional ByVal Index As Long, Optional ByVal Partial As Boolean, Optional ByVal Wrap As Boolean) As LvwListItem
```

查找匹配文本的列表项。

### FindNearestItem

```vb
Public Function FindNearestItem(ByVal X As Single, ByVal Y As Single, Optional ByVal Direction As LvwFindDirectionConstants) As LvwListItem
```

查找指定方向最近的列表项。

### FindSubItem

```vb
Public Function FindSubItem(ByVal Text As String, Optional ByVal Index As Long, Optional ByRef SubItemIndex As Long, Optional ByVal Partial As Boolean, Optional ByVal Wrap As Boolean) As LvwListItem
```

查找匹配文本的子项。

### GetVisibleCount

```vb
Public Function GetVisibleCount() As Long
```

获取可见项数量。

### GetSelectedCount

```vb
Public Function GetSelectedCount() As Long
```

获取选中项数量。

### GetHeaderHeight

```vb
Public Function GetHeaderHeight() As Single
```

获取列标题高度。

### StartLabelEdit

```vb
Public Sub StartLabelEdit()
```

开始标签编辑。

### EndLabelEdit

```vb
Public Sub EndLabelEdit()
```

结束标签编辑。

### Scroll

```vb
Public Sub Scroll(ByVal X As Single, ByVal Y As Single)
```

滚动列表视图内容。

### ResetEmptyMarkup

```vb
Public Sub ResetEmptyMarkup()
```

重置空标记文本。

### ComputeControlSize

```vb
Public Sub ComputeControlSize(ByVal VisibleCount As Long, ByRef Width As Single, ByRef Height As Single, Optional ByVal ProposedWidth As Single, Optional ByVal ProposedHeight As Single)
```

计算显示指定数量项所需的控件尺寸。

### TextWidth

```vb
Public Function TextWidth(ByVal Text As String) As Single
```

计算文本宽度。

### ResetForeColors

```vb
Public Sub ResetForeColors()
```

重置所有列表项和子项的前景色。

### SelectedIndices

```vb
Public Function SelectedIndices() As Collection
```

获取所有选中项索引的集合。

### GhostedIndices

```vb
Public Function GhostedIndices() As Collection
```

获取所有幻影项索引的集合。

### CheckedIndices

```vb
Public Function CheckedIndices() As Collection
```

获取所有选中（复选框）项索引的集合。

### ResetIconSpacing

```vb
Public Sub ResetIconSpacing()
```

重置图标间距为默认值。

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

### ItemClick

```vb
Public Event ItemClick(ByVal Item As LvwListItem, ByVal Button As Integer)
```

列表项被点击。

### ItemDblClick

```vb
Public Event ItemDblClick(ByVal Item As LvwListItem, ByVal Button As Integer)
```

列表项被双击。

### ItemFocus

```vb
Public Event ItemFocus(ByVal Item As LvwListItem)
```

列表项获得焦点。

### ItemActivate

```vb
Public Event ItemActivate(ByVal Item As LvwListItem, ByVal SubItemIndex As Long, ByVal Shift As Integer)
```

列表项被激活。

### ItemSelect

```vb
Public Event ItemSelect(ByVal Item As LvwListItem, ByVal Selected As Boolean)
```

列表项选中状态改变。

### ItemCheck

```vb
Public Event ItemCheck(ByVal Item As LvwListItem, ByVal Checked As Boolean)
```

列表项复选框状态改变。

### ItemDrag

```vb
Public Event ItemDrag(ByVal Item As LvwListItem, ByVal Button As Integer)
```

列表项启动拖放操作。

### ItemBkColor

```vb
Public Event ItemBkColor(ByVal Item As LvwListItem, ByRef RGBColor As Long)
```

列表项背景色请求（报表视图），可提供替代背景色。

### GetVirtualItem

```vb
Public Event GetVirtualItem(ByVal ItemIndex As Long, ByVal SubItemIndex As Long, ByVal VirtualProperty As LvwVirtualPropertyConstants, ByRef Value As Variant)
```

虚拟模式下请求项属性。

### FindVirtualItem

```vb
Public Event FindVirtualItem(ByVal StartIndex As Long, ByVal SearchText As String, ByVal Partial As Boolean, ByVal Wrap As Boolean, ByRef FoundIndex As Long)
```

虚拟模式下查找项。

### CacheVirtualItems

```vb
Public Event CacheVirtualItems(ByVal FromIndex As Long, ByVal ToIndex As Long)
```

虚拟模式下请求缓存项范围。

### BeforeLabelEdit

```vb
Public Event BeforeLabelEdit(ByRef Cancel As Boolean)
```

标签编辑前触发，可取消。

### AfterLabelEdit

```vb
Public Event AfterLabelEdit(ByRef Cancel As Boolean, ByRef NewString As String)
```

标签编辑后触发。

### ColumnClick

```vb
Public Event ColumnClick(ByVal ColumnHeader As LvwColumnHeader)
```

列标题被点击。

### ColumnDblClick

```vb
Public Event ColumnDblClick(ByVal ColumnHeader As LvwColumnHeader)
```

列标题被双击。

### ColumnCheck

```vb
Public Event ColumnCheck(ByVal ColumnHeader As LvwColumnHeader)
```

列标题复选框状态改变。

### ColumnBeforeResize

```vb
Public Event ColumnBeforeResize(ByVal ColumnHeader As LvwColumnHeader, ByRef Cancel As Boolean)
```

列宽即将调整，可取消。

### ColumnAfterResize

```vb
Public Event ColumnAfterResize(ByVal ColumnHeader As LvwColumnHeader, ByRef NewWidth As Single)
```

列宽调整完成。

### ColumnDividerDblClick

```vb
Public Event ColumnDividerDblClick(ByVal ColumnHeader As LvwColumnHeader, ByRef Cancel As Boolean)
```

列分隔线被双击。

### ColumnBeforeDrag

```vb
Public Event ColumnBeforeDrag(ByVal ColumnHeader As LvwColumnHeader)
```

列标题开始拖动。

### ColumnAfterDrag

```vb
Public Event ColumnAfterDrag(ByVal ColumnHeader As LvwColumnHeader, ByVal NewPosition As Long, ByRef Cancel As Boolean)
```

列标题拖动完成。

### ColumnDropDown

```vb
Public Event ColumnDropDown(ByVal ColumnHeader As LvwColumnHeader)
```

列标题下拉按钮被点击。

### ColumnChevronPushed

```vb
Public Event ColumnChevronPushed(ByVal ColumnHeader As LvwColumnHeader)
```

列折叠按钮被点击。

### ColumnFilterChanged

```vb
Public Event ColumnFilterChanged(ByVal ColumnHeader As LvwColumnHeader)
```

列筛选条件变更。

### ColumnFilterButtonClick

```vb
Public Event ColumnFilterButtonClick(ByVal ColumnHeader As LvwColumnHeader, ByRef RaiseFilterChanged As Boolean, ByVal ButtonLeft As Long, ByVal ButtonTop As Long, ByVal ButtonRight As Long, ByVal ButtonBottom As Long)
```

列筛选按钮被点击。

### BeforeFilterEdit

```vb
Public Event BeforeFilterEdit(ByVal ColumnHeader As LvwColumnHeader, ByVal hWndFilterEdit As LongPtr)
```

列筛选编辑前触发。

### AfterFilterEdit

```vb
Public Event AfterFilterEdit(ByVal ColumnHeader As LvwColumnHeader)
```

列筛选编辑后触发。

### GetEmptyMarkup

```vb
Public Event GetEmptyMarkup(ByRef Text As String, ByRef Center As Boolean)
```

列表为空时请求标记文本。

### GroupCollapsedChanged

```vb
Public Event GroupCollapsedChanged(ByVal Group As LvwGroup)
```

分组折叠状态变更。

### GroupSelectedChanged

```vb
Public Event GroupSelectedChanged(ByVal Group As LvwGroup)
```

分组选中状态变更。

### GroupLinkClick

```vb
Public Event GroupLinkClick(ByVal Group As LvwGroup)
```

分组链接被点击。

### BeginMarqueeSelection

```vb
Public Event BeginMarqueeSelection(ByRef Cancel As Boolean)
```

框选开始，可取消。

### BeforeScroll

```vb
Public Event BeforeScroll(ByVal DeltaX As Single, ByVal DeltaY As Single)
```

即将滚动前触发。

### AfterScroll

```vb
Public Event AfterScroll(ByVal DeltaX As Single, ByVal DeltaY As Single)
```

滚动完成后触发。

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

## 子对象

### LvwColumnHeader

列标题对象。

#### 属性

| 名称 | 签名 | 说明 |
|------|------|------|
| Index | `Property Get Index() As Long` | 索引。只读 |
| Key | `Property Get Key() As String` / `Property Let Key(ByVal Value As String)` | 键值 |
| Tag | `Property Get Tag() As Variant` / `Property Let Tag(ByVal Value As Variant)` / `Property Set Tag(ByVal Value As Variant)` | 自定义数据 |
| Text | `Property Get Text() As String` / `Property Let Text(ByVal Value As String)` | 标题文本 |
| Icon | `Property Get Icon() As Variant` / `Property Let Icon(ByVal Value As Variant)` | 图标 |
| IconIndex | `Property Get IconIndex() As Long` | 图标索引。只读 |
| Width | `Property Get Width() As Single` / `Property Let Width(ByVal Value As Single)` | 列宽 |
| Alignment | `Property Get Alignment() As LvwColumnHeaderAlignmentConstants` / `Property Let Alignment(ByVal Value As LvwColumnHeaderAlignmentConstants)` | 对齐方式 |
| Position | `Property Get Position() As Long` / `Property Let Position(ByVal Value As Long)` | 位置 |
| SortArrow | `Property Get SortArrow() As LvwColumnHeaderSortArrowConstants` / `Property Let SortArrow(ByVal Value As LvwColumnHeaderSortArrowConstants)` | 排序箭头 |
| IconOnRight | `Property Get IconOnRight() As Boolean` / `Property Let IconOnRight(ByVal Value As Boolean)` | 图标在右侧 |
| Resizable | `Property Get Resizable() As Boolean` / `Property Let Resizable(ByVal Value As Boolean)` | 是否可调整大小 |
| SplitButton | `Property Get SplitButton() As Boolean` / `Property Let SplitButton(ByVal Value As Boolean)` | 是否显示分割按钮 |
| CheckBox | `Property Get CheckBox() As Boolean` / `Property Let CheckBox(ByVal Value As Boolean)` | 是否显示复选框 |
| Checked | `Property Get Checked() As Boolean` / `Property Let Checked(ByVal Value As Boolean)` | 复选框选中状态 |
| Bold | `Property Get Bold() As Boolean` / `Property Let Bold(ByVal Value As Boolean)` | 是否粗体 |
| ForeColor | `Property Get ForeColor() As OLE_COLOR` / `Property Let ForeColor(ByVal Value As OLE_COLOR)` | 前景色 |
| ToolTipText | `Property Get ToolTipText() As String` / `Property Let ToolTipText(ByVal Value As String)` | 工具提示文本 |
| ToolTipTextFilterBtn | `Property Get ToolTipTextFilterBtn() As String` / `Property Let ToolTipTextFilterBtn(ByVal Value As String)` | 筛选按钮工具提示 |
| ToolTipTextDropDown | `Property Get ToolTipTextDropDown() As String` / `Property Let ToolTipTextDropDown(ByVal Value As String)` | 下拉按钮工具提示 |
| FilterType | `Property Get FilterType() As LvwColumnHeaderFilterTypeConstants` / `Property Let FilterType(ByVal Value As LvwColumnHeaderFilterTypeConstants)` | 筛选类型 |
| FilterValue | `Property Get FilterValue() As Variant` / `Property Let FilterValue(ByVal Value As Variant)` | 筛选值 |
| Left | `Property Get Left() As Single` / `Property Let Left(ByVal Value As Single)` | 左边距 |

#### 方法

| 名称 | 签名 | 说明 |
|------|------|------|
| AutoSize | `Public Sub AutoSize(ByVal Value As LvwColumnHeaderAutoSizeConstants)` | 自动调整列宽 |
| EditFilter | `Public Sub EditFilter()` | 编辑筛选条件 |
| ClearFilter | `Public Sub ClearFilter()` | 清除筛选条件 |
| SubItemIndex | `Public Function SubItemIndex() As Long` | 获取对应的子项索引 |

### LvwColumnHeaders

列标题集合。

#### 属性

| 名称 | 签名 | 说明 |
|------|------|------|
| Item | `Property Get Item(ByVal Index As Variant) As LvwColumnHeader` | 按索引获取列标题 |
| ItemFromPosition | `Property Get ItemFromPosition(ByVal Position As Long) As LvwColumnHeader` | 按位置获取列标题 |
| Count | `Property Get Count() As Long` | 列标题数量。只读 |

#### 方法

| 名称 | 签名 | 说明 |
|------|------|------|
| Add | `Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Text As String, Optional ByVal Width As Variant, Optional ByVal Alignment As LvwColumnHeaderAlignmentConstants, Optional ByVal Icon As Variant) As LvwColumnHeader` | 添加列标题 |
| Exists | `Public Function Exists(ByVal Index As Variant) As Boolean` | 检查列标题是否存在 |
| Clear | `Public Sub Clear()` | 清除所有列标题 |
| Remove | `Public Sub Remove(ByVal Index As Variant)` | 移除列标题 |
| NewEnum | `Public Function NewEnum() As IEnumVARIANT` | 枚举器 |

### LvwListItem

列表项对象。

#### 属性

| 名称 | 签名 | 说明 |
|------|------|------|
| Index | `Property Get Index() As Long` | 索引。只读 |
| Key | `Property Get Key() As String` / `Property Let Key(ByVal Value As String)` | 键值 |
| Tag | `Property Get Tag() As Variant` / `Property Let Tag(ByVal Value As Variant)` / `Property Set Tag(ByVal Value As Variant)` | 自定义数据 |
| Text | `Property Get Text() As String` / `Property Let Text(ByVal Value As String)` | 文本 |
| Icon | `Property Get Icon() As Variant` / `Property Let Icon(ByVal Value As Variant)` | 大图标 |
| IconIndex | `Property Get IconIndex() As Long` | 大图标索引。只读 |
| SmallIcon | `Property Get SmallIcon() As Variant` / `Property Let SmallIcon(ByVal Value As Variant)` | 小图标 |
| SmallIconIndex | `Property Get SmallIconIndex() As Long` | 小图标索引。只读 |
| Indentation | `Property Get Indentation() As Long` / `Property Let Indentation(ByVal Value As Long)` | 缩进 |
| Selected | `Property Get Selected() As Boolean` / `Property Let Selected(ByVal Value As Boolean)` | 是否选中 |
| Checked | `Property Get Checked() As Boolean` / `Property Let Checked(ByVal Value As Boolean)` | 复选框状态 |
| Ghosted | `Property Get Ghosted() As Boolean` / `Property Let Ghosted(ByVal Value As Boolean)` | 是否幻影显示 |
| Hot | `Property Get Hot() As Boolean` / `Property Let Hot(ByVal Value As Boolean)` | 是否为热项 |
| Bold | `Property Get Bold() As Boolean` / `Property Let Bold(ByVal Value As Boolean)` | 是否粗体 |
| ForeColor | `Property Get ForeColor() As OLE_COLOR` / `Property Let ForeColor(ByVal Value As OLE_COLOR)` | 前景色 |
| ToolTipText | `Property Get ToolTipText() As String` / `Property Let ToolTipText(ByVal Value As String)` | 工具提示文本 |
| Left | `Property Get Left() As Single` / `Property Let Left(ByVal Value As Single)` | 左边距 |
| Top | `Property Get Top() As Single` / `Property Let Top(ByVal Value As Single)` | 顶边距 |
| Width | `Property Get Width() As Single` / `Property Let Width(ByVal Value As Single)` | 宽度 |
| Height | `Property Get Height() As Single` / `Property Let Height(ByVal Value As Single)` | 高度 |
| Visible | `Property Get Visible() As Boolean` | 是否可见。只读 |
| TileViewIndices | `Property Get TileViewIndices() As Variant` / `Property Let TileViewIndices(ByVal ArgList As Variant)` | 平铺视图子项列索引 |
| Group | `Property Get Group() As LvwGroup` / `Property Let Group(ByVal Value As LvwGroup)` / `Property Set Group(ByVal Value As LvwGroup)` | 所属分组 |
| WorkArea | `Property Get WorkArea() As LvwWorkArea` | 所属工作区域。只读 |
| ListSubItems | `Property Get ListSubItems() As LvwListSubItems` | 子项集合。只读 |
| SubItems | `Property Get SubItems(ByVal Index As Integer) As String` / `Property Let SubItems(ByVal Index As Integer, ByVal Value As String)` | 按索引获取或设置子项文本 |

#### 方法

| 名称 | 签名 | 说明 |
|------|------|------|
| EnsureVisible | `Public Sub EnsureVisible()` | 确保项可见 |
| CreateDragImage | `Public Function CreateDragImage(Optional ByRef X As Single, Optional ByRef Y As Single) As LongPtr` | 创建拖动图像 |

### LvwListItems

列表项集合。

#### 属性

| 名称 | 签名 | 说明 |
|------|------|------|
| Item | `Property Get Item(ByVal Index As Variant) As LvwListItem` | 按索引获取列表项 |
| Count | `Property Get Count() As Long` | 列表项数量。只读 |

#### 方法

| 名称 | 签名 | 说明 |
|------|------|------|
| Add | `Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Text As String, Optional ByVal Icon As Variant, Optional ByVal SmallIcon As Variant) As LvwListItem` | 添加列表项 |
| Exists | `Public Function Exists(ByVal Index As Variant) As Boolean` | 检查列表项是否存在 |
| Clear | `Public Sub Clear()` | 清除所有列表项 |
| Remove | `Public Sub Remove(ByVal Index As Variant)` | 移除列表项 |
| NewEnum | `Public Function NewEnum() As IEnumVARIANT` | 枚举器 |

### LvwListSubItem

列表子项对象。

#### 属性

| 名称 | 签名 | 说明 |
|------|------|------|
| Index | `Property Get Index() As Long` | 索引。只读 |
| Key | `Property Get Key() As String` | 键值。只读 |
| Tag | `Property Get Tag() As Variant` / `Property Let Tag(ByVal Value As Variant)` / `Property Set Tag(ByVal Value As Variant)` | 自定义数据 |
| Text | `Property Get Text() As String` / `Property Let Text(ByVal Value As String)` | 文本 |
| ReportIcon | `Property Get ReportIcon() As Variant` / `Property Let ReportIcon(ByVal Value As Variant)` | 报表视图图标 |
| ReportIconIndex | `Property Get ReportIconIndex() As Long` | 报表视图图标索引。只读 |
| Bold | `Property Get Bold() As Boolean` / `Property Let Bold(ByVal Value As Boolean)` | 是否粗体 |
| ForeColor | `Property Get ForeColor() As OLE_COLOR` / `Property Let ForeColor(ByVal Value As OLE_COLOR)` | 前景色 |
| ToolTipText | `Property Get ToolTipText() As String` / `Property Let ToolTipText(ByVal Value As String)` | 工具提示文本 |
| Left | `Property Get Left() As Single` / `Property Let Left(ByVal Value As Single)` | 左边距 |
| Top | `Property Get Top() As Single` / `Property Let Top(ByVal Value As Single)` | 顶边距 |
| Width | `Property Get Width() As Single` / `Property Let Width(ByVal Value As Single)` | 宽度 |
| Height | `Property Get Height() As Single` / `Property Let Height(ByVal Value As Single)` | 高度 |

### LvwListSubItems

列表子项集合。

#### 属性

| 名称 | 签名 | 说明 |
|------|------|------|
| Item | `Property Get Item(ByVal Index As Variant) As LvwListSubItem` | 按索引获取子项 |
| Count | `Property Get Count() As Long` | 子项数量。只读 |

#### 方法

| 名称 | 签名 | 说明 |
|------|------|------|
| Add | `Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Text As String, Optional ByVal ReportIcon As Variant, Optional ByVal ToolTipText As String) As LvwListSubItem` | 添加子项 |
| Exists | `Public Function Exists(ByVal Index As Variant) As Boolean` | 检查子项是否存在 |
| Clear | `Public Sub Clear()` | 清除所有子项 |
| Remove | `Public Sub Remove(ByVal Index As Variant)` | 移除子项 |
| NewEnum | `Public Function NewEnum() As IEnumVARIANT` | 枚举器 |

### LvwGroup

分组对象。

#### 属性

| 名称 | 签名 | 说明 |
|------|------|------|
| Index | `Property Get Index() As Long` | 索引。只读 |
| Key | `Property Get Key() As String` / `Property Let Key(ByVal Value As String)` | 键值 |
| Tag | `Property Get Tag() As Variant` / `Property Let Tag(ByVal Value As Variant)` / `Property Set Tag(ByVal Value As Variant)` | 自定义数据 |
| ID | `Property Get ID() As Long` | 分组 ID。只读 |
| Header | `Property Get Header() As String` / `Property Let Header(ByVal Value As String)` | 分组标题 |
| HeaderAlignment | `Property Get HeaderAlignment() As LvwGroupHeaderAlignmentConstants` / `Property Let HeaderAlignment(ByVal Value As LvwGroupHeaderAlignmentConstants)` | 标题对齐方式 |
| Footer | `Property Get Footer() As String` / `Property Let Footer(ByVal Value As String)` | 分组页脚 |
| FooterAlignment | `Property Get FooterAlignment() As LvwGroupFooterAlignmentConstants` / `Property Let FooterAlignment(ByVal Value As LvwGroupFooterAlignmentConstants)` | 页脚对齐方式 |
| Hint | `Property Get Hint() As String` / `Property Let Hint(ByVal Value As String)` | 提示文本 |
| Link | `Property Get Link() As String` / `Property Let Link(ByVal Value As String)` | 链接文本 |
| SubsetLink | `Property Get SubsetLink() As String` / `Property Let SubsetLink(ByVal Value As String)` | 子集链接文本 |
| Collapsible | `Property Get Collapsible() As Boolean` / `Property Let Collapsible(ByVal Value As Boolean)` | 是否可折叠 |
| Collapsed | `Property Get Collapsed() As Boolean` / `Property Let Collapsed(ByVal Value As Boolean)` | 是否已折叠 |
| ShowHeader | `Property Get ShowHeader() As Boolean` / `Property Let ShowHeader(ByVal Value As Boolean)` | 是否显示标题 |
| Selected | `Property Get Selected() As Boolean` / `Property Let Selected(ByVal Value As Boolean)` | 是否选中 |
| Subseted | `Property Get Subseted() As Boolean` / `Property Let Subseted(ByVal Value As Boolean)` | 是否为子集 |
| SubsetLinkSelected | `Property Get SubsetLinkSelected() As Boolean` / `Property Let SubsetLinkSelected(ByVal Value As Boolean)` | 子集链接是否选中 |
| Icon | `Property Get Icon() As Variant` / `Property Let Icon(ByVal Value As Variant)` | 图标 |
| IconIndex | `Property Get IconIndex() As Long` | 图标索引。只读 |
| Position | `Property Get Position() As Long` / `Property Let Position(ByVal Value As Long)` | 位置 |
| Left | `Property Get Left() As Single` / `Property Let Left(ByVal Value As Single)` | 左边距 |
| Top | `Property Get Top() As Single` / `Property Let Top(ByVal Value As Single)` | 顶边距 |
| Width | `Property Get Width() As Single` / `Property Let Width(ByVal Value As Single)` | 宽度 |
| Height | `Property Get Height() As Single` / `Property Let Height(ByVal Value As Single)` | 高度 |
| ListItemCount | `Property Get ListItemCount() As Long` | 列表项数量。只读 |
| ListItemIndices | `Property Get ListItemIndices() As Collection` | 列表项索引集合。只读 |

### LvwGroups

分组集合。

#### 属性

| 名称 | 签名 | 说明 |
|------|------|------|
| Item | `Property Get Item(ByVal Index As Variant) As LvwGroup` | 按索引获取分组 |
| Count | `Property Get Count() As Long` | 分组数量。只读 |
| Sorted | `Property Get Sorted() As Boolean` / `Property Let Sorted(ByVal Value As Boolean)` | 是否排序 |
| SortOrder | `Property Get SortOrder() As LvwSortOrderConstants` / `Property Let SortOrder(ByVal Value As LvwSortOrderConstants)` | 排序顺序 |
| SortType | `Property Get SortType() As LvwSortTypeConstants` / `Property Let SortType(ByVal Value As LvwSortTypeConstants)` | 排序类型 |

#### 方法

| 名称 | 签名 | 说明 |
|------|------|------|
| Add | `Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Header As String, Optional ByVal HeaderAlignment As LvwGroupHeaderAlignmentConstants, Optional ByVal Footer As String, Optional ByVal FooterAlignment As LvwGroupFooterAlignmentConstants) As LvwGroup` | 添加分组 |
| Exists | `Public Function Exists(ByVal Index As Variant) As Boolean` | 检查分组是否存在 |
| Clear | `Public Sub Clear()` | 清除所有分组 |
| Remove | `Public Sub Remove(ByVal Index As Variant)` | 移除分组 |
| NewEnum | `Public Function NewEnum() As IEnumVARIANT` | 枚举器 |

### LvwVirtualListItem

虚拟列表项对象。

#### 属性

| 名称 | 签名 | 说明 |
|------|------|------|
| Index | `Property Get Index() As Long` | 索引。只读 |
| Text | `Property Get Text() As String` | 文本。只读 |
| Indentation | `Property Get Indentation() As Long` | 缩进。只读 |
| Selected | `Property Get Selected() As Boolean` / `Property Let Selected(ByVal Value As Boolean)` | 是否选中 |
| Checked | `Property Get Checked() As Boolean` | 复选框状态。只读 |
| Hot | `Property Get Hot() As Boolean` / `Property Let Hot(ByVal Value As Boolean)` | 是否为热项 |
| Left | `Property Get Left() As Single` / `Property Let Left(ByVal Value As Single)` | 左边距 |
| Top | `Property Get Top() As Single` / `Property Let Top(ByVal Value As Single)` | 顶边距 |
| Width | `Property Get Width() As Single` / `Property Let Width(ByVal Value As Single)` | 宽度 |
| Height | `Property Get Height() As Single` / `Property Let Height(ByVal Value As Single)` | 高度 |
| Visible | `Property Get Visible() As Boolean` | 是否可见。只读 |
| SubItems | `Property Get SubItems(ByVal Index As Integer) As String` | 按索引获取子项文本。只读 |

#### 方法

| 名称 | 签名 | 说明 |
|------|------|------|
| EnsureVisible | `Public Sub EnsureVisible()` | 确保项可见 |
| CreateDragImage | `Public Function CreateDragImage(Optional ByRef X As Single, Optional ByRef Y As Single) As LongPtr` | 创建拖动图像 |

### LvwVirtualListItems

虚拟列表项集合。

#### 属性

| 名称 | 签名 | 说明 |
|------|------|------|
| Item | `Property Get Item(ByVal Index As Long) As LvwVirtualListItem` | 按索引获取虚拟列表项 |
| Count | `Property Get Count() As Long` | 虚拟列表项数量。只读 |

#### 方法

| 名称 | 签名 | 说明 |
|------|------|------|
| Exists | `Public Function Exists(ByVal Index As Long) As Boolean` | 检查虚拟列表项是否存在 |
| NewEnum | `Public Function NewEnum() As IEnumVARIANT` | 枚举器 |

### LvwWorkArea

工作区域对象。

#### 属性

| 名称 | 签名 | 说明 |
|------|------|------|
| Index | `Property Get Index() As Long` | 索引。只读 |
| Left | `Property Get Left() As Single` / `Property Let Left(ByVal Value As Single)` | 左边距 |
| Top | `Property Get Top() As Single` / `Property Let Top(ByVal Value As Single)` | 顶边距 |
| Width | `Property Get Width() As Single` / `Property Let Width(ByVal Value As Single)` | 宽度 |
| Height | `Property Get Height() As Single` / `Property Let Height(ByVal Value As Single)` | 高度 |
| ListItemIndices | `Property Get ListItemIndices() As Collection` | 工作区域中的列表项索引集合。只读 |

### LvwWorkAreas

工作区域集合。

#### 属性

| 名称 | 签名 | 说明 |
|------|------|------|
| Item | `Property Get Item(ByVal Index As Long) As LvwWorkArea` | 按索引获取工作区域 |
| Count | `Property Get Count() As Long` | 工作区域数量。只读 |

#### 方法

| 名称 | 签名 | 说明 |
|------|------|------|
| Add | `Public Function Add(ByVal Left As Single, ByVal Top As Single, ByVal Width As Single, ByVal Height As Single, Optional ByVal Index As Long) As LvwWorkArea` | 添加工作区域 |
| Exists | `Public Function Exists(ByVal Index As Long) As Boolean` | 检查工作区域是否存在 |
| Clear | `Public Sub Clear()` | 清除所有工作区域 |
| Remove | `Public Sub Remove(ByVal Index As Long)` | 移除工作区域 |
| NewEnum | `Public Function NewEnum() As IEnumVARIANT` | 枚举器 |

## 代码示例

### 报表视图基本用法

```vb
' 设置报表视图
ListView1.View = LvwViewReport

' 添加列标题
With ListView1.ColumnHeaders
    .Add , , "姓名", 120
    .Add , , "年龄", 60, LvwColumnHeaderAlignmentCenter
    .Add , , "城市", 100
End With

' 添加列表项
Dim li As LvwListItem
Set li = ListView1.ListItems.Add(, , "张三")
li.SubItems(1) = "28"
li.SubItems(2) = "北京"

Set li = ListView1.ListItems.Add(, , "李四")
li.SubItems(1) = "35"
li.SubItems(2) = "上海"
```

### 分组视图

```vb
' 启用分组
ListView1.GroupView = True
ListView1.View = LvwViewReport

' 添加分组
Dim grp1 As LvwGroup, grp2 As LvwGroup
Set grp1 = ListView1.Groups.Add(, , "一组")
Set grp2 = ListView1.Groups.Add(, , "二组")

' 将项分配到分组
Set ListView1.ListItems(1).Group = grp1
Set ListView1.ListItems(2).Group = grp2
```

### 虚拟模式

```vb
' 启用虚拟模式
ListView1.VirtualMode = True
ListView1.VirtualItemCount = 10000

' 在 GetVirtualItem 事件中提供数据
Private Sub ListView1_GetVirtualItem(ByVal ItemIndex As Long, _
    ByVal SubItemIndex As Long, _
    ByVal VirtualProperty As LvwVirtualPropertyConstants, _
    ByRef Value As Variant)
    If VirtualProperty = LvwVirtualPropertyText Then
        If SubItemIndex = 0 Then
            Value = "Item " & ItemIndex
        Else
            Value = "Sub " & SubItemIndex
        End If
    End If
End Sub
```

### 排序和筛选

```vb
' 排序
ListView1.SortKey = 0
ListView1.SortOrder = LvwSortOrderAscending
ListView1.SortType = LvwSortTypeText
ListView1.Sorted = True

' 设置排序箭头
ListView1.ColumnHeaders(1).SortArrow = LvwColumnHeaderSortArrowDown

' 启用列筛选
ListView1.UseColumnFilterBar = True
```