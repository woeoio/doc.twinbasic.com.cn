---
title: CVar
parent: Conversion Module
permalink: /tB/Modules/Conversion/CVar
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ee3e7487-7d6e-4c1e-adbf-0159fdfac5c1'
  PropagateID: 'ee3e7487-7d6e-4c1e-adbf-0159fdfac5c1'
  ReservedCode1: 'd12e5cca-c99f-44a8-92f1-69d0bd8a788a'
  ReservedCode2: 'd12e5cca-c99f-44a8-92f1-69d0bd8a788a'
---

# CVar

将表达式强制转换为 **Variant**。

语法：**CVar(** *expression* **)**

*expression*
: *必需* 任何有效的表达式。数值的可接受范围与 **Double** 相同，非数值的范围与 **String** 相同。

返回类型为 **Variant**。

### 示例

此示例使用 **CVar** 函数将表达式转换为 **Variant**。

```vb
Dim MyInt, MyVar
MyInt = 4534                             ' MyInt is an Integer.
MyVar = CVar(MyInt & 000)                ' MyVar contains the string "4534000".
```

### 另请参阅

- [CBool](/official/Reference/VBA/Conversion/CBool)、[CByte](/official/Reference/VBA/Conversion/CByte)、[CCur](/official/Reference/VBA/Conversion/CCur)、[CDate](/official/Reference/VBA/Conversion/CDate)、[CDbl](/official/Reference/VBA/Conversion/CDbl)、[CInt](/official/Reference/VBA/Conversion/CInt)、[CLng](/official/Reference/VBA/Conversion/CLng)、[CSng](/official/Reference/VBA/Conversion/CSng)、[CStr](/official/Reference/VBA/Conversion/CStr) 函数
- [CVDate](/official/Reference/VBA/Conversion/CVDate)、[CVErr](/official/Reference/VBA/Conversion/CVErr) 函数