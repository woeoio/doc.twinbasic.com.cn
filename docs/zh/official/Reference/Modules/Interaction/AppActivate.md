---
title: AppActivate
parent: 交互模块
permalink: /zh/tB/Modules/Interaction/AppActivate
---

# AppActivate 语句
{: .no_toc }

激活应用程序或窗口。

## 语法

```vb
AppActivate title[, wait]
```

### 参数

*title*
: 必需的字符串表达式，指定要激活的应用程序或窗口的标题。

*wait*
: 可选的Boolean值，指定是否等待目标应用程序准备就绪。

## 说明

**AppActivate**语句激活应用程序或窗口，使其成为当前活动窗口。

*title*参数可以是要激活的应用程序的标题或任务ID（由**Shell**函数返回）。如果找到具有指定*title*的应用程序或窗口，则将其激活。

如果指定了*wait*参数：
- **True** - 等待目标应用程序准备就绪后再返回
- **False** - 立即返回（默认值）

## 示例

### 基本用法

```vb
Sub ActivateApplication()
    Dim taskID As Double

    ' 启动记事本
    taskID = Shell("notepad.exe", vbNormalFocus)

    ' 等待一会儿让记事本启动
    Dim startTime As Single
    startTime = Timer
    Do While Timer < startTime + 2
        DoEvents
    Loop

    ' 激活记事本窗口
    AppActivate taskID
    ' 或者使用窗口标题
    ' AppActivate "无标题 - 记事本"

    MsgBox "记事本已激活"
End Sub
```

### 使用窗口标题

```vb
Sub ActivateByTitle()
    ' 激活具有特定标题的窗口
    On Error Resume Next
    AppActivate "计算器"

    If Err.Number <> 0 Then
        MsgBox "找不到计算器窗口", vbExclamation
    Else
        MsgBox "计算器已激活", vbInformation
    End If
    On Error GoTo 0
End Sub
```

### 等待应用程序准备就绪

```vb
Sub ActivateWithWait()
    Dim taskID As Double

    ' 启动应用程序
    taskID = Shell("calc.exe", vbNormalFocus)

    ' 激活并等待应用程序准备就绪
    AppActivate taskID, True

    MsgBox "计算器已激活并准备就绪"
End Sub
```

### 错误处理

```vb
Sub SafeAppActivate()
    On Error GoTo ErrorHandler

    ' 尝试激活不存在的应用程序
    AppActivate "不存在的窗口"

    Exit Sub

ErrorHandler:
    Select Case Err.Number
        Case 5 ' 无效的过程调用
            MsgBox "错误: 找不到指定的应用程序或窗口", vbCritical
        Case Else
            MsgBox "错误 " & Err.Number & ": " & Err.Description, vbCritical
    End Select
End Sub
```

## 注意事项

- *title*参数不区分大小写
- 如果多个窗口具有相同的标题，**AppActivate**将激活找到的第一个窗口
- 某些应用程序可能不允许被外部程序激活
- 在激活应用程序之前，可能需要等待应用程序完全启动
- 使用**Shell**函数启动的应用程序会返回任务ID，可以用于后续激活
- 如果应用程序已经运行，可以使用窗口标题来激活它

## 相关函数

- [**Shell**](Shell) - 运行可执行程序
- [**SendKeys**](SendKeys) - 发送按键到活动窗口

> [!NOTE]
>
> **AppActivate**语句在twinBASIC中与VB6和VBA完全兼容。