---
title: ListView Control
description: ListView Control - VBCCR Developer Reference, complete API documentation based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4bd0518c-d50f-4dd6-a0c8-ca8b08b49366'
  PropagateID: '4bd0518c-d50f-4dd6-a0c8-ca8b08b49366'
  ReservedCode1: '5a4e73c8-0747-44d0-9766-ad8ea080ed0f'
  ReservedCode2: '5a4e73c8-0747-44d0-9766-ad8ea080ed0f'
---

# ListView Control

Wraps the SysListView32 system list view control, supporting large icon, small icon, list, report, and tile views, as well as grouping, virtual mode, column filtering, and other advanced features.

## Enumerations

### LvwViewConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwViewIcon | 0 | Large icon view |
| LvwViewSmallIcon | 1 | Small icon view |
| LvwViewList | 2 | List view |
| LvwViewReport | 3 | Report view |
| LvwViewTile | 4 | Tile view |

### LvwArrangeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwArrangeNone | 0 | No arrangement |
| LvwArrangeAutoLeft | 1 | Auto arrange left |
| LvwArrangeAutoTop | 2 | Auto arrange top |
| LvwArrangeLeft | 3 | Arrange left |
| LvwArrangeTop | 4 | Arrange top |

### LvwColumnHeaderAlignmentConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwColumnHeaderAlignmentLeft | 0 | Left aligned |
| LvwColumnHeaderAlignmentRight | 1 | Right aligned |
| LvwColumnHeaderAlignmentCenter | 2 | Centered |

### LvwColumnHeaderSortArrowConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwColumnHeaderSortArrowNone | 0 | No sort arrow |
| LvwColumnHeaderSortArrowDown | 1 | Down arrow (ascending) |
| LvwColumnHeaderSortArrowUp | 2 | Up arrow (descending) |

### LvwColumnHeaderAutoSizeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwColumnHeaderAutoSizeToItems | 0 | Auto size to items |
| LvwColumnHeaderAutoSizeToHeader | 1 | Auto size to header |

### LvwColumnHeaderFilterTypeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwColumnHeaderFilterTypeText | 0 | Text filter |
| LvwColumnHeaderFilterTypeNumber | 1 | Number filter |

### LvwLabelEditConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwLabelEditAutomatic | 0 | Automatic label edit |
| LvwLabelEditManual | 1 | Manual label edit |
| LvwLabelEditDisabled | 2 | Label edit disabled |

### LvwSortOrderConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwSortOrderAscending | 0 | Ascending order |
| LvwSortOrderDescending | 1 | Descending order |

### LvwSortTypeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwSortTypeBinary | 0 | Binary sort |
| LvwSortTypeText | 1 | Text sort |
| LvwSortTypeNumeric | 2 | Numeric sort |
| LvwSortTypeCurrency | 3 | Currency sort |
| LvwSortTypeDate | 4 | Date sort |
| LvwSortTypeLogical | 5 | Logical sort |

### LvwPictureAlignmentConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwPictureAlignmentTopLeft | 0 | Top left |
| LvwPictureAlignmentTopRight | 1 | Top right |
| LvwPictureAlignmentBottomLeft | 2 | Bottom left |
| LvwPictureAlignmentBottomRight | 3 | Bottom right |
| LvwPictureAlignmentCenter | 4 | Centered |
| LvwPictureAlignmentTile | 5 | Tiled |

### LvwGroupHeaderAlignmentConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwGroupHeaderAlignmentLeft | 0 | Left aligned |
| LvwGroupHeaderAlignmentRight | 1 | Right aligned |
| LvwGroupHeaderAlignmentCenter | 2 | Centered |

### LvwGroupFooterAlignmentConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwGroupFooterAlignmentLeft | 0 | Left aligned |
| LvwGroupFooterAlignmentRight | 1 | Right aligned |
| LvwGroupFooterAlignmentCenter | 2 | Centered |

### LvwVisualThemeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwVisualThemeStandard | 0 | Standard theme |
| LvwVisualThemeExplorer | 1 | Explorer theme |

### LvwVirtualPropertyConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwVirtualPropertyText | 1 | Text property |
| LvwVirtualPropertyIcon | 2 | Icon property |
| LvwVirtualPropertyIndentation | 4 | Indentation property |
| LvwVirtualPropertyToolTipText | 8 | ToolTip text property |
| LvwVirtualPropertyBold | 16 | Bold property |
| LvwVirtualPropertyForeColor | 32 | Fore color property |
| LvwVirtualPropertyChecked | 64 | Checked property |

### LvwFindDirectionConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LvwFindDirectionUndefined | 0 | Undefined |
| LvwFindDirectionPrior | vbKeyPageUp | Page up direction |
| LvwFindDirectionNext | vbKeyPageDown | Page down direction |
| LvwFindDirectionEnd | vbKeyEnd | End direction |
| LvwFindDirectionHome | vbKeyHome | Home direction |
| LvwFindDirectionLeft | vbKeyLeft | Left direction |
| LvwFindDirectionUp | vbKeyUp | Up direction |
| LvwFindDirectionRight | vbKeyRight | Right direction |
| LvwFindDirectionDown | vbKeyDown | Down direction |

### CCBorderStyleConstants

See common enumerations.

### CCAppearanceConstants

See common enumerations.

### CCMousePointerConstants

See common enumerations.

### CCIMEModeConstants

See common enumerations.

### CCBackStyleConstants

See common enumerations.

### CCRightToLeftModeConstants

See common enumerations.

### CCScrollOrientationConstants

See common enumerations.

### OLEDropModeConstants

See common enumerations.

## Properties

### View

```vb
Property Get View() As LvwViewConstants
Property Let View(ByVal Value As LvwViewConstants)
```

View mode.

### Arrange

```vb
Property Get Arrange() As LvwArrangeConstants
Property Let Arrange(ByVal Value As LvwArrangeConstants)
```

Icon arrangement.

### SortKey

```vb
Property Get SortKey() As Integer
Property Let SortKey(ByVal Value As Integer)
```

Sort key column index.

### SortOrder

```vb
Property Get SortOrder() As LvwSortOrderConstants
Property Let SortOrder(ByVal Value As LvwSortOrderConstants)
```

Sort order.

### SortType

```vb
Property Get SortType() As LvwSortTypeConstants
Property Let SortType(ByVal Value As LvwSortTypeConstants)
```

Sort type.

### Sorted

```vb
Property Get Sorted() As Boolean
Property Let Sorted(ByVal Value As Boolean)
```

Whether sorting is enabled.

### LabelEdit

```vb
Property Get LabelEdit() As LvwLabelEditConstants
Property Let LabelEdit(ByVal Value As LvwLabelEditConstants)
```

Label edit mode.

### LabelWrap

```vb
Property Get LabelWrap() As Boolean
Property Let LabelWrap(ByVal Value As Boolean)
```

Whether label text wrapping is allowed.

### MultiSelect

```vb
Property Get MultiSelect() As Boolean
Property Let MultiSelect(ByVal Value As Boolean)
```

Whether multiple selection is allowed.

### FullRowSelect

```vb
Property Get FullRowSelect() As Boolean
Property Let FullRowSelect(ByVal Value As Boolean)
```

Whether full row selection is enabled.

