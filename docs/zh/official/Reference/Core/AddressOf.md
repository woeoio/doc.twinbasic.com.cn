---
title: AddressOf
parent: Operators
permalink: /tB/Core/AddressOf
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "0e476837-1059-49e5-9427-6cf3af38ea0f"
  PropagateID: "0e476837-1059-49e5-9427-6cf3af38ea0f"
  ReservedCode1: "17492843-7ff1-4cf2-be7a-eb2320179eb3"
  ReservedCode2: "17492843-7ff1-4cf2-be7a-eb2320179eb3"
---

# AddressOf 运算符

一元运算符，返回其操作数的函数指针引用。

语法：

> **AddressOf** _procedurename_  
> **AddressOf** _instance_._procedurename_ _(twinBASIC)_

_procedurename_
: 需要获取地址的 [**Sub**](/official/Reference/Core/Sub)、[**Function**](/official/Reference/Core/Function) 或 [**Property**](/official/Reference/Core/Property) 过程的名称。

_instance_
: _可选_ (twinBASIC) 对象引用，其成员 _procedurename_ 为目标。生成的指针绑定到 _instance_，因此通过该指针调用会在该特定对象上调用方法。

当过程名出现在参数列表中时，通常会*调用*该过程并传递其返回值。**AddressOf** 抑制调用，改为传递过程的地址。最常见的用途是在Windows API中安装回调——API随后从项目代码外部调用该过程，这个过程称为*回调*。

**AddressOr** 生成的值与 **LongPtr** 在位级别兼容，因此可以传递给任何需要函数指针的地方——包括使用 **As Long** 或 **As LongPtr** 类型的传统 [**Declare**](/official/Reference/Core/Declare) 参数。当目标类型为 [**Delegate**](/official/Reference/Core/Delegate) 时，编译器还会检查操作数的签名是否与委托的签名匹配。

在经典VBA中，_procedurename_ 必须是当前项目标准 [**Module**](/official/Reference/Core/Module) 中的过程名称；目标参数必须为 **As Long** 类型；生成的指针只能由Basic外部的代码（如DLL）调用。twinBASIC解除了所有限制——参见下文[twinBASIC增强功能](#twinbasic-enhancements)。

::: warning
回调内部引发的错误无法传播回外部调用者——API运行在项目的错误处理链之外。在用作 **AddressOf** 目标的任何过程顶部放置 `On Error Resume Next`（或显式错误处理程序）。
:::

### twinBASIC增强功能

- **通过Basic间接回调。** 持有 **AddressOf** 值的委托变量可以直接调用：`Dim op As Operation = AddressOf Add: r = op(5, 6)`。经典VBA可以在过程之间传递此类指针，但无法在Basic内部通过它们调用。参见 [**Delegate**](/official/Reference/Core/Delegate)。
- **类、窗体和用户控件的成员。** **AddressOf** 接受在类、窗体或用户控件上声明的方法。通过用对象引用限定名称来获取实例方法的指针：`AddressOf myInstance.MyMethod`。生成的指针记住实例——通过它调用会分派到该对象。
- **CDecl回调。** 在目标过程和匹配的 [**Delegate**](/official/Reference/Core/Delegate)（或 [**Declare**](/official/Reference/Core/Declare) 参数）上同时标记 **CDecl**，以建模 `cdecl` 回调。经典VBA的 **AddressOf** 固定使用 `__stdcall`。参见 [API声明](/official/Features/Advanced/API-Declarations#cdecl-callbacks)。
- **无需 `FARPROC` 垫片。** 将函数指针赋值给局部变量是直接的——`Dim lpfn As LongPtr = AddressOf MyFunc`——无需编写中间转发过程。

### 示例

在Basic内部通过类型化委托调用：

```vb
Private Delegate Function Operation (ByVal A As Long, ByVal B As Long) As Long

Public Function Addition(ByVal A As Long, ByVal B As Long) As Long
    Return A + B
End Function

Private Sub Demo()
    Dim op As Operation = AddressOf Addition
    Debug.Print op(5, 6)     ' 11
End Sub
```

在Win32 API中安装回调。`EnumWindows` 对每个顶层窗口调用一次 _EnumProc_：

```vb
Public Declare PtrSafe Function EnumWindows Lib "user32" ( _
    ByVal lpEnumFunc As LongPtr, ByVal lParam As LongPtr) As Long

Public Function EnumProc(ByVal hwnd As LongPtr, ByVal lParam As LongPtr) As Long
    On Error Resume Next
    Debug.Print hwnd
    EnumProc = 1     ' Continue enumeration.
End Function

Public Sub ListTopLevelWindows()
    EnumWindows AddressOf EnumProc, 0
End Sub
```

通过用对象引用限定来获取实例方法的指针：

```vb
Class CFoo
    Public Sub Bar()
        Debug.Print "Bar on instance"
    End Sub
End Class

Public Sub Demo()
    Dim foo1 As New CFoo
    Dim lpfn As LongPtr = AddressOf foo1.Bar
End Sub
```

### 另请参阅

- [**Delegate** 语句](/official/Reference/Core/Delegate)
- [**Declare** 语句](/official/Reference/Core/Declare)
- [委托类型](/official/Features/Language/Delegates)
- [增强指针功能](/official/Features/Language/Pointers)
- [API声明](/official/Features/Advanced/API-Declarations)
- [运算符](/official/Reference/Operators)
