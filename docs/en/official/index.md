---
layout: home
title: Welcome
nav_order: 1
permalink: /
---

# Welcome to twinBASIC

twinBASIC is a new BASIC language and development environment aiming for 100% backward compatibility with VB6 and VBA, while adding modern language features --- generics, native [**Interface**](tB/Core/Interface) and [**CoClass**](tB/Core/CoClass) declarations, attributes, and a package system. The compiler and IDE are under active development and currently in beta; the [FAQ](FAQ) covers the project's status, authorship, and what is and isn't implemented today, and downloads live on the [Releases](https://github.com/twinbasic/twinbasic/releases) page of the main GitHub repository.

## New to twinBASIC?

Start with the [FAQ](FAQ) for orientation --- what twinBASIC is, where it stands today, and what runs on it --- then the [Features overview](Features/) for a tour of everything the language adds on top of VBx. The [Tutorials](#tutorials) section below has step-by-step guides; the [Arrays](Tutorials/Arrays) tutorial assumes no prior twinBASIC experience and is a reasonable first read.

## Coming from VBA or VB6?

Most existing VB6 / VBA code compiles unchanged. Key additions beyond VBx compatibility: new data types ([**LongLong**](Features/Language/Data-Types#longlong), [**LongPtr**](Features/Language/Data-Types#longptr), [**Decimal**](Features/Language/Data-Types#decimal)), native [**Interface**](tB/Core/Interface) and [**CoClass**](tB/Core/CoClass) declarations, [**Implements Via**](Features/Language/Inheritance#implements-via-for-basic-inheritance) and [**Inherits**](Features/Language/Inheritance#inherits-for-complete-oop) for inheritance, generics, method overloading, type inference, and attribute syntax. The [Features overview](Features/) is the complete catalogue.

## Looking up a keyword, function, or operator?

The reference section is split into language constructs (the things the compiler parses) and runtime members (functions, properties, types, classes shipped in the built-in packages):

- [**Categorical list**](Reference/Categories) --- statements, procedures, and functions grouped by purpose (compiler control, declarations, control flow, file I/O, ...)
- [**Statements**](Reference/Statements) --- alphabetical index of every language statement
- [**Procedures and Functions**](Reference/Procedures-and-Functions) --- alphabetical index of every callable runtime member
- [**Operators**](Reference/Operators) --- arithmetic, comparison, logical, bitwise, and twinBASIC's added operators
- [**Compiler Constants**](Reference/Compiler-Constants) --- the `#If` symbols recognised by the compiler
- [**Attributes**](tB/Core/Attributes) --- `[Documentation(...)]`, `[COMCreatable(...)]`, and the rest of the attribute syntax
- [**Controls**](Reference/Controls) --- the standard UI controls ([**CheckBox**](Reference/VB/CheckBox/), [**TextBox**](Reference/VB/TextBox/), [**CommandButton**](Reference/VB/CommandButton/), ...) grouped by purpose
- [**Glossary**](tB/Gloss) --- technical terms used across the docs

## Built-in packages

A *package* groups related code under one namespace and is referenced from a project as a single dependency. The [Packages page](tB/Packages/) lists every built-in package with a one-line description; the headings below group them by what they are for.

**Default packages** --- referenced in every project automatically:

- [**VBA**](Reference/VBA) --- the standard runtime library (`MsgBox`, `CStr`, `Format`, `Mid`, ...) plus the [**Collection**](Reference/VBA/Modules/Collection/) and [**Err**](Reference/VBA/Modules/Information/Err) intrinsics
- [**VBRUN**](Reference/VBRUN/) --- runtime types ([**PropertyBag**](Reference/VBRUN/PropertyBag/), ambient properties, structured error context, drag-and-drop) and the enumerations used by classic VB6 forms and controls
- [**VB**](Reference/VB/) --- the standard controls ([**CheckBox**](Reference/VB/CheckBox/), [**TextBox**](Reference/VB/TextBox/), [**CommandButton**](Reference/VB/CommandButton/), ...) and the application-level singletons ([**App**](Reference/VB/App/), [**Screen**](Reference/VB/Screen/), [**Clipboard**](Reference/VB/Clipboard/), [**Printer**](Reference/VB/Printer/), ...)

**Additional GUI** --- controls beyond the [**VB**](tB/Packages/VB/) package:

- [**CustomControls**](Reference/CustomControls/) --- owner-drawn `Waynes…` controls with a DESIGNER framework for authoring new ones
- [**WinNativeCommonCtls**](Reference/WinNativeCommonCtls/) --- VB6-compatible replacement for `MSCOMCTL.OCX` ([**DTPicker**](Reference/WinNativeCommonCtls/DTPicker), [**ImageList**](Reference/WinNativeCommonCtls/ImageList/), [**ListView**](Reference/WinNativeCommonCtls/ListView/), [**MonthView**](Reference/WinNativeCommonCtls/MonthView), [**ProgressBar**](Reference/WinNativeCommonCtls/ProgressBar), [**Slider**](Reference/WinNativeCommonCtls/Slider), [**TreeView**](Reference/WinNativeCommonCtls/TreeView/), [**UpDown**](Reference/WinNativeCommonCtls/UpDown))

**Web embedding** --- host a browser engine inside a form:

- [**WebView2**](Reference/WebView2/) --- the Microsoft Edge runtime
- [**CEF**](Reference/CEF/) --- the Chromium Embedded Framework (BETA), with a choice of three Chromium runtimes

**Windows integration** --- thin wrappers over OS facilities:

- [**WinServicesLib**](Reference/WinServicesLib/) --- run a twinBASIC EXE as one or more Windows services
- [**WinEventLogLib**](Reference/WinEventLogLib/) --- write Windows Event Log entries, with compile-time message-table generation
- [**WinNamedPipesLib**](Reference/WinNamedPipesLib/) --- IOCP-based asynchronous named-pipe server and client

**Tooling**:

- [**Assert**](Reference/Assert/) --- assertion functions for unit tests, in three modules sharing the same fifteen-member API at different strictness levels
- [**tbIDE**](Reference/tbIDE/) --- the addin SDK for the twinBASIC IDE itself

## Tutorials

- [**Arrays**](Tutorials/Arrays) --- fixed and dynamic arrays, `Dim`, `ReDim`, multi-dimensional shapes
- [**CustomControls**](Tutorials/CustomControls) --- building owner-drawn controls with the `Waynes…` framework
-- [**WebView2**](Tutorials/WebView2/) --- embedding the Edge runtime: hosting local assets, JavaScript interop, driving Monaco
- [**CEF**](Tutorials/CEF/) --- embedding Chromium: building a browser shell, hosting local assets, JavaScript interop, driving Monaco

## The twinBASIC IDE

The [**IDE section**](IDE/) documents the editor, project explorer, debugging panes (call stack, watches, diagnostics, debug console), the [**tbForm**](IDE/Project/Editor/Form) and [**tbReport**](IDE/Project/Editor/Report) designers, and the per-feature side panes. To install third-party addins, see [**Add Ins**](IDE/AddIns/); to author your own, the [**tbIDE package**](Reference/tbIDE/) is the addin SDK.

## Community and external resources

- The [**twinBASIC wiki**](https://github.com/twinbasic/documentation/wiki) on GitHub supplements these docs with community contributions and notes on bleeding-edge features.
- [**Videos**](Videos/) --- the twinBASIC video series and the [**Access DevCon**](Videos/AccessDevCon) conference sessions.
- Third-party guides by Mike Wolfe at [@nolongerset](https://nolongerset.com):
  - [Create a Custom ActiveX Control with twinBASIC](https://nolongerset.com/create-activex-control-with-twinbasic/)
  - [Create a Tool Window in the VBIDE with twinBASIC](https://nolongerset.com/create-a-vbe-addin-with-twinbasic/)

## Contributing to the documentation

These docs are open source. See [**Documentation Development**](Documentation/Development) for the build and preview workflow plus the contribution conventions.
