---
title: HtmlElementProperties
parent: tbIDE Package
permalink: /tB/Packages/tbIDE/HtmlElementProperties
---

# HtmlElementProperties class

The dynamic property bag on an [**HtmlElement**](/en/official/Reference/tbIDE/HtmlElement). Reached through [**HtmlElement.Properties**](/en/official/Reference/tbIDE/HtmlElement#properties). Every CSS property, every DOM attribute, every custom-widget extension is accessed through this bag --- and almost always written in shorthand because [**Properties**](/en/official/Reference/tbIDE/HtmlElement#properties) is the **DefaultMember** of [**HtmlElement**](/en/official/Reference/tbIDE/HtmlElement):

```vb
With element                          ' element.Properties is the default member
    .style.display    = "flex"        ' Properties.Item("style").Item("display").Value = "flex"
    .style.flexDirection = "column"
    .style.gap        = "10px"
    .innerText        = "Hello"
End With
```

The shorthand reads at run time as a chain of `Item("name")` lookups against the underlying DOM element --- see [Dynamic DOM property resolution](/en/official/Reference/tbIDE/#dynamic-dom-property-resolution) on the package overview.

::: important
This interface is **`[COMExtensible(True)]`**. Property names are resolved against the live DOM element at run time, not declared statically on the interface. The compiler does not validate names --- a typo (`.innerTxt = "..."` instead of `.innerText = "..."`) fails silently or throws at run time. The accepted set is **every DOM property of the underlying tag**, plus any custom-widget extensions; the reference does not enumerate it.
:::

## Default member

The interface's **DefaultMember** is [**Item**](#item) --- so `properties("style")` is equivalent to `properties.Item("style")`. Chains of `.style.color = "red"` thus desugar to `properties.Item("style").Item("color").Value = "red"`.

## Properties

### Item

Looks up a property by name. Returns an [**HtmlElementProperty**](/en/official/Reference/tbIDE/HtmlElementProperty), which includes the property's value plus a nested [**Properties**](/en/official/Reference/tbIDE/HtmlElementProperty#properties) for further drill-down.

Syntax: *properties*( *DomPropertyName* ) **As** [**HtmlElementProperty**](/en/official/Reference/tbIDE/HtmlElementProperty)

*DomPropertyName*
: *required* The property name. **String**. Standard DOM property names, CSS-style property names (when looked up under `style`), or custom-widget property names --- all forwarded to the IDE's tool-window renderer.
