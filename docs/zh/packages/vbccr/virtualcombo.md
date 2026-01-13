# VirtualCombo Control (VBCCRVirtualCombo)

VirtualCombo 控件是一个虚拟化的组合框控件，它可以处理大量数据项而不会影响性能。它通过虚拟化技术，只创建和显示当前可见的项目，从而有效地管理内存和提高性能。

## 属性

### 基本属性
- `Text` - 当前选择的文本
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
- `Style` - 显示样式
  - `vbComboDropdown` (0) - 下拉式
  - `vbComboSimple` (1) - 简单式
  - `vbComboDropdownList` (2) - 下拉列表式
- `Sorted` - 是否自动排序

## 事件

- `ItemRequest` - 请求项目数据时触发
- `Change` - 选择改变时触发
- `Click` - 点击控件时触发
- `DblClick` - 双击控件时触发
- `DropDown` - 下拉列表时触发
- `GotFocus` - 获得焦点时触发
- `KeyDown` - 按下键盘时触发
- `KeyPress` - 键盘按键时触发
- `KeyUp` - 释放键盘时触发
- `LostFocus` - 失去焦点时触发
- `MouseDown` - 鼠标按下时触发
- `MouseMove` - 鼠标移动时触发
- `MouseUp` - 鼠标释放时触发
- `Scroll` - 滚动列表时触发
- `ScrollEnd` - 滚动结束时触发

## 代码示例

### 基本用法

```vb
Private Sub InitVirtualCombo()
    With VirtualCombo1
        .VirtualItemCount = 1000000  ' 设置虚拟项目总数
        .VisibleItemCount = 10  ' 设置可见项目数
        .ItemHeight = 20  ' 设置项目高度
    End With
End Sub

Private Sub VirtualCombo1_ItemRequest(ByVal Index As Long, _
                                    ByVal Count As Long, _
                                    Items() As String)
    ' 处理项目请求
    Dim i As Long
    For i = 0 To Count - 1
        Items(i) = "项目 #" & (Index + i)
    Next i
End Sub
```

### 虚拟数据提供器

```vb
Private Type DataProvider
    Data() As String
    Count As Long
    PageSize As Long
    CacheEnabled As Boolean
    Cache As Collection
End Type

Private Provider As DataProvider

Private Sub InitDataProvider(ByVal Count As Long, _
                           Optional ByVal PageSize As Long = 100)
    With Provider
        .Count = Count
        .PageSize = PageSize
        .CacheEnabled = True
        Set .Cache = New Collection
        
        ' 初始化示例数据
        ReDim .Data(0 To Count - 1)
        Dim i As Long
        For i = 0 To Count - 1
            .Data(i) = "项目 #" & i
        Next i
    End With
End Sub

Private Sub GetItems(ByVal StartIndex As Long, _
                    ByVal Count As Long, _
                    ByRef Items() As String)
    With Provider
        ' 检查缓存
        If .CacheEnabled Then
            Dim CacheKey As String
            CacheKey = StartIndex & ":" & Count
            
            On Error Resume Next
            Dim CachedItems() As String
            CachedItems = .Cache(CacheKey)
            
            If Err.Number = 0 Then
                ' 使用缓存数据
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
                Items(i) = .Data(StartIndex + i)
            End If
        Next i
        
        ' 添加到缓存
        If .CacheEnabled Then
            On Error Resume Next
            .Cache.Add Items, CacheKey
        End If
    End With
End Sub

Private Sub VirtualCombo1_ItemRequest(ByVal Index As Long, _
                                    ByVal Count As Long, _
                                    Items() As String)
    GetItems Index, Count, Items
End Sub
```

### 数据筛选器

```vb
Private Type FilterInfo
    Enabled As Boolean
    Pattern As String
    MatchCase As Boolean
    FilterResults() As Long
    ResultCount As Long
End Type

Private Type FilterManager
    Filter As FilterInfo
    Timer As VBCCRTimer
    LastInput As String
End Type

Private Filters As FilterManager

Private Sub InitFilterManager()
    With Filters
        Set .Timer = Timer1
        .Timer.Interval = 500  ' 500ms 延迟
        .Timer.Enabled = False
        
        With .Filter
            .Enabled = True
            .Pattern = ""
            .MatchCase = False
            ReDim .FilterResults(1 To 1000)
            .ResultCount = 0
        End With
    End With
End Sub

Private Sub ApplyFilter(ByVal Pattern As String)
    With Filters.Filter
        .Pattern = Pattern
        .ResultCount = 0
        
        ' 搜索匹配项
        Dim i As Long
        For i = 0 To Provider.Count - 1
            If IsItemMatch(Provider.Data(i), Pattern, .MatchCase) Then
                .ResultCount = .ResultCount + 1
                If .ResultCount > UBound(.FilterResults) Then
                    ReDim Preserve .FilterResults(1 To .ResultCount + 1000)
                End If
                .FilterResults(.ResultCount) = i
            End If
        Next i
        
        ' 更新控件
        VirtualCombo1.VirtualItemCount = .ResultCount
        VirtualCombo1.Refresh
    End With
End Sub

Private Function IsItemMatch(ByVal Text As String, _
                           ByVal Pattern As String, _
                           ByVal MatchCase As Boolean) As Boolean
    If LenB(Pattern) = 0 Then
        IsItemMatch = True
    Else
        If MatchCase Then
            IsItemMatch = InStr(1, Text, Pattern, vbBinaryCompare) > 0
        Else
            IsItemMatch = InStr(1, Text, Pattern, vbTextCompare) > 0
        End If
    End If
End Function

Private Sub VirtualCombo1_KeyPress(KeyAscii As Integer)
    With Filters
        ' 记录输入
        .LastInput = .LastInput & Chr$(KeyAscii)
        
        ' 重置计时器
        .Timer.Enabled = False
        .Timer.Enabled = True
    End With
End Sub

Private Sub Timer1_Timer()
    Filters.Timer.Enabled = False
    
    ' 应用筛选
    If LenB(Filters.LastInput) > 0 Then
        ApplyFilter Filters.LastInput
    End If
    
    ' 清除输入缓存
    Filters.LastInput = ""
End Sub

Private Sub VirtualCombo1_ItemRequest(ByVal Index As Long, _
                                    ByVal Count As Long, _
                                    Items() As String)
    With Filters.Filter
        If .Enabled And .ResultCount > 0 Then
            ' 使用筛选结果
            ReDim Items(0 To Count - 1)
            
            Dim i As Long
            For i = 0 To Count - 1
                If Index + i < .ResultCount Then
                    Items(i) = Provider.Data(.FilterResults(Index + i + 1))
                End If
            Next i
        Else
            ' 使用原始数据
            GetItems Index, Count, Items
        End If
    End With
End Sub
```

