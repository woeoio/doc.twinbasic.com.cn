---
title: WeekdayName
parent: Strings Module
permalink: /tB/Modules/Strings/WeekdayName
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8b13d458-e856-4704-b258-786ce057dccd'
  PropagateID: '8b13d458-e856-4704-b258-786ce057dccd'
  ReservedCode1: 'f4c4697d-6d0c-4d5b-abb1-e49f623c1f69'
  ReservedCode2: 'f4c4697d-6d0c-4d5b-abb1-e49f623c1f69'
---

# WeekdayName

返回一个表示指定星期几的字符串。

语法：**WeekdayName(** *weekday* [ **,** *abbreviate* [ **,** *firstdayofweek* ] ] **)**

*weekday*
: *必需* 星期几的数值。每天的数值取决于*firstdayofweek*设置。

*abbreviate*
: *可选* **Boolean**值，指示是否缩写星期几名称。如果省略，默认值为**False**，表示不缩写星期几名称。

*firstdayofweek*
: *可选* 数值，指示一周的第一天。参见下面的设置。

*firstdayofweek*参数可以取以下值：

| 常量             | 值  | 描述                                              |
|------------------|-----|----------------------------------------------------|
| **vbUseSystem**  | 0   | 默认。使用国家语言支持（NLS）API设置。            |
| **vbSunday**     | 1   | 星期日                                             |
| **vbMonday**     | 2   | 星期一                                             |
| **vbTuesday**    | 3   | 星期二                                             |
| **vbWednesday**  | 4   | 星期三                                             |
| **vbThursday**   | 5   | 星期四                                             |
| **vbFriday**     | 6   | 星期五                                             |
| **vbSaturday**   | 7   | 星期六                                             |

### 示例

本示例使用**WeekdayName**返回星期几的全名和缩写。

```vb
Debug.Print WeekdayName(2)          ' "Monday" (vbSunday = first day of week)
Debug.Print WeekdayName(2, True)    ' "Mon"
Debug.Print WeekdayName(1)          ' "Sunday"
```

### 另请参阅

- [FormatDateTime](/official/Reference/VBA/Strings/FormatDateTime)、[MonthName](/official/Reference/VBA/Strings/MonthName)函数