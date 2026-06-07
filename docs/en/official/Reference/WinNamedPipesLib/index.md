---
title: WinNamedPipesLib Package
parent: Packages
nav_order: 9
permalink: /tB/Packages/WinNamedPipesLib/
---

# WinNamedPipesLib Package
The **WinNamedPipesLib** built-in package exposes Windows named pipes as twinBASIC objects with an asynchronous, IOCP-driven I/O model. One process hosts a [**NamedPipeServer**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer); other processes use a [**NamedPipeClientManager**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager) to open one or more [**NamedPipeClientConnection**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection) instances to it. Writes complete in the background; messages and connection-lifecycle changes are delivered as events.

The package is a built-in package shipped with twinBASIC. Add it through Project → References (**Ctrl-T**) → Available Packages.

## Architecture

Two halves, each one user-instantiated coordinator class plus one per-connection class:

| Side    | Coordinator                                            | Per-connection                                                 |
|---------|--------------------------------------------------------|----------------------------------------------------------------|
| Server  | [**NamedPipeServer**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer)                 | [**NamedPipeServerConnection**](/en/official/Reference/WinNamedPipesLib/NamedPipeServerConnection)     |
| Client  | [**NamedPipeClientManager**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager)   | [**NamedPipeClientConnection**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection)     |

The server publishes a name (`PipeName = "MyService"` → Win32 path `\\.\pipe\MyService`) and returns a [**NamedPipeServerConnection**](/en/official/Reference/WinNamedPipesLib/NamedPipeServerConnection) for every client that connects. The client manager dials by the same name (with [**Connect**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect)) and returns a [**NamedPipeClientConnection**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection). The two ends are symmetric thereafter --- both expose `AsyncRead`, `AsyncWrite`, and `AsyncClose` with the same signatures.

