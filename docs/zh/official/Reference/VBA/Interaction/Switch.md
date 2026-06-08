---
title: Switch
parent: Interaction Module
permalink: /tB/Modules/Interaction/Switch
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '82622242-7747-4629-83ff-5d9682d1d4aa'
  PropagateID: '82622242-7747-4629-83ff-5d9682d1d4aa'
  ReservedCode1: 'ed94c831-ba40-4328-b595-5fbb8536f71b'
  ReservedCode2: 'ed94c831-ba40-4328-b595-5fbb8536f71b'
---

# Switch

评估一系列*(条件, 值)*对，返回与第一个评估为**True**的条件配对的值。

语法：**Switch(** *expr-1* **,** *value-1* [ **,** *expr-2* **,** *value-2* **, ...** [ **,** *expr-n* **,** *value-n* ] ] **)**

*expr*
: *必需* **Variant**表达式，要进行评估。

*value*
: *必需* 当对应的*expr*为**True**时返回的值或表达式。

参数列表由条件和值对组成。条件从左到右评估，返回与第一个评估为**True**的条件关联的值。如果部分未正确配对（即提供了奇数个参数），则产生运行时错误。

如果没有条件为**True**，或第一个**True**条件对应的*value*为**Null**，**Switch**返回**Null**。

::: info
**Switch**会评估*每个*条件表达式和*每个*值，而不仅仅是最终使用的那些。注意副作用：如果任何值表达式会引发错误（例如除零），即使**Switch**不会返回该值，错误也会发生。
:::

### 示例

本示例使用**Switch**返回与城市名称关联的语言。

```vb
Function MatchUp(CityName As String) As Variant
    MatchUp = Switch(CityName = "London", "English", _
                     CityName = "Rome",   "Italian", _
                     CityName = "Paris",  "French")
End Function
```

### 另请参阅

- [Choose](/official/Reference/VBA/Interaction/Choose)函数
- [If](/official/Reference/VBA/Interaction/If)函数
- [IIf](/official/Reference/VBA/Interaction/IIf)函数