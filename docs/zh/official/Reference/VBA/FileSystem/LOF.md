---
title: LOF
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/LOF
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '725f8538-0686-4e39-a66e-ddcaf5a3f61a'
  PropagateID: '725f8538-0686-4e39-a66e-ddcaf5a3f61a'
  ReservedCode1: 'a57d870e-4a17-4651-9b3f-80d978670432'
  ReservedCode2: 'a57d870e-4a17-4651-9b3f-80d978670432'
---

# LOF

返回一个**Long**，表示使用**Open**语句打开的文件的大小（字节）。

语法：**LOF(** *filenumber* **)**

*filenumber*
: *必需* **Integer**，包含有效的文件号。

::: info
使用**FileLen**函数获取未打开文件的长度。
:::

### 示例

本示例使用**LOF**函数确定打开文件的大小。本示例假设`TESTFILE`是一个包含示例数据的文本文件。

```vb
Dim FileLength
Open "TESTFILE" For Input As #1    ' Open file.
FileLength = LOF(1)    ' Get length of file.
Close #1    ' Close file.
```

### 另请参阅

- [EOF](/official/Reference/VBA/FileSystem/EOF)函数