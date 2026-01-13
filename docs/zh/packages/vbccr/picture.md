# Picture Control (VBCCRPicture)

VBCCRPicture 控件是一个图像显示控件，用于显示各种格式的图片。它提供了比标准 PictureBox 更多的功能和更好的显示效果。

## 属性

### 关键属性

- `Picture`: 显示的图片
- `AutoSize`: 是否根据图片自动调整大小
- `BorderStyle`: 边框样式
- `ScaleMode`: 缩放模式
- `Stretch`: 是否拉伸图片
- `AutoRedraw`: 是否自动重绘
- `BackColor`: 背景颜色
- `Enabled`: 启用/禁用控件
- `MaskColor`: 透明色
- `UseMaskColor`: 是否使用透明色

## 方法

### 主要方法

- `LoadPicture(FileName As String)`: 加载图片
- `SavePicture(FileName As String)`: 保存图片
- `Cls()`: 清除图片
- `PaintPicture()`: 绘制图片
- `Point(X As Single, Y As Single)`: 获取指定点的颜色
- `Refresh()`: 刷新显示
- `Scale(width As Single, height As Single)`: 设置缩放

## 事件

- `Click()`: 点击时触发
- `DblClick()`: 双击时触发
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `Paint()`: 重绘时触发

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    With Picture1
        .AutoSize = True
        .BorderStyle = vbFixedSingle
        .ScaleMode = vbPixels
        Set .Picture = LoadPicture("image.jpg")
    End With
End Sub
```

### 图片缩放

```vb
Private Sub ScalePicture(ByVal NewWidth As Long, ByVal NewHeight As Long)
    With Picture1
        .Stretch = True
        .Width = NewWidth
        .Height = NewHeight
        .Refresh
    End With
End Sub
```

### 透明背景处理

```vb
Private Sub SetTransparency()
    With Picture1
        .UseMaskColor = True
        .MaskColor = RGB(255, 0, 255) ' 粉色作为透明色
        Set .Picture = LoadPicture("transparent.gif")
    End With
End Sub
```

## 常见用例

### 图片查看器

```vb
Private Sub CreateImageViewer()
    ' 设置图片查看器
    With Picture1
        .AutoSize = False
        .Stretch = True
        .BorderStyle = vbFixedSingle
        .ScaleMode = vbPixels
    End With
End Sub

Private Sub LoadImage(ByVal FilePath As String)
    On Error GoTo ErrorHandler
    
    With Picture1
        .Cls
        Set .Picture = LoadPicture(FilePath)
        
        ' 调整大小以适应窗口
        If .Picture.Width > Me.ScaleWidth Or .Picture.Height > Me.ScaleHeight Then
            FitToWindow
        End If
    End With
    Exit Sub
    
ErrorHandler:
    MsgBox "无法加载图片: " & Err.Description
End Sub

Private Sub FitToWindow()
    Dim ratio As Double
    Dim newWidth As Long, newHeight As Long
    
    With Picture1.Picture
        ratio = .Width / .Height
        
        If ratio > 1 Then
            newWidth = Me.ScaleWidth - 20
            newHeight = newWidth / ratio
        Else
            newHeight = Me.ScaleHeight - 20
            newWidth = newHeight * ratio
        End If
    End With
    
    Picture1.Width = newWidth
    Picture1.Height = newHeight
End Sub
```

### 图片编辑器

```vb
Private Sub CreateImageEditor()
    With Picture1
        .AutoRedraw = True
        .ScaleMode = vbPixels
        .DrawWidth = 1
        .ForeColor = vbBlack
    End With
End Sub

Private Sub Picture1_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
    LastX = X
    LastY = Y
    IsDrawing = True
End Sub

Private Sub Picture1_MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
    If IsDrawing Then
        Picture1.Line (LastX, LastY)-(X, Y)
        LastX = X
        LastY = Y
    End If
End Sub

Private Sub Picture1_MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
    IsDrawing = False
