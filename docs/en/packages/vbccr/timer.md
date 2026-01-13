# Timer Control (VBCCRTimer)

The VBCCRTimer control provides timer functionality that can trigger events at specified time intervals. It can be used to implement animation effects, scheduled tasks, and periodic operations.

## Properties

### Basic Properties
- `Enabled`: Whether the timer is enabled
- `Interval`: Time interval (milliseconds)
- `Tag`: User-defined data

## Events

- `Timer`: Event triggered when the timer fires

## Code Examples

### Basic Usage

```vb
Private Sub InitTimer()
    With Timer1
        .Interval = 1000  ' 1 second
        .Enabled = True
    End With
End Sub

Private Sub Timer1_Timer()
    ' Update time display
    lblTime.Caption = Format$(Now, "HH:mm:ss")
End Sub
```

### Animation Effects

```vb
Private Type AnimationInfo
    CurrentFrame As Long
    FrameCount As Long
    Images() As Picture
    IsPlaying As Boolean
End Type

Private Animation As AnimationInfo

Private Sub InitAnimation()
    With Animation
        .FrameCount = 4
        ReDim .Images(1 To .FrameCount)
        
        ' Load animation frames
        For i = 1 To .FrameCount
            Set .Images(i) = LoadPicture("frame" & i & ".bmp")
        Next i
        
        .CurrentFrame = 1
        .IsPlaying = False
    End With
    
    ' Set up timer
    With Timer1
        .Interval = 100  ' 100 milliseconds
        .Enabled = False
    End With
End Sub

Private Sub PlayAnimation()
    Animation.IsPlaying = True
    Timer1.Enabled = True
End Sub

Private Sub StopAnimation()
    Animation.IsPlaying = False
    Timer1.Enabled = False
End Sub

Private Sub Timer1_Timer()
    With Animation
        If Not .IsPlaying Then Exit Sub
        
        ' Display current frame
        Set picDisplay.Picture = .Images(.CurrentFrame)
        
        ' Move to next frame
        .CurrentFrame = .CurrentFrame + 1
        If .CurrentFrame > .FrameCount Then
            .CurrentFrame = 1
        End If
    End With
End Sub
```

### Scheduled Tasks

```vb
Private Type ScheduledTask
    Name As String
    Interval As Long
    LastRun As Date
    NextRun As Date
    IsEnabled As Boolean
End Type

Private Tasks() As ScheduledTask
Private TaskCount As Long

Private Sub InitScheduler()
    ' Initialize task array
    ReDim Tasks(1 To 10)
    TaskCount = 0
    
    ' Set up scheduler timer
    With Timer1
        .Interval = 1000  ' Check every second
        .Enabled = True
    End With
End Sub

Private Sub AddTask(TaskName As String, Interval As Long)
    TaskCount = TaskCount + 1
    With Tasks(TaskCount)
        .Name = TaskName
        .Interval = Interval
        .LastRun = Now
        .NextRun = DateAdd("s", Interval, .LastRun)
        .IsEnabled = True
    End With
End Sub

Private Sub Timer1_Timer()
    Dim i As Long
    
    For i = 1 To TaskCount
        With Tasks(i)
            If .IsEnabled And Now >= .NextRun Then
                ExecuteTask .Name
                .LastRun = Now
                .NextRun = DateAdd("s", .Interval, .LastRun)
            End If
        End With
    Next i
End Sub

Private Sub ExecuteTask(TaskName As String)
    Select Case TaskName
        Case "Backup"
            PerformBackup
        Case "Refresh"
            RefreshData
        Case "Cleanup"
            CleanupTemp
    End Select
End Sub
```

### Progress Indicator

```vb
Private Progress As Long
Private MaxProgress As Long

Private Sub StartProgress()
    Progress = 0
    MaxProgress = 100
    
    With Timer1
        .Interval = 50  ' Update every 50ms
        .Enabled = True
    End With
    
    ' Initialize progress bar
    ProgressBar1.Min = 0
    ProgressBar1.Max = MaxProgress
    ProgressBar1.Value = 0
End Sub

Private Sub Timer1_Timer()
    Progress = Progress + 1
    
    ' Update progress bar
    ProgressBar1.Value = Progress
    
    ' Check if complete
    If Progress >= MaxProgress Then
        Timer1.Enabled = False
        MsgBox "Operation Complete!", vbInformation
    End If
End Sub
```

