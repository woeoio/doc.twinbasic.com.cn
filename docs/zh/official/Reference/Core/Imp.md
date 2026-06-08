---
title: Imp
parent: Operators
permalink: /tB/Core/Imp
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5edf1b69-95aa-42b8-a2b5-cae96e9f48c3'
  PropagateID: '5edf1b69-95aa-42b8-a2b5-cae96e9f48c3'
  ReservedCode1: '64574506-0cd2-4baf-96ca-445815da1b1c'
  ReservedCode2: '64574506-0cd2-4baf-96ca-445815da1b1c'
---

# Imp 运算符

用于对两个表达式执行按位蕴涵运算。*expression1* **Imp** *expression2* 仅当 *expression1* 为 **True** 且 *expression2* 为 **False** 时为 **False**；在所有其他非 **Null** 情况下结果为 **True**。

语法：
> *result* **=** *expression1* **Imp** *expression2*

*result*
: 任意数值变量。

*expression1*, *expression2*
: 任意表达式。

下表说明了 *result* 的确定方式：

| 如果 *expression1* 为 | 且 *expression2* 为 | 则 *result* 为 |
|:-----|:-----|:-----|
| **True**  | **True**  | **True**  |
| **True**  | **False** | **False** |
| **True**  | **Null**  | **Null**  |
| **False** | **True**  | **True**  |
| **False** | **False** | **True**  |
| **False** | **Null**  | **True**  |
| **Null**  | **True**  | **True**  |
| **Null**  | **False** | **Null**  |
| **Null**  | **Null**  | **Null**  |

**Imp** 运算符对两个数值表达式中相同位置的位执行按位比较，并根据下表在 *result* 中设置相应的位：

| 如果 *expression1* 中的位为 | 且 *expression2* 中的位为 | 则 *result* 为 |
|:-----:|:-----:|:-----:|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

::: info
**Imp** 总是求值*两个*操作数。
:::

### 示例

本示例使用 **Imp** 运算符对两个表达式执行逻辑蕴涵运算。

```vb
Dim A, B, C, D, MyCheck
A = 10: B = 8: C = 6: D = Null    ' Initialize variables.
MyCheck = A > B Imp B > C         ' Returns True.
MyCheck = A > B Imp C > B         ' Returns False.
MyCheck = B > A Imp C > B         ' Returns True.
MyCheck = B > A Imp C > D         ' Returns True.
MyCheck = C > D Imp B > A         ' Returns Null.
MyCheck = B Imp A                 ' Returns -1 (bitwise comparison).
```

### 另请参阅

- [**Eqv** 运算符](/official/Reference/Core/Eqv)
- [**Xor** 运算符](/official/Reference/Core/Xor)
- [**And** 运算符](/official/Reference/Core/And)
- [**Or** 运算符](/official/Reference/Core/Or)
- [运算符](/official/Reference/Operators)