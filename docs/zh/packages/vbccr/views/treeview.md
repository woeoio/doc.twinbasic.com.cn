---
title: 树视图控件（TreeView）
description: 树视图控件（TreeView） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b3c0de01-fe54-4b1f-8527-bb1fba433484'
  PropagateID: 'b3c0de01-fe54-4b1f-8527-bb1fba433484'
  ReservedCode1: '37473e25-09e3-4d08-8578-bb0f5b89e62b'
  ReservedCode2: '37473e25-09e3-4d08-8578-bb0f5b89e62b'
---

# 树视图控件（TreeView）

提供层次化数据的树形展示，支持节点展开/折叠、复选框、多选、图像列表、标签编辑、排序和OLE拖放。

## 枚举

### TvwStyleConstants

树视图样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TvwStyleTextOnly | 0 | 仅文本 |
| TvwStylePictureText | 1 | 图像和文本 |
| TvwStylePlusMinusText | 2 | 加减号和文本 |
| TvwStylePlusMinusPictureText | 3 | 加减号、图像和文本 |
| TvwStyleTreeLinesText | 4 | 树线和文本 |
| TvwStyleTreeLinesPictureText | 5 | 树线、图像和文本 |
| TvwStyleTreeLinesPlusMinusText | 6 | 树线、加减号和文本 |
| TvwStyleTreeLinesPlusMinusPictureText | 7 | 树线、加减号、图像和文本 |

### TvwLineStyleConstants

线条样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TvwLineStyleTreeLines | 0 | 显示树线 |
| TvwLineStyleRootLines | 1 | 显示根线（根节点之间也显示连线） |

### TvwLabelEditConstants

标签编辑模式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TvwLabelEditAutomatic | 0 | 自动标签编辑（单击选中，再次单击编辑） |
| TvwLabelEditManual | 1 | 手动标签编辑（需代码调用StartLabelEdit） |
| TvwLabelEditDisabled | 2 | 禁用标签编辑 |

### TvwNodeRelationshipConstants

节点关系常量，用于Add方法和Move方法。

| 常量 | 值 | 说明 |
|------|-----|------|
| TvwNodeFirst | 0 | 第一个节点 |
| TvwNodeLast | 1 | 最后一个节点 |
| TvwNodeNext | 2 | 下一个节点（同级） |
| TvwNodePrevious | 3 | 上一个节点（同级） |
| TvwNodeChild | 4 | 子节点 |

### TvwSortOrderConstants

排序顺序常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TvwSortAscending | 0 | 升序排列 |
| TvwSortDescending | 1 | 降序排列 |

### TvwSortTypeConstants

排序类型常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TvwSortBinary | 0 | 二进制排序（区分大小写） |
| TvwSortText | 1 | 文本排序（不区分大小写） |

### TvwMultiSelectConstants

多选模式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TvwMultiSelectNone | 0 | 不允许多选 |
| TvwMultiSelectAll | 1 | 允许选择所有节点 |
| TvwMultiSelectVisibleOnly | 2 | 仅允许选择可见节点 |
| TvwMultiSelectRestrictSiblings | 3 | 仅允许选择同级节点 |

### TvwVisualThemeConstants

视觉主题常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TvwVisualThemeStandard | 0 | 标准主题 |
| TvwVisualThemeExplorer | 1 | 资源管理器主题 |

## 属性

### Name

```vb
Public Property Get Name() As String
```

返回在代码中标识对象的名称。

### Tag

```vb
Public Property Get Tag() As String
Public Property Let Tag(ByVal Value As String)
```

存储程序所需的额外数据。

### Parent

```vb
Public Property Get Parent() As Object
```

返回对象所在的对象。

### Container

```vb
Public Property Get Container() As Object
Public Property Set Container(ByVal Value As Object)
```

返回/设置对象的容器。

### Left

```vb
Public Property Get Left() As Single
Public Property Let Left(ByVal Value As Single)
```

返回/设置对象与其容器左边缘的距离。

### Top

```vb
Public Property Get Top() As Single
Public Property Let Top(ByVal Value As Single)
```

返回/设置对象与其容器顶边缘的距离。

### Width

```vb
Public Property Get Width() As Single
Public Property Let Width(ByVal Value As Single)
```

返回/设置对象的宽度。

