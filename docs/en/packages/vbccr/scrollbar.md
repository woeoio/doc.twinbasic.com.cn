# ScrollBar Control (VBCCRScrollBar)

VBCCRScrollBar control provides a scrollbar interface that can be used to adjust values or scroll content. It supports both horizontal and vertical orientations and allows customization of scroll range, step size, and other properties.

## Properties

### Key Properties

- `Value`: Current value
- `Min`: Minimum value
- `Max`: Maximum value
- `SmallChange`: Small step size (change amount when clicking arrows)
- `LargeChange`: Large step size (change amount when clicking scrollbar blank area)
- `Orientation`: Direction (horizontal/vertical)
- `Enabled`: Enable/disable state
- `Visible`: Visibility
- `ScrollWidth`: Scrollbar width

## Methods

### Main Methods

- `Value = NewValue`: Set current value
- `SetRange(Min As Long, Max As Long)`: Set value range
- `GetRange(Min As Long, Max As Long)`: Get value range
- `Refresh`: Refresh display

## Events

- `Change()`: Value change event
- `Scroll()`: Scroll event
- `GotFocus()`: Got focus event
- `LostFocus()`: Lost focus event

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Configure scrollbar
    With ScrollBar1
        .Min = 0
        .Max = 100
        .Value = 50
        .SmallChange = 1
        .LargeChange = 10
        .Orientation = vbVertical
    End With
End Sub
```

### Linking with TextBox

```vb
Private Sub SyncWithTextBox()
    ' Configure scrollbar
    With ScrollBar1
        .Min = 0
        .Max = 100
        .Value = 0
        .SmallChange = 1
        .LargeChange = 5
    End With
    
    ' Update textbox
    UpdateTextBox
End Sub

Private Sub ScrollBar1_Change()
    UpdateTextBox
End Sub

Private Sub ScrollBar1_Scroll()
    UpdateTextBox
End Sub

Private Sub UpdateTextBox()
    Text1.Text = Format$(ScrollBar1.Value, "0")
End Sub

Private Sub Text1_Change()
    ' Validate input
    If IsNumeric(Text1.Text) Then
        Dim Value As Long
        Value = Val(Text1.Text)
        
        ' Ensure value is within range
        If Value >= ScrollBar1.Min And Value <= ScrollBar1.Max Then
            ScrollBar1.Value = Value
        End If
    End If
End Sub
```

### Zoom Control

```vb
Private Type ZoomInfo
    MinZoom As Long
    MaxZoom As Long
    CurrentZoom As Long
End Type

Private Zoom As ZoomInfo

Private Sub InitializeZoom()
    With Zoom
        .MinZoom = 25    ' 25%
        .MaxZoom = 400   ' 400%
        .CurrentZoom = 100  ' 100%
    End With
    
    ' Configure scrollbar
    With ScrollBar1
        .Min = Zoom.MinZoom
        .Max = Zoom.MaxZoom
        .Value = Zoom.CurrentZoom
        .SmallChange = 5
        .LargeChange = 25
    End With
    
    ' Update display
    UpdateZoom
End Sub

Private Sub ScrollBar1_Change()
    Zoom.CurrentZoom = ScrollBar1.Value
    UpdateZoom
End Sub

Private Sub UpdateZoom()
    ' Update zoom ratio
    lblZoom.Caption = Format$(Zoom.CurrentZoom, "0") & "%"
    
    ' Adjust display
    AdjustDisplay
End Sub

Private Sub AdjustDisplay()
    ' Adjust display based on zoom ratio
    Dim Scale As Double
    Scale = Zoom.CurrentZoom / 100
    
    ' Adjust image size
    picDisplay.Width = picOriginal.Width * Scale
    picDisplay.Height = picOriginal.Height * Scale
End Sub
```

## Common Use Cases

### Content Scrolling

```vb
Private Type ScrollInfo
    ContentWidth As Long    ' Content width
    ContentHeight As Long   ' Content height
    ViewportWidth As Long   ' Viewport width
    ViewportHeight As Long  ' Viewport height
    ScrollX As Long         ' Horizontal scroll position
    ScrollY As Long         ' Vertical scroll position
End Type

Private Scroll As ScrollInfo

Private Sub SetupScrollBars()
    ' Calculate scroll range
    With Scroll
        .ContentWidth = picContent.Width
        .ContentHeight = picContent.Height
        .ViewportWidth = fraView.Width
        .ViewportHeight = fraView.Height
        
        ' Configure horizontal scrollbar
        With hScroll
            .Min = 0
            .Max = Max(0, Scroll.ContentWidth - Scroll.ViewportWidth)
            .LargeChange = Scroll.ViewportWidth \ 10
            .SmallChange = .LargeChange \ 5
            .Enabled = (.Max > 0)
        End With
        
        ' Configure vertical scrollbar
        With vScroll
            .Min = 0
            .Max = Max(0, Scroll.ContentHeight - Scroll.ViewportHeight)
            .LargeChange = Scroll.ViewportHeight \ 10
            .SmallChange = .LargeChange \ 5
            .Enabled = (.Max > 0)
        End With
    End With
    
    ' Update display
    UpdateScroll
