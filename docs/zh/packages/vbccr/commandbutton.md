# CommandButton Control (VBCCRCmdBtn)

VBCCRCmdBtn 是标准 CommandButton 控件的增强版本，提供了更多的功能和更好的视觉效果。

## 属性

### 关键属性

- `Caption`: 按钮上显示的文本
- `Default`: 设置是否为窗体的默认按钮
- `Cancel`: 设置是否为取消按钮（按ESC键触发）
- `Picture`: 按钮上显示的图片
- `Style`: 按钮样式
  - `Standard` - 标准按钮
  - `Graphical` - 图形化按钮
- `ImageAlignment`: 图片对齐方式
- `TextAlignment`: 文本对齐方式
- `Enabled`: 启用/禁用按钮
- `ForeColor`: 文本颜色
- `BackColor`: 背景颜色

## 方法

### 主要方法

- `Click()`: 程序触发按钮点击
- `SetFocus()`: 设置焦点到按钮
- `Refresh()`: 刷新按钮显示

## 事件

- `Click()`: 按钮被点击时触发
- `GotFocus()`: 获得焦点时触发
- `LostFocus()`: 失去焦点时触发
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`: 鼠标按下时触发
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`: 鼠标释放时触发
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`: 鼠标移动时触发

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    ' 基本按钮设置
    With CommandButton1
        .Caption = "点击我"
        .Default = True
        .Enabled = True
    End With
End Sub

Private Sub CommandButton1_Click()
    MsgBox "按钮被点击了！"
End Sub
```

### 图形化按钮

```vb
Private Sub SetupGraphicalButton()
    With CommandButton1
        .Style = Graphical
        Set .Picture = LoadPicture("button.ico")
        .ImageAlignment = ImageAlignmentCenter
        .TextAlignment = TextAlignmentBottom
        .Caption = "图形按钮"
    End With
End Sub
```

### 动态状态控制

```vb
Private Sub UpdateButtonState(ByVal IsEnabled As Boolean)
    With CommandButton1
        .Enabled = IsEnabled
        If IsEnabled Then
            .Caption = "点击提交"
            .ForeColor = vbBlack
        Else
            .Caption = "处理中..."
            .ForeColor = vbGrayText
        End If
    End With
End Sub
```

## 常见用例

### 提交表单按钮

```vb
Private Sub SetupSubmitButton()
    With cmdSubmit
        .Caption = "提交表单"
        .Default = True
        .Enabled = False ' 初始状态禁用
    End With
End Sub

Private Sub ValidateForm()
    ' 表单验证后启用按钮
    cmdSubmit.Enabled = (txtName.Text <> "" And txtEmail.Text <> "")
End Sub

Private Sub cmdSubmit_Click()
    UpdateButtonState False ' 禁用按钮
    ' 处理表单提交
    ProcessForm
    UpdateButtonState True ' 重新启用按钮
End Sub
```

### 确认对话框按钮

```vb
Private Sub SetupDialogButtons()
    ' 确定按钮
    With cmdOK
        .Caption = "确定"
        .Default = True
    End With
    
    ' 取消按钮
    With cmdCancel
        .Caption = "取消"
        .Cancel = True
    End With
End Sub
```

## 最佳实践

1. 状态管理
```vb
' 在长时操作期间禁用按钮
Private Sub HandleLongOperation()
    cmdProcess.Enabled = False
    cmdProcess.Caption = "处理中..."
    
    ' 执行操作
    DoEvents
    ProcessData
    
    cmdProcess.Enabled = True
    cmdProcess.Caption = "处理"
End Sub
```

2. 键盘访问
```vb
' 设置快捷键
Private Sub SetupAccessKeys()
    cmdSave.Caption = "保存(&S)"
    cmdCancel.Caption = "取消(&C)"
End Sub
```

3. 错误处理
```vb
Private Sub SafeButtonOperation()
    On Error GoTo ErrorHandler
    
    CommandButton1.Enabled = False
    ' 执行操作
    Exit Sub
    
ErrorHandler:
    Debug.Print "按钮操作错误: " & Err.Description
    CommandButton1.Enabled = True
End Sub
```

## 已知问题和解决方案

1. 图片显示问题
```vb
' 确保正确加载和显示图片
Private Sub FixPictureDisplay()
    On Error Resume Next
    Set CommandButton1.Picture = Nothing
    Set CommandButton1.Picture = LoadPicture("button.ico")
    If Err.Number <> 0 Then
        Debug.Print "图片加载失败: " & Err.Description
    End If
    On Error GoTo 0
End Sub
```

2. 焦点问题
```vb
' 处理焦点相关问题
Private Sub HandleFocusIssues()
    If Not CommandButton1.Enabled Then
        ' 将焦点移到下一个控件
        SendKeys "{TAB}"
    End If
End Sub
```

## 其他提示

- 使用合适的按钮大小以提高可用性
- 为重要操作添加确认对话框
- 考虑使用图标增强视觉效果
- 保持按钮状态与应用程序逻辑同步
- 实现适当的键盘导航支持
- 在Form_Unload中清理资源
