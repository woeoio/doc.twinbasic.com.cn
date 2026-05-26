---
title: Delegates (In Detail)
parent: Language
nav_order: 4
permalink: /en/Features/Language/DelegatesDetail
---

# Delegate Types for Indirect Invocation

Native support for calling functions through pointers, via the `Delegate` syntax. A delegate in twinBASIC is a function pointer type compatible with LongPtr. `AddressOf` returns a delegate type, which is also backward-compatible with `LongPtr`.

## Basic Usage

### Defining a Delegate Type

Use the `Delegate` keyword to define a function pointer type, declaring its parameter signature and return type:

```vb
' Define a delegate with no return value (like a Sub)
Public Delegate Sub NotifyHandler(ByVal message As String)

' Define a delegate with a return value (like a Function)
Public Delegate Function MathOp(ByVal A As Long, ByVal B As Long) As Long

' Define a delegate with pointer parameters (for Win32 API callbacks)
Public Delegate Function WndProc(ByVal hwnd As LongPtr, ByVal uMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr
```

> **Note**: twinBASIC delegates do not support generic parameters — you cannot write `Delegate Sub Action(Of T)(ByVal item As T)`. You need to define a concrete delegate type for each parameter type.

### Assignment and Invocation

Use `AddressOf` to obtain a function address and assign it to a delegate variable, then call the delegate directly using function call syntax:

```vb
Private Delegate Function Delegate1(ByVal A As Long, ByVal B As Long) As Long

Private Sub Command1_Click()
    Dim myDelegate As Delegate1 = AddressOf Addition
    MsgBox "Answer: " & myDelegate(5, 6)
End Sub

Public Function Addition(ByVal A As Long, ByVal B As Long) As Long
    Return A + B
End Function
```

A delegate variable can also be declared first and assigned later — it does not need to be initialized at declaration:

```vb
Dim myDelegate As Delegate1    ' Declare first
myDelegate = AddressOf Addition ' Assign later
MsgBox "Answer: " & myDelegate(5, 6)
```

## Relationship Between Delegates and LongPtr

twinBASIC delegate types are fully compatible with `LongPtr`, which means:

- Delegates can be implicitly converted to `LongPtr`
- `LongPtr` can be explicitly converted back to a delegate type via `CType`
- The old VB6 practice of storing callback pointers as `LongPtr` still works

### Why Convert to LongPtr?

In class modules, delegate types have some limitations that make storing delegate variables directly not always feasible:

| Operation | Delegate Type | LongPtr |
|-----------|--------------|---------|
| As a private class member | ❌ Not supported | ✅ Supported |
| Assignment with `Set` | ❌ Not an object | N/A |
| Check with `IsNot Nothing` | ❌ Not supported | ✅ Can compare with 0 |
| Assignment with `Property Let` | ✅ Supported | ✅ Supported |
| Assignment with `Property Set` | ❌ Not supported | N/A |

Therefore, **in real-world projects, it is recommended to use `LongPtr` to store delegate pointers**, and convert back to delegate types when invocation is needed.

### LongPtr Storage and CType Conversion Pattern

This is a battle-tested complete pattern:

```vb
' --- Define delegate ---
Public Delegate Sub ResizeHandler(ByVal newWidth As Long, ByVal newHeight As Long)

' --- Store delegate pointer as LongPtr in a class ---
Public Class MyWindow
    ' Store function pointer as LongPtr
    Private m_OnResize As LongPtr
    ' Use a boolean flag to track whether it has been set
    Private m_HasResizeHandler As Boolean

    ' Use Property Let (not Set) to set the delegate
    Public Property Let OnResize(ByVal handler As ResizeHandler)
        m_OnResize = CLngPtr(handler)        ' Delegate to LongPtr
        m_HasResizeHandler = (handler <> 0)  ' Check if not null
    End Property

    ' When triggering the event, convert back to delegate type and call
    Public Sub RaiseResize(ByVal w As Long, ByVal h As Long)
        If m_HasResizeHandler AndAlso m_OnResize <> 0 Then
            Dim h As ResizeHandler = CType(Of ResizeHandler)(m_OnResize)
            h(w, h)
        End If
    End Sub
End Class
```

Summary of key steps:

