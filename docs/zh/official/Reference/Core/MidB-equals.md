---
title: "MidB ="
parent: Statements
permalink: /tB/Core/MidB-equals
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '925ee1a0-58d5-4da0-a83b-af1d2fb7b89d'
  PropagateID: '925ee1a0-58d5-4da0-a83b-af1d2fb7b89d'
  ReservedCode1: '2ea7e991-cd7b-4415-b336-5cfc997734a6'
  ReservedCode2: '2ea7e991-cd7b-4415-b336-5cfc997734a6'
---

# MidB = 语句

用另一个字符串的字节替换 **Variant** (**String**) 变量中指定数量的字节。[**Mid =**](/official/Reference/Core/Mid-equals) 语句的字节模式对应版本。

语法：
> **MidB(** *stringvar* **,** *start* [ **,** *length* ] **) =** *string*

*stringvar*
: 要修改的字符串变量的名称。

*start*
: **Variant** (**Long**)。*stringvar* 中开始替换字节的字节位置。

*length*
: *可选* **Variant** (**Long**)。要替换的字节数。如果省略，使用 *string* 的全部内容。

*string*
: 其字节替换 *stringvar* 部分内容的字符串表达式。

替换的字节数始终小于或等于 *stringvar* 中的字节数。

**MidB =** 是 [**Mid =**](/official/Reference/Core/Mid-equals) 的字节定位形式：在此形式中，*start* 和 *length* 计算底层缓冲区的字节而非字符。这在双字节字符集语言中很重要，其中一个字符可能占用两个字节。

### 另请参阅

- [**Mid =** 语句](/official/Reference/Core/Mid-equals)
- [**MidB** 函数](/official/Reference/VBA/Strings/Mid)
- [**LSet** 语句](/official/Reference/Core/LSet)
- [**RSet** 语句](/official/Reference/Core/RSet)