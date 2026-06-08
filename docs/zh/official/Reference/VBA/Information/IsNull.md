---
title: IsNull
parent: Information Module
permalink: /tB/Modules/Information/IsNull
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c92f0a3e-9522-4fa2-a048-af12d071a412'
  PropagateID: 'c92f0a3e-9522-4fa2-a048-af12d071a412'
  ReservedCode1: 'f2c82cf3-6f42-491d-bfc1-c2c75c559077'
  ReservedCode2: 'f2c82cf3-6f42-491d-bfc1-c2c75c559077'
---

# IsNull

返回一个**Boolean**，指示表达式是否不包含有效数据(**Null**)。

语法：**IsNull(** *expression* **)**

*expression*
: *必需* **Variant**，包含数值或字符串表达式。

如果*expression*为**Null**，**IsNull**返回**True**；否则返回**False**。如果*expression*包含多个变量，任何组成变量中的**Null**都会导致整个表达式求值为**Null**，并使**IsNull**返回**True**。

**Null**值表示**Variant**不包含有效数据。**Null**不同于[**Empty**](/official/Reference/VBA/Information/IsEmpty)（尚未初始化的变量），也不同于零长度字符串(`""`)，后者有时被称为空字符串。

::: important
使用**IsNull**来确定表达式是否包含**Null**值。诸如`If Var = Null`和`If Var <> Null`的比较始终为**False**，因为任何涉及**Null**的表达式本身也是**Null**，而**Null**比较被视为**False**。
:::

### 示例

本示例使用**IsNull**确定变量是否包含**Null**。

```vb
Dim MyVar As Variant
Dim MyCheck As Boolean
MyCheck = IsNull(MyVar)               ' False — MyVar is Empty.

MyVar = ""
MyCheck = IsNull(MyVar)               ' False — empty string is not Null.

MyVar = Null
MyCheck = IsNull(MyVar)               ' True.
```

### 另请参阅

- [IsEmpty](/official/Reference/VBA/Information/IsEmpty)、[IsMissing](/official/Reference/VBA/Information/IsMissing)函数
- [Nz](/official/Reference/VBA/Conversion/Nz)函数