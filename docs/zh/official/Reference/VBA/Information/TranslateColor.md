---
title: TranslateColor
parent: Information Module
permalink: /tB/Modules/Information/TranslateColor
---
# TranslateColor

Translates an OLE colour value to a plain RGB colour, resolving any reference to the system palette in the process.

Syntax: **TranslateColor(** *ColorValue* [ **,** *hPalettePtr* ] **)**

*ColorValue*
: *required* A **Long** OLE colour value to translate.

*hPalettePtr*
: *optional* A **LongPtr** handle to a palette to use for translation. Defaults to **0**, which selects the default system palette.

The OLE colour format encodes either a literal RGB value or an index into the Windows system palette (such as `&H80000012`, the colour of a button face). **TranslateColor** returns the corresponding plain RGB **Long**, suitable for passing to APIs and properties that expect a true colour value rather than a system-palette reference.

### Example

This example translates an OLE system colour to its current RGB value.

```vb
Dim OleColor As Long
Dim RgbColor As Long
OleColor = &H80000012                 ' COLOR_BTNFACE — the button face colour.
RgbColor = TranslateColor(OleColor)
```

### See Also

- [RGB](/official/Reference/VBA/Information/RGB), [RGBA](/official/Reference/VBA/Information/RGBA) functions
- [QBColor](/official/Reference/VBA/Information/QBColor) function
