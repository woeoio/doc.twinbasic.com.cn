---
title: FormatDateTime
parent: Strings Module
permalink: /tB/Modules/Strings/FormatDateTime
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4ea9222a-2e57-45dc-9462-58bc8e61636a'
  PropagateID: '4ea9222a-2e57-45dc-9462-58bc8e61636a'
  ReservedCode1: 'aac7fb39-f08c-4c71-a8a4-dff8f2cf3f77'
  ReservedCode2: 'aac7fb39-f08c-4c71-a8a4-dff8f2cf3f77'
---

# FormatDateTime

返回一个格式化为日期或时间的表达式。

语法：**FormatDateTime(** *date* [ **,** *namedFormat* ] **)**

*date*
: *必需* 要格式化的日期表达式。

*namedFormat*
: *可选* 数值，指示所使用的日期/时间格式。如果省略，则使用**vbGeneralDate**。

*namedFormat*参数的设置如下：

| 常量               | 值  | 描述                                                                                                                                             |
|--------------------|-----|--------------------------------------------------------------------------------------------------------------------------------------------------|
| **vbGeneralDate**  | 0   | 显示日期和/或时间。如果有日期部分，显示为短日期。如果有时间部分，显示为长时间。如果两者都存在，则都显示。                                       |
| **vbLongDate**     | 1   | 使用系统区域设置中指定的长日期格式显示日期。                                                                                                     |
| **vbShortDate**    | 2   | 使用系统区域设置中指定的短日期格式显示日期。                                                                                                     |
| **vbLongTime**     | 3   | 使用系统区域设置中指定的时间格式显示时间。                                                                                                       |
| **vbShortTime**    | 4   | 使用24小时格式（`hh:mm`）显示时间。                                                                                                              |

### 示例

本示例使用**FormatDateTime**以多种格式显示日期值。

```vb
Dim d As Date
d = #2026-05-29#
Debug.Print FormatDateTime(d, vbLongDate)     ' e.g. "Friday, May 29, 2026"
Debug.Print FormatDateTime(d, vbShortDate)    ' e.g. "05/29/2026"
Debug.Print FormatDateTime(d, vbLongTime)     ' e.g. "12:00:00 AM"
```

### 另请参阅

- [Format](/official/Reference/VBA/Strings/Format)、[MonthName](/official/Reference/VBA/Strings/MonthName)、[WeekdayName](/official/Reference/VBA/Strings/WeekdayName)函数