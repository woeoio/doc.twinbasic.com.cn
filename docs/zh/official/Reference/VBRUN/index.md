---
title: VBRUN Package
parent: Packages
nav_order: 3
permalink: /tB/Packages/VBRUN/
---

# VBRUN Package

The VBRUN built-in package collects twinBASIC's runtime-only types: the ambient, asynchronous, and error-handling objects the runtime hands to controls and event handlers; the collection wrappers it exposes on **UserControl** and on data-source classes; the clipboard / OLE drag-and-drop container; the **PropertyBag** persistence helper used by **UserControl** save and load; and the enumerations that classic VB6 forms, intrinsic controls, and runtime services use to spell out their option values.

## Classes

- [AmbientProperties](/official/Reference/VBRUN/AmbientProperties/) -- read-only object describing the host container's appearance, locale, and design / run-time mode for an embedded control
- [AsyncProperty](/official/Reference/VBRUN/AsyncProperty/) -- event-argument object that identifies an asynchronous **UserControl.AsyncRead** request and delivers the resulting value
- [ContainedControls](/official/Reference/VBRUN/ContainedControls/) -- read-only collection of the controls a consumer placed inside a control-container **UserControl**
- [DataMembers](/official/Reference/VBRUN/DataMembers/) -- collection of named data-source members advertised at design time to data-binding consumers
- [DataObject](/official/Reference/VBRUN/DataObject/) -- clipboard / OLE drag-and-drop container that holds one payload in multiple clipboard formats
- [ErrorCallstack](/official/Reference/VBRUN/ErrorCallstack/) -- snapshot of the call stack at the moment a run-time error was raised, exposed as a sequence of [**ErrorStackFrame**](/official/Reference/VBRUN/ErrorStackFrame/) items
- [ErrorContext](/official/Reference/VBRUN/ErrorContext/) -- structured error object -- number, description, source, help, OS error, state, and call stack
- [ErrorStackFrame](/official/Reference/VBRUN/ErrorStackFrame/) -- single procedure on an [**ErrorCallstack**](/official/Reference/VBRUN/ErrorCallstack/) -- its project, module, and procedure names
- [Hyperlink](/official/Reference/VBRUN/Hyperlink/) -- runtime bridge for browser-style navigation; controls call **UserControl.Hyperlink.NavigateTo** to ask the host to load a target
- [ParentControls](/official/Reference/VBRUN/ParentControls/) -- collection of the **UserControl**'s siblings in its container, optionally wrapped in their host **Extender**
- [PropertyBag](/official/Reference/VBRUN/PropertyBag/) -- creatable key / value store for persisting an object's state -- used by **UserControl** save / load and serialisable as a single byte array

## Modules

- [Constants](/official/Reference/VBRUN/Constants/) -- enumerations used by classic VB6 forms, intrinsic controls, and runtime services -- colours, mouse pointers, key codes, drag/drop states, OLE container behaviour, printer setup values, …
