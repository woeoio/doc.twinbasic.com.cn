# Pager Control (VBCCRPager)

VBCCRPager 控件提供了一个分页导航界面，用于在大量数据中浏览和导航。它通常与 ListView 或其他数据显示控件配合使用。

## 属性

### 关键属性

- `Position`: 当前位置
- `Min`: 最小位置值
- `Max`: 最大位置值
- `SmallChange`: 单击箭头按钮时的变化量
- `LargeChange`: 点击页面区域时的变化量
- `Orientation`: 方向（水平或垂直）
- `Mode`: 分页模式
- `ButtonSize`: 按钮大小
- `BackColor`: 背景颜色
- `Enabled`: 启用/禁用控件

## 方法

### 主要方法

- `SetPosition(Position As Long)`: 设置当前位置
- `GetPosition() As Long`: 获取当前位置
- `Refresh()`: 刷新显示

## 事件

- `Change()`: 位置改变时触发
- `Click()`: 点击时触发
- `PageClick(ByVal Part As PagerPartConstants)`: 点击分页部分时触发
- `Scroll()`: 滚动时触发

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    With Pager1
        .Min = 0
        .Max = 100
        .SmallChange = 1
        .LargeChange = 10
        .Position = 0
        .Orientation = OrientationHorizontal
    End With
End Sub
```

### 与 ListView 集成

```vb
Private Sub SetupListViewPager()
    ' 设置分页器
    With Pager1
        .Min = 0
        .Max = GetTotalPages() - 1
        .SmallChange = 1
        .LargeChange = 1
        .Position = 0
    End With
    
    ' 初始加载数据
    LoadListViewPage Pager1.Position
End Sub

Private Sub Pager1_Change()
    LoadListViewPage Pager1.Position
End Sub

Private Sub LoadListViewPage(ByVal PageIndex As Long)
    Const PAGE_SIZE As Long = 20
    Dim StartIndex As Long
    Dim EndIndex As Long
    
    StartIndex = PageIndex * PAGE_SIZE
    EndIndex = StartIndex + PAGE_SIZE - 1
    
    ListView1.ListItems.Clear
    LoadDataIntoListView StartIndex, EndIndex
End Sub
```

### 自定义分页显示

```vb
Private Sub CustomizePager()
    With Pager1
        .ButtonSize = 20
        .Mode = PagerModePage ' 页面模式
        
        ' 设置总页数
        .Max = (TotalRecords + PageSize - 1) \ PageSize - 1
        
        ' 设置当前页
        .Position = 0
    End With
    
    ' 更新页面信息显示
    UpdatePageInfo
End Sub

Private Sub UpdatePageInfo()
    lblPageInfo.Caption = "第 " & (Pager1.Position + 1) & " 页，共 " & _
                         (Pager1.Max + 1) & " 页"
End Sub
```

## 常见用例

### 数据浏览器

```vb
Private Sub SetupDataBrowser()
    ' 初始化分页控件
    With Pager1
        .Orientation = OrientationHorizontal
        .Mode = PagerModePage
        .ButtonSize = 25
        .Min = 0
        .Max = (RecordCount - 1) \ PageSize
        .Position = 0
    End With
    
    ' 加载第一页
    LoadData Pager1.Position * PageSize, PageSize
End Sub

Private Sub Pager1_Change()
    ' 加载新页面数据
    Dim StartIndex As Long
    StartIndex = Pager1.Position * PageSize
    LoadData StartIndex, PageSize
    UpdatePageInfo
End Sub
```

### 图片浏览器

```vb
Private Sub SetupImageBrowser()
    ' 设置图片浏览分页
    With Pager1
        .Orientation = OrientationHorizontal
        .ButtonSize = 30
        .Min = 0
        .Max = ImageCount - 1
        .Position = 0
        .SmallChange = 1
        .LargeChange = 1
    End With
    
    ' 显示第一张图片
    ShowImage Pager1.Position
End Sub

Private Sub ShowImage(ByVal Index As Long)
    On Error GoTo ErrorHandler
    
    PictureBox1.Picture = LoadPicture(ImageFiles(Index))
    lblImageInfo.Caption = "图片 " & (Index + 1) & " / " & ImageCount
    Exit Sub
    
ErrorHandler:
    MsgBox "无法加载图片: " & Err.Description
End Sub
```

## 最佳实践

1. 位置验证
```vb
Private Function ValidatePosition(ByVal NewPosition As Long) As Long
    ' 确保位置在有效范围内
    If NewPosition < Pager1.Min Then
        ValidatePosition = Pager1.Min
    ElseIf NewPosition > Pager1.Max Then
        ValidatePosition = Pager1.Max
    Else
        ValidatePosition = NewPosition
    End If
End Function
```

2. 错误处理
```vb
Private Sub SafePagerOperation()
    On Error GoTo ErrorHandler
    
    Dim NewPosition As Long
    NewPosition = Pager1.Position + Pager1.SmallChange
    Pager1.Position = ValidatePosition(NewPosition)
    Exit Sub
    
ErrorHandler:
    Debug.Print "分页操作错误: " & Err.Description
End Sub
```

## 已知问题和解决方案

1. 性能优化
```vb
Private Sub OptimizePagerPerformance()
    ' 在加载大量数据时禁用重绘
    Pager1.Enabled = False
    
    ' 执行数据加载
    LoadBulkData
    
    Pager1.Enabled = True
    Pager1.Refresh
End Sub
```

2. 界面响应问题
```vb
Private Sub HandleUIResponse()
    Screen.MousePointer = vbHourglass
    
    ' 执行耗时操作
    ProcessPageData
    
    Screen.MousePointer = vbDefault
End Sub
```

## 其他提示

- 提供清晰的页面反馈
- 实现键盘导航
- 显示加载状态
- 优化数据加载
- 处理边界情况
- 提供页面信息
- 实现缓存机制
- 注意可访问性
- 保持UI响应
- 在 Form_Unload 中清理资源

### 特殊用法

1. 创建无限滚动
```vb
Private Sub CreateInfiniteScroll()
    With Pager1
        .Mode = PagerModeScroll
        .Max = 1000000 ' 设置一个很大的值
        .SmallChange = 1
        .LargeChange = 10
    End With
End Sub

Private Sub Pager1_Change()
    ' 检查是否需要加载更多数据
    If Pager1.Position >= LastLoadedPosition Then
        LoadMoreData
    End If
End Sub
```

2. 创建缩略图预览
```vb
Private Sub CreateThumbnailPager()
    ' 设置缩略图分页
    With Pager1
        .Orientation = OrientationHorizontal
        .Mode = PagerModePage
        .ButtonSize = 50 ' 较大的按钮以容纳缩略图
    End With
    
    LoadThumbnails
End Sub
```

3. 创建分组分页
```vb
Private Sub CreateGroupPager()
    ' 设置分组分页
    With Pager1
        .Mode = PagerModePage
        .SmallChange = 1
        .LargeChange = GroupSize
    End With
    
    ' 加载分组数据
    LoadGroupData Pager1.Position
End Sub
```
