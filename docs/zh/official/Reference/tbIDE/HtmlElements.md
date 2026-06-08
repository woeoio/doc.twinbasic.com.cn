---
title: HtmlElements
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/HtmlElements
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4167e783-2af7-417f-823b-2691501b68d1'
  PropagateID: '4167e783-2af7-417f-823b-2691501b68d1'
  ReservedCode1: '20d27787-e3c0-48b4-b947-d9e59b2bbda3'
  ReservedCode2: '20d27787-e3c0-48b4-b947-d9e59b2bbda3'
---

# HtmlElements 类

[**HtmlElement**](/official/Reference/tbIDE/HtmlElement) 上的子元素集合。通过 [**HtmlElement.ChildDomElements**](/official/Reference/tbIDE/HtmlElement#childdomelements) 访问。使用 [**Add**](#add) 创建新子元素，使用 [**Item**](#item) 事后按 ID 查找。

```vb
With myToolWindow.RootDomElement
    With .ChildDomElements.Add("header", "h1")
        .Properties.innerText = "Hello"
    End With
    With .ChildDomElements.Add("body", "div")
        .Properties.style.padding = "10px"
        With .ChildDomElements.Add("greeting", "p")
            .Properties.innerText = "World"
        End With
    End With
End With
```


## 方法

### Add

在父 [**HtmlElement**](/official/Reference/tbIDE/HtmlElement) 下创建新子元素并返回新的 [**HtmlElement**](/official/Reference/tbIDE/HtmlElement)。

语法：*htmlElements*.**Add**( *ElementID*, *TagName* ) **As** [**HtmlElement**](/official/Reference/tbIDE/HtmlElement)

*ElementID*
: *必需* 新元素的 DOM `id`。**String**。在工具窗口内选择不同的 ID——它们同时作为 [**Item**](#item) 查找的键。

*TagName*
: *必需* HTML 标签名。**String**。标准标签（`"div"`、`"span"`、`"input"`、`"h1"`、`"label"`、`"img"` 等）按预期工作；IDE 额外接受四个自定义控件标签，在包概述的[工具窗口 DOM 标签](/official/Reference/tbIDE/#工具窗口-dom-标签)中描述：`"chartjs"`、`"monaco"`、`"listview"`、`"virtuallistview"`。

```vb
' 标准 DOM 标签：
Set greeting = .ChildDomElements.Add("greeting", "h1")
Set entry    = .ChildDomElements.Add("entryBox", "input")

' 自定义控件标签（参见示例 11 / 12 / 13 / 14）：
Set chart      = .ChildDomElements.Add("cpuChart",  "chartjs")
Set editor     = .ChildDomElements.Add("myEditor",  "monaco")
Set listview   = .ChildDomElements.Add("itemsList", "listview")
Set virtList   = .ChildDomElements.Add("bigList",   "virtuallistview")
```

## 属性

### Item

按 ID 查找现有子元素。**DefaultMember**——因此 `elements("greeting")` 等同于 `elements.Item("greeting")`。

语法：*htmlElements*( *ID* ) **As** [**HtmlElement**](/official/Reference/tbIDE/HtmlElement)

*ID*
: 一个 **Variant** —— 通常是 [**Add**](#add) 时分配的 **String** ID。