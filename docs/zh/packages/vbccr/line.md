# Line Control (VBCCRLine)

VBCCRLine 控件是一个用于绘制直线的控件，可以创建水平线、垂直线或斜线。它通常用于界面元素的分隔和装饰。

## 属性

### 关键属性

- `X1`, `Y1`: 线条起点坐标
- `X2`, `Y2`: 线条终点坐标
- `BorderColor`: 线条颜色
- `BorderStyle`: 线条样式（实线、虚线等）
- `BorderWidth`: 线条宽度
- `Visible`: 显示/隐藏线条
- `DrawMode`: 绘制模式
- `Tag`: 用户自定义数据

## 方法

### 主要方法

- `Move(X1 As Single, Y1 As Single, X2 As Single, Y2 As Single)`: 移动和调整线条
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
    ' 创建水平分隔线
    With Line1
        .X1 = 0
        .X2 = Me.ScaleWidth
        .Y1 = 100
        .Y2 = 100
        .BorderColor = vbBlack
        .BorderStyle = vbSolid
    End With
End Sub
```

### 创建垂直线

```vb
Private Sub CreateVerticalLine()
    With Line1
        .X1 = 100
        .X2 = 100
        .Y1 = 0
        .Y2 = Me.ScaleHeight
        .BorderColor = RGB(200, 200, 200)
        .BorderWidth = 1
    End With
End Sub
```

### 动态调整线条

```vb
Private Sub ResizeLine()
    ' 随窗体调整线条
    With Line1
        .X1 = 0
        .X2 = Me.ScaleWidth
        .Y1 = 50
        .Y2 = 50
    End With
End Sub

Private Sub Form_Resize()
    ResizeLine
End Sub
```

## 常见用例

### 分组分隔线

```vb
Private Sub CreateGroupSeparator()
    ' 创建组间分隔线
    With Line1
        .X1 = Frame1.Left
        .X2 = Frame1.Left + Frame1.Width
        .Y1 = Frame1.Top + Frame1.Height + 5
        .Y2 = .Y1
        .BorderStyle = vbSolid
        .BorderColor = RGB(200, 200, 200)
    End With
End Sub
```

### 自定义线条样式

```vb
Private Sub CreateCustomLine(ByVal LineStyle As Integer)
    With Line1
        Select Case LineStyle
            Case 0 ' 细实线
                .BorderWidth = 1
                .BorderStyle = vbSolid
            Case 1 ' 粗实线
                .BorderWidth = 2
                .BorderStyle = vbSolid
            Case 2 ' 虚线
                .BorderWidth = 1
                .BorderStyle = vbDash
            Case 3 ' 点线
                .BorderWidth = 1
                .BorderStyle = vbDot
        End Select
    End With
End Sub
```

## 最佳实践

1. 位置计算
```vb
Private Sub CalculateLinePosition()
    ' 计算相对位置
    Dim ControlTop As Single
    ControlTop = TextBox1.Top + TextBox1.Height + 5
    
    With Line1
        .X1 = 0
        .X2 = Me.ScaleWidth
        .Y1 = ControlTop
        .Y2 = ControlTop
    End With
End Sub
```

2. 响应式调整
```vb
Private Sub AdjustLineToContainer()
    ' 根据容器大小调整
    With Line1
        .X1 = Container.Left + 5
        .X2 = Container.Left + Container.Width - 5
        .Y1 = Container.Top + (Container.Height / 2)
        .Y2 = .Y1
    End With
End Sub
```

3. 错误处理
```vb
Private Sub SafeLineOperation()
    On Error GoTo ErrorHandler
    
    Line1.Move 0, 100, Me.ScaleWidth, 100
    Exit Sub
    
ErrorHandler:
    Debug.Print "线条操作错误: " & Err.Description
End Sub
```

## 已知问题和解决方案

1. 绘制问题
```vb
Private Sub FixDrawingIssues()
    ' 防止绘制问题
    Line1.Visible = False
    
    ' 更新位置
    Line1.Move 0, 100, 200, 100
    
    Line1.Visible = True
End Sub
```

2. 缩放问题
```vb
Private Sub HandleScaling()
    ' 处理不同缩放比例
    Dim ScaleFactor As Single
    ScaleFactor = Screen.TwipsPerPixelX
    
    With Line1
        .BorderWidth = ScaleFactor
        .Move 0, 100 * ScaleFactor, 200 * ScaleFactor, 100 * ScaleFactor
    End With
End Sub
```

## 其他提示

- 使用适当的线条宽度
- 注意线条对齐
- 考虑不同分辨率
- 使用合适的颜色
- 实现平滑过渡
- 注意性能影响
- 保持一致的样式
- 考虑可访问性
- 实现动态调整
- 在 Form_Unload 中清理资源

### 特殊用法

1. 创建装饰线
```vb
Private Sub CreateDecorativeLine()
    ' 创建渐变效果的装饰线
    Dim i As Integer
    Dim GrayValue As Integer
    
    For i = 0 To 4
        With Controls.Add("VBCCRLine", "Line" & i)
            .X1 = 0
            .X2 = Me.ScaleWidth
            .Y1 = 100 + (i * 2)
            .Y2 = .Y1
            GrayValue = 255 - (i * 30)
            .BorderColor = RGB(GrayValue, GrayValue, GrayValue)
            .BorderWidth = 1
        End With
    Next i
End Sub
```

2. 创建动态线条
```vb
Private Sub CreateDynamicLine()
    ' 创建可以随鼠标移动的线条
    With Line1
        .BorderStyle = vbSolid
        .BorderWidth = 1
        .BorderColor = vbBlue
    End With
End Sub

Private Sub Form_MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
    ' 更新线条位置跟随鼠标
    Line1.X2 = X
    Line1.Y2 = Y
End Sub
```

3. 创建框架边框
```vb
Private Sub CreateFrameBorder()
    ' 创建一个矩形边框
    With Line1 ' 上边
        .X1 = 0
        .Y1 = 0
        .X2 = 100
        .Y2 = 0
    End With
    
    With Line2 ' 右边
        .X1 = 100
        .Y1 = 0
        .X2 = 100
        .Y2 = 100
    End With
    
    With Line3 ' 下边
        .X1 = 0
        .Y1 = 100
        .X2 = 100
        .Y2 = 100
    End With
    
    With Line4 ' 左边
        .X1 = 0
        .Y1 = 0
        .X2 = 0
        .Y2 = 100
    End With
End Sub
```
