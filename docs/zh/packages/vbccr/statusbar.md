# StatusBar Control (VBCCRStatusBar)

VBCCRStatusBar 控件提供了一个状态栏，用于在窗体底部显示应用程序的状态信息、提示信息和进度等。它支持多个面板，每个面板可以显示不同类型的信息。

## 属性

### 关键属性

- `Panels`: 面板集合
- `SimpleText`: 简单文本模式下的文本
- `SimplePanel`: 是否使用简单面板模式
- `Style`: 状态栏样式
- `SizeGrip`: 是否显示大小调整手柄
- `Height`: 状态栏高度
- `Enabled`: 启用/禁用状态
- `Visible`: 可见性
- `Align`: 对齐方式（一般为底部）

### 面板样式常量 (SbrPanelStyleConstants)

用于面板的 `Style` 属性:

- `SbrPanelStyleText` (0) - 文本样式
- `SbrPanelStyleCaps` (1) - 大写锁定状态
- `SbrPanelStyleNum` (2) - 数字锁定状态
- `SbrPanelStyleIns` (3) - 插入状态
- `SbrPanelStyleScrl` (4) - 滚动锁定状态
- `SbrPanelStyleTime` (5) - 时间显示
- `SbrPanelStyleDate` (6) - 日期显示
- `SbrPanelStyleKana` (7) - 假名输入状态
- `SbrPanelStyleHangul` (8) - 韩文输入状态
- `SbrPanelStyleJunja` (9) - 日文全角字符状态
- `SbrPanelStyleKanji` (10) - 汉字输入状态
- `SbrPanelStyleHanja` (11) - 韩文汉字状态

## 方法

### 主要方法

- `AddPanel([Key As String], [Text As String], [Width As Long], [Style As PanelStyleConstants])`: 添加面板
- `RemovePanel(Index As Variant)`: 移除面板
- `GetPanel(Index As Variant) As Panel`: 获取面板对象
- `ShowTips`: 显示工具提示
- `Refresh`: 刷新显示

## 事件

- `PanelClick(Panel As Panel)`: 面板点击事件
- `PanelDblClick(Panel As Panel)`: 面板双击事件
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    ' 配置状态栏
    With StatusBar1
        .SizeGrip = True
        .SimplePanel = False

        ' 添加面板
        .AddPanel , "就绪"  ' 状态面板
        .AddPanel , "行: 1, 列: 1"  ' 光标位置面板
        .AddPanel , "100%"  ' 缩放面板

        ' 设置面板宽度
        .GetPanel(1).Width = 1500
        .GetPanel(2).Width = 1000
    End With
End Sub
```

### 多功能状态栏

```vb
Private Sub CreateAdvancedStatusBar()
    With StatusBar1
        ' 状态面板
        .AddPanel "STATUS", "就绪", 1500
        .GetPanel("STATUS").Style = SbrPanelStyleText

        ' 进度面板
        .AddPanel "PROGRESS", "0%", 1000
        .GetPanel("PROGRESS").Style = SbrPanelStyleText
        .GetPanel("PROGRESS").Max = 100

        ' 日期时间面板
        .AddPanel "DATETIME", Now, 2000
        .GetPanel("DATETIME").Style = SbrPanelStyleDate

        ' 键盘状态面板
        .AddPanel "KEYBOARD", "", 1000
        UpdateKeyboardStatus
    End With
End Sub

Private Sub UpdateKeyboardStatus()
    Dim Status As String
    Status = IIf(GetKeyState(vbKeyCapital) And 1, "CAP ", "") & _
            IIf(GetKeyState(vbKeyNumlock) And 1, "NUM ", "") & _
            IIf(GetKeyState(vbKeyScrollLock) And 1, "SCRL", "")

    StatusBar1.GetPanel("KEYBOARD").Text = Status
End Sub

Private Sub Timer1_Timer()
    ' 更新日期时间
    StatusBar1.GetPanel("DATETIME").Text = Now
End Sub
```

### 进度显示

```vb
Private Sub ShowProgress(ByVal Value As Long, ByVal MaxValue As Long)
    With StatusBar1.GetPanel("PROGRESS")
        .Text = Format$(Value / MaxValue * 100, "0") & "%"
        .Min = 0
        .Max = MaxValue
        .Value = Value
    End With
End Sub

