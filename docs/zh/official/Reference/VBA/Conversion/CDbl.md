---
title: CDbl
parent: Conversion Module
permalink: /tB/Modules/Conversion/CDbl
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fac885ee-5636-4b48-aaed-dd11fc665ce9'
  PropagateID: 'fac885ee-5636-4b48-aaed-dd11fc665ce9'
  ReservedCode1: '4c773187-06f5-4fb8-929e-6e29a9bba41e'
  ReservedCode2: '4c773187-06f5-4fb8-929e-6e29a9bba41e'
---

# CDbl

将表达式强制转换为 **Double**。

语法：**CDbl(** *expression* **)**

*expression*
: *必需* **Double** 范围内的任何有效字符串或数值表达式——负值为 `-1.79769313486231E308` 到 `-4.94065645841247E-324`，正值为 `4.94065645841247E-324` 到 `1.79769313486232E308`。

返回类型为 **Double**。如果 *expression* 超出 **Double** 的范围，将发生运行时错误。

**CDbl** 是替代 [**Val**](/official/Reference/VBA/Conversion/Val) 将字符串转换为数值类型的区域感知方案。**CDbl** 根据系统的区域设置正确识别不同的小数分隔符和千位分隔符。

### 示例

此示例使用 **CDbl** 函数将表达式转换为 **Double**。

```vb
Dim MyCurr, MyDouble
MyCurr = CCur(234.456784)                    ' MyCurr is a Currency.
MyDouble = CDbl(MyCurr * 8.2 * 0.01)         ' Convert result to a Double.
```

### 另请参阅

- [CCur](/official/Reference/VBA/Conversion/CCur)、[CDec](/official/Reference/VBA/Conversion/CDec)、[CInt](/official/Reference/VBA/Conversion/CInt)、[CLng](/official/Reference/VBA/Conversion/CLng)、[CSng](/official/Reference/VBA/Conversion/CSng)、[CStr](/official/Reference/VBA/Conversion/CStr)、[CVar](/official/Reference/VBA/Conversion/CVar) 函数