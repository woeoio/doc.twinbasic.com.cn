---
title: Dir
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/Dir
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1bd9d6dd-101d-40b1-815e-b95e95fa518e'
  PropagateID: '1bd9d6dd-101d-40b1-815e-b95e95fa518e'
  ReservedCode1: '1c13628c-558d-461d-804f-dd8e9192d71b'
  ReservedCode2: '1c13628c-558d-461d-804f-dd8e9192d71b'
---

# Dir

返回一个**String**，表示与指定模式或文件属性匹配的文件、目录或文件夹的名称，或驱动器的卷标。

语法：**Dir** [ **(** *pathname* [ **,** *attributes* ] **)** ]

*pathname*
: *可选* 字符串表达式，指定文件名；可以包含目录或文件夹以及驱动器。如果未找到*pathname*，则返回零长度字符串(`""`)。

*attributes*
: *可选* 常量或数值表达式，其和指定文件属性。如果省略，返回与*pathname*匹配但无属性的文件。

*attributes*参数设置如下：

| 常量            | 值  | 描述                                                                    |
|-----------------|-----|-------------------------------------------------------------------------|
| **vbNormal**    | 0   | （默认）指定无属性的文件。                                              |
| **vbReadOnly**  | 1   | 指定只读文件以及无属性的文件。                                          |
| **vbHidden**    | 2   | 指定隐藏文件以及无属性的文件。                                          |
| **vbSystem**    | 4   | 指定系统文件以及无属性的文件。                                          |
| **vbVolume**    | 8   | 指定卷标；如果指定了任何其他属性，**vbVolume**将被忽略。                |
| **vbDirectory** | 16  | 指定目录或文件夹以及无属性的文件。                                      |

**Dir**支持使用多字符(`*`)和单字符(`?`)通配符指定多个文件。

第一次调用**Dir**必须指定*pathname*，否则会产生错误。当同时指定文件属性时，必须包含*pathname*。

**Dir**返回与*pathname*匹配的第一个文件名。要获取与*pathname*匹配的其他文件名，请不带参数再次调用**Dir**。当没有更多文件名匹配时，**Dir**返回零长度字符串(`""`)。返回零长度字符串后，后续调用必须指定*pathname*，否则会产生错误。

可以在不先检索当前*pathname*的所有匹配文件名的情况下指定新的*pathname*。但是，**Dir**不能递归调用。使用**vbDirectory**属性调用**Dir**不会持续返回子目录。

::: tip
由于Windows上文件名按不区分大小写的顺序检索，建议将返回的文件名存储在数组中并对数组排序。
:::

### 另请参阅

- [ChDir](/official/Reference/VBA/FileSystem/ChDir)、[ChDrive](/official/Reference/VBA/FileSystem/ChDrive)、[MkDir](/official/Reference/VBA/FileSystem/MkDir)、[RmDir](/official/Reference/VBA/FileSystem/RmDir)语句
- [CurDir](/official/Reference/VBA/FileSystem/CurDir)函数

### 示例

本示例使用**Dir**函数检查某些文件和目录是否存在，以及枚举文件夹中的文件。

```vb
Dim MyFile, MyPath, MyName

' Returns "WIN.INI" (on Microsoft Windows) if it exists.
MyFile = Dir("C:\WINDOWS\WIN.INI")

' Returns filename with specified extension. If more than one *.ini
' file exists, the first file found is returned.
MyFile = Dir("C:\WINDOWS\*.INI")

' Call Dir again without arguments to return the next *.ini file in
' the same directory.
MyFile = Dir

' Return first *.txt file, including files with a set hidden attribute.
MyFile = Dir("*.TXT", vbHidden)

' Display the names in C:\ that represent directories.
MyPath = "c:\"                       ' Set the path.
MyName = Dir(MyPath, vbDirectory)    ' Retrieve the first entry.
Do While MyName <> ""                ' Start the loop.
    ' Ignore the current directory and the encompassing directory.
    If MyName <> "." And MyName <> ".." Then
        ' Use bitwise comparison to make sure MyName is a directory.
        If (GetAttr(MyPath & MyName) And vbDirectory) = vbDirectory Then
            Debug.Print MyName       ' Display entry only if it
        End If                       ' represents a directory.
    End If
    MyName = Dir                     ' Get next entry.
Loop
```