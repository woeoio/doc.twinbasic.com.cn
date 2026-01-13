# OptionButton Control (VBCCROptionButton)

VBCCROptionButton 控件是一个单选按钮控件，允许用户从一组选项中选择一个选项。它通常与其他 OptionButton 控件一起使用，形成一个选项组。

## 属性

### 外观属性
- `Alignment` - 文本对齐方式
  - `vbLeftJustify` (0) - 左对齐
  - `vbRightJustify` (1) - 右对齐
- `Appearance` - 外观样式
  - `cc2D` (0) - 2D 外观
  - `cc3D` (1) - 3D 外观
- `BackColor` - 背景色
- `ForeColor` - 文本颜色
- `Font` - 字体属性
- `Caption` - 按钮文本
- `Picture` - 图标
- `DisabledPicture` - 禁用状态图标
- `DownPicture` - 按下状态图标
- `Enabled` - 是否启用
- `Visible` - 是否可见
- `Value` - 选中状态
  - `True` - 选中
  - `False` - 未选中
- `ToolTipText` - 提示文本

## 事件

- `Click` - 点击时触发
- `DblClick` - 双击时触发
- `MouseDown` - 鼠标按下时触发
- `MouseMove` - 鼠标移动时触发
- `MouseUp` - 鼠标释放时触发
- `GotFocus` - 获得焦点时触发
- `LostFocus` - 失去焦点时触发
- `KeyDown` - 按键按下时触发
- `KeyPress` - 按键时触发
- `KeyUp` - 按键释放时触发

## 代码示例

### 基本用法

```vb
Private Sub InitOptionButtons()
    ' 设置基本属性
    With Option1
        .Caption = "选项 1"
        .Value = True  ' 默认选中
        .ToolTipText = "这是第一个选项"
    End With
    
    With Option2
        .Caption = "选项 2"
        .Value = False
        .ToolTipText = "这是第二个选项"
    End With
End Sub
```

### 选项组管理

```vb
Private Type OptionGroup
    Name As String
    Buttons() As VBCCROptionButton
    Count As Long
    SelectedIndex As Long
End Type

Private Type GroupManager
    Groups() As OptionGroup
    Count As Long
End Type

Private Groups As GroupManager

Private Sub InitGroupManager()
    ReDim Groups.Groups(1 To 10)
    Groups.Count = 0
End Sub

Private Function CreateOptionGroup(ByVal Name As String) As Long
    With Groups
        .Count = .Count + 1
        If .Count > UBound(.Groups) Then
            ReDim Preserve .Groups(1 To .Count + 10)
        End If
        
        With .Groups(.Count)
            .Name = Name
            ReDim .Buttons(1 To 10)
            .Count = 0
            .SelectedIndex = -1
        End With
        
        CreateOptionGroup = .Count
    End With
End Function

Private Sub AddToGroup(ByVal GroupIndex As Long, _
                      ByVal Button As VBCCROptionButton)
    If GroupIndex < 1 Or GroupIndex > Groups.Count Then Exit Sub
    
    With Groups.Groups(GroupIndex)
        .Count = .Count + 1
        If .Count > UBound(.Buttons) Then
            ReDim Preserve .Buttons(1 To .Count + 10)
        End If
        
        Set .Buttons(.Count) = Button
        
        ' 设置标签以标识组和索引
        Button.Tag = GroupIndex & ":" & .Count
        
        ' 添加事件处理
        Button.Value = False  ' 确保初始状态为未选中
    End With
End Sub

Private Sub OptionButton_Click()
    Dim Button As VBCCROptionButton
    Set Button = Me.ActiveControl
    
    ' 解析组和索引
    Dim Parts() As String
    Parts = Split(Button.Tag, ":")
    
    If UBound(Parts) <> 1 Then Exit Sub
    
    Dim GroupIndex As Long
    Dim ButtonIndex As Long
    GroupIndex = Val(Parts(0))
    ButtonIndex = Val(Parts(1))
    
    UpdateGroupSelection GroupIndex, ButtonIndex
End Sub

Private Sub UpdateGroupSelection(ByVal GroupIndex As Long, _
                               ByVal ButtonIndex As Long)
    If GroupIndex < 1 Or GroupIndex > Groups.Count Then Exit Sub
    
    With Groups.Groups(GroupIndex)
        ' 取消之前的选择
        If .SelectedIndex > 0 Then
            .Buttons(.SelectedIndex).Value = False
        End If
        
        ' 更新选择
        .SelectedIndex = ButtonIndex
        .Buttons(ButtonIndex).Value = True
        
        ' 触发选择变更事件
        RaiseEvent GroupSelectionChanged GroupIndex, ButtonIndex
    End With
End Sub

Private Function GetSelectedOption(ByVal GroupIndex As Long) As Long
    If GroupIndex < 1 Or GroupIndex > Groups.Count Then
        GetSelectedOption = -1
        Exit Function
    End If
    
    GetSelectedOption = Groups.Groups(GroupIndex).SelectedIndex
End Function
```

