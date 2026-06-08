---
title: "UDT 增强"
parent: Language Syntax
nav_order: 11
permalink: /Features/Language/UDTs
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8afb82f7-1a9a-4554-b06c-710fa64f4aaf'
  PropagateID: '8afb82f7-1a9a-4554-b06c-710fa64f4aaf'
  ReservedCode1: '0d4507c4-71b2-44f7-a063-62772afb2bc4'
  ReservedCode2: '0d4507c4-71b2-44f7-a063-62772afb2bc4'
---

# 用户定义类型 (UDT) 的增强

## 过程、构造函数、析构函数和运算符

你现在可以在 UDT 中放置方法以及 API 声明。对于 API，如果第一个参数名为 `Me` 且类型与 UDT 相同，则视为隐式成员调用：

```vb
Type HWND
   Value As LongPtr ' the raw HWND
   Public DeclareWide PtrSafe Function BringWindowToTop Lib "user32" (ByVal Me As HWND) As Long
End Type
'...
myHwnd.BringWindowToTop()
```

还有构造函数（**Type_Initialize**）、析构函数（**Type_Terminate**）、赋值运算符（**Type_Assignment**）、类型转换运算符（**Type_Conversion**）和调试器字符串运算符（**Type_DebugView**）。这使得创建轻量级对象成为可能，类似于 C++ 类：

```vb
Type myType
    a As Long

    Private Sub Type_Initialize()
        ' NOTE: currently you can only access the UDT members using the "Me." prefix
    End Sub

    Private Sub Type_Assignment(ByVal RHS As Variant)    ' TIP: You can change the RHS type, and you can define multiple assignment functions
        ' NOTE: currently you can only access the UDT members using the "Me." prefix
    End Sub

    Private Function Type_Conversion() As Variant ' TIP: you can change the return type here, and you can define multiple conversion functions
        ' NOTE: currently you can only access the UDT members using the "Me." prefix
    End Function

    Private Function Type_DebugView() As String
        ' NOTE: currently you can only access the UDT members using the "Me." prefix
    End Function

    Private Sub Type_Terminate()
        ' NOTE: currently you can only access the UDT members using the "Me." prefix
    End Sub

End Type
```

这些类型的 UDT 仍然是栈分配的结构体，可以与标准 Win32 API 一起使用。

## 自定义 UDT 对齐

如果你大量使用 Windows API，偶尔会遇到用户定义类型中有一个额外的成员叫做 pad、padding、reserved 等，但该类型的文档中并未出现。这是因为 UDT 应用了不同于默认的对齐规则。

默认情况下，UDT 有隐藏的间距字节，使其最大大小的成员出现在其大小的倍数位置，并使整个 UDT 大小为该大小的倍数。考虑以下 UDT：

```vb
Private Type MyUDT
    x As Integer
    y As Long
    z As Integer
End Type
Private t As MyUDT
```

如果你查询 `Len(t)`，得到 8——两个 2 字节 Integer 和一个 4 字节 Long 的总和。但如果你查询 `LenB(t)`，得到 12。这是因为最大大小的类型是 4，所以这就是对齐数字。每个 Long 必须出现在 4 字节的倍数位置，因此在 x 和 y 之间插入 2 字节的隐藏填充。你可以通过 `VarPtr(t.y) - VarPtr(t)` 自己验证。这给出了 `y` 的起始偏移量——是 4，而不是紧跟 `x` 后面的 2。最后，加上隐藏的 2 字节，我们到了 10 字节。但 UDT 总大小必须是 4 的倍数，所以末尾又添加了 2 个隐藏字节。

一些 API UDT 看起来像 `MyUDT` 是正确的，但你会看到它在 VBx 中被定义为 2 个 Long——这得到所需的 8 字节，并对第一个成员有特殊处理。如果你查看原始 C/C++ 头文件，你会发现这种情况在 UDT 之前有 `#include <pshpack1.h>` 或 `#pragma pack(push,1)`。这手动更改了对齐规则，使其不在任何地方插入隐藏字节。

### [PackingAlignment] 特性

twinBASIC 通常在 UDT 中自然对齐对象，例如 8 字节对象在相对于 UDT 开头的 8 字节边界上对齐。这会在 UDT 字段之间留下间隙。通过更小的 **PackingAlignment** 可以实现更紧凑的对齐：

```vb
[PackingAlignment(2)]
Private Type MyUDT
    x As Integer
    y As Long
    z As Integer
End Type
Private t As MyUDT
Debug.Assert Len(t) = 8 And LenB(t) = 8
```

现在你会发现 `Len(t)` 和 `LenB(t)` 都是 8。

::: info

对齐（alignment）不是这样设置的。指定 16 不会得到 16 字节的 `t` 结构。twinBASIC 目前没有等价于 `__declspec_align(n)` 的功能，但此功能已在计划中。这在内核模式编程之外很少见。
:::