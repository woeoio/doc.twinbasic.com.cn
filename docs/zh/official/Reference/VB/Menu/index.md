---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fedca902-bf94-4ffe-a6bf-2e721e875093'
  PropagateID: 'fedca902-bf94-4ffe-a6bf-2e721e875093'
  ReservedCode1: '3243158b-0af4-407a-a83b-1f495ce72a38'
  ReservedCode2: '3243158b-0af4-407a-a83b-1f495ce72a38'
---

---
title: Menu
parent: VB Package
permalink: /tB/Packages/VB/Menu/
---

# Menu 类

**Menu**是Win32原生菜单中的项目——可以是[**Form**](/official/Reference/VB/Form/)或[**MDIForm**](/official/Reference/VB/MDIForm/)菜单栏上的顶级条目、下拉子菜单中的条目，或相关命令组之间的分隔条。菜单是非窗口化控件：它们没有[**Left**](#) / [**Top**](#) / [**Width**](#) / [**Height**](#)，没有字体，也没有自己的鼠标或键盘事件——它们在设计时通过窗体的菜单编辑器进行填充、结构化和绑定到处理程序。

默认属性是[**Enabled**](#enabled)，默认事件是[**Click**](#click)。

```vb
Private Sub Form_Load()
    mnuFileSave.Enabled = False     ' grey out until there is something to save
End Sub

Private Sub mnuFileSave_Click()
    SaveDocument
End Sub

Private Sub mnuViewToolbar_Click()
    mnuViewToolbar.Checked = Not mnuViewToolbar.Checked
    Toolbar1.Visible = mnuViewToolbar.Checked
End Sub
```


## 标题和分隔符

[**Caption**](#caption)提供为菜单项绘制的文本。两个Caption值具有特殊含义：

- 和号（`&`）将下一个字符标记为键盘助记符——在菜单打开时按**Alt + 该字母**可调用该项目，该字母在渲染菜单中会加下划线显示。使用`&&`可显示字面和号。
- 由单个连字符（`"-"`）组成的Caption将项目渲染为周围条目之间的水平分隔条。分隔项被程序化调用时仍会收到自己的[**Click**](#click)事件，但用户无法通过键盘或鼠标到达。

```vb
mnuFileNew.Caption    = "&New"          ' Alt+N while File is open
mnuFileSep1.Caption   = "-"             ' separator bar
mnuFileSaveAs.Caption = "Save &As..."   ' Alt+A
```

## 快捷键

[**ShortcutId**](#shortcutid)将键盘加速键绑定到菜单项。其类型为[**ShortcutConstants**](/official/Reference/VBRUN/Constants/ShortcutConstants)——**vbShortcutNone**禁用加速键，**vbShortcutCtrlS**绑定**Ctrl+S**，依此类推涵盖功能键、**Shift+**和**Ctrl+**范围。设置后，Win32运行时会在渲染的Caption中的制表符后附加相应文本——`Save\tCtrl+S`——使快捷键以常规方式右对齐显示在菜单中。

```vb
mnuFileSave.ShortcutId = vbShortcutCtrlS
mnuFilePrint.ShortcutId = vbShortcutCtrlP
```

::: info
隐藏的[**Shortcut**](#shortcut)**String**属性仅用于往返导入自VB6 `.frm`文件的原始文本；运行时不使用它。新代码应使用[**ShortcutId**](#shortcutid)。
:::

## 菜单图标

twinBASIC扩展了经典VB6菜单，支持在标题旁绘制可选的16×16（或任意尺寸）图标。将**StdPicture**赋值给[**Picture**](#picture)，位图将渲染在标题文本的左侧。当提供的图片是多分辨率`.ico`时，[**IconSizeX**](#iconsizex)和[**IconSizeY**](#iconsizey)选择要使用的嵌入图像；保持为`0`（默认），图片以自然尺寸加载。

```vb
Set mnuFileSave.Picture = LoadResPicture("MNU_SAVE", vbResBitmap)
mnuFileSave.IconSizeX = 16
mnuFileSave.IconSizeY = 16
```

## 控件数组

菜单的控件数组是构建*最近使用*文件列表、动态*窗口*子菜单或插件命令列表的标准方式。数组在设计时在第一个项目上声明；其他项目在运行时用**Load**添加、用**Unload**移除，与窗口化控件完全相同。在数组中所有项目共享的[**Click**](#click)处理程序内部，[**Index**](#index)标识被选中的项。

```vb
Private Sub mnuRecent_Click(Index As Integer)
    OpenDocument mnuRecent(Index).Tag       ' Tag holds the file path
End Sub
```

[**Index**](#index)在非控件数组的菜单上读取时会引发运行时错误343（*对象不是数组*）。

## 窗口列表（MDI）

当承载菜单的窗体是[**MDIForm**](/official/Reference/VB/MDIForm/)时，在设计时将[**WindowList**](#windowlist)设为**True**可将此菜单变为应用程序的*窗口*子菜单——运行时自动为每个打开的MDI子窗体填充一个条目，用复选标记标记活动子窗体，并将点击其中任一条路由到相应子窗体的**SetFocus**。应用程序通常将此与显式的*层叠*/*平铺*子菜单组合使用，后者调用父窗体的[**Arrange**](/official/Reference/VB/MDIForm/#arrange)。

## 属性

### Caption

为菜单项绘制的文本。**String**。和号将下一个字符标记为助记符；`&&`产生字面和号。Caption为`"-"`将项目渲染为水平分隔符。赋值会立即反映在任何可见的菜单栏或弹出菜单中。

语法：*object*.**Caption** [ = *string* ]

### Checked

是否在项目旁边绘制复选标记。**Boolean**，默认**False**。在顶级（菜单栏）项目上设置是支持的但在视觉上较少见；常规用法是在切换设置的下拉菜单项上。

语法：*object*.**Checked** [ = *boolean* ]

### ControlType

只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值，将此控件标识为菜单。始终为**vbMenuControl**。

### Enabled

用户是否可以选择该项目。禁用的菜单项以灰色绘制，忽略鼠标和键盘激活，包括其[**ShortcutId**](#shortcutid)加速键。**Boolean**，默认**True**。**默认属性。**

语法：*object*.**Enabled** [ = *boolean* ]

禁用顶级菜单栏项目会禁用其整个下拉菜单。**Enabled**更改时运行时会重建菜单状态，因此更改会立即可见。

### HelpContextID

::: info
保留用于VB6兼容；目前在twinBASIC中尚未实现。
:::

一个**Long**，在VB6中标识当用户在菜单项高亮时按**F1**时显示的应用程序帮助文件中的主题。

### IconSizeX

当[**Picture**](#picture)是多分辨率`.ico`时，要加载的嵌入图像的水平像素尺寸。**Long**，默认`0`（使用图片的自然尺寸）。与[**IconSizeY**](#iconsizey)配对使用。

### IconSizeY

与[**IconSizeX**](#iconsizex)对应的垂直属性。**Long**，默认`0`。

### Index

当菜单是控件数组的一部分时，此实例在数组中的**Long**零基索引。运行时只读。在非数组菜单上读取会引发运行时错误343（*对象不是数组*）。

### Name

菜单在其父窗体上的唯一设计时名称。**String**，运行时只读。继承自基控件类。

### NegotiatePosition

::: info
保留用于与VB6的ActiveX文档菜单协商功能兼容；目前在twinBASIC中尚未实现。
:::

类型为[**NegotiatePositionConstants**](/official/Reference/VBRUN/Constants/NegotiatePositionConstants)（**vbNoNegotiate**、**vbLeft**、**vbMiddle**、**vbRight**）——VB6使用此属性决定当ActiveX文档被激活时顶级菜单应出现在宿主应用程序菜单栏的何处。

### Parent

对包含此菜单的[**Form**](/official/Reference/VB/Form/)（或[**MDIForm**](/official/Reference/VB/MDIForm/) / **UserControl**）的引用。只读。

### Picture

绘制在标题左侧的**StdPicture**。**twinBASIC扩展**——VB6菜单无法显示图标。赋值**Nothing**移除图标。图标在内部转换为位图；直接传递位图可跳过转换。对于多分辨率`.ico`文件，与[**IconSizeX**](#iconsizex) / [**IconSizeY**](#iconsizey)配对使用。

语法：
- *object*.**Picture** [ = *picture* ]
- **Set** *object*.**Picture** = *picture*

### Shortcut

::: info
隐藏、只读，运行时未使用——仅用于往返导入自VB6 `.frm`文件的原始快捷键文本。使用[**ShortcutId**](#shortcutid)绑定加速键。
:::

### ShortcutId

绑定到此菜单项的键盘加速键。[**ShortcutConstants**](/official/Reference/VBRUN/Constants/ShortcutConstants)的成员——**vbShortcutNone**（无加速键，默认）、**vbShortcutCtrlA**到**vbShortcutCtrlZ**、**vbShortcutF1**到**vbShortcutF12**，以及**Shift+**、**Ctrl+**和**Shift+Ctrl+**功能键变体。设置后，渲染菜单时匹配的快捷键文本会附加到[**Caption**](#caption)（制表符后）。

语法：*object*.**ShortcutId** [ = *value* ]

### Tag

应用程序可用于将自定义数据与菜单项关联的自由格式**String**。框架忽略此属性。继承自基控件类。对于控件数组很有用——例如保存MRU列表条目应打开的文件路径。

### Visible

菜单项是否显示。**Boolean**，默认**True**。设为**False**会从菜单中移除条目而不卸载；设回**True**会将其恢复到原始位置。隐藏顶级菜单栏项目会重建菜单栏使周围条目关闭间隙。

语法：*object*.**Visible** [ = *boolean* ]

### WindowList

当[**MDIForm**](/official/Reference/VB/MDIForm/)承载的菜单上为**True**时，将此菜单变为应用程序的*窗口*子菜单——运行时自动为每个打开的MDI子窗体填充一个条目，并将结果点击路由到相应子窗体的**SetFocus**。**Boolean**，运行时只读——在设计时设置。每个MDI窗体最多只能有一个菜单设置**WindowList**。

## 方法

### Container

返回承载此菜单的**Control**的引用——通常是拥有菜单结构的[**Form**](/official/Reference/VB/Form/)或[**MDIForm**](/official/Reference/VB/MDIForm/)。对于顶级菜单等效于遍历[**Parent**](#parent)，但在每个菜单（包括子项）上定义，因此可以统一调用。

语法：*object*.**Container**

## 事件

### Click

当用户选择菜单项时引发——通过点击、在菜单打开时按助记符，或按其[**ShortcutId**](#shortcutid)加速键。当[**PopUpMenu**](/official/Reference/VB/Form/#popupmenu)选择项目时也会引发。**默认事件。**

语法：*object*\_**Click**( )

对于属于控件数组的菜单，处理程序接收被选项目的数组[**Index**](#index)：

语法：*object*\_**Click**( *Index* **As Integer** )