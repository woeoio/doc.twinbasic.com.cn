# ComboBox Control (VBCCRComboBox)

The VBCCRComboBox control is a combination box control that combines the functionality of a text box and a drop-down list box. Users can select an item from the list or directly enter values in the text box.

## Styles

ComboBox has three main styles:

1. `vbComboDropdown` (0) - Default style, includes an editable text box and drop-down list
2. `vbComboSimple` (1) - Combo box with permanently visible list box
3. `vbComboDropdownList` (2) - Combo box with drop-down list only, text box portion is not editable

## Properties

### Appearance Properties
- `Style` - Combo box style (0-2)
- `Text` - Text in the text box
- `BackColor` - Background color
- `ForeColor` - Foreground color
- `Font` - Font properties
- `Enabled` - Whether enabled
- `Visible` - Whether visible
- `Height` - Control height
- `Width` - Control width
- `Left` - Left margin
- `Top` - Top margin

### List Properties
- `List` - Array of list items
- `ListCount` - Number of list items
- `ListIndex` - Index of currently selected item
- `ItemData` - Numeric data associated with list items
- `Sorted` - Whether automatically sorted
- `MaxLength` - Maximum number of characters in text box
- `SelLength` - Length of selected text
- `SelStart` - Starting position of selected text
- `SelText` - Selected text
- `NewIndex` - Index of most recently added item

## Events

- `Change` - Triggered when text changes
- `Click` - Triggered when clicked
- `DblClick` - Triggered when double-clicked
- `KeyDown` - Triggered when key is pressed down
- `KeyPress` - Triggered when key is pressed
- `KeyUp` - Triggered when key is released
- `Scroll` - Triggered when scrolled
- `DropDown` - Triggered when drop-down list is displayed
- `CloseUp` - Triggered when drop-down list is closed

## Methods

- `AddItem` - Add list item
- `RemoveItem` - Remove list item
- `Clear` - Clear list
- `Refresh` - Refresh display
- `SetFocus` - Set focus

## Code Examples

### Basic Usage

```vb
Private Sub InitComboBox()
    With ComboBox1
        .Style = vbComboDropdown  ' Set style
        .Clear                    ' Clear list
        
        ' Add list items
        .AddItem "Option1"
        .AddItem "Option2"
        .AddItem "Option3"
        
        .ListIndex = 0           ' Select first item
    End With
End Sub
```

### Auto-Complete Input

```vb
Private Sub ComboBox1_KeyPress(KeyAscii As Integer)
    Static LastLen As Long
    Dim StartPos As Long
    Dim FindText As String
    Dim i As Long
    
    ' When Enter key is pressed
    If KeyAscii = vbKeyReturn Then
        KeyAscii = 0  ' Cancel key press
        Exit Sub
    End If
    
    ' When Backspace key is pressed
    If KeyAscii = vbKeyBack Then
        LastLen = Len(ComboBox1.Text) - 1
        If LastLen < 0 Then LastLen = 0
        Exit Sub
    End If
```
