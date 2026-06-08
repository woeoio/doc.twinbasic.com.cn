---
title: RmDir
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/RmDir
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '45615a07-e72e-4ca0-a009-6f7fe6f26e08'
  PropagateID: '45615a07-e72e-4ca0-a009-6f7fe6f26e08'
  ReservedCode1: '05b72e22-b11e-4212-8288-ddf663cca741'
  ReservedCode2: '05b72e22-b11e-4212-8288-ddf663cca741'
---

# RmDir

删除现有目录或文件夹。

语法：**RmDir** *path*

*path*
: 字符串表达式，标识要删除的目录或文件夹。*path*可以包含驱动器。如果未指定驱动器，**RmDir**将删除当前驱动器上的目录或文件夹。

对包含文件的目录或文件夹使用**RmDir**时会产生错误。请先使用[**Kill**](/official/Reference/VBA/FileSystem/Kill)语句删除所有文件，然后再尝试删除目录或文件夹。

### 另请参阅

- [ChDir](/official/Reference/VBA/FileSystem/ChDir)、[ChDrive](/official/Reference/VBA/FileSystem/ChDrive)、[MkDir](/official/Reference/VBA/FileSystem/MkDir)语句
- [CurDir](/official/Reference/VBA/FileSystem/CurDir)、[Dir](/official/Reference/VBA/FileSystem/Dir)函数
- [Kill](/official/Reference/VBA/FileSystem/Kill)语句

### 示例

本示例使用**RmDir**语句删除现有目录或文件夹。

```vb
' Assume that MYDIR is an empty directory or folder.
RmDir "MYDIR"   ' Remove MYDIR.
```