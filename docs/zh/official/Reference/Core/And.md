---
title: And
parent: Operators
permalink: /tB/Core/And
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '544b1760-4033-4f07-a750-2488515450a8'
  PropagateID: '544b1760-4033-4f07-a750-2488515450a8'
  ReservedCode1: '780ee1c5-3a14-4687-b70c-06405ea519ab'
  ReservedCode2: '780ee1c5-3a14-4687-b70c-06405ea519ab'
---

# And 运算符

用于对两个表达式执行按位合取运算。

语法：
> *result* **=** *expression1* **And** *expression2*

*result*
: 任意数值变量。

*expression1*, *expression2*
: 任意表达式。

如果两个表达式求值均为 **True**，则 *result* 为 **True**。如果任一表达式求值为 **False**，则 *result* 为 **False**。下表说明了 *result* 的确定方式：

| 如果 *expression1* 为 | 且 *expression2* 为 | 则 *result* 为 |
|:-----|:-----|:-----|
| **True**  | **True**  | **True**  |
| **True**  | **False** | **False** |
| **True**  | **Null**  | **Null**  |
| **False** | **True**  | **False** |
| **False** | **False** | **False** |
| **False** | **Null**  | **False** |
| **Null**  | **True**  | **Null**  |
| **Null**  | **False** | **False** |
| **Null**  | **Null**  | **Null**  |

**And** 运算符对两个数值表达式中相同位置的位执行按位比较，并根据下表在 *result* 中设置相应的位：

| 如果 *expression1* 中的位为 | 且 *expression2* 中的位为 | 则 *result* 为 |
|:-----:|:-----:|:-----:|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

::: info
**And** 每次都会求值*两个*操作数，即使仅 *expression1* 就能确定结果。使用 [**AndAlso**](/official/Reference/Core/AndAlso) 进行短路求值——例如，当 *expression2* 计算开销大、有副作用，或在没有 *expression1* 提供保护时会失败的情况。
:::

### 示例

本示例使用 **And** 运算符对两个表达式执行逻辑合取运算。

```vb
Dim A, B, C, D, MyCheck
A = 10: B = 8: C = 6: D = Null    ' Initialize variables.
MyCheck = A > B And B > C         ' Returns True.
MyCheck = B > A And B > C         ' Returns False.
MyCheck = A > B And B > D         ' Returns Null.
MyCheck = A And B                 ' Returns 8 (bitwise comparison).
```

### 另请参阅

- [**AndAlso** 运算符](/official/Reference/Core/AndAlso)
- [**Or** 运算符](/official/Reference/Core/Or)
- [**Not** 运算符](/official/Reference/Core/Not)
- [**Xor** 运算符](/official/Reference/Core/Xor)
- [**Eqv** 运算符](/official/Reference/Core/Eqv)
- [**Imp** 运算符](/official/Reference/Core/Imp)
- [运算符](/official/Reference/Operators)