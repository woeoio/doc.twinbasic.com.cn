# Timer Control (VBCCRTimer)

VBCCRTimer 控件提供了定时器功能，可以按指定的时间间隔触发事件。它可用于实现动画效果、定时任务和周期性操作。

## 属性

### 基本属性
- `Enabled`: 是否启用定时器
- `Interval`: 定时间隔(毫秒)
- `Tag`: 用户自定义数据

## 事件

- `Timer`: 定时器触发时的事件

## 代码示例

### 基本用法

```vb
Private Sub InitTimer()
    With Timer1
        .Interval = 1000  ' 1秒
        .Enabled = True
    End With
End Sub

Private Sub Timer1_Timer()
    ' 更新时间显示
    lblTime.Caption = Format$(Now, "HH:mm:ss")
End Sub
```

### 动画效果

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
        
        ' 加载动画帧
        For i = 1 To .FrameCount
            Set .Images(i) = LoadPicture("frame" & i & ".bmp")
        Next i
        
        .CurrentFrame = 1
        .IsPlaying = False
    End With
    
    ' 设置定时器
    With Timer1
        .Interval = 100  ' 100毫秒
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
        
        ' 显示当前帧
        Set picDisplay.Picture = .Images(.CurrentFrame)
        
        ' 移动到下一帧
        .CurrentFrame = .CurrentFrame + 1
        If .CurrentFrame > .FrameCount Then
            .CurrentFrame = 1
        End If
    End With
End Sub
```

### 定时任务

```vb
Private Type ScheduledTask
    Name As String
    Interval As Long
    LastRun As Date
    NextRun As Date
    IsEnabled As Boolean
    Action As String
End Type

Private Type TaskScheduler
    Tasks() As ScheduledTask
    Count As Long
End Type

Private Scheduler As TaskScheduler

Private Sub InitScheduler()
    ReDim Scheduler.Tasks(1 To 10)
    Scheduler.Count = 0
    
    ' 添加任务
    AddTask "备份", 3600000  ' 1小时
    AddTask "同步", 300000   ' 5分钟
    AddTask "清理", 86400000 ' 24小时
    
    ' 设置定时器
    With Timer1
        .Interval = 1000  ' 1秒检查一次
        .Enabled = True
    End With
End Sub

Private Sub AddTask(ByVal Name As String, _
                   ByVal Interval As Long)
    With Scheduler
        If .Count >= UBound(.Tasks) Then
            ReDim Preserve .Tasks(1 To UBound(.Tasks) + 10)
        End If
        
        .Count = .Count + 1
        
        With .Tasks(.Count)
            .Name = Name
            .Interval = Interval
            .LastRun = Now
            .NextRun = DateAdd("s", Interval \ 1000, .LastRun)
            .IsEnabled = True
            .Action = "Action" & Name
        End With
    End With
End Sub

Private Sub Timer1_Timer()
    Dim CurrentTime As Date
    CurrentTime = Now
    
    ' 检查所有任务
    Dim i As Long
    For i = 1 To Scheduler.Count
        With Scheduler.Tasks(i)
            If .IsEnabled Then
                If CurrentTime >= .NextRun Then
                    ' 执行任务
                    ExecuteTask .Action
                    
                    ' 更新时间
                    .LastRun = CurrentTime
                    .NextRun = DateAdd("s", .Interval \ 1000, .LastRun)
                End If
            End With
        End With
    Next i
End Sub

Private Sub ExecuteTask(ByVal Action As String)
    ' 执行指定的任务
    Select Case Action
        Case "ActionBackup"
            PerformBackup
        Case "ActionSync"
            PerformSync
        Case "ActionCleanup"
            PerformCleanup
    End Select
End Sub
```

### 倒计时

```vb
Private Type CountdownInfo
    StartTime As Date
    Duration As Long
    TimeLeft As Long
    IsRunning As Boolean
End Type

Private Countdown As CountdownInfo

Private Sub StartCountdown(ByVal Seconds As Long)
    With Countdown
        .StartTime = Now
        .Duration = Seconds
        .TimeLeft = Seconds
        .IsRunning = True
    End With
    
    ' 启动定时器
    Timer1.Interval = 1000
    Timer1.Enabled = True
    
    UpdateCountdown
End Sub

Private Sub StopCountdown()
    Countdown.IsRunning = False
    Timer1.Enabled = False
End Sub

Private Sub Timer1_Timer()
    With Countdown
        If Not .IsRunning Then Exit Sub
        
        ' 计算剩余时间
        .TimeLeft = .Duration - _
                   DateDiff("s", .StartTime, Now)
        
        If .TimeLeft <= 0 Then
            ' 倒计时结束
            .TimeLeft = 0
            .IsRunning = False
            Timer1.Enabled = False
            RaiseEvent CountdownComplete
        End If
        
        UpdateCountdown
    End With
End Sub

Private Sub UpdateCountdown()
    With Countdown
        ' 格式化显示
        Dim Minutes As Long
        Dim Seconds As Long
        
        Minutes = .TimeLeft \ 60
        Seconds = .TimeLeft Mod 60
        
        lblCountdown.Caption = Format$(Minutes, "00") & ":" & _
                              Format$(Seconds, "00")
    End With
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Function SafeStartTimer() As Boolean
    On Error GoTo ErrorHandler
    
    Timer1.Enabled = True
    SafeStartTimer = True
    Exit Function
    
ErrorHandler:
    Debug.Print "启动定时器失败: " & Err.Description
    SafeStartTimer = False
End Function
```

2. 资源管理
```vb
Private Sub CleanupTimer()
    ' 确保定时器停止
    Timer1.Enabled = False
    
    ' 清理相关资源
    ' ...
