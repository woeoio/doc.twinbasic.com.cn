---
title: Editor
parent: tbIDE Package
permalink: /tB/Packages/tbIDE/Editor
---

# Editor class

The base interface every IDE editor presents. **Editor** itself exposes only the universal members --- [**Path**](#path), [**Type**](#type), [**SetFocus**](#setfocus), [**Close**](#close), [**Save**](#save), [**IsDirty**](#isdirty) --- and an instance returned from [**Editors.Item**](/official/Reference/tbIDE/Editors#item) or the [**Host.OnChangedActiveEditor**](/official/Reference/tbIDE/Host#onchangedactiveeditor) event is normally a *specific* editor kind (e.g. [**CodeEditor**](/official/Reference/tbIDE/CodeEditor) for code panes), reachable by casting.

## Castability

An **Editor** returned by the IDE is castable to the specific editor kind for the underlying pane. For a code pane the cast target is [**CodeEditor**](/official/Reference/tbIDE/CodeEditor); other editor kinds may be added in future IDE versions and will follow the same pattern.

Use `TypeOf` to test before casting:

```vb
If Host.ActiveEditors.Count > 0 Then
    If TypeOf Host.ActiveEditors(0) Is CodeEditor Then
        Dim codeEditor As CodeEditor = Host.ActiveEditors(0)
        Host.DebugConsole.PrintText "selected text: " & codeEditor.SelectedText
    End If
End If
```

Cast unconditionally only when the source --- e.g. an [**OnChangedActiveEditor**](/official/Reference/tbIDE/Host#onchangedactiveeditor) handler for a known editor kind --- guarantees the underlying type.


## Properties

### IsDirty

**True** if the editor has unsaved changes. **Boolean**, read-only.

### Path

The internal virtual-FS path of the file the editor is displaying --- e.g. `"twinbasic:/Sources/MainModule.twin"`. **String**, read-only. Resolves through [**FileSystem.ResolvePath**](/official/Reference/tbIDE/FileSystem#resolvepath).

### Type

A short string identifying the editor kind --- e.g. `"CodeEditor"` for a code pane. **String**, read-only. Useful for diagnostic log lines; for capability dispatch prefer `TypeOf` over comparing this string.

## Methods

### Close

Closes the editor. If the editor is dirty, the IDE may prompt the user before actually closing.

Syntax: *editor*.**Close**

### Save

Saves the editor's contents.

Syntax: *editor*.**Save**

### SetFocus

Brings the editor to the foreground and gives it keyboard focus.

Syntax: *editor*.**SetFocus**
