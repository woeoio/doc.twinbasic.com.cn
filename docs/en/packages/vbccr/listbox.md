# ListBox Control (VBCCRListBox)

The VBCCRListBox control is a list box control used to display multiple options for user selection. It supports single and multiple selection modes and can display plain text or icon list items.

## Properties

### Appearance Properties
- `Style` - List box style(0-2)
  - `vbListBoxStandard` (0) - Standard list box
  - `vbListBoxCheckbox` (1) - List box with checkboxes
  - `vbListBoxOption` (2) - List box with option buttons
- `BackColor` - Background color
- `ForeColor` - Foreground color
- `Font` - Font properties
- `BorderStyle` - Border style
- `Appearance` - Appearance
- `Enabled` - Whether enabled
- `Visible` - Whether visible

### List Properties
- `List` - Array of list items
- `ListCount` - Number of list items
- `ListIndex` - Index of currently selected item
- `MultiSelect` - Whether to allow multiple selection
  - `vbMultiSelectNone` (0) - Single selection
  - `vbMultiSelectSimple` (1) - Simple multiple selection
  - `vbMultiSelectExtended` (2) - Extended multiple selection
- `Selected(Index)` - Whether specified item is selected
- `SelCount` - Number of selected items
- `TopIndex` - Index of first visible item
- `ItemData` - Numeric data associated with list items
- `Sorted` - Whether automatically sorted
- `IntegralHeight` - Whether to use integer row height
- `ItemHeight` - Item height

## Events

- `Click` - Triggered when clicked
- `DblClick` - Triggered when double-clicked
- `ItemCheck` - Triggered when item check state changes (checkbox style only)
- `MouseDown` - Triggered when mouse button is pressed
- `MouseMove` - Triggered when mouse moves
- `MouseUp` - Triggered when mouse button is released
- `Scroll` - Triggered when scrolled
- `KeyDown` - Triggered when key is pressed down
- `KeyPress` - Triggered during key press
- `KeyUp` - Triggered when key is released

## Methods

- `AddItem` - Add list item
- `RemoveItem` - Remove list item
- `Clear` - Clear list
- `Refresh` - Refresh display
- `SetFocus` - Set focus

## Code Examples

### Basic Usage

```vb
Private Sub InitListBox()
    With ListBox1
        .Clear                ' Clear list
        
        ' Add items
        .AddItem "Item 1"
        .AddItem "Item 2"
        .AddItem "Item 3"
        
        .ListIndex = 0        ' Select first item
    End With
End Sub
```

### Multiple Selection List Box

```vb
Private Sub InitMultiSelectList()
    With ListBox1
        .MultiSelect = vbMultiSelectExtended
        .Clear
        
        ' Add items
        Dim i As Long
        For i = 1 To 10
            .AddItem "Option " & i
        Next i
    End With
End Sub

Private Function GetSelectedItems() As String()
    Dim Count As Long
    Count = ListBox1.SelCount
    
    If Count = 0 Then
        GetSelectedItems = Array()
        Exit Function
    End If
```
