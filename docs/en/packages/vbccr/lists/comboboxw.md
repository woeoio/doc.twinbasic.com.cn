---
title: ComboBoxW Control
description: ComboBoxW Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5d4cc92c-a623-49c3-a23c-671430676e03'
  PropagateID: '5d4cc92c-a623-49c3-a23c-671430676e03'
  ReservedCode1: 'abb9f898-2c44-46d8-be5a-a5bd368c1ba0'
  ReservedCode2: 'abb9f898-2c44-46d8-be5a-a5bd368c1ba0'
---

# ComboBoxW Control

Enhanced combo box control with support for visual styles, owner-draw, character casing control, and cue banner text.

## Enumerations

### CboStyleConstants

| Constant | Value | Description |
|----------|-------|-------------|
| CboStyleDropDownCombo | 0 | Drop-down combo box |
| CboStyleSimpleCombo | 1 | Simple combo box |
| CboStyleDropDownList | 2 | Drop-down list |

### CboCharacterCasingConstants

| Constant | Value | Description |
|----------|-------|-------------|
| CboCharacterCasingNormal | 0 | Normal casing |
| CboCharacterCasingUpper | 1 | Uppercase |
| CboCharacterCasingLower | 2 | Lowercase |

### CboDrawModeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| CboDrawModeNormal | 0 | Normal mode |
| CboDrawModeOwnerDrawFixed | 1 | Owner-draw fixed height |
| CboDrawModeOwnerDrawVariable | 2 | Owner-draw variable height |

## Properties

### VisualStyles
`Property Get VisualStyles() As Boolean`
`Property Let VisualStyles(ByVal Value As Boolean)`

Whether to enable visual styles.

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

Background color.

### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

Foreground color.

### OLEDropMode
`Property Get OLEDropMode() As OLEDropModeConstants`
`Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)`

OLE drag-drop mode. See common enumerations.

### Redraw
`Property Get Redraw() As Boolean`
`Property Let Redraw(ByVal Value As Boolean)`

Whether to allow redrawing.

### Style
`Property Get Style() As CboStyleConstants`
`Property Let Style(ByVal Value As CboStyleConstants)`

Combo box style.

### Locked
`Property Get Locked() As Boolean`
`Property Let Locked(ByVal Value As Boolean)`

Whether the control is locked (not editable).

### Text
`Property Get Text() As String`
`Property Let Text(ByVal Value As String)`

Edit box text.

### ExtendedUI
`Property Get ExtendedUI() As Boolean`
`Property Let ExtendedUI(ByVal Value As Boolean)`

Extended user interface mode.

### MaxDropDownItems
`Property Get MaxDropDownItems() As Long`
`Property Let MaxDropDownItems(ByVal Value As Long)`

Maximum number of items displayed in the drop-down list.

### IntegralHeight
`Property Get IntegralHeight() As Boolean`
`Property Let IntegralHeight(ByVal Value As Boolean)`

Whether to resize the list to fit complete items only.

### MaxLength
`Property Get MaxLength() As Long`
`Property Let MaxLength(ByVal Value As Long)`

Maximum number of characters in the edit box.

### CueBanner
`Property Get CueBanner() As String`
`Property Let CueBanner(ByVal Value As String)`

Cue banner text (displayed when the edit box is empty).

### UseListBackColor
`Property Get UseListBackColor() As Boolean`
`Property Let UseListBackColor(ByVal Value As Boolean)`

Whether to use a custom list background color.

### ListBackColor
`Property Get ListBackColor() As OLE_COLOR`
`Property Let ListBackColor(ByVal Value As OLE_COLOR)`

Drop-down list background color.

### UseListForeColor
`Property Get UseListForeColor() As Boolean`
`Property Let UseListForeColor(ByVal Value As Boolean)`

Whether to use a custom list foreground color.

### ListForeColor
`Property Get ListForeColor() As OLE_COLOR`
`Property Let ListForeColor(ByVal Value As OLE_COLOR)`

Drop-down list foreground color.

### Sorted
`Property Get Sorted() As Boolean`
`Property Let Sorted(ByVal Value As Boolean)`

Whether to automatically sort items.

### HorizontalExtent
`Property Get HorizontalExtent() As Long`
`Property Let HorizontalExtent(ByVal Value As Long)`

Horizontal scroll range of the drop-down list.

### DisableNoScroll
`Property Get DisableNoScroll() As Boolean`
`Property Let DisableNoScroll(ByVal Value As Boolean)`

Whether to disable the scroll bar instead of hiding it when items do not fill the list.

### CharacterCasing
`Property Get CharacterCasing() As CboCharacterCasingConstants`
`Property Let CharacterCasing(ByVal Value As CboCharacterCasingConstants)`

Character casing mode.

### DrawMode
`Property Get DrawMode() As CboDrawModeConstants`
`Property Let DrawMode(ByVal Value As CboDrawModeConstants)`

Drawing mode.

### IMEMode
`Property Get IMEMode() As CCIMEModeConstants`
`Property Let IMEMode(ByVal Value As CCIMEModeConstants)`

Input method editor mode. See common enumerations.

### ScrollTrack
`Property Get ScrollTrack() As Boolean`
`Property Let ScrollTrack(ByVal Value As Boolean)`

Whether to enable scroll tracking.

### AutoSelect
`Property Get AutoSelect() As Boolean`
`Property Let AutoSelect(ByVal Value As Boolean)`

Whether to automatically select matching items.

