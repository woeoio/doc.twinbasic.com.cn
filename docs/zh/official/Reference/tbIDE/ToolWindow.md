---
title: ToolWindow
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/ToolWindow
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c08f44d9-140d-4d36-9392-dbf2218a7606'
  PropagateID: 'c08f44d9-140d-4d36-9392-dbf2218a7606'
  ReservedCode1: '08a3ea60-5382-4fa3-badd-33724804ab34'
  ReservedCode2: '08a3ea60-5382-4fa3-badd-33724804ab34'
---

# ToolWindow 类

一个可停靠/浮动的 IDE 窗格，其内容以 HTML 渲染。由 [**ToolWindows.Add**](/official/Reference/tbIDE/ToolWindows#add) 创建；插件通过 [**RootDomElement**](#rootdomelement)——窗格根部的 [**HtmlElement**](/official/Reference/tbIDE/HtmlElement)——填充其 DOM，并通过设置 [**Visible**](#visible) = **True** 显示窗格（工具窗口初始不可见）。

```vb
Private WithEvents myWindow As ToolWindow

Private Sub Button1_OnClick()
    Set myWindow = Host.ToolWindows.Add("MyAddIn.MyWindow", "MyAddIn.MyWindowPosition")
    With myWindow
        .Title = "Hello from My AddIn"
        With .RootDomElement
            .Properties.suggestedWidth  = "400px"
            .Properties.suggestedHeight = "300px"
            With .ChildDomElements.Add("greeting", "h1")
                .Properties.innerText = "Hello, world!"
            End With
        End With
        .Visible = True
    End With
End Sub
```

`WithEvents` 引用在用户关闭窗格时接收 [**OnClose**](#onclose)——通常插件使用该事件释放每个窗口的状态（计时器、DOM 元素引用等）。


## 工具窗口默认成员——jQuery 风格子元素查找

[**RootDomElement**](#rootdomelement) 是 **ToolWindow** 接口的 **DefaultMember**——因此 `myToolWindow.(...)` 等同于 `myToolWindow.RootDomElement.Properties.(...)`。由于 [**HtmlElementProperties**](/official/Reference/tbIDE/HtmlElementProperties) 是 `[COMExtensible(True)]`，在括号语法中传入的字符串会在运行时根据 DOM 解析。IDE 对 CSS 样式选择器做特殊处理，因此：

```vb
' 查找 id 为 "dataEntry" 的后代元素并读取其 .Value：
Dim entered As String = myToolWindow("#dataEntry").Value
```

适用于在不持有单独的 `As HtmlElement` 引用的情况下按 ID 访问单个子元素。

## 建议初始大小

[**RootDomElement**](#rootdomelement) 接受 `.Properties.suggestedWidth` 和 `.Properties.suggestedHeight`（CSS 长度字符串，如 `"400px"`）。这些是*一次性*提示——仅在工具窗口**首次**作为浮动窗格打开时使用；一旦用户调整大小（或通过 [**ToolWindows.Add**](/official/Reference/tbIDE/ToolWindows#add) 的持久化 ID 启用位置持久化后），IDE 会记住用户选择的大小，建议值被忽略。

::: info
在窗格首次变为可见之前设置 `suggestedWidth` / `suggestedHeight`。如果此用户之前已打开过该窗格（且向 [**ToolWindows.Add**](/official/Reference/tbIDE/ToolWindows#add) 提供了持久化 ID），IDE 记住的大小优先。
:::

## 属性

### Name

提供给 [**ToolWindows.Add**](/official/Reference/tbIDE/ToolWindows#add) 的内部名称。**String**，只读。

### Resizable

是否允许用户调整窗格大小。**Boolean**，可读/写。默认 **True**。

语法：*toolWindow*.**Resizable** [ = *value* ]

### RootDomElement

窗格 DOM 的根 [**HtmlElement**](/official/Reference/tbIDE/HtmlElement)。**DefaultMember**——参见上文的[工具窗口默认成员](#工具窗口默认成员--jquery-风格子元素查找)。

语法：*toolWindow*.**RootDomElement** **As** [**HtmlElement**](/official/Reference/tbIDE/HtmlElement)

### Title

窗格标题栏文本。**String**，可读/写。随时更新以反映变化的状态（选择计数、脏标记等）。

语法：*toolWindow*.**Title** [ = *value* ]

### Visible

窗格是否显示。**Boolean**，可读/写。默认 **False**——新创建的工具窗口在插件将此设为 **True** 之前不可见。

语法：*toolWindow*.**Visible** [ = *value* ]

## 方法

### ApplyCss

向窗格 DOM 注入一个 `<style>` 块，应用于窗格内的每个元素。适用于全局 CSS——类选择器、自定义元素样式、悬停效果——这些通过 [**HtmlElementProperties**](/official/Reference/tbIDE/HtmlElementProperties) 逐元素设置会比较不便。

语法：*toolWindow*.**ApplyCss** *styles*

*styles*
: *必需* CSS 文本。**String**。

```vb
' 从嵌入资源加载 CSS：
Dim css As String = StrConv(LoadResData("styles.css", "STYLESHEETS"), VbStrConv.vbFromUTF8)
myToolWindow.ApplyCss css
```

### Close

关闭窗格。匹配的 [**OnClose**](#onclose) 事件在调用返回前触发。

语法：*toolWindow*.**Close**

## 事件

### OnClose

当窗格被关闭时触发——无论是用户关闭还是插件调用 [**Close**](#close)。用于释放任何每窗口状态（计时器、DOM 元素引用等）。

语法：*toolWindow*_**OnClose**()