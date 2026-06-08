---
title: IsArray
parent: Information Module
permalink: /tB/Modules/Information/IsArray
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '18c2f35c-4820-44a0-bb65-7affb4c26ea2'
  PropagateID: '18c2f35c-4820-44a0-bb65-7affb4c26ea2'
  ReservedCode1: 'eaca7aaa-1de2-4719-b962-e8bdc5506346'
  ReservedCode2: 'eaca7aaa-1de2-4719-b962-e8bdc5506346'
---

# IsArray

返回一个**Boolean**，指示变量是否为数组。

语法：**IsArray(** *varname* **)**

*varname*
: *必需* 指定要测试的变量的标识符。

如果变量是数组，**IsArray**返回**True**；否则返回**False**。**IsArray**对于包含数组的**Variant**特别有用。

### 示例

本示例使用**IsArray**检查变量是否为数组。

```vb
Dim MyArray(1 To 5) As Integer
Dim YourArray As Variant
Dim MyCheck As Boolean
YourArray = Array(1, 2, 3)            ' Use the Array function.
MyCheck = IsArray(MyArray)            ' Returns True.
MyCheck = IsArray(YourArray)          ' Returns True.
```

### 另请参阅

- [IsArrayInitialized](/official/Reference/VBA/Information/IsArrayInitialized)函数
- [LBound](/official/Reference/VBA/Information/LBound)、[UBound](/official/Reference/VBA/Information/UBound)函数