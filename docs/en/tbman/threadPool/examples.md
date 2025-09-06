# Examples

## Basic Examples

### 1. Simple Task Execution

```vb
' Simple task procedure
Public Function SimpleTask(ByVal param As Variant) As Long
    Debug.Print "Executing task: " & param
    Sleep 1000  ' Simulate time-consuming operation
    SimpleTask = 0  ' Return success
End Function

' Usage example
Public Sub SimpleTaskDemo()
    ' Create thread pool
    Dim pool As New cTasks
    pool.Create 4  ' 4 threads
    
    ' Add task
    Dim task As cTask
    Set task = pool.AddTask(AddressOf SimpleTask, "Hello")
    
    ' Wait for completion
    task.WaitForCompletion
    
    ' Check result
    If task.Result = 0 Then
        Debug.Print "Task completed successfully"
    Else
        Debug.Print "Task failed"
    End If
End Sub
```

### 2. Batch Task Processing

```vb
Public Sub BatchTaskDemo()
    ' Create thread pool
    Dim pool As New cTasks
    pool.Create 4
    
    ' Create multiple tasks
    Dim i As Long
    For i = 1 To 10
        pool.AddTask AddressOf SimpleTask, "Task" & i
    Next i
    
    ' Wait for all tasks to complete
    If pool.WaitForAll(10000) Then  ' 10 second timeout
        Debug.Print "All tasks completed"
    Else
        Debug.Print "Some tasks did not complete"
    End If
End Sub
```

## Intermediate Examples

### 1. Tasks with Callbacks

```vb
' Task completion callback
Public Function TaskCompleted(ByVal taskPtr As LongPtr, _
                            ByVal result As Long, _
                            ByVal wParam As LongPtr, _
                            ByVal lParam As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(taskPtr)
    
    Debug.Print "Task completed: " & task.Tag
    Debug.Print "Execution time: " & task.ExecutionTime & "ms"
    
    TaskCompleted = 0
End Function

' Error callback
Public Function TaskError(ByVal taskPtr As LongPtr, _
                         ByVal errorCode As Long, _
                         ByVal wParam As LongPtr, _
                         ByVal lParam As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(taskPtr)
    
    Debug.Print "Task error: " & task.ErrorDescription
    
    TaskError = 0
End Function

' Usage example
Public Sub CallbackDemo()
    Dim pool As New cTasks
    pool.Create 4
    
    Dim task As cTask
    Set task = pool.AddTask(AddressOf SimpleTask, "Task with callback")
    
    ' Set callbacks
    task.SetOnComplete AddressOf TaskCompleted
    task.SetOnError AddressOf TaskError
    
    ' Wait for completion
    task.WaitForCompletion
End Sub
```

### 2. File Download Example

```vb
' Download information structure
Private Type DownloadInfo
    Url As String
    OutputFile As String
End Type

' Download procedure
Public Function DownloadProc(ByVal param As Variant) As Long
    Dim info As DownloadInfo
    info = param
    
    ' Create HTTP request
    Dim http As Object
    Set http = CreateObject("WinHttp.WinHttpRequest.5.1")
    
    On Error GoTo ErrorHandler
    
    ' Send request
    http.Open "GET", info.Url, False
    http.Send
    
    ' Check response
    If http.Status = 200 Then
        ' Save file
        Dim fNum As Integer
        fNum = FreeFile
        Open info.OutputFile For Binary As #fNum
            Put #fNum, , http.ResponseBody
        Close #fNum
        DownloadProc = 0
    Else
        DownloadProc = http.Status
    End If
    Exit Function
    
ErrorHandler:
    DownloadProc = Err.Number
End Function

' Download demonstration
Public Sub DownloadDemo()
    Dim pool As New cTasks
    pool.Create 4
    
    ' Prepare download information
    Dim info As DownloadInfo
    info.Url = "https://example.com/file.txt"
    info.OutputFile = "C:\download\file.txt"
    
    ' Create download task
    Dim task As cTask
    Set task = pool.AddTask(AddressOf DownloadProc, info)
    
    ' Set timeout and retry
    task.SetTimeout 30000        ' 30 second timeout
    task.SetRetryPolicy 3, 1000  ' Maximum 3 retries
    
    ' Wait for completion
    If task.WaitForCompletion Then
        If task.Result = 0 Then
            Debug.Print "Download successful"
        Else
            Debug.Print "Download failed: " & task.Result
        End If
    Else
        Debug.Print "Download timed out"
    End If
End Sub
```

## Advanced Examples

### 1. Task Dependency Chain

