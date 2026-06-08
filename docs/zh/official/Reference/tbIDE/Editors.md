---
title: Editors
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/Editors
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd79979ed-e4e1-454e-8b82-0319f39f1f4a'
  PropagateID: 'd79979ed-e4e1-454e-8b82-0319f39f1f4a'
  ReservedCode1: '4a2fbdfd-9da0-4813-9654-6da438db6685'
  ReservedCode2: '4a2fbdfd-9da0-4813-9654-6da438db6685'
---

# Editors 类

IDE 中活动编辑器的集合——通过 [**Host.ActiveEditors**](/official/Reference/tbIDE/Host#activeeditors) 访问。IDE 当前同一时间只暴露一个活动编辑器，但集合接口允许未来版本暴露更多。最常见的操作是 `Host.ActiveEditors(0)`（活动编辑器）和 [**Open**](#open)（跳转到指定文件的指定行/列）。

```vb
' 从当前聚焦的代码窗格读取选择内容：
If Host.ActiveEditors.Count > 0 Then
    If TypeOf Host.ActiveEditors(0) Is CodeEditor Then
        Dim codeEditor As CodeEditor = Host.ActiveEditors(0)
        Host.DebugConsole.PrintText codeEditor.SelectedText
    End If
End If

' 导航到特定文件 + 行 + 列：
Host.ActiveEditors.Open "twinbasic:/Sources/MainModule.twin", 42, 8
Host.ActiveEditors.Item(0).SetFocus
```


## 属性

### Count

当前活动的编辑器数量。**Long**，只读。当前始终为 **0** 或 **1**。

### Item

编辑器集合的索引访问。**DefaultMember**——因此 `Host.ActiveEditors(0)` 等同于 `Host.ActiveEditors.Item(0)`。

语法：*editors*( *Index* ) **As** [**Editor**](/official/Reference/tbIDE/Editor)

*Index*
: 一个基于 0 的 **Variant** 索引。当前打开编辑器时 `0` 是唯一有效值。

返回的对象是 [**Editor**](/official/Reference/tbIDE/Editor)，但通常可转换为更具体的类型（例如代码窗格的 [**CodeEditor**](/official/Reference/tbIDE/CodeEditor)）——参见[编辑器可转换性](/official/Reference/tbIDE/Editor#可转换性)。

## 方法

### Open

打开（或重新聚焦）指定文件的编辑器，可选地将插入符定位到特定行和列。

语法：*editors*.**Open** *Path* [, *LineNumber* ] [, *ColumnNumber* ] [, *Options* ]

*Path*
: *必需* 要打开的文件的虚拟文件系统路径。**String**。通常以 `"twinbasic:/"` 开头；[**FileSystemItem.Path**](/official/Reference/tbIDE/FileSystemItem#path) 或 [**Editor.Path**](/official/Reference/tbIDE/Editor#path) 返回的值始终是有效参数。

*LineNumber*
: *可选* 要导航到的基于 1 的行号。**Long**。默认 **0**（不导航——在文件记住的光标位置打开）。

*ColumnNumber*
: *可选* 请求行上基于 1 的列号。**Long**。默认 **0**（第 1 列）。

*Options*
: *可选* 一个 [**EditorOpenOptions**](#editoropenoptions) 值。默认 [**NONE**](#EditorOpenOptions_NONE)。

**Open** 返回后，请求的文件成为活动编辑器；调用 `Editors.Item(0).SetFocus` 给予它键盘焦点。

```vb
Host.ActiveEditors.Open File.Path, LineNumber, ColumnNumber
Host.ActiveEditors.Item(0).SetFocus
```

## EditorOpenOptions

在 **Editors** 接口上内联声明的标志枚举；由 [**Open**](#open) 消费。当前为单值占位符——未来 IDE 版本可能添加更多标志。

| 常量 | 值 | 描述 |
|------|-----|------|
| **NONE** | 0 | 无特殊打开选项。 |