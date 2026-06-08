---
title: CVDate
parent: Conversion Module
permalink: /tB/Modules/Conversion/CVDate
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ccb20409-c180-4fd3-b8e5-4a0efa479d7b'
  PropagateID: 'ccb20409-c180-4fd3-b8e5-4a0efa479d7b'
  ReservedCode1: 'de50625b-4ae3-43ac-af58-4ef1d311382d'
  ReservedCode2: 'de50625b-4ae3-43ac-af58-4ef1d311382d'
---

# CVDate

将有效的日期和时间表达式转换为子类型为 **Date** 的 **Variant**。

语法：**CVDate(** *expression* **)**

*expression*
: *必需* 任何可以转换为日期的表达式——日期字面量、日期/时间字符串，或在可接受日期范围内的数字。

返回类型为 **Variant** (**Date**)。如果 *expression* 无法转换为日期，将发生错误。

提供 **CVDate** 是为了与先前版本的 Visual Basic 兼容。**CVDate** 的语法与 [**CDate**](/official/Reference/VBA/Conversion/CDate) 相同；但是，**CVDate** 返回的是子类型为 **Date** 的 **Variant**，而非实际的 **Date** 类型。由于 **Date** 现在已是内部类型，新代码不再需要 **CVDate**。通过使用 [**CDate**](/official/Reference/VBA/Conversion/CDate) 将表达式转换为 **Date** 然后赋值给 **Variant**，可以达到相同效果。

### 示例

```vb
Dim dateString As String
dateString = "February 28, 1998"
MsgBox "Date value of " & dateString & " is " & CVDate(dateString)
```

### 另请参阅

- [CDate](/official/Reference/VBA/Conversion/CDate)、[CVar](/official/Reference/VBA/Conversion/CVar)、[CVErr](/official/Reference/VBA/Conversion/CVErr) 函数