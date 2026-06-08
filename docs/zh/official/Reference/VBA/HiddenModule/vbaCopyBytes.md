---
title: vbaCopyBytes
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/vbaCopyBytes
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4e6694bb-9007-4571-980c-4a1bfe1335d7'
  PropagateID: '4e6694bb-9007-4571-980c-4a1bfe1335d7'
  ReservedCode1: '66945a23-1c37-4609-9299-466fa437311c'
  ReservedCode2: '66945a23-1c37-4609-9299-466fa437311c'
---

# vbaCopyBytes

将一个字节块从一个地址复制到另一个地址。

语法：**vbaCopyBytes(** *Length* **,** *Dest* **,** *Src* **)** **As LongPtr**

*Length*
: *必需* **Long**。要复制的字节数。

*Dest*
: *必需* **LongPtr**。目标地址。

*Src*
: *必需* **LongPtr**。源地址。

重叠范围的行为未定义——如果范围可能重叠，请使用临时缓冲区。返回值为*Dest*（与传入的地址相同），作为链式调用的便利。

### 示例

```vb
Dim src As String = "Hello"
Dim dst(0 To 9) As Byte
vbaCopyBytes 10, VarPtr(dst(0)), StrPtr(src)
```

### 另请参阅

- [vbaCopyBytesZero](/official/Reference/VBA/HiddenModule/vbaCopyBytesZero)函数
- [GetMem4](/official/Reference/VBA/HiddenModule/GetMem4)、[PutMem4](/official/Reference/VBA/HiddenModule/PutMem4)过程