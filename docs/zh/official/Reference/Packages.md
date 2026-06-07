---
title: Packages
nav_order: 8
permalink: /tB/Packages/
---

# Packages

A *package* groups related code --- modules, classes, controls, and enumerations --- under a single namespace, and is referenced from a project as a single dependency. See [Features → Packages](/official/Features/Packages/) for how packages are built and distributed in general; the pages below document the *built-in* packages that ship with twinBASIC itself.

## Default Packages

These packages are included in every project by default.

- [VB Package](/official/Reference/VB/) -- standard controls (**CheckBox**, **CommandButton**, **TextBox**, …), forms, and the application-level singletons (**App**, **Screen**, **Clipboard**, **Printer**, …)
- [VBA Package](/official/Reference/VBA/) -- the standard runtime library -- **MsgBox**, **CStr**, **Mid**, **Format**, … grouped into modules, plus the **Collection** and **Err** intrinsics and twinBASIC's runtime expression engine
- [VBRUN Package](/official/Reference/VBRUN/) -- runtime-only types -- ambient properties, asynchronous-read state, structured error context, the **PropertyBag**, the clipboard / drag-and-drop container, and the enumerations used by classic VB6 forms and controls

## Built-In Packages

These packages are built into twinBASIC and are always available, even offline. To use them, add them to Project → References (Ctrl-T) → Available Packages.

- [Assert Package](/official/Reference/Assert/) -- assertion functions for unit tests -- three modules (**Exact**, **Strict**, **Permissive**) sharing the same fifteen-member API with different comparison strictness
- [CustomControls Package](/official/Reference/CustomControls/) -- owner-drawn `Waynes…` custom controls (button, form, frame, grid, label, slider, textbox, timer), the shared `Styles/` helpers that paint them, and the DESIGNER framework (interfaces, callback objects, **Canvas**, **SerializeInfo**) for authoring new custom controls
- [CEF Package](/official/Reference/CEF/) -- the **CefBrowser** control wrapping the Chromium Embedded Framework: cross-platform-ready browser embedding with a choice of three Chromium runtimes (v49 / v109 / v145); currently in BETA
- [WebView2 Package](/official/Reference/WebView2/) -- the **WebView2** control wrapping the Microsoft Edge runtime, plus its surrounding wrapper objects (request / response / headers / environment options) and the `wv2…` enumerations
- [WinEventLogLib Package](/official/Reference/WinEventLogLib/) -- writes Windows Event Log entries from twinBASIC; the generic **EventLog**(*Of EventIds, Categories*) class handles registration, registry setup, and the per-event `ReportEventW` call, with message-table resources for *EventIds* and *Categories* synthesised into the EXE at compile time
- [WinNamedPipesLib Package](/official/Reference/WinNamedPipesLib/) -- Windows named pipes as twinBASIC objects with an asynchronous IOCP-driven I/O model; **NamedPipeServer** + **NamedPipeServerConnection** on the host side, **NamedPipeClientManager** + **NamedPipeClientConnection** on the client side, with message-boundary semantics and a cookie-based correlation pattern across `AsyncRead` / `AsyncWrite` and their matching events
- [WinServicesLib Package](/official/Reference/WinServicesLib/) -- runs a twinBASIC EXE as one or more Windows services; the **Services** singleton coordinates configuration, install / uninstall, and the SCM dispatcher loop, while user-implemented [**ITbService**](/official/Reference/WinServicesLib/ITbService) classes are instantiated through [**ServiceCreator**](/official/Reference/WinServicesLib/ServiceCreator)`(Of T)`
- [tbIDE Package](/official/Reference/tbIDE/) -- the **addin SDK** for the twinBASIC IDE: every addin is a Standard DLL that exports `tbCreateCompilerAddin`, returns an object implementing the [**AddIn**](/official/Reference/tbIDE/AddIn) contract, and from there reaches the IDE's toolbar, tool-window DOM, virtual file system, debug console, current project (and its `Evaluate` debug-console hook), keyboard shortcuts, and themes -- all through the [**Host**](/official/Reference/tbIDE/Host) object the IDE passes in
- [WinNativeCommonCtls Package](/official/Reference/WinNativeCommonCtls/) -- VB6-compatible replacement for **Microsoft Common Controls 6.0** (`MSCOMCTL.OCX`) built on top of the Win32 ComCtl32 controls: eight controls ([**DTPicker**](/official/Reference/WinNativeCommonCtls/DTPicker), [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/), [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/), [**MonthView**](/official/Reference/WinNativeCommonCtls/MonthView), [**ProgressBar**](/official/Reference/WinNativeCommonCtls/ProgressBar), [**Slider**](/official/Reference/WinNativeCommonCtls/Slider), [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/), [**UpDown**](/official/Reference/WinNativeCommonCtls/UpDown)) with the original member names preserved, plus the collection sub-objects ([**ListItems**](/official/Reference/WinNativeCommonCtls/ListView/ListItems), [**ColumnHeaders**](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders), [**Nodes**](/official/Reference/WinNativeCommonCtls/TreeView/Nodes), [**ListImages**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages)) and the user-facing enumerations
