---
title: "运算符"
parent: Reference Section
nav_order: 4
permalink: /Reference/Operators
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '589954ff-4ef4-4751-9c8d-e93998b43027'
  PropagateID: '589954ff-4ef4-4751-9c8d-e93998b43027'
  ReservedCode1: '317a36e2-e831-40d0-b24e-0b4198a4ae04'
  ReservedCode2: '317a36e2-e831-40d0-b24e-0b4198a4ae04'
---

# 运算符

twinBASIC语言内置的运算符。它们由编译器理解，不在运行时库中声明或定义。

## 算术

- [+](/official/Reference/Core/Plus) -- 加法；**String**操作数时为连接
- [-](/official/Reference/Core/Minus) -- 减法；作为一元运算符时为取负
- [*](/official/Reference/Core/Multiply) -- 乘法
- [/](/official/Reference/Core/Divide) -- 浮点除法
- [\\](/official/Reference/Core/IntegerDivide) -- 整数除法（截断）
- [Mod](/official/Reference/Core/Mod) -- 两数相除仅返回余数
- [ ^](/official/Reference/Core/Exponent) -- 指数运算

## 连接

- [&](/official/Reference/Core/Concat) -- 强制字符串连接，无论操作数类型如何

## 比较

- [比较运算符](/official/Reference/Core/Comparison-Operators)（`=`、`<>`、`<`、`<=`、`>`、`>=`）-- 数值或字符串比较
- [Like](/official/Reference/Core/Like) -- 通配符/模式匹配比较
- [Is](/official/Reference/Core/Is) -- 比较两个对象引用是否相同
- [IsNot](/official/Reference/Core/IsNot) -- (twinBASIC) **Is**的逻辑反

## 位运算

两个操作数始终被求值。布尔值被视为整数：True = -1，False = 0。

- [And](/official/Reference/Core/And) -- 按位与
- [Or](/official/Reference/Core/Or) -- 按位或
- [Not](/official/Reference/Core/Not) -- 按位取反
- [Xor](/official/Reference/Core/Xor) -- 按位异或
- [Eqv](/official/Reference/Core/Eqv) -- 按位等价
- [Imp](/official/Reference/Core/Imp) -- 按位蕴含

## 逻辑短路

右操作数仅当左操作数不能确定结果时才被求值。

- [AndAlso](/official/Reference/Core/AndAlso) -- (twinBASIC) 短路与；仅当左操作数为**True**时才求值右操作数
- [OrElse](/official/Reference/Core/OrElse) -- (twinBASIC) 短路或；仅当左操作数为**False**时才求值右操作数

## 位移

*(twinBASIC)* 移位为*逻辑移位* --- 空出位用零填充，超出操作数宽度的移位产生`0`而非循环。

- [\<<](/official/Reference/Core/LeftShift) -- (twinBASIC) 将数值左移指定位数
- [\>>](/official/Reference/Core/RightShift) -- (twinBASIC) 将数值右移指定位数

## 对象同一性

- [Is](/official/Reference/Core/Is) -- 比较两个对象引用是否相同
- [IsNot](/official/Reference/Core/IsNot) -- (twinBASIC) **Is**的逻辑反

## 复合赋值

*(twinBASIC)* 对于大多数算术、连接和位移运算符，twinBASIC提供了`op=`复合形式，将运算与赋值结合。`x op= y`等同于`x = x op y`，但左侧只求值一次，且是语句而非表达式。

| 运算符                       | 复合形式 | 等同于 |
| :----------------------------- | :------------ | :------------ |
| [+](/official/Reference/Core/Plus)           | **+=**        | `x = x + y`   |
| [-](/official/Reference/Core/Minus)          | **-=**        | `x = x - y`   |
| [*](/official/Reference/Core/Multiply)       | **\*=**       | `x = x * y`   |
| [/](/official/Reference/Core/Divide)         | **/=**        | `x = x / y`   |
| [\\](/official/Reference/Core/IntegerDivide) | **\\=**       | `x = x \ y`   |
| [ ^](/official/Reference/Core/Exponent)      | **^=**        | `x = x ^ y`   |
| [&](/official/Reference/Core/Concat)         | **&=**        | `x = x & y`   |
| [\<<](/official/Reference/Core/LeftShift)    | **\<<=**      | `x = x << y`  |
| [\>>](/official/Reference/Core/RightShift)   | **\>>=**      | `x = x >> y`  |

[**Mod**](/official/Reference/Core/Mod)以及任何逻辑/比较运算符没有复合形式。

## 函数指针

- [AddressOf](/official/Reference/Core/AddressOf) -- 生成指向过程的有类型函数指针

## 运算符优先级

当表达式中出现多个运算时，各部分按固定顺序求值。算术运算符最先求值，比较运算符其次，逻辑运算符最后。括号可覆盖默认顺序。

各类别内从最高到最低优先级的顺序为：

| 算术                                           | 比较                            | 逻辑    |
|:-----------------------------------------------------|:--------------------------------------|:-----------|
| 指数（`^`）                                 | 等于（`=`）                        | **Not**    |
| 一元取负（`-`）                                 | 不等于（`<>`）                     | **And**、**AndAlso** |
| 乘法和除法（`*`、`/`）               | 小于（`<`）                       | **Or**、**OrElse**   |
| 整数除法（`\`）                               | 大于（`>`）                    | **Xor**    |
| 取模（`Mod`）                                      | 小于等于（`<=`）          | **Eqv**    |
| 加法和减法（`+`、`-`）                  | 大于等于（`>=`）       | **Imp**    |
| 字符串连接（`&`）                           | **Like**、**Is**、**IsNot**           |            |
| 位移（`<<`、`>>`）                                |                                       |            |

比较运算符具有相同的优先级，从左到右求值。乘法和除法同时出现时也从左到右求值，加法和减法同理。`&`运算符严格来说不是算术运算符，但在优先级上它排在所有算术运算符之后、所有比较运算符之前。

复合赋值运算符（`+=`、`-=`、`*=`、`/=`、`^=`、`&=`、`<<=`、`>>=`）仅出现在语句级别 --- 它们不属于任何表达式，因此不参与优先级排序。