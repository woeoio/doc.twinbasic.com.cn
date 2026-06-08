---
title: "Mid ="
parent: Statements
permalink: /tB/Core/Mid-equals
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '19f396e9-091b-4ee3-849d-1e96235a0e32'
  PropagateID: '19f396e9-091b-4ee3-849d-1e96235a0e32'
  ReservedCode1: '81b78726-a9f6-45dd-9071-25476de9e9ed'
  ReservedCode2: '81b78726-a9f6-45dd-9071-25476de9e9ed'
---

# Mid = 语句

用另一个字符串的字符替换 **Variant** (**String**) 变量中指定数量的字符。

::: info
本页记录 **Mid =** *语句*（字符串修改）。不相关的 [**Mid** 函数](/official/Reference/VBA/Strings/Mid) 返回子字符串而不修改其参数。
:::

语法：
> **Mid(** *stringvar* **,** *start* [ **,** *length* ] **) =** *string*

*stringvar*
: 要修改的字符串变量的名称。

*start*
: **Variant** (**Long**)。*stringvar* 中开始替换文本的字符位置。

*length*
: *可选* **Variant** (**Long**)。要替换的字符数。如果省略，使用 *string* 的全部内容。

*string*
: 替换 *stringvar* 部分内容的字符串表达式。

替换的字符数始终小于或等于 *stringvar* 中的字符数。

::: info
使用 [**MidB =**](/official/Reference/Core/MidB-equals) 语句处理字符串中包含的字节数据。在 **MidB =** 语句中，*start* 指定 *stringvar* 中开始替换的字节位置，*length* 指定要替换的字节数。
:::

### 示例

本示例使用 **Mid =** 语句用另一个字符串的字符替换字符串变量中指定数量的字符。

```vb
Dim MyString
MyString = "The dog jumps" ' Initialize string.
Mid(MyString, 5, 3) = "fox" ' MyString = "The fox jumps".
Mid(MyString, 5) = "cow" ' MyString = "The cow jumps".
Mid(MyString, 5) = "cow jumped over" ' MyString = "The cow jumpe".
Mid(MyString, 5, 3) = "duck" ' MyString = "The duc jumpe".
```

### 另请参阅

- [**MidB =** 语句](/official/Reference/Core/MidB-equals)
- [**Mid** 函数](/official/Reference/VBA/Strings/Mid)
- [**LSet** 语句](/official/Reference/Core/LSet)
- [**RSet** 语句](/official/Reference/Core/RSet)