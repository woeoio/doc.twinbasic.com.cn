---
title: OLE
parent: VB Package
permalink: /tB/Packages/VB/OLE/
---

# OLE class

An **OLE** *container* control hosts a linked or embedded OLE Automation object --- typically a Word document, an Excel spreadsheet, or any other registered OLE server --- directly on a form, and lets the user activate and edit the contained object in place via its registered verbs.

::: info
The OLE container control is a **VB6 compatibility stub** in twinBASIC. Almost every OLE-specific property, method, and event is currently unimplemented (each is flagged below). The inherited base-control members --- positioning, sizing, anchoring, focus, drag, mouse cursor --- do work normally, so a project ported from VB6 still parses and lays out the control on its form, but cannot create, embed, link, paste, save, or activate an actual OLE object through it.
:::

There is no default property. The default-designer event is [**Click**](#click).

```vb
' The OLE-specific calls below are not currently functional
' in twinBASIC; the example is given for reference only.
Private Sub Form_Load()
    OLE1.CreateEmbed vbNullString, "Excel.Sheet"   ' [Unimplemented]
End Sub

Private Sub OLE1_Click()
    OLE1.DoVerb vbOLEPrimary                       ' [Unimplemented]
End Sub
```


## Linked vs embedded objects

An OLE container holds either a *linked* object --- a reference to a document on disk that opens in its registered server when activated --- or an *embedded* object whose data is stored inside the host form's data stream. [**CreateLink**](#createlink) creates a linked object from an existing file; [**CreateEmbed**](#createembed) creates a fresh embedded object of a given class. [**OLEType**](#oletype) reports which form the current contents take, and [**OLETypeAllowed**](#oletypeallowed) restricts which forms the container will accept at design or run time.

[**SourceDoc**](#sourcedoc) and [**SourceItem**](#sourceitem) identify the linked file (and, for partial links, the item within it). [**Class**](#class) holds the ProgID of the embedded server (e.g. `"Word.Document"`, `"Excel.Sheet"`).

## Verbs

Each OLE server registers a set of *verbs* --- labelled actions like *Open*, *Edit*, or *Play*. [**FetchVerbs**](#fetchverbs) populates the per-instance verb list, exposed as the indexed [**ObjectVerbs**](#objectverbs), [**ObjectVerbFlags**](#objectverbflags), and [**ObjectVerbsCount**](#objectverbscount) properties. [**DoVerb**](#doverb) executes a verb by index --- passing **vbOLEPrimary** runs the server's primary verb, which is the action invoked by a double-click. [**AutoVerbMenu**](#autoverbmenu) controls whether right-clicking the control automatically pops up the verb menu.

## Activation and display

[**AutoActivate**](#autoactivate) chooses when the embedded object is activated for in-place editing --- manually, on focus, or on a double-click. [**DisplayType**](#displaytype) selects between rendering the object's content directly and rendering a registered icon. [**SizeMode**](#sizemode) chooses how the object's bitmap is fitted into the container (clipped, stretched, auto-sized, or zoomed).

## Updates and storage

A linked object's last-cached presentation can be re-fetched from its server with [**Update**](#update); [**UpdateOptions**](#updateoptions) decides whether updates happen automatically or only on demand. The container can be persisted out of an open file with [**SaveToFile**](#savetofile) (or [**SaveToOle1File**](#savetoole1file) for the legacy OLE1 stream format) and re-loaded with [**ReadFromFile**](#readfromfile), in each case using a Basic file number opened with **Open**. [**InsertObjDlg**](#insertobjdlg) and [**PasteSpecialDlg**](#pastespecialdlg) raise the standard Windows OLE dialogs for picking an object class or a clipboard format.

## Data binding

Setting [**DataSource**](#datasource) and [**DataField**](#datafield) connects the container's contents to a binary field on a [**Data**](/en/official/Reference/VB/Data/) control's recordset, so the embedded object is loaded from and saved back into the row. [**DataChanged**](#datachanged) reports whether the contained object differs from the bound row's stored value.

## Properties

### Action

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A run-time-only **Integer** that, when assigned, performs one of the predefined OLE actions such as *create*, *delete*, *paste*, or *update*. Modern code uses the equivalent named methods ([**CreateEmbed**](#createembed), [**Delete**](#delete), [**Paste**](#paste), [**Update**](#update), …) instead.

### Anchors

The set of edges of the parent that the OLE control's corresponding edges follow when the parent resizes. Read-only --- assign individual `.Left`, `.Top`, `.Right`, `.Bottom` flags through the returned **Anchors** object.

### Appearance

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Determines how the container's border is drawn. A member of [**AppearanceConstants**](/en/official/Reference/VBRUN/Constants/AppearanceConstants): **vbAppearFlat** or **vbAppear3d** (default).

### AppIsRunning

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A run-time-only **Boolean**: **True** while the OLE server hosting the embedded object is running. Assigning **True** starts the server; assigning **False** shuts it down.

### AutoActivate

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Selects when the embedded object is activated for in-place editing. A member of [**OLEContainerActivateConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerActivateConstants): **vbOLE_ActivateManual**, **vbOLE_ActivateGetFocus**, **vbOLE_ActivateDoubleclick** (default), or **vbOLE_ActivateAuto**.

### AutoVerbMenu

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

When **True** (default), right-clicking the container automatically pops up a menu of the contained object's registered verbs. **Boolean**.

### BackColor

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

The background colour, as an **OLE_COLOR**. Defaults to the system window-background colour.

### BackStyle

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Selects between an opaque and transparent background ([**BackFillStyleConstants**](/en/official/Reference/VBRUN/Constants/BackFillStyleConstants)): **vbBFTransparent** or **vbBFOpaque** (default).

### BorderStyle

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Whether the container is drawn with a border. A member of [**ControlBorderStyleConstants**](/en/official/Reference/VBRUN/Constants/ControlBorderStyleConstants): **vbNoBorder** or **vbFixedSingleBorder** (default).

### CausesValidation

Determines whether the previously focused control's [**Validate**](#validate) event runs before this control receives the focus. **Boolean**, default **True**.

### Class

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

The ProgID of the OLE server class for the contained object --- for example `"Word.Document"` or `"Excel.Sheet"`. **String**. Used together with [**SourceDoc**](#sourcedoc) and [**SourceItem**](#sourceitem) when populating the container at design time, or as the default class for [**InsertObjDlg**](#insertobjdlg).

### Container

The control that hosts this OLE control --- typically the form. Read with **Get**, change with **Set**. Setting **Container** re-parents the control to a different container at run time.

### ControlType

A read-only [**ControlTypeConstants**](/en/official/Reference/VBRUN/Constants/ControlTypeConstants) value identifying this control as an OLE container. Always **vbOLEControl**.

### Data

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A run-time-only **Long** handle to the data block returned for the format named in [**Format**](#format). Used together with the [**ObjectAcceptFormats**](#objectacceptformats) / [**ObjectGetFormats**](#objectgetformats) machinery to round-trip raw OLE data.

### DataChanged

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A run-time-only **Boolean**: **True** if the bound recordset field has changed since the container last loaded it. Cleared after a successful save.

### DataField

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

The name of the binary field, in the recordset of the bound [**DataSource**](#datasource), whose contents are stored and retrieved by the OLE container. **String**.

### DataSource

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A reference to a [**Data**](/en/official/Reference/VB/Data/) control (or other **DataSource** provider) whose recordset supplies the value for [**DataField**](#datafield). Set with **Set**.

### DataText

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A run-time-only **String** alias for transferring text-format data into and out of the contained object's clipboard equivalent.

### DisplayType

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Whether the container shows the object's content or its registered icon. A member of [**OLEContainerDisplayTypeConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerDisplayTypeConstants): **vbOLE_DisplayContent** (default) or **vbOLE_DisplayIcon**.

### Dock

Where the OLE control is docked within its container. A member of [**DockModeConstants**](/en/official/Reference/VBRUN/Constants/DockModeConstants): **vbDockNone** (default), **vbDockLeft**, **vbDockTop**, **vbDockRight**, **vbDockBottom**, or **vbDockFill**. Docked controls ignore [**Anchors**](#anchors).

### DragIcon

A **StdPicture** used as the mouse cursor while the control is being drag-and-dropped (see [**Drag**](#drag) and [**DragMode**](#dragmode)).

### DragMode

Whether the control should drag itself when the user holds the mouse over it. A member of [**DragModeConstants**](/en/official/Reference/VBRUN/Constants/DragModeConstants): **vbManual** (0, default --- call [**Drag**](#drag) from code) or **vbAutomatic** (1).

### Enabled

Determines whether the control accepts user input. **Boolean**, default **True**.

### FileNumber

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A run-time-only **Integer** giving the Basic file number passed to the most recent [**ReadFromFile**](#readfromfile), [**SaveToFile**](#savetofile), or [**SaveToOle1File**](#savetoole1file) call.

### Format

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

The clipboard format identifier currently associated with the [**Data**](#data) handle. **String**.

### Height

The control's height, in twips by default (or in the container's **ScaleMode** units). **Single**.

### HelpContextID

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC. Available only when the host build defines `FEATURE_HELP`.
:::

A **Long** identifying a topic in the application's help file, retrieved when the user presses **F1** while the control has focus.

### HostName

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

The friendly name the OLE server should display for the host application --- e.g. shown in Word's title bar while editing the embedded document in place. **String**.

### hWnd

The Win32 window handle for the underlying control, as a **LongPtr**. Read-only. Useful for passing to API functions.

### Index

When the control is part of a control array, the **Long** zero-based index of this instance within the array. Reading **Index** on a non-array instance raises run-time error 343 (*Object not an array*). Read-only at run time.

### Left

The horizontal distance from the left edge of the container to the left edge of the control. **Single**.

### LpOleObject

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A run-time-only **LongPtr** giving the raw `IOleObject` interface pointer of the contained object, for passing to native code.

### MiscFlags

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A bit-mask of miscellaneous container behaviours (see [**OLEContainerConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerConstants) --- **vbOLEMiscFlagMemStorage**, **vbOLEMiscFlagDisableInPlace**). **Long**.

### MouseIcon

A **StdPicture** used as the mouse cursor when [**MousePointer**](#mousepointer) is **vbCustom** and the pointer is over the control.

### MousePointer

The mouse cursor shown when the pointer is over the control. A member of [**MousePointerConstants**](/en/official/Reference/VBRUN/Constants/MousePointerConstants).

### Name

The unique design-time name of the control on its parent form. Read-only at run time.

### object

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A run-time-only **Object** reference to the OLE Automation interface of the contained object --- the late-bound entry point for scripting it. **Read-only**.

### ObjectAcceptFormats

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

An indexed **String** property listing the clipboard formats that the contained object can accept on a paste. Use [**ObjectAcceptFormatsCount**](#objectacceptformatscount) to bound the index.

### ObjectAcceptFormatsCount

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

The number of entries in [**ObjectAcceptFormats**](#objectacceptformats). **Integer**.

### ObjectGetFormats

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

An indexed **String** property listing the clipboard formats that the contained object can produce on a copy. Use [**ObjectGetFormatsCount**](#objectgetformatscount) to bound the index.

### ObjectGetFormatsCount

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

The number of entries in [**ObjectGetFormats**](#objectgetformats). **Integer**.

### ObjectVerbFlags

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

An indexed **Long** property giving the menu-flag bit-mask for each entry in [**ObjectVerbs**](#objectverbs). The flag values match the Win32 `MF_*` menu constants and indicate whether the verb item is greyed, checked, etc.

### ObjectVerbs

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

An indexed **String** property listing the names of the verbs registered for the contained object --- populated by [**FetchVerbs**](#fetchverbs). Pass an index to [**DoVerb**](#doverb) to invoke a verb.

### ObjectVerbsCount

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

The number of entries in [**ObjectVerbs**](#objectverbs). **Long**.

### OLEDropAllowed

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

When **True**, the container accepts OLE objects dragged onto it from outside the application. **Boolean**, default **False**.

### OLEType

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A run-time-only **Integer** reporting whether the contained object is currently linked, embedded, or empty (see [**OLEContainerConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerConstants) --- **vbOLELinked**, **vbOLEEmbedded**, **vbOLEEither**, **vbOLENone**).

### OLETypeAllowed

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Restricts which kinds of contained object the container will accept. A member of [**OLEContainerTypesAllowedConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerTypesAllowedConstants): **vbOLE_Linked**, **vbOLE_Embedded**, or **vbOLE_Either** (default).

### Parent

A reference to the [**Form**](/en/official/Reference/VB/Form/) (or **UserControl**) that contains this control. Read-only.

### PasteOK

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A run-time-only, read-only **Boolean**: **True** if the current clipboard contents are in a format the contained object would accept via [**Paste**](#paste).

### Picture

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A run-time-only, read-only **IPictureDisp** giving the contained object's current presentation as a picture, suitable for printing or copying onto a [**PictureBox**](/en/official/Reference/VB/PictureBox/).

### SizeMode

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

How the contained object's bitmap is fitted into the container. A member of [**OLEContainerSizeModeConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerSizeModeConstants): **vbOLE_SizeClip** (default), **vbOLE_SizeStretch**, **vbOLE_SizeAutoSize**, or **vbOLE_SizeZoom**.

### SourceDoc

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

The full path of the source file used by [**CreateLink**](#createlink) (and the default value for [**InsertObjDlg**](#insertobjdlg)). **String**.

### SourceItem

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

The named item within [**SourceDoc**](#sourcedoc) that the link refers to --- for example, an Excel range name. **String**.

### TabIndex

The position of the control in the form's TAB-key navigation order. **Long**.

### TabStop

Whether the user can reach the control by pressing the **TAB** key. **Boolean**, default **True**. A disabled control is skipped regardless of this setting.

### Tag

A free-form **String** the application can use to associate custom data with the control. Ignored by the framework.

### Top

The vertical distance from the top of the container to the top of the control. **Single**.

### UpdateOptions

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

How a linked object's cached presentation is refreshed. A member of [**OLEContainerUpdateOptionsConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerUpdateOptionsConstants): **vbOLE_UpdateAutomatic** (default), **vbOLE_UpdateFrozen**, or **vbOLE_UpdateManual**.

### Verb

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

A **Long** verb index used by the legacy [**Action**](#action) property when performing the *do verb* action. New code should call [**DoVerb**](#doverb) directly.

### Visible

Whether the control is shown. **Boolean**, default **True**.

### WhatsThisHelpID

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC. Available only when the host build defines `FEATURE_HELP`.
:::

A **Long** identifying a "What's This?" help-pop-up topic in the application's help file. See [**ShowWhatsThis**](#showwhatsthis).

### Width

The control's width. **Single**.

## Methods

### Close

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Closes the contained object, ending the running server session if one is open. The container's data is preserved; only the live editing connection is dropped.

Syntax: *object*.**Close**

### Copy

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Copies the contained object to the system clipboard.

Syntax: *object*.**Copy**

### CreateEmbed

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Creates a new embedded object of the given class, optionally pre-filled from a template file.

Syntax: *object*.**CreateEmbed** *SourceDoc* [, *Class* ]

*SourceDoc*
: *required* A **String**. Path of a file to use as a template for the new object, or `vbNullString` to create a blank object.

*Class*
: *optional* A **Variant** **String** ProgID identifying the OLE server class to instantiate (e.g. `"Word.Document"`). Required when *SourceDoc* is empty.

### CreateLink

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Creates a linked object that references an existing file on disk.

Syntax: *object*.**CreateLink** *SourceDoc* [, *SourceItem* ]

*SourceDoc*
: *required* A **String** giving the full path of the source file.

*SourceItem*
: *optional* A **Variant** **String** identifying a named item within the source file (e.g. an Excel range name) to link to a fragment rather than the whole document.

### Delete

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Removes the contained object from the container. Releases all resources associated with it.

Syntax: *object*.**Delete**

### DoVerb

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Invokes a registered verb on the contained object. The standard verb constants are defined in [**OLEContainerConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerConstants) --- **vbOLEPrimary** (0), **vbOLEShow** (-1), **vbOLEOpen** (-2), **vbOLEHide** (-3), **vbOLEUIActivate** (-4), **vbOLEInPlaceActivate** (-5), **vbOLEDiscardUndoState** (-6); positive indices refer to the per-server entries in [**ObjectVerbs**](#objectverbs).

Syntax: *object*.**DoVerb** [ *Verb* ]

*Verb*
: *optional* A **Variant** **Long**. Defaults to **vbOLEPrimary** if omitted.

### Drag

Begins, completes, or cancels a manual drag-and-drop operation. Typically called from a [**MouseDown**](#mousedown) handler when [**DragMode**](#dragmode) is **vbManual**.

Syntax: *object*.**Drag** [ *Action* ]

*Action*
: *optional* A member of [**DragConstants**](/en/official/Reference/VBRUN/Constants/DragConstants): **vbCancel** (0), **vbBeginDrag** (1, default), or **vbEndDrag** (2).

### FetchVerbs

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Re-reads the verb list from the contained object's server and refreshes [**ObjectVerbs**](#objectverbs), [**ObjectVerbFlags**](#objectverbflags), and [**ObjectVerbsCount**](#objectverbscount).

Syntax: *object*.**FetchVerbs**

### InsertObjDlg

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Displays the standard Windows *Insert Object* dialog so the user can choose between a new embedded object, an existing file (linked or embedded), or an icon.

Syntax: *object*.**InsertObjDlg**

### Move

Repositions and optionally resizes the control in a single call.

Syntax: *object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *required* A **Single** giving the new horizontal position.

*Top*, *Width*, *Height*
: *optional* New values for the corresponding properties. Omitted values are left unchanged.

### Paste

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Pastes the current clipboard contents into the container, if [**PasteOK**](#pasteok) reports the format is acceptable.

Syntax: *object*.**Paste**

### PasteSpecialDlg

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Displays the standard Windows *Paste Special* dialog so the user can choose how the current clipboard contents are pasted (link, embed, or as a specific format).

Syntax: *object*.**PasteSpecialDlg**

### ReadFromFile

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Reads the container's contents from a Basic-style binary file previously written with [**SaveToFile**](#savetofile).

Syntax: *object*.**ReadFromFile** *FileNumber*

*FileNumber*
: *required* An **Integer**. The file number returned by the **Open** statement, on a stream opened **For Binary**.

### SaveToFile

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Writes the container's contents --- including the linked or embedded object's data and any presentation cache --- to a Basic-style binary file in the current OLE2 stream format.

Syntax: *object*.**SaveToFile** *FileNumber*

*FileNumber*
: *required* An **Integer** opened **For Binary**.

### SaveToOle1File

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Writes the container's contents in the legacy OLE1 stream format. Provided for round-tripping data files produced by very old applications; new code should use [**SaveToFile**](#savetofile).

Syntax: *object*.**SaveToOle1File** *FileNumber*

*FileNumber*
: *required* An **Integer** opened **For Binary**.

### SetFocus

Moves the input focus to the control. The control must be both [**Visible**](#visible) and [**Enabled**](#enabled), or run-time error 5 (*Invalid procedure call or argument*) is raised.

Syntax: *object*.**SetFocus**

### ShowWhatsThis

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC. Available only when the host build defines `FEATURE_HELP`.
:::

Displays the topic identified by [**WhatsThisHelpID**](#whatsthishelpid) as a "What's This?" pop-up.

Syntax: *object*.**ShowWhatsThis**

### Update

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

For a linked object, retrieves the latest data from the source file and refreshes the cached presentation. For an embedded object whose server is running, asks the server to commit any pending changes back into the container.

Syntax: *object*.**Update**

### ZOrder

Brings the control to the front or back of its sibling stack.

Syntax: *object*.**ZOrder** [ *Position* ]

*Position*
: *optional* A member of [**ZOrderConstants**](/en/official/Reference/VBRUN/Constants/ZOrderConstants): **vbBringToFront** (0, default) or **vbSendToBack** (1).

## Events

### Click

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised when the user clicks the container with any mouse button. **Default-designer event.**

Syntax: *object*\_**Click**( )

### DblClick

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised when the user double-clicks the container. With the default [**AutoActivate**](#autoactivate) setting **vbOLE_ActivateDoubleclick**, this is the same gesture that activates the contained object for in-place editing.

Syntax: *object*\_**DblClick**( )

### DragDrop

Raised on the destination control when a manual drag operation ends over it.

Syntax: *object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

Raised on the control under the cursor while a manual drag operation is in progress.

Syntax: *object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### GotFocus

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised when the control receives the input focus.

Syntax: *object*\_**GotFocus**( )

### Initialize

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised once, after the control's underlying window has been created.

Syntax: *object*\_**Initialize**( )

### KeyDown

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised when the user presses any key while the control has focus.

Syntax: *object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised when the user types a character that produces an ANSI keystroke.

Syntax: *object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised when the user releases a key while the control has focus.

Syntax: *object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LostFocus

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised when the control loses the input focus.

Syntax: *object*\_**LostFocus**( )

### MouseDown

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised when the user presses any mouse button over the control.

Syntax: *object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised when the cursor moves over the control.

Syntax: *object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised when the user releases a mouse button over the control.

Syntax: *object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### ObjectMove

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised when the contained object asks the container to relocate or resize itself --- typically in response to in-place editing changes.

Syntax: *object*\_**ObjectMove**( *Left* **As Single**, *Top* **As Single**, *Width* **As Single**, *Height* **As Single** )

### Resize

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised when the contained object reports a new natural size --- for example, after an embedded image is replaced with one of different dimensions.

Syntax: *object*\_**Resize**( *HeightNew* **As Single**, *WidthNew* **As Single** )

### Updated

::: info
Reserved for VB6 compatibility; not currently implemented in twinBASIC.
:::

Raised after the contained object has been modified, so the host can flag itself as dirty. *Code* is one of the status values in [**OLEContainerConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerConstants): **vbOLEChanged**, **vbOLESaved**, **vbOLEClosed**, or **vbOLERenamed**.

Syntax: *object*\_**Updated**( *Code* **As Integer** )

### Validate

Raised when the focus is moving to another control whose [**CausesValidation**](#causesvalidation) is **True**. Setting *Cancel* to **True** keeps the focus on this control.

Syntax: *object*\_**Validate**( *Cancel* **As Boolean** )
