---
title: DatePart
parent: DateTime Module
permalink: /tB/Modules/DateTime/DatePart
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8f9fc847-7117-43e9-a59c-2703cc3620fc'
  PropagateID: '8f9fc847-7117-43e9-a59c-2703cc3620fc'
  ReservedCode1: 'd3a977de-99d1-417f-92c1-7618aefdc5e3'
  ReservedCode2: 'd3a977de-99d1-417f-92c1-7618aefdc5e3'
---

# DatePart

返回一个 **Variant** (**Integer**)，包含给定日期的指定部分。

语法：**DatePart** ( *interval*, *date* [, *firstdayofweek* [, *firstweekofyear* ]] )

*interval*
: *必需* 字符串表达式，表示要返回的时间间隔。参见[间隔设置](#interval-settings)。

*date*
: *必需* 要计算的 **Variant** (**Date**) 值。

*firstdayofweek*
: *可选* 一个 [**VbDayOfWeek**](#firstdayofweek-settings) 常量，指定一周的第一天。默认为 **vbSunday**。

*firstweekofyear*
: *可选* 一个 [**VbFirstWeekOfYear**](#firstweekofyear-settings) 常量，指定一年的第一周。默认为 **vbFirstJan1**。

### 间隔设置

| 设置 | 描述 |
|------|------|
| **yyyy** | 年 |
| **q** | 季度 |
| **m** | 月 |
| **y** | 一年中的天数 |
| **d** | 日 |
| **w** | 星期几 |
| **ww** | 周 |
| **h** | 小时 |
| **n** | 分钟 |
| **s** | 秒 |

### firstdayofweek 设置

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbUseSystem** | 0 | NLS API 设置。 |
| **vbSunday** | 1 | 星期日（默认）。 |
| **vbMonday** | 2 | 星期一。 |
| **vbTuesday** | 3 | 星期二。 |
| **vbWednesday** | 4 | 星期三。 |
| **vbThursday** | 5 | 星期四。 |
| **vbFriday** | 6 | 星期五。 |
| **vbSaturday** | 7 | 星期六。 |

### firstweekofyear 设置

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbUseSystem** | 0 | NLS API 设置。 |
| **vbFirstJan1** | 1 | 包含 1 月 1 日的周（默认）。 |
| **vbFirstFourDays** | 2 | 新年中至少有四天的第一周。 |
| **vbFirstFullWeek** | 3 | 一年的第一个完整周。 |

*firstdayofweek* 参数影响使用 "w" 和 "ww" 间隔符号的计算。

如果 *date* 是日期字面量，指定的年份成为该日期的永久部分。如果 *date* 用双引号括起且省略了年份，则每次计算表达式时都会插入当前年份。

如果 [**Calendar**](/official/Reference/VBA/DateTime/Calendar) 属性设置为公历，则提供的日期必须为公历。如果日历为回历，则提供的日期必须为回历。返回的日期部分以当前日历的时间段单位表示。

### 示例

此示例取一个日期，并使用 **DatePart** 函数显示其所在的季度。

```vb
Dim TheDate As Date
TheDate = InputBox("Enter a date:")
MsgBox "Quarter: " & DatePart("q", TheDate)
```

### 另请参阅

- [DateAdd](/official/Reference/VBA/DateTime/DateAdd)、[DateDiff](/official/Reference/VBA/DateTime/DateDiff) 函数