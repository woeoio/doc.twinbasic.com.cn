# ProgressBar Control (VBCCRProgressBar)

VBCCRProgressBar control is used to display the progress of an operation. It can show progress horizontally or vertically and supports various styles and visual effects.

## Properties

### Key Properties

- `Value`: Current progress value
- `Min`: Minimum value
- `Max`: Maximum value
- `Orientation`: Direction (horizontal or vertical)
- `Scrolling`: Scrolling style
- `Smooth`: Whether to use smooth display
- `State`: State (normal, paused, error, etc.)
- `Step`: Step value
- `BackColor`: Background color
- `ForeColor`: Progress bar color
- `ShowText`: Whether to show progress text

## Methods

### Main Methods

- `Value = NewValue`: Set current value
- `StepIt()`: Increase by step value
- `Refresh()`: Refresh display

## Events

- `Change()`: Triggered when value changes
- `Click()`: Triggered when clicked
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With ProgressBar1
        .Min = 0
        .Max = 100
        .Value = 0
        .Smooth = True
        .ShowText = True
    End With
End Sub
```

### Progress Update

```vb
Private Sub UpdateProgress(ByVal Percent As Long)
    With ProgressBar1
        .Value = Percent
        
        ' Update state color
        If Percent < 30 Then
            .State = pbsNormal
        ElseIf Percent < 70 Then
            .State = pbsPaused
        Else
            .State = pbsError
        End If
    End With
End Sub
```

### Progress Animation

```vb
Private Sub StartProgressAnimation()
    With ProgressBar1
        .Min = 0
        .Max = 100
        .Value = 0
        .Step = 1
        .Scrolling = True ' Use scrolling animation
    End With
    
    Timer1.Interval = 50
    Timer1.Enabled = True
End Sub

Private Sub Timer1_Timer()
    With ProgressBar1
        If .Value >= .Max Then
            Timer1.Enabled = False
            MsgBox "Operation completed!"
        Else
            .StepIt
        End If
    End With
End Sub
```

## Common Use Cases

### File Copy Progress

```vb
Private Sub CopyWithProgress(ByVal SourceFile As String, ByVal DestFile As String)
    Dim FileSize As Long
    Dim BytesCopied As Long
    Const BUFFER_SIZE As Long = 4096
    
    ' Get file size
    FileSize = FileLen(SourceFile)
    
    With ProgressBar1
        .Min = 0
        .Max = FileSize
        .Value = 0
        .ShowText = True
    End With
    
    ' Copy file and update progress
    Open SourceFile For Binary As #1
    Open DestFile For Binary As #2
    
    Do While BytesCopied < FileSize
        ' Copy data
        If FileSize - BytesCopied > BUFFER_SIZE Then
            BytesCopied = BytesCopied + BUFFER_SIZE
        Else
            BytesCopied = FileSize
        End If
        
        ' Update progress
        ProgressBar1.Value = BytesCopied
        DoEvents
    Loop
    
    Close #1
    Close #2
End Sub
```

### Multi-Stage Progress

```vb
Private Sub ShowMultiStageProgress()
    Dim Stages(1 To 3) As String
    Dim CurrentStage As Integer
    
    ' Define stages
    Stages(1) = "Preparing Data"
    Stages(2) = "Processing Data"
    Stages(3) = "Saving Results"
    
    With ProgressBar1
        .Min = 0
        .Max = 100
        .Value = 0
    End With
    
    ' Execute stages
    For CurrentStage = 1 To 3
        lblStage.Caption = Stages(CurrentStage)
        ProcessStage CurrentStage
    Next CurrentStage
End Sub

Private Sub ProcessStage(ByVal Stage As Integer)
    Dim i As Long
    Dim StartProgress As Long
    Dim EndProgress As Long
    
    ' Calculate progress range for current stage
    StartProgress = (Stage - 1) * 33
    EndProgress = Stage * 33
    
    For i = StartProgress To EndProgress
        ProgressBar1.Value = i
        DoEvents
        Sleep 50 ' Simulate processing time
    Next i
End Sub
```

## Best Practices

1. Progress Calculation
```vb
Private Function CalculateProgress(ByVal Current As Long, _
                                 ByVal Total As Long) As Long
    If Total <= 0 Then Exit Function
    CalculateProgress = CLng((Current / Total) * 100)
End Function
```

2. Error Handling
```vb
Private Sub SafeUpdateProgress(ByVal NewValue As Long)
    On Error GoTo ErrorHandler
    
    With ProgressBar1
        If NewValue < .Min Then
            .Value = .Min
        ElseIf NewValue > .Max Then
            .Value = .Max
        Else
            .Value = NewValue
        End If
    End With
    Exit Sub
    
ErrorHandler:
    Debug.Print "Progress update error: " & Err.Description
End Sub
```

## Known Issues and Solutions

1. Refresh Issues
```vb
Private Sub FixRefreshIssues()
    ProgressBar1.Visible = False
    ProgressBar1.Value = NewValue
    ProgressBar1.Visible = True
End Sub
```

2. Performance Optimization
```vb
Private Sub OptimizeUpdates()
    ' Reduce update frequency
    Static LastUpdate As Long
    
    If GetTickCount() - LastUpdate > 100 Then
        ProgressBar1.Value = NewValue
        DoEvents
        LastUpdate = GetTickCount()
    End If
End Sub
```

## Additional Tips

- Provide progress feedback
- Display remaining time
- Handle cancellation
- Implement pause functionality
- Show detailed information
- Handle long operations
- Provide visual feedback
- Keep UI responsive
- Mind accuracy
- Clean up resources in Form_Unload

### Special Uses

1. Creating Dual Progress Bar
```vb
Private Sub CreateDualProgressBar()
    ' Main progress bar
    With ProgressBar1
        .Top = 20
        .Height = 20
        .Value = 0
    End With
    
    ' Sub progress bar
    With ProgressBar2
        .Top = ProgressBar1.Top + ProgressBar1.Height + 5
        .Height = 15
        .Value = 0
    End With
End Sub
```

2. Creating Progress Indicator
```vb
Private Sub CreateProgressIndicator()
    With ProgressBar1
        .Min = 0
        .Max = 100
        .Scrolling = True
        .ShowText = False
        .State = pbsNormal
    End With
    
    Timer1.Interval = 50
    Timer1.Enabled = True
End Sub
```

3. Creating Step Progress Bar
```vb
Private Sub CreateStepProgressBar()
    Dim TotalSteps As Long
    TotalSteps = 5
    
    With ProgressBar1
        .Min = 0
        .Max = TotalSteps
        .Value = 0
        .Step = 1
        .ShowText = True
    End With
End Sub
```
