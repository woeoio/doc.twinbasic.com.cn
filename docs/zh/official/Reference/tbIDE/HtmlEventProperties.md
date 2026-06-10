---
title: HtmlEventProperties
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/HtmlEventProperties
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "77a5f168-e78b-407f-9376-eade227beb58"
  PropagateID: "77a5f168-e78b-407f-9376-eade227beb58"
  ReservedCode1: "67c4cd41-15fc-4f1f-ab2b-ff7e3e2066bb"
  ReservedCode2: "67c4cd41-15fc-4f1f-ab2b-ff7e3e2066bb"
---

# HtmlEventProperties 类

传递给每个 [**HtmlElement.AddEventListener**](/official/Reference/tbIDE/HtmlElement#addeventlistener) 回调的动态事件负载包。概念上是 JavaScript `Event` 对象的 IDE 端等价物——`.key`、`.target.id`、`.target.value`、`.index` 等字段通过包的 `[COMExtensible(True)]` 解析动态访问。

```vb
Private Sub MyButtonClicked(ByVal eventInfo As HtmlEventProperties)
    Host.DebugConsole.PrintText "clicked: " & eventInfo.target.id
End Sub

Private Sub MyKeyUp(ByVal eventInfo As HtmlEventProperties)
    If eventInfo.key = "Enter" Then ProcessEntered(eventInfo.target.value)
End Sub
```

::: warning
此接口是 **`[COMExtensible(True)]`**。字段名在运行时根据底层事件对象解析。标准 DOM 事件属性（`.target` → 触发事件的元素；键盘事件的 `.key`、`.code`、`.altKey`、`.ctrlKey`、`.shiftKey`；鼠标事件的 `.clientX`、`.clientY`；IDE 列表视图事件的 `.index` 等）原样转发自 JavaScript 端事件对象。标准字段请参阅 MDN 的 DOM Event 文档。
:::

## 来自 `raiseEvent()` 的自定义数据扇出

当工具窗口内的行内 HTML 调用 IDE 端的 `raiseEvent(eventName, event, stopPropagation, ...customData)` 辅助函数时，尾部的 _customData_ 值作为 `eventInfo.customData0`、`eventInfo.customData1` 等流向插件的监听器，从零开始数字索引。这是列表视图/虚拟列表视图用于将逐行上下文（文件路径、行号等）附加到其项事件的机制。

```vb
' 行内 HTML — 示例 15：
'   <div class="match" onclick="raiseEvent('onClickMatch', event, true, 'C:/file.twin', 42, 8)">…</div>

Private Sub OnClickMatch(ByVal eventInfo As HtmlEventProperties)
    Dim filePath As String = eventInfo.customData0
    Dim lineNum  As Long   = eventInfo.customData1
    Dim colNum   As Long   = eventInfo.customData2
    Host.ActiveEditors.Open filePath, lineNum, colNum
End Sub
```

## 异步事件（`setAsyncResult`）

某些事件——特别是虚拟列表视图的 `onAsyncGetItemHTML`——是*异步的*：IDE 要求插件为特定参数生成内容，并期望通过事件对象本身返回答案。参数以 `eventInfo.asyncArgument` 到达事件，监听器通过调用 `eventInfo.setAsyncResult(answer)` 响应：

```vb
Private Sub OnAsyncGetItemHTML(ByVal eventInfo As HtmlEventProperties)
    Dim itemIndex As Long = eventInfo.asyncArgument
    eventInfo.setAsyncResult("<div>Row " & itemIndex & "</div>")
End Sub
```

这是标准 `[COMExtensible(True)]` 解析在起作用——`setAsyncResult` 没有在接口上声明，它像 `.key` 或 `.target` 一样通过动态机制分派。完整模式（包括缓存失效配套调用 `listview.notifyChangedItem(idx)`）请参见示例 14（`WaynesVirtualListViewAddIn`）。

## 默认成员

接口的 **DefaultMember** 是 [**Item**](#item)——因此 `eventInfo("target")` 等同于 `eventInfo.Item("target")`。`.target.id` 简写相应地脱糖。

## 属性

### Item

按名称查找字段。返回一个 [**HtmlEventProperty**](/official/Reference/tbIDE/HtmlEventProperty)，其中包含字段的值加上用于进一步下钻的嵌套 [**Properties**](/official/Reference/tbIDE/HtmlEventProperty#properties)。

语法：_eventInfo_( _DomPropertyName_ ) **As** [**HtmlEventProperty**](/official/Reference/tbIDE/HtmlEventProperty)

_DomPropertyName_
: _必需_ 字段名称。**String**。
