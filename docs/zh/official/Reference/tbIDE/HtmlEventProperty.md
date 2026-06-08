---
title: HtmlEventProperty
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/HtmlEventProperty
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9ca8ac7f-99be-4f4a-8f49-5ee8f77e8441'
  PropagateID: '9ca8ac7f-99be-4f4a-8f49-5ee8f77e8441'
  ReservedCode1: '720cbeb9-2e7f-419f-bdf3-b915b2687df3'
  ReservedCode2: '720cbeb9-2e7f-419f-bdf3-b915b2687df3'
---

# HtmlEventProperty 类

[**HtmlEventProperties**](/official/Reference/tbIDE/HtmlEventProperties) 事件包中的一个值——由 [**HtmlEventProperties.Item**](/official/Reference/tbIDE/HtmlEventProperties#item) 返回。包含字段的 [**Value**](#value) 加上一个 [**Properties**](#properties) 访问器用于嵌套下钻（例如 `eventInfo.target.id`）。

几乎总是以简写形式书写——**HtmlEventProperty** 及其父类 [**HtmlEventProperties**](/official/Reference/tbIDE/HtmlEventProperties) 通常不会在插件代码中被显式命名；编译器通过它们的默认成员解析 `eventInfo.target.id` 等链。与 [**HtmlElementProperty**](/official/Reference/tbIDE/HtmlElementProperty) 不同，[**Value**](#value) 是**只读的**——事件负载是从 DOM 发来的入站信号，而非出站属性设置器。

```vb
Private Sub MyButtonKeyUp(ByVal eventInfo As HtmlEventProperties)
    If eventInfo.key = "Enter" Then
        Dim entered As String = eventInfo.target.value
        ' …
    End If
End Sub
```


## 属性

### Properties

一个嵌套的 [**HtmlEventProperties**](/official/Reference/tbIDE/HtmlEventProperties)，用于本身具有子字段的字段（典型例子是 `.target`，其子字段是目标元素自身的属性——`id`、`value`、`name`、`tagName` 等）。在访问器层面只读。

语法：*property*.**Properties** **As** [**HtmlEventProperties**](/official/Reference/tbIDE/HtmlEventProperties)

### Value

字段的值，为 **Variant**。**DefaultMember**——因此 `eventInfo.key` 脱糖为 `eventInfo.Item("key").Value`。只读——事件负载不可修改。

语法：*property* **As Variant**

此接口是 **`[COMExtensible(True)]`**——参见包概述中的[动态 DOM 属性解析](/official/Reference/tbIDE/#动态-dom-属性解析)。通过 [**Properties**](#properties) 路由的字段名在运行时根据活动事件对象解析，而非静态声明。