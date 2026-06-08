---
title: CLngPtr
parent: Conversion Module
permalink: /tB/Modules/Conversion/CLngPtr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6bf13875-a7c2-4095-acf7-bb8f0d04605a'
  PropagateID: '6bf13875-a7c2-4095-acf7-bb8f0d04605a'
  ReservedCode1: 'ba9a518b-f29e-47a0-a53b-348d9c6b4788'
  ReservedCode2: 'ba9a518b-f29e-47a0-a53b-348d9c6b4788'
---

# CLngPtr

将表达式强制转换为 **LongPtr**。

语法：**CLngPtr(** *expression* **)**

*expression*
: *必需* 任何有效的字符串或数值表达式。可接受范围在 32 位系统上为 `-2,147,483,648` 到 `2,147,483,647`，在 64 位系统上为 `-9,223,372,036,854,775,808` 到 `9,223,372,036,854,775,807`。小数部分会四舍五入。

返回类型为 **LongPtr**，在 32 位系统上为 **Long**，在 64 位系统上为 **LongLong**。如果 *expression* 超出有效范围，将发生运行时错误。

当小数部分恰好为 `0.5` 时，**CLngPtr** 始终舍入到最接近的偶数。**CLngPtr** 与 [**Fix**](/official/Reference/VBA/Conversion/Fix) 和 [**Int**](/official/Reference/VBA/Conversion/Int) 函数不同，后者截断而非舍入数字的小数部分。

**LongPtr** 主要用于保存 API 调用返回的指针值。详见[数据类型](/official/Features/Language/Data-Types)。

### 示例

此示例使用 **CLngPtr** 函数将表达式转换为 **LongPtr**。

```vb
Dim num As Variant
num = 1234567890
MsgBox "LongPtr value of " & num & " is " & CLngPtr(num)
```

### 另请参阅

- [CBool](/official/Reference/VBA/Conversion/CBool)、[CByte](/official/Reference/VBA/Conversion/CByte)、[CInt](/official/Reference/VBA/Conversion/CInt)、[CLng](/official/Reference/VBA/Conversion/CLng)、[CLngLng](/official/Reference/VBA/Conversion/CLngLng)、[CSng](/official/Reference/VBA/Conversion/CSng)、[CStr](/official/Reference/VBA/Conversion/CStr)、[CVar](/official/Reference/VBA/Conversion/CVar) 函数