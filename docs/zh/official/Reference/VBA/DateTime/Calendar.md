---
title: Calendar
parent: DateTime Module
permalink: /tB/Modules/DateTime/Calendar
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fa42c1a1-03a5-4596-b497-a69732e8a0ca'
  PropagateID: 'fa42c1a1-03a5-4596-b497-a69732e8a0ca'
  ReservedCode1: 'c208b9e5-e860-4433-84bc-474aa5802683'
  ReservedCode2: 'c208b9e5-e860-4433-84bc-474aa5802683'
---

# Calendar

返回或设置一个值，指定项目使用的日历类型。

语法：**Calendar** [ **=** *calendartype* ]

*calendartype*
: 一个指定日历类型的 **VbCalendar** 常量。

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbCalGreg** | 0 | 公历（默认）。 |
| **vbCalHijri** | 1 | 回历。 |

**Calendar** 属性只能通过编程方式设置。将日历设置为回历时，**Calendar** 的设置会影响 [**Date$**](/official/Reference/VBA/DateTime/Date#date-1) 属性返回的字符串。

### 示例

此示例将日历类型设置为回历。

```vb
Calendar = vbCalHijri
```

### 另请参阅

- [Date](/official/Reference/VBA/DateTime/Date) 属性