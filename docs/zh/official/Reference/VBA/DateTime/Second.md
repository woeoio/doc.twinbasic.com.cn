---
title: Second
parent: DateTime Module
permalink: /tB/Modules/DateTime/Second
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '279807e5-8317-4c8e-9b63-25dcc653b67c'
  PropagateID: '279807e5-8317-4c8e-9b63-25dcc653b67c'
  ReservedCode1: '124159a6-8b70-4357-8984-58265606f843'
  ReservedCode2: '124159a6-8b70-4357-8984-58265606f843'
---

# Second

返回一个 **Variant** (**Integer**)，指定一个 0 到 59 之间的整数，表示分钟中的秒。

语法：**Second** ( *time* )

*time*
: *必需* 任何可以表示时间的 **Variant**、数值表达式、字符串表达式或其任意组合。如果 *time* 包含 **Null**，则返回 **Null**。

### 示例

此示例使用 **Second** 函数从指定时间中获取分钟中的秒。

```vb
Dim MyTime, MySecond
MyTime = #4:35:17 PM#    ' Assign a time.
MySecond = Second(MyTime)    ' MySecond contains 17.
```

### 另请参阅

- [Hour](/official/Reference/VBA/DateTime/Hour)、[Minute](/official/Reference/VBA/DateTime/Minute)、[DatePart](/official/Reference/VBA/DateTime/DatePart) 函数