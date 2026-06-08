---
title: FreeFile
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/FreeFile
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3516a4c2-a147-48ed-9052-4f2df2388fc6'
  PropagateID: '3516a4c2-a147-48ed-9052-4f2df2388fc6'
  ReservedCode1: '2b4889aa-a5f6-4917-826f-abcac6d7dd7d'
  ReservedCode2: '2b4889aa-a5f6-4917-826f-abcac6d7dd7d'
---

# FreeFile

返回一个**Integer**，表示**Open**语句可用的下一个文件号。

语法：**FreeFile** [ **(** *rangenumber* **)** ]

*rangenumber*
: *可选* **Variant**，指定返回下一个空闲文件号的范围。指定**0**（默认）返回1--255范围内的文件号。指定**1**返回256--511范围内的文件号。

使用**FreeFile**提供一个尚未使用的文件号。

### 示例

本示例使用**FreeFile**函数返回下一个可用的文件号。在循环中打开五个文件进行输出，并向每个文件写入一些示例数据。

```vb
Dim MyIndex, FileNumber
For MyIndex = 1 To 5    ' Loop 5 times.
    FileNumber = FreeFile    ' Get unused file number.
    Open "TEST" & MyIndex For Output As #FileNumber    ' Create file name.
    Write #FileNumber, "This is a sample."    ' Output text.
    Close #FileNumber    ' Close file.
Next MyIndex
```