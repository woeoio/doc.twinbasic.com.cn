---
title: IsNumeric
parent: Information Module
permalink: /tB/Modules/Information/IsNumeric
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '27fe28b1-9159-484c-8817-2dfce2c2112c'
  PropagateID: '27fe28b1-9159-484c-8817-2dfce2c2112c'
  ReservedCode1: '634dadb1-5923-4a1c-835b-d241040d5ec4'
  ReservedCode2: '634dadb1-5923-4a1c-835b-d241040d5ec4'
---

# IsNumeric

返回一个**Boolean**，指示表达式是否可求值为数字。

语法：**IsNumeric(** *expression* **)**

*expression*
: *必需* **Variant**，包含数值或字符串表达式。

如果整个*expression*被识别为数字，**IsNumeric**返回**True**；否则返回**False**。

如果*expression*是日期表达式，**IsNumeric**返回**False**。

### 示例

本示例使用**IsNumeric**确定变量是否可求值为数字。

```vb
Dim MyVar As Variant
Dim MyCheck As Boolean
MyVar = "53"
MyCheck = IsNumeric(MyVar)            ' Returns True.

MyVar = "459.95"
MyCheck = IsNumeric(MyVar)            ' Returns True.

MyVar = "45 Help"
MyCheck = IsNumeric(MyVar)            ' Returns False.
```

### 另请参阅

- [CDbl](/official/Reference/VBA/Conversion/CDbl)、[CDec](/official/Reference/VBA/Conversion/CDec)函数
- [IsDate](/official/Reference/VBA/Information/IsDate)函数
- [Val](/official/Reference/VBA/Conversion/Val)函数