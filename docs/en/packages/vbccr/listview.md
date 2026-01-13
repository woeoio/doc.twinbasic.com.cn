# ListView Control (VBCCRListView)

The VBCCRListView control is an enhanced replacement for the standard MSComCtl ListView control. It provides improved functionality, better performance, and enhanced visual appearance.

## Properties

### Key Properties

- `View`: Sets or returns current view mode
  - `LvwViewIcon` (0) - Icon view
  - `LvwViewSmallIcon` (1) - Small icon view
  - `LvwViewList` (2) - List view
  - `LvwViewReport` (3) - Report view
  - `LvwViewTile` (4) - Tile view

- `ColumnHeaders` (LvwColumnHeaders): Collection of column headers in report view
- `ListItems` (LvwListItems): Collection of items in ListView
- `SelectedItem` (LvwListItem): Returns currently selected item
- `MultiSelect` (Boolean): Enables/disables multiple item selection
- `Sorted` (Boolean): Enables/disables automatic sorting
- `GridLines` (Boolean): Shows/hides gridlines in report view
- `FullRowSelect` (Boolean): Enables/disables full row selection
- `LabelEdit` (LvwLabelEditConstants): Label editing mode
- `HoverSelection` (Boolean): Hover selection
- `HotTracking` (Boolean): Hot tracking
- `Arrange` (LvwArrangeConstants): Item arrangement mode

## Methods

### Essential Methods

- `FindItem(Text As String, [Index As Long], [Partial As Boolean], [Wrap As Boolean]) As LvwListItem`: Searches for an item
- `HitTest(X As Single, Y As Single, [SubItemIndex As Long]) As LvwListItem`: Tests click position
- `HitTestInsertMark(X As Single, Y As Single, [After As Boolean]) As Long`: Tests insert mark position
- `StartLabelEdit()`: Starts label editing for the selected item
- `EndLabelEdit([Discard As Boolean])`: Ends label editing
- `GetVisibleCount() As Long`: Gets the number of visible items
- `Refresh()`: Refreshes the display
- `Drag([Action])`: Drag and drop operation
- `OLEDrag()`: OLE drag and drop
- `SetFocus()`: Sets focus
- `ZOrder([Position])`: Sets Z order

### LvwListItems Collection Methods

- `Add([Index As Long], [Key As String], [Text As String], [Icon As Variant], [SmallIcon As Variant]) As LvwListItem`: Adds a new item
- `Remove(Index)`: Removes an item
- `Clear()`: Clears all items
- `Item(Index) As LvwListItem`: Gets an item

### LvwColumnHeaders Collection Methods

- `Add([Index As Long], [Key As String], [Text As String], [Width As Long], [Alignment As VBRUN.AlignmentConstants], [Icon As Variant]) As LvwColumnHeader`: Adds a column header
- `Remove(Index)`: Removes a column header
- `Clear()`: Clears all column headers
- `Item(Index) As LvwColumnHeader`: Gets a column header

## Events

- `Click()`: Click event
- `DblClick()`: Double-click event
- `ItemClick(Item As LvwListItem, Button As Integer)`: Fires when an item is clicked
- `ItemDblClick(Item As LvwListItem, Button As Integer)`: Fires when an item is double-clicked
- `ItemFocus(Item As LvwListItem)`: Fires when an item receives focus
- `ItemActivate(Item As LvwListItem, SubItemIndex As Long, Shift As Integer)`: Fires when an item is activated
- `ItemSelect(Item As LvwListItem, Selected As Boolean)`: Fires when an item selection changes
- `ItemCheck(Item As LvwListItem, Checked As Boolean)`: Fires when an item checkbox state changes
- `BeforeLabelEdit(ByRef Cancel As Boolean)`: Fires before label editing begins
- `AfterLabelEdit(ByRef Cancel As Boolean, NewString As String)`: Fires after label editing ends
- `ColumnClick(ColumnHeader As LvwColumnHeader)`: Fires when a column header is clicked
- `ColumnDblClick(ColumnHeader As LvwColumnHeader)`: Fires when a column header is double-clicked
- `ColumnBeforeResize(ColumnHeader As LvwColumnHeader, ByRef Cancel As Boolean)`: Fires before column resizing
- `ColumnAfterResize(ColumnHeader As LvwColumnHeader, NewWidth As Long)`: Fires after column resizing
- `KeyDown(KeyCode As Integer, Shift As Integer)`: Key down event
- `KeyPress(KeyChar As Integer)`: Key press event
- `KeyUp(KeyCode As Integer, Shift As Integer)`: Key up event
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Mouse down event
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Mouse move event
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Mouse up event

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Add column headers
    With ListView1.ColumnHeaders
        .Add , , "Name"
        .Add , , "Age"
        .Add , , "City"
    End With
    
    ' Add items with subitems
    With ListView1.ListItems
        Dim item1 As LvwListItem
        Set item1 = .Add(, , "John Doe")
        item1.SubItems(1) = "30"
        item1.SubItems(2) = "New York"
        
        Dim item2 As LvwListItem
        Set item2 = .Add(, , "Jane Smith")
        item2.SubItems(1) = "25"
        item2.SubItems(2) = "London"
    End With
    
    ' Set view to report mode
    ListView1.View = LvwViewReport
    ListView1.GridLines = True
    ListView1.FullRowSelect = True
