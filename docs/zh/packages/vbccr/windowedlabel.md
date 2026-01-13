# WindowedLabel Control (VBCCRWindowedLabel)

WindowedLabel 控件是一个带有窗口句柄的标签控件，它提供了比普通标签更多的功能和更好的性能。它支持子类化和自定义绘制，可以实现复杂的视觉效果。

## 属性

### 基本属性
- `Caption` - 显示文本
- `BackColor` - 背景颜色
- `ForeColor` - 前景颜色
- `Enabled` - 是否启用控件
- `Font` - 字体设置
- `Visible` - 是否可见

### 外观属性
- `Alignment` - 文本对齐方式
  - `vbLeftAlign` (0) - 左对齐
  - `vbCenterAlign` (1) - 居中对齐
  - `vbRightAlign` (2) - 右对齐
- `BorderStyle` - 边框样式
- `Transparent` - 是否透明
- `UseMnemonic` - 是否使用快捷键(&)
- `AutoSize` - 是否自动调整大小
- `WordWrap` - 是否自动换行

### 高级属性
- `hWnd` - 窗口句柄
- `SubclassId` - 子类化标识符
- `DrawMode` - 绘制模式

## 事件

- `Click` - 点击控件时触发
- `DblClick` - 双击控件时触发
- `MouseDown` - 鼠标按下时触发
- `MouseMove` - 鼠标移动时触发
- `MouseUp` - 鼠标释放时触发
- `Paint` - 重绘控件时触发
- `WindowProc` - 处理窗口消息时触发

## 代码示例

### 基本用法

```vb
Private Sub InitWindowedLabel()
    With WindowedLabel1
        .Caption = "这是一个 WindowedLabel 控件"
        .Alignment = vbCenterAlign
        .BorderStyle = 1  ' 单线边框
        .AutoSize = True
        .WordWrap = True
    End With
End Sub
```

### 渐变背景

```vb
Private Type GradientInfo
    StartColor As Long
    EndColor As Long
    Direction As Long  ' 0=水平, 1=垂直
End Type

Private Type GradientManager
    Gradient As GradientInfo
    Enabled As Boolean
End Type

Private Gradients As GradientManager

Private Sub InitGradientManager()
    With Gradients
        .Enabled = True
        
        With .Gradient
            .StartColor = RGB(255, 255, 255)  ' 白色
            .EndColor = RGB(200, 220, 255)    ' 淡蓝色
            .Direction = 0  ' 水平渐变
        End With
    End With
End Sub

Private Sub WindowedLabel1_Paint()
    If Not Gradients.Enabled Then Exit Sub
    
    With WindowedLabel1
        Dim hDC As Long
        hDC = .hDC
        
        ' 创建渐变画刷
        DrawGradient hDC, _
                    0, 0, .Width, .Height, _
                    Gradients.Gradient.StartColor, _
                    Gradients.Gradient.EndColor, _
                    Gradients.Gradient.Direction
        
        ' 绘制文本
        DrawText hDC, _
                .Caption, _
                GetTextRect(), _
                GetTextFormat()
    End With
End Sub

Private Sub DrawGradient(ByVal hDC As Long, _
                        ByVal x As Long, _
                        ByVal y As Long, _
                        ByVal Width As Long, _
                        ByVal Height As Long, _
                        ByVal StartColor As Long, _
                        ByVal EndColor As Long, _
                        ByVal Direction As Long)
    Dim vert(0 To 1) As TRIVERTEX
    Dim gRect As GRADIENT_RECT
    
    ' 设置顶点
    With vert(0)
        .x = x
        .y = y
        .Red = GetRValue(StartColor) * 256
        .Green = GetGValue(StartColor) * 256
        .Blue = GetBValue(StartColor) * 256
        .Alpha = 0
    End With
    
    With vert(1)
        .x = x + Width
        .y = y + Height
        .Red = GetRValue(EndColor) * 256
        .Green = GetGValue(EndColor) * 256
        .Blue = GetBValue(EndColor) * 256
        .Alpha = 0
    End With
    
    gRect.UpperLeft = 0
    gRect.LowerRight = 1
    
    ' 绘制渐变
    GradientFill hDC, vert(0), 2, gRect, 1, _
                 IIf(Direction = 0, GRADIENT_FILL_RECT_H, GRADIENT_FILL_RECT_V)
End Sub

Private Function GetTextRect() As RECT
    Dim rc As RECT
    
    With WindowedLabel1
        GetClientRect .hWnd, rc
    End With
    
    GetTextRect = rc
End Function

Private Function GetTextFormat() As Long
    Dim Format As Long
    Format = DT_VCENTER Or DT_SINGLELINE
    
    With WindowedLabel1
        Select Case .Alignment
            Case vbLeftAlign
                Format = Format Or DT_LEFT
            Case vbCenterAlign
                Format = Format Or DT_CENTER
            Case vbRightAlign
                Format = Format Or DT_RIGHT
        End Select
        
        If .WordWrap Then
            Format = Format Or DT_WORDBREAK
            Format = Format And Not DT_SINGLELINE
        End If
        
        If .UseMnemonic Then
            Format = Format Or DT_NOPREFIX
        End If
    End With
    
    GetTextFormat = Format
End Function
```

