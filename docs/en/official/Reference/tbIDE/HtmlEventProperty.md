---
title: HtmlEventProperty
parent: tbIDE Package
permalink: /tB/Packages/tbIDE/HtmlEventProperty
---

# HtmlEventProperty class

One value inside an [**HtmlEventProperties**](/en/official/Reference/tbIDE/HtmlEventProperties) event bag --- returned by [**HtmlEventProperties.Item**](/en/official/Reference/tbIDE/HtmlEventProperties#item). Carries the field's [**Value**](#value) plus a [**Properties**](#properties) accessor for nested drill-down (e.g. `eventInfo.target.id`).

Almost always written in shorthand --- neither **HtmlEventProperty** nor its parent [**HtmlEventProperties**](/en/official/Reference/tbIDE/HtmlEventProperties) is typically named in addin code; the compiler resolves chains like `eventInfo.target.id` through their default-members. Unlike [**HtmlElementProperty**](/en/official/Reference/tbIDE/HtmlElementProperty), [**Value**](#value) is **read-only** --- event payloads are an inbound signal from the DOM, not an outbound property setter.

```vb
Private Sub MyButtonKeyUp(ByVal eventInfo As HtmlEventProperties)
    If eventInfo.key = "Enter" Then
        Dim entered As String = eventInfo.target.value
        ' …
    End If
End Sub
```


## Properties

### Properties

A nested [**HtmlEventProperties**](/en/official/Reference/tbIDE/HtmlEventProperties) for fields that themselves have sub-fields (the canonical example is `.target`, whose sub-fields are the target element's own properties --- `id`, `value`, `name`, `tagName`, …). Read-only at the accessor level.

Syntax: *property*.**Properties** **As** [**HtmlEventProperties**](/en/official/Reference/tbIDE/HtmlEventProperties)

### Value

The field's value, as a **Variant**. **DefaultMember** --- so `eventInfo.key` desugars to `eventInfo.Item("key").Value`. Read-only --- event payloads cannot be modified.

Syntax: *property* **As Variant**

The interface is **`[COMExtensible(True)]`** --- see [Dynamic DOM property resolution](/en/official/Reference/tbIDE#dynamic-dom-property-resolution) on the package overview. Field names that route through [**Properties**](#properties) are resolved against the live event object at run time, not declared statically.
