# Advanced Features

## Task Priority Management

### Priority Mechanism

The thread pool supports the following priority levels:

```vb
Public Enum TaskPriority
    Priority_Low = 0
    Priority_Normal = 1
    Priority_High = 2
    Priority_Critical = 3
End Enum
```

### Using Priorities

1. Specify when creating tasks:
```vb
' Create high priority task
Dim task As cTask
Set task = pool.AddTask(AddressOf MyProc, param, Priority_High)
```

2. Dynamically modify priority:
```vb
' Modify existing task priority
task.Priority = Priority_Critical
```

### Priority Scheduling Strategy

- High priority tasks execute first
- Same priority tasks execute in FIFO order
- Newly added high priority tasks can preempt low priority tasks in the waiting queue

## Error Handling Mechanism

### Error States

Possible error states for tasks:
```vb
Public Enum TaskResult
    TaskResult_Success = 0
    TaskResult_Failed = 1
    TaskResult_Cancelled = 2
    TaskResult_TimedOut = 3
    TaskResult_Exception = 4
End Enum
```

### Error Tracking

Each task maintains detailed error information:
```vb
' Get error information
Debug.Print "Error code: " & task.LastError
Debug.Print "Error description: " & task.ErrorDescription
```

### Error Callbacks

```vb
' Error handling callback
Public Function OnError(ByVal taskPtr As LongPtr, _
                       ByVal errorCode As Long, _
                       ByVal wParam As LongPtr, _
                       ByVal lParam As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(taskPtr)
    
    ' Log error
    Debug.Print "Task failed: " & task.ErrorDescription
    
    ' Decide whether to retry
    If errorCode = SomeRetryableError Then
        OnError = 1  ' Return 1 indicates retry needed
    Else
        OnError = 0  ' Return 0 indicates no more retries
    End If
End Function
```

## Performance Monitoring

### Statistical Information

The thread pool provides detailed performance statistics:

```vb
' Get thread pool statistics
Debug.Print "Total threads: " & pool.ThreadCount
Debug.Print "Active threads: " & pool.ActiveThreadCount
Debug.Print "Pending tasks: " & pool.PendingTaskCount
Debug.Print "Completed tasks: " & pool.CompletedTaskCount
Debug.Print "Average execution time: " & pool.AverageTaskTime & "ms"
```

### Performance Logging

```vb
' Enable performance logging
pool.EnablePerformanceLog "C:\threadpool.log"

' Log content example:
' 2023-09-05 10:30:15 Task started ID=1
' 2023-09-05 10:30:16 Task completed ID=1 execution time=1023ms
' 2023-09-05 10:30:16 Thread pool status: active=3/4 pending=5
```

## Automatic Load Balancing

### Auto-Scaling Configuration

```vb
' Configure auto-scaling
pool.SetAutoScale True, _
    minThreads:=2, _       ' Minimum threads
    maxThreads:=8, _       ' Maximum threads
    loadFactor:=0.75       ' Load factor
```

### Scaling Trigger Conditions

- Current load = active threads / total threads
- If current load > loadFactor, attempt to increase threads
- If current load < loadFactor/2, attempt to decrease threads
- Always maintain minimum thread count

### Load Monitoring

```vb
' Get current load situation
Dim load As Double
load = pool.GetCurrentLoad  ' Returns value between 0-1

' Adjust strategy based on load
If load > 0.9 Then
    ' Load too high, can temporarily increase thread count
    pool.SetMaxThreads pool.ThreadCount + 2
End If
```

## Task Dependency Management

### Setting Task Dependencies

```vb
' Create dependent tasks
Dim task1 As cTask, task2 As cTask
Set task1 = pool.AddTask(AddressOf Proc1)
Set task2 = pool.AddTask(AddressOf Proc2)

' Set dependency relationship
task2.AddDependency task1  ' task2 depends on task1
```

### Dependency Execution Rules

- Dependent tasks must wait for prerequisite tasks to complete
- If prerequisite task fails, dependent task will not execute
- Supports multiple dependencies (AND relationship)

### Dependency Chain Example

```vb
' Create task chain
Dim task1 As cTask, task2 As cTask, task3 As cTask
Set task1 = pool.AddTask(AddressOf Step1)
Set task2 = pool.AddTask(AddressOf Step2)
Set task3 = pool.AddTask(AddressOf Step3)

' Set dependency chain
task2.AddDependency task1
task3.AddDependency task2

' Start task chain
task1.Start
```

## Resource Management

### Thread Pool Resource Control

```vb
' Set thread pool resource limits
pool.SetResourceLimits _
    maxMemory:=1024 * 1024 * 100, _  ' 100MB memory limit
    maxCpu:=75                        ' Maximum 75% CPU usage
```

### Resource Monitoring

```vb
' Monitor resource usage
Dim memUsage As Long
memUsage = pool.GetMemoryUsage  ' Get current memory usage

' Adjust strategy based on resource usage
If memUsage > pool.MaxMemory * 0.9 Then
    ' Memory usage approaching limit, take action
    pool.PauseNewTasks  ' Pause accepting new tasks
End If
```

## Task Cancellation and Timeout

### Cancellation Mechanism

```vb
' Cancellable task procedure
Public Function CancellableProc(ByVal param As Variant) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(param)
    
    Do
        If task.CancelRequested Then
            ' Clean up resources
            CleanupResources
            CancellableProc = TaskResult_Cancelled
            Exit Function
        End If
        
        ' Execute task steps...
        
    Loop
End Function

' Request task cancellation
task.RequestCancel
```

### Timeout Handling

```vb
' Set task timeout
task.SetTimeout 5000  ' 5 second timeout

' Timeout callback
Public Function OnTimeout(ByVal taskPtr As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(taskPtr)
    
    ' Perform timeout cleanup
    CleanupResources
    
    OnTimeout = TaskResult_TimedOut
End Function
```

## Logging and Debugging

### Enable Debug Logging

```vb
' Configure logging
pool.SetLogLevel LogLevel_Debug
pool.SetLogFile "C:\threadpool_debug.log"
```

### Log Callbacks

```vb
' Custom log handling
Public Function LogHandler(ByVal level As Long, _
                         ByVal message As String) As Long
    ' Handle log messages
    Select Case level
        Case LogLevel_Error
            LogToEventLog message
        Case LogLevel_Debug
            Debug.Print message
    End Select
End Function

' Set log callback
pool.SetLogCallback AddressOf LogHandler
```
