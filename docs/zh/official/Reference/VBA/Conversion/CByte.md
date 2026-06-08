---
title: CByte
parent: Conversion Module
permalink: /tB/Modules/Conversion/CByte
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c640babb-b8ab-4a53-b2ef-655091667116'
  PropagateID: 'c640babb-b8ab-4a53-b2ef-655091667116'
  ReservedCode1: '7468d0c7-39de-4f69-81d3-91cb6c6a8844'
  ReservedCode2: '7468d0c7-39de-4f69-81d3-91cb6c6a8844'
---

# CByte

将表达式强制转换为 **Byte**。

语法：**CByte(** *expression* **)**

*expression*
: *必需* 范围在 `0` 到 `255` 之间的任何有效字符串或数值表达式。

返回类型为 **Byte**。如果 *expression* 超出 **Byte** 的范围，将发生运行时错误。小数部分会四舍五入——当小数部分恰好为 `0.5` 时，**CByte** 舍入到最接近的偶数。

### 示例

此示例使用 **CByte** 函数将表达式转换为 **Byte**。

```vb
Dim MyDouble, MyByte
MyDouble = 125.5678          ' MyDouble is a Double.
MyByte = CByte(MyDouble)     ' MyByte contains 126.
```

### 另请参阅

- [CBool](/official/Reference/VBA/Conversion/CBool)、[CInt](/official/Reference/VBA/Conversion/CInt)、[CLng](/official/Reference/VBA/Conversion/CLng)、[CDbl](/official/Reference/VBA/Conversion/CDbl)、[CSng](/official/Reference/VBA/Conversion/CSng)、[CStr](/official/Reference/VBA/Conversion/CStr)、[CVar](/official/Reference/VBA/Conversion/CVar) 函数