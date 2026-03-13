---
title: UDT 增强功能
parent: 语言语法
nav_order: 11
permalink: /Features/Language/UDTs
---

# 用户定义类型（UDT）的增强功能

## 过程、构造函数、析构函数和操作符

您现在可以在 UDT 中放置方法，以及 API 声明。对于 API，如果第一个参数命名为`Me`且与 UDT 类型相同，则被视为隐式成员调用：

```vb
Type HWND
   Value As LongPtr ' 原始 HWND
   Public DeclareWide PtrSafe Function BringWindowToTop Lib "user32" (ByVal Me As HWND) As Long
End Type
'...
myHwnd.BringWindowToTop()
```

还有构造函数（**Type_Initialize**）、析构函数（**Type_Terminate**）、赋值操作符（**Type_Assignment**）、类型转换操作符（**Type_Conversion**）和调试器字符串操作符（**Type_DebugView**）。这使得创建轻量级对象成为可能，就像一个 C++ 类：

```vb
Type myType
    a As Long

    Private Sub Type_Initialize()
        ' 注意：目前您只能使用"Me."前缀访问 UDT 成员
    End Sub

    Private Sub Type_Assignment(ByVal RHS As Variant)    ' 提示：您可以更改 RHS 类型，并且可以定义多个赋值函数
        ' 注意：目前您只能使用"Me."前缀访问 UDT 成员
    End Sub

    Private Function Type_Conversion() As Variant ' 提示：您可以在此处更改返回类型，并且可以定义多个转换函数
        ' 注意：目前您只能使用"Me."前缀访问 UDT 成员
    End Function

    Private Function Type_DebugView() As String
        ' 注意：目前您只能使用"Me."前缀访问 UDT 成员
    End Function

    Private Sub Type_Terminate()
        ' 注意：目前您只能使用"Me."前缀访问 UDT 成员
    End Sub

End Type
```

这些类型的 UDT 仍然是栈分配的 struct，可以与标准 Win32 API 一起使用。

## 自定义 UDT 打包

如果您做过广泛的 Windows API 工作，您偶尔会遇到添加了额外成员的用户定义类型，称为 pad、padding、reserved 等，这些成员在该类型的文档中没有出现。这是 UDT 应用与默认不同的打包规则的结果。

默认情况下，UDT 有隐藏的间距字节，使其最大大小的成员出现在其大小的倍数处，并使整个 UDT 是该大小的倍数。考虑以下 UDT：

```vb
Private Type MyUDT
    x As Integer
    y As Long
    z As Integer
End Type
Private t As MyUDT
```

如果您询问`Len(t)`，您会得到 8——2 个 2 字节整数和 1 个 4 字节 Long 的总和。但如果您询问`LenB(t)`，您会得到 12。这是因为最大大小类型是 4，所以这是打包对齐数字。每个 Long 必须出现在 4 字节的倍数处，所以在 x 和 y 之间插入了 2 个字节的隐藏填充。您可以通过检查`VarPtr(t.y) - VarPtr(t)`来自己看到这一点。这给出了`y`的起始偏移量——即 4，而不是如果它紧跟在`x`后面时的 2。最后，有了隐藏的 2 个字节，我们现在达到了 10 个字节。但总 UDT 大小必须是 4 的倍数，所以在末尾再添加 2 个隐藏字节。

一些 API UDT 看起来像`MyUDT`是正确的，但您会看到它在 VBx 中定义为 2 个 Long——这得到了所需的 8 个字节，对第一个成员有一些特殊处理。如果您参考原始的 C/C++ 头文件，您会发现，对于这种情况，在 UDT 之前的某个地方有类似`#include <pshpack1.h>`或`#pragma pack(push,1)`的内容。这手动改变了打包规则，不在任何地方插入隐藏字节。

### [PackingAlignment] 属性

twinBASIC 通常在 UDT 内自然对齐对象，例如 8 字节对象相对于 UDT 开始处在 8 字节边界对齐。这会在 UDT 字段之间留下间隙。可以使用较小的**PackingAlignment**实现更紧密的打包：

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

您现在会发现`Len(t)`和`LenB(t)`都是 8。

> [!注意]
>
> 对齐（不是打包对齐）不是这样设置的。指定 16 不会让您得到`t`的 16 字节结构。twinBASIC 目前没有`__declspec_align(n)`的等效项，但计划有此类功能。这在内核模式编程之外很少见。