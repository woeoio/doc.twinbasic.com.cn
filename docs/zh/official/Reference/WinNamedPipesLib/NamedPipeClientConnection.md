---
title: NamedPipeClientConnection
parent: "WinNamedPipesLib 包"
permalink: /tB/Packages/WinNamedPipesLib/NamedPipeClientConnection
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "ddb7dd3f-5f89-4eb9-936e-874ad6b130ee"
  PropagateID: "ddb7dd3f-5f89-4eb9-936e-874ad6b130ee"
  ReservedCode1: "0560135d-dcdb-447a-8173-a11421979b2c"
  ReservedCode2: "0560135d-dcdb-447a-8173-a11421979b2c"
---

# NamedPipeClientConnection 类

一个到命名管道的客户端连接。由 [**NamedPipeClientManager.Connect**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect) 产生。承载连接生命周期事件（[**Connected**](#connected)、[**Disconnected**](#disconnected)）和消息事件（[**MessageReceived**](#messagereceived)、[**MessageSent**](#messagesent)），以及触发它们的 [**AsyncRead**](#asyncread) / [**AsyncWrite**](#asyncwrite) / [**AsyncClose**](#asyncclose) 方法。

该类标记为 `[COMCreatable(False)]`，其构造函数接受包私有接口——只能通过 [**NamedPipeClientManager.Connect**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect) 获取实例。

::: warning
包的 `_README.txt` 声明：_"你必须在客户端调用 **AsyncClose**，否则当对象超出作用域时连接仍然存活"_。在丢弃最后一个引用之前显式调用 [**AsyncClose**](#asyncclose)，**或者**让对象通过其 `Class_Terminate`（自动调用 [**AsyncClose**](#asyncclose)）干净地终止。永远持有引用——例如在模块级 **Collection** 中——而不调用 [**AsyncClose**](#asyncclose) 会使管道句柄保持打开且IOCP线程保持活动。
:::

```vb
Private manager As NamedPipeClientManager
Private WithEvents connection As NamedPipeClientConnection

Private Sub Form_Load()
    Set manager = New NamedPipeClientManager
    Set connection = manager.Connect("MyService")
End Sub

Private Sub connection_Connected()
    connection.AsyncWrite StrConv("hello", vbFromUnicode)
End Sub

Private Sub connection_MessageReceived(ByRef Cookie As Variant, ByRef Data() As Byte)
    Debug.Print "reply: " & StrConv(Data, vbUnicode)
End Sub

Private Sub Form_Unload(Cancel As Integer)
    connection.AsyncClose
End Sub
```

参见包[概述](/official/Reference/WinNamedPipesLib/)了解IOCP/事件封送架构、cookie关联模式和事件中 `Data() As Byte` 的瞬时生命周期。

## 属性

### CustomData

消费者可附加状态的每连接不透明槽——通常是与该连接关联的会话对象或待回复字典。**Variant**，默认 **Empty**。包从不读取或写入此字段。

### Handle

由 `CreateFileW("\\.\pipe\<PipeName>")` 返回的底层Win32文件句柄。**LongPtr**。为低级/调试用途暴露——大多数消费者可以忽略。不要直接对此值调用 `CloseHandle`；使用 [**AsyncClose**](#asyncclose) 以保持IOCP循环和父管理器簿记的一致性。

### PipeName

此连接所打开的叶管道名称——与传递给 [**NamedPipeClientManager.Connect**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect) 的值相同。**String**。实际上只读；包从构造函数参数设置它且从不更改。

## 事件

### Connected

当由 [**NamedPipeClientManager.Connect**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect) 启动的异步 `CreateFileW` 成功且管道准备好进行消息交换时触发一次。

语法：_connection_\_**Connected**()

### Disconnected

当管道已断开*且*对连接的每个未完成异步I/O已返回后触发一次。此事件后连接对象不再可用于I/O。

语法：_connection_\_**Disconnected**()

### MessageReceived

当从管道读取完整消息时触发。

语法：_connection_\_**MessageReceived**(**ByRef** _Cookie_ **As Variant**, **ByRef** _Data_() **As Byte**)

_Cookie_
: 最初传递给产生此读取的 [**AsyncRead**](#asyncread) 的不透明关联值——如果读取来自 [**NamedPipeClientManager.ContinuouslyReadFromPipe**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager#continuouslyreadfrompipe) 触发的自动发起读取则为 **Empty**。

_Data_
: 消息载荷。参见包概述上的[在事件中使用 `Data() As Byte`](/official/Reference/WinNamedPipesLib/#working-with-data-as-byte-in-events)了解瞬时缓冲区生命周期注意事项——如果稍后需要字节，请在处理程序返回之前将其复制出来。[推荐的捕获机制](/official/Reference/WinNamedPipesLib/#propertybag-carrier)是将 _Data_ 赋值给新的 [**PropertyBag**](/official/Reference/VBRUN/PropertyBag/) 的 **Contents**，这会深拷贝字节并一步提供类型化的多字段访问。

### MessageSent

当之前发出的 [**AsyncWrite**](#asyncwrite) 已完成时触发。

语法：_connection_\_**MessageSent**(**ByRef** _Cookie_ **As Variant**)

_Cookie_
: 传递给发起 [**AsyncWrite**](#asyncwrite) 调用的不透明关联值。

## 方法

### AsyncClose

取消对此连接的每个未完成I/O并关闭底层管道句柄。取消完成后最终触发 [**Disconnected**](#disconnected) 事件。当连接的最后一个引用丢弃时自动从 `Class_Terminate` 调用。

语法：_connection_.**AsyncClose**

::: warning
参见类简介：README要求此方法运行（显式地或通过 `Class_Terminate`）才能认为连接完成。
:::

### AsyncRead

手动对此连接发出异步读取。

语法：_connection_.**AsyncRead** [ _Cookie_ [, *OverlappedStruct* ] ]

_Cookie_
: _可选_ **Variant** 关联值，作为匹配的 [**MessageReceived**](#messagereceived) 事件的 _Cookie_ 参数传回。默认 **Empty**。

_OverlappedStruct_
: _可选_ 指向预分配的 `OVERLAPPED_CUSTOM` 结构的 **LongPtr**。**仅供内部使用**——IOCP机制在 `ERROR_MORE_DATA` 后重新发出读取时传递此参数。消费者代码应始终省略此参数。

仅当父管理器的 [**ContinuouslyReadFromPipe**](/official/Reference/WinNamedPipesLib/NamedPipeClientManager#continuouslyreadfrompipe) 为 **False** 时需要；否则IOCP循环自动保持待处理读取，显式调用是冗余的。

### AsyncWrite

向服务器发送消息。

语法：_connection_.**AsyncWrite** _Data_() [, *Cookie* ]

_Data_
: _必需_ 包含要发送字节的 **Byte()** 数组。未初始化或零长度数组为无操作。对于类型化的多字段载荷，推荐编码为 [**PropertyBag**](/official/Reference/VBRUN/PropertyBag/)——参见包概述上的[推荐的载荷编码：`PropertyBag`](/official/Reference/WinNamedPipesLib/#propertybag-carrier)。

_Cookie_
: _可选_ **Variant** 关联值，作为匹配的 [**MessageSent**](#messagesent) 事件的 _Cookie_ 参数传回。默认 **Empty**。

立即返回；实际传输通过IOCP循环运行。完成时触发此连接上的 [**MessageSent**](#messagesent)。

## 另见

- [WinNamedPipesLib 包](/official/Reference/WinNamedPipesLib/) -- 概述、IOCP/事件封送架构、cookie模式、`Data()` 生命周期注意事项、**AsyncClose** 规则
- [推荐的载荷编码：`PropertyBag`](/official/Reference/WinNamedPipesLib/#propertybag-carrier) -- 事件中瞬时 _Data_ 的深拷贝捕获模式
- [NamedPipeClientManager 类](/official/Reference/WinNamedPipesLib/NamedPipeClientManager) -- 产生此连接的管理器
- [NamedPipeServerConnection 类](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection) -- 服务器端对应项
