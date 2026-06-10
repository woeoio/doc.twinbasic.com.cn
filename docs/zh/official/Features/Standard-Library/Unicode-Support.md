---
title: "Unicode 支持"
parent: Standard Library
nav_order: 1
permalink: /Features/Standard-Library/Unicode-Support
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "d6260c91-8bf6-49ee-8fd7-d283bb43d92b"
  PropagateID: "d6260c91-8bf6-49ee-8fd7-d283bb43d92b"
  ReservedCode1: "d25865cd-de8b-4a6b-b302-d69d86b37111"
  ReservedCode2: "d25865cd-de8b-4a6b-b302-d69d86b37111"
---

# Unicode 支持

twinBASIC 在整个语言和运行时中提供完整的 Unicode 支持。

## 原生 Unicode 函数

接受字符串参数的原生函数，如 `MsgBox` 和文件系统函数（例如 `Open`、`Dir`、`Mkdir`、`Kill` 和 `RmDir`）现在支持 Unicode。此外，.twin 文件使这很容易使用，因为编辑器也支持 Unicode。因此你可以在编辑器中粘贴 Unicode 字符串，看到它正确显示，然后 tB 函数和控件也会正确显示相同的字符串。

## 控件中的 Unicode

所有 tB 实现的控件都支持 Unicode，包括在代码编辑器中和显示时。

::: warning
如果你子类化控件，请注意这意味着你将收到窗口消息的 Unicode (W) 版本，例如 ListView 将发送 `LVN_GETDISPINFOW (LVN_FIRST - 77)` 而不是 `LVN_GETDISPINFOA (LVN_FIRST - 50)`。
:::

## 字符串转换

`StrConv()` 现在有 `vbUTF8` / `vbFromUTF8` 选项用于 UTF-8 字符串转换。
