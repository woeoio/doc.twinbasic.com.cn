---
title: Weekday
parent: DateTime Module
permalink: /tB/Modules/DateTime/Weekday
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1d13d2da-b7a6-4143-a804-f91186d62885'
  PropagateID: '1d13d2da-b7a6-4143-a804-f91186d62885'
  ReservedCode1: '57dfbfe3-921b-4915-a089-c3369be87740'
  ReservedCode2: '57dfbfe3-921b-4915-a089-c3369be87740'
---

# Weekday

返回一个 **Variant** (**Integer**)，包含表示星期几的整数。

语法：**Weekday** ( *date* [, *firstdayofweek* ] )

*date*
: *必需* 任何可以表示日期的 **Variant**、数值表达式、字符串表达式或其任意组合。如果 *date* 包含 **Null**，则返回 **Null**。

*firstdayofweek*
: *可选* 指定一周第一天的常量。如果未指定，则假定为 **vbSunday**。

*firstdayofweek* 参数使用以下设置：

| 常量 | 值 | 描述 |
|:---|:---|:---|
| **vbUseSystem** | 0 | 使用 NLS API 设置 |
| **vbSunday** | 1 | 星期日（默认） |
| **vbMonday** | 2 | 星期一 |
| **vbTuesday** | 3 | 星期二 |
| **vbWednesday** | 4 | 星期三 |
| **vbThursday** | 5 | 星期四 |
| **vbFriday** | 6 | 星期五 |
| **vbSaturday** | 7 | 星期六 |

**Weekday** 函数可以返回以下值：

| 常量 | 值 | 描述 |
|:---|:---|:---|
| **vbSunday** | 1 | 星期日 |
| **vbMonday** | 2 | 星期一 |
| **vbTuesday** | 3 | 星期二 |
| **vbWednesday** | 4 | 星期三 |
| **vbThursday** | 5 | 星期四 |
| **vbFriday** | 6 | 星期五 |
| **vbSaturday** | 7 | 星期六 |

如果 [**Calendar**](/official/Reference/VBA/DateTime/Calendar) 属性设置为公历，则返回的整数表示日期参数的公历星期几。如果日历为回历，则返回的整数表示日期参数的回历星期几。

### 示例

此示例使用 **Weekday** 函数从指定日期中获取星期几。

```vb
Dim MyDate, MyWeekDay
MyDate = #February 12, 1969#    ' Assign a date.
MyWeekDay = Weekday(MyDate)     ' MyWeekDay contains 4 because
                                ' MyDate represents a Wednesday.
```

### 另请参阅

- [Day](/official/Reference/VBA/DateTime/Day)、[Month](/official/Reference/VBA/DateTime/Month)、[Year](/official/Reference/VBA/DateTime/Year) 函数