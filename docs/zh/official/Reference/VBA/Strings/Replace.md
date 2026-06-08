---
title: Replace
parent: Strings Module
permalink: /tB/Modules/Strings/Replace
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b6afa6ba-091c-44f1-8aa5-810d019f54bb'
  PropagateID: 'b6afa6ba-091c-44f1-8aa5-810d019f54bb'
  ReservedCode1: '53bea10c-17ec-465a-90f9-4c2dd703d021'
  ReservedCode2: '53bea10c-17ec-465a-90f9-4c2dd703d021'
---

# Replace

返回一个字符串，该字符串是字符串表达式从起始位置（默认为1）开始的子字符串，其中指定的子字符串已被另一个子字符串替换了指定的次数。

语法：**Replace(** *expression*, *find*, *replace* [ **,** *start* [ **,** *count* [ **,** *compare* ] ] ] **)**

*expression*
: *必需* 包含要替换子字符串的字符串表达式。

*find*
: *必需* 要搜索的子字符串。

*replace*
: *必需* 替换子字符串。

*start*
: *可选* 要搜索和返回的*expression*子字符串的起始位置。如果省略，则假定为1。

*count*
: *可选* 要执行的子字符串替换次数。如果省略，默认值为-1，表示进行所有可能的替换。

*compare*
: *可选* 数值，指示在计算子字符串时使用的比较类型。参见下面的设置。

*compare*参数可以取以下值：

| 常量                   | 值  | 描述                                                                             |
|------------------------|-----|----------------------------------------------------------------------------------|
| **vbUseCompareOption** | -1  | 使用[**Option Compare**](/official/Reference/Core/Option)语句的设置进行比较。    |
| **vbBinaryCompare**    | 0   | 执行二进制比较。                                                                  |
| **vbTextCompare**      | 1   | 执行文本比较。                                                                    |

**返回值：**

| 条节                                      | **Replace**返回值                                                                                  |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------|
| *expression*为零长度                      | 零长度字符串（`""`）                                                                               |
| *expression*为**Null**                    | 出错。                                                                                             |
| *find*为零长度                            | *expression*的副本。                                                                               |
| *replace*为零长度                         | 删除所有*find*出现的*expression*副本。                                                             |
| *start* > **Len**(*expression*)           | 零长度字符串。字符串替换从*start*指示的位置开始。                                                  |
| *count*为0                                | *expression*的副本。                                                                               |

**Replace**函数的返回值是一个进行了替换的字符串，从*start*指定的位置开始，到*expression*字符串的末尾结束。它不是原始字符串从头到尾的副本。

### 另请参阅

- [InStr](/official/Reference/VBA/Strings/InStr)、[StrComp](/official/Reference/VBA/Strings/StrComp)函数