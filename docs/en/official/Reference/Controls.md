---
title: Controls
parent: Reference Section
nav_order: 7
permalink: /tB/Controls
---

# Controls

The standard set of UI control classes that ship with twinBASIC lives in the **VB** built-in package --- see [VB Package](/en/official/Reference/VB) for the package landing page. The classes below are grouped by purpose; each entry links to the per-class reference.

## Forms and host classes

These classes are *containers* rather than controls in the strict sense --- they host other controls and back the form/control designer in the IDE.

- [Form](/en/official/Reference/VB/Form) -- top-level window hosting controls, menus, and a drawing surface.
- [MDIForm](/en/official/Reference/VB/MDIForm) -- top-level MDI parent that hosts MDI-child [Form](/en/official/Reference/VB/Form) instances inside a recessed client area.
- [UserControl](/en/official/Reference/VB/UserControl) -- base class for designing a reusable ActiveX control in twinBASIC.
- [PropertyPage](/en/official/Reference/VB/PropertyPage) -- container backing a single tab of a COM property-page dialog (the **(Custom)** popup on an ActiveX control's property browser).
- [Report](/en/official/Reference/VB/Report) -- top-level window specialised for banded report layout, print preview, and printing.

## Buttons and toggles

- [CommandButton](/en/official/Reference/VB/CommandButton) -- push-button used to trigger an action.
- [CheckBox](/en/official/Reference/VB/CheckBox) -- two- or three-state check box with an optional text caption.
- [CheckMark](/en/official/Reference/VB/CheckMark) -- windowless check glyph that scales to fill its rectangle; no caption, no focus.
- [OptionButton](/en/official/Reference/VB/OptionButton) -- radio-button; option buttons sharing a container form a mutually-exclusive group.

## Text and value input

- [TextBox](/en/official/Reference/VB/TextBox) -- single-line or multi-line edit control, with optional password masking and digit-only input.
- [ComboBox](/en/official/Reference/VB/ComboBox) -- edit field combined with a drop-down list of items.
- [ListBox](/en/official/Reference/VB/ListBox) -- vertically-scrolling list of items, optionally multi-column and multi-select.
- [HScrollBar](/en/official/Reference/VB/HScrollBar) -- stand-alone horizontal scroll bar.
- [VScrollBar](/en/official/Reference/VB/VScrollBar) -- stand-alone vertical scroll bar.

## File-system browsing

These three controls are normally connected together to build a complete file picker.

- DriveListBox --- drive picker. *Not yet documented.*
- [DirListBox](/en/official/Reference/VB/DirListBox) -- directory-tree picker for a single path.
- [FileListBox](/en/official/Reference/VB/FileListBox) -- file list for a single directory, filtered by wildcard and file-attribute toggles.

## Containers

- [Frame](/en/official/Reference/VB/Frame) -- captioned container that groups related controls and scopes [OptionButton](/en/official/Reference/VB/OptionButton) groups.
- [MultiFrame](/en/official/Reference/VB/MultiFrame) -- layout container that arranges a set of [Frame](/en/official/Reference/VB/Frame) controls in a horizontal or vertical strip.
- [PictureBox](/en/official/Reference/VB/PictureBox) -- Win32 native control combining picture display, a drawing surface, and a child-control container.

## Display-only

- [Label](/en/official/Reference/VB/Label) -- windowless lightweight read-only text display, used for captions, status text, and keyboard mnemonics.
- [Image](/en/official/Reference/VB/Image) -- windowless lightweight picture display; the small, efficient alternative to [PictureBox](/en/official/Reference/VB/PictureBox).
- [Line](/en/official/Reference/VB/Line) -- windowless single straight line between two endpoints.
- [Shape](/en/official/Reference/VB/Shape) -- windowless geometric primitive (rectangle, oval, circle, star, arrow, …) with configurable border, fill, and rotation.
- [QRCode](/en/official/Reference/VB/QRCode) -- windowless QR-code renderer populated from a text or byte-array payload.

## Menus

- [Menu](/en/official/Reference/VB/Menu) -- item in a Win32 native menu --- top-level entry on a [Form](/en/official/Reference/VB/Form)'s or [MDIForm](/en/official/Reference/VB/MDIForm)'s menu bar, a drop-down entry, or a separator.

## Data and external content

- [Data](/en/official/Reference/VB/Data) -- Win32 native control that opens a DAO recordset and exposes record-navigation buttons for bound controls.
- [OLE](/en/official/Reference/VB/OLE) -- OLE container hosting a linked or embedded OLE Automation object (Word document, Excel sheet, …).
- [Timer](/en/official/Reference/VB/Timer) -- non-visual control that raises a periodic event at a programmable interval.
