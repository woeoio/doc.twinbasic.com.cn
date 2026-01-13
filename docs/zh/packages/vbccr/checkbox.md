# CheckBox Control (VBCCRCheckBox)

VBCCRCheckBox 控件是一个复选框控件，允许用户从一组选项中选择多个选项。它支持三态（选中、未选中和部分选中）选项。

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
- `Caption` - 复选框文本
- `Picture` - 图标
- `DisabledPicture` - 禁用状态图标
- `DownPicture` - 按下状态图标
- `Enabled` - 是否启用
- `Visible` - 是否可见
- `Value` - 选中状态
  - `vbUnchecked` (0) - 未选中
  - `vbChecked` (1) - 选中
  - `vbGrayed` (2) - 灰显（部分选中）
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
Private Sub InitCheckBox()
    With Check1
        .Caption = "启用选项"
        .Value = vbUnchecked  ' 默认未选中
        .ToolTipText = "选中以启用此选项"
    End With
End Sub
```

### 选项组管理

```vb
Private Type CheckGroup
    Name As String
    Boxes() As VBCCRCheckBox
    Count As Long
    MinSelected As Long
    MaxSelected As Long
End Type

Private Type GroupManager
    Groups() As CheckGroup
    Count As Long
End Type

Private Groups As GroupManager

Private Sub InitGroupManager()
    ReDim Groups.Groups(1 To 10)
    Groups.Count = 0
End Sub

Private Function CreateCheckGroup(ByVal Name As String, _
                                Optional ByVal MinSelected As Long = 0, _
                                Optional ByVal MaxSelected As Long = -1) _
                                As Long
    With Groups
        .Count = .Count + 1
        If .Count > UBound(.Groups) Then
            ReDim Preserve .Groups(1 To .Count + 10)
        End If
        
        With .Groups(.Count)
            .Name = Name
            ReDim .Boxes(1 To 10)
            .Count = 0
            .MinSelected = MinSelected
            .MaxSelected = MaxSelected
        End With
        
        CreateCheckGroup = .Count
    End With
End Function

Private Sub AddToGroup(ByVal GroupIndex As Long, _
                      ByVal Box As VBCCRCheckBox)
    If GroupIndex < 1 Or GroupIndex > Groups.Count Then Exit Sub
    
    With Groups.Groups(GroupIndex)
        .Count = .Count + 1
        If .Count > UBound(.Boxes) Then
            ReDim Preserve .Boxes(1 To .Count + 10)
        End If
        
        Set .Boxes(.Count) = Box
        
        ' 设置标签以标识组和索引
        Box.Tag = GroupIndex & ":" & .Count
        
        ' 添加事件处理
        Box.Value = vbUnchecked  ' 确保初始状态为未选中
    End With
End Sub

Private Sub CheckBox_Click()
    Dim Box As VBCCRCheckBox
    Set Box = Me.ActiveControl
    
    ' 解析组和索引
    Dim Parts() As String
    Parts = Split(Box.Tag, ":")
    
    If UBound(Parts) <> 1 Then Exit Sub
    
    Dim GroupIndex As Long
    Dim BoxIndex As Long
    GroupIndex = Val(Parts(0))
    BoxIndex = Val(Parts(1))
    
    ValidateGroupSelection GroupIndex, BoxIndex
End Sub

