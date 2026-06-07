---
title: tbIDE Package
parent: Packages
nav_order: 11
permalink: /tB/Packages/tbIDE/
---

# tbIDE Package

The **tbIDE** package is the **addin SDK** for the twinBASIC IDE. An addin is a Standard DLL that the IDE loads at start-up; the DLL exports one factory function, returns one object implementing the [**AddIn**](/en/official/Reference/tbIDE/AddIn) contract, and from there everything happens through the [**Host**](/en/official/Reference/tbIDE/Host) object the IDE passes in. The package itself is **type-only** --- every public symbol is an interface or a CoClass; the actual implementations live in the twinBASIC IDE binary, and the addin DLL binds against the type declarations and lets the IDE marshal calls into its implementations at run time.

The package is a built-in *compiler* package shipped with twinBASIC. It is added to addin projects automatically; there is no need to add it manually through Project → References.


## Building and loading an addin

An addin project has three distinguishing settings:

- **Build type:** Standard DLL.
- **Build path:** `${IdePath}\addins\${Architecture}\${ProjectName}.${FileExtension}`. The output drops directly into the IDE's `addins\Win32\` or `addins\Win64\` folder, where the IDE scans for addins on start-up.
- **Compiler-package reference** to **tbIDE** (added to the project's references with `isCompilerPackage: true`, `publisher: TWINBASIC-COMPILER`, `symbolId: tbIDE`). This is the binding between the DLL's compile-time types and the IDE's run-time implementations.

The DLL must export one function --- the entry point the IDE calls when it discovers and loads the addin:

```vb
Module MainModule
    [DllExport]
    Public Function tbCreateCompilerAddin(ByVal Host As Host) As AddIn
        Return New MyAddIn(Host)
    End Function
End Module
```

The returned object must implement [**AddIn**](/en/official/Reference/tbIDE/AddIn). The IDE releases the object when the addin is disabled or the IDE shuts down, which lets the addin close resources through `Class_Terminate`.

A minimal addin class:

```vb
Private Class MyAddIn
    Implements AddIn

    Private WithEvents Host As Host

    Public Sub New(ByVal Host As Host)
        Set Me.Host = Host
    End Sub

    Private Property Get AddIn_Name() As String
        Return "My AddIn"
    End Property

    Private Sub Host_OnProjectLoaded()
        Host.DebugConsole.PrintText "Hello from My AddIn!"
    End Sub
End Class
```

The `WithEvents Host As Host` pattern is how the addin subscribes to IDE lifecycle events ([**OnProjectLoaded**](/en/official/Reference/tbIDE/Host#onprojectloaded), [**OnChangedActiveEditor**](/en/official/Reference/tbIDE/Host#onchangedactiveeditor), [**OnChangedTheme**](/en/official/Reference/tbIDE/Host#onchangedtheme)). Almost every meaningful addin sets up its toolbar buttons and tool windows inside the [**OnProjectLoaded**](/en/official/Reference/tbIDE/Host#onprojectloaded) handler --- that is the first moment the IDE is fully ready to accept extensibility commands.

## The class catalogue

The package's twenty-four `.twin` files declare one interface-and-CoClass pair each (plus one concrete `Class`), grouped here by role for orientation. Every CoClass except [**AddinTimer**](/en/official/Reference/tbIDE/AddinTimer) is **supplied to the addin by the IDE** --- never instantiated with `New`.

### Entry point and root API

- [**AddIn**](/en/official/Reference/tbIDE/AddIn) -- the contract every addin's main class implements. One read-only [**Name**](/en/official/Reference/tbIDE/AddIn#name) property.
- [**Host**](/en/official/Reference/tbIDE/Host) -- the root API object passed to `tbCreateCompilerAddin`. Exposes the [**CurrentProject**](/en/official/Reference/tbIDE/Host#currentproject), the [**ActiveEditors**](/en/official/Reference/tbIDE/Host#activeeditors), the [**Toolbars**](/en/official/Reference/tbIDE/Host#toolbars), the [**ToolWindows**](/en/official/Reference/tbIDE/Host#toolwindows), the [**DebugConsole**](/en/official/Reference/tbIDE/Host#debugconsole), the [**FileSystem**](/en/official/Reference/tbIDE/Host#filesystem), the [**KeyboardShortcuts**](/en/official/Reference/tbIDE/Host#keyboardshortcuts), the [**Themes**](/en/official/Reference/tbIDE/Host#themes), and a small set of dialog helpers ([**ShowMessageBox**](/en/official/Reference/tbIDE/Host#showmessagebox), [**ShowNotification**](/en/official/Reference/tbIDE/Host#shownotification)).
- [**AddinTimer**](/en/official/Reference/tbIDE/AddinTimer) -- the package's only user-instantiable class. `New AddinTimer`; set [**Interval**](/en/official/Reference/tbIDE/AddinTimer#interval) and [**Enabled**](/en/official/Reference/tbIDE/AddinTimer#enabled); receives a [**Timer**](/en/official/Reference/tbIDE/AddinTimer#timer) event.

### Project, editors, and the virtual file system

- [**Project**](/en/official/Reference/tbIDE/Project) -- the currently-loaded project. Lifecycle ([**Save**](/en/official/Reference/tbIDE/Project#save), [**Close**](/en/official/Reference/tbIDE/Project#close), [**Build**](/en/official/Reference/tbIDE/Project#build), [**Clean**](/en/official/Reference/tbIDE/Project#clean)), introspection ([**Name**](/en/official/Reference/tbIDE/Project#name), [**Path**](/en/official/Reference/tbIDE/Project#path), [**ProjectID**](/en/official/Reference/tbIDE/Project#projectid), version + architecture + build-output info), the [**Evaluate**](/en/official/Reference/tbIDE/Project#evaluate) hook into the debug-console expression engine, the [**RootFolder**](/en/official/Reference/tbIDE/Project#rootfolder) entry into the virtual file system, and the [**LoadMetaData**](/en/official/Reference/tbIDE/Project#loadmetadata) / [**SaveMetaData**](/en/official/Reference/tbIDE/Project#savemetadata) pair for persistent per-addin key/value storage inside the `.twinproj` file.
- [**Editor**](/en/official/Reference/tbIDE/Editor) -- the base editor interface (Path, Type, SetFocus, Close, Save, IsDirty). Castable to [**CodeEditor**](/en/official/Reference/tbIDE/CodeEditor).
- [**CodeEditor**](/en/official/Reference/tbIDE/CodeEditor) -- a code-pane editor: selection, full text, Monaco passthrough ([**ExecuteMonacoCommand**](/en/official/Reference/tbIDE/CodeEditor#executemonacocommand)), inline overlay HTML ([**AddMonacoWidget**](/en/official/Reference/tbIDE/CodeEditor#addmonacowidget)).
- [**Editors**](/en/official/Reference/tbIDE/Editors) -- the collection of active editors. `Editors(0)` is the current editor; [**Open**](/en/official/Reference/tbIDE/Editors#open) jumps to a file (and optional line/column).
- [**FileSystem**](/en/official/Reference/tbIDE/FileSystem) -- the virtual file system. [**RootFolder**](/en/official/Reference/tbIDE/FileSystem#rootfolder), [**ResolvePath**](/en/official/Reference/tbIDE/FileSystem#resolvepath).
- [**FileSystemItem**](/en/official/Reference/tbIDE/FileSystemItem) -- the base for [**File**](/en/official/Reference/tbIDE/File) and [**Folder**](/en/official/Reference/tbIDE/Folder). `Name`, `Path`, `Type`, `Parent`.
- [**Folder**](/en/official/Reference/tbIDE/Folder) -- children enumeration (prefer **For Each** --- see the warning on [**Count**](/en/official/Reference/tbIDE/Folder#count) / [**Item**](/en/official/Reference/tbIDE/Folder#item) --- the IDE is multi-threaded and index-based iteration races), [**IsPackagesFolder**](/en/official/Reference/tbIDE/Folder#ispackagesfolder).
- [**File**](/en/official/Reference/tbIDE/File) -- virtual-FS file accessors: [**Data**](/en/official/Reference/tbIDE/File#data) (raw bytes), [**Text**](/en/official/Reference/tbIDE/File#text) (decoded text), [**ReadText**](/en/official/Reference/tbIDE/File#readtext) (text with options like comment-stripping), [**IsDirty**](/en/official/Reference/tbIDE/File#isdirty).

### IDE UI

- [**Toolbar**](/en/official/Reference/tbIDE/Toolbar) -- the IDE toolbar. [**AddSplitter**](/en/official/Reference/tbIDE/Toolbar#addsplitter), [**AddButton**](/en/official/Reference/tbIDE/Toolbar#addbutton).
- [**Toolbars**](/en/official/Reference/tbIDE/Toolbars) -- the toolbar collection. Currently a single toolbar, addressable as `Toolbars(0)`.
- [**Button**](/en/official/Reference/tbIDE/Button) -- a toolbar button created by [**AddButton**](/en/official/Reference/tbIDE/Toolbar#addbutton). Exposes [**OnClick**](/en/official/Reference/tbIDE/Button#onclick).
- [**ToolWindow**](/en/official/Reference/tbIDE/ToolWindow) -- a dockable / floating HTML-rendered tool window. [**Title**](/en/official/Reference/tbIDE/ToolWindow#title), [**Visible**](/en/official/Reference/tbIDE/ToolWindow#visible), [**Resizable**](/en/official/Reference/tbIDE/ToolWindow#resizable), [**RootDomElement**](/en/official/Reference/tbIDE/ToolWindow#rootdomelement), [**ApplyCss**](/en/official/Reference/tbIDE/ToolWindow#applycss), [**OnClose**](/en/official/Reference/tbIDE/ToolWindow#onclose).
- [**ToolWindows**](/en/official/Reference/tbIDE/ToolWindows) -- the tool-window factory: [**Add**](/en/official/Reference/tbIDE/ToolWindows#add) creates a new one.

### Tool-window DOM and events

The four `Html*` classes are the addin's view into the DOM inside a tool window. All four are declared with `[COMExtensible(True)]` --- see [Dynamic DOM property resolution](#dynamic-dom-property-resolution).

- [**HtmlElement**](/en/official/Reference/tbIDE/HtmlElement) -- one DOM element. [**Properties**](/en/official/Reference/tbIDE/HtmlElement#properties), [**ChildDomElements**](/en/official/Reference/tbIDE/HtmlElement#childdomelements), [**Remove**](/en/official/Reference/tbIDE/HtmlElement#remove), [**AddEventListener**](/en/official/Reference/tbIDE/HtmlElement#addeventlistener).
- [**HtmlElements**](/en/official/Reference/tbIDE/HtmlElements) -- the child-element collection. [**Item**](/en/official/Reference/tbIDE/HtmlElements#item) and [**Add**](/en/official/Reference/tbIDE/HtmlElements#add) --- the latter accepts standard HTML tags **and** the IDE's custom-widget tags `"chartjs"`, `"monaco"`, `"listview"`, `"virtuallistview"`.
- [**HtmlElementProperty**](/en/official/Reference/tbIDE/HtmlElementProperty) -- one settable property in the bag.
- [**HtmlElementProperties**](/en/official/Reference/tbIDE/HtmlElementProperties) -- the dynamic property bag on a DOM element.
- [**HtmlEventProperty**](/en/official/Reference/tbIDE/HtmlEventProperty) -- one read-only value in an event payload.
- [**HtmlEventProperties**](/en/official/Reference/tbIDE/HtmlEventProperties) -- the dynamic event-payload bag passed to every [**AddEventListener**](/en/official/Reference/tbIDE/HtmlElement#addeventlistener) callback.

### Singletons

- [**DebugConsole**](/en/official/Reference/tbIDE/DebugConsole) -- the DEBUG CONSOLE pane. [**PrintText**](/en/official/Reference/tbIDE/DebugConsole#printtext), [**Clear**](/en/official/Reference/tbIDE/DebugConsole#clear), [**SetFocus**](/en/official/Reference/tbIDE/DebugConsole#setfocus).
- [**KeyboardShortcuts**](/en/official/Reference/tbIDE/KeyboardShortcuts) -- IDE-wide keyboard shortcuts. [**Add**](/en/official/Reference/tbIDE/KeyboardShortcuts#add).
- [**Themes**](/en/official/Reference/tbIDE/Themes) -- the IDE's active theme. [**ActiveThemeName**](/en/official/Reference/tbIDE/Themes#activethemename), [**ActiveThemeNameGroup**](/en/official/Reference/tbIDE/Themes#activethemenamegroup).

## Dynamic DOM property resolution

The four `Html*` classes that have the `[COMExtensible(True)]` attribute --- [**HtmlElementProperties**](/en/official/Reference/tbIDE/HtmlElementProperties), [**HtmlElementProperty**](/en/official/Reference/tbIDE/HtmlElementProperty), [**HtmlEventProperties**](/en/official/Reference/tbIDE/HtmlEventProperties), [**HtmlEventProperty**](/en/official/Reference/tbIDE/HtmlEventProperty) --- accept **arbitrary property names** that are resolved against the underlying DOM element (or event object) at run time. None of `style`, `innerText`, `chart`, `editor`, `listview`, `value`, `target`, `key`, `index`, …, are declared statically on the interfaces --- they are all resolved dynamically through the COM-extensible `Item(name)` default member.

So:

```vb
With element.ChildDomElements.Add("mySeparator", "h1").Properties
    .style.textAlign = "center"
    .style.color     = "white"
    .innerText       = "Section heading"
End With
```

reads at run time as:

```vb
.Item("style").Item("textAlign").Value = "center"
.Item("style").Item("color").Value     = "white"
.Item("innerText").Value               = "Section heading"
```

The compiler does not validate the property names; they are forwarded as strings to the IDE's tool-window renderer. The accepted set is **every DOM property of the underlying tag** --- standard HTML attributes, every CSS-style property under `.style.…`, plus any custom-widget-specific properties like `.chart.data.datasets(0).borderWidth` on a `"chartjs"` element or `.editor.setOption(...)` on a `"monaco"` element. The reference does not enumerate them --- defer to MDN for standard DOM property names, to Chart.js for `chartjs` widgets, to Monaco's documentation for `monaco` widgets, and to the matching samples below for the IDE-specific `listview` / `virtuallistview` properties.

## Tool-window DOM tags

[**HtmlElements.Add**](/en/official/Reference/tbIDE/HtmlElements#add) takes a *TagName* string. Standard HTML tags (`"div"`, `"span"`, `"input"`, `"h1"`, `"label"`, `"img"`, …) work as expected; in addition, the IDE provides four custom-widget tags:

- **`"chartjs"`** --- wraps **Chart.js**. The element exposes a `.chart` property whose sub-properties mirror Chart.js's `data` / `options` / `config` namespaces. See sample 11.
- **`"monaco"`** --- embeds an instance of the **Monaco editor** (the same editor the IDE itself uses for code panes). The element exposes an `.editor` property with `setOption`, `setValue`, `getValue`, and `AddEventListener` (note: event listeners attach to `.editor`, not to the DOM element). See sample 12.
- **`"listview"`** --- the IDE's built-in listview widget. The element exposes a `.listview` property with `addItem`, `removeItem`, `getItem`, `setShowScrollbarV` / `setShowScrollbarH`, and the events `onClickItem` / `onDblClickItem`. See sample 13.
- **`"virtuallistview"`** --- a virtual variant of the listview suitable for huge data sets (millions of rows). The element exposes the same `.listview` property plus `setItemCount` and the asynchronous `onAsyncGetItemHTML` event (the listener responds via `eventInfo.setAsyncResult("<html>")`); call `.listview.notifyChangedItem(idx)` to invalidate the internal cache for one row when its underlying data changes. See sample 14.

The full per-widget properties and methods are documented by each widget's home project; this package wraps them through the same `[COMExtensible(True)]` mechanism described above.

## Where the samples live

Six worked addins ship in the twinBASIC samples folder. They are the canonical reference for "how to use the package end-to-end" and are referenced throughout the per-class pages.

| Sample | Project | What it teaches |
|--------|---------|-----------------|
| 10 | `WaynesWorldAddInTest1` | The kitchen-sink tour --- toolbar setup, a single big tool window populated with 22 styled `div`-buttons that each exercise a different `Host.*` capability. Start here. |
| 11 | `WaynesWorldCPUMonitorTest1` | [**AddinTimer**](/en/official/Reference/tbIDE/AddinTimer) + a `"chartjs"` custom-widget tool window powering a live line chart. |
| 12 | `WaynesWorldMonacoEditorTest1` | A `"monaco"` custom-widget tool window: an in-window Monaco editor with `setValue` / `getValue` and a content-change listener. |
| 13 | `WaynesListViewAddIn` | A `"listview"` custom-widget tool window with `ApplyCss`, double-click-to-remove behaviour, and inline-HTML `raiseEvent()` for custom event names. |
| 14 | `WaynesVirtualListViewAddIn` | A `"virtuallistview"` with 5,000,000 rows backed by `onAsyncGetItemHTML` / `setAsyncResult` / `notifyChangedItem`. |
| 15 | `tbGlobalSearchAddIn1` | A full-blown Global Search addin: virtual-FS traversal (**For Each** over [**Folder**](/en/official/Reference/tbIDE/Folder)), text reading with comment-stripping ([**File.ReadText**](/en/official/Reference/tbIDE/File#readtext)), editor navigation ([**Editors.Open**](/en/official/Reference/tbIDE/Editors#open)), persistent options via `GetSetting` / `SaveSetting`. |
