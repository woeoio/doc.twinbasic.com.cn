# ListBox Control (VBCCRListBox)

VBCCRListBox 控件是一个列表框控件，用于显示多个选项供用户选择。它支持单选和多选模式，可以显示纯文本或图标列表项。

## 属性

### 外观属性
- `Style` - 列表框样式(0-2)
  - `vbListBoxStandard` (0) - 标准列表框
  - `vbListBoxCheckbox` (1) - 带复选框的列表框
  - `vbListBoxOption` (2) - 带单选按钮的列表框
- `BackColor` - 背景色
- `ForeColor` - 前景色
- `Font` - 字体属性
- `BorderStyle` - 边框样式
- `Appearance` - 外观
- `Enabled` - 是否启用
- `Visible` - 是否可见

### 列表属性
- `List` - 列表项数组
- `ListCount` - 列表项数量
- `ListIndex` - 当前选中项的索引
- `MultiSelect` - 是否允许多选
  - `vbMultiSelectNone` (0) - 单选
  - `vbMultiSelectSimple` (1) - 简单多选
  - `vbMultiSelectExtended` (2) - 扩展多选
- `Selected(Index)` - 指定项是否选中
- `SelCount` - 选中项数量
- `TopIndex` - 第一个可见项的索引
- `ItemData` - 列表项关联的数值数据
- `Sorted` - 是否自动排序
- `IntegralHeight` - 是否使用整数行高
- `ItemHeight` - 项目高度

## 事件

- `Click` - 点击时触发
- `DblClick` - 双击时触发
- `ItemCheck` - 项目选中状态改变时触发(仅用于复选框样式)
- `MouseDown` - 鼠标按下时触发
- `MouseMove` - 鼠标移动时触发
- `MouseUp` - 鼠标释放时触发
- `Scroll` - 滚动时触发
- `KeyDown` - 按键按下时触发
- `KeyPress` - 按键时触发
- `KeyUp` - 按键释放时触发

## 方法

- `AddItem` - 添加列表项
- `RemoveItem` - 删除列表项
- `Clear` - 清空列表
- `Refresh` - 刷新显示
- `SetFocus` - 设置焦点

## 代码示例

### 基本用法

```vb
Private Sub InitListBox()
    With ListBox1
        .Clear                ' 清空列表
        
        ' 添加项目
        .AddItem "项目 1"
        .AddItem "项目 2"
        .AddItem "项目 3"
        
        .ListIndex = 0        ' 选中第一项
    End With
End Sub
```

### 多选列表框

```vb
Private Sub InitMultiSelectList()
    With ListBox1
        .MultiSelect = vbMultiSelectExtended
        .Clear
        
        ' 添加项目
        Dim i As Long
        For i = 1 To 10
            .AddItem "选项 " & i
        Next i
    End With
End Sub

Private Function GetSelectedItems() As String()
    Dim Count As Long
    Count = ListBox1.SelCount
    
    If Count = 0 Then
        GetSelectedItems = Array()
        Exit Function
    End If
    
    Dim Result() As String
    ReDim Result(0 To Count - 1)
    
    Dim Index As Long
    Dim ResultIndex As Long
    
    For Index = 0 To ListBox1.ListCount - 1
        If ListBox1.Selected(Index) Then
            Result(ResultIndex) = ListBox1.List(Index)
            ResultIndex = ResultIndex + 1
        End If
    Next Index
    
    GetSelectedItems = Result
End Function

Private Sub SelectAll()
    Dim i As Long
    For i = 0 To ListBox1.ListCount - 1
        ListBox1.Selected(i) = True
    Next i
End Sub

Private Sub InvertSelection()
    Dim i As Long
    For i = 0 To ListBox1.ListCount - 1
        ListBox1.Selected(i) = Not ListBox1.Selected(i)
    Next i
End Sub
```

### 带复选框的列表框

