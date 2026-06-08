---
title: Str
parent: Conversion Module
permalink: /tB/Modules/Conversion/Str
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7b29c89b-ee88-4a81-91e9-65735cb69c7d'
  PropagateID: '7b29c89b-ee88-4a81-91e9-65735cb69c7d'
  ReservedCode1: '9ffe227d-8631-4f09-aa8d-738c56e94779'
  ReservedCode2: '9ffe227d-8631-4f09-aa8d-738c56e94779'
---

# Str, Str$

返回数字的字符串表示。

语法：

- **Str$(** *number* **)**
- **Str(** *number* **)**

*number*
: *必需* 任何有效的数值表达式。

`$` 后缀形式返回 **String**；无后缀形式返回 **Variant** (**String**)。

当数字转换为字符串时，始终为 *number* 的符号保留一个前导空格。如果 *number* 为正数，返回的字符串包含一个前导空格，隐含正号。

使用 [**Format**](/official/Reference/VBA/Strings/Format) 函数将数值转换为格式化的日期、时间或货币，或其他用户自定义格式。与 **Str** 不同，**Format** 函数不为 *number* 的符号包含前导空格。

::: info
**Str** 函数仅将句点（`.`）识别为有效的小数分隔符。当可能使用不同的小数分隔符时（例如在国际应用程序中），请使用 [**CStr**](/official/Reference/VBA/Conversion/CStr) 将数字转换为字符串。
:::

### 示例

此示例使用 **Str** 函数返回数字的字符串表示。当数字转换为字符串时，始终为其符号保留一个前导空格。

```vb
Dim MyString
MyString = Str(459)         ' Returns " 459".
MyString = Str(-459.65)     ' Returns "-459.65".
MyString = Str(459.001)     ' Returns " 459.001".
```

### 另请参阅

- [CStr](/official/Reference/VBA/Conversion/CStr)、[Format](/official/Reference/VBA/Strings/Format)、[Hex](/official/Reference/VBA/Conversion/Hex)、[Oct](/official/Reference/VBA/Conversion/Oct)、[Val](/official/Reference/VBA/Conversion/Val) 函数