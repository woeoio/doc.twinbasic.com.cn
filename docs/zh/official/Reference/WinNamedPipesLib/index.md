---
title: "WinNamedPipesLib 包"
parent: Packages
nav_order: 9
permalink: /tB/Packages/WinNamedPipesLib/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f6c815c3-4d98-4760-95dc-28a925b6fefe'
  PropagateID: 'f6c815c3-4d98-4760-95dc-28a925b6fefe'
  ReservedCode1: 'cb2ddbee-ab71-465d-b7a7-e6a0adc95567'
  ReservedCode2: 'cb2ddbee-ab71-465d-b7a7-e6a0adc95567'
---

# WinNamedPipesLib 包

**WinNamedPipesLib** 内置包将Windows命名管道作为 twinBASIC 对象暴露，采用异步、IOCP驱动的I/O模型。一个进程承载 [**NamedPipeServer**](/official/Reference/WinNamedPipesLib/NamedPipeServer)；其他进程使用 [**NamedPipeClientManager**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager) 向其打开一个或多个 [**NamedPipeClientConnection**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection) 实例。写入在后台完成；消息和连接生命周期变化以事件方式传递。

该包是随 twinBASIC 一起发布的内置包。通过 Project → References（**Ctrl-T**）→ Available Packages 添加。

## 架构

两半，各一个用户实例化的协调器类加一个每连接类：

| 侧    | 协调器                                            | 每连接                                                 |
|---------|--------------------------------------------------------|----------------------------------------------------------------|
| 服务器  | [**NamedPipeServer**](/official/Reference/WinNamedPipesLib/NamedPipeServer)                 | [**NamedPipeServerConnection**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection)     |
| 客户端  | [**NamedPipeClientManager**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager)   | [**NamedPipeClientConnection**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection)     |

服务器发布一个名称（`PipeName = "MyService"` → Win32路径 `\\.\pipe\MyService`）并为每个连接的客户端返回一个 [**NamedPipeServerConnection**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection)。客户端管理器以相同名称拨号（使用 [**Connect**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect)）并返回一个 [**NamedPipeClientConnection**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection)。此后两端是对称的——都暴露具有相同签名的 `AsyncRead`、`AsyncWrite` 和 `AsyncClose`。