```vb
' Dependency task example
Public Sub DependencyDemo()
    Dim pool As New cTasks
    pool.Create 4
    
    ' Create task chain
    Dim task1 As cTask, task2 As cTask, task3 As cTask
    
    ' First task: prepare data
    Set task1 = pool.AddTask(AddressOf PrepareData)
    task1.Tag = "Prepare Data"
    
    ' Second task: process data
    Set task2 = pool.AddTask(AddressOf ProcessData)
    task2.Tag = "Process Data"
    task2.AddDependency task1  ' Depends on task1
    
    ' Third task: save result
    Set task3 = pool.AddTask(AddressOf SaveResult)
    task3.Tag = "Save Result"
    task3.AddDependency task2  ' Depends on task2
    
    ' Wait for entire chain to complete
    pool.WaitForAll
End Sub
```

### 2. Auto-Scaling Thread Pool

```vb
' Stress test task
Public Function StressTask(ByVal param As Variant) As Long
    ' Simulate tasks with different loads
    Dim duration As Long
    duration = Int(Rnd * 5000) + 1000  ' 1-6 second random duration
    Sleep duration
    StressTask = 0
End Function

' Auto-scaling example
Public Sub AutoScaleDemo()
    Dim pool As New cTasks
    pool.Create 4  ' Initial 4 threads
    
    ' Configure auto-scaling
    pool.SetAutoScale True, _
        minThreads:=2, _
        maxThreads:=8, _
        loadFactor:=0.75
    
    ' Enable performance logging
    pool.EnablePerformanceLog "C:\poolstress.log"
    
    ' Add many tasks
    Dim i As Long
    For i = 1 To 50
        pool.AddTask AddressOf StressTask, "Stress Test" & i
        Sleep 100  ' Add tasks with intervals
    Next i
    
    ' Wait for all tasks to complete
    pool.WaitForAll
    
    ' Output statistics
    Debug.Print "Average execution time: " & pool.AverageTaskTime & "ms"
    Debug.Print "Peak thread count: " & pool.PeakThreadCount
End Sub
```

### 3. Complex Error Handling

```vb
' Error handling example
Public Sub ErrorHandlingDemo()
    Dim pool As New cTasks
    pool.Create 4
    
    ' Set global error handler
    pool.SetErrorHandler AddressOf GlobalErrorHandler
    
    ' Add potentially failing task
    Dim task As cTask
    Set task = pool.AddTask(AddressOf RiskyTask)
    
    ' Set retry policy
    task.SetRetryPolicy 3, 1000
    
    ' Set custom error handler
    task.SetOnError AddressOf CustomErrorHandler
    
    ' Wait for completion
    task.WaitForCompletion
    
    ' Check error status
    If task.LastError <> 0 Then
        Debug.Print "Task failed:"
        Debug.Print "Error code: " & task.LastError
        Debug.Print "Error description: " & task.ErrorDescription
        Debug.Print "Retry count: " & task.RetryCount
    End If
End Sub

' Global error handler
Public Function GlobalErrorHandler(ByVal pool As cTasks, _
                                 ByVal errorCode As Long) As Long
    ' Log error
    Debug.Print "Thread pool error: " & errorCode
    GlobalErrorHandler = True  ' Continue execution
End Function

' Custom error handler
Public Function CustomErrorHandler(ByVal taskPtr As LongPtr, _
                                 ByVal errorCode As Long, _
                                 ByVal wParam As LongPtr, _
                                 ByVal lParam As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(taskPtr)
    
    Select Case errorCode
        Case 1001  ' Custom error code
            ' Special handling
            CustomErrorHandler = 1  ' Request retry
        Case Else
            ' Other errors
            CustomErrorHandler = 0  ' No more retries
    End Select
End Function
```

### 4. UI Update Example

```vb
' UI update example
Public Sub UiUpdateDemo()
    Dim pool As New cTasks
    pool.Create 4
    
    ' Create progress update task
    Dim task As cTask
    Set task = pool.AddTask(AddressOf LongProcess)
    
    ' Set progress callback
    task.SetProgressCallback AddressOf UpdateProgress
    
    ' Wait for completion
    task.WaitForCompletion
End Sub

' Progress update callback
Public Function UpdateProgress(ByVal taskPtr As LongPtr, _
                             ByVal progress As Long, _
                             ByVal wParam As LongPtr, _
                             ByVal lParam As LongPtr) As Long
    ' Note: This is called from worker thread
    ' Need to use PostMessage to update UI
    PostMessage FormHandle, WM_UPDATE_PROGRESS, progress, 0
    UpdateProgress = 0
End Function

' Form code
Private Sub Form_Message(ByVal msg As Long, _
                        ByVal wParam As Long, _
                        ByVal lParam As Long)
    If msg = WM_UPDATE_PROGRESS Then
        ' Update progress bar
        ProgressBar1.Value = wParam
    End If
End Sub
```
