# ComboBox Control (VBCCRComboBox)

VBCCRComboBox 控件是一个组合框控件,它结合了一个文本框和一个下拉列表框的功能。用户可以从列表中选择一个项目,或者直接在文本框中输入值。

## 样式

ComboBox 有三种主要样式:

1. `CboStyleDropDownCombo` (0) - 默认样式,包含一个可编辑的文本框和下拉列表
2. `CboStyleSimpleCombo` (1) - 始终显示列表框的组合框
3. `CboStyleDropDownList` (2) - 仅显示下拉列表的组合框,文本框部分不可编辑

## 属性

### 外观属性
- `Style` - 组合框样式(0-2)
- `Text` - 文本框中的文本 
- `BackColor` - 背景色
- `ForeColor` - 前景色
- `Font` - 字体属性
- `Enabled` - 是否启用
- `Visible` - 是否可见
- `Height` - 控件高度
- `Width` - 控件宽度
- `Left` - 左边距
- `Top` - 上边距

### 列表属性  
- `List` - 列表项数组
- `ListCount` - 列表项数量
- `ListIndex` - 当前选中项的索引
- `ItemData` - 列表项关联的数值数据
- `Sorted` - 是否自动排序
- `MaxLength` - 文本框最大字符数
- `SelLength` - 选中文本的长度
- `SelStart` - 选中文本的起始位置
- `SelText` - 选中的文本
- `NewIndex` - 最近添加项的索引

## 事件

- `Change` - 文本改变时触发
- `Click` - 点击时触发 
- `DblClick` - 双击时触发
- `KeyDown` - 按键按下时触发
- `KeyPress` - 按键时触发
- `KeyUp` - 按键释放时触发
- `Scroll` - 滚动时触发
- `DropDown` - 下拉列表显示时触发
- `CloseUp` - 下拉列表关闭时触发

## 方法

- `AddItem` - 添加列表项
- `RemoveItem` - 删除列表项
- `Clear` - 清空列表
- `Refresh` - 刷新显示
- `SetFocus` - 设置焦点

## 代码示例

### 基本用法

```vb
Private Sub InitComboBox()
    With ComboBox1
        .Style = CboStyleDropDownCombo  ' 设置样式
        .Clear                    ' 清空列表
        
        ' 添加列表项
        .AddItem "选项1"
        .AddItem "选项2" 
        .AddItem "选项3"
        
        .ListIndex = 0           ' 选中第一项
    End With
End Sub
```

### 自动完成输入

```vb
Private Sub ComboBox1_KeyPress(KeyAscii As Integer)
    Static LastLen As Long
    Dim StartPos As Long
    Dim FindText As String
    Dim i As Long
    
    ' 按下回车键时
    If KeyAscii = vbKeyReturn Then
        KeyAscii = 0  ' 取消按键
        Exit Sub
    End If
    
    ' 按下退格键时
    If KeyAscii = vbKeyBack Then
        LastLen = Len(ComboBox1.Text) - 1
        If LastLen < 0 Then LastLen = 0
        Exit Sub
    End If
    
    With ComboBox1
        StartPos = .SelStart
        FindText = Left$(.Text, StartPos) & Chr$(KeyAscii)
        
        ' 查找匹配项
        For i = 0 To .ListCount - 1
            If LCase$(Left$(.List(i), Len(FindText))) = LCase$(FindText) Then
                ' 找到匹配项
                .Text = .List(i)
                .SelStart = Len(FindText)
                .SelLength = Len(.Text) - .SelStart
                LastLen = Len(FindText)
                KeyAscii = 0
                Exit For
            End If
        Next i
    End With
End Sub
```

### 带图标的组合框

```vb
Private Type ComboItem
    Text As String
    IconIndex As Long
End Type

Private Items() As ComboItem
Private ItemCount As Long

Private Sub InitImageCombo()
    ' 设置ImageList
    Set ImageList1.ImageList = LoadPicture("icons.bmp")
    
    With ComboBox1
        .Clear
        
        ' 重置项目数组
        ReDim Items(1 To 100)
        ItemCount = 0
        
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
    ItemCount = ItemCount + 1
    
    With Items(ItemCount)
        .Text = Text
        .IconIndex = IconIndex
    End With
    
    ComboBox1.AddItem Text
End Sub

Private Sub ComboBox1_DrawItem(ByVal Index As Long, _
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
        ' 选中状态背景
        DrawBackground hDC, Left, Top, Width, Height, vbHighlight
    Else
        ' 正常状态背景
        DrawBackground hDC, Left, Top, Width, Height, vbWindowBackground
    End If
    
    ' 绘制图标
    If Index >= 1 And Index <= ItemCount Then
        DrawIcon hDC, Left + 2, Top + (Height - ICON_HEIGHT) \ 2, _
                Items(Index).IconIndex
    End If
    
    ' 绘制文本
    If Selected Then
        SetTextColor hDC, vbHighlightText
    Else
        SetTextColor hDC, vbWindowText
    End If
    
    TextOut hDC, Left + TEXT_OFFSET, Top + 2, Items(Index).Text
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

Private Sub BindComboBox(ByVal ValueField As String, _
                        ByVal DisplayField As String, _
                        ByVal DataSource As Object)
    ' 保存绑定信息
    With Binding
        .ValueField = ValueField
        .DisplayField = DisplayField
        Set .DataSource = DataSource
    End With
    
    ' 清空列表
    ComboBox1.Clear
    
    ' 填充数据
    RefreshComboBox
End Sub

Private Sub RefreshComboBox()
    On Error GoTo ErrorHandler
    
    With Binding.DataSource
        ' 保存当前位置
        Dim BookMark As Variant
        If .RecordCount > 0 Then BookMark = .Bookmark
        
        .MoveFirst
        
        Do Until .EOF
            ' 添加项目
            ComboBox1.AddItem .Fields(Binding.DisplayField).Value
            ComboBox1.ItemData(ComboBox1.NewIndex) = .Fields(Binding.ValueField).Value
            
            .MoveNext
        Loop
        
        ' 恢复位置
        If Not IsEmpty(BookMark) Then .Bookmark = BookMark
    End With
    
    Exit Sub
    
ErrorHandler:
    Debug.Print "刷新组合框失败: " & Err.Description
End Sub

Private Sub UpdateDataSource()
    On Error GoTo ErrorHandler
    
    With Binding.DataSource
        ' 查找选中值对应的记录
        .MoveFirst
        
        Do Until .EOF
            If .Fields(Binding.ValueField).Value = _
               ComboBox1.ItemData(ComboBox1.ListIndex) Then
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

### 多列组合框

```vb
Private Type ColumnInfo
    Width As Long
    Alignment As Long
