---
title: Chr
parent: Strings Module
permalink: /tB/Modules/Strings/Chr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ef15f381-9c65-406b-b3bf-578de2b57667'
  PropagateID: 'ef15f381-9c65-406b-b3bf-578de2b57667'
  ReservedCode1: 'd50eab30-9d8f-4952-8269-523590c7b4d6'
  ReservedCode2: 'd50eab30-9d8f-4952-8269-523590c7b4d6'
---

# Chr, ChrB, ChrW

返回一个**String**，包含与指定字符代码相关联的字符。

语法：

- **Chr$(** *charcode* **)**, **Chr(** *charcode* **)**
- **ChrB$(** *charcode* **)**, **ChrB(** *charcode* **)**
- **ChrW$(** *charcode* **)**, **ChrW(** *charcode* **)**

*charcode*
: *必需* 一个标识字符的**Long**。

带`$`后缀的形式返回**String**；不带后缀的形式返回**Variant**（**String**）。

0--31的数字与标准的不可打印ASCII码相同。例如，`Chr(10)`返回换行符。*charcode*的正常范围为0--255。但在DBCS系统上，*charcode*的实际范围为-32768--65535。

::: info
**ChrB**函数用于处理**String**中包含的字节数据。**ChrB**不返回可能是一个或两个字节的字符，而是始终返回单个字节。

**ChrW**函数返回包含Unicode字符的**String**。
:::

函数[**Asc**、**AscB**和**AscW**](/official/Reference/VBA/Strings/Asc)与**Chr**、**ChrB**和**ChrW**互为相反。**Asc**函数将字符串转换为整数。

### 示例

本示例使用**Chr**函数返回与指定字符代码相关联的字符。

```vb
Dim MyChar
MyChar = Chr(65)    ' Returns A.
MyChar = Chr(97)    ' Returns a.
MyChar = Chr(62)    ' Returns >.
MyChar = Chr(37)    ' Returns %.
```

### 另请参阅

- [Asc](/official/Reference/VBA/Strings/Asc)函数