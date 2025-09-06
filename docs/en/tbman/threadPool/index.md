# TwinBasic ThreadPool Library

## Introduction

This is a high-performance thread pool library developed for TwinBasic, providing simple yet powerful multithreading programming support. With the thread pool, you can easily manage and reuse thread resources, avoiding the overhead of frequently creating and destroying threads.

![TBMAN](/images/tbman/tbman-http-demo-2.png)

## Key Features

- **Efficient Thread Management**
  - Automatic thread lifecycle management
  - Support for fixed-size and auto-scaling thread pools
  - Intelligent task queue management

- **Rich Task Control**
  - Task priority support
  - Task timeout control
  - Task cancellation mechanism
  - Task retry policies
  - Task dependency relationships

- **Comprehensive Error Handling**
  - Detailed error state tracking
  - Error callback support
  - Complete error logging

- **Powerful Extension Features**
  - Task completion callbacks
  - Performance monitoring statistics
  - Automatic load balancing
  - Logging system

## Core Components

- `cTasks`: Thread pool main class, responsible for managing threads and task queues
- `cTask`: Task class, encapsulating all operations and states of a single asynchronous task
- `mTask`: Utility module, providing common functions and helper methods

## Table of Contents

### Basic Documentation
1. [API Reference](./api-reference.md)
   - Detailed class, method, and property documentation
   - Parameter descriptions and return values
   - Usage notes

2. [Tutorials](./tutorials.md)
   - Basic examples
   - Common scenarios
   - Best practices

3. [Examples](./examples.md)
   - Simple task processing
   - HTTP download examples
   - Batch task processing
   - Task dependency examples

### Advanced Features
4. [Advanced Features](./advanced-features.md)
   - Task priority management
   - Error handling mechanisms
   - Performance optimization strategies
   - Auto-scaling features

5. [Task Data and Result Management](./TaskDataAndResult.md)
   - TaskData data passing mechanism
   - TaskResult result storage
   - Type-safe parameter management
   - Thread-safe data access

6. [Performance Optimization Guide](./PerformanceOptimization.md)
   - Data passing optimization
   - Memory management strategies
   - Thread pool configuration optimization
   - Performance monitoring and debugging

7. [Feature Integration Guide](./FeatureIntegration.md)
   - Built-in feature combination usage
   - Timeout and retry mechanism integration
   - Task cancellation and pause functionality
   - Logging system

8. [Advanced Application Examples](./AdvancedExamples.md)
   - Batch file processing
   - Complex business scenarios
   - Performance optimization examples
   - Error handling best practices

### Reference Materials
9. [Troubleshooting Guide](./Troubleshooting.md)
   - Common problem diagnosis
   - Performance issue analysis
   - Error code reference
   - Debugging tips

## Quick Start

### Simple Example
```vb
' Create and execute task in one line
New cTasks().Create(4).AddTask(AddressOf MyProc).WaitForCompletion
```

### Complete Example
```vb
' Create thread pool
Dim pool As New cTasks
pool.Create 4  ' Create a thread pool with 4 threads

' Add task
Dim task As cTask
Set task = pool.AddTask(AddressOf MyProc)

' Set task properties
task.SetTimeout 5000        ' Set 5-second timeout
task.SetRetryPolicy 3, 1000 ' Maximum 3 retries, 1-second interval
task.SetOnComplete AddressOf TaskComplete
task.SetOnError AddressOf TaskError

' Wait for task completion
task.WaitForCompletion
```

## System Requirements

- TwinBasic development environment
- Windows operating system
- CPU supporting multithreading

## Important Notes

1. Thread Safety
   - All public methods are thread-safe
   - Callback functions execute in thread context
   - Pay attention to thread synchronization for UI updates

2. Resource Management
   - Set thread pool size appropriately
   - Pay attention to task timeout settings
   - Handle task cancellation properly

3. Error Handling
   - Recommended to use error callbacks
   - Check task execution status
   - Set retry policies appropriately

## License

This library is released under the license. See [LICENSE](./LICENSE) file for details.
