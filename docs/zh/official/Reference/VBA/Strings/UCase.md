---
title: UCase
parent: Strings Module
permalink: /tB/Modules/Strings/UCase
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b8416335-bbfe-409e-9782-c27cb48a1ecb'
  PropagateID: 'b8416335-bbfe-409e-9782-c27cb48a1ecb'
  ReservedCode1: '11ad0f57-d2df-474d-aefa-d02b0431111b'
  ReservedCode2: '11ad0f57-d2df-474d-aefa-d02b0431111b'
---

# UCase

返回一个**String**，包含已转换为大写的指定字符串。

语法：**UCase$(** *string* **)**, **UCase(** *string* **)**

*string*
: *必需* 任意有效的字符串表达式。如果*string*包含**Null**，则返回**Null**。

带`$`后缀的形式返回**String**；不带后缀的形式返回**Variant**（**String**）。

仅小写字母被转换为大写；所有大写字母和非字母字符保持不变。

### 示例

本示例使用**UCase**函数返回字符串的大写版本。

```vb
Dim LowerCase, UpperCase
LowerCase = "Hello World 1234"    ' String to convert.
UpperCase = UCase(LowerCase)      ' Returns "HELLO WORLD 1234".
```

### 另请参阅

- [LCase](/official/Reference/VBA/Strings/LCase)、[StrConv](/official/Reference/VBA/Strings/StrConv)函数