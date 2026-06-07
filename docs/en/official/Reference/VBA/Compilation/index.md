---
title: Compilation Module
parent: VBA Package
permalink: /tB/Modules/Compilation/
---

# Compilation module

The **Compilation** module groups together intrinsics that report on how --- and from where --- the running code was built. Most of its members are *compile-time* intrinsics: they do not look anything up at run time but instead embed a literal value into the compiled code at the point of the call, recording the surrounding project, component, procedure, or source file as it stood when the compiler ran.

## Build identity

[**CompilerVersion**](/en/official/Reference/VBA/Compilation/CompilerVersion) returns the build number of the twinBASIC compiler that produced the running code, and [**ProcessorArchitecture**](/en/official/Reference/VBA/Compilation/ProcessorArchitecture) returns a [**VbArchitecture**](/en/official/Reference/VBA/Constants/VbArchitecture) constant --- **vbArchWin32** or **vbArchWin64** --- identifying whether the binary was built for 32-bit or 64-bit execution. Together they characterise *which* compiler emitted the running code and *what kind* of process it is running in.

```vb
Debug.Print "twinBASIC build #" & CompilerVersion()
If ProcessorArchitecture() = vbArchWin64 Then
    Debug.Print "64-bit process"
Else
    Debug.Print "32-bit process"
End If
```

## Lexical context

The `Current...` family records the source location of the call site as a literal string, captured when the source is compiled. [**CurrentProjectName**](/en/official/Reference/VBA/Compilation/CurrentProjectName) names the project (executable or library) that owns the call, [**CurrentComponentName**](/en/official/Reference/VBA/Compilation/CurrentComponentName) names the enclosing module, class, or form, [**CurrentProcedureName**](/en/official/Reference/VBA/Compilation/CurrentProcedureName) names the surrounding **Sub**, **Function**, or **Property**, and [**CurrentSourceFile**](/en/official/Reference/VBA/Compilation/CurrentSourceFile) returns the full path of the source file as it was on the build machine. For COM classes, [**CurrentComponentCLSID**](/en/official/Reference/VBA/Compilation/CurrentComponentCLSID) returns the GUID supplied by the class's [`[ClassId(...)]`](/en/official/Reference/Core/Attributes#classid) attribute, or the all-zero GUID when none is set.

Because each value is fixed at compile time, wrapping a call in a helper records the *helper's* name rather than its caller's. These intrinsics are most useful in diagnostic output --- logging, tracing, assertions --- where they replace hard-coded identifier strings that would otherwise drift as code is renamed.

```vb
Public Sub Log(Message As String)
    Debug.Print CurrentProjectName() & "!" & _
                CurrentComponentName() & "." & _
                CurrentProcedureName() & ": " & Message
End Sub
```

## Members

- [CompilerVersion](/en/official/Reference/VBA/Compilation/CompilerVersion) -- returns the twinBASIC compiler version number
- [CurrentComponentCLSID](/en/official/Reference/VBA/Compilation/CurrentComponentCLSID) -- returns the Class ID (CLSID) of the current class
- [CurrentComponentName](/en/official/Reference/VBA/Compilation/CurrentComponentName) -- returns the name of the current component (module or class)
- [CurrentProcedureName](/en/official/Reference/VBA/Compilation/CurrentProcedureName) -- returns the name of the procedure in which the function is called
- [CurrentProjectName](/en/official/Reference/VBA/Compilation/CurrentProjectName) -- returns the name of the current project
- [CurrentSourceFile](/en/official/Reference/VBA/Compilation/CurrentSourceFile) -- returns the full path of the current source file
- [ProcessorArchitecture](/en/official/Reference/VBA/Compilation/ProcessorArchitecture) -- returns the processor architecture of the running application
