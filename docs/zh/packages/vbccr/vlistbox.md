# VListBox Control (VBCCRVListBox)

VListBox 控件是一个虚拟化的列表框控件，它通过虚拟化技术可以高效地处理大量列表项。与普通列表框相比，它只在内存中保存当前可见的项目，从而显著提高性能和减少内存使用。

## 属性

### 基本属性
- `VirtualItemCount` - 虚拟项目总数
- `VisibleItemCount` - 可见项目数量
- `ItemHeight` - 项目高度
- `TopIndex` - 顶部项目索引
- `ListIndex` - 当前选中项的索引
- `BackColor` - 背景颜色
- `ForeColor` - 前景颜色
- `Enabled` - 是否启用控件
- `Font` - 字体设置
- `Visible` - 是否可见

### 外观属性
- `BorderStyle` - 边框样式
- `IntegralHeight` - 是否使用整数高度
- `MultiSelect` - 是否允许多选
- `Sorted` - 是否自动排序
- `Style` - 外观样式
  - `vbListBoxStandard` (0) - 标准样式
  - `vbListBoxCheckbox` (1) - 带复选框

## 事件

- `ItemRequest` - 请求项目数据时触发
- `Click` - 点击控件时触发
- `DblClick` - 双击控件时触发
- `GotFocus` - 获得焦点时触发
- `KeyDown` - 按下键盘时触发
- `KeyPress` - 键盘按键时触发
- `KeyUp` - 释放键盘时触发
- `LostFocus` - 失去焦点时触发
- `MouseDown` - 鼠标按下时触发
- `MouseMove` - 鼠标移动时触发
- `MouseUp` - 鼠标释放时触发
- `Scroll` - 滚动列表时触发
- `ItemCheck` - 项目选中状态改变时触发
- `SelectionChanged` - 选择改变时触发

## 代码示例

### 基本用法

```vb
Private Sub InitVListBox()
    With VListBox1
        .VirtualItemCount = 1000000  ' 设置虚拟项目总数
        .VisibleItemCount = 15  ' 设置可见项目数
        .ItemHeight = 20  ' 设置项目高度
    End With
End Sub

Private Sub VListBox1_ItemRequest(ByVal Index As Long, _
                                ByVal Count As Long, _
                                Items() As String)
    ' 处理项目请求
    Dim i As Long
    For i = 0 To Count - 1
        Items(i) = "项目 #" & (Index + i)
    Next i
End Sub
```

### 虚拟数据管理器

```vb
Private Type ItemData
    Text As String
    Value As Variant
    Checked As Boolean
    Tag As String
End Type

Private Type DataManager
    Items() As ItemData
    Count As Long
    PageSize As Long
    CacheEnabled As Boolean
    Cache As Collection
    SelectedIndices() As Long
    SelectedCount As Long
End Type

Private Manager As DataManager

Private Sub InitDataManager(ByVal Count As Long, _
                          Optional ByVal PageSize As Long = 100)
    With Manager
        .Count = Count
        .PageSize = PageSize
        .CacheEnabled = True
        Set .Cache = New Collection
        ReDim .SelectedIndices(1 To 100)
        .SelectedCount = 0
        
        ' 初始化数据
        ReDim .Items(0 To Count - 1)
        Dim i As Long
        For i = 0 To Count - 1
            With .Items(i)
                .Text = "项目 #" & i
                .Value = i
                .Checked = False
                .Tag = ""
            End With
        Next i
    End With
End Sub

Private Sub GetItems(ByVal StartIndex As Long, _
                    ByVal Count As Long, _
                    ByRef Items() As String)
    With Manager
        ' 检查缓存
        If .CacheEnabled Then
            Dim CacheKey As String
            CacheKey = StartIndex & ":" & Count
            
            On Error Resume Next
            Dim CachedItems() As String
            CachedItems = .Cache(CacheKey)
            
            If Err.Number = 0 Then
                Items = CachedItems
                Exit Sub
            End If
            On Error GoTo 0
        End If
        
        ' 获取数据
        ReDim Items(0 To Count - 1)
        
        Dim i As Long
        For i = 0 To Count - 1
            If StartIndex + i < .Count Then
                Items(i) = .Items(StartIndex + i).Text
            End If
        Next i
        
        ' 添加到缓存
        If .CacheEnabled Then
            On Error Resume Next
            .Cache.Add Items, CacheKey
        End If
    End With
End Sub

Private Sub VListBox1_ItemRequest(ByVal Index As Long, _
                                ByVal Count As Long, _
                                Items() As String)
    GetItems Index, Count, Items
End Sub
```

### 多选管理器

