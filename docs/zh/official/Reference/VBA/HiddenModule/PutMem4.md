---
title: PutMem4
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/PutMem4
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c83d3f5a-8a12-4176-92b6-cc02bc0d21e8'
  PropagateID: 'c83d3f5a-8a12-4176-92b6-cc02bc0d21e8'
  ReservedCode1: '802657c2-e53b-41e5-b496-084a12955336'
  ReservedCode2: '802657c2-e53b-41e5-b496-084a12955336'
---

# PutMem4

向内存地址写入四个字节。

语法：**PutMem4** *Address* **,** *Value*

*Address*
: *必需* **LongPtr**。要写入的地址。

*Value*
: *必需* **Long**。要存储在*Address*的32位值。

字节按宿主的本机字节序写入——x86和x64上为小端序。直接写入地址，不进行边界或对齐检查。

### 示例

本示例向缓冲区写入一个32位值并读回。

```vb
Dim buf As LongPtr = AllocMem(4)
PutMem4 buf, &H12345678
Dim v As Long
GetMem4 buf, v          ' v = &H12345678
FreeMem buf
```

### 另请参阅

- [PutMem1](/official/Reference/VBA/HiddenModule/PutMem1)、[PutMem2](/official/Reference/VBA/HiddenModule/PutMem2)、[PutMem8](/official/Reference/VBA/HiddenModule/PutMem8)、[PutMemPtr](/official/Reference/VBA/HiddenModule/PutMemPtr)过程
- [GetMem4](/official/Reference/VBA/HiddenModule/GetMem4)过程