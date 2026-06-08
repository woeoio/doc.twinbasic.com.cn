---
title: GetMem1
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetMem1
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fb509ee6-5c06-42ac-b343-3b0ae591f793'
  PropagateID: 'fb509ee6-5c06-42ac-b343-3b0ae591f793'
  ReservedCode1: '8427ea49-7aa2-4c73-bb41-51ecffbc4d10'
  ReservedCode2: '8427ea49-7aa2-4c73-bb41-51ecffbc4d10'
---

# GetMem1

从内存地址读取一个字节到**Byte**变量中。

语法：**GetMem1** *Address* **,** *retVal*

*Address*
: *必需* **LongPtr**。要读取的地址。

*retVal*
: *必需* **Byte**。接收从*Address*读取的字节的变量。

直接读取地址，不进行边界或对齐检查。从不属于进程的地址或已释放的地址读取将导致宿主崩溃。

### 示例

```vb
Dim s As String = "ABC"
Dim b As Byte
GetMem1 StrPtr(s), b
Debug.Print b              ' 65 — the low byte of the UTF-16 code unit for "A".
```

### 另请参阅

- [GetMem2](/official/Reference/VBA/HiddenModule/GetMem2)、[GetMem4](/official/Reference/VBA/HiddenModule/GetMem4)、[GetMem8](/official/Reference/VBA/HiddenModule/GetMem8)、[GetMemPtr](/official/Reference/VBA/HiddenModule/GetMemPtr)过程
- [PutMem1](/official/Reference/VBA/HiddenModule/PutMem1)过程