### GridLines

```vb
Property Get GridLines() As Boolean
Property Let GridLines(ByVal Value As Boolean)
```

Whether grid lines are displayed.

### Checkboxes

```vb
Property Get Checkboxes() As Boolean
Property Let Checkboxes(ByVal Value As Boolean)
```

Whether checkboxes are displayed.

### HideSelection

```vb
Property Get HideSelection() As Boolean
Property Let HideSelection(ByVal Value As Boolean)
```

Whether the selection is hidden when the control loses focus.

### HideColumnHeaders

```vb
Property Get HideColumnHeaders() As Boolean
Property Let HideColumnHeaders(ByVal Value As Boolean)
```

Whether column headers are hidden.

### AllowColumnReorder

```vb
Property Get AllowColumnReorder() As Boolean
Property Let AllowColumnReorder(ByVal Value As Boolean)
```

Whether column reordering by dragging is allowed.

### AllowColumnCheckboxes

```vb
Property Get AllowColumnCheckboxes() As Boolean
Property Let AllowColumnCheckboxes(ByVal Value As Boolean)
```

Whether column checkboxes are allowed.

### AllowDropFiles

```vb
Property Get AllowDropFiles() As Boolean
Property Let AllowDropFiles(ByVal Value As Boolean)
```

Whether dropping files is allowed.

### ShowInfoTips

```vb
Property Get ShowInfoTips() As Boolean
Property Let ShowInfoTips(ByVal Value As Boolean)
```

Whether info tips are displayed.

### ShowLabelTips

```vb
Property Get ShowLabelTips() As Boolean
Property Let ShowLabelTips(ByVal Value As Boolean)
```

Whether label tips are displayed.

### ShowColumnTips

```vb
Property Get ShowColumnTips() As Boolean
Property Let ShowColumnTips(ByVal Value As Boolean)
```

Whether column tips are displayed.

### DoubleBuffer

```vb
Property Get DoubleBuffer() As Boolean
Property Let DoubleBuffer(ByVal Value As Boolean)
```

Whether double buffering is enabled.

### VisualStyles

```vb
Property Get VisualStyles() As Boolean
Property Let VisualStyles(ByVal Value As Boolean)
```

Whether visual styles are enabled.

### VisualTheme

```vb
Property Get VisualTheme() As LvwVisualThemeConstants
Property Let VisualTheme(ByVal Value As LvwVisualThemeConstants)
```

Visual theme.

### HoverSelection

```vb
Property Get HoverSelection() As Boolean
Property Let HoverSelection(ByVal Value As Boolean)
```

Whether hover selection is enabled.

### HoverSelectionTime

```vb
Property Get HoverSelectionTime() As Long
Property Let HoverSelectionTime(ByVal Value As Long)
```

Hover selection delay time (milliseconds).

### HotTracking

```vb
Property Get HotTracking() As Boolean
Property Let HotTracking(ByVal Value As Boolean)
```

Whether hot tracking is enabled.

### HighlightHot

```vb
Property Get HighlightHot() As Boolean
Property Let HighlightHot(ByVal Value As Boolean)
```

Whether hot items are highlighted.

### UnderlineHot

```vb
Property Get UnderlineHot() As Boolean
Property Let UnderlineHot(ByVal Value As Boolean)
```

Whether hot items are underlined.

### InsertMarkColor

```vb
Property Get InsertMarkColor() As OLE_COLOR
Property Let InsertMarkColor(ByVal Value As OLE_COLOR)
```

Insert mark color.

### TextBackground

```vb
Property Get TextBackground() As CCBackStyleConstants
Property Let TextBackground(ByVal Value As CCBackStyleConstants)
```

Text background style. See common enumerations.

### ClickableColumnHeaders

```vb
Property Get ClickableColumnHeaders() As Boolean
Property Let ClickableColumnHeaders(ByVal Value As Boolean)
```

Whether column headers are clickable.

### HighlightColumnHeaders

```vb
Property Get HighlightColumnHeaders() As Boolean
Property Let HighlightColumnHeaders(ByVal Value As Boolean)
```

Whether column headers are highlighted.

### TrackSizeColumnHeaders

```vb
Property Get TrackSizeColumnHeaders() As Boolean
Property Let TrackSizeColumnHeaders(ByVal Value As Boolean)
```

Whether column header size tracking is enabled.

### ResizableColumnHeaders

```vb
Property Get ResizableColumnHeaders() As Boolean
Property Let ResizableColumnHeaders(ByVal Value As Boolean)
```

Whether column headers are resizable.

### Picture

```vb
Property Get Picture() As IPictureDisp
Property Let Picture(ByVal Value As IPictureDisp)
Property Set Picture(ByVal Value As IPictureDisp)
```

Background picture.

### PictureAlignment

```vb
Property Get PictureAlignment() As LvwPictureAlignmentConstants
Property Let PictureAlignment(ByVal Value As LvwPictureAlignmentConstants)
```

Background picture alignment.

### PictureWatermark

```vb
Property Get PictureWatermark() As Boolean
Property Let PictureWatermark(ByVal Value As Boolean)
```

Whether the background picture is used as a watermark.

### TileViewLines

```vb
Property Get TileViewLines() As Long
Property Let TileViewLines(ByVal Value As Long)
```

Number of text lines in tile view.

### SnapToGrid

```vb
Property Get SnapToGrid() As Boolean
Property Let SnapToGrid(ByVal Value As Boolean)
```

Whether snap to grid is enabled.

### GroupView

```vb
Property Get GroupView() As Boolean
Property Let GroupView(ByVal Value As Boolean)
```

Whether group view is enabled.

### GroupSubsetCount

```vb
Property Get GroupSubsetCount() As Long
Property Let GroupSubsetCount(ByVal Value As Long)
```

Number of items displayed in a group subset.

### UseColumnChevron

```vb
Property Get UseColumnChevron() As Boolean
Property Let UseColumnChevron(ByVal Value As Boolean)
```

Whether column chevrons are used.

### UseColumnFilterBar

```vb
Property Get UseColumnFilterBar() As Boolean
Property Let UseColumnFilterBar(ByVal Value As Boolean)
```

Whether the column filter bar is used.

### AutoSelectFirstItem

```vb
Property Get AutoSelectFirstItem() As Boolean
Property Let AutoSelectFirstItem(ByVal Value As Boolean)
```

Whether the first item is automatically selected.

### IMEMode

```vb
Property Get IMEMode() As CCIMEModeConstants
Property Let IMEMode(ByVal Value As CCIMEModeConstants)
```

Input method editor mode. See common enumerations.

### VirtualMode

```vb
Property Get VirtualMode() As Boolean
Property Let VirtualMode(ByVal Value As Boolean)
```

Whether virtual mode is enabled.

### VirtualItemCount

```vb
Property Get VirtualItemCount() As Long
Property Let VirtualItemCount(ByVal Value As Long)
```

Total item count in virtual mode.

### VirtualDisabledInfos

```vb
Property Get VirtualDisabledInfos() As LvwVirtualPropertyConstants
Property Let VirtualDisabledInfos(ByVal Value As LvwVirtualPropertyConstants)
```

Disabled property mask in virtual mode.

### ListItems

```vb
Property Get ListItems() As LvwListItems
```

