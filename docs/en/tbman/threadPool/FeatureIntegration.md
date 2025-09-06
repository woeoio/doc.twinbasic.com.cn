# ThreadPool Feature Integration Guide

> Important Note: ThreadPool has built-in implementations of the following core features:
> - ⚡ Timeout handling (`SetTimeout`, `HandleTimeout`)
> - 🔄 Retry mechanism (`SetRetryPolicy`, `MaxRetries`, `RetryDelay`)
> - 📊 Performance monitoring (`ExecutionTime`, task status tracking)
> - ⏸️ Pause/Resume (`Pause`, `Resume`)
> - ❌ Cancellation support (`RequestCancel`, `CancelRequested`)
> - 📝 Logging (`EnableLogging`, `WriteLog`)
> 
> This document shows how to combine these built-in features with the new TaskData/Result mechanism to build more powerful task processing solutions.

## 1. Timeout Handling and TaskData/Result Integration

### Utilizing Built-in Timeout Features

### Extending Built-in Timeout Functionality
```vb
' ThreadPool already has built-in timeout handling, this shows how to extend it
With New cTask
    ' Use built-in timeout mechanism
    .SetTimeout 30000                        ' Set overall timeout (built-in feature)
    
    ' Use TaskData/Result to extend timeout handling capabilities
    .SetTaskData "subOperationTimeout", 5000 ' Sub-operation timeout
    .SetTaskData "timeoutAction", "retry"    ' Custom timeout behavior
    .SetTaskData "timeoutRetries", 3         ' Retry count after timeout
End With
```

### Timeout Handling and Result Recording
```vb
Public Function TimeoutAwareTaskProc(ByVal param As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(param)
    
    ' Get timeout configuration
    Dim operationTimeout As Long
    operationTimeout = task.GetTaskData("operationTimeout")
    
    ' Execute operation and record timeout situation
    task.SetTaskResult "startTime", Now
    
    Dim success As Boolean
    success = PerformOperation(operationTimeout)
    
    If Not success Then
        task.SetTaskResult "timedOut", True
        task.SetTaskResult "timeoutDuration", operationTimeout
        task.SetTaskResult "failurePoint", "operation"
    End If
    
    TimeoutAwareTaskProc = IIf(success, 0, 1)
End Function
```

## 2. Retry Mechanism and State Management

### Enhancing Built-in Retry Functionality
```vb
Public Sub ConfigureTaskWithRetry(task As cTask)
    ' Use built-in retry mechanism
    task.SetRetryPolicy 3, 1000  ' Set max retries and delay (built-in feature)
    
    ' Use TaskData/Result to extend retry functionality
    task.SetTaskData "retryBackoff", 2    ' Custom exponential backoff coefficient
    task.SetTaskData "retryConditions", CreateRetryConditions() ' Custom retry conditions
    
    ' Retry status tracking
    task.SetTaskResult "retryCount", 0
    task.SetTaskResult "retryHistory", CreateObject("Scripting.Dictionary")
End Sub

Public Function RetryAwareTaskProc(ByVal param As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(param)
    
    Dim retryCount As Long
    retryCount = task.GetTaskResult("retryCount")
    
    ' Execute operation
    Dim success As Boolean
    success = PerformOperation()
    
    ' Update retry history
    Dim history As Object
    Set history = task.GetTaskResult("retryHistory")
    history.Add Now, "Attempt " & (retryCount + 1) & ": " & IIf(success, "Success", "Failed")
    
    ' Update retry count
    task.SetTaskResult "retryCount", retryCount + 1
    
    RetryAwareTaskProc = IIf(success, 0, 1)
End Function
```

## 3. Progress Reporting and Task Control

### Combining Built-in Control Features
> ThreadPool already provides `Pause`, `Resume`, `RequestCancel` and other control features.
> The following shows how to use TaskData/Result to enhance these features.

```vb
Public Function ProgressAwareTaskProc(ByVal param As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(param)
    
    ' Initialize progress information
    task.SetTaskResult "progress", 0
    task.SetTaskResult "status", "initializing"
    task.SetTaskResult "startTime", Now
    task.SetTaskResult "estimatedCompletion", Empty
    
    ' Processing
    Dim totalSteps As Long
    totalSteps = task.GetTaskData("totalSteps")
    
    For i = 1 To totalSteps
        If task.CancelRequested Then
            ' Record cancellation status
            task.SetTaskResult "cancelTime", Now
            task.SetTaskResult "cancelReason", "user_requested"
            task.SetTaskResult "lastCompletedStep", i - 1
            Exit For
        End If
        
        ' Update progress
        UpdateTaskProgress task, i, totalSteps
        
        ' Execute step...
    Next i
    
    ProgressAwareTaskProc = 0
End Function

Private Sub UpdateTaskProgress(task As cTask, currentStep As Long, totalSteps As Long)
    Dim progress As Double
    progress = currentStep / totalSteps * 100
    
    ' Update progress information
    task.SetTaskResult "progress", progress
    task.SetTaskResult "currentStep", currentStep
    task.SetTaskResult "status", "processing"
    
    ' Calculate estimated completion time
    If currentStep > 1 Then
        Dim startTime As Date
        startTime = task.GetTaskResult("startTime")
        Dim timePerStep As Double
        timePerStep = DateDiff("s", startTime, Now) / (currentStep - 1)
        Dim remainingSteps As Long
        remainingSteps = totalSteps - currentStep
        Dim estimatedCompletion As Date
        estimatedCompletion = DateAdd("s", timePerStep * remainingSteps, Now)
        
        task.SetTaskResult "estimatedCompletion", estimatedCompletion
    End If
End Sub
```

