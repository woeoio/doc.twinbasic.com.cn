---
title: ToolWindows
parent: tbIDE Package
permalink: /tB/Packages/tbIDE/ToolWindows
---

# ToolWindows class

The IDE's tool-window factory --- reached through [**Host.ToolWindows**](/official/Reference/tbIDE/Host#toolwindows). Call [**Add**](#add) to create a new HTML-rendered pane; populate its DOM through the returned [**ToolWindow**](/official/Reference/tbIDE/ToolWindow)'s [**RootDomElement**](/official/Reference/tbIDE/ToolWindow#rootdomelement); show the pane by setting [**Visible**](/official/Reference/tbIDE/ToolWindow#visible) = **True**.

```vb
Set myWindow = Host.ToolWindows.Add("MyAddIn.MyWindow", "MyAddIn.MyWindowPosition")
```

## Methods

### Add

Creates a new tool window and returns its [**ToolWindow**](/official/Reference/tbIDE/ToolWindow) object. The newly-created pane starts out **Visible = False**; populate it, then flip [**Visible**](/official/Reference/tbIDE/ToolWindow#visible) = **True** to show it.

Syntax: *toolWindows*.**Add**( *Name* [, *UniqueIdForPositionPersistance* ] ) **As** [**ToolWindow**](/official/Reference/tbIDE/ToolWindow)

*Name*
: *required* An internal name for the tool window. **String**. Pick an addin-prefixed value so multiple addins do not collide on names.

*UniqueIdForPositionPersistance*
: *optional* A stable identifier the IDE uses to remember the pane's size, position, and dock state across IDE restarts. **String**. Omit to make the pane non-persistent --- every open is sized from `suggestedWidth` / `suggestedHeight` (see [**ToolWindow**](/official/Reference/tbIDE/ToolWindow#suggested-initial-size)) and positioned by the IDE's default placement logic.

```vb
' Persisted (preferred for user-visible panes):
Set myWindow = Host.ToolWindows.Add("MyAddIn.SearchPane", "MyAddIn.SearchPane.position")

' Non-persistent (for transient one-shot dialogs):
Set myWindow = Host.ToolWindows.Add("MyAddIn.QuickPrompt")
```