### AlwaysFindExact
`Property Get AlwaysFindExact() As Boolean`
`Property Let AlwaysFindExact(ByVal Value As Boolean)`

Whether to always perform exact find.

### ListCount
`Property Get ListCount() As Long`

Number of list items. Read-only.

### List
`Property Get List(ByVal Index As Long) As String`
`Property Let List(ByVal Index As Long, ByVal Value As String)`

Access list items by index.

### ListIndex
`Property Get ListIndex() As Long`
`Property Let ListIndex(ByVal Value As Long)`

Index of the currently selected item.

### ItemData
`Property Get ItemData(ByVal Index As Long) As Long`
`Property Let ItemData(ByVal Index As Long, ByVal Value As Long)`

Item-associated data.

### NewIndex
`Property Get NewIndex() As Long`

Index of the most recently added item. Read-only.

### TopIndex
`Property Get TopIndex() As Long`
`Property Let TopIndex(ByVal Value As Long)`

Index of the top visible item in the list.

### SelStart
`Property Get SelStart() As Long`
`Property Let SelStart(ByVal Value As Long)`

Starting position of selected text.

### SelLength
`Property Get SelLength() As Long`
`Property Let SelLength(ByVal Value As Long)`

Length of selected text.

### SelText
`Property Get SelText() As String`
`Property Let SelText(ByVal Value As String)`

Selected text.

### ItemHeight
`Property Get ItemHeight() As Single`
`Property Let ItemHeight(ByVal Value As Single)`

List item height.

### FieldHeight
`Property Get FieldHeight() As Single`

Edit box height. Read-only.

### DroppedDown
`Property Get DroppedDown() As Boolean`
`Property Let DroppedDown(ByVal Value As Boolean)`

Whether the drop-down list is expanded.

### DropDownWidth
`Property Get DropDownWidth() As Long`
`Property Let DropDownWidth(ByVal Value As Long)`

Drop-down list width.

### DropDownHeight
`Property Get DropDownHeight() As Long`
`Property Let DropDownHeight(ByVal Value As Long)`

Drop-down list height.

### hWndEdit
`Property Get hWndEdit() As LongPtr`

Edit box window handle. Read-only.

### hWndList
`Property Get hWndList() As LongPtr`

List box window handle. Read-only.

### hWnd / hWndUserControl / Font / Enabled / MousePointer / MouseIcon / MouseTrack

See common properties.

### Name / Tag / Parent / Container / Left / Top / Width / Height / Visible / ToolTipText / HelpContextID / WhatsThisHelpID / DragIcon / DragMode

See standard extender properties.

## Methods

### AddItem
`Public Sub AddItem(ByVal Item As String, Optional ByVal Index As Variant)`

Adds a list item.

### RemoveItem
`Public Sub RemoveItem(ByVal Index As Long)`

Removes a list item.

### Clear
`Public Sub Clear()`

Clears all list items.

### Refresh
`Public Sub Refresh()`

Forces a redraw.

### FindItem
`Public Function FindItem(ByVal SearchString As String, Optional ByVal StartIndex As Long, Optional ByVal FindMode As Long) As Long`

Finds a list item and returns its index.

### GetIdealHorizontalExtent
`Public Function GetIdealHorizontalExtent() As Long`

Gets the ideal horizontal scroll range.

### SelectItem
`Public Sub SelectItem(ByVal SearchString As String)`

Selects a matching list item.

### OLEDrag
`Public Sub OLEDrag()`

Initiates an OLE drag-drop operation.

### Drag / ZOrder / SetFocus / Move

See standard methods.

## Events

### Click
`Public Event Click()`

### DblClick
`Public Event DblClick()`

### Scroll
`Public Event Scroll()`

Fired when the list scrolls.

### Change
`Public Event Change()`

Fired when the text content changes.

### ContextMenu
`Public Event ContextMenu()`

Context menu event.

### DropDown
`Public Event DropDown()`

Drop-down list is expanding.

### CloseUp
`Public Event CloseUp()`

Drop-down list is closing.

### ItemMeasure
`Public Event ItemMeasure(ByVal Index As Long, ByVal ItemWidth As Long, ByVal ItemHeight As Long)`

Owner-draw measure event.

### ItemDraw
`Public Event ItemDraw(ByVal Index As Long, ByVal ItemState As Long, ByVal hDC As LongPtr, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)`

Owner-draw paint event.

### KeyDown / KeyUp / KeyPress

### MouseDown / MouseMove / MouseUp / MouseEnter / MouseLeave

### OLECompleteDrag / OLEDragDrop / OLEDragOver / OLEGiveFeedback / OLESetData / OLEStartDrag

## Code Examples

### Basic Usage

```vb
' Add items
ComboBoxW1.AddItem "Apple"
ComboBoxW1.AddItem "Banana"
ComboBoxW1.ListIndex = 0

' Set cue banner
ComboBoxW1.CueBanner = "Please select a fruit..."

' Uppercase mode
ComboBoxW1.CharacterCasing = CboCharacterCasingUpper

' Owner-draw mode
ComboBoxW1.DrawMode = CboDrawModeOwnerDrawFixed
```

### Owner-Draw Example

```vb
Private Sub ComboBoxW1_ItemDraw(ByVal Index As Long, ByVal ItemState As Long, _
    ByVal hDC As LongPtr, ByVal Left As Long, ByVal Top As Long, _
    ByVal Right As Long, ByVal Bottom As Long)
    ' Draw custom list item
End Sub
```