List items collection. Read-only.

### VirtualListItems

```vb
Property Get VirtualListItems() As LvwVirtualListItems
```

Virtual list items collection. Read-only.

### ColumnHeaders

```vb
Property Get ColumnHeaders() As LvwColumnHeaders
```

Column headers collection. Read-only.

### Groups

```vb
Property Get Groups() As LvwGroups
```

Groups collection. Read-only.

### WorkAreas

```vb
Property Get WorkAreas() As LvwWorkAreas
```

Work areas collection. Read-only.

### TopItem

```vb
Property Get TopItem() As LvwListItem
```

First visible item. Read-only.

### SelectedItem

```vb
Property Get SelectedItem() As LvwListItem
Property Let SelectedItem(ByVal Value As LvwListItem)
Property Set SelectedItem(ByVal Value As LvwListItem)
```

Currently selected item.

### HotItem

```vb
Property Get HotItem() As LvwListItem
Property Let HotItem(ByVal Value As LvwListItem)
Property Set HotItem(ByVal Value As LvwListItem)
```

Hot item (the item under the mouse cursor).

### SelectionMark

```vb
Property Get SelectionMark() As LvwListItem
Property Let SelectionMark(ByVal Value As LvwListItem)
Property Set SelectionMark(ByVal Value As LvwListItem)
```

Selection mark item.

### DropHighlight

```vb
Property Get DropHighlight() As LvwListItem
Property Let DropHighlight(ByVal Value As LvwListItem)
Property Set DropHighlight(ByVal Value As LvwListItem)
```

Drop highlight item.

### InsertMark

```vb
Property Get InsertMark(Optional ByRef After As Boolean) As LvwListItem
Property Let InsertMark(Optional ByRef After As Boolean, ByVal Value As LvwListItem)
Property Set InsertMark(Optional ByRef After As Boolean, ByVal Value As LvwListItem)
```

Insert mark item.

### OLEDraggedItem

```vb
Property Get OLEDraggedItem() As LvwListItem
```

The item being dragged during an OLE drag-and-drop operation. Read-only.

### SelectedGroup

```vb
Property Get SelectedGroup() As LvwGroup
Property Let SelectedGroup(ByVal Value As LvwGroup)
Property Set SelectedGroup(ByVal Value As LvwGroup)
```

Currently selected group.

### SelectedColumn

```vb
Property Get SelectedColumn() As LvwColumnHeader
Property Let SelectedColumn(ByVal Value As LvwColumnHeader)
Property Set SelectedColumn(ByVal Value As LvwColumnHeader)
```

Currently selected column.

### ColumnOrder

```vb
Property Get ColumnOrder() As Variant
Property Let ColumnOrder(ByVal ArgList As Variant)
```

Column order array.

### ColumnWidth

```vb
Property Get ColumnWidth() As Single
Property Let ColumnWidth(ByVal Value As Single)
```

Current column width.

### ColumnFilterChangedTimeout

```vb
Property Get ColumnFilterChangedTimeout() As Long
Property Let ColumnFilterChangedTimeout(ByVal Value As Long)
```

Column filter change timeout.

### IconSpacingWidth

```vb
Property Get IconSpacingWidth() As Single
Property Let IconSpacingWidth(ByVal Value As Single)
```

Icon spacing width.

### IconSpacingHeight

```vb
Property Get IconSpacingHeight() As Single
Property Let IconSpacingHeight(ByVal Value As Single)
```

Icon spacing height.

### IncrementalSearchString

```vb
Property Get IncrementalSearchString() As String
```

Incremental search string. Read-only.

### Redraw

```vb
Property Get Redraw() As Boolean
Property Let Redraw(ByVal Value As Boolean)
```

Whether redrawing is enabled.

### BorderStyle

```vb
Property Get BorderStyle() As CCBorderStyleConstants
Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

Border style. See common enumerations.

### BackColor

```vb
Property Get BackColor() As OLE_COLOR
Property Let BackColor(ByVal Value As OLE_COLOR)
```

Background color.

### ForeColor

```vb
Property Get ForeColor() As OLE_COLOR
Property Let ForeColor(ByVal Value As OLE_COLOR)
```

Foreground color.

### Font

```vb
Property Get Font() As StdFont
Property Let Font(ByVal NewFont As StdFont)
Property Set Font(ByVal NewFont As StdFont)
```

Font.

### Enabled

```vb
Property Get Enabled() As Boolean
Property Let Enabled(ByVal Value As Boolean)
```

Whether the control is enabled.

### Icons

```vb
Property Get Icons() As Variant
Property Set Icons(ByVal Value As Variant)
Property Let Icons(ByVal Value As Variant)
```

Large icon image list.

### SmallIcons

```vb
Property Get SmallIcons() As Variant
Property Set SmallIcons(ByVal Value As Variant)
Property Let SmallIcons(ByVal Value As Variant)
```

Small icon image list.

### ColumnHeaderIcons

```vb
Property Get ColumnHeaderIcons() As Variant
Property Set ColumnHeaderIcons(ByVal Value As Variant)
Property Let ColumnHeaderIcons(ByVal Value As Variant)
```

Column header image list.

### GroupIcons

```vb
Property Get GroupIcons() As Variant
Property Set GroupIcons(ByVal Value As Variant)
Property Let GroupIcons(ByVal Value As Variant)
```

Group header image list.

### OLEDragMode

```vb
Property Get OLEDragMode() As VBRUN.OLEDragConstants
Property Let OLEDragMode(ByVal Value As VBRUN.OLEDragConstants)
```

OLE drag mode.

### OLEDragDropScroll

```vb
Property Get OLEDragDropScroll() As Boolean
Property Let OLEDragDropScroll(ByVal Value As Boolean)
```

Whether automatic scrolling is enabled during OLE drag-and-drop.

### OLEDragDropScrollOrientation

```vb
Property Get OLEDragDropScrollOrientation() As CCScrollOrientationConstants
Property Let OLEDragDropScrollOrientation(ByVal Value As CCScrollOrientationConstants)
```

OLE drag-and-drop auto-scroll orientation. See common enumerations.

### OLEDropMode

```vb
Property Get OLEDropMode() As OLEDropModeConstants
Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)
```

OLE drop mode.

### MousePointer

```vb
Property Get MousePointer() As CCMousePointerConstants
Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

Mouse pointer style. See common enumerations.

### MouseIcon

```vb
Property Get MouseIcon() As IPictureDisp
Property Let MouseIcon(ByVal Value As IPictureDisp)
Property Set MouseIcon(ByVal Value As IPictureDisp)
```

Custom mouse icon.

### HotMousePointer

```vb
Property Get HotMousePointer() As CCMousePointerConstants
Property Let HotMousePointer(ByVal Value As CCMousePointerConstants)
```

Hot item mouse pointer style. See common enumerations.

### HotMouseIcon

```vb
Property Get HotMouseIcon() As IPictureDisp
Property Let HotMouseIcon(ByVal Value As IPictureDisp)
Property Set HotMouseIcon(ByVal Value As IPictureDisp)
```

Hot item custom mouse icon.

### HeaderMousePointer

```vb
Property Get HeaderMousePointer() As CCMousePointerConstants
Property Let HeaderMousePointer(ByVal Value As CCMousePointerConstants)
```