1. **Store**: `m_Ptr = CLngPtr(delegateValue)` — delegate to LongPtr
2. **Check if null**: `delegateValue <> 0` or maintain a boolean flag
3. **Invoke**: `CType(Of DelegateType)(m_Ptr)` — convert LongPtr back to delegate, then call directly

## Delegates as UDT Members

Delegate types can be used as members of User-Defined Types (UDT / Structure), replacing traditional `LongPtr` function pointer fields and providing type safety:

```vb
Public Delegate Function CCHookProc(ByVal hwnd As LongPtr, ByVal uMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr

Public Type CHOOSECOLOR
    lStructSize As Long
    hwndOwner As LongPtr
    hInstance As LongPtr
    rgbResult As Long
    lpCustColors As LongPtr
    Flags As ChooseColorFlags
    lCustData As LongPtr
    lpfnHook As CCHookProc    ' Delegate function pointer type, not LongPtr
    lpTemplateName As LongPtr
End Type
```

If you already have code that assigns `Long`/`LongPtr` to the `lpfnHook` member, it will continue to work, but now you also get the type safety advantage of assigning it to a method matching the delegate:

```vb
Dim tCC As CHOOSECOLOR
tCC.lpfnHook = AddressOf ChooseColorHookProc

'...

Public Function ChooseColorHookProc(ByVal hwnd As LongPtr, ByVal uMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr

End Function
```

## Using Delegates in API Declarations

### Standard Callback Functions

Delegates can be used directly for callback parameters in API declarations, replacing traditional `LongPtr` and gaining compile-time type checking:

```vb
' Traditional approach (VB6 compatible)
Public Declare PtrSafe Function EnumWindows Lib "user32" ( _
    ByVal lpEnumFunc As LongPtr, _
    ByVal lParam As LongPtr) As Long

' Delegate approach (recommended, type-safe)
Public Delegate Function EnumWindowsProc(ByVal hwnd As LongPtr, ByVal lParam As LongPtr) As Long

Public Declare PtrSafe Function EnumWindows Lib "user32" ( _
    ByVal lpEnumFunc As EnumWindowsProc, _
    ByVal lParam As LongPtr) As Long
```

Pass the callback function using `AddressOf`:

```vb
Public Sub ListWindows()
    EnumWindows AddressOf MyEnumProc, 0
End Sub

Private Function MyEnumProc(ByVal hwnd As LongPtr, ByVal lParam As LongPtr) As Long
    ' Process each window...
    Return 1  ' Continue enumeration
End Function
```

### CDecl Callbacks

twinBASIC supports `CDecl` calling convention callbacks. Simply add the `CDecl` keyword to the delegate definition. The following example uses the C runtime `qsort` function for quick sorting:

```vb
Private Delegate Function LongComparator CDecl( _
    ByRef a As Long, _
    ByRef b As Long _
) As Long

Private Declare PtrSafe Sub qsort CDecl _
Lib "msvcrt" ( _
    ByRef pFirst As Any, _
    ByVal lNumber As Long, _
    ByVal lSize As Long, _
    ByVal pfnComparator As LongComparator _
)

Public Sub SortArray()
    Dim z() As Long
    Dim i As Long

    ReDim z(10) As Long
    For i = 0 To UBound(z)
        z(i) = Int(Rnd * 1000)
    Next i

    ' AddressOf automatically matches the LongComparator delegate signature
    qsort z(0), UBound(z) + 1, LenB(z(0)), AddressOf Comparator

    For i = 0 To UBound(z)
        Debug.Print CStr(z(i))
    Next i
End Sub

Private Function Comparator CDecl( _
    ByRef a As Long, _
    ByRef b As Long _
) As Long
    Comparator = a - b
End Function
```

> **Important**: The calling convention (`CDecl` or the default `StdCall`) of the callback function must match the delegate definition, otherwise it will cause stack imbalance and program crashes.

## Callbacks in DLL Wrapping

In real-world projects, you often need to wrap DLLs and expose callback interfaces. Here are complete DLL callback wrapping examples.

### Scenario: Wrapping an Async Task Library