End Sub
```

## 最佳实践

1. 图片加载
```vb
Private Function SafeLoadPicture(ByVal FilePath As String) As Boolean
    On Error GoTo ErrorHandler
    
    With Picture1
        .Cls
        Set .Picture = LoadPicture(FilePath)
    End With
    
    SafeLoadPicture = True
    Exit Function
    
ErrorHandler:
    Debug.Print "图片加载错误: " & Err.Description
    SafeLoadPicture = False
End Function
```

2. 内存管理
```vb
Private Sub ClearPictureMemory()
    Set Picture1.Picture = Nothing
    Picture1.Cls
    DoEvents
End Sub
```

3. 性能优化
```vb
Private Sub OptimizeDrawing()
    Picture1.AutoRedraw = False
    
    ' 执行绘图操作
    DrawGraphics
    
    Picture1.AutoRedraw = True
    Picture1.Refresh
End Sub
```

## 已知问题和解决方案

1. 大图片处理
```vb
Private Sub HandleLargeImage(ByVal FilePath As String)
    Screen.MousePointer = vbHourglass
    
    Picture1.Visible = False
    Set Picture1.Picture = LoadPicture(FilePath)
    
    ' 调整大小
    ScaleToFit
    
    Picture1.Visible = True
    Screen.MousePointer = vbDefault
End Sub
```

2. 闪烁问题
```vb
Private Sub PreventFlicker()
    ' 使用双缓冲
    Dim TempPic As StdPicture
    Set TempPic = Picture1.Picture
    
    Picture1.Visible = False
    ' 执行绘图操作
    Picture1.Visible = True
End Sub
```

## 其他提示

- 注意内存使用
- 实现图片缓存
- 处理大文件
- 提供进度反馈
- 支持多种格式
- 实现错误恢复
- 优化显示性能
- 处理透明度
- 支持拖放操作
- 在 Form_Unload 中清理资源

### 特殊用法

1. 创建图片缩略图
```vb
Private Function CreateThumbnail(ByVal SourceFile As String, _
                               ByVal MaxSize As Long) As StdPicture
    Dim ratio As Double
    Dim newWidth As Long, newHeight As Long
    
    With Picture1
        ' 加载原图
        Set .Picture = LoadPicture(SourceFile)
        
        ' 计算缩略图大小
        If .Picture.Width > .Picture.Height Then
            ratio = MaxSize / .Picture.Width
        Else
            ratio = MaxSize / .Picture.Height
        End If
        
        newWidth = .Picture.Width * ratio
        newHeight = .Picture.Height * ratio
        
        ' 创建缩略图
        .Width = newWidth
        .Height = newHeight
        .Stretch = True
        .AutoRedraw = True
        
        Set CreateThumbnail = .Image
    End With
End Function
```

2. 创建图片效果
```vb
Private Sub ApplyGrayscaleEffect()
    Dim X As Long, Y As Long
    Dim pixelColor As Long
    Dim grayValue As Integer
    
    With Picture1
        .AutoRedraw = True
        .ScaleMode = vbPixels
        
        For X = 0 To .ScaleWidth
            For Y = 0 To .ScaleHeight
                pixelColor = .Point(X, Y)
                grayValue = (CLng(pixelColor And &HFF) + _
                           CLng((pixelColor And &HFF00&) \ &H100&) + _
                           CLng((pixelColor And &HFF0000) \ &H10000)) \ 3
                .PSet (X, Y), RGB(grayValue, grayValue, grayValue)
            Next Y
        Next X
        
        .Refresh
    End With
End Sub
```

3. 创建图片幻灯片
```vb
Private Sub CreateSlideshow()
    With Picture1
        .Stretch = True
        .BorderStyle = vbNone
        .AutoSize = False
    End With
    
    ' 设置定时器
    Timer1.Interval = 3000 ' 3秒
    Timer1.Enabled = True
End Sub

Private Sub Timer1_Timer()
    Static CurrentImage As Integer
    
    ' 加载下一张图片
    LoadNextImage CurrentImage
    CurrentImage = (CurrentImage + 1) Mod ImageCount
End Sub
```
