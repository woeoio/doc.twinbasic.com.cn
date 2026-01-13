# Toolbar Control (VBCCRToolbar)

VBCCRToolbar 控件提供了一个工具栏界面,用于组织和显示常用命令按钮。它支持图标、文本、下拉菜单等多种按钮样式,可以方便用户快速访问程序功能。

## 属性

### 关键属性

- `Buttons`: 按钮集合
- `ImageList`: 图标列表
- `ButtonWidth`: 按钮宽度
- `ButtonHeight`: 按钮高度
- `Style`: 工具栏样式
- `Wrappable`: 是否允许换行
- `AllowCustomize`: 是否允许自定义
- `TextAlignment`: 文本对齐方式
- `HotImageList`: 热点图标列表
- `DisabledImageList`: 禁用状态图标列表
- `ShowTips`: 是否显示工具提示

### 工具栏样式常量 (TbrStyleConstants)

- `TbrStyleStandard` (0) - 标准样式
- `TbrStyleFlat` (1) - 平面样式

### 文本对齐常量 (TbrTextAlignConstants)

- `TbrTextAlignBottom` (0) - 文本在按钮底部
- `TbrTextAlignRight` (1) - 文本在按钮右侧

### 按钮样式常量 (TbrButtonStyleConstants)

用于按钮的 `Style` 属性:

- `TbrButtonStyleDefault` (0) - 默认按钮
- `TbrButtonStyleCheck` (1) - 复选按钮
- `TbrButtonStyleCheckGroup` (2) - 按钮组中的复选按钮
- `TbrButtonStyleSeparator` (3) - 分隔符
- `TbrButtonStyleDropDown` (4) - 下拉按钮
- `TbrButtonStyleWholeDropDown` (5) - 整体下拉按钮

## 方法

### 主要方法

- `AddButton(Caption As String, [Key As String], [Image As Variant])`: 添加按钮
- `RemoveButton(Index As Variant)`: 移除按钮
- `GetButton(Index As Variant) As Button`: 获取按钮
- `Customize()`: 打开自定义对话框
- `SaveLayout(Key As String)`: 保存布局
- `LoadLayout(Key As String)`: 加载布局

## 事件

- `ButtonClick(Button As Button)`: 按钮点击事件
- `ButtonDropDown(Button As Button, Cancel As Boolean)`: 下拉按钮事件
- `ButtonBeginDrag(Button As Button, Cancel As Boolean)`: 开始拖动事件
- `BeforeCustomize(Cancel As Boolean)`: 自定义前事件
- `Change()`: 工具栏改变事件

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    ' 配置工具栏
    With Toolbar1
        .ImageList = ImageList1
        .ButtonWidth = 24
        .ButtonHeight = 24
        .Style = TbrStyleFlat
        .ShowTips = True

        ' 添加按钮
        .AddButton "新建", "NEW", 1
        .AddButton "打开", "OPEN", 2
        .AddButton "保存", "SAVE", 3
        .AddButton , , , TbrButtonStyleSeparator  ' 分隔符
        .AddButton "剪切", "CUT", 4
        .AddButton "复制", "COPY", 5
        .AddButton "粘贴", "PASTE", 6
    End With
End Sub
```

### 按钮管理

```vb
Private Sub SetupButtons()
    With Toolbar1
        ' 添加标准按钮
        Dim NewBtn As Button
        Set NewBtn = .AddButton("新建", "NEW")
        With NewBtn
            .Image = 1
            .ToolTipText = "新建文档"
            .Style = TbrButtonStyleDefault
            .Caption = "新建"
        End With

        ' 添加下拉按钮
        Dim DropBtn As Button
        Set DropBtn = .AddButton("更多", "MORE")
        With DropBtn
            .Image = 2
            .Style = TbrButtonStyleDropDown
        End With

        ' 添加切换按钮
        Dim ToggleBtn As Button
        Set ToggleBtn = .AddButton("粗体", "BOLD")
        With ToggleBtn
            .Image = 3
            .Style = TbrButtonStyleCheck
        End With
    End With
End Sub

