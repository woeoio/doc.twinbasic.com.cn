---
title: AllocMem
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/AllocMem
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '567ea941-8928-442e-8ac4-6015a97f4a69'
  PropagateID: '567ea941-8928-442e-8ac4-6015a97f4a69'
  ReservedCode1: 'b958234a-9c6b-4a2f-8f66-8d3fe8569040'
  ReservedCode2: 'b958234a-9c6b-4a2f-8f66-8d3fe8569040'
---

# AllocMem

分配一块本机内存并返回其地址。

语法：**AllocMem(** *BytesToAlloc* **)** **As LongPtr**

*BytesToAlloc*
: *必需* **Long**。要分配的块大小，以字节为单位。

新块的内容未指定。不再需要时使用[**FreeMem**](/official/Reference/VBA/HiddenModule/FreeMem)释放该块；将地址传递给其他任何东西（例如Win32的`HeapFree`）将不起作用，因为该块由twinBASIC运行时的堆拥有。

如果分配失败，**AllocMem**将引发运行时错误。

### 示例

```vb
Dim Buffer As LongPtr = AllocMem(1024)
PutMem4 Buffer, &HDEADBEEF
'... use Buffer ...
FreeMem Buffer
```

### 另请参阅

- [FreeMem](/official/Reference/VBA/HiddenModule/FreeMem)过程
- [vbaCopyBytes](/official/Reference/VBA/HiddenModule/vbaCopyBytes)函数