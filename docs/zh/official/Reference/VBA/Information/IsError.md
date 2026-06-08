---
title: IsError
parent: Information Module
permalink: /tB/Modules/Information/IsError
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ae52689d-5abc-4900-bf71-0b10ed120adf'
  PropagateID: 'ae52689d-5abc-4900-bf71-0b10ed120adf'
  ReservedCode1: '58ce2e3b-ec71-45d3-bb8c-af4931f1deaf'
  ReservedCode2: '58ce2e3b-ec71-45d3-bb8c-af4931f1deaf'
---

# IsError

返回一个**Boolean**，指示表达式是否为错误值。

语法：**IsError(** *expression* **)**

*expression*
: *必需* 任何有效的表达式。

错误值通过[**CVErr**](/official/Reference/VBA/Conversion/CVErr)函数传入错误编号产生。如果*expression*指示错误，**IsError**返回**True**；否则返回**False**。

### 示例

本示例使用**IsError**检查值是否为错误。**CVErr**用于从用户自定义函数返回**Error**子类型的**Variant**。假设`UserFunction`返回错误值，例如通过`UserFunction = CVErr(32767)`。

```vb
Dim ReturnVal As Variant
Dim MyCheck As Boolean
ReturnVal = UserFunction()
MyCheck = IsError(ReturnVal)          ' Returns True.
```

### 另请参阅

- [CVErr](/official/Reference/VBA/Conversion/CVErr)函数
- [Err](/official/Reference/VBA/Information/Err)属性