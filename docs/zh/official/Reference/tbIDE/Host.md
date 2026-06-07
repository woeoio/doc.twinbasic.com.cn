---
title: Host
parent: tbIDE Package
permalink: /tB/Packages/tbIDE/Host
---

# Host class

The root API the IDE passes to every addin. The DLL receives a **Host** as the argument to its [`tbCreateCompilerAddin`](/official/Reference/tbIDE/#building-and-loading-an-addin) factory; the addin retains that reference for its lifetime and reaches every other capability through it --- the currently-loaded [**CurrentProject**](#currentproject), the [**ActiveEditors**](#activeeditors), the [**Toolbars**](#toolbars) for adding buttons, the [**ToolWindows**](#toolwindows) for adding HTML-rendered panels, the [**DebugConsole**](#debugconsole) for log output, the virtual [**FileSystem**](#filesystem), the [**KeyboardShortcuts**](#keyboardshortcuts) registry, the [**Themes**](#themes) state, plus the dialog helpers [**ShowMessageBox**](#showmessagebox) / [**ShowNotification**](#shownotification).

Typically held via `WithEvents` so the addin can subscribe to lifecycle events:

```vb
Private WithEvents Host As Host

Public Sub New(ByVal Host As Host)
    Set Me.Host = Host
End Sub

Private Sub Host_OnProjectLoaded()
    With Host.Toolbars(0)
        .AddSplitter
        Set MyButton = .AddButton("MyButton", "My Action")
    End With
End Sub
```

Almost every meaningful addin builds its toolbar buttons and tool windows inside the [**OnProjectLoaded**](#onprojectloaded) handler --- that is the first moment the IDE is fully ready to accept extensibility commands.


## Properties

### ActiveEditors

The collection of editors currently open in the IDE. `Host.ActiveEditors(0)` returns the active one --- at present the IDE exposes exactly one active editor at a time and `Host.ActiveEditors.Count` is **1** when an editor is open, **0** when none is. **As** [**Editors**](/official/Reference/tbIDE/Editors). Read-only.

### CompilerVersion

The full compiler-version string of the running IDE, e.g. `"0.15.371"`. **String**, read-only. Useful for diagnostic log lines and for compatibility gates.

### CurrentProject

The currently-loaded project. Provides project name and path, lifecycle methods (Save / Close / Build / Clean), the project's [**RootFolder**](/official/Reference/tbIDE/Project#rootfolder) into the virtual file system, expression evaluation against the running project context, and persistent meta-data storage inside the `.twinproj` file. **As** [**Project**](/official/Reference/tbIDE/Project). Read-only.

### DebugConsole

The IDE's DEBUG CONSOLE pane. Print, clear, or set focus. **As** [**DebugConsole**](/official/Reference/tbIDE/DebugConsole). Read-only.

### FileSystem

The IDE's virtual file system --- the abstraction that lets the addin traverse and read source files without touching the on-disk paths. **As** [**FileSystem**](/official/Reference/tbIDE/FileSystem). Read-only.

### IDEProcessID

The OS process ID of the running IDE process. **Long**, read-only. Useful for inter-process scenarios --- e.g. an external helper EXE that needs to know which IDE invoked it.

### IDEWindowHandle

The Win32 `HWND` of the IDE's main window. **LongPtr**, read-only. Pass to Win32 APIs that need a window owner, or use as the parent handle when displaying owned modal dialogs from the addin.

### KeyboardShortcuts

The keyboard-shortcut registry. Call [**KeyboardShortcuts.Add**](/official/Reference/tbIDE/KeyboardShortcuts#add) to bind a key combination to a callback. **As** [**KeyboardShortcuts**](/official/Reference/tbIDE/KeyboardShortcuts). Read-only.

### Themes

The IDE's theme state. Exposes the active theme name and group; pair with the [**OnChangedTheme**](#onchangedtheme) event to react to user theme changes. **As** [**Themes**](/official/Reference/tbIDE/Themes). Read-only.

### Toolbars

The collection of IDE toolbars. Currently a one-element collection --- `Host.Toolbars(0)` is the only available toolbar. **As** [**Toolbars**](/official/Reference/tbIDE/Toolbars). Read-only.

### ToolWindows

Factory for HTML-rendered tool windows. Call [**ToolWindows.Add**](/official/Reference/tbIDE/ToolWindows#add) to create one. **As** [**ToolWindows**](/official/Reference/tbIDE/ToolWindows). Read-only.

## Methods

### ShowMessageBox

Displays a modal IDE-styled dialog with a customisable button strip. Returns the zero-based index of the pressed button, or `-1` if the dialog was closed without picking one.

Syntax: *host*.**ShowMessageBox**( *Prompt*, *Buttons*, *Title* ) **As Long**

*Prompt*
: *required* The message to display. **String**.

*Buttons*
: *required* A **String** of button captions separated by `|`. E.g. `"OK"` for a single OK button, `"Yes|No|Cancel"` for three buttons.

*Title*
: *required* The dialog's title-bar text. **String**.

```vb
Select Case Host.ShowMessageBox("Save changes before closing?", _
                                 "Save|Discard|Cancel", "Confirm")
    Case 0: ' Save
    Case 1: ' Discard
    Case 2, -1: ' Cancel or closed
End Select
```

### ShowNotification

Displays a non-modal, discreet notification pop-up in the IDE --- a toast-style transient message that does not require the user to react.

Syntax: *host*.**ShowNotification** *Prompt*

*Prompt*
: *required* The notification text. **String**.

[**ShowMessageBox**](#showmessagebox) is for when the user has to answer something; **ShowNotification** is for "the user should know but doesn't have to react".

## Events

The **Host** CoClass exposes three events. The third (and any future addition) is tagged with the compile-time `[AllowUnpopulatedVtableEntry]` attribute, which lets a newer addin compile against the newer events interface and still load against an older IDE that does not yet fire the newer event --- older IDEs leave the slot empty and the addin never receives that particular event.

### OnProjectLoaded

Fires once the IDE has finished loading the project and is ready to accept extensibility commands. The canonical place to set up toolbar buttons, open tool windows that should be visible by default, register keyboard shortcuts, and log the start-up state to the [**DebugConsole**](/official/Reference/tbIDE/DebugConsole).

Syntax: *host*_**OnProjectLoaded**()

```vb
Private Sub Host_OnProjectLoaded()
    With Host.Toolbars(0)
        .AddSplitter
        Set MyButton = .AddButton("MyButton", "My Action")
    End With
End Sub
```

### OnChangedActiveEditor

Fires when the user switches the focused editor. The event is the right hook for refreshing any addin UI that depends on the current editor (e.g. a context-aware tool window). Available since IDE BETA 504+; older IDEs do not fire it.

Syntax: *host*_**OnChangedActiveEditor**(*EditorIdx* **As Long**, *Editor* **As** [**Editor**](/official/Reference/tbIDE/Editor))

*EditorIdx*
: The zero-based index of the newly active editor in the [**ActiveEditors**](#activeeditors) collection.

*Editor*
: The newly active editor object. Castable to [**CodeEditor**](/official/Reference/tbIDE/CodeEditor) for code panes --- see [Editor castability](/official/Reference/tbIDE/Editor#castability).

### OnChangedTheme

Fires when the user changes the IDE theme. Pair with [**Themes.ActiveThemeName**](/official/Reference/tbIDE/Themes#activethemename) / [**Themes.ActiveThemeNameGroup**](/official/Reference/tbIDE/Themes#activethemenamegroup) to refresh any colour-sensitive elements the addin draws inside its tool windows.

Syntax: *host*_**OnChangedTheme**(*ThemeName* **As String**)

*ThemeName*
: The new theme's name --- same value the user now sees in [**Themes.ActiveThemeName**](/official/Reference/tbIDE/Themes#activethemename) (e.g. `"Classic"`, `"Dark"`, `"Light"`).

## DebuggerEvaluateOptions

A flags enum declared inline on the **Host** interface; consumed by [**Project.Evaluate**](/official/Reference/tbIDE/Project#evaluate) (and any future debugger-evaluation API). Currently a single-value placeholder --- additional flags may appear in later IDE versions.

| Constant | Value | Description |
|----------|-------|-------------|
| **NONE** | 0 | No special evaluation options. |
