---
title: "tbIDE 包"
parent: Packages
nav_order: 11
permalink: /tB/Packages/tbIDE/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f6f83194-9dfd-4bc9-b858-8eb2ebb01996'
  PropagateID: 'f6f83194-9dfd-4bc9-b858-8eb2ebb01996'
  ReservedCode1: 'efb49058-78e7-4bf3-bf91-3f98ced79bb5'
  ReservedCode2: 'efb49058-78e7-4bf3-bf91-3f98ced79bb5'
---

# tbIDE 包

**tbIDE** 包是 twinBASIC IDE 的**插件 SDK**。插件是一个标准 DLL，IDE 在启动时加载它；该 DLL 导出一个工厂函数，返回一个实现了 [**AddIn**](/official/Reference/tbIDE/AddIn) 契约的对象，此后一切操作都通过 IDE 传入的 [**Host**](/official/Reference/tbIDE/Host) 对象完成。该包本身是**纯类型**的——每个公共符号都是一个接口或 CoClass；实际实现存在于 twinBASIC IDE 二进制文件中，插件 DLL 绑定到类型声明，让 IDE 在运行时将调用封送到其实现中。

该包是 twinBASIC 附带的内置*编译器*包。它会自动添加到插件项目中；无需通过"项目 → 引用"手动添加。


## 构建和加载插件

插件项目有三个区别性设置：

- **构建类型：** 标准 DLL。
- **构建路径：** `${IdePath}\addins\${Architecture}\${ProjectName}.${FileExtension}`。输出直接放入 IDE 的 `addins\Win32\` 或 `addins\Win64\` 文件夹，IDE 在启动时会扫描这些文件夹查找插件。
- **编译器包引用**指向 **tbIDE**（通过 `isCompilerPackage: true`、`publisher: TWINBASIC-COMPILER`、`symbolId: tbIDE` 添加到项目引用中）。这是 DLL 的编译时类型与 IDE 的运行时实现之间的绑定。

DLL 必须导出一个函数——IDE 在发现并加载插件时调用的入口点：

```vb
Module MainModule
    [DllExport]
    Public Function tbCreateCompilerAddin(ByVal Host As Host) As AddIn
        Return New MyAddIn(Host)
    End Function
End Module
```

返回的对象必须实现 [**AddIn**](/official/Reference/tbIDE/AddIn)。当插件被禁用或 IDE 关闭时，IDE 会释放该对象，插件可以通过 `Class_Terminate` 关闭资源。

一个最小的插件类：

```vb
Private Class MyAddIn
    Implements AddIn

    Private WithEvents Host As Host

    Public Sub New(ByVal Host As Host)
        Set Me.Host = Host
    End Sub

    Private Property Get AddIn_Name() As String
        Return "My AddIn"
    End Property

    Private Sub Host_OnProjectLoaded()
        Host.DebugConsole.PrintText "Hello from My AddIn!"
    End Sub