### 动态选项按钮

```vb
Private Type DynamicOption
    Button As VBCCROptionButton
    Value As Variant
    Enabled As Boolean
    Visible As Boolean
    Tag As Variant
End Type

Private Type OptionSet
    Name As String
    Options() As DynamicOption
    Count As Long
    Container As Object  ' Frame or PictureBox
    ItemHeight As Single
    ItemSpacing As Single
End Type

Private Type SetManager
    Sets() As OptionSet
    Count As Long
End Type

Private Sets As SetManager

Private Sub InitSetManager()
    ReDim Sets.Sets(1 To 10)
    Sets.Count = 0
End Sub

Private Function CreateOptionSet(ByVal Name As String, _
                               ByVal Container As Object, _
                               Optional ByVal ItemHeight As Single = 300, _
                               Optional ByVal ItemSpacing As Single = 60) _
                               As Long
    With Sets
        .Count = .Count + 1
        If .Count > UBound(.Sets) Then
            ReDim Preserve .Sets(1 To .Count + 10)
        End If
        
        With .Sets(.Count)
            .Name = Name
            Set .Container = Container
            .ItemHeight = ItemHeight
            .ItemSpacing = ItemSpacing
            ReDim .Options(1 To 10)
            .Count = 0
        End With
        
        CreateOptionSet = .Count
    End With
End Function

Private Sub AddOption(ByVal SetIndex As Long, _
                     ByVal Caption As String, _
                     Optional ByVal Value As Variant = Empty)
    If SetIndex < 1 Or SetIndex > Sets.Count Then Exit Sub
    
    With Sets.Sets(SetIndex)
        .Count = .Count + 1
        If .Count > UBound(.Options) Then
            ReDim Preserve .Options(1 To .Count + 10)
        End If
        
        With .Options(.Count)
            ' 创建新的选项按钮
            Set .Button = Controls.Add("VBCCROptionButton", _
                                    "Option" & SetIndex & "_" & Sets.Sets(SetIndex).Count)
            
            ' 设置位置和大小
            With .Button
                .Container = Sets.Sets(SetIndex).Container
                .Caption = Caption
                .Top = (Sets.Sets(SetIndex).Count - 1) * _
                       (Sets.Sets(SetIndex).ItemHeight + Sets.Sets(SetIndex).ItemSpacing)
                .Height = Sets.Sets(SetIndex).ItemHeight
                .Width = Sets.Sets(SetIndex).Container.ScaleWidth
                .Left = 0
                .Visible = True
            End With
            
            ' 保存值
            If IsEmpty(Value) Then
                .Value = Caption
            Else
                .Value = Value
            End If
            
            .Enabled = True
            .Visible = True
        End With
    End With
    
    ' 调整容器高度
    AdjustContainerHeight SetIndex
End Sub

Private Sub AdjustContainerHeight(ByVal SetIndex As Long)
    If SetIndex < 1 Or SetIndex > Sets.Count Then Exit Sub
    
    With Sets.Sets(SetIndex)
        .Container.Height = .Count * (.ItemHeight + .ItemSpacing)
    End With
End Sub

Private Sub RemoveOption(ByVal SetIndex As Long, _
                        ByVal OptionIndex As Long)
    If SetIndex < 1 Or SetIndex > Sets.Count Then Exit Sub
    If OptionIndex < 1 Or OptionIndex > Sets.Sets(SetIndex).Count Then Exit Sub
    
    With Sets.Sets(SetIndex)
        ' 移除控件
        Controls.Remove .Options(OptionIndex).Button.Name
        
        ' 移动后续选项
        Dim i As Long
        For i = OptionIndex To .Count - 1
            Set .Options(i) = .Options(i + 1)
            
            ' 更新位置
            With .Options(i).Button
                .Top = (i - 1) * _
                      (Sets.Sets(SetIndex).ItemHeight + Sets.Sets(SetIndex).ItemSpacing)
            End With
        Next i
        
        ' 减少计数
        .Count = .Count - 1
        
        ' 调整容器大小
        AdjustContainerHeight SetIndex
    End With
End Sub

Private Function GetSelectedValue(ByVal SetIndex As Long) As Variant
    If SetIndex < 1 Or SetIndex > Sets.Count Then
        GetSelectedValue = Empty
        Exit Function
    End If
    
    With Sets.Sets(SetIndex)
        Dim i As Long
        For i = 1 To .Count
            If .Options(i).Button.Value Then
                GetSelectedValue = .Options(i).Value
                Exit Function
            End If
        Next i
    End With
    
    GetSelectedValue = Empty
End Function
```

### 数据绑定