### 动画效果

```vb
Private Type AnimationInfo
    Enabled As Boolean
    Timer As VBCCRTimer
    CurrentStep As Long
    TotalSteps As Long
    Interval As Long
    AnimationType As Long  ' 0=淡入淡出, 1=滑动, 2=缩放
End Type

Private Animation As AnimationInfo

Private Sub InitAnimation()
    With Animation
        .Enabled = True
        Set .Timer = Timer1
        .Timer.Enabled = False
        .CurrentStep = 0
        .TotalSteps = 20
        .Interval = 50  ' 50ms
        .AnimationType = 0
    End With
End Sub

Private Sub StartAnimation()
    With Animation
        If Not .Enabled Then Exit Sub
        
        .CurrentStep = 0
        .Timer.Interval = .Interval
        .Timer.Enabled = True
    End With
End Sub

Private Sub Timer1_Timer()
    With Animation
        .CurrentStep = .CurrentStep + 1
        
        If .CurrentStep > .TotalSteps Then
            .Timer.Enabled = False
            .CurrentStep = 0
            Exit Sub
        End If
        
        ' 计算动画进度
        Dim Progress As Double
        Progress = .CurrentStep / .TotalSteps
        
        ' 应用动画效果
        Select Case .AnimationType
            Case 0  ' 淡入淡出
                ApplyFadeEffect Progress
            
            Case 1  ' 滑动
                ApplySlideEffect Progress
            
            Case 2  ' 缩放
                ApplyScaleEffect Progress
        End Select
    End With
End Sub

Private Sub ApplyFadeEffect(ByVal Progress As Double)
    With WindowedLabel1
        .BackColor = BlendColors(vbWhite, .BackColor, Progress)
        .ForeColor = BlendColors(vbBlack, .ForeColor, Progress)
    End With
End Sub

Private Sub ApplySlideEffect(ByVal Progress As Double)
    With WindowedLabel1
        .Left = .Left + (Progress * 100)
    End With
End Sub

Private Sub ApplyScaleEffect(ByVal Progress As Double)
    With WindowedLabel1
        .Width = .Width * Progress
        .Height = .Height * Progress
    End With
End Sub

Private Function BlendColors(ByVal Color1 As Long, _
                           ByVal Color2 As Long, _
                           ByVal Ratio As Double) As Long
    Dim r1 As Long, g1 As Long, b1 As Long
    Dim r2 As Long, g2 As Long, b2 As Long
    
    ' 分解颜色
    r1 = Color1 And &HFF&
    g1 = (Color1 And &HFF00&) \ &H100&
    b1 = (Color1 And &HFF0000) \ &H10000
    
    r2 = Color2 And &HFF&
    g2 = (Color2 And &HFF00&) \ &H100&
    b2 = (Color2 And &HFF0000) \ &H10000
    
    ' 混合颜色
    BlendColors = RGB( _
        r1 + (r2 - r1) * Ratio, _
        g1 + (g2 - g1) * Ratio, _
        b1 + (b2 - b1) * Ratio)
End Function
```

### 子类化处理

```vb
Private Type SubclassInfo
    hWnd As Long
    OldWndProc As Long
    Enabled As Boolean
End Type

Private Subclass As SubclassInfo

Private Sub InitSubclass()
    With Subclass
        .hWnd = WindowedLabel1.hWnd
        .Enabled = True
        
        ' 安装子类化过程
        If .Enabled Then
            .OldWndProc = SetWindowLong(.hWnd, _
                                      GWL_WNDPROC, _
                                      AddressOf WindowProc)
        End If
    End With
End Sub

Private Sub Form_Unload(Cancel As Integer)
    ' 移除子类化
    With Subclass
        If .Enabled And .OldWndProc <> 0 Then
            SetWindowLong .hWnd, GWL_WNDPROC, .OldWndProc
        End If
    End With
End Sub

Private Function WindowProc(ByVal hWnd As Long, _
                          ByVal uMsg As Long, _
                          ByVal wParam As Long, _
                          ByVal lParam As Long) As Long
    Select Case uMsg
        Case WM_MOUSEMOVE
            ' 处理鼠标移动
            HandleMouseMove wParam, lParam
        
        Case WM_PAINT
            ' 处理重绘
            HandlePaint
        
        Case Else
            ' 调用原始窗口过程
            WindowProc = CallWindowProc(Subclass.OldWndProc, _
                                      hWnd, uMsg, wParam, lParam)
    End Select
End Function

Private Sub HandleMouseMove(ByVal wParam As Long, _
                          ByVal lParam As Long)
    Dim x As Long, y As Long
    x = LoWord(lParam)
    y = HiWord(lParam)
    
    ' 处理鼠标移动效果
    ' ...
End Sub

Private Sub HandlePaint()
    ' 处理自定义绘制
    ' ...
End Sub

Private Function LoWord(ByVal DWord As Long) As Integer
    If DWord And &H8000& Then
        LoWord = DWord Or &HFFFF0000
    Else
        LoWord = DWord And &HFFFF&
    End If
End Function

Private Function HiWord(ByVal DWord As Long) As Integer
    HiWord = (DWord And &HFFFF0000) \ &H10000
End Function
```

