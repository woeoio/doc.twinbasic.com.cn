---
title: MIRR
parent: Financial Module
permalink: /tB/Modules/Financial/MIRR
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4ac96029-a205-4002-a650-1968d5b5c17c'
  PropagateID: '4ac96029-a205-4002-a650-1968d5b5c17c'
  ReservedCode1: 'a5c347e6-8290-4aca-8e2a-357afd032f66'
  ReservedCode2: 'a5c347e6-8290-4aca-8e2a-357afd032f66'
---

# MIRR

返回一个 **Double**，指定一系列定期现金流（付款和收入）的修正内部收益率。

语法：**MIRR(** *values()*, *finance_rate*, *reinvest_rate* **)**

*values()*
: *必需* **Double** 数组，指定现金流值。数组必须包含至少一个负值（付款）和一个正值（收入）。

*finance_rate*
: *必需* **Double**，指定作为融资成本支付的利率。

*reinvest_rate*
: *必需* **Double**，指定从现金再投资收益中获得的利率。

修正内部收益率是付款和收入以不同利率融资时的内部收益率。**MIRR** 函数考虑了投资成本（*finance_rate*）和现金再投资收益的利率（*reinvest_rate*）。

*finance_rate* 和 *reinvest_rate* 参数是以小数表示的百分比。例如，12% 表示为 0.12。

**MIRR** 函数使用数组中值的顺序来解释付款和收入的顺序。付款和收入值必须按正确顺序排列。

### 示例

此示例使用 **MIRR** 函数返回包含在数组 `Values()` 中的一系列现金流的修正内部收益率。`LoanAPR` 代表融资利率，`InvAPR` 代表再投资收益利率。

```vb
Dim LoanAPR, InvAPR, Fmt, RetRate, Msg
Static Values(5) As Double    ' Set up array.
LoanAPR = .1    ' Loan rate.
InvAPR = .12    ' Reinvestment rate.
Fmt = "#0.00"    ' Define money format.
Values(0) = -70000    ' Business start-up costs.
' Positive cash flows reflecting income for four successive years.
Values(1) = 22000 : Values(2) = 25000
Values(3) = 28000 : Values(4) = 31000
RetRate = MIRR(Values(), LoanAPR, InvAPR)    ' Calculate internal rate.
Msg = "The modified internal rate of return for these five cash flows is"
Msg = Msg & Format(Abs(RetRate) * 100, Fmt) & "%."
MsgBox Msg    ' Display internal return rate.
```

### 另请参阅

- [IRR](/official/Reference/VBA/Financial/IRR)、[NPV](/official/Reference/VBA/Financial/NPV)、[Rate](/official/Reference/VBA/Financial/Rate) 函数