---
title: GetMem2
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetMem2
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '560e4b2f-e311-4fad-8e09-58d5a708377d'
  PropagateID: '560e4b2f-e311-4fad-8e09-58d5a708377d'
  ReservedCode1: '8e27d330-0ddf-4ad9-8457-9900f25107ac'
  ReservedCode2: '8e27d330-0ddf-4ad9-8457-9900f25107ac'
---

# GetMem2

从内存地址读取两个字节到**Integer**变量中。

语法：**GetMem2** *Address* **,** *retVal*

*Address*
: *必需* **LongPtr**。要读取的地址。

*retVal*
: *必需* **Integer**。接收从*Address*读取的值的变量。

字节按宿主的本机字节序解释——x86和x64上为小端序。直接读取地址，不进行边界或对齐检查。

### 示例

本示例将一个16位值写入缓冲区并用**GetMem2**读回。

```vb
Dim buf As LongPtr = AllocMem(4)
PutMem2 buf, &H1234
Dim v As Integer
GetMem2 buf, v          ' v = &H1234
FreeMem buf
```

### 另请参阅

- [GetMem1](/official/Reference/VBA/HiddenModule/GetMem1)、[GetMem4](/official/Reference/VBA/HiddenModule/GetMem4)、[GetMem8](/official/Reference/VBA/HiddenModule/GetMem8)、[GetMemPtr](/official/Reference/VBA/HiddenModule/GetMemPtr)过程
- [PutMem2](/official/Reference/VBA/HiddenModule/PutMem2)过程