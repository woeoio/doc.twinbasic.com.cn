---
title: "*, *="
parent: Operators
permalink: /tB/Core/Multiply
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1619f6ca-777b-4c56-9b43-5b5dd527a70d'
  PropagateID: '1619f6ca-777b-4c56-9b43-5b5dd527a70d'
  ReservedCode1: '381b3d5e-9ac3-46b4-bdc2-28a010131c86'
  ReservedCode2: '381b3d5e-9ac3-46b4-bdc2-28a010131c86'
---

# \* 和 \*= 运算符

用于将两个数相乘。复合形式**\*=**一步完成乘法并赋值。

语法：
> *result* **=** *number1* **\*** *number2*  
> *variable* **\*=** *number*       *(twinBASIC)*

*result*
: 任意数值变量。

*variable*
: *(twinBASIC)* 任意数值变量或可写属性。

*number*, *number1*, *number2*
: 任意数值表达式。

*result*的数据类型通常与最精确的表达式相同。精度从低到高的顺序为**Byte**、**Integer**、**Long**、**LongLong**、**Single**、**Currency**、**Double**。以下是例外情况：

| 如果                                                                                       | 则 *result* 为                       |
|:-----------------------------------------------------------------------------------------|:---------------------------------------|
| 乘法涉及**Single**和**Long**                                      | 转换为**Double**。             |
| *result*是**Long**、**Single**或**Date**变体，溢出了其合法范围   | 转换为包含**Double**的**Variant**。 |
| *result*是**Byte**变体，溢出了其合法范围                            | 转换为**Integer**变体。   |
| *result*是**Integer**变体，溢出了其合法范围                        | 转换为**Long**变体。       |

如果一个或两个表达式为**Null**表达式，则*result*为**Null**。如果表达式为**Empty**，则视为0。

::: info
乘法使用的精度顺序与加法和减法使用的精度顺序不同。
:::

### 复合赋值

`x *= y`是twinBASIC中`x = x * y`的简写。左侧只计算一次；结果遵循上述相同的类型提升和**Null**/**Empty**规则。**\*=**是语句，不是表达式——它不产生值。

```vb
Dim Value As Long = 3
Value *= 4                      ' Value is now 12.
Value *= 2                      ' Value is now 24.
```

### 示例

本示例使用**\***运算符将两个数相乘。

```vb
Dim MyValue
MyValue = 2 * 2                 ' Returns 4.
MyValue = 459.35 * 334.90       ' Returns 153836.315.
```

### 另请参阅

- [**/** 运算符](/official/Reference/Core/Divide)
- [**\\** 运算符](/official/Reference/Core/IntegerDivide)
- [**^** 运算符](/official/Reference/Core/Exponent)
- [**+** 运算符](/official/Reference/Core/Plus)
- [运算符](/official/Reference/Operators)