# TreeView Control (VBCCRTreeView)

The VBCCRTreeView control provides an enhanced tree view interface for displaying hierarchical data structures. It offers improved functionality over the standard MSComCtl TreeView control with better performance and visual features.

## Properties

### Key Properties

- `Nodes` (TvwNodes): Collection of all nodes in TreeView
- `SelectedItem` (TvwNode): Returns currently selected node
- `PathSeparator` (String): Character used to separate node levels in paths
- `Indentation` (Single): Sets the indentation distance for child nodes
- `LineStyle` (TvwLineStyleConstants): Controls the appearance of connecting lines
- `CheckBoxes` (Boolean): Enables/disables checkboxes for nodes
- `SingleSel` (Boolean): Enables/disables single selection mode
- `HideSelection` (Boolean): Controls selection visibility when control loses focus
- `LabelEdit` (TvwLabelEditConstants): Label editing mode
- `Scroll` (Boolean): Whether to allow scrolling
- `Enabled` (Boolean): Whether control is enabled
- `Font` (StdFont): Font properties

### TvwNode Properties

- `Key` (String): Unique identifier for the node
- `Text` (String): Display text
- `Tag` (String): Additional data associated with the node
- `Index` (Long): Position in the Nodes collection
- `Image` (Variant): Image index or key
- `SelectedImage` (Variant): Selected image index or key
- `Expanded` (Boolean): Whether the node is expanded
- `Children` (Long): Number of child nodes (read-only)
- `Child` (TvwNode): First child node (read-only)
- `Root` (TvwNode): Root node (read-only)
- `Parent` (TvwNode): Parent node (read-only)
- `Previous` (TvwNode): Previous sibling node (read-only)
- `Next` (TvwNode): Next sibling node (read-only)
- `FirstSibling` (TvwNode): First sibling node (read-only)
- `LastSibling` (TvwNode): Last sibling node (read-only)
- `Checked` (Boolean): Checkbox state (when CheckBoxes is enabled)

### Node Relationship Constants (TvwNodeRelationshipConstants)

Used for `Nodes.Add` and `TvwNode.Move` methods' `Relationship` parameter:

- `TvwNodeRelationshipFirst` (0) - As first sibling node
- `TvwNodeRelationshipLast` (1) - As last sibling node
- `TvwNodeRelationshipNext` (2) - As next sibling node
- `TvwNodeRelationshipPrevious` (3) - As previous sibling node
- `TvwNodeRelationshipChild` (4) - Add as child node

## Methods

### Control Methods

- `Refresh()`: Refreshes the display
- `HitTest(X As Single, Y As Single) As TvwNode`: Tests if a point is over a node
- `HitTestInsertMark(X As Single, Y As Single, [After As Boolean]) As Long`: Tests insert mark position
- `GetVisibleCount() As Long`: Gets the number of visible nodes
- `StartLabelEdit()`: Starts label editing for the selected node
- `EndLabelEdit([Discard As Boolean])`: Ends label editing
- `ResetForeColors()`: Resets all node foreground colors
- `Drag([Action])`: Drag and drop operation
- `SetFocus()`: Sets focus
- `OLEDrag()`: OLE drag and drop
- `ZOrder([Position])`: Sets Z order

### TvwNodes Collection Methods

- `Add([Relative As Variant], [Relationship As TvwNodeRelationshipConstants], [Key As String], [Text As String], [Image As Variant], [SelectedImage As Variant]) As TvwNode`: Adds a new node
- `Remove(Index)`: Removes a node
- `Clear()`: Clears all nodes
- `Exists(Index) As Boolean`: Checks if a node exists
- `Item(Index) As TvwNode`: Gets a node

### TvwNode Methods

- `EnsureVisible()`: Ensures the node is visible by expanding parent nodes if necessary
- `CreateDragImage() As IPictureDisp`: Creates a drag image for the node
- `Move([Relative As Variant], [Relationship As TvwNodeRelationshipConstants])`: Moves the node to a new location
- `SelectedIndex() As Long`: Gets the selected index

## Events

