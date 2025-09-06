# API Reference Documentation

## cTasks Class

The main thread pool class responsible for managing threads and task queues.

### Properties

#### ThreadCount
- **Type**: Long
- **Description**: Gets the current number of threads in the thread pool
- **Access Level**: Read-only
- **Example**:
```vb
Debug.Print "Current thread count: " & pool.ThreadCount
```

#### ActiveThreadCount
- **Type**: Long
- **Description**: Gets the current number of threads executing tasks
- **Access Level**: Read-only
- **Example**:
```vb
Debug.Print "Active thread count: " & pool.ActiveThreadCount
```

#### PendingTaskCount
- **Type**: Long
- **Description**: Gets the number of tasks waiting for execution
- **Access Level**: Read-only
- **Example**:
```vb
Debug.Print "Pending task count: " & pool.PendingTaskCount
```

### Methods

#### Create
```vb
Public Function Create(ByVal threadCount As Long) As Boolean
```
- **Description**: Creates a thread pool with the specified number of threads
- **Parameters**: 
  - threadCount: Number of threads to create
- **Return Value**: Returns True if creation is successful
- **Example**:
```vb
Dim pool As New cTasks
pool.Create 4  ' Create a pool with 4 threads
```

#### AddTask
```vb
Public Function AddTask(ByVal proc As LongPtr, _
                       Optional ByVal param As Variant, _
                       Optional ByVal priority As TaskPriority = Priority_Normal) As cTask
```
- **Description**: Adds a new task to the thread pool
- **Parameters**:
  - proc: Address of the task procedure
  - param: Parameter to pass to the task (optional)
  - priority: Task priority (optional)
- **Return Value**: The newly created task object
- **Example**:
```vb
Dim task As cTask
Set task = pool.AddTask(AddressOf MyProc, "parameter", Priority_High)
```

#### WaitForAll
```vb
Public Function WaitForAll(Optional ByVal timeout As Long = INFINITE) As Boolean
```
- **Description**: Waits for all tasks to complete
- **Parameters**:
  - timeout: Timeout in milliseconds, defaults to infinite wait
- **Return Value**: Returns True if all tasks complete
- **Example**:
```vb
' Wait for all tasks to complete, maximum 10 seconds
If Not pool.WaitForAll(10000) Then
    Debug.Print "Some tasks did not complete"
End If
```

#### Shutdown
```vb
Public Sub Shutdown(Optional ByVal graceful As Boolean = True)
```
- **Description**: Shuts down the thread pool
- **Parameters**:
  - graceful: Whether to shut down gracefully, True waits for task completion
- **Example**:
```vb
' Graceful shutdown, wait for task completion
pool.Shutdown True

' Force shutdown, don't wait for tasks
pool.Shutdown False
```

#### SetAutoScale
```vb
Public Sub SetAutoScale(ByVal enabled As Boolean, _
                       Optional ByVal minThreads As Long = 2, _
                       Optional ByVal loadFactor As Double = 0.75)
```
- **Description**: Sets thread pool auto-scaling
- **Parameters**:
  - enabled: Whether to enable auto-scaling
  - minThreads: Minimum number of threads
  - loadFactor: Load factor (0-1)
- **Example**:
```vb
' Enable auto-scaling, minimum 2 threads, load factor 0.75
pool.SetAutoScale True, 2, 0.75
```

## cTask Class

The task encapsulation class providing task control and state management.

### Properties

#### Status
- **Type**: TaskStatus enumeration
- **Description**: Gets the current status of the task
- **Possible Values**:
  - TaskStatus_Created: Created
  - TaskStatus_Running: Running
  - TaskStatus_Completed: Completed
  - TaskStatus_Failed: Failed
  - TaskStatus_Cancelled: Cancelled
  - TaskStatus_TimedOut: Timed out

#### IsRunning
- **Type**: Boolean
- **Description**: Whether the task is currently running

#### IsCompleted
- **Type**: Boolean
- **Description**: Whether the task has completed

#### Result
- **Type**: Long
- **Description**: Gets the task execution result

### Methods

#### Create
```vb
Public Function Create(ByVal proc As LongPtr, _
                      Optional ByVal param As Variant) As Boolean
```
- **Description**: Creates a new task
- **Parameters**:
  - proc: Task procedure address
  - param: Task parameter (optional)
- **Return Value**: Returns True if creation is successful

#### SetTimeout
```vb
Public Sub SetTimeout(ByVal milliseconds As Long)
```
- **Description**: Sets task timeout
- **Parameters**:
  - milliseconds: Timeout in milliseconds

#### SetRetryPolicy
```vb
Public Sub SetRetryPolicy(ByVal maxRetries As Long, _
                         ByVal retryInterval As Long)
```
- **Description**: Sets retry policy
- **Parameters**:
  - maxRetries: Maximum number of retries
  - retryInterval: Retry interval in milliseconds

#### SetOnComplete
```vb
Public Sub SetOnComplete(ByVal callback As LongPtr)
```
- **Description**: Sets completion callback
- **Parameters**:
  - callback: Callback function address

#### SetOnError
```vb
Public Sub SetOnError(ByVal callback As LongPtr)
```
- **Description**: Sets error callback
- **Parameters**:
  - callback: Callback function address

#### WaitForCompletion
```vb
Public Function WaitForCompletion(Optional ByVal timeout As Long = INFINITE) As Boolean
```
- **Description**: Waits for task completion
- **Parameters**:
  - timeout: Timeout in milliseconds
- **Return Value**: Returns True if task completes

#### RequestCancel
```vb
Public Sub RequestCancel()
```
- **Description**: Requests task cancellation
