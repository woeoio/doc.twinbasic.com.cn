---
title: Right
parent: Strings Module
permalink: /tB/Modules/Strings/Right
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5863a8a9-9279-4f5a-8789-fbc41d785892'
  PropagateID: '5863a8a9-9279-4f5a-8789-fbc41d785892'
  ReservedCode1: 'a402e900-1a11-4f99-8e0e-39f825ec6ff7'
  ReservedCode2: 'a402e900-1a11-4f99-8e0e-39f825ec6ff7'
---

# Right, RightB

返回一个**String**，包含从字符串右侧开始的指定数量的字符。

语法：

- **Right$(** *string*, *length* **)**, **Right(** *string*, *length* **)**
- **RightB$(** *string*, *length* **)**, **RightB(** *string*, *length* **)**

*string*
: *必需* 从中返回最右侧字符的字符串表达式。如果*string*包含**Null**，则返回**Null**。

*length*
: *必需* **Variant**（**Long**）。数值表达式，指示要返回的字符数。如果为0，则返回零长度字符串（`""`）。如果大于或等于*string*中的字符数，则返回整个字符串。

带`$`后缀的形式返回**String**；不带后缀的形式返回**Variant**（**String**）。

要确定*string*中的字符数，请使用[**Len**](/official/Reference/VBA/Strings/Len)函数。

::: info
使用**RightB**函数处理字符串中包含的字节数据。*length*指定的是字节数而非字符数。
:::

### 示例

本示例使用**Right**函数从字符串右侧返回指定数量的字符。

```vb
Dim AnyString, MyStr
AnyString = "Hello World"      ' Define string.
MyStr = Right(AnyString, 1)    ' Returns "d".
MyStr = Right(AnyString, 6)    ' Returns " World".
MyStr = Right(AnyString, 20)   ' Returns "Hello World".
```

### 另请参阅

- [Left](/official/Reference/VBA/Strings/Left)、[Len](/official/Reference/VBA/Strings/Len)、[Mid](/official/Reference/VBA/Strings/Mid)函数