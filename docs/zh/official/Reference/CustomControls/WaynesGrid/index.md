---
title: WaynesGrid
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/WaynesGrid/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '97e1c89d-78b1-43d9-af37-6dd69f0443dd'
  PropagateID: '97e1c89d-78b1-43d9-af37-6dd69f0443dd'
  ReservedCode1: '1fdd1b0c-6e20-484d-8deb-d8b4f108fef6'
  ReservedCode2: '1fdd1b0c-6e20-484d-8deb-d8b4f108fef6'
---

# WaynesGrid 类
表格数据显示——带列标题和行标题的单元格网格、可调整列宽、可选网格线、悬停和选择高亮、通过鼠标滚轮的垂直和水平滚动以及完整的键盘导航。行数由 [**RowCount**](#rowcount) 设置；单元格本身通过处理 [**GetCellText**](#getcelltext) 事件填充，该事件在网格绘制时每个可见单元格触发一次。

网格有一个 [**Column**](/official/Reference/CustomControls/WaynesGrid/Column) 对象数组，为每列提供 [**Caption**](/official/Reference/CustomControls/WaynesGrid/Column#caption) 和 [**Width**](/official/Reference/CustomControls/WaynesGrid/Column#width)。五个不同的 [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions) 子对象控制列标题、行标题、普通单元格、悬停单元格、选中单元格以及全列/全行多选的外观。

```vb
Private Sub Form_Load()
    ReDim Grid1.Columns(2)
    Set Grid1.Columns(0) = New Column
    Set Grid1.Columns(1) = New Column
    Set Grid1.Columns(2) = New Column
    Grid1.Columns(0).Caption = "ID"
    Grid1.Columns(1).Caption = "Name"
    Grid1.Columns(2).Caption = "Date"
    Grid1.RowCount = 100
End Sub

Private Sub Grid1_GetCellText( _
        ByVal X As Long, ByVal Y As Long, ByRef Value As String)

    Select Case X
        Case 0: Value = CStr(Y + 1)
        Case 1: Value = "Row " & (Y + 1)
        Case 2: Value = Format$(DateAdd("d", Y, Date), "yyyy-mm-dd")
    End Select
End Sub
```

六个 [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions) 子对象（[**ColumnHeaderOptions**](#columnheaderoptions)、[**RowHeaderOptions**](#rowheaderoptions)、[**CellOptions**](#celloptions)、[**HoverCellOptions**](#hovercelloptions)、[**SelectedCellOptions**](#selectedcelloptions)、[**MultiSelectCellOptions**](#multiselectcelloptions)）控制网格的视觉风格。典型设置为标题行添加渐变、正文单元格左对齐文本附带小幅左内边距缩进、选中单元格添加对比边框：

```vb
With Grid1.ColumnHeaderOptions
    .Fill.SetSimplePattern &HE0E0E0, &HC0C0C0, _
            Pattern:=tbGradientNorthToSouth
    .TextRendering.Font.Weight = tbBold
    .TextRendering.Alignment = tbAlignMiddleCenter
End With

With Grid1.CellOptions
    .Fill.ColorPoints.SetSolidColor vbWhite
    .TextRendering.Alignment = tbAlignMiddleLeft
    .TextRendering.Padding.Left = 10
End With

With Grid1.SelectedCellOptions
    .Fill.ColorPoints.SetSolidColor &HFFEEDD                ' pale blue
    .Borders.SetSimpleBorder StrokeSize:=2, ColorRGB:=vbBlue
End With
```

## 单元格选择

网格暴露三种独立的选择状态，每种通过自己的属性对跟踪：

- 单个悬停高亮单元格——当前鼠标下的单元格——由 [**HoverCellOptions**](#hovercelloptions) 控制。网格内部使用；不作为属性暴露。
- 单个选中单元格，坐标在 [**SelectedCellX**](#selectedcellx) 和 [**SelectedCellY**](#selectedcelly) 中，使用 [**SelectedCellOptions**](#selectedcelloptions) 绘制。
- 通过点击行标题或列标题的全行或全列多选。[**SelectedFullColumnX**](#selectedfullcolumnx) 和 [**SelectedFullRowY**](#selectedfullrowy) 持有索引；受影响的单元格使用 [**MultiSelectCellOptions**](#multiselectcelloptions) 渲染。

选择坐标属性上的 `-1` 值表示"无此类选择"。以编程方式设置选择然后请求网格重绘会通过 [**CustomControlContext.ChangeFocusedElement**](/official/Reference/CustomControls/Framework/CustomControlContext#changefocusedelement) 将焦点移至相应单元格。

## 属性

### Anchors

调整大小时控件的哪些边附着到其容器。[**Anchors**](/official/Reference/CustomControls/Styles/Anchors)。继承。

### CellOptions

用于绘制普通、未选中、未悬停单元格的 [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions)。

### ColumnHeaderOptions

用于绘制列标题行（顶部行）的 [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions)。

### Columns

描述每列的 [**Column**](/official/Reference/CustomControls/WaynesGrid/Column) 对象数组。可读写；`ReDim` 增减大小，将单个 [**Column**](/official/Reference/CustomControls/WaynesGrid/Column) 实例赋给元素。

### Dock

控件在其容器内的停靠方式。[**DockMode**](/official/Reference/CustomControls/Enumerations/DockMode) 的成员。继承。

### HeaderRowHeight

列标题行的高度（像素，未经 DPI 缩放）。**Long**。默认：60。

### Height

控件的高度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### HorizontalLineOptions

连续行之间绘制的 [**Line**](/official/Reference/CustomControls/Styles/Line)。将其 [**StrokeSize**](/official/Reference/CustomControls/Styles/Line#strokesize) 设为 0 可取消水平线。

### HoverCellOptions

用于绘制当前鼠标光标下单元格的 [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions)。

### Left

控件左边缘距其容器的水平偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### MultiSelectCellOptions

用于绘制属于全列或全行多选的单元格的 [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions)。

### Name

控件在其父窗体上的唯一设计时名称。**String**。继承。

### ResizerBar

用户拖动列边缘调整大小时绘制的 [**Line**](/official/Reference/CustomControls/Styles/Line)。未悬停时透明；调整大小激活时以线条的填充渲染。

### RowCount

网格的总行数。**Long**。默认：-1（无限制——网格在用户滚动时绘制行）。

### RowHeaderOptions

用于绘制行标题列（最左侧列）的 [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions)。

### RowHeight

每个非标题行的高度（像素，未经 DPI 缩放）。**Long**。默认：40。

### SelectedCellOptions

用于绘制 ([**SelectedCellX**](#selectedcellx), [**SelectedCellY**](#selectedcelly)) 处当前选中单元格的 [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions)。

### SelectedCellX

当前选中单元格的 X（列）索引，或 -1 表示无选中单元格。**Long**。默认：-1。

### SelectedCellY

当前选中单元格的 Y（行）索引，或 -1 表示无选中单元格。**Long**。默认：-1。

### SelectedFullColumnX

全列多选的 X（列）索引，或 -1 表示无全列选中。**Long**。默认：-1。

### SelectedFullRowY

全行多选的 Y（行）索引，或 -1 表示无全行选中。**Long**。默认：-1。

### TabIndex

控件在窗体 TAB 键导航顺序中的位置。**Long**。继承。

### TabStop

用户是否可以通过按 **TAB** 到达控件。**Boolean**。继承。默认：**True**。

### Top

控件上边缘距其容器的垂直偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### VerticalLineOptions

连续列之间绘制的 [**Line**](/official/Reference/CustomControls/Styles/Line)。将其 [**StrokeSize**](/official/Reference/CustomControls/Styles/Line#strokesize) 设为 0 可取消垂直线。

### Visible

控件当前是否显示。**Boolean**。继承。默认：**True**。

### Width

控件的宽度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

## 方法

### Repaint

请求框架重绘网格。等同于在控件存储的上下文上调用 [**CustomControlContext.Repaint**](/official/Reference/CustomControls/Framework/CustomControlContext#repaint)；作为网格的公共方法暴露，以便外部观察者（如窗体在更新网格背后的数据后）可以直接触发重绘而无需访问框架。

语法：*object*.**Repaint**

## 事件

### GetCellText

网格绘制时每个可见单元格触发一次，向宿主请求要显示的文本。默认文本为 `<列标题><行索引+1>`——在处理程序中替换 *Value* 以显示真实数据。

语法：*object*\_**GetCellText**( **ByVal** *X* **As Long**, **ByVal** *Y* **As Long**, **ByRef** *Value* **As String** )

*X*
: 正在绘制的单元格的列索引。

*Y*
: 正在绘制的单元格的行索引。

*Value*
: 预填充的默认值；对其赋值以覆盖显示内容。