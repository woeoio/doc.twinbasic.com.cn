---
title: Report
parent: VB Package
permalink: /tB/Packages/VB/Report/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd593c2cb-8557-4037-8f9d-91a54646cbbe'
  PropagateID: 'd593c2cb-8557-4037-8f9d-91a54646cbbe'
  ReservedCode1: '14a78f88-5555-4104-baa7-a49636c3987f'
  ReservedCode2: '14a78f88-5555-4104-baa7-a49636c3987f'
---

# Report 类

**Report**是一个顶级Win32窗口——类似于[**Form**](/official/Reference/VB/Form/)——专门用于渲染带状报表的打印预览。在IDE中设计的每个报表都成为派生自**Report**的类：其节（报表头/页头/明细/页脚/报表尾）和放置在其中的控件成为该类的成员。在运行时，代码将记录集赋值给[**Recordset**](#recordset)，调用[**Show**](#show)，框架遍历记录集，计算控件上的表达式，并将结果页面绘制到内置预览窗口（底部带有导航工具栏）。[**PrintReport**](#printreport)将相同页面发送到打印机。默认属性为[**Controls**](#controls)，默认事件为[**Load**](#load)。

```vb
' 在报表的代码隐藏文件中 (rptSales)：
Private Sub Report_Load()
    Set Me.Recordset = OpenSalesRecordset()
    Me.Caption = "Sales for " & FormatDateTime(Now, vbLongDate)
End Sub

' 在启动模块中：
Sub Main()
    rptSales.Show vbModal       ' 打开预览窗口
End Sub
```


## 节

报表由最多五个节组成，在每个页面上垂直排列：

| 节          | 绘制时机                                                        |
|------------------|----------------------------------------------------------------|
| **ReportHeader** | 仅一次，在第一页的顶部。                            |
| **PageHeader**   | 在报表头之后的每个页面的顶部。       |
| **Detail**       | [**Recordset**](#recordset)中的每条记录一次。                |
| **PageFooter**   | 每个页面的底部。                                   |
| **ReportFooter** | 仅一次，在最后一页的最后一个明细行之后。  |

节在IDE中设计——每个节是一个容器，持有[**Label**](/official/Reference/VB/Label/)、[**Image**](/official/Reference/VB/Image/)、[**QRCode**](/official/Reference/VB/QRCode/)等控件。节的`KeepTogether`属性防止它在分页符处被拆分；其`BackStyle`和背景色控制节的背景；当节请求时，框架会自动为明细节选择交替行颜色。

## 记录集绑定

[**Recordset**](#recordset)接受任何暴露经典ADO/DAO接口的对象——`EOF`、`MoveNext`和一个可按名称索引的`Fields`集合。框架透明地包装非tB记录集。`Recordset`也可以保持**Nothing**，在这种情况下明细节仅渲染一次且没有字段数据。

节中的控件通过将其`DataField`设置为记录集字段名来选择绑定；框架为每个明细行读取该字段并将其写回控件的值（或[**Label**](/official/Reference/VB/Label/)的[**Caption**](/official/Reference/VB/Label/#caption)，[**QRCode**](/official/Reference/VB/QRCode/)的**Payload**）。对于更复杂的情况，在`DataField`前加`=`使其成为*表达式*——任何混合记录集字段、报表自身的[**Page**](#page) / [**Pages**](#pages) / [**Caption**](#caption)和标准库调用的twinBASIC表达式。一个**DataField**为`="Page " & Report.Page & " of " & Report.Pages`的标签会在每个页面渲染时更新自身。

当**DataField**为空且[**Label**](/official/Reference/VB/Label/)的[**Caption**](/official/Reference/VB/Label/#caption)包含`%`占位符时，这些占位符会自动转换为表达式——参见下面的[标题占位符](#标题占位符)。在标签上设置`DataFieldAggregate`还可以跨行累加表达式的值以获得运行总计。

## 标题占位符

在没有**DataField**的标签内部，[**Caption**](/official/Reference/VB/Label/#caption)中的以下`%`占位符在渲染时被识别并替换：

| 占位符 | 替换为                                                          |
|-------------|------------------------------------------------------------------------|
| `%p`        | 当前[**Page**](#page)页码。                                  |
| `%P`        | 总[**Pages**](#pages)数。                                   |
| `%d`        | 当前日期，格式为`vbShortDate`。                          |
| `%D`        | 当前日期，格式为`vbLongDate`。                           |
| `%t`        | 当前时间，格式为`vbShortTime`。                          |
| `%T`        | 当前时间，格式为`vbLongTime`。                           |
| `%i`        | 报表的[**Caption**](#caption)。                                  |

使用`%%`嵌入字面`%`。没有识别占位符的标题保持不变。

## 内置预览工具栏

报表窗口的底部条是一个固定工具栏，包含三组控件：

- **记录选择器**——首页/上一页/下一页/末页按钮，中间是页码显示。
- **缩放控件**——减/加按钮，中间是百分比显示。
- **打印按钮**——将报表发送到默认打印机（以`ShowDialog := False`调用[**PrintReport**](#printreport)）。

工具栏始终显示，无法隐藏。加号和减号按钮以[**ZoomStep**](#zoomstep)（默认`10`）步进[**ZoomPercent**](#zoompercent)，并将[**ZoomAutoFit**](#zoomautofit)切换为**vbZoomAutoFitNever**。当缩放后的页面超出可用区域时自动出现滚动条；鼠标滚轮垂直滚动，**Shift+滚轮**水平滚动。

## 缩放和页面大小

[**PixelsReportWidth**](#pixelsreportwidth)和[**PixelsReportHeight**](#pixelsreportheight)定义*页边距之间*的页面大小；[**PixelsLeftMargin**](#pixelsleftmargin)、[**PixelsRightMargin**](#pixelsrightmargin)、[**PixelsTopMargin**](#pixelstopmargin)和[**PixelsBottomMargin**](#pixelsbottommargin)定义页边距。所有五个值以*缩放像素*为单位（1 px ≈ 100% DPI下的1/96英寸）。默认值——页面为`300` × `900`，每个页边距为`96/2.54`（≈ 1厘米）——是占位值而非真正的纸张大小；IDE设计器的[**ChangePageSize**](#changepagesize)辅助工具会写入标准纸张大小的值。

### ZoomAutoFitConstants

[**ZoomPercent**](#zoompercent)是渲染缩放（`100` = 1个逻辑像素对应1个屏幕像素）。[**ZoomAutoFit**](#zoomautofit)（[**ZoomAutoFitConstants**](#zoomautofitconstants)）选择框架是否还在每次绘制时重新计算[**ZoomPercent**](#zoompercent)以适应当前窗口：

| 常量                  | 值 | 含义                                                              |
|---------------------------|-------|----------------------------------------------------------------------|
| **vbZoomAutoFit**         | 0     | 每次绘制时重新计算缩放以在窗口中最大化页面。  |
| **vbZoomAutoFitOnce**     | 1     | 在首次绘制时重新计算一次，然后不再修改[**ZoomPercent**](#zoompercent)。 |
| **vbZoomAutoFitNever**    | 2     | 遵循[**ZoomPercent**](#zoompercent)的当前设置。 |

点击工具栏的加号或减号按钮会自动将[**ZoomAutoFit**](#zoomautofit)切换为**vbZoomAutoFitNever**，以保留用户的手动缩放。

## 在节内绘制

每个节的重绘都会在报表上触发[**BeforePaintSection**](#beforepaintsection)，以正在绘制的[**Section**](#beforepaintsection)作为参数。在此事件期间，[**hDC**](#hdc)返回正在记录的节的图元文件设备上下文——绘图原语（[**Line**](#line)、[**Circle**](#circle)、[**PSet**](#pset)、[**PaintPicture**](#paintpicture)、[**Print**](#print)和通过[**hDC**](#hdc)的直接GDI调用）直接写入该节的图像。在事件之外，[**hDC**](#hdc)返回报表窗口自身的DC，仅适用于屏幕绘制。

```vb
Private Sub Report_BeforePaintSection(Section As ControlsSection)
    If Section.SectionType = PageHeader Then
        Me.Line (0, 0)-(Me.PixelsReportWidth, 0), vbBlack
    End If
End Sub
```

## 坐标单位

报表混合三种坐标系：

- **窗口尺寸**——[**Width**](#width)、[**Height**](#height)、[**Left**](#left)和[**Top**](#top)描述报表窗口本身，以缇为单位（屏幕框的大小，包括工具栏）。
- **客户区约束**——[**MinWidth**](#minwidth)、[**MinHeight**](#minheight)、[**MaxWidth**](#maxwidth)和[**MaxHeight**](#maxheight)约束交互式调整大小时的窗口*客户区*，以缇为单位。
- **页面尺寸**——[**PixelsReportWidth**](#pixelsreportwidth)、[**PixelsReportHeight**](#pixelsreportheight)和页边距属性描述*打印页面*，以缩放像素为单位。

继承自窗体式绘图表面的图形原语（[**Cls**](#cls)、[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)、[**Print**](#print)等）使用报表自身的[**ScaleMode**](#scalemode)和[**Scale\***](#scaleleft)属性作为其坐标输入。

## 打印

[**PrintReport**](#printreport)从第1页到最后一页遍历[**Printer**](/official/Reference/VB/Printer/)对象，将每个缓存的图元文件作为一页打印页发送。

```vb
rptSales.PrintReport ShowDialog:=False
```

此测试版尚不支持打印对话框；以**ShowDialog := True**调用**PrintReport**会引发运行时错误5。纸张大小目前锁定为A4——每次打印作业会有消息框提醒用户。

## 属性

### Appearance

决定操作系统如何绘制报表的边框。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。

::: info
保留用于VB6兼容性；此属性对报表窗口没有可观察效果。
:::

### AutoRedraw

在报表窗口上执行的绘制是否在失效之间持久保存。**Boolean**，默认**False**。报表通常依赖通过[**BeforePaintSection**](#beforepaintsection)的逐节绘制，因此此属性很少有用；它是为了与[**Form**](/official/Reference/VB/Form/)保持一致而提供的。

### BackColor

报表窗口绘图表面的背景颜色，作为**OLE_COLOR**。默认为系统3-D表面颜色。窗口大部分被页面预览（使用[**PaperColor**](#papercolor)）和工具栏占据，因此此颜色仅在绘制期间短暂可见。

### BorderStyle

窗口框架样式。[**FormBorderStyleConstants**](/official/Reference/VBRUN/Constants/FormBorderStyleConstants)的成员：**vbBSNone**、**vbFixedSingle**、**vbSizable**（默认）、**vbFixedDialog**、**vbFixedToolWindow**、**vbSizableToolWindow**、**vbSizableNoTitleBar**或**vbSizableToolWindowNoTitleBar**。

### Caption

标题栏文本。**String**。也由`%i`[标题占位符](#标题占位符)返回，并可从标签`DataField`中的`=Report.Caption`表达式访问。

### ChangePageSize

::: info
设计时辅助工具。从IDE属性网格中选择一个值会将[**PixelsReportWidth**](#pixelsreportwidth)和[**PixelsReportHeight**](#pixelsreportheight)设置为相应的纸张大小；此属性本身没有运行时效果，并且始终读回为空。
:::

**ReportSizeConstants**的成员：空（默认）、**A4 Portrait**、**A4 Landscape**、**A3 Portrait**、**A3 Landscape**、**A5 Portrait**、**A5 Landscape**、**Letter Portrait**、**Letter Landscape**、**Tabloid Portrait**、**Tabloid Landscape**、**Legal Portrait**、**Legal Landscape**、**Statement Portrait**、**Statement Landscape**、**Executive Portrait**、**Executive Landscape**。

### ClipControls

在绘制期间是否将子控件从报表窗口的绘图区域中裁剪出来。**Boolean**，默认**True**。运行时只读——在设计时设置。

### ControlBox

标题栏是否显示系统菜单（以及其上的关闭按钮）。**Boolean**，默认**True**。

### Controls

此报表节承载的每个控件的集合，可通过控件名或从零开始的索引访问。**默认属性。**只读——控件由运行时添加到集合中，而非用户代码。

### ControlType

标识此对象为报表的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbReport**。

### Count

[**Controls**](#controls)中的控件数量，作为**Long**。只读。等同于`Me.Controls.Count`。

### CurrentX

省略起始坐标的绘图原语使用的水平画笔位置，以[**ScaleMode**](#scalemode)单位。**Double**。

### CurrentY

省略起始坐标的绘图原语使用的垂直画笔位置，以[**ScaleMode**](#scalemode)单位。**Double**。

### DpiScaleFactorX

报表窗口当前所在显示器的水平DPI缩放因子，作为**Double**。96 DPI时为`1.0`，120 DPI时为`1.25`，依此类推。只读。

### DpiScaleFactorY

报表窗口当前所在显示器的垂直DPI缩放因子。当前始终等于[**DpiScaleFactorX**](#dpiscalefactorx)。只读。

### DrawMode

绘图原语在将画笔与目标组合时应用的光栅操作。[**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants)的成员：**vbCopyPen**（默认）为普通 opacity 绘制。

### DrawStyle

绘图原语使用的画笔线型。[**DrawStyleConstants**](/official/Reference/VBRUN/Constants/DrawStyleConstants)的成员：**vbSolid**（默认）、**vbDash**、**vbDot**、**vbDashDot**、**vbDashDotDot**、**vbInvisible**或**vbInsideSolid**。

### DrawWidth

绘图原语的画笔宽度（以像素为单位）。**Long**，默认`1`。宽度大于`1`时强制[**DrawStyle**](#drawstyle)回到**vbSolid**（Win32 GDI限制）。

### Enabled

决定报表窗口是否接受用户输入。禁用的报表忽略键盘和鼠标输入——包括工具栏按钮。**Boolean**，默认**True**。

### FillColor

由[**Circle**](#circle)和[**Line**](#line)的矩形形式绘制的闭合形状的填充颜色。**OLE_COLOR**，默认`0`（黑色）。仅在[**FillStyle**](#fillstyle)不为**vbFSTransparent**时使用。

### FillStyle

闭合形状的填充图案。[**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants)的成员：**vbFSSolid**、**vbFSTransparent**（默认）、**vbHorizontalLine**、**vbVerticalLine**、**vbUpwardDiagonal**、**vbDownwardDiagonal**、**vbCross**或**vbDiagonalCross**。

### Font

此报表上[**Print**](#print)语句和其他文本绘制使用的**StdFont**。便捷属性**FontName**、**FontSize**、**FontBold**、**FontItalic**、**FontStrikethru**和**FontUnderline**读写此对象的相应成员。

### FontTransparent

当**True**（默认）时，报表上绘制的文本具有透明背景，使底层绘制在文本后面可见。当**False**时，文本绘制在由[**BackColor**](#backcolor)填充的 opaque 矩形上。**Boolean**。

### ForeColor

[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)以及[**Print**](#print)绘制的文本使用的画笔颜色。**OLE_COLOR**。

### hDC

当前与绘制相关的Win32设备上下文句柄，作为**LongPtr**。只读。在[**BeforePaintSection**](#beforepaintsection)处理程序内部，返回正在记录的节的图元文件DC；在事件之外，返回报表窗口自身的DC。当底层窗口尚未创建时返回`0`。

### HasDC

报表窗口是否为其绘图表面保持私有设备上下文（`CS_OWNDC`）。**Boolean**，默认**True**。运行时只读——在设计时设置。

### Height

报表窗口的外部高度，以缇为单位。**Double**。设置它会调整窗口大小。运行时受[**MinHeight**](#minheight)和[**MaxHeight**](#maxheight)约束（当它们非零时）。

### HelpContextID

标识应用程序帮助文件中主题的**Long**，当用户在报表具有焦点时按**F1**时检索。

### hWnd

报表的Win32窗口句柄，作为**LongPtr**。只读。适用于传递给API函数。

### Icon

在标题栏、任务栏和Alt-Tab中显示的图标。类型为**vbPicTypeIcon**的**StdPicture**。

### Image

将渲染的绘图表面作为**StdPicture**返回。只读。当[**AutoRedraw**](#autoredraw)为**True**时最有用。

### KeyPreview

当**True**时，报表的[**KeyDown**](#keydown)、[**KeyUp**](#keyup)和[**KeyPress**](#keypress)事件在焦点控件收到相同按键*之前*触发。**Boolean**，默认**False**。

### Left

报表窗口外部矩形的水平位置，以缇为单位，从屏幕左边缘测量——对于MDI子窗口，从MDI父级客户区的左边缘测量。**Double**。

### MaxButton

标题栏是否显示最大化按钮。**Boolean**，默认**True**，运行时只读。在设计时设置。

### MaxHeight

报表窗口*客户区*的最大高度，以缇为单位。**Double**，默认`0`（无限制）。在交互式调整大小时遵守。

### MaxWidth

报表窗口*客户区*的最大宽度，以缇为单位。**Double**，默认`0`（无限制）。在交互式调整大小时遵守。

### MDIChild

当**True**时，报表作为[**MDIForm**](/official/Reference/VB/MDIForm/)的子窗口承载。**Boolean**，只读——在设计时设置。MDI子报表不能以模态方式显示。

### MinButton

标题栏是否显示最小化按钮。**Boolean**，默认**True**，运行时只读。在设计时设置。

### MinHeight

报表窗口*客户区*的最小高度，以缇为单位。**Double**，默认`0`（无限制）。在交互式调整大小时遵守。

### MinWidth

报表窗口*客户区*的最小宽度，以缇为单位。**Double**，默认`0`（无限制）。在交互式调整大小时遵守。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于报表上时用作鼠标光标的**StdPicture**。

### MousePointer

当指针位于报表上时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Moveable

用户是否可以通过标题栏拖动报表窗口。**Boolean**，默认**True**。

### Name

报表的唯一设计时名称。运行时只读。也是生成的报表类的类名。

### Opacity

报表窗口的 opacity 百分比（0--100，默认100）。超出范围的值在**Initialize**时被钳制。低于100的值会使窗口成为分层窗口。

### Page

当前正在预览的页码（从1开始）。**Long**。设置**Page**会将预览滚动到该页。赋值`-1`跳到最后一页（首先渲染并缓存所有中间页面）。可从标签**DataField**中的`=Report.Page`表达式访问，或通过`%p`[标题占位符](#标题占位符)访问。

### Pages

报表的总页数。**Long**。初始化为`999`，在框架渲染了足够多的页面以知道实际计数后向下修正。可从标签**DataField**中的`=Report.Pages`表达式访问，或通过`%P`[标题占位符](#标题占位符)访问。

### PaperColor

预览中渲染页面后面的模拟纸张颜色。**OLE_COLOR**，默认**vbWhite**。

::: info
此属性仅影响*预览*——它不会更改发送到打印机的颜色。
:::

### Picture

作为报表窗口背景绘制的**StdPicture**。在任何绘图原语或子控件之前绘制。赋值**Nothing**移除背景。

### PictureDpiScaling

当**True**时，[**Picture**](#picture)在绘制前按当前DPI因子缩放。**Boolean**，默认**False**。

### PixelsBottomMargin

底部页边距，以缩放像素为单位。**Double**，默认`96 / 2.54`（≈ 1厘米）。在窗体文件中存储为`BottomMargin`。

### PixelsLeftMargin

左侧页边距，以缩放像素为单位。**Double**，默认`96 / 2.54`（≈ 1厘米）。在窗体文件中存储为`LeftMargin`。

### PixelsReportHeight

页面内容高度（上下页边距之间），以缩放像素为单位。**Double**，默认`900`。在窗体文件中存储为`ReportHeight`。

### PixelsReportWidth

页面内容宽度（左右页边距之间），以缩放像素为单位。**Double**，默认`300`。在窗体文件中存储为`ReportWidth`。

### PixelsRightMargin

右侧页边距，以缩放像素为单位。**Double**，默认`96 / 2.54`（≈ 1厘米）。在窗体文件中存储为`RightMargin`。

### PixelsTopMargin

顶部页边距，以缩放像素为单位。**Double**，默认`96 / 2.54`（≈ 1厘米）。在窗体文件中存储为`TopMargin`。

### Recordset

为明细节迭代的数据源。使用**Set**设置。

语法：**Set** *object*.**Recordset** = *value*

*value*
: 任何具有`EOF`、`MoveNext`和`Fields`集合的对象（tB **ITbRecordset**直接使用；其他记录集被透明包装）。可以为**Nothing**，在这种情况下明细节仅渲染一次且没有字段数据。

赋值**Recordset**本身不会重置分页——调用`Page = 1`（或**Refresh**）以从新的第一页开始预览。

### RecordNum

明细节当前正在处理的记录的从1开始的序号。**Long**。由框架在遍历记录集时更新；在表达式和[**BeforePaintSection**](#beforepaintsection)处理程序中很有用。

### RightToLeft

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

### ScaleHeight

逻辑绘图矩形的高度，以[**ScaleMode**](#scalemode)单位。**Double**。设置它（或[**ScaleWidth**](#scalewidth)、[**ScaleLeft**](#scaleleft)或[**ScaleTop**](#scaletop)）会隐式将**ScaleMode**切换为**vbUser**。

### ScaleLeft

报表窗口客户区左边缘的逻辑水平坐标，以[**ScaleMode**](#scalemode)单位。**Double**，默认`0`。

### ScaleMode

[**CurrentX**](#currentx)、[**CurrentY**](#currenty)、绘图原语、[**TextWidth**](#textwidth)和[**TextHeight**](#textheight)使用的度量单位。[**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)的成员：**vbTwips**（默认）、**vbPoints**、**vbPixels**、**vbCharacters**、**vbInches**、**vbMillimeters**、**vbCentimeters**或**vbUser**。

### ScaleTop

报表窗口客户区顶边缘的逻辑垂直坐标，以[**ScaleMode**](#scalemode)单位。**Double**，默认`0`。

### ScaleWidth

逻辑绘图矩形的宽度，以[**ScaleMode**](#scalemode)单位。**Double**。

### ShowInTaskbar

报表窗口是否出现在Windows任务栏和Alt-Tab列表中。**Boolean**，默认**True**。运行时只读——在设计时设置。

### StartUpPosition

首次显示时报表窗口的初始位置如何确定。[**StartUpPositionConstants**](/official/Reference/VBRUN/Constants/StartUpPositionConstants)的成员：**vbStartUpManual**、**vbStartUpOwner**、**vbStartUpScreen**或**vbStartUpWindowsDefault**（默认）。运行时只读——在设计时设置。

### Tag

应用程序可用于将自定义数据与报表关联的自由格式**String**。框架忽略此属性。

### Top

报表窗口外部矩形的垂直位置，以缇为单位，从屏幕顶边缘测量——对于MDI子窗口，从MDI父级客户区的顶边缘测量。**Double**。

### TopMost

报表窗口是否位于始终置顶的z序层。**Boolean**，只读。

### TransparencyKey

设置后变为完全透明的**OLE_COLOR**——点击穿透到下面的内容，相应的像素不绘制。默认`-1`禁用此效果。

### Visible

报表窗口是否显示。**Boolean**，默认**True**。在报表隐藏时将**Visible**设置为**True**等同于调用[**Show**](#show) **vbModeless**；设置为**False**等同于调用[**Hide**](#hide)。

### Width

报表窗口的外部宽度，以缇为单位。**Double**。设置它会调整窗口大小。运行时受[**MinWidth**](#minwidth)和[**MaxWidth**](#maxwidth)约束（当它们非零时）。

### WindowState

窗口的正常/最小化/最大化状态。[**FormWindowStateConstants**](/official/Reference/VBRUN/Constants/FormWindowStateConstants)的成员：**vbNormal** (0, 默认)、**vbMinimized** (1)或**vbMaximized** (2)。在运行时设置时，如果报表可见，会立即更新窗口位置。

### ZoomAutoFit

选择[**ZoomPercent**](#zoompercent)如何自动更新。**ZoomAutoFitConstants**的成员（参见[缩放和页面大小](#缩放和页面大小)）：**vbZoomAutoFit** (0, 默认)、**vbZoomAutoFitOnce** (1)或**vbZoomAutoFitNever** (2)。工具栏的加号和减号按钮将其切换为**vbZoomAutoFitNever**。

### ZoomPercent

当前渲染缩放，以百分比表示。**Double**，默认`100`。当[**ZoomAutoFit**](#zoomautofit)为**vbZoomAutoFit**或**vbZoomAutoFitOnce**时，框架在绘制前重新计算此值；工具栏的加号和减号按钮增减[**ZoomStep**](#zoomstep)。

### ZoomStep

每次点击工具栏加号或减号按钮时[**ZoomPercent**](#zoompercent)的变化量。**Long**，默认`10`。

## 方法

### Circle

使用[**ForeColor**](#forecolor)绘制轮廓，[**FillColor**](#fillcolor)/[**FillStyle**](#fillstyle)填充内部，在当前绘图表面上绘制圆、椭圆或弧（参见[**hDC**](#hdc)）。

语法：*object*.**Circle** [ **Step** ] ( *X*, *Y* ), *Radius* [, [ *Color* ] [, [ *Start* ] [, [ *End* ] [, *Aspect* ] ] ] ]

*X*, *Y*
: *必需* 圆心，以[**ScaleMode**](#scalemode)单位。**Step**使圆心相对于([**CurrentX**](#currentx), [**CurrentY**](#currenty))。

*Radius*
: *必需* 以**ScaleMode**单位给出半径的**Single**。

*Color*
: *可选* 轮廓的**OLE_COLOR**；默认为[**ForeColor**](#forecolor)。

*Start*, *End*
: *可选* 以弧度为单位的角，用于绘制弧而非完整圆。

*Aspect*
: *可选* 垂直半径与水平半径的比率。`1.0`为圆形；偏离`1.0`的值产生椭圆。

### Close

启动报表窗口的卸载序列——[**QueryUnload**](#queryunload)，然后是[**Unload**](#unload)，然后是[**Terminate**](#terminate)。前两个事件中的任何一个都可以通过将*Cancel*设置为非零来取消关闭。

语法：*object*.**Close**

### Cls

清除在当前绘图表面上由[**Circle**](#circle)、[**Line**](#line)、[**PSet**](#pset)、[**PaintPicture**](#paintpicture)和[**Print**](#print)执行的任何绘制，重新绘制[**BackColor**](#backcolor)，并将[**CurrentX**](#currentx) / [**CurrentY**](#currenty)重置为`0`。

语法：*object*.**Cls**

### Hide

隐藏报表窗口而不卸载它。类实例及其节被保留；调用[**Show**](#show)（或赋值[**Visible**](#visible) = **True**）将其带回。等同于赋值**Visible** = **False**。

语法：*object*.**Hide**

### Line

使用[**ForeColor**](#forecolor)（或显式颜色）和[**DrawWidth**](#drawwidth)/[**DrawStyle**](#drawstyle)在当前绘图表面上绘制直线或矩形（参见[**hDC**](#hdc)）。

语法：*object*.**Line** [ [ **Step** ] ( *X1*, *Y1* ) ] -[ **Step** ] ( *X2*, *Y2* ) [, [ *Color* ] [, **B** [ **F** ] ] ]

*X1*, *Y1*
: *可选* 起始点，以[**ScaleMode**](#scalemode)单位。省略时，从当前画笔位置开始绘制。

*X2*, *Y2*
: *必需* 终止点，以**ScaleMode**单位。**Step**使点相对于(*X1*, *Y1*)。

*Color*
: *可选* 线条的**OLE_COLOR**；默认为[**ForeColor**](#forecolor)。

**B**
: *可选* 绘制一个以(*X1*, *Y1*)和(*X2*, *Y2*)为对角的矩形。

**F**
: *可选* 与**B**组合时，用[**ForeColor**](#forecolor)而非[**FillColor**](#fillcolor)/[**FillStyle**](#fillstyle)填充矩形。

### Move

通过一次调用重新定位并可选地调整报表窗口大小。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**。

*Top*, *Width*, *Height*
: *可选* 相应属性的新值。省略的值保持不变。

### PaintPicture

将**StdPicture**绘制到当前绘图表面上，支持可选的缩放和光栅操作。

语法：*object*.**PaintPicture** *Picture*, *X1*, *Y1* [, *Width1* [, *Height1* [, *X2* [, *Y2* [, *Width2* [, *Height2* [, *Opcode* [, *StretchQuality* ] ] ] ] ] ] ] ]

*Picture*
: *必需* 要绘制的**StdPicture**。

*X1*, *Y1*
: *必需* 目标左上角，以[**ScaleMode**](#scalemode)单位。

*Width1*, *Height1*
: *可选* 目标大小；默认为图片的自然大小。

*X2*, *Y2*, *Width2*, *Height2*
: *可选* 图片内的源矩形；默认为整个图片。

*Opcode*
: *可选* 光栅操作代码（[**RasterOpConstants**](/official/Reference/VBRUN/Constants/RasterOpConstants)的成员）。默认为**vbSrcCopy**。

*StretchQuality*
: *可选* 缩放时的插值方法。默认为普通质量。

### Print

使用[**Font**](#font)将文本写入当前绘图表面，从[**CurrentX**](#currentx) / [**CurrentY**](#currenty)开始并随之推进。在[**BeforePaintSection**](#beforepaintsection)处理程序内部，文本出现在正在绘制的节上；在处理程序之外，文本直接绘制在报表窗口上。

语法：*object*.**Print** \[ *expressionlist* ] \[ **;** \| **,** ]

末尾的`;`或`,`抑制换行，使下一次**Print**调用在同一行继续。**Print**是语言级语句，不是函数调用——多个表达式可以用`;`（无间距）或`,`（跳到下一个打印区域）分隔，**Spc(n)** / **Tab(n)**插入空格或移到列。

::: info
要将报表发送到打印机，请使用[**PrintReport**](#printreport)——而非**Print**。
:::

### PrintReport

将报表的每一页发送到[**Printer**](/official/Reference/VB/Printer/)对象。从第1页遍历到最后一页，依次生成每个缓存的图元文件。

语法：*object*.**PrintReport** [ *ShowDialog* [, *Range* [, *PageFrom* [, *PageTo* ] ] ] ]

*ShowDialog*
: *可选* 当**True**（默认）时，在打印前显示标准打印对话框。**尚不支持**——以**ShowDialog := True**调用**PrintReport**会引发运行时错误5。

*Range*
: *可选* **PageRangeConstants**的成员：**rptRangeAllPages** (0, 默认)或**rptRangeFromTo** (1)。

*PageFrom*, *PageTo*
: *可选* 当*Range*为**rptRangeFromTo**时，要打印的包含范围。

::: info
此测试版中打印机纸张大小目前锁定为A4。
:::

### PSet

将当前绘图表面上的单个像素设置为指定颜色。

语法：*object*.**PSet** [ **Step** ] ( *X*, *Y* ) [, *Color* ]

*X*, *Y*
: *必需* 像素位置，以[**ScaleMode**](#scalemode)单位。**Step**使位置相对于([**CurrentX**](#currentx), [**CurrentY**](#currenty))。

*Color*
: *可选* **OLE_COLOR**；默认为[**ForeColor**](#forecolor)。

### Refresh

强制报表窗口立即重绘。

语法：*object*.**Refresh**

### Scale

通过一次调用设置报表窗口的逻辑绘图矩形——赋值[**ScaleLeft**](#scaleleft)、[**ScaleTop**](#scaletop)、[**ScaleWidth**](#scalewidth)和[**ScaleHeight**](#scaleheight)。将[**ScaleMode**](#scalemode)切换为**vbUser**。不带参数调用**Scale**会将矩形重置为与客户区1:1映射（以像素为单位）。

语法：*object*.**Scale** [ ( *X1*, *Y1* )-( *X2*, *Y2* ) ]

*X1*, *Y1*
: *可选* 左上角的逻辑坐标。

*X2*, *Y2*
: *可选* 右下角的逻辑坐标。

### ScaleX

将水平长度从一种[**ScaleMode**](#scalemode)转换为另一种。

语法：*object*.**ScaleX**( *Width* [, *FromScale* [, *ToScale* ] ] )

*Width*
: *必需* 给出源长度的**Single**。

*FromScale*, *ToScale*
: *可选* [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)的成员。省略时默认为当前**ScaleMode**。

### ScaleY

将垂直长度从一种[**ScaleMode**](#scalemode)转换为另一种。

语法：*object*.**ScaleY**( *Height* [, *FromScale* [, *ToScale* ] ] )

*Height*
: *必需* 给出源长度的**Single**。

*FromScale*, *ToScale*
: *可选* [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)的成员。省略时默认为当前**ScaleMode**。

### SetFocus

激活报表窗口并将输入焦点给予**TabIndex**为`0`的控件（或最后持有焦点的控件）。

语法：*object*.**SetFocus**

### Show

使报表窗口可见。首次调用时触发[**Load**](#load)。

语法：*object*.**Show** [ *Modal* [, *OwnerForm* ] ]

*Modal*
: *可选* [**FormShowConstants**](/official/Reference/VBRUN/Constants/FormShowConstants)的成员：**vbModeless** (0, 默认——调用立即返回)或**vbModal** (1——调用阻塞直到报表关闭)。

*OwnerForm*
: *可选* 对于模态显示，在报表打开期间被禁用的窗体；默认为当前活动窗体。

### TextHeight

返回给定字符串使用报表当前[**Font**](#font)绘制时将占用的 height，以[**ScaleMode**](#scalemode)单位。

语法：*object*.**TextHeight**( *Str* )

*Str*
: *必需* 要测量的**String**。

### TextWidth

返回给定字符串使用报表当前[**Font**](#font)绘制时将占用的 width，以[**ScaleMode**](#scalemode)单位。

语法：*object*.**TextWidth**( *Str* )

*Str*
: *必需* 要测量的**String**。

### ZOrder

将报表窗口带到顶级z序的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront** (0, 默认)或**vbSendToBack** (1)。

## 事件

### Activate

当报表窗口成为应用程序中的活动窗口时引发——要么是在[**Load**](#load)之后的首次显示，要么是它从另一个窗口重新获得激活时。

语法：*object*\_**Activate**( )

### BeforePaintSection

每个节在渲染时引发一次，在框架绘制该节中的控件之前。在处理程序内部，[**hDC**](#hdc)返回正在记录该节的图元文件设备上下文，因此任何绘图原语（[**Line**](#line)、[**Circle**](#circle)、[**Print**](#print)等）或直接GDI调用直接写入该节。

语法：*object*\_**BeforePaintSection**( *Section* **As ControlsSection** )

*Section*
: 当前正在绘制的节。检查*Section*`.SectionType`（**ReportHeader**、**PageHeader**、**Detail**、**PageFooter**或**ReportFooter**）来区分。

### Click

当用户单击报表窗口的客户区时引发（即不在工具栏或任何子控件上）。

语法：*object*\_**Click**( )

### DblClick

当用户双击报表窗口的客户区时引发。

语法：*object*\_**DblClick**( )

### Deactivate

当应用程序中的另一个窗口从此报表夺走激活时引发。当激活移到不同应用程序的窗口时不引发。

语法：*object*\_**Deactivate**( )

### DPIChange

当报表窗口移动到具有不同DPI缩放的显示器时引发，*但仅当*应用程序是按显示器DPI感知的（`PROCESS_PER_MONITOR_DPI_AWARE`）。事件的*NewDPI*参数给出新的有效DPI。

语法：*object*\_**DPIChange**( *NewDPI* **As Long** )

### GotFocus

当报表窗口获得输入焦点且报表没有启用的子控件可以代替获取焦点时引发。

语法：*object*\_**GotFocus**( )

### Initialize

引发一次，在底层窗口创建之前且报表的任何控件存在之前。适用于设置报表级字段的初始值。

语法：*object*\_**Initialize**( )

### KeyDown

当用户按下任意键时引发。默认在焦点控件上触发；[**KeyPreview**](#keypreview)为**True**时，首先在报表上触发。

语法：*object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

当用户输入产生ANSI按键的字符时引发。默认在焦点控件上触发；[**KeyPreview**](#keypreview)为**True**时，首先在报表上触发。

语法：*object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

当用户释放键时引发。默认在焦点控件上触发；[**KeyPreview**](#keypreview)为**True**时，首先在报表上触发。

语法：*object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### Load

在报表的窗口和所有节控件创建之后，报表首次出现在屏幕之前引发。这是分配[**Recordset**](#recordset)和执行需要控件存在的任何初始化的经典位置。**默认事件。**

语法：*object*\_**Load**( )

### LostFocus

当报表窗口失去输入焦点时引发。

语法：*object*\_**LostFocus**( )

### MouseDown

当用户在报表窗口的客户区按下任意鼠标按钮时引发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

当光标在报表窗口的客户区上移动时引发。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

当用户在报表窗口的客户区释放鼠标按钮时引发。

语法：*object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### QueryUnload

在报表卸载之前引发，给应用程序确认或取消关闭的机会。将*Cancel*设置为非零保持报表打开。始终在[**Unload**](#unload)之前引发。

语法：*object*\_**QueryUnload**( *Cancel* **As Integer**, *UnloadMode* **As Integer** )

*Cancel*
: 设置为非零（任何非零值，约定为**1**）以取消关闭。

*UnloadMode*
: 标识触发关闭原因的[**QueryUnloadConstants**](/official/Reference/VBRUN/Constants/QueryUnloadConstants)成员。

### Resize

当报表窗口被调整大小时引发——由用户、代码、操作系统在[**WindowState**](#windowstate)更改后、或首次显示时的初始布局。

语法：*object*\_**Resize**( )

### Terminate

在报表窗口已销毁且类实例即将被释放之后引发。此时控件不再可访问。

语法：*object*\_**Terminate**( )

### Unload

在[**QueryUnload**](#queryunload)批准之后且报表窗口被销毁之前引发。将*Cancel*设置为非零保持报表打开并阻止卸载。

语法：*object*\_**Unload**( *Cancel* **As Integer** )

*Cancel*
: 设置为非零（任何非零值，约定为**1**）以取消卸载。