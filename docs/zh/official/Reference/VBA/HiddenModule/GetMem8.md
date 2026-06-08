---
title: GetMem8
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetMem8
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'abf4c13c-06ea-4517-94d3-fba71ac3d9ad'
  PropagateID: 'abf4c13c-06ea-4517-94d3-fba71ac3d9ad'
  ReservedCode1: 'f5c12e22-aff5-4647-b881-1c906cf0381d'
  ReservedCode2: 'f5c12e22-aff5-4647-b881-1c906cf0381d'
---

# GetMem8

从内存地址读取八个字节到**Currency**变量中。

语法：**GetMem8** *Address* **,** *retVal*

*Address*
: *必需* **LongPtr**。要读取的地址。

*retVal*
: *必需* **Currency**。接收从*Address*读取的字节的变量。

**Currency**是这些原语使用的方便的八字节有符号整数载体，因为其内存表示；结果是存储在*Address*的原始64位模式，仅在算术运算时按**Currency**类型的固定因子10000进行缩放。要将位作为未缩放的64位整数处理，请使用[**LSet**](/official/Reference/Core/LSet)将**Currency**值转换为**LongLong**变量。

直接读取地址，不进行边界或对齐检查。

### 示例

本示例将一个8字节值写入缓冲区并用**GetMem8**读回。

```vb
Dim buf As LongPtr = AllocMem(8)
Dim src As Currency = 1000000@
PutMem8 buf, src
Dim dst As Currency
GetMem8 buf, dst        ' dst = src (same raw 8-byte pattern)
FreeMem buf
```

### 另请参阅

- [GetMem1](/official/Reference/VBA/HiddenModule/GetMem1)、[GetMem2](/official/Reference/VBA/HiddenModule/GetMem2)、[GetMem4](/official/Reference/VBA/HiddenModule/GetMem4)、[GetMemPtr](/official/Reference/VBA/HiddenModule/GetMemPtr)过程
- [PutMem8](/official/Reference/VBA/HiddenModule/PutMem8)过程