## Common Use Cases

### Auto-Save Feature

```vb
Private Sub InitAutoSave()
    With Timer1
        .Interval = 300000  ' 5 minutes
        .Enabled = True
    End With
End Sub

Private Sub Timer1_Timer()
    If DocumentModified Then
        AutoSaveDocument
    End If
End Sub

Private Sub AutoSaveDocument()
    On Error GoTo ErrorHandler
    SaveDocument App.Path & "\AutoSave.bak"
    Exit Sub
    
ErrorHandler:
    Debug.Print "AutoSave Error: " & Err.Description
End Sub
```

### Real-time Data Update

```vb
Private Sub SetupDataUpdate()
    With Timer1
        .Interval = 5000  ' 5 seconds
        .Enabled = True
    End With
End Sub

Private Sub Timer1_Timer()
    ' Update data display
    UpdateStockPrices
    UpdateExchangeRates
    UpdateSystemStatus
End Sub
```

## Best Practices

1. Timer Management
```vb
Private Sub ManageTimer()
    On Error GoTo ErrorHandler
    
    ' Save timer state
    Dim WasEnabled As Boolean
    WasEnabled = Timer1.Enabled
    
    ' Disable timer during operation
    Timer1.Enabled = False
    
    ' Perform time-sensitive operation
    ProcessData
    
    ' Restore timer state
    Timer1.Enabled = WasEnabled
    Exit Sub
    
ErrorHandler:
    Debug.Print "Timer error: " & Err.Description
    Timer1.Enabled = WasEnabled
End Sub
```

2. Performance Optimization
```vb
Private Sub OptimizeTimer()
    Static LastUpdate As Single
    
    ' Limit update frequency
    If Timer - LastUpdate < 0.1 Then Exit Sub
    
    ' Perform update
    UpdateDisplay
    LastUpdate = Timer
End Sub
```

## Known Issues and Solutions

1. Timer Accuracy
```vb
Private Sub HandleTimerAccuracy()
    ' Use Windows API for high-precision timing
    Declare Function timeGetTime Lib "winmm.dll" () As Long
    
    Static LastTick As Long
    Dim CurrentTick As Long
    
    CurrentTick = timeGetTime()
    If CurrentTick - LastTick >= Timer1.Interval Then
        PerformTimerOperation
        LastTick = CurrentTick
    End If
End Sub
```

2. Resource Management
```vb
Private Sub CleanupTimer()
    ' Disable timer before cleanup
    Timer1.Enabled = False
    
    ' Clean up resources
    Set Timer1 = Nothing
End Sub
```

## Additional Tips

1. Multiple Timer Synchronization
```vb
Private Sub SynchronizeTimers()
    ' Primary timer for coordination
    Timer1.Interval = 100  ' Base interval
    
    ' Secondary timers
    Timer2.Interval = Timer1.Interval * 2  ' Double interval
    Timer3.Interval = Timer1.Interval * 4  ' Quadruple interval
    
    ' Start timers in sequence
    Timer1.Enabled = True
    Timer2.Enabled = True
    Timer3.Enabled = True
End Sub
```

2. Timer Events Queue
```vb
Private Type TimerEvent
    EventTime As Date
    EventType As String
    EventData As Variant
End Type

Private TimerEvents() As TimerEvent
Private EventCount As Long

Private Sub QueueTimerEvent(EventType As String, _
                          DelaySeconds As Long, _
                          Optional EventData As Variant)
    EventCount = EventCount + 1
    ReDim Preserve TimerEvents(1 To EventCount)
    
    With TimerEvents(EventCount)
        .EventTime = DateAdd("s", DelaySeconds, Now)
        .EventType = EventType
        If Not IsMissing(EventData) Then
            .EventData = EventData
        End If
    End With
End Sub
```

3. Timer State Management
```vb
Private Sub SaveTimerState()
    ' Save timer settings to registry
    SaveSetting App.Title, "Timer", "Interval", Timer1.Interval
    SaveSetting App.Title, "Timer", "Enabled", Timer1.Enabled
End Sub

Private Sub RestoreTimerState()
    ' Restore timer settings from registry
    Timer1.Interval = GetSetting(App.Title, "Timer", "Interval", 1000)
    Timer1.Enabled = GetSetting(App.Title, "Timer", "Enabled", False)
End Sub
```
