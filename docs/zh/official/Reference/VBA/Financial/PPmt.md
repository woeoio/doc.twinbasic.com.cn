---
title: PPmt
parent: Financial Module
permalink: /tB/Modules/Financial/PPmt
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '74af1737-7388-40df-8b68-bb95ad9a2ee6'
  PropagateID: '74af1737-7388-40df-8b68-bb95ad9a2ee6'
  ReservedCode1: 'f83188a5-0e89-4125-84af-28b36a084482'
  ReservedCode2: 'f83188a5-0e89-4125-84af-28b36a084482'
---

# PPmt

返回一个**Double**值，指定基于定期固定付款和固定利率的年金在指定期间的本金付款额。

语法：**PPmt(** *rate*, *per*, *nper*, *pv* [ **,** *fv* [ **,** *type* ] ] **)**

*rate*
: *必需* **Double**，指定每期利率。例如，对于年利率(APR)为10%且按月还款的汽车贷款，每期利率为0.1/12，即0.0083。

*per*
: *必需* **Integer**，指定付款期数，范围为1到*nper*。

*nper*
: *必需* **Integer**，指定年金的总付款期数。例如，四年期汽车贷款的按月付款总期数为4 * 12（即48）期。

*pv*
: *必需* **Double**，指定一系列未来付款或收入的现值。例如，贷款买车时，贷款金额就是贷款人未来每月车贷还款的现值。

*fv*
: *可选* **Variant**，指定最终付款后的未来值或现金余额。例如，贷款的未来值为$0，因为这是最终付款后的价值。但如果要在18年内为孩子的教育储蓄$50,000，则$50,000就是未来值。如果省略，则默认为0。

*type*
: *可选* **Variant**，指定付款到期时间。0表示期末付款；1表示期初付款。如果省略，则默认为0。

年金是在一段时间内进行的一系列固定现金支付。年金可以是贷款（如住房抵押贷款）或投资（如月度储蓄计划）。

*rate*和*nper*参数必须使用相同单位的付款期来计算。例如，如果*rate*按月计算，*nper*也必须按月计算。

对于所有参数，支出的现金（如储蓄存款）用负数表示；收入的现金（如股息支票）用正数表示。

### 示例

本示例使用**PPmt**函数计算当所有付款金额相等时，特定期次的付款中本金部分是多少。提供的参数包括：每期利率百分比(`APR / 12`)、需要计算本金部分的付款期次(`Period`)、总付款期数(`TotPmts`)、贷款现值或本金(`PVal`)、贷款未来值(`FVal`)以及指示付款是在期初还是期末到期的数字(`PayType`)。

```vb
Dim NL, TB, Fmt, FVal, PVal, APR, TotPmts, PayType, Payment, Msg, MakeChart, Period, P, I
Const ENDPERIOD = 0, BEGINPERIOD = 1    ' When payments are made.
NL = Chr(13) & Chr(10)    ' Define new line.
TB = Chr(9)    ' Define tab.
Fmt = "###,###,##0.00"    ' Define money format.
FVal = 0    ' Usually 0 for a loan.
PVal = InputBox("How much do you want to borrow?")
APR = InputBox("What is the annual percentage rate of your loan?")
If APR > 1 Then APR = APR / 100    ' Ensure proper form.
TotPmts = InputBox("How many monthly payments do you have to make?")
PayType = MsgBox("Do you make payments at the end of month?", vbYesNo)
If PayType = vbNo Then PayType = BEGINPERIOD Else PayType = ENDPERIOD
Payment = Abs(-Pmt(APR / 12, TotPmts, PVal, FVal, PayType))
Msg = "Your monthly payment is " & Format(Payment, Fmt) & ". "
Msg = Msg & "Would you like a breakdown of your principal and "
Msg = Msg & "interest per period?"
MakeChart = MsgBox(Msg, vbYesNo)    ' See if chart is desired.
If MakeChart <> vbNo Then
    If TotPmts > 12 Then MsgBox "Only first year will be shown."
    Msg = "Month  Payment  Principal  Interest" & NL
    For Period = 1 To TotPmts
        If Period > 12 Then Exit For    ' Show only first 12.
        P = PPmt(APR / 12, Period, TotPmts, -PVal, FVal, PayType)
        P = (Int((P + .005) * 100) / 100)    ' Round principal.
        I = Payment - P
        I = (Int((I + .005) * 100) / 100)    ' Round interest.
        Msg = Msg & Period & TB & Format(Payment, Fmt)
        Msg = Msg & TB & Format(P, Fmt) & TB & Format(I, Fmt) & NL
    Next Period
    MsgBox Msg    ' Display amortization table.
End If
```

### 另请参阅

- [IPmt](/official/Reference/VBA/Financial/IPmt)、[Pmt](/official/Reference/VBA/Financial/Pmt)、[Rate](/official/Reference/VBA/Financial/Rate)函数