Private Sub ProcessFile()
    Const FILE_SIZE As Long = 1000000
    Const CHUNK_SIZE As Long = 10000

    Dim Position As Long
    For Position = 0 To FILE_SIZE Step CHUNK_SIZE
        ' 处理文件块
        ProcessChunk Position, Min(CHUNK_SIZE, FILE_SIZE - Position)

        ' 更新进度
        ShowProgress Position, FILE_SIZE
        DoEvents
    Next Position

    ' 完成后更新状态
    StatusBar1.GetPanel("STATUS").Text = "处理完成"
    StatusBar1.GetPanel("PROGRESS").Text = "100%"
End Sub
```

## 常见用例

### 状态提示

```vb
Private Sub UpdateStatus(ByVal Message As String)
    StatusBar1.GetPanel("STATUS").Text = Message
    StatusBar1.Refresh
End Sub

Private Sub cmdSave_Click()
    UpdateStatus "正在保存文件..."

    ' 保存操作
    SaveDocument

    UpdateStatus "文件已保存"
End Sub
```

### 动态面板

```vb
Private Sub CreateDynamicPanels()
    ' 根据配置创建面板
    Dim Panels() As String
    Panels = Split("状态,进度,缩放,坐标", ",")

    For i = 0 To UBound(Panels)
        StatusBar1.AddPanel "PANEL" & i, Panels(i), 1000
    Next i

    ' 启用自动调整大小
    For i = 0 To StatusBar1.Panels.Count - 1
        StatusBar1.GetPanel(i).AutoSize = 2  ' 内容自动调整
    Next i
End Sub
```

### 面板交互

```vb
Private Sub StatusBar1_PanelClick(ByVal Panel As Panel)
    ' 响应面板点击
    Select Case Panel.Key
        Case "PROGRESS"
            ' 显示详细进度对话框
            ShowProgressDialog

        Case "STATUS"
            ' 显示状态历史
            ShowStatusHistory
    End Select
End Sub
```

## 最佳实践

1. 性能优化
```vb
Private Sub OptimizeStatusBar()
    ' 避免频繁更新
    Static LastUpdate As Long
    Static LastText As String

    Dim CurrentText As String
    CurrentText = BuildStatusText()

    If LastText <> CurrentText Then
        StatusBar1.GetPanel("STATUS").Text = CurrentText
        LastText = CurrentText
        LastUpdate = GetTickCount
    End If
End Sub
```

2. 错误处理
```vb
Private Sub SafeStatusBarUpdate(ByVal PanelIndex As Long, ByVal Text As String)
    On Error Resume Next

    If PanelIndex < StatusBar1.Panels.Count Then
        StatusBar1.GetPanel(PanelIndex).Text = Text
    End If
End Sub
```

3. 布局管理
```vb
Private Sub SaveStatusBarLayout()
    Dim i As Long
    For i = 0 To StatusBar1.Panels.Count - 1
        Dim Panel As Panel
        Set Panel = StatusBar1.GetPanel(i)

        ' 保存面板配置
        SaveSetting App.Title, "StatusBar", "Panel" & i & "Visible", Panel.Visible
        SaveSetting App.Title, "StatusBar", "Panel" & i & "Width", Panel.Width
        SaveSetting App.Title, "StatusBar", "Panel" & i & "Text", Panel.Text
    Next i
End Sub

Private Sub LoadStatusBarLayout()
    Dim i As Long
    For i = 0 To StatusBar1.Panels.Count - 1
        Dim Panel As Panel
        Set Panel = StatusBar1.GetPanel(i)

        ' 加载面板配置
        On Error Resume Next
        Panel.Visible = GetSetting(App.Title, "StatusBar", "Panel" & i & "Visible", True)
        Panel.Width = Val(GetSetting(App.Title, "StatusBar", "Panel" & i & "Width", 1000))
        Panel.Text = GetSetting(App.Title, "StatusBar", "Panel" & i & "Text", "")
        On Error GoTo 0
    Next i
End Sub
```

## 其他提示

- 使用 SimplePanel 模式显示简单状态文本
- 为不同的信息类型创建独立的面板
- 使用 AutoSize 属性自动调整面板宽度
- 实现 PanelClick 事件提供交互功能
- 定期更新状态面板提供即时反馈
- 使用 Timer 定期更新时间面板
- 考虑保存和恢复面板布局
- 在长时间操作中使用进度面板
- 保持状态信息简洁明了
