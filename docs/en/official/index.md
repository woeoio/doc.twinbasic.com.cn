---
title: Welcome
nav_order: 1
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "1b0501b2-d844-452d-9717-7548b2697c10"
  PropagateID: "1b0501b2-d844-452d-9717-7548b2697c10"
  ReservedCode1: "d0b74fed-e7e8-464d-a5ac-1de4dc5d5fe0"
  ReservedCode2: "d0b74fed-e7e8-464d-a5ac-1de4dc5d5fe0"
---

# Welcome to twinBASIC

twinBASIC is a new BASIC language and development environment aiming for 100% backward compatibility with VB6 and VBA, while adding modern language features --- generics, native [**Interface**](/en/official/Reference/Core/Interface) and [**CoClass**](/en/official/Reference/Core/CoClass) declarations, attributes, and a package system. The compiler and IDE are under active development and currently in beta; the [FAQ](/en/official/Miscellaneous/FAQs) covers the project's status, authorship, and what is and isn't implemented today, and downloads live on the [Releases](https://github.com/twinbasic/twinbasic/releases) page of the main GitHub repository.

## New to twinBASIC?

Start with the [FAQ](/en/official/Miscellaneous/FAQs) for orientation --- what twinBASIC is, where it stands today, and what runs on it --- then the [Features overview](/en/official/Features/) for a tour of everything the language adds on top of VBx. The [Tutorials](#tutorials) section below has step-by-step guides; the [Arrays](/en/official/Tutorials/Arrays) tutorial assumes no prior twinBASIC experience and is a reasonable first read.

## Coming from VBA or VB6?

Most existing VB6 / VBA code compiles unchanged. Key additions beyond VBx compatibility: new data types ([**LongLong**](/en/official/Features/Language/Data-Types#longlong), [**LongPtr**](/en/official/Features/Language/Data-Types#longptr), [**Decimal**](/en/official/Features/Language/Data-Types#decimal)), native [**Interface**](/en/official/Reference/Core/Interface) and [**CoClass**](/en/official/Reference/Core/CoClass) declarations, [**Implements Via**](/en/official/Features/Language/Inheritance#implements-via-for-basic-inheritance) and [**Inherits**](/en/official/Features/Language/Inheritance#inherits-for-complete-oop) for inheritance, generics, method overloading, type inference, and attribute syntax. The [Features overview](/en/official/Features/) is the complete catalogue.

## Looking up a keyword, function, or operator?

The reference section is split into language constructs (the things the compiler parses) and runtime members (functions, properties, types, classes shipped in the built-in packages):

- [**Categorical list**](/en/official/Reference/Categories) --- statements, procedures, and functions grouped by purpose (compiler control, declarations, control flow, file I/O, ...)
- [**Statements**](/en/official/Reference/Statements) --- alphabetical index of every language statement
- [**Procedures and Functions**](/en/official/Reference/Procedures-and-Functions) --- alphabetical index of every callable runtime member
- [**Operators**](/en/official/Reference/Operators) --- arithmetic, comparison, logical, bitwise, and twinBASIC's added operators
- [**Compiler Constants**](/en/official/Reference/Compiler-Constants) --- the `#If` symbols recognised by the compiler
- [**Attributes**](/en/official/Reference/Attributes) --- `[Documentation(...)]`, `[COMCreatable(...)]`, and the rest of the attribute syntax
- [**Controls**](/en/official/Reference/Controls) --- the standard UI controls ([**CheckBox**](/en/official/Reference/VB/CheckBox/), [**TextBox**](/en/official/Reference/VB/TextBox/), [**CommandButton**](/en/official/Reference/VB/CommandButton/), ...) grouped by purpose
- [**Glossary**](/en/official/Reference/Glossary) --- technical terms used across the docs

## Built-in packages

A _package_ groups related code under one namespace and is referenced from a project as a single dependency. The [Packages page](/en/official/Reference/Packages) lists every built-in package with a one-line description; the headings below group them by what they are for.

**Default packages** --- referenced in every project automatically:

- [**VBA**](/en/official/Reference/VBA/) --- the standard runtime library (`MsgBox`, `CStr`, `Format`, `Mid`, ...) plus the [**Collection**](/en/official/Reference/VBA/Collection/) and [**Err**](/en/official/Reference/VBA/Information/Err) intrinsics
- [**VBRUN**](/en/official/Reference/VBRUN/) --- runtime types ([**PropertyBag**](/en/official/Reference/VBRUN/PropertyBag/), ambient properties, structured error context, drag-and-drop) and the enumerations used by classic VB6 forms and controls
- [**VB**](/en/official/Reference/VB/) --- the standard controls ([**CheckBox**](/en/official/Reference/VB/CheckBox/), [**TextBox**](/en/official/Reference/VB/TextBox/), [**CommandButton**](/en/official/Reference/VB/CommandButton/), ...) and the application-level singletons ([**App**](/en/official/Reference/VB/App/), [**Screen**](/en/official/Reference/VB/Screen/), [**Clipboard**](/en/official/Reference/VB/Clipboard/), [**Printer**](/en/official/Reference/VB/Printer/), ...)

**Additional GUI** --- controls beyond the [**VB**](/en/official/Reference/VB/) package:

- [**CustomControls**](/en/official/Reference/CustomControls/) --- owner-drawn `Waynes...` controls with a DESIGNER framework for authoring new ones
- [**WinNativeCommonCtls**](/en/official/Reference/WinNativeCommonCtls/) --- VB6-compatible replacement for `MSCOMCTL.OCX` ([**DTPicker**](/en/official/Reference/WinNativeCommonCtls/DTPicker), [**ImageList**](/en/official/Reference/WinNativeCommonCtls/ImageList/), [**ListView**](/en/official/Reference/WinNativeCommonCtls/ListView/), [**MonthView**](/en/official/Reference/WinNativeCommonCtls/MonthView), [**ProgressBar**](/en/official/Reference/WinNativeCommonCtls/ProgressBar), [**Slider**](/en/official/Reference/WinNativeCommonCtls/Slider), [**TreeView**](/en/official/Reference/WinNativeCommonCtls/TreeView/), [**UpDown**](/en/official/Reference/WinNativeCommonCtls/UpDown))

**Web embedding** --- host a browser engine inside a form:

- [**WebView2**](/en/official/Reference/WebView2/) --- the Microsoft Edge runtime
- [**CEF**](/en/official/Reference/CEF/) --- the Chromium Embedded Framework (BETA), with a choice of three Chromium runtimes

**Windows integration** --- thin wrappers over OS facilities:

- [**WinServicesLib**](/en/official/Reference/WinServicesLib/) --- run a twinBASIC EXE as one or more Windows services
- [**WinEventLogLib**](/en/official/Reference/WinEventLogLib/) --- write Windows Event Log entries, with compile-time message-table generation
- [**WinNamedPipesLib**](/en/official/Reference/WinNamedPipesLib/) --- IOCP-based asynchronous named-pipe server and client

**Tooling**:

- [**Assert**](/en/official/Reference/Assert/) --- assertion functions for unit tests, in three modules sharing the same fifteen-member API at different strictness levels
- [**tbIDE**](/en/official/Reference/tbIDE/) --- the addin SDK for the twinBASIC IDE itself

## Tutorials

- [**Arrays**](/en/official/Tutorials/Arrays) --- fixed and dynamic arrays, `Dim`, `ReDim`, multi-dimensional shapes
- [**CustomControls**](/en/official/Tutorials/CustomControls/) --- building owner-drawn controls with the `Waynes...` framework
- [**WebView2**](/en/official/Tutorials/WebView2/) --- embedding the Edge runtime: hosting local assets, JavaScript interop, driving Monaco
- [**CEF**](/en/official/Tutorials/CEF/) --- embedding Chromium: building a browser shell, hosting local assets, JavaScript interop, driving Monaco

## The twinBASIC IDE

The [**IDE section**](/en/official/IDE/) documents the editor, project explorer, debugging panes (call stack, watches, diagnostics, debug console), the [**tbForm**](/en/official/IDE/tbForm) and [**tbReport**](/en/official/IDE/tbReport) designers, and the per-feature side panes. To install third-party addins, see [**Add Ins**](/en/official/IDE/AddIns/); to author your own, the [**tbIDE package**](/en/official/Reference/tbIDE/) is the addin SDK.

## Community and external resources

- The [**twinBASIC wiki**](https://github.com/twinbasic/documentation/wiki) on GitHub supplements these docs with community contributions and notes on bleeding-edge features.
- [**Videos**](/en/official/Videos/) --- the twinBASIC video series and the [**Access DevCon**](/en/official/Videos/AccessDevCon) conference sessions.
- Third-party guides by Mike Wolfe at [@nolongerset](https://nolongerset.com):
  - [Create a Custom ActiveX Control with twinBASIC](https://nolongerset.com/create-activex-control-with-twinbasic/)
  - [Create a Tool Window in the VBIDE with twinBASIC](https://nolongerset.com/create-a-vbe-addin-with-twinbasic/)

## Contributing to the documentation

These docs are open source. See [**Documentation Development**](/en/official/Documentation/) for the build and preview workflow plus the contribution conventions.