- `Click()`: Click event
- `DblClick()`: Double-click event
- `NodeClick(Node As TvwNode, Button As Integer)`: Fires when a node is clicked
- `NodeDblClick(Node As TvwNode, Button As Integer)`: Fires when a node is double-clicked
- `NodeCheck(Node As TvwNode)`: Fires when a node's checkbox state changes
- `NodeBeforeCheck(Node As TvwNode, ByRef Cancel As Boolean)`: Fires before a node's checkbox changes
- `NodeSelect(Node As TvwNode)`: Fires when a node is selected
- `NodeBeforeSelect(Node As TvwNode, ByRef Cancel As Boolean)`: Fires before a node is selected
- `NodeRangeSelect(Node As TvwNode, ByRef Cancel As Boolean)`: Fires during range selection
- `NodeDrag(Node As TvwNode, Button As Integer)`: Fires when a node is being dragged
- `BeforeExpand(Node As TvwNode, ByRef Cancel As Boolean)`: Fires before a node expands
- `Expand(Node As TvwNode)`: Fires after a node expands
- `BeforeCollapse(Node As TvwNode, ByRef Cancel As Boolean)`: Fires before a node collapses
- `Collapse(Node As TvwNode)`: Fires after a node collapses
- `BeforeLabelEdit(ByRef Cancel As Boolean)`: Fires before label editing begins
- `AfterLabelEdit(ByRef Cancel As Boolean, NewString As String)`: Fires after label editing ends
- `KeyDown(KeyCode As Integer, Shift As Integer)`: Key down
- `KeyPress(KeyChar As Integer)`: Key press
- `KeyUp(KeyCode As Integer, Shift As Integer)`: Key up
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Mouse down
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Mouse move
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Mouse up

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Add root nodes
    With TreeView1.Nodes
        Dim rootNode As TvwNode
        Set rootNode = .Add(, , "root", "Root Node")
        
        ' Add child nodes
        .Add rootNode, TvwNodeRelationshipChild, "child1", "Child Node 1"
        .Add rootNode, TvwNodeRelationshipChild, "child2", "Child Node 2"
        
        ' Add a grandchild
        .Add TreeView1.Nodes("child1"), TvwNodeRelationshipChild, "grandchild1", "Grandchild Node 1"
    End With
    
    ' Expand root node
    TreeView1.Nodes("root").Expanded = True
End Sub
```

### Handling Events

```vb
Private Sub TreeView1_NodeClick(ByVal Node As TvwNode, ByVal Button As Integer)
    Debug.Print "Selected Node: " & Node.Text
    Debug.Print "Node Key: " & Node.Key
End Sub

Private Sub TreeView1_BeforeExpand(ByVal Node As TvwNode, ByRef Cancel As Boolean)
    ' Dynamically load child nodes
    If Node.Children = 0 Then
        LoadChildNodes Node
    End If
End Sub
```

### Adding Nodes with Images

```vb
Private Sub AddNodesWithImages()
    With TreeView1.Nodes
        Dim root As TvwNode
        Set root = .Add(, , "root1", "Documents", 1, 2)
        
        Dim child1 As TvwNode
        Set child1 = .Add(root, TvwNodeRelationshipChild, "doc1", "Word.doc", 3, 4)
        
        Dim child2 As TvwNode
        Set child2 = .Add(root, TvwNodeRelationshipChild, "doc2", "Excel.xls", 5, 6)
    End With
End Sub
```

### Finding a Node

```vb
Private Sub FindNodeDemo()
    Dim node As TvwNode
    Set node = FindNodeByKey("child1")
    
    If Not node Is Nothing Then
        node.Selected = True
        node.EnsureVisible
    End If
End Sub

Private Function FindNodeByKey(Key As String) As TvwNode
    Dim i As Long
    For i = 1 To TreeView1.Nodes.Count
        If TreeView1.Nodes(i).Key = Key Then
            Set FindNodeByKey = TreeView1.Nodes(i)
            Exit Function
        End If
    Next i
    Set FindNodeByKey = Nothing
End Function
```

### Removing a Node

```vb
Private Sub RemoveNodeDemo(Key As String)
    TreeView1.Nodes.Remove Key
End Sub

Private Sub RemoveSelectedNode()
    If Not TreeView1.SelectedItem Is Nothing Then
        TreeView1.Nodes.Remove TreeView1.SelectedItem.Index
    End If
End Sub
```

### Label Editing

```vb
Private Sub TreeView1_BeforeLabelEdit(ByRef Cancel As Boolean)
    ' Prevent editing the root node
    If TreeView1.SelectedItem.Key = "root" Then
        Cancel = True
        MsgBox "Cannot edit the root node"
    End If
