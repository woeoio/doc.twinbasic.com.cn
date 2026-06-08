---
title: "Input, Input$"
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/Input
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'be676f0b-6339-4b35-b811-22bf4e84a3aa'
  PropagateID: 'be676f0b-6339-4b35-b811-22bf4e84a3aa'
  ReservedCode1: 'c67b0ed4-52bd-4dc7-9b4c-900089682b44'
  ReservedCode2: 'c67b0ed4-52bd-4dc7-9b4c-900089682b44'
---

# Input, Input$

返回从以**Input**或**Binary**模式打开的文件中读取的固定数量字符。

语法：
- **Input(** *Number* **,** [ **#** ] *FileNumber* **)** --- 返回**Variant**。
- **Input$(** *Number* **,** [ **#** ] *FileNumber* **)** --- 返回**String**。

*Number*
: *必需* 要返回的字符数。

*FileNumber*
: *必需* 用于以[**Open**](/official/Reference/Core/Open)语句打开文件的文件号。

使用**Input**读取的数据通常由**Print #**或**[Put](/official/Reference/Core/Put)**写入文件。此函数仅适用于以**Input**或**Binary**模式打开的文件。

与**Input #**语句不同，**Input**函数返回它读取的所有字符，包括逗号、回车符、换行符、引号和前导空格。

对于以**Binary**访问模式打开的文件，尝试使用**Input**读取文件直到[**EOF**](/official/Reference/VBA/FileSystem/EOF)返回**True**会产生错误。使用**Input**读取二进制文件时，请使用[**LOF**](/official/Reference/VBA/FileSystem/LOF)和[**Loc**](/official/Reference/VBA/FileSystem/Loc)代替**EOF**，或在需要**EOF**时使用**[Get](/official/Reference/Core/Get)**。

::: info
对文本文件中包含的字节数据使用[**InputB**](/official/Reference/VBA/FileSystem/InputB)。使用**InputB**时，*Number*指定要返回的字节数而非字符数。
:::

### 示例

本示例使用**Input**函数从文件中逐字符读取并输出到立即窗口。假设*TESTFILE*是一个包含几行示例数据的文本文件。

```vb
Dim MyChar As Variant
Open "TESTFILE" For Input As #1     ' Open file.
Do While Not EOF(1)                 ' Loop until end of file.
    MyChar = Input(1, #1)           ' Get one character.
    Debug.Print MyChar              ' Print to the immediate window.
Loop
Close #1                            ' Close file.
```

### 另请参阅

- [InputB, InputB$](/official/Reference/VBA/FileSystem/InputB)函数
- [Open](/official/Reference/Core/Open)语句
- [EOF](/official/Reference/VBA/FileSystem/EOF)、[LOF](/official/Reference/VBA/FileSystem/LOF)、[Loc](/official/Reference/VBA/FileSystem/Loc)函数