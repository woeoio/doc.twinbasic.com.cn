---
title: CDec
parent: Conversion Module
permalink: /tB/Modules/Conversion/CDec
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '34ed0f70-1c96-472a-83be-3eaef1a23da4'
  PropagateID: '34ed0f70-1c96-472a-83be-3eaef1a23da4'
  ReservedCode1: 'eb2751a5-3dea-4eb6-9a80-1b5ae6ddc873'
  ReservedCode2: 'eb2751a5-3dea-4eb6-9a80-1b5ae6ddc873'
---

# CDec

将表达式强制转换为 **Decimal**。

语法：**CDec(** *expression* **)**

*expression*
: *必需* 任何有效的字符串或数值表达式。零标度数字（无小数位）的范围是 `±79,228,162,514,264,337,593,543,950,335`。具有 28 位小数的数字范围是 `±7.9228162514264337593543950335`。可能的最小非零数是 `0.0000000000000000000000000001`。

返回类型为 **Decimal**。

::: info
在 VBA 中，**CDec** 不返回离散数据类型；它始终返回值已转换为 **Decimal** 子类型的 **Variant**。在 twinBASIC 中，**Decimal** 是完整的一等数据类型，因此 **CDec** 直接返回 **Decimal**。可以将结果赋值给 **Variant** 以实现与 VBA 兼容的行为。
:::

**CDec** 是替代 [**Val**](/official/Reference/VBA/Conversion/Val) 将字符串转换为数值类型的区域感知方案。

### 示例

此示例使用 **CDec** 函数将数值转换为 **Decimal**。

```vb
Dim MyDecimal As Decimal, MyCurr As Currency
MyCurr = 10000000.0587               ' MyCurr is a Currency.
MyDecimal = CDec(MyCurr)             ' MyDecimal is a Decimal.
```

### 另请参阅

- [CCur](/official/Reference/VBA/Conversion/CCur)、[CDbl](/official/Reference/VBA/Conversion/CDbl)、[CSng](/official/Reference/VBA/Conversion/CSng)、[ValDec](/official/Reference/VBA/Conversion/ValDec) 函数