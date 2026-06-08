---
title: Trim
parent: Strings Module
permalink: /tB/Modules/Strings/Trim
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6d051df8-e6fd-4bf8-a5ca-d94cf9413559'
  PropagateID: '6d051df8-e6fd-4bf8-a5ca-d94cf9413559'
  ReservedCode1: '889cc8c7-a12d-4c35-9213-9df8a6aece21'
  ReservedCode2: '889cc8c7-a12d-4c35-9213-9df8a6aece21'
---

# Trim

返回一个**String**，包含指定字符串的副本，不带前导和尾部空格。

语法：**Trim$(** *string* **)**, **Trim(** *string* **)**

*string*
: *必需* 任意有效的字符串表达式。如果*string*包含**Null**，则返回**Null**。

带`$`后缀的形式返回**String**；不带后缀的形式返回**Variant**（**String**）。

### 示例

本示例使用**Trim**函数去除字符串变量的前导和尾部空格。

```vb
Dim MyString, TrimString
MyString = "  <-Trim->  "        ' Initialize string.
TrimString = Trim(MyString)      ' TrimString = "<-Trim->".
```

### 另请参阅

- [LTrim](/official/Reference/VBA/Strings/LTrim)、[RTrim](/official/Reference/VBA/Strings/RTrim)函数