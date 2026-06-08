---
title: "增强的指针功能"
parent: Language Syntax
nav_order: 10
permalink: /Features/Language/Pointers
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '28581190-dd0e-4ff6-a8ca-8dc21bf33912'
  PropagateID: '28581190-dd0e-4ff6-a8ca-8dc21bf33912'
  ReservedCode1: '9c1ad9d3-f9a9-4bc6-b396-c32c2a95b1ba'
  ReservedCode2: '9c1ad9d3-f9a9-4bc6-b396-c32c2a95b1ba'
---

# 增强的指针功能

twinBASIC 为指针操作提供了多项增强。

## ByVal Nothing

虽然不是严格意义上的新语法，twinBASIC 还添加了对 `ByVal Nothing` 的支持，用于覆盖 `ByRef <interface>` 参数并传递空指针。

## ByVal vbNullPtr

允许向 API/接口的 UDT 成员传递空指针。VBx 中的等价行为是将它们声明为 `As Any` 然后在调用点传递 `ByVal 0`。

### 示例

```vb
Type Foo
   bar As Long
End Type
Public Declare PtrSafe Function MyFunc Lib "MyDLL" (pFoo As Foo) As Long

Private Sub CallMyFunc()
    Dim ret As Long = MyFunc(ByVal vbNullPtr)
End Sub
```

## 用指针替代 UDT

更一般地，在 API 和本地方法中，任何接受用户定义类型的参数都可以改为传递 `ByVal LongPtr`，并使用新的特殊常量 `vbNullPtr` 表示空指针：

```vb
Public Declare PtrSafe Function CreateFileW Lib "kernel32" (ByVal lpFileName As LongPtr, ByVal dwDesiredAccess As Long, ByVal dwShareMode As Long, lpSecurityAttributes As SECURITY_ATTRIBUTES, ByVal dwCreationDisposition As Long, ByVal dwFlagsAndAttributes As Long, ByVal hTemplateFile As LongPtr) As LongPtr

hFile = CreateFileW(StrPtr("name"), 0, 0, ByVal vbNullPtr, '...')
'---or---
Dim pSec As SECURITY_ATTRIBUTES
Dim lPtr As LongPtr = VarPtr(pSec)
hFile = CreateFileW(StrPtr("name"), 0, 0, ByVal lPtr, '...)
```

## CType(Of ``<type>``)

`CType(Of <type>)` 运算符指定将一个类型显式转换为另一个类型的意图。这可以用于将 `LongPtr`（或 32 位上的 `Long`/64 位上的 `LongLong`）转换为自定义用户定义类型，是否制作副本取决于用法。这不仅允许直接转换而无需 `CopyMemory` 调用，还可以设置仅由指针表示的 UDT 的成员，无需来回复制内存。

### 示例

考虑以下 UDT：

```vb
Private Type foo
    a As Long
    b As Long
    pfizz As LongPtr 'A pointer to a variable of type fizz
End Type
Private Type bar
    pfoo As LongPtr 'A pointer to a variable of type foo
End Type
Private Type fizz
    c As Long
End Type
```

以下代码示例用于操作指针：

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

这将打印 `1  2`。

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

这将打印 `3  4`。

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

这将打印 `4`。也允许独立使用和嵌套。虽然这里的示例仅使用本地代码，但这对 API 特别有用，因为你被迫大量使用指针。

## Len/LenB(Of ``<type>``) 支持

经典的 `Len` 和 `LenB` 函数现在可以直接获取类型（包括内置类型和用户定义类型）的长度/大小，无需声明该类型的变量。例如，要知道指针大小，可以使用 `LenB(Of LongPtr)`。

## AddressOf 的改进

`AddressOf` 现在可以用于类/窗体/UserControl 的成员，包括通过指定实例从类外部使用。也不需要 `FARPROC` 类型的函数，你可以像 `Ptr = AddressOf Func` 这样使用。因此如果你有类 `CFoo` 和成员函数 `bar`，以下写法是有效的：

```vb
Dim foo1 As New CFoo
Dim lpfn As LongPtr = AddressOf foo1.bar
```