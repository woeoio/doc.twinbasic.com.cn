---
title: Controls
parent: Reference Section
nav_order: 7
permalink: /tB/Controls
---

# Controls

The standard set of UI control classes that ship with twinBASIC lives in the **VB** built-in package --- see [VB Package](/official/Reference/VB/) for the package landing page. The classes below are grouped by purpose; each entry links to the per-class reference.

## Forms and host classes

These classes are *containers* rather than controls in the strict sense --- they host other controls and back the form/control designer in the IDE.

- [Form](/official/Reference/VB/Form/) -- top-level window hosting controls, menus, and a drawing surface.
- [MDIForm](/official/Reference/VB/MDIForm/) -- top-level MDI parent that hosts MDI-child [Form](/official/Reference/VB/Form/) instances inside a recessed client area.
- [UserControl](/official/Reference/VB/UserControl/) -- base class for designing a reusable ActiveX control in twinBASIC.
- [PropertyPage](/official/Reference/VB/PropertyPage/) -- container backing a single tab of a COM property-page dialog (the **(Custom)** popup on an ActiveX control's property browser).
- [Report](/official/Reference/VB/Report/) -- top-level window specialised for banded report layout, print preview, and printing.

## Buttons and toggles

- [CommandButton](/official/Reference/VB/CommandButton/) -- push-button used to trigger an action.
- [CheckBox](/official/Reference/VB/CheckBox/) -- two- or three-state check box with an optional text caption.
- [CheckMark](/official/Reference/VB/CheckMark/) -- windowless check glyph that scales to fill its rectangle; no caption, no focus.
- [OptionButton](/official/Reference/VB/OptionButton/) -- radio-button; option buttons sharing a container form a mutually-exclusive group.

## Text and value input

- [TextBox](/official/Reference/VB/TextBox/) -- single-line or multi-line edit control, with optional password masking and digit-only input.
- [ComboBox](/official/Reference/VB/ComboBox/) -- edit field combined with a drop-down list of items.
- [ListBox](/official/Reference/VB/ListBox/) -- vertically-scrolling list of items, optionally multi-column and multi-select.
- [HScrollBar](/official/Reference/VB/HScrollBar/) -- stand-alone horizontal scroll bar.
- [VScrollBar](/official/Reference/VB/VScrollBar/) -- stand-alone vertical scroll bar.

## File-system browsing

These three controls are normally connected together to build a complete file picker.

- DriveListBox --- drive picker. *Not yet documented.*
- [DirListBox](/official/Reference/VB/DirListBox/) -- directory-tree picker for a single path.
- [FileListBox](/official/Reference/VB/FileListBox/) -- file list for a single directory, filtered by wildcard and file-attribute toggles.

## Containers

- [Frame](/official/Reference/VB/Frame/) -- captioned container that groups related controls and scopes [OptionButton](/official/Reference/VB/OptionButton/) groups.
- [MultiFrame](/official/Reference/VB/MultiFrame/) -- layout container that arranges a set of [Frame](/official/Reference/VB/Frame/) controls in a horizontal or vertical strip.
- [PictureBox](/official/Reference/VB/PictureBox/) -- Win32 native control combining picture display, a drawing surface, and a child-control container.

## Display-only

- [Label](/official/Reference/VB/Label/) -- windowless lightweight read-only text display, used for captions, status text, and keyboard mnemonics.
- [Image](/official/Reference/VB/Image/) -- windowless lightweight picture display; the small, efficient alternative to [PictureBox](/official/Reference/VB/PictureBox/).
- [Line](/official/Reference/VB/Line/) -- windowless single straight line between two endpoints.
- [Shape](/official/Reference/VB/Shape/) -- windowless geometric primitive (rectangle, oval, circle, star, arrow, …) with configurable border, fill, and rotation.
- [QRCode](/official/Reference/VB/QRCode/) -- windowless QR-code renderer populated from a text or byte-array payload.

## Menus

- [Menu](/official/Reference/VB/Menu/) -- item in a Win32 native menu --- top-level entry on a [Form](/official/Reference/VB/Form/)'s or [MDIForm](/official/Reference/VB/MDIForm/)'s menu bar, a drop-down entry, or a separator.

## Data and external content

- [Data](/official/Reference/VB/Data/) -- Win32 native control that opens a DAO recordset and exposes record-navigation buttons for bound controls.
- [OLE](/official/Reference/VB/OLE/) -- OLE container hosting a linked or embedded OLE Automation object (Word document, Excel sheet, …).
- [Timer](/official/Reference/VB/Timer/) -- non-visual control that raises a periodic event at a programmable interval.
