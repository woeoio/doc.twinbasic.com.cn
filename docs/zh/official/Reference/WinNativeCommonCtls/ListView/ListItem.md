---
title: ListItem
parent: ListView
permalink: /tB/Packages/WinNativeCommonCtls/ListView/ListItem
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '10e621c2-1de5-4ad6-8c15-6df5e0949884'
  PropagateID: '10e621c2-1de5-4ad6-8c15-6df5e0949884'
  ReservedCode1: '5a653a97-123e-4a0d-8210-ac4b3caa7168'
  ReservedCode2: '5a653a97-123e-4a0d-8210-ac4b3caa7168'
---

# ListItem 类

**ListItem** 是 [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/) 中的单行。从 [**ListItems.Add**](/official/Reference/WinNativeCommonCtls/ListView/ListItems#add) 和 [**ListItems.Item**](/official/Reference/WinNativeCommonCtls/ListView/ListItems#item) 返回。在 **lvwReport** 视图中，第一列是主标签（[**Text**](#text)）；后续列通过 [**SubItems**](#subitemsindex)(*index*) 暴露。

该类标记为 `[COMCreatable(False)]` --- 用户代码通过父级 [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/) 的 [**ListItems**](/official/Reference/WinNativeCommonCtls/ListView/ListItems) 集合访问 **ListItem** 实例，从不直接实例化。

```vb
Dim item As ListItem = ListView1.ListItems.Add(, "doc1", "Report.docx", "doc")
item.SubItems(1) = "Word document"
item.SubItems(2) = "24 KB"
item.Bold = True
item.ForeColor = vbBlue
```

属性
----------

### BackColor

用于渲染此行的背景颜色。**OLE_COLOR**。默认：`-1`（透明 --- 延迟到 [**ListView.BackColor**](#backcolor)）。

### Bold

此行是否以粗体渲染。**Boolean**。默认：**False**。

### Checked

此行的复选框是否选中。**Boolean**。仅在 [**ListView.CheckBoxes**](/official/Reference/WinNativeCommonCtls/ListView/#checkboxes) 为 **True** 时有意义。

### EnsureVisible

滚动列表视图使此行可见。作为方法可用（不是属性 --- 在下方方法部分列出）。

### ForeColor

用于渲染此行的文本颜色。**OLE_COLOR**。默认：**vbWindowText**。

### Ghosted

此行是否渲染为半透明/剪切状态。**Boolean**。视觉效果镜像Win32 `LVIS_CUT` 状态。

### Height

行选择矩形的像素高度。**Single**，只读。

### Icon

[**lvwIcon**](/official/Reference/WinNativeCommonCtls/ListView/#listviewconstants) 视图中行的大图标。**Variant** --- 可以是基于1的 **Long** 索引指向 [**ListView.Icons**](/official/Reference/WinNativeCommonCtls/ListView/#icons)，或 **String** 键。赋值对照绑定图像列表验证，未知键引发运行时错误 35601（*"Element not found"*），超出范围的索引引发 35600（*"Index out of bounds"*），无绑定图像列表引发 35613（*"ImageList must be initialized before it can be used"*）。

### Index

此行在父集合中基于1的位置。**Long**，只读。尝试赋值引发运行时错误 383。

### Key

此行添加时的字符串键。**String**，读/写。重新赋值会在集合的内部索引中移动行，保持其位置。

### Left

行在列表视图内的水平像素位置。**Single**，读/写。在 [**lvwIcon**](/official/Reference/WinNativeCommonCtls/ListView/#listviewconstants) 视图中用于重新定位项。

### Selected

此行是否选中。**Boolean**，读/写。设置 **Selected = True** 也会设置聚焦状态。

### SmallIcon

非图标视图中行的小图标。**Variant** --- 可以是索引或指向 [**ListView.SmallIcons**](/official/Reference/WinNativeCommonCtls/ListView/#smallicons) 的键。与 [**Icon**](#icon) 相同的验证。

### SubItems(Index)

[**lvwReport**](/official/Reference/WinNativeCommonCtls/ListView/#listviewconstants) 视图中给定基于1的列索引的子项文本。**String**，读/写。主文本通过 [**Text**](#text) 访问；**SubItems**(1) 是第二列，**SubItems**(2) 是第三列，以此类推。索引 `0` 会被拒绝并引发运行时错误 380。

语法：*object*.**SubItems**（*Index*）[ **=** *value* ]

### Tag

应用程序可附加到此行的任意数据。**Variant**。

### Text

此行的主标签文本。**String**，读/写。默认成员。映射到列表视图项的第0列文本。

### ToolTipText

用户悬停在此行上时显示的工具提示字符串。**String**。通过列表视图的 `LVS_EX_INFOTIP` 扩展样式暴露。

### Top

行在列表视图内的垂直像素位置。**Single**，读/写。

### Width

行选择矩形的像素宽度。**Single**，只读。

方法
-------

### CreateDragImage

::: info
**CreateDragImage** 在当前源码中标记为 `[Unimplemented]`。调用它没有实际效果 --- 方法体为空。
:::

### EnsureVisible

滚动列表视图使此行可见。

语法：*object*.**EnsureVisible**

## 另见

- [ListView](/official/Reference/WinNativeCommonCtls/ListView/) --- 父控件
- [ListItems](/official/Reference/WinNativeCommonCtls/ListView/ListItems) --- 持有 **ListItem** 实例的集合
- [ColumnHeader](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader) --- 列标题（定义 [**SubItems**](#subitemsindex) 对齐的对象）