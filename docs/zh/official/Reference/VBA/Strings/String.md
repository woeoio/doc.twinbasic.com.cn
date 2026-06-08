---
title: String
parent: Strings Module
permalink: /tB/Modules/Strings/String
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '43dc8ac1-3ca8-4f1f-b8a5-6ef6186fe53f'
  PropagateID: '43dc8ac1-3ca8-4f1f-b8a5-6ef6186fe53f'
  ReservedCode1: '651d8dca-d86e-40c8-860f-39af8ac8a45f'
  ReservedCode2: '651d8dca-d86e-40c8-860f-39af8ac8a45f'
---

# String

返回一个**String**，包含指定长度的重复字符字符串。

语法：**String$(** *number*, *character* **)**, **String(** *number*, *character* **)**

*number*
: *必需* **Long**。返回字符串的长度。如果*number*包含**Null**，则返回**Null**。

*character*
: *必需* **Variant**。指定字符的字符代码或字符串表达式，其第一个字符用于构建返回字符串。如果*character*包含**Null**，则返回**Null**。

带`$`后缀的形式返回**String**；不带后缀的形式返回**Variant**（**String**）。

当*character*为大于255的数字时，**String**使用以下公式将数字转换为有效的字符代码：*character* **Mod** 256。

### 示例

本示例使用**String**函数返回指定长度的重复字符字符串。

```vb
Dim MyString
MyString = String(5, "*")       ' Returns "*****".
MyString = String(5, 42)        ' Returns "*****".
MyString = String(10, "ABC")    ' Returns "AAAAAAAAAA".
```

### 另请参阅

- [Space](/official/Reference/VBA/Strings/Space)函数