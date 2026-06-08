---
title: Seek
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/Seek
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3505e6d4-c944-4bab-8307-ab2e3bfbf7ef'
  PropagateID: '3505e6d4-c944-4bab-8307-ab2e3bfbf7ef'
  ReservedCode1: '0c186054-a232-49dc-8f8e-7afc1dbba475'
  ReservedCode2: '0c186054-a232-49dc-8f8e-7afc1dbba475'
---

# Seek

返回或设置使用**Open**语句打开的文件中的读/写位置。

## Seek函数

返回一个**Long**，指定打开文件中当前的读/写位置。

语法：**Seek(** *filenumber* **)**

*filenumber*
: *必需* **Integer**，包含有效的文件号。

**Seek**返回1到2,147,483,647（2^31 − 1）之间的值（包含边界值）。

| 模式                                          | 返回值                                                       |
|-----------------------------------------------|--------------------------------------------------------------|
| **Random**                                    | 下一条要读取或写入的记录的编号。                             |
| **Binary**、**Output**、**Append**、**Input** | 下一次操作发生时的字节位置。文件中的第一个字节位于位置1。    |

## Seek语句

设置打开文件中下一次读/写操作的位置。

语法：**Seek** [ **#** ] *filenumber*, *position*

*filenumber*
: *必需* 任何有效的文件号。

*position*
: *必需* 1--2,147,483,647范围内的数字，指示下一次读/写操作应发生的位置。

[Get](/official/Reference/Core/Get)和[Put](/official/Reference/Core/Put)语句中指定的记录号会覆盖由**Seek**执行的文件定位。

在**Seek**操作超过文件末尾后执行文件写入操作将扩展文件。尝试**Seek**到负数或零位置会产生错误。

### 示例

本示例假设`TESTFILE`包含用户自定义类型`Record`的记录。

```vb
Type Record    ' Define user-defined type.
    ID As Integer
    Name As String * 20
End Type
```

对于以**Random**模式打开的文件，**Seek**函数返回下一条记录的编号。

```vb
Dim MyRecord As Record
Open "TESTFILE" For Random As #1 Len = Len(MyRecord)
Do While Not EOF(1)    ' Loop until end of file.
    Get #1, , MyRecord    ' Read next record.
    Debug.Print Seek(1)    ' Print record number.
Loop
Close #1    ' Close file.
```

**Seek**语句可以设置记录位置。本示例以逆序读取记录。

```vb
Dim MyRecord As Record, MaxSize, RecordNumber
Open "TESTFILE" For Random As #1 Len = Len(MyRecord)
MaxSize = LOF(1) \ Len(MyRecord)    ' Get number of records in file.
For RecordNumber = MaxSize To 1 Step -1
    Seek #1, RecordNumber    ' Set position.
    Get #1, , MyRecord    ' Read record.
Next RecordNumber
Close #1    ' Close file.
```

对于以**Random**以外模式打开的文件，**Seek**返回或设置字节位置。

```vb
Dim MyChar
Open "TESTFILE" For Input As #1    ' Open file for reading.
Do While Not EOF(1)    ' Loop until end of file.
    MyChar = Input(1, #1)    ' Read next character.
    Debug.Print Seek(1)    ' Print byte position.
Loop
Close #1    ' Close file.
```

### 另请参阅

- [Loc](/official/Reference/VBA/FileSystem/Loc)函数
- [LOF](/official/Reference/VBA/FileSystem/LOF)函数
- [EOF](/official/Reference/VBA/FileSystem/EOF)函数