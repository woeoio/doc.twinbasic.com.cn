# Pager Control (VBCCRPager)

VBCCRPager control provides a pagination navigation interface for browsing and navigating through large amounts of data. It is typically used in conjunction with ListView or other data display controls.

## Properties

### Key Properties

- `Position`: Current position
- `Min`: Minimum position value
- `Max`: Maximum position value
- `SmallChange`: Change amount when clicking arrow buttons
- `LargeChange`: Change amount when clicking page area
- `Orientation`: Direction (horizontal or vertical)
- `Mode`: Paging mode
- `ButtonSize`: Button size
- `BackColor`: Background color
- `Enabled`: Enable/disable the control

## Methods

### Main Methods

- `SetPosition(Position As Long)`: Set current position
- `GetPosition() As Long`: Get current position
- `Refresh()`: Refresh display

## Events

- `Change()`: Triggered when position changes
- `Click()`: Triggered when clicked
- `PageClick(ByVal Part As PagerPartConstants)`: Triggered when clicking paging parts
- `Scroll()`: Triggered when scrolling

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With Pager1
        .Min = 0
        .Max = 100
        .SmallChange = 1
        .LargeChange = 10
        .Position = 0
        .Orientation = OrientationHorizontal
    End With
End Sub
```

### Integration with ListView

```vb
Private Sub SetupListViewPager()
    ' Set up pager
    With Pager1
        .Min = 0
        .Max = GetTotalPages() - 1
        .SmallChange = 1
        .LargeChange = 1
        .Position = 0
    End With
    
    ' Initial data load
    LoadListViewPage Pager1.Position
End Sub

Private Sub Pager1_Change()
    LoadListViewPage Pager1.Position
End Sub

Private Sub LoadListViewPage(ByVal PageIndex As Long)
    Const PAGE_SIZE As Long = 20
    Dim StartIndex As Long
    Dim EndIndex As Long
    
    StartIndex = PageIndex * PAGE_SIZE
    EndIndex = StartIndex + PAGE_SIZE - 1
    
    ListView1.ListItems.Clear
    LoadDataIntoListView StartIndex, EndIndex
End Sub
```

### Custom Pagination Display

```vb
Private Sub CustomizePager()
    With Pager1
        .ButtonSize = 20
        .Mode = PagerModePage ' Page mode
        
        ' Set total pages
        .Max = (TotalRecords + PageSize - 1) \ PageSize - 1
        
        ' Set current page
        .Position = 0
    End With
    
    ' Update page information display
    UpdatePageInfo
End Sub

Private Sub UpdatePageInfo()
    lblPageInfo.Caption = "Page " & (Pager1.Position + 1) & " of " & _
                         (Pager1.Max + 1)
End Sub
```

## Common Use Cases

### Data Browser

```vb
Private Sub SetupDataBrowser()
    ' Initialize pager control
    With Pager1
        .Orientation = OrientationHorizontal
        .Mode = PagerModePage
        .ButtonSize = 25
        .Min = 0
        .Max = (RecordCount - 1) \ PageSize
        .Position = 0
    End With
    
    ' Load first page
    LoadData Pager1.Position * PageSize, PageSize
End Sub

Private Sub Pager1_Change()
    ' Load new page data
    Dim StartIndex As Long
    StartIndex = Pager1.Position * PageSize
    LoadData StartIndex, PageSize
    UpdatePageInfo
End Sub
```

### Image Browser

```vb
Private Sub SetupImageBrowser()
    ' Set up image browser paging
    With Pager1
        .Orientation = OrientationHorizontal
        .ButtonSize = 30
        .Min = 0
        .Max = ImageCount - 1
        .Position = 0
        .SmallChange = 1
        .LargeChange = 1
    End With
    
    ' Show first image
    ShowImage Pager1.Position
End Sub

Private Sub ShowImage(ByVal Index As Long)
    On Error GoTo ErrorHandler
    
    PictureBox1.Picture = LoadPicture(ImageFiles(Index))
    lblImageInfo.Caption = "Image " & (Index + 1) & " / " & ImageCount
    Exit Sub
    
ErrorHandler:
    MsgBox "Cannot load image: " & Err.Description
End Sub
```

## Best Practices

1. Position Validation
```vb
Private Function ValidatePosition(ByVal NewPosition As Long) As Long
    ' Ensure position is within valid range
    If NewPosition < Pager1.Min Then
        ValidatePosition = Pager1.Min
    ElseIf NewPosition > Pager1.Max Then
        ValidatePosition = Pager1.Max
    Else
        ValidatePosition = NewPosition
    End If
End Function
```

2. Error Handling
```vb
Private Sub SafePagerOperation()
    On Error GoTo ErrorHandler
    
    Dim NewPosition As Long
    NewPosition = Pager1.Position + Pager1.SmallChange
    Pager1.Position = ValidatePosition(NewPosition)
    Exit Sub
    
ErrorHandler:
    Debug.Print "Paging operation error: " & Err.Description
End Sub
```

## Known Issues and Solutions

1. Performance Optimization
```vb
Private Sub OptimizePagerPerformance()
    ' Disable redraw when loading large amounts of data
    Pager1.Enabled = False
    
    ' Perform data loading
    LoadBulkData
    
    Pager1.Enabled = True
    Pager1.Refresh
End Sub
```

2. UI Response Issues
```vb
Private Sub HandleUIResponse()
    Screen.MousePointer = vbHourglass
    
    ' Perform time-consuming operation
    ProcessPageData
    
    Screen.MousePointer = vbDefault
End Sub
```

## Additional Tips

- Provide clear page feedback
- Implement keyboard navigation
- Display loading status
- Optimize data loading
- Handle edge cases
- Display page information
- Implement caching mechanism
- Consider accessibility
- Maintain UI responsiveness
- Clean up resources in Form_Unload

### Special Uses

1. Creating Infinite Scroll
```vb
Private Sub CreateInfiniteScroll()
    With Pager1
        .Mode = PagerModeScroll
        .Max = 1000000 ' Set a large value
        .SmallChange = 1
        .LargeChange = 10
    End With
End Sub

Private Sub Pager1_Change()
    ' Check if more data needs to be loaded
    If Pager1.Position >= LastLoadedPosition Then
        LoadMoreData
    End If
End Sub
```

2. Creating Thumbnail Preview
```vb
Private Sub CreateThumbnailPager()
    ' Set up thumbnail paging
    With Pager1
        .Orientation = OrientationHorizontal
        .Mode = PagerModePage
        .ButtonSize = 50 ' Larger buttons to accommodate thumbnails
    End With
    
    LoadThumbnails
End Sub
```

3. Creating Group Paging
```vb
Private Sub CreateGroupPager()
    ' Set up group paging
    With Pager1
        .Mode = PagerModePage
        .SmallChange = 1
        .LargeChange = GroupSize
    End With
    
    ' Load group data
    LoadGroupData Pager1.Position
End Sub
```
