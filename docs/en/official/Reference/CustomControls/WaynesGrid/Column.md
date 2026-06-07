---
title: Column
parent: WaynesGrid
permalink: /tB/Packages/CustomControls/WaynesGrid/Column
---

# Column class
One column of a [**WaynesGrid**](/en/official/Reference/CustomControls/WaynesGrid). Has a [**Caption**](#caption) that is shown in the column-header row and a [**Width**](#width) that the user can drag at run time. Elements of [**WaynesGrid.Columns**](/en/official/Reference/CustomControls/WaynesGrid#columns).

```vb
ReDim Grid1.Columns(2)
Set Grid1.Columns(0) = New Column
Grid1.Columns(0).Caption = "ID"
Grid1.Columns(0).Width = 80
```

## Properties

### Caption

The text shown in the column-header cell. **String**. Default: `"Column"`.

### Width

The column's width in pixels (unscaled by DPI). [**PixelCount**](/en/official/Reference/CustomControls/Enumerations/PixelCount). Default: 100. Editable by the user at run time by dragging the resizer bar on the column's right edge; assignments at run time update the grid immediately.

## Events

### OnChanged

Raised when [**Caption**](#caption) or [**Width**](#width) is assigned. The parent [**WaynesGrid**](/en/official/Reference/CustomControls/WaynesGrid) listens for this and requests a repaint.