```vb
' === Callback delegate definitions ===
Public Delegate Sub TaskCompleteCallback(ByVal taskId As Long, ByVal result As Long)
Public Delegate Sub TaskProgressCallback(ByVal taskId As Long, ByVal percent As Long)

' === DLL internal class ===
Public Class cAsyncTask
    Private m_TaskId As Long
    Private m_OnComplete As LongPtr
    Private m_OnProgress As LongPtr
    Private m_HasComplete As Boolean
    Private m_HasProgress As Boolean

    Public Sub New(ByVal taskId As Long)
        m_TaskId = taskId
    End Sub

    ' Set completion callback — use Property Let, not Set
    Public Property Let OnComplete(ByVal cb As TaskCompleteCallback)
        m_OnComplete = CLngPtr(cb)
        m_HasComplete = (cb <> 0)
    End Property

    ' Set progress callback
    Public Property Let OnProgress(ByVal cb As TaskProgressCallback)
        m_OnProgress = CLngPtr(cb)
        m_HasProgress = (cb <> 0)
    End Property

    ' Simulate async execution
    Public Sub Execute()
        Dim i As Long
        For i = 1 To 100
            ' Report progress
            If m_HasProgress AndAlso m_OnProgress <> 0 Then
                Dim pcb As TaskProgressCallback = CType(Of TaskProgressCallback)(m_OnProgress)
                pcb(m_TaskId, i)
            End If
            ' ...execute task...
        Next i

        ' Report completion
        If m_HasComplete AndAlso m_OnComplete <> 0 Then
            Dim ccb As TaskCompleteCallback = CType(Of TaskCompleteCallback)(m_OnComplete)
            ccb(m_TaskId, 42)
        End If
    End Sub
End Class
```

### Scenario: Receiving Function Addresses from External Sources

When a DLL's function address is passed in as a parameter (e.g., by the host program), you need to convert the `LongPtr` to a delegate type before calling it:

```vb
' Define callback delegate
Public Delegate Sub ExternalCallback(ByVal eventData As LongPtr)

' DLL exported function: receive external callback address
[DllExport]
Public Function RegisterCallback(ByVal callbackAddr As LongPtr) As Long
    ' Option 1: Store as LongPtr directly, convert when calling
    g_CallbackAddr = callbackAddr

    ' Option 2: Convert to delegate type immediately
    Dim cb As ExternalCallback = CType(Of ExternalCallback)(callbackAddr)
    ' Now you can call it directly
    cb(0)   ' Test call

    RegisterCallback = 1  ' Success
End Function

' Global storage
Private g_CallbackAddr As LongPtr

' Call the callback when needed
Public Sub FireEvent(ByVal data As LongPtr)
    If g_CallbackAddr <> 0 Then
        Dim cb As ExternalCallback = CType(Of ExternalCallback)(g_CallbackAddr)
        cb(data)
    End If
End Sub
```

### Scenario: VB6-Compatible Indirect Assignment

In VB6, `AddressOf` can only be passed as an argument to a function — it cannot be directly assigned to a variable. While twinBASIC has removed this restriction, if you need to maintain VB6-style compatibility, you can use a helper function to indirectly obtain the address:

```vb
' VB6-compatible approach: get AddressOf via helper function
Public Function GetAddressOf(ByVal addr As LongPtr) As LongPtr
    GetAddressOf = addr
End Function

' Usage
Dim procAddress As LongPtr
procAddress = GetAddressOf(AddressOf MyCallback)

' Then you can pass procAddress to a DLL or store it
```

> **This workaround is not needed in twinBASIC**. twinBASIC allows direct assignment using `AddressOf`:
> ```vb
> Dim procAddress As LongPtr = CLngPtr(AddressOf MyCallback)
> ' Or assign directly to a delegate variable
> Dim myCb As ExternalCallback = AddressOf MyCallback
> ```

## Observer Pattern (Delegate-Based Event Subscription)

Delegates can implement a lightweight observer pattern that is more flexible than `WithEvents`:

```vb
' Define data change delegate
Public Delegate Sub DataChangedHandler(ByVal data As Variant)

' Subject (Observable)
Public Class cDataSource
    Private m_Observers As Collection
    Private m_Data As Variant

    Public Sub New()
        Set m_Observers = New Collection
    End Sub

    ' Subscribe
    Public Sub Subscribe(ByVal handler As DataChangedHandler)
        m_Observers.Add CLngPtr(handler)
    End Sub

    ' Notify all observers
    Private Sub NotifyObservers()
        Dim ptr As Variant
        For Each ptr In m_Observers
            If CLngPtr(ptr) <> 0 Then
                Dim h As DataChangedHandler = CType(Of DataChangedHandler)(CLngPtr(ptr))
                h(m_Data)
            End If
        Next ptr
    End Sub

    ' Automatically notify when data changes
    Public Property Let Data(ByVal value As Variant)
        m_Data = value
        NotifyObservers
    End Property
End Class
```