Private Sub Toolbar1_ButtonClick(Button As Button)
    Select Case Button.Key
        Case "NEW"
            CreateNewDocument
        Case "BOLD"
            ToggleBold Button
    End Select
End Sub

Private Sub Toolbar1_ButtonDropDown(Button As Button, Cancel As Boolean)
    If Button.Key = "MORE" Then
        PopupMenu mnuMore
        Cancel = True
    End If
End Sub
```

### 动态工具栏

```vb
Private Sub CreateDynamicToolbar()
    ' 清除现有按钮
    Toolbar1.Buttons.Clear

    ' 根据用户权限添加按钮
    If UserHasPermission("FILE_OPS") Then
        AddFileOperations
    End If

    If UserHasPermission("EDIT_OPS") Then
        AddEditOperations
    End If

    If UserHasPermission("VIEW_OPS") Then
        AddViewOperations
    End If
End Sub

Private Sub AddFileOperations()
    With Toolbar1
        .AddButton "新建", "NEW", 1
        .AddButton "打开", "OPEN", 2
        .AddButton "保存", "SAVE", 3
        .AddButton , , , TbrButtonStyleSeparator
    End With
End Sub

Private Sub AddEditOperations()
    With Toolbar1
        .AddButton "剪切", "CUT", 4
        .AddButton "复制", "COPY", 5
        .AddButton "粘贴", "PASTE", 6
        .AddButton , , , TbrButtonStyleSeparator
    End With
End Sub

Private Sub EnableButtons(ByVal Enable As Boolean)
    Dim Button As Button
    For Each Button In Toolbar1.Buttons
        Button.Enabled = Enable
    Next Button
End Sub
```

## 常见用例

### 格式工具栏

```vb
Private Sub CreateFormatToolbar()
    With Toolbar1
        ' 字体样式按钮
        .AddButton "粗体", "BOLD", 1
        With .GetButton("BOLD")
            .Style = TbrButtonStyleCheck
            .Value = TbrButtonValuePressed
        End With

        .AddButton "斜体", "ITALIC", 2
        With .GetButton("ITALIC")
            .Style = TbrButtonStyleCheck
            .Value = TbrButtonValuePressed
        End With

        .AddButton "下划线", "UNDERLINE", 3
        With .GetButton("UNDERLINE")
            .Style = TbrButtonStyleCheck
            .Value = TbrButtonValuePressed
        End With

        .AddButton , , , TbrButtonStyleSeparator

        ' 对齐方式按钮
        .AddButton "左对齐", "ALIGN_LEFT", 4
        .AddButton "居中", "ALIGN_CENTER", 5
        .AddButton "右对齐", "ALIGN_RIGHT", 6
    End With
End Sub

Private Sub Toolbar1_ButtonClick(Button As Button)
    Select Case Button.Key
        Case "BOLD"
            rtbDocument.SelBold = Button.Value = TbrButtonValuePressed
        Case "ITALIC"
            rtbDocument.SelItalic = Button.Value = TbrButtonValuePressed
        Case "UNDERLINE"
            rtbDocument.SelUnderline = Button.Value = TbrButtonValuePressed
        Case "ALIGN_LEFT"
            rtbDocument.SelAlignment = vbLeftJustify
        Case "ALIGN_CENTER"
            rtbDocument.SelAlignment = vbCenter
        Case "ALIGN_RIGHT"
            rtbDocument.SelAlignment = vbRightJustify
    End Select
End Sub
```

### 浏览工具栏

```vb
Private Sub CreateBrowserToolbar()
    With Toolbar1
        ' 导航按钮
        .AddButton "后退", "BACK", 1
        .GetButton("BACK").Enabled = False

        .AddButton "前进", "FORWARD", 2
        .GetButton("FORWARD").Enabled = False

        .AddButton "刷新", "REFRESH", 3

        .AddButton , , , TbrButtonStyleSeparator

        ' 转到按钮
        .AddButton "转到", "GO", 4
    End With
End Sub

Private Sub UpdateNavigationButtons()
    With Toolbar1
        .GetButton("BACK").Enabled = CanGoBack
        .GetButton("FORWARD").Enabled = CanGoForward
    End With
