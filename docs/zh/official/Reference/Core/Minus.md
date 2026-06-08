---
title: "-, -="
parent: Operators
permalink: /tB/Core/Minus
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0557fb08-da0f-456b-8168-6f4d59e1ff71'
  PropagateID: '0557fb08-da0f-456b-8168-6f4d59e1ff71'
  ReservedCode1: '63f8c37c-ee0e-4b2d-b091-97544f978ffa'
  ReservedCode2: '63f8c37c-ee0e-4b2d-b091-97544f978ffa'
---

# - 和 -= 运算符

用于求两数之差，或指示数值表达式的负值。复合形式 **-=** 在一步中完成相减并赋值。

语法：
> *result* **=** *number1* **-** *number2*  
> **-** *number*  
> *variable* **-=** *number*       *(twinBASIC)*

*result*
: 任意数值变量。

*variable*
: *(twinBASIC)* 任意数值变量或可写属性。

*number*, *number1*, *number2*
: 任意数值表达式。

在二元形式中，**-** 是算术减法运算符，返回 *number1* 和 *number2* 的差。在一元形式中，**-** 是取负运算符，返回 *number* 的负值。

*result* 的数据类型通常与最精确的表达式相同。精度从低到高的顺序为 **Byte**、**Integer**、**Long**、**LongLong**、**Single**、**Double**、**Currency**。以下是例外：

| 如果                                                                                       | 则 *result* 为                       |
|:-----------------------------------------------------------------------------------------|:---------------------------------------|
| 减法涉及 **Single** 和 **Long**                                         | 转换为 **Double**。             |
| *result* 是溢出其合法范围的 **Long**、**Single** 或 **Date** 变体   | 转换为包含 **Double** 的 **Variant**。 |
| *result* 是溢出其合法范围的 **Byte** 变体                            | 转换为 **Integer** 变体。   |
| *result* 是溢出其合法范围的 **Integer** 变体                        | 转换为 **Long** 变体。       |
| 减法涉及 **Date** 和任何其他数据类型                                  | **Date**。                            |
| 减法涉及两个 **Date** 表达式                                            | **Double**。                          |

如果一个或两个表达式为 **Null**，则 *result* 为 **Null**。如果表达式为 **Empty**，则被视为0。

::: info
加法和减法使用的精度顺序与乘法使用的精度顺序不同。
:::

### 复合赋值

`x -= y` 是twinBASIC中 `x = x - y` 的简写。左侧仅求值一次；结果遵循上述相同的类型提升和 **Null** / **Empty** 规则。**-=** 是语句而非表达式——它不产生值。

```vb
Dim Total As Long = 100
Total -= 5                      ' Total is now 95.
Total -= 5                      ' Total is now 90.
```

### 示例

本示例使用 **-** 运算符计算两个数的差。

```vb
Dim MyResult
MyResult = 4 - 2                ' Returns 2.
MyResult = 459.35 - 334.90      ' Returns 124.45.
MyResult = -MyResult            ' Unary negation: returns -124.45.
```

### 另请参阅

- [**+** 运算符](/official/Reference/Core/Plus)
- [**\*** 运算符](/official/Reference/Core/Multiply)
- [**/** 运算符](/official/Reference/Core/Divide)
- [运算符](/official/Reference/Operators)