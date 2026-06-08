---
title: InStrRev
parent: Strings Module
permalink: /tB/Modules/Strings/InStrRev
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3647fb08-b58a-49cc-bf60-5e9440ba5158'
  PropagateID: '3647fb08-b58a-49cc-bf60-5e9440ba5158'
  ReservedCode1: 'fa149172-adcc-4f13-9615-2dc2f1785638'
  ReservedCode2: 'fa149172-adcc-4f13-9615-2dc2f1785638'
---

# InStrRev

返回一个字符串在另一个字符串中从字符串末尾开始出现的位置。

语法：**InStrRev(** *stringcheck*, *stringmatch* [ **,** *start* [ **,** *compare* ] ] **)**

*stringcheck*
: *必需* 被搜索的字符串表达式。

*stringmatch*
: *必需* 要查找的字符串表达式。

*start*
: *可选* 数值表达式，设置每次搜索的起始位置。如果省略，则使用-1，表示从最后一个字符位置开始搜索。如果*start*包含**Null**，则会出错。

*compare*
: *可选* 数值，指示在计算子字符串时使用的比较类型。如果省略，则执行二进制比较。参见下面的设置。

*compare*参数可以取以下值：

| 常量                   | 值  | 描述                                                                             |
|------------------------|-----|----------------------------------------------------------------------------------|
| **vbUseCompareOption** | -1  | 使用[**Option Compare**](/official/Reference/Core/Option)语句的设置进行比较。    |
| **vbBinaryCompare**    | 0   | 执行二进制比较。                                                                  |
| **vbTextCompare**      | 1   | 执行文本比较。                                                                    |

**返回值：**

| 条件                                                | **InStrRev**返回值             |
|-----------------------------------------------------|--------------------------------|
| *stringcheck*为零长度                               | 0                              |
| *stringcheck*为**Null**                             | **Null**                       |
| *stringmatch*为零长度                               | *start*                        |
| *stringmatch*为**Null**                             | **Null**                       |
| *stringmatch*未找到                                 | 0                              |
| 在*stringcheck*中找到了*stringmatch*                | 找到匹配的位置                  |
| *start* > **Len**(*stringcheck*)                    | 0                              |

::: info
**InStrRev**函数的语法与[**InStr**](/official/Reference/VBA/Strings/InStr)函数的语法不同——注意搜索参数的顺序不同。
:::

除非*stringmatch*末尾字符的位置小于或等于*start*，否则**InStrRev**不会找到*stringmatch*的实例。

### 示例

本示例使用**InStrRev**查找子字符串的最后一次出现。

```vb
Debug.Print InStrRev("a.b.c", ".")       ' 4  — last dot
Debug.Print InStrRev("a.b.c", ".", 3)    ' 2  — last dot at or before position 3
Debug.Print InStrRev("a.b.c", "x")       ' 0  — not found
```

### 另请参阅

- [InStr](/official/Reference/VBA/Strings/InStr)函数