End Sub

Private Sub Toolbar1_ButtonClick(Button As Button)
    Select Case Button.Key
        Case "BACK"
            NavigateBack
        Case "FORWARD"
            NavigateForward
        Case "REFRESH"
            RefreshPage
        Case "GO"
            NavigateToAddress
    End Select
End Sub
```

## 最佳实践

1. 按钮状态管理
```vb
Private Sub UpdateButtonStates()
    With Toolbar1
        ' 更新文件操作按钮
        .GetButton("SAVE").Enabled = IsDocumentModified
        .GetButton("PRINT").Enabled = HasPrinter

        ' 更新编辑按钮
        Dim HasSelection As Boolean
        HasSelection = (rtbDocument.SelLength > 0)

        .GetButton("CUT").Enabled = HasSelection
        .GetButton("COPY").Enabled = HasSelection
        .GetButton("PASTE").Enabled = Clipboard.GetFormat(vbCFText)
    End With
End Sub
```

2. 错误处理
```vb
Private Function SafeAddButton(ByVal Caption As String, _
                             Optional ByVal Key As String = "", _
                             Optional ByVal Image As Variant) As Button
    On Error GoTo ErrorHandler

    Set SafeAddButton = Toolbar1.AddButton(Caption, Key, Image)
    Exit Function

ErrorHandler:
    Debug.Print "添加按钮错误: " & Err.Description
    Set SafeAddButton = Nothing
End Function
```

## 已知问题和解决方案

1. 刷新问题
```vb
Private Sub RefreshToolbar()
    ' 强制重绘工具栏
    LockWindowUpdate Toolbar1.hWnd

    Dim Button As Button
    For Each Button In Toolbar1.Buttons
        Button.Refresh
    Next Button

    LockWindowUpdate 0
End Sub
```

2. 自定义处理
```vb
Private Sub Toolbar1_BeforeCustomize(Cancel As Boolean)
    ' 检查权限
    If Not UserHasPermission("CUSTOMIZE_TOOLBAR") Then
        MsgBox "您没有自定义工具栏的权限。", vbExclamation
        Cancel = True
    End If
End Sub
```

## 高级特性

### 自动隐藏

```vb
Private Type AutoHideSettings
    Enabled As Boolean
    Delay As Long
    Timer As Long
End Type

Private AutoHide As AutoHideSettings

Private Sub SetupAutoHide()
    With AutoHide
        .Enabled = True
        .Delay = 2000  ' 2秒后隐藏
    End With

    ' 启动定时器
    AutoHide.Timer = SetTimer(Me.hWnd, 1, 100, AddressOf TimerProc)
End Sub

Private Sub Toolbar1_MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
    If AutoHide.Enabled Then
        ' 显示工具栏
        Toolbar1.Visible = True
        LastMouseMove = GetTickCount
    End If
End Sub

Private Sub TimerProc()
    If AutoHide.Enabled Then
        ' 检查是否应该隐藏
        If GetTickCount - LastMouseMove > AutoHide.Delay Then
            Toolbar1.Visible = False
        End If
    End If
End Sub
```

### 按钮组

```vb
Private Type ButtonGroup
    Key As String
    Buttons() As Button
    SelectedIndex As Long
End Type

Private ButtonGroups() As ButtonGroup
Private GroupCount As Long

Private Sub CreateButtonGroup(ByVal Key As String, ParamArray ButtonKeys())
    ' 添加新组
    GroupCount = GroupCount + 1
    ReDim Preserve ButtonGroups(1 To GroupCount)

    With ButtonGroups(GroupCount)
        .Key = Key
        ReDim .Buttons(0 To UBound(ButtonKeys))

        ' 添加按钮到组
        Dim i As Long
        For i = 0 To UBound(ButtonKeys)
            Set .Buttons(i) = Toolbar1.GetButton(CStr(ButtonKeys(i)))
            .Buttons(i).Style = TbrButtonStyleCheckGroup
        Next i

        .SelectedIndex = 0
        .Buttons(0).Value = TbrButtonValuePressed
    End With
