---
title: Toolbars
parent: tbIDE Package
permalink: /tB/Packages/tbIDE/Toolbars
---

# Toolbars class

The collection of IDE toolbars. Reached through [**Host.Toolbars**](/official/Reference/tbIDE/Host#toolbars). Currently a single toolbar --- `Host.Toolbars(0)` --- but the collection interface allows future IDE versions to add more.

```vb
With Host.Toolbars(0)
    .AddSplitter
    Set Button1 = .AddButton("MyAddIn.Button1", "Refresh")
End With
```

## Properties

### Count

The number of toolbars. **Long**, read-only. Currently always **1**.

### Item

Indexed access to a toolbar. **DefaultMember** --- so `Toolbars(0)` is equivalent to `Toolbars.Item(0)`.

Syntax: *toolbars*( *Index* ) **As** [**Toolbar**](/official/Reference/tbIDE/Toolbar)

*Index*
: A zero-based **Variant** index. Currently `0` is the only valid value.
