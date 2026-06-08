---
title: Not
parent: Operators
permalink: /tB/Core/Not
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5c527565-8f05-4993-93a3-69e74dcc78eb'
  PropagateID: '5c527565-8f05-4993-93a3-69e74dcc78eb'
  ReservedCode1: '97f0be13-2340-4d9e-988d-adb68c65ee94'
  ReservedCode2: '97f0be13-2340-4d9e-988d-adb68c65ee94'
---

# Not 运算符

用于对表达式执行按位取反。

语法：
> *result* **=** **Not** *expression*

*result*
: 任意数值变量。

*expression*
: 任意表达式。

下表说明*result*的确定方式：

| 如果 *expression* 为 | 则 *result* 为 |
|:-----|:-----|
| **True**  | **False** |
| **False** | **True**  |
| **Null**  | **Null**  |

**Not**运算符反转其操作数的位值，并根据下表设置*result*中的相应位：

| 如果 *expression* 中的位为 | 则 *result* 中的位为 |
|:-----:|:-----:|
| 0 | 1 |
| 1 | 0 |

### 示例

本示例使用**Not**运算符对表达式执行逻辑取反。

```vb
Dim A, B, C, D, MyCheck
A = 10: B = 8: C = 6: D = Null    ' Initialize variables.
MyCheck = Not (A > B)    ' Returns False.
MyCheck = Not (B > A)    ' Returns True.
MyCheck = Not (C > D)    ' Returns Null.
MyCheck = Not A          ' Returns -11 (bitwise comparison).
```

### 另请参阅

- [**And** 运算符](/official/Reference/Core/And)
- [**Or** 运算符](/official/Reference/Core/Or)
- [**Xor** 运算符](/official/Reference/Core/Xor)
- [**Eqv** 运算符](/official/Reference/Core/Eqv)
- [**Imp** 运算符](/official/Reference/Core/Imp)
- [**IsNot** 运算符](/official/Reference/Core/IsNot)
- [运算符](/official/Reference/Operators)