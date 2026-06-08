---
title: PutMem8
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/PutMem8
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fee0e343-86ca-442d-be6c-d99e5f277eb9'
  PropagateID: 'fee0e343-86ca-442d-be6c-d99e5f277eb9'
  ReservedCode1: '9cc7ee99-7aba-4cce-be0d-5a0d6111f03b'
  ReservedCode2: '9cc7ee99-7aba-4cce-be0d-5a0d6111f03b'
---

# PutMem8

向内存地址写入八个字节。

语法：**PutMem8** *Address* **,** *Value*

*Address*
: *必需* **LongPtr**。要写入的地址。

*Value*
: *必需* **Currency**。其底层八个字节存储在*Address*的**Currency**载体。

**Currency**用作八字节载体——其内存表示为原始64位模式，仅在算术运算时按类型的固定因子10000进行缩放。要打包任意的64位整数，请在调用**PutMem8**之前使用[**LSet**](/official/Reference/Core/LSet)将其转换为**Currency**。

直接写入地址，不进行边界或对齐检查。

### 示例

本示例向缓冲区写入一个8字节值并读回。

```vb
Dim buf As LongPtr = AllocMem(8)
Dim src As Currency = 1000000@
PutMem8 buf, src
Dim dst As Currency
GetMem8 buf, dst        ' dst = src (same raw 8-byte pattern)
FreeMem buf
```

### 另请参阅

- [PutMem1](/official/Reference/VBA/HiddenModule/PutMem1)、[PutMem2](/official/Reference/VBA/HiddenModule/PutMem2)、[PutMem4](/official/Reference/VBA/HiddenModule/PutMem4)、[PutMemPtr](/official/Reference/VBA/HiddenModule/PutMemPtr)过程
- [GetMem8](/official/Reference/VBA/HiddenModule/GetMem8)过程