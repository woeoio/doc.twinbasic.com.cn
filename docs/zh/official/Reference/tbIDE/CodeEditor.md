---
title: CodeEditor
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/CodeEditor
---

# CodeEditor 类

一个代码窗格编辑器——当活动编辑器是源代码窗格时 IDE 返回的特定 [**Editor**](/official/Reference/tbIDE/Editor) 类型。增加了选择/文本/滚动控制、行内控件 API，以及直接透传到驱动代码窗格的底层 Monaco 编辑器。

通过转换一个 [**Editor**](/official/Reference/tbIDE/Editor) 来获取 **CodeEditor**——`Host.ActiveEditors(0)` 返回一个 [**Editor**](/official/Reference/tbIDE/Editor)，对于代码窗格，它也是一个 **CodeEditor**：

```vb
If TypeOf Host.ActiveEditors(0) Is CodeEditor Then
    Dim codeEditor As CodeEditor = Host.ActiveEditors(0)
    codeEditor.SelectedText = "' commented out by an addin" & vbCrLf & codeEditor.SelectedText
End If
```

**CodeEditor** 继承了所有基础 [**Editor**](/official/Reference/tbIDE/Editor) 成员（[**Path**](/official/Reference/tbIDE/Editor#path)、[**Type**](/official/Reference/tbIDE/Editor#type)、[**SetFocus**](/official/Reference/tbIDE/Editor#setfocus)、[**Close**](/official/Reference/tbIDE/Editor#close)、[**Save**](/official/Reference/tbIDE/Editor#save)、[**IsDirty**](/official/Reference/tbIDE/Editor#isdirty)），并添加了以下成员。


## 属性

### SelectedText

当前选中的文本。读取时将选择内容作为 **String** 返回（未选中任何内容时返回空字符串）。赋值时用提供的文本替换当前选择。可读/写。

语法：*codeEditor*.**SelectedText** [ = *value* ]

### Text

代码窗格的完整文本。读取时返回整个文档；赋值时用提供的文本替换所有行。可读/写。

语法：*codeEditor*.**Text** [ = *value* ]

替换整个文本开销较大——对编辑器而言（它必须重建每个 Monaco 数据结构），对用户亦然（撤销栈会折叠为单步）。对于针对性编辑，优先使用 [**SelectedText**](#selectedtext) 而非 [**Text**](#text)。

## 方法

### AddMonacoWidget

在编辑器的特定位置附加一个行内 HTML 覆盖层——Monaco 的*内容控件*机制，以熟悉的 [**HtmlElement**](/official/Reference/tbIDE/HtmlElement) 形式暴露。

语法：*codeEditor*.**AddMonacoWidget**( *LineNumber*, *ColumnNumber*, *Html* [, *Css* ] ) **As** [**HtmlElement**](/official/Reference/tbIDE/HtmlElement)

*LineNumber*
: *必需* 要附加控件的基于 1 的行号。**Long**。

*ColumnNumber*
: *必需* 该行上基于 1 的列号，**或零**。**Long**。当列号为零时，控件渲染在该行*下方*，编辑器插入垂直空间以使控件不会与下一行重叠。传入非零列号以在该列处行内渲染控件。

*Html*
: *必需* 控件的 HTML 内容。**String**。

*Css*
: *可选* 每个控件的 CSS，为 **String**。用于不应渗入代码窗格其余部分的控件局部样式。

返回的 [**HtmlElement**](/official/Reference/tbIDE/HtmlElement) 具有与工具窗口内元素相同的动态 DOM 属性——参见包概述中的[动态 DOM 属性解析](/official/Reference/tbIDE/#动态-dom-属性解析)。对返回对象调用 [**HtmlElement.Remove**](/official/Reference/tbIDE/HtmlElement#remove) 以移除控件。

### ExecuteMonacoCommand

向底层 Monaco 编辑器实例发送直接命令。适用于触发 Monaco 内置命令（查找、跳转到行、格式化、切换注释等），而无需编写等效的 twinBASIC 代码。

语法：*codeEditor*.**ExecuteMonacoCommand** *Command* [, *Arg1*, *Arg2*, … ]

*Command*
: *必需* Monaco 命令 ID。**String**。常用值包括 `"actions.find"`（打开查找控件）、`"closeFindWidget"`（关闭它）、`"editor.action.formatDocument"` 和 `"editor.action.commentLine"`。

*Args*
: *可选* 命令特有参数的 **ParamArray**。**Variant**。原样转发给 Monaco。

参考文档不列举 Monaco 的命令集——完整列表及每个命令的参数形态请参阅 Monaco 文档。

```vb
codeEditor.ExecuteMonacoCommand "actions.find"          ' 打开查找控件
codeEditor.ExecuteMonacoCommand "closeFindWidget"       ' 关闭它
```

### GetSelectionInfo

报告当前选择的起止位置。即使未选中任何内容，所有四个输出参数也会被填充——起止位置重合于插入符的当前位置。

语法：*codeEditor*.**GetSelectionInfo** *StartLine*, *StartColumn*, *EndLine*, *EndColumn*

*StartLine*, *StartColumn*, *EndLine*, *EndColumn*
: **ByRef Long** —— 输出参数，全部基于 1。

### RevealRange

滚动编辑器使指定范围可见，可选地动画滚动并将范围定位到视口中的特定位置。

语法：*codeEditor*.**RevealRange** *StartLine*, *StartColumn*, *EndLine*, *EndColumn* [, *SmoothScroll* ] [, *Area* ]

*StartLine*, *StartColumn*, *EndLine*, *EndColumn*
: *必需* 要显示的范围。**Long**，基于 1。

*SmoothScroll*
: *可选* **Boolean** —— 动画滚动。默认 **True**。

*Area*
: *可选* 一个 [**RevealArea**](#revealarea) 值，控制范围在视口中的落地位置。默认 [**Any**](#RevealArea_Any)。

### SetSelectionInfo

设置选择的起止位置。[**GetSelectionInfo**](#getselectioninfo) 的逆操作。

语法：*codeEditor*.**SetSelectionInfo** *StartLine*, *StartColumn*, *EndLine*, *EndColumn*

*StartLine*, *StartColumn*, *EndLine*, *EndColumn*
: *必需* 基于 1 的行和列位置。**Long**。要在不选择任何文本的情况下定位插入符，两端使用相同的行/列。

## RevealArea

控制 [**RevealRange**](#revealrange) 将请求的范围放置在视口中的何处。

| 常量 | 值 | 描述 |
|------|-----|------|
| **Any**                                | 0 | 仅在必要时垂直或水平滚动以使范围可见。最小滚动量。 |
| **Top**                                | 1 | 滚动使范围位于视口顶部。 |
| **Center**                          | 2 | 滚动使范围在视口中垂直居中。 |
| **CenterIfNotVisible**  | 3 | 垂直居中，但仅当范围当前在视口外时——否则不做任何操作。 |
| **NearTop**                        | 4 | 滚动使范围靠近顶部，上方保留一些上下文——Monaco 的"查看代码定义"预设。 |
| **NearTopIfNotVisible** | 5 | 与 [**NearTop**](#RevealArea_NearTop) 相同，但仅当范围当前在视口外时。 |