```vb
Private Type CheckedItem
    Text As String
    Checked As Boolean
    Tag As Variant
End Type

Private Type CheckedList
    Items() As CheckedItem
    Count As Long
End Type

Private CheckList As CheckedList

Private Sub InitCheckedList()
    With ListBox1
        .Style = vbListBoxCheckbox
        .Clear
        
        ' 初始化数组
        ReDim CheckList.Items(1 To 100)
        CheckList.Count = 0
        
        ' 添加项目
        AddCheckedItem "选项 1", True
        AddCheckedItem "选项 2", False
        AddCheckedItem "选项 3", True
    End With
End Sub

Private Sub AddCheckedItem(ByVal Text As String, _
                         ByVal Checked As Boolean, _
                         Optional Tag As Variant)
    CheckList.Count = CheckList.Count + 1
    
    With CheckList.Items(CheckList.Count)
        .Text = Text
        .Checked = Checked
        
        If Not IsMissing(Tag) Then
            .Tag = Tag
        End If
    End With
    
    ListBox1.AddItem Text
    ListBox1.Selected(ListBox1.NewIndex) = Checked
End Sub

Private Sub ListBox1_ItemCheck(Item As Long)
    If Item >= 1 And Item <= CheckList.Count Then
        CheckList.Items(Item).Checked = ListBox1.Selected(Item - 1)
    End If
End Sub

Private Function GetCheckedItems() As Variant
    Dim Result() As Variant
    Dim Count As Long
    
    ' 统计选中项数量
    Dim i As Long
    For i = 1 To CheckList.Count
        If CheckList.Items(i).Checked Then
            Count = Count + 1
        End If
    Next i
    
    If Count = 0 Then
        GetCheckedItems = Array()
        Exit Function
    End If
    
    ReDim Result(0 To Count - 1)
    
    ' 收集选中项
    Dim ResultIndex As Long
    For i = 1 To CheckList.Count
        If CheckList.Items(i).Checked Then
            Result(ResultIndex) = CheckList.Items(i)
            ResultIndex = ResultIndex + 1
        End If
    Next i
    
    GetCheckedItems = Result
End Function
```

### 图标列表

```vb
Private Type IconItem
    Text As String
    IconIndex As Long
    Selected As Boolean
End Type

Private Type IconList
    Items() As IconItem
    Count As Long
    ImageList As Object
End Type

Private Icons As IconList

Private Sub InitIconList()
    ' 设置 ImageList
    Set Icons.ImageList = ImageList1
    
    With ListBox1
        .Clear
        
        ' 初始化数组
        ReDim Icons.Items(1 To 100)
        Icons.Count = 0
        
        ' 添加带图标的项目
        AddIconItem "文档", 1
        AddIconItem "文件夹", 2
        AddIconItem "图片", 3
        AddIconItem "音乐", 4
        AddIconItem "视频", 5
    End With
End Sub

Private Sub AddIconItem(ByVal Text As String, _
                       ByVal IconIndex As Long)
    Icons.Count = Icons.Count + 1
    
    With Icons.Items(Icons.Count)
        .Text = Text
        .IconIndex = IconIndex
        .Selected = False
    End With
    
    ListBox1.AddItem Text
End Sub

Private Sub ListBox1_DrawItem(ByVal Index As Long, _
                            hDC As Long, _
                            Left As Long, _
                            Top As Long, _
                            Width As Long, _
                            Height As Long, _
                            ByVal Selected As Boolean)
    Const ICON_WIDTH As Long = 16
    Const ICON_HEIGHT As Long = 16
    Const TEXT_OFFSET As Long = 20
    
    ' 绘制背景
    If Selected Then
        DrawBackground hDC, Left, Top, Width, Height, vbHighlight
    Else
        DrawBackground hDC, Left, Top, Width, Height, vbWindowBackground
    End If
    
    ' 绘制图标
    If Index >= 1 And Index <= Icons.Count Then
        DrawIcon hDC, Left + 2, Top + (Height - ICON_HEIGHT) \ 2, _
                Icons.Items(Index).IconIndex
    End If
    
    ' 绘制文本
    If Selected Then
        SetTextColor hDC, vbHighlightText
    Else
        SetTextColor hDC, vbWindowText
    End If
    
    TextOut hDC, Left + TEXT_OFFSET, Top + 2, _
            Icons.Items(Index + 1).Text
End Sub
```

### 数据绑定

```vb
Private Type BindingInfo
    ValueField As String
    DisplayField As String
    DataSource As Object  ' Recordset 或其他数据源
End Type

Private Binding As BindingInfo

Private Sub BindListBox(ByVal ValueField As String, _
                       ByVal DisplayField As String, _
                       ByVal DataSource As Object)
    ' 保存绑定信息
    With Binding
        .ValueField = ValueField
        .DisplayField = DisplayField
        Set .DataSource = DataSource
    End With
    
    ' 清空列表
    ListBox1.Clear
    
    ' 填充数据
    RefreshList
End Sub

Private Sub RefreshList()
    On Error GoTo ErrorHandler
    
    With Binding.DataSource
        ' 保存当前位置
        Dim BookMark As Variant
        If .RecordCount > 0 Then BookMark = .Bookmark
        
        .MoveFirst
        
        Do Until .EOF
            ' 添加项目
            ListBox1.AddItem .Fields(Binding.DisplayField).Value
            ListBox1.ItemData(ListBox1.NewIndex) = _
                .Fields(Binding.ValueField).Value
            
            .MoveNext
        Loop
        
        ' 恢复位置
        If Not IsEmpty(BookMark) Then .Bookmark = BookMark
    End With
    
    Exit Sub
    
ErrorHandler:
    Debug.Print "刷新列表失败: " & Err.Description
End Sub

Private Sub UpdateDataSource()
    On Error GoTo ErrorHandler
    
    With Binding.DataSource
        ' 查找选中值对应的记录
        .MoveFirst
        
        Do Until .EOF
            If .Fields(Binding.ValueField).Value = _
               ListBox1.ItemData(ListBox1.ListIndex) Then
                ' 找到记录
                Exit Do
            End If
            .MoveNext
        Loop
    End With
    
    Exit Sub
    
ErrorHandler:
    Debug.Print "更新数据源失败: " & Err.Description
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Function SafeAddItem(ByVal Text As String) As Long
    On Error GoTo ErrorHandler
    
    ListBox1.AddItem Text
    SafeAddItem = ListBox1.NewIndex
    Exit Function
    
ErrorHandler:
    Debug.Print "添加项目失败: " & Err.Description
    SafeAddItem = -1
End Function
```

