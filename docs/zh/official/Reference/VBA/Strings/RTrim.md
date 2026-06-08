---
title: RTrim
parent: Strings Module
permalink: /tB/Modules/Strings/RTrim
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a9e4c319-6b42-46b2-882f-46fb92d2a5e9'
  PropagateID: 'a9e4c319-6b42-46b2-882f-46fb92d2a5e9'
  ReservedCode1: '00ca5839-1d8e-43ef-ab03-a0e9972843c9'
  ReservedCode2: '00ca5839-1d8e-43ef-ab03-a0e9972843c9'
---

# RTrim

返回一个**String**，包含指定字符串的副本，不带尾部空格。

语法：**RTrim$(** *string* **)**, **RTrim(** *string* **)**

*string*
: *必需* 任意有效的字符串表达式。如果*string*包含**Null**，则返回**Null**。

带`$`后缀的形式返回**String**；不带后缀的形式返回**Variant**（**String**）。

### 示例

本示例使用**RTrim**函数去除字符串变量的尾部空格。

```vb
Dim MyString, TrimString
MyString = "  <-Trim->  "         ' Initialize string.
TrimString = RTrim(MyString)      ' TrimString = "  <-Trim->".
```

### 另请参阅

- [LTrim](/official/Reference/VBA/Strings/LTrim)、[Trim](/official/Reference/VBA/Strings/Trim)函数