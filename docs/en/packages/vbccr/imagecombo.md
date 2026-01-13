# ImageCombo Control (VBCCRImageCombo)

The ImageCombo control is a combo box control that can display an image next to each list item. This control typically works in conjunction with an ImageList control to create more intuitive dropdown lists.

## Properties

### Basic Properties

- `Text` (String): Text of currently selected item
- `ComboItems` (ImcComboItems): Collection of combo items
- `ImageList` (Variant): Associated ImageList control
- `BackColor` (OLE_COLOR): Background color
- `ForeColor` (OLE_COLOR): Foreground color
- `Font` (StdFont): Font settings
- `Enabled` (Boolean): Whether control is enabled
- `Visible` (Boolean): Whether control is visible
- `Indentation` (Long): Indentation level for items

### ImcComboItem Properties

Each item in the ComboItems collection has the following properties:

- `Text` (String): Item text
- `Key` (String): Item key
- `Tag` (String): Additional data associated with the item
- `Image` (Variant): Image index or key
- `ImageIndex` (Long): Image index
- `SelImage` (Variant): Selected image index or key
- `SelImageIndex` (Long): Selected image index
- `Indentation` (Long): Indentation level
- `Selected` (Boolean): Whether the item is selected
- `Data` (LongPtr): Numeric data associated with the item

### ImcComboItems Collection Properties

- `Count` (Long): Number of items in the collection
- `Item(Index) As ImcComboItem`: Gets an item by index

## Methods

### Control Methods

- `Refresh()`: Refreshes the display
- `SetFocus()`: Sets focus to the control
- `FindItem(Text As String, [Index As Long], [Partial As Boolean], [Wrap As Boolean]) As ImcComboItem`: Finds an item
- `GetItemHeight() As Long`: Gets the item height
- `Drag([Action])`: Drag and drop operation
- `OLEDrag()`: OLE drag and drop
- `ZOrder([Position])`: Sets Z order

### ImcComboItems Collection Methods

- `Add([Index As Long], [Key As String], [Text As String], [Image As Variant], [SelImage As Variant], [Indentation As Long]) As ImcComboItem`: Adds a new item
- `Remove(Index)`: Removes an item
- `Clear()`: Clears all items
- `Exists(Index) As Boolean`: Checks if an item exists
- `Item(Index) As ImcComboItem`: Gets an item

## Events

- `Click()`: Click event
- `DblClick()`: Double-click event
- `Change()`: Selection changes
- `DropDown()`: List drops down
- `CloseUp()`: Dropdown list closes
- `Scroll()`: List scrolls
- `ItemDrag(Item As ImcComboItem, Button As Integer)`: Item is being dragged
- `BeginEdit()`: Item editing begins
- `EndEdit(Changed As Boolean, NewIndex As Long, NewText As String, Reason As Integer)`: Item editing ends
- `KeyDown(KeyCode As Integer, Shift As Integer)`: Key down
- `KeyPress(KeyChar As Integer)`: Key press
- `KeyUp(KeyCode As Integer, Shift As Integer)`: Key up
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Mouse down
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Mouse move
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Mouse up

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Set image list
    Set ImageCombo1.ImageList = ImageList1
    
    ' Add items with images
    With ImageCombo1.ComboItems
        .Add , , "Documents", 1, 2
        .Add , , "Pictures", 3, 4
        .Add , , "Music", 5, 6
    End With
End Sub
```

### Adding Items with Keys

```vb
Private Sub AddItemsWithKeys()
    With ImageCombo1.ComboItems
        .Add , "DOC", "Documents", 1, 2
        .Add , "PIC", "Pictures", 3, 4
        .Add , "MUS", "Music", 5, 6
    End With
End Sub

' Select by key
Private Sub SelectByKey(Key As String)
    Dim i As Long
    For i = 1 To ImageCombo1.ComboItems.Count
        If ImageCombo1.ComboItems(i).Key = Key Then
            ImageCombo1.ComboItems(i).Selected = True
            Exit For
        End If
    Next i
End Sub
```

### Tree-like Indentation

```vb
Private Sub AddHierarchicalItems()
    With ImageCombo1.ComboItems
        ' Level 0 items
        .Add , , "Root Item 1", 1, 2
        .Add , , "Root Item 2", 1, 2
        
        ' Level 1 items (indented)
        .Add , , "Child 1.1", 3, 4
        .Add , , "Child 1.2", 3, 4
        
        ' Level 2 items (more indented)
        .Add , , "Sub-Child 1.1.1", 5, 6
    End With
    
    ' Set indentation for items
    ImageCombo1.ComboItems(1).Indentation = 0
    ImageCombo1.ComboItems(2).Indentation = 0
    ImageCombo1.ComboItems(3).Indentation = 1
    ImageCombo1.ComboItems(4).Indentation = 1
    ImageCombo1.ComboItems(5).Indentation = 2
