---
title: OptionButton
parent: VB Package
permalink: /tB/Packages/VB/OptionButton/
---

# OptionButton class

An **OptionButton** is a Win32 native control that displays a small round selector, optionally followed by a text caption, used to give the user a single choice within a group of related options. Option buttons that share a [**Container**](#container) form a *mutually exclusive group*: selecting one automatically clears every other option button in the same container.

The control is normally placed on a [**Form**](/official/Reference/VB/Form/), [**Frame**](/official/Reference/VB/Frame/), or **UserControl** at design time. The default property is [**Value**](#value) and the default event is [**Click**](#click).

```vb
Private Sub Form_Load()
    optHTML.Caption     = "&HTML"
    optMarkdown.Caption = "&Markdown"
    optPlain.Caption    = "&Plain text"
    optHTML.Value       = True            ' default selection
End Sub

Private Sub optHTML_Click()
    Debug.Print "Output format: HTML"
End Sub
```


## Mutual exclusion

Setting [**Value**](#value) to **True** on one option button clears every other option button whose [**Container**](#container) is the same control --- typically the parent form or a [**Frame**](/official/Reference/VB/Frame/). Option buttons in sibling frames are not affected, so a single form can host any number of independent groups: drop the buttons that belong to one group onto a frame, and the buttons that belong to a different group onto another frame (or directly onto the form).

```vb
' Two independent groups on one form:
'   fraSize:   optSmall, optMedium, optLarge   (children of fraSize)
'   fraColour: optRed, optGreen, optBlue       (children of fraColour)
```

Setting [**Value**](#value) to **False** never deselects another button --- there is no automatic *fallback* to a different option, so applications normally guarantee that exactly one button in each group is selected by setting one of them to **True** at start-up. Assigning **False** to the currently selected button leaves the group with no selection until the user (or code) selects another one.

## Click semantics

[**Click**](#click) is raised only when [**Value**](#value) transitions from **False** to **True** --- whether the user clicked the button, pressed its access key, or assigned **True** in code. Re-clicking an already selected option button does nothing, and assigning **False** to a selected button does *not* raise [**Click**](#click). The event also does not fire while the form is loading; it starts firing once the control's [**Initialize**](#initialize) event has run.

## Caption and mnemonics

The text shown next to (or, with [**Alignment**](#alignment) `tbRightJustify`, before) the selector comes from [**Caption**](#caption). An ampersand in the caption marks the next character as a keyboard mnemonic: pressing **Alt+** that character moves the focus to the option button and selects it. Use `&&` to display a literal ampersand.

```vb
optTerms.Caption = "I &agree to the terms"
optTerms.Caption = "Use && in folder names"   ' renders as: Use & in folder names
```

## Graphical style

When [**Style**](#style) is **vbButtonGraphical**, the option button is owner-drawn and displays the bitmaps assigned to [**Picture**](#picture), [**DownPicture**](#downpicture), and [**DisabledPicture**](#disabledpicture) instead of the standard round selector. [**PictureAlignment**](#picturealignment), [**Padding**](#padding), and [**PictureDpiScaling**](#picturedpiscaling) control how the picture is positioned relative to the caption.

## Properties

### Alignment

Specifies the side of the selector on which the [**Caption**](#caption) text appears.

Syntax: *object*.**Alignment** [ = *value* ]

*value*
: A member of [**AlignmentConstantsNoCenter**](/official/Reference/VBRUN/Constants/AlignmentConstantsNoCenter): **tbLeftJustify** (0, default --- caption to the right of the selector) or **tbRightJustify** (1 --- caption to the left of the selector).

### Anchors

The set of edges of the parent that the option button's corresponding edges follow when the parent resizes. Read-only --- assign individual `.Left`, `.Top`, `.Right`, `.Bottom` flags through the returned **Anchors** object.

### Appearance

Determines how the control's border is drawn by the OS. A member of [**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants): **vbAppearFlat** or **vbAppear3d** (default).

### BackColor

The background colour, as an **OLE_COLOR**. Defaults to the system 3-D face colour.

### Caption

The text displayed next to the option button. An ampersand marks the next character as a mnemonic; `&&` produces a literal ampersand. The string is read directly from the underlying window --- assigning to **Caption** is reflected immediately.

Syntax: *object*.**Caption** [ = *string* ]

### CausesValidation

Determines whether the previously focused control's [**Validate**](#validate) event runs before this control receives the focus. **Boolean**, default **True**.

### Container

The control that hosts this option button --- typically a [**Frame**](/official/Reference/VB/Frame/) or the parent form. Read with **Get**, change with **Set**. Setting **Container** at run time re-parents the option button into a different group; it is automatically excluded from the old group's mutual-exclusion set and included in the new one.

### ControlType

A read-only [**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants) value identifying this control as an option button. Always **vbOptionButton**.

### DisabledPicture

A **StdPicture** drawn instead of [**Picture**](#picture) when the control is disabled and [**Style**](#style) is **vbButtonGraphical**.

### Dock

Where the option button is docked within its container. A member of [**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants): **vbDockNone** (default), **vbDockLeft**, **vbDockTop**, **vbDockRight**, **vbDockBottom**, or **vbDockFill**. Docked controls ignore [**Anchors**](#anchors).

### DownPicture

A **StdPicture** drawn instead of [**Picture**](#picture) while the control is in the depressed/selected state, when [**Style**](#style) is **vbButtonGraphical**.

### DragIcon

A **StdPicture** used as the mouse cursor while the control is being drag-and-dropped (see [**Drag**](#drag) and [**DragMode**](#dragmode)).

### DragMode

Whether the control should drag itself when the user holds the mouse over it. A member of [**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants): **vbManual** (0, default --- call [**Drag**](#drag) from code) or **vbAutomatic** (1).

### Enabled

Determines whether the control accepts user input. A disabled option button shows its current value but is dimmed and ignores keyboard and mouse interaction. **Boolean**, default **True**.

### Font

The **StdFont** used to render [**Caption**](#caption). The convenience properties **FontName**, **FontSize**, **FontBold**, **FontItalic**, **FontStrikethru**, and **FontUnderline** read or write the corresponding members of this object.

### ForeColor

The text colour for the caption, as an **OLE_COLOR**. Defaults to the system button-text colour.

### Height

The control's height, in twips by default (or in the container's **ScaleMode** units). **Single**.

### HelpContextID

A **Long** identifying a topic in the application's help file, retrieved when the user presses **F1** while the control has focus.

### hWnd

The Win32 window handle for the underlying button, as a **LongPtr**. Read-only. Useful for passing to API functions.

### Index

When the control is part of a control array, the **Long** zero-based index of this instance within the array. Reading **Index** on a non-array instance raises run-time error 343 (*Object not an array*). Read-only at run time.

### Left

The horizontal distance from the left edge of the container to the left edge of the control. **Single**.

### MaskColor

::: info
Reserved for compatibility with VB6; not currently implemented in twinBASIC.
:::

### MouseIcon

A **StdPicture** used as the mouse cursor when [**MousePointer**](#mousepointer) is **vbCustom** and the pointer is over the control.

### MousePointer

The mouse cursor shown when the pointer is over the control. A member of [**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants).

### Name

The unique design-time name of the control on its parent form. Read-only at run time.

### OLEDropMode

How the control responds to OLE drops. A restricted member of [**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants): **vbOLEDropNone** or **vbOLEDropManual**. Automatic-drop mode is not supported on an OptionButton.

### Opacity

The control's opacity as a percentage (0--100, default 100). Values outside the range are clamped on **Initialize**. Requires Windows 8 or later for child controls.

### Padding

The number of pixels of empty space inserted between the picture and the caption (when [**PictureAlignment**](#picturealignment) is **vbAlignLeft** or **vbAlignRight**) or between the caption and the corresponding edge (when **vbAlignTop** or **vbAlignBottom**). **Long**, default 2. Only meaningful when [**Style**](#style) is **vbButtonGraphical**.

### Parent

A reference to the [**Form**](/official/Reference/VB/Form/) (or **UserControl**) that ultimately contains this control. Read-only. Distinct from [**Container**](#container), which returns the immediate parent --- for an option button placed inside a [**Frame**](/official/Reference/VB/Frame/), **Container** returns the frame and **Parent** returns the form.

### Picture

A **StdPicture** drawn on the control when [**Style**](#style) is **vbButtonGraphical**. Assigning **Nothing** restores an empty picture rather than removing the bitmap surface.

### PictureAlignment

How [**Picture**](#picture) is positioned relative to the caption when [**Style**](#style) is **vbButtonGraphical**. A member of [**AlignConstants**](/official/Reference/VBRUN/Constants/AlignConstants): **vbAlignNone**, **vbAlignTop** (default), **vbAlignBottom**, **vbAlignLeft**, **vbAlignRight**.

### PictureDpiScaling

When **True**, scales [**Picture**](#picture), [**DownPicture**](#downpicture), and [**DisabledPicture**](#disabledpicture) by the current DPI factor before drawing. **Boolean**, default **False**.

### RightToLeft

::: info
Reserved for compatibility with VB6; not currently implemented in twinBASIC. Use [**Alignment**](#alignment) to flip the caption to the left of the selector.
:::

### Style

Selects between the standard Win32 option-button appearance and an owner-drawn graphical button. A member of [**ButtonConstants**](/official/Reference/VBRUN/Constants/ButtonConstants): **vbButtonStandard** (0, default) or **vbButtonGraphical** (1). Changing **Style** at run time recreates the underlying window.

### TabIndex

The position of the control in the form's TAB-key navigation order. **Long**.

### TabStop

Whether the user can reach the control by pressing the **TAB** key. **Boolean**, default **True**. The TAB-key navigation also follows the option-button group convention: once the focus enters a group, the arrow keys move it (and the selection) between the group's members rather than between unrelated controls. A disabled control is skipped regardless of this setting.

### Tag

A free-form **String** the application can use to associate custom data with the control. Ignored by the framework.

### ToolTipText

A multi-line **String** displayed as a tooltip when the user hovers over the control.

### Top

The vertical distance from the top of the container to the top of the control. **Single**.

### TransparencyKey

An **OLE_COLOR** that, when set, becomes fully transparent in the rendered control. Default `-1` disables the effect. Requires Windows 8 or later for child controls.

### UseMaskColor

::: info
Reserved for compatibility with VB6; not currently implemented in twinBASIC.
:::

### Value

The current state of the option button. **Default property.**

Syntax: *object*.**Value** [ = *value* ]

*value*
: A **Boolean**: **True** if the option button is selected, **False** if cleared.

Assigning **True** clears every other option button in the same [**Container**](#container) and raises [**Click**](#click). Assigning **False** clears just this button without affecting any other and does not raise [**Click**](#click). Assigning the value the button already holds does nothing.

### Visible

Whether the control is shown. **Boolean**, default **True**.

### VisualStyles

Whether the OS theme engine should be used when drawing the control. **Boolean**.

### WhatsThisHelpID

A **Long** identifying a "What's This?" help-pop-up topic in the application's help file. See [**ShowWhatsThis**](#showwhatsthis).

### Width

The control's width. **Single**.

## Methods

### Drag

Begins, completes, or cancels a manual drag-and-drop operation. Typically called from a [**MouseDown**](#mousedown) handler when [**DragMode**](#dragmode) is **vbManual**.

Syntax: *object*.**Drag** [ *Action* ]

*Action*
: *optional* A member of [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants): **vbCancel** (0), **vbBeginDrag** (1, default), or **vbEndDrag** (2).

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

### Refresh

Forces an immediate repaint of the control.

Syntax: *object*.**Refresh**

### SetFocus

Moves the input focus to the control. The control must be both [**Visible**](#visible) and [**Enabled**](#enabled), or run-time error 5 (*Invalid procedure call or argument*) is raised.

Syntax: *object*.**SetFocus**

### ShowWhatsThis

Displays the topic identified by [**WhatsThisHelpID**](#whatsthishelpid) as a "What's This?" pop-up.

Syntax: *object*.**ShowWhatsThis**

### ZOrder

Brings the control to the front or back of its sibling stack.

Syntax: *object*.**ZOrder** [ *Position* ]

*Position*
: *optional* A member of [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants): **vbBringToFront** (0, default) or **vbSendToBack** (1).

## Events

### Click

Raised when [**Value**](#value) transitions from **False** to **True** --- whether the user clicked the selector, pressed the access key, or assigned **True** in code. Not raised on the form's first display, on a click that doesn't change the value, or when **Value** is set to **False**. **Default event.**

Syntax: *object*\_**Click**( )

### DblClick

Raised when the user double-clicks the option button. The first click of the pair also raises [**Click**](#click) if it changes [**Value**](#value); the second is delivered here.

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

Raised once, after the control's underlying window has been created and its design-time [**Value**](#value) has been applied. [**Click**](#click) does not fire until **Initialize** has run, so the design-time selection does not raise a spurious event.

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

### Validate

Raised when the focus is moving to another control whose [**CausesValidation**](#causesvalidation) is **True**. Setting *Cancel* to **True** keeps the focus on this control.

Syntax: *object*\_**Validate**( *Cancel* **As Boolean** )
