# Option Control (VBCCROption)

VBCCROption 控件是一个单选按钮控件，用于在一组选项中选择一个选项。它通常与其他 Option 控件一起使用，形成一个选项组。

## 属性

### 关键属性

- `Value`: 是否选中
- `Caption`: 显示的文本
- `Alignment`: 文本对齐方式
- `Enabled`: 启用/禁用控件
- `BackColor`: 背景颜色
- `ForeColor`: 文本颜色
- `Font`: 字体设置
- `Group`: 分组设置
- `TabStop`: 是否可以通过Tab键获得焦点
- `ToolTipText`: 工具提示文本

## 方法

### 主要方法

- `SetFocus()`: 设置焦点到控件
- `Refresh()`: 刷新显示

## 事件

- `Click()`: 点击时触发
- `GotFocus()`: 获得焦点时触发
- `LostFocus()`: 失去焦点时触发
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    ' 设置选项组
    With optGender(0)
        .Caption = "男"
        .Value = True
        .Tag = "M"
    End With
    
    With optGender(1)
        .Caption = "女"
        .Value = False
        .Tag = "F"
    End With
End Sub
```

### 选项组处理

```vb
Private Sub HandleOptionGroup()
    Dim i As Integer
    
    ' 获取选中的选项
    For i = 0 To optGender.Count - 1
        If optGender(i).Value Then
            Debug.Print "选中的性别: " & optGender(i).Tag
            Exit For
        End If
    Next i
End Sub
```

### 动态创建选项

```vb
Private Sub CreateOptions()
    Dim i As Integer
    Dim Top As Integer
    
    Top = 20
    
    ' 动态创建选项
    For i = 0 To 4
        With Controls.Add("VBCCROption", "optChoice" & i)
            .Left = 20
            .Top = Top
            .Caption = "选项 " & (i + 1)
            .Tag = i + 1
            Top = Top + 30
        End With
    Next i
End Sub
```

## 常见用例

### 设置对话框

```vb
Private Sub SetupSettingsDialog()
    ' 显示模式选项
    With fraDisplayMode
        .Caption = "显示模式"
        
        With optDisplay(0)
            .Caption = "简单模式"
            .Value = True
        End With
        
        With optDisplay(1)
            .Caption = "高级模式"
        End With
        
        With optDisplay(2)
            .Caption = "专家模式"
        End With
    End With
End Sub

Private Sub optDisplay_Click(Index As Integer)
    Select Case Index
        Case 0 ' 简单模式
            ShowSimpleControls
        Case 1 ' 高级模式
            ShowAdvancedControls
        Case 2 ' 专家模式
            ShowExpertControls
    End Select
End Sub
```

### 多组选项

```vb
Private Sub SetupMultipleGroups()
    ' 第一组 - 性别
    Frame1.Caption = "性别"
    optGender(0).Caption = "男"
    optGender(1).Caption = "女"
    
    ' 第二组 - 年龄段
    Frame2.Caption = "年龄段"
    optAge(0).Caption = "18岁以下"
    optAge(1).Caption = "18-30岁"
    optAge(2).Caption = "30岁以上"
End Sub

Private Sub GetSelectedOptions()
    Dim Gender As String
    Dim Age As String
    
    ' 获取性别选择
    If optGender(0).Value Then
        Gender = "男"
    Else
        Gender = "女"
    End If
    
    ' 获取年龄段选择
    For i = 0 To 2
        If optAge(i).Value Then
            Age = optAge(i).Caption
            Exit For
        End If
    Next i
    
    Debug.Print "选择: " & Gender & ", " & Age
End Sub
```

## 最佳实践

1. 分组管理
```vb
Private Sub ManageOptionGroups()
    ' 使用 Frame 控件来分组
    Frame1.Caption = "选项组 1"
    Frame2.Caption = "选项组 2"
    
    ' 确保每组只有一个选中项
    ValidateGroupSelection Frame1
    ValidateGroupSelection Frame2
