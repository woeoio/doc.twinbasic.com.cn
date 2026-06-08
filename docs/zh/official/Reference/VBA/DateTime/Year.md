---
title: Year
parent: DateTime Module
permalink: /tB/Modules/DateTime/Year
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3338510e-ca94-4872-bd45-83ddafe7fb5a'
  PropagateID: '3338510e-ca94-4872-bd45-83ddafe7fb5a'
  ReservedCode1: '8b5ffe5f-40e4-4823-8741-6687cfe9b1fc'
  ReservedCode2: '8b5ffe5f-40e4-4823-8741-6687cfe9b1fc'
---

# Year

返回一个 **Variant** (**Integer**)，包含表示年份的整数。

语法：**Year** ( *date* )

*date*
: *必需* 任何可以表示日期的 **Variant**、数值表达式、字符串表达式或其任意组合。如果 *date* 包含 **Null**，则返回 **Null**。

::: info
如果 [**Calendar**](/official/Reference/VBA/DateTime/Calendar) 属性设置为公历，则返回的整数表示日期参数的公历年份。如果日历为回历，则返回的整数表示日期参数的回历年份。
:::

### 示例

此示例使用 **Year** 函数从指定日期中获取年份。

```vb
Dim MyDate, MyYear
MyDate = #February 12, 1969#    ' Assign a date.
MyYear = Year(MyDate)    ' MyYear contains 1969.
```

### 另请参阅

- [Day](/official/Reference/VBA/DateTime/Day)、[Month](/official/Reference/VBA/DateTime/Month)、[DatePart](/official/Reference/VBA/DateTime/DatePart) 函数