End Sub
```

### Finding Items

```vb
Private Sub FindItemDemo()
    Dim foundItem As ImcComboItem
    Set foundItem = ImageCombo1.FindItem("Documents", , True)
    
    If Not foundItem Is Nothing Then
        foundItem.Selected = True
        MsgBox "Found: " & foundItem.Text
    Else
        MsgBox "Item not found"
    End If
End Sub
```

### Handling Selection Change

```vb
Private Sub ImageCombo1_Change()
    If ImageCombo1.ComboItems.Count > 0 Then
        Dim selectedItem As ImcComboItem
        Set selectedItem = GetSelectedItem()
        
        If Not selectedItem Is Nothing Then
            Debug.Print "Selected: " & selectedItem.Text
            Debug.Print "Image: " & selectedItem.ImageIndex
            Debug.Print "Tag: " & selectedItem.Tag
        End If
    End If
End Sub

Private Function GetSelectedItem() As ImcComboItem
    Dim i As Long
    For i = 1 To ImageCombo1.ComboItems.Count
        If ImageCombo1.ComboItems(i).Selected Then
            Set GetSelectedItem = ImageCombo1.ComboItems(i)
            Exit Function
        End If
    Next i
    Set GetSelectedItem = Nothing
End Function
```

### Handling Item Editing

```vb
Private Sub ImageCombo1_EndEdit(ByVal Changed As Boolean, ByVal NewIndex As Long, ByVal NewText As String, ByVal Reason As Integer)
    If Changed Then
        Dim editedItem As ImcComboItem
        Set editedItem = ImageCombo1.ComboItems(NewIndex)
        Debug.Print "Item edited: " & editedItem.Text & " -> " & NewText
    End If
End Sub
```

### Removing Items

```vb
Private Sub RemoveItemDemo(Index As Long)
    ImageCombo1.ComboItems.Remove Index
End Sub

Private Sub RemoveByImageIndex(ImageIndex As Long)
    Dim i As Long
    For i = ImageCombo1.ComboItems.Count To 1 Step -1
        If ImageCombo1.ComboItems(i).ImageIndex = ImageIndex Then
            ImageCombo1.ComboItems.Remove i
        End If
    Next i
End Sub
```

### Clearing All Items

```vb
Private Sub ClearAllItems()
    ImageCombo1.ComboItems.Clear
End Sub
```

### Custom Data with Items

```vb
Private Sub AddItemsWithData()
    With ImageCombo1.ComboItems
        Dim item1 As ImcComboItem
        Set item1 = .Add(, , "Item 1", 1, 2)
        item1.Data = 100  ' Store numeric data
        
        Dim item2 As ImcComboItem
        Set item2 = .Add(, , "Item 2", 3, 4)
        item2.Data = 200
        
        Dim item3 As ImcComboItem
        Set item3 = .Add(, , "Item 3", 5, 6)
        item3.Data = 300
    End With
End Sub

Private Sub DisplayItemData()
    Dim i As Long
    For i = 1 To ImageCombo1.ComboItems.Count
        With ImageCombo1.ComboItems(i)
            Debug.Print .Text & " - Data: " & .Data
        End With
    Next i
End Sub
```

### File Type Selector

```vb
Private Sub CreateFileTypeSelector()
    ' Assume ImageList1 contains file type icons
    With ImageCombo1.ComboItems
        .Add , "TXT", "Text Files (*.txt)", 1, 2
        .Add , "DOC", "Word Documents (*.doc)", 3, 4
        .Add , "XLS", "Excel Spreadsheets (*.xls)", 5, 6
        .Add , "PDF", "PDF Documents (*.pdf)", 7, 8
        .Add , "IMG", "Image Files (*.bmp,*.jpg)", 9, 10
    End With
End Sub
```

## Tips

1. **ImageList**: Always set the `ImageList` property before adding items to ensure images display correctly
2. **Keys**: Use keys to identify items programmatically instead of relying on indices
3. **Indentation**: Use indentation to create tree-like structures within the combo box
4. **Selected Image**: Set `SelImage` to show a different icon when the item is selected
5. **Data Property**: Use the `Data` property to store numeric values associated with items
6. **Tag Property**: Use the `Tag` property to store string data or references
