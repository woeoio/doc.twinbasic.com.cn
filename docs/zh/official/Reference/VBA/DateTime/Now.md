---
title: Now
parent: DateTime Module
permalink: /tB/Modules/DateTime/Now
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7cd5fd94-685e-4262-a319-cfd57fbfb31f'
  PropagateID: '7cd5fd94-685e-4262-a319-cfd57fbfb31f'
  ReservedCode1: '565b11b8-1ea0-42fe-8c29-b97cb0701af1'
  ReservedCode2: '565b11b8-1ea0-42fe-8c29-b97cb0701af1'
---

# Now

返回一个 **Variant** (**Date**)，根据系统日期和时间指定当前日期和时间。

语法：**Now** [ **()** ]

### 示例

此示例使用 **Now** 函数返回当前系统日期和时间。

```vb
Dim Today
Today = Now           ' Assign current system date and time.
Debug.Print Today     ' Prints e.g. 5/7/2026 2:30:15 PM
Debug.Print Year(Today)    ' e.g. 2026
Debug.Print Month(Today)   ' e.g. 5
Debug.Print Hour(Today)    ' e.g. 14
```

### 另请参阅

- [Date](/official/Reference/VBA/DateTime/Date)、[Time](/official/Reference/VBA/DateTime/Time) 属性