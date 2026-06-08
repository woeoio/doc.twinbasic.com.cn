---
title: IsDate
parent: Information Module
permalink: /tB/Modules/Information/IsDate
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '459b089e-c29b-4aaa-91fb-36c2ede54d5e'
  PropagateID: '459b089e-c29b-4aaa-91fb-36c2ede54d5e'
  ReservedCode1: '98f7f87a-e05c-42f2-ba85-0458987a649f'
  ReservedCode2: '98f7f87a-e05c-42f2-ba85-0458987a649f'
---

# IsDate

如果表达式是日期或可识别为有效日期或时间，则返回**True**；否则返回**False**。

语法：**IsDate(** *expression* **)**

*expression*
: *必需* **Variant**，包含日期表达式，或可识别为日期或时间的字符串表达式。

有效日期的范围为公元100年1月1日至公元9999年12月31日。

### 示例

本示例使用**IsDate**确定表达式是否可识别为日期或时间值。

```vb
Dim MyVar As Variant
Dim MyCheck As Boolean
MyVar = "04/28/2014"                  ' Valid date.
MyCheck = IsDate(MyVar)               ' True.

MyVar = "April 28, 2014"              ' Valid date.
MyCheck = IsDate(MyVar)               ' True.

MyVar = "13/32/2014"                  ' Invalid date.
MyCheck = IsDate(MyVar)               ' False.

MyVar = "04.28.14"                    ' Valid time format on some locales.
MyCheck = IsDate(MyVar)               ' True.
```

### 另请参阅

- [CDate](/official/Reference/VBA/Conversion/CDate)函数
- [DateValue](/official/Reference/VBA/DateTime/DateValue)函数