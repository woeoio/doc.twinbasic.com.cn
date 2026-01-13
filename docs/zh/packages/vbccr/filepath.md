# FilePath Control (VBCCRFilePath)

VBCCRFilePath 控件提供了一个用于文件路径浏览和选择的界面。它通常与 DrivePath 控件配合使用，允许用户浏览和选择文件系统中的文件。

## 属性

### 关键属性

- `Path`: 当前选中的文件路径
- `Pattern`: 文件筛选模式（如 "*.txt;*.doc"）
- `Archive`: 是否显示存档文件
- `Hidden`: 是否显示隐藏文件
- `ReadOnly`: 是否为只读模式
- `System`: 是否显示系统文件
- `MultiSelect`: 是否允许多选
- `Selected()`: 选中文件的集合
- `BackColor`: 背景颜色
- `ForeColor`: 文本颜色

## 方法

### 主要方法

- `Refresh()`: 刷新文件列表
- `SetFocus()`: 设置焦点到控件
- `GetSelected(Index As Integer)`: 获取选中的文件
- `GetSelectedCount()`: 获取选中文件数量

## 事件

- `PathChange()`: 路径改变时触发
- `PathClick()`: 点击文件时触发
- `PathSelect()`: 选择文件时触发
- `DblClick()`: 双击文件时触发

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    With FilePath1
        .Path = App.Path
        .Pattern = "*.txt;*.doc;*.docx"
        .Archive = True
        .Hidden = False
        .System = False
    End With
End Sub
```

### 文件选择处理

```vb
Private Sub FilePath1_PathSelect()
    Dim i As Integer
    
    ' 处理选中的文件
    For i = 0 To FilePath1.GetSelectedCount - 1
        Debug.Print "选中文件: " & FilePath1.GetSelected(i)
    Next i
End Sub
```

### 文件筛选

```vb
Private Sub SetFileFilter(ByVal FilterType As String)
    With FilePath1
        Select Case FilterType
            Case "Documents"
                .Pattern = "*.doc;*.docx;*.txt;*.rtf"
            Case "Images"
                .Pattern = "*.jpg;*.jpeg;*.png;*.gif;*.bmp"
            Case "All"
                .Pattern = "*.*"
        End Select
        .Refresh
    End With
End Sub
```

## 常见用例

### 文件选择器

```vb
Private Sub SetupFileSelector()
    ' 设置文件选择器
    With FilePath1
        .MultiSelect = True
        .Pattern = "*.txt;*.csv"
        .Path = App.Path & "\Data"
    End With
End Sub

Private Sub ProcessSelectedFiles()
    Dim i As Integer
    Dim fileName As String
    
    For i = 0 To FilePath1.GetSelectedCount - 1
        fileName = FilePath1.GetSelected(i)
        ProcessFile fileName
    Next i
End Sub
```

### 文件监视器

```vb
Private Sub SetupFileMonitor()
    With FilePath1
        .Path = App.Path & "\Logs"
        .Pattern = "*.log"
        .Archive = True
        .Hidden = False
        .System = False
    End With
    
    ' 启动定时器以定期刷新
    Timer1.Interval = 5000 ' 5秒
    Timer1.Enabled = True
End Sub

Private Sub Timer1_Timer()
    FilePath1.Refresh
End Sub
```

## 最佳实践

1. 文件访问验证
```vb
Private Function CanAccessFile(ByVal FilePath As String) As Boolean
    On Error GoTo ErrorHandler
    
    ' 尝试以只读方式打开文件
    Open FilePath For Input As #1
    Close #1
    
    CanAccessFile = True
    Exit Function
    
ErrorHandler:
    CanAccessFile = False
End Function
```

2. 路径合法性检查
```vb
Private Function IsValidPath(ByVal Path As String) As Boolean
    On Error GoTo ErrorHandler
    
    If Dir(Path, vbDirectory) = "" Then
        IsValidPath = False
        Exit Function
    End If
    
    IsValidPath = True
    Exit Function
    
ErrorHandler:
    IsValidPath = False
End Function
```

3. 文件筛选优化
```vb
Private Sub OptimizeFileFilter()
    ' 禁用刷新
    FilePath1.Visible = False
    
    ' 更新筛选器
    FilePath1.Pattern = "*.doc;*.docx"
    FilePath1.Refresh
    
    ' 重新启用显示
    FilePath1.Visible = True
End Sub
```

## 已知问题和解决方案

1. 大目录处理
```vb
Private Sub HandleLargeDirectory()
    Screen.MousePointer = vbHourglass
    
    FilePath1.Visible = False
    FilePath1.Refresh
    FilePath1.Visible = True
    
    Screen.MousePointer = vbDefault
End Sub
```

2. 文件锁定处理
```vb
Private Function IsFileLocked(ByVal FilePath As String) As Boolean
    On Error GoTo ErrorHandler
    
    Open FilePath For Binary Access Read Lock Read As #1
    Close #1
    IsFileLocked = False
    Exit Function
    
ErrorHandler:
    IsFileLocked = True
End Function
```

## 其他提示

- 定期刷新文件列表
- 处理长文件名
- 实现文件类型图标
- 提供文件大小信息
- 处理文件权限
- 实现文件排序
- 处理网络路径
- 优化性能
- 提供文件预览
- 在 Form_Unload 中清理资源
