---
title: Join
parent: Strings Module
permalink: /tB/Modules/Strings/Join
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9efddfa4-b4da-41c3-b222-42bc4e5dd67e'
  PropagateID: '9efddfa4-b4da-41c3-b222-42bc4e5dd67e'
  ReservedCode1: '4734fb57-316f-4518-b6a7-b9421f5bab56'
  ReservedCode2: '4734fb57-316f-4518-b6a7-b9421f5bab56'
---

# Join

返回一个通过连接数组中包含的多个子字符串而创建的字符串。

语法：**Join(** *sourcearray* [ **,** *delimiter* ] **)**

*sourcearray*
: *必需* 包含要连接的子字符串的一维数组。

*delimiter*
: *可选* 用于分隔返回字符串中子字符串的字符串字符。如果省略，则使用空格字符（`" "`）。如果*delimiter*为零长度字符串（`""`），则列表中的所有项不带分隔符连接。

### 示例

本示例使用**Join**用分隔符连接字符串数组。

```vb
Debug.Print Join(Array("one", "two", "three"), ", ")    ' "one, two, three"
Debug.Print Join(Array("a", "b", "c"), "-")             ' "a-b-c"
Debug.Print Join(Array("x", "y"), "")                   ' "xy"
```

### 另请参阅

- [Filter](/official/Reference/VBA/Strings/Filter)、[Split](/official/Reference/VBA/Strings/Split)函数