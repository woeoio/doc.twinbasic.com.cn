---
title: Len
parent: Strings Module
permalink: /tB/Modules/Strings/Len
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6fd485d3-ba76-4221-8d04-4e377fa77e45'
  PropagateID: '6fd485d3-ba76-4221-8d04-4e377fa77e45'
  ReservedCode1: '23f986c7-6694-484b-8887-1055f1435f17'
  ReservedCode2: '23f986c7-6694-484b-8887-1055f1435f17'
---

# Len, LenB

返回一个**Long**，包含字符串中的字符数或存储变量所需的字节数。

语法：

- **Len(** *string* **)**, **Len(** *varname* **)**
- **LenB(** *string* **)**, **LenB(** *varname* **)**

*string*
: 任意有效的字符串表达式。如果*string*包含**Null**，则返回**Null**。

*varname*
: 任意有效的变量名。如果*varname*包含**Null**，则返回**Null**。如果*varname*是**Variant**，**Len**将其视为**String**，始终返回其包含的字符数。

必须指定两个可能参数中的一个（且仅一个）。对于用户定义类型，**Len**返回写入文件时的大小。

::: info
使用**LenB**函数处理字符串中包含的字节数据，如双字节字符集（DBCS）语言。**LenB**不返回字符串中的字符数，而是返回用于表示该字符串的字节数。对于用户定义类型，**LenB**返回内存中的大小，包括元素之间的任何填充。
:::

::: info
当在用户定义数据类型中使用可变长度字符串时，**Len**可能无法确定所需的实际存储字节数。
:::

### 示例

本示例使用**Len**返回字符串中的字符数或存储变量所需的字节数。如果在类模块中出现，定义`CustomerRecord`的`Type...End Type`块前面必须加上**Private**关键字。在标准模块中，**Type**语句可以是**Public**。

```vb
Type CustomerRecord            ' Define user-defined type.
    ID As Integer              ' Place this definition in a
    Name As String * 10        ' standard module.
    Address As String * 30
End Type

Dim Customer As CustomerRecord    ' Declare variables.
Dim MyInt As Integer, MyCur As Currency
Dim MyString, MyLen
MyString = "Hello World"     ' Initialize variable.
MyLen = Len(MyInt)           ' Returns 2.
MyLen = Len(Customer)        ' Returns 42.
MyLen = Len(MyString)        ' Returns 11.
MyLen = Len(MyCur)           ' Returns 8.
```

### 另请参阅

- [Left](/official/Reference/VBA/Strings/Left)、[Mid](/official/Reference/VBA/Strings/Mid)、[Right](/official/Reference/VBA/Strings/Right)函数