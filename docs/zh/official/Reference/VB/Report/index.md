---
title: Report
parent: VB Package
permalink: /tB/Packages/VB/Report/
---

# Report class

A **Report** is a top-level Win32 window --- much like a [**Form**](/official/Reference/VB/Form/) --- specialised for rendering the print preview of a banded report. Each report designed in the IDE becomes its own class derived from **Report**: its sections (report header / page header / detail / page footer / report footer) and the controls placed in them become members of that class. At run time, code assigns a recordset to [**Recordset**](#recordset), calls [**Show**](#show), and the framework iterates the recordset, evaluates expressions on the controls, and paints the resulting pages into a built-in preview window with a navigation toolbar at the bottom. [**PrintReport**](#printreport) sends the same pages to the printer. The default property is [**Controls**](#controls) and the default event is [**Load**](#load).

```vb
' In the report's code-behind (rptSales):
Private Sub Report_Load()
    Set Me.Recordset = OpenSalesRecordset()
    Me.Caption = "Sales for " & FormatDateTime(Now, vbLongDate)
End Sub

' In a startup module:
Sub Main()
    rptSales.Show vbModal       ' opens the preview window
End Sub
```


## Sections

A report is composed of up to five sections, laid out vertically on each page:

| Section          | Painted                                                        |
|------------------|----------------------------------------------------------------|
| **ReportHeader** | Once, at the top of the first page.                            |
| **PageHeader**   | At the top of every page that follows the report header.       |
| **Detail**       | Once per record in [**Recordset**](#recordset).                |
| **PageFooter**   | At the bottom of every page.                                   |
| **ReportFooter** | Once, at the end of the last page after the final detail row.  |

Sections are designed in the IDE --- each is a container that holds [**Label**](/official/Reference/VB/Label/), [**Image**](/official/Reference/VB/Image/), [**QRCode**](/official/Reference/VB/QRCode/), and other controls. A section's `KeepTogether` property prevents it from splitting across a page break; its `BackStyle` and back colour control the section background; the framework picks an alternating-row colour for the detail section automatically when the section requests it.

## Recordset binding

[**Recordset**](#recordset) accepts any object that exposes the classic ADO/DAO interface --- `EOF`, `MoveNext`, and a `Fields` collection indexable by name. The framework wraps non-tB recordsets transparently. `Recordset` may also be left **Nothing**, in which case the detail section is rendered exactly once with no field data.

A control in a section opts into binding by setting its `DataField` to a recordset field name; the framework reads that field for each detail row and writes it back into the control's value (or [**Caption**](/official/Reference/VB/Label/#caption) for [**Label**](/official/Reference/VB/Label/)s, **Payload** for [**QRCode**](/official/Reference/VB/QRCode/)). For richer cases, prefix `DataField` with `=` to make it an *expression* --- any twinBASIC expression that mixes recordset fields, the report's own [**Page**](#page) / [**Pages**](#pages) / [**Caption**](#caption), and standard library calls. A label whose **DataField** is `="Page " & Report.Page & " of " & Report.Pages` updates itself as each page is rendered.

When **DataField** is empty and a [**Label**](/official/Reference/VB/Label/)'s [**Caption**](/official/Reference/VB/Label/#caption) contains `%`-placeholders, those placeholders are converted to an expression automatically --- see [Caption placeholders](#caption-placeholders) below. Setting `DataFieldAggregate` on a Label additionally accumulates the expression's value across rows for running totals.

## Caption placeholders

Inside a Label that has no **DataField**, the following `%` placeholders in the [**Caption**](/official/Reference/VB/Label/#caption) are recognised and replaced at render time:

| Placeholder | Replaced with                                                          |
|-------------|------------------------------------------------------------------------|
| `%p`        | The current [**Page**](#page) number.                                  |
| `%P`        | The total [**Pages**](#pages) count.                                   |
| `%d`        | The current date, formatted as `vbShortDate`.                          |
| `%D`        | The current date, formatted as `vbLongDate`.                           |
| `%t`        | The current time, formatted as `vbShortTime`.                          |
| `%T`        | The current time, formatted as `vbLongTime`.                           |
| `%i`        | The report's [**Caption**](#caption).                                  |

Use `%%` to embed a literal `%`. A caption with no recognised placeholder is left untouched.

## Built-in preview toolbar

The bottom strip of the report window is a fixed toolbar with three groups of controls:

- **Record selectors** --- first / previous / next / last buttons around a page-number readout.
- **Zoom controls** --- minus / plus buttons around a percentage readout.
- **Print button** --- sends the report to the default printer (calls [**PrintReport**](#printreport) with `ShowDialog := False`).

The toolbar always paints; it cannot be hidden. The plus and minus buttons step [**ZoomPercent**](#zoompercent) by [**ZoomStep**](#zoomstep) (default `10`) and switch [**ZoomAutoFit**](#zoomautofit) to **vbZoomAutoFitNever**. Scroll bars appear automatically when the zoomed page does not fit the available area; the mouse wheel scrolls vertically and **Shift+Wheel** scrolls horizontally.

## Zoom and page sizing

[**PixelsReportWidth**](#pixelsreportwidth) and [**PixelsReportHeight**](#pixelsreportheight) define the page size *between the margins*; [**PixelsLeftMargin**](#pixelsleftmargin), [**PixelsRightMargin**](#pixelsrightmargin), [**PixelsTopMargin**](#pixelstopmargin), and [**PixelsBottomMargin**](#pixelsbottommargin) define the margins. All five values are in *scaled pixels* (1 px ≈ 1/96 inch at 100% DPI). The defaults --- `300` × `900` for the page and `96/2.54` (≈ 1 cm) for each margin --- are placeholders rather than a real paper size; the IDE designer's [**ChangePageSize**](#changepagesize) helper writes the values for the standard paper sizes.

### ZoomAutoFitConstants

[**ZoomPercent**](#zoompercent) is the rendering zoom (`100` = 1 logical pixel per screen pixel). [**ZoomAutoFit**](#zoomautofit) ([**ZoomAutoFitConstants**](#zoomautofitconstants)) selects whether the framework also recomputes [**ZoomPercent**](#zoompercent) on every paint to fit the current window:

| Constant                  | Value | Meaning                                                              |
|---------------------------|-------|----------------------------------------------------------------------|
| **vbZoomAutoFit**         | 0     | Recalculate zoom on every paint to maximise the page in the window.  |
| **vbZoomAutoFitOnce**     | 1     | Recalculate once, on the first paint, then leave [**ZoomPercent**](#zoompercent) alone. |
| **vbZoomAutoFitNever**    | 2     | Honour whatever [**ZoomPercent**](#zoompercent) is currently set to. |

Clicking the toolbar's plus or minus button automatically switches [**ZoomAutoFit**](#zoomautofit) to **vbZoomAutoFitNever** so the user's manual zoom is preserved.

## Drawing inside sections

Every section's repaint raises [**BeforePaintSection**](#beforepaintsection) on the report, with the [**Section**](#beforepaintsection) being drawn as the argument. During this event, [**hDC**](#hdc) returns the metafile device context that the section is being recorded into --- drawing primitives ([**Line**](#line), [**Circle**](#circle), [**PSet**](#pset), [**PaintPicture**](#paintpicture), [**Print**](#print), and direct GDI calls through [**hDC**](#hdc)) write straight into that section's image. Outside the event, [**hDC**](#hdc) returns the report window's own DC, suitable for screen drawing only.

```vb
Private Sub Report_BeforePaintSection(Section As ControlsSection)
    If Section.SectionType = PageHeader Then
        Me.Line (0, 0)-(Me.PixelsReportWidth, 0), vbBlack
    End If
End Sub
```

## Coordinate units

A report mixes three coordinate systems:

- **Window dimensions** --- [**Width**](#width), [**Height**](#height), [**Left**](#left), and [**Top**](#top) describe the report window itself, in twips (the size of the on-screen frame, including the toolbar).
- **Client constraints** --- [**MinWidth**](#minwidth), [**MinHeight**](#minheight), [**MaxWidth**](#maxwidth), and [**MaxHeight**](#maxheight) constrain the *client area* of the window during interactive resize, in twips.
- **Page dimensions** --- [**PixelsReportWidth**](#pixelsreportwidth), [**PixelsReportHeight**](#pixelsreportheight), and the margin properties describe the *printed page*, in scaled pixels.

The graphics primitives inherited from the form-style drawing surface ([**Cls**](#cls), [**Circle**](#circle), [**Line**](#line), [**PSet**](#pset), [**Print**](#print), …) use the report's own [**ScaleMode**](#scalemode) and [**Scale\***](#scaleleft) properties for their coordinate inputs.

## Printing

[**PrintReport**](#printreport) iterates from page 1 to the last page through the [**Printer**](/official/Reference/VB/Printer/) object, sending each cached metafile as one printed page.

```vb
rptSales.PrintReport ShowDialog:=False
```

The print dialog is not yet supported in this beta; calling **PrintReport** with **ShowDialog := True** raises run-time error 5. Paper size is currently locked to A4 --- a message box reminds the user of this on each print job.

## Properties

### Appearance

Determines how the report's border is drawn by the OS. A member of [**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants): **vbAppearFlat** or **vbAppear3d** (default).

::: info
Retained for VB6 compatibility; the property has no observable effect on a report window.
:::

### AutoRedraw

Whether drawing performed on the report's window persists across invalidations. **Boolean**, default **False**. Reports normally rely on per-section painting through [**BeforePaintSection**](#beforepaintsection), so this property is rarely useful; it is provided for parity with [**Form**](/official/Reference/VB/Form/).

### BackColor

The background colour of the report window's drawing surface, as an **OLE_COLOR**. Defaults to the system 3-D face colour. Most of the window is occupied by the page preview (which uses [**PaperColor**](#papercolor)) and the toolbar, so this colour is only visible briefly during paint.

### BorderStyle

The window-frame style. A member of [**FormBorderStyleConstants**](/official/Reference/VBRUN/Constants/FormBorderStyleConstants): **vbBSNone**, **vbFixedSingle**, **vbSizable** (default), **vbFixedDialog**, **vbFixedToolWindow**, **vbSizableToolWindow**, **vbSizableNoTitleBar**, or **vbSizableToolWindowNoTitleBar**.

### Caption

The title-bar text. **String**. Also returned by the `%i` [caption placeholder](#caption-placeholders) and reachable from a `=Report.Caption` expression in a label's `DataField`.

### ChangePageSize

::: info
Design-time helper. Selecting a value from the IDE property grid sets [**PixelsReportWidth**](#pixelsreportwidth) and [**PixelsReportHeight**](#pixelsreportheight) to the corresponding paper size; the property itself has no run-time effect and always reads back as blank.
:::

A member of **ReportSizeConstants**: blank (default), **A4 Portrait**, **A4 Landscape**, **A3 Portrait**, **A3 Landscape**, **A5 Portrait**, **A5 Landscape**, **Letter Portrait**, **Letter Landscape**, **Tabloid Portrait**, **Tabloid Landscape**, **Legal Portrait**, **Legal Landscape**, **Statement Portrait**, **Statement Landscape**, **Executive Portrait**, **Executive Landscape**.

### ClipControls

Whether child controls are clipped out of the report window's drawing region during paint. **Boolean**, default **True**. Read-only at run time --- set at design time.

### ControlBox

Whether the title bar shows the system menu (and, with it, the close button). **Boolean**, default **True**.

### Controls

The collection of every control hosted by this report's sections, indexable by control name or zero-based position. **Default property.** Read-only --- controls are added to the collection by the runtime, not by user code.

### ControlType

A read-only [**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants) value identifying this object as a report. Always **vbReport**.

### Count

The number of controls in [**Controls**](#controls), as a **Long**. Read-only. Equivalent to `Me.Controls.Count`.

### CurrentX

The horizontal pen position used by drawing primitives that omit a starting coordinate, in [**ScaleMode**](#scalemode) units. **Double**.

### CurrentY

The vertical pen position used by drawing primitives that omit a starting coordinate, in [**ScaleMode**](#scalemode) units. **Double**.

### DpiScaleFactorX

The horizontal DPI scale factor of the monitor the report window is currently on, as a **Double**. `1.0` at 96 DPI, `1.25` at 120 DPI, and so on. Read-only.

### DpiScaleFactorY

The vertical DPI scale factor of the monitor the report window is currently on. Currently always equal to [**DpiScaleFactorX**](#dpiscalefactorx). Read-only.

### DrawMode

The raster operation that drawing primitives apply when combining the pen with the destination. A member of [**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants): **vbCopyPen** (default) is normal opaque drawing.

### DrawStyle

The pen line pattern used by drawing primitives. A member of [**DrawStyleConstants**](/official/Reference/VBRUN/Constants/DrawStyleConstants): **vbSolid** (default), **vbDash**, **vbDot**, **vbDashDot**, **vbDashDotDot**, **vbInvisible**, or **vbInsideSolid**.

### DrawWidth

The pen width in pixels for drawing primitives. **Long**, default `1`. Widths greater than `1` force [**DrawStyle**](#drawstyle) back to **vbSolid** (a Win32 GDI limitation).

### Enabled

Determines whether the report window accepts user input. A disabled report ignores keyboard and mouse input --- including the toolbar buttons. **Boolean**, default **True**.

### FillColor

The fill colour for closed shapes drawn by [**Circle**](#circle) and the rectangle form of [**Line**](#line). **OLE_COLOR**, default `0` (black). Used only when [**FillStyle**](#fillstyle) is not **vbFSTransparent**.

### FillStyle

The fill pattern for closed shapes. A member of [**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants): **vbFSSolid**, **vbFSTransparent** (default), **vbHorizontalLine**, **vbVerticalLine**, **vbUpwardDiagonal**, **vbDownwardDiagonal**, **vbCross**, or **vbDiagonalCross**.

### Font

The **StdFont** used by the [**Print**](#print) statement and other text drawing on this report. The convenience properties **FontName**, **FontSize**, **FontBold**, **FontItalic**, **FontStrikethru**, and **FontUnderline** read or write the corresponding members of this object.

### FontTransparent

When **True** (default), text drawn on the report has a transparent background, leaving the underlying drawing visible behind it. When **False**, text is drawn over an opaque rectangle filled with [**BackColor**](#backcolor). **Boolean**.

### ForeColor

The pen colour used by [**Circle**](#circle), [**Line**](#line), [**PSet**](#pset), and the text drawn by [**Print**](#print). **OLE_COLOR**.

### hDC

The Win32 device context handle currently relevant to drawing, as a **LongPtr**. Read-only. Inside a [**BeforePaintSection**](#beforepaintsection) handler, returns the metafile DC that the section is being recorded into; outside the event, returns the report window's own DC. Returns `0` when the underlying window has not yet been created.

### HasDC

Whether the report window keeps a private device context (`CS_OWNDC`) for its drawing surface. **Boolean**, default **True**. Read-only at run time --- set at design time.

### Height

The report window's outer height, in twips. **Double**. Setting it resizes the window. Constrained at run time by [**MinHeight**](#minheight) and [**MaxHeight**](#maxheight) when those are non-zero.

### HelpContextID

A **Long** identifying a topic in the application's help file, retrieved when the user presses **F1** while the report has focus.

### hWnd

The Win32 window handle for the report, as a **LongPtr**. Read-only. Useful for passing to API functions.

### Icon

The icon shown on the title bar, in the taskbar, and in Alt-Tab. A **StdPicture** of type **vbPicTypeIcon**.

### Image

Returns the rendered drawing surface as a **StdPicture**. Read-only. Most useful when [**AutoRedraw**](#autoredraw) is **True**.

### KeyPreview

When **True**, the report's [**KeyDown**](#keydown), [**KeyUp**](#keyup), and [**KeyPress**](#keypress) events fire *before* the focused control receives the same keystroke. **Boolean**, default **False**.

### Left

The horizontal position of the report window's outer rectangle, in twips, measured from the left edge of the screen --- or, for an MDI child, from the left edge of the MDI parent's client area. **Double**.

### MaxButton

Whether the title bar shows the maximise button. **Boolean**, default **True**, read-only at run time. Set at design time.

### MaxHeight

The maximum height of the report window's *client area*, in twips. **Double**, default `0` (no limit). Honoured during interactive resizing.

### MaxWidth

The maximum width of the report window's *client area*, in twips. **Double**, default `0` (no limit). Honoured during interactive resizing.

### MDIChild

When **True**, the report is hosted as a child inside an [**MDIForm**](/official/Reference/VB/MDIForm/). **Boolean**, read-only --- set at design time. An MDI child report cannot be shown modally.

### MinButton

Whether the title bar shows the minimise button. **Boolean**, default **True**, read-only at run time. Set at design time.

### MinHeight

The minimum height of the report window's *client area*, in twips. **Double**, default `0` (no limit). Honoured during interactive resizing.

### MinWidth

The minimum width of the report window's *client area*, in twips. **Double**, default `0` (no limit). Honoured during interactive resizing.

### MouseIcon

A **StdPicture** used as the mouse cursor when [**MousePointer**](#mousepointer) is **vbCustom** and the pointer is over the report.

### MousePointer

The mouse cursor shown when the pointer is over the report. A member of [**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants).

### Moveable

Whether the user can drag the report window by its title bar. **Boolean**, default **True**.

### Name

The unique design-time name of the report. Read-only at run time. Also the class name of the generated report class.

### Opacity

The report window's opacity as a percentage (0--100, default 100). Values outside the range are clamped on **Initialize**. Values below 100 cause the window to become a layered window.

### Page

The current page number being previewed (1-based). **Long**. Setting **Page** scrolls the preview to that page. Assigning `-1` jumps to the last page (rendering and caching all intermediate pages first). Reachable from a `=Report.Page` expression in a label's **DataField**, or via the `%p` [caption placeholder](#caption-placeholders).

### Pages

The total number of pages in the report. **Long**. Initialised to `999` and revised down once the framework has rendered enough pages to know the actual count. Reachable from a `=Report.Pages` expression in a label's **DataField**, or via the `%P` [caption placeholder](#caption-placeholders).

### PaperColor

The colour of the simulated paper behind the rendered page in the preview. **OLE_COLOR**, default **vbWhite**.

::: info
This affects the *preview* only --- it does not change the colour sent to the printer.
:::

### Picture

A **StdPicture** drawn as the report window's background. Painted before any drawing primitives or child controls. Assigning **Nothing** removes the background.

### PictureDpiScaling

When **True**, [**Picture**](#picture) is scaled by the current DPI factor before drawing. **Boolean**, default **False**.

### PixelsBottomMargin

The bottom page margin, in scaled pixels. **Double**, default `96 / 2.54` (≈ 1 cm). Stored in the form file as `BottomMargin`.

### PixelsLeftMargin

The left page margin, in scaled pixels. **Double**, default `96 / 2.54` (≈ 1 cm). Stored in the form file as `LeftMargin`.

### PixelsReportHeight

The page content height (between the top and bottom margins), in scaled pixels. **Double**, default `900`. Stored in the form file as `ReportHeight`.

### PixelsReportWidth

The page content width (between the left and right margins), in scaled pixels. **Double**, default `300`. Stored in the form file as `ReportWidth`.

### PixelsRightMargin

The right page margin, in scaled pixels. **Double**, default `96 / 2.54` (≈ 1 cm). Stored in the form file as `RightMargin`.

### PixelsTopMargin

The top page margin, in scaled pixels. **Double**, default `96 / 2.54` (≈ 1 cm). Stored in the form file as `TopMargin`.

### Recordset

The data source iterated for the detail section. Set with **Set**.

Syntax: **Set** *object*.**Recordset** = *value*

*value*
: Any object with `EOF`, `MoveNext`, and a `Fields` collection (a tB **ITbRecordset** is used directly; other recordsets are wrapped transparently). May be **Nothing**, in which case the detail section is rendered exactly once with no field data.

Assigning **Recordset** does not by itself reset paging --- call `Page = 1` (or **Refresh**) to start the preview at the new first page.

### RecordNum

The 1-based ordinal of the record currently being processed by the detail section. **Long**. Updated by the framework as it iterates the recordset; useful inside expressions and [**BeforePaintSection**](#beforepaintsection) handlers.

### RightToLeft

::: info
Reserved for compatibility with VB6; not currently implemented in twinBASIC.
:::

### ScaleHeight

The height of the logical drawing rectangle, in [**ScaleMode**](#scalemode) units. **Double**. Setting it (or [**ScaleWidth**](#scalewidth), [**ScaleLeft**](#scaleleft), or [**ScaleTop**](#scaletop)) implicitly switches **ScaleMode** to **vbUser**.

### ScaleLeft

The logical horizontal coordinate of the left edge of the report window's client area, in [**ScaleMode**](#scalemode) units. **Double**, default `0`.

### ScaleMode

The unit of measurement used by [**CurrentX**](#currentx), [**CurrentY**](#currenty), the drawing primitives, [**TextWidth**](#textwidth), and [**TextHeight**](#textheight). A member of [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants): **vbTwips** (default), **vbPoints**, **vbPixels**, **vbCharacters**, **vbInches**, **vbMillimeters**, **vbCentimeters**, or **vbUser**.

### ScaleTop

The logical vertical coordinate of the top edge of the report window's client area, in [**ScaleMode**](#scalemode) units. **Double**, default `0`.

### ScaleWidth

The width of the logical drawing rectangle, in [**ScaleMode**](#scalemode) units. **Double**.

### ShowInTaskbar

Whether the report window appears in the Windows taskbar and Alt-Tab list. **Boolean**, default **True**. Read-only at run time --- set at design time.

### StartUpPosition

How the report window's initial position is determined the first time it is shown. A member of [**StartUpPositionConstants**](/official/Reference/VBRUN/Constants/StartUpPositionConstants): **vbStartUpManual**, **vbStartUpOwner**, **vbStartUpScreen**, or **vbStartUpWindowsDefault** (default). Read-only at run time --- set at design time.

### Tag

A free-form **String** the application can use to associate custom data with the report. Ignored by the framework.

### Top

The vertical position of the report window's outer rectangle, in twips, measured from the top edge of the screen --- or, for an MDI child, from the top edge of the MDI parent's client area. **Double**.

### TopMost

Whether the report window sits in the always-on-top z-order layer. **Boolean**, read-only.

### TransparencyKey

An **OLE_COLOR** that, when set, becomes fully transparent in the rendered report window --- clicks pass through to whatever is underneath, and the corresponding pixels do not paint. Default `-1` disables the effect.

### Visible

Whether the report window is shown. **Boolean**, default **True**. Setting **Visible** to **True** when the report was hidden is equivalent to calling [**Show**](#show) **vbModeless**; setting it to **False** is equivalent to calling [**Hide**](#hide).

### Width

The report window's outer width, in twips. **Double**. Setting it resizes the window. Constrained at run time by [**MinWidth**](#minwidth) and [**MaxWidth**](#maxwidth) when those are non-zero.

### WindowState

The window's normal/minimised/maximised state. A member of [**FormWindowStateConstants**](/official/Reference/VBRUN/Constants/FormWindowStateConstants): **vbNormal** (0, default), **vbMinimized** (1), or **vbMaximized** (2). Setting it at run time updates the window placement immediately if the report is visible.

### ZoomAutoFit

Selects how [**ZoomPercent**](#zoompercent) is updated automatically. A member of **ZoomAutoFitConstants** (see [Zoom and page sizing](#zoom-and-page-sizing)): **vbZoomAutoFit** (0, default), **vbZoomAutoFitOnce** (1), or **vbZoomAutoFitNever** (2). The toolbar's plus and minus buttons switch this to **vbZoomAutoFitNever**.

### ZoomPercent

The current rendering zoom, as a percentage. **Double**, default `100`. When [**ZoomAutoFit**](#zoomautofit) is **vbZoomAutoFit** or **vbZoomAutoFitOnce**, the framework recomputes this value before painting; the toolbar's plus and minus buttons add or subtract [**ZoomStep**](#zoomstep).

### ZoomStep

The amount by which [**ZoomPercent**](#zoompercent) changes for each click of the toolbar's plus or minus button. **Long**, default `10`.

## Methods

### Circle

Draws a circle, ellipse, or arc on the current drawing surface (see [**hDC**](#hdc)) using [**ForeColor**](#forecolor) for the outline and [**FillColor**](#fillcolor)/[**FillStyle**](#fillstyle) for the interior.

Syntax: *object*.**Circle** [ **Step** ] ( *X*, *Y* ), *Radius* [, [ *Color* ] [, [ *Start* ] [, [ *End* ] [, *Aspect* ] ] ] ]

*X*, *Y*
: *required* The centre, in [**ScaleMode**](#scalemode) units. **Step** makes the centre relative to ([**CurrentX**](#currentx), [**CurrentY**](#currenty)).

*Radius*
: *required* A **Single** giving the radius in **ScaleMode** units.

*Color*
: *optional* An **OLE_COLOR** for the outline; defaults to [**ForeColor**](#forecolor).

*Start*, *End*
: *optional* Angles in radians, used to draw an arc rather than a full circle.

*Aspect*
: *optional* Ratio of vertical to horizontal radius. `1.0` is circular; values away from `1.0` produce ellipses.

### Close

Initiates the report window's unload sequence --- [**QueryUnload**](#queryunload), then [**Unload**](#unload), then [**Terminate**](#terminate). Either of the first two events can cancel the close by setting *Cancel* to non-zero.

Syntax: *object*.**Close**

### Cls

Clears any drawing performed by [**Circle**](#circle), [**Line**](#line), [**PSet**](#pset), [**PaintPicture**](#paintpicture), and [**Print**](#print) on the current drawing surface, repaints [**BackColor**](#backcolor), and resets [**CurrentX**](#currentx) / [**CurrentY**](#currenty) to `0`.

Syntax: *object*.**Cls**

### Hide

Hides the report window without unloading it. The class instance and its sections are preserved; calling [**Show**](#show) (or assigning [**Visible**](#visible) = **True**) brings it back. Equivalent to assigning **Visible** = **False**.

Syntax: *object*.**Hide**

### Line

Draws a line, or a rectangle, on the current drawing surface (see [**hDC**](#hdc)) using [**ForeColor**](#forecolor) (or an explicit colour) and [**DrawWidth**](#drawwidth)/[**DrawStyle**](#drawstyle).

Syntax: *object*.**Line** [ [ **Step** ] ( *X1*, *Y1* ) ] -[ **Step** ] ( *X2*, *Y2* ) [, [ *Color* ] [, **B** [ **F** ] ] ]

*X1*, *Y1*
: *optional* The start point, in [**ScaleMode**](#scalemode) units. When omitted, drawing begins from the current pen position.

*X2*, *Y2*
: *required* The end point, in **ScaleMode** units. **Step** makes the point relative to (*X1*, *Y1*).

*Color*
: *optional* An **OLE_COLOR** for the line; defaults to [**ForeColor**](#forecolor).

**B**
: *optional* Draw a rectangle whose opposite corners are (*X1*, *Y1*) and (*X2*, *Y2*).

**F**
: *optional* When combined with **B**, fill the rectangle with [**ForeColor**](#forecolor) instead of [**FillColor**](#fillcolor)/[**FillStyle**](#fillstyle).

### Move

Repositions and optionally resizes the report window in a single call.

Syntax: *object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *required* A **Single** giving the new horizontal position.

*Top*, *Width*, *Height*
: *optional* New values for the corresponding properties. Omitted values are left unchanged.

### PaintPicture

Draws a **StdPicture** onto the current drawing surface, with optional scaling and raster operations.

Syntax: *object*.**PaintPicture** *Picture*, *X1*, *Y1* [, *Width1* [, *Height1* [, *X2* [, *Y2* [, *Width2* [, *Height2* [, *Opcode* [, *StretchQuality* ] ] ] ] ] ] ] ]

*Picture*
: *required* A **StdPicture** to draw.

*X1*, *Y1*
: *required* The destination upper-left corner, in [**ScaleMode**](#scalemode) units.

*Width1*, *Height1*
: *optional* Destination size; defaults to the picture's natural size.

*X2*, *Y2*, *Width2*, *Height2*
: *optional* The source rectangle within the picture; defaults to the whole picture.

*Opcode*
: *optional* A raster-operation code (member of [**RasterOpConstants**](/official/Reference/VBRUN/Constants/RasterOpConstants)). Defaults to **vbSrcCopy**.

*StretchQuality*
: *optional* The interpolation method when scaling. Defaults to normal quality.

### Print

Writes text to the current drawing surface using [**Font**](#font), starting at [**CurrentX**](#currentx) / [**CurrentY**](#currenty) and advancing them as it goes. Inside a [**BeforePaintSection**](#beforepaintsection) handler the text appears on the section being painted; outside it, the text is drawn directly on the report window.

Syntax: *object*.**Print** \[ *expressionlist* ] \[ **;** \| **,** ]

A trailing `;` or `,` suppresses the newline so the next **Print** call continues on the same line. **Print** is the language-level statement, not a function call --- multiple expressions can be separated by `;` (no spacing) or `,` (tab to the next print zone), and **Spc(n)** / **Tab(n)** insert spaces or move to a column.

::: info
To send a report to the printer, use [**PrintReport**](#printreport) --- not **Print**.
:::

### PrintReport

Sends every page of the report to the [**Printer**](/official/Reference/VB/Printer/) object. Iterates from page 1 to the last page, generating each cached metafile in turn.

Syntax: *object*.**PrintReport** [ *ShowDialog* [, *Range* [, *PageFrom* [, *PageTo* ] ] ] ]

*ShowDialog*
: *optional* When **True** (default), display the standard print dialog before printing. **Not yet supported** --- calling **PrintReport** with **ShowDialog := True** raises run-time error 5.

*Range*
: *optional* A member of **PageRangeConstants**: **rptRangeAllPages** (0, default) or **rptRangeFromTo** (1).

*PageFrom*, *PageTo*
: *optional* When *Range* is **rptRangeFromTo**, the inclusive page range to print.

::: info
The printer paper size is currently locked to A4 in this beta.
:::

### PSet

Sets a single pixel on the current drawing surface to a specified colour.

Syntax: *object*.**PSet** [ **Step** ] ( *X*, *Y* ) [, *Color* ]

*X*, *Y*
: *required* The pixel position, in [**ScaleMode**](#scalemode) units. **Step** makes the position relative to ([**CurrentX**](#currentx), [**CurrentY**](#currenty)).

*Color*
: *optional* An **OLE_COLOR**; defaults to [**ForeColor**](#forecolor).

### Refresh

Forces an immediate repaint of the report window.

Syntax: *object*.**Refresh**

### Scale

Sets the report window's logical drawing rectangle in a single call by assigning [**ScaleLeft**](#scaleleft), [**ScaleTop**](#scaletop), [**ScaleWidth**](#scalewidth), and [**ScaleHeight**](#scaleheight). Switches [**ScaleMode**](#scalemode) to **vbUser**. Calling **Scale** with no arguments resets the rectangle to a 1-to-1 mapping with the client area in pixels.

Syntax: *object*.**Scale** [ ( *X1*, *Y1* )-( *X2*, *Y2* ) ]

*X1*, *Y1*
: *optional* The logical coordinate at the top-left corner.

*X2*, *Y2*
: *optional* The logical coordinate at the bottom-right corner.

### ScaleX

Converts a horizontal length from one [**ScaleMode**](#scalemode) to another.

Syntax: *object*.**ScaleX**( *Width* [, *FromScale* [, *ToScale* ] ] )

*Width*
: *required* A **Single** giving the source length.

*FromScale*, *ToScale*
: *optional* Members of [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants). Default to the current **ScaleMode** when omitted.

### ScaleY

Converts a vertical length from one [**ScaleMode**](#scalemode) to another.

Syntax: *object*.**ScaleY**( *Height* [, *FromScale* [, *ToScale* ] ] )

*Height*
: *required* A **Single** giving the source length.

*FromScale*, *ToScale*
: *optional* Members of [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants). Default to the current **ScaleMode** when omitted.

### SetFocus

Activates the report window and gives input focus to the control whose **TabIndex** is `0` (or to whichever control last held focus).

Syntax: *object*.**SetFocus**

### Show

Makes the report window visible. Triggers [**Load**](#load) on the first call.

Syntax: *object*.**Show** [ *Modal* [, *OwnerForm* ] ]

*Modal*
: *optional* A member of [**FormShowConstants**](/official/Reference/VBRUN/Constants/FormShowConstants): **vbModeless** (0, default --- the call returns immediately) or **vbModal** (1 --- the call blocks until the report is closed).

*OwnerForm*
: *optional* For modal shows, the form that is disabled while the report is up; defaults to the currently active form.

### TextHeight

Returns the height that the given string would occupy when drawn with the report's current [**Font**](#font), in [**ScaleMode**](#scalemode) units.

Syntax: *object*.**TextHeight**( *Str* )

*Str*
: *required* A **String** to measure.

### TextWidth

Returns the width that the given string would occupy when drawn with the report's current [**Font**](#font), in [**ScaleMode**](#scalemode) units.

Syntax: *object*.**TextWidth**( *Str* )

*Str*
: *required* A **String** to measure.

### ZOrder

Brings the report window to the front or back of the top-level z-order.

Syntax: *object*.**ZOrder** [ *Position* ]

*Position*
: *optional* A member of [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants): **vbBringToFront** (0, default) or **vbSendToBack** (1).

## Events

### Activate

Raised when the report window becomes the active window in the application --- either after [**Load**](#load) for the first show, or whenever it gains activation back from another window.

Syntax: *object*\_**Activate**( )

### BeforePaintSection

Raised once for each section as it is rendered, before the framework draws the controls in that section. Inside the handler, [**hDC**](#hdc) returns the metafile device context the section is being recorded into, so any drawing primitives ([**Line**](#line), [**Circle**](#circle), [**Print**](#print), …) or direct GDI calls write straight into the section.

Syntax: *object*\_**BeforePaintSection**( *Section* **As ControlsSection** )

*Section*
: The section currently being painted. Inspect *Section*`.SectionType` (**ReportHeader**, **PageHeader**, **Detail**, **PageFooter**, or **ReportFooter**) to discriminate.

### Click

Raised when the user single-clicks the report window's client area (i.e. not over the toolbar or any child control).

Syntax: *object*\_**Click**( )

### DblClick

Raised when the user double-clicks the report window's client area.

Syntax: *object*\_**DblClick**( )

### Deactivate

Raised when another window in the application takes activation away from this report. Not raised when activation moves to a window in a different application.

Syntax: *object*\_**Deactivate**( )

### DPIChange

Raised when the report window moves to a monitor with a different DPI scale, *but only* when the application is per-monitor DPI aware (`PROCESS_PER_MONITOR_DPI_AWARE`). The event's *NewDPI* argument gives the new effective DPI.

Syntax: *object*\_**DPIChange**( *NewDPI* **As Long** )

### GotFocus

Raised when the report window receives the input focus and no enabled child control of the report is in a position to take it instead.

Syntax: *object*\_**GotFocus**( )

### Initialize

Raised once, before the underlying window is created and before any of the report's controls exist. Useful for setting initial values on report-level fields.

Syntax: *object*\_**Initialize**( )

### KeyDown

Raised when the user presses any key. Fires on the focused control by default; with [**KeyPreview**](#keypreview) **True**, fires on the report first.

Syntax: *object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

Raised when the user types a character that produces an ANSI keystroke. Fires on the focused control by default; with [**KeyPreview**](#keypreview) **True**, fires on the report first.

Syntax: *object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

Raised when the user releases a key. Fires on the focused control by default; with [**KeyPreview**](#keypreview) **True**, fires on the report first.

Syntax: *object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### Load

Raised after the report's window and all section controls have been created, just before the report first appears on screen. The classic place to assign [**Recordset**](#recordset) and perform any initialisation that needs the controls to exist. **Default event.**

Syntax: *object*\_**Load**( )

### LostFocus

Raised when the report window loses the input focus.

Syntax: *object*\_**LostFocus**( )

### MouseDown

Raised when the user presses any mouse button over the report window's client area.

Syntax: *object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

Raised when the cursor moves over the report window's client area.

Syntax: *object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

Raised when the user releases a mouse button over the report window's client area.

Syntax: *object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### QueryUnload

Raised before the report unloads, giving the application a chance to confirm or cancel the close. Setting *Cancel* to non-zero keeps the report open. Always raised before [**Unload**](#unload).

Syntax: *object*\_**QueryUnload**( *Cancel* **As Integer**, *UnloadMode* **As Integer** )

*Cancel*
: Set to non-zero (any non-zero value, conventionally **1**) to cancel the close.

*UnloadMode*
: A member of [**QueryUnloadConstants**](/official/Reference/VBRUN/Constants/QueryUnloadConstants) identifying what triggered the close.

### Resize

Raised when the report window is resized --- by the user, by code, by the OS following a [**WindowState**](#windowstate) change, or by initial layout during the first show.

Syntax: *object*\_**Resize**( )

### Terminate

Raised after the report window has been destroyed and the class instance is about to be released. The controls are no longer accessible at this point.

Syntax: *object*\_**Terminate**( )

### Unload

Raised after [**QueryUnload**](#queryunload) approves and before the report window is destroyed. Setting *Cancel* to non-zero keeps the report open and prevents the unload.

Syntax: *object*\_**Unload**( *Cancel* **As Integer** )

*Cancel*
: Set to non-zero (any non-zero value, conventionally **1**) to cancel the unload.