End Sub
```

### Handling Events

```vb
Private Sub ListView1_ItemClick(ByVal Item As LvwListItem, ByVal Button As Integer)
    MsgBox "Selected: " & Item.Text
End Sub

Private Sub ListView1_ColumnClick(ByVal ColumnHeader As LvwColumnHeader)
    ' Toggle sort order based on column click
    ListView1.Sorted = Not ListView1.Sorted
    If Not ListView1.Sorted Then
        ListView1.Sorted = True
    End If
End Sub
```

### Finding Items

```vb
Private Sub FindItemDemo()
    Dim foundItem As LvwListItem
    Set foundItem = ListView1.FindItem("John Doe", , True)
    
    If Not foundItem Is Nothing Then
        foundItem.Selected = True
        foundItem.EnsureVisible
    End If
End Sub
```

### Adding and Removing Items

```vb
Private Sub AddItemDemo()
    Dim newItem As LvwListItem
    Set newItem = ListView1.ListItems.Add(, , "New Item")
    newItem.SubItems(1) = "Data 1"
    newItem.SubItems(2) = "Data 2"
End Sub

Private Sub RemoveItemDemo(Index As Long)
    ListView1.ListItems.Remove Index
End Sub
```

### Label Editing

```vb
Private Sub ListView1_BeforeLabelEdit(ByRef Cancel As Boolean)
    ' Prevent editing of the first item
    If ListView1.SelectedItem.Index = 1 Then
        Cancel = True
        MsgBox "Cannot edit the first item"
    End If
End Sub

Private Sub ListView1_AfterLabelEdit(ByRef Cancel As Boolean, ByVal NewString As String)
    ' Validate the new label
    If Len(NewString) = 0 Then
        Cancel = True
        MsgBox "Label cannot be empty"
    End If
End Sub
```

### Hit Testing

```vb
Private Sub ListView1_MouseUp(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)
    Dim hitItem As LvwListItem
    Dim subItemIndex As Long
    Set hitItem = ListView1.HitTest(X, Y, subItemIndex)
    
    If Not hitItem Is Nothing Then
        MsgBox "Clicked: " & hitItem.Text & ", SubItem: " & subItemIndex
    End If
End Sub
```

### Get Visible Count

```vb
Private Sub GetVisibleItems()
    Dim count As Long
    count = ListView1.GetVisibleCount()
    MsgBox "Visible items: " & count
End Sub
```

## Common Use Cases

### File Explorer Style

```vb
Private Sub SetupFileExplorer()
    With ListView1
        .View = LvwViewReport
        .FullRowSelect = True
        .GridLines = True
        .HotTracking = True
        .HoverSelection = True
        
        ' Add columns
        With .ColumnHeaders
            .Add , , "Name", 200
            .Add , , "Size", 100
            .Add , , "Type", 100
            .Add , , "Modified", 150
        End With
    End With
End Sub
```

### Grouped View

```vb
Private Sub SetupGroupedView()
    ListView1.View = LvwViewTile
    ListView1.GroupView = True
    ListView1.TileViewLines = 2
    
    ' Add items with grouping (requires Windows Vista or later)
    ' Grouping is handled through the Groups collection
End Sub
```

### Multiple Selection

```vb
Private Sub GetSelectedItems()
    Dim i As Long
    For i = 1 To ListView1.ListItems.Count
        If ListView1.ListItems(i).Selected Then
            Debug.Print ListView1.ListItems(i).Text
        End If
    Next i
End Sub
```

### Column Sorting

```vb
Private Sub ListView1_ColumnClick(ByVal ColumnHeader As LvwColumnHeader)
    Static lastSortColumn As Long
    Static sortOrderAscending As Boolean
    
    If lastSortColumn <> ColumnHeader.Index Then
        sortOrderAscending = True
    Else
        sortOrderAscending = Not sortOrderAscending
    End If
    
    lastSortColumn = ColumnHeader.Index
    
    ' Note: ListView has built-in sorting
    ' For custom sorting, you may need to use external methods
End Sub
```

## Tips

1. **Performance**: For large lists, consider using `VirtualListItems` instead of `ListItems`
2. **Column Widths**: Use `AutoSize` to automatically size columns to fit their content
3. **Icons**: Set `ImageList` properties for small and large icons to display icons in different views
4. **Checkboxes**: Enable `CheckBoxes` property to show checkboxes for each item
5. **LabelEdit**: Set `LabelEdit` to `LvwLabelEditManual` and call `StartLabelEdit()` when needed
