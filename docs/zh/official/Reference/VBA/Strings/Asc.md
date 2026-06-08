---
title: Asc
parent: Strings Module
permalink: /tB/Modules/Strings/Asc
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '94902e07-b902-4f5f-80a4-f95dd7153eeb'
  PropagateID: '94902e07-b902-4f5f-80a4-f95dd7153eeb'
  ReservedCode1: '20bf312b-44fb-4b8d-bfe2-2e504e578282'
  ReservedCode2: '20bf312b-44fb-4b8d-bfe2-2e504e578282'
---

# Asc, AscB, AscW

返回一个**Integer**，表示与字符串中第一个字母对应的字符代码。

语法：

- **Asc(** *string* **)**
- **AscB(** *string* **)**
- **AscW(** *string* **)**

*string*
: *必需* 任意有效的字符串表达式。如果*string*不包含任何字符，将产生运行时错误。

**Asc**的返回值范围在非DBCS系统上为0--255，在DBCS系统上为-32768--32767。

::: info
**AscB**函数用于处理字符串中包含的字节数据。**AscB**不返回第一个字符的字符代码，而是返回第一个字节。**AscW**函数返回Unicode字符代码。
:::

函数[**Chr**、**ChrB**和**ChrW**](/official/Reference/VBA/Strings/Chr)与**Asc**、**AscB**和**AscW**互为相反。**Chr**函数将整数转换为字符串。

### 示例

本示例使用**Asc**函数返回与字符串中第一个字母对应的字符代码。

```vb
Dim MyNumber
MyNumber = Asc("A")        ' Returns 65.
MyNumber = Asc("a")        ' Returns 97.
MyNumber = Asc("Apple")    ' Returns 65.
```

### 另请参阅

- [Chr](/official/Reference/VBA/Strings/Chr)函数