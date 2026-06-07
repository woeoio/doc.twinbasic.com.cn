---
title: (Default) Module
parent: VBA Package
permalink: /tB/Modules/HiddenModule/
---

# (Default) module

The **(Default)** module --- known internally as **\_HiddenModule** --- gathers together the unqualified intrinsic procedures that the compiler emits calls into and that are also callable directly: raw-memory helpers, atomic operations, compile-time reflection, codegen and stack-inspection primitives, and a long tail of runtime utilities. Members of this module are referenced without a qualifier, the same way **MsgBox** and **CStr** are.

Most of these procedures are deliberately hidden from IntelliSense and exist for advanced or low-level use; use them only when the higher-level alternatives in **[Math](/official/Reference/VBA/Math/)**, **[Strings](/official/Reference/VBA/Strings/)**, **[Information](/official/Reference/VBA/Information/)**, or **[Interaction](/official/Reference/VBA/Interaction/)** don't cover the case. Several have additional internal-only members that are not listed here at all.

The pointer functions [**ObjPtr**](/official/Reference/VBA/Information/ObjPtr), [**StrPtr**](/official/Reference/VBA/Information/StrPtr), and [**VarPtr**](/official/Reference/VBA/Information/VarPtr) and the [**Array**](/official/Reference/VBA/Information/Array) constructor are documented under the [**Information**](/official/Reference/VBA/Information/) module; [**Input**](/official/Reference/VBA/FileSystem/Input), [**InputB**](/official/Reference/VBA/FileSystem/InputB), and [**Width**](/official/Reference/VBA/FileSystem/Width) under [**FileSystem**](/official/Reference/VBA/FileSystem/).

## Reading and writing memory

Memory at a known address is read and written one machine word at a time with the **GetMem*** / **PutMem*** family --- [**GetMem1**](/official/Reference/VBA/HiddenModule/GetMem1), [**GetMem2**](/official/Reference/VBA/HiddenModule/GetMem2), [**GetMem4**](/official/Reference/VBA/HiddenModule/GetMem4), [**GetMem8**](/official/Reference/VBA/HiddenModule/GetMem8), and [**GetMemPtr**](/official/Reference/VBA/HiddenModule/GetMemPtr) for reads, with matching [**PutMem1**](/official/Reference/VBA/HiddenModule/PutMem1), [**PutMem2**](/official/Reference/VBA/HiddenModule/PutMem2), [**PutMem4**](/official/Reference/VBA/HiddenModule/PutMem4), [**PutMem8**](/official/Reference/VBA/HiddenModule/PutMem8), and [**PutMemPtr**](/official/Reference/VBA/HiddenModule/PutMemPtr). [**vbaCopyBytes**](/official/Reference/VBA/HiddenModule/vbaCopyBytes) and [**vbaCopyBytesZero**](/official/Reference/VBA/HiddenModule/vbaCopyBytesZero) move blocks; [**AllocMem**](/official/Reference/VBA/HiddenModule/AllocMem) and [**FreeMem**](/official/Reference/VBA/HiddenModule/FreeMem) manage heap allocations. The pointer constructors that feed these helpers --- [**ObjPtr**](/official/Reference/VBA/Information/ObjPtr), [**StrPtr**](/official/Reference/VBA/Information/StrPtr), [**VarPtr**](/official/Reference/VBA/Information/VarPtr) --- live in [**Information**](/official/Reference/VBA/Information/).

```vb
Dim Buffer As LongPtr = AllocMem(16)
PutMem4 Buffer, &HDEADBEEF
Dim Magic As Long
GetMem4 Buffer, Magic
FreeMem Buffer
```

[**vbaRefVarAry**](/official/Reference/VBA/HiddenModule/vbaRefVarAry) and [**vbaAryMove**](/official/Reference/VBA/HiddenModule/vbaAryMove) are lower-level helpers used when interfacing with C-side array layouts.

## Object references and casting

[**vbaObjAddref**](/official/Reference/VBA/HiddenModule/vbaObjAddref), [**vbaObjSet**](/official/Reference/VBA/HiddenModule/vbaObjSet), and [**vbaObjSetAddref**](/official/Reference/VBA/HiddenModule/vbaObjSetAddref) manipulate COM reference counts directly. [**vbaCastObj**](/official/Reference/VBA/HiddenModule/vbaCastObj) returns the object reinterpreted as another COM interface, given its IID. [**CreateGUID**](/official/Reference/VBA/HiddenModule/CreateGUID) generates a fresh GUID and returns it as a registry-formatted string.

## Atomic operations

