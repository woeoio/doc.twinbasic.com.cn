---
title: FreeMem
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/FreeMem
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5380f393-f84c-4d34-a274-ddd0d07c9746'
  PropagateID: '5380f393-f84c-4d34-a274-ddd0d07c9746'
  ReservedCode1: '8c405851-649d-496e-8714-188f5fc887b2'
  ReservedCode2: '8c405851-649d-496e-8714-188f5fc887b2'
---

# FreeMem

释放先前从[**AllocMem**](/official/Reference/VBA/HiddenModule/AllocMem)获取的内存块。

语法：**FreeMem** *MemPointer*

*MemPointer*
: *必需* **LongPtr**。先前调用[**AllocMem**](/official/Reference/VBA/HiddenModule/AllocMem)返回的地址。

调用返回后该指针无效。传递非**AllocMem**产生的指针——包括零或已释放的指针——具有未定义行为。

### 示例

本示例分配一个缓冲区，使用它，然后用**FreeMem**释放它。

```vb
Dim buf As LongPtr = AllocMem(256)
' ... write and read buf ...
FreeMem buf    ' release the block; buf is invalid after this point
```

### 另请参阅

- [AllocMem](/official/Reference/VBA/HiddenModule/AllocMem)函数