```vb
Private Type SelectionManager
    SelectedIndices() As Long
    Count As Long
    MaxSelections As Long
    SelectionMode As Long  ' 0=单选, 1=多选
End Type

Private Selection As SelectionManager

Private Sub InitSelectionManager(Optional ByVal MaxSelections As Long = 100)
    With Selection
        .MaxSelections = MaxSelections
        ReDim .SelectedIndices(1 To MaxSelections)
        .Count = 0
        .SelectionMode = 1  ' 默认多选
    End With
End Sub

Private Sub AddSelection(ByVal Index As Long)
    With Selection
        ' 检查是否已选中
        If IsSelected(Index) Then Exit Sub
        
        ' 单选模式时清除其他选择
        If .SelectionMode = 0 Then
            ClearSelection
        End If
        
        ' 添加选择
        .Count = .Count + 1
        If .Count > .MaxSelections Then
            ' 移除最早的选择
            Dim i As Long
            For i = 1 To .Count - 1
                .SelectedIndices(i) = .SelectedIndices(i + 1)
            Next i
            .Count = .MaxSelections
        End If
        
        .SelectedIndices(.Count) = Index
    End With
    
    ' 更新界面
    VListBox1.Refresh
End Sub

Private Sub RemoveSelection(ByVal Index As Long)
    With Selection
        Dim i As Long
        For i = 1 To .Count
            If .SelectedIndices(i) = Index Then
                ' 移除选择
                Dim j As Long
                For j = i To .Count - 1
                    .SelectedIndices(j) = .SelectedIndices(j + 1)
                Next j
                .Count = .Count - 1
                Exit For
            End If
        Next i
    End With
    
    ' 更新界面
    VListBox1.Refresh
End Sub

Private Function IsSelected(ByVal Index As Long) As Boolean
    With Selection
        Dim i As Long
        For i = 1 To .Count
            If .SelectedIndices(i) = Index Then
                IsSelected = True
                Exit Function
            End If
        Next i
    End With
End Function

Private Sub ClearSelection()
    Selection.Count = 0
    VListBox1.Refresh
End Sub

Private Sub SelectRange(ByVal StartIndex As Long, _
                       ByVal EndIndex As Long)
    If Selection.SelectionMode = 0 Then Exit Sub
    
    ' 确保范围有效
    If StartIndex > EndIndex Then
        Dim Temp As Long
        Temp = StartIndex
        StartIndex = EndIndex
        EndIndex = Temp
    End If
    
    ' 选择范围内的项目
    Dim i As Long
    For i = StartIndex To EndIndex
        AddSelection i
    Next i
End Sub
```

### 项目拖放管理器

```vb
Private Type DragDropManager
    Enabled As Boolean
    DragIndex As Long
    DropIndex As Long
    IsDragging As Boolean
End Type

Private DragDrop As DragDropManager

Private Sub InitDragDropManager()
    With DragDrop
        .Enabled = True
        .DragIndex = -1
        .DropIndex = -1
        .IsDragging = False
    End With
End Sub

Private Sub VListBox1_MouseDown(Button As Integer, _
                              Shift As Integer, _
                              x As Single, _
                              y As Single)
    If Not DragDrop.Enabled Then Exit Sub
    
    If Button = vbLeftButton Then
        ' 开始拖动
        With DragDrop
            .DragIndex = VListBox1.ListIndex
            .IsDragging = True
        End With
    End If
End Sub

Private Sub VListBox1_MouseMove(Button As Integer, _
                              Shift As Integer, _
                              x As Single, _
                              y As Single)
    If Not DragDrop.Enabled Or Not DragDrop.IsDragging Then Exit Sub
    
    ' 计算当前位置对应的索引
    Dim Index As Long
    Index = VListBox1.TopIndex + (y \ VListBox1.ItemHeight)
    
    If Index <> DragDrop.DropIndex Then
        DragDrop.DropIndex = Index
        VListBox1.Refresh  ' 更新拖放指示器
    End If
End Sub

Private Sub VListBox1_MouseUp(Button As Integer, _
                            Shift As Integer, _
                            x As Single, _
                            y As Single)
    If Not DragDrop.Enabled Or Not DragDrop.IsDragging Then Exit Sub
    
    With DragDrop
        If .DragIndex >= 0 And .DropIndex >= 0 And _
           .DragIndex <> .DropIndex Then
            ' 移动项目
            MoveItem .DragIndex, .DropIndex
        End If
        
        ' 重置拖放状态
        .DragIndex = -1
        .DropIndex = -1
        .IsDragging = False
    End With
    
    VListBox1.Refresh
End Sub

Private Sub MoveItem(ByVal FromIndex As Long, _
                    ByVal ToIndex As Long)
    With Manager
        ' 保存移动项
        Dim MovedItem As ItemData
        MovedItem = .Items(FromIndex)
        
        ' 移动项目
        If FromIndex < ToIndex Then
            ' 向下移动
            Dim i As Long
            For i = FromIndex To ToIndex - 1
                .Items(i) = .Items(i + 1)
            Next i
        Else
            ' 向上移动
            For i = FromIndex To ToIndex + 1 Step -1
                .Items(i) = .Items(i - 1)
            Next i
        End If
        
        ' 放置移动项
        .Items(ToIndex) = MovedItem
    End With
    
    ' 清除缓存
    Set Manager.Cache = New Collection
    
    ' 更新界面
    VListBox1.Refresh
End Sub
```

