# VListBox Control (VBCCRVListBox)

VListBox control is a virtualized listbox control that efficiently handles large lists using virtualization technology. Compared to regular listboxes, it only keeps currently visible items in memory, significantly improving performance and reducing memory usage.

## Properties

### Basic Properties
- `VirtualItemCount` - Total number of virtual items
- `VisibleItemCount` - Number of visible items
- `ItemHeight` - Item height
- `TopIndex` - Top item index
- `ListIndex` - Currently selected item index
- `BackColor` - Background color
- `ForeColor` - Foreground color
- `Enabled` - Whether control is enabled
- `Font` - Font settings
- `Visible` - Whether visible

### Appearance Properties
- `BorderStyle` - Border style
- `IntegralHeight` - Whether to use integral height
- `MultiSelect` - Whether to allow multiple selection
- `Sorted` - Whether to automatically sort
- `Style` - Appearance style
  - `vbListBoxStandard` (0) - Standard style
  - `vbListBoxCheckbox` (1) - With checkboxes

## Events

- `ItemRequest` - Triggered when requesting item data
- `Click` - Triggered when control is clicked
- `DblClick` - Triggered when control is double-clicked
- `GotFocus` - Triggered when control gains focus
- `KeyDown` - Triggered when key is pressed
- `KeyPress` - Triggered during key press
- `KeyUp` - Triggered when key is released
- `LostFocus` - Triggered when control loses focus
- `MouseDown` - Triggered when mouse button is pressed
- `MouseMove` - Triggered when mouse moves
- `MouseUp` - Triggered when mouse button is released
- `Scroll` - Triggered when list scrolls
- `ItemCheck` - Triggered when item check state changes
- `SelectionChanged` - Triggered when selection changes

## Code Examples

### Basic Usage

```vb
Private Sub InitVListBox()
    With VListBox1
        .VirtualItemCount = 1000000  ' Set total virtual item count
        .VisibleItemCount = 15  ' Set visible item count
        .ItemHeight = 20  ' Set item height
    End With
End Sub

Private Sub VListBox1_ItemRequest(ByVal Index As Long, _
                                ByVal Count As Long, _
                                Items() As String)
    ' Handle item request
    Dim i As Long
    For i = 0 To Count - 1
        Items(i) = "Item #" & (Index + i)
    Next i
End Sub
```

### Virtual Data Manager

```vb
Private Type ItemData
    Text As String
    Value As Variant
    Checked As Boolean
    Tag As String
End Type

Private Type DataManager
    Items() As ItemData
    Count As Long
    PageSize As Long
    CacheEnabled As Boolean
    Cache As Collection
    SelectedIndices() As Long
    SelectedCount As Long
End Type

Private Manager As DataManager

Private Sub InitDataManager(ByVal Count As Long, _
                          Optional ByVal PageSize As Long = 100)
    With Manager
        .Count = Count
        .PageSize = PageSize
        .CacheEnabled = True
        Set .Cache = New Collection
        ReDim .SelectedIndices(1 To 100)
        .SelectedCount = 0
        
        ' Initialize data array
        ReDim .Items(0 To Count - 1)
        
        ' Fill with sample data
        Dim i As Long
        For i = 0 To Count - 1
            With .Items(i)
                .Text = "Item #" & i
                .Value = i
                .Checked = False
                .Tag = "TAG" & i
            End With
        Next i
    End With
End Sub
```

### Database Integration

```vb
Private Sub LoadDatabaseItems()
    Dim rs As ADODB.Recordset
    Set rs = New ADODB.Recordset
    
    ' Get total count
    rs.Open "SELECT COUNT(*) FROM Items", cn
    VListBox1.VirtualItemCount = rs(0)
    rs.Close
    
    ' Configure listbox
    With VListBox1
        .VisibleItemCount = 20
        .ItemHeight = 20
        .Style = vbListBoxCheckbox
    End With
End Sub

Private Sub VListBox1_ItemRequest(ByVal Index As Long, _
                                ByVal Count As Long, _
                                Items() As String)
    ' Load items from database
    Dim SQL As String
    SQL = "SELECT ItemName FROM Items " & _
          "ORDER BY ItemID " & _
          "OFFSET " & Index & " ROWS " & _
          "FETCH NEXT " & Count & " ROWS ONLY"
          
    Dim rs As ADODB.Recordset
    Set rs = New ADODB.Recordset
    rs.Open SQL, cn
    
    Dim i As Long
    i = 0
    While Not rs.EOF And i < Count
        Items(i) = rs("ItemName")
        rs.MoveNext
        i = i + 1
    Wend
    
    rs.Close
End Sub
```

