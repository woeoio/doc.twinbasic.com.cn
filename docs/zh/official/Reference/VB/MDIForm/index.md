---
title: MDIForm
parent: VB Package
permalink: /tB/Packages/VB/MDIForm/
---

# MDIForm class

An **MDIForm** is a top-level Win32 window that hosts an *MDI client area* --- a recessed working surface in which one or more [**Form**](/official/Reference/VB/Form/) instances marked as MDI children appear, each with its own caption bar inside the parent. A twinBASIC project may contain at most one MDI form. Unlike an ordinary [**Form**](/official/Reference/VB/Form/), an MDIForm has no drawing surface, no font properties, and no graphics primitives --- it is purely a frame for its children, plus a host for menus, toolbars, and (optionally) a single background [**Picture**](#picture) drawn behind the children.

The default property is [**Controls**](#controls) and the default event is [**Load**](#load).

```vb
' In MDIForm1's code-behind:
Private Sub MDIForm_Load()
    Caption = "Editor"
    AutoShowChildren = True
End Sub

Private Sub mnuWindowCascade_Click()
    Arrange vbCascade
End Sub

' In a child form (Form1) marked MDIChild = True:
Private Sub Form_Load()
    Caption = "Untitled"
End Sub

' In a startup module:
Sub Main()
    MDIForm1.Show
    Form1.Show                      ' opens inside MDIForm1's client area
End Sub
```


## Lifecycle

The MDIForm goes through the same six events as a regular [**Form**](/official/Reference/VB/Form/) from creation to destruction:

| Event                            | When                                                                                |
|----------------------------------|-------------------------------------------------------------------------------------|
| [**Initialize**](#initialize)    | Before the underlying window exists. The form's children and controls do not yet exist. |
| [**Load**](#load)                | After the window has been created and the child controls (toolbar bands, status bars, menus) have been instantiated, before the form first appears. |
| [**Activate**](#activate)        | When the MDI parent or one of its child forms becomes active.                       |
| [**Deactivate**](#deactivate)    | When activation moves to another window outside the MDI group.                      |
| [**QueryUnload**](#queryunload)  | Before unload. Setting *Cancel* to non-zero keeps the form open. Closing the MDI parent first runs **QueryUnload** on every open MDI child, then on the parent itself. |
| [**Unload**](#unload)            | After **QueryUnload** approves. Setting *Cancel* to non-zero keeps the form open.   |
| [**Terminate**](#terminate)      | After the window has been destroyed and the class instance is released.             |

## MDI children

An MDI child is any [**Form**](/official/Reference/VB/Form/) whose **MDIChild** property is **True** (set at design time). Showing or unhiding such a form parents it to the MDI client area: its [**Left**](/official/Reference/VB/Form/#left) and [**Top**](/official/Reference/VB/Form/#top) become relative to the client area's upper-left corner, its title bar is drawn inside the parent rather than on the desktop, and maximising it merges its system menu and minimise/maximise buttons into the parent's title bar.

[**ActiveForm**](#activeform) returns the currently focused child, or **Nothing** when no child is open. [**Activate**](#activate) and [**Deactivate**](#deactivate) on the MDI parent fire only when activation crosses the MDI group's outer boundary; activation moves *within* the group fire **Activate** / **Deactivate** on the affected child forms instead.

[**AutoShowChildren**](#autoshowchildren) decides what happens when an MDI child class is loaded but not explicitly shown --- when **True** (default), the child is made visible automatically; when **False**, the child stays hidden until code calls **Show** on it.

[**Arrange**](#arrange) lays the open children out in a single call: cascade, tile horizontally, tile vertically, or arrange the icons of minimised children along the bottom edge.

```vb
mnuWindowCascade.Click       => Me.Arrange vbCascade
mnuWindowTileH.Click         => Me.Arrange vbTileHorizontal
mnuWindowTileV.Click         => Me.Arrange vbTileVertical
mnuWindowArrangeIcons.Click  => Me.Arrange vbArrangeIcons
```

## Window appearance

An MDIForm always uses the sizable border style --- there is no [**BorderStyle**](/official/Reference/VB/Form/#borderstyle) property, the title bar is always present, the system menu and minimise / maximise buttons are always shown, and the form always appears in the taskbar. [**Caption**](#caption) sets the title-bar text. [**Icon**](#icon) supplies the small/large icon used by the system menu, the taskbar, and Alt-Tab. [**WindowState**](#windowstate) ([**FormWindowStateConstants**](/official/Reference/VBRUN/Constants/FormWindowStateConstants)) reads or sets normal / minimised / maximised state at run time.

[**MinWidth**](#minwidth), [**MinHeight**](#minheight), [**MaxWidth**](#maxwidth), and [**MaxHeight**](#maxheight) constrain the *client area* in twips during interactive resizing. [**Moveable**](#moveable) decides whether the user can drag the form by its title bar.

[**Opacity**](#opacity) and [**TransparencyKey**](#transparencykey) enable Windows' layered-window features for translucent forms and cut-out shapes.

[**BackColor**](#backcolor) paints the MDI client area's background --- defaults to the system **vbApplicationWorkspace** colour rather than 3-D face. [**Picture**](#picture), when set, is drawn over **BackColor** as the client-area backdrop, scaled to fill the area for metafiles and centred at its natural size for bitmaps. [**PictureDpiScaling**](#picturedpiscaling) scales bitmaps by the current DPI factor before drawing. There is no on-screen drawing API on an MDIForm --- the [**Cls**](/official/Reference/VB/Form/#cls), [**Circle**](/official/Reference/VB/Form/#circle), [**Line**](/official/Reference/VB/Form/#line), [**PSet**](/official/Reference/VB/Form/#pset), [**PaintPicture**](/official/Reference/VB/Form/#paintpicture), and **Print** members of the **Form** interface raise run-time error 438 (*Object doesn't support this property or method*) when called on an MDIForm.

A vertical and a horizontal scroll bar appear automatically when an MDI child is moved or sized so that its rectangle extends beyond the visible client area; this is fixed at design time through the **ScrollBars** property of the MDI parent and is not exposed at run time.

## Menus and pop-ups

Menu structures designed at form-design time appear automatically in the MDIForm's title bar. When an MDI child is maximised, the child's own menu (if any) is merged into the parent's menu bar, replacing it for as long as the child stays maximised. The classic VB6 *window-list* feature --- a menu sub-tree that lists every open MDI child for quick switching --- is supported automatically when a [**Menu**](/official/Reference/VB/Menu/) on the MDIForm has its **WindowList** property set.

[**PopUpMenu**](#popupmenu) displays one of the form's menus as a context-menu pop-up at a specified location, raising the menu's **Click** event when the user picks an item.

```vb
Private Sub MDIForm_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
    If Button = vbRightButton Then PopUpMenu mnuContext
End Sub
```

## Differences from Form

Because the MDIForm is a frame, not a drawing surface, the following members of the **Form** interface are *not* supported on it --- accessing them raises run-time error 380 (properties) or 438 (methods):

| Category                     | Members                                                                              |
|------------------------------|--------------------------------------------------------------------------------------|
| Drawing                      | **AutoRedraw**, **ClipControls**, **HasDC**, **hDC**, **Image**, **CurrentX**, **CurrentY**, **DrawMode**, **DrawStyle**, **DrawWidth**, **FillColor**, **FillStyle**, **ForeColor**, **FontTransparent**, **Cls**, **Circle**, **Line**, **PSet**, **PaintPicture** |
| Font                         | **Font**, **FontName**, **FontSize**, **FontBold**, **FontItalic**, **FontStrikethru**, **FontUnderline**, **TextWidth** |
| Geometry                     | **ScaleLeft**, **ScaleTop**, **ScaleMode**, **Scale**, **ScaleX**, **ScaleY** ([**ScaleWidth**](#scalewidth) and [**ScaleHeight**](#scaleheight) are supported but read-only) |
| Window chrome                | **BorderStyle**, **ControlBox**, **MaxButton**, **MinButton**, **ShowInTaskbar**, **WhatsThisButton** |
| Other                        | **KeyPreview** (and the [**Form**](/official/Reference/VB/Form/)'s **KeyDown** / **KeyUp** / **KeyPress** events do not exist on **MDIForm**), **MDIChild**, **NegotiateMenus**, **Palette**, **PaletteMode**, **PrintForm**, **Point**, **Refresh** (raises 438 on an MDIForm even though it works on a regular Form) |
| Behaviour quirk              | **TextHeight** returns `0` instead of raising. (VB6 bug retained for compatibility.) |

## Properties

### ActiveControl

The control on the active MDI child that currently has the input focus, as a **Control** object, or **Nothing** when no child is focused. Read-only.

### ActiveForm

The currently active MDI child form, as an **Object**, or **Nothing** when no child is open. Read-only. Updated each time activation moves between children, just before the corresponding [**Activate**](#activate) and [**Deactivate**](#deactivate) events fire on the child forms.

### AlwaysShowKeyboardCues

When **True**, the form always shows underlines on access-key characters in [**Caption**](#caption)s and menu items, instead of only displaying them after the user presses **Alt**. **Boolean**, read-only at run time. Set at design time.

### Appearance

A member of [**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants): **vbAppearFlat** or **vbAppear3d** (default).

::: info
Retained for VB6 compatibility; the property has no observable effect on an MDI form.
:::

### AutoShowChildren

When **True** (default), loading an MDI child class also shows it; when **False**, child classes can be loaded into memory without becoming visible until code calls **Show** on them. **Boolean**.

### BackColor

The colour painted in the MDI client area, as an **OLE_COLOR**. Defaults to the system **vbApplicationWorkspace** colour. Used as the canvas behind [**Picture**](#picture) and behind every MDI child's title bar and outer border.

### Caption

The title-bar text. **String**.

Syntax: *object*.**Caption** [ = *string* ]

When an MDI child is maximised, Windows decorates **Caption** with the child's caption in square brackets --- `Editor - [Untitled]` --- and the application normally lets that decoration stay automatic by leaving **Caption** alone.

### Controls

The collection of every control hosted by this form, indexable by control name or zero-based position. **Default property.** Read-only --- controls are added to the collection by the runtime, not by user code. The collection contains the form's menus, toolbars, status bars, and any aligned controls; MDI children are *not* members of this collection (they are independent top-level forms hosted in the MDI client area, accessible through [**ActiveForm**](#activeform) and the runtime's **Forms** collection).

### ControlType

A read-only [**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants) value identifying this control as a form. Always **vbForm**.

### Count

The number of controls in [**Controls**](#controls), as a **Long**. Read-only. Equivalent to `Me.Controls.Count`.

### DpiScaleFactorX

The horizontal DPI scale factor of the monitor the form is currently on, as a **Double**. `1.0` at 96 DPI, `1.25` at 120 DPI, `1.5` at 144 DPI, and so on. Read-only.

### DpiScaleFactorY

The vertical DPI scale factor of the monitor the form is currently on. Currently always equal to [**DpiScaleFactorX**](#dpiscalefactorx). Read-only.

### Enabled

Determines whether the form accepts user input. A disabled MDI parent ignores keyboard and mouse input, dims its title bar, and disables every open MDI child. **Boolean**, default **True**.

### Height

The form's outer height, in twips (or in the calling code's **ScaleMode** units). **Double**. Constrained at run time by [**MinHeight**](#minheight) and [**MaxHeight**](#maxheight) when those are non-zero.

### HelpContextID

A **Long** identifying a topic in the application's help file, retrieved when the user presses **F1** while the form has focus.

### hWnd

The Win32 window handle for the MDI parent frame, as a **LongPtr**. Read-only. Useful for passing to API functions. The MDI client area is a separate child window with its own handle, accessible through Win32 calls only.

### Icon

The icon shown on the title bar, in the taskbar, and in Alt-Tab. A **StdPicture** of type **vbPicTypeIcon**. Assigning a non-icon picture leaves the icon unchanged.

### Left

The horizontal position of the form's outer rectangle, in twips (or the calling code's **ScaleMode** units), measured from the left edge of the screen. **Double**.

### LinkMode

::: info
Reserved for compatibility with VB6's DDE feature; not currently implemented in twinBASIC.
:::

### LinkTopic

::: info
Reserved for compatibility with VB6's DDE feature; not currently implemented in twinBASIC.
:::

### MaxHeight

The maximum height of the form's *client area*, in twips. **Double**, default `0` (no limit). Honoured during interactive resizing.

### MaxWidth

The maximum width of the form's *client area*, in twips. **Double**, default `0` (no limit). Honoured during interactive resizing.

### MinHeight

The minimum height of the form's *client area*, in twips. **Double**, default `0` (no limit). Honoured during interactive resizing.

### MinWidth

The minimum width of the form's *client area*, in twips. **Double**, default `0` (no limit). Honoured during interactive resizing.

### MouseIcon

A **StdPicture** used as the mouse cursor when [**MousePointer**](#mousepointer) is **vbCustom** and the pointer is over the form's frame or client area (and not over a child form's own surface).

### MousePointer

The mouse cursor shown when the pointer is over the form's frame or client area. A member of [**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants).

### Moveable

Whether the user can drag the form by its title bar. **Boolean**, default **True**.

### Name

The unique design-time name of the form. Read-only at run time. Also the class name of the generated form class.

### NegotiateToolbars

::: info
Reserved for compatibility with VB6's ActiveX-document menu negotiation feature; not currently implemented in twinBASIC.
:::

### OLEDropMode

How the form responds to OLE drops over its frame and client area. A restricted member of [**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants): **vbOLEDropNone** or **vbOLEDropManual**. Automatic-drop mode is not supported on an MDIForm.

### Opacity

The form's opacity as a percentage (0--100, default 100). Values outside the range are clamped on **Initialize**. Values below 100 cause the form to become a layered window; the open MDI children become translucent along with the parent.

### Picture

A **StdPicture** drawn as the MDI client area's background. Painted over [**BackColor**](#backcolor), behind every MDI child. Bitmaps are drawn at their natural size from the upper-left corner; metafiles are stretched to fill the entire client area. Assigning **Nothing** removes the background.

### PictureDpiScaling

When **True**, [**Picture**](#picture) is scaled by the current DPI factor before drawing. **Boolean**, default **False**. Has no effect on metafile pictures (they are stretched regardless).

### RightToLeft

::: info
Reserved for compatibility with VB6; not currently implemented in twinBASIC.
:::

### ScaleHeight

The height of the MDI *client area* (the inset region that hosts the children), in twips. **Double**, read-only --- assigning to it raises run-time error 383 (*'ScaleHeight' property is read-only*).

### ScaleWidth

The width of the MDI *client area*, in twips. **Double**, read-only --- assigning to it raises run-time error 383.

### StartUpPosition

How the form's initial position is determined the first time it is shown. A member of [**StartUpPositionConstants**](/official/Reference/VBRUN/Constants/StartUpPositionConstants): **vbStartUpManual**, **vbStartUpOwner**, **vbStartUpScreen**, or **vbStartUpWindowsDefault** (default). Read-only at run time --- set at design time.

### TabFocusAutoSelect

When **True**, a [**TextBox**](/official/Reference/VB/TextBox/) on this form (or on any of its MDI children) whose own **TabFocusAutoSelect** is also **True** auto-selects its content when the focus enters it via the **TAB** key. **Boolean**, default **False**.

### Tag

A free-form **String** the application can use to associate custom data with the form. Ignored by the framework.

### Top

The vertical position of the form's outer rectangle, in twips (or the calling code's **ScaleMode** units), measured from the top edge of the screen. **Double**.

### TopMost

Whether the form sits in the always-on-top z-order layer. **Boolean**, read-only at run time. Set at design time.

### TransparencyKey

An **OLE_COLOR** that, when set, becomes fully transparent in the rendered form --- clicks pass through to whatever is underneath, and the corresponding pixels do not paint. Default `-1` disables the effect.

### Visible

Whether the form is shown. **Boolean**, default **True**. Setting **Visible** to **True** when the form was hidden is equivalent to calling [**Show**](#show) **vbModeless**; setting it to **False** is equivalent to calling [**Hide**](#hide). MDI children remain bound to the parent regardless of visibility --- hiding the parent hides every child as well.

### WhatsThisHelp

When **True**, [**WhatsThisMode**](#whatsthismode) enters Windows' "What's This?" cursor mode. **Boolean**, default **False**. The title-bar help-button feature is not available on an MDIForm.

### Width

The form's outer width, in twips (or in the calling code's **ScaleMode** units). **Double**. Constrained at run time by [**MinWidth**](#minwidth) and [**MaxWidth**](#maxwidth) when those are non-zero.

### WindowState

The window's normal/minimised/maximised state. A member of [**FormWindowStateConstants**](/official/Reference/VBRUN/Constants/FormWindowStateConstants): **vbNormal** (0, default), **vbMinimized** (1), or **vbMaximized** (2). Setting it at run time updates the window placement immediately if the form is visible.

## Methods

### Arrange

Lays the open MDI children out in a single call.

Syntax: *object*.**Arrange** *Arrangement*

*Arrangement*
: *required* A member of [**FormArrangeConstants**](/official/Reference/VBRUN/Constants/FormArrangeConstants): **vbCascade** (0), **vbTileHorizontal** (1), **vbTileVertical** (2), or **vbArrangeIcons** (3 --- line up the icons of minimised children along the bottom of the client area). Other values raise run-time error 5 (*Invalid procedure call or argument*).

### Close

Initiates the form's unload sequence --- [**QueryUnload**](#queryunload), then [**Unload**](#unload), then [**Terminate**](#terminate) --- preceded by the same sequence on every open MDI child. Either of the first two events on either the parent or any child can cancel the close by setting *Cancel* to non-zero. Equivalent to the language statement `Unload Me`.

Syntax: *object*.**Close**

### Hide

Hides the form without unloading it. The class instance, its children, and its controls are preserved; calling [**Show**](#show) (or assigning [**Visible**](#visible) = **True**) brings it back. Equivalent to assigning **Visible** = **False**.

Syntax: *object*.**Hide**

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

### PopUpMenu

Displays a [**Menu**](/official/Reference/VB/Menu/) as a context-menu pop-up at the specified location.

Syntax: *object*.**PopUpMenu** *Menu* [, *Flags* [, *X* [, *Y* [, *DefaultMenu* ] ] ] ]

*Menu*
: *required* The **Menu** control to display. The menu must already exist on the form.

*Flags*
: *optional* A combination of [**MenuControlConstants**](/official/Reference/VBRUN/Constants/MenuControlConstants) controlling alignment and which mouse buttons trigger the menu items.

*X*, *Y*
: *optional* The screen-relative position to anchor the menu at, in twips. Defaults to the current mouse position.

*DefaultMenu*
: *optional* The **Menu** sub-item to render in bold as the default action.

### SetFocus

Activates the form. If an MDI child is open, focus moves to whichever control on that child last held it; otherwise focus moves to the parent's frame.

Syntax: *object*.**SetFocus**

### Show

Makes the form visible. Triggers [**Load**](#load) on the first call.

Syntax: *object*.**Show** [ *Modal* [, *OwnerForm* ] ]

*Modal*
: *optional* A member of [**FormShowConstants**](/official/Reference/VBRUN/Constants/FormShowConstants): **vbModeless** (0, default --- the call returns immediately) or **vbModal** (1). MDI parents are normally shown modeless; modal display is accepted but unusual.

*OwnerForm*
: *optional* For modal shows, the form that is disabled while this form is up; defaults to the currently active form.

### ValidateControls

Fires the **Validate** event of the currently active control on the active MDI child. If the handler sets *Cancel* to **True**, **ValidateControls** raises run-time error 380 (*Invalid property value*); the caller can wrap this with `On Error` to detect a failed validation.

Syntax: *object*.**ValidateControls**

### WhatsThisMode

Enters Windows' "What's This?" cursor mode --- the next click on a control raises that control's help instead of activating it. [**WhatsThisHelp**](#whatsthishelp) must be **True**.

Syntax: *object*.**WhatsThisMode**

### ZOrder

Brings the form to the front or back of the top-level z-order.

Syntax: *object*.**ZOrder** [ *Position* ]

*Position*
: *optional* A member of [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants): **vbBringToFront** (0, default) or **vbSendToBack** (1).

## Events

### Activate

Raised when the MDI parent or any of its child forms becomes the active window in the application --- typically right after [**Load**](#load) for the first show, and whenever activation returns to the MDI group from another window.

Syntax: *object*\_**Activate**( )

### Click

Raised when the user single-clicks the MDI parent's frame area (i.e. the title bar's hit-test area or directly on the client-area background, with no MDI child covering the spot).

Syntax: *object*\_**Click**( )

### DblClick

Raised when the user double-clicks the MDI parent's frame area.

Syntax: *object*\_**DblClick**( )

### Deactivate

Raised when the MDI parent loses activation to another window outside the MDI group. Activation moving between the parent and its own children does not raise **Deactivate** on the parent.

Syntax: *object*\_**Deactivate**( )

### DPIChange

Raised when the form moves to a monitor with a different DPI scale, *but only* when the application is per-monitor DPI aware (`PROCESS_PER_MONITOR_DPI_AWARE`). The event's *NewDPI* argument gives the new effective DPI; child controls and MDI children re-scale themselves automatically. New in twinBASIC.

Syntax: *object*\_**DPIChange**( *NewDPI* **As Long** )

### DragDrop

Raised on the destination control when a manual drag operation ends over it.

Syntax: *object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

Raised on the control under the cursor while a manual drag operation is in progress.

Syntax: *object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### Initialize

Raised once, before the underlying window is created and before any of the form's child controls (or MDI children) exist. Useful for setting initial values on form-level fields. The form's controls cannot be referenced from this event.

Syntax: *object*\_**Initialize**( )

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

Raised after the MDI parent's window and all aligned child controls (toolbars, status bars, menus) have been created, just before the form first appears on screen. The classic place to populate menus dynamically and perform any initialisation that needs the controls to exist. **Default event.**

Syntax: *object*\_**Load**( )

### MouseDown

Raised when the user presses any mouse button over the MDI parent's client area (i.e. not over an MDI child).

Syntax: *object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

Raised when the cursor moves over the MDI parent's client area.

Syntax: *object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

Raised when the user releases a mouse button over the MDI parent's client area.

Syntax: *object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseWheel

Raised when the mouse wheel turns over the MDI parent's client area. New in twinBASIC.

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

### QueryUnload

Raised before the form unloads, giving the application a chance to confirm or cancel the close. Setting *Cancel* to non-zero keeps the form (and all its open MDI children) open. When the MDI parent is closing, **QueryUnload** is raised on every open MDI child *before* it is raised on the parent --- any child cancelling stops the cascade.

Syntax: *object*\_**QueryUnload**( *Cancel* **As Integer**, *UnloadMode* **As Integer** )

*Cancel*
: Set to non-zero (any non-zero value, conventionally **1**) to cancel the close.

*UnloadMode*
: A member of [**QueryUnloadConstants**](/official/Reference/VBRUN/Constants/QueryUnloadConstants) identifying what triggered the close --- the close button, code, Windows shutdown, or the MDI parent closing.

### Resize

Raised when the MDI parent is resized --- by the user, by code, by the OS following a [**WindowState**](#windowstate) change, or by initial layout during the first show. The event fires on the parent only; MDI children receive their own **Resize** events when the client-area resize cascades to them.

Syntax: *object*\_**Resize**( )

### Terminate

Raised after the form's window has been destroyed and the class instance is about to be released. The controls and MDI children are no longer accessible at this point.

Syntax: *object*\_**Terminate**( )

### Unload

Raised after [**QueryUnload**](#queryunload) approves and before the form's window is destroyed. Setting *Cancel* to non-zero keeps the form open and prevents the unload.

Syntax: *object*\_**Unload**( *Cancel* **As Integer** )

*Cancel*
: Set to non-zero (any non-zero value, conventionally **1**) to cancel the unload.
