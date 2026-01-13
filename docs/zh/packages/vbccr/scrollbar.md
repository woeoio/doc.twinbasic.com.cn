# ScrollBar Control (VBCCRScrollBar)

VBCCRScrollBar 控件提供了一个滚动条界面，可以用于调整数值或滚动显示内容。它支持水平和垂直两种方向，可以自定义滚动范围、步长等属性。

## 属性

### 关键属性

- `Value`: 当前值
- `Min`: 最小值
- `Max`: 最大值
- `SmallChange`: 小步长（点击箭头时的变化量）
- `LargeChange`: 大步长（点击滚动条空白处时的变化量）
- `Orientation`: 方向（水平/垂直）
- `Enabled`: 启用/禁用状态
- `Visible`: 可见性
- `ScrollWidth`: 滚动条宽度

## 方法

### 主要方法

- `Value = NewValue`: 设置当前值
- `SetRange(Min As Long, Max As Long)`: 设置值范围
- `GetRange(Min As Long, Max As Long)`: 获取值范围
- `Refresh`: 刷新显示

## 事件

- `Change()`: 值改变事件
- `Scroll()`: 滚动事件
- `GotFocus()`: 获得焦点事件
- `LostFocus()`: 失去焦点事件

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    ' 配置滚动条
    With ScrollBar1
        .Min = 0
        .Max = 100
        .Value = 50
        .SmallChange = 1
        .LargeChange = 10
        .Orientation = vbVertical
    End With
End Sub
```

### 与文本框联动

```vb
Private Sub SyncWithTextBox()
    ' 配置滚动条
    With ScrollBar1
        .Min = 0
        .Max = 100
        .Value = 0
        .SmallChange = 1
        .LargeChange = 5
    End With
    
    ' 更新文本框
    UpdateTextBox
End Sub

Private Sub ScrollBar1_Change()
    UpdateTextBox
End Sub

Private Sub ScrollBar1_Scroll()
    UpdateTextBox
End Sub

Private Sub UpdateTextBox()
    Text1.Text = Format$(ScrollBar1.Value, "0")
End Sub

Private Sub Text1_Change()
    ' 验证输入
    If IsNumeric(Text1.Text) Then
        Dim Value As Long
        Value = Val(Text1.Text)
        
        ' 确保值在范围内
        If Value >= ScrollBar1.Min And Value <= ScrollBar1.Max Then
            ScrollBar1.Value = Value
        End If
    End If
End Sub
```

### 缩放控制

```vb
Private Type ZoomInfo
    MinZoom As Long
    MaxZoom As Long
    CurrentZoom As Long
End Type

Private Zoom As ZoomInfo

Private Sub InitializeZoom()
    With Zoom
        .MinZoom = 25    ' 25%
        .MaxZoom = 400   ' 400%
        .CurrentZoom = 100  ' 100%
    End With
    
    ' 配置滚动条
    With ScrollBar1
        .Min = Zoom.MinZoom
        .Max = Zoom.MaxZoom
        .Value = Zoom.CurrentZoom
        .SmallChange = 5
        .LargeChange = 25
    End With
    
    ' 更新显示
    UpdateZoom
End Sub

Private Sub ScrollBar1_Change()
    Zoom.CurrentZoom = ScrollBar1.Value
    UpdateZoom
End Sub

Private Sub UpdateZoom()
    ' 更新缩放比例
    lblZoom.Caption = Format$(Zoom.CurrentZoom, "0") & "%"
    
    ' 调整显示
    AdjustDisplay
End Sub

Private Sub AdjustDisplay()
    ' 根据缩放比例调整显示
    Dim Scale As Double
    Scale = Zoom.CurrentZoom / 100
    
    ' 调整图片大小
    picDisplay.Width = picOriginal.Width * Scale
    picDisplay.Height = picOriginal.Height * Scale
End Sub
```

## 常见用例

### 内容滚动

```vb
Private Type ScrollInfo
    ContentWidth As Long    ' 内容宽度
    ContentHeight As Long   ' 内容高度
    ViewportWidth As Long   ' 视口宽度
    ViewportHeight As Long  ' 视口高度
    ScrollX As Long         ' 水平滚动位置
    ScrollY As Long         ' 垂直滚动位置
End Type

Private Scroll As ScrollInfo