读取、写入和连接完成都通过同一个Windows I/O完成端口（IOCP）基础设施运行。每个协调器类拥有自己的完成端口、可配置的工作线程池（[**NumThreadsIOCP**](/official/Reference/WinNamedPipesLib/NamedPipeServer#numthreadsiocp)）和一个隐藏的仅消息窗口，用于将事件封送回UI线程。

## 事件传递——封送 vs 自由线程

默认情况下，事件在主UI线程上触发。IOCP工作线程接收每个完成，打包缓冲区，并通过 `PostMessage` 将结果发送到协调器拥有的隐藏 `STATIC` 类窗口。窗口的子类化 `WndProc` 随后从消息循环引发BASIC事件。这意味着消费进程**必须正在泵送Win32消息循环**才能接收事件。基于窗体的宿主已经在这样做；控制台宿主和Windows服务则不是，需要 [**NamedPipeServer.ManualMessageLoopEnter**](/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopenter)（及匹配的 `ManualMessageLoopLeave`）或 `FreeThreadingEvents = True`。

将 [**FreeThreadingEvents**](/official/Reference/WinNamedPipesLib/NamedPipeServer#freethreadingevents) 设置为 **True** 会跳过封送往返，直接从IOCP工作线程引发事件。性能更高且没有消息循环要求，但消费者的事件处理程序必须是线程安全的——来自不同客户端的多个 `ClientMessageReceived` 事件可以并发触发，从处理程序访问的全局/类状态**不**受默认模式提供的隐式UI线程序列化保护。

该标志必须在 [**Start**](/official/Reference/WinNamedPipesLib/NamedPipeServer#start) 之前（服务器端）或第一次 [**Connect**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect) 调用之前（客户端）设置；它只读取一次并传播到每个每连接对象。

## 在Windows服务中托管

通过 [**WinServicesLib**](/official/Reference/WinServicesLib/) 包托管的Windows服务在同时承载 [**NamedPipeServer**](/official/Reference/WinNamedPipesLib/NamedPipeServer) 时会遇到上述消息循环依赖问题：[**ITbService.EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 线程默认不泵送消息，因此封送的事件传递没有可分发的途径。该包为这种情况专门提供了 [**NamedPipeServer.ManualMessageLoopEnter**](/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopenter) / [**ManualMessageLoopLeave**](/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopleave)。

规范模式：[**ITbService.EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 打开服务器，将服务转换为 `Running`，在 [**ManualMessageLoopEnter**](/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopenter) 内部阻塞，仅在 [**ITbService.ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate)——运行在*另一个*（调度器）线程上——调用同一服务器实例上的 [**ManualMessageLoopLeave**](/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopleave) 时才退出循环。

```vb
' 在服务入口点线程上：
Set NamedPipeServer = New NamedPipeServer
NamedPipeServer.PipeName = "MyServicePipe"

' (告知SCM服务正在运行，然后阻塞在消息循环上)
ServiceManager.ReportStatus vbServiceStatusRunning
NamedPipeServer.Start
NamedPipeServer.ManualMessageLoopEnter      ' 阻塞直到 ManualMessageLoopLeave
NamedPipeServer.Stop

ServiceManager.ReportStatus vbServiceStatusStopped

' 在调度器线程上（ITbService.ChangeState 处理程序）：
Select Case dwControl
    Case vbServiceControlStop, vbServiceControlShutdown
        ServiceManager.ReportStatus vbServiceStatusStopPending
        NamedPipeServer.ManualMessageLoopLeave   ' 将服务线程从 ManualMessageLoopEnter 中唤醒
End Select
```

值得强调的三个要点：

- 服务入口点和控制代码处理程序运行在**不同线程**上。共享的 [**NamedPipeServer**](/official/Reference/WinNamedPipesLib/NamedPipeServer) 成员字段是它们协调的媒介；处理程序调用其上的 [**ManualMessageLoopLeave**](/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopleave) 来唤醒入口点。
- [**ManualMessageLoopLeave**](/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopleave) 是干净退出 [**ManualMessageLoopEnter**](/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopenter) 的唯一方式。没有超时，也没有第二个阻塞原语。需要响应其他唤醒源（例如 *Pause* 控制代码）的服务先设置共享的 `Public` 标志，*然后*调用 [**ManualMessageLoopLeave**](/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopleave) 跳出，检查标志，然后重新进入循环或继续关闭。
- [**FreeThreadingEvents**](/official/Reference/WinNamedPipesLib/NamedPipeServer#freethreadingevents) = **False**（默认）是此模式**必需的**。将其设置为 **True** 会直接在IOCP工作线程上传递事件，完全绕过手动循环——管道仍然工作，但 `ManualMessageLoopEnter` / `Leave` 变得不相关。选择一种模式并坚持使用。

非服务等价方式——在Form内托管相同的 [**NamedPipeServer**](/official/Reference/WinNamedPipesLib/NamedPipeServer)——更简单：Form的常规消息循环自动泵送封送窗口，因此Form在 `Form_Load` 中调用 [**Start**](/official/Reference/WinNamedPipesLib/NamedPipeServer#start)，在 `Form_Unload` 中调用 [**Stop**](/official/Reference/WinNamedPipesLib/NamedPipeServer#stop)，且从不使用 [**ManualMessageLoopEnter**](/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopenter) / [**ManualMessageLoopLeave**](/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopleave)。两种模式都可行；服务托管模式是需要手动泵送的那种。

## 异步读取

当 [**ContinuouslyReadFromPipe**](/official/Reference/WinNamedPipesLib/NamedPipeServer#continuouslyreadfrompipe) 为 **True**（默认）时，包始终对每个连接保持一个待处理的读取——每个 [**ClientMessageReceived**](/official/Reference/WinNamedPipesLib/NamedPipeServer#clientmessagereceived) / [**MessageReceived**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#messagereceived) 事件之后，IOCP线程内部会发出另一个 `AsyncRead`。将标志设置为 **False** 以逐个处理读取：每个事件处理程序必须随后调用 [**NamedPipeServerConnection.AsyncRead**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#asyncread) / [**NamedPipeClientConnection.AsyncRead**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#asyncread) 来接收下一条消息。这在消费者无法以消息到达速度处理时用于背压控制很有用。

## Cookie关联模式

每个 [**AsyncRead**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#asyncread) 和 [**AsyncWrite**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#asyncwrite) 接受一个可选 **Variant** 类型的 *Cookie*。调用者传入的任何值都会通过IOCP完成往返，并作为匹配的 [**ClientMessageReceived**](/official/Reference/WinNamedPipesLib/NamedPipeServer#clientmessagereceived) / [**ClientMessageSent**](/official/Reference/WinNamedPipesLib/NamedPipeServer#clientmessagesent)（或客户端 [**MessageReceived**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#messagereceived) / [**MessageSent**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#messagesent)）事件的 *Cookie* 参数重新发出。使用它将事件回调与发起它们的调用关联起来——按请求的序列号、回调对象、待回复字典的键。

```vb
Private pending As New Collection

Private Sub SendRequest(text As String, replyHandler As IReplyHandler)
    Dim cookie As Long = NextCookie()
    pending.Add replyHandler, CStr(cookie)
    connection.AsyncWrite Encode(text), cookie
End Sub

Private Sub connection_MessageReceived(ByRef Cookie As Variant, ByRef Data() As Byte)
    Dim handler As IReplyHandler = pending(CStr(Cookie))
    pending.Remove CStr(Cookie)
    handler.HandleReply Decode(Data)
End Sub
```

## 在事件中使用 `Data() As Byte`

[**ClientMessageReceived**](/official/Reference/WinNamedPipesLib/NamedPipeServer#clientmessagereceived) 和 [**MessageReceived**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#messagereceived) 上的 *Data* 参数**不是**普通的堆分配 **Byte** 数组。包构造了一个自定义 `SAFEARRAY`，其后备内存指向IOCP读取缓冲区，然后在事件处理程序末尾清除数组指针以便缓冲区可以回收。这些值*仅在*处理程序位于栈上时有效。

::: important
如果稍后需要这些字节，请在事件处理程序返回之前将其复制出来。将数组引用存储在模块级变量、**Collection** 或类字段中，一旦IOCP循环将缓冲区重用于下一条消息，就会留下悬空指针。
:::

要获取新的 **Byte()** 副本：

```vb
Dim Stored() As Byte
ReDim Stored(UBound(Data))
[_HiddenModule].vbaCopyBytes UBound(Data) + 1, VarPtr(Stored(0)), VarPtr(Data(0))
```

对于文本载荷，`StrConv(Data, vbUnicode)`（UTF-8）或通过 `vbUnicode` 转换副本的 `CStr` 会立即读取字节并一步生成拥有的 **String**。

## 推荐的载荷编码：`PropertyBag`

包传输原始字节；它不关心字节内部是什么。对于非简单协议，推荐的载体是 [**PropertyBag**](/official/Reference/VBRUN/PropertyBag/)——twinBASIC 的内置键控属性序列化器。两个原因：

1. **`PropertyBag.Contents` 深拷贝字节**，这是对上述瞬时 `Data()` 生命周期注意事项的最简单解决方案。将 *Data* 赋值给新的 **PropertyBag** 的 **Contents** 即可一步捕获缓冲区；该副本可以在事件处理程序之后安全保留。
2. **`PropertyBag` 提供类型化的多字段载荷**，无需消费者设计线路协议。双方约定属性名称（例如 `"CommandID"`、`"ResponseCommandID"`、`"Data"`），**PropertyBag** 处理字节级编码。

```vb
' 发送方：
Dim request As New PropertyBag
request.WriteProperty "CommandID", "WHAT_TIME_IS_IT"
connection.AsyncWrite request.Contents

' 接收方——在 ClientMessageReceived / MessageReceived 内部：
Dim incoming As New PropertyBag
incoming.Contents = Data        ' 深拷贝字节；在处理程序之后可安全使用

Dim cmd As String = incoming.ReadProperty("CommandID")
Select Case cmd
    Case "WHAT_TIME_IS_IT"
        Dim reply As New PropertyBag
        reply.WriteProperty "ResponseCommandID", cmd
        reply.WriteProperty "ResponseData", Time()
        Connection.AsyncWrite reply.Contents
End Select
```

包中没有任何东西强制使用 **PropertyBag**——原始 `Byte()` 也可以，对于极高吞吐量场景，自定义线路格式可能是正确的选择。**PropertyBag** 惯例很好地服务于日常场景，并且无需额外努力即可解决瞬时 `Data()` 问题。

## 关闭客户端连接

::: important
**`_README.txt`** 声明：*"你必须在客户端调用 **AsyncClose**，否则当对象超出作用域时连接仍然存活"*。
:::

让 [**NamedPipeClientConnection**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection) 对象通过其 `Class_Terminate`（自动调用 [**AsyncClose**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#asyncclose)）干净地终止，**或者**在丢弃最后一个引用之前显式调用 [**AsyncClose**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#asyncclose)。永远持有引用——例如在长期存在的模块级 **Collection** 中——而不调用 [**AsyncClose**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#asyncclose) 会使底层管道句柄保持打开且IOCP线程保持活动。

## 发现管道

[**NamedPipeClientManager.FindNamedPipes**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager#findnamedpipes) 枚举本地计算机上发布的命名管道，返回匹配可选 `*`/`?` 通配符模式的 **String** 名称 **Collection**。实现为 `FindFirstFileW("\\.\pipe\<Pattern>")`——包自行去除前导命名空间，因此只需传递管道名称（`"MyService*"`，而非 `"\\.\pipe\MyService*"`）。

命名管道可以随着其服务器进程的启动和停止随时出现和消失，包不为此发布事件。规范的发现循环是低频率的 [**Timer**](/official/Reference/VB/Timer/)，重新填充列表并保留用户的当前选择——几次轮询之间的间隔是典型频率；底层 `FindFirstFileW` 足够廉价，无需更精细的间隔：

```vb
Private Sub timerRefreshNamedPipes_Timer()
    Dim previousSelection As String = lstNamedPipes.List(lstNamedPipes.ListIndex)
    lstNamedPipes.Clear
    Dim restoredIndex As Long = -1
    Dim index As Long = 0
    Dim pipeName As Variant
    For Each pipeName In manager.FindNamedPipes("MyService_*")
        If pipeName = previousSelection Then restoredIndex = index
        lstNamedPipes.AddItem pipeName
        index = index + 1
    Next
    If restoredIndex <> -1 Then lstNamedPipes.ListIndex = restoredIndex
End Sub
```

## 已知限制

- **不引发 `Error` 事件。** 四个类都不引发 `Error` 事件。已识别的IOCP失败（`ERROR_BROKEN_PIPE`、`ERROR_OPERATION_ABORTED`）通过正常的 [**ClientDisconnected**](/official/Reference/WinNamedPipesLib/NamedPipeServer#clientdisconnected) / [**Disconnected**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#disconnected) 路径静默断开连接——消费者无法区分主动关闭和传输失败。更糟糕的是，客户端IOCP循环（`NamedPipeClientManager.twin` 中的 `IOCPThreadClient`）对*未识别*错误码的分支包含一个字面上的 **Stop** 语句，它会停止执行而不是向消费者代码报告错误。
- **发送硬上限为** [**MessageBufferSize**](/official/Reference/WinNamedPipesLib/NamedPipeServer#messagebuffersize) **字节。** 接收路径在 `ERROR_MORE_DATA` 时动态增长缓冲区，因此任意大小的读取都可以工作。发送路径则不能：[**AsyncWrite**](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#asyncwrite)（及客户端的 [**AsyncWrite**](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#asyncwrite)）将调用者的 `Byte()` *无边界检查*地复制到大小为 [**MessageBufferSize**](/official/Reference/WinNamedPipesLib/NamedPipeServer#messagebuffersize)（默认 **131072** 字节）的每完成缓冲区中；[**AsyncBroadcast**](/official/Reference/WinNamedPipesLib/NamedPipeServer#asyncbroadcast) 同理。更大的消息会溢出缓冲区——可能导致崩溃或堆损坏而非干净的错误。在第一次 [**Start**](/official/Reference/WinNamedPipesLib/NamedPipeServer#start)（服务器）或 [**Connect**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect)（客户端）*之前*将 [**MessageBufferSize**](/official/Reference/WinNamedPipesLib/NamedPipeServer#messagebuffersize) 提高到最大预期消息之上；该值在那时读取一次并传播到每个每连接缓冲区。

## 类

- [NamedPipeServer](/official/Reference/WinNamedPipesLib/NamedPipeServer) -- 服务器：发布管道名称，承载IOCP循环，为每个接受的客户端的生命周期引发事件
- [NamedPipeServerConnection](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection) -- 一个服务器端的每客户端连接；每个 `NamedPipeServer` 事件的 **Connection** 参数，有自己的 `AsyncRead` / `AsyncWrite` / `AsyncClose`
- [NamedPipeClientManager](/official/Reference/WinNamedPipesLib/NamedPipeClientManager) -- 客户端协调器；拥有IOCP循环和 [**Connect**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect) / [**Stop**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager#stop) / [**FindNamedPipes**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager#findnamedpipes) 方法
- [NamedPipeClientConnection](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection) -- 一个客户端连接；暴露 `Connected` / `Disconnected` / `MessageReceived` / `MessageSent` 事件和匹配的 `AsyncRead` / `AsyncWrite` / `AsyncClose` 方法