## Common Use Cases

### Multi-Select Implementation

```vb
Private Sub SetupMultiSelect()
    With VListBox1
        .MultiSelect = True
        .Style = vbListBoxCheckbox
    End With
End Sub

Private Sub VListBox1_ItemCheck(ByVal Index As Long, _
                              ByVal Checked As Boolean)
    ' Handle item check/uncheck
    If Checked Then
        AddToSelection Index
    Else
        RemoveFromSelection Index
    End If
End Sub

Private Sub AddToSelection(ByVal Index As Long)
    With Manager
        .SelectedCount = .SelectedCount + 1
        If .SelectedCount > UBound(.SelectedIndices) Then
            ReDim Preserve .SelectedIndices(1 To .SelectedCount * 2)
        End If
        .SelectedIndices(.SelectedCount) = Index
    End With
End Sub
```

## Best Practices

1. Memory Management
```vb
Private Sub OptimizeMemory()
    ' Implement data paging
    Const PAGE_SIZE As Long = 100
    
    With VListBox1
        .CacheSize = PAGE_SIZE * 2  ' Cache two pages
        .PrefetchItems = True  ' Enable prefetching
        .PrefetchCount = PAGE_SIZE  ' Prefetch one page
    End With
End Sub
```

2. Performance Optimization
```vb
Private Sub OptimizePerformance()
    ' Suspend updates during bulk operations
    VListBox1.BeginUpdate
    
    ' Perform multiple operations
    LoadLargeDataSet
    
    ' Resume updates
    VListBox1.EndUpdate
End Sub
```

## Known Issues and Solutions

1. Scrolling Performance
```vb
Private Sub HandleScrolling()
    ' Implement smooth scrolling
    With VListBox1
        .SmoothScroll = True
        .ScrollDelay = 10
        .ScrollLines = 3
    End With
End Sub
```

2. Selection Management
```vb
Private Sub ManageSelection()
    Static IsUpdating As Boolean
    
    If IsUpdating Then Exit Sub
    IsUpdating = True
    
    ' Update selection state
    UpdateSelectionState
    
    ' Update UI
    RefreshUI
    
    IsUpdating = False
End Sub
```

## Additional Tips

1. Custom Item Drawing
```vb
Private Sub VListBox1_DrawItem(ByVal hDC As Long, _
                             ByVal Index As Long, _
                             ByVal State As DrawItemStateConstants, _
                             ByVal Left As Long, _
                             ByVal Top As Long, _
                             ByVal Right As Long, _
                             ByVal Bottom As Long)
    ' Implement custom drawing
    If State And ODS_SELECTED Then
        ' Draw selected item
        DrawSelectedItem hDC, Left, Top, Right, Bottom
    Else
        ' Draw normal item
        DrawNormalItem hDC, Left, Top, Right, Bottom
    End If
End Sub
```

2. Data Filtering
```vb
Private Sub ImplementFiltering()
    ' Set up filter
    Dim Filter As String
    Filter = txtSearch.Text
    
    ' Apply filter
    VListBox1.BeginUpdate
    VListBox1.VirtualItemCount = GetFilteredCount(Filter)
    VListBox1.EndUpdate
End Sub

Private Function GetFilteredCount(ByVal Filter As String) As Long
    ' Count items matching filter
    Dim Count As Long
    Count = 0
    
    Dim i As Long
    For i = 0 To Manager.Count - 1
        If InStr(1, Manager.Items(i).Text, Filter, vbTextCompare) > 0 Then
            Count = Count + 1
        End If
    Next i
    
    GetFilteredCount = Count
End Function
```

3. State Management
```vb
Private Sub SaveState()
    ' Save selection state
    Dim SelState As String
    SelState = GetSelectionState()
    
    SaveSetting App.Title, "VListBox", "Selection", SelState
    SaveSetting App.Title, "VListBox", "TopIndex", VListBox1.TopIndex
End Sub

Private Sub RestoreState()
    ' Restore selection state
    Dim SelState As String
    SelState = GetSetting(App.Title, "VListBox", "Selection", "")
    
    RestoreSelectionState SelState
    VListBox1.TopIndex = GetSetting(App.Title, "VListBox", "TopIndex", 0)
End Sub
```