The **Interlocked*** family wraps the corresponding Windows kernel atomics --- building blocks for lock-free counters and pointer swaps: [**InterlockedExchangePointer**](/official/Reference/VBA/HiddenModule/InterlockedExchangePointer), [**InterlockedCompareExchangePointer**](/official/Reference/VBA/HiddenModule/InterlockedCompareExchangePointer), [**InterlockedCompareExchange32**](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange32), [**InterlockedCompareExchange64**](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange64), [**InterlockedIncrement32**](/official/Reference/VBA/HiddenModule/InterlockedIncrement32), and [**InterlockedDecrement32**](/official/Reference/VBA/HiddenModule/InterlockedDecrement32).

## Compile-time reflection

A few intrinsics ask questions about the surrounding type without running anything; they are resolved by the compiler and embedded as constants. [**GetDeclaredTypeProgId**](/official/Reference/VBA/HiddenModule/GetDeclaredTypeProgId), [**GetDeclaredTypeClsid**](/official/Reference/VBA/HiddenModule/GetDeclaredTypeClsid), [**GetDeclaredTypeIid**](/official/Reference/VBA/HiddenModule/GetDeclaredTypeIid), and [**GetDeclaredTypeEventIid**](/official/Reference/VBA/HiddenModule/GetDeclaredTypeEventIid) report a type's COM identifiers. [**GetDeclaredMinEnumValue**](/official/Reference/VBA/HiddenModule/GetDeclaredMinEnumValue) and [**GetDeclaredMaxEnumValue**](/official/Reference/VBA/HiddenModule/GetDeclaredMaxEnumValue) return the minimum and maximum value of a declared enumeration.

## Codegen injection and stack inspection

[**Emit**](/official/Reference/VBA/HiddenModule/Emit) and [**EmitAny**](/official/Reference/VBA/HiddenModule/EmitAny) splice raw bytes or typed literals into the codegen output of the enclosing procedure --- the vehicle for inline assembly. [**StackOffset**](/official/Reference/VBA/HiddenModule/StackOffset) and [**StackArgsSize**](/official/Reference/VBA/HiddenModule/StackArgsSize) report layout information at the current call site; [**UnprotectedAccess**](/official/Reference/VBA/HiddenModule/UnprotectedAccess) returns an object reference that bypasses the usual access checks on private members.

## Runtime expression evaluation

[**Eval**](/official/Reference/VBA/HiddenModule/Eval) compiles and evaluates a twinBASIC expression supplied as a string, using a freshly built [**TbExpressionService**](/official/Reference/VBA/TbExpressionService/) configured with the standard library binder.

## Pictures, bitmaps, and icons

[**PictureToByteArray**](/official/Reference/VBA/HiddenModule/PictureToByteArray) serialises an **IPicture** to a byte array; [**CreateStdPictureFromHandle**](/official/Reference/VBA/HiddenModule/CreateStdPictureFromHandle) wraps a GDI handle in an **stdole.StdPicture**; [**ConvertIconToBitmap**](/official/Reference/VBA/HiddenModule/ConvertIconToBitmap) does the obvious.

## Other helpers

[**GetInheritedOwner**](/official/Reference/VBA/HiddenModule/GetInheritedOwner) returns the inherited owner object of a control. [**GetShortcutTextByEnum**](/official/Reference/VBA/HiddenModule/GetShortcutTextByEnum) returns the localised display text for a built-in keyboard shortcut. [**SetThreadGlobalErrorTrap**](/official/Reference/VBA/HiddenModule/SetThreadGlobalErrorTrap) registers a callback that fires when an unhandled run-time error escapes the active error handler chain on the calling thread.

## Members

