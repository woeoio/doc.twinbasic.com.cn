---
title: Rate
parent: Financial Module
permalink: /tB/Modules/Financial/Rate
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '97da36c0-ca1b-473f-bfa8-80656b4e344f'
  PropagateID: '97da36c0-ca1b-473f-bfa8-80656b4e344f'
  ReservedCode1: '7817ad5c-b09d-42ae-b0c6-0347b50590f4'
  ReservedCode2: '7817ad5c-b09d-42ae-b0c6-0347b50590f4'
---

# Rate

返回一个**Double**值，指定年金每期的利率。

语法：**Rate(** *nper*, *pmt*, *pv* [ **,** *fv* [ **,** *type* [ **,** *guess* ] ] ] **)**

*nper*
: *必需* **Double**，指定年金的总付款期数。例如，四年期汽车贷款的按月付款总期数为4 * 12（即48）期。

*pmt*
: *必需* **Double**，指定每期应付金额。付款通常包含在年金期限内不变的本金和利息。

*pv*
: *必需* **Double**，指定一系列未来付款或收入的现值。例如，贷款买车时，贷款金额就是贷款人未来每月车贷还款的现值。

*fv*
: *可选* **Variant**，指定最终付款后的未来值或现金余额。例如，贷款的未来值为$0，因为这是最终付款后的价值。但如果要在18年内为孩子的教育储蓄$50,000，则$50,000就是未来值。如果省略，则默认为0。

*type*
: *可选* **Variant**，指定付款到期时间。0表示期末付款；1表示期初付款。如果省略，则默认为0。

*guess*
: *可选* **Variant**，指定**Rate**返回值的估计值。如果省略，*guess*为0.1（10%）。

年金是在一段时间内进行的一系列固定现金支付。年金可以是贷款（如住房抵押贷款）或投资（如月度储蓄计划）。

对于所有参数，支出的现金（如储蓄存款）用负数表示；收入的现金（如股息支票）用正数表示。

**Rate**通过迭代计算。从*guess*的值开始，**Rate**循环计算直到结果精确到0.00001%以内。如果**Rate**在20次尝试后仍未找到结果，则计算失败。如果默认的10%失败，请尝试为*guess*提供不同的值。

### 示例

本示例使用**Rate**函数计算贷款利率，提供的参数包括：总付款期数(`TotPmts`)、贷款付款金额(`Payment`)、贷款现值或本金(`PVal`)、贷款未来值(`FVal`)、指示付款是在期初还是期末到期的数字(`PayType`)以及预期利率的近似值(`Guess`)。

```vb
Dim Fmt, FVal, Guess, PVal, Payment, TotPmts, PayType, APR
Const ENDPERIOD = 0, BEGINPERIOD = 1    ' When payments are made.
Fmt = "##0.00"    ' Define percentage format.
FVal = 0    ' Usually 0 for a loan.
Guess = .1    ' Guess of 10 percent.
PVal = InputBox("How much did you borrow?")
Payment = InputBox("What's your monthly payment?")
TotPmts = InputBox("How many monthly payments do you have to make?")
PayType = MsgBox("Do you make payments at the end of the month?", _
vbYesNo)
If PayType = vbNo Then PayType = BEGINPERIOD Else PayType = ENDPERIOD
APR = (Rate(TotPmts, -Payment, PVal, FVal, PayType, Guess) * 12) * 100
MsgBox "Your interest rate is " & Format(CInt(APR), Fmt) & " percent."
```

### 另请参阅

- [FV](/official/Reference/VBA/Financial/FV)、[IRR](/official/Reference/VBA/Financial/IRR)、[NPer](/official/Reference/VBA/Financial/NPer)、[Pmt](/official/Reference/VBA/Financial/Pmt)、[PV](/official/Reference/VBA/Financial/PV)函数