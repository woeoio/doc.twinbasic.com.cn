---
title: Int
parent: Conversion Module
permalink: /tB/Modules/Conversion/Int
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cf8f38c1-117e-4050-b1aa-abecaf53ad75'
  PropagateID: 'cf8f38c1-117e-4050-b1aa-abecaf53ad75'
  ReservedCode1: 'acd660ac-300f-4f73-afb9-0659b6bf3e5d'
  ReservedCode2: 'acd660ac-300f-4f73-afb9-0659b6bf3e5d'
---

# Int

返回数字的整数部分，向负无穷舍入。

语法：**Int(** *number* **)**

*number*
: *必需* **Double** 或任何有效的数值表达式。如果 *number* 包含 **Null**，则返回 **Null**。

**Int** 移除 *number* 的小数部分并返回结果整数值。如果 *number* 为负数，**Int** 返回小于或等于 *number* 的第一个负整数。例如，**Int** 将 `-8.4` 转换为 `-9`。

返回值的类型与 *number* 相同。

::: info
密切相关的 [**Fix**](/official/Reference/VBA/Conversion/Fix) 函数向零截断而非向负无穷舍入。对于正数，两者相同；对于负数，它们不同。
:::

### 示例

此示例说明 **Int** 函数如何返回数字的整数部分。对于负数参数，**Int** 函数返回小于或等于该数的第一个负整数。

```vb
Dim MyNumber
MyNumber = Int(99.8)     ' Returns 99.
MyNumber = Int(-99.8)    ' Returns -100.
MyNumber = Int(-99.2)    ' Returns -100.
```

### 另请参阅

- [Fix](/official/Reference/VBA/Conversion/Fix)、[CInt](/official/Reference/VBA/Conversion/CInt)、[CLng](/official/Reference/VBA/Conversion/CLng) 函数