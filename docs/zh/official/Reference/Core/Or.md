---
title: Or
parent: Operators
permalink: /tB/Core/Or
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a09ae7ad-ec94-4827-8396-bd396dce61b7'
  PropagateID: 'a09ae7ad-ec94-4827-8396-bd396dce61b7'
  ReservedCode1: '5407d4e2-f487-42a7-af57-ef470274a50f'
  ReservedCode2: '5407d4e2-f487-42a7-af57-ef470274a50f'
---

# Or 运算符

用于对两个表达式执行按位析取。

语法：
> *result* **=** *expression1* **Or** *expression2*

*result*
: 任意数值变量。

*expression1*, *expression2*
: 任意表达式。

如果一个或两个表达式的计算结果为**True**，则*result*为**True**。下表说明*result*的确定方式：

| 如果 *expression1* 为 | 且 *expression2* 为 | 则 *result* 为 |
|:-----|:-----|:-----|
| **True**  | **True**  | **True**  |
| **True**  | **False** | **True**  |
| **True**  | **Null**  | **True**  |
| **False** | **True**  | **True**  |
| **False** | **False** | **False** |
| **False** | **Null**  | **Null**  |
| **Null**  | **True**  | **True**  |
| **Null**  | **False** | **Null**  |
| **Null**  | **Null**  | **Null**  |

**Or**运算符对两个数值表达式中相同位置的位执行按位比较，并根据下表设置*result*中的相应位：

| 如果 *expression1* 中的位为 | 且 *expression2* 中的位为 | 则 *result* 为 |
|:-----:|:-----:|:-----:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

::: info
**Or**每次都会计算*两个*操作数，即使仅*expression1*就能确定结果。使用[**OrElse**](/official/Reference/Core/OrElse)进行短路求值——例如，当*expression2*计算开销大、有副作用，或仅当*expression1*为**False**时才有意义。
:::

### 示例

本示例使用**Or**运算符对两个表达式执行逻辑析取。

```vb
Dim A, B, C, D, MyCheck
A = 10: B = 8: C = 6: D = Null    ' Initialize variables.
MyCheck = A > B Or B > C    ' Returns True.
MyCheck = B > A Or B > C    ' Returns True.
MyCheck = A > B Or B > D    ' Returns True.
MyCheck = B > D Or B > A    ' Returns Null.
MyCheck = A Or B            ' Returns 10 (bitwise comparison).
```

### 另请参阅

- [**OrElse** 运算符](/official/Reference/Core/OrElse)
- [**And** 运算符](/official/Reference/Core/And)
- [**Not** 运算符](/official/Reference/Core/Not)
- [**Xor** 运算符](/official/Reference/Core/Xor)
- [**Eqv** 运算符](/official/Reference/Core/Eqv)
- [**Imp** 运算符](/official/Reference/Core/Imp)
- [运算符](/official/Reference/Operators)