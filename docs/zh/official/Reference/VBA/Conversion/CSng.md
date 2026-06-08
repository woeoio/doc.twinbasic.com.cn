---
title: CSng
parent: Conversion Module
permalink: /tB/Modules/Conversion/CSng
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '93bf09d6-e2eb-4252-a6f1-10b9ecfd06a4'
  PropagateID: '93bf09d6-e2eb-4252-a6f1-10b9ecfd06a4'
  ReservedCode1: '97983340-55e6-4b8b-96be-85da520b996c'
  ReservedCode2: '97983340-55e6-4b8b-96be-85da520b996c'
---

# CSng

将表达式强制转换为 **Single**。

语法：**CSng(** *expression* **)**

*expression*
: *必需* **Single** 范围内的任何有效字符串或数值表达式——负值为 `-3.402823E38` 到 `-1.401298E-45`，正值为 `1.401298E-45` 到 `3.402823E38`。

返回类型为 **Single**。如果 *expression* 超出 **Single** 的范围，将发生运行时错误。

**CSng** 是替代 [**Val**](/official/Reference/VBA/Conversion/Val) 将字符串转换为数值类型的区域感知方案。

### 示例

此示例使用 **CSng** 函数将值转换为 **Single**。

```vb
Dim MyDouble1, MyDouble2, MySingle1, MySingle2
' MyDouble1, MyDouble2 are Doubles.
MyDouble1 = 75.3421115: MyDouble2 = 75.3421555
MySingle1 = CSng(MyDouble1)              ' MySingle1 contains 75.34211.
MySingle2 = CSng(MyDouble2)              ' MySingle2 contains 75.34216.
```

### 另请参阅

- [CBool](/official/Reference/VBA/Conversion/CBool)、[CByte](/official/Reference/VBA/Conversion/CByte)、[CCur](/official/Reference/VBA/Conversion/CCur)、[CDbl](/official/Reference/VBA/Conversion/CDbl)、[CDec](/official/Reference/VBA/Conversion/CDec)、[CInt](/official/Reference/VBA/Conversion/CInt)、[CLng](/official/Reference/VBA/Conversion/CLng)、[CStr](/official/Reference/VBA/Conversion/CStr)、[CVar](/official/Reference/VBA/Conversion/CVar) 函数