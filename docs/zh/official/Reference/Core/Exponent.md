---
title: "^, ^="
parent: Operators
permalink: /tB/Core/Exponent
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'baa5f927-bd41-4d86-904a-4d3f67a2a45d'
  PropagateID: 'baa5f927-bd41-4d86-904a-4d3f67a2a45d'
  ReservedCode1: '6aef5bcb-2114-4732-992f-cf7afc2b92d2'
  ReservedCode2: '6aef5bcb-2114-4732-992f-cf7afc2b92d2'
---

# ^ 和 ^= 运算符

用于将数提高到指数幂。复合形式 **^=** 在一步中完成求幂并赋值。

语法：
> *result* **=** *number* **^** *exponent*  
> *variable* **^=** *exponent*       *(twinBASIC)*

*result*
: 任意数值变量。

*variable*
: *(twinBASIC)* 任意数值变量或可写属性。

*number*, *exponent*
: 任意数值表达式。

只有当 *exponent* 为整数值时，*number* 才可以为负数。当在单个表达式中执行多次求幂时，**^** 运算符按从左到右的顺序求值。

通常，*result* 的数据类型为 **Double** 或包含 **Double** 的 **Variant**。但如果 *number* 或 *exponent* 为 **Null** 表达式，则 *result* 为 **Null**。

### 复合赋值

`x ^= y` 是twinBASIC中 `x = x ^ y` 的简写。左侧仅求值一次；结果遵循上述相同的类型提升和 **Null** 规则。**^=** 是语句而非表达式——它不产生值。

```vb
Dim Value As Double = 2
Value ^= 3                      ' Value is now 8.
Value ^= 2                      ' Value is now 64.
```

### 示例

本示例使用 **^** 运算符将数提高到指数幂。

```vb
Dim MyValue
MyValue = 2 ^ 2                 ' Returns 4.
MyValue = 3 ^ 3 ^ 3             ' Returns 19683 (evaluated left-to-right as (3^3)^3).
MyValue = (-5) ^ 3              ' Returns -125.
```

### 另请参阅

- [**\*** 运算符](/official/Reference/Core/Multiply)
- [**/** 运算符](/official/Reference/Core/Divide)
- [运算符](/official/Reference/Operators)