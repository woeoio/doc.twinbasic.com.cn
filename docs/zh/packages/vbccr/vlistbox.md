# VListBox 控件使用文档

## 概述

`VListBox` 是一个**虚拟列表框控件**，适用于显示大量数据（如数十万条记录）。它采用"无数据"模式（No-Data），只在需要显示时才通过事件向应用程序请求数据，因此内存占用极低。

**适用场景**：需要显示大量数据且内存敏感的情况，如数据库记录列表、日志文件查看器等。

---

## 核心概念

与传统 `ListBox` 不同，`VListBox` **不内部存储数据**。你需要：

1. 在外部维护数据数组
2. 设置 `ListCount` 属性告诉控件总共有多少项
3. 处理 `GetVirtualItem` 事件来提供指定索引的文本

---

## 基础用法

### 1. 声明数据数组

```vb
Private VirtualItems(0 To 99999) As String  ' 零索引数组
```

### 2. 初始化并设置项目数

```vb
Private Sub Form_Load()
    Dim i As Long
    For i = 0 To 99999
        VirtualItems(i) = "item" & i
    Next i

    ' 告诉控件总项目数
    VListBox1.ListCount = 100000
End Sub
```

### 3. 处理 GetVirtualItem 事件（必需）

当控件需要显示某一项时，会触发此事件请求文本：

```vb
Private Sub VListBox1_GetVirtualItem(ByVal Item As Long, Text As String)
    Text = VirtualItems(Item)  ' Item 是零索引
End Sub
```

---

## 完整示例

```vb
Option Explicit

' 数据存储（零索引）
Private VirtualItems(0 To 99999) As String

' 窗体加载时初始化数据
Private Sub Form_Load()
    Dim i As Long
    For i = 0 To 99999
        VirtualItems(i) = "Item " & Format(i, "00000")
    Next i

    VListBox1.ListCount = 100000
End Sub

' 【必需】提供指定索引的文本
Private Sub VListBox1_GetVirtualItem(ByVal Item As Long, Text As String)
    Text = VirtualItems(Item)
End Sub

' 【可选】实现查找功能（支持 FindItem 方法）
Private Sub VListBox1_FindVirtualItem(ByVal StartIndex As Long, _
        ByVal SearchText As String, ByVal Partial As Boolean, _
        FoundIndex As Long)

    Dim i As Long
    FoundIndex = -1  ' 未找到时返回 -1

    ' 从 StartIndex+1 开始向后查找
    If Partial Then  ' 前缀匹配
        For i = StartIndex + 1 To VListBox1.ListCount - 1
            If StrComp(Left$(VirtualItems(i), Len(SearchText)), _
                       SearchText, vbTextCompare) = 0 Then
                FoundIndex = i
                Exit For
            End If
        Next i
        ' 回绕查找
        If FoundIndex = -1 And StartIndex > 0 Then
            For i = 0 To StartIndex - 1
                If StrComp(Left$(VirtualItems(i), Len(SearchText)), _
                           SearchText, vbTextCompare) = 0 Then
                    FoundIndex = i
                    Exit For
                End If
            Next i
        End If
    Else  ' 完全匹配
        For i = StartIndex + 1 To VListBox1.ListCount - 1
            If StrComp(VirtualItems(i), SearchText, vbTextCompare) = 0 Then
                FoundIndex = i
                Exit For
            End If
        Next i
    End If
End Sub

' 【可选】处理增量搜索（用户快速输入字符时）
Private Sub VListBox1_IncrementalSearch(ByVal SearchString As String, _
        ByVal StartIndex As Long, FoundIndex As Long)
    ' 重定向到 FindVirtualItem
    FoundIndex = VListBox1.FindItem(Right$(SearchString, 1), StartIndex, True)
End Sub

' 【可选】处理点击事件
Private Sub VListBox1_Click()
    Debug.Print "Selected: " & VListBox1.ListIndex & " - " & VListBox1.Text
End Sub
```

---

## 主要属性

| 属性               | 类型       | 说明                                                  |
| ------------------ | ---------- | ----------------------------------------------------- |
| `ListCount`        | Long       | **关键属性**：设置/获取项目总数                       |
| `List(Index)`      | String     | 获取指定索引的文本（只读，触发 GetVirtualItem）       |
| `ListIndex`        | Long       | 当前选中项索引（-1 表示无选中）                       |
| `Text`             | String     | 当前选中项的文本内容                                  |
| `Selected(Index)`  | Boolean    | 获取/设置某一项的选中状态                             |
| `SelCount`         | Long       | 返回选中项数量                                        |
| `SelectedIndices`  | Collection | 返回选中项索引集合                                    |
| `TopIndex`         | Long       | 最顶部可见项的索引                                    |
| `MultiSelect`      | Integer    | 多选模式：`vbMultiSelectNone` / `Simple` / `Extended` |
| `MultiColumn`      | Boolean    | 是否多列显示                                          |
| `HorizontalExtent` | Single     | 水平滚动范围（像素）                                  |
| `IntegralHeight`   | Boolean    | 是否只显示完整项目（设计时只读）                      |
| `UseTabStops`      | Boolean    | 是否支持制表符对齐                                    |
| `ItemHeight`       | Single     | 项目高度                                              |
| `DrawMode`         | Enum       | 绘制模式：`VlbDrawModeNormal` / `OwnerDrawFixed`      |
| `ScrollTrack`      | Boolean    | 滚动时是否实时更新内容                                |
| `DisableNoScroll`  | Boolean    | 滚动条不需要时禁用还是隐藏                            |

