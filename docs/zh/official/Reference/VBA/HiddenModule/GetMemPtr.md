---
title: GetMemPtr
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetMemPtr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '267f40fb-97cd-4807-b508-89443d5dea4b'
  PropagateID: '267f40fb-97cd-4807-b508-89443d5dea4b'
  ReservedCode1: 'ada26c70-396c-475f-81ad-8d891974e7d3'
  ReservedCode2: 'ada26c70-396c-475f-81ad-8d891974e7d3'
---

# GetMemPtr

从内存地址读取指针大小的值到**LongPtr**变量中。

语法：**GetMemPtr** *Address* **,** *retVal*

*Address*
: *必需* **LongPtr**。要读取的地址。

*retVal*
: *必需* **LongPtr**。接收从*Address*读取的指针大小值的变量。

读取的字节数与宿主的指针宽度匹配——32位构建中为四个字节，64位构建中为八个字节。字节按宿主的本机字节序解释。直接读取地址，不进行边界或对齐检查。

### 示例

```vb
' Read the IUnknown vtable pointer of a Collection instance.
Dim c As Collection = New Collection
Dim vtbl As LongPtr
GetMemPtr ObjPtr(c), vtbl
Debug.Print "vtable at "; Hex(vtbl)
```

### 另请参阅

- [GetMem1](/official/Reference/VBA/HiddenModule/GetMem1)、[GetMem2](/official/Reference/VBA/HiddenModule/GetMem2)、[GetMem4](/official/Reference/VBA/HiddenModule/GetMem4)、[GetMem8](/official/Reference/VBA/HiddenModule/GetMem8)过程
- [PutMemPtr](/official/Reference/VBA/HiddenModule/PutMemPtr)过程