Private Sub SetupScrollBars()
    ' 计算滚动范围
    With Scroll
        .ContentWidth = picContent.Width
        .ContentHeight = picContent.Height
        .ViewportWidth = fraView.Width
        .ViewportHeight = fraView.Height
        
        ' 配置水平滚动条
        With hScroll
            .Min = 0
            .Max = Max(0, Scroll.ContentWidth - Scroll.ViewportWidth)
            .LargeChange = Scroll.ViewportWidth \ 10
            .SmallChange = .LargeChange \ 5
            .Enabled = (.Max > 0)
        End With
        
        ' 配置垂直滚动条
        With vScroll
            .Min = 0
            .Max = Max(0, Scroll.ContentHeight - Scroll.ViewportHeight)
            .LargeChange = Scroll.ViewportHeight \ 10
            .SmallChange = .LargeChange \ 5
            .Enabled = (.Max > 0)
        End With
    End With
    
    ' 更新显示
    UpdateScroll
End Sub

Private Sub UpdateScroll()
    ' 更新滚动位置
    With Scroll
        .ScrollX = hScroll.Value
        .ScrollY = vScroll.Value
        
        ' 移动内容
        picContent.Move -.ScrollX, -.ScrollY
    End With
End Sub

Private Sub hScroll_Change()
    UpdateScroll
End Sub

Private Sub vScroll_Change()
    UpdateScroll
End Sub
```

### 滑块控制

```vb
Private Type SliderInfo
    MinValue As Long
    MaxValue As Long
    Value As Long
    Format As String
End Type

Private Slider As SliderInfo

Private Sub CreateSlider()
    ' 配置滑块
    With Slider
        .MinValue = 0
        .MaxValue = 1000
        .Value = 500
        .Format = "#,##0"
    End With
    
    ' 设置滚动条
    With ScrollBar1
        .Min = Slider.MinValue
        .Max = Slider.MaxValue
        .Value = Slider.Value
        .SmallChange = 1
        .LargeChange = 10
    End With
    
    ' 更新显示
    UpdateSlider
End Sub

Private Sub ScrollBar1_Change()
    Slider.Value = ScrollBar1.Value
    UpdateSlider
End Sub

Private Sub UpdateSlider()
    ' 更新显示
    lblValue.Caption = Format$(Slider.Value, Slider.Format)
    
    ' 更新指示器位置
    UpdateIndicator
End Sub

Private Sub UpdateIndicator()
    ' 计算指示器位置
    Dim Percent As Double
    Percent = (Slider.Value - Slider.MinValue) / _
             (Slider.MaxValue - Slider.MinValue)
    
    ' 移动指示器
    shpIndicator.Left = ScrollBar1.Left + _
                       (ScrollBar1.Width - shpIndicator.Width) * Percent
End Sub
```

## 最佳实践

1. 值验证
```vb
Private Function ValidateValue(ByVal NewValue As Long) As Long
    ' 确保值在范围内
    If NewValue < ScrollBar1.Min Then
        ValidateValue = ScrollBar1.Min
    ElseIf NewValue > ScrollBar1.Max Then
        ValidateValue = ScrollBar1.Max
    Else
        ValidateValue = NewValue
    End If
End Function
```

2. 错误处理
```vb
Private Function SafeSetValue(ByVal NewValue As Long) As Boolean
    On Error GoTo ErrorHandler
    
    ScrollBar1.Value = ValidateValue(NewValue)
    SafeSetValue = True
    Exit Function
    
ErrorHandler:
    Debug.Print "设置滚动条值错误: " & Err.Description
    SafeSetValue = False
End Function
```

## 已知问题和解决方案

1. 滚动响应
```vb
Private Sub OptimizeScrollResponse()
    ' 使用计时器延迟更新
    Static TimerID As Long
    
    If TimerID Then KillTimer Me.hWnd, TimerID
    TimerID = SetTimer(Me.hWnd, 1, 100, AddressOf TimerProc)
End Sub

Private Sub TimerProc()
    ' 执行更新
    UpdateDisplay
End Sub
```

2. 同步问题
```vb
Private Sub SynchronizeScrollBars()
    ' 同步多个滚动条
    With ScrollBar1
        ScrollBar2.Value = .Value
        ScrollBar3.Value = .Value
    End With
End Sub
```

## 高级特性

### 平滑滚动

```vb
Private Type SmoothScroll
    StartValue As Long
    EndValue As Long
    CurrentValue As Long
    StepCount As Long
    CurrentStep As Long
    Timer As Long
End Type

Private Smooth As SmoothScroll

Private Sub StartSmoothScroll(ByVal Target As Long)
    With Smooth
        .StartValue = ScrollBar1.Value
        .EndValue = Target
        .StepCount = 10
        .CurrentStep = 0
        
        If .Timer = 0 Then
            .Timer = SetTimer(Me.hWnd, 1, 50, AddressOf SmoothScrollProc)
        End If
    End With
End Sub

