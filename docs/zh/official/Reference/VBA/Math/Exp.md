---
title: Exp
parent: Math Module
permalink: /tB/Modules/Math/Exp
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ad466cd2-ff44-4d7b-8559-9e0153afb9b1'
  PropagateID: 'ad466cd2-ff44-4d7b-8559-9e0153afb9b1'
  ReservedCode1: '0bd2de0a-ee1e-4522-8229-546400442073'
  ReservedCode2: '0bd2de0a-ee1e-4522-8229-546400442073'
---

# Exp

返回一个 **Double**，指定 *e*（自然对数的底）的指定幂次。

语法：**Exp(** *number* **)**

*number*
: *必需* **Double** 或任何有效的数值表达式。

如果 *number* 的值超过 709.782712893，将发生错误。常量 *e* 约为 2.718282。

::: info
**Exp** 函数补充 [**Log**](/official/Reference/VBA/Math/Log) 函数的操作，有时被称为反对数。
:::

### 示例

此示例使用 **Exp** 函数返回 *e* 的指定幂次。

```vb
Dim MyAngle, MyHSin
' Define angle in radians.
MyAngle = 1.3
' Calculate hyperbolic sine.
MyHSin = (Exp(MyAngle) - Exp(-1 * MyAngle)) / 2
```

### 另请参阅

- [Log](/official/Reference/VBA/Math/Log) 函数