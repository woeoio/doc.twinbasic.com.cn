---
title: Reset
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/Reset
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '86917635-760f-4e62-a86c-4b97b8e0f411'
  PropagateID: '86917635-760f-4e62-a86c-4b97b8e0f411'
  ReservedCode1: '99b2c620-2647-4980-b752-e5d3b2e0698a'
  ReservedCode2: '99b2c620-2647-4980-b752-e5d3b2e0698a'
---

# Reset

关闭所有使用**Open**语句打开的磁盘文件。

语法：**Reset**

**Reset**语句关闭所有由[Open](/official/Reference/Core/Open)语句打开的活动文件，并将所有文件缓冲区的内容写入磁盘。

### 示例

本示例使用**Reset**语句关闭所有打开的文件并将所有文件缓冲区的内容写入磁盘。

```vb
Dim FileNumber
For FileNumber = 1 To 5    ' Loop 5 times.
    Open "TEST" & FileNumber For Output As #FileNumber
    Write #FileNumber, "Hello World"    ' Write data to file.
Next FileNumber
Reset    ' Close files and write contents to disk.
```

### 另请参阅

- [Close](/official/Reference/Core/Close)语句