---
title: "/, /="
parent: Operators
permalink: /tB/Core/Divide
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5ec0772d-0242-4576-9ffd-28cf00f7ae18'
  PropagateID: '5ec0772d-0242-4576-9ffd-28cf00f7ae18'
  ReservedCode1: '5faa81d4-d0b2-420f-8682-2725e77745e7'
  ReservedCode2: '5faa81d4-d0b2-420f-8682-2725e77745e7'
---

# / 和 /= 运算符

用于将两个数相除并返回浮点结果。复合形式 **/=** 在一步中完成相除并赋值。

语法：
> *result* **=** *number1* **/** *number2*  
> *variable* **/=** *number*       *(twinBASIC)*

*result*
: 任意数值变量。

*variable*
: *(twinBASIC)* 任意数值变量或可写属性。

*number*, *number1*, *number2*
: 任意数值表达式。

*result* 的数据类型通常为 **Double** 或 **Double** 变体。以下是例外：

| 如果                                                              | 则 *result* 为                                                                       |
|:----------------------------------------------------------------|:---------------------------------------------------------------------------------------|
| 两个表达式都是 **Byte**、**Integer** 或 **Single**       | **Single**，除非溢出其合法范围，此时将发生错误。       |
| 两个表达式都是 **Byte**、**Integer** 或 **Single** 变体 | **Single** 变体，除非溢出其合法范围，此时 *result* 为包含 **Double** 的 **Variant**。 |

如果一个或两个表达式为 **Null**，则 *result* 为 **Null**。任何为 **Empty** 的表达式被视为0。

对整数类型除以零是错误；对于 **Single** 和 **Double** 遵循IEEE-754规则（正无穷、负无穷或NaN）。使用 [**\\**](/official/Reference/Core/IntegerDivide) 进行截断整数除法，使用 [**Mod**](/official/Reference/Core/Mod) 求余数。

### 复合赋值

`x /= y` 是twinBASIC中 `x = x / y` 的简写。左侧仅求值一次；结果遵循上述相同的类型提升和 **Null** / **Empty** 规则。**/=** 是语句而非表达式——它不产生值。

```vb
Dim Value As Double = 100
Value /= 4                      ' Value is now 25.
Value /= 5                      ' Value is now 5.
```

### 示例

本示例使用 **/** 运算符执行浮点除法。

```vb
Dim MyValue
MyValue = 10 / 4                ' Returns 2.5.
MyValue = 10 / 3                ' Returns 3.333333...
```

### 另请参阅

- [**\\** 运算符](/official/Reference/Core/IntegerDivide)
- [**Mod** 运算符](/official/Reference/Core/Mod)
- [**\*** 运算符](/official/Reference/Core/Multiply)
- [运算符](/official/Reference/Operators)