End Sub

Private Sub ValidateGroupSelection(frm As Frame)
    Dim ctl As Control
    Dim HasSelection As Boolean
    
    HasSelection = False
    For Each ctl In frm.Controls
        If TypeOf ctl Is OptionButton Then
            If ctl.Value Then
                If HasSelection Then
                    ctl.Value = False
                Else
                    HasSelection = True
                End If
            End If
        End If
    Next ctl
    
    ' 如果没有选中项，选中第一个
    If Not HasSelection Then
        For Each ctl In frm.Controls
            If TypeOf ctl Is OptionButton Then
                ctl.Value = True
                Exit For
            End If
        Next ctl
    End If
End Sub
```

2. 错误处理
```vb
Private Function GetSelectedValue(ByVal GroupName As String) As Variant
    On Error GoTo ErrorHandler
    
    Dim ctl As Control
    
    For Each ctl In Me.Controls
        If TypeOf ctl Is OptionButton Then
            If ctl.Group = GroupName And ctl.Value Then
                GetSelectedValue = ctl.Tag
                Exit Function
            End If
        End If
    Next ctl
    
    GetSelectedValue = Null
    Exit Function
    
ErrorHandler:
    Debug.Print "选项获取错误: " & Err.Description
    GetSelectedValue = Null
End Function
```

## 已知问题和解决方案

1. 分组问题
```vb
Private Sub FixGroupingIssues()
    ' 使用 Frame 控件确保正确分组
    Frame1.Caption = "组1"
    Frame2.Caption = "组2"
    
    ' 将选项移动到对应的 Frame 中
    Set optGroup1(0).Container = Frame1
    Set optGroup1(1).Container = Frame1
    
    Set optGroup2(0).Container = Frame2
    Set optGroup2(1).Container = Frame2
End Sub
```

2. 焦点问题
```vb
Private Sub HandleFocusIssues()
    ' 确保可以通过键盘访问
    For i = 0 To optChoices.Count - 1
        optChoices(i).TabStop = True
        optChoices(i).TabIndex = i
    Next i
End Sub
```

## 其他提示

- 总是提供默认选择
- 使用清晰的标签文本
- 合理组织选项顺序
- 实现键盘导航
- 注意选项间距
- 提供视觉反馈
- 考虑可访问性
- 使用一致的样式
- 实现数据验证
- 在 Form_Unload 中清理资源

### 特殊用法

1. 创建三态选项
```vb
Private Sub CreateTriStateOptions()
    Dim States(2) As String
    States(0) = "启用"
    States(1) = "禁用"
    States(2) = "自动"
    
    For i = 0 To 2
        With Controls.Add("VBCCROption", "optState" & i)
            .Caption = States(i)
            .Left = 20
            .Top = 20 + (i * 30)
            .Tag = i
        End With
    Next i
End Sub
```

2. 创建图形选项
```vb
Private Sub CreateGraphicOptions()
    ' 创建带图标的选项
    With optViewMode(0)
        .Caption = "图标视图"
        Set .Picture = LoadPicture("icon_view.ico")
    End With
    
    With optViewMode(1)
        .Caption = "列表视图"
        Set .Picture = LoadPicture("list_view.ico")
    End With
End Sub
```

3. 创建动态选项组
```vb
Private Sub CreateDynamicOptionGroup(ByVal ParentFrame As Frame, _
                                   ByRef Choices() As String)
    Dim i As Integer
    Dim Top As Integer
    
    Top = 20
    
    For i = 0 To UBound(Choices)
        With Controls.Add("VBCCROption", "opt" & ParentFrame.Name & i)
            Set .Container = ParentFrame
            .Caption = Choices(i)
            .Left = 10
            .Top = Top
            .Tag = i
            If i = 0 Then .Value = True
            Top = Top + 25
        End With
    Next i
End Sub
```
