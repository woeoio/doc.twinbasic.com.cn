---
title: NPer
parent: Financial Module
permalink: /tB/Modules/Financial/NPer
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ee71defb-205f-4b02-87a1-c22f04e4ee23'
  PropagateID: 'ee71defb-205f-4b02-87a1-c22f04e4ee23'
  ReservedCode1: '72626639-e826-4c5b-a793-48c877df21b4'
  ReservedCode2: '72626639-e826-4c5b-a793-48c877df21b4'
---

# NPer

返回一个**Double**值，指定基于定期固定付款和固定利率的年金期数。

语法：**NPer(** *rate*, *pmt*, *pv* [ **,** *fv* [ **,** *type* ] ] **)**

*rate*
: *必需* **Double**，指定每期利率。例如，对于年利率(APR)为10%且按月还款的汽车贷款，每期利率为0.1/12，即0.0083。

*pmt*
: *必需* **Double**，指定每期应付金额。付款通常包含在年金期限内不变的本金和利息。

*pv*
: *必需* **Double**，指定一系列未来付款或收入的现值。例如，贷款买车时，贷款金额就是贷款人未来每月车贷还款的现值。

*fv*
: *可选* **Variant**，指定最终付款后的未来值或现金余额。例如，贷款的未来值为$0，因为这是最终付款后的价值。但如果要在18年内为孩子的教育储蓄$50,000，则$50,000就是未来值。如果省略，则默认为0。

*type*
: *可选* **Variant**，指定付款到期时间。0表示期末付款；1表示期初付款。如果省略，则默认为0。

年金是在一段时间内进行的一系列固定现金支付。年金可以是贷款（如住房抵押贷款）或投资（如月度储蓄计划）。

对于所有参数，支出的现金（如储蓄存款）用负数表示；收入的现金（如股息支票）用正数表示。

### 示例

本示例使用**NPer**函数返回偿还值为`PVal`的贷款所需的付款期数。同时提供了每期利率百分比(`APR / 12`)、付款金额(`Payment`)、贷款未来值(`FVal`)以及指示付款是在期初还是期末到期的数字(`PayType`)。

```vb
Dim FVal, PVal, APR, Payment, PayType, TotPmts
Const ENDPERIOD = 0, BEGINPERIOD = 1    ' When payments are made.
FVal = 0    ' Usually 0 for a loan.
PVal = InputBox("How much do you want to borrow?")
APR = InputBox("What is the annual percentage rate of your loan?")
If APR > 1 Then APR = APR / 100    ' Ensure proper form.
Payment = InputBox("How much do you want to pay each month?")
PayType = MsgBox("Do you make payments at the end of month?", vbYesNo)
If PayType = vbNo Then PayType = BEGINPERIOD Else PayType = ENDPERIOD
TotPmts = NPer(APR / 12, -Payment, PVal, FVal, PayType)
If Int(TotPmts) <> TotPmts Then TotPmts = Int(TotPmts) + 1
MsgBox "It will take you " & TotPmts & " months to pay off your loan."
```

### 另请参阅

- [FV](/official/Reference/VBA/Financial/FV)、[PV](/official/Reference/VBA/Financial/PV)、[Pmt](/official/Reference/VBA/Financial/Pmt)、[Rate](/official/Reference/VBA/Financial/Rate)函数