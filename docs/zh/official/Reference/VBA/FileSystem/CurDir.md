---
title: CurDir
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/CurDir
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6c040317-bd56-4ce2-b5e2-409e1ff9db13'
  PropagateID: '6c040317-bd56-4ce2-b5e2-409e1ff9db13'
  ReservedCode1: '0cfc147f-0895-4ce9-911b-c9d9af2498f5'
  ReservedCode2: '0cfc147f-0895-4ce9-911b-c9d9af2498f5'
---

# CurDir

返回当前路径。

## CurDir函数

返回一个表示当前路径的**Variant**（**String**）。

语法：**CurDir** [ **(** *drive* **)** ]

*drive*
: *可选* 字符串表达式，指定一个现有的驱动器。如果未指定驱动器或*drive*为零长度字符串(`""`)，**CurDir**返回当前驱动器的路径。

### 示例

本示例使用**CurDir**函数返回当前路径。

```vb
' Assume current path on C drive is "C:\WINDOWS\SYSTEM".
' Assume current path on D drive is "D:\EXCEL".
' Assume C is the current drive.
Dim MyPath
MyPath = CurDir       ' Returns "C:\WINDOWS\SYSTEM".
MyPath = CurDir("C")  ' Returns "C:\WINDOWS\SYSTEM".
MyPath = CurDir("D")  ' Returns "D:\EXCEL".
```

## CurDir$函数

返回一个表示当前路径的**String**。

语法：**CurDir$** [ **(** *drive* **)** ]

*drive*
: *可选* 字符串表达式，指定一个现有的驱动器。如果未指定驱动器或*drive*为零长度字符串(`""`)，**CurDir$**返回当前驱动器的路径。

### 示例

本示例使用**CurDir$**函数返回当前路径。

```vb
' Assume current path on C drive is "C:\WINDOWS\SYSTEM".
' Assume current path on D drive is "D:\EXCEL".
' Assume C is the current drive.
Dim MyPath As String
MyPath = CurDir$       ' Returns "C:\WINDOWS\SYSTEM".
MyPath = CurDir$("C")  ' Returns "C:\WINDOWS\SYSTEM".
MyPath = CurDir$("D")  ' Returns "D:\EXCEL".
```

### 另请参阅

- [ChDir](/official/Reference/VBA/FileSystem/ChDir)、[ChDrive](/official/Reference/VBA/FileSystem/ChDrive)语句
- [Dir](/official/Reference/VBA/FileSystem/Dir)函数