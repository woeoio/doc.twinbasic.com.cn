---
title: DeleteSetting
parent: 交互模块
permalink: /zh/tB/Modules/Interaction/DeleteSetting
---

# DeleteSetting 语句
{: .no_toc }

从Windows注册表中删除应用程序项设置或整个应用程序项。

## 语法

```vb
DeleteSetting appname, section[, key]
```

### 参数

*appname*
: 必需的字符串表达式，指定应用程序的名称。

*section*
: 必需的字符串表达式，指定设置所在区域部分的名称。

*key*
: 可选的字符串表达式，指定要删除的设置的名称。

## 说明

**DeleteSetting**语句从Windows注册表中删除指定的应用程序项设置或整个应用程序项。

如果提供了所有三个参数，则**DeleteSetting**删除指定的设置。如果只提供了*appname*和*section*，则删除整个*section*及其所有设置。

设置保存在注册表中的HKEY_CURRENT_USER\\Software\\VB and VBA Program Settings下。

## 示例

### 删除特定设置

```vb
Sub DeleteSpecificSetting()
    ' 首先保存一些设置
    SaveSetting "MyApp", "Window", "Width", "800"
    SaveSetting "MyApp", "Window", "Height", "600"
    SaveSetting "MyApp", "Window", "Position", "Center"

    ' 删除特定的设置
    DeleteSetting "MyApp", "Window", "Position"

    ' 检查设置是否已删除
    Dim width As String
    width = GetSetting("MyApp", "Window", "Width", "Default")

    MsgBox "Width设置: " & width ' 应该返回"800"

    Dim position As String
    position = GetSetting("MyApp", "Window", "Position", "Default")

    MsgBox "Position设置: " & position ' 应该返回"Default"
End Sub
```

### 删除整个节

```vb
Sub DeleteEntireSection()
    ' 保存多个设置
    SaveSetting "MyApp", "Preferences", "Theme", "Dark"
    SaveSetting "MyApp", "Preferences", "Language", "Chinese"
    SaveSetting "MyApp", "Preferences", "AutoSave", "True"

    ' 删除整个Preferences节
    DeleteSetting "MyApp", "Preferences"

    ' 检查设置是否已删除
    Dim theme As String
    theme = GetSetting("MyApp", "Preferences", "Theme", "Light")

    MsgBox "Theme设置: " & theme ' 应该返回"Light"（默认值）
End Sub
```

### 安全删除设置

```vb
Sub SafeDeleteSetting()
    Dim appName As String
    Dim section As String
    Dim key As String

    appName = "MyApp"
    section = "RecentFiles"
    key = "File1"

    ' 检查设置是否存在
    Dim existingValue As String
    existingValue = GetSetting(appName, section, key, "NOT_FOUND")

    If existingValue <> "NOT_FOUND" Then
        ' 设置存在，可以安全删除
        DeleteSetting appName, section, key
        MsgBox "设置已成功删除", vbInformation
    Else
        MsgBox "设置不存在，无需删除", vbExclamation
    End If
End Sub
```

### 清理所有应用程序设置

```vb
Sub CleanupAllSettings()
    Dim appName As String
    appName = "MyApp"

    ' 删除所有已知的节
    DeleteSetting appName, "Window"
    DeleteSetting appName, "Preferences"
    DeleteSetting appName, "RecentFiles"
    DeleteSetting appName, "UserData"

    MsgBox "所有应用程序设置已清理", vbInformation
End Sub
```

### 错误处理

```vb
Sub DeleteSettingWithErrorHandling()
    On Error GoTo ErrorHandler

    ' 尝试删除不存在的设置
    DeleteSetting "NonExistentApp", "NonExistentSection", "NonExistentKey"

    MsgBox "删除操作完成", vbInformation

    Exit Sub

ErrorHandler:
    Select Case Err.Number
        Case 5 ' 无效的过程调用
            MsgBox "错误: 无法访问注册表设置", vbCritical
        Case Else
            MsgBox "错误 " & Err.Number & ": " & Err.Description, vbCritical
    End Select
End Sub
```

## 注意事项

- **DeleteSetting**只能删除使用**SaveSetting**创建的注册表项
- 删除操作是不可逆的，删除后无法恢复
- 需要有适当的注册表访问权限
- 删除整个节将删除该节下的所有设置
- 注册表路径：HKEY_CURRENT_USER\\Software\\VB and VBA Program Settings\\*appname*\\*section*
- 如果指定的设置或节不存在，不会产生错误
- 建议在进行删除操作前备份重要的设置

## 相关语句和函数

- [**SaveSetting**](/zh/tB/Modules/Interaction/SaveSetting) - 保存注册表设置
- [**GetSetting**](/zh/tB/Modules/Interaction/GetSetting) - 检索注册表设置

> [!NOTE]
>
> **DeleteSetting**语句在twinBASIC中与VB6和VBA完全兼容。