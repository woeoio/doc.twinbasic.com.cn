# ThreadPool Advanced Application Examples

## 1. Batch File Processing

### Image Processing Task
```vb
Public Function ImageProcessTaskProc(ByVal param As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(param)
    
    ' Get processing parameters
    Dim inputPath As String: inputPath = task.GetTaskData("inputPath")
    Dim outputPath As String: outputPath = task.GetTaskData("outputPath")
    Dim quality As Long: quality = task.GetTaskData("quality")
    Dim maxSize As Long: maxSize = task.GetTaskData("maxSize")
    
    ' Record progress during processing
    task.SetTaskResult "status", "processing"
    task.SetTaskResult "progress", 0
    
    ' Execute image processing...
    
    ' Record results
    task.SetTaskResult "outputSize", FileLen(outputPath)
    task.SetTaskResult "processingTime", Timer - startTime
    task.SetTaskResult "status", "completed"
    
    ImageProcessTaskProc = 0
End Function
```

### Data Export Task
```vb
' Create export task
With New cTask
    .SetTaskData "format", "CSV"
    .SetTaskData "query", "SELECT * FROM Sales WHERE Year = 2025"
    .SetTaskData "parameters", CreateObject("Scripting.Dictionary")
    .SetTaskData "outputPath", "D:\exports\sales_2025.csv"
    .Create AddressOf ExportTaskProc
End With
```

## 2. Asynchronous API Calls

### Web API Request Chain
```vb
Public Function ChainedAPITaskProc(ByVal param As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(param)
    
    ' First API call
    task.SetTaskResult "step1Status", "running"
    ' ... execute call ...
    task.SetTaskResult "step1Result", response1
    
    ' Execute second call based on first call result
    Dim response1 As Dictionary
    Set response1 = task.GetTaskResult("step1Result")
    
    task.SetTaskResult "step2Status", "running"
    ' ... execute second call ...
    task.SetTaskResult "step2Result", response2
    
    ChainedAPITaskProc = 0
End Function
```

## 3. Real-time Data Processing

### Stock Data Monitoring
```vb
Public Function StockMonitorTaskProc(ByVal param As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(param)
    
    Dim symbols As Variant
    symbols = task.GetTaskData("symbols")  ' Stock symbol array
    Dim interval As Long
    interval = task.GetTaskData("interval") ' Update interval
    
    Do While Not task.CancelRequested
        ' Get latest data
        task.SetTaskResult "lastUpdate", Now
        task.SetTaskResult "prices", GetCurrentPrices(symbols)
        
        ' Check alert conditions
        CheckAlertConditions task
        
        Sleep interval
    Loop
    
    StockMonitorTaskProc = 0
End Function

Private Sub CheckAlertConditions(task As cTask)
    Dim alerts As Dictionary
    Set alerts = task.GetTaskData("alertConditions")
    
    ' Process alerts...
    task.SetTaskResult "triggeredAlerts", triggeredAlerts
End Sub
```

## 4. Multi-task Cooperation

### Master-Worker Task Pattern
```vb
' Master task
Public Function MasterTaskProc(ByVal param As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(param)
    
    ' Create sub-task list
    Dim subTasks As New Collection
    For i = 1 To 5
        Dim subTask As New cTask
        With subTask
            .SetTaskData "masterTask", task
            .SetTaskData "workerId", i
            .Create AddressOf WorkerTaskProc
        End With
        subTasks.Add subTask
    Next i
    
    ' Wait for all sub-tasks to complete
    task.SetTaskResult "subTasks", subTasks
    WaitForSubTasks subTasks
    
    ' Merge results
    MergeResults task, subTasks
    
    MasterTaskProc = 0
End Function

' Worker task
Public Function WorkerTaskProc(ByVal param As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(param)
    
    Dim workerId As Long
    workerId = task.GetTaskData("workerId")
    
    ' Execute assigned work...
    task.SetTaskResult "workerResult", result
    
    WorkerTaskProc = 0
End Function
```

## 5. Progress Reporting and Status Updates

### Long-running Task
```vb
Public Function LongRunningTaskProc(ByVal param As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(param)
    
    Dim totalSteps As Long
    totalSteps = task.GetTaskData("totalSteps")
    
    For i = 1 To totalSteps
        If task.CancelRequested Then Exit For
        
        ' Update progress
        task.SetTaskResult "currentStep", i
        task.SetTaskResult "progress", i / totalSteps * 100
        task.SetTaskResult "status", "Processing step " & i
        
        ' Execute step...
        
        ' Update step result
        task.SetTaskResult "step" & i & "Result", stepResult
    Next i
    
    task.SetTaskResult "status", "Completed"
    LongRunningTaskProc = 0
End Function
```
