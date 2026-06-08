---
title: "增强的 API 声明"
parent: Advanced Features
nav_order: 4
permalink: /Features/Advanced/API-Declarations
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7f6d6a82-797c-4c05-8daf-aa46d71943c0'
  PropagateID: '7f6d6a82-797c-4c05-8daf-aa46d71943c0'
  ReservedCode1: '78edda2d-b1ff-4958-a43b-4aa8f0fbdb2c'
  ReservedCode2: '78edda2d-b1ff-4958-a43b-4aa8f0fbdb2c'
---

# API 和方法声明的增强

twinBASIC 为 API 和方法声明提供了多项增强，使与外部库的交互更加便捷。

## DeclareWide

`DeclareWide` 关键字替代 `Declare`，用于禁用 API 调用的 ANSI<->Unicode 转换。这同时适用于参数本身和 UDT 内部的 String 参数。例如，以下两种声明在功能上是等效的：

```vb
Public Declare PtrSafe Sub FooW Lib "some.dll" (ByVal bar As LongPtr)
Public DeclareWide PtrSafe Sub Foo Lib "some.dll" Alias "FooW" (ByVal bar As String)
```

两者都表示完全的 Unicode 操作，但后者允许直接使用 `String` 数据类型，而无需使用 `StrPtr` 来阻止转换。

::: warning
这**不会**改变底层数据类型——`String` 类型是 `BSTR`，不是 `LPWSTR`，因此如果 API 返回预先分配的 `LPWSTR`（而不是填充你创建的缓冲区），它将不会提供有效的 `String` 类型。这种情况出现在 API 参数为 `[out] LPWSTR *arg` 时。
:::

## CDecl 支持

cdecl 调用约定同时支持 API 声明和代码中的方法。这包括标准 DLL 中的 DLL 导出。

### 示例

```vb
Private DeclareWide PtrSafe Function _wtoi64 CDecl Lib "msvcrt" (ByVal psz As String) As LongLong`
```

```vb
[ DllExport ]
Public Function MyExportedFunction CDecl(foo As Long, Bar As Long) As Long
```

### CDecl 回调

也支持使用 `CDecl` 的回调。你需要传递一个在原型定义中包含 `CDecl` 的委托。以下是一个使用 [`qsort` 函数](https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-wsprintfw)执行快速排序的示例代码：

```vb
Private Delegate Function LongComparator CDecl ( _
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

Public Sub CallMe()
    Dim z() As Long
    Dim i As Long
    Dim s As String

    ReDim z(10) As Long
    For i = 0 To UBound(z)
        z(i) = Int(Rnd * 1000)
    Next i
    qsort z(0), UBound(z) + 1, LenB(z(0)), AddressOf Comparator
    For i = 0 To UBound(z)
        s = s & CStr(z(i)) & vbNewLine
    Next i
    MsgBox s
End Sub

Private Function Comparator CDecl( _
    ByRef a As Long, _
    ByRef b As Long _
) As Long
    Comparator = a - b
End Function
```

## 支持按值传递用户定义类型

简单 UDT 现在可以在 API、接口和任何其他方法中按值传递。在 VBx 中，以前需要使用变通方法，如分别传递每个参数。

```vb
Public Declare PtrSafe Function LBItemFromPt Lib "comctl32" (ByVal hLB As LongPtr, ByVal PXY As POINT, ByVal bAutoScroll As BOOL) As Long

Interface IDropTarget Extends stdole.IUnknown
    Sub DragEnter(ByVal pDataObject As IDataObject, ByVal grfKeyState As KeyStateMouse, ByVal pt As POINT, pdwEffect As DROPEFFECTS)
```

等等。对于此功能，"简单"UDT 是指没有引用计数或在后台管理的成员的 UDT，因此不能包含 interface、String 或 Variant 类型。它们可以包含其他 UDT。

## 可变参数支持

随着 `cdecl` 调用约定的完全支持，twinBASIC 也能处理可变参数函数。在 C/C++ 中，这些函数的参数中包含省略号 `...`。这在 tB 中表示为 `{ByRef | ByVal} ParamArray ... As Any()`。注意 `ByRef` 或 `ByVal` 必须显式标记；不允许隐式 `ByRef`。

### 使用 wsprintfW 的示例

使用[给定的 C/C++ 原型](https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-wsprintfw)：

```c
int WINAPIV wsprintfW(
  /* [out] */ LPWSTR  unnamedParam1,
  /* [in]  */ LPCWSTR unnamedParam2,
              /* ... */
);
```

twinBASIC 声明和使用它的函数可以这样编写：

```vb
Private DeclareWide PtrSafe Function wsprintfW CDecl _
Lib "user32" ( _
  ByVal buf As String, _
  ByVal format As String, _
  ByVal ParamArray args As Any() _
) As Long

Private Sub Test()
  Dim buf As String = Space(1024)
  wsprintfW(buf, "%d %d %d", 1, 2, 3)
  MsgBox buf
End Sub
```

### va_list 参数

对于参数中包含 `va_list` 类型的函数，ParamArray 声明必须为 `ByRef`。

## PreserveSig

`[PreserveSig]` 属性前面已针对 COM 方法描述过，但它也可以用于 API 声明。对于 API，默认值为 `True`。因此，你可以指定 `False` 来将最后一个参数重写为返回值。

### 示例

```vb
Public Declare PtrSafe Function SHGetDesktopFolder Lib "shell32" (ppshf As IShellFolder) As Long
```

可以重写为：

```vb
[PreserveSig(False)]
Public Declare PtrSafe Function SHGetDesktopFolder Lib "shell32" () As IShellFolder`
```