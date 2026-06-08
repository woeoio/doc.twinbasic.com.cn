---
title: "Print #"
parent: Statements
permalink: /tB/Core/Print
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2461be05-6967-4224-8cf6-e221058e27ee'
  PropagateID: '2461be05-6967-4224-8cf6-e221058e27ee'
  ReservedCode1: '00db201c-9b93-4e96-96a5-44e66180b95d'
  ReservedCode2: '00db201c-9b93-4e96-96a5-44e66180b95d'
---

# Print # 语句

将显示格式的数据写入顺序文件。

::: info
本页面记录的是**Print #***语句*（文件I/O）。不相关的`Debug.Print`语句在调试时写入**立即**窗口。
:::

语法：
> **Print** **#** *filenumber* **,** [ *outputlist* ]

*filenumber*
: 任何有效的文件号。

*outputlist*
: *可选* 要打印的表达式或表达式列表。*outputlist*的设置为：

  > [ { **Spc(***n***)** \| **Tab** [ **(***n***)** ] } ] [ *expression* ] [ *charpos* ]

  **Spc(***n***)**
  : 用于在输出中插入空格字符，*n*为要插入的空格字符数。

  **Tab(***n***)**
  : 用于将插入点定位到绝对列号，*n*为列号。使用不带参数的**Tab**将插入点定位到下一个打印区的开头。

  *expression*
  : 要打印的数值表达式或字符串表达式。

  *charpos*
  : 指定下一个字符的插入点。使用分号将插入点定位到最后显示字符之后。使用**Tab(***n***)**将插入点定位到绝对列号。使用不带参数的**Tab**将插入点定位到下一个打印区的开头。如果省略*charpos*，下一个字符打印在下一行。

使用**Print #**写入的数据通常用[**Line Input #**](/official/Reference/Core/Line-Input)或[**Input #**](/official/Reference/Core/Input)从文件中读取。

当省略*outputlist*且文件号后仅跟列表分隔符时，向文件打印一个空行。

多个表达式可以用空格或分号分隔。空格与分号效果相同。

对于**Boolean**数据，打印`True`或`False`。**True**和**False**关键字不会根据区域设置进行翻译。

**Date**数据使用系统识别的标准短日期格式写入文件。当日期或时间部分缺失或为零时，仅写入提供的部分。

如果*outputlist*数据为**Empty**，则不向文件写入任何内容。但如果*outputlist*数据为**Null**，则向文件写入`Null`。

对于**Error**数据，输出显示为`Error `*errorcode*。**Error**关键字不会根据区域设置进行翻译。

使用**Print #**写入文件的所有数据都具有国际化感知能力；即数据使用适当的小数分隔符正确格式化。

因为**Print #**将数据的映像写入文件，所以数据必须正确分隔才能正确打印。当使用不带参数的**Tab**将打印位置移动到下一个打印区时，**Print #**也会将打印字段之间的空格写入文件。

::: info
当稍后使用**Input #**语句从文件读取数据时，请使用[**Write #**](/official/Reference/Core/Write)语句代替**Print #**语句将数据写入文件。使用**Write #**可通过正确分隔来确保每个独立数据字段的完整性，以便使用**Input #**读回。使用**Write #**还能确保在任何区域设置中都能正确读取。
:::

### 示例

本示例使用**Print #**语句将数据写入文件。

```vb
Open "TESTFILE" For Output As #1 ' Open file for output.
Print #1, "This is a test" ' Print text to file.
Print #1, ' Print blank line to file.
Print #1, "Zone 1"; Tab; "Zone 2" ' Print in two print zones.
Print #1, "Hello"; " "; "World" ' Separate strings with space.
Print #1, Spc(5); "5 leading spaces " ' Print five leading spaces.
Print #1, Tab(10); "Hello" ' Print word at column 10.

' Assign Boolean, Date, Null and Error values.
Dim MyBool, MyDate, MyNull, MyError
MyBool = False : MyDate = #February 12, 1969# : MyNull = Null
MyError = CVErr(32767)
' True, False, Null, and Error are translated using locale settings of
' your system. Date literals are written using standard short date
' format.
Print #1, MyBool; " is a Boolean value"
Print #1, MyDate; " is a date"
Print #1, MyNull; " is a null value"
Print #1, MyError; " is an error value"
Close #1 ' Close file.
```

### 另请参阅

- [**Open** 语句](/official/Reference/Core/Open)
- [**Close** 语句](/official/Reference/Core/Close)
- [**Write #** 语句](/official/Reference/Core/Write)
- [**Input #** 语句](/official/Reference/Core/Input)
- [**Line Input #** 语句](/official/Reference/Core/Line-Input)