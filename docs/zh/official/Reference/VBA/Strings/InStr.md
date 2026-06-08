---
title: InStr
parent: Strings Module
permalink: /tB/Modules/Strings/InStr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '88d9c38c-f1ea-4df4-bd24-b5ab22fd5596'
  PropagateID: '88d9c38c-f1ea-4df4-bd24-b5ab22fd5596'
  ReservedCode1: '4cf669c2-1043-43ea-a3c4-6d9832f2d740'
  ReservedCode2: '4cf669c2-1043-43ea-a3c4-6d9832f2d740'
---

# InStr, InStrB

返回一个**Variant**（**Long**），指定一个字符串在另一个字符串中首次出现的位置。

语法：

- **InStr(** [ *start* **,** ] *string1*, *string2* [ **,** *compare* ] **)**
- **InStrB(** [ *start* **,** ] *string1*, *string2* [ **,** *compare* ] **)**

*start*
: *可选* 数值表达式，设置每次搜索的起始位置。如果省略，则从第一个字符位置开始搜索。如果*start*包含**Null**，则会出错。如果指定了*compare*，则*start*参数是必需的。

*string1*
: *必需* 被搜索的字符串表达式。

*string2*
: *必需* 要查找的字符串表达式。

*compare*
: *可选* 指定字符串比较的类型。如果*compare*为**Null**，则会出错。如果省略*compare*，则由[**Option Compare**](/official/Reference/Core/Option)设置决定比较类型。指定有效的LCID（LocaleID）可在比较中使用区域特定规则。

*compare*参数的设置为：

| 常量                   | 值  | 描述                                                     |
|------------------------|-----|----------------------------------------------------------|
| **vbUseCompareOption** | -1  | 使用**Option Compare**语句的设置进行比较。               |
| **vbBinaryCompare**    | 0   | 执行二进制比较。                                          |
| **vbTextCompare**      | 1   | 执行文本比较。                                            |

**返回值：**

| 条件                                            | **InStr**返回值               |
|-------------------------------------------------|-------------------------------|
| *string1*为零长度                               | 0                             |
| *string1*为**Null**                             | **Null**                      |
| *string2*为零长度                               | *start*                       |
| *string2*为**Null**                             | **Null**                      |
| *string2*未找到                                 | 0                             |
| 在*string1*中找到了*string2*                    | 找到匹配的位置                |
| *start* > **Len**(*string2*)                    | 0                             |

**InStrB**函数用于处理字符串中包含的字节数据。**InStrB**不返回一个字符串在另一个字符串中首次出现的字符位置，而是返回字节位置。

### 示例

本示例使用**InStr**函数返回一个字符串在另一个字符串中首次出现的位置。

```vb
Dim SearchString, SearchChar, MyPos
SearchString = "XXpXXpXXPXXP"    ' String to search in.
SearchChar = "P"                 ' Search for "P".

' A textual comparison starting at position 4. Returns 6.
MyPos = InStr(4, SearchString, SearchChar, 1)

' A binary comparison starting at position 1. Returns 9.
MyPos = InStr(1, SearchString, SearchChar, 0)

' Comparison is binary by default (last argument is omitted).
MyPos = InStr(SearchString, SearchChar)    ' Returns 9.

MyPos = InStr(1, SearchString, "W")    ' Returns 0.
```

### 另请参阅

- [InStrRev](/official/Reference/VBA/Strings/InStrRev)、[Replace](/official/Reference/VBA/Strings/Replace)、[StrComp](/official/Reference/VBA/Strings/StrComp)函数