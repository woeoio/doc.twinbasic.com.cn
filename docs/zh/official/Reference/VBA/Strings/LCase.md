---
title: LCase
parent: Strings Module
permalink: /tB/Modules/Strings/LCase
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '917c6b65-bb4d-46b2-b2fb-040fd3a1668e'
  PropagateID: '917c6b65-bb4d-46b2-b2fb-040fd3a1668e'
  ReservedCode1: 'e1a9bd7e-c9fb-4574-b23d-480ae06c223d'
  ReservedCode2: 'e1a9bd7e-c9fb-4574-b23d-480ae06c223d'
---

# LCase

返回已转换为小写的**String**。

语法：**LCase$(** *string* **)**, **LCase(** *string* **)**

*string*
: *必需* 任意有效的字符串表达式。如果*string*包含**Null**，则返回**Null**。

带`$`后缀的形式返回**String**；不带后缀的形式返回**Variant**（**String**）。

仅大写字母被转换为小写；所有小写字母和非字母字符保持不变。

### 示例

本示例使用**LCase**函数返回字符串的小写版本。

```vb
Dim UpperCase, LowerCase
UpperCase = "Hello World 1234"    ' String to convert.
LowerCase = LCase(UpperCase)      ' Returns "hello world 1234".
```

### 另请参阅

- [StrConv](/official/Reference/VBA/Strings/StrConv)、[UCase](/official/Reference/VBA/Strings/UCase)函数