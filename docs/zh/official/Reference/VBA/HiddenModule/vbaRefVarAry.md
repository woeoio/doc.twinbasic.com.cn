---
title: vbaRefVarAry
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/vbaRefVarAry
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0d372ab4-e898-4d68-a6cc-9b6c4131a926'
  PropagateID: '0d372ab4-e898-4d68-a6cc-9b6c4131a926'
  ReservedCode1: 'dda64aa8-85fd-4ea8-9180-e8d16ab8c4f8'
  ReservedCode2: 'dda64aa8-85fd-4ea8-9180-e8d16ab8c4f8'
---

# vbaRefVarAry

返回存储在**Variant**数组中的**SAFEARRAY**描述符的指针。

语法：**vbaRefVarAry(** *Variant* **)** **As LongPtr**

*Variant*
: *必需* 包含数组的**Variant**，按引用传递。

返回的地址是**Variant**内部**SAFEARRAY***字段的位置——即解引用后得到**Variant**包装的**SAFEARRAY**指针。在调用期望通过`VARIANT*`参数接收或填充**SAFEARRAY**的Win32 API时非常有用。

如果*Variant*不包含数组，则结果未定义。

### 示例

本示例检索**Variant**数组内部的**SAFEARRAY**描述符的地址。

```vb
Dim v As Variant
v = Array(10, 20, 30)          ' Variant holding an array
Dim pSAPtr As LongPtr
pSAPtr = vbaRefVarAry(v)       ' address of the SAFEARRAY* field in v
Dim pSA As LongPtr
GetMemPtr pSAPtr, pSA          ' dereference: pSA is the SAFEARRAY pointer
```

### 另请参阅

- [VarPtr](/official/Reference/VBA/Information/VarPtr)函数
- [vbaAryMove](/official/Reference/VBA/HiddenModule/vbaAryMove)过程