---
title: "Width #"
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/Width
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9e33ae5e-e03a-4310-a474-527f247ec2c9'
  PropagateID: '9e33ae5e-e03a-4310-a474-527f247ec2c9'
  ReservedCode1: 'e98028ab-c339-457e-a1b5-c78ac8042eda'
  ReservedCode2: 'e98028ab-c339-457e-a1b5-c78ac8042eda'
---

# Width #

为以[**Open**](/official/Reference/Core/Open)语句打开的文件分配输出行宽。

语法：**Width #** *FileNumber* **,** *Width*

*FileNumber*
: *必需* 用于打开文件的文件号。

*Width*
: *必需* 0--255范围内的数值表达式（包含边界值），指示每行显示多少字符后换行。如果*Width*等于`0`，则行长度没有限制。默认为`0`。

### 示例

本示例将输出行宽设置为5——每行写入5个字符后通道换行。

```vb
Dim I As Long
Open "TESTFILE" For Output As #1     ' Open file for output.
Width #1, 5                          ' Set output line width to 5.
For I = 0 To 9                       ' Loop 10 times.
    Print #1, Chr(48 + I);           ' Prints five characters per line.
Next I
Close #1                             ' Close file.
```

### 另请参阅

- [Open](/official/Reference/Core/Open)语句
- [Print #](/official/Reference/Core/Print)语句