```vb
Private Type BoundOption
    Button As VBCCROptionButton
    DataField As String
    DataSource As Object  ' Recordset or Collection
End Type

Private Type BindingManager
    Bindings() As BoundOption
    Count As Long
End Type

Private Bindings As BindingManager

Private Sub InitBindingManager()
    ReDim Bindings.Bindings(1 To 10)
    Bindings.Count = 0
End Sub

Private Function BindOptionToData(ByVal Button As VBCCROptionButton, _
                                ByVal DataSource As Object, _
                                ByVal DataField As String) As Long
    With Bindings
        .Count = .Count + 1
        If .Count > UBound(.Bindings) Then
            ReDim Preserve .Bindings(1 To .Count + 10)
        End If
        
        With .Bindings(.Count)
            Set .Button = Button
            Set .DataSource = DataSource
            .DataField = DataField
            
            ' 初始化值
            UpdateOptionFromData .Count
        End With
        
        BindOptionToData = .Count
    End With
End Function

Private Sub UpdateOptionFromData(ByVal BindingIndex As Long)
    If BindingIndex < 1 Or BindingIndex > Bindings.Count Then Exit Sub
    
    With Bindings.Bindings(BindingIndex)
        If TypeOf .DataSource Is ADODB.Recordset Then
            ' ADO Recordset
            If Not .DataSource.EOF Then
                .Button.Value = .DataSource.Fields(.DataField).Value
            End If
        ElseIf TypeOf .DataSource Is Collection Then
            ' Collection
            If .DataSource.Count > 0 Then
                .Button.Value = .DataSource.Item(.DataField)
            End If
        End If
    End With
End Sub

Private Sub UpdateDataFromOption(ByVal BindingIndex As Long)
    If BindingIndex < 1 Or BindingIndex > Bindings.Count Then Exit Sub
    
    With Bindings.Bindings(BindingIndex)
        If TypeOf .DataSource Is ADODB.Recordset Then
            ' ADO Recordset
            If Not .DataSource.EOF Then
                .DataSource.Fields(.DataField).Value = .Button.Value
            End If
        ElseIf TypeOf .DataSource Is Collection Then
            ' Collection
            If .DataSource.Count > 0 Then
                .DataSource.Item(.DataField) = .Button.Value
            End If
        End If
    End With
End Sub

Private Sub BoundOption_Click()
    Dim Button As VBCCROptionButton
    Set Button = Me.ActiveControl
    
    ' 查找绑定
    Dim i As Long
    For i = 1 To Bindings.Count
        If Bindings.Bindings(i).Button Is Button Then
            UpdateDataFromOption i
            Exit For
        End If
    Next i
End Sub
```

### 分页选项

