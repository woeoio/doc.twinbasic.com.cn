---
title: 直接汇编插入
parent: 高级功能
nav_order: 2
permalink: /Features/Advanced/Assembly
---

# Emit() 和 Naked 函数

可以使用 tB 的 `Emit()` 函数将原始字节码插入到二进制文件中。为了支持这一点，函数可以标记为 `Naked` 以移除隐藏的 tB 代码。

## 示例

例如，以下是 InterlockedIncrement 编译器内置函数的实现，它替代了 Microsoft C/C++ 中的 API（将 `Addend` 加一并返回结果，作为原子操作，这在常规代码中不能保证）：

```vb
Public Function InlineInterlockedIncrement CDecl Naked(Addend As Long) As Long
    #If Win64 Then
        Emit(&Hb8, &H01, &H00, &H00, &H00) ' mov    eax,0x1
        Emit(&Hf0, &H0f, &Hc1, &H41, &H00) ' lock xadd DWORD PTR [rcx+0x4],eax
        Emit(&Hff, &Hc0)                   ' inc    eax
        Emit(&Hc3)                         ' ret
    #Else
        Emit(&H8b, &H4c, &H24, &H04)       ' mov     ecx, DWORD PTR _Addend$[esp-4]
        Emit(&Hb8, &H01, &H00, &H00, &H00) ' mov     eax, 1
        Emit(&Hf0, &H0f, &Hc1, &H01)       ' lock xadd DWORD PTR [ecx], eax
        Emit(&H40)                         ' inc     eax
        Emit(&Hc3)                         ' ret     0
    #End If
End Function
```

（注意：`CDecl` 调用约定是可选的；您可以使用 `_stdcall` 编写 x86 汇编并简单地省略表示法。）