Usage:

```vb
Dim src As New cDataSource
src.Subscribe AddressOf OnDataChanged

Public Sub OnDataChanged(ByVal data As Variant)
    Debug.Print "Data changed: " & CStr(data)
End Sub
```

## Important Notes

### 1. Delegates Are Not Objects

twinBASIC delegates are value types (function pointers), not objects. Therefore:

```vb
' ❌ Wrong — delegates cannot use Set assignment
Set myDelegate = AddressOf SomeFunc

' ✅ Correct — direct assignment
myDelegate = AddressOf SomeFunc

' ❌ Wrong — delegates cannot use Is/IsNot Nothing
If myDelegate IsNot Nothing Then ...

' ✅ Correct — compare with 0 to check if null
If myDelegate <> 0 Then ...

' ❌ Wrong — delegates cannot use Property Set
Public Property Set OnEvent(ByVal handler As MyDelegate)

' ✅ Correct — use Property Let
Public Property Let OnEvent(ByVal handler As MyDelegate)
```

### 2. Delegates Do Not Support Generics

```vb
' ❌ Not supported
Public Delegate Sub Action(Of T)(ByVal item As T)

' ✅ Need to define concrete delegates for each type
Public Delegate Sub LongAction(ByVal item As Long)
Public Delegate Sub StringAction(ByVal item As String)
Public Delegate Sub VariantAction(ByVal item As Variant)
```

### 3. Calling Convention Must Match

The calling convention (`StdCall` / `CDecl`) of the callback function must match the delegate definition:

- Win32 API callbacks typically use `StdCall` (the twinBASIC default)
- C runtime library callbacks (such as `qsort`) use `CDecl`
- Mismatch will cause stack corruption and program crashes

### 4. Calling an Uninitialized Delegate Will Crash

Calling an uninitialized (value 0) delegate will cause an access violation exception. Always check before calling:

```vb
' ❌ Dangerous — crashes if myDelegate is 0
myDelegate(123)

' ✅ Safe — check first
If myDelegate <> 0 Then
    myDelegate(123)
End If
```

### 5. Signature Must Strictly Match

The parameter types, count, passing method (ByVal/ByRef), and return type of the callback function must exactly match the delegate definition, otherwise undefined behavior will occur.

## FAQ

### Q1: Must a delegate be assigned at declaration?

**No.** A delegate variable can be declared first and assigned later:

```vb
' Option 1: Assign at declaration
Dim myDelegate As Delegate1 = AddressOf Addition

' Option 2: Declare first, assign later
Dim myDelegate As Delegate1
myDelegate = AddressOf Addition

' Option 3: Declare as LongPtr, convert when needed
Dim ptr As LongPtr
ptr = CLngPtr(AddressOf Addition)
' ... convert when calling later
Dim d As Delegate1 = CType(Of Delegate1)(ptr)
d(5, 6)
```

### Q2: How to assign a function address (LongPtr) received from external sources to a delegate?

When a function address is passed in as a `LongPtr` parameter (e.g., in a DLL callback scenario), use `CType(Of DelegateType)` to convert it to a delegate type:

```vb
Public Delegate Sub MyCallback(ByVal data As Long)

' External LongPtr address passed in
Public Sub SetCallback(ByVal callbackAddr As LongPtr)
    ' Convert directly to delegate and call
    Dim cb As MyCallback = CType(Of MyCallback)(callbackAddr)
    cb(123)
End Sub
```

You can also store it as `LongPtr` first and convert when needed:

```vb
Private m_Callback As LongPtr

Public Sub SetCallback(ByVal callbackAddr As LongPtr)
    m_Callback = callbackAddr  ' Store
End Sub

Public Sub DoSomething()
    If m_Callback <> 0 Then
        Dim cb As MyCallback = CType(Of MyCallback)(m_Callback)
        cb(42)
    End If
End Sub
```

