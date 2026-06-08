---
title: IsEmpty
parent: Information Module
permalink: /tB/Modules/Information/IsEmpty
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4d366889-aae1-47a4-a969-e1fe8e2c598c'
  PropagateID: '4d366889-aae1-47a4-a969-e1fe8e2c598c'
  ReservedCode1: '676a4041-355d-4504-a958-9a60ed860572'
  ReservedCode2: '676a4041-355d-4504-a958-9a60ed860572'
---

# IsEmpty

返回一个**Boolean**，指示**Variant**是否已初始化。

语法：**IsEmpty(** *expression* **)**

*expression*
: *必需* **Variant**，包含数值或字符串表达式。大多数情况下，*expression*是单个变量名，因为**IsEmpty**仅对**Variant**返回有意义的信息。

如果变量未初始化或已显式设置为**Empty**，**IsEmpty**返回**True**；否则返回**False**。如果*expression*包含多个变量，则始终返回**False**。

### 示例

本示例使用**IsEmpty**确定变量是否已初始化。

```vb
Dim MyVar As Variant
Dim MyCheck As Boolean
MyCheck = IsEmpty(MyVar)              ' True — uninitialised.

MyVar = Null
MyCheck = IsEmpty(MyVar)              ' False — Null is not Empty.

MyVar = Empty
MyCheck = IsEmpty(MyVar)              ' True.
```

### 另请参阅

- [IsNull](/official/Reference/VBA/Information/IsNull)、[IsMissing](/official/Reference/VBA/Information/IsMissing)函数