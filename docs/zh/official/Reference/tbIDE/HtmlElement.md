---
title: HtmlElement
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/HtmlElement
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3d829252-00ca-41fb-8a2f-5b1c5f8a6ba1'
  PropagateID: '3d829252-00ca-41fb-8a2f-5b1c5f8a6ba1'
  ReservedCode1: '6451ece0-f37c-42ed-ad7d-cbdbba599be6'
  ReservedCode2: '6451ece0-f37c-42ed-ad7d-cbdbba599be6'
---

# HtmlElement 类

工具窗口内的一个 DOM 元素——渲染 HTML 树中的每个节点都可以作为 **HtmlElement** 访问，从 [**ToolWindow.RootDomElement**](/official/Reference/tbIDE/ToolWindow#rootdomelement) 开始，通过 [**ChildDomElements**](#childdomelements) 向下遍历。代码窗格内的行内覆盖层（通过 [**CodeEditor.AddMonacoWidget**](/official/Reference/tbIDE/CodeEditor#addmonacowidget) 创建）也显示为 **HtmlElement** 实例，行为相同。

```vb
With myToolWindow.RootDomElement.ChildDomElements.Add("greeting", "h1")
    With .Properties
        .style.textAlign = "center"
        .style.color     = "white"
        .innerText       = "Hello, world!"
    End With
End With
```

元素的*属性*——每个 CSS 样式属性、每个 DOM 属性、每个自定义控件扩展——都存在于 [**Properties**](#properties) 包中，通过动态解析机制访问。参见包概述中的[动态 DOM 属性解析](/official/Reference/tbIDE/#动态-dom-属性解析)，了解使 `.style.textAlign = "center"` 在没有静态声明 `style` 成员的情况下工作的底层机制。


## 属性

### ChildDomElements

元素的子元素集合。调用 [**HtmlElements.Add**](/official/Reference/tbIDE/HtmlElements#add) 添加新子元素，[**Item**](/official/Reference/tbIDE/HtmlElements#item) 按 ID 查找。**As** [**HtmlElements**](/official/Reference/tbIDE/HtmlElements)。只读。

### Name

通过 [**HtmlElements.Add**](/official/Reference/tbIDE/HtmlElements#add) 创建元素时分配的唯一 ID。**String**，只读。

### Properties

元素的动态属性包——每个 DOM 属性、每个 CSS 样式属性、每个自定义控件扩展都存在于这里。**As** [**HtmlElementProperties**](/official/Reference/tbIDE/HtmlElementProperties)。**DefaultMember**——因此 `element.<name>` 等同于 `element.Properties.<name>`。

该包是 [`[COMExtensible(True)]`](/official/Reference/tbIDE/#动态-dom-属性解析)：属性名在运行时根据 DOM 元素解析，因此可接受的属性集是底层标签支持的所有内容——标准 DOM 属性请参阅 MDN，控件特有属性请参阅自定义控件文档（Chart.js、Monaco 等）。

## 方法

### AddEventListener

注册一个在元素上触发 DOM 事件时调用的回调。

语法：*element*.**AddEventListener** *DomEventName*, *CallbackFunc* [, *Data* ]

*DomEventName*
: *必需* DOM 事件名称。**String**。标准名称（`"click"`、`"keyup"`、`"input"`、`"change"`、`"mouseenter"` 等）和行内 HTML 触发的自定义事件名称（见下文）均可。

*CallbackFunc*
: *必需* 回调。传入签名为 `Sub(ByVal eventInfo As HtmlEventProperties)` 的子过程的 `AddressOf`。**LongPtr**。

*Data*
: *可选* 与注册关联的不透明值。**Variant**。

```vb
With .ChildDomElements.Add("myButton", "div")
    .Properties.innerText = "Click me"
    .AddEventListener("click", AddressOf MyButtonClicked)
End With

' …
Private Sub MyButtonClicked(ByVal eventInfo As HtmlEventProperties)
    Host.DebugConsole.PrintText "clicked: " & eventInfo.target.id
End Sub
```

::: important
对于四个自定义控件标签（`"chartjs"`、`"monaco"`、`"listview"`、`"virtuallistview"`），控件特有的事件（例如 Monaco 的 `onDidChangeModelContent`、列表视图的 `onClickItem`）注册在**控件对象**上，而非 DOM 元素上。因此：

```vb
' 错误——监听器永远不会被触发：
monacoDivElement.AddEventListener("onDidChangeModelContent", AddressOf Handler)

' 正确——在 .editor（或其他控件的 .listview / .chart）上注册：
monacoDivElement.Properties.editor.AddEventListener("onDidChangeModelContent", AddressOf Handler)
```

标准 DOM 事件（`"click"`、`"keyup"` 等）仍然通过此方法直接附加到 DOM 元素。
:::

#### 行内 HTML 的自定义事件名称

工具窗口内渲染的行内 HTML 可以通过 IDE 端的 `raiseEvent()` JavaScript 辅助函数向插件触发任意事件名称。JavaScript 端的函数签名为：

```js
raiseEvent(eventName, event, stopPropagation, ...customData)
```

——传入事件名称（任意字符串）、DOM `event` 对象、控制传播的布尔值，以及任意数量的尾部自定义数据值。然后插件通过 **AddEventListener** 以相同事件名注册监听器，自定义数据值到达 [**HtmlEventProperties**](/official/Reference/tbIDE/HtmlEventProperties) 时为 `eventInfo.customData0`、`eventInfo.customData1` 等（从零开始数字索引）。此模式在示例 13（列表视图）和示例 15（全局搜索）中被大量使用，以将处理程序附加到列表视图 HTML 内渲染的逐项按钮。

### Remove

从 DOM 中移除元素。任何子元素随之移除。在此元素上注册的任何事件监听器被释放。

语法：*element*.**Remove**