### 虚拟分组

```vb
Private Type GroupInfo
    Text As String
    StartIndex As Long
    Count As Long
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
        End With
    End With
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
            If Index >= CurrentIndex And _
               Index < CurrentIndex + .Groups(i).Count Then
                GetGroupFromIndex = i
                Exit Function
            End If
            CurrentIndex = CurrentIndex + .Groups(i).Count
        Next i
    End With
    
    GetGroupFromIndex = 0
End Function

Private Sub VirtualCombo1_ItemRequest(ByVal Index As Long, _
                                    ByVal Count As Long, _
                                    Items() As String)
    If Not Groups.Enabled Then
        ' 不使用分组
        GetItems Index, Count, Items
        Exit Sub
    End If
    
    ReDim Items(0 To Count - 1)
    
    Dim i As Long
    For i = 0 To Count - 1
        Dim GroupIndex As Long
        GroupIndex = GetGroupFromIndex(Index + i)
        
        If GroupIndex < 0 Then
            ' 组标题
            Items(i) = Groups.Groups(-GroupIndex).Text
        ElseIf GroupIndex > 0 Then
            ' 组项目
            With Groups.Groups(GroupIndex)
                Dim ItemIndex As Long
                ItemIndex = .StartIndex + (Index + i - GetGroupStartIndex(GroupIndex))
                If ItemIndex < .StartIndex + .Count Then
                    Items(i) = Provider.Data(ItemIndex)
                End If
            End With
        End If
    Next i
End Sub

Private Function GetGroupStartIndex(ByVal GroupIndex As Long) As Long
    Dim Result As Long
    Dim i As Long
    
    ' 计算组的起始显示索引
    For i = 1 To GroupIndex - 1
        ' 每个组标题占用一行
        Result = Result + 1
        ' 加上组中的项目数
        Result = Result + Groups.Groups(i).Count
    Next i
    ' 加上当前组的标题
    Result = Result + 1
    
    GetGroupStartIndex = Result
End Function

Private Sub CreateGroups()
    ' 清空现有分组
    Groups.Count = 0
    
    ' 创建示例分组
    AddGroup "A-F", 0, 100
    AddGroup "G-L", 100, 100
    AddGroup "M-R", 200, 100
    AddGroup "S-Z", 300, 100
    
    ' 更新控件
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
                ' 加上组中的项目数
                TotalCount = TotalCount + .Groups(i).Count
            Next i
        Else
            ' 不使用分组时显示所有项目
            TotalCount = Provider.Count
        End If
    End With
    
    VirtualCombo1.VirtualItemCount = TotalCount
    VirtualCombo1.Refresh
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Function SafeGetItem(ByVal Index As Long) As String
    On Error GoTo ErrorHandler
    
    With Provider
        If Index >= 0 And Index < .Count Then
            SafeGetItem = .Data(Index)
        End If
    End With
    Exit Function
    
ErrorHandler:
    Debug.Print "获取项目失败: " & Err.Description
    SafeGetItem = ""
End Function
```

2. 性能优化
```vb
Private Sub OptimizePerformance()
    With Provider
        ' 启用缓存
        .CacheEnabled = True
        
        ' 清理旧缓存
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
Private Sub SaveVirtualComboState()
    With VirtualCombo1
        SaveSetting App.Title, "VirtualCombo", "TopIndex", CStr(.TopIndex)
        SaveSetting App.Title, "VirtualCombo", "SelectedIndex", CStr(.ListIndex)
    End With
    
    SaveSetting App.Title, "VirtualCombo", "FilterEnabled", CStr(Filters.Filter.Enabled)
    SaveSetting App.Title, "VirtualCombo", "GroupEnabled", CStr(Groups.Enabled)
End Sub

Private Sub RestoreVirtualComboState()
    With VirtualCombo1
        .TopIndex = CLng(GetSetting(App.Title, "VirtualCombo", "TopIndex", "0"))
        .ListIndex = CLng(GetSetting(App.Title, "VirtualCombo", "SelectedIndex", "-1"))
    End With
    
    Filters.Filter.Enabled = CBool(GetSetting(App.Title, "VirtualCombo", "FilterEnabled", "True"))
    Groups.Enabled = CBool(GetSetting(App.Title, "VirtualCombo", "GroupEnabled", "True"))
    
    If Groups.Enabled Then
        CreateGroups
    End If
End Sub
```

VirtualCombo 控件通过虚拟化技术提供了高效的大数据项处理能力。通过合理的扩展，可以实现数据缓存、筛选和分组等功能。上述示例展示了 VirtualCombo 控件的多种用法，开发者可以根据具体需求选择合适的实现方式。
