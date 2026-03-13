---
title: Beep
parent: 交互模块
permalink: /zh/tB/Modules/Interaction/Beep
---

# Beep 语句
{: .no_toc }

通过计算机扬声器发出蜂鸣声。

## 语法

```vb
Beep
```

## 说明

**Beep**语句通过计算机的扬声器产生蜂鸣声。

蜂鸣声的特性（音调、音量、持续时间）取决于硬件和系统软件，并且可能因计算机而异。

在大多数计算机上，**Beep**会产生大约800Hz的音调，持续约200毫秒。

## 示例

### 基本用法

```vb
Sub BasicBeep()
    MsgBox "即将发出蜂鸣声..."
    Beep
End Sub
```

### 多重蜂鸣声

```vb
Sub MultipleBeeps()
    Dim i As Integer

    For i = 1 To 3
        Beep

        ' 添加延迟
        Dim startTime As Single
        startTime = Timer
        Do While Timer < startTime + 0.5
            DoEvents
        Loop
    Next i

    MsgBox "已发出3次蜂鸣声"
End Sub
```

### 警告蜂鸣声

```vb
Sub WarningBeep()
    ' 发出警告蜂鸣声序列
    Beep ' 第一次蜂鸣

    Dim startTime As Single
    startTime = Timer
    Do While Timer < startTime + 0.2
        DoEvents
    Loop

    Beep ' 第二次蜂鸣

    startTime = Timer
    Do While Timer < startTime + 0.2
        DoEvents
    Loop

    Beep ' 第三次蜂鸣

    MsgBox "警告！请检查操作", vbExclamation
End Sub
```

### 用户确认蜂鸣声

```vb
Sub ConfirmationBeep()
    Dim response As VbMsgBoxResult

    ' 发出确认蜂鸣声
    Beep

    response = MsgBox("操作已完成，是否继续？", vbYesNo + vbQuestion)

    If response = vbYes Then
        Beep ' 确认蜂鸣声
        MsgBox "继续执行操作"
    Else
        MsgBox "操作已取消"
    End If
End Sub
```

### 错误提示蜂鸣声

```vb
Sub ErrorBeep()
    On Error GoTo ErrorHandler

    ' 模拟可能出错的操作
    Dim result As Integer
    result = 10 / 0 ' 除零错误

    Exit Sub

ErrorHandler:
    ' 发出错误蜂鸣声
    Dim i As Integer
    For i = 1 To 2
        Beep

        Dim startTime As Single
        startTime = Timer
        Do While Timer < startTime + 0.3
            DoEvents
        Loop
    Next i

    MsgBox "发生错误: " & Err.Description, vbCritical
End Sub
```

## 注意事项

- **Beep**产生的声音取决于计算机硬件和系统设置
- 某些现代计算机可能没有内置扬声器，或者蜂鸣声可能被禁用
- 在笔记本电脑上，**Beep**可能会通过主音频输出而不是专用蜂鸣器
- 某些系统可能需要管理员权限才能使用**Beep**
- 蜂鸣声的音调和持续时间在不同的计算机上可能不同
- 在某些情况下，系统声音设置可能会影响**Beep**的音量

## 替代方案

如果**Beep**不适用，可以考虑使用以下替代方案：

```vb
Sub AlternativeBeep()
    ' 使用Windows API播放系统声音
    ' 需要声明API函数

    ' 或者使用MsgBox的默认蜂鸣声
    MsgBox "注意", vbExclamation

    ' 或者播放WAV文件
    ' 使用mciSendString API播放自定义声音
End Sub
```

## 相关函数

- **MsgBox** - 显示消息框（可能包含蜂鸣声）
- **DoEvents** - 允许系统处理其他事件

> [!NOTE]
>
> **Beep**语句在twinBASIC中与VB6和VBA完全兼容。