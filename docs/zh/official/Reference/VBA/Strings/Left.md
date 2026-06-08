---
title: Left
parent: Strings Module
permalink: /tB/Modules/Strings/Left
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cc727448-68d8-4de0-8723-9fa0fc290a75'
  PropagateID: 'cc727448-68d8-4de0-8723-9fa0fc290a75'
  ReservedCode1: 'b974377f-f46f-4324-8170-1796cfc23cae'
  ReservedCode2: 'b974377f-f46f-4324-8170-1796cfc23cae'
---

# Left, LeftB

返回一个**String**，包含从字符串左侧开始的指定数量的字符。

语法：

- **Left$(** *string*, *length* **)**, **Left(** *string*, *length* **)**
- **LeftB$(** *string*, *length* **)**, **LeftB(** *string*, *length* **)**

*string*
: *必需* 从中返回最左侧字符的字符串表达式。如果*string*包含**Null**，则返回**Null**。

*length*
: *必需* **Variant**（**Long**）。数值表达式，指示要返回的字符数。如果为0，则返回零长度字符串（`""`）。如果大于或等于*string*中的字符数，则返回整个字符串。

带`$`后缀的形式返回**String**；不带后缀的形式返回**Variant**（**String**）。

要确定*string*中的字符数，请使用[**Len**](/official/Reference/VBA/Strings/Len)函数。

::: info
使用**LeftB**函数处理字符串中包含的字节数据。*length*指定的是字节数而非字符数。
:::

### 示例

本示例使用**Left**函数从字符串左侧返回指定数量的字符。

```vb
Dim AnyString, MyStr
AnyString = "Hello World"    ' Define string.
MyStr = Left(AnyString, 1)   ' Returns "H".
MyStr = Left(AnyString, 7)   ' Returns "Hello W".
MyStr = Left(AnyString, 20)  ' Returns "Hello World".
```

### 另请参阅

- [Len](/official/Reference/VBA/Strings/Len)、[Mid](/official/Reference/VBA/Strings/Mid)、[Right](/official/Reference/VBA/Strings/Right)函数