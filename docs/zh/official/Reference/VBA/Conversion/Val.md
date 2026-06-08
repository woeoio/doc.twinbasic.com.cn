---
title: Val
parent: Conversion Module
permalink: /tB/Modules/Conversion/Val
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ab87c77c-5dce-4ce4-8da4-09563611013b'
  PropagateID: 'ab87c77c-5dce-4ce4-8da4-09563611013b'
  ReservedCode1: '293465b0-4298-45ef-9bd3-8b6f631b77ca'
  ReservedCode2: '293465b0-4298-45ef-9bd3-8b6f631b77ca'
---

# Val

返回字符串中包含的数字作为适当类型的数值。

语法：**Val(** *string* **)**

*string*
: *必需* 任何有效的字符串表达式。

返回类型为 **Double**。

**Val** 函数在字符串中遇到第一个无法识别为数字部分的字符时停止读取。通常被视为数值部分的符号和字符（如美元符号和逗号）不被识别。

但是，该函数识别基数前缀 `&O`（八进制）和 `&H`（十六进制）。参数中的空格、制表符和换行符会被去除。

以下返回值 `1615198`：

```vb
Val("    1615 198th Street N.E.")
```

在以下代码中，**Val** 为所示的十六进制值返回十进制值 `-1`：

```vb
Val("&HFFFF")
```

::: info
**Val** 函数仅将句点（`.`）识别为有效的小数分隔符。当使用不同的小数分隔符时（如国际应用程序中），请改用 [**CDbl**](/official/Reference/VBA/Conversion/CDbl) 将字符串转换为数字。
:::

::: info
**Val** 函数在转换前会识别已弃用的数据类型后缀，可能导致类型不匹配错误。例如，表示百分之五十的字符串 `"50%"` 会如预期转换为 `50`，但 `Val("50.5%")` 会引发错误，因为百分号被解释为声明数据类型为 **Integer** 的后缀，但在此情况下并非如此。数据类型后缀的完整列表为：**Single** (`!`)、**Currency** (`@`)、**Double** (`#`)、**String** (`$`)、**Integer** (`%`)、**Long** (`&`)，以及 64 位宿主的 **LongLong** (`^`)。
:::

### 示例

此示例使用 **Val** 函数返回字符串中包含的数字。

```vb
Dim MyValue
MyValue = Val("2457")        ' Returns 2457.
MyValue = Val(" 2 45 7")     ' Returns 2457.
MyValue = Val("24 and 57")   ' Returns 24.
```

### 另请参阅

- [ValDec](/official/Reference/VBA/Conversion/ValDec)、[CDbl](/official/Reference/VBA/Conversion/CDbl)、[CDec](/official/Reference/VBA/Conversion/CDec)、[Str](/official/Reference/VBA/Conversion/Str) 函数