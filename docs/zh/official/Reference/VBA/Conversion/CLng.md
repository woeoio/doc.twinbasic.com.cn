---
title: CLng
parent: Conversion Module
permalink: /tB/Modules/Conversion/CLng
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cf9ddc9c-1d7b-4294-99c8-a461a031c651'
  PropagateID: 'cf9ddc9c-1d7b-4294-99c8-a461a031c651'
  ReservedCode1: '91dcbb75-04bd-4e55-b84e-081d052313b9'
  ReservedCode2: '91dcbb75-04bd-4e55-b84e-081d052313b9'
---

# CLng

将表达式强制转换为 **Long**。

语法：**CLng(** *expression* **)**

*expression*
: *必需* 范围在 `-2,147,483,648` 到 `2,147,483,647` 之间的任何有效字符串或数值表达式。小数部分会四舍五入。

返回类型为 **Long**。如果 *expression* 超出 **Long** 的范围，将发生运行时错误。

当小数部分恰好为 `0.5` 时，**CLng** 始终舍入到最接近的偶数。例如，`0.5` 舍入为 `0`，`1.5` 舍入为 `2`。**CLng** 与 [**Fix**](/official/Reference/VBA/Conversion/Fix) 和 [**Int**](/official/Reference/VBA/Conversion/Int) 函数不同，后者截断而非舍入数字的小数部分。

### 示例

此示例使用 **CLng** 函数将值转换为 **Long**。

```vb
Dim MyVal1, MyVal2, MyLong1, MyLong2
MyVal1 = 25427.45: MyVal2 = 25427.55     ' MyVal1, MyVal2 are Doubles.
MyLong1 = CLng(MyVal1)                   ' MyLong1 contains 25427.
MyLong2 = CLng(MyVal2)                   ' MyLong2 contains 25428.
```

### 另请参阅

- [CBool](/official/Reference/VBA/Conversion/CBool)、[CByte](/official/Reference/VBA/Conversion/CByte)、[CInt](/official/Reference/VBA/Conversion/CInt)、[CLngLng](/official/Reference/VBA/Conversion/CLngLng)、[CLngPtr](/official/Reference/VBA/Conversion/CLngPtr)、[CSng](/official/Reference/VBA/Conversion/CSng)、[CStr](/official/Reference/VBA/Conversion/CStr)、[CVar](/official/Reference/VBA/Conversion/CVar) 函数
- [Fix](/official/Reference/VBA/Conversion/Fix)、[Int](/official/Reference/VBA/Conversion/Int) 函数