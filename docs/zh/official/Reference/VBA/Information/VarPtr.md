---
title: VarPtr
parent: Information Module
permalink: /tB/Modules/Information/VarPtr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2eef695a-d9bd-4a06-a764-577e8b99086a'
  PropagateID: '2eef695a-d9bd-4a06-a764-577e8b99086a'
  ReservedCode1: '765473dc-9072-4318-8f8d-97dd9b029faf'
  ReservedCode2: '765473dc-9072-4318-8f8d-97dd9b029faf'
---

# VarPtr

返回变量的地址，作为**LongPtr**。

语法：**VarPtr(** *Var* **)**

*Var*
: *必需* 要获取指针的变量。接受任何类型。

返回的地址是*Var*本身的存储位置——运行时进行赋值时写入的同一位置。对于数值或定长类型，变量的值就存放在该地址；对于**String**或**Variant**，该地址处的值是变量的BSTR指针或**VARIANT**描述符。

将结果传给需要原始地址的API函数，或传给[**GetMem**\* / **PutMem**\*](/official/Reference/VBA/HiddenModule/)辅助函数以读写底层字节。该指针仅在*Var*在其作用域内保持活动期间有效；局部变量、参数和扩展数组的元素在其所属帧或数组重新分配时可能会移动。

### 示例

```vb
Dim n As Long
n = &H12345678

Dim Bytes(0 To 3) As Byte
vbaCopyBytes 4, VarPtr(Bytes(0)), VarPtr(n)
Debug.Print Hex(Bytes(0))        ' "78" — little-endian
```

### 另请参阅

- [ObjPtr](/official/Reference/VBA/Information/ObjPtr)函数
- [StrPtr](/official/Reference/VBA/Information/StrPtr)函数