End Sub

Private Sub UpdateScroll()
    ' Update scroll position
    With Scroll
        .ScrollX = hScroll.Value
        .ScrollY = vScroll.Value
        
        ' Move content
        picContent.Move -.ScrollX, -.ScrollY
    End With
End Sub

Private Sub hScroll_Change()
    UpdateScroll
End Sub

Private Sub vScroll_Change()
    UpdateScroll
End Sub
```

### Slider Control

```vb
Private Type SliderInfo
    MinValue As Long
    MaxValue As Long
    Value As Long
    Format As String
End Type

Private Slider As SliderInfo

Private Sub CreateSlider()
    ' Configure slider
    With Slider
        .MinValue = 0
        .MaxValue = 1000
        .Value = 500
        .Format = "#,##0"
    End With
    
    ' Set up scrollbar
    With ScrollBar1
        .Min = Slider.MinValue
        .Max = Slider.MaxValue
        .Value = Slider.Value
        .SmallChange = 1
        .LargeChange = 10
    End With
    
    ' Update display
    UpdateSlider
End Sub

Private Sub ScrollBar1_Change()
    Slider.Value = ScrollBar1.Value
    UpdateSlider
End Sub

Private Sub UpdateSlider()
    ' Update display
    lblValue.Caption = Format$(Slider.Value, Slider.Format)
    
    ' Update indicator position
    UpdateIndicator
End Sub

Private Sub UpdateIndicator()
    ' Calculate indicator position
    Dim Percent As Double
    Percent = (Slider.Value - Slider.MinValue) / _
             (Slider.MaxValue - Slider.MinValue)
    
    ' Move indicator
    shpIndicator.Left = ScrollBar1.Left + _
                       (ScrollBar1.Width - shpIndicator.Width) * Percent
End Sub
```

## Best Practices

1. Value Validation
```vb
Private Function ValidateValue(ByVal NewValue As Long) As Long
    ' Ensure value is within range
    If NewValue < ScrollBar1.Min Then
        ValidateValue = ScrollBar1.Min
    ElseIf NewValue > ScrollBar1.Max Then
        ValidateValue = ScrollBar1.Max
    Else
        ValidateValue = NewValue
    End If
End Function
```

2. Error Handling
```vb
Private Function SafeSetValue(ByVal NewValue As Long) As Boolean
    On Error GoTo ErrorHandler
    
    ScrollBar1.Value = ValidateValue(NewValue)
    SafeSetValue = True
    Exit Function
    
ErrorHandler:
    Debug.Print "Error setting scrollbar value: " & Err.Description
    SafeSetValue = False
End Function
```

## Known Issues and Solutions

1. Scroll Response
```vb
Private Sub OptimizeScrollResponse()
    ' Use timer to delay updates
    Static TimerID As Long
    
    If TimerID Then KillTimer Me.hWnd, TimerID
    TimerID = SetTimer(Me.hWnd, 1, 100, AddressOf TimerProc)
End Sub

Private Sub TimerProc()
    ' Perform update
    UpdateDisplay
End Sub
```

2. Synchronization Issues
```vb
Private Sub SynchronizeScrollBars()
    ' Synchronize multiple scrollbars
    With ScrollBar1
        ScrollBar2.Value = .Value
        ScrollBar3.Value = .Value
    End With
End Sub
```

## Advanced Features

### Smooth Scrolling

```vb
Private Type SmoothScroll
    StartValue As Long
    EndValue As Long
    CurrentValue As Long
    StepCount As Long
    CurrentStep As Long
    Timer As Long
End Type

Private Smooth As SmoothScroll

Private Sub StartSmoothScroll(ByVal Target As Long)
    With Smooth
        .StartValue = ScrollBar1.Value
        .EndValue = Target
        .StepCount = 10
        .CurrentStep = 0
        
        If .Timer = 0 Then
            .Timer = SetTimer(Me.hWnd, 1, 50, AddressOf SmoothScrollProc)
        End If
    End With
End Sub

