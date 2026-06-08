---
title: Emit
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/Emit
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '709f480c-aed0-41ed-9d44-37491fe233fc'
  PropagateID: '709f480c-aed0-41ed-9d44-37491fe233fc'
  ReservedCode1: '71f07ffd-a211-46e9-b6a7-319290cc729a'
  ReservedCode2: '71f07ffd-a211-46e9-b6a7-319290cc729a'
---

# Emit

将原始字节拼接到封闭过程的代码生成输出中。

语法：**Emit** *Values* ...

*Values*
: *必需* 一个**Byte**值的**ParamArray**，按顺序在调用位置处发出。

这些字节被写入过程机器代码中**Emit**出现的位置——没有运行时调用。与**Naked**过程修饰符一起使用来编写内联汇编。

### 示例

一个原子的**InterlockedIncrement**，将*Addend*加一。

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

### 另请参阅

- [EmitAny](/official/Reference/VBA/HiddenModule/EmitAny)过程
- [直接汇编插入](/official/Features/Advanced/Assembly)
- [StackOffset](/official/Reference/VBA/HiddenModule/StackOffset)函数