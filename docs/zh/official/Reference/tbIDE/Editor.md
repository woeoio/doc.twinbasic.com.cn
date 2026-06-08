---
title: Editor
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/Editor
---

# Editor 类

每个 IDE 编辑器呈现的基础接口。**Editor** 本身只暴露通用成员——[**Path**](#path)、[**Type**](#type)、[**SetFocus**](#setfocus)、[**Close**](#close)、[**Save**](#save)、[**IsDirty**](#isdirty)——而从 [**Editors.Item**](/official/Reference/tbIDE/Editors#item) 或 [**Host.OnChangedActiveEditor**](/official/Reference/tbIDE/Host#onchangedactiveeditor) 事件返回的实例通常是*特定*的编辑器类型（例如代码窗格的 [**CodeEditor**](/official/Reference/tbIDE/CodeEditor)），可通过转换获取。

## 可转换性

IDE 返回的 **Editor** 可转换为底层窗格的特定编辑器类型。对于代码窗格，转换目标是 [**CodeEditor**](/official/Reference/tbIDE/CodeEditor)；未来 IDE 版本可能添加其他编辑器类型，并遵循相同模式。

在转换前使用 `TypeOf` 测试：

```vb
If Host.ActiveEditors.Count > 0 Then
    If TypeOf Host.ActiveEditors(0) Is CodeEditor Then
        Dim codeEditor As CodeEditor = Host.ActiveEditors(0)
        Host.DebugConsole.PrintText "selected text: " & codeEditor.SelectedText
    End If
End If
```

仅当来源——例如已知编辑器类型的 [**OnChangedActiveEditor**](/official/Reference/tbIDE/Host#onchangedactiveeditor) 处理程序——保证底层类型时，才可无条件转换。


## 属性

### IsDirty

如果编辑器有未保存的更改则为 **True**。**Boolean**，只读。

### Path

编辑器显示的文件的内部虚拟文件系统路径——例如 `"twinbasic:/Sources/MainModule.twin"`。**String**，只读。通过 [**FileSystem.ResolvePath**](/official/Reference/tbIDE/FileSystem#resolvepath) 解析。

### Type

标识编辑器类型的短字符串——例如代码窗格为 `"CodeEditor"`。**String**，只读。适用于诊断日志行；对于能力分派，优先使用 `TypeOf` 而非比较此字符串。

## 方法

### Close

关闭编辑器。如果编辑器有未保存的更改，IDE 可能会在实际关闭前提示用户。

语法：*editor*.**Close**

### Save

保存编辑器的内容。

语法：*editor*.**Save**

### SetFocus

将编辑器带到前台并给予键盘焦点。

语法：*editor*.**SetFocus**