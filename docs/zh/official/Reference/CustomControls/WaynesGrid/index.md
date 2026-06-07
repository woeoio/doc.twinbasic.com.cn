---
title: WaynesGrid
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/WaynesGrid/
---

# WaynesGrid class
A tabular data display --- a grid of cells with column headers and row headers, resizable columns, optional grid lines, hover and selection highlighting, vertical and horizontal scrolling via the mouse wheel, and full keyboard navigation. The number of rows is set by [**RowCount**](#rowcount); the cells themselves are filled in by handling the [**GetCellText**](#getcelltext) event, which fires once per visible cell as the grid paints.

The grid has an array of [**Column**](/official/Reference/CustomControls/WaynesGrid/Column) objects giving each column its [**Caption**](/official/Reference/CustomControls/WaynesGrid/Column#caption) and [**Width**](/official/Reference/CustomControls/WaynesGrid/Column#width). Five distinct [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions) sub-objects control the appearance of column headers, row headers, normal cells, the hovered cell, the selected cell, and full-column / full-row multi-selection.

```vb
Private Sub Form_Load()
    ReDim Grid1.Columns(2)
    Set Grid1.Columns(0) = New Column
    Set Grid1.Columns(1) = New Column
    Set Grid1.Columns(2) = New Column
    Grid1.Columns(0).Caption = "ID"
    Grid1.Columns(1).Caption = "Name"
    Grid1.Columns(2).Caption = "Date"
    Grid1.RowCount = 100
End Sub

Private Sub Grid1_GetCellText( _
        ByVal X As Long, ByVal Y As Long, ByRef Value As String)

    Select Case X
        Case 0: Value = CStr(Y + 1)
        Case 1: Value = "Row " & (Y + 1)
        Case 2: Value = Format$(DateAdd("d", Y, Date), "yyyy-mm-dd")
    End Select
End Sub
```

The six [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions) sub-objects ([**ColumnHeaderOptions**](#columnheaderoptions), [**RowHeaderOptions**](#rowheaderoptions), [**CellOptions**](#celloptions), [**HoverCellOptions**](#hovercelloptions), [**SelectedCellOptions**](#selectedcelloptions), [**MultiSelectCellOptions**](#multiselectcelloptions)) control the grid's visual style. A typical setup gives headers a gradient, body cells left-aligned text with a small left-padding indent, and the selected cell a contrasting border:

```vb
With Grid1.ColumnHeaderOptions
    .Fill.SetSimplePattern &HE0E0E0, &HC0C0C0, _
            Pattern:=tbGradientNorthToSouth
    .TextRendering.Font.Weight = tbBold
    .TextRendering.Alignment = tbAlignMiddleCenter
End With

With Grid1.CellOptions
    .Fill.ColorPoints.SetSolidColor vbWhite
    .TextRendering.Alignment = tbAlignMiddleLeft
    .TextRendering.Padding.Left = 10
End With

With Grid1.SelectedCellOptions
    .Fill.ColorPoints.SetSolidColor &HFFEEDD                ' pale blue
    .Borders.SetSimpleBorder StrokeSize:=2, ColorRGB:=vbBlue
End With
```

## Cell selection

The grid exposes three separate selection states, each tracked through its own pair of properties:

- A single hover-highlight cell --- the cell currently under the mouse --- controlled by [**HoverCellOptions**](#hovercelloptions). Internal to the grid; not exposed as a property.
- A single selected cell, with coordinates in [**SelectedCellX**](#selectedcellx) and [**SelectedCellY**](#selectedcelly), drawn using [**SelectedCellOptions**](#selectedcelloptions).
- A full-row or full-column multi-selection, indicated by clicking the row header or column header. [**SelectedFullColumnX**](#selectedfullcolumnx) and [**SelectedFullRowY**](#selectedfullrowy) hold the indices; the affected cells render with [**MultiSelectCellOptions**](#multiselectcelloptions).

A value of `-1` on any of the selection-coordinate properties means "no selection of that kind". Setting a selection programmatically and then asking the grid to repaint moves the focus to the corresponding cell as well, by way of [**CustomControlContext.ChangeFocusedElement**](/official/Reference/CustomControls/Framework/CustomControlContext#changefocusedelement).

## Properties

### Anchors

Which sides of the control are attached to its container during resize. [**Anchors**](/official/Reference/CustomControls/Styles/Anchors). Inherited.

### CellOptions

The [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions) used to draw ordinary, unselected, non-hovered cells.

### ColumnHeaderOptions

The [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions) used to draw the column-header row (the top row).

### Columns

The array of [**Column**](/official/Reference/CustomControls/WaynesGrid/Column) objects describing each column. Read-write; `ReDim` to grow / shrink, and assign individual [**Column**](/official/Reference/CustomControls/WaynesGrid/Column) instances into the elements.

### Dock

How the control is docked inside its container. A member of [**DockMode**](/official/Reference/CustomControls/Enumerations/DockMode). Inherited.

### HeaderRowHeight

The height of the column-header row, in pixels (unscaled by DPI). **Long**. Default: 60.

### Height

The control's height in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### HorizontalLineOptions

The [**Line**](/official/Reference/CustomControls/Styles/Line) drawn between successive rows. Set its [**StrokeSize**](/official/Reference/CustomControls/Styles/Line#strokesize) to 0 to suppress the horizontal lines.

### HoverCellOptions

The [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions) used to draw the cell currently under the mouse cursor.

### Left

The horizontal offset of the control's left edge from its container, in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### MultiSelectCellOptions

The [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions) used to draw cells that belong to a full-column or full-row multi-selection.

### Name

The unique design-time name of the control on its parent form. **String**. Inherited.

### ResizerBar

The [**Line**](/official/Reference/CustomControls/Styles/Line) drawn over a column-edge while the user is dragging it to resize. Transparent when not hovered; rendered with the line's fill while the resize is active.

### RowCount

The total number of rows in the grid. **Long**. Default: -1 (unbounded --- the grid paints rows forever as the user scrolls).

### RowHeaderOptions

The [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions) used to draw the row-header column (the leftmost column).

### RowHeight

The height of every non-header row, in pixels (unscaled by DPI). **Long**. Default: 40.

### SelectedCellOptions

The [**CellRenderingOptions**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions) used to draw the single currently-selected cell at ([**SelectedCellX**](#selectedcellx), [**SelectedCellY**](#selectedcelly)).

### SelectedCellX

The X (column) index of the currently-selected cell, or -1 if no cell is selected. **Long**. Default: -1.

### SelectedCellY

The Y (row) index of the currently-selected cell, or -1 if no cell is selected. **Long**. Default: -1.

### SelectedFullColumnX

The X (column) index of a full-column multi-selection, or -1 if no full column is selected. **Long**. Default: -1.

### SelectedFullRowY

The Y (row) index of a full-row multi-selection, or -1 if no full row is selected. **Long**. Default: -1.

### TabIndex

The position of the control in the form's TAB-key navigation order. **Long**. Inherited.

### TabStop

Whether the user can reach the control by pressing **TAB**. **Boolean**. Inherited. Default: **True**.

### Top

The vertical offset of the control's top edge from its container, in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### VerticalLineOptions

The [**Line**](/official/Reference/CustomControls/Styles/Line) drawn between successive columns. Set its [**StrokeSize**](/official/Reference/CustomControls/Styles/Line#strokesize) to 0 to suppress the vertical lines.

### Visible

Whether the control is currently displayed. **Boolean**. Inherited. Default: **True**.

### Width

The control's width in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

## Methods

### Repaint

Asks the framework to redraw the grid. Equivalent to calling [**CustomControlContext.Repaint**](/official/Reference/CustomControls/Framework/CustomControlContext#repaint) on the control's stored context; exposed as a public method on the grid so an external observer (e.g. the form, after updating the data behind the grid) can trigger a redraw without accessing the framework directly.

Syntax: *object*.**Repaint**

## Events

### GetCellText

Raised once per visible cell as the grid paints, asking the host for the text to display. The default text is `<column-caption><row-index+1>` --- replace *Value* in the handler to show real data.

Syntax: *object*\_**GetCellText**( **ByVal** *X* **As Long**, **ByVal** *Y* **As Long**, **ByRef** *Value* **As String** )

*X*
: The column index of the cell being painted.

*Y*
: The row index of the cell being painted.

*Value*
: A pre-populated default value; assign to it to override what is displayed.
