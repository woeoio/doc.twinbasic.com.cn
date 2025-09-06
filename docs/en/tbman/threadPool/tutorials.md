# Tutorials

## Basic Usage

### 1. Creating a Thread Pool

The most basic way to create a thread pool:

```vb
' Create a pool with 4 threads
Dim pool As New cTasks
pool.Create 4
```

### 2. Adding Simple Tasks

```vb
' Define task procedure
Public Function MyProc(ByVal param As Variant) As Long
    ' Perform some operations
    Debug.Print "Processing task: " & param
    Sleep 1000  ' Simulate time-consuming operation
    MyProc = 0  ' Return success
End Function

' Add task to thread pool
Dim task As cTask
Set task = pool.AddTask(AddressOf MyProc, "Task1")

' Wait for task completion
task.WaitForCompletion
```

### 3. Using Task Callbacks

```vb
' Completion callback
Public Function TaskCompleted(ByVal taskPtr As LongPtr, _
                            ByVal result As Long, _
                            ByVal wParam As LongPtr, _
                            ByVal lParam As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(taskPtr)
    Debug.Print "Task completed, result: " & result
    TaskCompleted = 0
End Function

' Error callback
Public Function TaskError(ByVal taskPtr As LongPtr, _
                         ByVal errorCode As Long, _
                         ByVal wParam As LongPtr, _
                         ByVal lParam As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(taskPtr)
    Debug.Print "Task error: " & errorCode
    TaskError = 0
End Function

' Set callbacks
Dim task As cTask
Set task = pool.AddTask(AddressOf MyProc)
task.SetOnComplete AddressOf TaskCompleted
task.SetOnError AddressOf TaskError
```

## Advanced Usage

### 1. Task Priority

```vb
' Add high priority task
Dim highTask As cTask
Set highTask = pool.AddTask(AddressOf MyProc, "High Priority", Priority_High)

' Add normal priority task
Dim normalTask As cTask
Set normalTask = pool.AddTask(AddressOf MyProc, "Normal Priority", Priority_Normal)
```

### 2. Task Timeout Control

```vb
' Set task timeout
Dim task As cTask
Set task = pool.AddTask(AddressOf MyProc)
task.SetTimeout 5000  ' 5 second timeout

' Wait for task completion
If Not task.WaitForCompletion Then
    Debug.Print "Task timed out or failed"
End If
```

### 3. Task Retry Mechanism

```vb
' Set retry policy
Dim task As cTask
Set task = pool.AddTask(AddressOf MyProc)
task.SetRetryPolicy 3, 1000  ' Maximum 3 retries, 1 second interval
```

### 4. Batch Task Processing

```vb
' Add multiple tasks
Dim tasks() As cTask
ReDim tasks(1 To 10)

' Create 10 tasks
Dim i As Long
For i = 1 To 10
    Set tasks(i) = pool.AddTask(AddressOf MyProc, "Task" & i)
Next i

' Wait for all tasks to complete
pool.WaitForAll 10000  ' Maximum wait 10 seconds
```

### 5. Auto-Scaling Thread Pool

```vb
' Create auto-scaling thread pool
Dim pool As New cTasks
pool.Create 4
pool.SetAutoScale True, 2, 0.75  ' Enable auto-scaling, minimum 2 threads, load factor 0.75
```

## Best Practices

### 1. Error Handling

```vb
' Error handling in task procedure
Public Function MyProc(ByVal param As Variant) As Long
    On Error GoTo ErrorHandler
    
    ' Execute task...
    
    MyProc = 0  ' Success
    Exit Function
    
ErrorHandler:
    MyProc = Err.Number  ' Return error code
End Function
```

### 2. Cancellation Support

```vb
' Cancellable task procedure
Public Function CancellableProc(ByVal param As Variant) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(param)
    
    Do
        ' Check if cancellation is requested
        If task.CancelRequested Then
            CancellableProc = TaskResult_Cancelled
            Exit Function
        End If
        
        ' Perform some operations...
        Sleep 100
    Loop
    
    CancellableProc = 0
End Function
```

### 3. Resource Cleanup

```vb
' Graceful shutdown of thread pool
Private Sub Class_Terminate()
    If Not pool Is Nothing Then
        pool.Shutdown True  ' Wait for task completion
        Set pool = Nothing
    End If
End Sub
```

### 4. Performance Optimization

1. Set Thread Count Appropriately
   - Usually set to 1-2 times the number of CPU cores
   - Consider task type (CPU-intensive or IO-intensive)

2. Avoid Too Small Tasks
   - Task execution time should be significantly greater than thread scheduling overhead
   - Consider merging small tasks

3. Use Task Batching
   - Add tasks in batches rather than one by one
   - Use WaitForAll instead of waiting individually

4. Use Timeouts Appropriately
   - Set reasonable timeout values for all tasks
   - Avoid infinite waiting

## Important Notes

1. Thread Safety
   - Task procedures should be thread-safe
   - Shared resources need appropriate synchronization
   
2. Resource Management
   - Properly release resources
   - Avoid resource leaks
   
3. Error Handling
   - Use error callbacks
   - Log detailed error information
   
4. UI Updates
   - Don't update UI directly from task threads
   - Use PostMessage or similar mechanisms
