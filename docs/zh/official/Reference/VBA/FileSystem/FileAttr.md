---
title: FileAttr
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/FileAttr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '98b95649-8b97-4663-bf60-70dfc65209b1'
  PropagateID: '98b95649-8b97-4663-bf60-70dfc65209b1'
  ReservedCode1: 'aab18691-019c-4cdb-8190-318cf7302a18'
  ReservedCode2: 'aab18691-019c-4cdb-8190-318cf7302a18'
---

# FileAttr

返回一个**Long**，表示以**Open**语句打开的文件模式。

语法：**FileAttr(** *filenumber* **,** *returntype* **)**

*filenumber*
: *必需* **Integer**，包含任何有效的文件号。

*returntype*
: *必需* **Integer**，指示要返回的信息类型。必须为**1**以返回文件访问模式。

### 返回值

以下返回值表示文件访问模式：

| 模式        | 值  |
|-------------|:---:|
| **Input**   | 1   |
| **Output**  | 2   |
| **Random**  | 4   |
| **Append**  | 8   |
| **Binary**  | 32  |

### 示例

本示例使用**FileAttr**函数返回打开文件的模式。

```vb
Dim FileNum, Mode
FileNum = 1    ' Assign file number.
Open "TESTFILE" For Append As FileNum    ' Open file.
Mode = FileAttr(FileNum, 1)    ' Returns 8 (Append file mode).
Close FileNum    ' Close file.
```

### 另请参阅

- [LOF](/official/Reference/VBA/FileSystem/LOF)、[EOF](/official/Reference/VBA/FileSystem/EOF)函数