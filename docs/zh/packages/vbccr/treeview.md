# TreeView 控件 (VBComCtlTreeView)

VBComCtlTreeView 控件提供了一个增强的树形视图界面，用于显示层次结构数据。与标准的 MSComCtl TreeView 控件相比，它提供了更好的性能和视觉特性。

## 属性

### 主要属性

- `Nodes`：树形视图中所有节点的集合
- `SelectedItem`：返回当前选中的节点
- `PathSeparator`：用于分隔节点层级的字符（默认为 "\"）
- `Indentation`：设置子节点的缩进量
- `LineStyle`：控制连接线的外观
- `CheckBoxes`：启用/禁用节点的复选框
- `SingleSel`：启用/禁用单选模式
- `HideSelection`：控件失去焦点时是否隐藏选择
- `LabelEdit`：启用/禁用标签编辑
- `ImageList`：关联的图像列表控件
- `HotTracking`：启用/禁用热跟踪

### 节点关系常量 (TvwNodeRelationshipConstants)

用于 `Nodes.Add` 和 `TvwNode.Move` 方法的 `Relationship` 参数：

- `TvwNodeRelationshipFirst` (0) - 作为第一个兄弟节点
- `TvwNodeRelationshipLast` (1) - 作为最后一个兄弟节点
- `TvwNodeRelationshipNext` (2) - 作为下一个兄弟节点
- `TvwNodeRelationshipPrevious` (3) - 作为前一个兄弟节点
- `TvwNodeRelationshipChild` (4) - 添加为子节点

### TvwNode 对象属性

- `Key`：节点的键值
- `Text`：节点的显示文本
- `Tag`：关联的标签数据
- `Image`：节点的图像索引
- `SelectedImage`：选中时的图像索引
- `Expanded`：节点是否展开
- `Checked`：节点复选框是否选中
- `Children`：子节点数量
- `Index`：节点的索引
- `Parent`：父节点（只读）
- `Root`：根节点（只读）
- `Child`：第一个子节点（只读）
- `Previous`：前一个兄弟节点（只读）
- `Next`：后一个兄弟节点（只读）
- `FirstSibling`：第一个兄弟节点（只读）
- `LastSibling`：最后一个兄弟节点（只读）
- `FullPath`：节点的完整路径（只读）

## 方法

### 主要方法

- `HitTest(X As Single, Y As Single) As TvwNode`：测试指定坐标处的节点
- `HitTestInsertMark(X As Single, Y As Single) As TvwNode`：测试插入标记处的节点
- `StartLabelEdit([Node As TvwNode])`：开始标签编辑
- `EndLabelEdit([Cancel As Boolean])`：结束标签编辑
- `ResetForeColors()`：重置前景颜色
- `GetVisibleCount() As Long`：返回可见节点的数量

### Nodes 集合方法

- `Add([Relative As TvwNode], [Relationship As TvwNodeRelationshipConstants], [Key As String], [Text As String], [Image], [SelectedImage]) As TvwNode`：添加新节点
- `Clear()`：清除所有节点
- `Remove(Index)`：移除指定节点

### TvwNode 对象方法

- `EnsureVisible()`：确保节点可见
- `CreateDragImage()`：创建拖拽图像
- `Move([Relative As TvwNode], [Relationship As TvwNodeRelationshipConstants])`：移动节点
- `SelectedIndex([Index As Integer])`：设置选中图像索引

## 事件

