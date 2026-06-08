---
title: OLE
parent: VB Package
permalink: /tB/Packages/VB/OLE/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4ae84249-02ee-45b8-a301-3e364e28c3dd'
  PropagateID: '4ae84249-02ee-45b8-a301-3e364e28c3dd'
  ReservedCode1: 'bcff901c-5606-41d9-bdd8-b3a5ded26a7f'
  ReservedCode2: 'bcff901c-5606-41d9-bdd8-b3a5ded26a7f'
---

# OLE 类

**OLE** *容器*控件在窗体上承载链接或嵌入的OLE Automation对象——通常是Word文档、Excel电子表格或任何其他已注册的OLE服务器——并允许用户通过其注册的动词就地激活和编辑包含的对象。

::: info
OLE容器控件在twinBASIC中是**VB6兼容性存根**。几乎所有OLE特有的属性、方法和事件当前均未实现（每个都在下方标注）。继承的基控件成员——定位、大小调整、锚定、焦点、拖动、鼠标光标——可以正常工作，因此从VB6移植的项目仍然可以解析控件并将其布局在窗体上，但无法通过它创建、嵌入、链接、粘贴、保存或激活实际的OLE对象。
:::

没有默认属性。默认设计器事件为[**Click**](#click)。

```vb
' 以下OLE特有调用在twinBASIC中当前不可用
' 此示例仅供参考。
Private Sub Form_Load()
    OLE1.CreateEmbed vbNullString, "Excel.Sheet"   ' [未实现]
End Sub

Private Sub OLE1_Click()
    OLE1.DoVerb vbOLEPrimary                       ' [未实现]
End Sub
```


## 链接与嵌入对象

OLE容器持有*链接*对象——对磁盘上文档的引用，在激活时以注册的服务器打开——或*嵌入*对象，其数据存储在主机窗体的数据流中。[**CreateLink**](#createlink)从现有文件创建链接对象；[**CreateEmbed**](#createembed)创建给定类的新嵌入对象。[**OLEType**](#oletype)报告当前内容采用哪种形式，[**OLETypeAllowed**](#oletypeallowed)限制容器在设计或运行时接受哪种形式。

[**SourceDoc**](#sourcedoc)和[**SourceItem**](#sourceitem)标识链接文件（以及对于部分链接，其中的项目）。[**Class**](#class)保存嵌入服务器的ProgID（例如`"Word.Document"`、`"Excel.Sheet"`）。

## 动词

每个OLE服务器注册一组*动词*——标记的操作，如*打开*、*编辑*或*播放*。[**FetchVerbs**](#fetchverbs)填充每个实例的动词列表，作为索引属性[**ObjectVerbs**](#objectverbs)、[**ObjectVerbFlags**](#objectverbflags)和[**ObjectVerbsCount**](#objectverbscount)暴露。[**DoVerb**](#doverb)按索引执行动词——传递**vbOLEPrimary**运行服务器的主动词，即双击调用的操作。[**AutoVerbMenu**](#autoverbmenu)控制右击控件是否自动弹出动词菜单。

## 激活和显示

[**AutoActivate**](#autoactivate)选择嵌入对象何时被激活进行就地编辑——手动、焦点时或双击时。[**DisplayType**](#displaytype)在直接渲染对象内容和渲染注册图标之间选择。[**SizeMode**](#sizemode)选择对象的位图如何适配容器（裁剪、拉伸、自动调整大小或缩放）。

## 更新和存储

链接对象的最后缓存表示可以通过[**Update**](#update)从其服务器重新获取；[**UpdateOptions**](#updateoptions)决定更新是自动还是按需进行。容器可以通过[**SaveToFile**](#savetofile)（或[**SaveToOle1File**](#savetoole1file)用于旧版OLE1流格式）从打开的文件中持久化，并使用[**ReadFromFile**](#readfromfile)重新加载，每种情况都使用以**Open**打开的Basic文件号。[**InsertObjDlg**](#insertobjdlg)和[**PasteSpecialDlg**](#pastespecialdlg)引发用于选择对象类或剪贴板格式的标准Windows OLE对话框。

## 数据绑定

设置[**DataSource**](#datasource)和[**DataField**](#datafield)将容器的内容连接到[**Data**](/official/Reference/VB/Data/)控件记录集的二进制字段，使嵌入对象从行中加载并保存回行。[**DataChanged**](#datachanged)报告包含的对象是否与绑定行的存储值不同。

## 属性

### Action

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

运行时专用的**Integer**，赋值时执行预定义的OLE操作之一，如*创建*、*删除*、*粘贴*或*更新*。现代代码使用等效的命名方法（[**CreateEmbed**](#createembed)、[**Delete**](#delete)、[**Paste**](#paste)、[**Update**](#update)等）代替。

### Anchors

父级的边缘集合，OLE控件的对应边缘在父级调整大小时跟随。只读——通过返回的**Anchors**对象分配单独的`.Left`、`.Top`、`.Right`、`.Bottom`标志。

### Appearance

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

决定容器的边框如何绘制。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。

### AppIsRunning

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

运行时专用的**Boolean**：当承载嵌入对象的OLE服务器正在运行时为**True**。赋值**True**启动服务器；赋值**False**关闭它。

### AutoActivate

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

选择嵌入对象何时被激活进行就地编辑。[**OLEContainerActivateConstants**](/official/Reference/VBRUN/Constants/OLEContainerActivateConstants)的成员：**vbOLE_ActivateManual**、**vbOLE_ActivateGetFocus**、**vbOLE_ActivateDoubleclick**（默认）或**vbOLE_ActivateAuto**。

### AutoVerbMenu

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当**True**（默认）时，右击容器自动弹出包含对象注册动词的菜单。**Boolean**。

### BackColor

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

背景颜色，作为**OLE_COLOR**。默认为系统窗口背景颜色。

### BackStyle

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

在 opaque 和透明背景之间选择（[**BackFillStyleConstants**](/official/Reference/VBRUN/Constants/BackFillStyleConstants)）：**vbBFTransparent**或**vbBFOpaque**（默认）。

### BorderStyle

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

容器是否绘有边框。[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants)的成员：**vbNoBorder**或**vbFixedSingleBorder**（默认）。

### CausesValidation

决定之前焦点控件的[**Validate**](#validate)事件是否在此控件获得焦点之前运行。**Boolean**，默认**True**。

### Class

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

包含对象的OLE服务器类的ProgID——例如`"Word.Document"`或`"Excel.Sheet"`。**String**。在设计时填充容器时与[**SourceDoc**](#sourcedoc)和[**SourceItem**](#sourceitem)一起使用，或作为[**InsertObjDlg**](#insertobjdlg)的默认类。

### Container

承载此OLE控件的控件——通常是窗体。使用**Get**读取，使用**Set**更改。设置**Container**在运行时将控件重新父级化到不同的容器。

### ControlType

标识此控件为OLE容器的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbOLEControl**。

### Data

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

运行时专用的**Long**句柄，指向[**Format**](#format)中命名的格式返回的数据块。与[**ObjectAcceptFormats**](#objectacceptformats) / [**ObjectGetFormats**](#objectgetformats)机制一起使用，以往返原始OLE数据。

### DataChanged

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

运行时专用的**Boolean**：如果绑定的记录集字段自容器上次加载以来已更改则为**True**。成功保存后被清除。

### DataField

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

在绑定的[**DataSource**](#datasource)的记录集中，由OLE容器存储和检索其内容的二进制字段的名称。**String**。

### DataSource

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

引用[**Data**](/official/Reference/VB/Data/)控件（或其他**DataSource**提供者），其记录集为[**DataField**](#datafield)提供值。使用**Set**设置。

### DataText

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

运行时专用的**String**别名，用于将文本格式数据传入和传出包含对象的剪贴板等效物。

### DisplayType

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

容器显示对象内容还是其注册图标。[**OLEContainerDisplayTypeConstants**](/official/Reference/VBRUN/Constants/OLEContainerDisplayTypeConstants)的成员：**vbOLE_DisplayContent**（默认）或**vbOLE_DisplayIcon**。

### Dock

OLE控件在其容器中停靠的位置。[**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants)的成员：**vbDockNone**（默认）、**vbDockLeft**、**vbDockTop**、**vbDockRight**、**vbDockBottom**或**vbDockFill**。停靠的控件忽略[**Anchors**](#anchors)。

### DragIcon

在控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时拖动自身。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual** (0, 默认——从代码调用[**Drag**](#drag))或**vbAutomatic** (1)。

### Enabled

决定控件是否接受用户输入。**Boolean**，默认**True**。

### FileNumber

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

运行时专用的**Integer**，给出最近一次[**ReadFromFile**](#readfromfile)、[**SaveToFile**](#savetofile)或[**SaveToOle1File**](#savetoole1file)调用传递的Basic文件号。

### Format

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当前与[**Data**](#data)句柄关联的剪贴板格式标识符。**String**。

### Height

控件的高度，默认以缇为单位（或以容器的**ScaleMode**单位）。**Single**。

### HelpContextID

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。仅当主机构建定义了`FEATURE_HELP`时可用。
:::

标识应用程序帮助文件中主题的**Long**，当用户在控件具有焦点时按**F1**时检索。

### HostName

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

OLE服务器应为宿主应用程序显示的友好名称——例如，在就地编辑嵌入文档时显示在Word的标题栏中。**String**。

### hWnd

底层控件的Win32窗口句柄，作为**LongPtr**。只读。适用于传递给API函数。

### Index

当控件是控件数组的一部分时，此实例在数组中从零开始的**Long**索引。在非数组实例上读取**Index**会引发运行时错误343（*Object not an array*）。运行时只读。

### Left

从容器的左边缘到控件左边缘的水平距离。**Single**。

### LpOleObject

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

运行时专用的**LongPtr**，给出包含对象的原始`IOleObject`接口指针，用于传递给原生代码。

### MiscFlags

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

杂项容器行为的位掩码（参见[**OLEContainerConstants**](/official/Reference/VBRUN/Constants/OLEContainerConstants)——**vbOLEMiscFlagMemStorage**、**vbOLEMiscFlagDisableInPlace**）。**Long**。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于控件上时用作鼠标光标的**StdPicture**。

### MousePointer

当指针位于控件上时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### object

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

运行时专用的包含对象OLE Automation接口的**Object**引用——用于后期绑定脚本编写的入口点。**只读**。

### ObjectAcceptFormats

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

索引**String**属性，列出包含对象在粘贴时可以接受的剪贴板格式。使用[**ObjectAcceptFormatsCount**](#objectacceptformatscount)限定索引范围。

### ObjectAcceptFormatsCount

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

[**ObjectAcceptFormats**](#objectacceptformats)中的条目数。**Integer**。

### ObjectGetFormats

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

索引**String**属性，列出包含对象在复制时可以生成的剪贴板格式。使用[**ObjectGetFormatsCount**](#objectgetformatscount)限定索引范围。

### ObjectGetFormatsCount

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

[**ObjectGetFormats**](#objectgetformats)中的条目数。**Integer**。

### ObjectVerbFlags

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

索引**Long**属性，给出[**ObjectVerbs**](#objectverbs)中每个条目的菜单标志位掩码。标志值与Win32 `MF_*`菜单常量匹配，指示动词项是否灰显、选中等等。

### ObjectVerbs

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

索引**String**属性，列为包含对象注册的动词名称——由[**FetchVerbs**](#fetchverbs)填充。将索引传递给[**DoVerb**](#doverb)以调用动词。

### ObjectVerbsCount

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

[**ObjectVerbs**](#objectverbs)中的条目数。**Long**。

### OLEDropAllowed

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当**True**时，容器接受从应用程序外部拖放到其上的OLE对象。**Boolean**，默认**False**。

### OLEType

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

运行时专用的**Integer**，报告包含对象当前是链接的、嵌入的还是空的（参见[**OLEContainerConstants**](/official/Reference/VBRUN/Constants/OLEContainerConstants)——**vbOLELinked**、**vbOLEEmbedded**、**vbOLEEither**、**vbOLENone**）。

### OLETypeAllowed

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

限制容器将接受哪种类型的包含对象。[**OLEContainerTypesAllowedConstants**](/official/Reference/VBRUN/Constants/OLEContainerTypesAllowedConstants)的成员：**vbOLE_Linked**、**vbOLE_Embedded**或**vbOLE_Either**（默认）。

### Parent

引用包含此控件的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）。只读。

### PasteOK

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

运行时专用只读**Boolean**：当当前剪贴板内容的格式可被包含对象通过[**Paste**](#paste)接受时为**True**。

### Picture

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

运行时专用只读**IPictureDisp**，给出包含对象当前的表示作为图片，适合打印或复制到[**PictureBox**](/official/Reference/VB/PictureBox/)上。

### SizeMode

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

包含对象的位图如何适配容器。[**OLEContainerSizeModeConstants**](/official/Reference/VBRUN/Constants/OLEContainerSizeModeConstants)的成员：**vbOLE_SizeClip**（默认）、**vbOLE_SizeStretch**、**vbOLE_SizeAutoSize**或**vbOLE_SizeZoom**。

### SourceDoc

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

[**CreateLink**](#createlink)使用的源文件的完整路径（以及[**InsertObjDlg**](#insertobjdlg)的默认值）。**String**。

### SourceItem

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

[**SourceDoc**](#sourcedoc)中链接引用的命名项目——例如Excel范围名称。**String**。

### TabIndex

控件在窗体TAB键导航顺序中的位置。**Long**。

### TabStop

用户是否可以通过按**TAB**键到达控件。**Boolean**，默认**True**。禁用的控件无论此设置如何都会被跳过。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### Top

从容器顶部到控件顶部的垂直距离。**Single**。

### UpdateOptions

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

链接对象的缓存表示如何刷新。[**OLEContainerUpdateOptionsConstants**](/official/Reference/VBRUN/Constants/OLEContainerUpdateOptionsConstants)的成员：**vbOLE_UpdateAutomatic**（默认）、**vbOLE_UpdateFrozen**或**vbOLE_UpdateManual**。

### Verb

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

旧版[**Action**](#action)属性执行*执行动词*操作时使用的**Long**动词索引。新代码应直接调用[**DoVerb**](#doverb)。

### Visible

控件是否显示。**Boolean**，默认**True**。

### WhatsThisHelpID

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。仅当主机构建定义了`FEATURE_HELP`时可用。
:::

标识应用程序帮助文件中"What's This?"帮助弹出主题的**Long**。参见[**ShowWhatsThis**](#showwhatsthis)。

### Width

控件的宽度。**Single**。

## 方法

### Close

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

关闭包含的对象，结束正在运行的服务器会话（如果有）。容器的数据被保留；仅断开实时编辑连接。

语法：*object*.**Close**

### Copy

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

将包含的对象复制到系统剪贴板。

语法：*object*.**Copy**

### CreateEmbed

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

创建给定类的新嵌入对象，可选地从模板文件预填充。

语法：*object*.**CreateEmbed** *SourceDoc* [, *Class* ]

*SourceDoc*
: *必需* **String**。用作新对象模板的文件路径，或`vbNullString`创建空白对象。

*Class*
: *可选* **Variant** **String** ProgID，标识要实例化的OLE服务器类（例如`"Word.Document"`）。当*SourceDoc*为空时必需。

### CreateLink

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

创建引用磁盘上现有文件的链接对象。

语法：*object*.**CreateLink** *SourceDoc* [, *SourceItem* ]

*SourceDoc*
: *必需* 给出源文件完整路径的**String**。

*SourceItem*
: *可选* **Variant** **String**，标识源文件中要链接到片段而非整个文档的命名项目（例如Excel范围名称）。

### Delete

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

从容器中移除包含的对象。释放与其关联的所有资源。

语法：*object*.**Delete**

### DoVerb

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

对包含的对象调用已注册的动词。标准动词常量在[**OLEContainerConstants**](/official/Reference/VBRUN/Constants/OLEContainerConstants)中定义——**vbOLEPrimary** (0)、**vbOLEShow** (-1)、**vbOLEOpen** (-2)、**vbOLEHide** (-3)、**vbOLEUIActivate** (-4)、**vbOLEInPlaceActivate** (-5)、**vbOLEDiscardUndoState** (-6)；正索引引用[**ObjectVerbs**](#objectverbs)中按服务器的条目。

语法：*object*.**DoVerb** [ *Verb* ]

*Verb*
: *可选* **Variant** **Long**。省略时默认为**vbOLEPrimary**。

### Drag

开始、完成或取消手动拖放操作。通常在[**DragMode**](#dragmode)为**vbManual**时从[**MouseDown**](#mousedown)处理程序调用。

语法：*object*.**Drag** [ *Action* ]

*Action*
: *可选* [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants)的成员：**vbCancel** (0)、**vbBeginDrag** (1, 默认)或**vbEndDrag** (2)。

### FetchVerbs

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

从包含对象的服务器重新读取动词列表并刷新[**ObjectVerbs**](#objectverbs)、[**ObjectVerbFlags**](#objectverbflags)和[**ObjectVerbsCount**](#objectverbscount)。

语法：*object*.**FetchVerbs**

### InsertObjDlg

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

显示标准Windows*插入对象*对话框，以便用户可以选择新嵌入对象、现有文件（链接或嵌入）或图标。

语法：*object*.**InsertObjDlg**

### Move

通过一次调用重新定位并可选地调整控件大小。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**。

*Top*, *Width*, *Height*
: *可选* 相应属性的新值。省略的值保持不变。

### Paste

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

将当前剪贴板内容粘贴到容器中，前提是[**PasteOK**](#pasteok)报告格式可接受。

语法：*object*.**Paste**

### PasteSpecialDlg

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

显示标准Windows*选择性粘贴*对话框，以便用户可以选择当前剪贴板内容的粘贴方式（链接、嵌入或作为特定格式）。

语法：*object*.**PasteSpecialDlg**

### ReadFromFile

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

从先前用[**SaveToFile**](#savetofile)写入的Basic样式二进制文件中读取容器内容。

语法：*object*.**ReadFromFile** *FileNumber*

*FileNumber*
: *必需* **Integer**。**Open**语句返回的文件号，在以**For Binary**打开的流上。

### SaveToFile

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

将容器内容——包括链接或嵌入对象的数据和任何表示缓存——以当前OLE2流格式写入Basic样式二进制文件。

语法：*object*.**SaveToFile** *FileNumber*

*FileNumber*
: *必需* 以**For Binary**打开的**Integer**。

### SaveToOle1File

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

以旧版OLE1流格式写入容器内容。为往返非常旧的应用程序生成的数据文件而提供；新代码应使用[**SaveToFile**](#savetofile)。

语法：*object*.**SaveToOle1File** *FileNumber*

*FileNumber*
: *必需* 以**For Binary**打开的**Integer**。

### SetFocus

将输入焦点移到控件。控件必须同时[**Visible**](#visible)和[**Enabled**](#enabled)，否则会引发运行时错误5（*Invalid procedure call or argument*）。

语法：*object*.**SetFocus**

### Show WhatsThis

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。仅当主机构建定义了`FEATURE_HELP`时可用。
:::

将以[**WhatsThisHelpID**](#whatsthishelpid)标识的主题显示为"What's This?"弹出窗口。

语法：*object*.**ShowWhatsThis**

### Update

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

对于链接对象，从源文件检索最新数据并刷新缓存的表示。对于服务器正在运行的嵌入对象，请求服务器将任何待处理的更改提交回容器。

语法：*object*.**Update**

### ZOrder

将控件带到其同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront** (0, 默认)或**vbSendToBack** (1)。

## 事件

### Click

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当用户用任意鼠标按钮点击容器时引发。**默认设计器事件。**

语法：*object*\_**Click**( )

### DblClick

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当用户双击容器时引发。使用默认的[**AutoActivate**](#autoactivate)设置**vbOLE_ActivateDoubleclick**时，这与激活包含对象进行就地编辑的手势相同。

语法：*object*\_**DblClick**( )

### DragDrop

当手动拖动操作在目标控件上结束时在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

当手动拖动操作进行中时在光标下方的控件上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### GotFocus

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当控件获得输入焦点时引发。

语法：*object*\_**GotFocus**( )

### Initialize

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

在控件的底层窗口创建之后引发一次。

语法：*object*\_**Initialize**( )

### KeyDown

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当控件具有焦点时用户按下任意键引发。

语法：*object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当用户输入产生ANSI按键的字符时引发。

语法：*object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当控件具有焦点时用户释放键引发。

语法：*object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LostFocus

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当控件失去输入焦点时引发。

语法：*object*\_**LostFocus**( )

### MouseDown

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当用户在控件上按下任意鼠标按钮时引发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当光标在控件上移动时引发。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当用户在控件上释放鼠标按钮时引发。

语法：*object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### ObjectMove

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当包含对象请求容器重新定位或调整自身大小时引发——通常是响应就地编辑更改。

语法：*object*\_**ObjectMove**( *Left* **As Single**, *Top* **As Single**, *Width* **As Single**, *Height* **As Single** )

### Resize

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

当包含对象报告新的自然大小时引发——例如，嵌入图像被替换为不同尺寸的图像后。

语法：*object*\_**Resize**( *HeightNew* **As Single**, *WidthNew* **As Single** )

### Updated

::: info
保留用于VB6兼容性；twinBASIC中当前未实现。
:::

在包含对象被修改后引发，以便主机可以将自身标记为脏。*Code*是[**OLEContainerConstants**](/official/Reference/VBRUN/Constants/OLEContainerConstants)中的状态值之一：**vbOLEChanged**、**vbOLESaved**、**vbOLEClosed**或**vbOLERenamed**。

语法：*object*\_**Updated**( *Code* **As Integer** )

### Validate

当焦点移向另一个[**CausesValidation**](#causesvalidation)为**True**的控件时引发。将*Cancel*设置为**True**使焦点保持在此控件上。

语法：*object*\_**Validate**( *Cancel* **As Boolean** )