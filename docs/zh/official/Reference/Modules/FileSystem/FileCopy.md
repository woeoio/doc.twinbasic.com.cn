---
title: FileCopy
parent: 文件系统模块
permalink: /zh/tB/Modules/FileSystem/FileCopy
---

# FileCopy 语句
{: .no_toc }

复制文件。

## 语法

```vb
FileCopy source, destination
```

### 参数

*source*
: 必需的字符串表达式，指定要复制的文件名称。*source*可能包括驱动器和路径。

*destination*
: 必需的字符串表达式，指定要复制到的目标文件名称。*destination*可能包括驱动器和路径。

## 说明

**FileCopy**语句复制文件，同时保留原始文件。

如果*destination*指定的文件已存在，则会发生错误。

*source*和*destination*参数必须引用不同的文件。如果两个参数引用相同的文件，则会发生错误。

## 示例

### 基本文件复制

```vb
Sub BasicFileCopy()
    Dim sourceFile As String
    Dim destFile As String

    sourceFile = "C:\SourceFolder\test.txt"
    destFile = "C:\DestFolder\test_copy.txt"

    ' 复制文件
    FileCopy sourceFile, destFile

    MsgBox "文件复制完成"
End Sub
```

### 带错误处理的文件复制

```vb
Sub SafeFileCopy()
    Dim sourceFile As String
    Dim destFile As String

    sourceFile = "C:\SourceFolder\document.docx"
    destFile = "D:\Backup\document_backup.docx"

    On Error GoTo ErrorHandler

    ' 检查源文件是否存在
    If Dir(sourceFile) = "" Then
        MsgBox "源文件不存在: " & sourceFile, vbExclamation
        Exit Sub
    End If

    ' 检查目标文件是否已存在
    If Dir(destFile) <> "" Then
        If MsgBox("目标文件已存在，是否覆盖？", vbYesNo + vbQuestion) = vbNo Then
            Exit Sub
        End If
    End If

    ' 执行复制
    FileCopy sourceFile, destFile
    MsgBox "文件复制成功", vbInformation

    Exit Sub

ErrorHandler:
    Select Case Err.Number
        Case 53 ' 文件未找到
            MsgBox "错误: 源文件未找到", vbCritical
        Case 70 ' 权限被拒绝
            MsgBox "错误: 权限被拒绝，无法访问文件", vbCritical
        Case 75 ' 路径/文件访问错误
            MsgBox "错误: 路径或文件访问错误", vbCritical
        Case 76 ' 路径未找到
            MsgBox "错误: 指定的路径未找到", vbCritical
        Case Else
            MsgBox "错误 " & Err.Number & ": " & Err.Description, vbCritical
    End Select
End Sub
```

### 批量文件复制

```vb
Sub BatchFileCopy()
    Dim sourceFolder As String
    Dim destFolder As String
    Dim fileName As String

    sourceFolder = "C:\SourceFolder\"
    destFolder = "D:\BackupFolder\"

    ' 确保目标文件夹存在
    If Dir(destFolder, vbDirectory) = "" Then
        MkDir destFolder
    End If

    ' 复制所有txt文件
    fileName = Dir(sourceFolder & "*.txt")

    Do While fileName <> ""
        FileCopy sourceFolder & fileName, destFolder & fileName
        fileName = Dir ' 获取下一个文件
    Loop

    MsgBox "批量复制完成"
End Sub
```

### 复制前检查磁盘空间

```vb
Sub CopyWithSpaceCheck()
    Dim sourceFile As String
    Dim destDrive As String
    Dim fileSize As Long

    sourceFile = "C:\LargeFile.zip"
    destDrive = "D:"

    ' 获取文件大小
    fileSize = FileLen(sourceFile)

    ' 检查目标驱动器是否有足够空间
    ' 注意: 这里需要额外的API调用来检查可用空间

    If FileLen(sourceFile) > 0 Then
        FileCopy sourceFile, destDrive & "\LargeFile_backup.zip"
        MsgBox "文件复制完成，大小: " & Format(fileSize, "#,##0") & " 字节"
    Else
        MsgBox "源文件为空或不存在"
    End If
End Sub
```

## 注意事项

- **FileCopy**不会自动创建目标文件夹，目标文件夹必须已存在
- 如果目标文件已存在，将发生错误
- 复制过程中如果发生错误，可能留下不完整的目标文件
- 文件属性（如只读、隐藏等）不会被复制
- 对于大文件，复制操作可能需要较长时间
- 使用**Dir**函数检查文件是否存在
- 使用**FileLen**函数获取文件大小

## 相关语句和函数

- [**Kill**](Kill) - 删除文件
- [**Name**](Name) - 重命名文件或目录
- [**Dir**](Dir) - 返回匹配指定模式的文件名
- [**FileLen**](FileLen) - 返回文件长度
- [**GetAttr**](GetAttr) - 返回文件属性
- [**SetAttr**](SetAttr) - 设置文件属性

> [!NOTE]
>
> **FileCopy**语句在twinBASIC中与VB6和VBA完全兼容。