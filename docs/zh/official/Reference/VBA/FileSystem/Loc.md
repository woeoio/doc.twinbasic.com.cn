---
title: Loc
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/Loc
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3fab94ac-c47a-412b-b718-c250b9eab4bd'
  PropagateID: '3fab94ac-c47a-412b-b718-c250b9eab4bd'
  ReservedCode1: '60420e7c-dcf1-4de8-ab73-73ca5aa902e7'
  ReservedCode2: '60420e7c-dcf1-4de8-ab73-73ca5aa902e7'
---

# Loc

返回一个**Long**，指定打开文件中当前的读/写位置。

语法：**Loc(** *filenumber* **)**

*filenumber*
: *必需* **Integer**，包含有效的文件号。

### 备注

返回值取决于文件访问模式：

| 模式          | 返回值                                         |
|---------------|------------------------------------------------|
| **Random**    | 从文件读取或写入的最后一条记录的编号。         |
| **Sequential**| 文件中当前字节位置除以128。                    |
| **Binary**    | 最后读取或写入的字节位置。                     |

### 示例

本示例使用**Loc**函数返回打开文件中当前的读/写位置。本示例假设`TESTFILE`是一个包含几行示例数据的文本文件。

```vb
Dim MyLocation, MyLine
Open "TESTFILE" For Binary As #1    ' Open file.
Do While MyLocation < LOF(1)    ' Loop until end of file.
    MyLine = MyLine & Input(1, #1)    ' Read character into variable.
    MyLocation = Loc(1)    ' Get current position within file.
    Debug.Print MyLine; Tab; MyLocation
Loop
Close #1    ' Close file.
```

### 另请参阅

- [LOF](/official/Reference/VBA/FileSystem/LOF)函数
- [Seek](/official/Reference/VBA/FileSystem/Seek)函数
- [EOF](/official/Reference/VBA/FileSystem/EOF)函数