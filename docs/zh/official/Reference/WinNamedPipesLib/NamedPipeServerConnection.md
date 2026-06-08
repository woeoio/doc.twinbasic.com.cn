---
title: NamedPipeServerConnection
parent: "WinNamedPipesLib 包"
permalink: /tB/Packages/WinNamedPipesLib/NamedPipeServerConnection
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7eefa737-a500-42c4-8126-5f5193699b40'
  PropagateID: '7eefa737-a500-42c4-8126-5f5193699b40'
  ReservedCode1: '9a726ad7-80ff-4920-aad2-44d1e792d74e'
  ReservedCode2: '9a726ad7-80ff-4920-aad2-44d1e792d74e'
---

# NamedPipeServerConnection 类

一个服务器端的每客户端连接。[**NamedPipeServer**](/official/Reference/WinNamedPipesLib/NamedPipeServer) 为每个连接的客户端创建一个这样的对象，并将其作为每个服务器事件的 *Connection* 参数传递。使用它向特定客户端发送消息，在 [**NamedPipeServer.ContinuouslyReadFromPipe**](/official/Reference/WinNamedPipesLib/NamedPipeServer#continuouslyreadfrompipe) 为 **False** 时手动发出读取，以及从服务器端关闭连接。

该类标记为 `[COMCreatable(False)]`，其构造函数接受包私有接口——只能通过 [**NamedPipeServer**](/official/Reference/WinNamedPipesLib/NamedPipeServer) 事件获取实例。连接生命周期和消息事件通过父 [**NamedPipeServer**](/official/Reference/WinNamedPipesLib/NamedPipeServer) 传递；此类仅持有每连接的数据和方法。

```vb
Private Sub server_ClientConnected(Connection As NamedPipeServerConnection)
    ' 通过 CustomData 槽附加每客户端状态
    Connection.CustomData = New ClientSession
End Sub

Private Sub server_ClientMessageReceived( _
        Connection As NamedPipeServerConnection, _
        ByRef Cookie As Variant, _
        ByRef Data() As Byte)

    Dim session As ClientSession = Connection.CustomData
    session.HandleMessage Data
End Sub
```

参见包[概述](/official/Reference/WinNamedPipesLib/)了解IOCP/事件封送架构、cookie关联模式和事件中 `Data() As Byte` 的瞬时生命周期。

## 属性

### CustomData

消费者可附加状态的每连接不透明槽——通常是与该客户端关联的会话对象。**Variant**，默认 **Empty**。包从不读取或写入此字段；提供它是为了方便，使得消费者不必维护以 [**Handle**](#handle) 为键的并行 `Dictionary`。

### Handle

底层Win32命名管道句柄。**LongPtr**。为低级/调试用途暴露——大多数消费者可以忽略。不要直接对此值调用 `CloseHandle`；使用 [**AsyncClose**](#asyncclose) 以保持IOCP循环和父服务器簿记的一致性。

### IsConnected

在客户端连接和连接断开之间为 **True**。**Boolean**。内部设置；消费者代码通常读取而非写入。在底层管道断开时立即变为 **False**，甚至在 [**ClientDisconnected**](/official/Reference/WinNamedPipesLib/NamedPipeServer#clientdisconnected) 事件触发之前（事件等待每个未完成I/O已返回）。

### IsOpening

在包创建连接对象到 `ConnectNamedPipe` 完成之间的短暂窗口内为 **True**。**Boolean**。由 [**NamedPipeServer.Stop**](/official/Reference/WinNamedPipesLib/NamedPipeServer#stop) 内部使用以避免关闭期间的竞态条件；消费者代码通常不需要读取它。

## 方法

### AsyncClose

取消对此连接的每个未完成I/O并关闭底层管道句柄。取消完成后最终触发父服务器上的 [**ClientDisconnected**](/official/Reference/WinNamedPipesLib/NamedPipeServer#clientdisconnected) 事件。当连接的最后一个引用丢弃时自动从 `Class_Terminate` 调用。

语法：*connection*.**AsyncClose**

### AsyncRead

手动对此连接发出异步读取。

语法：*connection*.**AsyncRead** [ *Cookie* [, *OverlappedStruct* ] ]

*Cookie*
: *可选* **Variant** 关联值，作为匹配的 [**ClientMessageReceived**](/official/Reference/WinNamedPipesLib/NamedPipeServer#clientmessagereceived) 事件的 *Cookie* 参数传回。默认 **Empty**。

*OverlappedStruct*
: *可选* 指向预分配的 `OVERLAPPED_CUSTOM` 结构的 **LongPtr**。**仅供内部使用**——IOCP机制在 `ERROR_MORE_DATA` 后重新发出读取时传递此参数。消费者代码应始终省略此参数。

仅当父服务器的 [**ContinuouslyReadFromPipe**](/official/Reference/WinNamedPipesLib/NamedPipeServer#continuouslyreadfrompipe) 为 **False** 时需要；否则IOCP循环自动保持待处理读取，显式调用是冗余的。

### AsyncWrite

向特定客户端发送回消息。

语法：*connection*.**AsyncWrite** *Data*() [, *Cookie* ]

*Data*
: *必需* 包含要发送字节的 **Byte()** 数组。未初始化或零长度数组为无操作。对于类型化的多字段载荷，推荐编码为 [**PropertyBag**](/official/Reference/VBRUN/PropertyBag/)——参见包概述上的[推荐的载荷编码：`PropertyBag`](/official/Reference/WinNamedPipesLib/#propertybag-carrier)。

*Cookie*
: *可选* **Variant** 关联值，作为匹配的 [**ClientMessageSent**](/official/Reference/WinNamedPipesLib/NamedPipeServer#clientmessagesent) 事件的 *Cookie* 参数传回。默认 **Empty**。

立即返回；实际传输通过IOCP循环运行。完成时触发父服务器上的 [**ClientMessageSent**](/official/Reference/WinNamedPipesLib/NamedPipeServer#clientmessagesent)。

```vb
' 使用 PropertyBag 惯例回复请求：
Dim reply As New PropertyBag
reply.WriteProperty "ResponseCommandID", "WHAT_TIME_IS_IT"
reply.WriteProperty "ResponseData",      Time()
Connection.AsyncWrite reply.Contents
```

要一次向每个已连接客户端发送相同消息，使用 [**NamedPipeServer.AsyncBroadcast**](/official/Reference/WinNamedPipesLib/NamedPipeServer#asyncbroadcast)。

## 另见

- [WinNamedPipesLib 包](/official/Reference/WinNamedPipesLib/) -- 概述、IOCP/事件封送架构、cookie模式、`Data()` 生命周期注意事项
- [推荐的载荷编码：`PropertyBag`](/official/Reference/WinNamedPipesLib/#propertybag-carrier) -- 消息的深拷贝捕获/类型化载荷惯例
- [NamedPipeServer 类](/official/Reference/WinNamedPipesLib/NamedPipeServer) -- 拥有此连接的父服务器
- [NamedPipeClientConnection 类](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection) -- 客户端对应项