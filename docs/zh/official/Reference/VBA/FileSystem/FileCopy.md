---
title: FileCopy
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/FileCopy
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '11770cde-b84a-41d9-bb39-fa1b964721c9'
  PropagateID: '11770cde-b84a-41d9-bb39-fa1b964721c9'
  ReservedCode1: '90ca9a2b-8375-4ed4-9dfd-429460cd6c68'
  ReservedCode2: '90ca9a2b-8375-4ed4-9dfd-429460cd6c68'
---

# FileCopy

复制文件。

语法：**FileCopy** *source*, *destination*

*source*
: *必需* 字符串表达式，指定要复制的文件名。*source*可以包含目录或文件夹以及驱动器。

*destination*
: *必需* 字符串表达式，指定目标文件名。*destination*可以包含目录或文件夹以及驱动器。

对当前已打开的文件使用**FileCopy**时会产生错误。

### 示例

本示例使用**FileCopy**语句将一个文件复制到另一个文件。在本示例中，假设文件包含一些数据。

```vb
Dim SourceFile, DestinationFile 
SourceFile = "SRCFILE" ' Define source file name. 
DestinationFile = "DESTFILE" ' Define target file name. 
FileCopy SourceFile, DestinationFile ' Copy source to target. 
```

### 另请参阅

- [Kill](/official/Reference/VBA/FileSystem/Kill)语句
- [Name](/official/Reference/Core/Name)语句
- [FileLen](/official/Reference/VBA/FileSystem/FileLen)函数