Private Sub ValidateGroupSelection(ByVal GroupIndex As Long, _
                                 ByVal BoxIndex As Long)
    If GroupIndex < 1 Or GroupIndex > Groups.Count Then Exit Sub
    
    With Groups.Groups(GroupIndex)
        ' 计算当前选中数量
        Dim SelectedCount As Long
        Dim i As Long
        For i = 1 To .Count
            If .Boxes(i).Value = vbChecked Then
                SelectedCount = SelectedCount + 1
            End If
        Next i
        
        ' 验证最小选择数
        If .MinSelected > 0 And _
           SelectedCount < .MinSelected And _
           .Boxes(BoxIndex).Value = vbUnchecked Then
            ' 不允许取消选中
            .Boxes(BoxIndex).Value = vbChecked
            MsgBox "至少需要选择 " & .MinSelected & " 个选项", _
                   vbInformation
        End If
        
        ' 验证最大选择数
        If .MaxSelected > 0 And _
           SelectedCount > .MaxSelected And _
           .Boxes(BoxIndex).Value = vbChecked Then
            ' 不允许选中
            .Boxes(BoxIndex).Value = vbUnchecked
            MsgBox "最多只能选择 " & .MaxSelected & " 个选项", _
                   vbInformation
        End If
    End With
End Sub

Private Function GetSelectedBoxes(ByVal GroupIndex As Long) As Variant
    Dim Result() As Long
    Dim Count As Long
    Dim i As Long
    
    If GroupIndex < 1 Or GroupIndex > Groups.Count Then
        GetSelectedBoxes = Array()
        Exit Function
    End If
    
    With Groups.Groups(GroupIndex)
        ReDim Result(1 To .Count)
        
        For i = 1 To .Count
            If .Boxes(i).Value = vbChecked Then
                Count = Count + 1
                Result(Count) = i
            End If
        Next i
        
        If Count > 0 Then
            ReDim Preserve Result(1 To Count)
            GetSelectedBoxes = Result
        Else
            GetSelectedBoxes = Array()
        End If
    End With
End Function
```

### 依赖关系管理

```vb
Private Type BoxDependency
    Box As VBCCRCheckBox
    DependsOn() As VBCCRCheckBox
    DependentCount As Long
    RequireAll As Boolean
End Type

Private Type DependencyManager
    Dependencies() As BoxDependency
    Count As Long
End Type

Private Dependencies As DependencyManager

Private Sub InitDependencyManager()
    ReDim Dependencies.Dependencies(1 To 10)
    Dependencies.Count = 0
End Sub

Private Function CreateDependency(ByVal Box As VBCCRCheckBox, _
                                Optional ByVal RequireAll As Boolean = False) _
                                As Long
    With Dependencies
        .Count = .Count + 1
        If .Count > UBound(.Dependencies) Then
            ReDim Preserve .Dependencies(1 To .Count + 10)
        End If
        
        With .Dependencies(.Count)
            Set .Box = Box
            ReDim .DependsOn(1 To 10)
            .DependentCount = 0
            .RequireAll = RequireAll
        End With
        
        CreateDependency = .Count
    End With
End Function

Private Sub AddDependency(ByVal DependencyIndex As Long, _
                         ByVal DependsOn As VBCCRCheckBox)
    If DependencyIndex < 1 Or DependencyIndex > Dependencies.Count Then Exit Sub
    
    With Dependencies.Dependencies(DependencyIndex)
        .DependentCount = .DependentCount + 1
        If .DependentCount > UBound(.DependsOn) Then
            ReDim Preserve .DependsOn(1 To .DependentCount + 10)
        End If
        
        Set .DependsOn(.DependentCount) = DependsOn
    End With
End Sub

Private Sub UpdateDependencies()
    Dim i As Long, j As Long
    Dim ShouldEnable As Boolean
    
    For i = 1 To Dependencies.Count
        With Dependencies.Dependencies(i)
            If .RequireAll Then
                ' 需要所有依赖项都选中
                ShouldEnable = True
                For j = 1 To .DependentCount
                    If .DependsOn(j).Value <> vbChecked Then
                        ShouldEnable = False
                        Exit For
                    End If
                Next j
            Else
                ' 只需要任一依赖项选中
                ShouldEnable = False
                For j = 1 To .DependentCount
                    If .DependsOn(j).Value = vbChecked Then
                        ShouldEnable = True
                        Exit For
                    End If
                Next j
            End If
            
            ' 更新状态
            .Box.Enabled = ShouldEnable
            If Not ShouldEnable Then
                .Box.Value = vbUnchecked
            End If
        End With
    Next i
