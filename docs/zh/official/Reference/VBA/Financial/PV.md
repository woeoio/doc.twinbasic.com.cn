---
title: PV
parent: Financial Module
permalink: /tB/Modules/Financial/PV
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '66c57eef-c5e0-4b0e-8a11-b41e9c7bb5ae'
  PropagateID: '66c57eef-c5e0-4b0e-8a11-b41e9c7bb5ae'
  ReservedCode1: '999d6b3d-359c-4221-adf9-2ba1f5e32cf8'
  ReservedCode2: '999d6b3d-359c-4221-adf9-2ba1f5e32cf8'
---

# PV

返回一个**Double**值，指定基于未来定期固定付款和固定利率的年金现值。

语法：**PV(** *rate*, *nper*, *pmt* [ **,** *fv* [ **,** *type* ] ] **)**

*rate*
: *必需* **Double**，指定每期利率。例如，对于年利率(APR)为10%且按月还款的汽车贷款，每期利率为0.1/12，即0.0083。

*nper*
: *必需* **Integer**，指定年金的总付款期数。例如，四年期汽车贷款的按月付款总期数为4 * 12（即48）期。

*pmt*
: *必需* **Double**，指定每期应付金额。付款通常包含在年金期限内不变的本金和利息。

*fv*
: *可选* **Variant**，指定最终付款后的未来值或现金余额。例如，贷款的未来值为$0，因为这是最终付款后的价值。但如果要在18年内为孩子的教育储蓄$50,000，则$50,000就是未来值。如果省略，则默认为0。

*type*
: *可选* **Variant**，指定付款到期时间。0表示期末付款；1表示期初付款。如果省略，则默认为0。

年金是在一段时间内进行的一系列固定现金支付。年金可以是贷款（如住房抵押贷款）或投资（如月度储蓄计划）。

*rate*和*nper*参数必须使用相同单位的付款期来计算。例如，如果*rate*按月计算，*nper*也必须按月计算。

对于所有参数，支出的现金（如储蓄存款）用负数表示；收入的现金（如股息支票）用正数表示。

### 示例

本示例中，**PV**函数返回一个$1,000,000年金的现值，该年金将在未来20年内每年提供$50,000。提供的参数包括：预期年利率(`APR`)、总付款期数(`TotPmts`)、每期付款金额(`YrIncome`)、投资的总未来值(`FVal`)以及指示每期付款是在期初还是期末到期的数字(`PayType`)。注意`YrIncome`为负数，因为它代表每年从年金中支出的现金。

```vb
Dim Fmt, APR, TotPmts, YrIncome, FVal, PayType, PVal
Const ENDPERIOD = 0, BEGINPERIOD = 1    ' When payments are made.
Fmt = "###,##0.00"    ' Define money format.
APR = .0825    ' Annual percentage rate.
TotPmts = 20    ' Total number of payments.
YrIncome = 50000    ' Yearly income.
FVal = 1000000    ' Future value.
PayType = BEGINPERIOD    ' Payment at beginning of month.
PVal = PV(APR, TotPmts, -YrIncome, FVal, PayType)
MsgBox "The present value is " & Format(PVal, Fmt) & "."
```

### 另请参阅

- [FV](/official/Reference/VBA/Financial/FV)、[NPer](/official/Reference/VBA/Financial/NPer)、[NPV](/official/Reference/VBA/Financial/NPV)、[Pmt](/official/Reference/VBA/Financial/Pmt)、[Rate](/official/Reference/VBA/Financial/Rate)函数