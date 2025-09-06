# ThreadPool Troubleshooting Guide

## 1. Common Issues and Solutions

### Tasks Not Starting
#### Symptoms
- Task not executing after creation
- `IsRunning` returns False
- No error messages

#### Possible Causes
1. Invalid task procedure address
2. Resource limitations
3. Thread creation failure

#### Solutions
```vb
' Check task procedure address
Public Function ValidateTaskProc(taskProc As LongPtr) As Boolean
    If taskProc = 0 Then
        Debug.Print "Invalid task procedure address"
        ValidateTaskProc = False
        Exit Function
    End If
    
    ' Other validations...
    ValidateTaskProc = True
End Function

' Resource check
Public Function CheckSystemResources() As Boolean
    ' Check system resources
    Dim availableMemory As Long
    availableMemory = GetAvailableMemory()
    
    If availableMemory < MINIMUM_REQUIRED_MEMORY Then
        Debug.Print "Insufficient system memory"
        CheckSystemResources = False
        Exit Function
    End If
    
    CheckSystemResources = True
End Function
```

### Tasks Hanging
#### Symptoms
- Task remains in running state for extended time
- No progress updates
- Cannot be cancelled

#### Diagnostic Steps
1. Check task status
2. Analyze task logs
3. Check resource usage

```vb
Public Sub DiagnoseHungTask(task As cTask)
    ' Collect diagnostic information
    Debug.Print "Task Status Diagnosis:"
    Debug.Print "Runtime: " & task.ExecutionTime & "ms"
    Debug.Print "Current status: " & task.GetTaskResult("status")
    Debug.Print "Last progress update: " & task.GetTaskResult("lastProgressUpdate")
    Debug.Print "Resource usage:"
    
    ' Get detailed task information
    Dim taskInfo As Dictionary
    Set taskInfo = GetTaskDebugInfo(task)
    
    For Each key In taskInfo.Keys
        Debug.Print key & ": " & taskInfo(key)
    Next
End Sub
```

### Memory Leaks
#### Symptoms
- Memory usage continuously growing
- Performance gradually degrading
- Task execution slowing down

#### Investigation Methods
1. Monitor object references
2. Track resource allocation
3. Check circular references

```vb
' Memory usage tracking
Public Sub TrackMemoryUsage(task As cTask)
    Static lastCheck As Date
    Static memoryReadings As Collection
    
    If memoryReadings Is Nothing Then
        Set memoryReadings = New Collection
    End If
    
    ' Record memory usage every minute
    If DateDiff("s", lastCheck, Now) >= 60 Then
        Dim usage As Dictionary
        Set usage = New Dictionary
        
        usage.Add "timestamp", Now
        usage.Add "memoryUsage", GetProcessMemoryUsage()
        usage.Add "taskObjects", CountTaskObjects()
        
        memoryReadings.Add usage
        lastCheck = Now
        
        ' Analyze memory trend
        AnalyzeMemoryTrend memoryReadings
    End If
End Sub
```

### Deadlock Issues
#### Symptoms
- Multiple tasks waiting for each other
- System response slowing down
- Task execution stuck

#### Solutions
1. Implement deadlock detection
2. Use lock timeouts
3. Avoid nested locks

```vb
' Deadlock detection
Public Sub DetectDeadlock(tasks As Collection)
    Dim lockGraph As Dictionary
    Set lockGraph = BuildLockGraph(tasks)
    
    If HasCycle(lockGraph) Then
        ' Potential deadlock detected
        LogDeadlockSituation lockGraph
        
        ' Attempt resolution
        ResolveDeadlock tasks
    End If
End Sub

' Lock acquisition with timeout
Public Function TryLockWithTimeout(ByVal timeoutMs As Long) As Boolean
    Dim result As Long
    result = WaitForSingleObject(m_StateLock, timeoutMs)
    
    Select Case result
        Case WAIT_OBJECT_0
            TryLockWithTimeout = True
        Case WAIT_TIMEOUT
            ' Record lock timeout
            LogLockTimeout
            TryLockWithTimeout = False
        Case Else
            ' Handle other errors
            HandleLockError result
            TryLockWithTimeout = False
    End Select
End Function
```

## 2. Performance Issue Diagnosis

### Performance Monitoring
```vb
' Performance monitoring wrapper
Public Function MonitorTaskPerformance(task As cTask) As Dictionary
    Dim metrics As New Dictionary
    
    ' Collect basic metrics
    metrics.Add "executionTime", task.ExecutionTime
    metrics.Add "cpuUsage", GetTaskCPUUsage(task.ThreadID)
    metrics.Add "memoryUsage", GetTaskMemoryUsage(task.ThreadID)
    
    ' Analyze performance bottlenecks
    AnalyzePerformanceBottlenecks metrics
    
    Set MonitorTaskPerformance = metrics
End Function
```

### Performance Optimization Recommendations
1. Use performance profiling tools
2. Optimize data structure usage
3. Reduce lock contention
4. Optimize resource usage

## 3. Log Analysis

