---
title: CLngLng
parent: Conversion Module
permalink: /tB/Modules/Conversion/CLngLng
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '19e43ed5-7b50-4085-9914-5239ab515f9c'
  PropagateID: '19e43ed5-7b50-4085-9914-5239ab515f9c'
  ReservedCode1: '8a8785a3-7b37-47a0-a8c9-656b917d060c'
  ReservedCode2: '8a8785a3-7b37-47a0-a8c9-656b917d060c'
---

# CLngLng

将表达式强制转换为 **LongLong**。

语法：**CLngLng(** *expression* **)**

*expression*
: *必需* 范围在 `-9,223,372,036,854,775,808` 到 `9,223,372,036,854,775,807` 之间的任何有效字符串或数值表达式。小数部分会四舍五入。

返回类型为 **LongLong**。如果 *expression* 超出 **LongLong** 的范围，将发生运行时错误。

当小数部分恰好为 `0.5` 时，**CLngLng** 始终舍入到最接近的偶数。例如，`0.5` 舍入为 `0`，`1.5` 舍入为 `2`。**CLngLng** 与 [**Fix**](/official/Reference/VBA/Conversion/Fix) 和 [**Int**](/official/Reference/VBA/Conversion/Int) 函数不同，后者截断而非舍入数字的小数部分。

::: info
必须使用转换函数显式将 **LongLong** 赋值给较小的整数类型。不允许 **LongLong** 到较小整数类型的隐式转换。
:::

::: info
在 VBA 中，**LongLong**（以及因此 **CLngLng**）仅限于 64 位宿主。twinBASIC 在 32 位和 64 位模式下都支持 **LongLong**——参见[数据类型](/official/Features/Language/Data-Types)。
:::

### 示例

此示例使用 **CLngLng** 函数将表达式转换为 **LongLong**。

```vb
Dim someValue As Variant
someValue = 9223372036854775807
Dim longLongValue As LongLong
longLongValue = CLngLng(someValue)
MsgBox "The LongLong representation is: " & longLongValue
```

### 另请参阅

- [CBool](/official/Reference/VBA/Conversion/CBool)、[CByte](/official/Reference/VBA/Conversion/CByte)、[CInt](/official/Reference/VBA/Conversion/CInt)、[CLng](/official/Reference/VBA/Conversion/CLng)、[CLngPtr](/official/Reference/VBA/Conversion/CLngPtr)、[CSng](/official/Reference/VBA/Conversion/CSng)、[CStr](/official/Reference/VBA/Conversion/CStr)、[CVar](/official/Reference/VBA/Conversion/CVar) 函数