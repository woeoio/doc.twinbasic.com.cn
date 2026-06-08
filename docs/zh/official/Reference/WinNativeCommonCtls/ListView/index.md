---
title: ListView
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/ListView/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '87b7bd27-eee4-4583-84d1-14150211562a'
  PropagateID: '87b7bd27-eee4-4583-84d1-14150211562a'
  ReservedCode1: '6ecb7aa7-46c2-470a-9ec9-506b0d65a6d4'
  ReservedCode2: '6ecb7aa7-46c2-470a-9ec9-506b0d65a6d4'
---

# ListView 类

**ListView** 是一个灵活的多列/图标列表，通过 [**View**](#view) 属性选择四种不同的视觉模式：

| [**View**](#view)              | 描述                                                                        |
|--------------------------------|------------------------------------------------------------------------------------|
| **lvwIcon**                    | 换行网格中的大图标；每项显示图标加标签。            |
| **lvwSmallIcon**               | 换行网格中的小图标。                                                    |
| **lvwList**                    | 单列小图标加标签条目，换行成多列以适应宽度。 |
| **lvwReport**                  | 带标题行的多列表格视图；列通过 [**ColumnHeaders**](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders) 定义。 |

两个主要集合通过属性访问：[**ListItems**](#listitems) 用于行，[**ColumnHeaders**](#columnheaders) 用于 **Report** 视图的列标题。

```vb
Private Sub Form_Load()
    ' Bind an image list and configure the view
    Set ListView1.SmallIcons = ImageList1
    ListView1.View = lvwReport

    ' Define columns
    ListView1.ColumnHeaders.Add , "name",  "Name",  150
    ListView1.ColumnHeaders.Add , "type",  "Type",   80
    ListView1.ColumnHeaders.Add , "size",  "Size",   80, lvwColumnRight

    ' Add rows
    Dim item As ListItem
    Set item = ListView1.ListItems.Add(, "doc1", "Report.docx", "doc")
    item.SubItems(1) = "Word document"
    item.SubItems(2) = "24 KB"
End Sub

Private Sub ListView1_ItemClick(Item As ListItem)
    Debug.Print "Clicked: " & Item.Text
End Sub
```

控件从 `BaseControlFocusable` 继承可聚焦矩形可停靠成员 --- 大小、位置、**Anchors**、**Dock**、**Font**、**Appearance**、**MousePointer** / **MouseIcon**、**ToolTipText**、**DragMode** / **DragIcon**、**Drag**、**Refresh**、**SetFocus**、**TabIndex** / **TabStop**、**ZOrder**、**CausesValidation**、**VisualStyles**、**hWnd**、**HelpContextID** / **WhatsThisHelpID**。

## 图像列表

**ListView** 可以绑定到三个独立的 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/) 实例，每个角色一个：

- **[Icons](#icons)** --- 在 **lvwIcon** 视图中渲染的大图标。
- **[SmallIcons](#smallicons)** --- 在 **lvwSmallIcon**、**lvwList** 和 **lvwReport** 视图中渲染的小图标。
- **[ColumnHeaderIcons](#columnheadericons)** --- 在报告视图列标题内渲染的小图标，按列通过 [**ColumnHeader.Icon**](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader#icon) 寻址。

[**ListItem**](/official/Reference/WinNativeCommonCtls/ListView/ListItem) 通过其 **Icon** 和 **SmallIcon** 属性选择图标，可以是基于1的 **Long** 索引或各自图像列表的 **String** 键。

## 选择和标签编辑

默认为单行选择；将 [**MultiSelect**](#multiselect) 设为 **True** 允许用户 **Ctrl**-点击和 **Shift**-点击多项选择。当前聚焦项暴露为 [**SelectedItem**](#selecteditem)（[**ListItem**](/official/Reference/WinNativeCommonCtls/ListView/ListItem)）和 [**SelectedItemIndex**](#selecteditemindex)（**Long**）。[**ListItem.Selected**](/official/Reference/WinNativeCommonCtls/ListView/ListItem#selected) 读写单行的选中状态。

[**LabelEdit**](#labeledit) 控制内联标签编辑：

- **lvwAutomatic** --- 点击已选中项开始编辑（短暂延迟后；即F2 / 单击并暂停模式）。
- **lvwManual** --- 仅编程调用 [**StartLabelEdit**](#startlabeledit) 打开编辑器。
- **lvwDisabled** --- 标签不可编辑。

编辑开始触发 [**BeforeLabelEdit**](#beforelabeledit)（可取消），编辑结束触发 [**AfterLabelEdit**](#afterlabeledit)（可取消，带有建议的新文本）。

## 排序、列重排和标题

在 **lvwReport** 视图中，点击列标题触发 [**ColumnClick**](#columnclick)，让应用程序实现排序（包不会自动排序）。当 [**AllowColumnReorder**](#allowcolumnreorder) 在 **lvwReport** 视图中为 **True** 时，用户可以拖动列标题重新排序；结果顺序通过 [**ColumnHeader.Position**](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader#position) 反映。

[**hWndHeader**](#hwndheader) 是嵌入的 `SysHeader32` 窗口的Win32句柄，暴露用于原始Win32自定义。

属性
----------

### AllowColumnReorder

用户是否可以拖动列标题重新排序。**Boolean**。默认：**False**。仅在 **lvwReport** 视图中有效。

### Appearance

控件边框的绘制方式。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants) 的成员。默认：**vbAppear3d**。继承。

### Arrange

在图标/小图标视图中如何排列项。[**ListArrangeConstants**](#listarrangeconstants) 的成员。默认：**lvwNone**。

### BackColor

列表区域的背景颜色。**OLE_COLOR**。默认：**vbWindowBackground**。

### BorderStyle

控件的边框样式。[**TreeBorderStyleConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants) 的成员：**ccNone** 或 **ccFixedSingle**。默认：**ccFixedSingle**。该枚举与 [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/) 共享。

### CheckBoxes

每行是否有前导复选框。**Boolean**。默认：**False**。为 **True** 时，点击触发 [**ItemCheck**](#itemcheck)。

### ColumnHeaderIcons

在 **lvwReport** 视图中用于列标题图标的 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/)。各列通过 [**ColumnHeader.Icon**](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader#icon) 引用图标。

### ColumnHeaders

[**ColumnHeaders**](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders) 集合。只读。

### FlatScrollBar

控件是否使用平面（而非3D）滚动条。**Boolean**。默认：**False**。

### FullRowSelect

点击行中任何单元格是否选中整行（而非仅点击第一列的文本）。**Boolean**。默认：**False**。仅在 **lvwReport** 视图中有意义。

### GridLines

行和列之间是否绘制网格线。**Boolean**。默认：**False**。仅在 **lvwReport** 视图中有意义。

### HideColumnHeaders

在 **lvwReport** 视图中列标题行是否隐藏。**Boolean**。默认：**False**。

### HideSelection

控件没有焦点时选择高亮是否隐藏。**Boolean**。默认：**True**。

### HotTracking

鼠标悬停时项是否高亮（并启用跟踪点击选择）。**Boolean**。默认：**False**。

### hWnd

列表视图窗口的Win32句柄。**LongPtr**，只读。

### hWndHeader

嵌入的列标题窗口（`SysHeader32`）的Win32句柄。**LongPtr**，只读。标记为 `[Hidden]` `[NonBrowsable]` --- 仅为高级Win32自定义（如子类化标题）暴露。

### Icons

在 **lvwIcon** 视图中用于大图标的 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/)。赋值递增 **ImageList** 的绑定计数（并递减前一个的）；参见[绑定计数注意事项](/official/Reference/WinNativeCommonCtls/ImageList/#binding-to-consumers)。

### LabelEdit

内联标签编辑如何触发。[**ListLabelEditConstants**](#listlabeleditconstants) 的成员。默认：**lvwAutomatic**。

### LabelWrap

在 **lvwIcon** 视图中项标签是否换行到多行。**Boolean**。默认：**True**。

### ListItems

[**ListItems**](/official/Reference/WinNativeCommonCtls/ListView/ListItems) 集合 --- 列表的行。只读。

### MultiSelect

用户是否可以选择多个项。**Boolean**。默认：**False**。

### SelectedItem

当前聚焦的 [**ListItem**](/official/Reference/WinNativeCommonCtls/ListView/ListItem)，如果没有行聚焦则为 **Nothing**。只读 --- 要更改选择，赋值给 [**ListItem.Selected**](/official/Reference/WinNativeCommonCtls/ListView/ListItem#selected)。

### SelectedItemIndex

当前聚焦行的基于1的索引，如果没有行聚焦则为 `-1`。**Long**，只读。

### SmallIcons

在 **lvwSmallIcon**、**lvwList** 和 **lvwReport** 视图中用于小图标的 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/)。

### TextBackground

项标签文本是否有不透明背景。[**ListTextBackgroundConstants**](#listtextbackgroundconstants) 的成员。默认：**lvwTransparent**。

### View

视觉模式。[**ListViewConstants**](#listviewconstants) 的成员。默认：**lvwIcon**。

方法
-------

### GetFirstVisible

返回当前视口中可见的第一个 [**ListItem**](/official/Reference/WinNativeCommonCtls/ListView/ListItem)。适用于虚拟化场景，应用程序根据用户正在查看的内容更新行内容。

语法：*object*.**GetFirstVisible** **As ListItem**

### StartLabelEdit

在当前选中的行上打开内联编辑器。当 [**LabelEdit**](#labeledit) 为 **lvwManual** 时使用。

语法：*object*.**StartLabelEdit**

事件
------

### AfterLabelEdit

内联标签编辑完成时触发。将 *Cancel* 设为 **True** 以恢复；*NewString* 保存用户建议的新文本。

语法：*object*\_**AfterLabelEdit**（*Cancel* **As Boolean**，*NewString* **As String**）

### BeforeLabelEdit

内联标签编辑即将开始时触发。将 *Cancel* 设为 **True** 以阻止编辑。

语法：*object*\_**BeforeLabelEdit**（*Cancel* **As Boolean**）

### Click

在控件内鼠标点击时触发。与 [**ItemClick**](#itemclick) 不同，后者仅在点击命中行时触发。

语法：*object*\_**Click**( )

### ColumnClick

用户在 **lvwReport** 视图中点击列标题时触发。

语法：*object*\_**ColumnClick**（*ColumnHeader* **As ColumnHeader**）

### DblClick

在控件内双击时触发。

语法：*object*\_**DblClick**( )

### DragDrop, DragOver

继承的拖放事件。

### Initialize

控件窗口创建后触发。

### ItemCheck

用户切换行上的复选框时触发（仅在 [**CheckBoxes**](#checkboxes) 为 **True** 时）。

语法：*object*\_**ItemCheck**（*Item* **As ListItem**）

### ItemClick

当行被选中时触发（通过鼠标点击或键盘导航）。

语法：*object*\_**ItemClick**（*Item* **As ListItem**）

### KeyDown, KeyPress, KeyUp

继承的键盘事件。

### MouseDown, MouseMove, MouseUp

继承的鼠标事件。

### OLECompleteDrag, OLEDragDrop, OLEDragOver, OLEGiveFeedback, OLESetData, OLEStartDrag

继承的OLE拖放事件。

### Scroll

::: info
**Scroll** 事件在控件上声明但当前源码中标记为 `[Unimplemented]`。保留用于未来版本；请勿依赖它。
:::

### Validate

继承的验证事件。

## ListViewConstants

确定 **ListView** 的视觉模式。在 **ListView** 类上声明。

| 成员                | 值 | 描述                                                          |
|-----------------------|-------|----------------------------------------------------------------------|
| **lvwIcon**           | 0 | 换行网格中的大图标。                            |
| **lvwSmallIcon** | 1 | 换行网格中的小图标。                            |
| **lvwList**           | 2 | 单列列表（换行成多列）。        |
| **lvwReport**       | 3 | 带标题行的多列报告视图。                   |

## ListArrangeConstants

确定在图标/小图标视图中如何自动排列项。在 **ListView** 类上声明。

| 成员                 | 值 | 描述                                            |
|------------------------|-------|--------------------------------------------------------|
| **lvwNone**         | 0 | 无自动排列；项保持放置位置。 |
| **lvwAutoLeft** | 1 | 项自动从左到右流动。                          |
| **lvwAutoTop**   | 2 | 项自动从上到下流动。                          |

## ListTextBackgroundConstants

确定项标签文本是否具有不透明或透明背景。在 **ListView** 类上声明。

| 成员                | 值 | 描述                                                       |
|-----------------------|-------|-------------------------------------------------------------------|
| **lvwTransparent** | 0 | 项文本直接叠加在列表背景上。   |
| **lvwOpaque**           | 1 | 项文本以匹配 [**BackColor**](#backcolor) 的不透明背景绘制。 |

## ListLabelEditConstants

确定何时触发内联标签编辑。在 **ListView** 类上声明。

| 成员             | 值 | 描述                                                                |
|--------------------|-------|----------------------------------------------------------------------------|
| **lvwAutomatic** | 0 | F2或点击并暂停选中行开始编辑。 |
| **lvwManual**       | 1 | 仅 [**StartLabelEdit**](#startlabeledit) 打开编辑器。 |
| **lvwDisabled**   | 2 | 完全禁用标签编辑。 |

## 另见

- [ListItem](/official/Reference/WinNativeCommonCtls/ListView/ListItem) --- 单行
- [ListItems](/official/Reference/WinNativeCommonCtls/ListView/ListItems) --- 行集合
- [ColumnHeader](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader) --- 单个列标题（Report视图）
- [ColumnHeaders](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders) --- 列标题集合
- [ImageList](/official/Reference/WinNativeCommonCtls/ImageList/) --- [**Icons**](#icons)、[**SmallIcons**](#smallicons) 和 [**ColumnHeaderIcons**](#columnheadericons) 的图片来源
- [TreeBorderStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants) --- 与 [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/) 共享的 [**BorderStyle**](#borderstyle) 枚举
- [ControlTypeConstants](/official/Reference/VBRUN/Constants/ControlTypeConstants) --- **vbListView** 所在位置