End Type

Private Type MultiColumnCombo
    Columns() As ColumnInfo
    ColumnCount As Long
    TotalWidth As Long
End Type

Private MultiColumn As MultiColumnCombo

Private Sub InitMultiColumnCombo()
    ' 设置列信息
    ReDim MultiColumn.Columns(1 To 3)
    MultiColumn.ColumnCount = 3
    
    With MultiColumn
        ' 编号列
        .Columns(1).Width = 50
        .Columns(1).Alignment = vbLeftJustify
        
        ' 名称列
        .Columns(2).Width = 100
        .Columns(2).Alignment = vbLeftJustify
        
        ' 值列
        .Columns(3).Width = 80
        .Columns(3).Alignment = vbRightJustify
        
        ' 计算总宽度
        .TotalWidth = 0
        Dim i As Long
        For i = 1 To .ColumnCount
            .TotalWidth = .TotalWidth + .Columns(i).Width
        Next i
    End With
    
    ' 设置组合框宽度
    ComboBox1.Width = MultiColumn.TotalWidth
End Sub

Private Sub AddMultiColumnItem(ParamArray Values() As Variant)
    If UBound(Values) + 1 <> MultiColumn.ColumnCount Then
        Debug.Print "列数不匹配"
        Exit Sub
    End If
    
    ' 组合显示文本
    Dim Text As String
    Dim i As Long
    
    For i = 0 To UBound(Values)
        Text = Text & PadString(CStr(Values(i)), _
                               MultiColumn.Columns(i + 1).Width, _
                               MultiColumn.Columns(i + 1).Alignment)
    Next i
    
    ' 添加到列表
    ComboBox1.AddItem Text
End Sub

Private Function PadString(ByVal Text As String, _
                         ByVal Width As Long, _
                         ByVal Alignment As Long) As String
    Dim PadLen As Long
    PadLen = Width - LenB(StrConv(Text, vbFromUnicode))
    
    If PadLen <= 0 Then
        ' 文本过长则截断
        PadString = Left$(Text, Width)
    Else
        Select Case Alignment
            Case vbLeftJustify
                PadString = Text & Space$(PadLen)
            Case vbRightJustify
                PadString = Space$(PadLen) & Text
            Case vbCenter
                Dim LeftPad As Long
                LeftPad = PadLen \ 2
                PadString = Space$(LeftPad) & Text & _
                           Space$(PadLen - LeftPad)
        End Select
    End If
End Function
```

## 最佳实践

1. 错误处理
```vb
Private Function SafeAddItem(ByVal Text As String) As Long
    On Error GoTo ErrorHandler
    
    ComboBox1.AddItem Text
    SafeAddItem = ComboBox1.NewIndex
    Exit Function
    
ErrorHandler:
    Debug.Print "添加项目失败: " & Err.Description
    SafeAddItem = -1
End Function
```

2. 选择验证
```vb
Private Function ValidateSelection() As Boolean
    With ComboBox1
        If .ListIndex = -1 Then
            MsgBox "请选择一个选项", vbExclamation
            ValidateSelection = False
            Exit Function
        End If
        
        ValidateSelection = True
    End With
End Function
```

3. 状态保存
```vb
Private Sub SaveComboState()
    ' 保存到注册表
    SaveSetting App.Title, "ComboBox1", "Text", ComboBox1.Text
    SaveSetting App.Title, "ComboBox1", "ListIndex", ComboBox1.ListIndex
End Sub

Private Sub RestoreComboState()
    With ComboBox1
        .Text = GetSetting(App.Title, "ComboBox1", "Text", "")
        .ListIndex = Val(GetSetting(App.Title, "ComboBox1", "ListIndex", "-1"))
    End With
End Sub
```

4. 输入验证
```vb
Private Sub ComboBox1_Validate(Cancel As Boolean)
    If ComboBox1.Style = vbComboDropdown Then
        ' 检查输入是否在列表中
        Dim i As Long
        Dim Found As Boolean
        
        For i = 0 To ComboBox1.ListCount - 1
            If StrComp(ComboBox1.List(i), ComboBox1.Text, _
                      vbTextCompare) = 0 Then
                Found = True
                Exit For
            End If
        Next i
        
        If Not Found Then
            MsgBox "请输入列表中的有效值", vbExclamation
            Cancel = True
        End If
    End If
End Sub
```

ComboBox 控件是一个常用的用户界面元素,它提供了灵活的数据选择方式。通过上述示例,可以看到它不仅支持基本的列表操作,还可以实现自动完成、数据绑定、多列显示等高级功能。在实际应用中,应根据具体需求选择合适的样式和功能特性。
