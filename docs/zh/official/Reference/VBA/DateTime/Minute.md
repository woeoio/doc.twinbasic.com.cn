---
title: Minute
parent: DateTime Module
permalink: /tB/Modules/DateTime/Minute
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4248d3e4-25ba-4e64-a5d0-c452ed16f7a5'
  PropagateID: '4248d3e4-25ba-4e64-a5d0-c452ed16f7a5'
  ReservedCode1: '08cea618-2141-402d-91ee-a6d7902edb58'
  ReservedCode2: '08cea618-2141-402d-91ee-a6d7902edb58'
---

# Minute

返回一个 **Variant** (**Integer**)，指定一个 0 到 59 之间的整数，表示小时中的分钟。

语法：**Minute** ( *time* )

*time*
: *必需* 任何可以表示时间的 **Variant**、数值表达式、字符串表达式或其任意组合。如果 *time* 包含 **Null**，则返回 **Null**。

### 示例

此示例使用 **Minute** 函数从指定时间中获取小时中的分钟。

```vb
Dim MyTime, MyMinute
MyTime = #4:35:17 PM#    ' Assign a time.
MyMinute = Minute(MyTime)    ' MyMinute contains 35.
```

### 另请参阅

- [Hour](/official/Reference/VBA/DateTime/Hour)、[Second](/official/Reference/VBA/DateTime/Second)、[DatePart](/official/Reference/VBA/DateTime/DatePart) 函数