### 外观属性

| 属性                      | 说明             |
| ------------------------- | ---------------- |
| `BackColor` / `ForeColor` | 背景/前景色      |
| `Font`                    | 字体             |
| `BorderStyle`             | 边框样式         |
| `VisualStyles`            | 是否启用视觉样式 |
| `RightToLeft`             | 是否从右到左显示 |

---

## 主要方法

| 方法                                 | 说明                         |
| ------------------------------------ | ---------------------------- |
| `FindItem(Text, [Index], [Partial])` | 查找项目，返回索引或 -1      |
| `SelectItem(Text, [Index])`          | 查找并选中项目               |
| `SetSelRange(Start, End)`            | 设置选中范围（扩展多选模式） |
| `HitTest(X, Y)`                      | 返回指定坐标处的项目索引     |
| `HitTestInsertMark(X, Y, After)`     | 返回插入标记位置             |
| `GetIdealHorizontalExtent()`         | 获取理想的水平滚动宽度       |
| `SetColumnWidth(Value)`              | 设置多列模式下的列宽         |
| `ItemsPerColumn()`                   | 返回每列可容纳的项目数       |
| `Refresh()`                          | 强制重绘控件                 |
| `OLEDrag()`                          | 启动 OLE 拖拽操作            |

---

## 事件列表

### 核心事件（必须处理）

| 事件              | 参数                                            | 说明                   |
| ----------------- | ----------------------------------------------- | ---------------------- |
| `GetVirtualItem`  | `(Item As Long, Text As String)`                | 控件请求指定索引的文本 |
| `FindVirtualItem` | `(StartIndex, SearchText, Partial, FoundIndex)` | 查找项目时触发         |

### 可选事件

| 事件                                              | 说明                           |
| ------------------------------------------------- | ------------------------------ |
| `IncrementalSearch`                               | 用户输入字符进行增量搜索时     |
| `Click` / `DblClick`                              | 单击/双击                      |
| `Scroll`                                          | 滚动位置改变时                 |
| `KeyDown` / `KeyUp` / `KeyPress`                  | 键盘事件                       |
| `MouseDown` / `MouseUp` / `MouseMove`             | 鼠标事件                       |
| `MouseEnter` / `MouseLeave`                       | 鼠标进入/离开控件              |
| `ContextMenu(X, Y)`                               | 右键菜单请求                   |
| `ItemDraw`                                        | 自定义绘制项（OwnerDraw 模式） |
| `OLECompleteDrag` / `OLEDragDrop` / `OLEDragOver` | OLE 拖拽事件                   |

---

## 与标准 ListBox 的区别

| 特性            | VListBox                    | 标准 ListBox             |
| --------------- | --------------------------- | ------------------------ |
| **数据存储**    | 外部管理（通过事件获取）    | 内部存储                 |
| **大数据性能**  | 优秀（内存占用低）          | 差（占用大量内存）       |
| **添加/删除项** | 修改 `ListCount` 和外部数组 | `AddItem` / `RemoveItem` |
| **必须实现**    | `GetVirtualItem` 事件       | 无                       |
| **查找功能**    | 需实现 `FindVirtualItem`    | 内置 `FindString`        |

---

## 高级用法

### 自定义绘制（OwnerDraw）

```vb
' 设置绘制模式
VListBox1.DrawMode = VlbDrawModeOwnerDrawFixed

' 处理绘制事件
Private Sub VListBox1_ItemDraw(ByVal Item As Long, ByVal ItemAction As Long, _
        ByVal ItemState As Long, ByVal hDC As Long, _
        ByVal Left As Long, ByVal Top As Long, _
        ByVal Right As Long, ByVal Bottom As Long)

    ' 自定义绘制代码
    ' ItemState: ODS_SELECTED, ODS_DISABLED, ODS_FOCUS 等
End Sub
```

### 多列模式

```vb
VListBox1.MultiColumn = True
VListBox1.SetColumnWidth 150  ' 每列宽度 150 像素
```

### 制表位对齐

```vb
VListBox1.UseTabStops = True
' 使用 vbTab 在文本中插入制表符
VirtualItems(i) = "Column1" & vbTab & "Column2" & vbTab & "Column3"
```

### 插入标记（拖拽排序）

```vb
' 显示插入标记
VListBox1.InsertMark(After) = TargetIndex
VListBox1.InsertMarkColor = vbRed

' 通过 HitTestInsertMark 获取插入位置
Dim After As Boolean
Dim Index As Long = VListBox1.HitTestInsertMark(X, Y, After)
```

---

## 注意事项

1. **索引从 0 开始**：`ListCount = 100` 表示索引范围是 0-99
2. **必须处理 GetVirtualItem**：否则控件无法显示任何内容
3. **数据同步**：修改外部数组后，调用 `Refresh()` 更新显示
4. **线程安全**：事件在主线程触发，确保数据访问线程安全
5. **查找性能**：大数据量时建议使用二分查找或索引优化

---

## 参考文件

- 控件源码：`Builds/VListBox/VListBox.ctl`
- 示例代码：`VirtualControlsForm.frm`
