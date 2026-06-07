---
title: HtmlElementProperty
parent: tbIDE Package
permalink: /tB/Packages/tbIDE/HtmlElementProperty
---

# HtmlElementProperty class

One settable property on an [**HtmlElement**](/en/official/Reference/tbIDE/HtmlElement) --- returned by [**HtmlElementProperties.Item**](/en/official/Reference/tbIDE/HtmlElementProperties#item). Carries the property's [**Value**](#value) plus a [**Properties**](#properties) accessor that lets the addin drill into nested DOM property structures (`.style.color`, `.chart.data.datasets(0).borderWidth`, …).

Almost always written in shorthand --- neither **HtmlElementProperty** nor its parent [**HtmlElementProperties**](/en/official/Reference/tbIDE/HtmlElementProperties) is typically named in addin code; the compiler resolves chains like `.style.color = "red"` through their default-members:

```vb
element.style.color = "red"
'   ↑ HtmlElement.Properties      (HtmlElement's DefaultMember)
'     .Item("style")               (HtmlElementProperties' DefaultMember)
'           .Properties            (HtmlElementProperty.Properties — nested bag)
'           .Item("color")         (the same DefaultMember chain again)
'                 .Value = "red"   (HtmlElementProperty.Value, the leaf)
```


## Properties

### Properties

A nested [**HtmlElementProperties**](/en/official/Reference/tbIDE/HtmlElementProperties) for properties that themselves have sub-properties (the canonical example is `style`, whose sub-properties are the individual CSS-style names). Read-only at the accessor level; the inner bag is mutable.

Syntax: *property*.**Properties** **As** [**HtmlElementProperties**](/en/official/Reference/tbIDE/HtmlElementProperties)

### Value

The property's value. Read returns the current value as a **Variant**; assigning writes the new value back. **DefaultMember** --- so `propertyObj = "red"` is equivalent to `propertyObj.Value = "red"`.

Syntax: *property* [ = *value* ]

The interface is **`[COMExtensible(True)]`** --- see [Dynamic DOM property resolution](/en/official/Reference/tbIDE/#dynamic-dom-property-resolution) on the package overview. Property names that route through [**Properties**](#properties) are resolved against the live DOM at run time, not declared statically.