2. 选择验证
```vb
Private Function ValidateSelection() As Boolean
    With ListBox1
        If .ListIndex = -1 Then
            MsgBox "请选择一个项目", vbExclamation
            ValidateSelection = False
            Exit Function
        End If
        
        ValidateSelection = True
    End With
End Function
```

3. 状态保存
```vb
Private Sub SaveListState()
    ' 保存到注册表
    SaveSetting App.Title, "ListBox1", "ListIndex", ListBox1.ListIndex
    
    ' 保存多选状态
    If ListBox1.MultiSelect <> vbMultiSelectNone Then
        Dim SelectedItems As String
        Dim i As Long
        
        For i = 0 To ListBox1.ListCount - 1
            If ListBox1.Selected(i) Then
                SelectedItems = SelectedItems & i & ","
            End If
        Next i
        
        If Len(SelectedItems) > 0 Then
            SelectedItems = Left$(SelectedItems, Len(SelectedItems) - 1)
        End If
        
        SaveSetting App.Title, "ListBox1", "SelectedItems", SelectedItems
    End If
End Sub

Private Sub RestoreListState()
    With ListBox1
        .ListIndex = Val(GetSetting(App.Title, _
                                  "ListBox1", _
                                  "ListIndex", _
                                  "-1"))
        
        ' 恢复多选状态
        If .MultiSelect <> vbMultiSelectNone Then
            Dim SelectedItems As String
            SelectedItems = GetSetting(App.Title, _
                                     "ListBox1", _
                                     "SelectedItems", _
                                     "")
            
            If Len(SelectedItems) > 0 Then
                Dim Items() As String
                Items = Split(SelectedItems, ",")
                
                Dim i As Long
                For i = 0 To UBound(Items)
                    .Selected(Val(Items(i))) = True
                Next i
            End If
        End If
    End With
End Sub
```

4. 搜索功能
```vb
Private Sub SearchList(ByVal SearchText As String, _
                      Optional ByVal MatchCase As Boolean = False)
    With ListBox1
        Dim i As Long
        For i = 0 To .ListCount - 1
            If MatchCase Then
                If InStr(1, .List(i), SearchText, vbBinaryCompare) > 0 Then
                    .ListIndex = i
                    Exit Sub
                End If
            Else
                If InStr(1, .List(i), SearchText, vbTextCompare) > 0 Then
                    .ListIndex = i
                    Exit Sub
                End If
            End If
        Next i
        
        ' 未找到匹配项
        .ListIndex = -1
    End With
End Sub
```

5. 列表排序
```vb
Private Sub SortList(Optional ByVal Descending As Boolean = False)
    ' 冒泡排序示例
    With ListBox1
        Dim i As Long, j As Long
        Dim Temp As String
        Dim TempData As Long
        
        For i = 0 To .ListCount - 2
            For j = i + 1 To .ListCount - 1
                If Descending Then
                    If StrComp(.List(i), .List(j), vbTextCompare) < 0 Then
                        ' 交换文本
                        Temp = .List(i)
                        .List(i) = .List(j)
                        .List(j) = Temp
                        
                        ' 交换关联数据
                        TempData = .ItemData(i)
                        .ItemData(i) = .ItemData(j)
                        .ItemData(j) = TempData
                    End If
                Else
                    If StrComp(.List(i), .List(j), vbTextCompare) > 0 Then
                        ' 交换文本
                        Temp = .List(i)
                        .List(i) = .List(j)
                        .List(j) = Temp
                        
                        ' 交换关联数据
                        TempData = .ItemData(i)
                        .ItemData(i) = .ItemData(j)
                        .ItemData(j) = TempData
                    End If
                End If
            Next j
        Next i
    End With
End Sub
```

ListBox 控件是一个功能丰富的列表控件,可用于显示各种类型的列表数据。它支持单选和多选模式,可以显示纯文本、复选框、图标等不同样式的项目。通过数据绑定功能,可以方便地与数据源进行交互。上述示例展示了 ListBox 控件的主要功能和高级用法,可以根据具体需求选择合适的特性来使用。
