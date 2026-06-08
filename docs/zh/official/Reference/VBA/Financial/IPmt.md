---
title: IPmt
parent: Financial Module
permalink: /tB/Modules/Financial/IPmt
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '44ebeb1c-bf19-4c48-b5cf-ceb371917e01'
  PropagateID: '44ebeb1c-bf19-4c48-b5cf-ceb371917e01'
  ReservedCode1: '699884fd-8249-4e2d-b9e8-38c9fccb0eec'
  ReservedCode2: '699884fd-8249-4e2d-b9e8-38c9fccb0eec'
---

# IPmt

返回一个 **Double**，基于定期固定付款和固定利率指定年金指定期间的利息付款。

语法：**IPmt(** *rate*, *per*, *nper*, *pv* [ **,** *fv* [ **,** *type* ] ] **)**

*rate*
: *必需* **Double**，指定每期利率。例如，对于年利率 10% 按月还款的汽车贷款，每期利率为 0.1/12，即 0.0083。

*per*
: *必需* **Double**，指定 1 到 *nper* 范围内的付款期。

*nper*
: *必需* **Double**，指定年金的总付款期数。例如，四年期汽车贷款按月还款共有 4 * 12（即 48）个付款期。

*pv*
: *必需* **Double**，指定一系列未来付款或收入的现值（即当前价值）。例如，借钱买车时，贷款金额就是贷款人将收到的月供的现值。

*fv*
: *可选* **Variant**，指定终值或最终付款后的现金余额。例如，贷款的终值为 $0，因为那是最终付款后的价值。但是，如果要在 18 年内为孩子教育储蓄 $50,000，则 $50,000 是终值。如果省略，则假定为 0。

*type*
: *可选* **Variant**，指定付款到期时间。0 表示期末到期；1 表示期初到期。如果省略，则假定为 0。

年金是在一段时间内进行的一系列固定现金支付。年金可以是贷款（如住房抵押贷款）或投资（如月度储蓄计划）。

*rate* 和 *nper* 参数必须使用相同单位的付款期计算。例如，如果 *rate* 按月计算，*nper* 也必须按月计算。

对于所有参数，支出的现金（如储蓄存款）用负数表示；收入的现金（如股息支票）用正数表示。

### 示例

此示例使用 **IPmt** 函数计算所有付款金额相同时某笔付款中利息占多少。给定每期利率百分比（`APR / 12`）、需要利息部分的付款期（`Period`）、总付款次数（`TotPmts`）、贷款的现值或本金（`PVal`）、贷款的终值（`FVal`）以及指示付款是在付款期初还是期末到期的数字（`PayType`）。

```vb
Dim FVal, Fmt, PVal, APR, TotPmts, PayType, Period, IntPmt, TotInt, Msg
Const ENDPERIOD = 0, BEGINPERIOD = 1    ' When payments are made.
FVal = 0    ' Usually 0 for a loan.
Fmt = "###,###,##0.00"    ' Define money format.
PVal = InputBox("How much do you want to borrow?")
APR = InputBox("What is the annual percentage rate of your loan?")
If APR > 1 Then APR = APR / 100    ' Ensure proper form.
TotPmts = InputBox("How many monthly payments?")
PayType = MsgBox("Do you make payments at end of the month?", vbYesNo)
If PayType = vbNo Then PayType = BEGINPERIOD Else PayType = ENDPERIOD
For Period = 1 To TotPmts    ' Total all interest.
    IntPmt = IPmt(APR / 12, Period, TotPmts, -PVal, FVal, PayType)
    TotInt = TotInt + IntPmt
Next Period
Msg = "You'll pay a total of " & Format(TotInt, Fmt)
Msg = Msg & " in interest for this loan."
MsgBox Msg    ' Display results.
```

### 另请参阅

- [Pmt](/official/Reference/VBA/Financial/Pmt)、[PPmt](/official/Reference/VBA/Financial/PPmt)、[Rate](/official/Reference/VBA/Financial/Rate) 函数