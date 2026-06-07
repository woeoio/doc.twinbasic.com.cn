---
title: VBA Package
parent: Packages
nav_order: 2
permalink: /tB/Packages/VBA
---

# VBA Package

The VBA built-in package collects the standard runtime library --- the modules grouping the standalone procedures (**MsgBox**, **CStr**, **Mid**, **Format**, …), plus a small number of intrinsic classes (**Collection**, **Err**) and twinBASIC's runtime expression engine.

## Classes

- [Collection](/en/official/Reference/VBA/Collection/) -- ordered set of values or object references, accessed by 1-based index or by optional string key
- [ErrObject](/en/official/Reference/VBA/ErrObject/) -- the singleton **Err** object holding information about the most recent run-time error
- [TbExpressionService](/en/official/Reference/VBA/TbExpressionService/) -- runtime expression engine -- parse and evaluate twinBASIC-syntax expressions supplied as strings

## Modules

- [(Default)](/en/official/Reference/VBA/HiddenModule/) -- unqualified low-level intrinsics -- the **GetMem** / **PutMem** family, **AllocMem**, atomic operations, compile-time reflection, codegen and stack-inspection primitives, …
- [Compilation](/en/official/Reference/VBA/Compilation/) -- compile-time intrinsics that record the project, component, procedure, and source file at the call site
- [Constants](/en/official/Reference/VBA/Constants/) -- global character, pointer, and error-base constants reachable without qualification (**vbCrLf**, **vbNullString**, **vbObjectError**, …)
- [Conversion](/en/official/Reference/VBA/Conversion/) -- type coercion (**CBool**, **CDate**, **CType**, …), number ↔ string parsing, base conversion, and **Variant**-with-error construction
- [DateTime](/en/official/Reference/VBA/DateTime/) -- reading the system clock, building **Date** values from components, parsing them out of strings, and shifting them by chosen units
- [FileSystem](/en/official/Reference/VBA/FileSystem/) -- pathname-based and file-number-based operations on files and directories
- [Financial](/en/official/Reference/VBA/Financial/) -- annuity calculations, internal-rate-of-return analysis on variable cash flows, and asset depreciation
- [Information](/en/official/Reference/VBA/Information/) -- **Is…** predicates, **VarType** / **TypeName**, array bounds and construction, raw pointers (**ObjPtr**, **StrPtr**, **VarPtr**), and **RGB** colour helpers
- [Interaction](/en/official/Reference/VBA/Interaction/) -- dialogs (**MsgBox**, **InputBox**), inline conditionals (**Choose**, **Switch**, **IIf**), process launching, registry helpers, environment, and dynamic-dispatch primitives
- [Math](/en/official/Reference/VBA/Math/) -- sign and magnitude, trigonometry, exponentials and logarithms, the square root, rounding, and pseudo-random numbers
- [Strings](/en/official/Reference/VBA/Strings/) -- measuring, searching, slicing, padding, joining, splitting, and formatting **String** values

::: info

The modules listed above are used for grouping documentation, they don't always match exactly with the implementation details of the VBA package.
:::
