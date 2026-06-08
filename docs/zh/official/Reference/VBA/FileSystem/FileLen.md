---
title: FileLen
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/FileLen
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '239b2935-7006-490f-990a-ec46141e15c1'
  PropagateID: '239b2935-7006-490f-990a-ec46141e15c1'
  ReservedCode1: 'dbcdbcc8-d043-4877-a21b-1606940c6baa'
  ReservedCode2: 'dbcdbcc8-d043-4877-a21b-1606940c6baa'
---

# FileLen

返回一个**Long**，指定文件的字节长度。

语法：**FileLen(** *pathname* **)**

*pathname*
: *必需* 字符串表达式，指定文件名。*pathname*可以包含目录或文件夹以及驱动器。

如果调用**FileLen**函数时指定文件已打开，则返回的值表示文件打开前的大小。

::: info
使用[LOF](/official/Reference/VBA/FileSystem/LOF)函数获取打开文件的长度。
:::

### 示例

本示例使用**FileLen**函数返回文件的字节长度。在本示例中，假设`TESTFILE`是一个包含一些数据的文件。

```vb
Dim MySize
MySize = FileLen("TESTFILE")    ' Returns file length (bytes).
```

### 另请参阅

- [LOF](/official/Reference/VBA/FileSystem/LOF)函数
- [FileDateTime](/official/Reference/VBA/FileSystem/FileDateTime)函数