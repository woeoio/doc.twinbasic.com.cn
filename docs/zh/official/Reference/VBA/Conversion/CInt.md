---
title: CInt
parent: Conversion Module
permalink: /tB/Modules/Conversion/CInt
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2b68a88b-e28a-4f5a-a517-46a132f19663'
  PropagateID: '2b68a88b-e28a-4f5a-a517-46a132f19663'
  ReservedCode1: 'd40281cb-d523-441f-be00-8dda8c2518b3'
  ReservedCode2: 'd40281cb-d523-441f-be00-8dda8c2518b3'
---

# CInt

将表达式强制转换为 **Integer**。

语法：**CInt(** *expression* **)**

*expression*
: *必需* 范围在 `-32,768` 到 `32,767` 之间的任何有效字符串或数值表达式。小数部分会四舍五入。

返回类型为 **Integer**。如果 *expression* 超出 **Integer** 的范围，将发生运行时错误。

当小数部分恰好为 `0.5` 时，**CInt** 始终舍入到最接近的偶数。例如，`0.5` 舍入为 `0`，`1.5` 舍入为 `2`。**CInt** 与 [**Fix**](/official/Reference/VBA/Conversion/Fix) 和 [**Int**](/official/Reference/VBA/Conversion/Int) 函数不同，后者截断而非舍入数字的小数部分。此外，**Fix** 和 **Int** 始终返回与传入值相同类型的值。

**CInt** 是替代 [**Val**](/official/Reference/VBA/Conversion/Val) 将字符串转换为数值类型的区域感知方案。

### 示例

此示例使用 **CInt** 函数将值转换为 **Integer**。

```vb
Dim MyDouble, MyInt
MyDouble = 2345.5678                 ' MyDouble is a Double.
MyInt = CInt(MyDouble)               ' MyInt contains 2346.
```

### 另请参阅

- [CBool](/official/Reference/VBA/Conversion/CBool)、[CByte](/official/Reference/VBA/Conversion/CByte)、[CLng](/official/Reference/VBA/Conversion/CLng)、[CLngLng](/official/Reference/VBA/Conversion/CLngLng)、[CSng](/official/Reference/VBA/Conversion/CSng)、[CStr](/official/Reference/VBA/Conversion/CStr)、[CVar](/official/Reference/VBA/Conversion/CVar) 函数
- [Fix](/official/Reference/VBA/Conversion/Fix)、[Int](/official/Reference/VBA/Conversion/Int) 函数