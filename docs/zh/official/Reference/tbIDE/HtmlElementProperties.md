---
title: HtmlElementProperties
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/HtmlElementProperties
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'de36cc4b-59ac-4069-b1e3-c8edb78576f0'
  PropagateID: 'de36cc4b-59ac-4069-b1e3-c8edb78576f0'
  ReservedCode1: 'dbbfa970-f022-4aff-b7cf-4108b8fddb9a'
  ReservedCode2: 'dbbfa970-f022-4aff-b7cf-4108b8fddb9a'
---

# HtmlElementProperties 类

[**HtmlElement**](/official/Reference/tbIDE/HtmlElement) 上的动态属性包。通过 [**HtmlElement.Properties**](/official/Reference/tbIDE/HtmlElement#properties) 访问。每个 CSS 属性、每个 DOM 属性、每个自定义控件扩展都通过此包访问——而且几乎总是以简写形式书写，因为 [**Properties**](/official/Reference/tbIDE/HtmlElement#properties) 是 [**HtmlElement**](/official/Reference/tbIDE/HtmlElement) 的 **DefaultMember**：

```vb
With element                          ' element.Properties 是默认成员
    .style.display    = "flex"        ' Properties.Item("style").Item("display").Value = "flex"
    .style.flexDirection = "column"
    .style.gap        = "10px"
    .innerText        = "Hello"
End With
```

简写在运行时解析为针对底层 DOM 元素的 `Item("name")` 查找链——参见包概述中的[动态 DOM 属性解析](/official/Reference/tbIDE/#动态-dom-属性解析)。

::: important
此接口是 **`[COMExtensible(True)]`**。属性名在运行时根据活动 DOM 元素解析，而非在接口上静态声明。编译器不验证名称——拼写错误（例如 `.innerTxt = "..."` 而非 `.innerText = "..."`）会静默失败或在运行时抛出异常。可接受的属性集是**底层标签的每个 DOM 属性**，加上任何自定义控件扩展；参考文档不逐一列举。
:::

## 默认成员

接口的 **DefaultMember** 是 [**Item**](#item)——因此 `properties("style")` 等同于 `properties.Item("style")`。`.style.color = "red"` 链因此脱糖为 `properties.Item("style").Item("color").Value = "red"`。

## 属性

### Item

按名称查找属性。返回一个 [**HtmlElementProperty**](/official/Reference/tbIDE/HtmlElementProperty)，其中包含属性的值加上用于进一步下钻的嵌套 [**Properties**](/official/Reference/tbIDE/HtmlElementProperty#properties)。

语法：*properties*( *DomPropertyName* ) **As** [**HtmlElementProperty**](/official/Reference/tbIDE/HtmlElementProperty)

*DomPropertyName*
: *必需* 属性名称。**String**。标准 DOM 属性名、CSS 样式属性名（在 `style` 下查找时）或自定义控件属性名——全部转发到 IDE 的工具窗口渲染器。