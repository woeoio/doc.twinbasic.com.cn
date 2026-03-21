---
title: SaveSetting
parent: 交互模块
permalink: /zh/tB/Modules/Interaction/SaveSetting
---

# SaveSetting 语句
{: .no_toc }

在Windows注册表中保存或创建应用程序项目。

## 语法

```vb
SaveSetting appname, section, key, setting
```

### 参数

*appname*
: 必需的字符串表达式，指定应用程序的名称。

*section*
: 必需的字符串表达式，指定设置所在区域部分的名称。

*key*
: 必需的字符串表达式，指定要保存的设置的名称。

*setting*
: 必需的字符串表达式，指定要保存的设置的值。

## 说明

**SaveSetting**语句在Windows注册表中保存或创建应用程序项目。

设置保存在注册表中的HKEY_CURRENT_USER\\Software\\VB and VBA Program Settings下。

如果指定的注册表项已经存在，**SaveSetting**将更新其值。如果不存在，将创建新的注册表项。

## 示例

### 基本用法

```vb
Sub BasicSaveSetting()
    ' 保存应用程序设置
    SaveSetting "MyApp", "Window", "Width", "800"
    SaveSetting "MyApp", "Window", "Height", "600"
    SaveSetting "MyApp", "Window", "Position", "Center"

    MsgBox "应用程序设置已保存", vbInformation
End Sub
```

### 保存用户首选项

```vb
Sub SaveUserPreferences()
    Dim userName As String
    Dim theme As String
    Dim language As String

    ' 获取用户首选项
    userName = "张三"
    theme = "Dark"
    language = "Chinese"

    ' 保存首选项到注册表
    SaveSetting "MyApp", "UserPrefs", "UserName", userName
    SaveSetting "MyApp", "UserPrefs", "Theme", theme
    SaveSetting "MyApp", "UserPrefs", "Language", language
    SaveSetting "MyApp", "UserPrefs", "LastLogin", Date

    MsgBox "用户首选项已保存", vbInformation
End Sub
```

### 保存应用程序配置

```vb
Sub SaveApplicationConfig()
    ' 保存应用程序配置
    SaveSetting "MyApp", "Config", "Version", "1.0.0"
    SaveSetting "MyApp", "Config", "AutoSave", "True"
    SaveSetting "MyApp", "Config", "BackupInterval", "30"
    SaveSetting "MyApp", "Config", "MaxRecentFiles", "10"

    ' 保存文件路径
    SaveSetting "MyApp", "Paths", "DefaultFolder", "C:\\Documents"
    SaveSetting "MyApp", "Paths", "BackupFolder", "C:\\Backup"
    SaveSetting "MyApp", "Paths", "TempFolder", "C:\\Temp"

    MsgBox "应用程序配置已保存", vbInformation
End Sub
```

### 保存和检索设置

```vb
Sub SaveAndRetrieveSettings()
    ' 保存设置
    SaveSetting "MyApp", "Test", "Value1", "Hello World"
    SaveSetting "MyApp", "Test", "Value2", "123"
    SaveSetting "MyApp", "Test", "Value3", "True"

    ' 检索设置
    Dim val1 As String
    Dim val2 As String
    Dim val3 As String

    val1 = GetSetting("MyApp", "Test", "Value1", "")
    val2 = GetSetting("MyApp", "Test", "Value2", "")
    val3 = GetSetting("MyApp", "Test", "Value3", "")

    MsgBox "值1: " & val1 & vbCrLf & _
           "值2: " & val2 & vbCrLf & _
           "值3: " & val3
End Sub
```

### 保存数值和布尔值

```vb
Sub SaveDifferentTypes()
    ' 保存数值（转换为字符串）
    Dim number As Integer
    number = 42
    SaveSetting "MyApp", "Numbers", "Answer", CStr(number)

    ' 保存布尔值
    Dim flag As Boolean
    flag = True
    SaveSetting "MyApp", "Flags", "Enabled", IIf(flag, "True", "False")

    ' 保存日期
    Dim currentDate As Date
    currentDate = Now
    SaveSetting "MyApp", "Dates", "LastRun", Format(currentDate, "yyyy-mm-dd hh:nn:ss")

    MsgBox "不同类型的数据已保存", vbInformation
End Sub
```

### 错误处理

```vb
Sub SafeSaveSetting()
    On Error GoTo ErrorHandler

    ' 尝试保存设置
    SaveSetting "MyApp", "TestSection", "TestKey", "TestValue"

    MsgBox "设置保存成功", vbInformation

    Exit Sub

ErrorHandler:
    Select Case Err.Number
        Case 5 ' 无效的过程调用
            MsgBox "错误: 无法访问注册表", vbCritical
        Case 7 ' 内存溢出
            MsgBox "错误: 内存不足", vbCritical
        Case Else
            MsgBox "错误 " & Err.Number & ": " & Err.Description, vbCritical
    End Select
End Sub
```

## 注意事项

- **SaveSetting**只能保存字符串值
- 数值、日期和布尔值需要转换为字符串格式
- 注册表路径：HKEY_CURRENT_USER\\Software\\VB and VBA Program Settings\\*appname*\\*section*\\*key*
- 需要有适当的注册表写入权限
- 应用程序名称应该唯一，避免与其他应用程序冲突
- 建议对敏感数据进行加密后再保存
- 保存大量数据时可能会影响性能
- 注册表项名称不区分大小写

## 最佳实践

1. **使用描述性的应用程序名称**
   ```vb
   SaveSetting "MyCompany.MyApp", "Settings", "Version", "1.0"
   ```

2. **组织设置到不同的节中**
   ```vb
   ' 用户相关设置
   SaveSetting "MyApp", "User", "Name", "John"

   ' 应用程序设置
   SaveSetting "MyApp", "App", "Version", "1.0"

   ' UI设置
   SaveSetting "MyApp", "UI", "Theme", "Dark"
   ```

3. **处理特殊字符**
   ```vb
   ' 转义特殊字符
   Dim safeValue As String
   safeValue = Replace(originalValue, "\", "\\")
   SaveSetting "MyApp", "Data", "Path", safeValue
   ```

## 相关语句和函数

- [**GetSetting**](/zh/tB/Modules/Interaction/GetSetting) - 检索注册表设置
- [**DeleteSetting**](/zh/tB/Modules/Interaction/DeleteSetting) - 删除注册表设置

> [!NOTE]
>
> **SaveSetting**语句在twinBASIC中与VB6和VBA完全兼容。