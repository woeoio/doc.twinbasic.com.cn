---
title: Name
parent: Statements
permalink: /tB/Core/Name
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e84f4cec-92ae-4689-82db-62c3d363e647'
  PropagateID: 'e84f4cec-92ae-4689-82db-62c3d363e647'
  ReservedCode1: 'fa3cae0b-fc20-4600-ad33-b30154cb7461'
  ReservedCode2: 'fa3cae0b-fc20-4600-ad33-b30154cb7461'
---

# Name

重命名磁盘文件、目录或文件夹。

语法：
> **Name** *oldpathname* **As** *newpathname*

*oldpathname*
: 指定现有文件名和位置的字符串表达式；可以包含目录或文件夹以及驱动器。

*newpathname*
: 指定新文件名和位置的字符串表达式；可以包含目录或文件夹以及驱动器。*newpathname*指定的文件名不能已存在。

**Name**语句重命名文件，如有必要可将文件移动到不同的目录或文件夹。**Name**可以跨驱动器移动文件，但只有当*newpathname*和*oldpathname*位于同一驱动器时才能重命名现有目录或文件夹。**Name**不能创建新文件、目录或文件夹。

对已打开的文件使用**Name**会产生错误。重命名前必须先关闭已打开的文件。**Name**参数不能包含多字符（`*`）和单字符（`?`）通配符。

### 示例

本示例使用**Name**语句重命名文件。在此示例中，假设指定的目录或文件夹已存在。

```vb
Dim oldName, newName
oldName = "OLDFILE": newName = "NEWFILE" ' Define file names.
Name oldName As newName ' Rename file.

oldName = "C:\MYDIR\OLDFILE": newName = "C:\YOURDIR\NEWFILE"
Name oldName As newName ' Move and rename file.
```

### 另请参阅

- [**Kill** 语句](/official/Reference/VBA/FileSystem/Kill)
- [**FileCopy** 过程](/official/Reference/VBA/FileSystem/FileCopy)
- [**MkDir** 语句](/official/Reference/VBA/FileSystem/MkDir)
- [**RmDir** 语句](/official/Reference/VBA/FileSystem/RmDir)