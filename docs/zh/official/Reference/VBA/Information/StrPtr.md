---
title: StrPtr
parent: Information Module
permalink: /tB/Modules/Information/StrPtr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '552b82a9-a62e-47f0-a00e-ffb39d60e30c'
  PropagateID: '552b82a9-a62e-47f0-a00e-ffb39d60e30c'
  ReservedCode1: '56dd2b67-e45e-4cde-aa8c-36bfc7b2142d'
  ReservedCode2: '56dd2b67-e45e-4cde-aa8c-36bfc7b2142d'
---

# StrPtr

返回**String**底层缓冲区的地址，作为**LongPtr**。

语法：**StrPtr(** *String* **)**

*String*
: *必需* 需要获取缓冲区地址的**String**。

twinBASIC将**String**存储为Unicode(UTF-16) BSTR——一个长度前缀缓冲区，**StrPtr**返回其起始位置。返回值指向第一个字符，而不是其前面的四字节长度前缀。

如果*String*为**vbNullString**，结果为零。对于空字符串`""`，结果是一个有效（但零长度）缓冲区的地址；将其传给区分空指针和空字符串的API，是在声明中优先使用**vbNullString**而非`""`的常见原因。

该指针仅在**String**变量保持活动且未被重新赋值期间有效。将其视为借用，而非所有权。

### 示例

```vb
Dim s As String
s = "Hello"
Debug.Print StrPtr(s)            ' e.g. 1234567890 — varies per run

Dim ch As Integer
GetMem2 StrPtr(s), ch
Debug.Print Chr$(ch)             ' "H"
```

### 另请参阅

- [ObjPtr](/official/Reference/VBA/Information/ObjPtr)函数
- [VarPtr](/official/Reference/VBA/Information/VarPtr)函数
- [vbNullString](/official/Reference/VBA/Constants/#vbNullString)