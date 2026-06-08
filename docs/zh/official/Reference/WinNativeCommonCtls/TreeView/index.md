---
title: TreeView
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/TreeView/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fea3721f-598e-4770-9534-d6fa4e917372'
  PropagateID: 'fea3721f-598e-4770-9534-d6fa4e917372'
  ReservedCode1: '34efb703-5835-42c3-9d58-46d5197eb26f'
  ReservedCode2: '34efb703-5835-42c3-9d58-46d5197eb26f'
---

# TreeView 类

**TreeView** 是以树形组织的 [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node) 对象的层次显示。每个节点可以展开或折叠，可选具有复选框，并引用关联 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/) 中的图标。节点集合通过 [**Nodes**](#nodes) 访问；每个 [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node) 拥有自己的同级、父级和子级导航属性。

```vb
Private Sub Form_Load()
    Set TreeView1.ImageList = ImageList1
    TreeView1.Style = tvwTreelinesPlusMinusPictureText

    Dim root As Node
    Set root = TreeView1.Nodes.Add(, , "root", "My Computer", "computer")
    TreeView1.Nodes.Add root, tvwChild, "c", "C: drive", "disk"
    TreeView1.Nodes.Add root, tvwChild, "d", "D: drive", "disk"
    root.Expanded = True
End Sub

Private Sub TreeView1_NodeClick(ByVal Node As Node)
    Debug.Print "Clicked: " & Node.FullPath
End Sub
```

控件从 `BaseControlFocusable` 继承可聚焦矩形可停靠成员 --- 大小、位置、**Anchors**、**Dock**、**Font**、**Appearance**、**MousePointer** / **MouseIcon**、**ToolTipText**、**DragMode** / **DragIcon**、**Drag**、**Refresh**、**SetFocus**、**TabIndex** / **TabStop**、**ZOrder**、**CausesValidation**、**VisualStyles**、**hWnd**、**HelpContextID** / **WhatsThisHelpID**。

## Style：按钮/线条/图标/文本的组合

[**Style**](#style) 是此控件最常点击的属性。它是一个单一枚举值，但八个选项编码了3位组合，表示哪些视觉元素出现：

| [**Style**](#style)                                | 按钮 | 线条 | 图标 |
|----------------------------------------------------|---------|-------|-------|
| **tvwTextOnly**                                    | ---       | ---     | ---     |
| **tvwPictureText**                                 | ---       | ---     | 是   |
| **tvwPlusMinusText**                               | 是     | ---     | ---     |
| **tvwPlusMinusPictureText**                        | 是     | ---     | 是   |
| **tvwTreelinesText**                               | ---       | 是   | ---     |
| **tvwTreelinesPictureText**                        | ---       | 是   | 是   |
| **tvwTreelinesPlusMinusText**                      | 是     | 是   | ---     |
| **tvwTreelinesPlusMinusPictureText**（默认）     | 是     | 是   | 是   |

这些值在内部解码为Win32 `TVS_HASBUTTONS` / `TVS_HASLINES` 样式位。

## 排序

排序在两个层级配置：

- **TreeView** 整体在 [**Sorted**](#sorted) 为 **True** 时对其根级节点排序，使用 [**SortOrder**](#sortorder) 和 [**SortType**](#sorttype) 控制方向和比较方式。
- 每个单独的 [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node) 拥有自己的 [**Sorted**](/official/Reference/WinNativeCommonCtls/TreeView/Node#sorted) / [**SortOrder**](/official/Reference/WinNativeCommonCtls/TreeView/Node#sortorder) / [**SortType**](/official/Reference/WinNativeCommonCtls/TreeView/Node#sorttype) 属性，独立于树级设置控制*其*子节点的排序。

切换任一标志会立即触发排序。在节点已排序后添加的新节点会插入到正确的排序位置。

## 图像列表和图像引用

通过 [**ImageList**](#imagelist) 绑定一个 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/)。每个 [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node) 通过 [**Image**](/official/Reference/WinNativeCommonCtls/TreeView/Node#image)（节点未选中时渲染）和 [**SelectedImage**](/official/Reference/WinNativeCommonCtls/TreeView/Node#selectedimage)（节点选中时渲染）引用图标；两者接受基于1的 **Long** 索引或绑定图像列表的 **String** 键。省略 [**SelectedImage**](/official/Reference/WinNativeCommonCtls/TreeView/Node#selectedimage) 时，选中图标默认与 [**Image**](/official/Reference/WinNativeCommonCtls/TreeView/Node#image) 相同。

## 复选框

将 [**CheckBoxes**](#checkboxes) 设为 **True** 为每个节点添加前导复选框。用户可以点击复选框或在节点聚焦时按 **Space** 切换；然后触发 [**NodeCheck**](#nodecheck) 事件。[**Node.Checked**](/official/Reference/WinNativeCommonCtls/TreeView/Node#checked) 以编程方式读写选中状态。

属性
----------

### Appearance

控件边框的绘制方式。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants) 的成员。默认：**vbAppear3d**。继承。

### BorderStyle

控件的边框样式。[**TreeBorderStyleConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants) 的成员：**ccNone** 或 **ccFixedSingle**。默认：**ccFixedSingle**。

### CheckBoxes

每个节点是否具有前导复选框。**Boolean**。默认：**False**。

### DropHighlight

当前作为拖放目标高亮的 [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node)，或 **Nothing**。**Node**，读/写。

### FullRowSelect

点击行的缩进区域是否选中该节点（而不是仅点击其图标或标签）。**Boolean**。默认：**False**。

### HideSelection

控件没有焦点时是否隐藏选择高亮。**Boolean**。默认：**True**。

### HotTracking

鼠标悬停时节点是否高亮。**Boolean**。默认：**False**。

### hWnd

树视图窗口的Win32句柄。**LongPtr**，只读。

### hWndLabelEdit

当前编辑标签的文本框窗口的Win32句柄，或 `0`。**LongPtr**，只读。

### ImageList

用于节点图标的 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/)。赋值会递增 **ImageList** 的绑定计数。

### Indentation

每个节点深度级别的水平像素缩进。**Double**，读/写。默认：`20`。

### LabelEdit

内联标签编辑如何触发。[**TreeLabelEditConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLabelEditConstants) 的成员：**tvwAutomatic**、**tvwManual** 或 **tvwDisabled**。默认：**tvwAutomatic**。

### LineStyle

树线是从根节点绘制还是仅从子节点绘制。[**TreeLineStyleConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants) 的成员：**tvwTreeLines** 或 **tvwRootLines**。默认：**tvwRootLines**。

### Nodes

[**Nodes**](/official/Reference/WinNativeCommonCtls/TreeView/Nodes) 集合。只读。

### PathSeparator

在 [**Node.FullPath**](/official/Reference/WinNativeCommonCtls/TreeView/Node#fullpath) 中插入到节点文本之间的字符串。**String**。默认：`"\"`。

### Scroll

树视图在其内容超出可见区域时是否具有滚动条。**Boolean**。默认：**True**。

### SelectedItem

当前选中的 [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node)，或 **Nothing**。读/写。

### SingleSel

是否任何时候只能展开单个节点（任何其他展开会自动折叠同级子树）。**Boolean**。默认：**False**。

### Sorted

根级节点是否排序。**Boolean**。默认：**False**。每棵子树的排序通过各个节点的 [**Node.Sorted**](/official/Reference/WinNativeCommonCtls/TreeView/Node#sorted) 控制。

### SortOrder

根级的排序方向。[**TreeSortOrderConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants) 的成员。默认：**tvwAscending**。

### SortType

根级排序使用的字符串比较。[**TreeSortTypeConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants) 的成员：**tvwBinary**（区分大小写）或 **tvwText**（不区分大小写）。默认：**tvwText**。

### Style

组合视觉样式 --- 参见[上方 **Style** 表格](#style-a-composite-of-buttons--lines--icons--text)。[**TreeStyleConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants) 的成员。默认：**tvwTreelinesPlusMinusPictureText**。

### WheelScrollEvent

鼠标滚轮事件是否触发 [**Scroll**](#scroll-event)。**Boolean**。默认：**True**。

方法
-------

### GetVisibleCount

返回当前视口可以显示的完全可见节点的最大数量。**Long**。

语法：*object*.**GetVisibleCount** **As Long**

### HitTest

返回给定位置的 [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node)，如果该位置下没有节点则返回 **Nothing**。适用于拖放悬停效果、自定义上下文菜单和右键处理。

语法：*object*.**HitTest**（*x*, *y*）**As Node**

*x*
: 控件坐标系中的 **Single** 水平坐标（默认为缇）。

*y*
: **Single** 垂直坐标。

### StartLabelEdit

在当前选中的节点上打开内联编辑器。当 [**LabelEdit**](#labeledit) 为 **tvwManual** 时使用。

语法：*object*.**StartLabelEdit**

事件
------

### AfterLabelEdit

内联标签编辑完成时触发。将 *Cancel* 设为 **True** 以恢复更改。

语法：*object*\_**AfterLabelEdit**（*Cancel* **As Boolean**，*NewString* **As String**）

### BeforeCollapse

节点折叠之前触发。将 *Cancel* 设为 **True** 以阻止折叠。

语法：*object*\_**BeforeCollapse**（**ByVal** *Node* **As Node**，**ByRef** *Cancel* **As Boolean**）

### BeforeExpand

节点展开之前触发。将 *Cancel* 设为 **True** 以阻止展开。

语法：*object*\_**BeforeExpand**（**ByVal** *Node* **As Node**，**ByRef** *Cancel* **As Boolean**）

### BeforeLabelEdit

内联标签编辑即将开始时触发。将 *Cancel* 设为 **True** 以阻止编辑。

语法：*object*\_**BeforeLabelEdit**（*Cancel* **As Boolean**）

### Click

在控件内鼠标点击时触发。与 [**NodeClick**](#nodeclick) 不同，后者仅在点击命中节点时触发。

语法：*object*\_**Click**( )

### Collapse

节点折叠后触发。

语法：*object*\_**Collapse**（**ByVal** *Node* **As Node**）

### DblClick

在控件内双击时触发。

语法：*object*\_**DblClick**( )

### DragDrop, DragOver

继承的拖放事件。

### Expand

节点展开后触发。

语法：*object*\_**Expand**（**ByVal** *Node* **As Node**）

### Initialize

控件窗口创建后触发。

### KeyDown, KeyPress, KeyUp

继承的键盘事件。[**CheckBoxes**](#checkboxes) 为 **True** 时按 **Space** 切换聚焦节点的选中状态并触发 [**NodeCheck**](#nodecheck)。

### MouseDown, MouseMove, MouseUp

继承的鼠标事件。

### NodeCheck

当节点的复选框被切换时触发 --- 无论是用户点击、**Space** 按键，还是代码赋值 [**Node.Checked**](/official/Reference/WinNativeCommonCtls/TreeView/Node#checked)。

语法：*object*\_**NodeCheck**（**ByVal** *Node* **As Node**）

### NodeClick

当节点被点击时触发。与 [**Click**](#click) 不同，后者在控件内任何鼠标点击时触发无论位置。

语法：*object*\_**NodeClick**（**ByVal** *Node* **As Node**）

### NodeSelect

当节点成为选中节点时触发 --- 无论是用户点击、键盘方向键导航，还是代码赋值 [**SelectedItem**](#selecteditem)。

语法：*object*\_**NodeSelect**（**ByVal** *Node* **As Node**）

### OLECompleteDrag, OLEDragDrop, OLEDragOver, OLEGiveFeedback, OLESetData, OLEStartDrag

继承的OLE拖放事件。

### Scroll

当树视图滚动时触发。此twinBASIC实现新增；原始VB6控件未暴露此事件。将 [**WheelScrollEvent**](#wheelscrollevent) 设为 **False** 以抑制鼠标滚轮输入时的触发。

语法：*object*\_**Scroll**( )

### Validate

继承的验证事件。

## 另见

- [Node](/official/Reference/WinNativeCommonCtls/TreeView/Node) --- 树中的单个节点
- [Nodes](/official/Reference/WinNativeCommonCtls/TreeView/Nodes) --- 节点集合
- [ImageList](/official/Reference/WinNativeCommonCtls/ImageList/) --- 节点图标的图片来源
- [TreeBorderStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants)、[TreeLabelEditConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLabelEditConstants)、[TreeLineStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants)、[TreeStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants)、[TreeRelationshipConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants)、[TreeSortOrderConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants)、[TreeSortTypeConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants) --- 七个面向用户的TreeView枚举
- [ControlTypeConstants](/official/Reference/VBRUN/Constants/ControlTypeConstants) --- **vbTreeView** 所在位置