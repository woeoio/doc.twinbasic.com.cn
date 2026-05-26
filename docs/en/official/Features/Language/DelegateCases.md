---
title: Delegate Cases
parent: Language
nav_order: 5
permalink: /en/Features/Language/DelegateCases
---

# Delegate Practical Cases

This document collects real-world application cases of twinBASIC delegates in actual projects, demonstrating authentic usage and techniques of delegates in various scenarios.

---

## Case 1: API Hook — Calling Trampoline via Delegate

> **Source Repository**: [fafalone/APIHook](https://github.com/fafalone/APIHook)
>
> A generic API Hook module supporting both x86/x64 architectures, including a trampoline for calling the original function.

### Scenario Description

When implementing API Hook (IAT Hook / Inline Hook), you need to:
1. Use `AddressOf` to pass the custom replacement function address to the Hook installation function
2. After the Hook is installed, call the original function through the trampoline (jump code)
3. The trampoline address is a runtime-dynamically-allocated `LongPtr` that must be called with the correct function signature

This is a classic application of the **Delegate + LongPtr + CType pattern** — the trampoline address is a `LongPtr` only known at runtime, but it must be called with the original function's signature.

### Core Code

```vb
' 1. Declare the original function's signature using Delegate
Private Delegate Function fn_MessageBoxW _
    ( _
        ByVal hWnd As LongPtr, _
        ByVal lpText As LongPtr, _
        ByVal lpCaption As LongPtr, _
        ByVal uType As Long) As Long

' 2. Hook descriptor — TrampolineAddress stored as LongPtr
Public Type HookDescriptor
    TargetAddress      As LongPtr   ' Address of the hooked function
    TrampolineAddress  As LongPtr   ' Executable trampoline address (calling this = calling original)
    OriginalBytes(0 To 13) As Byte  ' Saved original bytes
    PatchSize          As Long      ' 5 (x86) or 14 (x64)
    IsInstalled        As Boolean
End Type

Private g_Hook As HookDescriptor

' 3. Replacement function — intercepts calls and calls original via trampoline
Public Function Hook_MessageBoxW(ByVal hWnd As LongPtr, _
                                  ByVal lpText As LongPtr, _
                                  ByVal lpCaption As LongPtr, _
                                  ByVal uType As Long) As Long
    Debug.Print "MessageBoxW intercepted!"
    ' ★ Key: Convert LongPtr trampoline address to delegate type, then call
    Dim pfnOrig As fn_MessageBoxW = g_Hook.TrampolineAddress
    Hook_MessageBoxW = pfnOrig(hWnd, lpText, lpCaption, uType)
End Function

' 4. Install Hook — pass AddressOf replacement function
Sub Demo_Install()
    Dim ok As Boolean
    ok = InstallHook("user32.dll", "MessageBoxW", _
                     AddressOf Hook_MessageBoxW, g_Hook)
    If ok Then Debug.Print "Hook installed."
End Sub
```

### New Discovery: Delegate Variables Can Be Implicitly Constructed from LongPtr

In previous documentation, we recommended using `CType(Of DelegateType)(longPtrValue)` to convert LongPtr to a delegate. However, this case demonstrates a more concise approach:

```vb
' Previously recommended approach
Dim pfnOrig As fn_MessageBoxW = CType(Of fn_MessageBoxW)(g_Hook.TrampolineAddress)

' Approach in this case — direct assignment
Dim pfnOrig As fn_MessageBoxW = g_Hook.TrampolineAddress
```

**`LongPtr` can be directly assigned to a delegate variable of the matching type without explicit `CType` conversion.** This is because delegates are essentially function pointer types compatible with LongPtr, and twinBASIC allows implicit conversion from LongPtr to delegates.

> **Note**: The "direct assignment" here occurs during **declaration with initialization** (`Dim ... As DelegateType = longPtrValue`), not a separate declaration followed by assignment. Behavior may differ if you `Dim` first then assign separately. It is recommended to test both approaches in practice.

### New Discovery: Delegates Can Serve as "Function Signature Templates"

In this case, the `fn_MessageBoxW` delegate was never used in a traditional callback scenario — it was never assigned a function's address via `AddressOf`. Its role was to **define a function signature**, allowing the trampoline's `LongPtr` address to be called with the correct parameter and return types.

This usage can be understood as: **Delegate = Function Signature + Function Pointer**. Once a LongPtr is assigned to a delegate variable, the compiler knows how to properly set up the call stack, pass parameters, and handle the return value.

### InstallHook Function Signature: hookProc Uses LongPtr Instead of Delegate

Note that the `hookProc` parameter of `InstallHook` is typed as `LongPtr`, not a delegate type:

```vb
Public Function InstallHook(ByVal moduleName As String, _
                            ByVal procName As String, _
                            ByVal hookProc As LongPtr, _      ' ← LongPtr, not delegate
                            ByRef hook As HookDescriptor) As Boolean
```

When calling, `AddressOf Hook_MessageBoxW` is passed, and twinBASIC automatically converts the delegate type to `LongPtr`. This verifies the bidirectional compatibility between delegates and LongPtr:

- **Delegate → LongPtr**: Implicit conversion (the `AddressOf` return value can be directly passed to a `LongPtr` parameter)
- **LongPtr → Delegate**: Direct assignment or `CType` conversion

### Complete API Hook Workflow

```
┌─────────────────────────────────────────────────┐
│  InstallHook("user32.dll", "MessageBoxW",       │
│              AddressOf Hook_MessageBoxW, g_Hook)│
│                                                   │
│  1. GetModuleHandle + GetProcAddress             │
│     → Get the real address of MessageBoxW (LongPtr) │
│                                                   │
│  2. BuildTrampoline                               │
│     → Allocate executable memory nearby           │
│     → Write original bytes + jump-back instruction │
│     → Return trampoline address (LongPtr)         │
│                                                   │
│  3. BuildPatchX86/X64(hookProc)                   │
│     → Generate patch that jumps to Hook_MessageBoxW │
│                                                   │
│  4. ProtectedWrite                                │
│     → Write patch to target function header       │
│                                                   │
│  5. Save descriptor                               │
│     g_Hook.TrampolineAddress = trampoline        │
│     g_Hook.TargetAddress = targetAddr             │
└─────────────────────────────────────────────────┘

Call flow:
  App → MessageBoxW → [detour patch] → Hook_MessageBoxW
                                          ↓
                                    Dim pfnOrig As fn_MessageBoxW = g_Hook.TrampolineAddress
                                    pfnOrig(hWnd, lpText, lpCaption, uType)
                                          ↓
                                    [trampoline: original bytes + jump back]
                                          ↓
                                    MessageBoxW+14 continues execution
```

---

## Case 2: Console Event System — LongPtr Storage + CType Invocation

> **Source**: twinBASIC Challenge #1 Diagnostic Tool Project

### Scenario Description

When building a console class library, you need to support various events such as resize, key press, and mouse. Since delegate types cannot be stored as private class members, the pattern of `LongPtr` + boolean flag + `CType` conversion is used.

### Core Code

```vb
' Delegate definitions
Public Delegate Sub ConsoleResizeHandler(ByVal newWidth As Long, ByVal newHeight As Long)
Public Delegate Sub ConsoleKeyHandler(ByRef keyInfo As ConsoleKeyInfo, ByRef handled As Boolean)
Public Delegate Function ConsoleCtrlHandler(ByVal ctrlType As Long) As Long

' Store as LongPtr in class
Public Class cConsole
    Private m_OnResize As LongPtr
    Private m_OnKey As LongPtr
    Private m_HasResizeHandler As Boolean
    Private m_HasKeyHandler As Boolean

    ' Set using Property Let
    Public Property Let OnResize(ByVal handler As ConsoleResizeHandler)
        m_OnResize = CLngPtr(handler)
        m_HasResizeHandler = (handler <> 0)
    End Property

    ' Convert back using CType when calling
    Public Sub CheckResize()
        If m_HasResizeHandler AndAlso m_OnResize <> 0 Then
            Dim h As ConsoleResizeHandler = CType(Of ConsoleResizeHandler)(m_OnResize)
            h(newWidth, newHeight)
        End If
    End Sub
End Class

' Usage
Dim con As New cConsole
con.OnResize = AddressOf MyResizeHandler
```

### Key Points

- **Property Let** (not `Set`) is used to receive delegate parameters
- **CLngPtr()** converts delegate to LongPtr for storage
- **Boolean flag + `<> 0`** double check to avoid calling null delegates
- **CType(Of DelegateType)(m_Ptr)** converts LongPtr back to delegate for invocation

---

## Case 3: CDecl Callback — qsort Sorting

> **Source**: twinBASIC Official Documentation — Enhanced API Declarations

### Core Code

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
    Dim z(10) As Long
    Dim i As Long
    For i = 0 To UBound(z)
        z(i) = Int(Rnd * 1000)
    Next i
    qsort z(0), UBound(z) + 1, LenB(z(0)), AddressOf Comparator
End Sub

Private Function Comparator CDecl( _
    ByRef a As Long, _
    ByRef b As Long _
) As Long
    Comparator = a - b
End Function
```

### Key Points

- Add the `CDecl` keyword to the delegate definition to match the C runtime library's calling convention
- The callback function itself must also include `CDecl`
- Delegate types can be used directly as parameter types in API declarations, replacing `LongPtr`

---

## Case 4: DLL Export Callback — Receiving Function Address from External Sources

> **Source**: Comprehensive Practice

### Scenario Description

A DLL needs to receive a callback address from the host program. The address is passed in as a `LongPtr` parameter, stored as `LongPtr`, and converted to a delegate for calling when needed.

### Core Code

```vb
Public Delegate Sub ProgressCallback(ByVal percent As Long, ByVal msg As String)

Private g_ProgressAddr As LongPtr

[DllExport]
Public Function DoWork(ByVal progressAddr As LongPtr) As Long
    g_ProgressAddr = progressAddr
    ' ...do work...
    If g_ProgressAddr <> 0 Then
        Dim cb As ProgressCallback = CType(Of ProgressCallback)(g_ProgressAddr)
        cb(50, "In progress...")
    End If
    DoWork = 1
End Function
```

### Key Points

- DLL exported function parameters must use `LongPtr` (you cannot use delegate types directly, as delegate types are not visible across DLL boundaries)
- Three-step store-check-call pattern: `LongPtr` storage → `<> 0` check → `CType` conversion then call

---

## Summary of LongPtr and Delegate Conversion Methods

Through the above cases, all conversion methods between LongPtr and delegates can be summarized:

| Conversion Direction | Method | Example | Case Source |
|---------------------|--------|---------|-------------|
| Delegate → LongPtr | `CLngPtr()` | `m_Ptr = CLngPtr(handler)` | Case 2 |
| Delegate → LongPtr | Implicit conversion | `InstallHook(..., AddressOf HookProc, ...)` | Case 1 |
| LongPtr → Delegate | Direct assignment | `Dim pfn As DelegateType = longPtr` | Case 1 |
| LongPtr → Delegate | `CType(Of T)()` | `Dim pfn = CType(Of DelegateType)(m_Ptr)` | Case 2, 4 |
| Delegate → LongPtr | Assign to LongPtr variable | `Dim ptr As LongPtr = myDelegate` | General |

### Direct Assignment vs CType: Which to Choose?

Both approaches work, but have subtle differences:

```vb
' Approach A: Direct assignment (more concise, used in APIHook case)
Dim pfnOrig As fn_MessageBoxW = g_Hook.TrampolineAddress

' Approach B: CType explicit conversion (more explicit, used in diagnostic tool case)
Dim h As ConsoleResizeHandler = CType(Of ConsoleResizeHandler)(m_OnResize)
```

- **Approach A** is more concise, suitable for completing declaration + assignment + invocation in a single line
- **Approach B** is more explicit, making the type conversion intent clear, suitable for team collaboration or code review

Both approaches are functionally equivalent; the choice depends on personal preference and team conventions.
