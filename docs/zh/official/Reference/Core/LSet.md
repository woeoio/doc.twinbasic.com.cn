---
title: LSet
parent: Statements
permalink: /tB/Core/LSet
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fef2be5d-eafd-4d25-9954-12012e3844bf'
  PropagateID: 'fef2be5d-eafd-4d25-9954-12012e3844bf'
  ReservedCode1: '2d4463a3-0028-458b-8e4a-9d071b896d4b'
  ReservedCode2: '2d4463a3-0028-458b-8e4a-9d071b896d4b'
---

# LSet

在字符串变量中左对齐字符串，或将一个用户自定义类型的变量复制到另一个不同用户自定义类型的变量。

语法：
- > **LSet** *stringvar* **=** *string*
- > **LSet** *varname1* **=** *varname2*

*stringvar*
: 字符串变量的名称。

*string*
: 要在 *stringvar* 中左对齐的字符串表达式。

*varname1*
: 被复制到的用户自定义类型的变量名。

*varname2*
: 从中复制的用户自定义类型的变量名。

**LSet** 用空格替换 *stringvar* 中的剩余字符。

如果 *string* 比 *stringvar* 长，**LSet** 只将最左边的字符（最多到 *stringvar* 的长度）放入 *stringvar*。

::: warning
使用 **LSet** 将一种用户自定义类型的变量复制到另一种不同用户自定义类型的变量不推荐。将一种数据类型的数据复制到为不同数据类型保留的空间中可能导致不可预测的结果。当变量从一个用户自定义类型复制到另一个时，一个变量的二进制数据被复制到另一个的内存空间，而不考虑为元素指定的数据类型。
:::

### 示例

本示例使用 **LSet** 语句在字符串变量中左对齐字符串。虽然 **LSet** 也可以用于将一种用户自定义类型的变量复制到另一种兼容但不同的用户自定义类型的变量，但不推荐这种做法；由于数据结构在不同平台上的实现不同，这种 **LSet** 的用法无法保证可移植性。

```vb
Dim MyString
MyString = "0123456789" ' Initialize string.
LSet MyString = "<-Left" ' MyString contains "<-Left    ".
```

### 另请参阅

- [**RSet** 语句](/official/Reference/Core/RSet)
- [**Mid =** 语句](/official/Reference/Core/Mid-equals)
- [**Let** 语句](/official/Reference/Core/Let)