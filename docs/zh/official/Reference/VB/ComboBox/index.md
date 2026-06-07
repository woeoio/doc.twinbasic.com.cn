---
title: ComboBox
parent: VB Package
permalink: /tB/Packages/VB/ComboBox/
---

# ComboBox class

A **ComboBox** is a Win32 native control that combines an edit field with a drop-down list of items, letting the user either type a value or pick one from the list. The control is normally placed on a **Form** or **UserControl** at design time. The default property is [**Text**](#text) and the default event is [**Change**](#change).

```vb
Private Sub Form_Load()
    With Combo1
        .AddItem "Apple"
        .AddItem "Banana"
        .AddItem "Cherry"
        .ListIndex = 0
    End With
End Sub

Private Sub Combo1_Click()
    Debug.Print "Picked: " & Combo1.Text
End Sub
```


## Style

[**Style**](#style) selects one of three Win32 combo-box variants ([**ComboBoxConstants**](/official/Reference/VBRUN/Constants/ComboBoxConstants)):

| Constant                  | Value | Layout                                                                   |
|---------------------------|-------|--------------------------------------------------------------------------|
| **vbComboDropdown**       | 0     | Editable text + drop-down button + drop-down list. The default.          |
| **vbComboSimple**         | 1     | Editable text + a permanently visible list (no drop-down button).        |
| **vbComboDropdownList**   | 2     | Drop-down list only --- the user must pick a value; typing is disabled.    |

Changing **Style** at run time recreates the underlying window (the existing list contents and selection are preserved). [**Sorted**](#sorted) and [**IntegralHeight**](#integralheight) recreate the window the same way.

## Editing the list

Items are held inside the OS combo-box control; the [**List**](#list) and [**ItemData**](#itemdata) arrays are projections onto that storage. Items are added with [**AddItem**](#additem), removed with [**RemoveItem**](#removeitem), and the whole list is cleared with [**Clear**](#clear). After each [**AddItem**](#additem) call, [**NewIndex**](#newindex) reports the position the item was inserted at --- useful when [**Sorted**](#sorted) is **True** and the position is not predictable from the call.

```vb
Combo1.Sorted = True
Combo1.AddItem "Cherry"
Combo1.AddItem "Apple"          ' Inserted at index 0 — Combo1.NewIndex = 0
Combo1.ItemData(Combo1.NewIndex) = 42
```

## Selection and text

[**ListIndex**](#listindex) is the index of the selected item, or `-1` when nothing is selected. Setting it from code highlights the corresponding item and raises [**Click**](#click) (only if the value actually changes). [**TopIndex**](#topindex) controls which item appears at the top of the drop-down portion when it is open.

[**Text**](#text) reads or writes the editable area, except in **vbComboDropdownList** mode where there is no edit field --- there, assigning a string searches the list with an exact, case-insensitive match and selects that item if found, doing nothing otherwise. Reading **Text** in any mode returns the current display text.

For the styles that have an edit area (**vbComboDropdown** and **vbComboSimple**), [**SelStart**](#selstart), [**SelLength**](#sellength), and [**SelText**](#seltext) reflect or modify the user's text selection. Reading or writing any of these in **vbComboDropdownList** mode raises run-time error 380.

## OLE drag-and-drop

[**OLEDragMode**](#oledragmode) controls source-side drags (only meaningful for the styles with an edit area --- when set to **vbOLEDragAutomatic**, dragging selected text in the edit area starts an OLE drag with that text as the data). [**OLEDropMode**](#oledropmode) controls drop-target behaviour and is restricted to **vbOLEDropNone** or **vbOLEDropManual**.

## Properties

### Appearance

Determines how the control's border is drawn by the OS. A member of [**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants): **vbAppearFlat** or **vbAppear3d** (default).

### BackColor

The colour of the edit area and the list background, as an **OLE_COLOR**. Defaults to the system window-background colour.

### BorderStyle

A member of [**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants): **vbNoBorder** (0) or **vbFixedSingleBorder** (1, default). Changing it at run time re-syncs the border without recreating the window.

### CausesValidation

Determines whether the previously focused control's [**Validate**](#validate) event runs before this control receives the focus. **Boolean**, default **True**.

### ControlType

A read-only [**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants) value identifying this control as a combo box. Always **vbComboBox**.

### DragIcon

A **StdPicture** used as the mouse cursor while the control is being drag-and-dropped (see [**Drag**](#drag) and [**DragMode**](#dragmode)).

### DragMode

Whether the control should drag itself when the user holds the mouse over it. A member of [**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants): **vbManual** (0, default --- call [**Drag**](#drag) from code) or **vbAutomatic** (1).

### Enabled

Determines whether the control accepts user input. A disabled combo box shows its current text but is dimmed and ignores keyboard and mouse interaction. **Boolean**, default **True**.

### Font

The **StdFont** used to render text in the edit area and the drop-down list. The convenience properties **FontName**, **FontSize**, **FontBold**, **FontItalic**, **FontStrikethru**, and **FontUnderline** read or write the corresponding members of this object. Changing the font may resize the control vertically when [**IntegralHeight**](#integralheight) is **True**.

### ForeColor

The text colour, as an **OLE_COLOR**. Defaults to the system window-text colour.

### Height

The control's height, in twips by default (or in the container's **ScaleMode** units). For **vbComboDropdown** and **vbComboDropdownList** this is the height of the closed control (the drop-down portion is sized separately --- see [**MaxDropDownItems**](#maxdropdownitems)). For **vbComboSimple** it is the total height including the always-visible list. **Single**.

### HelpContextID

A **Long** identifying a topic in the application's help file, retrieved when the user presses **F1** while the control has focus.

### hWnd

The Win32 window handle for the underlying combo box, as a **LongPtr**. Read-only. Useful for passing to API functions.

### Index

When the control is part of a control array, the **Long** zero-based index of this instance within the array. Read-only at run time.

### IntegralHeight

When **True** (default), the OS adjusts the control's height so that the visible portion of the list shows whole items rather than partial ones. When **False**, the control honours [**Height**](#height) exactly. **Boolean**. Changing this at run time recreates the underlying window.

### ItemData

A **LongPtr** that the application can associate with each item. Indexed by the same zero-based position used by [**List**](#list).

Syntax: *object*.**ItemData**( *Index* ) [ = *value* ]

*Index*
: *required* A **Long** zero-based item position.

```vb
Combo1.AddItem "Apple"
Combo1.ItemData(Combo1.NewIndex) = customerID
```

### Left

The horizontal distance from the left edge of the container to the left edge of the control. **Single**.

### List

The text of an item, indexed by zero-based position. Setting **List(*Index*)** removes the existing item at that position and reinserts the new value at the same index --- note that this can change the resulting position when [**Sorted**](#sorted) is **True**.

Syntax: *object*.**List**( *Index* ) [ = *string* ]

### ListCount

The number of items in the list, as a **Long**. Read-only.

### ListIndex

The zero-based index of the selected item, or `-1` if nothing is selected. **Long**. Assigning a value that differs from the current one selects that item and raises [**Click**](#click).

### Locked

When **True**, the user can scroll and select within the control but cannot type into the edit area or change the selection with the keyboard or mouse wheel. **Boolean**, default **False**. Has no effect when [**Style**](#style) is **vbComboDropdownList** (where there is no edit area to lock).

### MaxDropDownItems

The maximum number of items shown in the drop-down portion when the user opens it. **Long**, default `0` --- when zero, the OS chooses a height (typically eight items).

### MouseIcon

A **StdPicture** used as the mouse cursor when [**MousePointer**](#mousepointer) is **vbCustom** and the pointer is over the control.

### MousePointer

The mouse cursor shown when the pointer is over the control. A member of [**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants).

### Name

The unique design-time name of the control on its parent form. Read-only at run time.

### NewIndex

The zero-based index at which the most recent [**AddItem**](#additem) call inserted its item, or `-1` if no item has been added since the control was created. Particularly useful when [**Sorted**](#sorted) is **True** and the resulting position cannot be predicted from the call. **Long**, read-only.

### OLEDragMode

Whether the control's edit area can act as an automatic OLE drag source. A member of [**OLEDragConstants**](/official/Reference/VBRUN/Constants/OLEDragConstants): **vbOLEDragManual** (0, default --- call [**OLEDrag**](#oledrag) from code) or **vbOLEDragAutomatic** (1 --- dragging selected text in the edit area starts an OLE drag with that text as the data, and the drop effect **vbDropEffectMove** clears the selection).

### OLEDropMode

How the control responds to OLE drops. A restricted member of [**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants): **vbOLEDropNone** or **vbOLEDropManual**. Automatic-drop mode is not supported on a ComboBox.

### Opacity

The control's opacity as a percentage (0--100, default 100). Values outside the range are clamped on **Initialize**. Requires Windows 8 or later for child controls.

### Parent

A reference to the **Form** (or **UserControl**) that contains this control. Read-only.

### RightToLeft

::: info
Reserved for compatibility with VB6; not currently implemented in twinBASIC.
:::

### SelLength

The number of characters selected in the edit area. **Long**. Reading or writing this property when [**Style**](#style) is **vbComboDropdownList** raises run-time error 380.

### SelStart

The zero-based position of the first selected character in the edit area, or the caret position when no text is selected. **Long**. Reading or writing this property when [**Style**](#style) is **vbComboDropdownList** raises run-time error 380.

### SelText

The text currently selected in the edit area. Assigning a string replaces the selection with that string and positions the caret immediately after the inserted text. **String**. Reading or writing this property when [**Style**](#style) is **vbComboDropdownList** raises run-time error 380.

### Sorted

When **True**, items added with [**AddItem**](#additem) are inserted in alphabetical order regardless of the *Index* argument; when **False** (default), they are inserted at the requested position (or appended). **Boolean**. Changing this at run time recreates the underlying window with the existing items re-added.

### Style

Selects one of the three combo-box variants. A member of [**ComboBoxConstants**](/official/Reference/VBRUN/Constants/ComboBoxConstants): **vbComboDropdown** (0, default), **vbComboSimple** (1), or **vbComboDropdownList** (2). See [Style](#style) above for the layout differences. Changing **Style** at run time recreates the underlying window.

### TabIndex

The position of the control in the form's TAB-key navigation order. **Long**.

### TabStop

Whether the user can reach the control by pressing the **TAB** key. **Boolean**, default **True**. A disabled control is skipped regardless of this setting.

### Tag

A free-form **String** the application can use to associate custom data with the control. Ignored by the framework.

### Text

The text shown in the edit area, or the text of the selected item when [**Style**](#style) is **vbComboDropdownList**. **Default property.**

Syntax: *object*.**Text** [ = *string* ]

For **vbComboDropdown** and **vbComboSimple**, assigning a value writes it directly to the edit area and raises [**Change**](#change) if the new value differs from the current one. For **vbComboDropdownList**, assigning a value searches the list (case-insensitive, exact match) and selects the matching item if found; if no item matches, the assignment has no visible effect.

### ToolTipText

A multi-line **String** displayed as a tooltip when the user hovers over the control.

### Top

The vertical distance from the top of the container to the top of the control. **Single**.

### TopIndex

The zero-based index of the item shown at the top of the drop-down (or always-visible) list. Assigning a value scrolls the list so that item is at the top. **Long**.

### TransparencyKey

An **OLE_COLOR** that, when set, becomes fully transparent in the rendered control. Default `-1` disables the effect. Requires Windows 8 or later for child controls.

### Visible

Whether the control is shown. **Boolean**, default **True**.

### VisualStyles

Whether the OS theme engine should be used when drawing the control. **Boolean**, default **True**.

### WhatsThisHelpID

A **Long** identifying a "What's This?" help-pop-up topic in the application's help file. See [**ShowWhatsThis**](#showwhatsthis).

### WheelScrollEvent

When **True** (default), mouse-wheel notifications over the drop-down list raise the [**Scroll**](#scroll) event; when **False**, the wheel still scrolls the list but [**Scroll**](#scroll) is suppressed. **Boolean**. VB6 never raised **Scroll** for wheel events; set this to **False** to match that behaviour exactly.

### Width

The control's width. **Single**.

## Methods

### AddItem

Inserts a new item into the list and stores the resulting position in [**NewIndex**](#newindex).

Syntax: *object*.**AddItem** *Value* [, *Index* ]

*Value*
: *required* A **String** giving the text of the new item.

*Index*
: *optional* A **Long** zero-based position to insert at. Omit to append to the end. Ignored when [**Sorted**](#sorted) is **True**.

### Clear

Removes every item from the list and clears [**ListIndex**](#listindex).

Syntax: *object*.**Clear**

### Drag

Begins, completes, or cancels a manual drag-and-drop operation.

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

### RemoveItem

Removes the item at the given zero-based position. Items below it shift up by one.

Syntax: *object*.**RemoveItem** *Index*

*Index*
: *required* A **Long** zero-based position.

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

### Change

Raised when the text in the edit area changes --- whether the user typed into it or code assigned a different value to [**Text**](#text). Not raised in **vbComboDropdownList** mode (where there is no edit area). **Default event.**

Syntax: *object*\_**Change**( )

### Click

Raised after [**ListIndex**](#listindex) changes --- whether the user picked an item from the list or code assigned a different value to [**ListIndex**](#listindex). Assigning the current value again does not raise **Click**.

Syntax: *object*\_**Click**( )

### CloseUp

Raised when the drop-down portion closes --- either because the user picked an item, clicked elsewhere, or pressed **Esc**. Not raised in **vbComboSimple** mode (the list is always visible).

Syntax: *object*\_**CloseUp**( )

### DblClick

Raised when the user double-clicks an item in the always-visible list (**vbComboSimple** mode).

Syntax: *object*\_**DblClick**( )

### DragDrop

Raised on the destination control when a manual drag operation ends over it.

Syntax: *object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

Raised on the control under the cursor while a manual drag operation is in progress.

Syntax: *object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### DropDown

Raised when the user opens the drop-down portion. Not raised in **vbComboSimple** mode (the list is always visible).

Syntax: *object*\_**DropDown**( )

### GotFocus

Raised when the control receives the input focus.

Syntax: *object*\_**GotFocus**( )

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

### Scroll

Raised when the drop-down (or always-visible) list is scrolled --- by the scroll bar, the keyboard, or the mouse wheel. Wheel-driven scrolling can be silenced by setting [**WheelScrollEvent**](#wheelscrollevent) to **False**.

Syntax: *object*\_**Scroll**( )

### Validate

Raised when the focus is moving to another control whose [**CausesValidation**](#causesvalidation) is **True**. Setting *Cancel* to **True** keeps the focus on this control.

Syntax: *object*\_**Validate**( *Cancel* **As Boolean** )
