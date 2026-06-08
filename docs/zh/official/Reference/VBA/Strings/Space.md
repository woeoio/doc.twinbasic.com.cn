---
title: Space
parent: Strings Module
permalink: /tB/Modules/Strings/Space
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6b1aad8f-2e55-4494-9070-4edc7c3b1898'
  PropagateID: '6b1aad8f-2e55-4494-9070-4edc7c3b1898'
  ReservedCode1: '440a79f0-7919-4925-8399-1ec0073f79fd'
  ReservedCode2: '440a79f0-7919-4925-8399-1ec0073f79fd'
---

# Space

返回一个由指定数量空格组成的**String**。

语法：**Space$(** *number* **)**, **Space(** *number* **)**

*number*
: *必需* 字符串中的空格数。

带`$`后缀的形式返回**String**；不带后缀的形式返回**Variant**（**String**）。

**Space**函数对于格式化输出和清除定长字符串中的数据非常有用。

### 示例

本示例使用**Space**函数返回由指定数量空格组成的字符串。

```vb
Dim MyString
' Returns a string with 10 spaces.
MyString = Space(10)

' Insert 10 spaces between two strings.
MyString = "Hello" & Space(10) & "World"
```

### 另请参阅

- [String](/official/Reference/VBA/Strings/String)函数