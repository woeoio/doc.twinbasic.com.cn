---
title: Xor
parent: Operators
permalink: /tB/Core/Xor
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '87142468-b8a3-4820-aa59-a5e9d329df7a'
  PropagateID: '87142468-b8a3-4820-aa59-a5e9d329df7a'
  ReservedCode1: '4841a8c8-bd20-446d-a59e-1e03f7e0a3bd'
  ReservedCode2: '4841a8c8-bd20-446d-a59e-1e03f7e0a3bd'
---

# Xor 运算符

用于对两个表达式执行按位排除（异或）。

语法：
> *result* **=** *expression1* **Xor** *expression2*

*result*
: 任意数值变量。

*expression1*, *expression2*
: 任意表达式。

如果一个——且仅一个——表达式的计算结果为**True**，则*result*为**True**。如果任一表达式为**Null**，则*result*也为**Null**。当两个表达式都不为**Null**时，*result*根据下表确定：

| 如果 *expression1* 为 | 且 *expression2* 为 | 则 *result* 为 |
|:-----|:-----|:-----|
| **True**  | **True**  | **False** |
| **True**  | **False** | **True**  |
| **False** | **True**  | **True**  |
| **False** | **False** | **False** |

**Xor**运算符对两个数值表达式中相同位置的位执行按位比较，并根据下表设置*result*中的相应位：

| 如果 *expression1* 中的位为 | 且 *expression2* 中的位为 | 则 *result* 为 |
|:-----:|:-----:|:-----:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

::: info
**Xor**始终计算*两个*操作数。没有短路形式，因为异或的结果始终取决于两个输入。
:::

### 示例

本示例使用**Xor**运算符对两个表达式执行逻辑排除。

```vb
Dim A, B, C, D, MyCheck
A = 10: B = 8: C = 6: D = Null    ' Initialize variables.
MyCheck = A > B Xor B > C         ' Returns False.
MyCheck = B > A Xor B > C         ' Returns True.
MyCheck = B > A Xor C > B         ' Returns False.
MyCheck = B > D Xor A > B         ' Returns Null.
MyCheck = A Xor B                 ' Returns 2 (bitwise comparison).
```

### 另请参阅

- [**And** 运算符](/official/Reference/Core/And)
- [**Or** 运算符](/official/Reference/Core/Or)
- [**Not** 运算符](/official/Reference/Core/Not)
- [**Eqv** 运算符](/official/Reference/Core/Eqv)
- [运算符](/official/Reference/Operators)