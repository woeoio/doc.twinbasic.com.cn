---
title: ">>, >>="
parent: Operators
permalink: /tB/Core/RightShift
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd90a7e51-f9dd-43be-a306-8165e3ecfb37'
  PropagateID: 'd90a7e51-f9dd-43be-a306-8165e3ecfb37'
  ReservedCode1: '33a5843e-4af9-47c2-b240-54a50fa8ae9a'
  ReservedCode2: '33a5843e-4af9-47c2-b240-54a50fa8ae9a'
---

# \>> 和 \>>= 运算符

*(twinBASIC)* 将数值的位向右移动指定位置数，空出的高位用零填充。复合形式**>>=**一步完成移位并赋值。

::: info
**\>>**和**\>>=**是twinBASIC扩展。经典VBA没有位移运算符；等效代码使用[**\\\\**](/official/Reference/Core/IntegerDivide)除以2的幂（`x \ 2`、`x \ 4`等）。
:::

语法：
> *result* **=** *number* **>>** *count*  
> *variable* **\>>=** *count*

*result*
: 任意数值变量。

*variable*
: 任意数值变量或可写属性。

*number*
: 任意数值表达式。浮点操作数在移位前截断为整数。

*count*
: 给出要移位的位数的任意数值表达式。

*result*的数据类型匹配*number*的（整数）类型。右移是*逻辑*移位，不是算术移位：空出的高位用零填充，因此负的*number*变为大的正值而非保留符号。移位超过类型能容纳的位数产生`0`。

### 复合赋值

`x >>= n`是twinBASIC中`x = x >> n`的简写。**\>>=**是语句，不是表达式——它不产生值。

```vb
Dim Flags As Long = &H100
Flags >>= 4                     ' Flags is now &H10 (16).
Flags >>= 4                     ' Flags is now 1.
```

### 示例

```vb
Dim Value As Long
Value = 16 >> 0                 ' Returns 16.
Value = 16 >> 4                 ' Returns 1.
Value = 1024 >> 3               ' Returns 128.
Value = -1 >> 1                 ' Returns &H7FFFFFFF (logical shift fills with 0).
```

### 另请参阅

- [**\<<** 运算符](/official/Reference/Core/LeftShift)
- [**\\** 运算符](/official/Reference/Core/IntegerDivide)
- [**And** 运算符](/official/Reference/Core/And)
- [运算符](/official/Reference/Operators)