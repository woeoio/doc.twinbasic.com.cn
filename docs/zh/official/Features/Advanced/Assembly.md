---
title: "直接插入汇编"
parent: Advanced Features
nav_order: 2
permalink: /Features/Advanced/Assembly
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '22b48a58-39f3-4f79-b59b-de5a88154af2'
  PropagateID: '22b48a58-39f3-4f79-b59b-de5a88154af2'
  ReservedCode1: '8e48cb7e-d176-4941-b2ef-dd1d3670f0a9'
  ReservedCode2: '8e48cb7e-d176-4941-b2ef-dd1d3670f0a9'
---

# Emit() 和 Naked 函数

可以使用 tB 的 `Emit()` 函数将原始字节码插入二进制文件中。为支持此功能，函数可以标记为 `Naked` 以移除隐藏的 tB 代码。

## 示例

例如，以下是 InterlockedIncrement 编译器内联函数的实现，它替代了 Microsoft C/C++ 中的 API（将 `Addend` 加一并返回结果，作为原子操作，这是普通代码无法保证的）：

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

（注意：`CDecl` 调用约定是可选的；你可以使用 `_stdcall` 编写 x86 汇编，只需省略该标记即可。）