- `NodeClick(ByVal Node As TvwNode)`：点击节点时触发
- `BeforeExpand(ByVal Node As TvwNode, Cancel As Integer)`：节点展开前触发
- `AfterExpand(ByVal Node As TvwNode)`：节点展开后触发
- `BeforeCollapse(ByVal Node As TvwNode, Cancel As Integer)`：节点折叠前触发
- `AfterCollapse(ByVal Node As TvwNode)`：节点折叠后触发
- `BeforeLabelEdit(Cancel As Integer)`：标签编辑开始前触发
- `AfterLabelEdit(Cancel As Integer)`：标签编辑结束后触发
- `NodeCheck(ByVal Node As TvwNode)`：节点复选框状态改变时触发
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`
- `KeyPress(KeyAscii As Integer)`
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `DblClick()`：双击事件
- `OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`
- `OLEStartDrag(Data As DataObject, AllowedEffects As Long)`
- `OLESetData(Data As DataObject, DataFormat As Integer)`
- `OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`
- `OLECompleteDrag(Effect As Long)`
- `MouseEnter()`：鼠标进入控件时触发
- `MouseLeave()`：鼠标离开控件时触发

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    ' 添加根节点
    Dim rootNode As TvwNode
    Set rootNode = TreeView1.Nodes.Add(, , "root", "根节点", 1, 2)

    ' 添加子节点
    TreeView1.Nodes.Add rootNode, TvwNodeRelationshipChild, "child1", "子节点 1", 3, 4
    TreeView1.Nodes.Add rootNode, TvwNodeRelationshipChild, "child2", "子节点 2", 3, 4

    ' 为子节点 1 添加子节点
    TreeView1.Nodes.Add "child1", TvwNodeRelationshipChild, "grandchild1", "孙节点 1", 5, 6

    ' 展开根节点
    rootNode.Expanded = True
End Sub
```

### 处理事件

```vb
Private Sub TreeView1_NodeClick(ByVal Node As TvwNode)
    Debug.Print "选中的节点：" & Node.Text
    Debug.Print "节点键值：" & Node.Key
    Debug.Print "节点层级：" & Node.FullPath
    Debug.Print "子节点数：" & Node.Children
End Sub

Private Sub TreeView1_BeforeExpand(ByVal Node As TvwNode, Cancel As Integer)
    ' 示例：动态加载子节点
    If Node.Children = 0 And Not Node.Tag = "loaded" Then
        LoadChildNodes Node
        Node.Tag = "loaded"
    End If
End Sub

Private Sub TreeView1_NodeCheck(ByVal Node As TvwNode)
    Debug.Print "节点 " & Node.Text & " 的复选状态: " & Node.Checked
End Sub
```

### 动态节点加载

```vb
Private Sub LoadChildNodes(ParentNode As TvwNode)
    ' 示例：加载目录结构
    Dim FSO As Object
    Dim Folder As Object
    Dim SubFolder As Object

    Set FSO = CreateObject("Scripting.FileSystemObject")

    On Error Resume Next
    Set Folder = FSO.GetFolder(ParentNode.Tag)

    If Err.Number = 0 Then
        For Each SubFolder In Folder.SubFolders
            Dim newNode As TvwNode
            Set newNode = TreeView1.Nodes.Add(ParentNode, TvwNodeRelationshipChild, _
                SubFolder.Path, SubFolder.Name, 3, 4)
            newNode.Tag = SubFolder.Path

            ' 如果有子文件夹，添加占位节点
            If SubFolder.SubFolders.Count > 0 Then
                TreeView1.Nodes.Add newNode, TvwNodeRelationshipChild, "placeholder_" & _
                    SubFolder.Path, "", 0, 0
            End If
        Next SubFolder
    End If

    On Error GoTo 0
End Sub
```

### 查找节点

```vb
Private Function FindNodeByKey(ByVal Key As String) As TvwNode
    Dim Node As TvwNode

    For Each Node In TreeView1.Nodes
        If Node.Key = Key Then
            Set FindNodeByKey = Node
            Exit Function
        End If
    Next Node

    Set FindNodeByKey = Nothing
End Function

Private Function FindNodeByText(ByVal Text As String) As TvwNode
    Dim Node As TvwNode

    For Each Node In TreeView1.Nodes
        If StrComp(Node.Text, Text, vbTextCompare) = 0 Then
            Set FindNodeByText = Node
            Exit Function
        End If
    Next Node

    Set FindNodeByText = Nothing
End Function
```

## 常见用例

### 文件系统浏览器

```vb
Private Sub CreateFileSystemTree()
    Dim FSO As Object
    Dim Drive As Object

    Set FSO = CreateObject("Scripting.FileSystemObject")
    TreeView1.Nodes.Clear

    For Each Drive In FSO.Drives
        If Drive.IsReady Then
            Dim nodeKey As String
            nodeKey = "Drive_" & Drive.DriveLetter

            Dim newNode As TvwNode
            Set newNode = TreeView1.Nodes.Add(, , nodeKey, _
                Drive.DriveLetter & ":\", 1, 2)
            newNode.Tag = Drive.DriveLetter & ":\"

            ' 添加占位节点
            TreeView1.Nodes.Add newNode, TvwNodeRelationshipChild, _
                "placeholder_" & nodeKey, "", 0, 0
        End If
    Next Drive
End Sub
```

