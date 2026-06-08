---
title: Global
parent: VB Package
permalink: /tB/Packages/VB/Global/
---

# Global 类

**Global**是应用程序的*应用对象*——一个由运行时在启动时实例化的单例，其成员可以从项目中的任何代码*无需限定*地访问。编写`App.Path`实际上是调用`Global.App.Path`；前导的`Global.`是隐式的。该类的存在使得语言的内置全局对象——单例[**App**](/official/Reference/VB/App/)、[**Clipboard**](/official/Reference/VB/Clipboard/)和[**Screen**](/official/Reference/VB/Screen/)、[**Forms**](#forms)集合、**Printer**和**Printers**对象、资源加载器，以及`Load`/`Unload`窗体生命周期辅助函数——可以通过同一名称解析路径统一访问。

每个进程恰好有一个**Global**，且不能从用户代码创建：没有`New Global`，也没有可实例化的公共coclass。运行时通过IDE的特殊`[AppObject]`机制发布它，编译器将未限定的引用映射到其成员。

```vb
' All four of these resolve to a method/property on Global:
Dim p As StdPicture
Set p = LoadPicture(App.Path & "\splash.png")

Form2.Show
Load Form3                              ' creates the form without showing it
Unload Form1
```


## 内置单例

[**App**](#app)、[**Clipboard**](#clipboard)和[**Screen**](#screen)返回对应的运行时单例。每个都在各自的页面中有文档：

- [**App**](/official/Reference/VB/App/) — 应用程序元数据、版本信息和进程状态。
- [**Clipboard**](/official/Reference/VB/Clipboard/) — 系统剪贴板访问。
- [**Screen**](/official/Reference/VB/Screen/) — 主显示器指标、活动窗体/控件、应用程序范围的鼠标指针。

这些属性是缓存的引用——在进程生命周期内重复读取会返回相同的对象实例。

## Forms 集合

[**Forms**](#forms)返回应用程序当前已加载的[**Form**](/official/Reference/VB/Form/)实例集合——每个已被**Load**加载或**Show**显示但尚未**Unload**卸载的窗体。集合是实时的：加载窗体时集合增长，卸载窗体时集合缩小。集合支持三种操作：

- **Forms.Count** — 一个**Long**，给出当前已加载窗体的数量。
- **Forms.Item(** *Index* **)** — 零基*Index*处的[**Form**](/official/Reference/VB/Form/)。**Item**是默认成员，因此`Forms(0)`和`Forms.Item(0)`是等价的。读取负数或超出范围的索引会引发运行时错误9（*下标越界*）。
- **Forms.Add(** *Name* **)** — 创建名为*Name*的窗体类的新实例，将其添加到集合中，并返回新的[**Form**](/official/Reference/VB/Form/)。窗体已加载但未显示。

该集合还支持`For Each`枚举：

```vb
Dim f As Form
For Each f In Forms
    Debug.Print f.Name, f.Caption
Next
```

一个常见的惯用法是在关闭时卸载所有打开的窗体——注意卸载会使集合缩小，因此应反向迭代或从顶部向下按索引迭代：

```vb
Dim i As Long
For i = Forms.Count - 1 To 0 Step -1
    Unload Forms(i)
Next
```

## 资源加载器

twinBASIC将项目级资源（位图、字符串、原始字节块）编译到最终EXE的资源节中。四个`LoadRes*`方法在运行时检索它们：

- [**LoadResPicture**](#loadrespicture) — 将位图、图标或光标资源加载到**StdPicture**中。
- [**LoadResString**](#loadresstring) — 加载字符串资源。
- [**LoadResData**](#loadresdata) — 加载原始字节数组资源。
- [**LoadResIdList**](#loadresidlist) — 枚举给定类型资源的ID。

[**LoadPicture**](#loadpicture)从*文件*而非嵌入资源加载图片——通常在运行时用于用户选择的内容或保存在EXE外部的资源。

## 窗体生命周期辅助函数

[**Load**](#load)创建窗体（或对于控件数组，创建控件实例）但不显示；[**Unload**](#unload)销毁它。两者按约定不使用括号编写——`Load Form1`、`Unload Form1`——其行为如同语句，但实际上是对**Global.Load**和**Global.Unload**的调用。相应的窗体生命周期事件（[**Initialize**](/official/Reference/VB/Form/#initialize)、[**Load**](/official/Reference/VB/Form/#load)、[**Unload**](/official/Reference/VB/Form/#unload)、[**Terminate**](/official/Reference/VB/Form/#terminate)）在预期的时机触发。

## Printer 和 Printers

编译时`FEATURE_PRINTER`标志公开**Printer**和**Printers**成员。[**Printer**](/official/Reference/VB/Printer/)是当前选定的打印机，[**Printers**](/official/Reference/VB/Printers/)是所有已安装打印机的集合；将不同的打印机对象赋值给**Printer**会切换应用程序的当前打印机。

## 属性

### App

应用程序的单例[**App**](/official/Reference/VB/App/)实例——其标识、版本和进程状态元数据。只读。

### Clipboard

应用程序的单例[**Clipboard**](/official/Reference/VB/Clipboard/)实例——系统剪贴板封装器。只读。

### Forms

应用程序当前已加载[**Form**](/official/Reference/VB/Form/)实例的实时集合。只读。参见[Forms 集合](#forms-collection)。

### Printer

当前选定的[**Printer**](/official/Reference/VB/Printer/)。可读取和用`Set`赋值——赋值不同的打印机对象会切换应用程序的当前打印机。

### Printers

系统上所有已安装打印机的[**Printers**](/official/Reference/VB/Printers/)集合。只读。

### Screen

应用程序的单例[**Screen**](/official/Reference/VB/Screen/)实例——主显示器指标、活动窗体/控件、应用程序范围的鼠标指针。只读。

## 方法

### Load

创建命名窗体的实例（或控件数组的新元素）但不显示。窗体的[**Initialize**](/official/Reference/VB/Form/#initialize)和[**Load**](/official/Reference/VB/Form/#load)事件将触发。

语法：**Load** *object*

*object*
: *必需* 窗体类的默认实例（`Form1`）、显式窗体引用或控件数组元素（`Command1(3)`）。

```vb
Load Form2                        ' instantiates and runs Form_Load, but Form2 stays hidden
Set frm = Forms("Form2")          ' the new instance now exists in Forms
```

### LoadPicture

从文件加载图片。返回**stdole.IPictureDisp**。

语法：**LoadPicture**( [ *FileName* [, *Size* [, *ColorDepth* [, *X* [, *Y* ] ] ] ] ] )

*FileName*
: *可选* 给出`.bmp`、`.dib`、`.gif`、`.jpg`、`.png`、`.wmf`、`.emf`、`.ico`或`.cur`文件路径的**String**。省略时返回空图片——适用于清除[**Image**](/official/Reference/VB/Image/)或[**PictureBox**](/official/Reference/VB/PictureBox/)的**Picture**属性。

*Size*
: *可选* [**LoadPictureSizeConstants**](/official/Reference/VBRUN/Constants/LoadPictureSizeConstants)的成员——仅对图标和光标有意义，用于选择文件中存储的尺寸。

*ColorDepth*
: *可选* [**LoadPictureColorConstants**](/official/Reference/VBRUN/Constants/LoadPictureColorConstants)的成员——仅对图标和光标有意义，用于选择文件中存储的颜色深度。

*X*、*Y*
: *可选* 当*Size*为**vbLPCustom**时使用的宽度和高度覆盖值，以像素为单位。

```vb
Set imgLogo.Picture = LoadPicture(App.Path & "\logo.png")
Set imgLogo.Picture = LoadPicture()        ' clears the picture
```

### LoadResData

从应用程序的资源节加载原始资源——通常是二进制块——返回包装在**Variant**中的**Byte()**数组。

语法：**LoadResData**( *id*, *Type* )

*id*
: *必需* 资源ID，可以是**Long**（数字ID）或**String**（名称）。

*Type*
: *必需* 资源类型，标识要查找的资源节。可以是**Long**标准资源类型或**String**自定义资源类型。

### LoadResIdList

返回给定类型的资源节中的资源ID列表，作为**Variant**数组。

语法：**LoadResIdList**( *Type* )

*Type*
: *必需* 资源类型——参见[**LoadResData**](#loadresdata)。

### LoadResPicture

从应用程序的资源节将图片、图标或光标资源加载到**stdole.IPictureDisp**中。

语法：**LoadResPicture**( *id*, *restype* [, *width* [, *height* ] ] )

*id*
: *必需* 资源ID——**Long**（数字）或**String**（名称）。

*restype*
: *必需* [**LoadResConstants**](/official/Reference/VBRUN/Constants/LoadResConstants)的成员——**vbResBitmap**、**vbResIcon**或**vbResCursor**。

*width*、*height*
: *可选* 图标/光标资源的像素尺寸；**0**（默认）选择资源的自然尺寸。

### LoadResString

从应用程序的资源节加载字符串资源。返回**String**。

语法：**LoadResString**( *id* )

*id*
: *必需* 资源ID，为**Long**。

### Unload

销毁窗体（或移除控件数组元素）。窗体的[**QueryUnload**](/official/Reference/VB/Form/#queryunload)、[**Unload**](/official/Reference/VB/Form/#unload)和[**Terminate**](/official/Reference/VB/Form/#terminate)事件按顺序触发。前两个事件中的任意一个可以将其*Cancel*参数设为非零值来否决卸载，此时窗体保持加载和可见状态。

语法：**Unload** *object*

*object*
: *必需* 窗体类的默认实例、显式窗体引用或控件数组元素。

```vb
Unload Me                         ' close the current form
Unload Forms(0)                   ' close whichever form is at the head of the list
```