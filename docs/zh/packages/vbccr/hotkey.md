# HotKey Control (VBCCRHotKey)

VBCCRHotKey 控件允许用户设置和捕获键盘快捷键组合。这个控件通常用于自定义快捷键设置界面，让用户可以自定义应用程序的快捷键。

## 属性

### 关键属性

- `HotKey`: 当前设置的快捷键组合
- `InvalidKeys`: 设置禁用的按键组合
- `InvalidCombinations`: 设置禁用的组合键
- `Modifiers`: 当前的修饰键状态（Alt、Ctrl、Shift）
- `KeyCode`: 当前的按键代码
- `AutoRepeat`: 是否允许按键重复
- `Enabled`: 启用/禁用控件
- `BackColor`: 背景颜色
- `ForeColor`: 文本颜色

## 方法

### 主要方法

- `SetHotKey(KeyCode As Long, Modifiers As Long)`: 设置快捷键
- `GetHotKey()`: 获取当前快捷键
- `SetFocus()`: 设置焦点到控件
- `Refresh()`: 刷新显示

## 事件

- `Change()`: 快捷键改变时触发
- `InvalidKey()`: 输入无效按键时触发
- `GotFocus()`: 获得焦点时触发
- `LostFocus()`: 失去焦点时触发

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    With HotKey1
        ' 设置初始快捷键 (Ctrl+S)
        .SetHotKey vbKeyS, HOTKEYF_CONTROL
        
        ' 禁用某些组合
        .InvalidCombinations = HOTKEYF_ALT Or HOTKEYF_CONTROL Or HOTKEYF_SHIFT
    End With
End Sub
```

### 监听快捷键更改

```vb
Private Sub HotKey1_Change()
    Dim KeyCode As Long
    Dim Modifiers As Long
    
    ' 获取当前快捷键
    KeyCode = HotKey1.KeyCode
    Modifiers = HotKey1.Modifiers
    
    ' 显示当前组合
    ShowHotKeyCombo KeyCode, Modifiers
End Sub

Private Sub ShowHotKeyCombo(ByVal KeyCode As Long, ByVal Modifiers As Long)
    Dim strHotKey As String
    
    If (Modifiers And HOTKEYF_CONTROL) Then strHotKey = strHotKey & "Ctrl+"
    If (Modifiers And HOTKEYF_ALT) Then strHotKey = strHotKey & "Alt+"
    If (Modifiers And HOTKEYF_SHIFT) Then strHotKey = strHotKey & "Shift+"
    
    strHotKey = strHotKey & Chr$(KeyCode)
    
    lblHotKey.Caption = "当前快捷键: " & strHotKey
End Sub
```

### 快捷键验证

```vb
Private Sub ValidateHotKey()
    Dim KeyCode As Long
    Dim Modifiers As Long
    
    ' 获取当前组合
    KeyCode = HotKey1.KeyCode
    Modifiers = HotKey1.Modifiers
    
    ' 验证组合是否有效
    If IsValidHotKey(KeyCode, Modifiers) Then
        SaveHotKey KeyCode, Modifiers
    Else
        MsgBox "无效的快捷键组合"
    End If
End Sub

Private Function IsValidHotKey(ByVal KeyCode As Long, ByVal Modifiers As Long) As Boolean
    ' 检查是否至少包含一个修饰键
    If Modifiers = 0 Then
        IsValidHotKey = False
        Exit Function
    End If
    
    ' 检查是否是系统保留的快捷键
    If IsSystemHotKey(KeyCode, Modifiers) Then
        IsValidHotKey = False
        Exit Function
    End If
    
    IsValidHotKey = True
End Function
```

## 常见用例

### 快捷键设置对话框

```vb
Private Sub SetupHotKeyDialog()
    ' 创建快捷键设置界面
    With HotKey1
        .Top = 20
        .Left = 100
        .Width = 150
        
        ' 设置提示标签
        lblPrompt.Caption = "请按下新的快捷键组合"
        lblPrompt.Top = HotKey1.Top
        lblPrompt.Left = 20
    End With
End Sub

Private Sub SaveHotKeySettings()
    ' 保存快捷键设置
    Dim KeyCode As Long
    Dim Modifiers As Long
    
    KeyCode = HotKey1.KeyCode
    Modifiers = HotKey1.Modifiers
    
    SaveSetting App.Title, "HotKeys", "MainCommand", CStr(KeyCode)
    SaveSetting App.Title, "HotKeys", "MainModifiers", CStr(Modifiers)
End Sub
```

### 快捷键冲突检查

```vb
Private Function IsHotKeyConflict(ByVal KeyCode As Long, ByVal Modifiers As Long) As Boolean
    ' 检查是否与现有快捷键冲突
    Dim i As Integer
    
    For i = 0 To UBound(ExistingHotKeys)
        If ExistingHotKeys(i).KeyCode = KeyCode And _
           ExistingHotKeys(i).Modifiers = Modifiers Then
            IsHotKeyConflict = True
            Exit Function
        End If
    Next i
    
    IsHotKeyConflict = False
End Function
```

## 最佳实践

1. 快捷键验证
```vb
Private Sub ValidateAndSaveHotKey()
    Dim KeyCode As Long
    Dim Modifiers As Long
    
    KeyCode = HotKey1.KeyCode
    Modifiers = HotKey1.Modifiers
    
    ' 进行验证
    If Modifiers = 0 Then
        MsgBox "必须包含至少一个修饰键"
        Exit Sub
    End If
    
    If IsHotKeyConflict(KeyCode, Modifiers) Then
        MsgBox "此快捷键已被使用"
        Exit Sub
    End If
    
    ' 保存设置
    SaveHotKeySettings
End Sub
```

2. 错误处理
```vb
Private Sub SafeHotKeyOperation()
    On Error GoTo ErrorHandler
    
    ' 执行操作
    Exit Sub
    
ErrorHandler:
    Debug.Print "快捷键操作错误: " & Err.Description
End Sub
```

## 已知问题和解决方案

1. 系统快捷键冲突
```vb
Private Function IsSystemHotKey(ByVal KeyCode As Long, ByVal Modifiers As Long) As Boolean
    ' 检查是否是系统保留的快捷键
    Select Case KeyCode
        Case vbKeyF4
            If (Modifiers And HOTKEYF_ALT) Then
                ' Alt+F4 是系统保留的
                IsSystemHotKey = True
                Exit Function
            End If
    End Select
    
    IsSystemHotKey = False
End Function
```

2. 无效组合处理
```vb
Private Sub HandleInvalidCombination()
    ' 设置无效组合的提示
    If HotKey1.InvalidCombinations Then
        lblStatus.Caption = "请使用其他组合键"
    End If
End Sub
```

## 其他提示

- 提供清晰的用户提示
- 实现快捷键冲突检测
- 保存用户设置
- 提供重置选项
- 考虑国际化键盘
- 处理特殊按键
- 实现快捷键测试
- 提供默认值
- 注意按键响应性
- 在 Form_Unload 中清理资源
