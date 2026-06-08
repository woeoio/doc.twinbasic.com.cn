---
title: IIf
parent: Interaction Module
permalink: /tB/Modules/Interaction/IIf
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7bdd2cf6-5e3a-4e2c-99c8-ddd456cf0e8b'
  PropagateID: '7bdd2cf6-5e3a-4e2c-99c8-ddd456cf0e8b'
  ReservedCode1: '94ff60d4-ddf0-420b-b79f-3f991267c0c5'
  ReservedCode2: '94ff60d4-ddf0-420b-b79f-3f991267c0c5'
---

# IIf

根据表达式的求值结果返回两个值之一。

语法：**IIf(** *expr* **,** *truepart* **,** *falsepart* **)**

*expr*
: *必需* 要评估的表达式。

*truepart*
: *必需* 如果*expr*为**True**则返回的值或表达式。

*falsepart*
: *必需* 如果*expr*为**False**则返回的值或表达式。

::: important
**IIf**始终评估*truepart*和*falsepart*，即使它只返回其中一个。注意副作用：如果未使用的分支会引发错误（例如除零），错误仍然会发生。使用短路[**If**](/official/Reference/VBA/Interaction/If)函数——twinBASIC新增项——来防止未使用分支中的错误。
:::

### 示例

本示例使用**IIf**在金额大于1000时返回"Large"，否则返回"Small"。

```vb
Function CheckIt(TestMe As Integer) As String
    CheckIt = IIf(TestMe > 1000, "Large", "Small")
End Function
```

### 另请参阅

- [If](/official/Reference/VBA/Interaction/If)函数
- [Choose](/official/Reference/VBA/Interaction/Choose)函数
- [Switch](/official/Reference/VBA/Interaction/Switch)函数