### Q3: Can I directly assign a LongPtr to a delegate variable like `myDelegate = pFunc`?

**No, you cannot assign directly.** `LongPtr` cannot be implicitly converted to a delegate type — you must use `CType`:

```vb
' ❌ Compile error — LongPtr cannot be directly assigned to a delegate
Dim myDelegate As Delegate1 = pFunc

' ✅ Correct — use CType for explicit conversion
Dim myDelegate As Delegate1 = CType(Of Delegate1)(pFunc)
```

However, the reverse is true — delegates can be implicitly converted to `LongPtr`:

```vb
' ✅ Correct — delegate can implicitly convert to LongPtr
Dim ptr As LongPtr = CLngPtr(myDelegate)
' Or directly
Dim ptr As LongPtr = myDelegate
```

### Q4: How to check if a delegate has been set (is not null)?

Delegates are not objects — you cannot use `IsNot Nothing`. Compare with `0` instead:

```vb
' ❌ Wrong
If myDelegate IsNot Nothing Then ...

' ✅ Correct
If myDelegate <> 0 Then ...

' ✅ Recommended: maintain a boolean flag
Private m_HasHandler As Boolean
Public Property Let OnEvent(ByVal handler As MyDelegate)
    m_Ptr = CLngPtr(handler)
    m_HasHandler = (handler <> 0)
End Property
```

### Q5: How to handle callback addresses passed as parameters in DLL wrapping?

This is the most common real-world scenario. The complete pattern is as follows:

```vb
' 1. Define callback delegate
Public Delegate Sub ProgressCallback(ByVal percent As Long, ByVal msg As String)

' 2. Receive LongPtr address in exported function
[DllExport]
Public Function DoWork(ByVal progressAddr As LongPtr) As Long
    ' 3. Store as LongPtr
    g_ProgressAddr = progressAddr
    ' ...do work...
    ' 4. Convert and call when callback is needed
    If g_ProgressAddr <> 0 Then
        Dim cb As ProgressCallback = CType(Of ProgressCallback)(g_ProgressAddr)
        cb(50, "In progress...")
    End If
    DoWork = 1
End Function

Private g_ProgressAddr As LongPtr
```

If the callback address is passed through a UDT structure field, the approach is the same:

```vb
Public Type WORK_PARAMS
    hwnd As LongPtr
    lpProgress As LongPtr     ' Callback address as LongPtr field
    lpUserData As LongPtr
End Type

Public Sub ProcessWork(ByRef params As WORK_PARAMS)
    If params.lpProgress <> 0 Then
        Dim cb As ProgressCallback = CType(Of ProgressCallback)(params.lpProgress)
        cb(100, "Done")
    End If
End Sub
```

### Q6: Is AddressOf restricted in class modules?

In VB6, `AddressOf` could only be used in standard modules (.bas). **twinBASIC has removed this restriction** — `AddressOf` can be used in class modules, standard modules, and anywhere else. This makes setting delegate callbacks in classes very natural:

```vb
Public Class MyClass
    Private m_OnResize As LongPtr
    Private m_HasResize As Boolean

    Public Property Let OnResize(ByVal handler As ResizeHandler)
        m_OnResize = CLngPtr(handler)
        m_HasResize = (handler <> 0)
    End Property
End Class

' Use in any module
Dim obj As New MyClass
obj.OnResize = AddressOf MyResizeHandler   ' ✅ Perfectly valid in twinBASIC
```

### Q7: What is the difference between delegates and WithEvents/Event?

| Feature | Delegate | Event |
|---------|----------|-------|
| Multiple subscriptions | Need to maintain collection manually | Built-in multi-subscription support |
| Syntax | `AddressOf` + `CType` | `WithEvents` + `RaiseEvent` |
| Type safety | ✅ Compile-time signature checking | ✅ Compile-time signature checking |
| Storable/Passable | ✅ As LongPtr | ❌ Cannot pass events |
| Suitable for DLL callbacks | ✅ Compatible with C APIs | ❌ Not compatible |
| Suitable for observer pattern | ✅ Flexible | ✅ More concise |

Simple rules:
- **Internal inter-module communication** → use `Event`/`WithEvents` (more concise)
- **Interaction with external DLL/C APIs** → use `Delegate` (required)
- **Need dynamic registration/passing of callbacks** → use `Delegate` (more flexible)