End Sub

Private Sub Toolbar1_ButtonClick(Button As Button)
    Dim i As Long
    For i = 1 To GroupCount
        If IsButtonInGroup(Button, ButtonGroups(i)) Then
            UpdateGroupSelection ButtonGroups(i), Button
            Exit For
        End If
    Next i
End Sub

Private Function IsButtonInGroup(ByVal Button As Button, _
                               ByRef Group As ButtonGroup) As Boolean
    Dim i As Long
    For i = 0 To UBound(Group.Buttons)
        If Group.Buttons(i).Key = Button.Key Then
            IsButtonInGroup = True
            Exit Function
        End If
    Next i
End Function

Private Sub UpdateGroupSelection(ByRef Group As ButtonGroup, _
                               ByVal Selected As Button)
    Dim i As Long
    For i = 0 To UBound(Group.Buttons)
        If Group.Buttons(i).Key <> Selected.Key Then
            Group.Buttons(i).Value = TbrButtonValueUnpressed
        Else
            Group.SelectedIndex = i
            Group.Buttons(i).Value = TbrButtonValuePressed
        End If
    Next i
End Sub
```

### 工具栏布局保存

```vb
Private Type ToolbarLayout
    ButtonKey As String
    Index As Long
    Visible As Boolean
    Width As Long
End Type

Private Sub SaveToolbarLayout()
    Dim Layout() As ToolbarLayout
    ReDim Layout(1 To Toolbar1.Buttons.Count)

    ' 保存按钮布局
    Dim i As Long
    Dim Button As Button
    For Each Button In Toolbar1.Buttons
        i = i + 1
        With Layout(i)
            .ButtonKey = Button.Key
            .Index = i
            .Visible = Button.Visible
            .Width = Button.Width
        End With
    Next Button

    ' 保存到注册表
    SaveLayoutToRegistry Layout
End Sub

Private Sub LoadToolbarLayout()
    Dim Layout() As ToolbarLayout

    ' 从注册表加载布局
    If LoadLayoutFromRegistry(Layout) Then
        ' 应用布局
        Dim i As Long
        For i = 1 To UBound(Layout)
            With Layout(i)
                Dim Button As Button
                Set Button = Toolbar1.GetButton(.ButtonKey)

                If Not Button Is Nothing Then
                    Button.Index = .Index
                    Button.Visible = .Visible
                    Button.Width = .Width
                End If
            End With
        Next i
    End If
End Sub

Private Sub SaveLayoutToRegistry(Layout() As ToolbarLayout)
    Dim Key As String
    Key = "Software\MyApp\Toolbar"

    ' 保存布局信息
    Dim i As Long
    For i = 1 To UBound(Layout)
        With Layout(i)
            SaveSetting App.Title, Key, "Button" & i & "Key", .ButtonKey
            SaveSetting App.Title, Key, "Button" & i & "Index", CStr(.Index)
            SaveSetting App.Title, Key, "Button" & i & "Visible", CStr(.Visible)
            SaveSetting App.Title, Key, "Button" & i & "Width", CStr(.Width)
        End With
    Next i
End Sub

Private Function LoadLayoutFromRegistry(Layout() As ToolbarLayout) As Boolean
    On Error GoTo ErrorHandler

    Dim Key As String
    Key = "Software\MyApp\Toolbar"

    ' 获取按钮数量
    Dim Count As Long
    Count = Toolbar1.Buttons.Count
    ReDim Layout(1 To Count)

    ' 加载布局信息
    Dim i As Long
    For i = 1 To Count
        With Layout(i)
            .ButtonKey = GetSetting(App.Title, Key, "Button" & i & "Key")
            .Index = Val(GetSetting(App.Title, Key, "Button" & i & "Index"))
            .Visible = CBool(GetSetting(App.Title, Key, "Button" & i & "Visible"))
            .Width = Val(GetSetting(App.Title, Key, "Button" & i & "Width"))
        End With
    Next i

    LoadLayoutFromRegistry = True
    Exit Function

ErrorHandler:
    LoadLayoutFromRegistry = False
End Function
```
