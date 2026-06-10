---
title: "Write #"
parent: Statements
permalink: /tB/Core/Write
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "97132e18-8731-4031-b40d-e1a8078a7ad2"
  PropagateID: "97132e18-8731-4031-b40d-e1a8078a7ad2"
  ReservedCode1: "6b4e1ccc-ea4a-4499-885b-ad30f535df09"
  ReservedCode2: "6b4e1ccc-ea4a-4499-885b-ad30f535df09"
---

# Write # 语句

将数据写入顺序文件。

语法：

> **Write** **#** _filenumber_ **,** [ *outputlist* ]

_filenumber_
: 任何有效的文件号。

_outputlist_
: _可选_ 要写入文件的一个或多个以逗号分隔的数值表达式或字符串表达式。

使用**Write #**写入的数据通常用[**Input #**](/official/Reference/Core/Input)从文件中读取。

当省略*outputlist*且文件号后跟逗号时，向文件打印一个空行。多个表达式可以用空格、分号或逗号分隔。空格与分号效果相同。

使用**Write #**将数据写入文件时，遵循若干通用规则，使数据始终可以通过**Input #**正确读取和解释，无论区域设置如何：

- 数值数据始终使用句点作为小数分隔符写入。
- 对于**Boolean**数据，打印`#TRUE#`或`#FALSE#`。**True**和**False**关键字不会根据区域设置进行翻译。
- **Date**数据使用通用日期格式写入文件。当日期或时间部分缺失或为零时，仅写入提供的部分。
- 如果*outputlist*数据为**Empty**，则不向文件写入任何内容。但对于**Null**数据，写入`#NULL#`。
- 对于**Error**数据，输出显示为`#ERROR `_errorcode_`#`。**Error**关键字不会根据区域设置进行翻译。

与[**Print #**](/official/Reference/Core/Print)语句不同，**Write #**语句在将项写入文件时在项之间插入逗号，在字符串周围插入引号。列表中不需要显式分隔符。**Write #**在将*outputlist*中的最后一个字符写入文件后插入换行符——即回车换行符（**Chr**(13) + **Chr**(10)）。

::: warning
不要写入包含嵌入引号的字符串（例如`"1,2""X"`）供**Input #**语句使用；**Input #**会将此类字符串解析为两个完整且独立的字符串。
:::

### 示例

本示例使用**Write #**语句将原始数据写入顺序文件。

```vb
Open "TESTFILE" For Output As #1    ' Open file for output.
Write #1, "Hello World", 234    ' Write comma-delimited data.
Write #1, ' Write blank line.

Dim MyBool, MyDate, MyNull, MyError
' Assign Boolean, Date, Null, and Error values.
MyBool = False : MyDate = #February 12, 1969# : MyNull = Null
MyError = CVErr(32767)
' Boolean data is written as #TRUE# or #FALSE#. Date literals are
' written in universal date format, for example, #1994-07-13#
' represents July 13, 1994. Null data is written as #NULL#.
' Error data is written as #ERROR errorcode#.
Write #1, MyBool; " is a Boolean value"
Write #1, MyDate; " is a date"
Write #1, MyNull; " is a null value"
Write #1, MyError; " is an error value"
Close #1    ' Close file.
```

### 另请参阅

- [**Open** 语句](/official/Reference/Core/Open)
- [**Close** 语句](/official/Reference/Core/Close)
- [**Input #** 语句](/official/Reference/Core/Input)
- [**Line Input #** 语句](/official/Reference/Core/Line-Input)
- [**Print #** 语句](/official/Reference/Core/Print)
