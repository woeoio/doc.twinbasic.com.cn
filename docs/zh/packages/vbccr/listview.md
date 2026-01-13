# ListView 控件 (VBComCtlListView)

VBComCtlListView 控件是标准 MSComCtl ListView 控件的增强替代品。它提供了改进的功能、更好的性能和增强的视觉外观。

## 属性

### 关键属性

- `View`: 设置或返回当前视图模式
  - `LvwViewIcon` (0) - 图标视图
  - `LvwViewSmallIcon` (1) - 小图标视图
  - `LvwViewList` (2) - 列表视图
  - `LvwViewReport` (3) - 报表视图
  - `LvwViewTile` (4) - 平铺视图

- `ColumnHeaders`: 报表视图中的列标题集合
- `ListItems`: ListView 中的项目集合
- `SelectedItem`: 返回当前选中的项目
- `MultiSelect`: 启用/禁用多项目选择
- `Sorted`: 启用/禁用自动排序
- `GridLines`: 在报表视图中显示/隐藏网格线
- `FullRowSelect`: 启用/禁用整行选择
- `LabelEdit`: 启用/禁用标签编辑
- `Checkboxes`: 启用/禁用复选框
- `HotTracking`: 启用/禁用热跟踪
- `HoverSelection`: 启用/禁用悬停选择

## 方法

### 主要方法

- `HitTest(X As Single, Y As Single) As LvwListItem`: 测试指定坐标处的项目
- `HitTestInsertMark(X As Single, Y As Single) As LvwListItem`: 测试插入标记处的项目
- `StartLabelEdit([Item As LvwListItem])`: 开始标签编辑
- `EndLabelEdit([Cancel As Boolean])`: 结束标签编辑
- `GetVisibleCount() As Long`: 返回可见项目的数量

### 集合方法

**ColumnHeaders 集合:**
- `Add([Index], [Key], [Text], [Width], [Alignment], [Icon])`: 添加列
- `Clear()`: 清除所有列
- `Remove(Index)`: 移除指定列

**ListItems 集合:**
- `Add([Index], [Key], [Text], [Icon], [SmallIcon]) As LvwListItem`: 添加项目
- `Clear()`: 清除所有项目
- `Remove(Index)`: 移除指定项目

## 事件

- `ItemClick(ByVal Item As LvwListItem)`: 点击项目时触发
- `ColumnClick(ByVal ColumnHeader As LvwColumnHeader)`: 点击列标题时触发
- `BeforeLabelEdit(Cancel As Integer)`: 标签编辑开始前触发
- `AfterLabelEdit(Cancel As Integer)`: 标签编辑结束后触发
- `ItemClick(ByVal Item As LvwListItem)`: 项目点击事件
- `ItemCheck(ByVal Item As LvwListItem)`: 项目复选状态改变时触发
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`
- `KeyPress(KeyAscii As Integer)`
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `DblClick()`: 双击事件
- `OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`
- `OLEStartDrag(Data As DataObject, AllowedEffects As Long)`
- `OLES etData(Data As DataObject, DataFormat As Integer)`
- `OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`
- `OLECompleteDrag(Effect As Long)`
- `MouseEnter()`: 鼠标进入控件时触发
- `MouseLeave()`: 鼠标离开控件时触发
- `ColumnWidthChanging(ByVal ColumnHeader As LvwColumnHeader, Cancel As Integer)`: 列宽改变时触发
- `ColumnWidthChanged(ByVal ColumnHeader As LvwColumnHeader)`: 列宽改变后触发

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    ' 添加列标题
    With ListView1.ColumnHeaders
        .Add , , "姓名", 150
        .Add , , "年龄", 80
        .Add , , "城市", 150
    End With
    
    ' 添加带有子项的项目
    With ListView1.ListItems
        With .Add(, , "张三")
            .SubItems(1) = "30"
            .SubItems(2) = "北京"
        End With
        With .Add(, , "李四")
            .SubItems(1) = "25"
            .SubItems(2) = "上海"
        End With
    End With
    
    ' 设置报表视图
    ListView1.View = LvwViewReport
    ListView1.FullRowSelect = True
    ListView1.GridLines = True
End Sub
```

### 处理事件

```vb
Private Sub ListView1_ItemClick(ByVal Item As LvwListItem)
    MsgBox "选中: " & Item.Text
    Debug.Print "索引: " & Item.Index
End Sub

Private Sub ListView1_ColumnClick(ByVal ColumnHeader As LvwColumnHeader)
    ' 基于列点击排序
    With ListView1
        .SortKey = ColumnHeader.Index - 1
        If .SortOrder = LvwAscending Then
            .SortOrder = LvwDescending
        Else
            .SortOrder = LvwAscending
        End If
        .Sorted = True
    End With
End Sub

Private Sub ListView1_ItemCheck(ByVal Item As LvwListItem)
    Debug.Print "项目 " & Item.Text & " 的复选状态: " & Item.Checked
End Sub
```