End Sub
```

## 高级特性

### 多重定时器

```vb
Private Type TimerInfo
    ID As Long
    Interval As Long
    StartTime As Date
    LastTick As Date
    IsEnabled As Boolean
    Tag As String
End Type

Private Type TimerManager
    Timers() As TimerInfo
    Count As Long
    MasterTimer As Timer
End Type

Private Manager As TimerManager

Private Sub InitTimerManager()
    Set Manager.MasterTimer = Timer1
    
    With Manager
        ReDim .Timers(1 To 10)
        .Count = 0
        
        ' 设置主定时器
        With .MasterTimer
            .Interval = 100  ' 100毫秒
            .Enabled = True
        End With
    End With
End Sub

Private Function CreateTimer(ByVal Interval As Long, _
                           Optional ByVal Tag As String = "") As Long
    With Manager
        If .Count >= UBound(.Timers) Then
            ReDim Preserve .Timers(1 To UBound(.Timers) + 10)
        End If
        
        .Count = .Count + 1
        
        With .Timers(.Count)
            .ID = .Count
            .Interval = Interval
            .StartTime = Now
            .LastTick = .StartTime
            .IsEnabled = True
            .Tag = Tag
        End With
        
        CreateTimer = .Count
    End With
End Function

Private Sub Timer1_Timer()
    ' 检查所有定时器
    Dim CurrentTime As Date
    CurrentTime = Now
    
    Dim i As Long
    For i = 1 To Manager.Count
        With Manager.Timers(i)
            If .IsEnabled Then
                Dim TimeSinceLastTick As Long
                TimeSinceLastTick = DateDiff("s", .LastTick, CurrentTime) * 1000
                
                If TimeSinceLastTick >= .Interval Then
                    ' 触发定时器事件
                    RaiseEvent TimerTick(.ID)
                    .LastTick = CurrentTime
                End If
            End With
        End With
    Next i
End Sub
```

### 精确定时器

```vb
Private Type PreciseTimer
    Frequency As Currency
    StartCount As Currency
    CurrentCount As Currency
    TargetTime As Double
    IsHighRes As Boolean
End Type

Private Precise As PreciseTimer

Private Declare Function QueryPerformanceCounter Lib "kernel32" _
        (lpPerformanceCount As Currency) As Long
        
Private Declare Function QueryPerformanceFrequency Lib "kernel32" _
        (lpFrequency As Currency) As Long

Private Sub InitPreciseTimer()
    With Precise
        ' 检查是否支持高精度计时器
        .IsHighRes = (QueryPerformanceFrequency(.Frequency) <> 0)
        
        If .IsHighRes Then
            ' 获取起始计数
            QueryPerformanceCounter .StartCount
            .TargetTime = 0
        End If
    End With
End Sub

Private Function GetPreciseTime() As Double
    If Precise.IsHighRes Then
        Dim CurrentCount As Currency
        QueryPerformanceCounter CurrentCount
        
        ' 计算经过的时间(秒)
        GetPreciseTime = (CurrentCount - Precise.StartCount) / _
                        Precise.Frequency
    Else
        ' 使用普通计时器
        GetPreciseTime = Timer
    End If
End Function

Private Sub WaitPrecise(ByVal Milliseconds As Long)
    If Not Precise.IsHighRes Then
        ' 使用普通延时
        Sleep Milliseconds
        Exit Sub
    End If
    
    Dim StartTime As Double
    Dim EndTime As Double
    
    StartTime = GetPreciseTime()
    EndTime = StartTime + (Milliseconds / 1000#)
    
    Do While GetPreciseTime() < EndTime
        DoEvents
    Loop
End Sub
```

### 智能定时器

```vb
Private Type SmartTimer
    BaseInterval As Long
    MinInterval As Long
    MaxInterval As Long
    CurrentInterval As Long
    LoadThreshold As Double
    LastExecutionTime As Long
End Type

Private Smart As SmartTimer

Private Sub InitSmartTimer()
    With Smart
        .BaseInterval = 1000    ' 基础间隔1秒
        .MinInterval = 100      ' 最小间隔100毫秒
        .MaxInterval = 5000     ' 最大间隔5秒
        .CurrentInterval = .BaseInterval
        .LoadThreshold = 0.8    ' 80%负载阈值
        .LastExecutionTime = 0
    End With
    
    Timer1.Interval = Smart.CurrentInterval
    Timer1.Enabled = True
End Sub

Private Sub Timer1_Timer()
    Dim StartTime As Long
    StartTime = GetTickCount()
    
    ' 执行定时任务
    ExecuteTimerTask
    
    ' 计算执行时间
    Dim ExecutionTime As Long
    ExecutionTime = GetTickCount() - StartTime
    
    ' 调整间隔
    AdjustInterval ExecutionTime
End Sub

Private Sub AdjustInterval(ByVal ExecutionTime As Long)
    With Smart
        ' 计算负载比例
        Dim LoadRatio As Double
        LoadRatio = ExecutionTime / .CurrentInterval
        
        If LoadRatio > .LoadThreshold Then
            ' 负载过高，增加间隔
            .CurrentInterval = .CurrentInterval * 1.5
            If .CurrentInterval > .MaxInterval Then
                .CurrentInterval = .MaxInterval
            End If
        ElseIf LoadRatio < .LoadThreshold * 0.5 Then
            ' 负载较低，减少间隔
            .CurrentInterval = .CurrentInterval * 0.8
            If .CurrentInterval < .MinInterval Then
                .CurrentInterval = .MinInterval
            End If
        End If
        
        ' 更新定时器间隔
        Timer1.Interval = .CurrentInterval
    End With
End Sub
```

这些示例展示了 Timer 控件的主要功能和高级用法。它可以用于创建动画效果、定时任务管理、倒计时等功能，并支持多重定时器、精确定时和智能负载调整。