```vb
Private Type PagedOptions
    Name As String
    Options() As VBCCROptionButton
    Count As Long
    PageSize As Long
    CurrentPage As Long
    Container As Object
    ItemHeight As Single
    ItemSpacing As Single
End Type

Private Type PageManager
    Pages() As PagedOptions
    Count As Long
End Type

Private Pages As PageManager

Private Sub InitPageManager()
    ReDim Pages.Pages(1 To 10)
    Pages.Count = 0
End Sub

Private Function CreatePagedOptions(ByVal Name As String, _
                                  ByVal Container As Object, _
                                  Optional ByVal PageSize As Long = 10, _
                                  Optional ByVal ItemHeight As Single = 300, _
                                  Optional ByVal ItemSpacing As Single = 60) _
                                  As Long
    With Pages
        .Count = .Count + 1
        If .Count > UBound(.Pages) Then
            ReDim Preserve .Pages(1 To .Count + 10)
        End If
        
        With .Pages(.Count)
            .Name = Name
            Set .Container = Container
            .PageSize = PageSize
            .ItemHeight = ItemHeight
            .ItemSpacing = ItemSpacing
            ReDim .Options(1 To PageSize)
            .Count = 0
            .CurrentPage = 1
        End With
        
        CreatePagedOptions = .Count
    End With
End Function

Private Sub AddPagedOption(ByVal PageIndex As Long, _
                          ParamArray Options() As Variant)
    If PageIndex < 1 Or PageIndex > Pages.Count Then Exit Sub
    
    With Pages.Pages(PageIndex)
        Dim i As Long
        For i = LBound(Options) To UBound(Options)
            If .Count = UBound(.Options) Then
                ReDim Preserve .Options(1 To .Count + .PageSize)
            End If
            
            .Count = .Count + 1
            
            ' 创建选项按钮
            Set .Options(.Count) = Controls.Add("VBCCROptionButton", _
                                             .Name & "_Option" & .Count)
            
            With .Options(.Count)
                .Container = Pages.Pages(PageIndex).Container
                .Caption = Options(i)
                .Visible = False  ' 初始化时隐藏
            End With
        Next i
        
        ' 显示当前页
        ShowPage PageIndex, .CurrentPage
    End With
End Sub

Private Sub ShowPage(ByVal PageIndex As Long, _
                    ByVal PageNumber As Long)
    If PageIndex < 1 Or PageIndex > Pages.Count Then Exit Sub
    
    With Pages.Pages(PageIndex)
        ' 隐藏所有选项
        Dim i As Long
        For i = 1 To .Count
            .Options(i).Visible = False
        Next i
        
        ' 计算页范围
        Dim StartIndex As Long
        Dim EndIndex As Long
        StartIndex = (PageNumber - 1) * .PageSize + 1
        EndIndex = StartIndex + .PageSize - 1
        If EndIndex > .Count Then EndIndex = .Count
        
        ' 显示当前页的选项
        For i = StartIndex To EndIndex
            With .Options(i)
                .Top = (i - StartIndex) * _
                      (Pages.Pages(PageIndex).ItemHeight + _
                       Pages.Pages(PageIndex).ItemSpacing)
                .Width = Pages.Pages(PageIndex).Container.ScaleWidth
                .Left = 0
                .Visible = True
            End With
        Next i
        
        .CurrentPage = PageNumber
    End With
End Sub

Private Function GetPageCount(ByVal PageIndex As Long) As Long
    If PageIndex < 1 Or PageIndex > Pages.Count Then
        GetPageCount = 0
        Exit Function
    End If
    
    With Pages.Pages(PageIndex)
        GetPageCount = (.Count + .PageSize - 1) \ .PageSize
    End With
End Function

Private Sub NextPage(ByVal PageIndex As Long)
    If PageIndex < 1 Or PageIndex > Pages.Count Then Exit Sub
    
    With Pages.Pages(PageIndex)
        If .CurrentPage < GetPageCount(PageIndex) Then
            ShowPage PageIndex, .CurrentPage + 1
        End If
    End With
End Sub

Private Sub PreviousPage(ByVal PageIndex As Long)
    If PageIndex < 1 Or PageIndex > Pages.Count Then Exit Sub
    
    With Pages.Pages(PageIndex)
        If .CurrentPage > 1 Then
            ShowPage PageIndex, .CurrentPage - 1
        End If
    End With
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Sub SafeSetOptionValue(ByVal Button As VBCCROptionButton, _
                             ByVal Value As Boolean)
    On Error GoTo ErrorHandler
    
    Button.Value = Value
    Exit Sub
    
ErrorHandler:
    Debug.Print "设置选项按钮值失败: " & Err.Description
End Sub
```

2. 快捷键支持
```vb
Private Sub SetOptionHotkey(ByVal Button As VBCCROptionButton, _
                          ByVal Key As Integer, _
                          Optional ByVal Ctrl As Boolean = False, _
                          Optional ByVal Alt As Boolean = False, _
                          Optional ByVal Shift As Boolean = False)
    ' 添加快捷键提示
    Dim HotkeyText As String
    
    If Ctrl Then HotkeyText = HotkeyText & "Ctrl+"
    If Alt Then HotkeyText = HotkeyText & "Alt+"
    If Shift Then HotkeyText = HotkeyText & "Shift+"
    
    HotkeyText = HotkeyText & Chr$(Key)
    
    Button.ToolTipText = Button.Caption & " (" & HotkeyText & ")"
    
    ' 保存快捷键信息
    Button.Tag = Key & ":" & Ctrl & ":" & Alt & ":" & Shift
End Sub
```

3. 状态保存
```vb
Private Sub SaveOptionState(ByVal Button As VBCCROptionButton)
    SaveSetting App.Title, Button.Name, "Caption", Button.Caption
    SaveSetting App.Title, Button.Name, "Value", Button.Value
    SaveSetting App.Title, Button.Name, "Enabled", Button.Enabled
    SaveSetting App.Title, Button.Name, "Visible", Button.Visible
    SaveSetting App.Title, Button.Name, "Tag", Button.Tag
End Sub

Private Sub RestoreOptionState(ByVal Button As VBCCROptionButton)
    With Button
        .Caption = GetSetting(App.Title, .Name, "Caption", .Caption)
        .Value = CBool(GetSetting(App.Title, .Name, "Value", .Value))
        .Enabled = CBool(GetSetting(App.Title, .Name, "Enabled", .Enabled))
        .Visible = CBool(GetSetting(App.Title, .Name, "Visible", .Visible))
        .Tag = GetSetting(App.Title, .Name, "Tag", .Tag)
    End With
End Sub
```

OptionButton 控件是实现单选功能的重要控件，通过合理组织和管理，可以实现灵活的选项分组、数据绑定和分页显示等功能。上述示例展示了 OptionButton 控件的多种用法，开发者可以根据实际需求选择合适的实现方式。
