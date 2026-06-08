---
title: "DateTime 模块"
parent: VBA Package
permalink: /tB/Modules/DateTime/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6a1a8f5e-046c-48b0-a847-965563ebe66e'
  PropagateID: '6a1a8f5e-046c-48b0-a847-965563ebe66e'
  ReservedCode1: '2525d24c-b5e0-4e6a-8217-43919321043a'
  ReservedCode2: '2525d24c-b5e0-4e6a-8217-43919321043a'
---

# DateTime 模块

**DateTime** 模块将读取系统时钟、从组件构建 **Date** 值、从字符串解析日期、将日期拆分为组件以及按指定单位向前或向后移动日期的过程组合在一起。一个设置项——[**Calendar**](/official/Reference/VBA/DateTime/Calendar) 属性——即可在整个模块中切换公历和回历。

## 读取系统时钟

[**Now**](/official/Reference/VBA/DateTime/Now) 返回当前系统日期*和*时间，作为一个 **Date** 子类型的 **Variant**；[**Date**](/official/Reference/VBA/DateTime/Date) 仅返回日期部分，[**Time**](/official/Reference/VBA/DateTime/Time) 仅返回时间部分。后两者各有一个带 `$` 后缀的兄弟——**Date$** 和 **Time$**——它们以格式化的 **String** 而非 **Date** 返回相同的值。这四个属性也都是可写的：对它们赋值会更改系统时钟，但受操作系统权限要求限制。

::: info
在 twinBASIC 中，**Date**、**Date$**、**Time** 和 **Time$** 被实现为模块级属性，而非 VBx 中的函数/语句。语法和语义保持不变。
:::

[**Timer**](/official/Reference/VBA/DateTime/Timer) 返回一个 **Single**，给出自午夜以来经过的秒数（含小数精度），是测量运行中经过时间的常用方法。

```vb
Dim Started As Single
Started = Timer
' ... do some work ...
Debug.Print "Elapsed: " & (Timer - Started) & " seconds"
```

## 从组件构建日期和时间

[**DateSerial**](/official/Reference/VBA/DateTime/DateSerial) 从年、月、日参数构建一个 **Date**；[**TimeSerial**](/official/Reference/VBA/DateTime/TimeSerial) 从小时、分钟、秒构建。两者都支持超范围参数的进位——将 13 作为月份会进位到下一年，将 75 作为分钟会进位到下一小时——这使它们非常适合用组件的简单算术来表达相对日期。

```vb
Dim FirstOfNextMonth As Date
FirstOfNextMonth = DateSerial(Year(Now), Month(Now) + 1, 1)
```

[**DateValue**](/official/Reference/VBA/DateTime/DateValue) 以系统短日期格式从字符串解析日期——可识别数字形式和明确的月份名称——并丢弃任何时间部分。[**TimeValue**](/official/Reference/VBA/DateTime/TimeValue) 是时间字符串的相应解析器；它丢弃任何日期部分。对于源自源代码中日期字面量的值，`#...#` 语法通常比任一解析器更合适。

## 提取日期的部分

单组件访问器各自返回 **Date** 的一部分作为 **Integer**：[**Year**](/official/Reference/VBA/DateTime/Year)、[**Month**](/official/Reference/VBA/DateTime/Month)、[**Day**](/official/Reference/VBA/DateTime/Day)、[**Weekday**](/official/Reference/VBA/DateTime/Weekday)、[**Hour**](/official/Reference/VBA/DateTime/Hour)、[**Minute**](/official/Reference/VBA/DateTime/Minute) 和 [**Second**](/official/Reference/VBA/DateTime/Second)。[**DatePart**](/official/Reference/VBA/DateTime/DatePart) 泛化了相同的思路，以字符串间隔代码（`"yyyy"`、`"q"`、`"m"`、`"d"`、...）作为参数来选择要提取的部分——当单位本身是参数时很有用。

```vb
Dim D As Date
D = #2/12/1969#
Debug.Print Year(D)       ' 1969
Debug.Print Month(D)      ' 2
Debug.Print Day(D)        ' 12
Debug.Print Weekday(D)    ' 4 — Wednesday
```

## 日期算术

[**DateAdd**](/official/Reference/VBA/DateTime/DateAdd) 将日期按选定的间隔数偏移——年、季度、月、周、日、小时、分钟或秒——考虑日历不规则性（月份长度不同、闰年），并在字面日值无效时钳制到目标月份的最后一天。[**DateDiff**](/official/Reference/VBA/DateTime/DateDiff) 执行逆操作：返回两个日期之间的完整间隔数。两者都使用与 **DatePart** 相同的字符串间隔代码。

```vb
Debug.Print DateAdd("m", 1, #1/31/2026#)          ' 2/28/2026 — clamped to last day of February
Debug.Print DateDiff("d", #1/1/2026#, #5/9/2026#) ' 128
```

## 日历选择

[**Calendar**](/official/Reference/VBA/DateTime/Calendar) 属性选择模块其余部分使用的日历——**vbCalGreg**（公历，默认）或 **vbCalHijri**（回历）。该设置控制 **Date$** 如何格式化系统日期、**DateSerial**、**DateValue**、**DateAdd** 和 **DateDiff** 的参数如何解释，以及 **DatePart**、**Year**、**Month**、**Day** 和 **Weekday** 返回的部分如何报告。

## 成员

- [Calendar](/official/Reference/VBA/DateTime/Calendar) -- 返回或设置日历类型（公历或回历）
- [Date](/official/Reference/VBA/DateTime/Date) -- 设置或返回当前系统日期
- [DateAdd](/official/Reference/VBA/DateTime/DateAdd) -- 向日期添加时间间隔
- [DateDiff](/official/Reference/VBA/DateTime/DateDiff) -- 返回两个日期之间的时间间隔数
- [DatePart](/official/Reference/VBA/DateTime/DatePart) -- 返回给定日期的指定部分
- [DateSerial](/official/Reference/VBA/DateTime/DateSerial) -- 返回指定年、月、日的日期
- [DateValue](/official/Reference/VBA/DateTime/DateValue) -- 将字符串转换为日期
- [Day](/official/Reference/VBA/DateTime/Day) -- 返回日期值中的月份中的日
- [Hour](/official/Reference/VBA/DateTime/Hour) -- 返回时间值中的小时
- [Minute](/official/Reference/VBA/DateTime/Minute) -- 返回时间值中的分钟
- [Month](/official/Reference/VBA/DateTime/Month) -- 返回日期值中的月份
- [Now](/official/Reference/VBA/DateTime/Now) -- 返回当前系统日期和时间
- [Second](/official/Reference/VBA/DateTime/Second) -- 返回时间值中的秒
- [Time](/official/Reference/VBA/DateTime/Time) -- 设置或返回当前系统时间
- [Timer](/official/Reference/VBA/DateTime/Timer) -- 返回自午夜以来经过的秒数
- [TimeSerial](/official/Reference/VBA/DateTime/TimeSerial) -- 返回指定小时、分钟和秒的时间
- [TimeValue](/official/Reference/VBA/DateTime/TimeValue) -- 将字符串转换为时间
- [Weekday](/official/Reference/VBA/DateTime/Weekday) -- 返回日期值中的星期几
- [Year](/official/Reference/VBA/DateTime/Year) -- 返回日期值中的年份