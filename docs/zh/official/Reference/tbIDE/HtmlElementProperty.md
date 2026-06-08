---
title: HtmlElementProperty
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/HtmlElementProperty
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fb5ca1cf-e18d-4d52-8462-078215c1bd11'
  PropagateID: 'fb5ca1cf-e18d-4d52-8462-078215c1bd11'
  ReservedCode1: 'f38ad8b1-910e-4738-9f68-a71a7fd9784b'
  ReservedCode2: 'f38ad8b1-910e-4738-9f68-a71a7fd9784b'
---

# HtmlElementProperty 类

[**HtmlElement**](/official/Reference/tbIDE/HtmlElement) 上的一个可设置属性——由 [**HtmlElementProperties.Item**](/official/Reference/tbIDE/HtmlElementProperties#item) 返回。包含属性的 [**Value**](#value) 加上一个 [**Properties**](#properties) 访问器，使插件能够下钻到嵌套的 DOM 属性结构（`.style.color`、`.chart.data.datasets(0).borderWidth` 等）。

几乎总是以简写形式书写——**HtmlElementProperty** 及其父类 [**HtmlElementProperties**](/official/Reference/tbIDE/HtmlElementProperties) 通常不会在插件代码中被显式命名；编译器通过它们的默认成员解析 `.style.color = "red"` 等链：

```vb
element.style.color = "red"
'   ↑ HtmlElement.Properties      (HtmlElement 的 DefaultMember)
'     .Item("style")               (HtmlElementProperties 的 DefaultMember)
'           .Properties            (HtmlElementProperty.Properties — 嵌套包)
'           .Item("color")         (同样的 DefaultMember 链)
'                 .Value = "red"   (HtmlElementProperty.Value，叶子节点)
```


## 属性

### Properties

一个嵌套的 [**HtmlElementProperties**](/official/Reference/tbIDE/HtmlElementProperties)，用于本身具有子属性的属性（典型例子是 `style`，其子属性是各个 CSS 样式名称）。在访问器层面只读；内部包可变。

语法：*property*.**Properties** **As** [**HtmlElementProperties**](/official/Reference/tbIDE/HtmlElementProperties)

### Value

属性的值。读取时将当前值作为 **Variant** 返回；赋值时写入新值。**DefaultMember**——因此 `propertyObj = "red"` 等同于 `propertyObj.Value = "red"`。

语法：*property* [ = *value* ]

此接口是 **`[COMExtensible(True)]`**——参见包概述中的[动态 DOM 属性解析](/official/Reference/tbIDE/#动态-dom-属性解析)。通过 [**Properties**](#properties) 路由的属性名在运行时根据活动 DOM 解析，而非静态声明。