---
title: SLN
parent: Financial Module
permalink: /tB/Modules/Financial/SLN
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '497713ab-4059-4405-a992-b2636d204143'
  PropagateID: '497713ab-4059-4405-a992-b2636d204143'
  ReservedCode1: 'e94c2989-3db1-4d2e-b598-d464e177be4b'
  ReservedCode2: 'e94c2989-3db1-4d2e-b598-d464e177be4b'
---

# SLN

返回一个**Double**值，指定资产在单个期间的直线折旧额。

语法：**SLN(** *cost*, *salvage*, *life* **)**

*cost*
: *必需* **Double**，指定资产的初始成本。

*salvage*
: *必需* **Double**，指定资产在使用寿命结束时的价值。

*life*
: *必需* **Double**，指定资产使用寿命的长度。

折旧期间必须以与*life*参数相同的单位表示。所有参数必须为正数。

### 示例

本示例使用**SLN**函数返回资产在单个期间的直线折旧额，提供的参数包括：资产的初始成本(`InitCost`)、资产使用寿命结束时的残值(`SalvageVal`)以及资产的总寿命年数(`LifeTime`)。

```vb
Dim Fmt, InitCost, SalvageVal, MonthLife, LifeTime, PDepr
Const YEARMONTHS = 12    ' Number of months in a year.
Fmt = "###,##0.00"    ' Define money format.
InitCost = InputBox("What's the initial cost of the asset?")
SalvageVal = InputBox("What's the asset's value at the end of its useful life?")
MonthLife = InputBox("What's the asset's useful life in months?")
Do While MonthLife < YEARMONTHS    ' Ensure period is >= 1 year.
    MsgBox "Asset life must be a year or more."
    MonthLife = InputBox("What's the asset's useful life in months?")
Loop
LifeTime = MonthLife / YEARMONTHS    ' Convert months to years.
If LifeTime <> Int(MonthLife / YEARMONTHS) Then
    LifeTime = Int(LifeTime + 1)    ' Round up to nearest year.
End If
PDepr = SLN(InitCost, SalvageVal, LifeTime)
MsgBox "The depreciation is " & Format(PDepr, Fmt) & " per year."
```

### 另请参阅

- [DDB](/official/Reference/VBA/Financial/DDB)、[SYD](/official/Reference/VBA/Financial/SYD)函数