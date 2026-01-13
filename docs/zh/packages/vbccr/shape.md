# Shape Control (VBCCRShape)

VBCCRShape 控件用于在窗体上绘制各种形状，包括矩形、圆形、椭圆形、圆角矩形和直线等。它提供了丰富的样式和外观设置选项。

## 属性

### 关键属性

- `Shape`: 形状类型（矩形、圆形、椭圆等）
- `BackColor`: 填充颜色
- `BorderColor`: 边框颜色
- `BorderStyle`: 边框样式
- `BorderWidth`: 边框宽度
- `FillStyle`: 填充样式
- `BackStyle`: 背景样式（透明或不透明）
- `Visible`: 显示/隐藏形状
- `Width`: 宽度
- `Height`: 高度

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
    With Shape1
        .Shape = vbShapeRectangle
        .BackColor = vbBlue
        .BorderColor = vbBlack
        .BorderWidth = 2
        .Width = 100
        .Height = 50
    End With
End Sub
```

### 创建各种形状

```vb
Private Sub CreateShapes()
    ' 矩形
    With Shape1
        .Shape = vbShapeRectangle
        .BackColor = vbRed
        .BorderStyle = vbSolid
    End With
    
    ' 圆形
    With Shape2
        .Shape = vbShapeCircle
        .BackColor = vbBlue
        .FillStyle = vbFSSolid
    End With
    
    ' 圆角矩形
    With Shape3
        .Shape = vbShapeRoundedRectangle
        .BackColor = vbGreen
        .BorderWidth = 2
    End With
End Sub
```

### 动态形状调整

```vb
Private Sub AnimateShape()
    Dim i As Long
    
    With Shape1
        ' 逐渐增加大小
        For i = 1 To 100 Step 5
            .Width = i
            .Height = i
            DoEvents
            Sleep 50
        Next i
        
        ' 逐渐减小大小
        For i = 100 To 1 Step -5
            .Width = i
            .Height = i
            DoEvents
            Sleep 50
        Next i
    End With
End Sub
```

## 常见用例

### 状态指示器

```vb
Private Sub CreateStatusIndicator()
    ' 创建状态指示灯
    With Shape1
        .Shape = vbShapeCircle
        .Width = 20
        .Height = 20
        .BorderStyle = vbSolid
        .BorderWidth = 1
    End With
End Sub

Private Sub UpdateStatus(ByVal Status As String)
    With Shape1
        Select Case Status
            Case "Normal"
                .BackColor = vbGreen
            Case "Warning"
                .BackColor = vbYellow
            Case "Error"
                .BackColor = vbRed
        End Select
    End With
End Sub
```

### 进度指示器

```vb
Private Sub CreateProgressIndicator()
    Const SEGMENTS As Integer = 5
    Dim i As Integer
    
    For i = 0 To SEGMENTS - 1
        With Controls.Add("VBCCRShape", "shpProgress" & i)
            .Shape = vbShapeRoundedRectangle
            .Left = 10 + (i * 30)
            .Top = 10
            .Width = 25
            .Height = 10
            .BackColor = vbButtonFace
        End With
    Next i
End Sub

Private Sub UpdateProgress(ByVal Step As Integer)
    Dim i As Integer
    
    For i = 0 To Controls.Count - 1
        If TypeOf Controls(i) Is Shape Then
            Controls(i).BackColor = IIf(i <= Step, vbBlue, vbButtonFace)
        End If
    Next i
End Sub
```

## 最佳实践

1. 形状布局
```vb
Private Sub ArrangeShapes()
    Const MARGIN As Integer = 5
    Dim Left As Integer
    
    Left = MARGIN
    
    ' 水平排列形状
    For i = 1 To 3
        With Controls("Shape" & i)
            .Left = Left
            .Top = MARGIN
            Left = Left + .Width + MARGIN
        End With
    Next i
End Sub
```

2. 错误处理
```vb
Private Sub SafeShapeOperation()
    On Error GoTo ErrorHandler
    
    Shape1.Move 100, 100, 50, 50
    Exit Sub
    
ErrorHandler:
    Debug.Print "形状操作错误: " & Err.Description
End Sub
```

## 已知问题和解决方案

1. 刷新问题
```vb
Private Sub FixRefreshIssues()
    Shape1.Visible = False
    ' 更新形状属性
    Shape1.Visible = True
End Sub
```

2. 缩放问题
```vb
Private Sub HandleScaling()
    ' 处理不同分辨率
    Dim ScaleFactor As Single
    ScaleFactor = Screen.TwipsPerPixelX
    
    Shape1.BorderWidth = ScaleFactor
End Sub
```

## 其他提示

- 使用合适的形状类型
- 注意边框样式
- 考虑性能影响
- 实现平滑动画
- 处理事件冒泡
- 注意z序
- 优化刷新
- 保持一致性
- 实现响应式布局
- 在 Form_Unload 中清理资源

### 特殊用法

1. 创建渐变效果
```vb
Private Sub CreateGradientEffect()
    Const STEPS As Integer = 10
    Dim i As Integer
    
    For i = 0 To STEPS - 1
        With Controls.Add("VBCCRShape", "shpGradient" & i)
            .Shape = vbShapeRectangle
            .Left = i * 20
            .Top = 0
            .Width = 20
            .Height = 100
            .BackColor = RGB(0, 0, 255 - (i * 25))
            .BorderStyle = vbBSNone
        End With
    Next i
End Sub
```

2. 创建图表元素
```vb
Private Sub CreateChartBars()
    Dim Values() As Integer
    Values = Array(20, 45, 30, 60, 25)
    
    For i = 0 To UBound(Values)
        With Controls.Add("VBCCRShape", "shpBar" & i)
            .Shape = vbShapeRectangle
            .Left = 10 + (i * 30)
            .Top = 100 - Values(i)
            .Width = 25
            .Height = Values(i)
            .BackColor = vbBlue
        End With
    Next i
End Sub
```

3. 创建连接线
```vb
Private Sub CreateConnector(ByVal X1 As Single, ByVal Y1 As Single, _
                          ByVal X2 As Single, ByVal Y2 As Single)
    With Shape1
        .Shape = vbShapeLine
        .BorderColor = vbBlack
        .BorderWidth = 2
        .X1 = X1
        .Y1 = Y1
        .X2 = X2
        .Y2 = Y2
    End With
End Sub
```