Column header mouse pointer style. See common enumerations.

### HeaderMouseIcon

```vb
Property Get HeaderMouseIcon() As IPictureDisp
Property Let HeaderMouseIcon(ByVal Value As IPictureDisp)
Property Set HeaderMouseIcon(ByVal Value As IPictureDisp)
```

Column header custom mouse icon.

### MouseTrack

```vb
Property Get MouseTrack() As Boolean
Property Let MouseTrack(ByVal Value As Boolean)
```

Whether mouse enter/leave tracking is enabled.

### RightToLeft

```vb
Property Get RightToLeft() As Boolean
Property Let RightToLeft(ByVal Value As Boolean)
```

Right-to-left display direction.

### RightToLeftLayout

```vb
Property Get RightToLeftLayout() As Boolean
Property Let RightToLeftLayout(ByVal Value As Boolean)
```

Right-to-left mirrored layout.

### RightToLeftMode

```vb
Property Get RightToLeftMode() As CCRightToLeftModeConstants
Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

Right-to-left mode. See common enumerations.

### hWnd

```vb
Property Get hWnd() As LongPtr
```

Window handle of the list view control.

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

Window handle of the user control.

### hWndHeader

```vb
Property Get hWndHeader() As LongPtr
```

Window handle of the column header control.

### hWndLabelEdit

```vb
Property Get hWndLabelEdit() As LongPtr
```

Window handle of the label edit box.

### ToolTipText

```vb
Property Get ToolTipText() As String
Property Let ToolTipText(ByVal Value As String)
```

ToolTip text.

### Name

```vb
Property Get Name() As String
```

Control name. Read-only.

### Tag

```vb
Property Get Tag() As String
Property Let Tag(ByVal Value As String)
```

Custom data.

### Parent

```vb
Property Get Parent() As Object
```

Parent object. Read-only.

### Container

```vb
Property Get Container() As Object
Property Set Container(ByVal Value As Object)
```

Container object.

### Left

```vb
Property Get Left() As Single
Property Let Left(ByVal Value As Single)
```

Left edge distance.

### Top

```vb
Property Get Top() As Single
Property Let Top(ByVal Value As Single)
```

Top edge distance.

### Width

```vb
Property Get Width() As Single
Property Let Width(ByVal Value As Single)
```

Width.

### Height

```vb
Property Get Height() As Single
Property Let Height(ByVal Value As Single)
```

Height.

### Visible

```vb
Property Get Visible() As Boolean
Property Let Visible(ByVal Value As Boolean)
```

Whether the control is visible.

### HelpContextID

```vb
Property Get HelpContextID() As Long
Property Let HelpContextID(ByVal Value As Long)
```

Help context ID.

### WhatsThisHelpID

```vb
Property Get WhatsThisHelpID() As Long
Property Let WhatsThisHelpID(ByVal Value As Long)
```

"What's This" help ID.

### DragIcon

```vb
Property Get DragIcon() As IPictureDisp
Property Let DragIcon(ByVal Value As IPictureDisp)
Property Set DragIcon(ByVal Value As IPictureDisp)
```

Drag icon.

### DragMode

```vb
Property Get DragMode() As Integer
Property Let DragMode(ByVal Value As Integer)
```

Drag mode.

## Methods

### Refresh

```vb
Public Sub Refresh()
```

Forces a redraw of the control.

### HitTest

```vb
Public Function HitTest(ByVal X As Single, ByVal Y As Single, Optional ByRef SubItemIndex As Variant) As LvwListItem
```

Hit test; returns the list item at the specified coordinates.

### HitTestInsertMark

```vb
Public Function HitTestInsertMark(ByVal X As Single, ByVal Y As Single, Optional ByRef After As Boolean) As LvwListItem
```

Insert mark hit test; returns the list item at the insertion position.

### FindItem

```vb
Public Function FindItem(ByVal Text As String, Optional ByVal Index As Long, Optional ByVal Partial As Boolean, Optional ByVal Wrap As Boolean) As LvwListItem
```

Finds a list item matching the specified text.

### FindNearestItem

```vb
Public Function FindNearestItem(ByVal X As Single, ByVal Y As Single, Optional ByVal Direction As LvwFindDirectionConstants) As LvwListItem
```

Finds the nearest list item in the specified direction.

### FindSubItem

```vb
Public Function FindSubItem(ByVal Text As String, Optional ByVal Index As Long, Optional ByRef SubItemIndex As Long, Optional ByVal Partial As Boolean, Optional ByVal Wrap As Boolean) As LvwListItem
```

Finds a sub-item matching the specified text.

### GetVisibleCount

```vb
Public Function GetVisibleCount() As Long
```

Returns the number of visible items.

### GetSelectedCount

```vb
Public Function GetSelectedCount() As Long
```

Returns the number of selected items.

### GetHeaderHeight

```vb
Public Function GetHeaderHeight() As Single
```

Returns the column header height.

### StartLabelEdit

```vb
Public Sub StartLabelEdit()
```

Starts label editing.

### EndLabelEdit

```vb
Public Sub EndLabelEdit()
```

Ends label editing.

### Scroll

```vb
Public Sub Scroll(ByVal X As Single, ByVal Y As Single)
```

Scrolls the list view content.

### ResetEmptyMarkup

```vb
Public Sub ResetEmptyMarkup()
```

Resets the empty markup text.

### ComputeControlSize

```vb
Public Sub ComputeControlSize(ByVal VisibleCount As Long, ByRef Width As Single, ByRef Height As Single, Optional ByVal ProposedWidth As Single, Optional ByVal ProposedHeight As Single)
```

Calculates the control size needed to display the specified number of items.

### TextWidth

```vb
Public Function TextWidth(ByVal Text As String) As Single
```

Calculates the text width.

### ResetForeColors

```vb
Public Sub ResetForeColors()
```

Resets the foreground color of all list items and sub-items.

### SelectedIndices

```vb
Public Function SelectedIndices() As Collection
```

Returns a collection of all selected item indices.

### GhostedIndices

```vb
Public Function GhostedIndices() As Collection
```

Returns a collection of all ghosted item indices.

### CheckedIndices

```vb
Public Function CheckedIndices() As Collection
```

Returns a collection of all checked item indices.

### ResetIconSpacing

```vb
Public Sub ResetIconSpacing()
```

Resets icon spacing to the default value.

### OLEDrag

```vb
Public Sub OLEDrag()
```

Initiates an OLE drag-and-drop operation.

### Drag

```vb
Public Sub Drag(Optional ByRef Action As Variant)
```

Starts, ends, or cancels a drag operation.

### SetFocus

```vb
Public Sub SetFocus()
```

Sets focus to the control.

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

Adjusts the Z-order.

### Move

```vb
Public Sub Move(ByVal Left As Single, Optional ByVal Top As Variant, Optional ByVal Width As Variant, Optional ByVal Height As Variant)
```

Moves and resizes the control.

## Events

### Click

```vb
Public Event Click()
```

Click.

### DblClick

```vb
Public Event DblClick()
```

Double-click.

### ItemClick

```vb
Public Event ItemClick(ByVal Item As LvwListItem, ByVal Button As Integer)
```

A list item was clicked.

### ItemDblClick

```vb
Public Event ItemDblClick(ByVal Item As LvwListItem, ByVal Button As Integer)
```

A list item was double-clicked.

### ItemFocus

```vb
Public Event ItemFocus(ByVal Item As LvwListItem)
```

A list item received focus.

### ItemActivate

```vb
Public Event ItemActivate(ByVal Item As LvwListItem, ByVal SubItemIndex As Long, ByVal Shift As Integer)
```

A list item was activated.

### ItemSelect

```vb
Public Event ItemSelect(ByVal Item As LvwListItem, ByVal Selected As Boolean)
```

A list item's selection state changed.

### ItemCheck

```vb
Public Event ItemCheck(ByVal Item As LvwListItem, ByVal Checked As Boolean)
```

A list item's checkbox state changed.

### ItemDrag

```vb
Public Event ItemDrag(ByVal Item As LvwListItem, ByVal Button As Integer)
```

A drag-and-drop operation was initiated on a list item.

### ItemBkColor

```vb
Public Event ItemBkColor(ByVal Item As LvwListItem, ByRef RGBColor As Long)
```

List item background color request (report view); allows providing an alternate background color.

### GetVirtualItem

```vb
Public Event GetVirtualItem(ByVal ItemIndex As Long, ByVal SubItemIndex As Long, ByVal VirtualProperty As LvwVirtualPropertyConstants, ByRef Value As Variant)
```

Requests item properties in virtual mode.

### FindVirtualItem

```vb
Public Event FindVirtualItem(ByVal StartIndex As Long, ByVal SearchText As String, ByVal Partial As Boolean, ByVal Wrap As Boolean, ByRef FoundIndex As Long)
```

Finds an item in virtual mode.

### CacheVirtualItems

```vb
Public Event CacheVirtualItems(ByVal FromIndex As Long, ByVal ToIndex As Long)
```

Requests caching of an item range in virtual mode.

### BeforeLabelEdit

```vb
Public Event BeforeLabelEdit(ByRef Cancel As Boolean)
```

Raised before label editing begins; can be canceled.

### AfterLabelEdit

```vb
Public Event AfterLabelEdit(ByRef Cancel As Boolean, ByRef NewString As String)
```

Raised after label editing ends.

### ColumnClick

```vb
Public Event ColumnClick(ByVal ColumnHeader As LvwColumnHeader)
```

A column header was clicked.

### ColumnDblClick

```vb
Public Event ColumnDblClick(ByVal ColumnHeader As LvwColumnHeader)
```

A column header was double-clicked.

### ColumnCheck

```vb
Public Event ColumnCheck(ByVal ColumnHeader As LvwColumnHeader)
```

A column header's checkbox state changed.

### ColumnBeforeResize

```vb
Public Event ColumnBeforeResize(ByVal ColumnHeader As LvwColumnHeader, ByRef Cancel As Boolean)
```

Column width is about to change; can be canceled.

### ColumnAfterResize

```vb
Public Event ColumnAfterResize(ByVal ColumnHeader As LvwColumnHeader, ByRef NewWidth As Single)
```

Column width change completed.

### ColumnDividerDblClick

```vb
Public Event ColumnDividerDblClick(ByVal ColumnHeader As LvwColumnHeader, ByRef Cancel As Boolean)
```

A column divider was double-clicked.

### ColumnBeforeDrag

```vb
Public Event ColumnBeforeDrag(ByVal ColumnHeader As LvwColumnHeader)
```

A column header drag is starting.

### ColumnAfterDrag

```vb
Public Event ColumnAfterDrag(ByVal ColumnHeader As LvwColumnHeader, ByVal NewPosition As Long, ByRef Cancel As Boolean)
```

A column header drag completed.

### ColumnDropDown

```vb
Public Event ColumnDropDown(ByVal ColumnHeader As LvwColumnHeader)
```

A column header dropdown button was clicked.

### ColumnChevronPushed

```vb
Public Event ColumnChevronPushed(ByVal ColumnHeader As LvwColumnHeader)
```

A column chevron button was clicked.

### ColumnFilterChanged

```vb
Public Event ColumnFilterChanged(ByVal ColumnHeader As LvwColumnHeader)
```

Column filter criteria changed.

### ColumnFilterButtonClick

```vb
Public Event ColumnFilterButtonClick(ByVal ColumnHeader As LvwColumnHeader, ByRef RaiseFilterChanged As Boolean, ByVal ButtonLeft As Long, ByVal ButtonTop As Long, ByVal ButtonRight As Long, ByVal ButtonBottom As Long)
```

A column filter button was clicked.

### BeforeFilterEdit

```vb
Public Event BeforeFilterEdit(ByVal ColumnHeader As LvwColumnHeader, ByVal hWndFilterEdit As LongPtr)
```

Raised before a column filter edit begins.

### AfterFilterEdit

```vb
Public Event AfterFilterEdit(ByVal ColumnHeader As LvwColumnHeader)
```

Raised after a column filter edit ends.

### GetEmptyMarkup

```vb
Public Event GetEmptyMarkup(ByRef Text As String, ByRef Center As Boolean)
```

Requests markup text when the list is empty.

### GroupCollapsedChanged

```vb
Public Event GroupCollapsedChanged(ByVal Group As LvwGroup)
```

A group's collapsed state changed.

### GroupSelectedChanged

```vb
Public Event GroupSelectedChanged(ByVal Group As LvwGroup)
```

A group's selection state changed.

### GroupLinkClick

```vb
Public Event GroupLinkClick(ByVal Group As LvwGroup)
```

A group link was clicked.

### BeginMarqueeSelection

```vb
Public Event BeginMarqueeSelection(ByRef Cancel As Boolean)
```

Marquee selection is starting; can be canceled.

### BeforeScroll

```vb
Public Event BeforeScroll(ByVal DeltaX As Single, ByVal DeltaY As Single)
```

Raised before scrolling begins.

### AfterScroll

```vb
Public Event AfterScroll(ByVal DeltaX As Single, ByVal DeltaY As Single)
```

Raised after scrolling completes.

### DropFiles

```vb
Public Event DropFiles(ByRef FileList As Variant, ByVal X As Single, ByVal Y As Single)
```

Raised when files are dropped onto the control.

### ContextMenu

```vb
Public Event ContextMenu(ByVal X As Single, ByVal Y As Single)
```

Raised when a context menu is requested.

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Key preview event; raised before KeyDown.

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Key release preview event; raised before KeyUp.

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

Key pressed.

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

Key released.

### KeyPress

```vb
Public Event KeyPress(KeyChar As Integer)
```

Key character.

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Mouse button pressed.

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Mouse moved.

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Mouse button released.

### MouseEnter

```vb
Public Event MouseEnter()
```

Mouse entered the control.

### MouseLeave

```vb
Public Event MouseLeave()
```

Mouse left the control.

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

OLE drag-and-drop completed.

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

OLE drag-and-drop drop.

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

OLE drag-and-drop hover.

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

OLE give feedback.

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

OLE set data.

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

OLE start drag.

## Sub-Objects

### LvwColumnHeader

Column header object.

#### Properties

| Name | Signature | Description |
|------|-----------|-------------|
| Index | `Property Get Index() As Long` | Index. Read-only |
| Key | `Property Get Key() As String` / `Property Let Key(ByVal Value As String)` | Key value |
| Tag | `Property Get Tag() As Variant` / `Property Let Tag(ByVal Value As Variant)` / `Property Set Tag(ByVal Value As Variant)` | Custom data |
| Text | `Property Get Text() As String` / `Property Let Text(ByVal Value As String)` | Header text |
| Icon | `Property Get Icon() As Variant` / `Property Let Icon(ByVal Value As Variant)` | Icon |
| IconIndex | `Property Get IconIndex() As Long` | Icon index. Read-only |
| Width | `Property Get Width() As Single` / `Property Let Width(ByVal Value As Single)` | Column width |
| Alignment | `Property Get Alignment() As LvwColumnHeaderAlignmentConstants` / `Property Let Alignment(ByVal Value As LvwColumnHeaderAlignmentConstants)` | Alignment |
| Position | `Property Get Position() As Long` / `Property Let Position(ByVal Value As Long)` | Position |
| SortArrow | `Property Get SortArrow() As LvwColumnHeaderSortArrowConstants` / `Property Let SortArrow(ByVal Value As LvwColumnHeaderSortArrowConstants)` | Sort arrow |
| IconOnRight | `Property Get IconOnRight() As Boolean` / `Property Let IconOnRight(ByVal Value As Boolean)` | Icon on right |
| Resizable | `Property Get Resizable() As Boolean` / `Property Let Resizable(ByVal Value As Boolean)` | Whether resizable |
| SplitButton | `Property Get SplitButton() As Boolean` / `Property Let SplitButton(ByVal Value As Boolean)` | Whether split button is shown |
| CheckBox | `Property Get CheckBox() As Boolean` / `Property Let CheckBox(ByVal Value As Boolean)` | Whether checkbox is shown |
| Checked | `Property Get Checked() As Boolean` / `Property Let Checked(ByVal Value As Boolean)` | Checkbox checked state |
| Bold | `Property Get Bold() As Boolean` / `Property Let Bold(ByVal Value As Boolean)` | Whether bold |
| ForeColor | `Property Get ForeColor() As OLE_COLOR` / `Property Let ForeColor(ByVal Value As OLE_COLOR)` | Foreground color |
| ToolTipText | `Property Get ToolTipText() As String` / `Property Let ToolTipText(ByVal Value As String)` | ToolTip text |
| ToolTipTextFilterBtn | `Property Get ToolTipTextFilterBtn() As String` / `Property Let ToolTipTextFilterBtn(ByVal Value As String)` | Filter button ToolTip |
| ToolTipTextDropDown | `Property Get ToolTipTextDropDown() As String` / `Property Let ToolTipTextDropDown(ByVal Value As String)` | Dropdown button ToolTip |
| FilterType | `Property Get FilterType() As LvwColumnHeaderFilterTypeConstants` / `Property Let FilterType(ByVal Value As LvwColumnHeaderFilterTypeConstants)` | Filter type |
| FilterValue | `Property Get FilterValue() As Variant` / `Property Let FilterValue(ByVal Value As Variant)` | Filter value |
| Left | `Property Get Left() As Single` / `Property Let Left(ByVal Value As Single)` | Left edge distance |

#### Methods

| Name | Signature | Description |
|------|-----------|-------------|
| AutoSize | `Public Sub AutoSize(ByVal Value As LvwColumnHeaderAutoSizeConstants)` | Auto size column width |
| EditFilter | `Public Sub EditFilter()` | Edit filter criteria |
| ClearFilter | `Public Sub ClearFilter()` | Clear filter criteria |
| SubItemIndex | `Public Function SubItemIndex() As Long` | Get the corresponding sub-item index |

### LvwColumnHeaders

Column headers collection.

#### Properties

| Name | Signature | Description |
|------|-----------|-------------|
| Item | `Property Get Item(ByVal Index As Variant) As LvwColumnHeader` | Get column header by index |
| ItemFromPosition | `Property Get ItemFromPosition(ByVal Position As Long) As LvwColumnHeader` | Get column header by position |
| Count | `Property Get Count() As Long` | Column header count. Read-only |

#### Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Add | `Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Text As String, Optional ByVal Width As Variant, Optional ByVal Alignment As LvwColumnHeaderAlignmentConstants, Optional ByVal Icon As Variant) As LvwColumnHeader` | Add column header |
| Exists | `Public Function Exists(ByVal Index As Variant) As Boolean` | Check if column header exists |
| Clear | `Public Sub Clear()` | Clear all column headers |
| Remove | `Public Sub Remove(ByVal Index As Variant)` | Remove column header |
| NewEnum | `Public Function NewEnum() As IEnumVARIANT` | Enumerator |

### LvwListItem

List item object.

#### Properties

| Name | Signature | Description |
|------|-----------|-------------|
| Index | `Property Get Index() As Long` | Index. Read-only |
| Key | `Property Get Key() As String` / `Property Let Key(ByVal Value As String)` | Key value |
| Tag | `Property Get Tag() As Variant` / `Property Let Tag(ByVal Value As Variant)` / `Property Set Tag(ByVal Value As Variant)` | Custom data |
| Text | `Property Get Text() As String` / `Property Let Text(ByVal Value As String)` | Text |
| Icon | `Property Get Icon() As Variant` / `Property Let Icon(ByVal Value As Variant)` | Large icon |
| IconIndex | `Property Get IconIndex() As Long` | Large icon index. Read-only |
| SmallIcon | `Property Get SmallIcon() As Variant` / `Property Let SmallIcon(ByVal Value As Variant)` | Small icon |
| SmallIconIndex | `Property Get SmallIconIndex() As Long` | Small icon index. Read-only |
| Indentation | `Property Get Indentation() As Long` / `Property Let Indentation(ByVal Value As Long)` | Indentation |
| Selected | `Property Get Selected() As Boolean` / `Property Let Selected(ByVal Value As Boolean)` | Whether selected |
| Checked | `Property Get Checked() As Boolean` / `Property Let Checked(ByVal Value As Boolean)` | Checkbox state |
| Ghosted | `Property Get Ghosted() As Boolean` / `Property Let Ghosted(ByVal Value As Boolean)` | Whether ghosted |
| Hot | `Property Get Hot() As Boolean` / `Property Let Hot(ByVal Value As Boolean)` | Whether hot |
| Bold | `Property Get Bold() As Boolean` / `Property Let Bold(ByVal Value As Boolean)` | Whether bold |
| ForeColor | `Property Get ForeColor() As OLE_COLOR` / `Property Let ForeColor(ByVal Value As OLE_COLOR)` | Foreground color |
| ToolTipText | `Property Get ToolTipText() As String` / `Property Let ToolTipText(ByVal Value As String)` | ToolTip text |
| Left | `Property Get Left() As Single` / `Property Let Left(ByVal Value As Single)` | Left edge distance |
| Top | `Property Get Top() As Single` / `Property Let Top(ByVal Value As Single)` | Top edge distance |
| Width | `Property Get Width() As Single` / `Property Let Width(ByVal Value As Single)` | Width |
| Height | `Property Get Height() As Single` / `Property Let Height(ByVal Value As Single)` | Height |
| Visible | `Property Get Visible() As Boolean` | Whether visible. Read-only |
| TileViewIndices | `Property Get TileViewIndices() As Variant` / `Property Let TileViewIndices(ByVal ArgList As Variant)` | Tile view sub-item column indices |
| Group | `Property Get Group() As LvwGroup` / `Property Let Group(ByVal Value As LvwGroup)` / `Property Set Group(ByVal Value As LvwGroup)` | Owning group |
| WorkArea | `Property Get WorkArea() As LvwWorkArea` | Owning work area. Read-only |
| ListSubItems | `Property Get ListSubItems() As LvwListSubItems` | Sub-items collection. Read-only |
| SubItems | `Property Get SubItems(ByVal Index As Integer) As String` / `Property Let SubItems(ByVal Index As Integer, ByVal Value As String)` | Get or set sub-item text by index |

#### Methods

| Name | Signature | Description |
|------|-----------|-------------|
| EnsureVisible | `Public Sub EnsureVisible()` | Ensure item is visible |
| CreateDragImage | `Public Function CreateDragImage(Optional ByRef X As Single, Optional ByRef Y As Single) As LongPtr` | Create drag image |

### LvwListItems

List items collection.

#### Properties

| Name | Signature | Description |
|------|-----------|-------------|
| Item | `Property Get Item(ByVal Index As Variant) As LvwListItem` | Get list item by index |
| Count | `Property Get Count() As Long` | List item count. Read-only |

#### Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Add | `Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Text As String, Optional ByVal Icon As Variant, Optional ByVal SmallIcon As Variant) As LvwListItem` | Add list item |
| Exists | `Public Function Exists(ByVal Index As Variant) As Boolean` | Check if list item exists |
| Clear | `Public Sub Clear()` | Clear all list items |
| Remove | `Public Sub Remove(ByVal Index As Variant)` | Remove list item |
| NewEnum | `Public Function NewEnum() As IEnumVARIANT` | Enumerator |

### LvwListSubItem

List sub-item object.

#### Properties

| Name | Signature | Description |
|------|-----------|-------------|
| Index | `Property Get Index() As Long` | Index. Read-only |
| Key | `Property Get Key() As String` | Key value. Read-only |
| Tag | `Property Get Tag() As Variant` / `Property Let Tag(ByVal Value As Variant)` / `Property Set Tag(ByVal Value As Variant)` | Custom data |
| Text | `Property Get Text() As String` / `Property Let Text(ByVal Value As String)` | Text |
| ReportIcon | `Property Get ReportIcon() As Variant` / `Property Let ReportIcon(ByVal Value As Variant)` | Report view icon |
| ReportIconIndex | `Property Get ReportIconIndex() As Long` | Report view icon index. Read-only |
| Bold | `Property Get Bold() As Boolean` / `Property Let Bold(ByVal Value As Boolean)` | Whether bold |
| ForeColor | `Property Get ForeColor() As OLE_COLOR` / `Property Let ForeColor(ByVal Value As OLE_COLOR)` | Foreground color |
| ToolTipText | `Property Get ToolTipText() As String` / `Property Let ToolTipText(ByVal Value As String)` | ToolTip text |
| Left | `Property Get Left() As Single` / `Property Let Left(ByVal Value As Single)` | Left edge distance |
| Top | `Property Get Top() As Single` / `Property Let Top(ByVal Value As Single)` | Top edge distance |
| Width | `Property Get Width() As Single` / `Property Let Width(ByVal Value As Single)` | Width |
| Height | `Property Get Height() As Single` / `Property Let Height(ByVal Value As Single)` | Height |

### LvwListSubItems

List sub-items collection.

#### Properties

| Name | Signature | Description |
|------|-----------|-------------|
| Item | `Property Get Item(ByVal Index As Variant) As LvwListSubItem` | Get sub-item by index |
| Count | `Property Get Count() As Long` | Sub-item count. Read-only |

#### Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Add | `Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Text As String, Optional ByVal ReportIcon As Variant, Optional ByVal ToolTipText As String) As LvwListSubItem` | Add sub-item |
| Exists | `Public Function Exists(ByVal Index As Variant) As Boolean` | Check if sub-item exists |
| Clear | `Public Sub Clear()` | Clear all sub-items |
| Remove | `Public Sub Remove(ByVal Index As Variant)` | Remove sub-item |
| NewEnum | `Public Function NewEnum() As IEnumVARIANT` | Enumerator |

### LvwGroup

Group object.

#### Properties

| Name | Signature | Description |
|------|-----------|-------------|
| Index | `Property Get Index() As Long` | Index. Read-only |
| Key | `Property Get Key() As String` / `Property Let Key(ByVal Value As String)` | Key value |
| Tag | `Property Get Tag() As Variant` / `Property Let Tag(ByVal Value As Variant)` / `Property Set Tag(ByVal Value As Variant)` | Custom data |
| ID | `Property Get ID() As Long` | Group ID. Read-only |
| Header | `Property Get Header() As String` / `Property Let Header(ByVal Value As String)` | Group header |
| HeaderAlignment | `Property Get HeaderAlignment() As LvwGroupHeaderAlignmentConstants` / `Property Let HeaderAlignment(ByVal Value As LvwGroupHeaderAlignmentConstants)` | Header alignment |
| Footer | `Property Get Footer() As String` / `Property Let Footer(ByVal Value As String)` | Group footer |
| FooterAlignment | `Property Get FooterAlignment() As LvwGroupFooterAlignmentConstants` / `Property Let FooterAlignment(ByVal Value As LvwGroupFooterAlignmentConstants)` | Footer alignment |
| Hint | `Property Get Hint() As String` / `Property Let Hint(ByVal Value As String)` | Hint text |
| Link | `Property Get Link() As String` / `Property Let Link(ByVal Value As String)` | Link text |
| SubsetLink | `Property Get SubsetLink() As String` / `Property Let SubsetLink(ByVal Value As String)` | Subset link text |
| Collapsible | `Property Get Collapsible() As Boolean` / `Property Let Collapsible(ByVal Value As Boolean)` | Whether collapsible |
| Collapsed | `Property Get Collapsed() As Boolean` / `Property Let Collapsed(ByVal Value As Boolean)` | Whether collapsed |
| ShowHeader | `Property Get ShowHeader() As Boolean` / `Property Let ShowHeader(ByVal Value As Boolean)` | Whether header is shown |
| Selected | `Property Get Selected() As Boolean` / `Property Let Selected(ByVal Value As Boolean)` | Whether selected |
| Subseted | `Property Get Subseted() As Boolean` / `Property Let Subseted(ByVal Value As Boolean)` | Whether subsetted |
| SubsetLinkSelected | `Property Get SubsetLinkSelected() As Boolean` / `Property Let SubsetLinkSelected(ByVal Value As Boolean)` | Whether subset link is selected |
| Icon | `Property Get Icon() As Variant` / `Property Let Icon(ByVal Value As Variant)` | Icon |
| IconIndex | `Property Get IconIndex() As Long` | Icon index. Read-only |
| Position | `Property Get Position() As Long` / `Property Let Position(ByVal Value As Long)` | Position |
| Left | `Property Get Left() As Single` / `Property Let Left(ByVal Value As Single)` | Left edge distance |
| Top | `Property Get Top() As Single` / `Property Let Top(ByVal Value As Single)` | Top edge distance |
| Width | `Property Get Width() As Single` / `Property Let Width(ByVal Value As Single)` | Width |
| Height | `Property Get Height() As Single` / `Property Let Height(ByVal Value As Single)` | Height |
| ListItemCount | `Property Get ListItemCount() As Long` | List item count. Read-only |
| ListItemIndices | `Property Get ListItemIndices() As Collection` | List item index collection. Read-only |

### LvwGroups

Groups collection.

#### Properties

| Name | Signature | Description |
|------|-----------|-------------|
| Item | `Property Get Item(ByVal Index As Variant) As LvwGroup` | Get group by index |
| Count | `Property Get Count() As Long` | Group count. Read-only |
| Sorted | `Property Get Sorted() As Boolean` / `Property Let Sorted(ByVal Value As Boolean)` | Whether sorted |
| SortOrder | `Property Get SortOrder() As LvwSortOrderConstants` / `Property Let SortOrder(ByVal Value As LvwSortOrderConstants)` | Sort order |
| SortType | `Property Get SortType() As LvwSortTypeConstants` / `Property Let SortType(ByVal Value As LvwSortTypeConstants)` | Sort type |

#### Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Add | `Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Header As String, Optional ByVal HeaderAlignment As LvwGroupHeaderAlignmentConstants, Optional ByVal Footer As String, Optional ByVal FooterAlignment As LvwGroupFooterAlignmentConstants) As LvwGroup` | Add group |
| Exists | `Public Function Exists(ByVal Index As Variant) As Boolean` | Check if group exists |
| Clear | `Public Sub Clear()` | Clear all groups |
| Remove | `Public Sub Remove(ByVal Index As Variant)` | Remove group |
| NewEnum | `Public Function NewEnum() As IEnumVARIANT` | Enumerator |

### LvwVirtualListItem

Virtual list item object.

#### Properties

| Name | Signature | Description |
|------|-----------|-------------|
| Index | `Property Get Index() As Long` | Index. Read-only |
| Text | `Property Get Text() As String` | Text. Read-only |
| Indentation | `Property Get Indentation() As Long` | Indentation. Read-only |
| Selected | `Property Get Selected() As Boolean` / `Property Let Selected(ByVal Value As Boolean)` | Whether selected |
| Checked | `Property Get Checked() As Boolean` | Checkbox state. Read-only |
| Hot | `Property Get Hot() As Boolean` / `Property Let Hot(ByVal Value As Boolean)` | Whether hot |
| Left | `Property Get Left() As Single` / `Property Let Left(ByVal Value As Single)` | Left edge distance |
| Top | `Property Get Top() As Single` / `Property Let Top(ByVal Value As Single)` | Top edge distance |
| Width | `Property Get Width() As Single` / `Property Let Width(ByVal Value As Single)` | Width |
| Height | `Property Get Height() As Single` / `Property Let Height(ByVal Value As Single)` | Height |
| Visible | `Property Get Visible() As Boolean` | Whether visible. Read-only |
| SubItems | `Property Get SubItems(ByVal Index As Integer) As String` | Get sub-item text by index. Read-only |

#### Methods

| Name | Signature | Description |
|------|-----------|-------------|
| EnsureVisible | `Public Sub EnsureVisible()` | Ensure item is visible |
| CreateDragImage | `Public Function CreateDragImage(Optional ByRef X As Single, Optional ByRef Y As Single) As LongPtr` | Create drag image |

### LvwVirtualListItems

Virtual list items collection.

#### Properties

| Name | Signature | Description |
|------|-----------|-------------|
| Item | `Property Get Item(ByVal Index As Long) As LvwVirtualListItem` | Get virtual list item by index |
| Count | `Property Get Count() As Long` | Virtual list item count. Read-only |

#### Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Exists | `Public Function Exists(ByVal Index As Long) As Boolean` | Check if virtual list item exists |
| NewEnum | `Public Function NewEnum() As IEnumVARIANT` | Enumerator |

### LvwWorkArea

Work area object.

#### Properties

| Name | Signature | Description |
|------|-----------|-------------|
| Index | `Property Get Index() As Long` | Index. Read-only |
| Left | `Property Get Left() As Single` / `Property Let Left(ByVal Value As Single)` | Left edge distance |
| Top | `Property Get Top() As Single` / `Property Let Top(ByVal Value As Single)` | Top edge distance |
| Width | `Property Get Width() As Single` / `Property Let Width(ByVal Value As Single)` | Width |
| Height | `Property Get Height() As Single` / `Property Let Height(ByVal Value As Single)` | Height |
| ListItemIndices | `Property Get ListItemIndices() As Collection` | List item index collection in the work area. Read-only |

### LvwWorkAreas

Work areas collection.

#### Properties

| Name | Signature | Description |
|------|-----------|-------------|
| Item | `Property Get Item(ByVal Index As Long) As LvwWorkArea` | Get work area by index |
| Count | `Property Get Count() As Long` | Work area count. Read-only |

#### Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Add | `Public Function Add(ByVal Left As Single, ByVal Top As Single, ByVal Width As Single, ByVal Height As Single, Optional ByVal Index As Long) As LvwWorkArea` | Add work area |
| Exists | `Public Function Exists(ByVal Index As Long) As Boolean` | Check if work area exists |
| Clear | `Public Sub Clear()` | Clear all work areas |
| Remove | `Public Sub Remove(ByVal Index As Long)` | Remove work area |
| NewEnum | `Public Function NewEnum() As IEnumVARIANT` | Enumerator |

## Code Examples

### Report View Basic Usage

```vb
' Set report view
ListView1.View = LvwViewReport

