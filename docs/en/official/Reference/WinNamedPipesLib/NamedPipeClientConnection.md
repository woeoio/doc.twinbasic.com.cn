---
title: NamedPipeClientConnection
parent: WinNamedPipesLib Package
permalink: /tB/Packages/WinNamedPipesLib/NamedPipeClientConnection
---

# NamedPipeClientConnection class
One client-side connection to a named pipe. Produced by [**NamedPipeClientManager.Connect**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect). Carries the connection-lifecycle events ([**Connected**](#connected), [**Disconnected**](#disconnected)) and the message events ([**MessageReceived**](#messagereceived), [**MessageSent**](#messagesent)), plus the [**AsyncRead**](#asyncread) / [**AsyncWrite**](#asyncwrite) / [**AsyncClose**](#asyncclose) methods that trigger them.

The class is tagged `[COMCreatable(False)]` and its constructor takes a package-private interface --- reach instances only through [**NamedPipeClientManager.Connect**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect).

::: important
The package `_README.txt` states: *"you MUST call **AsyncClose** on the client side, otherwise the connection is left alive when the object goes out of scope"*. Either call [**AsyncClose**](#asyncclose) explicitly before dropping the last reference, **or** let the object terminate cleanly through its `Class_Terminate` (which calls [**AsyncClose**](#asyncclose) automatically). Holding the reference forever --- in a module-level **Collection**, for example --- without calling [**AsyncClose**](#asyncclose) keeps the pipe handle open and the IOCP thread alive.
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

See the package [overview](/en/official/Reference/WinNamedPipesLib) for the IOCP / event-marshalling architecture, the cookie correlation pattern, and the transient lifetime of `Data() As Byte` inside events.

## Properties

### CustomData

A per-connection opaque slot the consumer can attach state to --- typically a session object or a pending-replies dictionary tied to this one connection. **Variant**, default **Empty**. The package never reads or writes this field.

### Handle

The underlying Win32 file handle returned by `CreateFileW("\\.\pipe\<PipeName>")`. **LongPtr**. Exposed for low-level / debugging use --- most consumers can ignore it. Do not call `CloseHandle` on this value directly; use [**AsyncClose**](#asyncclose) so the IOCP loop and the parent manager's bookkeeping stay consistent.

### PipeName

The leaf pipe name this connection was opened against --- the same value that was passed to [**NamedPipeClientManager.Connect**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect). **String**. Read-only in practice; the package sets it from the constructor argument and never changes it.

## Events

### Connected

Fires once the asynchronous `CreateFileW` started by [**NamedPipeClientManager.Connect**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect) has succeeded and the pipe is ready for message exchange.

Syntax: *connection*_**Connected**()

### Disconnected

Fires once the pipe has dropped *and* every outstanding asynchronous I/O against the connection has returned. The connection object is no longer usable for I/O after this event.

Syntax: *connection*_**Disconnected**()

### MessageReceived

Fires when a complete message has been read from the pipe.

Syntax: *connection*_**MessageReceived**(**ByRef** *Cookie* **As Variant**, **ByRef** *Data*() **As Byte**)

*Cookie*
: The opaque correlation value originally passed to the [**AsyncRead**](#asyncread) that produced this read --- or **Empty** if the read came from the auto-issued reads triggered by [**NamedPipeClientManager.ContinuouslyReadFromPipe**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager#continuouslyreadfrompipe).

*Data*
: The message payload. See [Working with `Data() As Byte` in events](/en/official/Reference/WinNamedPipesLib#working-with-data-as-byte-in-events) on the package overview for the transient-buffer lifetime caveat --- copy the bytes out before the handler returns if they are needed later. The [recommended capture mechanism](/en/official/Reference/WinNamedPipesLib#propertybag-carrier) is to assign *Data* to a fresh [**PropertyBag**](/en/official/Reference/VBRUN/PropertyBag)'s **Contents**, which deep-copies the bytes and provides typed multi-field access in one step.

### MessageSent

Fires when a previously-issued [**AsyncWrite**](#asyncwrite) has completed.

Syntax: *connection*_**MessageSent**(**ByRef** *Cookie* **As Variant**)

*Cookie*
: The opaque correlation value that was passed to the originating [**AsyncWrite**](#asyncwrite) call.

## Methods

### AsyncClose

Cancels every outstanding I/O against this connection and closes the underlying pipe handle. Eventually triggers the [**Disconnected**](#disconnected) event once the cancellation completes. Automatically invoked from `Class_Terminate` when the last reference to the connection drops.

Syntax: *connection*.**AsyncClose**

::: important
See the class intro: the README requires that either this method runs (explicitly, or through `Class_Terminate`) before the connection is considered finished.
:::

### AsyncRead

Manually issues an asynchronous read against this connection.

Syntax: *connection*.**AsyncRead** [ *Cookie* [, *OverlappedStruct* ] ]

*Cookie*
: *optional* A **Variant** correlation value, passed back as the *Cookie* parameter of the matching [**MessageReceived**](#messagereceived) event. Default **Empty**.

*OverlappedStruct*
: *optional* A **LongPtr** to a pre-allocated `OVERLAPPED_CUSTOM` structure. **Internal use only** --- the IOCP machinery passes this when re-issuing a read after `ERROR_MORE_DATA`. Consumer code should always omit this parameter.

Only needed when the parent manager's [**ContinuouslyReadFromPipe**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager#continuouslyreadfrompipe) is **False**; otherwise the IOCP loop keeps a read pending automatically and explicit calls are redundant.

### AsyncWrite

Sends a message to the server.

Syntax: *connection*.**AsyncWrite** *Data*() [, *Cookie* ]

*Data*
: *required* A **Byte()** array containing the bytes to send. An uninitialised or zero-length array is a no-op. For typed multi-field payloads the recommended encoding is [**PropertyBag**](/en/official/Reference/VBRUN/PropertyBag) --- see [Recommended payload encoding: `PropertyBag`](/en/official/Reference/WinNamedPipesLib#propertybag-carrier) on the package overview.

*Cookie*
: *optional* A **Variant** correlation value, passed back as the *Cookie* parameter of the matching [**MessageSent**](#messagesent) event. Default **Empty**.

Returns immediately; the actual transmission runs through the IOCP loop. The completion fires [**MessageSent**](#messagesent) on this connection.

## See Also

- [WinNamedPipesLib package](/en/official/Reference/WinNamedPipesLib) -- overview, IOCP / event-marshalling architecture, cookie pattern, `Data()` lifetime caveat, the **AsyncClose** rule
- [Recommended payload encoding: `PropertyBag`](/en/official/Reference/WinNamedPipesLib#propertybag-carrier) -- the deep-copy capture pattern for transient *Data* in events
- [NamedPipeClientManager class](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager) -- the manager that produced this connection
- [NamedPipeServerConnection class](/en/official/Reference/WinNamedPipesLib/NamedPipeServerConnection) -- the server-side counterpart
