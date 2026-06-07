---
title: HtmlElements
parent: tbIDE Package
permalink: /tB/Packages/tbIDE/HtmlElements
---

# HtmlElements class

A child-element collection on an [**HtmlElement**](/official/Reference/tbIDE/HtmlElement). Reached through [**HtmlElement.ChildDomElements**](/official/Reference/tbIDE/HtmlElement#childdomelements). Use [**Add**](#add) to create new children and [**Item**](#item) to look one up by ID after the fact.

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


## Methods

### Add

Creates a new child element under the parent [**HtmlElement**](/official/Reference/tbIDE/HtmlElement) and returns the new [**HtmlElement**](/official/Reference/tbIDE/HtmlElement).

Syntax: *htmlElements*.**Add**( *ElementID*, *TagName* ) **As** [**HtmlElement**](/official/Reference/tbIDE/HtmlElement)

*ElementID*
: *required* A DOM `id` for the new element. **String**. Pick distinct IDs across the tool window --- they double as the key for [**Item**](#item) lookups.

*TagName*
: *required* The HTML tag name. **String**. Standard tags (`"div"`, `"span"`, `"input"`, `"h1"`, `"label"`, `"img"`, …) work as expected; the IDE additionally accepts four custom-widget tags described in [Tool-window DOM tags](/official/Reference/tbIDE/#tool-window-dom-tags) on the package overview: `"chartjs"`, `"monaco"`, `"listview"`, `"virtuallistview"`.

```vb
' Standard DOM tags:
Set greeting = .ChildDomElements.Add("greeting", "h1")
Set entry    = .ChildDomElements.Add("entryBox", "input")

' Custom-widget tags (see sample 11 / 12 / 13 / 14):
Set chart      = .ChildDomElements.Add("cpuChart",  "chartjs")
Set editor     = .ChildDomElements.Add("myEditor",  "monaco")
Set listview   = .ChildDomElements.Add("itemsList", "listview")
Set virtList   = .ChildDomElements.Add("bigList",   "virtuallistview")
```

## Properties

### Item

Looks up an existing child element by its ID. **DefaultMember** --- so `elements("greeting")` is equivalent to `elements.Item("greeting")`.

Syntax: *htmlElements*( *ID* ) **As** [**HtmlElement**](/official/Reference/tbIDE/HtmlElement)

*ID*
: A **Variant** --- typically the **String** ID assigned at [**Add**](#add) time.
