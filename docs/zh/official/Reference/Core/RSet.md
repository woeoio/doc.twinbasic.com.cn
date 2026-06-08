---
title: RSet
parent: Statements
permalink: /tB/Core/RSet
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '646d251a-ed5c-490c-b3d5-927931d833e4'
  PropagateID: '646d251a-ed5c-490c-b3d5-927931d833e4'
  ReservedCode1: '612b8df7-9b5b-4749-8325-e74092624a83'
  ReservedCode2: '612b8df7-9b5b-4749-8325-e74092624a83'
---

# RSet

在字符串变量中右对齐字符串。

语法：
> **RSet** *stringvar* **=** *string*

*stringvar*
: 字符串变量的名称。

*string*
: 要在*stringvar*中右对齐的字符串表达式。

如果*stringvar*比*string*长，**RSet**将*stringvar*中剩余的字符替换为空格，直到其开头。

::: info
**RSet**不能用于用户自定义类型。
:::

### 示例

本示例使用**RSet**语句在字符串变量中右对齐字符串。

```vb
Dim MyString
MyString = "0123456789"   ' Initialize string.
RSet MyString = "Right->" ' MyString contains "   Right->".
```

### 另请参阅

- [**LSet** 语句](/official/Reference/Core/LSet)
- [**Mid =** 语句](/official/Reference/Core/Mid-equals)
- [**Let** 语句](/official/Reference/Core/Let)