---
title: TimeSerial
parent: DateTime Module
permalink: /tB/Modules/DateTime/TimeSerial
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '58bf5f93-fad2-4615-b0b3-fc848c8bd2b4'
  PropagateID: '58bf5f93-fad2-4615-b0b3-fc848c8bd2b4'
  ReservedCode1: '0cf305db-b025-4319-9ee8-700d94793194'
  ReservedCode2: '0cf305db-b025-4319-9ee8-700d94793194'
---

# TimeSerial

返回一个 **Variant** (**Date**)，包含指定小时、分钟和秒的时间。

语法：**TimeSerial** ( *hour*, *minute*, *second* )

*hour*
: *必需* **Integer**。0（上午 12:00）到 23（下午 11:00）之间的数字，或数值表达式。

*minute*
: *必需* **Integer**。任意数值表达式。

*second*
: *必需* **Integer**。任意数值表达式。

要指定一个时间（例如 11:59:59），每个 **TimeSerial** 参数的数字范围应在该单位的正常范围内：小时为 0--23，分钟和秒为 0--59。也可以使用表示某个时间之前或之后若干小时、分钟或秒的数值表达式来为每个参数指定相对时间。

以下示例使用表达式而非绝对时间数字。**TimeSerial** 函数返回中午前 6 小时（`12 - 6`）再前 15 分钟（`-15`）的时间，即上午 5:45:00。

```vb
TimeSerial(12 - 6, -15, 0)
```

当任何参数超出其正常范围时，它会适当地进位到下一个更大的单位。例如，75 分钟被计算为 1 小时 15 分钟。如果任何单个参数超出 -32,768 到 32,767 的范围，将发生错误。如果三个参数指定的时间导致日期超出可接受的日期范围，也会发生错误。

### 示例

此示例使用 **TimeSerial** 函数返回指定小时、分钟和秒的时间。

```vb
Dim MyTime
MyTime = TimeSerial(16, 35, 17)    ' Serial representation of 4:35:17 PM.
```

### 另请参阅

- [TimeValue](/official/Reference/VBA/DateTime/TimeValue) 函数