---
title: NamedPipeClientManager
parent: "WinNamedPipesLib 包"
permalink: /tB/Packages/WinNamedPipesLib/NamedPipeClientManager
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e1dc8c7b-91e4-4492-b708-e03e5796acfb'
  PropagateID: 'e1dc8c7b-91e4-4492-b708-e03e5796acfb'
  ReservedCode1: 'da7f4276-c745-4f89-95c8-e9d1e9fe7e4d'
  ReservedCode2: 'da7f4276-c745-4f89-95c8-e9d1e9fe7e4d'
---

# NamedPipeClientManager 类

客户端协调器。拥有一个Windows I/O完成端口和一个由其产生的每个 [**NamedPipeClientConnection**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection) 共享的工作线程池，并通过 [**Connect**](#connect) 返回它们。一个 [**NamedPipeClientManager**](/official/Reference/WinNamedPipesLib/) 通常在消费进程的整个生命周期内存在，通过共享的IOCP基础设施管理许多连接——到一个或多个服务器。使用 **New** 实例化。

配置公共字段（四个都有合理默认值），为应用程序想要拨号的每个管道调用 [**Connect**](#connect)，并响应 [**NamedPipeClientConnection**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection) 事件。第一次 [**Connect**](#connect) 延迟创建完成端口并启动工作线程；后续调用重用它们。

```vb
Private manager As NamedPipeClientManager
Private WithEvents connection As NamedPipeClientConnection

Private Sub Form_Load()
    Set manager = New NamedPipeClientManager
    Set connection = manager.Connect("MyService")
End Sub

Private Sub connection_Connected()
    Dim payload() As Byte = StrConv("hello", vbFromUnicode)
    connection.AsyncWrite payload
End Sub

Private Sub Form_Unload(Cancel As Integer)
    connection.AsyncClose                ' 必需——参见 README
    manager.Stop                         ' 或直接让管理器超出作用域
End Sub
```

参见包[概述](/official/Reference/WinNamedPipesLib/)了解IOCP/事件封送架构、cookie关联模式、事件中 `Data() As Byte` 的瞬时生命周期，以及客户端连接的强制性 `AsyncClose` 规则。

## 属性

四个配置字段在第一次 [**Connect**](#connect) 调用时读取一次并传播到通过此管理器创建的每个 [**NamedPipeClientConnection**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection)。后续更改影响之后打开的连接但**不影响**已存在的连接——在第一次 [**Connect**](#connect) 之前设置这些字段。

### ContinuouslyReadFromPipe

当 **True**（默认）时，每个 [**NamedPipeClientConnection**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection) 始终对其管道保持一个待处理读取——每个 [**MessageReceived**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#messagereceived) 之后，IOCP线程内部会发出一个自动的 `AsyncRead`。设置为 **False** 以逐个处理读取；每个 [**MessageReceived**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#messagereceived) 处理程序必须随后调用 [**NamedPipeClientConnection.AsyncRead**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#asyncread) 来接收下一条消息。**Boolean**，默认 **True**。

### FreeThreadingEvents

控制 [**NamedPipeClientConnection**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection) 事件在何处引发。当 **False**（默认）时，IOCP工作线程通过管理器的隐藏仅消息窗口将每个事件封送到主UI线程，消费进程必须正在泵送Win32消息循环。当 **True** 时，事件直接在接收到完成的IOCP工作线程上触发——无消息循环依赖，但消费者的事件处理程序必须是线程安全的。**Boolean**，默认 **False**。

### MessageBufferSize

为每个客户端连接初始分配的每完成 `ReadFile` 缓冲区大小（字节）。**Long**，默认 **131072**（128 KiB）。不限制最大消息大小——在 `ERROR_MORE_DATA` 时IOCP循环分配更大的溢出缓冲区并重新发出读取——但初始大小影响持续大消息流量的吞吐量。

### NumThreadsIOCP

首次调用 [**Connect**](#connect) 时创建的IOCP工作线程数。**Long**，默认 **1**。一个线程对于大多数场景足够；提高此值以允许多个 [**FreeThreadingEvents**](#freethreadingevents) = **True** 下的并发事件处理程序，或者在多核硬件上跟上大流量。

## 方法

### Connect

打开到本地计算机上命名管道的异步连接。

语法：*manager*.**Connect**( *PipeName* ) **As NamedPipeClientConnection**

*PipeName*
: *必需* 要拨号的管道叶名称——包自行添加 `\\.\pipe\` 前缀。如果为空则引发运行时错误5 *"cannot start without specifying a pipe name"*。

首次调用时延迟创建：创建完成端口并启动 [**NumThreadsIOCP**](#numthreadsiocp) 个工作线程。立即返回处于尚未连接状态的 [**NamedPipeClientConnection**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection)。实际 `CreateFileW` 在IOCP工作线程上异步运行，管道打开后触发返回对象上的 [**Connected**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#connected)。

首次调用时如果 `CreateIoCompletionPort` 失败则引发运行时错误5 *"unable to create an IOCP port"*。

### FindNamedPipes

枚举本地计算机上当前发布的命名管道。

语法：*manager*.**FindNamedPipes** ( [ *Pattern* ] ) **As Collection**

*Pattern*
: *可选* 与管道叶名称匹配的通配符模式（不带 `\\.\pipe\` 前缀；包会添加）。`*` 匹配任意序列，`?` 匹配任意单个字符。默认 `"*"`——返回每个管道。

返回 **String** 值的 **Collection**，每个都是适合传递给 [**Connect**](#connect) 的叶管道名称。用作消费者事先不知道确切服务器名称时的发现步骤：

```vb
Dim names As Collection = manager.FindNamedPipes("MyService_*")
Dim name As Variant
For Each name In names
    Debug.Print "found: " & name
Next
```

包不发布管道出现或消失的事件，因此列出可用服务器的动态UI通常从低频率的 [**Timer**](/official/Reference/VB/Timer/) 刷新列表——参见包概述上的[发现管道](/official/Reference/WinNamedPipesLib/#discovering-pipes)了解在刷新间保留用户当前选择的轮询循环模式。

### Stop

取消此管理器产生的每个连接上每个未完成的I/O，向每个工作线程发送IOCP关闭哨兵，等待线程退出，关闭每个管道句柄，并释放完成端口。幂等：在未连接任何内容或已停止的管理器上调用 [**Stop**](#stop) 为无操作。自动从 `Class_Terminate` 调用，因此超出作用域的管理器隐式关闭资源。

语法：*manager*.**Stop**

[**NamedPipeClientConnection**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection) 对象在 [**Stop**](#stop) 后作为引用仍然有效，但其底层管道句柄已关闭，无法执行I/O。

### New

在尚未连接的状态下构造管理器。创建用于将IOCP线程完成封送回UI线程的隐藏 `STATIC` 类消息窗口。

语法：**New NamedPipeClientManager**

## 另见

- [WinNamedPipesLib 包](/official/Reference/WinNamedPipesLib/) -- 概述、IOCP/事件封送架构、cookie模式、`Data()` 生命周期注意事项、**AsyncClose** 规则
- [发现管道](/official/Reference/WinNamedPipesLib/#discovering-pipes) -- 驱动动态管道列表UI的 **Timer** 轮询循环
- [NamedPipeClientConnection 类](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection) -- 由 [**Connect**](#connect) 返回的每连接对象
- [NamedPipeServer 类](/official/Reference/WinNamedPipesLib/NamedPipeServer) -- 服务器端对应项