End Class
```

`WithEvents Host As Host` 模式是插件订阅 IDE 生命周期事件的方式（[**OnProjectLoaded**](/official/Reference/tbIDE/Host#onprojectloaded)、[**OnChangedActiveEditor**](/official/Reference/tbIDE/Host#onchangedactiveeditor)、[**OnChangedTheme**](/official/Reference/tbIDE/Host#onchangedtheme)）。几乎所有有意义的插件都在 [**OnProjectLoaded**](/official/Reference/tbIDE/Host#onprojectloaded) 处理程序中设置工具栏按钮和工具窗口——那是 IDE 完全准备好接受扩展性命令的第一个时刻。

## 类目录

该包的 24 个 `.twin` 文件各声明一个接口与 CoClass 对（加上一个具体的 `Class`），此处按角色分组以便查阅。除 [**AddinTimer**](/official/Reference/tbIDE/AddinTimer) 外的每个 CoClass 都**由 IDE 提供给插件**——绝不能用 `New` 实例化。

### 入口点和根 API

- [**AddIn**](/official/Reference/tbIDE/AddIn) —— 每个插件的主类必须实现的契约。一个只读的 [**Name**](/official/Reference/tbIDE/AddIn#name) 属性。
- [**Host**](/official/Reference/tbIDE/Host) —— 传递给 `tbCreateCompilerAddin` 的根 API 对象。暴露 [**CurrentProject**](/official/Reference/tbIDE/Host#currentproject)、[**ActiveEditors**](/official/Reference/tbIDE/Host#activeeditors)、[**Toolbars**](/official/Reference/tbIDE/Host#toolbars)、[**ToolWindows**](/official/Reference/tbIDE/Host#toolwindows)、[**DebugConsole**](/official/Reference/tbIDE/Host#debugconsole)、[**FileSystem**](/official/Reference/tbIDE/Host#filesystem)、[**KeyboardShortcuts**](/official/Reference/tbIDE/Host#keyboardshortcuts)、[**Themes**](/official/Reference/tbIDE/Host#themes)，以及一组小型对话框辅助方法（[**ShowMessageBox**](/official/Reference/tbIDE/Host#showmessagebox)、[**ShowNotification**](/official/Reference/tbIDE/Host#shownotification)）。
- [**AddinTimer**](/official/Reference/tbIDE/AddinTimer) —— 包中唯一可由用户实例化的类。`New AddinTimer`；设置 [**Interval**](/official/Reference/tbIDE/AddinTimer#interval) 和 [**Enabled**](/official/Reference/tbIDE/AddinTimer#enabled)；接收 [**Timer**](/official/Reference/tbIDE/AddinTimer#timer) 事件。

### 项目、编辑器和虚拟文件系统

- [**Project**](/official/Reference/tbIDE/Project) —— 当前加载的项目。生命周期（[**Save**](/official/Reference/tbIDE/Project#save)、[**Close**](/official/Reference/tbIDE/Project#close)、[**Build**](/official/Reference/tbIDE/Project#build)、[**Clean**](/official/Reference/tbIDE/Project#clean)），内省（[**Name**](/official/Reference/tbIDE/Project#name)、[**Path**](/official/Reference/tbIDE/Project#path)、[**ProjectID**](/official/Reference/tbIDE/Project#projectid)、版本 + 架构 + 构建输出信息），挂接到调试控制台表达式引擎的 [**Evaluate**](/official/Reference/tbIDE/Project#evaluate)，进入虚拟文件系统的 [**RootFolder**](/official/Reference/tbIDE/Project#rootfolder) 入口，以及用于在 `.twinproj` 文件中持久存储每插件键值对的 [**LoadMetaData**](/official/Reference/tbIDE/Project#loadmetadata) / [**SaveMetaData**](/official/Reference/tbIDE/Project#savemetadata) 对。
- [**Editor**](/official/Reference/tbIDE/Editor) —— 基础编辑器接口（Path、Type、SetFocus、Close、Save、IsDirty）。可转换为 [**CodeEditor**](/official/Reference/tbIDE/CodeEditor)。
- [**CodeEditor**](/official/Reference/tbIDE/CodeEditor) —— 代码窗格编辑器：选择、全文、Monaco 透传（[**ExecuteMonacoCommand**](/official/Reference/tbIDE/CodeEditor#executemonacocommand)）、行内覆盖 HTML（[**AddMonacoWidget**](/official/Reference/tbIDE/CodeEditor#addmonacowidget)）。
- [**Editors**](/official/Reference/tbIDE/Editors) —— 活动编辑器集合。`Editors(0)` 是当前编辑器；[**Open**](/official/Reference/tbIDE/Editors#open) 跳转到文件（及可选的行/列）。
- [**FileSystem**](/official/Reference/tbIDE/FileSystem) —— 虚拟文件系统。[**RootFolder**](/official/Reference/tbIDE/FileSystem#rootfolder)、[**ResolvePath**](/official/Reference/tbIDE/FileSystem#resolvepath)。
- [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem) —— [**File**](/official/Reference/tbIDE/File) 和 [**Folder**](/official/Reference/tbIDE/Folder) 的基类。`Name`、`Path`、`Type`、`Parent`。
- [**Folder**](/official/Reference/tbIDE/Folder) —— 子项枚举（优选用 **For Each**——参见 [**Count**](/official/Reference/tbIDE/Folder#count) / [**Item**](/official/Reference/tbIDE/Folder#item) 上的警告——IDE 是多线程的，基于索引的迭代会产生竞争），[**IsPackagesFolder**](/official/Reference/tbIDE/Folder#ispackagesfolder)。
- [**File**](/official/Reference/tbIDE/File) —— 虚拟文件系统文件访问器：[**Data**](/official/Reference/tbIDE/File#data)（原始字节）、[**Text**](/official/Reference/tbIDE/File#text)（解码文本）、[**ReadText**](/official/Reference/tbIDE/File#readtext)（带选项的文本，如去除注释）、[**IsDirty**](/official/Reference/tbIDE/File#isdirty)。

### IDE UI

- [**Toolbar**](/official/Reference/tbIDE/Toolbar) —— IDE 工具栏。[**AddSplitter**](/official/Reference/tbIDE/Toolbar#addsplitter)、[**AddButton**](/official/Reference/tbIDE/Toolbar#addbutton)。
- [**Toolbars**](/official/Reference/tbIDE/Toolbars) —— 工具栏集合。当前只有一个工具栏，可通过 `Toolbars(0)` 访问。
- [**Button**](/official/Reference/tbIDE/Button) —— 由 [**AddButton**](/official/Reference/tbIDE/Toolbar#addbutton) 创建的工具栏按钮。暴露 [**OnClick**](/official/Reference/tbIDE/Button#onclick)。
- [**ToolWindow**](/official/Reference/tbIDE/ToolWindow) —— 可停靠/浮动的 HTML 渲染工具窗口。[**Title**](/official/Reference/tbIDE/ToolWindow#title)、[**Visible**](/official/Reference/tbIDE/ToolWindow#visible)、[**Resizable**](/official/Reference/tbIDE/ToolWindow#resizable)、[**RootDomElement**](/official/Reference/tbIDE/ToolWindow#rootdomelement)、[**ApplyCss**](/official/Reference/tbIDE/ToolWindow#applycss)、[**OnClose**](/official/Reference/tbIDE/ToolWindow#onclose)。
- [**ToolWindows**](/official/Reference/tbIDE/ToolWindows) —— 工具窗口工厂：[**Add**](/official/Reference/tbIDE/ToolWindows#add) 创建新窗口。

### 工具窗口 DOM 和事件

四个 `Html*` 类是插件查看工具窗口内 DOM 的窗口。四个类都声明了 `[COMExtensible(True)]`——参见[动态 DOM 属性解析](#动态-dom-属性解析)。

- [**HtmlElement**](/official/Reference/tbIDE/HtmlElement) —— 一个 DOM 元素。[**Properties**](/official/Reference/tbIDE/HtmlElement#properties)、[**ChildDomElements**](/official/Reference/tbIDE/HtmlElement#childdomelements)、[**Remove**](/official/Reference/tbIDE/HtmlElement#remove)、[**AddEventListener**](/official/Reference/tbIDE/HtmlElement#addeventlistener)。
- [**HtmlElements**](/official/Reference/tbIDE/HtmlElements) —— 子元素集合。[**Item**](/official/Reference/tbIDE/HtmlElements#item) 和 [**Add**](/official/Reference/tbIDE/HtmlElements#add)——后者接受标准 HTML 标签**以及** IDE 的自定义控件标签 `"chartjs"`、`"monaco"`、`"listview"`、`"virtuallistview"`。
- [**HtmlElementProperty**](/official/Reference/tbIDE/HtmlElementProperty) —— 属性包中的一个可设置属性。
- [**HtmlElementProperties**](/official/Reference/tbIDE/HtmlElementProperties) —— DOM 元素上的动态属性包。
- [**HtmlEventProperty**](/official/Reference/tbIDE/HtmlEventProperty) —— 事件负载中的一个只读值。
- [**HtmlEventProperties**](/official/Reference/tbIDE/HtmlEventProperties) —— 传递给每个 [**AddEventListener**](/official/Reference/tbIDE/HtmlElement#addeventlistener) 回调的动态事件负载包。

### 单例

- [**DebugConsole**](/official/Reference/tbIDE/DebugConsole) —— 调试控制台窗格。[**PrintText**](/official/Reference/tbIDE/DebugConsole#printtext)、[**Clear**](/official/Reference/tbIDE/DebugConsole#clear)、[**SetFocus**](/official/Reference/tbIDE/DebugConsole#setfocus)。
- [**KeyboardShortcuts**](/official/Reference/tbIDE/KeyboardShortcuts) —— IDE 全局键盘快捷键。[**Add**](/official/Reference/tbIDE/KeyboardShortcuts#add)。
- [**Themes**](/official/Reference/tbIDE/Themes) —— IDE 的活动主题。[**ActiveThemeName**](/official/Reference/tbIDE/Themes#activethemename)、[**ActiveThemeNameGroup**](/official/Reference/tbIDE/Themes#activethemenamegroup)。

## 动态 DOM 属性解析

四个具有 `[COMExtensible(True)]` 属性的 `Html*` 类——[**HtmlElementProperties**](/official/Reference/tbIDE/HtmlElementProperties)、[**HtmlElementProperty**](/official/Reference/tbIDE/HtmlElementProperty)、[**HtmlEventProperties**](/official/Reference/tbIDE/HtmlEventProperties)、[**HtmlEventProperty**](/official/Reference/tbIDE/HtmlEventProperty)——接受**任意属性名**，这些属性名在运行时根据底层 DOM 元素（或事件对象）进行解析。`style`、`innerText`、`chart`、`editor`、`listview`、`value`、`target`、`key`、`index` 等都不是在接口上静态声明的——它们都通过 COM 可扩展的 `Item(name)` 默认成员动态解析。

因此：

```vb
With element.ChildDomElements.Add("mySeparator", "h1").Properties
    .style.textAlign = "center"
    .style.color     = "white"
    .innerText       = "Section heading"
