---
title: Day
parent: DateTime Module
permalink: /tB/Modules/DateTime/Day
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3c73938e-cd35-45bb-9faf-32744f1a466a'
  PropagateID: '3c73938e-cd35-45bb-9faf-32744f1a466a'
  ReservedCode1: '3754566d-4834-4708-900c-b547d7d881a2'
  ReservedCode2: '3754566d-4834-4708-900c-b547d7d881a2'
---

# Day

返回一个 **Variant** (**Integer**)，指定 1 到 31 之间（含）的整数，表示月份中的日。

语法：**Day** ( *date* )

*date*
: *必需* 任何可以表示日期的 **Variant**、数值表达式、字符串表达式或其组合。如果 *date* 包含 **Null**，则返回 **Null**。

::: info
如果 [**Calendar**](/official/Reference/VBA/DateTime/Calendar) 属性设置为公历，则返回的整数表示公历月份中的日。如果日历为回历，则返回的整数表示回历月份中的日。
:::

### 示例

此示例使用 **Day** 函数从指定日期获取月份中的日。

```vb
Dim MyDate, MyDay
MyDate = #February 12, 1969#    ' Assign a date.
MyDay = Day(MyDate)    ' MyDay contains 12.
```

### 另请参阅

- [Month](/official/Reference/VBA/DateTime/Month)、[Year](/official/Reference/VBA/DateTime/Year)、[DatePart](/official/Reference/VBA/DateTime/DatePart) 函数