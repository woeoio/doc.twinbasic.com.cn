---
title: Host
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/Host
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c3442388-d082-465f-9699-cd314c18d358'
  PropagateID: 'c3442388-d082-465f-9699-cd314c18d358'
  ReservedCode1: '336db599-468f-44ee-a416-8e3ef0ecdae8'
  ReservedCode2: '336db599-468f-44ee-a416-8e3ef0ecdae8'
---

# Host 类

IDE 传递给每个插件的根 API。DLL 在其 [`tbCreateCompilerAddin`](/official/Reference/tbIDE/#构建和加载插件) 工厂函数中接收一个 **Host** 作为参数；插件在其生命周期内保留该引用，并通过它访问所有其他功能——当前加载的 [**CurrentProject**](#currentproject)、[**ActiveEditors**](#activeeditors)、用于添加按钮的 [**Toolbars**](#toolbars)、用于添加 HTML 渲染面板的 [**ToolWindows**](#toolwindows)、用于日志输出的 [**DebugConsole**](#debugconsole)、虚拟 [**FileSystem**](#filesystem)、[**KeyboardShortcuts**](#keyboardshortcuts) 注册表、[**Themes**](#themes) 状态，以及对话框辅助方法 [**ShowMessageBox**](#showmessagebox) / [**ShowNotification**](#shownotification)。

通常通过 `WithEvents` 持有，以便插件可以订阅生命周期事件：

```vb
Private WithEvents Host As Host

Public Sub New(ByVal Host As Host)
    Set Me.Host = Host
End Sub

Private Sub Host_OnProjectLoaded()
    With Host.Toolbars(0)
        .AddSplitter
        Set MyButton = .AddButton("MyButton", "My Action")
    End With
End Sub
```

几乎所有有意义的插件都在 [**OnProjectLoaded**](#onprojectloaded) 处理程序中构建其工具栏按钮和工具窗口——那是 IDE 完全准备好接受扩展性命令的第一个时刻。


## 属性

### ActiveEditors

IDE 中当前打开的编辑器集合。`Host.ActiveEditors(0)` 返回活动编辑器——目前 IDE 同一时间只暴露一个活动编辑器，当编辑器打开时 `Host.ActiveEditors.Count` 为 **1**，没有时为 **0**。**As** [**Editors**](/official/Reference/tbIDE/Editors)。只读。

### CompilerVersion

运行中 IDE 的完整编译器版本字符串，例如 `"0.15.371"`。**String**，只读。适用于诊断日志行和兼容性门控。

### CurrentProject

当前加载的项目。提供项目名称和路径、生命周期方法（Save / Close / Build / Clean）、项目进入虚拟文件系统的 [**RootFolder**](/official/Reference/tbIDE/Project#rootfolder)、针对运行中项目上下文的表达式求值，以及 `.twinproj` 文件内的持久元数据存储。**As** [**Project**](/official/Reference/tbIDE/Project)。只读。

### DebugConsole

IDE 的调试控制台窗格。打印、清除或设置焦点。**As** [**DebugConsole**](/official/Reference/tbIDE/DebugConsole)。只读。

### FileSystem

IDE 的虚拟文件系统——让插件能够在不触及磁盘路径的情况下遍历和读取源文件的抽象。**As** [**FileSystem**](/official/Reference/tbIDE/FileSystem)。只读。

### IDEProcessID

运行中 IDE 进程的操作系统进程 ID。**Long**，只读。适用于跨进程场景——例如需要知道是哪个 IDE 调用了它的外部辅助 EXE。

### IDEWindowHandle

IDE 主窗口的 Win32 `HWND`。**LongPtr**，只读。传递给需要窗口所有者的 Win32 API，或用作显示插件拥有的模态对话框时的父句柄。

### KeyboardShortcuts

键盘快捷键注册表。调用 [**KeyboardShortcuts.Add**](/official/Reference/tbIDE/KeyboardShortcuts#add) 将组合键绑定到回调。**As** [**KeyboardShortcuts**](/official/Reference/tbIDE/KeyboardShortcuts)。只读。

### Themes

IDE 的主题状态。暴露活动主题名称和组；配合 [**OnChangedTheme**](#onchangedtheme) 事件响应用户主题更改。**As** [**Themes**](/official/Reference/tbIDE/Themes)。只读。

### Toolbars

IDE 工具栏集合。当前为单元素集合——`Host.Toolbars(0)` 是唯一可用的工具栏。**As** [**Toolbars**](/official/Reference/tbIDE/Toolbars)。只读。

### ToolWindows

HTML 渲染工具窗口的工厂。调用 [**ToolWindows.Add**](/official/Reference/tbIDE/ToolWindows#add) 创建一个。**As** [**ToolWindows**](/official/Reference/tbIDE/ToolWindows)。只读。

## 方法

### ShowMessageBox

显示一个模态的 IDE 风格对话框，带有可自定义的按钮条。返回所按按钮的基于 0 的索引，如果对话框在没有选择按钮的情况下被关闭则返回 `-1`。

语法：*host*.**ShowMessageBox**( *Prompt*, *Buttons*, *Title* ) **As Long**

*Prompt*
: *必需* 要显示的消息。**String**。

*Buttons*
: *必需* 由 `|` 分隔的按钮标题组成的 **String**。例如 `"OK"` 表示单个确定按钮，`"Yes|No|Cancel"` 表示三个按钮。

*Title*
: *必需* 对话框标题栏文本。**String**。

```vb
Select Case Host.ShowMessageBox("Save changes before closing?", _
                                 "Save|Discard|Cancel", "Confirm")
    Case 0: ' 保存
    Case 1: ' 丢弃
    Case 2, -1: ' 取消或关闭
End Select
```

### ShowNotification

在 IDE 中显示一个非模态、低调的通知弹出框——一个吐司式瞬态消息，不需要用户做出反应。

语法：*host*.**ShowNotification** *Prompt*

*Prompt*
: *必需* 通知文本。**String**。

[**ShowMessageBox**](#showmessagebox) 用于用户必须回答某事的场景；**ShowNotification** 用于"用户应该知道但不必做出反应"的信息。

## 事件

**Host** CoClass 暴露三个事件。第三个（及任何未来新增的）事件标记了编译时属性 `[AllowUnpopulatedVtableEntry]`，这使得较新的插件可以针对较新的事件接口编译，同时仍能在不触发较新事件的旧版 IDE 中加载——旧版 IDE 将该槽位留空，插件永远不会接收那个特定事件。

### OnProjectLoaded

当 IDE 完成项目加载并准备好接受扩展性命令时触发一次。用于设置工具栏按钮、打开默认可见的工具窗口、注册键盘快捷键以及将启动状态记录到 [**DebugConsole**](/official/Reference/tbIDE/DebugConsole) 的规范位置。

语法：*host*_**OnProjectLoaded**()

```vb
Private Sub Host_OnProjectLoaded()
    With Host.Toolbars(0)
        .AddSplitter
        Set MyButton = .AddButton("MyButton", "My Action")
    End With
End Sub
```

### OnChangedActiveEditor

当用户切换聚焦的编辑器时触发。此事件是刷新依赖于当前编辑器的任何插件 UI（例如上下文感知的工具窗口）的正确钩子。自 IDE BETA 504+ 起可用；旧版 IDE 不触发此事件。

语法：*host*_**OnChangedActiveEditor**(*EditorIdx* **As Long**, *Editor* **As** [**Editor**](/official/Reference/tbIDE/Editor))

*EditorIdx*
: [**ActiveEditors**](#activeeditors) 集合中新活动编辑器的基于 0 的索引。

*Editor*
: 新的活动编辑器对象。对于代码窗格可转换为 [**CodeEditor**](/official/Reference/tbIDE/CodeEditor)——参见[编辑器可转换性](/official/Reference/tbIDE/Editor#可转换性)。

### OnChangedTheme

当用户更改 IDE 主题时触发。配合 [**Themes.ActiveThemeName**](/official/Reference/tbIDE/Themes#activethemename) / [**Themes.ActiveThemeNameGroup**](/official/Reference/tbIDE/Themes#activethemenamegroup) 刷新插件在其工具窗口内绘制的任何颜色敏感元素。

语法：*host*_**OnChangedTheme**(*ThemeName* **As String**)

*ThemeName*
: 新主题的名称——与用户现在在 [**Themes.ActiveThemeName**](/official/Reference/tbIDE/Themes#activethemename) 中看到的值相同（例如 `"Classic"`、`"Dark"`、`"Light"`）。

## DebuggerEvaluateOptions

在 **Host** 接口上内联声明的标志枚举；由 [**Project.Evaluate**](/official/Reference/tbIDE/Project#evaluate)（及任何未来的调试器求值 API）消费。当前为单值占位符——未来 IDE 版本可能添加更多标志。

| 常量 | 值 | 描述 |
|------|-----|------|
| **NONE** | 0 | 无特殊求值选项。 |