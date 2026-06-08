---
title: Node
parent: TreeView
permalink: /tB/Packages/WinNativeCommonCtls/TreeView/Node
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8b50e38c-9951-424e-a5fe-8ecb26e18a2d'
  PropagateID: '8b50e38c-9951-424e-a5fe-8ecb26e18a2d'
  ReservedCode1: '63f5358b-b9d5-4611-b864-fcb164128b96'
  ReservedCode2: '63f5358b-b9d5-4611-b864-fcb164128b96'
---

# Node 类

**Node** 是 [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/) 的 [**Nodes**](/official/Reference/WinNativeCommonCtls/TreeView/Nodes) 集合中的单个条目。从 [**Nodes.Add**](/official/Reference/WinNativeCommonCtls/TreeView/Nodes#add) 和 [**Nodes.Item**](/official/Reference/WinNativeCommonCtls/TreeView/Nodes#item) 返回。每个节点拥有自己的文本、图标、排序设置、选中状态和同级/父级/子级关系。

该类标记为 `[COMCreatable(False)]` --- 用户代码通过父级 [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/) 的 [**Nodes**](/official/Reference/WinNativeCommonCtls/TreeView/Nodes) 集合或其他节点上的导航属性访问 **Node** 实例。

```vb
Dim root As Node = TreeView1.Nodes.Add(, , "root", "My Computer")
Dim drive As Node = TreeView1.Nodes.Add(root, tvwChild, "c", "C: drive")
drive.Bold = True
drive.Image = "disk"

Debug.Print drive.FullPath              ' "My Computer\C: drive"
Debug.Print drive.Parent.Text           ' "My Computer"
Debug.Print drive.Root.Text             ' "My Computer"
```

属性
----------

### BackColor

用于渲染此节点的背景颜色。**OLE_COLOR**。默认：**vbWindowBackground**。

### Bold

节点文本是否以粗体渲染。**Boolean**。默认：**False**。

### Checked

节点的复选框是否选中。**Boolean**。仅在 [**TreeView.CheckBoxes**](/official/Reference/WinNativeCommonCtls/TreeView/#checkboxes) 为 **True** 时有意义。

### Child

此节点的第一个子节点，如果没有子节点则为 **Nothing**。**Node**，只读。

### Children

此节点的直接子节点数。**Long**，只读。

### Expanded

节点当前是否展开（显示其子节点）。**Boolean**，读/写。赋值触发 [**TreeView.BeforeExpand**](/official/Reference/WinNativeCommonCtls/TreeView/#beforeexpand) / [**TreeView.BeforeCollapse**](/official/Reference/WinNativeCommonCtls/TreeView/#beforecollapse)（可取消），随后触发 [**TreeView.Expand**](/official/Reference/WinNativeCommonCtls/TreeView/#expand) / [**TreeView.Collapse**](/official/Reference/WinNativeCommonCtls/TreeView/#collapse)。

### FirstSibling

此节点的第一个同级节点（同一父级下最左侧的对等节点）。**Node**，只读。如果节点本身就是第一个同级，则返回该节点。

### ForeColor

用于渲染此节点的文本颜色。**OLE_COLOR**。默认：**vbWindowText**。

### FullPath

从根到此节点的层次路径，节点文本之间插入 [**TreeView.PathSeparator**](/official/Reference/WinNativeCommonCtls/TreeView/#pathseparator)。**String**，只读。

示例：父节点为"My Computer"的"C: drive"节点返回 `"My Computer\C: drive"`。

### Image

节点未选中时渲染的图标。**Variant** --- 可以是基于1的 **Long** 索引指向 [**TreeView.ImageList**](/official/Reference/WinNativeCommonCtls/TreeView/#imagelist)，或 **String** 键。赋值会对照绑定图像列表进行验证。

### Index

此节点在父集合中基于1的位置。**Long**，只读。

### Key

节点添加时的字符串键。**String**，读/写。

### LastSibling

此节点的最后一个同级节点（同一父级下最右侧的对等节点）。**Node**，只读。

### Next

此节点的下一个同级节点，如果这是最后一个同级则为 **Nothing**。**Node**，只读。

### Parent

父级 **Node**，如果此节点位于根级则为 **Nothing**。**Node**，读/写。注意：赋值 **Parent** 不会移动节点 --- 它仅更改记录的父级引用。

### Previous

此节点的前一个同级节点，如果这是第一个同级则为 **Nothing**。**Node**，只读。

### Root

此节点所属子树的根节点。**Node**，只读。

### Selected

此节点是否为树视图的 [**TreeView.SelectedItem**](/official/Reference/WinNativeCommonCtls/TreeView/#selecteditem)。**Boolean**，读/写。

### SelectedImage

节点选中时渲染的图标。**Variant** --- 可以是一个索引或 [**TreeView.ImageList**](/official/Reference/WinNativeCommonCtls/TreeView/#imagelist) 的键。未设置时默认与 [**Image**](#image) 相同。

### Sorted

此节点的子节点是否排序。**Boolean**。默认：**False**。独立于控制根级排序的 [**TreeView.Sorted**](/official/Reference/WinNativeCommonCtls/TreeView/#sorted)。

### SortOrder

此节点子节点的排序方向。[**TreeSortOrderConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants) 的成员。默认：**tvwAscending**。

### SortType

此节点子节点排序使用的字符串比较。[**TreeSortTypeConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants) 的成员：**tvwBinary** 或 **tvwText**。默认：**tvwText**。

### Tag

应用程序可附加到节点的任意数据。**Variant**。

### Text

节点的标签文本。**String**，读/写。

### Visible

节点当前是否可见 --- 即未因祖先折叠而隐藏且未滚出视图。**Boolean**，只读。

方法
-------

### EnsureVisible

滚动并展开祖先节点以使此节点在树视图中可见。

语法：*object*.**EnsureVisible**

## 另见

- [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/) --- 父控件
- [Nodes](/official/Reference/WinNativeCommonCtls/TreeView/Nodes) --- 持有 **Node** 实例的集合
- [TreeSortOrderConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants)、[TreeSortTypeConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants) --- **SortOrder** / **SortType** 枚举