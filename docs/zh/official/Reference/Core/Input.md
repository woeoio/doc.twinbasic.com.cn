---
title: "Input #"
parent: Statements
permalink: /tB/Core/Input
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "00052947-9d8b-46a7-b382-593ff82a71a6"
  PropagateID: "00052947-9d8b-46a7-b382-593ff82a71a6"
  ReservedCode1: "a237abb8-f594-4d2c-956e-b27446843f05"
  ReservedCode2: "a237abb8-f594-4d2c-956e-b27446843f05"
---

# Input # 语句

从打开的顺序文件中读取数据并将数据赋值给变量。

::: info
本页记录 **Input #** _语句_。不相关的 [**Input** 函数](/official/Reference/VBA/FileSystem/Input) 从任何打开的文件读取固定数量的字符。
:::

语法：

> **Input** **#** _filenumber_ **,** _varlist_

_filenumber_
: 任何有效的文件号。

_varlist_
: 逗号分隔的变量列表，从文件读取的值赋给这些变量。_varlist_ 不能包含数组变量或对象变量。但描述数组元素或用户自定义类型的变量可以使用。

用 **Input #** 读取的数据通常用 [**Write #**](/official/Reference/Core/Write) 写入文件。此语句仅用于以 **Input** 或 **Binary** 模式打开的文件。读取时，标准字符串或数值数据不经修改赋值给变量。

下表说明了其他输入数据的处理方式：

| 数据                        | 赋给变量的值                                    |
| :-------------------------- | :---------------------------------------------- |
| 分隔逗号或空行              | **Empty**                                       |
| `#NULL#`                    | **Null**                                        |
| `#TRUE#` 或 `#FALSE#`       | **True** 或 **False**                           |
| `#`_yyyy-mm-dd hh:mm:ss_`#` | 表达式表示的日期和/或时间                       |
| `#ERROR `_errornumber_`#`   | _errornumber_（变量为标记为错误的 **Variant**） |

输入数据中的双引号（`"`）被忽略。

::: warning
不要为 **Input #** 语句编写包含嵌入引号的字符串（例如 `"1,2""X"`）；**Input #** 会将此字符串解析为两个完整独立的字符串。
:::

文件中的数据项必须以 _varlist_ 中变量的相同顺序出现，并与相同数据类型的变量匹配。如果变量是数值类型而数据不是数值类型，则将零值赋给变量。

如果在读取数据项时到达文件末尾，输入终止并发生错误。

::: info
要能够正确使用 **Input #** 将数据从文件读入变量，请使用 [**Write #**](/official/Reference/Core/Write) 语句而非 [**Print #**](/official/Reference/Core/Print) 语句将数据写入文件。使用 **Write #** 确保每个独立的数据字段被正确分隔。
:::

### 示例

本示例使用 **Input #** 语句从文件读取数据到两个变量。本示例假设 `TESTFILE` 是使用 **Write #** 语句写入几行数据的文件；即每行包含引号中的字符串和用逗号分隔的数字，如 `"Hello", 234`。

```vb
Dim MyString, MyNumber
Open "TESTFILE" For Input As #1    ' Open file for input.
Do While Not EOF(1)    ' Loop until end of file.
    Input #1, MyString, MyNumber    ' Read data into two variables.
    Debug.Print MyString, MyNumber    ' Print data to the Immediate window.
Loop
Close #1    ' Close file.
```

### 另请参阅

- [**Open** 语句](/official/Reference/Core/Open)
- [**Close** 语句](/official/Reference/Core/Close)
- [**Line Input #** 语句](/official/Reference/Core/Line-Input)
- [**Write #** 语句](/official/Reference/Core/Write)
- [**Print #** 语句](/official/Reference/Core/Print)
- [**Input** 函数](/official/Reference/VBA/FileSystem/Input)
- [**EOF** 函数](/official/Reference/VBA/FileSystem/EOF)
