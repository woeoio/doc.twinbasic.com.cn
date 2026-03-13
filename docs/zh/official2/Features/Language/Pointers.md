---
title: 增强的指针功能
parent: 语言语法
nav_order: 10
permalink: /Features/Language/Pointers
---

# 增强的指针功能
twinBASIC 为处理指针提供了几个增强功能。

## ByVal Nothing

此外，虽然不是严格的新语法，twinBASIC 还添加了对`ByVal Nothing`的支持，以覆盖`ByRef <接口>`参数并在那里传递空指针。

## vbNullPtr

允许向 API/接口的 UDT 成员传递空指针。在 VBx 中的等效行为是将它们声明为`As Any`，然后在调用点传递`ByVal 0`。

### 示例

```vb
Type Foo
   bar As Long
End Type
Public Declare PtrSafe Function MyFunc Lib "MyDLL" (pFoo As Foo) As Long

Private Sub CallMyFunc()
    Dim ret As Long = MyFunc(vbNullPtr)
End Sub
```

## CType(Of \<类型\>)

`CType(Of <类型>)`操作符指定将一种类型显式转换到另一种类型的意图。这可以用于将`LongPtr`（或在 32 位上的`Long`/在 64 位上的`LongLong`）转换为用户自定义类型，根据使用情况复制或不复制它。这不仅允许直接转换而无需调用`CopyMemory`，还允许设置仅由指针表示的 UDT 的成员，而无需来回复制内存。

### 示例

考虑以下 UDT：

```vb
Private Type foo
    a As Long
    b As Long
    pfizz As LongPtr '指向 fizz 类型变量的指针
End Type
Private Type bar
    pfoo As LongPtr '指向 foo 类型变量的指针
End Type
Private Type fizz
    c As Long
End Type
```

以下代码示例可以操作指针：

```vb
Sub call1()
    Dim f As foo
    test1 VarPtr(f)
    Debug.Print f.a, f.b
End Sub

Sub test1(ByVal ptr As LongPtr)
    With CType(Of foo)(ptr)
        .a = 1
        .b = 2
    End With
End Sub
```

这将打印`1  2`。

```vb
Sub call2()
    Dim f As foo, b As bar
    b.pfoo = VarPtr(f)
    test2 b
    Debug.Print f.a, f.b
End Sub

Sub test2(b As bar)
    With CType(Of foo)(b.pfoo)
        .a = 3
        .b = 4
    End With
End Sub
```

这将打印`3  4`。

```vb
Sub call3()
    Dim f As foo, b As bar, z As fizz
    f.pfizz = VarPtr(z)
    b.pfoo = VarPtr(f)
    test3 b
    Debug.Print z.c
End Sub

Sub test3(b As bar)
    CType(Of fizz)(CType(Of foo)(b.pfoo).pfizz).c = 4
End Sub
```

这将打印`4`。也允许独立使用和嵌套；上述将打印`4`。虽然这里的示例仅是本地代码，但这对于 API 特别有用，在那里您被迫广泛使用指针。

## 用指针替换 UDT

在 API 和本地方法中，任何接受用户定义类型的参数都可以改为传递`ByVal LongPtr`，使用新的特殊常量`vbNullPtr`表示空指针：

```vb
Public Declare PtrSafe Function CreateFileW Lib "kernel32" (ByVal lpFileName As LongPtr, ByVal dwDesiredAccess As Long, ByVal dwShareMode As Long, lpSecurityAttributes As SECURITY_ATTRIBUTES, ByVal dwCreationDisposition As Long, ByVal dwFlagsAndAttributes As Long, ByVal hTemplateFile As LongPtr) As LongPtr

hFile = CreateFileW(StrPtr("名称"), 0, 0, ByVal vbNullPtr, '...)
'---或---
Dim pSec As SECURITY_ATTRIBUTES
Dim lPtr As LongPtr = VarPtr(pSec)
hFile = CreateFileW(StrPtr("名称"), 0, 0, ByVal lPtr, '...)
```

## Len/LenB(Of \<类型\>) 支持

传统的`Len`和`LenB`函数现在可以用于直接获取类型的长度/大小，包括内置类型和用户定义类型，而无需声明该类型的变量。例如，要知道指针大小，您可以使用`LenB(Of LongPtr)`。

## AddressOf 的改进

`AddressOf`现在可以用于类/窗体/用户控件成员，包括通过指定实例从类外部使用。此外，不再需要`FARPROC`类型的函数，您可以像`Ptr = AddressOf Func`一样使用它。因此，如果您有带有成员函数`bar`的类`CFoo`，以下代码是有效的：

```vb
Dim foo1 As New CFoo
Dim lpfn As LongPtr = AddressOf foo1.bar
```