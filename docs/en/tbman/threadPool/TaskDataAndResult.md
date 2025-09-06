# Task Data and Result Management

## Overview
The ThreadPool library provides a flexible mechanism for task data passing and result storage. Through the `TaskData` and `TaskResult` collections, we can conveniently pass and store various types of data before, during, and after task execution.

## Key Features

1. **Type Safety**
   - Supports arbitrary types of data, including basic types and objects
   - Automatically handles assignment of object and non-object types

2. **Named Parameters**
   - Uses string keys to access data
   - Clearer and more structured than traditional `Tag` properties
   - Supports simultaneous storage of multiple parameters and results

3. **Thread Safety**
   - All data access is protected by mutexes
   - Ensures data consistency in multithreaded environments

4. **Flexibility**
   - Supports dynamic addition and modification of data
   - Can update results at any time during task execution
   - Supports passing of complex data structures

## API Reference

### TaskData Related Methods

```vb
' Set task input parameters
Public Sub SetTaskData(ByVal Key As String, ByVal Value As Variant)

' Get task input parameters
Public Function GetTaskData(ByVal Key As String) As Variant

' Clear all task data
Public Sub ClearTaskData()

' Get all task data keys
Public Function GetTaskDataKeys() As Collection
```

### TaskResult Related Methods

```vb
' Set task result
Public Sub SetTaskResult(ByVal Key As String, ByVal Value As Variant)

' Get task result
Public Function GetTaskResult(ByVal Key As String) As Variant

' Clear all task results
Public Sub ClearTaskResults()

' Get all task result keys
Public Function GetTaskResultKeys() As Collection
```

## Usage Examples

### Basic Usage

```vb
' Create task and set input parameters
Dim task As New cTask
With task
    .SetTaskData "url", "http://example.com"
    .SetTaskData "timeout", 5000
    .SetTaskData "headers", CreateObject("Scripting.Dictionary")
End With

' Start task
task.Create AddressOf DownloadTaskProc
```

### Using in Task Procedures

```vb
Public Function DownloadTaskProc(ByVal param As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(param)
    
    ' Get input parameters
    Dim url As String
    url = task.GetTaskData("url")
    Dim timeout As Long
    timeout = task.GetTaskData("timeout")
    
    ' Perform download...
    
    ' Set results
    task.SetTaskResult "statusCode", 200
    task.SetTaskResult "content", content
    task.SetTaskResult "responseTime", Timer
    task.SetTaskResult "headers", responseHeaders
    
    DownloadTaskProc = 0
End Function
```

### Processing Results in Callbacks

```vb
Public Function TaskCompletedCallback(ByVal taskPtr As LongPtr, _
                                    ByVal result As Long, _
                                    ByVal wParam As LongPtr, _
                                    ByVal lParam As LongPtr) As Long
    Dim task As cTask
    Set task = mTask.ObjectFromPtr(taskPtr)
    
    ' Get results
    Dim statusCode As Long
    statusCode = task.GetTaskResult("statusCode")
    Dim content As String
    content = task.GetTaskResult("content")
    
    ' Process results...
    Debug.Print "Download completed: Status=" & statusCode & _
                ", Content length=" & Len(content)
    
    TaskCompletedCallback = 0
End Function
```

## Best Practices

1. **Parameter Naming Conventions**
   - Use clear, descriptive key names
   - Recommend using camelCase naming
   - Related parameters can use common prefixes

2. **Error Handling**
   - Always check return values of GetTaskData/GetTaskResult
   - Use On Error to handle possible exceptions

```vb
On Error Resume Next
Dim value As Variant
value = task.GetTaskData("someKey")
If Err.Number <> 0 Then
    ' Handle error...
    Exit Function
End If
On Error GoTo 0
```

3. **Resource Management**
   - Clean up data no longer needed promptly (use ClearTaskData/ClearTaskResults)
   - For large objects, set to Nothing after use

4. **Concurrency Considerations**
   - Avoid overly long data access operations
   - Consider using additional synchronization mechanisms in critical sections

## Application Scenarios

1. **Web Request Processing**
   - Pass URL, headers, request parameters
   - Store response status, content, metadata

2. **File Operations**
   - Pass file paths, operation options
   - Store processing results, statistics

3. **Data Processing**
   - Pass datasets, processing parameters
   - Store processing results, statistical data

4. **Multi-step Tasks**
   - Pass data between different steps
   - Accumulate intermediate results

## Important Notes

1. Avoid storing overly large data objects, which may affect performance
2. Clean up data no longer needed promptly
3. Pay attention to lock usage in high-concurrency scenarios
4. Recommend providing default values for critical data
5. Regularly check and maintain data consistency

## Summary

The TaskData and TaskResult mechanism provides a powerful and flexible way to handle task-related data passing and result storage. By properly using this mechanism, code maintainability and extensibility can be significantly improved.
