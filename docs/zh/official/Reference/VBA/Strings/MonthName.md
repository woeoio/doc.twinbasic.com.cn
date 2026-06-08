---
title: MonthName
parent: Strings Module
permalink: /tB/Modules/Strings/MonthName
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '43a97d1b-7695-4fe0-beb4-a06a532a658f'
  PropagateID: '43a97d1b-7695-4fe0-beb4-a06a532a658f'
  ReservedCode1: '874d1cca-14da-445f-8e2a-47203b1b0fe8'
  ReservedCode2: '874d1cca-14da-445f-8e2a-47203b1b0fe8'
---

# MonthName

返回一个表示指定月份的字符串。

语法：**MonthName(** *month* [ **,** *abbreviate* ] **)**

*month*
: *必需* 月份的数值。例如，一月为1，二月为2，依此类推。

*abbreviate*
: *可选* **Boolean**值，指示是否缩写月份名称。如果省略，默认值为**False**，表示不缩写月份名称。

### 示例

本示例使用**MonthName**返回月份的全名和缩写。

```vb
Debug.Print MonthName(3)           ' "March"
Debug.Print MonthName(3, True)     ' "Mar"
Debug.Print MonthName(12)          ' "December"
```

### 另请参阅

- [FormatDateTime](/official/Reference/VBA/Strings/FormatDateTime)、[WeekdayName](/official/Reference/VBA/Strings/WeekdayName)函数