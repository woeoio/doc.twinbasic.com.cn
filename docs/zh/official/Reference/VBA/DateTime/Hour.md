---
title: Hour
parent: DateTime Module
permalink: /tB/Modules/DateTime/Hour
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5a830f0c-2068-4daf-b879-f1b31af29ec7'
  PropagateID: '5a830f0c-2068-4daf-b879-f1b31af29ec7'
  ReservedCode1: '5c80be93-8092-4537-a870-be396bc915cd'
  ReservedCode2: '5c80be93-8092-4537-a870-be396bc915cd'
---

# Hour

返回一个 **Variant** (**Integer**)，指定 0 到 23 之间（含）的整数，表示一天中的小时。

语法：**Hour** ( *time* )

*time*
: *必需* 任何可以表示时间的 **Variant**、数值表达式、字符串表达式或其组合。如果 *time* 包含 **Null**，则返回 **Null**。

### 示例

此示例使用 **Hour** 函数从指定时间获取小时。

```vb
Dim MyTime, MyHour
MyTime = #4:35:17 PM#    ' Assign a time.
MyHour = Hour(MyTime)    ' MyHour contains 16.
```

### 另请参阅

- [Minute](/official/Reference/VBA/DateTime/Minute)、[Second](/official/Reference/VBA/DateTime/Second)、[DatePart](/official/Reference/VBA/DateTime/DatePart) 函数