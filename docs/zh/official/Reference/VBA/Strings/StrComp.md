---
title: StrComp
parent: Strings Module
permalink: /tB/Modules/Strings/StrComp
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fc5c1b56-f034-4922-9007-1afbe1e97ada'
  PropagateID: 'fc5c1b56-f034-4922-9007-1afbe1e97ada'
  ReservedCode1: '2814d6dd-a143-4889-aef3-26ba5a82f328'
  ReservedCode2: '2814d6dd-a143-4889-aef3-26ba5a82f328'
---

# StrComp

返回一个**Variant**（**Integer**），指示字符串比较的结果。

语法：**StrComp(** *string1*, *string2* [ **,** *compare* ] **)**

*string1*
: *必需* 任意有效的字符串表达式。

*string2*
: *必需* 任意有效的字符串表达式。

*compare*
: *可选* 指定字符串比较的类型。如果*compare*参数为**Null**，则会出错。如果省略*compare*，则由[**Option Compare**](/official/Reference/Core/Option)设置决定比较类型。

*compare*参数的设置为：

| 常量                   | 值  | 描述                                                     |
|------------------------|-----|----------------------------------------------------------|
| **vbUseCompareOption** | -1  | 使用**Option Compare**语句的设置进行比较。               |
| **vbBinaryCompare**    | 0   | 执行二进制比较。                                          |
| **vbTextCompare**      | 1   | 执行文本比较。                                            |

**返回值：**

| 条件                                   | **StrComp**返回值 |
|----------------------------------------|-------------------|
| *string1*小于*string2*                 | -1                |
| *string1*等于*string2*                 | 0                 |
| *string1*大于*string2*                 | 1                 |
| *string1*或*string2*为**Null**         | **Null**          |

### 示例

本示例使用**StrComp**函数返回字符串比较的结果。如果第三个参数为1，则执行文本比较；如果第三个参数为0或省略，则执行二进制比较。

```vb
Dim MyStr1, MyStr2, MyComp
MyStr1 = "ABCD": MyStr2 = "abcd"      ' Define variables.
MyComp = StrComp(MyStr1, MyStr2, 1)   ' Returns 0.
MyComp = StrComp(MyStr1, MyStr2, 0)   ' Returns -1.
MyComp = StrComp(MyStr2, MyStr1)      ' Returns 1.
```

### 另请参阅

- [InStr](/official/Reference/VBA/Strings/InStr)函数