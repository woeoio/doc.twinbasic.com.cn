---
title: FV
parent: Financial Module
permalink: /tB/Modules/Financial/FV
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1145d811-c8b7-4f71-ae02-1de8592ec6df'
  PropagateID: '1145d811-c8b7-4f71-ae02-1de8592ec6df'
  ReservedCode1: 'c443463d-ee43-47fe-bca1-3c3264c475d1'
  ReservedCode2: 'c443463d-ee43-47fe-bca1-3c3264c475d1'
---

# FV

返回一个 **Double**，基于定期固定付款和固定利率指定年金的终值。

语法：**FV(** *rate*, *nper*, *pmt* [ **,** *pv* [ **,** *type* ] ] **)**

*rate*
: *必需* **Double**，指定每期利率。例如，对于年利率 10% 按月还款的汽车贷款，每期利率为 0.1/12，即 0.0083。

*nper*
: *必需* **Integer**，指定年金的总付款期数。例如，四年期汽车贷款按月还款共有 4 * 12（即 48）个付款期。

*pmt*
: *必需* **Double**，指定每期付款额。付款通常包含本金和利息，在年金期限内不变。

*pv*
: *可选* **Variant**，指定一系列未来付款的现值（或一次付清金额）。例如，借钱买车时，贷款金额就是贷款人将收到的月供的现值。如果省略，则假定为 0。

*type*
: *可选* **Variant**，指定付款到期时间。0 表示期末到期；1 表示期初到期。如果省略，则假定为 0。

年金是在一段时间内进行的一系列固定现金支付。年金可以是贷款（如住房抵押贷款）或投资（如月度储蓄计划）。

*rate* 和 *nper* 参数必须使用相同单位的付款期计算。例如，如果 *rate* 按月计算，*nper* 也必须按月计算。

对于所有参数，支出的现金（如储蓄存款）用负数表示；收入的现金（如股息支票）用正数表示。

### 示例

此示例使用 **FV** 函数返回投资的终值，给定每期应计百分比利率（`APR / 12`）、总付款次数（`TotPmts`）、付款额（`Payment`）、投资的当前价值（`PVal`）以及指示付款是在付款期初还是期末支付的数字（`PayType`）。注意，因为 `Payment` 代表支出的现金，所以是负数。

```vb
Dim Fmt, Payment, APR, TotPmts, PayType, PVal, FVal
Const ENDPERIOD = 0, BEGINPERIOD = 1    ' When payments are made.
Fmt = "###,###,##0.00"    ' Define money format.
Payment = InputBox("How much do you plan to save each month?")
APR = InputBox("Enter the expected interest annual percentage rate.")
If APR > 1 Then APR = APR / 100    ' Ensure proper form.
TotPmts = InputBox("For how many months do you expect to save?")
PayType = MsgBox("Do you make payments at the end of month?", vbYesNo)
If PayType = vbNo Then PayType = BEGINPERIOD Else PayType = ENDPERIOD
PVal = InputBox("How much is in this savings account now?")
FVal = FV(APR / 12, TotPmts, -Payment, -PVal, PayType)
MsgBox "Your savings will be worth " & Format(FVal, Fmt) & "."
```

### 另请参阅

- [PV](/official/Reference/VBA/Financial/PV)、[NPer](/official/Reference/VBA/Financial/NPer)、[Pmt](/official/Reference/VBA/Financial/Pmt)、[Rate](/official/Reference/VBA/Financial/Rate) 函数