# VirtualCombo Control (VBCCRVirtualCombo)

VirtualCombo control is a virtualized combo box control that can handle large amounts of data items without impacting performance. It uses virtualization technology to only create and display currently visible items, effectively managing memory and improving performance.

## Properties

### Basic Properties
- `Text` - Currently selected text
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
- `Style` - Display style
  - `vbComboDropdown` (0) - Dropdown style
  - `vbComboSimple` (1) - Simple style
  - `vbComboDropdownList` (2) - Dropdown list style
- `Sorted` - Whether to automatically sort

## Events

- `ItemRequest` - Triggered when requesting item data
- `Change` - Triggered when selection changes
- `Click` - Triggered when control is clicked
- `DblClick` - Triggered when control is double-clicked
- `DropDown` - Triggered when dropdown list is shown
- `GotFocus` - Triggered when control gains focus
- `KeyDown` - Triggered when key is pressed
- `KeyPress` - Triggered during key press
- `KeyUp` - Triggered when key is released
- `LostFocus` - Triggered when control loses focus
- `MouseDown` - Triggered when mouse button is pressed
- `MouseMove` - Triggered when mouse moves
- `MouseUp` - Triggered when mouse button is released
- `Scroll` - Triggered when list scrolls
- `ScrollEnd` - Triggered when scrolling ends

## Code Examples

### Basic Usage

```vb
Private Sub InitVirtualCombo()
    With VirtualCombo1
        .VirtualItemCount = 1000000  ' Set total virtual item count
        .VisibleItemCount = 10  ' Set visible item count
        .ItemHeight = 20  ' Set item height
    End With
End Sub

Private Sub VirtualCombo1_ItemRequest(ByVal Index As Long, _
                                    ByVal Count As Long, _
                                    Items() As String)
    ' Handle item request
    Dim i As Long
    For i = 0 To Count - 1
        Items(i) = "Item #" & (Index + i)
    Next i
End Sub
```

### Virtual Data Provider

```vb
Private Type DataProvider
    Data() As String
    Count As Long
    PageSize As Long
    CacheEnabled As Boolean
    Cache As Collection
End Type

Private Provider As DataProvider

Private Sub InitDataProvider(ByVal Count As Long, _
                           Optional ByVal PageSize As Long = 100)
    With Provider
        .Count = Count
        .PageSize = PageSize
        .CacheEnabled = True
        Set .Cache = New Collection
        
        ' Initialize sample data
        ReDim .Data(0 To Count - 1)
        Dim i As Long
        For i = 0 To Count - 1
            .Data(i) = "Item #" & i
        Next i
    End With
End Sub

Private Function GetItems(ByVal StartIndex As Long, _
                        ByVal Count As Long) As String()
    Dim Items() As String
    ReDim Items(0 To Count - 1)
    
    ' Check cache first
    If Provider.CacheEnabled Then
        If TryGetFromCache(StartIndex, Count, Items) Then
            GetItems = Items
            Exit Function
        End If
    End If
    
    ' Load from data source
    Dim i As Long
    For i = 0 To Count - 1
        If StartIndex + i < Provider.Count Then
            Items(i) = Provider.Data(StartIndex + i)
        End If
    Next i
    
    ' Cache results
    If Provider.CacheEnabled Then
        CacheItems StartIndex, Items
    End If
    
    GetItems = Items
End Function
```

### Database Integration

```vb
Private Sub LoadDatabaseItems()
    Dim rs As ADODB.Recordset
    Set rs = New ADODB.Recordset
    
    ' Get total count
    rs.Open "SELECT COUNT(*) FROM Items", cn
    VirtualCombo1.VirtualItemCount = rs(0)
    rs.Close
    
    ' Configure combo
    With VirtualCombo1
        .VisibleItemCount = 15
        .ItemHeight = 20
    End With
End Sub

Private Sub VirtualCombo1_ItemRequest(ByVal Index As Long, _
                                    ByVal Count As Long, _
                                    Items() As String)
    ' Load items from database
    Dim rs As ADODB.Recordset
    Set rs = New ADODB.Recordset
    
    rs.Open "SELECT ItemName FROM Items " & _
           "ORDER BY ItemID " & _
           "OFFSET " & Index & " ROWS " & _
           "FETCH NEXT " & Count & " ROWS ONLY", cn
    
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

### Search Implementation

```vb
Private Sub ImplementSearch()
    With VirtualCombo1
        .Style = vbComboDropdown
        .AutoSearch = True
        .SearchDelay = 500 ' milliseconds
    End With
End Sub

Private Sub VirtualCombo1_Search(ByVal SearchText As String, _
                               ByVal StartIndex As Long, _
                               ByVal Count As Long, _
                               Items() As String, _
                               MatchCount As Long)
    ' Perform search in data source
    Dim SQL As String
    SQL = "SELECT ItemName FROM Items " & _
          "WHERE ItemName LIKE '" & SearchText & "%' " & _
          "ORDER BY ItemName " & _
          "OFFSET " & StartIndex & " ROWS " & _
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
    
    ' Get total match count
    rs.Close
    rs.Open "SELECT COUNT(*) FROM Items " & _
            "WHERE ItemName LIKE '" & SearchText & "%'", cn
    MatchCount = rs(0)
    rs.Close
End Sub
```

## Best Practices

1. Memory Management
```vb
Private Sub OptimizeMemory()
    ' Implement data paging
    Const PAGE_SIZE As Long = 100
    
    With VirtualCombo1
        .CacheSize = PAGE_SIZE * 2 ' Cache two pages
        .PrefetchItems = True ' Enable prefetching
        .PrefetchCount = PAGE_SIZE ' Prefetch one page
    End With
End Sub
```

2. Performance Optimization
```vb
Private Sub OptimizePerformance()
    ' Suspend updates during bulk operations
    VirtualCombo1.BeginUpdate
    
    ' Perform multiple operations
    LoadLargeDataSet
    
    ' Resume updates
    VirtualCombo1.EndUpdate
End Sub
```

## Known Issues and Solutions

1. Scrolling Performance
```vb
Private Sub HandleScrolling()
    ' Implement smooth scrolling
    With VirtualCombo1
        .SmoothScroll = True
        .ScrollDelay = 10
        .ScrollLines = 3
    End With
End Sub
```

2. Data Synchronization
```vb
Private Sub SyncData()
    Static IsUpdating As Boolean
    
    If IsUpdating Then Exit Sub
    IsUpdating = True
    
    ' Update data source
    UpdateDataSource
    
    ' Refresh display
    VirtualCombo1.Refresh
    
    IsUpdating = False
End Sub
```

## Additional Tips

1. Custom Item Drawing
```vb
Private Sub VirtualCombo1_DrawItem(ByVal hDC As Long, _
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

2. Event Handling
```vb
Private Sub HandleEvents()
    ' Implement event handling
    With VirtualCombo1
        .HandleKeys = True
        .HandleMouse = True
        .HandleScroll = True
    End With
End Sub
```

3. State Management
```vb
Private Sub ManageState()
    ' Save state
    SaveSetting App.Title, "VirtualCombo", "TopIndex", _
               VirtualCombo1.TopIndex
    
    ' Restore state
    VirtualCombo1.TopIndex = GetSetting(App.Title, _
                            "VirtualCombo", "TopIndex", 0)
End Sub
```
