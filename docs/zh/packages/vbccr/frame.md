# Frame Control (VBCCRFrame)

VBCCRFrame 控件是一个容器控件，用于组织和管理其他控件。它提供了一个可视化的边框和标题，帮助创建有组织的用户界面。

## 属性

### 关键属性

- `Caption`: 框架标题
- `BackColor`: 背景颜色
- `ForeColor`: 文本颜色
- `BorderStyle`: 边框样式
- `Enabled`: 启用/禁用控件（影响所有子控件）
- `Font`: 标题字体设置
- `MousePointer`: 鼠标指针样式
- `Visible`: 显示/隐藏框架及其子控件

## 方法

### 主要方法

- `Move(Left As Single, Top As Single, Width As Single, Height As Single)`: 移动和调整大小
- `SetFocus()`: 设置焦点到框架
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
    With Frame1
        .Caption = "设置选项"
        .BorderStyle = vbFixedSingle
        .BackColor = vbButtonFace
    End With
End Sub
```

### 动态控件管理

```vb
Private Sub ManageFrameControls()
    ' 启用/禁用框架内的所有控件
    Dim ctl As Control
    
    For Each ctl In Me.Controls
        If TypeOf ctl Is CommandButton Then
            If ctl.Container Is Frame1 Then
                ctl.Enabled = Frame1.Enabled
            End If
        End If
    Next ctl
End Sub
```

### 选项分组

```vb
Private Sub SetupOptionGroups()
    ' 设置两个选项组
    With Frame1 ' 第一组
        .Caption = "显示选项"
        With .Controls
            ' 添加选项按钮
            optShowAll.Caption = "显示所有"
            optShowSelected.Caption = "仅显示选中"
        End With
    End With
    
    With Frame2 ' 第二组
        .Caption = "排序选项"
        With .Controls
            ' 添加选项按钮
            optSortName.Caption = "按名称"
            optSortDate.Caption = "按日期"
        End With
    End With
End Sub
```

## 常见用例

### 设置对话框

```vb
Private Sub CreateSettingsDialog()
    ' 创建设置分组
    With fraGeneral
        .Caption = "常规设置"
        .Top = 20
        .Left = 20
        .Width = 300
        .Height = 150
    End With
    
    With fraSecurity
        .Caption = "安全设置"
        .Top = fraGeneral.Top + fraGeneral.Height + 10
        .Left = 20
        .Width = 300
        .Height = 150
    End With
End Sub
```

### 动态显示/隐藏

```vb
Private Sub ToggleAdvancedOptions(ByVal Show As Boolean)
    ' 显示/隐藏高级选项框架
    With fraAdvanced
        .Visible = Show
        ' 调整其他控件位置
        If Show Then
            fraBasic.Top = fraAdvanced.Top + fraAdvanced.Height + 10
        Else
            fraBasic.Top = fraAdvanced.Top
        End If
    End With
End Sub
```

## 最佳实践

1. 布局管理
```vb
Private Sub ArrangeFrames()
    ' 计算和设置框架位置
    Const MARGIN As Integer = 10
    
    With Frame1
        .Top = MARGIN
        .Left = MARGIN
    End With
    
    With Frame2
        .Top = Frame1.Top + Frame1.Height + MARGIN
        .Left = MARGIN
    End With
End Sub
```

2. 子控件管理
```vb
Private Sub UpdateFrameControls(ByVal FrameName As String, ByVal Enable As Boolean)
    Dim ctl As Control
    
    For Each ctl In Me.Controls
        If Not ctl Is Nothing Then
            If TypeOf ctl.Container Is Frame Then
                If ctl.Container.Name = FrameName Then
                    ctl.Enabled = Enable
                End If
            End If
        End If
    Next ctl
End Sub
```

3. 错误处理
```vb
Private Sub SafeFrameOperation()
    On Error GoTo ErrorHandler
    
    Frame1.Enabled = False
    ' 执行操作
    Frame1.Enabled = True
    Exit Sub
    
ErrorHandler:
    Debug.Print "框架操作错误: " & Err.Description
    Frame1.Enabled = True
End Sub
```

## 已知问题和解决方案

1. 重绘问题
```vb
Private Sub FixFrameRedraw()
    Frame1.Visible = False
    ' 更新框架内容
    Frame1.Refresh
    Frame1.Visible = True
End Sub
```

2. 焦点问题
```vb
Private Sub HandleFocusIssues()
    ' 确保子控件可以正确获得焦点
    If Not Frame1.Enabled Then
        ' 将焦点移到框架外的下一个控件
        SendKeys "{TAB}"
    End If
End Sub
```

## 其他提示

- 合理组织控件层次
- 保持一致的视觉样式
- 使用适当的间距
- 考虑可访问性
- 实现逻辑分组
- 优化Tab顺序
- 处理控件关系
- 实现响应式布局
- 注意子控件状态
- 在 Form_Unload 中清理资源