Reads, writes, and connection completion all run through the same Windows I/O Completion Port (IOCP) infrastructure. Each coordinator class owns its own completion port, a configurable pool of worker threads ([**NumThreadsIOCP**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#numthreadsiocp)), and a hidden message-only window used to marshal events back to the UI thread.

## Event delivery --- marshalled vs free-threaded

By default events fire on the main UI thread. The IOCP worker threads receive each completion, package the buffer, and `PostMessage` the result to a hidden `STATIC`-class window owned by the coordinator. The window's subclassed `WndProc` then raises the BASIC event from the message loop. This means the consuming process **must be pumping a Win32 message loop** for events to be delivered. Forms-based hosts already are; console hosts and Windows services are not, and need either [**NamedPipeServer.ManualMessageLoopEnter**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopenter) (and the matching `ManualMessageLoopLeave`) or `FreeThreadingEvents = True`.

Setting [**FreeThreadingEvents**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#freethreadingevents) to **True** skips the marshalling round-trip and raises events directly from the IOCP worker thread. Performance is higher and there is no message-loop requirement, but the consumer's event handlers must be thread-safe --- multiple `ClientMessageReceived` events from different clients can fire concurrently, and global / class state touched from the handler is **not** protected by the implicit UI-thread serialisation that the default mode provides.

The flag must be set before [**Start**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#start) (server side) or before the first [**Connect**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect) call (client side); it is read once and propagated to every per-connection object.

## Hosting inside a Windows service

Windows services hosted through the [**WinServicesLib**](/en/official/Reference/WinServicesLib/) package run into the message-loop dependency described above when they also host a [**NamedPipeServer**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer): the [**ITbService.EntryPoint**](/en/official/Reference/WinServicesLib/ITbService#entrypoint) thread is not pumping messages by default, so the marshalled-event delivery has nothing to dispatch through. The package provides [**NamedPipeServer.ManualMessageLoopEnter**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopenter) / [**ManualMessageLoopLeave**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopleave) for exactly this case.

The canonical pattern: [**ITbService.EntryPoint**](/en/official/Reference/WinServicesLib/ITbService#entrypoint) opens the server, transitions the service to `Running`, blocks inside [**ManualMessageLoopEnter**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopenter), and only leaves the loop when [**ITbService.ChangeState**](/en/official/Reference/WinServicesLib/ITbService#changestate) --- running on the *other* (dispatcher) thread --- calls [**ManualMessageLoopLeave**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopleave) on the same server instance.

```vb
' On the service-entry-point thread:
Set NamedPipeServer = New NamedPipeServer
NamedPipeServer.PipeName = "MyServicePipe"

' (tell the SCM the service is running, then block on the message loop)
ServiceManager.ReportStatus vbServiceStatusRunning
NamedPipeServer.Start
NamedPipeServer.ManualMessageLoopEnter      ' blocks until ManualMessageLoopLeave
NamedPipeServer.Stop

ServiceManager.ReportStatus vbServiceStatusStopped

' On the dispatcher thread (an ITbService.ChangeState handler):
Select Case dwControl
    Case vbServiceControlStop, vbServiceControlShutdown
        ServiceManager.ReportStatus vbServiceStatusStopPending
        NamedPipeServer.ManualMessageLoopLeave   ' wakes the service thread out of ManualMessageLoopEnter
End Select
```

Three facts worth pulling out:

- The service entry-point and the control-code handler run on **different threads**. The shared [**NamedPipeServer**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer) member field is what they coordinate through; the handler calls [**ManualMessageLoopLeave**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopleave) on it to wake the entry-point.
- [**ManualMessageLoopLeave**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopleave) is the only way to exit [**ManualMessageLoopEnter**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopenter) cleanly. There is no timeout and no second blocking primitive. Services that need to react to other wake-up sources (e.g. a *Pause* control code) set a shared `Public` flag *then* call [**ManualMessageLoopLeave**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopleave) to break out, inspect the flag, and re-enter the loop or proceed to shutdown.
- [**FreeThreadingEvents**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#freethreadingevents) = **False** (the default) is **required** for this pattern. Setting it to **True** would deliver events directly on the IOCP worker thread and bypass the manual loop entirely -- the pipe still works, but `ManualMessageLoopEnter` / `Leave` become irrelevant. Pick one mode and stay with it.

The non-service equivalent --- hosting the same [**NamedPipeServer**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer) inside a Form --- is simpler: the Form's regular message loop pumps the marshalling window automatically, so the Form calls [**Start**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#start) in `Form_Load`, [**Stop**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#stop) in `Form_Unload`, and never touches [**ManualMessageLoopEnter**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopenter) / [**ManualMessageLoopLeave**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopleave). Either pattern works; the service-host pattern is the one that needs the manual pump.

## Asynchronous reads

When [**ContinuouslyReadFromPipe**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#continuouslyreadfrompipe) is **True** (the default), the package keeps a read pending against every connection at all times --- every [**ClientMessageReceived**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#clientmessagereceived) / [**MessageReceived**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#messagereceived) event is followed by another `AsyncRead` issued from inside the IOCP thread. Set the flag to **False** to handle reads one-at-a-time: each event handler must then call [**NamedPipeServerConnection.AsyncRead**](/en/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#asyncread) / [**NamedPipeClientConnection.AsyncRead**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#asyncread) to receive the next message. This is useful for back-pressure when the consumer can't process messages as fast as they arrive.

## The cookie correlation pattern

Every [**AsyncRead**](/en/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#asyncread) and [**AsyncWrite**](/en/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#asyncwrite) accepts an optional *Cookie* of type **Variant**. Whatever value the caller passes in is round-tripped through the IOCP completion and re-emitted as the *Cookie* parameter of the matching [**ClientMessageReceived**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#clientmessagereceived) / [**ClientMessageSent**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#clientmessagesent) (or client-side [**MessageReceived**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#messagereceived) / [**MessageSent**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#messagesent)) event. Use this to correlate event callbacks with the calls that initiated them --- a per-request sequence number, a callback object, a key into a pending-replies dictionary.

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

## Working with `Data() As Byte` in events

The *Data* parameter on [**ClientMessageReceived**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#clientmessagereceived) and [**MessageReceived**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#messagereceived) is **not** a normal heap-allocated **Byte** array. The package constructs a custom `SAFEARRAY` whose backing memory points at the IOCP read buffer, then clears the array pointer at the end of the event handler so the buffer can be recycled. The values are valid *only* while the handler is on the stack.

::: important
Copy the bytes out before the event handler returns if they are needed later. Storing the array reference in a module-level variable, a **Collection**, or a class field leaves a dangling pointer once the IOCP loop reuses the buffer for the next message.
:::

For a fresh **Byte()** copy:

```vb
Dim Stored() As Byte
ReDim Stored(UBound(Data))
[_HiddenModule].vbaCopyBytes UBound(Data) + 1, VarPtr(Stored(0)), VarPtr(Data(0))
```

For a text payload, `StrConv(Data, vbUnicode)` (UTF-8) or `CStr` over a `vbUnicode`-converted copy reads the bytes immediately and produces an owned **String** in one step.

## Recommended payload encoding: `PropertyBag`

The package transports raw bytes; it is agnostic about what is inside them. For non-trivial protocols the recommended carrier is [**PropertyBag**](/en/official/Reference/VBRUN/PropertyBag/) --- twinBASIC's built-in keyed-property serialiser. Two reasons:

1. **`PropertyBag.Contents` deep-copies the bytes**, which is the simplest answer to the transient-`Data()` lifetime caveat above. Assigning *Data* to a fresh **PropertyBag**'s **Contents** captures the buffer in one step; the copy is safe to retain past the event handler.
2. **`PropertyBag` provides typed multi-field payloads** without the consumer having to design a wire protocol. Both sides agree on property names (e.g. `"CommandID"`, `"ResponseCommandID"`, `"Data"`) and **PropertyBag** handles the byte-level encoding.

```vb
' Sender:
Dim request As New PropertyBag
request.WriteProperty "CommandID", "WHAT_TIME_IS_IT"
connection.AsyncWrite request.Contents

' Receiver — inside ClientMessageReceived / MessageReceived:
Dim incoming As New PropertyBag
incoming.Contents = Data        ' deep-copies the bytes; safe to use past the handler

Dim cmd As String = incoming.ReadProperty("CommandID")
Select Case cmd
    Case "WHAT_TIME_IS_IT"
        Dim reply As New PropertyBag
        reply.WriteProperty "ResponseCommandID", cmd
        reply.WriteProperty "ResponseData", Time()
        Connection.AsyncWrite reply.Contents
End Select
```

Nothing in the package mandates **PropertyBag** --- raw `Byte()` works too, and a custom wire format may be the right answer for very high-throughput scenarios. The everyday case is well served by the **PropertyBag** convention, and it solves the transient-`Data()` problem without extra effort.

## Closing a client connection

::: important
The **`_README.txt`** states: *"you MUST call **AsyncClose** on the client side, otherwise the connection is left alive when the object goes out of scope"*.
:::

Either let the [**NamedPipeClientConnection**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection) object terminate cleanly through its `Class_Terminate` (which calls [**AsyncClose**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#asyncclose) automatically) **or** call [**AsyncClose**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#asyncclose) explicitly before dropping the last reference. Holding a reference forever --- for example in a long-lived module-level **Collection** --- without calling [**AsyncClose**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#asyncclose) keeps the underlying pipe handle open and the IOCP thread alive.

## Discovering pipes

[**NamedPipeClientManager.FindNamedPipes**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager#findnamedpipes) enumerates the named pipes published on the local machine, returning a **Collection** of **String** names that match an optional `*`/`?` wildcard pattern. The implementation is `FindFirstFileW("\\.\pipe\<Pattern>")` --- the package strips the leading namespace itself, so pass just the pipe name (`"MyService*"`, not `"\\.\pipe\MyService*"`).

Named pipes can appear and disappear at any time as their server processes start and stop, and the package does not publish an event for this. The canonical discovery loop is a low-frequency [**Timer**](/en/official/Reference/VB/Timer/) that repopulates a list and preserves the user's current selection --- a few seconds between polls is the typical interval; the underlying `FindFirstFileW` is cheap enough that nothing finer is required:

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

## Known limitations

- **No `Error` event is raised.** None of the four classes raises an `Error` event. Recognised IOCP failures (`ERROR_BROKEN_PIPE`, `ERROR_OPERATION_ABORTED`) drop the connection silently through the normal [**ClientDisconnected**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#clientdisconnected) / [**Disconnected**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#disconnected) path --- the consumer cannot distinguish a deliberate close from a transport failure. Worse, the client-side IOCP loop (`IOCPThreadClient` in `NamedPipeClientManager.twin`) contains a literal **Stop** statement on the branch for *unrecognised* error codes, which halts execution rather than reporting the error to consumer code.
- **Send is hard-capped at** [**MessageBufferSize**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#messagebuffersize) **bytes.** The receive path grows its buffer dynamically on `ERROR_MORE_DATA`, so reads of arbitrary size work. The send path does not: [**AsyncWrite**](/en/official/Reference/WinNamedPipesLib/NamedPipeServerConnection#asyncwrite) (and the client-side [**AsyncWrite**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection#asyncwrite)) copies the caller's `Byte()` *without a bounds-check* into a per-completion buffer sized at [**MessageBufferSize**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#messagebuffersize) (default **131072** bytes); the same applies to [**AsyncBroadcast**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#asyncbroadcast). A larger message overruns the buffer --- likely a crash or heap corruption rather than a clean error. Raise [**MessageBufferSize**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#messagebuffersize) above the largest expected message *before* the first [**Start**](/en/official/Reference/WinNamedPipesLib/NamedPipeServer#start) (server) or [**Connect**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect) (client); the value is read once at that point and propagated to every per-connection buffer.

## Classes

- [NamedPipeServer](/en/official/Reference/WinNamedPipesLib/NamedPipeServer) -- the server: publishes a pipe name, hosts an IOCP loop, raises events for the lifecycle of every accepted client
- [NamedPipeServerConnection](/en/official/Reference/WinNamedPipesLib/NamedPipeServerConnection) -- one server-side per-client connection; the **Connection** parameter of every `NamedPipeServer` event, with its own `AsyncRead` / `AsyncWrite` / `AsyncClose`
- [NamedPipeClientManager](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager) -- the client-side coordinator; owns the IOCP loop and the [**Connect**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager#connect) / [**Stop**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager#stop) / [**FindNamedPipes**](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager#findnamedpipes) methods
- [NamedPipeClientConnection](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection) -- one client-side connection; exposes the `Connected` / `Disconnected` / `MessageReceived` / `MessageSent` events and the matching `AsyncRead` / `AsyncWrite` / `AsyncClose` methods