End With
```

在运行时读取为：

```vb
.Item("style").Item("textAlign").Value = "center"
.Item("style").Item("color").Value     = "white"
.Item("innerText").Value               = "Section heading"
```

编译器不验证属性名；它们作为字符串转发到 IDE 的工具窗口渲染器。可接受的属性集是**底层标签的每个 DOM 属性**——标准 HTML 属性、`.style.…` 下的每个 CSS 样式属性，以及任何自定义控件特有的属性，如 `"chartjs"` 元素上的 `.chart.data.datasets(0).borderWidth` 或 `"monaco"` 元素上的 `.editor.setOption(...)`。参考文档不一一列举——标准 DOM 属性名请参阅 MDN，`chartjs` 控件请参阅 Chart.js，`monaco` 控件请参阅 Monaco 文档，IDE 特有的 `listview` / `virtuallistview` 属性请参阅下文的对应示例。

## 工具窗口 DOM 标签

[**HtmlElements.Add**](/official/Reference/tbIDE/HtmlElements#add) 接受一个 *TagName* 字符串。标准 HTML 标签（`"div"`、`"span"`、`"input"`、`"h1"`、`"label"`、`"img"` 等）按预期工作；此外，IDE 提供了四个自定义控件标签：

- **`"chartjs"`** —— 封装 **Chart.js**。该元素暴露一个 `.chart` 属性，其子属性镜像 Chart.js 的 `data` / `options` / `config` 命名空间。参见示例 11。
- **`"monaco"`** —— 嵌入一个 **Monaco 编辑器**实例（与 IDE 代码窗格使用的编辑器相同）。该元素暴露一个 `.editor` 属性，包含 `setOption`、`setValue`、`getValue` 和 `AddEventListener`（注意：事件监听器附加到 `.editor`，而非 DOM 元素）。参见示例 12。
- **`"listview"`** —— IDE 内置的列表视图控件。该元素暴露一个 `.listview` 属性，包含 `addItem`、`removeItem`、`getItem`、`setShowScrollbarV` / `setShowScrollbarH`，以及事件 `onClickItem` / `onDblClickItem`。参见示例 13。
- **`"virtuallistview"`** —— 列表视图的虚拟变体，适用于大数据集（数百万行）。该元素暴露相同的 `.listview` 属性加上 `setItemCount` 和异步的 `onAsyncGetItemHTML` 事件（监听器通过 `eventInfo.setAsyncResult("<html>")` 响应）；当底层数据变化时，调用 `.listview.notifyChangedItem(idx)` 使某一行的内部缓存失效。参见示例 14。

每个控件的完整属性和方法由各控件的主项目文档记录；本包通过上述 `[COMExtensible(True)]` 机制对其进行封装。

## 示例所在位置

twinBASIC 示例文件夹中附带了六个完整的插件。它们是"如何端到端使用该包"的权威参考，在各类页面上也有引用。

| 示例 | 项目 | 教学内容 |
|------|------|----------|
| 10 | `WaynesWorldAddInTest1` | 全面演示——工具栏设置、一个包含 22 个样式化 `div` 按钮的大型工具窗口，每个按钮执行不同的 `Host.*` 功能。从这里开始。 |
| 11 | `WaynesWorldCPUMonitorTest1` | [**AddinTimer**](/official/Reference/tbIDE/AddinTimer) + 一个 `"chartjs"` 自定义控件工具窗口驱动的实时折线图。 |
| 12 | `WaynesWorldMonacoEditorTest1` | 一个 `"monaco"` 自定义控件工具窗口：窗口内的 Monaco 编辑器，具有 `setValue` / `getValue` 和内容变更监听器。 |
| 13 | `WaynesListViewAddIn` | 一个 `"listview"` 自定义控件工具窗口，包含 `ApplyCss`、双击删除行为以及用于自定义事件名的行内 HTML `raiseEvent()`。 |
| 14 | `WaynesVirtualListViewAddIn` | 一个包含 5,000,000 行的 `"virtuallistview"`，由 `onAsyncGetItemHTML` / `setAsyncResult` / `notifyChangedItem` 支持。 |
| 15 | `tbGlobalSearchAddIn1` | 一个完整的全局搜索插件：虚拟文件系统遍历（对 [**Folder**](/official/Reference/tbIDE/Folder) 执行 **For Each**）、带注释去除的文本读取（[**File.ReadText**](/official/Reference/tbIDE/File#readtext)）、编辑器导航（[**Editors.Open**](/official/Reference/tbIDE/Editors#open)）、通过 `GetSetting` / `SaveSetting` 的持久选项。 |