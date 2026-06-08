---
title: Filter
parent: Strings Module
permalink: /tB/Modules/Strings/Filter
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '98eb12e5-58f0-4c12-b5ff-258952d9ef93'
  PropagateID: '98eb12e5-58f0-4c12-b5ff-258952d9ef93'
  ReservedCode1: '8830c7b5-93f4-4382-9a48-810c2b2f97b3'
  ReservedCode2: '8830c7b5-93f4-4382-9a48-810c2b2f97b3'
---

# Filter

返回一个从零开始的数组，包含基于指定筛选条件的字符串数组的子集。

语法：**Filter(** *sourcearray*, *match* [ **,** *include* [ **,** *compare* ] ] **)**

*sourcearray*
: *必需* 要搜索的一维字符串数组。

*match*
: *必需* 要搜索的字符串。

*include*
: *可选* **Boolean**值，指示是否返回包含或排除*match*的子字符串。如果*include*为**True**，**Filter**返回包含*match*作为子字符串的数组子集。如果*include*为**False**，**Filter**返回不包含*match*作为子字符串的数组子集。

*compare*
: *可选* 数值，指示要使用的字符串比较类型。参见下面的设置。

*compare*参数可以取以下值：

| 常量                   | 值  | 描述                                                                             |
|------------------------|-----|----------------------------------------------------------------------------------|
| **vbUseCompareOption** | -1  | 使用[**Option Compare**](/official/Reference/Core/Option)语句的设置进行比较。    |
| **vbBinaryCompare**    | 0   | 执行二进制比较。                                                                  |
| **vbTextCompare**      | 1   | 执行文本比较。                                                                    |

**Filter**函数返回的数组仅包含足够的元素来容纳匹配项的数量。

### 另请参阅

- [Join](/official/Reference/VBA/Strings/Join)、[Split](/official/Reference/VBA/Strings/Split)函数