### Log Levels
```vb
Public Enum LogLevel
    LogLevel_Error = 1
    LogLevel_Warning = 2
    LogLevel_Info = 3
    LogLevel_Debug = 4
End Enum

' Enhanced logging
Public Sub LogTaskEvent(task As cTask, level As LogLevel, message As String)
    If level <= GetCurrentLogLevel() Then
        Dim logEntry As String
        logEntry = BuildLogEntry(task, level, message)
        WriteToLog logEntry
        
        ' For error level, additionally log diagnostic information
        If level = LogLevel_Error Then
            LogDiagnosticInfo task
        End If
    End If
End Sub
```

### Log Analysis Tools
```vb
' Log analyzer
Public Function AnalyzeTaskLogs(task As cTask) As Dictionary
    Dim analysis As New Dictionary
    
    ' Get task logs
    Dim logs As Object
    Set logs = task.GetTaskResult("eventLog")
    
    ' Analyze error patterns
    analysis.Add "errorPatterns", AnalyzeErrorPatterns(logs)
    
    ' Analyze performance patterns
    analysis.Add "performanceMetrics", AnalyzePerformanceMetrics(logs)
    
    ' Generate recommendations
    analysis.Add "recommendations", GenerateRecommendations(analysis)
    
    Set AnalyzeTaskLogs = analysis
End Function
```

## 4. Debug Techniques

### Debug Helper Functions
```vb
' Task status snapshot
Public Function CaptureTaskSnapshot(task As cTask) As Dictionary
    Dim snapshot As New Dictionary
    
    ' Basic information
    snapshot.Add "threadId", task.ThreadID
    snapshot.Add "status", task.GetTaskResult("status")
    snapshot.Add "runtime", task.ExecutionTime
    
    ' Task data
    Dim taskData As New Dictionary
    For Each key In task.GetTaskDataKeys
        taskData.Add key, task.GetTaskData(key)
    Next
    snapshot.Add "taskData", taskData
    
    ' Task results
    Dim taskResults As New Dictionary
    For Each key In task.GetTaskResultKeys
        taskResults.Add key, task.GetTaskResult(key)
    Next
    snapshot.Add "taskResults", taskResults
    
    Set CaptureTaskSnapshot = snapshot
End Function

' Debug checkpoint
Public Sub DebugCheckpoint(task As cTask, checkpoint As String)
    Static checkpoints As Dictionary
    If checkpoints Is Nothing Then Set checkpoints = New Dictionary
    
    ' Record checkpoint time
    If Not checkpoints.Exists(checkpoint) Then
        checkpoints.Add checkpoint, Now
    End If
    
    ' Analyze execution time
    Dim timeSpent As Double
    timeSpent = DateDiff("s", checkpoints(checkpoint), Now)
    
    ' Log checkpoint information
    LogTaskEvent task, LogLevel_Debug, _
                "Checkpoint: " & checkpoint & _
                ", Time spent: " & timeSpent & "s"
End Sub
```

## 5. Best Practices

### Preventive Measures
1. Implement health checks
2. Set reasonable timeouts
3. Use assertions for validation
4. Implement graceful degradation

```vb
' Task health check
Public Function CheckTaskHealth(task As cTask) As Boolean
    ' Validate basic state
    If Not ValidateTaskState(task) Then
        LogTaskEvent task, LogLevel_Warning, "Task state abnormal"
        Exit Function
    End If
    
    ' Check resource usage
    If Not CheckResourceUsage(task) Then
        LogTaskEvent task, LogLevel_Warning, "Resource usage abnormal"
        Exit Function
    End If
    
    ' Validate data consistency
    If Not ValidateTaskData(task) Then
        LogTaskEvent task, LogLevel_Warning, "Data consistency check failed"
        Exit Function
    End If
    
    CheckTaskHealth = True
End Function
```

### Emergency Handling
1. Implement emergency stop mechanism
2. Save critical data
3. Log detailed information
4. Notify relevant personnel

```vb
' Emergency handling
Public Sub HandleEmergency(task As cTask, emergency As String)
    ' Log emergency situation
    LogTaskEvent task, LogLevel_Error, "Emergency: " & emergency
    
    ' Save task state
    SaveTaskState task
    
    ' Notify monitoring system
    NotifyMonitoringSystem task, emergency
    
    ' Perform emergency cleanup
    EmergencyCleanup task
End Sub
```

## 6. Failure Recovery

### Automatic Recovery Strategy
```vb
Public Sub AttemptTaskRecovery(task As cTask)
    ' Analyze failure cause
    Dim failureReason As String
    failureReason = AnalyzeFailure(task)
    
    ' Select recovery strategy
    Select Case failureReason
        Case "timeout"
            HandleTimeoutRecovery task
        Case "resource_exhaustion"
            HandleResourceRecovery task
        Case "deadlock"
            HandleDeadlockRecovery task
        Case Else
            HandleGenericRecovery task
    End Select
End Sub
```

### Data Recovery
```vb
' Task state recovery
Public Function RestoreTaskState(task As cTask) As Boolean
    ' Attempt recovery from backup
    If RestoreFromBackup(task) Then
        LogTaskEvent task, LogLevel_Info, "Restored from backup"
        RestoreTaskState = True
        Exit Function
    End If
    
    ' Attempt to rebuild state
    If RebuildTaskState(task) Then
        LogTaskEvent task, LogLevel_Info, "Task state rebuilt"
        RestoreTaskState = True
        Exit Function
    End If
    
    RestoreTaskState = False
End Function
```