End Sub

Private Sub DependentCheckBox_Click()
    UpdateDependencies
End Sub
```

### 状态切换

```vb
Private Type ToggleState
    Caption As String
    Value As Integer  ' vbUnchecked, vbChecked, or vbGrayed
    Enabled As Boolean
End Type

Private Type StateBox
    Box As VBCCRCheckBox
    States() As ToggleState
    StateCount As Long
    CurrentState As Long
End Type

Private Type StateManager
    Boxes() As StateBox
    Count As Long
End Type

Private States As StateManager

Private Sub InitStateManager()
    ReDim States.Boxes(1 To 10)
    States.Count = 0
End Sub

Private Function CreateStateBox(ByVal Box As VBCCRCheckBox, _
                              ParamArray StateInfo() As Variant) _
                              As Long
    If (UBound(StateInfo) + 1) Mod 3 <> 0 Then
        MsgBox "状态信息必须是三元组 (Caption, Value, Enabled)", _
               vbExclamation
        Exit Function
    End If
    
    With States
        .Count = .Count + 1
        If .Count > UBound(.Boxes) Then
            ReDim Preserve .Boxes(1 To .Count + 10)
        End If
        
        With .Boxes(.Count)
            Set .Box = Box
            
            Dim StateCount As Long
            StateCount = (UBound(StateInfo) + 1) \ 3
            ReDim .States(1 To StateCount)
            
            Dim i As Long
            For i = 1 To StateCount
                With .States(i)
                    .Caption = StateInfo((i - 1) * 3)
                    .Value = StateInfo((i - 1) * 3 + 1)
                    .Enabled = StateInfo((i - 1) * 3 + 2)
                End With
            Next i
            
            .StateCount = StateCount
            .CurrentState = 1
            
            ' 设置初始状态
            UpdateBoxState .Count
        End With
        
        CreateStateBox = .Count
    End With
End Function

Private Sub UpdateBoxState(ByVal BoxIndex As Long)
    If BoxIndex < 1 Or BoxIndex > States.Count Then Exit Sub
    
    With States.Boxes(BoxIndex)
        Dim State As ToggleState
        State = .States(.CurrentState)
        
        With .Box
            .Caption = State.Caption
            .Value = State.Value
            .Enabled = State.Enabled
        End With
    End With
End Sub

Private Sub StateBox_Click()
    Dim Box As VBCCRCheckBox
    Set Box = Me.ActiveControl
    
    ' 查找对应的状态框
    Dim i As Long
    For i = 1 To States.Count
        If States.Boxes(i).Box Is Box Then
            ' 切换到下一个状态
            With States.Boxes(i)
                .CurrentState = .CurrentState Mod .StateCount + 1
                UpdateBoxState i
            End With
            Exit For
        End If
    Next i
End Sub
```

### 数据绑定

```vb
Private Type BoundCheckBox
    Box As VBCCRCheckBox
    DataField As String
    DataSource As Object  ' Recordset or Collection
End Type

Private Type BindingManager
    Bindings() As BoundCheckBox
    Count As Long
End Type

Private Bindings As BindingManager

Private Sub InitBindingManager()
    ReDim Bindings.Bindings(1 To 10)
    Bindings.Count = 0
End Sub

Private Function BindCheckBoxToData(ByVal Box As VBCCRCheckBox, _
                                  ByVal DataSource As Object, _
                                  ByVal DataField As String) As Long
    With Bindings
        .Count = .Count + 1
        If .Count > UBound(.Bindings) Then
            ReDim Preserve .Bindings(1 To .Count + 10)
        End If
        
        With .Bindings(.Count)
            Set .Box = Box
            Set .DataSource = DataSource
            .DataField = DataField
            
            ' 初始化值
            UpdateCheckBoxFromData .Count
        End With
        
        BindCheckBoxToData = .Count
    End With
