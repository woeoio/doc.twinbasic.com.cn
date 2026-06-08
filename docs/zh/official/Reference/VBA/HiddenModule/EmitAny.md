---
title: EmitAny
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/EmitAny
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c34c1d38-5e18-4ebb-9b2b-9c547cd83541'
  PropagateID: 'c34c1d38-5e18-4ebb-9b2b-9c547cd83541'
  ReservedCode1: '45206cab-1751-44b9-909e-71f9f5269e83'
  ReservedCode2: '45206cab-1751-44b9-909e-71f9f5269e83'
---

# EmitAny

将类型化字面值拼接到封闭过程的代码生成输出中。输出的大小从每个值的数据类型推断。

语法：**EmitAny** *Values* ...

*Values*
: *必需* 类型化字面值的**ParamArray**。每个值贡献其内存表示——**Byte**一个字节，**Integer**两个字节，**Long**或**Single**四个字节，**Currency**、**Double**或**LongLong**八个字节，**LongPtr**为指针大小。

这些值被写入过程机器代码中**EmitAny**出现的位置。当指令的操作数混合了操作码和多字节立即数时非常有用——让**EmitAny**正确确定立即数的大小避免了将其拆分为一系列[**Emit**](/official/Reference/VBA/HiddenModule/Emit)调用。

### 示例

```vb
' mov eax, 0x12345678  — emit the opcode + a 32-bit immediate.
EmitAny(CByte(&HB8), CLng(&H12345678))
```

### 另请参阅

- [Emit](/official/Reference/VBA/HiddenModule/Emit)过程
- [直接汇编插入](/official/Features/Advanced/Assembly)