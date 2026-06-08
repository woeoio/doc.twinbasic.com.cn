---
title: Month
parent: DateTime Module
permalink: /tB/Modules/DateTime/Month
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7552ff80-caec-4eca-9473-4300952b9ba1'
  PropagateID: '7552ff80-caec-4eca-9473-4300952b9ba1'
  ReservedCode1: 'e155435f-861d-4672-89c1-4bda90438f5a'
  ReservedCode2: 'e155435f-861d-4672-89c1-4bda90438f5a'
---

# Month

返回一个 **Variant** (**Integer**)，指定一个 1 到 12 之间的整数，表示一年中的月份。

语法：**Month** ( *date* )

*date*
: *必需* 任何可以表示日期的 **Variant**、数值表达式、字符串表达式或其任意组合。如果 *date* 包含 **Null**，则返回 **Null**。

::: info
如果 [**Calendar**](/official/Reference/VBA/DateTime/Calendar) 属性设置为公历，则返回的整数表示公历月份。如果日历为回历，则返回的整数表示回历月份。对于回历日期，参数可以是表示 1/1/100（公历 718 年 8 月 2 日）至 4/3/9666（公历 9999 年 12 月 31 日）之间日期和/或时间的任何数值表达式。
:::

### 示例

此示例使用 **Month** 函数从指定日期中获取月份。

```vb
Dim MyDate, MyMonth
MyDate = #February 12, 1969#    ' Assign a date.
MyMonth = Month(MyDate)    ' MyMonth contains 2.
```

### 另请参阅

- [Day](/official/Reference/VBA/DateTime/Day)、[Year](/official/Reference/VBA/DateTime/Year)、[DatePart](/official/Reference/VBA/DateTime/DatePart) 函数