---
title: MkDir
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/MkDir
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9ed22c00-8aef-4e4a-bfa8-b1ceb571ec2e'
  PropagateID: '9ed22c00-8aef-4e4a-bfa8-b1ceb571ec2e'
  ReservedCode1: '36cd6ebc-bad9-40d7-b6c6-2700ea2cc7b8'
  ReservedCode2: '36cd6ebc-bad9-40d7-b6c6-2700ea2cc7b8'
---

# MkDir

创建新目录或文件夹。

语法：**MkDir** *path*

*path*
: 字符串表达式，标识要创建的目录或文件夹。*path*可以包含驱动器。如果未指定驱动器，**MkDir**将在当前驱动器上创建新目录或文件夹。

### 另请参阅

- [ChDir](/official/Reference/VBA/FileSystem/ChDir)、[ChDrive](/official/Reference/VBA/FileSystem/ChDrive)、[RmDir](/official/Reference/VBA/FileSystem/RmDir)语句
- [CurDir](/official/Reference/VBA/FileSystem/CurDir)、[Dir](/official/Reference/VBA/FileSystem/Dir)函数

### 示例

本示例使用**MkDir**语句创建目录或文件夹。如果未指定驱动器，则在当前驱动器上创建新目录或文件夹。

```vb
MkDir "MYDIR"   ' Make new directory or folder.
```