### 虚拟分组

```vb
Private Type GroupInfo
    Text As String
    StartIndex As Long
    Count As Long
    Expanded As Boolean
End Type

Private Type GroupManager
    Groups() As GroupInfo
    Count As Long
    Enabled As Boolean
End Type

Private Groups As GroupManager

Private Sub InitGroupManager()
    With Groups
        ReDim .Groups(1 To 100)
        .Count = 0
        .Enabled = True
    End With
End Sub

Private Sub AddGroup(ByVal Text As String, _
                    ByVal StartIndex As Long, _
                    ByVal Count As Long)
    With Groups
        .Count = .Count + 1
        If .Count > UBound(.Groups) Then
            ReDim Preserve .Groups(1 To .Count + 100)
        End If
        
        With .Groups(.Count)
            .Text = Text
            .StartIndex = StartIndex
            .Count = Count
            .Expanded = True
        End With
    End With
    
    UpdateVirtualCount
End Sub

Private Function GetGroupFromIndex(ByVal Index As Long) As Long
    With Groups
        Dim i As Long
        Dim CurrentIndex As Long
        CurrentIndex = 0
        
        For i = 1 To .Count
            ' 检查组标题
            If Index = CurrentIndex Then
                GetGroupFromIndex = -i  ' 负数表示组标题
                Exit Function
            End If
            CurrentIndex = CurrentIndex + 1
            
            ' 检查组项目
            If .Groups(i).Expanded Then
                If Index >= CurrentIndex And _
                   Index < CurrentIndex + .Groups(i).Count Then
                    GetGroupFromIndex = i
                    Exit Function
                End If
                CurrentIndex = CurrentIndex + .Groups(i).Count
            End If
        Next i
    End With
    
    GetGroupFromIndex = 0
End Function

Private Sub ToggleGroup(ByVal GroupIndex As Long)
    With Groups.Groups(Abs(GroupIndex))
        .Expanded = Not .Expanded
    End With
    
    UpdateVirtualCount
End Sub

Private Sub UpdateVirtualCount()
    Dim TotalCount As Long
    
    With Groups
        If .Enabled Then
            ' 计算总行数（包括组标题）
            Dim i As Long
            For i = 1 To .Count
                ' 组标题占用一行
                TotalCount = TotalCount + 1
                ' 如果组展开，加上组中的项目数
                If .Groups(i).Expanded Then
                    TotalCount = TotalCount + .Groups(i).Count
                End If
            Next i
        Else
            ' 不使用分组时显示所有项目
            TotalCount = Manager.Count
        End If
    End With
    
    VListBox1.VirtualItemCount = TotalCount
    VListBox1.Refresh
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Function SafeGetVirtualItem(ByVal Index As Long) As String
    On Error GoTo ErrorHandler
    
    With Manager
        If Index >= 0 And Index < .Count Then
            SafeGetVirtualItem = .Items(Index).Text
        End If
    End With
    Exit Function
    
ErrorHandler:
    Debug.Print "获取虚拟项目失败: " & Err.Description
    SafeGetVirtualItem = ""
End Function
```

2. 性能优化
```vb
Private Sub OptimizePerformance()
    With Manager
        ' 启用缓存
        .CacheEnabled = True
        
        ' 清理过期缓存
        If .Cache.Count > 1000 Then
            Dim i As Long
            For i = 1 To .Cache.Count \ 2
                .Cache.Remove 1
            Next i
        End If
    End With
End Sub
```

3. 状态保存
```vb
Private Sub SaveVListBoxState()
    With VListBox1
        SaveSetting App.Title, "VListBox", "TopIndex", CStr(.TopIndex)
    End With
    
    SaveSetting App.Title, "VListBox", "GroupEnabled", CStr(Groups.Enabled)
    
    ' 保存组状态
    With Groups
        Dim i As Long
        For i = 1 To .Count
            SaveSetting App.Title, "VListBox\Group" & i, "Expanded", _
                       CStr(.Groups(i).Expanded)
        Next i
    End With
End Sub

Private Sub RestoreVListBoxState()
    With VListBox1
        .TopIndex = CLng(GetSetting(App.Title, "VListBox", "TopIndex", "0"))
    End With
    
    Groups.Enabled = CBool(GetSetting(App.Title, "VListBox", "GroupEnabled", "True"))
    
    ' 恢复组状态
    With Groups
        Dim i As Long
        For i = 1 To .Count
            .Groups(i).Expanded = CBool(GetSetting(App.Title, _
                                                 "VListBox\Group" & i, _
                                                 "Expanded", "True"))
        Next i
    End With
    
    UpdateVirtualCount
End Sub
```

VListBox 控件通过虚拟化技术提供了高效的大列表处理能力。通过合理的扩展，可以实现多选、拖放和分组等功能。上述示例展示了 VListBox 控件的多种用法，开发者可以根据具体需求选择合适的实现方式。