### 添加图标

```vb
Private Sub SetupListViewWithIcons()
    ' 设置图像列表
    Set ListView1.Icons = ImageList1
    Set ListView1.SmallIcons = ImageList2
    
    ' 添加带图标的项目
    With ListView1.ListItems
        .Add(, , "文档", 1, 1)
        .Add(, , "图片", 2, 2)
        .Add(, , "音乐", 3, 3)
    End With
End Sub
```

## 常见用例

### 创建文件资源管理器界面

```vb
Private Sub SetupFileExplorer()
    With ListView1
        .View = LvwViewReport
        .FullRowSelect = True
        .GridLines = True
        
        ' 添加列
        With .ColumnHeaders
            .Add , , "名称", 200
            .Add , , "大小", 100, LvwColumnRight
            .Add , , "类型", 120
            .Add , , "修改日期", 150
        End With
    End With
End Sub

Private Sub LoadFiles(ByVal Path As String)
    Dim FSO As Object
    Dim Folder As Object
    Dim File As Object
    
    Set FSO = CreateObject("Scripting.FileSystemObject")
    Set Folder = FSO.GetFolder(Path)
    
    ListView1.ListItems.Clear
    
    For Each File In Folder.Files
        With ListView1.ListItems.Add(, , File.Name)
            .SubItems(1) = Format$(File.Size, "#,##0")
            .SubItems(2) = FSO.GetExtensionName(File.Name)
            .SubItems(3) = Format$(File.DateLastModified, "yyyy-mm-dd hh:nn")
            .Tag = File.Path
        End With
    Next File
End Sub
```

### 搜索功能

```vb
Private Sub SearchListView(SearchText As String)
    Dim Item As LvwListItem
    
    ListView1.SelectedItem = Nothing
    
    For Each Item In ListView1.ListItems
        If InStr(1, Item.Text, SearchText, vbTextCompare) > 0 Then
            Item.Selected = True
            Item.EnsureVisible
            Exit For
        End If
    Next Item
    
    If ListView1.SelectedItem Is Nothing Then
        MsgBox "找不到指定文本。", vbInformation
    End If
End Sub
```

### 获取选中项目

```vb
Private Sub GetSelectedItems()
    Dim Item As LvwListItem
    Dim SelectedCount As Long
    
    SelectedCount = 0
    
    For Each Item In ListView1.ListItems
        If Item.Selected Then
            Debug.Print "选中项目: " & Item.Text
            SelectedCount = SelectedCount + 1
        End If
    Next Item
    
    Debug.Print "共选中 " & SelectedCount & " 个项目"
End Sub
```

## 最佳实践

1. 批量添加项目时的性能优化
```vb
Private Sub AddMultipleItems()
    ListView1.Visible = False
    ListView1.ListItems.Clear
    
    Dim i As Long
    For i = 1 To 1000
        ListView1.ListItems.Add , , "项目 " & i
    Next i
    
    ListView1.Visible = True
End Sub
```

2. 错误处理
```vb
Private Sub SafeAddItem(ByVal Text As String)
    On Error GoTo ErrorHandler
    
    ListView1.ListItems.Add , , Text
    Exit Sub
    
ErrorHandler:
    Debug.Print "添加项目失败: " & Err.Description
End Sub
```

3. 内存管理
```vb
Private Sub ClearListView()
    ListView1.ListItems.Clear
    Set ListView1.Icons = Nothing
    Set ListView1.SmallIcons = Nothing
End Sub
```

## 已知问题和解决方案

1. 大数据集性能
```vb
Private Sub OptimizeForLargeDataset()
    ' 使用虚拟列表（如果支持）
    ListView1.Visible = False
    ' 添加项目...
    ListView1.Visible = True
End Sub
```

2. 列宽自动调整
```vb
Private Sub AutoFitColumns()
    Dim Col As LvwColumnHeader
    For Each Col In ListView1.ColumnHeaders
        Col.Width = -2  ' 自动调整宽度
    Next Col
End Sub
```

## 其他提示

- 使用 Tag 属性存储额外信息
- 为大项目集实现分页或虚拟化
- 使用图标增强视觉外观
- 实现键盘导航支持
- 为所有操作提供错误处理
- 在 Form_Unload 中清理资源
