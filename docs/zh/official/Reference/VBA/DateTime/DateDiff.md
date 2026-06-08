---
title: DateDiff
parent: DateTime Module
permalink: /tB/Modules/DateTime/DateDiff
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e69910d5-d564-45bc-b79d-2977236f3880'
  PropagateID: 'e69910d5-d564-45bc-b79d-2977236f3880'
  ReservedCode1: '8b200452-2d6f-46f0-bf4f-2979e691a7a1'
  ReservedCode2: '8b200452-2d6f-46f0-bf4f-2979e691a7a1'
---

# DateDiff

返回一个 **Variant** (**Long**)，指定两个指定日期之间的时间间隔数。

语法：**DateDiff** ( *interval*, *date1*, *date2* [, *firstdayofweek* [, *firstweekofyear* ]] )

*interval*
: *必需* 字符串表达式，表示用于计算 *date1* 和 *date2* 之间差值的时间间隔。参见[间隔设置](#interval-settings)。

*date1*, *date2*
: *必需* **Variant** (**Date**)。用于计算的两个日期。

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

要计算 *date1* 和 *date2* 之间的天数，请使用一年中的天数 ("y") 或日 ("d")。当 *interval* 为星期几 ("w") 时，**DateDiff** 返回两个日期之间的周数。如果 *date1* 是星期一，**DateDiff** 计算到 *date2* 之间的星期一数量。它计算 *date2* 但不计算 *date1*。

然而，如果 *interval* 为周 ("ww")，**DateDiff** 返回两个日期之间的日历周数。它计算 *date1* 和 *date2* 之间的星期日数量。如果 *date2* 是星期日，**DateDiff** 会将其计入，但不计算 *date1*，即使 *date1* 也是星期日。

如果 *date1* 引用的时间点晚于 *date2*，函数返回一个负数。*firstdayofweek* 参数影响使用 "w" 和 "ww" 间隔符号的计算。

如果 *date1* 或 *date2* 是日期字面量，指定的年份成为该日期的永久部分。如果 *date1* 或 *date2* 用双引号括起且省略了年份，则每次计算表达式时都会插入当前年份。

当比较 12 月 31 日与紧接着下一年的 1 月 1 日时，**DateDiff** 对于年 ("yyyy") 返回 1，即使只过了一天。

如果 [**Calendar**](/official/Reference/VBA/DateTime/Calendar) 属性设置为公历，则提供的日期必须为公历。如果日历为回历，则提供的日期必须为回历。

### 示例

此示例使用 **DateDiff** 函数显示给定日期与今天之间的天数。

```vb
Dim TheDate As Date
Dim Msg As String
TheDate = InputBox("Enter a date")
Msg = "Days from today: " & DateDiff("d", Now, TheDate)
MsgBox Msg
```

### 另请参阅

- [DateAdd](/official/Reference/VBA/DateTime/DateAdd)、[DatePart](/official/Reference/VBA/DateTime/DatePart) 函数