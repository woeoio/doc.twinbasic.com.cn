# Label Control (VBCCRLabel)

VBCCRLabel 控件是一个增强的标签控件，用于显示文本和图像。它提供了比标准 Label 控件更多的功能和更好的显示效果。

## 属性

### 关键属性

- `Caption`: 显示的文本内容
- `AutoSize`: 是否自动调整大小
- `WordWrap`: 是否自动换行
- `BackStyle`: 背景样式（透明或不透明）
- `BackColor`: 背景颜色
- `ForeColor`: 文本颜色
- `Alignment`: 文本对齐方式
- `Font`: 字体设置
- `UseMnemonic`: 是否使用快捷键（&字符）
- `Enabled`: 启用/禁用控件
- `MousePointer`: 鼠标指针样式
- `ToolTipText`: 工具提示文本

## 方法

### 主要方法

- `Move(Left As Single, Top As Single, Width As Single, Height As Single)`: 移动和调整大小
- `Refresh()`: 刷新显示

## 事件

- `Click()`: 点击时触发
- `DblClick()`: 双击时触发
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    With Label1
        .Caption = "欢迎使用"
        .AutoSize = True
        .BackStyle = vbTransparent
        .ForeColor = vbBlue
    End With
End Sub
```

### 动态文本更新

```vb
Private Sub UpdateLabel(ByVal NewText As String)
    With Label1
        .AutoSize = True
        .Caption = NewText
        .Refresh
    End With
End Sub
```

### 格式化显示

```vb
Private Sub FormatLabel()
    With Label1
        .Caption = "重要提示"
        .FontBold = True
        .ForeColor = vbRed
        .BackStyle = vbOpaque
        .BackColor = vbInfoBackground
        .BorderStyle = vbFixedSingle
        .Alignment = vbCenter
    End With
End Sub
```

## 常见用例

### 状态显示

```vb
Private Sub ShowStatus(ByVal Status As String, Optional ByVal IsError As Boolean = False)
    With lblStatus
        .Caption = Status
        If IsError Then
            .ForeColor = vbRed
            .FontBold = True
        Else
            .ForeColor = vbBlack
            .FontBold = False
        End If
        .Refresh
    End With
End Sub
```

### 计数器显示

```vb
Private Sub UpdateCounter(ByVal Count As Long, ByVal Total As Long)
    lblCounter.Caption = "进度: " & Count & " / " & Total
    
    ' 根据进度更改颜色
    If Count = Total Then
        lblCounter.ForeColor = vbGreen
    ElseIf Count > Total * 0.5 Then
        lblCounter.ForeColor = vbBlue
    Else
        lblCounter.ForeColor = vbBlack
    End If
End Sub
```

## 最佳实践

1. 文本格式化
```vb
Private Sub FormatText(ByVal Text As String, Optional ByVal IsHighlight As Boolean = False)
    With Label1
        .Caption = Text
        If IsHighlight Then
            .FontBold = True
            .ForeColor = vbBlue
        Else
            .FontBold = False
            .ForeColor = vbBlack
        End If
        .AutoSize = True
    End With
End Sub
```

2. 自动大小调整
```vb
Private Sub AdjustLabelSize()
    Const MAX_WIDTH As Long = 200
    
    With Label1
        .AutoSize = False
        .WordWrap = True
        .Width = MAX_WIDTH
        .AutoSize = True ' 重新启用自动大小以适应内容
    End With
End Sub
```

3. 错误处理
```vb
Private Sub SafeLabelOperation()
    On Error GoTo ErrorHandler
    
    Label1.Caption = LoadLongText()
    Exit Sub
    
ErrorHandler:
    Debug.Print "标签操作错误: " & Err.Description
    Label1.Caption = "错误: 无法加载文本"
End Sub
```

## 已知问题和解决方案

1. 长文本显示
```vb
Private Sub HandleLongText(ByVal LongText As String)
    With Label1
        .AutoSize = False
        .WordWrap = True
        .Width = 300 ' 设置合适的宽度
        .Caption = LongText
        
        ' 如果文本被截断，添加省略号
        If .Height > 100 Then ' 最大高度限制
            .Height = 100
            .Caption = Left$(LongText, 200) & "..."
        End If
    End With
End Sub
```

2. 闪烁问题
```vb
Private Sub PreventFlicker()
    Label1.Visible = False
    
    ' 执行更新
    UpdateLabelContent
    
    Label1.Visible = True
End Sub
```

## 其他提示

- 合理使用自动换行
- 注意文本对齐方式
- 使用适当的字体大小
- 考虑国际化支持
- 处理特殊字符
- 实现文本截断
- 优化性能
- 注意可访问性
- 保持一致的样式
- 在 Form_Unload 中清理资源

### 特殊用法

1. 创建链接样式标签
```vb
Private Sub CreateLinkLabel()
    With Label1
        .Caption = "点击这里了解更多..."
        .ForeColor = vbBlue
        .MousePointer = vbCustom
        .FontUnderline = True
    End With
End Sub
```

2. 创建多行标题
```vb
Private Sub CreateMultiLineTitle()
    With Label1
        .Caption = "主标题" & vbCrLf & "副标题"
        .AutoSize = True
        .Alignment = vbCenter
    End With
End Sub
```

3. 创建带边框的标签
```vb
Private Sub CreateBorderedLabel()
    With Label1
        .BorderStyle = vbFixedSingle
        .BackStyle = vbOpaque
        .BackColor = vbInfoBackground
        .Alignment = vbCenter
        .Caption = "重要提示"
    End With
End Sub
```
