---
title: GetMem4
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetMem4
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '99db4cd9-b186-4084-bc86-464222a82215'
  PropagateID: '99db4cd9-b186-4084-bc86-464222a82215'
  ReservedCode1: 'afa9684f-ce71-44ca-ac83-aa2265cfa86a'
  ReservedCode2: 'afa9684f-ce71-44ca-ac83-aa2265cfa86a'
---

# GetMem4

从内存地址读取四个字节到**Long**变量中。

语法：**GetMem4** *Address* **,** *retVal*

*Address*
: *必需* **LongPtr**。要读取的地址。

*retVal*
: *必需* **Long**。接收从*Address*读取的值的变量。

字节按宿主的本机字节序解释——x86和x64上为小端序。直接读取地址，不进行边界或对齐检查。

### 示例

本示例将一个32位值写入缓冲区并用**GetMem4**读回。

```vb
Dim buf As LongPtr = AllocMem(4)
PutMem4 buf, &H12345678
Dim v As Long
GetMem4 buf, v          ' v = &H12345678
FreeMem buf
```

### 另请参阅

- [GetMem1](/official/Reference/VBA/HiddenModule/GetMem1)、[GetMem2](/official/Reference/VBA/HiddenModule/GetMem2)、[GetMem8](/official/Reference/VBA/HiddenModule/GetMem8)、[GetMemPtr](/official/Reference/VBA/HiddenModule/GetMemPtr)过程
- [PutMem4](/official/Reference/VBA/HiddenModule/PutMem4)过程