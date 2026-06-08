---
title: NamedPipeServer
parent: "WinNamedPipesLib 包"
permalink: /tB/Packages/WinNamedPipesLib/NamedPipeServer
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4b1b49a9-0fd5-4a80-a41f-6b01a2ab6c55'
  PropagateID: '4b1b49a9-0fd5-4a80-a41f-6b01a2ab6c55'
  ReservedCode1: '8272b03f-43b8-4c04-8ecd-61d6aa4ea68d'
  ReservedCode2: '8272b03f-43b8-4c04-8ecd-61d6aa4ea68d'
---

# NamedPipeServer 类

承载一个命名管道并接受无限数量的并发客户端连接，每个连接由 [**NamedPipeServerConnection**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection) 表示。该类拥有一个Windows I/O完成端口和一个可配置的工作线程池，处理每个连接的读取、写入和连接通知。使用 **New** 实例化。

配置公共字段（[**PipeName**](#pipename) 必填，其他有合理默认值），调用 [**Start**](#start)，并响应客户端到达和交换消息的生命周期事件。包以 **PIPE_TYPE_MESSAGE** / **PIPE_READMODE_MESSAGE** 方式打开底层管道——消息在发送方和接收方之间保持边界。

```vb
Private WithEvents server As NamedPipeServer

Private Sub Form_Load()
    Set server = New NamedPipeServer
    server.PipeName = "MyService"
    server.Start
End Sub

Private Sub server_ClientConnected(Connection As NamedPipeServerConnection)
    Debug.Print "client " & Connection.Handle & " arrived"
End Sub

Private Sub server_ClientMessageReceived( _
        Connection As NamedPipeServerConnection, _
        ByRef Cookie As Variant, _
        ByRef Data() As Byte)
    Connection.AsyncWrite Data        ' 原样回显
End Sub
```

参见包[概述](/official/Reference/WinNamedPipesLib/)了解IOCP/事件封送架构、cookie关联模式和事件中 `Data() As Byte` 的瞬时生命周期。

## 属性

### ContinuouslyReadFromPipe

当 **True**（默认）时，服务器始终对每个已连接客户端保持一个待处理读取——每个 [**ClientMessageReceived**](#clientmessagereceived) 之后，IOCP线程内部会发出一个自动的 `AsyncRead`。设置为 **False** 以逐个处理读取；每个 [**ClientMessageReceived**](#clientmessagereceived) 处理程序必须随后调用 [**NamedPipeServerConnection.AsyncRead**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#asyncread) 来接收下一条消息。**Boolean**，默认 **True**。

### FreeThreadingEvents

控制生命周期和消息事件在何处引发。当 **False**（默认）时，IOCP工作线程通过隐藏的仅消息窗口将每个事件封送到主UI线程，消费进程必须正在泵送Win32消息循环。当 **True** 时，事件直接在接收到完成的IOCP工作线程上触发——无消息循环依赖，但消费者的事件处理程序必须是线程安全的。**Boolean**，默认 **False**。

在调用 [**Start**](#start) 之前设置此项；它在创建工作线程时读取一次并传播到每个 [**NamedPipeServerConnection**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection)。

### MessageBufferSize

为每个连接初始分配的每完成 `ReadFile` 缓冲区大小（字节）。**Long**，默认 **131072**（128 KiB）。不限制最大消息大小——在 `ERROR_MORE_DATA` 时IOCP循环分配更大的溢出缓冲区并重新发出读取——但初始大小影响该溢出路径的运行频率，从而影响持续大消息流量的吞吐量。

### NumThreadsIOCP

由 [**Start**](#start) 创建的IOCP工作线程数。**Long**，默认 **1**。一个线程对于大多数场景足够，因为工作器内的每个阻塞调用都是重叠的Win32操作，会立即释放线程。提高此值以允许多个 [**ClientMessageReceived**](#clientmessagereceived) 处理程序在 [**FreeThreadingEvents**](#freethreadingevents) = **True** 下并发运行，或者在多核硬件上跟上大流量。在调用 [**Start**](#start) 之前设置此项。

### PipeName

管道发布的名称。**String**，无默认值。Win32管道命名空间路径为 `\\.\pipe\<PipeName>`——包自行添加 `\\.\pipe\` 前缀；只需传递叶名称。

::: important
[**PipeName**](#pipename) 必须在 [**Start**](#start) 之前设置为非空值，否则 [**Start**](#start) 引发运行时错误5（*"cannot start without specifying a pipe name"*）。
:::

## 事件

### ClientConnected

在客户端的 `ConnectNamedPipe` 完成且连接准备好进行消息交换之后触发。

语法：*server*_**ClientConnected**(*Connection* **As NamedPipeServerConnection**)

*Connection*
: 新连接客户端的服务器端连接对象。持有引用以在消息之间保持每客户端状态——同一实例传递给该客户端的每个事件。可通过 [**NamedPipeServerConnection.CustomData**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#customdata) 使用 **Cookie** / `Tag` 样式存储。

### ClientDisconnected

在客户端已断开*且*对连接的每个未完成异步I/O已返回后触发一次。此事件后连接对象不再可用于I/O。

语法：*server*_**ClientDisconnected**(*Connection* **As NamedPipeServerConnection**)

*Connection*
: 刚刚关闭的连接。其 [**IsConnected**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#isconnected) 为 **False**。

### ClientMessageReceived

当从管道读取完整消息时触发。

语法：*server*_**ClientMessageReceived**(*Connection* **As NamedPipeServerConnection**, **ByRef** *Cookie* **As Variant**, **ByRef** *Data*() **As Byte**)

*Connection*
: 消息来源的连接。

*Cookie*
: 最初传递给产生此读取的 [**NamedPipeServerConnection.AsyncRead**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#asyncread) 的不透明关联值——如果读取来自 [**ContinuouslyReadFromPipe**](#continuouslyreadfrompipe) 触发的自动发起读取则为 **Empty**。

*Data*
: 消息载荷。参见包概述上的[在事件中使用 `Data() As Byte`](/official/Reference/WinNamedPipesLib/#working-with-data-as-byte-in-events)了解瞬时缓冲区生命周期注意事项——如果稍后需要字节，请在处理程序返回之前将其复制出来。[推荐的捕获机制](/official/Reference/WinNamedPipesLib/#propertybag-carrier)是将 *Data* 赋值给新的 [**PropertyBag**](/official/Reference/VBRUN/PropertyBag/) 的 **Contents**，这会深拷贝字节并一步提供类型化的多字段访问。

### ClientMessageSent

当之前发出的 [**NamedPipeServerConnection.AsyncWrite**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#asyncwrite) 已完成（或当 [**AsyncBroadcast**](#asyncbroadcast) 消息到达每个客户端）时触发。

语法：*server*_**ClientMessageSent**(*Connection* **As NamedPipeServerConnection**, **ByRef** *Cookie* **As Variant**)

*Connection*
: 写出时使用的连接。

*Cookie*
: 传递给发起 [**AsyncWrite**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#asyncwrite) 调用的不透明关联值。

### ServerReady

在 [**Start**](#start) 之后触发一次，当每个IOCP工作线程已加入完成端口循环且第一个连接监听器已发布时。用作"服务器现在正在接受连接"的信号。

语法：*server*_**ServerReady**()

## 方法

### AsyncBroadcast

向每个当前已连接的客户端发出 [**AsyncWrite**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#asyncwrite)。

语法：*server*.**AsyncBroadcast** *Data*() [, *Cookie* ]

*Data*
: *必需* 要发送的消息字节。twinBASIC 会将 **String** 字面量隐式强制转换为 **Byte()**，因此 `server.AsyncBroadcast "shutting down"` 无需单独的 `StrConv` 步骤即可工作——用于无协议的服务器推送通知很方便。

*Cookie*
: *可选* 附加到*每个*每客户端 [**ClientMessageSent**](#clientmessagesent) 事件的 **Variant** 关联值。默认 **Empty**。

接收者集合在调用开始时在锁下快照。快照后连接的客户端不接收此广播；快照后但在每客户端写入完成之前断开连接的客户端只会静默失败该个别写入。

### ManualMessageLoopEnter

在调用线程上运行Win32消息循环，直到从另一个线程调用 [**ManualMessageLoopLeave**](#manualmessageloopleave)（或任何处理程序引发 `WM_USER_QUITTING` 发布）。

语法：*server*.**ManualMessageLoopEnter**

用于没有自己Forms风格消息泵但想要默认（[**FreeThreadingEvents**](#freethreadingevents) = **False**）封送事件语义的控制台/服务宿主。UI宿主自然地泵送消息，不需要此方法。

典型调用者是拥有此服务器的Windows服务：服务线程入口点打开服务器，将服务转换为 `Running`，调用 **ManualMessageLoopEnter** 在事件流动时阻塞，当SCM发出停止信号时，运行在调度器线程上的控制代码处理程序调用 [**ManualMessageLoopLeave**](#manualmessageloopleave)。参见包概述上的[在Windows服务中托管](/official/Reference/WinNamedPipesLib/#service-host-idiom)了解完整模式，包括双线程协调和 *Pause* / *Continue* 扩展。

### ManualMessageLoopLeave

向隐藏的封送窗口发送 `WM_USER_QUITTING` 消息，使另一个线程上的 [**ManualMessageLoopEnter**](#manualmessageloopenter) 循环退出。可从任何线程安全调用。

语法：*server*.**ManualMessageLoopLeave**

预期调用者是在 [**ManualMessageLoopEnter**](#manualmessageloopenter) *之外*的线程——通常是Windows服务的调度器线程唤醒服务入口点线程离开其阻塞循环。参见[在Windows服务中托管](/official/Reference/WinNamedPipesLib/#service-host-idiom)。

### Start

创建I/O完成端口，启动 [**NumThreadsIOCP**](#numthreadsiocp) 个工作线程，并在 `\\.\pipe\<PipeName>` 下发布第一个连接监听器。当每个工作线程已加入时触发 [**ServerReady**](#serverready)。

语法：*server*.**Start**

如果 [**PipeName**](#pipename) 为空则引发运行时错误5 *"cannot start without specifying a pipe name"*，或如果 `CreateIoCompletionPort` 失败则引发 *"unable to create an IOCP port"*。

幂等：在服务器已运行时调用 [**Start**](#start) 为无操作。

### Stop

取消每个连接上每个未完成的I/O，向每个工作线程发送IOCP关闭哨兵，等待线程退出，关闭每个管道句柄，并释放完成端口。幂等：在未启动或已停止的服务器上调用 [**Stop**](#stop) 为无操作。自动从 `Class_Terminate` 调用，因此超出作用域的服务器隐式关闭资源。

语法：*server*.**Stop**

### New

在尚未启动的状态下构造服务器。创建用于将IOCP线程完成封送回UI线程的隐藏 `STATIC` 类消息窗口。

语法：**New NamedPipeServer**

## 另见

- [WinNamedPipesLib 包](/official/Reference/WinNamedPipesLib/) -- 概述、IOCP/事件封送架构、cookie模式、`Data()` 生命周期注意事项、已知限制
- [在Windows服务中托管](/official/Reference/WinNamedPipesLib/#service-host-idiom) -- **ManualMessageLoopEnter** / **ManualMessageLoopLeave** 服务入口点模式
- [推荐的载荷编码：`PropertyBag`](/official/Reference/WinNamedPipesLib/#propertybag-carrier) -- 事件中瞬时 *Data* 的深拷贝捕获模式
- [NamedPipeServerConnection 类](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection) -- 传递给每个事件的每客户端连接
- [NamedPipeClientManager 类](/official/Reference/WinNamedPipesLib/NamedPipeClientManager) -- 客户端对应项