## 4. Logging and Debug Integration

### Extending Built-in Logging Features
> ThreadPool already has basic logging functionality (through `EnableLogging` and `WriteLog`).
> The following shows how to use TaskData/Result to build a more powerful logging and debugging system.
```vb
Private Sub LogTaskEvent(task As cTask, eventType As String, message As String)
    ' Ensure log container exists
    If task.GetTaskResult("eventLog") = Empty Then
        task.SetTaskResult "eventLog", CreateObject("Scripting.Dictionary")
    End If
    
    Dim log As Object
    Set log = task.GetTaskResult("eventLog")
    
    ' Create log entry
    Dim entry As New Dictionary
    With entry
        .Add "timestamp", Now
        .Add "type", eventType
        .Add "message", message
        .Add "taskId", task.ThreadID
        .Add "progress", task.GetTaskResult("progress")
        .Add "status", task.GetTaskResult("status")
    End With
    
    ' Add to log
    log.Add log.Count + 1, entry
    
    ' Write to file if needed
    If task.GetTaskData("logToFile") Then
        WriteLogToFile task, entry
    End If
End Sub
```

### Debug Assistance Features
```vb
Public Function GetTaskDebugInfo(task As cTask) As Dictionary
    Dim debug As New Dictionary
    
    ' Basic information
    debug.Add "threadId", task.ThreadID
    debug.Add "status", task.GetTaskResult("status")
    debug.Add "runtime", DateDiff("s", task.GetTaskResult("startTime"), Now)
    
    ' Performance metrics
    debug.Add "progress", task.GetTaskResult("progress")
    debug.Add "memoryUsage", GetTaskMemoryUsage(task)
    
    ' Error information
    If task.GetTaskResult("lastError") <> Empty Then
        debug.Add "lastError", task.GetTaskResult("lastError")
        debug.Add "errorTimestamp", task.GetTaskResult("errorTime")
    End If
    
    ' Retry information
    debug.Add "retryCount", task.GetTaskResult("retryCount")
    debug.Add "retryHistory", task.GetTaskResult("retryHistory")
    
    Set GetTaskDebugInfo = debug
End Function
```

## 5. Combining Built-in Features with Extended Functionality

### Complete Example: Integrating All Features
> This example shows how to combine ThreadPool's built-in features (timeout, retry, logging, etc.)
> with the TaskData/Result mechanism to build a fully-featured task processing system.
```vb
Public Function ComplexTaskProc(ByVal param As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(param)
    
    ' Initialize
    InitializeTaskTracking task
    
    Do While ShouldRetry(task)
        ' Update retry status
        UpdateRetryStatus task
        
        ' Execute operation with timeout
        Dim success As Boolean
        success = ExecuteWithTimeout(task)
        
        If success Then
            ' Record success
            LogTaskSuccess task
            ComplexTaskProc = 0
            Exit Function
        Else
            ' Record failure
            LogTaskFailure task
            
            ' Check if should retry
            If Not ShouldRetry(task) Then
                ComplexTaskProc = 1
                Exit Function
            End If
            
            ' Wait for retry
            WaitForRetry task
        End If
    Loop
    
    ComplexTaskProc = 1
End Function

Private Sub InitializeTaskTracking(task As cTask)
    ' Initialize all tracking states
    With task
        .SetTaskResult "attempts", 0
        .SetTaskResult "startTime", Now
        .SetTaskResult "status", "initialized"
        .SetTaskResult "lastError", Empty
        .SetTaskResult "progress", 0
    End With
End Sub
```

## Summary

By properly integrating various features, you can build robust, monitorable, high-performance task processing systems. Key points include:

1. Use TaskData/Result to store configuration and state
2. Implement comprehensive progress and status tracking
3. Provide detailed logging and debugging information
4. Handle timeouts and retries gracefully
5. Support cancellation and cleanup operations

The combined use of these features can significantly improve the reliability and maintainability of task processing.
