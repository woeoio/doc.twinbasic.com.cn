---
title: Eqv
parent: Operators
permalink: /tB/Core/Eqv
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b276efab-0b9c-4f99-b33c-73b10da86a25'
  PropagateID: 'b276efab-0b9c-4f99-b33c-73b10da86a25'
  ReservedCode1: '252563d7-edfa-4979-bdd7-37d9d95f308c'
  ReservedCode2: '252563d7-edfa-4979-bdd7-37d9d95f308c'
---

# Eqv 运算符

用于对两个表达式执行按位等价运算——[**Xor**](/official/Reference/Core/Xor) 的逻辑逆运算。

语法：
> *result* **=** *expression1* **Eqv** *expression2*

*result*
: 任意数值变量。

*expression1*, *expression2*
: 任意表达式。

如果任一表达式为 **Null**，则 *result* 也为 **Null**。当两个表达式都不为 **Null** 时，*result* 根据下表确定：

| 如果 *expression1* 为 | 且 *expression2* 为 | 则 *result* 为 |
|:-----|:-----|:-----|
| **True**  | **True**  | **True**  |
| **True**  | **False** | **False** |
| **False** | **True**  | **False** |
| **False** | **False** | **True**  |

**Eqv** 运算符对两个数值表达式中相同位置的位执行按位比较，并根据下表在 *result* 中设置相应的位：

| 如果 *expression1* 中的位为 | 且 *expression2* 中的位为 | 则 *result* 为 |
|:-----:|:-----:|:-----:|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

::: info
**Eqv** 总是求值*两个*操作数。
:::

### 示例

本示例使用 **Eqv** 运算符对两个表达式执行逻辑等价运算。

```vb
Dim A, B, C, D, MyCheck
A = 10: B = 8: C = 6: D = Null    ' Initialize variables.
MyCheck = A > B Eqv B > C         ' Returns True.
MyCheck = B > A Eqv B > C         ' Returns False.
MyCheck = A > B Eqv B > D         ' Returns Null.
MyCheck = A Eqv B                 ' Returns -3 (bitwise comparison).
```

### 另请参阅

- [**Xor** 运算符](/official/Reference/Core/Xor)
- [**Imp** 运算符](/official/Reference/Core/Imp)
- [**And** 运算符](/official/Reference/Core/And)
- [**Or** 运算符](/official/Reference/Core/Or)
- [运算符](/official/Reference/Operators)