---
title: PictureBox
parent: VB Package
permalink: /tB/Packages/VB/PictureBox/
---

# PictureBox class

A **PictureBox** is a Win32 native control that combines three roles in one:

1. A **picture display** --- it can show a bitmap, GIF, JPEG, icon, cursor, or metafile loaded into its [**Picture**](#picture) property.
2. A **drawing surface** --- it exposes the VB6 graphics methods ([**Line**](#line), [**Circle**](#circle), [**PSet**](#pset), [**Print**](#print), [**PaintPicture**](#paintpicture), …) that write into the control's device context.
3. A **container** --- it can host child controls dropped onto it at design time, much like a [**Frame**](/official/Reference/VB/Frame/), and can be docked or aligned within its parent.

The control is normally placed on a [**Form**](/official/Reference/VB/Form/), [**Frame**](/official/Reference/VB/Frame/), or **UserControl** at design time. The default property is [**Picture**](#picture); the default-designer event is [**Click**](#click).

```vb
Private Sub Form_Load()
    Set picLogo.Picture = LoadPicture(App.Path & "\logo.png")
    picLogo.AutoSize = True

    picCanvas.AutoRedraw = True
    picCanvas.ScaleMode = vbPixels
    picCanvas.Line (0, 0)-(picCanvas.ScaleWidth, picCanvas.ScaleHeight), vbRed, B
    picCanvas.Print "Hello, world!"
End Sub
```


## Picture display

Setting [**Picture**](#picture) assigns a **StdPicture** to the control. When [**AutoSize**](#autosize) is **True** the control resizes itself in its container's **ScaleMode** units to fit the picture exactly (plus a 1- or 2-pixel border, depending on [**Appearance**](#appearance)); otherwise the picture is drawn at its natural size, anchored at the top-left, and clipped to the control's bounds. Assigning **Nothing** to **Picture** clears the displayed image but does not erase anything drawn through the graphics methods.

The picture is read directly from the file passed to **LoadPicture**, or --- when [**DataField**](#datafield) / [**DataSource**](#datasource) are set --- from the bound recordset field. Anything assigned to **\_Default** (the control's default property) is forwarded to **Picture**.

## Drawing surface

A **PictureBox** owns its own device context, addressable through [**hDC**](#hdc), and supports the full VB6 vector-drawing surface: [**Cls**](#cls), [**Line**](#line), [**Circle**](#circle), [**PSet**](#pset), [**Print**](#print), and [**PaintPicture**](#paintpicture). Pen and brush attributes come from [**ForeColor**](#forecolor), [**BackColor**](#backcolor), [**FillColor**](#fillcolor), [**FillStyle**](#fillstyle), [**DrawWidth**](#drawwidth), [**DrawMode**](#drawmode), and [**DrawStyle**](#drawstyle). [**CurrentX**](#currentx) and [**CurrentY**](#currenty) track the current "graphics pen" position so that subsequent calls can omit the starting coordinates.

```vb
picCanvas.Line (10, 10)-Step(100, 50), vbBlue, BF   ' filled rectangle
picCanvas.Circle (200, 100), 40, vbGreen            ' circle
picCanvas.CurrentX = 10 : picCanvas.CurrentY = 100
picCanvas.Print "Drawn over a Picture"              ' text at the pen
```

[**Print**](#print) is dispatched through the IDispatch interface using the VB6 *Print* statement syntax (`pic.Print expr [, ;] expr …`), with **Spc(n)** and **Tab(n)** for whitespace and column control. Calls advance [**CurrentX**](#currentx) / [**CurrentY**](#currenty) and honour [**Font**](#font), [**ForeColor**](#forecolor), and [**FontTransparent**](#fonttransparent).

## AutoRedraw and the persistent image

When [**AutoRedraw**](#autoredraw) is **False** (default) the graphics methods write directly into the visible device context, and the OS may erase that drawing whenever the control is uncovered, resized, or redrawn --- typically the application redraws it from a [**Paint**](#paint) handler.

When [**AutoRedraw**](#autoredraw) is **True**, the graphics methods are recorded into an off-screen persistent bitmap that is automatically blitted onto the control whenever it needs repainting. The control no longer raises [**Paint**](#paint) events; the bitmap is exposed read-only through [**Image**](#image), suitable for saving with **SavePicture** or for assigning to another **PictureBox** or [**Image**](/official/Reference/VB/Image/) control. Toggling **AutoRedraw** from **False** to **True** preserves the current contents; toggling it back to **False** discards the persistent bitmap.

## Coordinate system

A **PictureBox** has its own coordinate system, independent of its parent. [**ScaleMode**](#scalemode) selects a built-in unit ([**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants) --- **vbTwips**, **vbPoints**, **vbPixels**, **vbCharacters**, **vbInches**, **vbMillimeters**, **vbCentimeters**); assigning [**ScaleLeft**](#scaleleft), [**ScaleTop**](#scaletop), [**ScaleWidth**](#scalewidth), or [**ScaleHeight**](#scaleheight) (or calling [**Scale**](#scale) with two corner points) switches to **vbUser** and remaps the surface so the assigned values address the corners directly --- useful for mathematical plots where the natural axes don't match pixel coordinates.

[**ScaleX**](#scalex) and [**ScaleY**](#scaley) convert distances between any two scale modes without changing the active one.

## Container behaviour

Controls dropped onto a **PictureBox** at design time become its children: their coordinates are relative to its client area, and they move and hide with it. [**Container**](#container) returns the immediate parent (a form, frame, or another picture box); [**Parent**](#parent) returns the form that ultimately hosts it. [**ClipControls**](#clipcontrols) decides whether child controls are clipped out of paint regions before the [**Paint**](#paint) handler runs; turning it off can speed up graphics-heavy paint code that touches only areas the child controls don't cover.

## Data binding

Setting [**DataSource**](#datasource) and [**DataField**](#datafield) binds the control's [**Picture**](#picture) to a binary field of a [**Data**](/official/Reference/VB/Data/) control's recordset: the field is read on each row change and **LoadPicture** is called on it, and the round-trip byte representation of the current **Picture** is written back when the row is saved. [**DataChanged**](#datachanged) is set whenever the user modifies the displayed picture.

## Properties

### Align

::: info
Hidden. Provided for compatibility with VB6 forms that anchored a picture box to one edge of the form. Use [**Dock**](#dock) and [**Anchors**](#anchors) instead.
:::

### Anchors

The set of edges of the parent that the picture box's corresponding edges follow when the parent resizes. Read-only --- assign individual `.Left`, `.Top`, `.Right`, `.Bottom` flags through the returned **Anchors** object.

### Appearance

Determines how the border is drawn by the OS. A member of [**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants): **vbAppearFlat** or **vbAppear3d** (default). Only meaningful when [**BorderStyle**](#borderstyle) is **vbFixedSingleBorder**.

### AutoRedraw

Controls whether graphics output is recorded into a persistent bitmap. **Boolean**, default **False**. See [AutoRedraw and the persistent image](#autoredraw-and-the-persistent-image).

### AutoSize

When **True**, the control resizes itself to fit the assigned [**Picture**](#picture). **Boolean**, default **False**. Has no effect when [**Picture**](#picture) is **Nothing**.

### BackColor

The background colour of the control's drawing surface, as an **OLE_COLOR**. Defaults to the system 3-D face colour. Assigning a new value invalidates the surface and triggers a repaint.

### BorderStyle

Whether the picture box is drawn with a border. A member of [**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants): **vbNoBorder** (0) or **vbFixedSingleBorder** (1, default). The exact appearance of the border depends on [**Appearance**](#appearance).

### CausesValidation

Determines whether the previously focused control's [**Validate**](#validate) event runs before this control receives the focus. **Boolean**, default **True**.

### ClipControls

When **True** (default), child controls are clipped out of the picture box's painting region before the [**Paint**](#paint) event fires, so drawing commands cannot overpaint them. Setting **False** allows the [**Paint**](#paint) handler to draw across the entire client area, which is faster when the application knows the contained controls do not overlap the drawn region.

### Container

The control that hosts this picture box --- typically the form, a [**Frame**](/official/Reference/VB/Frame/), or another picture box. Read with **Get**, change with **Set**. Setting **Container** at run time re-parents the picture box.

### ControlType

A read-only [**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants) value identifying this control as a picture box. Always **vbPictureBox**.

### CurrentX

The horizontal coordinate, in [**ScaleMode**](#scalemode) units, at which the next graphics call will start unless it overrides it. **Single**. Updated automatically by [**Line**](#line), [**Circle**](#circle), [**PSet**](#pset), [**Print**](#print), and [**Cls**](#cls) (which resets it to 0).

### CurrentY

The vertical coordinate, in [**ScaleMode**](#scalemode) units, at which the next graphics call will start. **Single**. See [**CurrentX**](#currentx).

### DataChanged

A run-time-only **Boolean** that becomes **True** when the bound picture has been modified since the last save, and is cleared once the change has been written back to the recordset.

### DataField

The name of the binary field, in the recordset of the bound [**DataSource**](#datasource), whose contents are loaded into [**Picture**](#picture). **String**.

### DataFormat

A **StdDataFormat** that converts between the raw recordset value and the displayed picture, when the application needs custom handling. **Object**. Set with **Set**.

### DataMember

When the [**DataSource**](#datasource) exposes more than one recordset, the name of the member to bind to. **String**.

### DataSource

A reference to a [**Data**](/official/Reference/VB/Data/) control (or other **DataSource** provider) whose recordset supplies the value for [**DataField**](#datafield). Set with **Set**.

### Dock

Where the picture box is docked within its container. A member of [**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants): **vbDockNone** (default), **vbDockLeft**, **vbDockTop**, **vbDockRight**, **vbDockBottom**, or **vbDockFill**. Docked picture boxes ignore [**Anchors**](#anchors).

### DragIcon

A **StdPicture** used as the mouse cursor while the control is being drag-and-dropped (see [**Drag**](#drag) and [**DragMode**](#dragmode)).

### DragMode

Whether the control should drag itself when the user holds the mouse over it. A member of [**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants): **vbManual** (0, default --- call [**Drag**](#drag) from code) or **vbAutomatic** (1).

### DrawMode

The raster operation used when drawing through the graphics methods. A member of [**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants), default **vbCopyPen** (13 --- opaque overwrite).

### DrawStyle

The pen style used for line-drawing methods. A member of [**DrawStyleConstants**](/official/Reference/VBRUN/Constants/DrawStyleConstants): **vbSolid** (0, default), **vbDash**, **vbDot**, **vbDashDot**, **vbDashDotDot**, **vbInvisible**, or **vbInsideSolid**. Solid is forced when [**DrawWidth**](#drawwidth) is greater than 1.

### DrawWidth

The thickness, in pixels, of the pen used by [**Line**](#line), [**Circle**](#circle), and [**PSet**](#pset). **Long**, default 1. Values greater than 1 force [**DrawStyle**](#drawstyle) to **vbSolid**.

### Enabled

Determines whether the control accepts user input. **Boolean**, default **True**. Disabled picture boxes still draw and display their picture, but do not raise mouse, keyboard, or focus events.

### FillColor

The colour used to fill closed shapes drawn by [**Line**](#line) (with the `F` flag) and [**Circle**](#circle), as an **OLE_COLOR**. Default **0** (black). Honoured only when [**FillStyle**](#fillstyle) is not **vbFSTransparent**.

### FillStyle

The pattern used to fill closed shapes. A member of [**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants): **vbFSTransparent** (1, default), **vbFSSolid** (0), or one of the hatched styles. **Transparent** suppresses fill entirely, so only the outline is drawn.

### Font

The **StdFont** used to render text drawn by [**Print**](#print) and measured by [**TextWidth**](#textwidth) / [**TextHeight**](#textheight). The convenience properties [**FontName**](#fontname), [**FontSize**](#fontsize), [**FontBold**](#fontbold), [**FontItalic**](#fontitalic), [**FontStrikethru**](#fontstrikethru), and [**FontUnderline**](#fontunderline) read or write the corresponding members of this object.

### FontBold

Shortcut for [**Font**](#font)`.Bold`. **Boolean**.

### FontItalic

Shortcut for [**Font**](#font)`.Italic`. **Boolean**.

### FontName

Shortcut for [**Font**](#font)`.Name`. **String**.

### FontSize

Shortcut for [**Font**](#font)`.Size` --- the point size. **Single**.

### FontStrikethru

Shortcut for [**Font**](#font)`.Strikethrough`. **Boolean**.

### FontTransparent

When **True** (default), text drawn by [**Print**](#print) leaves the background pixels untouched between glyphs; when **False**, the glyphs' background is filled with [**BackColor**](#backcolor). **Boolean**.

### FontUnderline

Shortcut for [**Font**](#font)`.Underline`. **Boolean**.

### ForeColor

The colour used by the graphics-method pen (lines, circles, points) and by [**Print**](#print) text, as an **OLE_COLOR**. Defaults to the system button-text colour.

### HasDC

When **True** (default), the control owns a persistent device context that survives between paints, making [**hDC**](#hdc) stable across calls. When **False**, the device context is fetched on demand and released after each operation; this is more memory-efficient but precludes drawing methods that rely on a stable [**hDC**](#hdc) value.

### hDC

A **LongPtr** giving the Win32 device-context handle for the picture box's drawing surface. Read-only. Suitable for passing to GDI API calls.

### Height

The control's height, in twips by default (or in the container's **ScaleMode** units). **Single**.

### HelpContextID

A **Long** identifying a topic in the application's help file, retrieved when the user presses **F1** while the control has focus.

### hWnd

The Win32 window handle for the picture box, as a **LongPtr**. Read-only. Useful for passing to API functions.

### Image

A read-only **StdPicture** giving the current contents of the picture box --- both the assigned [**Picture**](#picture) *and* anything drawn into the surface --- as a single bitmap, suitable for saving with **SavePicture**, copying to the clipboard, or assigning to another picture display. Available only when [**AutoRedraw**](#autoredraw) is **True**, or when the persistent bitmap is otherwise present.

### Index

When the control is part of a control array, the **Long** zero-based index of this instance within the array. Reading **Index** on a non-array instance raises run-time error 343 (*Object not an array*). Read-only at run time.

### Left

The horizontal distance from the left edge of the container to the left edge of the control. **Single**.

### LinkItem

::: info
Reserved for compatibility with VB6 DDE; not currently implemented in twinBASIC.
:::

### LinkMode

::: info
Reserved for compatibility with VB6 DDE; not currently implemented in twinBASIC.
:::

A member of [**LinkModeConstants**](/official/Reference/VBRUN/Constants/LinkModeConstants).

### LinkTimeout

::: info
Reserved for compatibility with VB6 DDE; not currently implemented in twinBASIC.
:::

### LinkTopic

::: info
Reserved for compatibility with VB6 DDE; not currently implemented in twinBASIC.
:::

### MouseIcon

A **StdPicture** used as the mouse cursor when [**MousePointer**](#mousepointer) is **vbCustom** and the pointer is over the control.

### MousePointer

The mouse cursor shown when the pointer is over the control. A member of [**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants).

### Name

The unique design-time name of the control on its parent form. Read-only at run time.

### Negotiate

::: info
Reserved for compatibility with VB6; not currently implemented in twinBASIC.
:::

### OLEDragMode

How the picture box initiates OLE drag operations. A member of [**OLEDragConstants**](/official/Reference/VBRUN/Constants/OLEDragConstants): **vbOLEDragManual** (0, default --- call [**OLEDrag**](#oledrag) from code) or **vbOLEDragAutomatic** (1, which starts a drag with the current [**Picture**](#picture) as the payload as soon as the user begins a drag with the mouse).

### Opacity

The control's opacity as a percentage (0--100, default 100). Values outside the range are clamped on **Initialize**. Requires Windows 8 or later for child controls.

### Parent

A reference to the [**Form**](/official/Reference/VB/Form/) (or **UserControl**) that ultimately contains this control. Read-only. Distinct from [**Container**](#container), which returns the immediate parent.

### Picture

The picture displayed in the control's client area. **StdPicture**. **Default property.** Use **Set** to assign a new picture, **Nothing** to clear it. Assigning when [**AutoSize**](#autosize) is **True** resizes the control to fit.

### PictureDpiScaling

When **True**, [**Picture**](#picture) and the graphics-method outputs are scaled by the current DPI factor before drawing, so a 96-dpi-authored picture is presented at its physical size on high-DPI monitors. **Boolean**, default **False**.

### RightToLeft

::: info
Reserved for compatibility with VB6; not currently implemented in twinBASIC.
:::

### ScaleHeight

The height of the drawing surface in [**ScaleMode**](#scalemode) units. **Double**. Read-write --- assigning a value switches [**ScaleMode**](#scalemode) to **vbUser** and rescales the vertical axis so the control's client area spans the new value.

### ScaleLeft

The X coordinate that maps to the left edge of the drawing surface. **Double**, default 0. Assigning switches [**ScaleMode**](#scalemode) to **vbUser**.

### ScaleMode

The unit used by [**Left**](#left), [**Top**](#top), [**Width**](#width), [**Height**](#height), [**CurrentX**](#currentx), [**CurrentY**](#currenty), and every graphics method. A member of [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants): **vbUser** (0), **vbTwips** (1, default), **vbPoints**, **vbPixels**, **vbCharacters**, **vbInches**, **vbMillimeters**, or **vbCentimeters**.

### ScaleTop

The Y coordinate that maps to the top edge of the drawing surface. **Double**, default 0. Assigning switches [**ScaleMode**](#scalemode) to **vbUser**.

### ScaleWidth

The width of the drawing surface in [**ScaleMode**](#scalemode) units. **Double**. Read-write --- assigning a value switches [**ScaleMode**](#scalemode) to **vbUser**.

### TabIndex

The position of the control in the form's TAB-key navigation order. **Long**.

### TabStop

Whether the user can reach the control by pressing the **TAB** key. **Boolean**, default **True**. A disabled control is skipped regardless of this setting.

### Tag

A free-form **String** the application can use to associate custom data with the control. Ignored by the framework.

### ToolTipText

A multi-line **String** displayed as a tooltip when the user hovers over the control.

### Top

The vertical distance from the top of the container to the top of the control. **Single**.

### TransparencyKey

An **OLE_COLOR** that, when set, becomes fully transparent in the rendered control. Default `-1` disables the effect. Requires Windows 8 or later for child controls.

### Visible

Whether the control is shown. **Boolean**, default **True**.

### WhatsThisHelpID

::: info
Reserved for compatibility with VB6; not currently implemented in twinBASIC.
:::

A **Long** identifying a "What's This?" help-pop-up topic. See [**ShowWhatsThis**](#showwhatsthis).

### Width

The control's width. **Single**.

## Methods

### Circle

Draws a circle, ellipse, or elliptical arc on the drawing surface.

Syntax: *object*.**Circle** [ **Step** ] ( *X*, *Y* ), *Radius* [, *Color* [, *Start* [, *End* [, *Aspect* ] ] ] ]

*X*, *Y*
: *required* Coordinates of the centre in [**ScaleMode**](#scalemode) units. **Single**. When prefixed with **Step**, they are interpreted relative to [**CurrentX**](#currentx) / [**CurrentY**](#currenty).

*Radius*
: *required* The radius along the X axis. **Single**.

*Color*
: *optional* An **OLE_COLOR** for the outline. Defaults to [**ForeColor**](#forecolor).

*Start*, *End*
: *optional* Start and end angles in radians (0 to 2π). Negative values are interpreted as full radians and connect the arc end-point to the centre with a chord. Omitted draws a full circle.

*Aspect*
: *optional* The Y/X aspect ratio. **1.0** for a circle (default); other values give an ellipse.

[**CurrentX**](#currentx) and [**CurrentY**](#currenty) are left at the centre.

### Cls

Clears the drawing surface to [**BackColor**](#backcolor), discards everything drawn through the graphics methods (and the persistent bitmap if [**AutoRedraw**](#autoredraw) is **True**), and resets [**CurrentX**](#currentx) / [**CurrentY**](#currenty) to **0**. The assigned [**Picture**](#picture) is not affected.

Syntax: *object*.**Cls**

### Drag

Begins, completes, or cancels a manual drag-and-drop operation. Typically called from a [**MouseDown**](#mousedown) handler when [**DragMode**](#dragmode) is **vbManual**.

Syntax: *object*.**Drag** [ *Action* ]

*Action*
: *optional* A member of [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants): **vbCancel** (0), **vbBeginDrag** (1, default), or **vbEndDrag** (2).

### Line

Draws a straight line, a rectangle outline, or a filled rectangle.

Syntax: *object*.**Line** [ [ **Step** ] ( *X1*, *Y1* ) ] **-** [ **Step** ] ( *X2*, *Y2* ) [, *Color* [, **B** [**F**] ] ]

*X1*, *Y1*
: *optional* Start coordinates. **Single**. If omitted, the line starts at [**CurrentX**](#currentx) / [**CurrentY**](#currenty). **Step** makes them relative to the current pen position.

*X2*, *Y2*
: *required* End coordinates. **Single**. **Step** makes them relative to the start point.

*Color*
: *optional* An **OLE_COLOR** for the line. Defaults to [**ForeColor**](#forecolor).

*B*
: *optional* When present, draws a rectangle whose opposite corners are *(X1, Y1)* and *(X2, Y2)* instead of a line.

*F*
: *optional* Only valid with **B**. Fills the rectangle with [**FillColor**](#fillcolor) at the current [**FillStyle**](#fillstyle).

[**CurrentX**](#currentx) / [**CurrentY**](#currenty) are left at *(X2, Y2)*.

### Move

Repositions and optionally resizes the control in a single call.

Syntax: *object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *required* A **Single** giving the new horizontal position.

*Top*, *Width*, *Height*
: *optional* New values for the corresponding properties. Omitted values are left unchanged.

### OLEDrag

Initiates an OLE drag operation from the control, raising the [**OLEStartDrag**](#olestartdrag) event so the application can populate the **DataObject**.

Syntax: *object*.**OLEDrag**

### PaintPicture

Draws a picture onto the surface, optionally scaling, clipping, or applying a raster operation.

Syntax: *object*.**PaintPicture** *Picture*, *X1*, *Y1* [, *Width1* [, *Height1* [, *X2* [, *Y2* [, *Width2* [, *Height2* [, *Opcode* [, *StretchQuality* ] ] ] ] ] ] ] ]

*Picture*
: *required* An **IPictureDisp** to paint --- typically the [**Picture**](#picture) or [**Image**](#image) of another picture display.

*X1*, *Y1*
: *required* Destination top-left in [**ScaleMode**](#scalemode) units.

*Width1*, *Height1*
: *optional* Destination size. Defaults to the picture's natural size.

*X2*, *Y2*, *Width2*, *Height2*
: *optional* Source rectangle within *Picture*. Defaults to the whole picture.

*Opcode*
: *optional* A raster-operation code passed through to **BitBlt** --- for example **&HCC0020** (`vbSrcCopy`, default) or **&H660046** (`vbSrcInvert`).

*StretchQuality*
: *optional* `vbStretchQuality` value: **vbQualityNormal** (default) or **vbQualityHigh** (uses half-tone stretching for nicer downscales).

### Point

::: info
Reserved for compatibility with VB6; not currently implemented in twinBASIC.
:::

In VB6, returns the colour of the pixel at the given coordinates as a **Long**, or **-1** if the point is outside the drawing surface.

Syntax: *object*.**Point**( *X* **As Single**, *Y* **As Single** ) **As Long**

### Print

Writes text to the drawing surface using [**Font**](#font), starting at [**CurrentX**](#currentx) / [**CurrentY**](#currenty) and advancing them as it goes. Dispatched through the **Print** statement so multiple expressions can be separated by `;` (no spacing) or `,` (tab to next print zone). **Spc(n)** inserts *n* spaces and **Tab(n)** moves to print column *n*.

Syntax: *object*.**Print** \[ *expressionlist* ] \[ **;** \| **,** ]

A trailing `;` or `,` suppresses the newline so the next [**Print**](#print) call continues on the same line.

### PSet

Sets a single pixel.

Syntax: *object*.**PSet** [ **Step** ] ( *X*, *Y* ) [, *Color* ]

*X*, *Y*
: *required* Coordinates in [**ScaleMode**](#scalemode) units. **Step** makes them relative to [**CurrentX**](#currentx) / [**CurrentY**](#currenty).

*Color*
: *optional* An **OLE_COLOR**. Defaults to [**ForeColor**](#forecolor).

[**CurrentX**](#currentx) / [**CurrentY**](#currenty) are left at the set point.

### Refresh

Forces an immediate repaint. When [**AutoRedraw**](#autoredraw) is **True**, copies the persistent bitmap to the visible surface; otherwise invalidates the control and triggers a [**Paint**](#paint) event.

Syntax: *object*.**Refresh**

### Scale

Defines a user coordinate system for the surface. Calling **Scale** with no arguments resets [**ScaleMode**](#scalemode) to **vbTwips**.

Syntax: *object*.**Scale** [ ( *X1*, *Y1* ) **-** ( *X2*, *Y2* ) ]

*X1*, *Y1*
: *required* (with the second pair) The coordinate that maps to the top-left corner --- sets [**ScaleLeft**](#scaleleft) and [**ScaleTop**](#scaletop).

*X2*, *Y2*
: *required* The coordinate that maps to the bottom-right corner --- sets [**ScaleWidth**](#scalewidth) = `X2 - X1` and [**ScaleHeight**](#scaleheight) = `Y2 - Y1`. [**ScaleMode**](#scalemode) is switched to **vbUser**.

### ScaleX

Converts a horizontal distance from one scale mode to another without changing [**ScaleMode**](#scalemode).

Syntax: *object*.**ScaleX**( *Width* [, *FromScale* [, *ToScale* ] ] ) **As Single**

*Width*
: *required* The value to convert. **Single**.

*FromScale*, *ToScale*
: *optional* [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants) members. *FromScale* defaults to the control's current [**ScaleMode**](#scalemode); *ToScale* defaults to **vbTwips**.

### ScaleY

The vertical counterpart of [**ScaleX**](#scalex), for converting heights.

Syntax: *object*.**ScaleY**( *Height* [, *FromScale* [, *ToScale* ] ] ) **As Single**

### SetFocus

Moves the input focus to the control. The control must be both [**Visible**](#visible) and [**Enabled**](#enabled), or run-time error 5 (*Invalid procedure call or argument*) is raised.

Syntax: *object*.**SetFocus**

### ShowWhatsThis

Displays the topic identified by [**WhatsThisHelpID**](#whatsthishelpid) as a "What's This?" pop-up.

Syntax: *object*.**ShowWhatsThis**

### TextHeight

Measures the height, in [**ScaleMode**](#scalemode) units, of the given string when rendered in the current [**Font**](#font) --- including the line-spacing leading, so the result is suitable for advancing [**CurrentY**](#currenty) between rows of text. Embedded line breaks are honoured.

Syntax: *object*.**TextHeight**( *Str* **As String** ) **As Single**

### TextWidth

Measures the width, in [**ScaleMode**](#scalemode) units, of the given string when rendered in the current [**Font**](#font). Returns the longest line width when *Str* contains embedded line breaks.

Syntax: *object*.**TextWidth**( *Str* **As String** ) **As Single**

### ZOrder

Brings the control to the front or back of its sibling stack.

Syntax: *object*.**ZOrder** [ *Position* ]

*Position*
: *optional* A member of [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants): **vbBringToFront** (0, default) or **vbSendToBack** (1).

### LinkExecute

::: info
Reserved for compatibility with VB6 DDE; not currently implemented in twinBASIC.
:::

### LinkPoke

::: info
Reserved for compatibility with VB6 DDE; not currently implemented in twinBASIC.
:::

### LinkRequest

::: info
Reserved for compatibility with VB6 DDE; not currently implemented in twinBASIC.
:::

### LinkSend

::: info
Reserved for compatibility with VB6 DDE; not currently implemented in twinBASIC.
:::

## Events

### Change

Raised when [**Picture**](#picture) is assigned a new value --- either from code or from the bound recordset.

Syntax: *object*\_**Change**( )

### Click

Raised when the user clicks the control with any mouse button. **Default-designer event.**

Syntax: *object*\_**Click**( )

### DblClick

Raised when the user double-clicks the control.

Syntax: *object*\_**DblClick**( )

### DragDrop

Raised on the destination control when a manual drag operation ends over it.

Syntax: *object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

Raised on the control under the cursor while a manual drag operation is in progress.

Syntax: *object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### GotFocus

Raised when the control receives the input focus.

Syntax: *object*\_**GotFocus**( )

### Initialize

Raised once, after the underlying window has been created and [**Picture**](#picture) has been loaded from the serialized data.

Syntax: *object*\_**Initialize**( )

### KeyDown

Raised when the user presses any key while the control has focus.

Syntax: *object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

Raised when the user types a character that produces an ANSI keystroke.

Syntax: *object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

Raised when the user releases a key while the control has focus.

Syntax: *object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LinkClose

::: info
Reserved for compatibility with VB6 DDE; not currently implemented in twinBASIC.
:::

### LinkError

::: info
Reserved for compatibility with VB6 DDE; not currently implemented in twinBASIC.
:::

### LinkNotify

::: info
Reserved for compatibility with VB6 DDE; not currently implemented in twinBASIC.
:::

### LinkOpen

::: info
Reserved for compatibility with VB6 DDE; not currently implemented in twinBASIC.
:::

### LostFocus

Raised when the control loses the input focus.

Syntax: *object*\_**LostFocus**( )

### MouseDown

Raised when the user presses any mouse button over the control.

Syntax: *object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

Raised when the cursor moves over the control.

Syntax: *object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

Raised when the user releases a mouse button over the control.

Syntax: *object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseWheel

Raised when the user rotates the mouse wheel while the control has focus or the cursor is over it. New in twinBASIC --- there is no equivalent VB6 event.

Syntax: *object*\_**MouseWheel**( *Delta* **As Integer**, *Horizontal* **As Boolean** )

*Delta*
: A positive or negative scroll delta in units of `WHEEL_DELTA` (120).

*Horizontal*
: **True** for a horizontal-wheel rotation, **False** for the standard vertical wheel.

### OLECompleteDrag

Raised on the source control when the OLE drag operation finishes, indicating which effect (copy, move, none) the destination accepted.

Syntax: *object*\_**OLECompleteDrag**( *Effect* **As Long** )

### OLEDragDrop

Raised on the destination control when the user drops data on it.

Syntax: *object*\_**OLEDragDrop**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### OLEDragOver

Raised on the destination control while an OLE drag passes over it.

Syntax: *object*\_**OLEDragOver**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### OLEGiveFeedback

Raised on the source control during a drag so the application can adjust the cursor or other visual feedback.

Syntax: *object*\_**OLEGiveFeedback**( *Effect* **As Long**, *DefaultCursors* **As Boolean** )

### OLESetData

Raised on the source control when the destination requests data in a format that was registered but not yet supplied.

Syntax: *object*\_**OLESetData**( *Data* **As DataObject**, *DataFormat* **As Integer** )

### OLEStartDrag

Raised on the source control at the start of an OLE drag, so the application can populate the **DataObject** and choose the allowed effects. Also raised automatically when [**OLEDragMode**](#oledragmode) is **vbOLEDragAutomatic** and the user begins a drag.

Syntax: *object*\_**OLEStartDrag**( *Data* **As DataObject**, *AllowedEffects* **As Long** )

### Paint

Raised when the control needs to redraw its client area --- typically because it was uncovered, resized, or [**Refresh**](#refresh) was called. Not raised while [**AutoRedraw**](#autoredraw) is **True**; the persistent bitmap is blitted instead.

Syntax: *object*\_**Paint**( )

### Resize

Raised after the control's [**Height**](#height) or [**Width**](#width) changes. Useful for re-flowing child controls or rescaling drawn content.

Syntax: *object*\_**Resize**( )

### Validate

Raised when the focus is moving to another control whose [**CausesValidation**](#causesvalidation) is **True**. Setting *Cancel* to **True** keeps the focus on this control.

Syntax: *object*\_**Validate**( *Cancel* **As Boolean** )
