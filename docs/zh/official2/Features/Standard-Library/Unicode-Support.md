---
title: Unicode 支持
parent: 标准库
nav_order: 1
permalink: /Features/Standard-Library/Unicode-Support
---

# Unicode 支持
twinBASIC 在整个语言和运行时中提供完整的 Unicode 支持。

## 原生 Unicode 函数

接受字符串参数的原生函数，如`MsgBox`和文件系统函数（例如`Open`、`Dir`、`Mkdir`、`Kill`和`RmDir`）现在支持 Unicode。此外，.twin 文件使这易于使用，因为编辑器也支持 Unicode。因此，您可以在编辑器中粘贴 Unicode 字符串，看到它正确显示，然后让 tB 函数和控件正确显示相同的字符串。

## 控件中的 Unicode

所有 tB 实现的控件都支持 Unicode，无论是在代码编辑器中还是显示时。

> [!重要]
> 如果您子类化控件，请注意这意味着您将收到窗口消息的 Unicode（W）版本，例如列表视图将发送`LVN_GETDISPINFOW (LVN_FIRST - 77)`而不是`LVN_GETDISPINFOA (LVN_FIRST - 50)`。

## 字符串转换

`StrConv()`现在有`vbUTF8` / `vbFromUTF8`选项用于 UTF-8 字符串转换。