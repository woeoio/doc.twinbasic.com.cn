---
title: FileDateTime
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/FileDateTime
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0db3abee-fc35-4d69-878c-1724549005ce'
  PropagateID: '0db3abee-fc35-4d69-878c-1724549005ce'
  ReservedCode1: '1bc37cc8-d01f-4f8a-8e7b-b9c3c484a76a'
  ReservedCode2: '1bc37cc8-d01f-4f8a-8e7b-b9c3c484a76a'
---

# FileDateTime

返回一个**Variant**（**Date**），指示文件创建或最后修改的日期和时间。

语法：**FileDateTime(** *pathname* **)**

*pathname*
: *必需* 字符串表达式，指定文件名。*pathname*可以包含目录或文件夹以及驱动器。

### 示例

本示例使用**FileDateTime**函数确定文件创建或最后修改的日期和时间。显示的日期和时间格式取决于系统的区域设置。

```vb
Dim MyStamp
' Assume TESTFILE was last modified on February 12, 1993 at 4:35:47 PM.
' Assume English/U.S. locale settings.
MyStamp = FileDateTime("TESTFILE")    ' Returns "2/12/93 4:35:47 PM".
```

### 另请参阅

- [FileLen](/official/Reference/VBA/FileSystem/FileLen)、[GetAttr](/official/Reference/VBA/FileSystem/GetAttr)函数