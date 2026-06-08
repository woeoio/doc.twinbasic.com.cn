---
title: LTrim
parent: Strings Module
permalink: /tB/Modules/Strings/LTrim
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '59d6e6c4-88eb-4404-8b0d-471854731016'
  PropagateID: '59d6e6c4-88eb-4404-8b0d-471854731016'
  ReservedCode1: 'ac46e919-f948-4a0f-865d-080df61dbd65'
  ReservedCode2: 'ac46e919-f948-4a0f-865d-080df61dbd65'
---

# LTrim

返回一个**String**，包含指定字符串的副本，不带前导空格。

语法：**LTrim$(** *string* **)**, **LTrim(** *string* **)**

*string*
: *必需* 任意有效的字符串表达式。如果*string*包含**Null**，则返回**Null**。

带`$`后缀的形式返回**String**；不带后缀的形式返回**Variant**（**String**）。

### 示例

本示例使用**LTrim**函数去除字符串变量的前导空格。

```vb
Dim MyString, TrimString
MyString = "  <-Trim->  "         ' Initialize string.
TrimString = LTrim(MyString)      ' TrimString = "<-Trim->  ".
```

### 另请参阅

- [RTrim](/official/Reference/VBA/Strings/RTrim)、[Trim](/official/Reference/VBA/Strings/Trim)函数