### 工具提示管理器

```vb
Private Type TooltipInfo
    hWnd As Long
    Text As String
    Enabled As Boolean
End Type

Private Tooltip As TooltipInfo

Private Sub InitTooltip()
    With Tooltip
        .Enabled = True
        
        If .Enabled Then
            ' 创建工具提示窗口
            .hWnd = CreateWindowEx(0, "tooltips_class32", vbNullString, _
                                 TTS_ALWAYSTIP Or TTS_BALLOON, _
                                 0, 0, 0, 0, _
                                 WindowedLabel1.hWnd, _
                                 0, App.hInstance, ByVal 0&)
            
            ' 设置工具提示文本
            .Text = "这是一个工具提示"
            UpdateTooltipText
        End If
    End With
End Sub

Private Sub UpdateTooltipText()
    With Tooltip
        If Not .Enabled Or .hWnd = 0 Then Exit Sub
        
        Dim ti As TOOLINFO
        ti.cbSize = Len(ti)
        ti.uFlags = TTF_SUBCLASS Or TTF_IDISHWND
        ti.hWnd = WindowedLabel1.hWnd
        ti.uId = WindowedLabel1.hWnd
        ti.lpszText = .Text
        
        SendMessage .hWnd, TTM_ADDTOOL, 0, ti
    End With
End Sub

Private Sub Form_Unload(Cancel As Integer)
    ' 销毁工具提示
    If Tooltip.hWnd <> 0 Then
        DestroyWindow Tooltip.hWnd
    End If
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Function SafeSetCaption(ByVal Text As String) As Boolean
    On Error GoTo ErrorHandler
    
    WindowedLabel1.Caption = Text
    SafeSetCaption = True
    Exit Function
    
ErrorHandler:
    Debug.Print "设置标签文本失败: " & Err.Description
    SafeSetCaption = False
End Function
```

2. 绘制优化
```vb
Private Sub OptimizeDrawing()
    With WindowedLabel1
        ' 创建双缓冲
        Dim hMemDC As Long
        Dim hBitmap As Long
        Dim hOldBitmap As Long
        
        hMemDC = CreateCompatibleDC(.hDC)
        hBitmap = CreateCompatibleBitmap(.hDC, .Width, .Height)
        hOldBitmap = SelectObject(hMemDC, hBitmap)
        
        ' 在内存 DC 中绘制
        DrawGradient hMemDC, _
                    0, 0, .Width, .Height, _
                    Gradients.Gradient.StartColor, _
                    Gradients.Gradient.EndColor, _
                    Gradients.Gradient.Direction
        
        ' 复制到窗口
        BitBlt .hDC, 0, 0, .Width, .Height, _
               hMemDC, 0, 0, vbSrcCopy
        
        ' 清理
        SelectObject hMemDC, hOldBitmap
        DeleteObject hBitmap
        DeleteDC hMemDC
    End With
End Sub
```

3. 状态保存
```vb
Private Sub SaveWindowedLabelState()
    With WindowedLabel1
        SaveSetting App.Title, "WindowedLabel", "Caption", .Caption
        SaveSetting App.Title, "WindowedLabel", "Alignment", CStr(.Alignment)
        SaveSetting App.Title, "WindowedLabel", "BackColor", CStr(.BackColor)
        SaveSetting App.Title, "WindowedLabel", "ForeColor", CStr(.ForeColor)
    End With
    
    SaveSetting App.Title, "WindowedLabel", "GradientEnabled", _
                CStr(Gradients.Enabled)
    SaveSetting App.Title, "WindowedLabel", "AnimationEnabled", _
                CStr(Animation.Enabled)
End Sub

Private Sub RestoreWindowedLabelState()
    With WindowedLabel1
        .Caption = GetSetting(App.Title, "WindowedLabel", "Caption", "")
        .Alignment = CLng(GetSetting(App.Title, "WindowedLabel", "Alignment", "0"))
        .BackColor = CLng(GetSetting(App.Title, "WindowedLabel", "BackColor", _
                                   CStr(vbButtonFace)))
        .ForeColor = CLng(GetSetting(App.Title, "WindowedLabel", "ForeColor", _
                                   CStr(vbButtonText)))
    End With
    
    Gradients.Enabled = CBool(GetSetting(App.Title, "WindowedLabel", _
                                       "GradientEnabled", "True"))
    Animation.Enabled = CBool(GetSetting(App.Title, "WindowedLabel", _
                                      "AnimationEnabled", "True"))
End Sub
```

WindowedLabel 控件提供了比普通标签更多的功能和更好的性能。通过合理的扩展，可以实现渐变背景、动画效果和工具提示等功能。上述示例展示了 WindowedLabel 控件的多种用法，开发者可以根据具体需求选择合适的实现方式。
