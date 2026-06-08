---
title: IRR
parent: Financial Module
permalink: /tB/Modules/Financial/IRR
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '19389868-1c01-4308-9043-401c09a872ed'
  PropagateID: '19389868-1c01-4308-9043-401c09a872ed'
  ReservedCode1: '30dbba2c-47ac-43ac-be18-3df589af90d6'
  ReservedCode2: '30dbba2c-47ac-43ac-be18-3df589af90d6'
---

# IRR

返回一个 **Double**，指定一系列定期现金流（付款和收入）的内部收益率。

语法：**IRR(** *values()* [ **,** *guess* ] **)**

*values()*
: *必需* **Double** 数组，指定现金流值。数组必须包含至少一个负值（付款）和一个正值（收入）。

*guess*
: *可选* **Variant**，指定 **IRR** 返回值的估计。如果省略，*guess* 为 0.1（10%）。

内部收益率是按固定间隔发生的付款和收入投资所获得的利率。

**IRR** 函数使用数组中值的顺序来解释付款和收入的顺序。付款和收入值必须按正确顺序排列。每期的现金流不必像年金那样固定。

**IRR** 通过迭代计算。从 *guess* 的值开始，**IRR** 循环计算直到结果精确到 0.00001% 以内。如果 **IRR** 在 20 次尝试后仍未找到结果，则失败。

### 示例

在此示例中，**IRR** 函数返回包含在数组 `Values()` 中的 5 个现金流的内部收益率。第一个数组元素是负现金流，代表企业创业成本。其余四个现金流代表随后 4 年的正现金流。`Guess` 是估计的内部收益率。

```vb
Dim Guess, Fmt, RetRate, Msg
Static Values(5) As Double    ' Set up array.
Guess = .1    ' Guess starts at 10 percent.
Fmt = "#0.00"    ' Define percentage format.
Values(0) = -70000    ' Business start-up costs.
' Positive cash flows reflecting income for four successive years.
Values(1) = 22000 : Values(2) = 25000
Values(3) = 28000 : Values(4) = 31000
RetRate = IRR(Values(), Guess) * 100    ' Calculate internal rate.
Msg = "The internal rate of return for these five cash flows is "
Msg = Msg & Format(RetRate, Fmt) & " percent."
MsgBox Msg    ' Display internal return rate.
```

### 另请参阅

- [MIRR](/official/Reference/VBA/Financial/MIRR)、[NPV](/official/Reference/VBA/Financial/NPV)、[Rate](/official/Reference/VBA/Financial/Rate) 函数