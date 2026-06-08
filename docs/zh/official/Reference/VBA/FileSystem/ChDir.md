---
title: ChDir
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/ChDir
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '361d3f25-c235-45ae-921e-15da0037506f'
  PropagateID: '361d3f25-c235-45ae-921e-15da0037506f'
  ReservedCode1: '181108a3-d30c-4e81-9fb4-ac787503b25a'
  ReservedCode2: '181108a3-d30c-4e81-9fb4-ac787503b25a'
---

# ChDir

更改当前目录或文件夹。

语法：**ChDir** *path*

*path*
: *必需* 字符串表达式，标识哪个目录或文件夹成为新的默认目录或文件夹。*path*可以包含驱动器。如果未指定驱动器，**ChDir**将更改当前驱动器上的默认目录或文件夹。

**ChDir**语句更改默认目录但不更改默认驱动器。例如，如果默认驱动器是C，以下语句更改驱动器D上的默认目录，但C仍然是默认驱动器：

```vb
ChDir "D:\TMP" ' Make "D:\TMP" the current folder. 

ChDrive "D"    ' Make "D" the current drive. 
```

<!--
On Linux MacOS, the default drive always changes to the drive specified in *path*. Full path specifications begin with the volume name, and relative paths begin with a colon (**:**). **ChDir** resolves any aliases specified in the path: 

ChDir "MacDrive:Tmp" ' On the Macintosh. 

Note that when making relative directory changes, different symbols are used in Microsoft Windows and MacOS:

ChDir ".." ' Moves up one directory in Microsoft Windows. 

ChDir "::" ' Moves up one directory on the MacOS.

On MacOS, the default drive name is "HD" and portions of the pathname are separated by colons instead of backslashes. Similarly, you would specify MacOS folders instead of Windows. Finally, wildcard characters have no special meaning on the MacOS and are treated simply as characters.

-->

### 另请参阅

- [ChDrive](/official/Reference/VBA/FileSystem/ChDrive)、[MkDir](/official/Reference/VBA/FileSystem/MkDir)、[RmDir](/official/Reference/VBA/FileSystem/RmDir)语句
- [CurDir](/official/Reference/VBA/FileSystem/CurDir)、[Dir](/official/Reference/VBA/FileSystem/Dir)函数

### 示例

本示例使用**ChDir**语句更改当前目录或文件夹。

```vb
' Change current directory or folder to "MYDIR".
ChDir "MYDIR"

' Assume "C:" is the current drive. The following statement changes 
' the default directory on drive "D:". "C:" remains the current drive.
ChDir "D:\WINDOWS\SYSTEM"
```