Private Sub SmoothScrollProc()
    With Smooth
        .CurrentStep = .CurrentStep + 1
        
        If .CurrentStep > .StepCount Then
            ' 完成滚动
            ScrollBar1.Value = .EndValue
            KillTimer Me.hWnd, .Timer
            .Timer = 0
        Else
            ' 计算中间值
            Dim Progress As Double
            Progress = .CurrentStep / .StepCount
            
            ScrollBar1.Value = .StartValue + _
                             (.EndValue - .StartValue) * Progress
        End If
    End With
End Sub
```

### 自定义外观

```vb
Private Type ScrollBarColors
    Background As Long
    Thumb As Long
    ThumbHot As Long
    Arrow As Long
    ArrowHot As Long
End Type

Private Colors As ScrollBarColors

Private Sub CustomizeAppearance()
    ' 设置颜色
    With Colors
        .Background = RGB(240, 240, 240)
        .Thumb = RGB(200, 200, 200)
        .ThumbHot = RGB(180, 180, 180)
        .Arrow = RGB(100, 100, 100)
        .ArrowHot = RGB(80, 80, 80)
    End With
    
    ' 应用自定义外观
    With ScrollBar1
        .BackColor = Colors.Background
        .Style = vbCustom
    End With
End Sub

Private Sub ScrollBar1_DrawItem(ByVal ItemType As Integer, _
                              ByVal State As Integer, _
                              ByVal X As Long, _
                              ByVal Y As Long, _
                              ByVal Width As Long, _
                              ByVal Height As Long)
    ' 绘制滚动条元素
    Select Case ItemType
        Case sbTrack  ' 轨道
            DrawTrack X, Y, Width, Height
            
        Case sbThumb  ' 滑块
            DrawThumb X, Y, Width, Height, (State And vbHot)
            
        Case sbUpArrow, sbDownArrow  ' 箭头
            DrawArrow X, Y, Width, Height, ItemType, (State And vbHot)
    End Select
End Sub
```

### 虚拟滚动

```vb
Private Type VirtualScroll
    TotalItems As Long     ' 总项目数
    ItemHeight As Long     ' 项目高度
    VisibleItems As Long   ' 可见项目数
    FirstVisible As Long   ' 第一个可见项目
End Type

Private Virtual As VirtualScroll

Private Sub SetupVirtualScroll()
    With Virtual
        .TotalItems = 1000000  ' 大量项目
        .ItemHeight = 20       ' 每项高度
        .VisibleItems = fraView.Height \ .ItemHeight
        .FirstVisible = 0
    End With
    
    ' 配置滚动条
    With ScrollBar1
        .Min = 0
        .Max = Virtual.TotalItems - Virtual.VisibleItems
        .SmallChange = 1
        .LargeChange = Virtual.VisibleItems
    End With
    
    ' 更新显示
    UpdateVirtualDisplay
End Sub

Private Sub UpdateVirtualDisplay()
    Virtual.FirstVisible = ScrollBar1.Value
    
    ' 清除显示
    fraView.Cls
    
    ' 只绘制可见项目
    Dim i As Long
    For i = Virtual.FirstVisible To _
        Virtual.FirstVisible + Virtual.VisibleItems - 1
        
        If i < Virtual.TotalItems Then
            DrawItem i
        End If
    Next i
End Sub

Private Sub DrawItem(ByVal Index As Long)
    ' 计算项目位置
    Dim Y As Long
    Y = (Index - Virtual.FirstVisible) * Virtual.ItemHeight
    
    ' 绘制项目
    fraView.CurrentY = Y
    fraView.Print "项目 " & Index
End Sub
```

### 进度指示器

```vb
Private Type ProgressInfo
    Min As Long
    Max As Long
    Value As Long
    ShowPercent As Boolean
End Type

Private Progress As ProgressInfo

Private Sub CreateProgressBar()
    ' 配置进度条
    With Progress
        .Min = 0
        .Max = 100
        .Value = 0
        .ShowPercent = True
    End With
    
    ' 设置滚动条
    With ScrollBar1
        .Min = Progress.Min
        .Max = Progress.Max
        .Value = Progress.Value
        .Enabled = False  ' 禁止用户操作
    End With
    
    ' 更新显示
    UpdateProgress
End Sub

Private Sub UpdateProgress(Optional ByVal NewValue As Long = -1)
    If NewValue >= 0 Then
        Progress.Value = NewValue
    End If
    
    ' 更新滚动条
    ScrollBar1.Value = Progress.Value
    
    ' 显示进度
    If Progress.ShowPercent Then
        Dim Percent As Long
        Percent = Progress.Value * 100 \ Progress.Max
        lblProgress.Caption = Format$(Percent, "0") & "%"
    End If
End Sub

Private Sub StartProgress()
    ' 模拟进度
    Dim i As Long
    For i = Progress.Min To Progress.Max
        UpdateProgress i
        DoEvents
        Sleep 100  ' 延时
    Next i
End Sub
```
