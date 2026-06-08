---
title: DDB
parent: Financial Module
permalink: /tB/Modules/Financial/DDB
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6773f4ef-7d15-42f6-8c45-dd95107bc748'
  PropagateID: '6773f4ef-7d15-42f6-8c45-dd95107bc748'
  ReservedCode1: 'ab304efd-3fc5-4faa-a378-b84f562f193b'
  ReservedCode2: 'ab304efd-3fc5-4faa-a378-b84f562f193b'
---

# DDB

返回一个 **Double**，使用双倍余额递减法或其他指定方法指定资产在特定期间的折旧。

语法：**DDB(** *cost*, *salvage*, *life*, *period* [ **,** *factor* ] **)**

*cost*
: *必需* **Double**，指定资产的初始成本。

*salvage*
: *必需* **Double**，指定资产在使用寿命结束时的价值。

*life*
: *必需* **Double**，指定资产使用寿命的长度。

*period*
: *必需* **Double**，指定计算资产折旧的期间。

*factor*
: *可选* **Variant**，指定余额递减率。如果省略，则假定为 2（双倍递减法）。

双倍余额递减法以加速率计算折旧。折旧在第一期间最高，在后续期间递减。

*life* 和 *period* 参数必须以相同单位表示。例如，如果 *life* 以月为单位，*period* 也必须以月为单位。所有参数必须为正数。

**DDB** 函数使用以下公式计算给定期间的折旧：

折旧 / *period* = ((*cost* - *salvage*) * *factor*) / *life*

### 示例

此示例使用 **DDB** 函数返回资产在指定期间的折旧，给定初始成本（`InitCost`）、资产使用寿命结束时的残值（`SalvageVal`）、资产的总寿命年数（`LifeTime`）以及计算折旧的期间年数（`Depr`）。

```vb
Dim Fmt, InitCost, SalvageVal, MonthLife, LifeTime, DepYear, Depr
Const YRMOS = 12    ' Number of months in a year.
Fmt = "###,##0.00"
InitCost = InputBox("What's the initial cost of the asset?")
SalvageVal = InputBox("Enter the asset's value at end of its life.")
MonthLife = InputBox("What's the asset's useful life in months?")
Do While MonthLife < YRMOS    ' Ensure period is >= 1 year.
    MsgBox "Asset life must be a year or more."
    MonthLife = InputBox("What's the asset's useful life in months?")
Loop
LifeTime = MonthLife / YRMOS    ' Convert months to years.
If LifeTime <> Int(MonthLife / YRMOS) Then
    LifeTime = Int(LifeTime + 1)    ' Round up to nearest year.
End If
DepYear = CInt(InputBox("Enter year for depreciation calculation."))
Do While DepYear < 1 Or DepYear > LifeTime
    MsgBox "You must enter at least 1 but not more than " & LifeTime
    DepYear = InputBox("Enter year for depreciation calculation.")
Loop
Depr = DDB(InitCost, SalvageVal, LifeTime, DepYear)
MsgBox "The depreciation for year " & DepYear & " is " & _
Format(Depr, Fmt) & "."
```

### 另请参阅

- [SLN](/official/Reference/VBA/Financial/SLN)、[SYD](/official/Reference/VBA/Financial/SYD) 函数