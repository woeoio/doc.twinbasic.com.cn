---
title: Mid
parent: Strings Module
permalink: /tB/Modules/Strings/Mid
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1704c085-cb02-43e3-a55c-8ddd39ef5799'
  PropagateID: '1704c085-cb02-43e3-a55c-8ddd39ef5799'
  ReservedCode1: 'ce6c6129-60ca-4369-9aa5-935b267c086a'
  ReservedCode2: 'ce6c6129-60ca-4369-9aa5-935b267c086a'
---

# Mid, MidB

返回一个**String**，包含从字符串中指定数量的字符。

语法：

- **Mid$(** *string*, *start* [ **,** *length* ] **)**, **Mid(** *string*, *start* [ **,** *length* ] **)**
- **MidB$(** *string*, *start* [ **,** *length* ] **)**, **MidB(** *string*, *start* [ **,** *length* ] **)**

*string*
: *必需* 从中返回字符的字符串表达式。如果*string*包含**Null**，则返回**Null**。

*start*
: *必需* **Long**。*string*中开始提取部分的字符位置。如果*start*大于*string*中的字符数，**Mid**返回零长度字符串（`""`）。

*length*
: *可选* **Variant**（**Long**）。要返回的字符数。如果省略或文本中（包括*start*位置的字符）的字符数少于*length*，则返回从*start*位置到字符串末尾的所有字符。

带`$`后缀的形式返回**String**；不带后缀的形式返回**Variant**（**String**）。

要确定*string*中的字符数，请使用[**Len**](/official/Reference/VBA/Strings/Len)函数。

::: info
使用**MidB**函数处理字符串中包含的字节数据，如双字节字符集语言。参数指定的是字节数而非字符数。
:::

::: tip
使用[**Mid =**](/official/Reference/Core/Mid-equals)语句替换字符串中的字符。
:::

### 示例

本示例使用**Mid**函数从字符串中返回指定数量的字符。

```vb
Dim MyString, FirstWord, LastWord, MidWords
MyString = "Mid Function Demo"      ' Create text string.
FirstWord = Mid(MyString, 1, 3)     ' Returns "Mid".
LastWord = Mid(MyString, 14, 4)     ' Returns "Demo".
MidWords = Mid(MyString, 5)         ' Returns "Function Demo".
```

### 另请参阅

- [Left](/official/Reference/VBA/Strings/Left)、[Len](/official/Reference/VBA/Strings/Len)、[Right](/official/Reference/VBA/Strings/Right)函数
- [Mid =](/official/Reference/Core/Mid-equals)语句