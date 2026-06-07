---
title: VBA Package
parent: Packages
nav_order: 2
permalink: /tB/Packages/VBA
---

# VBA Package

The VBA built-in package collects the standard runtime library --- the modules grouping the standalone procedures (**MsgBox**, **CStr**, **Mid**, **Format**, …), plus a small number of intrinsic classes (**Collection**, **Err**) and twinBASIC's runtime expression engine.

## Classes

- [Collection](/official/Reference/VBA/Collection/) -- ordered set of values or object references, accessed by 1-based index or by optional string key
- [ErrObject](/official/Reference/VBA/ErrObject/) -- the singleton **Err** object holding information about the most recent run-time error
- [TbExpressionService](/official/Reference/VBA/TbExpressionService/) -- runtime expression engine -- parse and evaluate twinBASIC-syntax expressions supplied as strings

## Modules

- [(Default)](/official/Reference/VBA/HiddenModule/) -- unqualified low-level intrinsics -- the **GetMem** / **PutMem** family, **AllocMem**, atomic operations, compile-time reflection, codegen and stack-inspection primitives, …
- [Compilation](/official/Reference/VBA/Compilation/) -- compile-time intrinsics that record the project, component, procedure, and source file at the call site
- [Constants](/official/Reference/VBA/Constants/) -- global character, pointer, and error-base constants reachable without qualification (**vbCrLf**, **vbNullString**, **vbObjectError**, …)
- [Conversion](/official/Reference/VBA/Conversion/) -- type coercion (**CBool**, **CDate**, **CType**, …), number ↔ string parsing, base conversion, and **Variant**-with-error construction
- [DateTime](/official/Reference/VBA/DateTime/) -- reading the system clock, building **Date** values from components, parsing them out of strings, and shifting them by chosen units
- [FileSystem](/official/Reference/VBA/FileSystem/) -- pathname-based and file-number-based operations on files and directories
- [Financial](/official/Reference/VBA/Financial/) -- annuity calculations, internal-rate-of-return analysis on variable cash flows, and asset depreciation
- [Information](/official/Reference/VBA/Information/) -- **Is…** predicates, **VarType** / **TypeName**, array bounds and construction, raw pointers (**ObjPtr**, **StrPtr**, **VarPtr**), and **RGB** colour helpers
- [Interaction](/official/Reference/VBA/Interaction/) -- dialogs (**MsgBox**, **InputBox**), inline conditionals (**Choose**, **Switch**, **IIf**), process launching, registry helpers, environment, and dynamic-dispatch primitives
- [Math](/official/Reference/VBA/Math/) -- sign and magnitude, trigonometry, exponentials and logarithms, the square root, rounding, and pseudo-random numbers
- [Strings](/official/Reference/VBA/Strings/) -- measuring, searching, slicing, padding, joining, splitting, and formatting **String** values

::: info

The modules listed above are used for grouping documentation, they don't always match exactly with the implementation details of the VBA package.
:::
