# ImageCombo 控件 (VBCCRImageCombo)

VBCCRImageCombo 控件是一个带有图像的组合框控件，它可以在每个列表项的旁边显示一个图像。这个控件通常与 ImageList 控件配合使用，用于创建更直观的下拉列表。

## 属性

### 基本属性

- `Text` - 当前选择项的文本
- `BackColor` - 背景颜色
- `ForeColor` - 前景颜色
- `Enabled` - 是否启用控件
- `Font` - 字体设置
- `Visible` - 是否可见
- `Locked` - 是否锁定
- `ImageList` - 关联的图像列表控件

### 集合属性

- `ComboItems` - 组合框项目集合，包含所有 ImcComboItem 对象

### ImcComboItem 对象属性

- `Key` - 项目的键值
- `Text` - 项目的文本
- `Tag` - 关联的标签数据
- `Image` - 项目的图像索引
- `SelImage` - 选中时的图像索引
- `Indentation` - 缩进级别
- `Selected` - 是否选中
- `Data` - 项目关联的数值数据
- `ImageIndex` - 图像索引
- `SelImageIndex` - 选中图像索引

## 方法

### 主要方法

- `Refresh()`: 刷新控件
- `SetFocus()`: 设置焦点

### ComboItems 集合方法

- `Add([Index], [Key], [Text], [Image], [SelImage]) As ImcComboItem`: 添加项目
- `Clear()`: 清除所有项目
- `Remove(Index)`: 移除指定项目
- `Item(Index)`: 获取指定项目
- `Count`: 获取项目数量

## 事件

- `Change` - 选择改变时触发
- `Click` - 点击控件时触发
- `DblClick` - 双击控件时触发
- `DropDown` - 下拉列表时触发
- `GotFocus` - 获得焦点时触发
- `LostFocus` - 失去焦点时触发
- `KeyDown` - 按下键盘时触发
- `KeyPress` - 键盘按键时触发
- `KeyUp` - 释放键盘时触发
- `MouseDown` - 鼠标按下时触发
- `MouseMove` - 鼠标移动时触发
- `MouseUp` - 鼠标释放时触发
- `MouseEnter()` - 鼠标进入控件时触发
- `MouseLeave()` - 鼠标离开控件时触发

## 代码示例

### 基本用法

```vb
Private Sub InitImageCombo()
    ' 设置图像列表
    Set ImageCombo1.ImageList = ImageList1
    
    ' 添加项目
    With ImageCombo1.ComboItems
        .Add , "DOC", "文档", 1, 1
        .Add , "IMG", "图片", 2, 2
        .Add , "MUS", "音乐", 3, 3
        .Add , "VID", "视频", 4, 4
    End With
    
    ' 设置默认选择
    ImageCombo1.ComboItems(1).Selected = True
End Sub
```

### 带缩进的层次列表

```vb
Private Sub SetupHierarchicalList()
    With ImageCombo1.ComboItems
        ' 添加根项目
        .Add , "ROOT", "根目录", 1, 1
        
        ' 添加子项目（使用缩进）
        .Add , "SUB1", "子目录 1", 2, 2
        .Item("SUB1").Indentation = 1
        
        .Add , "SUB2", "子目录 2", 2, 2
        .Item("SUB2").Indentation = 1
        
        ' 添加孙项目
        .Add , "SUB1_1", "孙目录 1", 3, 3
        .Item("SUB1_1").Indentation = 2
    End With
End Sub
```

### 获取选中项信息

```vb
Private Sub ImageCombo1_Click()
    Dim Item As ImcComboItem
    Set Item = ImageCombo1.ComboItems(1)  ' 获取选中项
    
    If Not Item Is Nothing Then
        Debug.Print "文本: " & Item.Text
        Debug.Print "键值: " & Item.Key
        Debug.Print "数据: " & Item.Data
        Debug.Print "标签: " & Item.Tag
        Debug.Print "缩进: " & Item.Indentation
    End If
End Sub
```

### 动态添加和删除项目

```vb
Private Sub AddNewItem()
    Dim NewItem As ImcComboItem
    Set NewItem = ImageCombo1.ComboItems.Add(, "NEW_" & Time, "新项目 " & Time, 5, 6)
    
    ' 设置附加属性
    NewItem.Tag = "这是新添加的项目"
    NewItem.Data = 12345
    NewItem.Selected = True
End Sub

Private Sub RemoveSelectedItem()
    Dim Item As ImcComboItem
    Set Item = ImageCombo1.ComboItems(1)
    
    If Not Item Is Nothing Then
        ImageCombo1.ComboItems.Remove Item.Index
    End If
End Sub
```

### 查找项目

```vb
Private Function FindItemByKey(ByVal Key As String) As ImcComboItem
    Dim Item As ImcComboItem
    
    For Each Item In ImageCombo1.ComboItems
        If Item.Key = Key Then
            Set FindItemByKey = Item
            Exit Function
        End If
    Next Item
    
    Set FindItemByKey = Nothing
End Function

Private Function FindItemByText(ByVal Text As String) As ImcComboItem
    Dim Item As ImcComboItem
    
    For Each Item In ImageCombo1.ComboItems
        If StrComp(Item.Text, Text, vbTextCompare) = 0 Then
            Set FindItemByText = Item
            Exit Function
        End If
    Next Item
    
    Set FindItemByText = Nothing
End Function
```

## 常见用例

### 文件类型选择器

