---
title: 文件系统模块
parent: 内置模块
permalink: /zh/tB/Modules/FileSystem
---

# 文件系统模块
{: .no_toc }

文件系统模块提供了处理文件和目录操作的函数和语句集合。这些功能允许您创建、删除、复制、移动和管理文件系统中的文件和目录。

## 核心文件操作

### 文件复制和移动

- [**FileCopy**](/zh/tB/Modules/FileSystem/FileCopy) - 复制文件
- [**Name**](Name) - 重命名文件或移动文件
- [**Kill**](Kill) - 删除文件

### 目录操作

- [**ChDir**](/zh/tB/Modules/FileSystem/ChDir) - 更改当前目录
- [**ChDrive**](/zh/tB/Modules/FileSystem/ChDrive) - 更改当前驱动器
- [**MkDir**](MkDir) - 创建新目录
- [**RmDir**](RmDir) - 删除空目录
- [**CurDir**](CurDir) - 返回当前路径

## 文件信息

### 文件属性

- [**Dir**](Dir) - 返回匹配指定模式的文件名
- [**FileLen**](FileLen) - 返回文件长度
- [**FileAttr**](FileAttr) - 返回文件属性
- [**FileDateTime**](FileDateTime) - 返回文件创建或修改的日期时间
- [**GetAttr**](GetAttr) - 获取文件或目录属性
- [**SetAttr**](SetAttr) - 设置文件或目录属性

### 文件访问

- [**FreeFile**](FreeFile) - 返回可用的文件号
- [**Open**](Open) - 打开文件
- [**Close**](Close) - 关闭文件
- [**Reset**](Reset) - 关闭所有打开的文件

## 文件读写

### 顺序文件操作

- [**Input #**](Input) - 从顺序文件读取数据
- [**Line Input #**](Line-Input) - 从顺序文件读取整行
- [**Print #**](Print) - 向顺序文件写入数据
- [**Write #**](Write) - 向顺序文件写入数据

### 二进制文件操作

- [**Get #**](Get) - 从随机访问或二进制文件读取数据
- [**Put #**](Put) - 向随机访问或二进制文件写入数据

### 文件指针操作

- [**Seek**](Seek) - 设置或返回文件指针位置
- [**Loc**](Loc) - 返回当前文件指针位置
- [**EOF**](EOF) - 检查文件结束

## 使用示例

### 基本文件操作

```vb
Sub BasicFileOperations()
    Dim sourceFile As String
    Dim destFile As String

    sourceFile = "C:\Source\test.txt"
    destFile = "C:\Dest\test_copy.txt"

    ' 复制文件
    FileCopy sourceFile, destFile

    ' 重命名文件
    Name destFile As "C:\Dest\renamed_test.txt"

    ' 删除文件
    Kill "C:\Dest\renamed_test.txt"

    MsgBox "文件操作完成"
End Sub
```

### 目录管理

```vb
Sub DirectoryManagement()
    Dim newFolder As String
    Dim currentPath As String

    newFolder = "C:\MyNewFolder"

    ' 创建新目录
    If Dir(newFolder, vbDirectory) = "" Then
        MkDir newFolder
        MsgBox "目录创建成功: " & newFolder
    End If

    ' 保存当前路径
    currentPath = CurDir

    ' 更改目录
    ChDir newFolder
    MsgBox "当前目录: " & CurDir

    ' 返回原始目录
    ChDir currentPath

    ' 删除空目录
    ' RmDir newFolder
End Sub
```

### 文件信息查询

```vb
Sub FileInformation()
    Dim fileName As String
    Dim fileSize As Long
    Dim fileDate As Date

    fileName = "C:\Windows\notepad.exe"

    If Dir(fileName) <> "" Then
        ' 获取文件大小
        fileSize = FileLen(fileName)

        ' 获取文件日期
        fileDate = FileDateTime(fileName)

        MsgBox "文件名: " & fileName & vbCrLf & _
               "大小: " & Format(fileSize, "#,##0") & " 字节" & vbCrLf & _
               "修改日期: " & fileDate
    Else
        MsgBox "文件不存在"
    End If
End Sub
```

### 文件搜索

```vb
Sub FileSearch()
    Dim searchPath As String
    Dim fileName As String

    searchPath = "C:\Windows\\*.exe"

    ' 查找第一个匹配的文件
    fileName = Dir(searchPath)

    Do While fileName <> ""
        Debug.Print fileName
        ' 查找下一个匹配的文件
        fileName = Dir
    Loop
End Sub
```

## 文件模式

### 搜索模式

- `*` - 匹配任意数量的字符
- `?` - 匹配单个字符
- `[charlist]` - 匹配字符列表中的任意字符
- `[!charlist]` - 不匹配字符列表中的任意字符

### 文件属性常量

- **vbNormal** - 普通文件
- **vbReadOnly** - 只读文件
- **vbHidden** - 隐藏文件
- **vbSystem** - 系统文件
- **vbDirectory** - 目录
- **vbArchive** - 存档文件

## 注意事项

- 使用文件操作前应检查文件是否存在
- 操作文件时应有适当的错误处理
- 文件路径可以包含环境变量
- 网络文件操作可能需要额外的权限
- 大文件操作可能需要较长时间
- 文件锁定和并发访问需要注意

## 兼容性

twinBASIC的文件系统函数与VB6和VBA完全兼容，但提供了：

- 更好的错误处理
- 改进的Unicode支持
- 增强的性能
- 额外的文件操作功能

> [!TIP]
>
> 对于复杂的文件操作，建议结合使用多个函数，并始终包含适当的错误处理机制。