---
title: Randomize
parent: Math Module
permalink: /tB/Modules/Math/Randomize
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '632f5402-dcc9-4008-a5d4-4868c77f1268'
  PropagateID: '632f5402-dcc9-4008-a5d4-4868c77f1268'
  ReservedCode1: '3fd00615-2b10-4c0b-b333-708ff9004f0e'
  ReservedCode2: '3fd00615-2b10-4c0b-b333-708ff9004f0e'
---

# Randomize

初始化随机数生成器。

语法：**Randomize** [ *number* ]

*number*
: *可选* **Variant** 或任何有效的数值表达式。

**Randomize** 使用 *number* 初始化 [**Rnd**](/official/Reference/VBA/Math/Rnd) 函数的随机数生成器，为其提供新的种子值。如果省略 *number*，则使用系统计时器返回的值作为新的种子值。

如果不使用 **Randomize**，**Rnd** 函数（不带参数）在第一次调用时使用相同的数字作为种子，此后使用上次生成的数字作为种子值。

::: info
要重复随机数序列，请在使用带数值参数的 **Randomize** 之前立即用负参数调用 **Rnd**。使用相同 *number* 值的 **Randomize** 不会重复之前的序列。
:::

### 示例

此示例使用 **Randomize** 语句初始化随机数生成器。由于省略了 *number* 参数，**Randomize** 使用 [**Timer**](/official/Reference/VBA/DateTime/Timer) 函数的返回值作为新的种子值。

```vb
Dim MyValue
Randomize    ' Initialize random-number generator.

MyValue = Int((6 * Rnd) + 1)    ' Generate random value between 1 and 6.
```

### 另请参阅

- [Rnd](/official/Reference/VBA/Math/Rnd) 函数