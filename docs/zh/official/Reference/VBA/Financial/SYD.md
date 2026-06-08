---
title: SYD
parent: Financial Module
permalink: /tB/Modules/Financial/SYD
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '60a05f6a-6a32-4576-8d67-85481bd5149d'
  PropagateID: '60a05f6a-6a32-4576-8d67-85481bd5149d'
  ReservedCode1: '0a0f5b02-6d0b-424d-a32d-6802f343004e'
  ReservedCode2: '0a0f5b02-6d0b-424d-a32d-6802f343004e'
---

# SYD

返回一个**Double**值，指定资产在指定期间的年数总和折旧额。

语法：**SYD(** *cost*, *salvage*, *life*, *period* **)**

*cost*
: *必需* **Double**，指定资产的初始成本。

*salvage*
: *必需* **Double**，指定资产在使用寿命结束时的价值。

*life*
: *必需* **Double**，指定资产使用寿命的长度。

*period*
: *必需* **Double**，指定计算资产折旧的期间。

*life*和*period*参数必须以相同的单位表示。例如，如果*life*以月为单位，*period*也必须以月为单位。所有参数必须为正数。

### 示例

本示例使用**SYD**函数返回资产在指定期间的折旧额，提供的参数包括：资产的初始成本(`InitCost`)、资产使用寿命结束时的残值(`SalvageVal`)以及资产的总寿命年数(`LifeTime`)。计算折旧的期间年数为`PDepr`。

```vb
Dim Fmt, InitCost, SalvageVal, MonthLife, LifeTime, DepYear, PDepr
Const YEARMONTHS = 12    ' Number of months in a year.
Fmt = "###,##0.00"    ' Define money format.
InitCost = InputBox("What's the initial cost of the asset?")
SalvageVal = InputBox("What's the asset's value at the end of its life?")
MonthLife = InputBox("What's the asset's useful life in months?")
Do While MonthLife < YEARMONTHS    ' Ensure period is >= 1 year.
    MsgBox "Asset life must be a year or more."
    MonthLife = InputBox("What's the asset's useful life in months?")
Loop
LifeTime = MonthLife / YEARMONTHS    ' Convert months to years.
If LifeTime <> Int(MonthLife / YEARMONTHS) Then
    LifeTime = Int(LifeTime + 1)    ' Round up to nearest year.
End If
DepYear = CInt(InputBox("For which year do you want depreciation?"))
Do While DepYear < 1 Or DepYear > LifeTime
    MsgBox "You must enter at least 1 but not more than " & LifeTime
    DepYear = CInt(InputBox("For what year do you want depreciation?"))
Loop
PDepr = SYD(InitCost, SalvageVal, LifeTime, DepYear)
MsgBox "The depreciation for year " & DepYear & " is " & Format(PDepr, Fmt) & "."
```

### 另请参阅

- [DDB](/official/Reference/VBA/Financial/DDB)、[SLN](/official/Reference/VBA/Financial/SLN)函数