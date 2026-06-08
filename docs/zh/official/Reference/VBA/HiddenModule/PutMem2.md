---
title: PutMem2
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/PutMem2
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3b9d3603-2d13-4233-9ddc-a42c71fd281e'
  PropagateID: '3b9d3603-2d13-4233-9ddc-a42c71fd281e'
  ReservedCode1: '6d91ca68-37e8-4149-b050-dd5451450d27'
  ReservedCode2: '6d91ca68-37e8-4149-b050-dd5451450d27'
---

# PutMem2

向内存地址写入两个字节。

语法：**PutMem2** *Address* **,** *Value*

*Address*
: *必需* **LongPtr**。要写入的地址。

*Value*
: *必需* **Integer**。要存储在*Address*的16位值。

字节按宿主的本机字节序写入——x86和x64上为小端序。直接写入地址，不进行边界或对齐检查。

### 示例

本示例向缓冲区写入一个16位值并读回。

```vb
Dim buf As LongPtr = AllocMem(4)
PutMem2 buf, &H1234
Dim v As Integer
GetMem2 buf, v          ' v = &H1234
FreeMem buf
```

### 另请参阅

- [PutMem1](/official/Reference/VBA/HiddenModule/PutMem1)、[PutMem4](/official/Reference/VBA/HiddenModule/PutMem4)、[PutMem8](/official/Reference/VBA/HiddenModule/PutMem8)、[PutMemPtr](/official/Reference/VBA/HiddenModule/PutMemPtr)过程
- [GetMem2](/official/Reference/VBA/HiddenModule/GetMem2)过程