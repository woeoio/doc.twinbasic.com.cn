---
title: Rnd
parent: Math Module
permalink: /tB/Modules/Math/Rnd
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9b57a740-8db5-4433-a210-fef78dded47b'
  PropagateID: '9b57a740-8db5-4433-a210-fef78dded47b'
  ReservedCode1: 'f66efb3d-7170-4d8f-a638-aeee3eabfa49'
  ReservedCode2: 'f66efb3d-7170-4d8f-a638-aeee3eabfa49'
---

# Rnd

返回一个 **Single**，包含伪随机数。

语法：**Rnd** [ **(** *number* **)** ]

*number*
: *可选* **Single** 或任何有效的数值表达式。

**Rnd** 函数返回小于 1 但大于或等于零的值。

*number* 的值决定 **Rnd** 如何生成伪随机数：

| 如果 *number* 为    | **Rnd** 生成                                                |
|-------------------|------------------------------------------------------------------|
| 小于零    | 每次相同的数字，使用 *number* 作为种子          |
| 大于零 | 伪随机序列中的下一个数字                   |
| 等于零     | 最近生成的数字                              |
| 未提供      | 伪随机序列中的下一个数字                   |

对于任何给定的初始种子，都会生成相同的数字序列，因为每次连续调用 **Rnd** 函数时都使用前一个数字作为序列中下一个数字的种子。

在调用 **Rnd** 之前，使用不带参数的 [**Randomize**](/official/Reference/VBA/Math/Randomize) 语句以基于系统计时器的种子初始化随机数生成器。

要在给定范围内生成随机整数，请使用此公式：

```vb
Int((upperbound - lowerbound + 1) * Rnd + lowerbound)
```

其中，*upperbound* 是范围内的最大数，*lowerbound* 是范围内的最小数。

::: info
要重复随机数序列，请在使用带数值参数的 **Randomize** 之前立即用负参数调用 **Rnd**。使用相同 *number* 值的 **Randomize** 不会重复之前的序列。
:::

### 示例

此示例使用 **Rnd** 函数生成 1 到 6 的随机整数值。

```vb
Dim MyValue As Integer
MyValue = Int((6 * Rnd) + 1)    ' Generate random value between 1 and 6.
```

### 另请参阅

- [Randomize](/official/Reference/VBA/Math/Randomize) 语句