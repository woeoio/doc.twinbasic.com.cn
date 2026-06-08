---
title: "<<, <<="
parent: Operators
permalink: /tB/Core/LeftShift
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '94654235-1c76-42d2-8f99-a36a752f56a2'
  PropagateID: '94654235-1c76-42d2-8f99-a36a752f56a2'
  ReservedCode1: 'c2f97642-0db3-441f-baf8-f5eb802bd52e'
  ReservedCode2: 'c2f97642-0db3-441f-baf8-f5eb802bd52e'
---

# << 和 <<= 运算符

*(twinBASIC)* 将数值的位向左移动指定位置数，空出的低位用零填充。复合形式 **<<=** 在一步中完成移位并赋值。

::: info
**<<** 和 **<<=** 是twinBASIC扩展。经典VBA没有位移运算符；等价代码通过乘以2的幂（`x * 2`、`x * 4`、…）并依赖溢出规则实现。
:::

语法：
> *result* **=** *number* **<<** *count*  
> *variable* **<<=** *count*

*result*
: 任意数值变量。

*variable*
: 任意数值变量或可写属性。

*number*
: 任意数值表达式。浮点操作数在移位前被截断为整数。

*count*
: 给出移位位数的任意数值表达式。

*result* 的数据类型与 *number* 的（整数）类型匹配。移位超过类型可容纳的位数时产生 `0` 而非环绕。符号位*不保留*——`<<` 是逻辑左移，等效于在可用宽度内乘以2<sup>*count*</sup>。

### 复合赋值

`x <<= n` 是twinBASIC中 `x = x << n` 的简写。**<<=** 是语句而非表达式——它不产生值。

```vb
Dim Mask As Long = 1
Mask <<= 4                      ' Mask is now &H10 (16).
Mask <<= 4                      ' Mask is now &H100 (256).
```

### 示例

```vb
Dim Value As Long
Value = 1 << 0                  ' Returns 1.
Value = 1 << 4                  ' Returns 16.
Value = 3 << 8                  ' Returns 768.
Value = 1 << 33                 ' Returns 0 (shift exceeds Long width).
```

### 另请参阅

- [**>>** 运算符](/official/Reference/Core/RightShift)
- [**And** 运算符](/official/Reference/Core/And)
- [**Or** 运算符](/official/Reference/Core/Or)
- [运算符](/official/Reference/Operators)