---
title: ChDrive
parent: 文件系统模块
permalink: /zh/tB/Modules/FileSystem/ChDrive
---

# ChDrive 语句
{: .no_toc }

更改当前驱动器。

## 语法

```vb
ChDrive drive
```

### 参数

*drive*
: 必需的字符串表达式，指定现有的驱动器。可以是任何字母（A到Z）或表示驱动器的字符串表达式。

## 说明

**ChDrive**语句更改当前驱动器，但不更改当前目录。如果*drive*参数是多字符字符串，则**ChDrive**使用字符串最左边的字符。

如果*drive*参数指的是不存在的驱动器，则会发生错误。

**ChDrive**仅影响驱动器，不会影响当前目录。例如，如果在驱动器C上，并且当前目录是C:\Windows，则执行**ChDrive** "D"后，当前驱动器变为D，但当前目录仍为Windows。如果驱动器D上不存在Windows目录，则系统会显示错误消息。

## 示例

### 基本用法

```vb
Sub ChangeDrive()
    Dim originalDrive As String

    ' 保存原始驱动器
    originalDrive = Left(CurDir, 1)

    ' 更改到D驱动器
    ChDrive "D"

    MsgBox "当前驱动器: " & Left(CurDir, 1)
    MsgBox "当前路径: " & CurDir

    ' 恢复到原始驱动器
    ChDrive originalDrive
End Sub
```

### 驱动器存在性检查

```vb
Sub CheckAndChangeDrive()
    Dim targetDrive As String
    targetDrive = "D"

    ' 检查驱动器是否存在
    If Dir(targetDrive & ":", vbVolume) <> "" Then
        ChDrive targetDrive
        MsgBox "成功切换到驱动器 " & targetDrive
    Else
        MsgBox "驱动器 " & targetDrive & " 不存在或未准备好"
    End If
End Sub
```

### 结合ChDir使用

```vb
Sub ChangeDriveAndDirectory()
    Dim originalDrive As String
    Dim originalDir As String

    ' 保存原始设置
    originalDrive = Left(CurDir, 1)
    originalDir = CurDir

    ' 更改驱动器和目录
    ChDrive "C"
    ChDir "C:\Windows"

    MsgBox "当前路径: " & CurDir

    ' 恢复到原始设置
    ChDrive originalDrive
    ChDir originalDir
End Sub
```

### 错误处理

```vb
Sub SafeDriveChange()
    On Error GoTo ErrorHandler

    ' 尝试切换到不存在的驱动器
    ChDrive "Z"

    Exit Sub

ErrorHandler:
    Select Case Err.Number
        Case 68 ' 设备不可用
            MsgBox "错误: 指定的驱动器不存在", vbExclamation
        Case Else
            MsgBox "错误 " & Err.Number & ": " & Err.Description, vbCritical
    End Select
End Sub
```

## 注意事项

- **ChDrive**只能接受单个字符的驱动器标识符（A-Z）
- 驱动器字母不区分大小写
- 如果指定的驱动器不存在或未准备好，将发生运行时错误
- **ChDrive**不影响当前目录，只更改当前驱动器
- 对于网络映射驱动器，需要先建立映射才能使用

## 相关语句和函数

- [**ChDir**](/zh/tB/Modules/FileSystem/ChDir) - 更改当前目录
- [**CurDir**](CurDir) - 返回当前路径
- [**DriveSpec**](DriveSpec) - 获取驱动器规范

> [!NOTE]
>
> **ChDrive**语句在twinBASIC中与VB6和VBA完全兼容。