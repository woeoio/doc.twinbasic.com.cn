# TextBox 控件 (VBCCRTextBox)

VBCCRTextBox 控件是一个增强的文本框控件，提供了比标准 TextBox 更多的功能，包括撤销支持、提示文本和气球提示等特性。它可用于单行或多行文本输入。

## 属性

### 关键属性

- `Text`: 文本内容
- `SelText`: 选中的文本
- `SelStart`: 选择起始位置
- `SelLength`: 选择长度
- `MultiLine`: 是否多行
- `ScrollBars`: 滚动条
- `Alignment`: 文本对齐方式
- `MaxLength`: 最大文本长度
- `PasswordChar`: 密码字符
- `UseSystemPasswordChar`: 是否使用系统密码字符
- `Locked`: 是否锁定
- `HideSelection`: 失去焦点时是否隐藏选择
- `OLEDropMode`: OLE拖放模式
- `CueBanner`: 提示文本（占位符）
- `CueBannerAlways`: 是否始终显示提示文本
- `TextLength`: 获取文本长度（只读）

## 方法

### 主要方法

- `Undo()`: 撤销上一次操作
- `CanUndo()`: 返回是否可以撤销
- `ResetUndoQueue()`: 重置撤销队列
- `ShowBalloonTip(Text As String, Optional Title As String, Optional Icon As TxtIconConstants)`: 显示气球提示

## 事件

- `Change()`: 文本改变事件
- `Click()`: 点击事件
- `DblClick()`: 双击事件
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyPress(KeyAscii As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`
- `MouseEnter()`: 鼠标进入控件时触发
- `MouseLeave()`: 鼠标离开控件时触发

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    ' 配置文本框
    With TextBox1
        .MultiLine = True
        .ScrollBars = vbVertical
        .Text = "请在此输入..."
        .SelStart = 0
        .SelLength = Len(.Text)
        .CueBanner = "输入搜索关键词"
        .MaxLength = 1000
    End With
End Sub
```

### 文本处理

```vb
Private Sub ProcessText()
    With TextBox1
        ' 获取选中文本
        Dim SelectedText As String
        SelectedText = .SelText
        
        ' 替换选中文本
        .SelText = UCase$(SelectedText)
        
        ' 在光标位置插入文本
        .SelText = vbNewLine & "新行"
        
        ' 移动光标到末尾
        .SelStart = Len(.Text)
        .SelLength = 0
    End With
End Sub
```

### 撤销支持

```vb
Private Sub SetupUndoRedo()
    With TextBox1
        ' 重置撤销队列
        .ResetUndoQueue
    End With
End Sub

Private Sub TextBox1_Change()
    ' 更新撤销按钮状态
    cmdUndo.Enabled = TextBox1.CanUndo
End Sub

Private Sub cmdUndo_Click()
    If TextBox1.CanUndo Then TextBox1.Undo
End Sub
```

### 气球提示

```vb
Private Sub ShowValidationTip()
    ' 验证输入
    If Len(TextBox1.Text) < 5 Then
        TextBox1.ShowBalloonTip "输入长度至少为 5 个字符", "输入错误", ttxIconError
    ElseIf Not IsNumeric(TextBox1.Text) Then
        TextBox1.ShowBalloonTip "请输入数字", "格式错误", ttxIconWarning
    End If
End Sub
```

## 常见用例

### 密码输入框

```vb
Private Sub SetupPasswordBox()
    With TextBox1
        .PasswordChar = "*"
        .UseSystemPasswordChar = True
        .CueBanner = "请输入密码"
        .MaxLength = 20
    End With
End Sub
```

### 搜索框

```vb
Private Sub SetupSearchBox()
    With txtSearch
        .CueBanner = "输入搜索关键词..."
        .CueBannerAlways = False
    End With
End Sub

Private Sub cmdSearch_Click()
    If Len(txtSearch.Text) > 0 Then
        PerformSearch txtSearch.Text
    Else
        txtSearch.ShowBalloonTip "请输入搜索关键词", "提示", ttxIconInfo
        txtSearch.SetFocus
    End If
End Sub
```

### 文本验证

```vb
Private Sub TextBox1_KeyPress(KeyAscii As Integer)
    ' 只允许数字和小数点
    Select Case KeyAscii
        Case vbKey0 To vbKey9
            ' 允许数字
        Case vbKeyBack
            ' 允许退格键
        Case Asc(".")
            ' 只允许一个小数点
            If InStr(TextBox1.Text, ".") > 0 Then
                KeyAscii = 0
            End If
        Case Else
            KeyAscii = 0
    End Select
End Sub
```

## 最佳实践

1. 文本监控
```vb
Private LastText As String
Private IsChanged As Boolean

Private Sub MonitorChanges()
    If TextBox1.Text <> LastText Then
        IsChanged = True
        LastText = TextBox1.Text
        UpdateStatus
    End If
End Sub

Private Sub UpdateStatus()
    ' 更新状态显示
    StatusBar1.Panels(1).Text = IIf(IsChanged, "已修改", "未修改")
    cmdSave.Enabled = IsChanged
End Sub
```

2. 自动保存
```vb
Private AutoSaveInterval As Long
Private LastSaveTime As Date

Private Sub SetupAutoSave()
    AutoSaveInterval = 300  ' 5分钟
    LastSaveTime = Now
    Timer1.Interval = 1000  ' 每秒检查
    Timer1.Enabled = True
End Sub

Private Sub Timer1_Timer()
    If IsChanged And DateDiff("s", LastSaveTime, Now) >= AutoSaveInterval Then
        AutoSave
    End If
End Sub

Private Sub AutoSave()
    On Error GoTo ErrorHandler
    
    Dim BackupFile As String
    BackupFile = App.Path & "\AutoSave_" & Format$(Now, "yyyymmdd_hhnnss") & ".txt"
    
    ' 使用标准 VB 保存文件
    Dim FileNum As Long
    FileNum = FreeFile
    Open BackupFile For Output As #FileNum
    Print #FileNum, TextBox1.Text
    Close #FileNum
    
    LastSaveTime = Now
    Exit Sub
    
ErrorHandler:
    Debug.Print "自动保存错误: " & Err.Description
End Sub
```

## 已知问题和解决方案

1. 性能优化
```vb
Private Sub OptimizePerformance()
    ' 禁用重绘
    LockWindowUpdate TextBox1.hwnd
    
    ' 执行批量操作
    With TextBox1
        .Text = String$(1000, "A")  ' 大量文本
    End With
    
    ' 启用重绘
    LockWindowUpdate 0
End Sub
```

2. 内存管理
```vb
Private Sub ClearLargeText()
    ' 清理大文本
    TextBox1.Text = ""
    TextBox1.ResetUndoQueue
    
    ' 强制垃圾回收
    Dim tmp As String
    tmp = Space$(1)
    Set TextBox1.Font = TextBox1.Font
End Sub
```

## 其他提示

- 使用 CueBanner 属性提供用户友好的提示
- 对于敏感输入，使用 PasswordChar 或 UseSystemPasswordChar
- 合理设置 MaxLength 限制输入长度
- 使用 ShowBalloonTip 提供实时验证反馈
- 在 Form_Unload 中保存未完成的更改
- 实现撤销功能提升用户体验
