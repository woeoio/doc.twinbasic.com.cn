---
title: "Printer 打印机"
parent: VB Package
permalink: /tB/Packages/VB/Printer/
---

# Printer 类

**Printer**对象封装一个Windows打印机设备，暴露一个绘图表面，记录应用程序的图形调用并将其作为打印作业转发到后台打印处理器。隐式**Printer**是可变的，跟踪系统默认打印机；[**Printers**](/official/Reference/VB/Printers/)集合的条目是已安装设备的只读描述符，用于枚举或使用`Set Printer = Printers("HP LaserJet")`切换活动打印机。

打印作业在应用程序首次在**Printer**上调用绘图或文本方法（[**Print**](#print)、[**Line**](#line)、[**Circle**](#circle)、[**PSet**](#pset)、[**PaintPicture**](#paintpicture)等）时隐式开始，由[**EndDoc**](#enddoc)完成。[**NewPage**](#newpage)在同一作业中前进到新页面；[**KillDoc**](#killdoc)在不完成当前页的情况下中止作业。

```vb
Printer.FontSize = 12
Printer.Print "Hello, world!"
Printer.NewPage
Printer.Print "Second page."
Printer.EndDoc
```

用户代码从不直接实例化**Printer**——该类标记为`[COMCreatable(False)]`，其公共API没有有用的构造函数。两条访问路径是隐式**Printer**全局对象和[**Printers**](/official/Reference/VB/Printers/)集合。


## 默认Printer和Printers集合

twinBASIC暴露一个隐式**Printer**对象，可从用户代码的任何位置按名称访问，以及一个[**Printers**](/official/Reference/VB/Printers/)集合，枚举系统上安装的每台打印机：

```vb
Dim p As Printer
For Each p In Printers
    Debug.Print p.DeviceName, p.DriverName, p.Port
Next
```

默认情况下，隐式**Printer**的[**TrackDefault**](#trackdefault)为**True**：每次属性读取都会查询当前系统默认打印机，因此应用程序无需重启即可反映用户在"设置→打印机"中所做的更改。写入设置属性、调用**Set Printer = Printers(i)**或开始打印作业会将**TrackDefault**锁定为**False**并将对象固定到特定设备。

[**Printers**](/official/Reference/VB/Printers/)返回的条目是不可变的——对其属性赋值会引发运行时错误383（*Property is read-only*），文档控制方法会引发错误438（*Object doesn't support this property or method*）。要打印到其中一台，使用**Set**将其复制到隐式**Printer**上：

```vb
Set Printer = Printers("HP LaserJet")
Printer.Orientation = vbPRORLandscape
Printer.Print "Hello on landscape paper."
Printer.EndDoc
```

`Set Printer = …`不会替换隐式实例——它将新设备的标识转发到现有对象上，在此过程中结束任何活动打印作业并丢弃缓存的设备上下文。

## 打印作业生命周期

管理作业的方法——[**EndDoc**](#enddoc)、[**KillDoc**](#killdoc)、[**NewPage**](#newpage)——以及隐式的"首次输出时启动"规则共同形成一个小型状态机：

| 状态               | 推进方式                                                                                          |
|--------------------|----------------------------------------------------------------------------------------------------|
| 无进行中的作业     | 下一个绘图或文本方法开始新作业和新页面。                                                           |
| 页面进行中         | [**NewPage**](#newpage)发出当前页面并开始另一页；[**EndDoc**](#enddoc)发出当前页面并完成作业。    |
| 任何状态           | [**KillDoc**](#killdoc)在不发出当前页面内容的情况下中止作业。                                      |

[**Page**](#page)报告当前页码（从1开始）。影响页面几何的属性赋值——[**PaperSize**](#papersize)、[**Orientation**](#orientation)、[**Copies**](#copies)、[**Width**](#width)、[**Height**](#height)、[**Duplex**](#duplex)、[**PaperBin**](#paperbin)、[**ColorMode**](#colormode)、[**PrintQuality**](#printquality)、[**Zoom**](#zoom)——必须在空白页面上赋值；在页面进行中赋值会引发错误396（*'PropertyName' cannot be set within a page*）。

## 坐标系统

**Printer**有自己的坐标系统，通过[**ScaleMode**](#scalemode)、[**Scale\***](#scaleleft)属性和[**Scale**](#scale)配置。默认模式为**vbTwips**，表面覆盖物理纸张区域。绘图原语使用当前单位消耗坐标；[**ScaleX**](#scalex)和[**ScaleY**](#scaley)在任意两种缩放模式之间转换距离而不改变活动模式。

```vb
Printer.ScaleMode = vbInches
Printer.Line (0.5, 0.5)-(8, 10.5), vbBlack, B   ' 1/2英寸边距矩形
```

## 打印到文件

在作业开始**之前**将路径赋值给[**OutputFile**](#outputfile)会将原始后台输出重定向到该文件而非打印机设备。文件包含打印机驱动程序特定的字节，否则这些字节将通过端口发送——通常是`.prn`文件，稍后可使用**COPY /B**命令复制到端口。

```vb
Printer.OutputFile = "C:\Spool\report.prn"
Printer.Print "Captured to file"
Printer.EndDoc
```

## 属性

### ColorMode

打印机是否应以彩色或单色打印。

语法：*object*.**ColorMode** [ = *value* ]

*value*
: [**PrinterObjectConstants_ColorMode**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_ColorMode)的成员：**vbPRCMMonochrome** (1)或**vbPRCMColor** (2)。其他值引发错误380。

### Copies

要打印的份数。**Integer**。驱动程序支持的最大值通过设备能力API检查：大于最大值的值引发错误380，不公布最大值的驱动程序引发错误483（*Printer driver does not support specified property*）。

### CurrentX

[**Print**](#print)、[**Line**](#line)、[**Circle**](#circle)和[**PSet**](#pset)省略起始坐标时使用的水平画笔位置。**Double**，采用当前[**ScaleMode**](#scalemode)单位。每次绘图调用后自动更新。

### CurrentY

垂直画笔位置。**Double**。参见[**CurrentX**](#currentx)。

### DeviceName

绑定打印机的友好名称，如Windows打印机对话框中所示。**String**，只读。当[**TrackDefault**](#trackdefault)为**True**时，返回*当前*默认打印机而非缓存值。

### DrawMode

绘图方法输出与页面组合时应用的光栅操作。[**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants)的成员，默认**vbCopyPen**（不透明覆盖）。打印机更改后自动重新应用。

### DrawStyle

线条绘制方法使用的画笔图案。[**DrawStyleConstants**](/official/Reference/VBRUN/Constants/DrawStyleConstants)的成员：**vbSolid** (0，默认)、**vbDash**、**vbDot**、**vbDashDot**、**vbDashDotDot**、**vbInvisible**或**vbInsideSolid**。当[**DrawWidth**](#drawwidth)大于1时强制为实线。

### DrawWidth

[**Line**](#line)、[**Circle**](#circle)和[**PSet**](#pset)使用的画笔粗细，以像素为单位。**Long**，默认1。

### DriverName

处理绑定打印机的设备驱动程序名称。**String**，只读。当[**TrackDefault**](#trackdefault)为**True**时，返回*当前*默认打印机的驱动程序。

### Duplex

打印机是否应在纸张的一面或两面打印。

语法：*object*.**Duplex** [ = *value* ]

*value*
: [**PrinterObjectConstants_Duplex**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_Duplex)的成员：**vbPRDPSimplex** (1)、**vbPRDPHorizontal** (2)或**vbPRDPVertical** (3)。超过驱动程序报告的双面打印能力的值引发错误380。简单单面始终被接受，即使驱动程序不公布双面打印支持。

### FillColor

用于填充[**Line**](#line)（带`F`标志时）和[**Circle**](#circle)绘制的闭合形状的颜色，类型为**OLE_COLOR**。默认**0**（黑色）。仅在[**FillStyle**](#fillstyle)不为**vbFSTransparent**时有效。

### FillStyle

用于填充闭合形状的图案。[**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants)的成员：**vbFSTransparent** (1，默认)、**vbFSSolid** (0)或某种影线样式。**Transparent**完全抑制填充，因此只绘制轮廓。

### Font

用于渲染[**Print**](#print)输出和由[**TextWidth**](#textwidth) / [**TextHeight**](#textheight)测量的**StdFont**。便捷属性[**FontName**](#fontname)、[**FontSize**](#fontsize)、[**FontBold**](#fontbold)、[**FontItalic**](#fontitalic)、[**FontStrikethru**](#fontstrikethru)、[**FontUnderline**](#fontunderline)和[**FontTransparent**](#fonttransparent)读写此对象的成员。将字符串赋值给**Font**是赋值给**Font.Name**的快捷方式；使用**Set**赋值**StdFont**替换底层字体对象。

在从[**Printers**](/official/Reference/VB/Printers/)获取的打印机上，**Font**仍可读取（返回一个新的可变**StdFont**），但重新赋值会引发错误383。

### FontBold

[**Font**](#font)`.Bold`的快捷方式。**Boolean**。

### FontCount

打印机上安装的字型数量。**Long**，只读。与[**Fonts**](#fonts)一起使用进行枚举。

### FontItalic

[**Font**](#font)`.Italic`的快捷方式。**Boolean**。

### FontName

[**Font**](#font)`.Name`的快捷方式。**String**。

### Fonts

对打印机上安装的字型名称的索引访问。

语法：*object*.**Fonts**( *Index* ) **As String**

*Index*
: *必需* 从零开始的**Long**，范围`0 .. FontCount - 1`。超出范围的索引返回空字符串而非引发错误。

### FontSize

[**Font**](#font)`.Size`的快捷方式，磅值。**Single**。

### FontStrikethru

[**Font**](#font)`.Strikethrough`的快捷方式。**Boolean**。

### FontTransparent

当为**True**（默认）时，[**Print**](#print)绘制的文本在字形之间保留背景像素不变；当为**False**时，字形的背景以打印机的绘制背景色填充。**Boolean**。

### FontUnderline

[**Font**](#font)`.Underline`的快捷方式。**Boolean**。

### ForeColor

绘图方法画笔（线条、圆形、点）和[**Print**](#print)文本使用的颜色。**OLE_COLOR**。

### hDC

打印机绘图表面的Win32设备上下文句柄，类型为**LongPtr**。只读。

首次读取**hDC**会创建设备上下文——调用驱动程序的**CreateDC**并准备绘图表面——但**不会**启动后台打印作业。后台打印处理器仅在第一个绘图调用运行时启动，因此读取**hDC**进行例如**GetDeviceCaps**查询是非承诺性的：如果应用程序之后从不调用绘图方法，则不会打印任何内容。

### Height

物理页面高度，以缇为单位。**Long**。赋值会覆盖驱动程序报告的纸张高度并强制[**PaperSize**](#papersize)为自定义大小；新值可通过`Height`本身读回。

### Orientation

页面方向。

语法：*object*.**Orientation** [ = *value* ]

*value*
: [**PrinterObjectConstants_Orientation**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_Orientation)的成员：**vbPRORPortrait** (1)或**vbPRORLandscape** (2)。在不公布**DC_ORIENTATION**能力的驱动程序上赋值横向会引发错误380；纵向始终被接受。

### OutputFile

用于捕获原始后台字节而非发送到打印机设备的文件路径。**String**。twinBASIC新增。必须在第一次绘图调用之前设置；在作业活动时赋值对运行中的作业没有影响。在从[**Printers**](/official/Reference/VB/Printers/)获取的打印机上只读。

### Page

当前正在编写的页码，作业开始时从1起。**Long**，只读。由[**EndDoc**](#enddoc)和[**KillDoc**](#killdoc)重置为1；由[**NewPage**](#newpage)递增。

### PaperBin

打印机应从哪个纸盒取纸。

语法：*object*.**PaperBin** [ = *value* ]

*value*
: [**PrinterObjectConstants_PaperBin**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperBin)的成员——例如**vbPRBNUpper**、**vbPRBNManual**、**vbPRBNCassette**。该值必须是驱动程序通过**DC_BINS**枚举的纸盒之一；不支持的值引发错误380。

### PaperSize

要打印的纸张大小。

语法：*object*.**PaperSize** [ = *value* ]

*value*
: [**PrinterObjectConstants_PaperSize**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperSize)的成员——例如**vbPRPSLetter**、**vbPRPSA4**、**vbPRPSEnv10**。对[**Width**](#width)或[**Height**](#height)赋值会将此属性强制为**vbPRPSUser** (256)。

### Port

连接到打印机的端口名称（如`LPT1:`、`USB001`、`IP_192.168.1.50`）。**String**，只读。当[**TrackDefault**](#trackdefault)为**True**时，返回*当前*默认打印机的端口。

### PrintQuality

打印分辨率。

语法：*object*.**PrintQuality** [ = *value* ]

*value*
: **Integer**——驱动程序支持的正DPI值，或[**PrinterObjectConstants_PrintQuality**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PrintQuality)的成员：**vbPRPQDraft** (-1)、**vbPRPQLow** (-2)、**vbPRPQMedium** (-3)或**vbPRPQHigh** (-4)。零或低于-4的值引发错误380。

### RightToLeft

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。
:::

### ScaleHeight

以[**ScaleMode**](#scalemode)单位表示的打印机绘图表面垂直范围。**Double**。赋值会将[**ScaleMode**](#scalemode)切换为**vbUser**并重新缩放垂直轴，使页面映射到新高度。

### ScaleLeft

映射到可打印区域左边缘的X坐标。**Double**，默认0。赋值会将[**ScaleMode**](#scalemode)切换为**vbUser**。

### ScaleMode

[**CurrentX**](#currentx)、[**CurrentY**](#currenty)和每个绘图方法使用的单位。[**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)的成员：**vbUser** (0)、**vbTwips** (1，默认)、**vbPoints**、**vbPixels**、**vbCharacters**、**vbInches**、**vbMillimeters**或**vbCentimeters**。从**vbUser**切换开时将[**ScaleLeft**](#scaleleft)和[**ScaleTop**](#scaletop)重置为0。

### ScaleTop

映射到可打印区域上边缘的Y坐标。**Double**，默认0。赋值会将[**ScaleMode**](#scalemode)切换为**vbUser**。

### ScaleWidth

以[**ScaleMode**](#scalemode)单位表示的打印机绘图表面水平范围。**Double**。赋值会将[**ScaleMode**](#scalemode)切换为**vbUser**。

### TrackDefault

当为**True**时，每次属性读取查询当前系统默认打印机；当为**False**时，**Printer**锁定到由[**DeviceName**](#devicename)、[**DriverName**](#drivername)和[**Port**](#port)标识的特定设备。**Boolean**。

将**TrackDefault**设置为**False**会将当前默认设备捕获到缓存标识符中，使后续读取停止漂移。将其设回**True**会结束任何活动打印作业（如同调用了[**EndDoc**](#enddoc)）并清除缓存的设备上下文。在从[**Printers**](/official/Reference/VB/Printers/)获取的打印机上始终为**False**，且只读。

### TwipsPerPixelX

水平方向上一个设备像素对应的缇数——用于自定义DPI感知的尺寸调整。**Double**，只读。

### TwipsPerPixelY

[**TwipsPerPixelX**](#twipsperpixelx)的垂直对应属性。**Double**，只读。

### Width

物理页面宽度，以缇为单位。**Long**。赋值会覆盖驱动程序报告的纸张宽度并强制[**PaperSize**](#papersize)为自定义大小；新值可通过`Width`本身读回。

### Zoom

驱动程序应用的打印缩放百分比。**Integer**，默认100。大于100的值放大输出；小于100的值缩小输出。零和负值引发错误380。

## 方法

### Circle

在当前页面上绘制圆形、椭圆形或椭圆弧。

语法：*object*.**Circle** [ **Step** ] ( *X*, *Y* ), *Radius* [, *Color* [, *Start* [, *End* [, *Aspect* ] ] ] ]

*X*, *Y*
: *必需* 中心坐标，采用[**ScaleMode**](#scalemode)单位。**Single**。**Step**使它们相对于[**CurrentX**](#currentx) / [**CurrentY**](#currenty)。

*Radius*
: *必需* 沿X轴的半径。**Single**。

*Color*
: *可选* 轮廓的**OLE_COLOR**。默认为[**ForeColor**](#forecolor)。

*Start*、*End*
: *可选* 起始和结束角度，以弧度为单位（0到2π）。负值将弧端点连接到中心形成弦。省略则绘制完整圆形。

*Aspect*
: *可选* Y/X纵横比。**1.0**为圆形（默认）；其他值为椭圆形。

如果没有进行中的作业，**Circle**隐式启动一个。

### EndDoc

完成当前打印作业，将当前页面上的内容发送到后台打印处理器并释放底层GDI文档。没有进行中的作业时无效果。

语法：*object*.**EndDoc**

### KillDoc

中止当前打印作业，丢弃任何进行中的页面输出。立即释放设备上下文，除**AbortDoc**调用外不再与后台打印处理器交互。

语法：*object*.**KillDoc**

### Line

绘制直线、矩形轮廓或填充矩形。

语法：*object*.**Line** [ [ **Step** ] ( *X1*, *Y1* ) ] **-** [ **Step** ] ( *X2*, *Y2* ) [, *Color* [, **B** [**F**] ] ]

*X1*, *Y1*
: *可选* 起始坐标。**Single**。如果省略，线条从[**CurrentX**](#currentx) / [**CurrentY**](#currenty)开始。**Step**使它们相对于画笔。

*X2*, *Y2*
: *必需* 结束坐标。**Single**。**Step**使它们相对于起始点。

*Color*
: *可选* 线条的**OLE_COLOR**。默认为[**ForeColor**](#forecolor)。

*B*
: *可选* 绘制以*(X1, Y1)*和*(X2, Y2)*为对角的矩形而非线条。

*F*
: *可选* 仅在带**B**时有效。以[**FillColor**](#fillcolor)和当前[**FillStyle**](#fillstyle)填充矩形。

如果没有进行中的作业，**Line**隐式启动一个。

### NewPage

将当前页面发送到后台打印处理器并开始新的空白页面。[**Page**](#page)递增；[**CurrentX**](#currentx)和[**CurrentY**](#currenty)重置为0。如果没有进行中的作业，**NewPage**在发出第一个分页符之前隐式启动一个。

语法：*object*.**NewPage**

### PaintPicture

将图片绘制到当前页面上，可选缩放、裁剪或应用光栅操作。

语法：*object*.**PaintPicture** *Picture*, *X1*, *Y1* [, *Width1* [, *Height1* [, *X2* [, *Y2* [, *Width2* [, *Height2* [, *Opcode* ] ] ] ] ] ] ]

*Picture*
: *必需* 要绘制的**IPictureDisp**。

*X1*, *Y1*
: *必需* 目标左上角，采用[**ScaleMode**](#scalemode)单位。

*Width1*, *Height1*
: *可选* 目标大小。默认为图片的自然大小。

*X2*, *Y2*, *Width2*, *Height2*
: *可选* *Picture*内的源矩形。默认为整个图片。

*Opcode*
: *可选* 传递给**BitBlt**的光栅操作代码——例如**&HCC0020**（`vbSrcCopy`，默认）或**&H660046**（`vbSrcInvert`）。

如果没有进行中的作业，**PaintPicture**隐式启动一个。

### Print

使用[**Font**](#font)将文本写入当前页面，从[**CurrentX**](#currentx) / [**CurrentY**](#currenty)开始并随着写入推进。通过**Print**语句分派，因此多个表达式可以用`;`（无间距）或`,`（跳到下一个打印区域）分隔。**Spc(n)**插入*n*个空格，**Tab(n)**移动到打印列*n*。

语法：*object*.**Print** \[ *expressionlist* \] \[ **;** \| **,** \]

末尾的`;`或`,`抑制换行，使下一个[**Print**](#print)调用继续在同一行。如果没有进行中的作业，**Print**隐式启动一个。

### PSet

在当前页面上设置单个像素。

语法：*object*.**PSet** [ **Step** ] ( *X*, *Y* ) [, *Color* ]

*X*, *Y*
: *必需* 坐标，采用[**ScaleMode**](#scalemode)单位。**Single**。**Step**使它们相对于[**CurrentX**](#currentx) / [**CurrentY**](#currenty)。

*Color*
: *可选* **OLE_COLOR**。默认为[**ForeColor**](#forecolor)。

如果没有进行中的作业，**PSet**隐式启动一个。

### Scale

为页面定义用户坐标系。不带参数调用**Scale**将[**ScaleMode**](#scalemode)重置为**vbTwips**并清除[**ScaleLeft**](#scaleleft) / [**ScaleTop**](#scaletop)。

语法：*object*.**Scale** [ ( *X1*, *Y1* ) **-** ( *X2*, *Y2* ) ]

*X1*, *Y1*
: *必需*（与第二对一起）映射到左上角的坐标——设置[**ScaleLeft**](#scaleleft)和[**ScaleTop**](#scaletop)。

*X2*, *Y2*
: *必需* 映射到右下角的坐标——设置[**ScaleWidth**](#scalewidth) = `X2 - X1`和[**ScaleHeight**](#scaleheight) = `Y2 - Y1`。[**ScaleMode**](#scalemode)变为**vbUser**。

带坐标调用**Scale**隐式启动打印作业（匹配VB6行为）；不带参数调用不会。

### ScaleX

将水平距离从一种缩放模式转换为另一种，不改变打印机的[**ScaleMode**](#scalemode)。

语法：*object*.**ScaleX**( *Width*, *FromScale* [, *ToScale* ] ) **As Double**

*Width*
: *必需* 要转换的值。**Double**。

*FromScale*
: *必需* [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)成员，标识*Width*的单位。与[**PictureBox**](/official/Reference/VB/PictureBox/)或[**Form**](/official/Reference/VB/Form/)不同，此参数在**Printer**上没有默认值——省略会引发错误448（*Named argument not found*）。

*ToScale*
: *可选* [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants)成员，标识结果的单位；默认为打印机当前的[**ScaleMode**](#scalemode)。

### ScaleY

[**ScaleX**](#scalex)的垂直对应方法，用于高度。

语法：*object*.**ScaleY**( *Height*, *FromScale* [, *ToScale* ] ) **As Double**

### TextHeight

以当前[**Font**](#font)渲染给定字符串时的高度，采用[**ScaleMode**](#scalemode)单位——包括行间距前端留白，因此结果适合用于在文本行之间推进[**CurrentY**](#currenty)。嵌入的换行符被遵循。

语法：*object*.**TextHeight**( *Str* **As String** ) **As Double**

### TextWidth

以当前[**Font**](#font)渲染给定字符串时的宽度，采用[**ScaleMode**](#scalemode)单位。当*Str*包含嵌入的换行符时返回最长行的宽度。

语法：*object*.**TextWidth**( *Str* **As String** ) **As Double**

## 另请参见

- [Printers](/official/Reference/VB/Printers/) -- 每台已安装打印机的只读集合。
- [Form.PrintForm](/official/Reference/VB/Form/#printform) -- 将窗体截图发送到隐式**Printer**。
- [Report.PrintReport](/official/Reference/VB/Report/#printreport) -- 将分区报表的每页发送到隐式**Printer**。
- [PrinterObjectConstants](/official/Reference/VBRUN/Constants/PrinterObjectConstants) -- 打印机选项值的组合枚举。