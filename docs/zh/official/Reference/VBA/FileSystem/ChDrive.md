---
title: ChDrive
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/ChDrive
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd43e0e7d-c6a2-4854-a6ad-9a4d16898d6c'
  PropagateID: 'd43e0e7d-c6a2-4854-a6ad-9a4d16898d6c'
  ReservedCode1: 'bc21c8c3-fc9c-4408-940f-f0ec69678c51'
  ReservedCode2: 'bc21c8c3-fc9c-4408-940f-f0ec69678c51'
---

# ChDrive

更改当前驱动器。

语法：**ChDrive** *drive*

*drive*
: *必需* 字符串表达式，指定一个现有的驱动器。如果*drive*是零长度字符串("")，则当前驱动器不变。如果*drive*参数是多字符字符串，**ChDrive**仅使用第一个字母。

### 另请参阅

- [ChDir](/official/Reference/VBA/FileSystem/ChDir)、[MkDir](/official/Reference/VBA/FileSystem/MkDir)和[RmDir](/official/Reference/VBA/FileSystem/RmDir)语句
- [CurDir](/official/Reference/VBA/FileSystem/CurDir)函数

### 示例

本示例使用**ChDrive**语句更改当前驱动器。

```vb
ChDrive "D"   ' Make "D" the current drive.
```