Private Sub SmoothScrollProc()
    With Smooth
        .CurrentStep = .CurrentStep + 1
        
        If .CurrentStep > .StepCount Then
            ' Complete scroll
            ScrollBar1.Value = .EndValue
            KillTimer Me.hWnd, .Timer
            .Timer = 0
        Else
            ' Calculate intermediate value
            Dim Progress As Double
            Progress = .CurrentStep / .StepCount
            
            ScrollBar1.Value = .StartValue + _
                             (.EndValue - .StartValue) * Progress
        End If
    End With
End Sub
```

### Custom Appearance

```vb
Private Type ScrollBarColors
    Background As Long
    Thumb As Long
    ThumbHot As Long
    Arrow As Long
    ArrowHot As Long
End Type

Private Colors As ScrollBarColors

Private Sub CustomizeAppearance()
    ' Set colors
    With Colors
        .Background = RGB(240, 240, 240)
        .Thumb = RGB(200, 200, 200)
        .ThumbHot = RGB(180, 180, 180)
        .Arrow = RGB(100, 100, 100)
        .ArrowHot = RGB(80, 80, 80)
    End With
    
    ' Apply custom appearance
    With ScrollBar1
        .BackColor = Colors.Background
        .Style = vbCustom
    End With
End Sub

Private Sub ScrollBar1_DrawItem(ByVal ItemType As Integer, _
                              ByVal State As Integer, _
                              ByVal X As Long, _
                              ByVal Y As Long, _
                              ByVal Width As Long, _
                              ByVal Height As Long)
    ' Draw scrollbar elements
    Select Case ItemType
        Case sbTrack  ' Track
            DrawTrack X, Y, Width, Height
            
        Case sbThumb  ' Thumb
            DrawThumb X, Y, Width, Height, (State And vbHot)
            
        Case sbUpArrow, sbDownArrow  ' Arrows
            DrawArrow X, Y, Width, Height, ItemType, (State And vbHot)
    End Select
End Sub
```

### Virtual Scrolling

```vb
Private Type VirtualScroll
    TotalItems As Long     ' Total number of items
    ItemHeight As Long     ' Item height
    VisibleItems As Long   ' Number of visible items
    FirstVisible As Long   ' First visible item
End Type

Private Virtual As VirtualScroll

Private Sub SetupVirtualScroll()
    With Virtual
        .TotalItems = 1000000  ' Large number of items
        .ItemHeight = 20       ' Height per item
        .VisibleItems = fraView.Height \ .ItemHeight
        .FirstVisible = 0
    End With
    
    ' Configure scrollbar
    With ScrollBar1
        .Min = 0
        .Max = Virtual.TotalItems - Virtual.VisibleItems
        .SmallChange = 1
        .LargeChange = Virtual.VisibleItems
    End With
    
    ' Update display
    UpdateVirtualDisplay
End Sub

Private Sub UpdateVirtualDisplay()
    Virtual.FirstVisible = ScrollBar1.Value
    
    ' Clear display
    fraView.Cls
    
    ' Only draw visible items
    Dim i As Long
    For i = Virtual.FirstVisible To _
        Virtual.FirstVisible + Virtual.VisibleItems - 1
        
        If i < Virtual.TotalItems Then
            DrawItem i
        End If
    Next i
End Sub

Private Sub DrawItem(ByVal Index As Long)
    ' Calculate item position
    Dim Y As Long
    Y = (Index - Virtual.FirstVisible) * Virtual.ItemHeight
    
    ' Draw item
    fraView.CurrentY = Y
    fraView.Print "Item " & Index
End Sub
```

### Progress Indicator

```vb
Private Type ProgressInfo
    Min As Long
    Max As Long
    Value As Long
    ShowPercent As Boolean
End Type

Private Progress As ProgressInfo

Private Sub CreateProgressBar()
    ' Configure progress bar
    With Progress
        .Min = 0
        .Max = 100
        .Value = 0
        .ShowPercent = True
    End With
    
    ' Set up scrollbar
    With ScrollBar1
        .Min = Progress.Min
        .Max = Progress.Max
        .Value = Progress.Value
        .Enabled = False  ' Disable user interaction
    End With
    
    ' Update display
    UpdateProgress
End Sub

Private Sub UpdateProgress(Optional ByVal NewValue As Long = -1)
    If NewValue >= 0 Then
        Progress.Value = NewValue
    End If
    
    ' Update scrollbar
    ScrollBar1.Value = Progress.Value
    
    ' Show progress
    If Progress.ShowPercent Then
        Dim Percent As Long
        Percent = Progress.Value * 100 \ Progress.Max
        lblProgress.Caption = Format$(Percent, "0") & "%"
    End If
End Sub

Private Sub StartProgress()
    ' Simulate progress
    Dim i As Long
    For i = Progress.Min To Progress.Max
        UpdateProgress i
        DoEvents
        Sleep 100  ' Delay
    Next i
End Sub
```
