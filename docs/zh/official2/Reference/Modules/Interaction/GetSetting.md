---
title: GetSetting
parent: 交互模块
permalink: /zh/tB/Modules/Interaction/GetSetting
---

# GetSetting 函数
{: .no_toc }

从Windows注册表中返回应用程序项目的设置值。

## 语法

```vb
GetSetting(appname, section, key[, default])
```

### 参数

*appname*
: 必需的字符串表达式，指定应用程序的名称。

*section*
: 必需的字符串表达式，指定设置所在区域部分的名称。

*key*
: 必需的字符串表达式，指定要检索的设置的名称。

*default*
: 可选的表达式，如果注册表中不存在指定的*key*设置，则返回此值。如果省略，则*default*为长度为零的字符串("")。

### 返回值

**String**类型，包含注册表中的设置值或*default*值。

## 说明

**GetSetting**函数从Windows注册表中检索指定应用程序项目的设置值。

设置保存在注册表中的HKEY_CURRENT_USER\\Software\\VB and VBA Program Settings下。

如果找不到指定的*key*设置，则**GetSetting**返回*default*值。

## 示例

### 基本用法

```vb
Sub BasicGetSetting()
    ' 首先保存一些设置
    SaveSetting "MyApp", "Window", "Width", "800"
    SaveSetting "MyApp", "Window", "Height", "600"

    ' 检索设置值
    Dim width As String
    Dim height As String

    width = GetSetting("MyApp", "Window", "Width", "1024")
    height = GetSetting("MyApp", "Window", "Height", "768")

    MsgBox "窗口大小: " & width & " x " & height
End Sub
```

### 使用默认值

```vb
Sub GetSettingWithDefault()
    Dim theme As String
    Dim language As String

    ' 检索存在的设置
    theme = GetSetting("MyApp", "Preferences", "Theme", "Light")

    ' 检索不存在的设置（将返回默认值）
    language = GetSetting("MyApp", "Preferences", "Language", "English")

    MsgBox "主题: " & theme & vbCrLf & "语言: " & language
End Sub
```

### 应用程序配置

```vb
Sub LoadApplicationConfig()
    Dim config As String
    Dim autoSave As String
    Dim backupPath As String

    ' 加载应用程序配置
    config = GetSetting("MyApp", "Configuration", "Version", "1.0")
    autoSave = GetSetting("MyApp", "Configuration", "AutoSave", "False")
    backupPath = GetSetting("MyApp", "Configuration", "BackupPath", "C:\\Backup")

    ' 应用配置
    MsgBox "应用程序版本: " & config
    MsgBox "自动保存: " & autoSave
    MsgBox "备份路径: " & backupPath
End Sub
```

### 用户首选项

```vb
Sub LoadUserPreferences()
    Dim userName As String
    Dim fontSize As String
    Dim showToolbar As String

    ' 加载用户首选项
    userName = GetSetting("MyApp", "UserPrefs", "UserName", "Guest")
    fontSize = GetSetting("MyApp", "UserPrefs", "FontSize", "12")
    showToolbar = GetSetting("MyApp", "UserPrefs", "ShowToolbar", "True")

    ' 应用首选项
    MsgBox "欢迎, " & userName
    MsgBox "字体大小: " & fontSize
    MsgBox "显示工具栏: " & showToolbar
End Sub
```

### 检查设置是否存在

```vb
Sub CheckSettingExistence()
    Dim settingValue As String

    ' 使用特殊的默认值来检测设置是否存在
    settingValue = GetSetting("MyApp", "Settings", "SomeKey", "SETTING_NOT_FOUND")

    If settingValue = "SETTING_NOT_FOUND" Then
        MsgBox "设置不存在，将使用默认值"
        ' 可以在这里创建默认设置
        SaveSetting "MyApp", "Settings", "SomeKey", "DefaultValue"
    Else
        MsgBox "设置值: " & settingValue
    End If
End Sub
```

### 批量加载设置

```vb
Sub LoadAllSettings()
    Dim settings(1 To 5) As String
    Dim settingNames(1 To 5) As String
    Dim i As Integer

    ' 定义要加载的设置名称
    settingNames(1) = "WindowWidth"
    settingNames(2) = "WindowHeight"
    settingNames(3) = "Theme"
    settingNames(4) = "Language"
    settingNames(5) = "AutoSave"

    ' 批量加载设置
    For i = 1 To 5
        settings(i) = GetSetting("MyApp", "General", settingNames(i), "Default")
    Next i

    ' 显示加载的设置
    For i = 1 To 5
        Debug.Print settingNames(i) & ": " & settings(i)
    Next i
End Sub
```

## 注意事项

- **GetSetting**只能读取使用**SaveSetting**创建的注册表项
- 注册表路径：HKEY_CURRENT_USER\\Software\\VB and VBA Program Settings\\*appname*\\*section*\\*key*
- 需要有适当的注册表读取权限
- 如果设置不存在，将返回*default*值而不是产生错误
- 所有设置值都以字符串形式存储和返回
- 对于布尔值，通常使用"True"/"False"或"1"/"0"
- 对于数值，需要在使用前进行类型转换

## 相关语句和函数

- [**SaveSetting**](/zh/tB/Modules/Interaction/SaveSetting) - 保存注册表设置
- [**DeleteSetting**](/zh/tB/Modules/Interaction/DeleteSetting) - 删除注册表设置

> [!NOTE]
>
> **GetSetting**函数在twinBASIC中与VB6和VBA完全兼容。