End Function

Private Sub UpdateCheckBoxFromData(ByVal BindingIndex As Long)
    If BindingIndex < 1 Or BindingIndex > Bindings.Count Then Exit Sub
    
    With Bindings.Bindings(BindingIndex)
        If TypeOf .DataSource Is ADODB.Recordset Then
            ' ADO Recordset
            If Not .DataSource.EOF Then
                .Box.Value = IIf(.DataSource.Fields(.DataField).Value, _
                                vbChecked, vbUnchecked)
            End If
        ElseIf TypeOf .DataSource Is Collection Then
            ' Collection
            If .DataSource.Count > 0 Then
                .Box.Value = IIf(.DataSource.Item(.DataField), _
                                vbChecked, vbUnchecked)
            End If
        End If
    End With
End Sub

Private Sub UpdateDataFromCheckBox(ByVal BindingIndex As Long)
    If BindingIndex < 1 Or BindingIndex > Bindings.Count Then Exit Sub
    
    With Bindings.Bindings(BindingIndex)
        If TypeOf .DataSource Is ADODB.Recordset Then
            ' ADO Recordset
            If Not .DataSource.EOF Then
                .DataSource.Fields(.DataField).Value = _
                    (.Box.Value = vbChecked)
            End If
        ElseIf TypeOf .DataSource Is Collection Then
            ' Collection
            If .DataSource.Count > 0 Then
                .DataSource.Item(.DataField) = (.Box.Value = vbChecked)
            End If
        End If
    End With
End Sub

Private Sub BoundCheckBox_Click()
    Dim Box As VBCCRCheckBox
    Set Box = Me.ActiveControl
    
    ' 查找绑定
    Dim i As Long
    For i = 1 To Bindings.Count
        If Bindings.Bindings(i).Box Is Box Then
            UpdateDataFromCheckBox i
            Exit For
        End If
    Next i
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Sub SafeSetCheckValue(ByVal Box As VBCCRCheckBox, _
                            ByVal Value As Integer)
    On Error GoTo ErrorHandler
    
    Box.Value = Value
    Exit Sub
    
ErrorHandler:
    Debug.Print "设置复选框值失败: " & Err.Description
End Sub
```

2. 快捷键支持
```vb
Private Sub SetCheckHotkey(ByVal Box As VBCCRCheckBox, _
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
    
    Box.ToolTipText = Box.Caption & " (" & HotkeyText & ")"
    
    ' 保存快捷键信息
    Box.Tag = Key & ":" & Ctrl & ":" & Alt & ":" & Shift
End Sub
```

3. 状态保存
```vb
Private Sub SaveCheckState(ByVal Box As VBCCRCheckBox)
    SaveSetting App.Title, Box.Name, "Caption", Box.Caption
    SaveSetting App.Title, Box.Name, "Value", Box.Value
    SaveSetting App.Title, Box.Name, "Enabled", Box.Enabled
    SaveSetting App.Title, Box.Name, "Visible", Box.Visible
    SaveSetting App.Title, Box.Name, "Tag", Box.Tag
End Sub

Private Sub RestoreCheckState(ByVal Box As VBCCRCheckBox)
    With Box
        .Caption = GetSetting(App.Title, .Name, "Caption", .Caption)
        .Value = CInt(GetSetting(App.Title, .Name, "Value", .Value))
        .Enabled = CBool(GetSetting(App.Title, .Name, "Enabled", .Enabled))
        .Visible = CBool(GetSetting(App.Title, .Name, "Visible", .Visible))
        .Tag = GetSetting(App.Title, .Name, "Tag", .Tag)
    End With
End Sub
```

CheckBox 控件是实现多选功能的重要控件，通过合理的分组和状态管理，可以实现复杂的选项交互逻辑。上述示例展示了 CheckBox 控件的多种用法，包括选项组、依赖关系、状态切换和数据绑定等功能，开发者可以根据具体需求选择合适的实现方式。
