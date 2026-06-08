---
title: NPV
parent: Financial Module
permalink: /tB/Modules/Financial/NPV
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e6839571-8bc8-41c2-bcd9-d82cf4b7d046'
  PropagateID: 'e6839571-8bc8-41c2-bcd9-d82cf4b7d046'
  ReservedCode1: 'd37bf2c3-29f8-4476-bbb9-5ee7732ad863'
  ReservedCode2: 'd37bf2c3-29f8-4476-bbb9-5ee7732ad863'
---

# NPV

返回一个**Double**值，指定基于一系列定期现金流（付款和收入）和贴现率的投资净现值。

语法：**NPV(** *rate*, *values()* **)**

*rate*
: *必需* **Double**，指定整个期间内的贴现率，以小数表示。

*values()*
: *必需* **Double**数组，指定现金流值。该数组必须至少包含一个负值（付款）和一个正值（收入）。

投资的净现值是未来一系列付款和收入的当前价值。

**NPV**函数使用数组中值的顺序来解释付款和收入的顺序。付款和收入值必须按正确的顺序排列。

**NPV**投资从第一个现金流值日期的前一期开始，到数组中最后一个现金流值结束。

净现值计算基于未来现金流。如果第一个现金流发生在第一期的期初，则第一个值必须加到**NPV**返回的值中，并且不能包含在*values()*的现金流值中。

**NPV**函数类似于[**PV**](/official/Reference/VBA/Financial/PV)函数（现值），但**PV**函数允许现金流从期末或期初开始。与可变的**NPV**现金流值不同，**PV**现金流在整个投资期间必须是固定的。

### 示例

本示例使用**NPV**函数返回包含在数组`Values()`中的一系列现金流的净现值。`RetRate`表示固定的内部收益率。

```vb
Dim Fmt, Guess, RetRate, NetPVal, Msg
Static Values(5) As Double    ' Set up array.
Fmt = "###,##0.00"    ' Define money format.
Guess = .1    ' Guess starts at 10 percent.
RetRate = .0625    ' Set fixed internal rate.
Values(0) = -70000    ' Business start-up costs.
' Positive cash flows reflecting income for four successive years.
Values(1) = 22000 : Values(2) = 25000
Values(3) = 28000 : Values(4) = 31000
NetPVal = NPV(RetRate, Values())    ' Calculate net present value.
Msg = "The net present value of these cash flows is "
Msg = Msg & Format(NetPVal, Fmt) & "."
MsgBox Msg    ' Display net present value.
```

### 另请参阅

- [IRR](/official/Reference/VBA/Financial/IRR)、[MIRR](/official/Reference/VBA/Financial/MIRR)、[PV](/official/Reference/VBA/Financial/PV)函数