### Height

```vb
Public Property Get Height() As Single
Public Property Let Height(ByVal Value As Single)
```

返回/设置对象的高度。

### Visible

```vb
Public Property Get Visible() As Boolean
Public Property Let Visible(ByVal Value As Boolean)
```

返回/设置对象是否可见。

### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

返回/设置鼠标悬停时显示的提示文本。

### HelpContextID

```vb
Public Property Get HelpContextID() As Long
Public Property Let HelpContextID(ByVal Value As Long)
```

返回/设置帮助上下文ID。

### WhatsThisHelpID

```vb
Public Property Get WhatsThisHelpID() As Long
Public Property Let WhatsThisHelpID(ByVal Value As Long)
```

返回/设置关联的上下文帮助ID。

### Align

```vb
Public Property Get Align() As Integer
Public Property Let Align(ByVal Value As Integer)
```

返回/设置控件在其窗体上的对齐方式。

### DragIcon

```vb
Public Property Get DragIcon() As IPictureDisp
Public Property Let DragIcon(ByVal Value As IPictureDisp)
Public Property Set DragIcon(ByVal Value As IPictureDisp)
```

返回/设置拖放操作中显示的图标。

### DragMode

```vb
Public Property Get DragMode() As Integer
Public Property Let DragMode(ByVal Value As Integer)
```

返回/设置拖动模式。

### hWnd

```vb
Public Property Get hWnd() As LongPtr
```

返回控件句柄。

### hWndUserControl

```vb
Public Property Get hWndUserControl() As LongPtr
```

返回UserControl句柄。

### hWndLabelEdit

```vb
Public Property Get hWndLabelEdit() As LongPtr
```

返回标签编辑框句柄。

### Font

```vb
Public Property Get Font() As StdFont
Public Property Let Font(ByVal NewFont As StdFont)
Public Property Set Font(ByVal NewFont As StdFont)
```

返回/设置字体。

### VisualStyles

```vb
Public Property Get VisualStyles() As Boolean
Public Property Let VisualStyles(ByVal Value As Boolean)
```

返回/设置是否启用视觉样式。需要comctl32.dll 6.0或更高版本。

### VisualTheme

```vb
Public Property Get VisualTheme() As TvwVisualThemeConstants
Public Property Let VisualTheme(ByVal Value As TvwVisualThemeConstants)
```

返回/设置视觉主题。

### Enabled

```vb
Public Property Get Enabled() As Boolean
Public Property Let Enabled(ByVal Value As Boolean)
```

返回/设置对象是否能响应用户事件。

### OLEDragMode

```vb
Public Property Get OLEDragMode() As VBRUN.OLEDragConstants
Public Property Let OLEDragMode(ByVal Value As VBRUN.OLEDragConstants)
```

返回/设置OLE拖拽模式。

### OLEDragDropScroll

```vb
Public Property Get OLEDragDropScroll() As Boolean
Public Property Let OLEDragDropScroll(ByVal Value As Boolean)
```

返回/设置OLE拖放时是否自动滚动。

### OLEDragExpandTime

```vb
Public Property Get OLEDragExpandTime() As Long
Public Property Let OLEDragExpandTime(ByVal Value As Long)
```

返回/设置OLE拖放时悬停多久后展开节点（毫秒）。

### OLEDropMode

```vb
Public Property Get OLEDropMode() As OLEDropModeConstants
Public Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)
```

返回/设置对象是否可以作为OLE放置目标。

### MousePointer

```vb
Public Property Get MousePointer() As CCMousePointerConstants
Public Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

返回/设置鼠标悬停时显示的指针类型。参见通用枚举。

### MouseIcon

```vb
Public Property Get MouseIcon() As IPictureDisp
Public Property Let MouseIcon(ByVal Value As IPictureDisp)
Public Property Set MouseIcon(ByVal Value As IPictureDisp)
```

返回/设置自定义鼠标图标。

### MouseTrack

```vb
Public Property Get MouseTrack() As Boolean
Public Property Let MouseTrack(ByVal Value As Boolean)
```

返回/设置是否在鼠标进入或离开控件时触发事件。

### RightToLeft

```vb
Public Property Get RightToLeft() As Boolean
Public Property Let RightToLeft(ByVal Value As Boolean)
```

返回/设置从右到左显示方向。

### RightToLeftLayout

```vb
Public Property Get RightToLeftLayout() As Boolean
Public Property Let RightToLeftLayout(ByVal Value As Boolean)
```

返回/设置从右到左布局。

### RightToLeftMode

```vb
Public Property Get RightToLeftMode() As CCRightToLeftModeConstants
Public Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

