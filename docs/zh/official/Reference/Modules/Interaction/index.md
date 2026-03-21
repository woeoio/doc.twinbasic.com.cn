---
title: 交互模块
parent: 内置模块
permalink: /zh/tB/Modules/Interaction
---

# 交互模块
{: .no_toc }

交互模块提供了与用户、系统和其他应用程序进行交互的函数和语句集合。这些功能允许您控制应用程序行为、管理系统设置和处理用户输入。

## 应用程序控制

### 应用程序激活

- [**AppActivate**](/zh/tB/Modules/Interaction/AppActivate) - 激活应用程序或窗口
- [**Shell**](Shell) - 运行可执行程序
- [**SendKeys**](SendKeys) - 发送按键到活动窗口

## 系统声音

### 音频反馈

- [**Beep**](/zh/tB/Modules/Interaction/Beep) - 通过计算机扬声器发出蜂鸣声

## 注册表管理

### 设置存储和检索

- [**SaveSetting**](/zh/tB/Modules/Interaction/SaveSetting) - 保存注册表设置
- [**GetSetting**](/zh/tB/Modules/Interaction/GetSetting) - 检索注册表设置
- [**DeleteSetting**](/zh/tB/Modules/Interaction/DeleteSetting) - 删除注册表设置

## 用户输入

### 对话框和消息

- [**InputBox**](InputBox) - 显示输入对话框
- [**MsgBox**](MsgBox) - 显示消息对话框
- [**DoEvents**](DoEvents) - 允许系统处理其他事件

## 系统信息

### 系统控制

- [**Environ**](Environ) - 返回环境变量
- [**Command**](Command) - 返回命令行参数

## 使用示例

### 应用程序间通信

```vb
Sub InterApplicationCommunication()
    Dim taskID As Double

    ' 启动记事本
    taskID = Shell("notepad.exe", vbNormalFocus)

    ' 等待记事本启动
    Dim startTime As Single
    startTime = Timer
    Do While Timer < startTime + 2
        DoEvents
    Loop

    ' 激活记事本
    AppActivate taskID

    ' 发送一些文本
    SendKeys "Hello from twinBASIC!{ENTER}", True

    MsgBox "已向记事本发送文本"
End Sub
```

### 用户设置管理

```vb
Sub ManageUserSettings()
    Dim userName As String
    Dim theme As String

    ' 保存用户设置
    SaveSetting "MyApp", "UserPrefs", "UserName", "张三"
    SaveSetting "MyApp", "UserPrefs", "Theme", "Dark"
    SaveSetting "MyApp", "UserPrefs", "Language", "Chinese"

    ' 检索用户设置
    userName = GetSetting("MyApp", "UserPrefs", "UserName", "Guest")
    theme = GetSetting("MyApp", "UserPrefs", "Theme", "Light")

    MsgBox "欢迎回来, " & userName & "!" & vbCrLf & "当前主题: " & theme
End Sub
```

### 系统反馈

```vb
Sub SystemFeedback()
    ' 发出操作确认蜂鸣声
    Beep

    ' 显示确认对话框
    Dim response As VbMsgBoxResult
    response = MsgBox("操作已完成，是否继续？", vbYesNo + vbQuestion)

    If response = vbYes Then
        ' 发出成功蜂鸣声
        Beep
        MsgBox "继续执行下一步操作"
    Else
        MsgBox "操作已取消"
    End If
End Sub
```

### 错误处理和用户通知

```vb
Sub ErrorHandlingWithUserNotification()
    On Error GoTo ErrorHandler

    ' 模拟可能出错的操作
    Dim result As Integer
    result = 10 / 0

    Exit Sub

ErrorHandler:
    ' 发出错误蜂鸣声（两次）
    Beep

    Dim startTime As Single
    startTime = Timer
    Do While Timer < startTime + 0.3
        DoEvents
    Loop

    Beep

    ' 显示错误消息
    MsgBox "发生错误: " & Err.Description, vbCritical + vbOKOnly, "错误"
End Sub
```

## 注册表位置

twinBASIC的注册表设置保存在以下位置：

```
HKEY_CURRENT_USER\Software\VB and VBA Program Settings\appname\section\key
```

其中：
- *appname* 是应用程序名称
- *section* 是设置分类
- *key* 是具体设置项

## 注意事项

- 注册表操作需要适当的权限
- 建议对敏感数据进行加密
- 应用程序名称应该唯一
- 避免在注册表项名称中使用特殊字符
- 大量数据操作可能影响性能
- 某些系统功能可能因操作系统版本而异

## 最佳实践

1. **错误处理** - 始终包含适当的错误处理
2. **权限检查** - 检查必要的系统权限
3. **数据验证** - 验证用户输入和设置值
4. **性能优化** - 避免频繁的注册表操作
5. **用户反馈** - 提供清晰的操作反馈
6. **兼容性** - 考虑不同操作系统版本的兼容性

## 兼容性

twinBASIC的交互函数与VB6和VBA完全兼容，但提供了：

- 更好的错误处理
- 改进的安全性
- 增强的性能
- 现代操作系统的更好支持

> [!TIP]
>
> 对于复杂的交互操作，建议结合使用多个函数，并始终包含适当的错误处理机制。