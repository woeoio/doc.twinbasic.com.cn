---
title: PutMemPtr
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/PutMemPtr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b4248ead-22c2-43ac-b16b-9cc17257fd5d'
  PropagateID: 'b4248ead-22c2-43ac-b16b-9cc17257fd5d'
  ReservedCode1: 'c3ab966a-f1a4-4ede-91f3-6b14b503b201'
  ReservedCode2: 'c3ab966a-f1a4-4ede-91f3-6b14b503b201'
---

# PutMemPtr

向内存地址写入指针大小的值。

语法：**PutMemPtr** *Address* **,** *Value*

*Address*
: *必需* **LongPtr**。要写入的地址。

*Value*
: *必需* **LongPtr**。要存储在*Address*的指针大小值。

写入的字节数与宿主的指针宽度匹配——32位构建中为四个字节，64位构建中为八个字节。字节按宿主的本机字节序写入。直接写入地址，不进行边界或对齐检查。

### 示例

本示例将指针存储在缓冲区中并读回。

```vb
Dim buf As LongPtr = AllocMem(8)    ' large enough for a pointer on any platform
Dim target As Long = 42
PutMemPtr buf, VarPtr(target)       ' store the address of target
Dim p As LongPtr
GetMemPtr buf, p                    ' p = address of target
FreeMem buf
```

### 另请参阅

- [PutMem1](/official/Reference/VBA/HiddenModule/PutMem1)、[PutMem2](/official/Reference/VBA/HiddenModule/PutMem2)、[PutMem4](/official/Reference/VBA/HiddenModule/PutMem4)、[PutMem8](/official/Reference/VBA/HiddenModule/PutMem8)过程
- [GetMemPtr](/official/Reference/VBA/HiddenModule/GetMemPtr)过程