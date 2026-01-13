# CommandLink Control (VBCCRCmdLink)

VBCCRCmdLink 控件是一个现代化的命令按钮控件，它结合了按钮和链接的特性，通常用于向导界面或选项对话框中。它可以显示主要文本、说明文本和一个可选的图标。

## 属性

### 关键属性

- `Caption`: 主要显示文本
- `Note`: 说明文本（次要文本）
- `ShieldIcon`: 是否显示 UAC 盾牌图标
- `Picture`: 自定义图标
- `Enabled`: 启用/禁用控件
- `Default`: 是否为默认按钮
- `TextAlignment`: 文本对齐方式
- `NoteAlignment`: 说明文本对齐方式
- `Themed`: 是否使用 Windows 主题样式

## 方法

### 主要方法

- `Click()`: 程序触发点击事件
- `SetFocus()`: 设置焦点
- `Refresh()`: 刷新显示

## 事件

- `Click()`: 点击时触发
- `GotFocus()`: 获得焦点时触发
- `LostFocus()`: 失去焦点时触发
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    With CommandLink1
        .Caption = "备份数据"
        .Note = "创建您的数据完整备份，包括所有文档和设置。"
        .ShieldIcon = True ' 显示管理员权限图标
    End With
End Sub
```

### 向导界面选项

```vb
Private Sub SetupWizardOptions()
    ' 选项 1
    With cmdOption1
        .Caption = "完整安装"
        .Note = "安装所有组件，需要 1.2GB 磁盘空间"
    End With
    
    ' 选项 2
    With cmdOption2
        .Caption = "自定义安装"
        .Note = "选择要安装的组件"
    End With
    
    ' 选项 3
    With cmdOption3
        .Caption = "最小安装"
        .Note = "只安装基本组件，需要 300MB 磁盘空间"
    End With
End Sub
```

### 动态更新

```vb
Private Sub UpdateCommandLink(ByVal Status As String)
    With CommandLink1
        Select Case Status
            Case "Ready"
                .Caption = "开始同步"
                .Note = "点击开始同步您的文件"
                .Enabled = True
            Case "Processing"
                .Caption = "同步中"
                .Note = "请等待同步完成..."
                .Enabled = False
            Case "Done"
                .Caption = "同步完成"
                .Note = "所有文件已同步"
                .Enabled = True
        End Select
    End With
End Sub
```

## 常见用例

### 配置向导

```vb
Private Sub SetupConfigurationWizard()
    ' 简单配置选项
    With cmdSimpleConfig
        .Caption = "推荐配置"
        .Note = "使用推荐的默认设置进行配置"
        .ShieldIcon = False
    End With
    
    ' 高级配置选项
    With cmdAdvancedConfig
        .Caption = "高级配置"
        .Note = "手动设置所有配置选项"
        .ShieldIcon = True
    End With
End Sub
```

### 操作确认

```vb
Private Sub SetupConfirmationDialog()
    With CommandLink1
        .Caption = "确认删除"
        .Note = "此操作将永久删除所选项目，且无法恢复"
        .ShieldIcon = True
    End With
End Sub
```

## 最佳实践

1. 文本清晰性
```vb
Private Sub SetClearText()
    ' 使用清晰、简洁的文本
    With CommandLink1
        .Caption = "导入数据"
        .Note = "从外部文件导入数据到当前项目"
    End With
End Sub
```

2. 状态管理
```vb
Private Sub ManageState(ByVal IsProcessing As Boolean)
    With CommandLink1
        .Enabled = Not IsProcessing
        If IsProcessing Then
            .Caption = "处理中..."
            .Note = "请等待操作完成"
        Else
            .Caption = "处理数据"
            .Note = "点击开始处理数据"
        End If
    End With
End Sub
```

3. 错误处理
```vb
Private Sub SafeOperation()
    On Error GoTo ErrorHandler
    
    CommandLink1.Enabled = False
    ' 执行操作
    Exit Sub
    
ErrorHandler:
    Debug.Print "操作错误: " & Err.Description
    CommandLink1.Enabled = True
End Sub
```

## 已知问题和解决方案

1. 文本显示问题
```vb
Private Sub FixTextDisplay()
    ' 处理长文本
    With CommandLink1
        .AutoSize = True
        .WordWrap = True
        .Width = 300 ' 适当的宽度
    End With
End Sub
```

2. 主题兼容性
```vb
Private Sub EnsureThemeCompatibility()
    ' 检查系统主题支持
    If Not IsThemeActive() Then
        CommandLink1.Themed = False
    End If
End Sub
```

## 其他提示

- 使用简明的主要文本
- 在说明文本中提供详细信息
- 合理使用 ShieldIcon
- 确保文本易读性
- 保持界面一致性
- 实现适当的键盘导航
- 考虑添加快捷键
- 注意控件尺寸和布局
- 保持状态提示的及时性
- 在 Form_Unload 中清理资源