- [AllocMem](/official/Reference/VBA/HiddenModule/AllocMem) -- allocates a block of native memory and returns its address
- [ConvertIconToBitmap](/official/Reference/VBA/HiddenModule/ConvertIconToBitmap) -- converts an icon picture to a bitmap picture
- [CreateGUID](/official/Reference/VBA/HiddenModule/CreateGUID) -- generates a fresh GUID and returns it as a registry-formatted string
- [CreateStdPictureFromHandle](/official/Reference/VBA/HiddenModule/CreateStdPictureFromHandle) -- wraps a GDI bitmap or icon handle in an **stdole.StdPicture**
- [Emit](/official/Reference/VBA/HiddenModule/Emit) -- injects custom **Byte** values into the codegen stream of the enclosing procedure
- [EmitAny](/official/Reference/VBA/HiddenModule/EmitAny) -- injects custom typed values into the codegen stream of the enclosing procedure
- [Eval](/official/Reference/VBA/HiddenModule/Eval) -- compiles and evaluates a twinBASIC expression supplied as a string
- [FreeMem](/official/Reference/VBA/HiddenModule/FreeMem) -- frees memory allocated with [**AllocMem**](/official/Reference/VBA/HiddenModule/AllocMem)
- [GetDeclaredMaxEnumValue](/official/Reference/VBA/HiddenModule/GetDeclaredMaxEnumValue) -- returns the maximum value of a declared enumeration type, resolved at compile time
- [GetDeclaredMinEnumValue](/official/Reference/VBA/HiddenModule/GetDeclaredMinEnumValue) -- returns the minimum value of a declared enumeration type, resolved at compile time
- [GetDeclaredTypeClsid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeClsid) -- returns the COM CLSID associated with the declared type, resolved at compile time
- [GetDeclaredTypeEventIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeEventIid) -- returns the COM event-interface IID associated with the declared type, resolved at compile time
- [GetDeclaredTypeIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeIid) -- returns the COM interface IID associated with the declared type, resolved at compile time
- [GetDeclaredTypeProgId](/official/Reference/VBA/HiddenModule/GetDeclaredTypeProgId) -- returns the COM ProgID associated with the declared type, resolved at compile time
- [GetInheritedOwner](/official/Reference/VBA/HiddenModule/GetInheritedOwner) -- returns the inherited owner object of a control
- [GetMem1](/official/Reference/VBA/HiddenModule/GetMem1) -- reads one byte from a memory address into a **Byte** variable
- [GetMem2](/official/Reference/VBA/HiddenModule/GetMem2) -- reads two bytes from a memory address into an **Integer** variable
- [GetMem4](/official/Reference/VBA/HiddenModule/GetMem4) -- reads four bytes from a memory address into a **Long** variable
- [GetMem8](/official/Reference/VBA/HiddenModule/GetMem8) -- reads eight bytes from a memory address into a **Currency** variable
- [GetMemPtr](/official/Reference/VBA/HiddenModule/GetMemPtr) -- reads a pointer-sized value from a memory address into a **LongPtr** variable
- [GetShortcutTextByEnum](/official/Reference/VBA/HiddenModule/GetShortcutTextByEnum) -- returns the localized text for a built-in keyboard shortcut by its enumeration ID
- [InterlockedCompareExchange32](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange32) -- atomically compares and exchanges a 32-bit value
- [InterlockedCompareExchange64](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange64) -- atomically compares and exchanges a 64-bit value
- [InterlockedCompareExchangePointer](/official/Reference/VBA/HiddenModule/InterlockedCompareExchangePointer) -- atomically compares and exchanges a pointer-sized value
- [InterlockedDecrement32](/official/Reference/VBA/HiddenModule/InterlockedDecrement32) -- atomically decrements a 32-bit value and returns the new value
- [InterlockedExchangePointer](/official/Reference/VBA/HiddenModule/InterlockedExchangePointer) -- atomically exchanges a pointer-sized value and returns the previous value
- [InterlockedIncrement32](/official/Reference/VBA/HiddenModule/InterlockedIncrement32) -- atomically increments a 32-bit value and returns the new value
- [PictureToByteArray](/official/Reference/VBA/HiddenModule/PictureToByteArray) -- serialises an **IPicture** into a **Byte** array
- [PutMem1](/official/Reference/VBA/HiddenModule/PutMem1) -- writes one byte to a memory address
- [PutMem2](/official/Reference/VBA/HiddenModule/PutMem2) -- writes two bytes to a memory address
- [PutMem4](/official/Reference/VBA/HiddenModule/PutMem4) -- writes four bytes to a memory address
- [PutMem8](/official/Reference/VBA/HiddenModule/PutMem8) -- writes eight bytes to a memory address
- [PutMemPtr](/official/Reference/VBA/HiddenModule/PutMemPtr) -- writes a pointer-sized value to a memory address
- [RuntimeCreateGetMessageHook](/official/Reference/VBA/HiddenModule/RuntimeCreateGetMessageHook) -- creates an [**IGetMessageHook**](./#igetmessagehook-interface) for filtering window messages
- [SetThreadGlobalErrorTrap](/official/Reference/VBA/HiddenModule/SetThreadGlobalErrorTrap) -- registers a global callback invoked when an unhandled error is raised on the calling thread
- [StackArgsSize](/official/Reference/VBA/HiddenModule/StackArgsSize) -- returns the total size, in bytes, of the arguments on the current procedure's stack frame
- [StackOffset](/official/Reference/VBA/HiddenModule/StackOffset) -- returns the stack-frame offset of a variable
- [UnprotectedAccess](/official/Reference/VBA/HiddenModule/UnprotectedAccess) -- returns an object reference that bypasses access checks on private members
- [vbaAryMove](/official/Reference/VBA/HiddenModule/vbaAryMove) -- moves the contents of one array variable into another
- [vbaCastObj](/official/Reference/VBA/HiddenModule/vbaCastObj) -- returns an object reinterpreted as another COM interface
- [vbaCopyBytes](/official/Reference/VBA/HiddenModule/vbaCopyBytes) -- copies a block of bytes from one address to another
- [vbaCopyBytesZero](/official/Reference/VBA/HiddenModule/vbaCopyBytesZero) -- copies a block of bytes from one address to another, then zeros the source
- [vbaObjAddref](/official/Reference/VBA/HiddenModule/vbaObjAddref) -- increments the COM reference count of an object at a given address
- [vbaObjSet](/official/Reference/VBA/HiddenModule/vbaObjSet) -- assigns an object pointer to an object variable, releasing any prior reference
- [vbaObjSetAddref](/official/Reference/VBA/HiddenModule/vbaObjSetAddref) -- assigns an object pointer to an object variable, adding a reference and releasing any prior reference
- [vbaRefVarAry](/official/Reference/VBA/HiddenModule/vbaRefVarAry) -- returns a pointer to the **SAFEARRAY** descriptor inside a **Variant** array

## IGetMessageHook interface

The **IGetMessageHook** interface hooks into the Windows message stream for a chosen window --- and optionally its descendants --- and forwards messages of a chosen type to a user-supplied callback. Obtain an instance with [**RuntimeCreateGetMessageHook**](/official/Reference/VBA/HiddenModule/RuntimeCreateGetMessageHook); connect callbacks with [**RegisterMessage**](/official/Reference/VBA/HiddenModule/RegisterMessage); then call [**Start**](/official/Reference/VBA/HiddenModule/Start) to activate every registered subscription, and [**Stop**](/official/Reference/VBA/HiddenModule/Stop) to remove them.

The interface inherits directly from **stdole.IUnknown** (it is not dispatch-based), and the callbacks supplied to **RegisterMessage** are typed as [**GetMessageHookHelper.GetMessageHandler**](#getmessagehandler).

```vb
Const WM_LBUTTONDOWN = &H201

Sub Demo()
    Dim Hook As IGetMessageHook = RuntimeCreateGetMessageHook
    Hook.RegisterMessage Me.hWnd, AllDescendants, _
                         WM_LBUTTONDOWN, AddressOf OnLButtonDown
    Hook.Start
End Sub

Function OnLButtonDown(ByRef msg As GetMessageHookHelper.HookMSG) As LongPtr
    Debug.Print "Click at"; msg.pt.x, msg.pt.y
    ' Return zero to let the message continue normal processing.
End Function
```

### Members

- [RegisterMessage](/official/Reference/VBA/HiddenModule/RegisterMessage) -- subscribes a callback to a single message type for a window and a chosen descendant scope
- [Start](/official/Reference/VBA/HiddenModule/Start) -- activates every registered subscription
- [Stop](/official/Reference/VBA/HiddenModule/Stop) -- deactivates every registered subscription

### EnumDescendantsModeFlags

Selects the window scope passed to [**RegisterMessage**](/official/Reference/VBA/HiddenModule/RegisterMessage):

| Constant                                 | Value | Description |
|------------------------------------------|-------|-------------|
| **ExactWindow**         | 1     | Hook only the specified window. |
| **AllDescendants**   | 2     | Hook the specified window and every descendant --- children, grandchildren, and so on. |
| **DirectChildren**   | 4     | Hook the specified window and its immediate children only. |

## GetMessageHookHelper module

The **GetMessageHookHelper** module is a small companion to [**IGetMessageHook**](#igetmessagehook-interface) that holds the structures and the delegate type used by its callback. There is nothing to construct; the names exist only for use in declarations.

### HookMSG

A copy of the Windows `MSG` structure, passed by reference into a [**GetMessageHandler**](#getmessagehandler) callback.

```vb
Type HookMSG
    hwnd As LongPtr             ' Window the message is destined for.
    message As Long             ' The WM_* identifier.
    wParam As LongPtr           ' Message-specific parameter.
    lParam As LongPtr           ' Message-specific parameter.
    time As Long                ' Time the message was posted, in milliseconds since system start.
    pt As HookPOINT             ' Cursor position when the message was posted.
End Type
```

### HookPOINT

A 2D point with **Long** coordinates, used by [**HookMSG**](#hookmsg) to hold the cursor position.

```vb
Type HookPOINT
    x As Long
    y As Long
End Type
```

### GetMessageHandler

The callback signature accepted by [**IGetMessageHook.RegisterMessage**](/official/Reference/VBA/HiddenModule/RegisterMessage). Returning zero generally lets the message continue normal processing.

```vb
Public Delegate Function GetMessageHandler (ByRef msg As HookMSG) As LongPtr
```
