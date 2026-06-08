---
title: Fix
parent: Conversion Module
permalink: /tB/Modules/Conversion/Fix
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e62e2d85-3088-468b-982e-a15688bf990f'
  PropagateID: 'e62e2d85-3088-468b-982e-a15688bf990f'
  ReservedCode1: 'd2aea37f-9841-4d13-bfd8-611647820b43'
  ReservedCode2: 'd2aea37f-9841-4d13-bfd8-611647820b43'
---

# Fix

返回数字的整数部分，向零截断。

语法：**Fix(** *number* **)**

*number*
: *必需* **Double** 或任何有效的数值表达式。如果 *number* 包含 **Null**，则返回 **Null**。

**Fix** 移除 *number* 的小数部分并返回结果整数值。如果 *number* 为负数，**Fix** 返回大于或等于 *number* 的第一个负整数；即向零截断。例如，**Fix** 将 `-8.4` 转换为 `-8`。

**Fix(** *number* **)** 等效于 **Sgn(** *number* **) \* Int(Abs(** *number* **))**。

返回值的类型与 *number* 相同。

::: info
密切相关的 [**Int**](/official/Reference/VBA/Conversion/Int) 函数向负无穷舍入而非向零截断。对于正数，两者相同；对于负数，它们不同。
:::

### 示例

此示例说明 **Fix** 函数如何返回数字的整数部分。对于负数参数，**Fix** 函数返回大于或等于该数的第一个负整数。

```vb
Dim MyNumber
MyNumber = Fix(99.2)     ' Returns 99.
MyNumber = Fix(-99.8)    ' Returns -99.
MyNumber = Fix(-99.2)    ' Returns -99.
```

### 另请参阅

- [Int](/official/Reference/VBA/Conversion/Int)、[CInt](/official/Reference/VBA/Conversion/CInt)、[CLng](/official/Reference/VBA/Conversion/CLng) 函数