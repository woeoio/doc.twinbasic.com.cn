---
title: "Math 模块"
parent: VBA Package
permalink: /tB/Modules/Math/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3c94ac01-81ac-4653-8644-2e299741ec03'
  PropagateID: '3c94ac01-81ac-4653-8644-2e299741ec03'
  ReservedCode1: '9c53d1f2-3c12-4835-accd-1873dd91c67f'
  ReservedCode2: '9c53d1f2-3c12-4835-accd-1873dd91c67f'
---

# Math 模块

**Math** 模块将标准数值函数组合在一起——符号和绝对值、三角函数、指数和对数、平方根、按指定小数位数舍入以及伪随机数生成。大多数成员返回 **Double**，因此中间结果在写回较窄的变量之前保持浮点形式。

## 符号和绝对值

[**Abs**](/official/Reference/VBA/Math/Abs) 返回其参数的绝对值——与零的距离，丢弃符号——并保留参数的数据类型，因此 `Abs(-3#)` 是 **Double**，`Abs(-3)` 是 **Integer**。[**Sgn**](/official/Reference/VBA/Math/Sgn) 是其补充：丢弃绝对值，仅返回符号，为 `-1`、`0` 或 `+1`。两者共同将一个数分解为符号和绝对值。

```vb
Debug.Print Abs(-7.5)            ' 7.5
Debug.Print Sgn(-7.5)            ' -1
```

## 三角函数

[**Sin**](/official/Reference/VBA/Math/Sin)、[**Cos**](/official/Reference/VBA/Math/Cos) 和 [**Tan**](/official/Reference/VBA/Math/Tan) 接受以弧度表示的角度，返回其正弦、余弦和正切。[**Atn**](/official/Reference/VBA/Math/Atn) 反向操作——给定正切值，返回该正切值对应的角度，范围为 `-pi/2` 到 `pi/2`。这四个函数均以弧度工作；将角度乘以 `pi / 180` 转换为弧度，或将弧度乘以 `180 / pi` 转换回角度。

```vb
Const Pi As Double = 3.14159265358979
Debug.Print Sin(Pi / 2)          ' 1
Debug.Print Atn(1) * 4           ' 3.14159265358979 — pi
```

其他反三角函数（反正弦、反余弦）和双曲函数未直接提供，但每个都可以从 **Atn**、**Log**、**Exp** 和 **Sqr** 用几行代码推导——参见 [**Atn**](/official/Reference/VBA/Math/Atn)、[**Log**](/official/Reference/VBA/Math/Log) 和 [**Cos**](/official/Reference/VBA/Math/Cos) 的详细示例。

## 指数和对数

[**Exp**](/official/Reference/VBA/Math/Exp) 将 *e*（≈ 2.71828）提升到指定幂次，[**Log**](/official/Reference/VBA/Math/Log) 是其逆运算，返回自然（以 *e* 为底）对数。要计算其他底数的对数，除以该底数的 **Log**：`Log(x) / Log(10)` 为以 10 为底，`Log(x) / Log(2)` 为以 2 为底，依此类推。

```vb
Debug.Print Exp(1)               ' 2.71828182845905 — e
Debug.Print Log(100) / Log(10)   ' 2 — base-10 log of 100
```

## 平方根

[**Sqr**](/official/Reference/VBA/Math/Sqr) 返回非负数的平方根，以 **Double** 表示。传入负值会引发运行时错误而非返回复数或 **NaN** 结果；如果计算可能合法地产生负输入，请用 [**Sgn**](/official/Reference/VBA/Math/Sgn) 或与零的比较来保护调用。

## 舍入

[**Round**](/official/Reference/VBA/Math/Round) 使用*银行家舍入法*将数字舍入到指定小数位数——当值恰好位于两个可能结果的中间时，舍入到最接近的**偶数**数字，因此 `Round(0.5, 0)` 为 `0`，`Round(1.5, 0)` 为 `2`。这避免了始终向上舍入的系统偏差，与 VBA 的行为一致。对于*截断*而非舍入，参见 [**Conversion**](/official/Reference/VBA/Conversion/) 模块中的 [**Int**](/official/Reference/VBA/Conversion/Int) 和 [**Fix**](/official/Reference/VBA/Conversion/Fix)；对于舍入到特定整数类型的窄化转换，参见 [**CInt**](/official/Reference/VBA/Conversion/CInt) 和 [**CLng**](/official/Reference/VBA/Conversion/CLng)。

## 随机数

[**Randomize**](/official/Reference/VBA/Math/Randomize) 为伪随机数生成器设定种子，[**Rnd**](/official/Reference/VBA/Math/Rnd) 从中提取，返回半开区间 `[0, 1)` 内的 **Single**。如果不显式调用 **Randomize**，每次程序运行时 **Rnd** 都会生成相同的序列——便于可重复测试；对于不可预测的输出，在启动时不带参数调用一次 **Randomize**，以便使用系统计时器作为种子。

在 *lower* 和 *upper*（含）之间均匀分布整数的标准惯用法结合了 **Rnd** 和 [**Int**](/official/Reference/VBA/Conversion/Int)：

```vb
Randomize
Dim Roll As Long
Roll = Int((6 - 1 + 1) * Rnd + 1)    ' a die roll, 1..6
```

## 成员

- [Abs](/official/Reference/VBA/Math/Abs) -- 返回数字的绝对值
- [Atn](/official/Reference/VBA/Math/Atn) -- 返回数字的反正切值（弧度）
- [Cos](/official/Reference/VBA/Math/Cos) -- 返回角度的余弦值
- [Exp](/official/Reference/VBA/Math/Exp) -- 返回 *e* 的指定幂次
- [Log](/official/Reference/VBA/Math/Log) -- 返回数字的自然（以 *e* 为底）对数
- [Randomize](/official/Reference/VBA/Math/Randomize) -- 初始化随机数生成器
- [Rnd](/official/Reference/VBA/Math/Rnd) -- 返回 `[0, 1)` 范围内的伪随机数
- [Round](/official/Reference/VBA/Math/Round) -- 使用银行家舍入法将数字舍入到指定小数位数
- [Sgn](/official/Reference/VBA/Math/Sgn) -- 返回数字的符号
- [Sin](/official/Reference/VBA/Math/Sin) -- 返回角度的正弦值
- [Sqr](/official/Reference/VBA/Math/Sqr) -- 返回数字的平方根
- [Tan](/official/Reference/VBA/Math/Tan) -- 返回角度的正切值