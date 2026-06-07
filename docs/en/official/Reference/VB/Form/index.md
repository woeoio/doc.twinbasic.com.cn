---
title: Form
parent: VB Package
permalink: /tB/Packages/VB/Form/
---

# Form class

A **Form** is a top-level Win32 window that hosts the controls, menus, and drawing surface of a single twinBASIC user interface. Each form designed in the IDE becomes its own class derived from **Form** --- its controls become members of that class, its event handlers become methods on it, and the file's name becomes the class name. Code outside the form normally instantiates it implicitly through the global default-instance reference (`MyForm.Show`) or explicitly with `New MyForm`. The default property is [**Controls**](#controls) and the default event is [**Load**](#load).

```vb
' In Form1's code-behind:
Private Sub Form_Load()
    Caption = "Welcome"
    Me.MinWidth = 4000          ' twips, ≈ 2 inches
    Me.MinHeight = 3000
End Sub

Private Sub Form_QueryUnload(Cancel As Integer, UnloadMode As Integer)
    If MsgBox("Quit?", vbYesNo) = vbNo Then Cancel = 1
End Sub

' In a startup module:
Sub Main()
    Form1.Show vbModal
End Sub
```


## Lifecycle

A form goes through six distinct events from creation to destruction:

| Event                            | When                                                                                |
|----------------------------------|-------------------------------------------------------------------------------------|
| [**Initialize**](#initialize)    | Before the underlying window exists. The form's controls are not yet created.       |
| [**Load**](#load)                | After the window and all controls have been created, before the form first appears. |
| [**Activate**](#activate)        | When the form becomes the active window in the application.                         |
| [**Deactivate**](#deactivate)    | When another form (or another application's window) takes activation away.          |
| [**QueryUnload**](#queryunload)  | Before unload. Setting *Cancel* to non-zero keeps the form open.                    |
| [**Unload**](#unload)            | After **QueryUnload** approves. Setting *Cancel* to non-zero keeps the form open.   |
| [**Terminate**](#terminate)      | After the window has been destroyed and the class instance is released.             |

Closing a form goes through both **QueryUnload** *and* **Unload**, so either can veto. The *UnloadMode* argument of **QueryUnload** ([**QueryUnloadConstants**](/en/official/Reference/VBRUN/Constants/QueryUnloadConstants)) reports whether the user clicked the close button, code called **Unload**, Windows is shutting down, the MDI parent is closing, and so on.

## Showing the form

[**Show**](#show) makes the form visible. It accepts an optional [**FormShowConstants**](/en/official/Reference/VBRUN/Constants/FormShowConstants) argument: **vbModeless** (default --- the call returns immediately and the user can interact with other forms) or **vbModal** (the call blocks until the form is closed, and other forms in the application become unresponsive). MDI child forms cannot be shown modally; attempting to do so raises run-time error 404.

```vb
dlgOptions.Show vbModal, Me      ' modal, owned by the calling form
```

[**Hide**](#hide) and [**Close**](#close) reverse the effect: **Hide** just clears [**Visible**](#visible); **Close** runs the full unload sequence (**QueryUnload** then **Unload** then **Terminate**). The classic `Unload <FormName>` statement is the language-level equivalent of **Close**.

[**StartUpPosition**](#startupposition) ([**StartUpPositionConstants**](/en/official/Reference/VBRUN/Constants/StartUpPositionConstants)) is read at the first **Show** to decide where the form is placed; afterwards the user (or code through [**Move**](#move) and [**WindowState**](#windowstate)) controls position.

## Window appearance

[**BorderStyle**](#borderstyle) ([**FormBorderStyleConstants**](/en/official/Reference/VBRUN/Constants/FormBorderStyleConstants)) chooses between sizable, fixed, dialog, tool, and borderless frames. [**Caption**](#caption) is the title-bar text. [**ControlBox**](#controlbox), [**MaxButton**](#maxbutton), and [**MinButton**](#minbutton) toggle the system menu and resize buttons. [**Icon**](#icon) supplies the small/large icon used by the system menu, the taskbar, and Alt-Tab. [**WindowState**](#windowstate) ([**FormWindowStateConstants**](/en/official/Reference/VBRUN/Constants/FormWindowStateConstants)) reads or sets normal / minimised / maximised state at run time.

[**MinWidth**](#minwidth), [**MinHeight**](#minheight), [**MaxWidth**](#maxwidth), and [**MaxHeight**](#maxheight) constrain the *client area* in twips during interactive resizing. [**Moveable**](#moveable) decides whether the user can drag the form by its title bar; [**ShowInTaskbar**](#showintaskbar) decides whether the form shows up in the taskbar and Alt-Tab list.

[**Opacity**](#opacity) and [**TransparencyKey**](#transparencykey) enable Windows' layered-window features for translucent forms and cut-out shapes.

## Drawing surface

A **Form** is itself a graphics surface --- code can draw lines, shapes, and text directly on it. The coordinate system is governed by [**ScaleMode**](#scalemode) (default **vbTwips** --- the classic VB6 behaviour) and the [**ScaleLeft**](#scaleleft) / [**ScaleTop**](#scaletop) / [**ScaleWidth**](#scalewidth) / [**ScaleHeight**](#scaleheight) properties, which together describe the form's logical drawing rectangle. Setting **ScaleMode** to **vbUser** lets the four **Scale\*** properties define an arbitrary rectangle; the [**Scale**](#scale) method does this in a single call.

The drawing primitives are [**Cls**](#cls), [**Circle**](#circle), [**Line**](#line), [**PSet**](#pset), [**PaintPicture**](#paintpicture), and the [**Print**](#print) statement (`Form1.Print "Hello"`) --- all use [**ForeColor**](#forecolor), [**FillColor**](#fillcolor), [**FillStyle**](#fillstyle), [**DrawWidth**](#drawwidth), [**DrawMode**](#drawmode), and [**DrawStyle**](#drawstyle) for their pen and fill, and the form's [**Font**](#font) for text. The current pen position is tracked by [**CurrentX**](#currentx) and [**CurrentY**](#currenty); [**TextWidth**](#textwidth) and [**TextHeight**](#textheight) measure a string in the current font. [**ScaleX**](#scalex) and [**ScaleY**](#scaley) convert single coordinates between scale modes.

[**AutoRedraw**](#autoredraw) controls whether drawn output persists across paints: when **False** (default), the [**Paint**](#paint) event must redraw on every invalidation; when **True**, the form keeps an off-screen buffer that survives invalidations and the **Paint** event is suppressed. Setting [**Picture**](#picture) puts a bitmap behind the drawing layer; [**Image**](#image) returns the rendered combined surface as a **StdPicture**.

```vb
Private Sub Form_Paint()
    Me.ScaleMode = vbPixels
    Me.ForeColor = vbBlue
    Me.DrawWidth = 3
    Me.Line (10, 10)-(120, 80), , B          ' rectangle
    Me.CurrentX = 16 : Me.CurrentY = 16
    Me.Print "Hello, twinBASIC"
End Sub
```

## Controls and validation

[**Controls**](#controls) is a collection of every control on the form, indexable by name or zero-based position. **Form** is also enumerable directly --- `For Each ctrl In Form1` yields the same items as `For Each ctrl In Form1.Controls`. [**Count**](#count) is shorthand for `Controls.Count`. [**ActiveControl**](#activecontrol) returns the currently focused child, or **Nothing** when no control on this form has the focus.

[**KeyPreview**](#keypreview) routes keystrokes to the form's [**KeyDown**](#keydown), [**KeyUp**](#keyup), and [**KeyPress**](#keypress) events *before* the focused control sees them --- useful for application-wide hotkey handling. [**ValidateControls**](#validatecontrols) explicitly fires the active control's **Validate** event from code; it raises run-time error 380 if the validation handler sets *Cancel*.

## Menus and pop-ups

Menu structures designed at form-design time appear automatically in the form's title bar. [**PopUpMenu**](#popupmenu) displays one of those menus as a context-menu pop-up at a specified location, raising the menu's **Click** event when the user picks an item.

```vb
Private Sub Form_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
    If Button = vbRightButton Then PopUpMenu mnuContext
End Sub
```

## Properties

### ActiveControl

The control on this form that currently has the input focus, as a **Control** object, or **Nothing** when no control on this form is focused. Read-only.

### AlwaysShowKeyboardCues

When **True**, the form always shows underlines on access-key characters in [**Caption**](#caption)s and menu items, instead of only displaying them after the user presses **Alt**. **Boolean**, read-only at run time. Set at design time.

### Appearance

Determines how the control's border is drawn by the OS. A member of [**AppearanceConstants**](/en/official/Reference/VBRUN/Constants/AppearanceConstants): **vbAppearFlat** or **vbAppear3d** (default).

::: info
Retained for VB6 compatibility; the property has no observable effect on a form.
:::

### AutoRedraw

Whether drawing performed on the form persists across invalidations. **Boolean**, default **False**.

When **False**, drawing primitives --- [**Cls**](#cls), [**Circle**](#circle), [**Line**](#line), [**PSet**](#pset), [**PaintPicture**](#paintpicture), and [**Print**](#print) --- paint directly to the screen and the form must redraw them in its [**Paint**](#paint) event whenever the affected area is invalidated. When **True**, the form keeps an off-screen bitmap, drawing primitives paint into it (and immediately to the screen), the bitmap survives invalidations, and the **Paint** event is suppressed. Reading [**Image**](#image) returns this bitmap.

### BackColor

The background colour of the form's client area, as an **OLE_COLOR**. Defaults to the system 3-D face colour. Used as the fill colour for [**Cls**](#cls) and as the canvas behind [**Picture**](#picture).

### BorderStyle

The window-frame style. A member of [**FormBorderStyleConstants**](/en/official/Reference/VBRUN/Constants/FormBorderStyleConstants): **vbBSNone**, **vbFixedSingle**, **vbSizable** (default), **vbFixedDialog**, **vbFixedToolWindow**, **vbSizableToolWindow**, **vbSizableNoTitleBar** (new in twinBASIC), or **vbSizableToolWindowNoTitleBar** (new in twinBASIC). Run-time changes are accepted but only take effect after another change to the window --- typically reassigning [**Caption**](#caption).

### Caption

The title-bar text. **String**.

Syntax: *object*.**Caption** [ = *string* ]

Setting **Caption** updates the title bar immediately and re-syncs the title-bar style flags (so it can revive a title bar that was hidden because the previous **Caption** was empty).

### ClipControls

Whether child controls are clipped out of the form's drawing region during paint. **Boolean**, default **True**. Read-only at run time --- set at design time.

### ControlBox

Whether the form's title bar shows the system menu (and, with it, the close button). **Boolean**, default **True**. Setting it at run time re-syncs the title-bar style flags.

### Controls

The collection of every control hosted by this form, indexable by control name or zero-based position. **Default property.** Read-only --- controls are added to the collection by the runtime, not by user code.

```vb
Dim ctrl As Control
For Each ctrl In Me.Controls
    ctrl.Enabled = False
Next
```

### Count

The number of controls in [**Controls**](#controls), as a **Long**. Read-only. Equivalent to `Me.Controls.Count`.

### ControlType

A read-only [**ControlTypeConstants**](/en/official/Reference/VBRUN/Constants/ControlTypeConstants) value identifying this control as a form. Always **vbForm**.

### CurrentX

The horizontal pen position, in [**ScaleMode**](#scalemode) units, used by drawing primitives that omit a starting coordinate (for example, [**Print**](#print) and the rectangle form of [**Line**](#line)). **Double**.

### CurrentY

The vertical pen position, in [**ScaleMode**](#scalemode) units, used by drawing primitives that omit a starting coordinate. **Double**.

### DpiScaleFactorX

The horizontal DPI scale factor of the monitor the form is currently on, as a **Double**. `1.0` at 96 DPI, `1.25` at 120 DPI, `1.5` at 144 DPI, and so on. Read-only.

### DpiScaleFactorY

The vertical DPI scale factor of the monitor the form is currently on. Currently always equal to [**DpiScaleFactorX**](#dpiscalefactorx). Read-only.

### DrawMode

The raster operation that drawing primitives apply when combining the pen with the destination. A member of [**DrawModeConstants**](/en/official/Reference/VBRUN/Constants/DrawModeConstants): **vbCopyPen** (default) is normal opaque drawing; other values produce XOR, AND, NOT, and other pixel-mixing effects.

### DrawStyle

The pen line pattern used by drawing primitives. A member of [**DrawStyleConstants**](/en/official/Reference/VBRUN/Constants/DrawStyleConstants): **vbSolid** (default), **vbDash**, **vbDot**, **vbDashDot**, **vbDashDotDot**, **vbInvisible**, or **vbInsideSolid**.

### DrawWidth

The pen width in pixels for drawing primitives. **Long**, default `1`. Widths greater than 1 force [**DrawStyle**](#drawstyle) back to **vbSolid** (a Win32 GDI limitation).

### Enabled

Determines whether the form accepts user input. A disabled form ignores keyboard and mouse input and dims its controls. **Boolean**, default **True**.

### FillColor

The fill colour for closed shapes drawn by [**Circle**](#circle) and the rectangle form of [**Line**](#line). **OLE_COLOR**, default `0` (black). Used only when [**FillStyle**](#fillstyle) is not **vbFSTransparent**.

### FillStyle

The fill pattern for closed shapes. A member of [**FillStyleConstants**](/en/official/Reference/VBRUN/Constants/FillStyleConstants): **vbFSSolid**, **vbFSTransparent** (default), **vbHorizontalLine**, **vbVerticalLine**, **vbUpwardDiagonal**, **vbDownwardDiagonal**, **vbCross**, or **vbDiagonalCross**.

### Font

The **StdFont** used by the [**Print**](#print) statement and other text drawing on this form. The convenience properties **FontName**, **FontSize**, **FontBold**, **FontItalic**, **FontStrikethru**, and **FontUnderline** read or write the corresponding members of this object.

### FontTransparent

When **True** (default), text drawn on the form has a transparent background, leaving the underlying drawing visible behind it. When **False**, text is drawn over an opaque rectangle filled with [**BackColor**](#backcolor). **Boolean**.

### ForeColor

The pen colour used by [**Circle**](#circle), [**Line**](#line), [**PSet**](#pset), and the text drawn by [**Print**](#print). **OLE_COLOR**.

### hDC

The Win32 device context handle for the form, as a **LongPtr**. Read-only. Returns `0` when the underlying window has not yet been created. Useful for passing to GDI API calls.

### HasDC

Whether the form keeps a private device context (`CS_OWNDC`) for its drawing surface. **Boolean**, default **True**. Read-only at run time --- set at design time.

### Height

The form's outer height, in twips by default (or in the container's **ScaleMode** units). **Double**. Setting it resizes the window. Constrained at run time by [**MinHeight**](#minheight) and [**MaxHeight**](#maxheight) when those are non-zero.

### HelpContextID

A **Long** identifying a topic in the application's help file, retrieved when the user presses **F1** while the form has focus.

### hWnd

The Win32 window handle for the form, as a **LongPtr**. Read-only. Useful for passing to API functions.

### Icon

The icon shown on the title bar, in the taskbar, and in Alt-Tab. A **StdPicture** of type **vbPicTypeIcon**. Assigning a non-icon picture clears the icon to the default Windows application icon.

### Image

Returns the rendered drawing surface as a **StdPicture**. Read-only. Most useful when [**AutoRedraw**](#autoredraw) is **True** --- the returned picture is the persistent off-screen buffer.

### KeyPreview

When **True**, the form's [**KeyDown**](#keydown), [**KeyUp**](#keyup), and [**KeyPress**](#keypress) events fire *before* the focused control receives the same keystroke. **Boolean**, default **False**. Useful for application-wide hotkeys; events still fire on the focused control afterwards.

### Left

The horizontal position of the form's outer rectangle, in twips (or the calling code's **ScaleMode** units), measured from the left edge of the screen --- or, for an MDI child, from the left edge of the MDI parent's client area. **Double**.

### LinkMode

::: info
Reserved for compatibility with VB6's DDE feature; not currently implemented in twinBASIC.
:::

### LinkTopic

::: info
Reserved for compatibility with VB6's DDE feature; not currently implemented in twinBASIC.
:::

### MaxButton

Whether the title bar shows the maximise button. **Boolean**, default **True**, read-only at run time. Set at design time.

### MaxHeight

The maximum height of the form's *client area*, in twips. **Double**, default `0` (no limit). Honoured during interactive resizing.

### MaxWidth

The maximum width of the form's *client area*, in twips. **Double**, default `0` (no limit). Honoured during interactive resizing.

### MDIChild

When **True**, the form is hosted as a child inside an [**MDIForm**](/en/official/Reference/VB/MDIForm). **Boolean**, read-only --- set at design time. An MDI child form cannot be shown modally.

### MinButton

Whether the title bar shows the minimise button. **Boolean**, default **True**, read-only at run time. Set at design time.

### MinHeight

The minimum height of the form's *client area*, in twips. **Double**, default `0` (no limit). Honoured during interactive resizing.

### MinWidth

The minimum width of the form's *client area*, in twips. **Double**, default `0` (no limit). Honoured during interactive resizing.

### MouseIcon

A **StdPicture** used as the mouse cursor when [**MousePointer**](#mousepointer) is **vbCustom** and the pointer is over the form (and not over a child control with its own setting).

### MousePointer

The mouse cursor shown when the pointer is over the form (and not over a child control with its own setting). A member of [**MousePointerConstants**](/en/official/Reference/VBRUN/Constants/MousePointerConstants).

### Moveable

Whether the user can drag the form by its title bar. **Boolean**, default **True**.

### Name

The unique design-time name of the form. Read-only at run time. Also the class name of the generated form class.

### NegotiateMenus

::: info
Reserved for compatibility with VB6's ActiveX-document menu negotiation feature; not currently implemented in twinBASIC.
:::

### OLEDropMode

How the form responds to OLE drops. A restricted member of [**OLEDropConstants**](/en/official/Reference/VBRUN/Constants/OLEDropConstants): **vbOLEDropNone** or **vbOLEDropManual**. Automatic-drop mode is not supported on a Form.

### Opacity

The form's opacity as a percentage (0--100, default 100). Values outside the range are clamped on **Initialize**. Values below 100 cause the form to become a layered window.

### Palette

::: info
Reserved for compatibility with VB6's 256-colour palette feature; not currently implemented in twinBASIC.
:::

### PaletteMode

::: info
Reserved for compatibility with VB6's 256-colour palette feature; not currently implemented in twinBASIC.
:::

### Picture

A **StdPicture** drawn as the form's background. Painted before any drawing primitives or child controls. Assigning **Nothing** removes the background.

### PictureDpiScaling

When **True**, [**Picture**](#picture) is scaled by the current DPI factor before drawing. **Boolean**, default **False**.

### RightToLeft

::: info
Reserved for compatibility with VB6; not currently implemented in twinBASIC.
:::

### ScaleHeight

The height of the logical drawing rectangle, in [**ScaleMode**](#scalemode) units. **Double**. Setting it (or [**ScaleWidth**](#scalewidth), [**ScaleLeft**](#scaleleft), or [**ScaleTop**](#scaletop)) implicitly switches **ScaleMode** to **vbUser**.

### ScaleLeft

The logical horizontal coordinate of the left edge of the form's client area, in [**ScaleMode**](#scalemode) units. **Double**. Default `0`.

### ScaleMode

The unit of measurement used by [**CurrentX**](#currentx), [**CurrentY**](#currenty), the drawing primitives, [**TextWidth**](#textwidth), and [**TextHeight**](#textheight). A member of [**ScaleModeConstants**](/en/official/Reference/VBRUN/Constants/ScaleModeConstants): **vbTwips** (default), **vbPoints**, **vbPixels**, **vbCharacters**, **vbInches**, **vbMillimeters**, **vbCentimeters**, or **vbUser** (the four **Scale\*** properties define the rectangle).

### ScaleTop

The logical vertical coordinate of the top edge of the form's client area, in [**ScaleMode**](#scalemode) units. **Double**. Default `0`.

### ScaleWidth

The width of the logical drawing rectangle, in [**ScaleMode**](#scalemode) units. **Double**. Setting it implicitly switches **ScaleMode** to **vbUser**.

### ShowInTaskbar

Whether the form appears in the Windows taskbar and Alt-Tab list. **Boolean**, default **True**. Read-only at run time --- set at design time.

### StartUpPosition

How the form's initial position is determined the first time it is shown. A member of [**StartUpPositionConstants**](/en/official/Reference/VBRUN/Constants/StartUpPositionConstants): **vbStartUpManual**, **vbStartUpOwner**, **vbStartUpScreen**, or **vbStartUpWindowsDefault** (default). Read-only at run time --- set at design time.

### TabFocusAutoSelect

When **True**, a [**TextBox**](/en/official/Reference/VB/TextBox) on this form whose own **TabFocusAutoSelect** is also **True** auto-selects its content when the focus enters it via the **TAB** key. **Boolean**, default **False**.

### Tag

A free-form **String** the application can use to associate custom data with the form. Ignored by the framework.

### Top

The vertical position of the form's outer rectangle, in twips (or the calling code's **ScaleMode** units), measured from the top edge of the screen --- or, for an MDI child, from the top edge of the MDI parent's client area. **Double**.

### TopMost

Whether the form sits in the always-on-top z-order layer. **Boolean**, read-only at run time. Set at design time.

### TransparencyKey

An **OLE_COLOR** that, when set, becomes fully transparent in the rendered form --- clicks pass through to whatever is underneath, and the corresponding pixels do not paint. Default `-1` disables the effect.

### Visible

Whether the form is shown. **Boolean**, default **True**. Setting **Visible** to **True** when the form was hidden is equivalent to calling [**Show**](#show) **vbModeless**; setting it to **False** is equivalent to calling [**Hide**](#hide).

### WhatsThisButton

When **True**, the title bar shows a "?" help button --- but only when [**MinButton**](#minbutton) is **False**, [**MaxButton**](#maxbutton) is **False**, [**ControlBox**](#controlbox) is **True**, and [**BorderStyle**](#borderstyle) is not a tool-window style. **Boolean**.

### WhatsThisHelp

When **True**, [**WhatsThisMode**](#whatsthismode) and the title-bar help button enter Windows' "What's This?" cursor mode. **Boolean**, default **False**.

### Width

The form's outer width, in twips by default (or in the container's **ScaleMode** units). **Double**. Setting it resizes the window. Constrained at run time by [**MinWidth**](#minwidth) and [**MaxWidth**](#maxwidth) when those are non-zero.

### WindowState

The window's normal/minimised/maximised state. A member of [**FormWindowStateConstants**](/en/official/Reference/VBRUN/Constants/FormWindowStateConstants): **vbNormal** (0, default), **vbMinimized** (1), or **vbMaximized** (2). Setting it at run time updates the window placement immediately if the form is visible.

## Methods

### Circle

Draws a circle, ellipse, or arc on the form using [**ForeColor**](#forecolor) for the outline and [**FillColor**](#fillcolor)/[**FillStyle**](#fillstyle) for the interior.

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

### Cls

Clears any drawing performed by [**Circle**](#circle), [**Line**](#line), [**PSet**](#pset), [**PaintPicture**](#paintpicture), and [**Print**](#print), repaints [**BackColor**](#backcolor), and resets [**CurrentX**](#currentx) / [**CurrentY**](#currenty) to `0`. Does not affect the [**Picture**](#picture) backdrop or child controls.

Syntax: *object*.**Cls**

### Close

Initiates the form's unload sequence --- [**QueryUnload**](#queryunload), then [**Unload**](#unload), then [**Terminate**](#terminate). Either of the first two events can cancel the close by setting *Cancel* to non-zero. Equivalent to the language statement `Unload Me`.

Syntax: *object*.**Close**

### Hide

Hides the form without unloading it. The class instance and its controls are preserved; calling [**Show**](#show) (or assigning [**Visible**](#visible) = **True**) brings it back. Equivalent to assigning **Visible** = **False**.

Syntax: *object*.**Hide**

### Line

Draws a line, or a rectangle, on the form using [**ForeColor**](#forecolor) (or an explicit colour) and [**DrawWidth**](#drawwidth)/[**DrawStyle**](#drawstyle).

Syntax: *object*.**Line** [ [ **Step** ] ( *X1*, *Y1* ) ] -[ **Step** ] ( *X2*, *Y2* ) [, [ *Color* ] [, **B** [ **F** ] ] ]

*X1*, *Y1*
: *optional* The start point, in [**ScaleMode**](#scalemode) units. **Step** makes the point relative to ([**CurrentX**](#currentx), [**CurrentY**](#currenty)). When omitted, drawing begins from the current pen position.

*X2*, *Y2*
: *required* The end point, in **ScaleMode** units. **Step** makes the point relative to (*X1*, *Y1*).

*Color*
: *optional* An **OLE_COLOR** for the line; defaults to [**ForeColor**](#forecolor).

**B**
: *optional* Draw a rectangle whose opposite corners are (*X1*, *Y1*) and (*X2*, *Y2*) instead of a line.

**F**
: *optional* When combined with **B**, fill the rectangle with [**ForeColor**](#forecolor) instead of [**FillColor**](#fillcolor)/[**FillStyle**](#fillstyle).

### Move

Repositions and optionally resizes the form in a single call.

Syntax: *object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *required* A **Single** giving the new horizontal position.

*Top*, *Width*, *Height*
: *optional* New values for the corresponding properties. Omitted values are left unchanged.

### OLEDrag

Initiates an OLE drag operation from the form, raising the [**OLEStartDrag**](#olestartdrag) event so the application can populate the **DataObject**.

Syntax: *object*.**OLEDrag**

### PaintPicture

Draws a **StdPicture** onto the form, with optional scaling and raster operations.

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
: *optional* A raster-operation code (member of [**RasterOpConstants**](/en/official/Reference/VBRUN/Constants/RasterOpConstants)). Defaults to **vbSrcCopy**.

*StretchQuality*
: *optional* The interpolation method when scaling. Defaults to normal quality.

### PopUpMenu

Displays a [**Menu**](/en/official/Reference/VB/Menu) as a context-menu pop-up at the specified location.

Syntax: *object*.**PopUpMenu** *Menu* [, *Flags* [, *X* [, *Y* [, *DefaultMenu* ] ] ] ]

*Menu*
: *required* The **Menu** control to display. The menu must already exist on the form (or its MDI parent).

*Flags*
: *optional* A combination of [**MenuControlConstants**](/en/official/Reference/VBRUN/Constants/MenuControlConstants) controlling alignment and which mouse buttons trigger the menu items.

*X*, *Y*
: *optional* The screen-relative position to anchor the menu at, in [**ScaleMode**](#scalemode) units. Defaults to the current mouse position.

*DefaultMenu*
: *optional* The **Menu** sub-item to render in bold as the default action.

### Point

::: info
Reserved for compatibility with VB6; not currently implemented in twinBASIC. In VB6 this returns the **OLE_COLOR** of a single pixel of the drawing surface.
:::

Syntax: *object*.**Point**( *X*, *Y* )

### Print

Writes text to the form's drawing surface using [**Font**](#font), starting at [**CurrentX**](#currentx) / [**CurrentY**](#currenty) and advancing them as it goes. Dispatched through the VB6 **Print** statement so multiple expressions can be separated by `;` (no spacing) or `,` (tab to the next print zone). **Spc(n)** inserts *n* spaces and **Tab(n)** moves to print column *n*. Output honours [**Font**](#font), [**ForeColor**](#forecolor), and [**FontTransparent**](#fonttransparent), and --- when [**AutoRedraw**](#autoredraw) is **True** --- is recorded into the persistent off-screen bitmap so it survives invalidations.

Syntax: *object*.**Print** \[ *expressionlist* ] \[ **;** \| **,** ]

A trailing `;` or `,` suppresses the newline so the next **Print** call continues on the same line; without a trailing separator, the pen advances to the start of the next line.

```vb
Me.CurrentX = 10 : Me.CurrentY = 10
Me.Print "Name: "; sName, "Age: "; nAge      ' two fields, tab-separated
Me.Print                                     ' blank line
Me.Print "Total: " & Format$(Total, "0.00")
```

### PrintForm

Sends a screen-shot of the form's current visual state to the default printer through the [**Printer**](/en/official/Reference/VB/Printer) object.

Syntax: *object*.**PrintForm** [ *ImplicitEndDoc* [, *OutputAtCurrentPosition* ] ]

*ImplicitEndDoc*
: *optional* When **True** (default), the print job is finalised before returning; when **False**, the form is sent as a page but the print job stays open for further output.

*OutputAtCurrentPosition*
: *optional* When **True**, the form is rendered at the printer's current pen position rather than at the page origin. **Boolean**, default **False**.

### PSet

Sets a single pixel on the form to a specified colour.

Syntax: *object*.**PSet** [ **Step** ] ( *X*, *Y* ) [, *Color* ]

*X*, *Y*
: *required* The pixel position, in [**ScaleMode**](#scalemode) units. **Step** makes the position relative to ([**CurrentX**](#currentx), [**CurrentY**](#currenty)).

*Color*
: *optional* An **OLE_COLOR**; defaults to [**ForeColor**](#forecolor).

### Refresh

Forces an immediate repaint of the form, raising [**Paint**](#paint) when [**AutoRedraw**](#autoredraw) is **False**.

Syntax: *object*.**Refresh**

### Scale

Sets the form's logical drawing rectangle in a single call by assigning [**ScaleLeft**](#scaleleft), [**ScaleTop**](#scaletop), [**ScaleWidth**](#scalewidth), and [**ScaleHeight**](#scaleheight). Switches [**ScaleMode**](#scalemode) to **vbUser**. Calling **Scale** with no arguments resets the rectangle to a 1-to-1 mapping with the client area in pixels.

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
: *optional* Members of [**ScaleModeConstants**](/en/official/Reference/VBRUN/Constants/ScaleModeConstants). Default to the current **ScaleMode** when omitted.

### ScaleY

Converts a vertical length from one [**ScaleMode**](#scalemode) to another.

Syntax: *object*.**ScaleY**( *Height* [, *FromScale* [, *ToScale* ] ] )

*Height*
: *required* A **Single** giving the source length.

*FromScale*, *ToScale*
: *optional* Members of [**ScaleModeConstants**](/en/official/Reference/VBRUN/Constants/ScaleModeConstants). Default to the current **ScaleMode** when omitted.

### SetFocus

Activates the form and gives input focus to the control whose [**TabIndex**](/en/official/Reference/VB/TextBox#tabindex) is `0` (or to whichever control last held focus on this form).

Syntax: *object*.**SetFocus**

### Show

Makes the form visible. Triggers [**Load**](#load) on the first call.

Syntax: *object*.**Show** [ *Modal* [, *OwnerForm* ] ]

*Modal*
: *optional* A member of [**FormShowConstants**](/en/official/Reference/VBRUN/Constants/FormShowConstants): **vbModeless** (0, default --- the call returns immediately) or **vbModal** (1 --- the call blocks until the form is closed and the user cannot interact with other forms).

*OwnerForm*
: *optional* For modal shows, the form that is disabled while this form is up; defaults to the currently active form.

### TextHeight

Returns the height that the given string would occupy when drawn with the form's current [**Font**](#font), in [**ScaleMode**](#scalemode) units.

Syntax: *object*.**TextHeight**( *Str* )

*Str*
: *required* A **String** to measure.

### TextWidth

Returns the width that the given string would occupy when drawn with the form's current [**Font**](#font), in [**ScaleMode**](#scalemode) units.

Syntax: *object*.**TextWidth**( *Str* )

*Str*
: *required* A **String** to measure.

### ValidateControls

Fires the **Validate** event of the currently active control on this form. If the handler sets *Cancel* to **True**, **ValidateControls** raises run-time error 380 (*Invalid property value*); the caller can wrap this with `On Error` to detect a failed validation. Useful for checking pending input before saving or closing.

Syntax: *object*.**ValidateControls**

### WhatsThisMode

Enters Windows' "What's This?" cursor mode --- the next click on a control raises that control's help instead of activating it. [**WhatsThisHelp**](#whatsthishelp) must be **True**.

Syntax: *object*.**WhatsThisMode**

### ZOrder

Brings the form to the front or back of the top-level z-order.

Syntax: *object*.**ZOrder** [ *Position* ]

*Position*
: *optional* A member of [**ZOrderConstants**](/en/official/Reference/VBRUN/Constants/ZOrderConstants): **vbBringToFront** (0, default) or **vbSendToBack** (1).

## Events

### Activate

Raised when the form becomes the active window in the application --- either after [**Load**](#load) for the first show, or whenever it gains activation back from another window.

Syntax: *object*\_**Activate**( )

### Click

Raised when the user single-clicks the form's client area (i.e. not over any child control).

Syntax: *object*\_**Click**( )

### DblClick

Raised when the user double-clicks the form's client area.

Syntax: *object*\_**DblClick**( )

### Deactivate

Raised when another window in the application takes activation away from this form. Not raised when activation moves to a window in a different application.

Syntax: *object*\_**Deactivate**( )

### DPIChange

Raised when the form moves to a monitor with a different DPI scale, *but only* when the application is per-monitor DPI aware (`PROCESS_PER_MONITOR_DPI_AWARE`). The event's *NewDPI* argument gives the new effective DPI; child controls re-scale themselves automatically. New in twinBASIC.

Syntax: *object*\_**DPIChange**( *NewDPI* **As Long** )

### DragDrop

Raised on the destination control when a manual drag operation ends over it.

Syntax: *object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

Raised on the control under the cursor while a manual drag operation is in progress.

Syntax: *object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### GotFocus

Raised when the form receives the input focus and no enabled child control of the form is in a position to take it instead. A form with no focusable child controls receives focus directly.

Syntax: *object*\_**GotFocus**( )

### Initialize

Raised once, before the underlying window is created and before any of the form's child controls exist. Useful for setting initial values on form-level fields. The form's controls cannot be referenced from this event.

Syntax: *object*\_**Initialize**( )

### KeyDown

Raised when the user presses any key. Fires on the focused control by default; with [**KeyPreview**](#keypreview) **True**, fires on the form first.

Syntax: *object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

Raised when the user types a character that produces an ANSI keystroke. Fires on the focused control by default; with [**KeyPreview**](#keypreview) **True**, fires on the form first.

Syntax: *object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

Raised when the user releases a key. Fires on the focused control by default; with [**KeyPreview**](#keypreview) **True**, fires on the form first.

Syntax: *object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LinkClose

::: info
Reserved for compatibility with VB6's DDE feature; not currently raised in twinBASIC.
:::

### LinkError

::: info
Reserved for compatibility with VB6's DDE feature; not currently raised in twinBASIC.
:::

### LinkExecute

::: info
Reserved for compatibility with VB6's DDE feature; not currently raised in twinBASIC.
:::

### LinkOpen

::: info
Reserved for compatibility with VB6's DDE feature; not currently raised in twinBASIC.
:::

### Load

Raised after the form's window and all controls have been created, just before the form first appears on screen. The classic place to populate controls, attach data sources, and perform any initialisation that needs the controls to exist. **Default event.**

Syntax: *object*\_**Load**( )

### LostFocus

Raised when the form loses the input focus.

Syntax: *object*\_**LostFocus**( )

### MouseDown

Raised when the user presses any mouse button over the form's client area.

Syntax: *object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

Raised when the cursor moves over the form's client area.

Syntax: *object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

Raised when the user releases a mouse button over the form's client area.

Syntax: *object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseWheel

Raised when the mouse wheel turns over the form. New in twinBASIC.

Syntax: *object*\_**MouseWheel**( *Delta* **As Integer**, *Horizontal* **As Boolean** )

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

Raised on the source control at the start of an OLE drag, so the application can populate the **DataObject** and choose the allowed effects.

Syntax: *object*\_**OLEStartDrag**( *Data* **As DataObject**, *AllowedEffects* **As Long** )

### Paint

Raised when an invalidated portion of the form needs to be redrawn. Suppressed when [**AutoRedraw**](#autoredraw) is **True** --- the form's persistent off-screen buffer is blitted to the screen instead.

Syntax: *object*\_**Paint**( )

### QueryUnload

Raised before the form unloads, giving the application a chance to confirm or cancel the close. Setting *Cancel* to non-zero keeps the form open. Always raised before [**Unload**](#unload).

Syntax: *object*\_**QueryUnload**( *Cancel* **As Integer**, *UnloadMode* **As Integer** )

*Cancel*
: Set to non-zero (any non-zero value, conventionally **1**) to cancel the close.

*UnloadMode*
: A member of [**QueryUnloadConstants**](/en/official/Reference/VBRUN/Constants/QueryUnloadConstants) identifying what triggered the close --- the close button, code, Windows shutdown, the MDI parent, or the owner form.

### Resize

Raised when the form is resized --- by the user, by code, by the OS following a [**WindowState**](#windowstate) change, or by initial layout during the first show.

Syntax: *object*\_**Resize**( )

### Terminate

Raised after the form's window has been destroyed and the class instance is about to be released. The controls are no longer accessible at this point.

Syntax: *object*\_**Terminate**( )

### Unload

Raised after [**QueryUnload**](#queryunload) approves and before the form's window is destroyed. Setting *Cancel* to non-zero keeps the form open and prevents the unload.

Syntax: *object*\_**Unload**( *Cancel* **As Integer** )

*Cancel*
: Set to non-zero (any non-zero value, conventionally **1**) to cancel the unload.
