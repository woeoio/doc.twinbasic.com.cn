---
title: ValDec
parent: Conversion Module
permalink: /tB/Modules/Conversion/ValDec
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f046fb46-1b73-42db-9235-0f6e7d9246e2'
  PropagateID: 'f046fb46-1b73-42db-9235-0f6e7d9246e2'
  ReservedCode1: '41c520f7-679d-4cba-9d29-80122bfbd630'
  ReservedCode2: '41c520f7-679d-4cba-9d29-80122bfbd630'
---

# ValDec

返回字符串中包含的数字作为 **Decimal** 值。

语法：**ValDec(** *string* **)**

*string*
: *必需* 任何有效的字符串表达式。

返回类型为 **Decimal**。

::: info
**ValDec** 是 twinBASIC 扩展。其行为类似于 [**Val**](/official/Reference/VBA/Conversion/Val)，但返回 **Decimal** 而非 **Double**，保留了 **Val** 会舍入的值的完整精度。
:::

**ValDec** 函数遵循与 [**Val**](/official/Reference/VBA/Conversion/Val) 相同的解析规则：在字符串中遇到第一个无法识别为数字部分的字符时停止读取，忽略空格、制表符和换行符，并识别基数前缀 `&O`（八进制）和 `&H`（十六进制）。

::: info
**ValDec** 仅将句点（`.`）识别为有效的小数分隔符。当使用不同的小数分隔符时（如国际应用程序中），请改用 [**CDec**](/official/Reference/VBA/Conversion/CDec)。
:::

### 示例

此示例使用 **ValDec** 函数将字符串解析为 **Decimal**。

```vb
Dim MyDec As Decimal
MyDec = ValDec("123.4567890123456789")    ' Full precision retained.
```

### 另请参阅

- [Val](/official/Reference/VBA/Conversion/Val)、[CDec](/official/Reference/VBA/Conversion/CDec)、[CDbl](/official/Reference/VBA/Conversion/CDbl) 函数