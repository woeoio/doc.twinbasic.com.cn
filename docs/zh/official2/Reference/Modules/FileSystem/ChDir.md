---
title: ChDir
parent: 文件系统模块
permalink: /zh/tB/Modules/FileSystem/ChDir
---

# ChDir 语句
{: .no_toc }

更改当前目录或文件夹。

## 语法

```vb
ChDir path
```

### 参数

*path*
: 必需的字符串表达式，指定现有的目录或文件夹。

## 说明

**ChDir**语句通过更改当前目录或文件夹来更改当前路径。

*path*参数可以包含驱动器。如果未指定驱动器，则**ChDir**将当前驱动器的目录或文件夹更改为新路径中指定的目录或文件夹。

**ChDir**仅更改当前目录；它不会更改当前驱动器。例如：

```vb
ChDir "C:\Windows"
```

此语句将当前目录更改为C驱动器的Windows目录，但不会更改当前驱动器。

## 示例

### 基本用法

```vb
Sub ChangeDirectory()
    ' 更改到Windows目录
    ChDir "C:\Windows"

    ' 更改到子目录
    ChDir "System32"

    ' 更改到父目录
    ChDir ".."

    ' 显示当前目录
    MsgBox "当前目录: " & CurDir
End Sub
```

### 使用相对路径

```vb
Sub RelativePaths()
    Dim originalDir As String

    ' 保存原始目录
    originalDir = CurDir

    ' 切换到Documents文件夹
    ChDir "C:\Users\Username\Documents"
    MsgBox "Documents目录: " & CurDir

    ' 切换到Projects子文件夹
    ChDir "Projects"
    MsgBox "Projects目录: " & CurDir

    ' 返回上级目录
    ChDir ".."
    MsgBox "返回上级: " & CurDir

    ' 恢复到原始目录
    ChDir originalDir
End Sub
```

### 错误处理

```vb
Sub SafeDirectoryChange()
    On Error GoTo ErrorHandler

    ' 尝试更改到不存在的目录
    ChDir "C:\NonExistentFolder"

    Exit Sub

ErrorHandler:
    Select Case Err.Number
        Case 76 ' 路径未找到
            MsgBox "错误: 指定的路径不存在", vbExclamation
        Case Else
            MsgBox "错误 " & Err.Number & ": " & Err.Description, vbCritical
    End Select
End Sub
```

## 注意事项

- **ChDir**只能用于本地路径，不能用于网络路径
- 对于网络路径，请使用**ChDrive**或直接指定完整路径
- 路径可以包含环境变量，如%USERPROFILE%
- 使用双反斜杠(\\)或单正斜杠(/)作为路径分隔符
- 如果路径包含空格，需要用引号包围

## 相关语句和函数

- [**ChDrive**](/zh/tB/Modules/FileSystem/ChDrive) - 更改当前驱动器
- [**CurDir**](CurDir) - 返回当前路径
- [**MkDir**](MkDir) - 创建新目录
- [**RmDir**](RmDir) - 删除空目录
- [**Dir**](Dir) - 返回匹配指定模式或文件属性的文件名

> [!NOTE]
>
> **ChDir**语句在twinBASIC中与VB6和VBA完全兼容。