```vb
Private Sub SetupFileTypeSelector()
    With ImageCombo1.ComboItems
        .Add , "ALL", "所有文件", 1, 1
        .Add , "TXT", "文本文件 (*.txt)", 2, 2
        .Add , "DOC", "Word 文档 (*.doc)", 3, 3
        .Add , "XLS", "Excel 文档 (*.xls)", 4, 4
        .Add , "IMG", "图片文件 (*.jpg;*.png;*.gif)", 5, 5
    End With
    
    ImageCombo1.ComboItems(1).Selected = True
End Sub

Private Sub GetSelectedFileType()
    Dim Item As ImcComboItem
    Set Item = ImageCombo1.ComboItems(1)
    
    If Not Item Is Nothing Then
        ' 根据 Key 获取文件类型
        Select Case Item.Key
            Case "TXT"
                FilterFiles "*.txt"
            Case "DOC"
                FilterFiles "*.doc"
            Case "XLS"
                FilterFiles "*.xls"
            Case "IMG"
                FilterFiles "*.jpg;*.png;*.gif"
            Case Else
                FilterFiles "*.*"
        End Select
    End If
End Sub
```

### 颜色选择器

```vb
Private Sub SetupColorSelector()
    With ImageCombo1.ComboItems
        .Add , "RED", "红色", 1, 1
        .Item("RED").Data = vbRed
        
        .Add , "GREEN", "绿色", 2, 2
        .Item("GREEN").Data = vbGreen
        
        .Add , "BLUE", "蓝色", 3, 3
        .Item("BLUE").Data = vbBlue
        
        .Add , "YELLOW", "黄色", 4, 4
        .Item("YELLOW").Data = vbYellow
        
        .Add , "BLACK", "黑色", 5, 5
        .Item("BLACK").Data = vbBlack
        
        .Add , "WHITE", "白色", 6, 6
        .Item("WHITE").Data = vbWhite
    End With
End Sub

Private Sub ImageCombo1_Click()
    Dim Item As ImcComboItem
    Set Item = ImageCombo1.ComboItems(1)
    
    If Not Item Is Nothing Then
        ' 应用选中的颜色
        Shape1.BackColor = Item.Data
        Label1.Caption = "选中颜色: " & Item.Text
    End If
End Sub
```

### 状态选择器

```vb
Private Enum TaskStatus
    tsPending = 1
    tsInProgress = 2
    tsCompleted = 3
    tsCancelled = 4
End Enum

Private Sub SetupStatusSelector()
    With ImageCombo1.ComboItems
        .Add , "PENDING", "待处理", 1, 1
        .Item("PENDING").Data = tsPending
        
        .Add , "INPROGRESS", "进行中", 2, 2
        .Item("INPROGRESS").Data = tsInProgress
        
        .Add , "COMPLETED", "已完成", 3, 3
        .Item("COMPLETED").Data = tsCompleted
        
        .Add , "CANCELLED", "已取消", 4, 4
        .Item("CANCELLED").Data = tsCancelled
    End With
End Sub

Private Sub SetTaskStatus(ByVal Status As TaskStatus)
    Dim Item As ImcComboItem
    
    For Each Item In ImageCombo1.ComboItems
        If Item.Data = Status Then
            Item.Selected = True
            Exit For
        End If
    Next Item
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Function SafeAddItem(ByVal Key As String, ByVal Text As String, ByVal ImageIndex As Long) As Boolean
    On Error GoTo ErrorHandler
    
    ' 检查是否已存在相同键值
    If Not FindItemByKey(Key) Is Nothing Then
        Debug.Print "项目键值已存在: " & Key
        SafeAddItem = False
        Exit Function
    End If
    
    ImageCombo1.ComboItems.Add , Key, Text, ImageIndex, ImageIndex
    SafeAddItem = True
    Exit Function
    
ErrorHandler:
    Debug.Print "添加项目失败: " & Err.Description
    SafeAddItem = False
End Function
```

2. 数据验证
```vb
Private Sub ValidateSelection()
    Dim Item As ImcComboItem
    Set Item = ImageCombo1.ComboItems(1)
    
    If Item Is Nothing Then
        MsgBox "请先选择一项", vbExclamation
        ImageCombo1.SetFocus
        Exit Sub
    End If
    
    ' 验证数据
    If Item.Data < 0 Then
        MsgBox "无效的数据值", vbExclamation
        Exit Sub
    End If
    
    ' 处理选中项
    ProcessSelectedItem Item
End Sub
```

3. 状态保存和恢复
```vb
Private Sub SaveImageComboState()
    Dim Item As ImcComboItem
    Set Item = ImageCombo1.ComboItems(1)
    
    If Not Item Is Nothing Then
        SaveSetting App.Title, "ImageCombo", "SelectedKey", Item.Key
    End If
End Sub

Private Sub RestoreImageComboState()
    Dim SavedKey As String
    SavedKey = GetSetting(App.Title, "ImageCombo", "SelectedKey", "")
    
    If Len(SavedKey) > 0 Then
        Dim Item As ImcComboItem
        Set Item = FindItemByKey(SavedKey)
        
        If Not Item Is Nothing Then
            Item.Selected = True
        End If
    End If
End Sub
```

## 其他提示

- 始终为项目设置唯一的 Key 以便于查找
- 使用 Tag 属性存储额外的字符串信息
- 使用 Data 属性存储数值数据
- 合理使用缩进创建层次结构
- 设置适当的 ImageList 以提供视觉反馈
- 在 Form_Unload 中保存选择状态
