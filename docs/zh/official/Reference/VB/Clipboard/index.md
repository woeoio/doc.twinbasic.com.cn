---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4f95127f-e7ad-40f3-8749-0410d3a0a3ae'
  PropagateID: '4f95127f-e7ad-40f3-8749-0410d3a0a3ae'
  ReservedCode1: 'fa7510ee-3677-40ad-b240-7ba38ad7727a'
  ReservedCode2: 'fa7510ee-3677-40ad-b240-7ba38ad7727a'
---

---
title: Clipboard
parent: VB Package
permalink: /tB/Packages/VB/Clipboard/
---

# Clipboard 类

**Clipboard** 类封装了系统剪贴板——即 Win32 进程间复制粘贴API——并将其作为单例对象公开。代码通过它可以读写文本、查询当前可用的格式，以及（最终——参见[图片数据注意事项](#picture-data)）读写图片。

**Clipboard** 不可创建：每个进程只有一个实例，由运行时拥有，并通过[**Global**](/official/Reference/VB/Global/)应用对象的[**Clipboard**](/official/Reference/VB/Global/#clipboard)属性公开。代码无需限定即可访问：

```vb
' Copy
Clipboard.Clear
Clipboard.SetText "Hello, world!"

' Paste
If Clipboard.GetFormat(vbCFText) Then
    txtEditor.Text = Clipboard.GetText()
End If
```


## 格式

剪贴板内容以*格式*标记——文本、位图、文件、富文本等。[**ClipboardConstants**](/official/Reference/VBRUN/Constants/ClipboardConstants)枚举列出了预定义的格式：

| 常量                  | 值          | 含义                                       |
|-----------------------|-------------|--------------------------------------------|
| **vbCFText**          | 1           | ANSI纯文本。                              |
| **vbCFBitmap**        | 2           | DDB（设备相关位图）。                     |
| **vbCFMetafile**      | 3           | Windows图元文件（`WMF`）。                |
| **vbCFDIB**           | 8           | DIB（设备无关位图）。                     |
| **vbCFPalette**       | 9           | 调色板。                                   |
| **vbCFUnicodeText**   | 13          | UTF-16纯文本。                            |
| **vbCFEMetafile**     | 14          | 增强型图元文件（`EMF`）。                 |
| **vbCFFiles**         | 15          | 文件路径列表（`CF_HDROP`）。              |
| **vbCFLink**          | `&HFFFFBF00` | DDE链接（旧版OLE-1链接源）。             |
| **vbCFRTF**           | `&HFFFFBF01` | 富文本格式。                              |

[**GetText**](#gettext) / [**SetText**](#settext)方法接受一个可选的*Format*参数，限制为文本类子集（**vbCFText**、**vbCFUnicodeText**、**vbCFRTF**、**vbCFLink**）。[**GetData**](#getdata) / [**SetData**](#setdata)方法处理图片，仅限于位图和图元文件格式。

## 图片数据

图片方法——[**GetData**](#getdata)和[**SetData**](#setdata)——已声明但尚未连接。

::: info
[**GetData**](#getdata)和[**SetData**](#setdata)保留用于与VB6兼容；目前在twinBASIC中尚未实现。对于图片-剪贴板互操作，请直接使用Win32剪贴板API（`OpenClipboard`、`GetClipboardData`、`SetClipboardData`、`CloseClipboard`），直到该实现落地。
:::

[**Clear**](#clear)、[**GetText**](#gettext)、[**SetText**](#settext)和[**GetFormat**](#getformat)均已完全可用。

## 方法

### Clear

清空剪贴板，移除其上当前的所有格式。

语法：*object*.**Clear**

### GetData

从剪贴板读取图片数据。返回结果为**stdole.StdPicture**。

语法：*object*.**GetData**( [ *Format* ] )

*Format*
: *可选* [**ClipboardConstants**](/official/Reference/VBRUN/Constants/ClipboardConstants)的成员，选择要检索的图片格式（**vbCFBitmap**、**vbCFDIB**、**vbCFMetafile**、**vbCFEMetafile**或**vbCFPalette**）。省略时，实现会选择剪贴板当前持有的最具描述性的格式。

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。
:::

### GetFormat

测试剪贴板当前是否包含给定格式的数据。如果包含则返回**True**，否则返回**False**。

语法：*object*.**GetFormat**( *Format* )

*Format*
: *必需* [**ClipboardConstants**](/official/Reference/VBRUN/Constants/ClipboardConstants)的成员——要探测的格式。

```vb
If Clipboard.GetFormat(vbCFFiles) Then
    ' The clipboard holds a file list (e.g. from Explorer copy)
End If
```

### GetText

从剪贴板读取文本数据。返回**String**；如果剪贴板当前不包含所请求格式的数据，则返回空字符串。

语法：*object*.**GetText**( [ *Format* ] )

*Format*
: *可选* [**ClipboardConstants**](/official/Reference/VBRUN/Constants/ClipboardConstants)的成员，选择要检索的文本格式：**vbCFText**（默认）、**vbCFUnicodeText**、**vbCFRTF**或**vbCFLink**。

```vb
Dim s As String
s = Clipboard.GetText()                  ' plain text
Dim rtf As String
rtf = Clipboard.GetText(vbCFRTF)         ' RTF, if available
```

### SetData

将图片数据放到剪贴板上。

语法：*object*.**SetData** *Picture* [, *Format* ]

*Picture*
: *必需* 持有要复制的图片的**stdole.StdPicture**。

*Format*
: *可选* [**ClipboardConstants**](/official/Reference/VBRUN/Constants/ClipboardConstants)的成员——要发布的图片格式。省略时，格式从图片的基础类型推断。

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。
:::

### SetText

将文本数据放到剪贴板上。注意，**SetText** *不会*隐式地先清空剪贴板——需显式调用[**Clear**](#clear)以确保不会在新值旁边残留其他格式的过期数据。

语法：*object*.**SetText** *Str* [, *Format* ]

*Str*
: *必需* 要发布的**String**。

*Format*
: *可选* [**ClipboardConstants**](/official/Reference/VBRUN/Constants/ClipboardConstants)的成员——**vbCFText**（默认）、**vbCFUnicodeText**、**vbCFRTF**或**vbCFLink**。

```vb
Clipboard.Clear
Clipboard.SetText "Plain text"
Clipboard.SetText "{\rtf1 \b Bold \b0 plain.}", vbCFRTF   ' add an RTF alternative
```