End Sub

Private Sub TreeView1_AfterLabelEdit(ByRef Cancel As Boolean, ByVal NewString As String)
    ' Validate the new label
    If Len(NewString) = 0 Then
        Cancel = True
        MsgBox "Label cannot be empty"
    End If
End Sub
```

### Hit Testing

```vb
Private Sub TreeView1_MouseUp(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)
    Dim node As TvwNode
    Set node = TreeView1.HitTest(X, Y)
    
    If Not node Is Nothing Then
        MsgBox "Clicked on: " & node.Text
    End If
End Sub
```

### Checkboxes

```vb
Private Sub TreeView1_NodeCheck(ByVal Node As TvwNode)
    Debug.Print "Node " & Node.Text & " checked state: " & Node.Checked
End Sub

Private Sub SelectAllChildren(ByVal ParentNode As TvwNode)
    Dim child As TvwNode
    Set child = ParentNode.Child
    
    Do While Not child Is Nothing
        child.Checked = True
        SelectAllChildren child
        Set child = child.Next
    Loop
End Sub
```

### Expanding/Collapsing All

```vb
Private Sub ExpandAll()
    Dim i As Long
    For i = 1 To TreeView1.Nodes.Count
        TreeView1.Nodes(i).Expanded = True
    Next i
End Sub

Private Sub CollapseAll()
    Dim i As Long
    For i = 1 To TreeView1.Nodes.Count
        TreeView1.Nodes(i).Expanded = False
    Next i
End Sub
```

### Getting the Full Path

```vb
Private Function GetNodePath(ByVal Node As TvwNode) As String
    Dim path As String
    path = Node.Text
    
    Dim current As TvwNode
    Set current = Node.Parent
    
    Do While Not current Is Nothing
        path = current.Text & TreeView1.PathSeparator & path
        Set current = current.Parent
    Loop
    
    GetNodePath = path
End Function
```

### Moving a Node

```vb
Private Sub MoveNodeDemo()
    Dim sourceNode As TvwNode
    Dim targetParent As TvwNode
    
    If Not TreeView1.SelectedItem Is Nothing Then
        Set sourceNode = TreeView1.SelectedItem
        
        ' Move to root level
        sourceNode.Move , TvwNodeRelationshipFirst
        
        ' Or move to another parent
        ' sourceNode.Move targetParent, TvwNodeRelationshipChild
    End If
End Sub
```

## Common Use Cases

### File System Browser

```vb
Private Sub LoadFileSystem()
    Dim rootPath As String
    rootPath = "C:\"
    
    ' Add drive nodes
    With TreeView1.Nodes
        .Add , , "C", "C:\", 1, 2
        .Add , , "D", "D:\", 3, 4
    End With
    
    TreeView1.CheckBoxes = True
End Sub
```

### Organization Chart

```vb
Private Sub CreateOrgChart()
    With TreeView1.Nodes
        ' CEO
        Dim ceo As TvwNode
        Set ceo = .Add(, , "CEO", "John Doe", 1, 2)
        
        ' Managers
        Dim mgr1 As TvwNode
        Set mgr1 = .Add(ceo, TvwNodeRelationshipChild, "MGR1", "Alice Smith", 3, 4)
        
        Dim mgr2 As TvwNode
        Set mgr2 = .Add(ceo, TvwNodeRelationshipChild, "MGR2", "Bob Johnson", 3, 4)
        
        ' Employees under Manager 1
        .Add mgr1, TvwNodeRelationshipChild, "EMP1", "Carol White"
        .Add mgr1, TvwNodeRelationshipChild, "EMP2", "David Brown"
    End With
    
    ceo.Expanded = True
End Sub
```

## Tips

1. **Keys**: Always use keys to identify nodes programmatically instead of relying on indices
2. **Images**: Set up ImageList controls for different node states (normal, selected, expanded)
3. **EnsureVisible**: Call `EnsureVisible` on a node to make sure it's visible to the user
4. **Dynamic Loading**: Use `BeforeExpand` event to dynamically load child nodes for better performance
5. **CheckBoxes**: Enable `CheckBoxes` property to allow multi-selection via checkboxes
6. **PathSeparator**: Customize `PathSeparator` if you need specific path formats