' Add column headers
With ListView1.ColumnHeaders
    .Add , , "Name", 120
    .Add , , "Age", 60, LvwColumnHeaderAlignmentCenter
    .Add , , "City", 100
End With

' Add list items
Dim li As LvwListItem
Set li = ListView1.ListItems.Add(, , "Zhang San")
li.SubItems(1) = "28"
li.SubItems(2) = "Beijing"

Set li = ListView1.ListItems.Add(, , "Li Si")
li.SubItems(1) = "35"
li.SubItems(2) = "Shanghai"
```

### Group View

```vb
' Enable grouping
ListView1.GroupView = True
ListView1.View = LvwViewReport

' Add groups
Dim grp1 As LvwGroup, grp2 As LvwGroup
Set grp1 = ListView1.Groups.Add(, , "Group 1")
Set grp2 = ListView1.Groups.Add(, , "Group 2")

' Assign items to groups
Set ListView1.ListItems(1).Group = grp1
Set ListView1.ListItems(2).Group = grp2
```

### Virtual Mode

```vb
' Enable virtual mode
ListView1.VirtualMode = True
ListView1.VirtualItemCount = 10000

' Provide data in the GetVirtualItem event
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

### Sorting and Filtering

```vb
' Sort
ListView1.SortKey = 0
ListView1.SortOrder = LvwSortOrderAscending
ListView1.SortType = LvwSortTypeText
ListView1.Sorted = True

' Set sort arrow
ListView1.ColumnHeaders(1).SortArrow = LvwColumnHeaderSortArrowDown

' Enable column filtering
ListView1.UseColumnFilterBar = True
```