# Animation 控件 (VBCCRAnimation)

VBCCRAnimation 控件用于在 VB6 应用程序中显示 AVI 视频剪辑或动画。该控件特别适用于显示简单的动画效果，如加载指示器或进度动画。

## 属性

### 关键属性

- `AutoPlay`: 设置是否在加载时自动播放动画
- `BackStyle`: 设置背景样式（透明或不透明）
- `Center`: 设置动画是否在控件中居中显示
- `BackColor`: 设置背景颜色
- `Playing`: 获取动画是否正在播放（只读）

## 方法

### 主要方法

- `LoadFile(FileName As String)`: 打开指定的 AVI 文件
- `LoadRes(ResID As Integer, Optional FileName As String)`: 从资源文件加载动画
- `Play(Optional RepeatCount As Long = -1, Optional StartFrame As Integer = 0, Optional EndFrame As Integer = -1)`: 开始播放动画
- `StopPlay()`: 停止播放动画

## 事件

- `Change()`: 动画开始或停止播放时触发
- `Click()`: 点击事件
- `DblClick()`: 双击事件
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`
- `KeyPress(KeyChar As Integer)`
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseEnter()`: 鼠标进入控件时触发
- `MouseLeave()`: 鼠标离开控件时触发
- `OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`
- `OLEStartDrag(Data As DataObject, AllowedEffects As Long)`
- `OLES etData(Data As DataObject, DataFormat As Integer)`
- `OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`
- `OLECompleteDrag(Effect As Long)`

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    With Animation1
        .AutoPlay = True
        .Center = True
        .LoadFile App.Path & "\loading.avi"
    End With
End Sub
```

### 控制动画播放

```vb
Private Sub PlayAnimation()
    With Animation1
        .LoadFile App.Path & "\process.avi"
        .AutoPlay = True
        .Play -1, 0, -1  ' RepeatCount=-1 表示无限循环
    End With
End Sub

Private Sub StopAnimation()
    Animation1.StopPlay
End Sub
```

### 作为加载指示器

```vb
Private Sub ShowLoadingAnimation()
    ' 显示加载动画
    With Animation1
        .Visible = True
        .LoadFile App.Path & "\loading.avi"
        .Center = True
        .Play -1, 0, -1  ' RepeatCount=-1 表示无限循环
    End With
End Sub

Private Sub HideLoadingAnimation()
    Animation1.StopPlay
    Animation1.Visible = False
End Sub
```

## 常见用例

### 进度指示器

```vb
Private Sub ShowProgress()
    ' 设置进度动画
    With AnimProgress
        .Visible = True
        .LoadFile App.Path & "\progress.avi"
        .AutoPlay = True
        .Center = True
    End With
    
    ' 执行耗时操作
    ProcessData
    
    ' 停止动画
    AnimProgress.StopPlay
    AnimProgress.Visible = False
End Sub
```

### 从资源加载动画

```vb
Private Sub LoadAnimationFromResource()
    ' 从资源文件加载动画
    Animation1.LoadRes 101, "ANIMRES.DLL"
    Animation1.Play
End Sub
```

### 播放指定范围的帧

```vb
Private Sub PlayPartialAnimation()
    ' 只播放第 10 到 20 帧，播放 3 次
    Animation1.LoadFile "animation.avi"
    Animation1.Play 3, 10, 20
End Sub
```

## 最佳实践

1. 资源管理
```vb
Private Sub CleanupAnimation()
    On Error Resume Next
    Animation1.StopPlay
    Animation1.Visible = False
End Sub
```

2. 错误处理
```vb
Private Function SafePlayAnimation(ByVal FilePath As String) As Boolean
    On Error GoTo ErrorHandler
    
    With Animation1
        .LoadFile FilePath
        .Play -1, 0, -1
    End With
    SafePlayAnimation = True
    Exit Function
    
ErrorHandler:
    Debug.Print "动画播放错误: " & Err.Description
    SafePlayAnimation = False
End Function
```

3. 性能优化
```vb
Private Sub OptimizeAnimationPerformance()
    ' 在加载大型动画前隐藏控件
    Animation1.Visible = False
    DoEvents
    
    Animation1.LoadFile "large_animation.avi"
    Animation1.Visible = True
    Animation1.Play -1, 0, -1
End Sub
```

## 其他提示

- 确保动画文件大小适中
- 考虑使用压缩过的 AVI 文件
- 注意内存使用，特别是对于长动画
- 在适当时机释放资源
- 考虑添加超时机制
- 实现适当的错误恢复机制
- 注意文件路径和权限问题
- 在 Form_Unload 中清理资源