返回/设置从右到左模式。参见通用枚举。

### ImageList

```vb
Public Property Get ImageList() As Variant
Public Property Let ImageList(ByVal Value As Variant)
Public Property Set ImageList(ByVal Value As Variant)
```

返回/设置关联的ImageList控件。可以是对象引用、字符串键名或LongPtr句柄。

### BorderStyle

```vb
Public Property Get BorderStyle() As CCBorderStyleConstants
Public Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

返回/设置边框样式。参见通用枚举。

### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

返回/设置背景色。

### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

返回/设置前景色。

### Redraw

```vb
Public Property Get Redraw() As Boolean
Public Property Let Redraw(ByVal Value As Boolean)
```

返回/设置是否重绘。禁用后可加速大量操作。

### Style

```vb
Public Property Get Style() As TvwStyleConstants
Public Property Let Style(ByVal Value As TvwStyleConstants)
```

返回/设置树视图样式。

### LineStyle

```vb
Public Property Get LineStyle() As TvwLineStyleConstants
Public Property Let LineStyle(ByVal Value As TvwLineStyleConstants)
```

返回/设置线条样式。

### LineColor

```vb
Public Property Get LineColor() As OLE_COLOR
Public Property Let LineColor(ByVal Value As OLE_COLOR)
```

返回/设置线条颜色。

### LabelEdit

```vb
Public Property Get LabelEdit() As TvwLabelEditConstants
Public Property Let LabelEdit(ByVal Value As TvwLabelEditConstants)
```

返回/设置标签编辑模式。

### Checkboxes

```vb
Public Property Get Checkboxes() As Boolean
Public Property Let Checkboxes(ByVal Value As Boolean)
```

返回/设置是否在节点旁显示复选框。

### ShowTips

```vb
Public Property Get ShowTips() As Boolean
Public Property Let ShowTips(ByVal Value As Boolean)
```

返回/设置是否显示工具提示。

### HideSelection

```vb
Public Property Get HideSelection() As Boolean
Public Property Let HideSelection(ByVal Value As Boolean)
```

返回/设置失去焦点时是否隐藏选中项高亮。

### FullRowSelect

```vb
Public Property Get FullRowSelect() As Boolean
Public Property Let FullRowSelect(ByVal Value As Boolean)
```

返回/设置是否整行选择。

### HotTracking

```vb
Public Property Get HotTracking() As Boolean
Public Property Let HotTracking(ByVal Value As Boolean)
```

返回/设置是否启用热点跟踪。

### Indentation

```vb
Public Property Get Indentation() As Single
Public Property Let Indentation(ByVal Value As Single)
```

返回/设置子节点缩进量。

### PathSeparator

```vb
Public Property Get PathSeparator() As String
Public Property Let PathSeparator(ByVal Value As String)
```

返回/设置FullPath属性使用的路径分隔符。

### Scroll

```vb
Public Property Get Scroll() As Boolean
Public Property Let Scroll(ByVal Value As Boolean)
```

返回/设置是否显示滚动条。

### SingleSel

```vb
Public Property Get SingleSel() As Boolean
Public Property Let SingleSel(ByVal Value As Boolean)
```

返回/设置单击节点是否展开并折叠其他节点。

### Sorted

```vb
Public Property Get Sorted() As Boolean
Public Property Let Sorted(ByVal Value As Boolean)
```

返回/设置是否对根节点排序。

### SortOrder

```vb
Public Property Get SortOrder() As TvwSortOrderConstants
Public Property Let SortOrder(ByVal Value As TvwSortOrderConstants)
```

返回/设置排序顺序。

### SortType

```vb
Public Property Get SortType() As TvwSortTypeConstants
Public Property Let SortType(ByVal Value As TvwSortTypeConstants)
```

返回/设置排序类型。

### InsertMarkColor

```vb
Public Property Get InsertMarkColor() As OLE_COLOR
Public Property Let InsertMarkColor(ByVal Value As OLE_COLOR)
```

返回/设置插入标记颜色。

### DoubleBuffer

```vb
Public Property Get DoubleBuffer() As Boolean
Public Property Let DoubleBuffer(ByVal Value As Boolean)
```

返回/设置是否启用双缓冲绘制。

### IMEMode

```vb
Public Property Get IMEMode() As CCIMEModeConstants
Public Property Let IMEMode(ByVal Value As CCIMEModeConstants)
```

返回/设置输入法模式。参见通用枚举。

### MultiSelect

```vb
Public Property Get MultiSelect() As TvwMultiSelectConstants
Public Property Let MultiSelect(ByVal Value As TvwMultiSelectConstants)
```

返回/设置多选模式。

### Nodes

```vb
Public Property Get Nodes() As TvwNodes
```

返回节点集合。

## 方法

### OLEDrag

```vb
Public Sub OLEDrag()
```

启动OLE拖放操作。

### Drag

```vb
Public Sub Drag(Optional ByRef Action As Variant)
```

开始、结束或取消拖动操作。

### SetFocus

```vb
Public Sub SetFocus()
```

将焦点移到指定对象。

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

设置Z顺序。

### Refresh

```vb
Public Sub Refresh()
```

强制完全重绘对象。

## 事件

### Click

```vb
Public Event Click()
```

用户单击控件时触发。

### DblClick

```vb
Public Event DblClick()
```

用户双击控件时触发。

### NodeClick

```vb
Public Event NodeClick(ByVal Node As TvwNode, ByVal Button As Integer)
```

用户单击节点时触发。Button指示鼠标按钮。

### NodeDblClick

```vb
Public Event NodeDblClick(ByVal Node As TvwNode, ByVal Button As Integer)
```

用户双击节点时触发。

### NodeBeforeCheck

```vb
Public Event NodeBeforeCheck(ByVal Node As TvwNode, ByRef Cancel As Boolean)
```

节点复选框即将改变时触发。设置Cancel为True可取消操作。

### NodeCheck

```vb
Public Event NodeCheck(ByVal Node As TvwNode)
```

节点复选框状态改变后触发。

### NodeDrag

```vb
Public Event NodeDrag(ByVal Node As TvwNode, ByVal Button As Integer)
```

用户拖动节点时触发。

### NodeBeforeSelect

```vb
Public Event NodeBeforeSelect(ByVal Node As TvwNode, ByRef Cancel As Boolean)
```

节点即将被选中时触发。设置Cancel为True可取消选择。

### NodeSelect

```vb
Public Event NodeSelect(ByVal Node As TvwNode)
```

节点被选中后触发。

### NodeRangeSelect

```vb
Public Event NodeRangeSelect(ByVal Node As TvwNode, ByRef Cancel As Boolean)
```

范围选择时触发。设置Cancel为True可取消。

### BeforeCollapse

```vb
Public Event BeforeCollapse(ByVal Node As TvwNode, ByRef Cancel As Boolean)
```

节点即将折叠时触发。设置Cancel为True可取消折叠。

### Collapse

```vb
Public Event Collapse(ByVal Node As TvwNode)
```

节点折叠后触发。

### BeforeExpand

```vb
Public Event BeforeExpand(ByVal Node As TvwNode, ByRef Cancel As Boolean)
```

节点即将展开时触发。设置Cancel为True可取消展开。

### Expand

```vb
Public Event Expand(ByVal Node As TvwNode)
```

节点展开后触发。

### BeforeLabelEdit

```vb
Public Event BeforeLabelEdit(ByRef Cancel As Boolean)
```

标签即将编辑时触发。设置Cancel为True可取消编辑。

### AfterLabelEdit

```vb
Public Event AfterLabelEdit(ByRef Cancel As Boolean, ByRef NewString As String)
```

标签编辑完成后触发。设置Cancel为True可取消修改，NewString为编辑后的文本。

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

按键预览事件。设置IsInputKey为True可将按键标记为输入键。

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

按键释放预览事件。

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

按下键盘键时触发。

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

释放键盘键时触发。

### KeyPress

```vb
Public Event KeyPress(KeyChar As Integer)
```

按下并释放ANSI键时触发。

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

按下鼠标按钮时触发。

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

移动鼠标时触发。

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

释放鼠标按钮时触发。

### MouseEnter

```vb
Public Event MouseEnter()
```

鼠标进入控件区域时触发。

### MouseLeave

```vb
Public Event MouseLeave()
```

鼠标离开控件区域时触发。

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

OLE拖放操作完成时触发。

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

OLE拖放操作放置时触发。

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

OLE拖放操作悬停时触发。

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

OLE拖放操作给反馈时触发。

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

OLE拖放操作设置数据时触发。

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

OLE拖放操作开始时触发。

## 子对象

### TvwNode 类

树视图节点对象。

#### TvwNode 属性

##### Index

```vb
Public Property Get Index() As Long
```

节点在集合中的索引。

##### Key

```vb
Public Property Get Key() As String
Public Property Let Key(ByVal Value As String)
```

唯一标识键。

##### Tag

```vb
Public Property Get Tag() As Variant
Public Property Let Tag(ByVal Value As Variant)
```

额外数据。

##### Handle

```vb
Public Property Get Handle() As LongPtr
```

节点句柄。

##### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

节点文本。

##### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

工具提示文本。

##### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

背景色。

##### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

前景色。

##### Image

```vb
Public Property Get Image() As Variant
Public Property Let Image(ByVal Value As Variant)
```

节点图像。

##### ImageIndex

```vb
Public Property Get ImageIndex() As Long
```

图像索引。

##### SelectedImage

```vb
Public Property Get SelectedImage() As Variant
Public Property Let SelectedImage(ByVal Value As Variant)
```

选中状态的图像。

##### SelectedImageIndex

```vb
Public Property Get SelectedImageIndex() As Long
```

选中图像索引。

##### ExpandedImage

```vb
Public Property Get ExpandedImage() As Variant
Public Property Let ExpandedImage(ByVal Value As Variant)
```

展开状态的图像。

##### ExpandedImageIndex

```vb
Public Property Get ExpandedImageIndex() As Long
```

展开图像索引。

##### NoImages

```vb
Public Property Get NoImages() As Boolean
Public Property Let NoImages(ByVal Value As Boolean)
```

是否不显示图像。

##### Selected

```vb
Public Property Get Selected() As Boolean
Public Property Let Selected(ByVal Value As Boolean)
```

是否选中。

##### CheckBox

```vb
Public Property Get CheckBox() As Boolean
Public Property Let CheckBox(ByVal Value As Boolean)
```

是否显示复选框。

##### Checked

```vb
Public Property Get Checked() As Boolean
Public Property Let Checked(ByVal Value As Boolean)
```

是否勾选。

##### Bold

```vb
Public Property Get Bold() As Boolean
Public Property Let Bold(ByVal Value As Boolean)
```

是否粗体。

##### Ghosted

```vb
Public Property Get Ghosted() As Boolean
Public Property Let Ghosted(ByVal Value As Boolean)
```

是否灰显。

##### Expanded

```vb
Public Property Get Expanded() As Boolean
Public Property Let Expanded(ByVal Value As Boolean)
```

是否展开。

##### Enabled

```vb
Public Property Get Enabled() As Boolean
Public Property Let Enabled(ByVal Value As Boolean)
```

是否可用。

##### Sorted

```vb
Public Property Get Sorted() As Boolean
Public Property Let Sorted(ByVal Value As Boolean)
```

是否对子节点排序。

##### SortOrder

```vb
Public Property Get SortOrder() As TvwSortOrderConstants
Public Property Let SortOrder(ByVal Value As TvwSortOrderConstants)
```

排序顺序。

##### SortType

```vb
Public Property Get SortType() As TvwSortTypeConstants
Public Property Let SortType(ByVal Value As TvwSortTypeConstants)
```

排序类型。

##### Children

```vb
Public Property Get Children() As Long
```

子节点数量。

##### Child

```vb
Public Property Get Child() As TvwNode
```

第一个子节点。

##### Level

```vb
Public Property Get Level() As Long
```

节点层级（根节点为0）。

##### Parent

```vb
Public Property Get Parent() As TvwNode
Public Property Set Parent(ByVal Value As TvwNode)
```

父节点。

##### Root

```vb
Public Property Get Root() As TvwNode
```

根节点。

##### NextSibling

```vb
Public Property Get NextSibling() As TvwNode
```

下一个兄弟节点。

##### PreviousSibling

```vb
Public Property Get PreviousSibling() As TvwNode
```

上一个兄弟节点。

##### FirstSibling

```vb
Public Property Get FirstSibling() As TvwNode
```

第一个兄弟节点。

##### LastSibling

```vb
Public Property Get LastSibling() As TvwNode
```

最后一个兄弟节点。

##### FirstVisibleSibling

```vb
Public Property Get FirstVisibleSibling() As TvwNode
```

第一个可见兄弟节点。

##### LastVisibleSibling

```vb
Public Property Get LastVisibleSibling() As TvwNode
```

最后一个可见兄弟节点。

##### NextVisibleSibling

```vb
Public Property Get NextVisibleSibling() As TvwNode
```

下一个可见兄弟节点。

##### PreviousVisibleSibling

```vb
Public Property Get PreviousVisibleSibling() As TvwNode
```

上一个可见兄弟节点。

##### FullPath

```vb
Public Property Get FullPath() As String
```

从根到当前节点的完整路径。

##### Visible

```vb
Public Property Get Visible() As Boolean
```

节点是否可见。

#### TvwNode 方法

##### Move

```vb
Public Sub Move(ByVal Relative As Variant, ByVal Relationship As TvwNodeRelationshipConstants)
```

移动节点到新位置。

##### EnsureVisible

```vb
Public Sub EnsureVisible()
```

确保节点可见（展开父节点并滚动到视图中）。

##### CreateDragImage

```vb
Public Function CreateDragImage() As LongPtr
```

创建节点拖动图像，返回图像列表句柄。

##### SelectedIndex

```vb
Public Function SelectedIndex() As Long
```

返回选中项索引。

### TvwNodes 类

树视图节点集合。

#### TvwNodes 成员

##### NewEnum

```vb
Public Function NewEnum() As IUnknown
```

枚举器（隐藏）。

##### Add

```vb
Public Function Add(Optional ByVal Relative As Variant, Optional ByVal Relationship As Variant, Optional ByVal Key As Variant, Optional ByVal Text As Variant, Optional ByVal Image As Variant, Optional ByVal SelectedImage As Variant) As TvwNode
```

添加节点。

##### Item

```vb
Public Function Item(ByVal Index As Variant) As TvwNode
```

获取节点（默认成员）。

##### Exists

```vb
Public Function Exists(ByVal Index As Variant) As Boolean
```

检查节点是否存在。

##### Count

```vb
Public Property Get Count() As Long
```

节点数量。

##### Clear

```vb
Public Sub Clear()
```

清除所有节点。

##### Remove

```vb
Public Sub Remove(ByVal Index As Variant)
```

移除节点。

### TvwSelectedNodes 类

选中节点集合（多选模式）。

#### TvwSelectedNodes 成员

##### NewEnum

```vb
Public Function NewEnum() As IUnknown
```

枚举器（隐藏）。

##### Item

```vb
Public Function Item(ByVal Index As Long) As TvwNode
```

获取选中节点（默认成员）。

##### Exists

```vb
Public Function Exists(ByVal Index As Long) As Boolean
```

检查选中节点是否存在。

##### Count

```vb
Public Property Get Count() As Long
```

选中节点数量。

## 代码示例

### 基本用法

```vb
' 添加树节点
Dim root As TvwNode
Set root = TreeView1.Nodes.Add(, , "root", "根节点", 1)
root.Expanded = True

TreeView1.Nodes.Add "root", TvwNodeChild, "child1", "子节点1", 2
TreeView1.Nodes.Add "root", TvwNodeChild, "child2", "子节点2", 2

' 处理节点点击
Private Sub TreeView1_NodeClick(ByVal Node As TvwNode, ByVal Button As Integer)
    MsgBox "点击: " & Node.Text
End Sub

' 控制节点展开
Private Sub TreeView1_BeforeExpand(ByVal Node As TvwNode, ByRef Cancel As Boolean)
    If Node.Children = 0 Then
        Cancel = True
    End If
End Sub

' 节点选中变化
Private Sub TreeView1_NodeSelect(ByVal Node As TvwNode)
    Debug.Print "选中: " & Node.FullPath
End Sub
```