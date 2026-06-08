---
title: PutMem1
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/PutMem1
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '858583de-d726-4650-a9f5-b691a18a3453'
  PropagateID: '858583de-d726-4650-a9f5-b691a18a3453'
  ReservedCode1: 'b688bb25-07dd-459a-b2f1-5ee5be917cad'
  ReservedCode2: 'b688bb25-07dd-459a-b2f1-5ee5be917cad'
---

# PutMem1

向内存地址写入一个字节。

语法：**PutMem1** *Address* **,** *Value*

*Address*
: *必需* **LongPtr**。要写入的地址。

*Value*
: *必需* **Byte**。要存储在*Address*的字节。

直接写入地址，不进行边界或对齐检查。向不属于进程的地址或指向只读内存的地址写入将导致宿主崩溃。

### 示例

本示例向缓冲区写入单个字节并读回。

```vb
Dim buf As LongPtr = AllocMem(4)
PutMem1 buf, &HFF
Dim b As Byte
GetMem1 buf, b          ' b = &HFF
FreeMem buf
```

### 另请参阅

- [PutMem2](/official/Reference/VBA/HiddenModule/PutMem2)、[PutMem4](/official/Reference/VBA/HiddenModule/PutMem4)、[PutMem8](/official/Reference/VBA/HiddenModule/PutMem8)、[PutMemPtr](/official/Reference/VBA/HiddenModule/PutMemPtr)过程
- [GetMem1](/official/Reference/VBA/HiddenModule/GetMem1)过程