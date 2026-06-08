---
title: "Line Input #"
parent: Statements
permalink: /tB/Core/Line-Input
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f00b115e-fe5a-4369-b3d0-d757fc529c68'
  PropagateID: 'f00b115e-fe5a-4369-b3d0-d757fc529c68'
  ReservedCode1: '85cf6b3e-16da-418f-a4f0-08587589ac75'
  ReservedCode2: '85cf6b3e-16da-418f-a4f0-08587589ac75'
---

# Line Input # 语句

从打开的顺序文件中读取一行并赋值给 **String** 变量。

语法：
> **Line Input** **#** *filenumber* **,** *varname*

*filenumber*
: 任何有效的文件号。

*varname*
: 有效的 **Variant** 或 **String** 变量名。

用 **Line Input #** 读取的数据通常用 [**Print #**](/official/Reference/Core/Print) 写入文件。

**Line Input #** 语句从文件中逐字符读取，直到遇到回车符（**Chr**(13)）或回车换行序列（**Chr**(13) + **Chr**(10))。回车换行序列被跳过而非附加到字符串中。

### 示例

本示例使用 **Line Input #** 语句从顺序文件读取一行并赋值给变量。本示例假设 `TESTFILE` 是包含几行示例数据的文本文件。

```vb
Dim TextLine
Open "TESTFILE" For Input As #1 ' Open file.
Do While Not EOF(1) ' Loop until end of file.
    Line Input #1, TextLine ' Read line into variable.
    Debug.Print TextLine ' Print to the Immediate window.
Loop
Close #1 ' Close file.
```

### 另请参阅

- [**Open** 语句](/official/Reference/Core/Open)
- [**Close** 语句](/official/Reference/Core/Close)
- [**Input #** 语句](/official/Reference/Core/Input)
- [**Print #** 语句](/official/Reference/Core/Print)
- [**Write #** 语句](/official/Reference/Core/Write)
- [**EOF** 函数](/official/Reference/VBA/FileSystem/EOF)