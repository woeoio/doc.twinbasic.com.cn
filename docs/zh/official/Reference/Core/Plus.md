---
title: "+, +="
parent: Operators
permalink: /tB/Core/Plus
---
# + 和 += 运算符

用于将两个数相加，或——取决于操作数类型——连接两个字符串。复合形式**+=**一步完成加法并赋值。

语法：
> *result* **=** *expression1* **+** *expression2*  
> *variable* **+=** *expression*       *(twinBASIC)*

*result*
: 任意数值变量。

*variable*
: *(twinBASIC)* 任意数值或**String**变量，或任何可写属性。

*expression*, *expression1*, *expression2*
: 任意表达式。

使用**+**运算符时，可能不清楚是执行加法还是字符串连接。使用[**&**](/official/Reference/Core/Concat)运算符进行连接可以消除歧义并产生自文档化的代码。

如果至少有一个表达式不是**Variant**，则适用以下规则：

| 如果                                                                              | 则                                                  |
|:--------------------------------------------------------------------------------|:------------------------------------------------------|
| 两个表达式均为数值（**Byte**、**Boolean**、**Integer**、**Long**、**LongLong**、**LongPtr**、**Single**、**Double**、**Date**、**Currency**） | 相加。 |
| 两个表达式均为**String**                                                 | 连接。                                          |
| 一个表达式为数值，另一个为除**Null**外的任意**Variant**      | 相加。                                                  |
| 一个表达式为**String**，另一个为除**Null**外的任意**Variant**   | 连接。                                          |
| 一个表达式为**Empty** **Variant**                                      | 返回另一个表达式不变作为*result*。|
| 一个表达式为数值，另一个为**String**                         | 产生`Type mismatch`错误。                       |
| 任一表达式为**Null**                                                   | *result*为**Null**。                                 |

如果两个表达式均为**Variant**表达式，则适用以下规则：

| 如果                                                              | 则         |
|:----------------------------------------------------------------|:-------------|
| 两个**Variant**表达式均为数值                        | 相加。         |
| 两个**Variant**表达式均为字符串                        | 连接。 |
| 一个**Variant**表达式为数值，另一个为字符串 | 相加。         |

对于仅涉及数值表达式的简单算术加法，*result*的数据类型通常与最精确的表达式相同。精度从低到高的顺序为**Byte**、**Integer**、**Long**、**LongLong**、**Single**、**Double**、**Currency**。以下是例外情况：

| 如果                                                                                        | 则 *result* 为                  |
|:------------------------------------------------------------------------------------------|:----------------------------------|
| **Single**和**Long**相加                                                     | **Double**。                     |
| *result*是**Long**、**Single**或**Date**变体，溢出了其合法范围    | 转换为**Double**变体。|
| *result*是**Byte**变体，溢出了其合法范围                             | 转换为**Integer**变体。|
| *result*是**Integer**变体，溢出了其合法范围                         | 转换为**Long**变体。  |
| **Date**与任何数据类型相加                                                      | **Date**。                       |

如果一个或两个表达式为**Null**表达式，则*result*为**Null**。如果两个表达式均为**Empty**，则*result*为**Integer**。但是，如果仅一个表达式为**Empty**，则返回另一个表达式不变作为*result*。

::: info
加法和减法使用的精度顺序与乘法使用的精度顺序不同。
:::

### 复合赋值

`x += y`是twinBASIC中`x = x + y`的简写。左侧只计算一次；结果遵循上述相同的类型提升和**Null**/**Empty**规则。与所有twinBASIC的复合赋值运算符一样，**+=**是语句，不是表达式——它不产生值。

```vb
Dim Total As Long = 0
Total += 5                      ' Total is now 5.
Total += 7                      ' Total is now 12.

Dim Greeting As String = "Hello"
Greeting += ", world"           ' Greeting is now "Hello, world".
```

### 示例

本示例使用**+**运算符对数求和。**+**运算符也可用于连接字符串，但为了消除歧义，请改用[**&**](/official/Reference/Core/Concat)运算符。

```vb
Dim MyNumber, Var1, Var2
MyNumber = 2 + 2                ' Returns 4.
MyNumber = 4257.04 + 98112      ' Returns 102369.04.

Var1 = "34": Var2 = 6           ' Initialize mixed variables.
MyNumber = Var1 + Var2          ' Returns 40.

Var1 = "34": Var2 = "6"         ' Initialize variables with strings.
MyNumber = Var1 + Var2          ' Returns "346" (string concatenation).
```

### 另请参阅

- [**-** 运算符](/official/Reference/Core/Minus)
- [**&** 运算符](/official/Reference/Core/Concat)
- [**\*** 运算符](/official/Reference/Core/Multiply)
- [运算符](/official/Reference/Operators)