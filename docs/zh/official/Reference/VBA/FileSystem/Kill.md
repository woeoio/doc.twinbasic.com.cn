---
title: Kill
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/Kill
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7a0834c9-511a-442f-96be-c2fa0b418c3a'
  PropagateID: '7a0834c9-511a-442f-96be-c2fa0b418c3a'
  ReservedCode1: '4d86ce36-ef2a-4341-8066-1d2205769286'
  ReservedCode2: '4d86ce36-ef2a-4341-8066-1d2205769286'
---

# Kill

从磁盘删除文件。

语法：**Kill** *pathname*

*pathname*
: *必需* 字符串表达式，指定要删除的一个或多个文件名。*pathname*可以包含目录或文件夹以及驱动器。

**Kill**支持使用多字符(`*`)和单字符(`?`)通配符指定多个文件。

使用**Kill**删除打开的文件时会产生错误。

::: info
要删除目录，请使用[**RmDir**](/official/Reference/VBA/FileSystem/RmDir)语句。
:::

### 示例

本示例使用**Kill**语句从磁盘删除文件。

```vb
' Assume TESTFILE is a file containing some data.
Kill "TestFile"   ' Delete file.

' Delete all *.TXT files in current directory.
Kill "*.TXT"
```

### 另请参阅

- [Dir](/official/Reference/VBA/FileSystem/Dir)函数
- [RmDir](/official/Reference/VBA/FileSystem/RmDir)、[MkDir](/official/Reference/VBA/FileSystem/MkDir)语句