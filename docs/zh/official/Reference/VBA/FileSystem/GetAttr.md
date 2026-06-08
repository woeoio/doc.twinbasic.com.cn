---
title: GetAttr
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/GetAttr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '891f806b-5828-43e3-a9be-af714294306b'
  PropagateID: '891f806b-5828-43e3-a9be-af714294306b'
  ReservedCode1: '6cfdfbec-6f53-4614-8790-5b941b4cd8bb'
  ReservedCode2: '6cfdfbec-6f53-4614-8790-5b941b4cd8bb'
---

# GetAttr

返回一个**Integer**，表示文件、目录或文件夹的属性。

语法：**GetAttr(** *pathname* **)**

*pathname*
: *必需* 字符串表达式，指定文件名。*pathname*可以包含目录或文件夹以及驱动器。

### 返回值

**GetAttr**返回的值是以下属性值之和：

| 常量            | 值  | 描述                               |
|-----------------|:---:|------------------------------------|
| **vbNormal**    | 0   | 普通。                             |
| **vbReadOnly**  | 1   | 只读。                             |
| **vbHidden**    | 2   | 隐藏。                             |
| **vbSystem**    | 4   | 系统文件。                         |
| **vbDirectory** | 16  | 目录或文件夹。                     |
| **vbArchive**   | 32  | 自上次备份后文件已更改。           |

要确定设置了哪些属性，请使用**And**运算符对**GetAttr**返回的值与要测试的单个文件属性值进行按位比较。如果结果不为零，则该文件的该属性已设置。

```vb
Result = GetAttr(FName) And vbArchive
```

如果设置了存档属性，则返回非零值。

### 示例

本示例使用**GetAttr**函数确定文件和目录或文件夹的属性。

```vb
Dim MyAttr
' Assume file TESTFILE has hidden attribute set.
MyAttr = GetAttr("TESTFILE")    ' Returns 2.

' Returns nonzero if hidden attribute is set on TESTFILE.
Debug.Print MyAttr And vbHidden

' Assume file TESTFILE has hidden and read-only attributes set.
MyAttr = GetAttr("TESTFILE")    ' Returns 3.

' Returns nonzero if hidden attribute is set on TESTFILE.
Debug.Print MyAttr And (vbHidden + vbReadOnly)

' Assume MYDIR is a directory or folder.
MyAttr = GetAttr("MYDIR")    ' Returns 16.
```

### 另请参阅

- [Dir](/official/Reference/VBA/FileSystem/Dir)函数