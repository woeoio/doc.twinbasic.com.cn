---
title: TimeValue
parent: DateTime Module
permalink: /tB/Modules/DateTime/TimeValue
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0f626e16-c1a9-4cc6-a4ee-4a4e7a24a2df'
  PropagateID: '0f626e16-c1a9-4cc6-a4ee-4a4e7a24a2df'
  ReservedCode1: 'c06fa5f1-0f03-4a76-9a54-1df2d74c0fa0'
  ReservedCode2: 'c06fa5f1-0f03-4a76-9a54-1df2d74c0fa0'
---

# TimeValue

返回一个 **Variant** (**Date**)，包含时间。

语法：**TimeValue** ( *time* )

*time*
: *必需* 通常为表示从 0:00:00（上午 12:00:00）到 23:59:59（下午 11:59:59）之间时间的字符串表达式。但是，*time* 也可以是表示该范围内时间的任何表达式。如果 *time* 包含 **Null**，则返回 **Null**。

可以使用 12 小时制或 24 小时制输入有效时间。例如，`"2:24PM"` 和 `"14:24"` 都是有效的 *time* 参数。

如果 *time* 参数包含日期信息，**TimeValue** 不会返回它。但是，如果 *time* 包含无效的日期信息，将发生错误。

### 示例

此示例使用 **TimeValue** 函数将字符串转换为时间。也可以使用日期字面量直接将时间赋值给 **Variant** 或 **Date** 变量（例如，`MyTime = #4:35:17 PM#`）。

```vb
Dim MyTime
MyTime = TimeValue("4:35:17 PM")    ' Return a time.
```

### 另请参阅

- [TimeSerial](/official/Reference/VBA/DateTime/TimeSerial) 函数