### 组织架构图

```vb
Private Sub CreateOrgChart()
    Dim ceo As TvwNode
    Set ceo = TreeView1.Nodes.Add(, , "CEO", "首席执行官", 1, 2)

    ' 添加部门主管
    TreeView1.Nodes.Add ceo, TvwNodeRelationshipChild, "CFO", "首席财务官", 3, 4
    TreeView1.Nodes.Add ceo, TvwNodeRelationshipChild, "CTO", "首席技术官", 3, 4
    TreeView1.Nodes.Add ceo, TvwNodeRelationshipChild, "COO", "首席运营官", 3, 4

    ' 添加团队成员
    TreeView1.Nodes.Add "CTO", TvwNodeRelationshipChild, "Dev1", "开发团队负责人", 5, 6
    TreeView1.Nodes.Add "CTO", TvwNodeRelationshipChild, "Dev2", "测试团队负责人", 5, 6

    ' 展开根节点
    ceo.Expanded = True
End Sub
```

### 展开和折叠节点

```vb
Private Sub ExpandNode(ByRef Node As TvwNode)
    Node.Expanded = True
End Sub

Private Sub CollapseNode(ByRef Node As TvwNode)
    Node.Expanded = False
End Sub

Private Sub ExpandAll()
    Dim Node As TvwNode
    For Each Node In TreeView1.Nodes
        Node.Expanded = True
    Next Node
End Sub

Private Sub CollapseAll()
    Dim Node As TvwNode
    For Each Node In TreeView1.Nodes
        Node.Expanded = False
    Next Node
End Sub
```

### 节点操作

```vb
Private Sub RenameNode(ByVal Key As String, ByVal NewText As String)
    Dim Node As TvwNode
    Set Node = FindNodeByKey(Key)

    If Not Node Is Nothing Then
        TreeView1.StartLabelEdit Node
        ' 等待用户输入或直接修改
        Node.Text = NewText
    End If
End Sub

Private Sub DeleteNode(ByVal Key As String)
    Dim Node As TvwNode
    Set Node = FindNodeByKey(Key)

    If Not Node Is Nothing Then
        TreeView1.Nodes.Remove Node.Index
    End If
End Sub
```

## 最佳实践

1. 内存管理
```vb
Private Sub ClearTree()
    TreeView1.Nodes.Clear
    Set TreeView1.ImageList = Nothing
End Sub
```

2. 性能优化
```vb
Private Sub OptimizedNodeAddition()
    TreeView1.Visible = False

    ' 添加大量节点...

    TreeView1.Visible = True
End Sub
```

3. 错误处理
```vb
Private Sub SafeNodeOperation(NodeKey As String)
    On Error Resume Next
    Dim Node As TvwNode
    Set Node = TreeView1.Nodes(NodeKey)

    If Err.Number = 0 Then
        ' 节点存在，执行操作
        Node.EnsureVisible
        Node.Selected = True
    Else
        ' 处理节点未找到的情况
        Debug.Print "未找到节点：" & NodeKey
    End If
    On Error GoTo 0
End Sub
```

4. 递归删除节点
```vb
Private Sub DeleteNodeRecursive(ByRef Node As TvwNode)
    ' 递归删除所有子节点
    While Node.Children > 0
        Dim Child As TvwNode
        Set Child = Node.Child
        DeleteNodeRecursive Child
    Wend

    ' 删除节点本身
    TreeView1.Nodes.Remove Node.Index
End Sub
```

## 其他提示

- 处理大量节点时，建议使用批量添加方式
- 使用 Tag 属性存储额外的节点信息
- 定期清理未使用的节点以优化内存使用
- 适当使用图标列表来增强视觉效果
- 考虑使用动态加载处理超大数据集
- 在 Form_Unload 中清理资源
- 使用 EnsureVisible 确保选中节点可见
- 实现适当的错误恢复机制
