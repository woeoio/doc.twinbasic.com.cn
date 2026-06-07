---
title: FileListBox
parent: VB Package
permalink: /tB/Packages/VB/FileListBox/
---

# FileListBox class

A **FileListBox** is a Win32 native list control that displays the files in a single directory, filtered by a wildcard pattern and a set of file-attribute toggles. It is normally placed on a **Form** or **UserControl** at design time and paired with a [**DriveListBox**](/en/official/Reference/VB/DriveListBox) and a [**DirListBox**](/en/official/Reference/VB/DirListBox) to make a complete file picker --- their **Change** events feed into **FileListBox.Path**, and the user selects a name from the list. The default property is [**FileName**](#filename) and the default event is [**Click**](#click).

```vb
Private Sub Form_Load()
    Drive1.Drive = "C:\"
    Dir1.Path = Drive1.Drive
    File1.Path = Dir1.Path
    File1.Pattern = "*.txt;*.log"
End Sub

Private Sub Drive1_Change()
    Dir1.Path = Drive1.Drive
End Sub

Private Sub Dir1_Change()
    File1.Path = Dir1.Path
End Sub

Private Sub File1_DblClick()
    OpenFile File1.PathWithBackslash & File1.FileName
End Sub
```


## Path and Pattern

[**Path**](#path) is the directory whose files are listed. It defaults to [**App.Path**](/en/official/Reference/VB/App#path) when the control is first created. Setting it from code reloads the list, raises [**PathChange**](#pathchange), and trims any trailing backslash (except for a drive root). Setting a bare drive specifier without a backslash --- `"C:"` --- is silently rejected; use `"C:\"`. Assigning a path that does not exist raises run-time error 76 (*Path not found*). [**PathWithBackslash**](#pathwithbackslash) returns the same value with a trailing backslash always present, which is convenient when concatenating with [**FileName**](#filename).

[**Pattern**](#pattern) is one or more wildcard masks separated by semicolons (`"*.txt;*.doc"`). Each mask is matched case-insensitively using the **Like** operator; a file is shown if it matches *any* mask. The default is `"*.*"`. Setting **Pattern** reloads the list and raises [**PatternChange**](#patternchange) when the new value differs from the previous one.

## File-attribute filters

Five **Boolean** properties decide which files are included after the pattern matches:

| Property                      | Meaning when **True** (default in **bold**)                                       |
|-------------------------------|-----------------------------------------------------------------------------------|
| [**Archive**](#archive)       | **Include files with the archive bit set.**                                       |
| [**Hidden**](#hidden)         | Include hidden files.                                                             |
| [**Normal**](#normal)         | **Include files with no special attributes.**                                     |
| [**ReadOnly**](#readonly)     | **Include read-only files.**                                                      |
| [**System**](#system)         | Include system files.                                                             |

A file passes if every attribute it carries is permitted. **Normal** is the odd one out: it gates files that carry *no* attribute at all, so setting **Normal = False** with the others left at their defaults restricts the list to files that explicitly have one of the included attributes. Changing any of these reloads the list and raises [**PatternChange**](#patternchange) --- the event is shared with [**Pattern**](#pattern), matching the VB6 behaviour even though the name is misleading.

## Selecting files

[**MultiSelect**](#multiselect) chooses among single-, simple-, and extended-selection ([**MultiSelectConstants**](/en/official/Reference/VBRUN/Constants/MultiSelectConstants)). Changing it recreates the underlying window (the path, pattern, and current selection are restored automatically).

[**ListIndex**](#listindex) gives or sets the focused entry (`-1` for none), and [**FileName**](#filename) returns its text. [**Selected**](#selected) reads or writes the selection state of any individual item; [**SelCount**](#selcount) counts how many items are currently selected; [**SelectedIndices**](#selectedindices) returns them as a **Collection**:

```vb
Dim idx As Variant
For Each idx In File1.SelectedIndices()
    Debug.Print File1.PathWithBackslash & File1.List(idx)
Next
```

## OLE drag and drop

When [**OLEDragMode**](#oledragmode) is set to **vbOLEDragAutomatic**, dragging the selected entry (or entries, in multi-select mode) starts an OLE drag whose data is the corresponding full path or paths. [**OLEDropMode**](#oledropmode) controls drop-target behaviour and is restricted to **vbOLEDropNone** or **vbOLEDropManual**.

## Properties

### Appearance

Determines how the control's border is drawn by the OS. A member of [**AppearanceConstants**](/en/official/Reference/VBRUN/Constants/AppearanceConstants): **vbAppearFlat** or **vbAppear3d** (default). Combined with [**BorderStyle**](#borderstyle) to choose between a flat single-line border and a sunken client edge.

### Archive

When **True** (default), files with the archive attribute are included in the list. **Boolean**. Changing this reloads the list and raises [**PatternChange**](#patternchange).

### BackColor

The background colour, as an **OLE_COLOR**. Defaults to the system window-background colour.

### BorderStyle

A member of [**ControlBorderStyleConstants**](/en/official/Reference/VBRUN/Constants/ControlBorderStyleConstants): **vbNoBorder** (0) or **vbFixedSingleBorder** (1, default). Combined with [**Appearance**](#appearance): a 3-D appearance plus single border yields the standard sunken client edge; flat appearance plus single border yields a one-pixel outline.

### CausesValidation

Determines whether the previously focused control's [**Validate**](#validate) event runs before this control receives the focus. **Boolean**, default **True**.

### ControlType

A read-only [**ControlTypeConstants**](/en/official/Reference/VBRUN/Constants/ControlTypeConstants) value identifying this control as a file list box. Always **vbFileListBox**.

### DragIcon

A **StdPicture** used as the mouse cursor while the control is being drag-and-dropped (see [**Drag**](#drag) and [**DragMode**](#dragmode)).

### DragMode

Whether the control should drag itself when the user holds the mouse over it. A member of [**DragModeConstants**](/en/official/Reference/VBRUN/Constants/DragModeConstants): **vbManual** (0, default --- call [**Drag**](#drag) from code) or **vbAutomatic** (1).

### Enabled

Determines whether the control accepts user input. A disabled file list box still shows its contents but is dimmed and ignores keyboard and mouse interaction. **Boolean**, default **True**.

### FileName

The name of the file at the current [**ListIndex**](#listindex), without any leading path. **Default property.**

Syntax: *object*.**FileName** [ = *string* ]

Reading **FileName** returns the text of the highlighted entry, or an empty string when [**ListIndex**](#listindex) is `-1`. Setting **FileName** searches the list for an exact, case-insensitive match and selects that entry if found; if no entry matches, the assignment has no visible effect.

### Font

The **StdFont** used to render file names. The convenience properties **FontName**, **FontSize**, **FontBold**, **FontItalic**, **FontStrikethru**, and **FontUnderline** read or write the corresponding members of this object. Changing the font rescales each item's row height when [**IntegralHeight**](#integralheight) is **True**.

### ForeColor

The text colour for entries that are not currently selected, as an **OLE_COLOR**. Defaults to the system window-text colour. Disabled entries draw in the system grey-text colour, and selected entries draw in the system highlight-text colour, regardless of this setting.

### Height

The control's height, in twips by default (or in the container's **ScaleMode** units). When [**IntegralHeight**](#integralheight) is **True**, the OS quantises this to a whole number of rows. **Single**.

### HelpContextID

A **Long** identifying a topic in the application's help file, retrieved when the user presses **F1** while the control has focus.

### Hidden

When **True**, files with the hidden attribute are included in the list. **Boolean**, default **False**. Changing this reloads the list and raises [**PatternChange**](#patternchange).

### hWnd

The Win32 window handle for the underlying list box, as a **LongPtr**. Read-only. Useful for passing to API functions.

### Index

When the control is part of a control array, the **Long** zero-based index of this instance within the array. Read-only at run time.

### IntegralHeight

When **True** (default), the OS adjusts the control's height so that the visible portion shows whole rows rather than partial ones. When **False**, the control honours [**Height**](#height) exactly. **Boolean**. Changing this at run time recreates the underlying window.

### Left

The horizontal distance from the left edge of the container to the left edge of the control. **Single**.

### List

The text of an item, indexed by zero-based position. Read-only.

Syntax: *object*.**List**( *Index* )

*Index*
: *required* A **Long** zero-based item position.

### ListCount

The number of files currently shown in the list, as a **Long**. Read-only.

### ListIndex

The zero-based index of the focused item, or `-1` if no item is focused. **Long**. In multi-select modes the focused item and the selected items are independent --- see [**Selected**](#selected). Assigning a value that differs from the current one focuses that item and raises [**Click**](#click).

### MouseIcon

A **StdPicture** used as the mouse cursor when [**MousePointer**](#mousepointer) is **vbCustom** and the pointer is over the control.

### MousePointer

The mouse cursor shown when the pointer is over the control. A member of [**MousePointerConstants**](/en/official/Reference/VBRUN/Constants/MousePointerConstants).

### MultiSelect

The selection mode. A member of [**MultiSelectConstants**](/en/official/Reference/VBRUN/Constants/MultiSelectConstants): **vbMultiSelectNone** (0, default --- single selection), **vbMultiSelectSimple** (1 --- each click toggles), or **vbMultiSelectExtended** (2 --- **Shift** for ranges, **Ctrl** for individual toggles). Changing this at run time recreates the underlying window; the current path, pattern, top-index, and focused item are restored, but multi-item selections are not.

### Name

The unique design-time name of the control on its parent form. Read-only at run time.

### Normal

When **True** (default), files with no attribute bits set are included in the list. When **False**, only files that explicitly carry one of the other included attributes are shown. **Boolean**. Changing this reloads the list and raises [**PatternChange**](#patternchange).

### OLEDragMode

Whether the control acts as an automatic OLE drag source. A member of [**OLEDragConstants**](/en/official/Reference/VBRUN/Constants/OLEDragConstants): **vbOLEDragManual** (0, default --- call [**OLEDrag**](#oledrag) from code) or **vbOLEDragAutomatic** (1 --- dragging an entry starts an OLE drag whose **Text** data is the full path of the selected file, or a list of paths in multi-select mode).

### OLEDropMode

How the control responds to OLE drops. A restricted member of [**OLEDropConstants**](/en/official/Reference/VBRUN/Constants/OLEDropConstants): **vbOLEDropNone** or **vbOLEDropManual**. Automatic-drop mode is not supported on a FileListBox.

### Opacity

The control's opacity as a percentage (0--100, default 100). Values outside the range are clamped on **Initialize**. Requires Windows 8 or later for child controls.

### Parent

A reference to the **Form** (or **UserControl**) that contains this control. Read-only.

### Path

The directory whose files are listed. **String**. Defaults to [**App.Path**](/en/official/Reference/VB/App#path) when the control is first created.

Syntax: *object*.**Path** [ = *string* ]

Reading **Path** returns the directory currently shown --- without a trailing backslash (except for a drive root, which is always returned as `"C:\"`). Setting **Path** reloads the list and raises [**PathChange**](#pathchange) when the new value differs from the current one. A bare drive specifier with no backslash (`"C:"`) is silently rejected; use `"C:\"`. Assigning a path that does not exist raises run-time error 76 (*Path not found*).

### PathWithBackslash

The same value as [**Path**](#path), but always with a trailing backslash. **String**, read-only. Convenient for concatenating with [**FileName**](#filename) to build a full path.

### Pattern

The wildcard mask, or semicolon-separated list of masks, used to filter the file list. **String**, default `"*.*"`.

Syntax: *object*.**Pattern** [ = *string* ]

A file is shown if it matches *any* of the masks (case-insensitively, using the **Like** operator). Setting an empty string is treated as `"*.*"`. Changing **Pattern** reloads the list and raises [**PatternChange**](#patternchange) when the new value differs from the current one.

```vb
File1.Pattern = "*.txt;*.log"   ' .txt or .log files
```

### ReadOnly

When **True** (default), files with the read-only attribute are included in the list. **Boolean**. Changing this reloads the list and raises [**PatternChange**](#patternchange). Note that **ReadOnly** is a reserved word in twinBASIC and must be referenced through a member access (`File1.ReadOnly`) or escaped (`[ReadOnly]`) in declarations.

### SelCount

The number of items currently selected, as a **Long**. Read-only. Equal to `0` or `1` when [**MultiSelect**](#multiselect) is **vbMultiSelectNone**.

### Selected

The selection state of an individual item.

Syntax: *object*.**Selected**( *Index* ) [ = *boolean* ]

*Index*
: *required* A **Long** zero-based item position.

Reading **Selected(*Index*)** returns **True** when that item is selected. Assigning a value that differs from the current one updates the selection and raises [**Click**](#click); in single-select mode (**vbMultiSelectNone**) assigning **True** focuses the item, and assigning **False** has no observable effect.

### System

When **True**, files with the system attribute are included in the list. **Boolean**, default **False**. Changing this reloads the list and raises [**PatternChange**](#patternchange).

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

### TopIndex

The zero-based index of the item shown at the top of the visible area. Assigning a value scrolls the list so that item is at the top, and raises [**Scroll**](#scroll) when the value actually changes. **Long**.

### TransparencyKey

An **OLE_COLOR** that, when set, becomes fully transparent in the rendered control. Default `-1` disables the effect. Requires Windows 8 or later for child controls.

### Visible

Whether the control is shown. **Boolean**, default **True**.

### VisualStyles

Whether the OS theme engine should be used when drawing the control. **Boolean**, default **True**.

### WhatsThisHelpID

A **Long** identifying a "What's This?" help-pop-up topic in the application's help file. See [**ShowWhatsThis**](#showwhatsthis).

### WheelScrollEvent

When **True** (default), mouse-wheel notifications over the control raise the [**Scroll**](#scroll) event; when **False**, the wheel still scrolls the list but [**Scroll**](#scroll) is suppressed. **Boolean**. VB6 never raised **Scroll** for wheel events; set this to **False** to match that behaviour exactly.

### Width

The control's width. **Single**.

## Methods

### Drag

Begins, completes, or cancels a manual drag-and-drop operation. Typically called from a [**MouseDown**](#mousedown) handler when [**DragMode**](#dragmode) is **vbManual**.

Syntax: *object*.**Drag** [ *Action* ]

*Action*
: *optional* A member of [**DragConstants**](/en/official/Reference/VBRUN/Constants/DragConstants): **vbCancel** (0), **vbBeginDrag** (1, default), or **vbEndDrag** (2).

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

Re-reads the contents of the current [**Path**](#path) from disk and repaints the control. Useful when the directory has been modified outside the application --- the control does not watch the file system on its own. Does not raise [**PathChange**](#pathchange) or [**PatternChange**](#patternchange).

Syntax: *object*.**Refresh**

### SelectedIndices

Returns the zero-based indices of every currently-selected item as a **Collection** of **Long** values, in ascending order. Useful for iterating multi-selections without scanning [**Selected**](#selected) for every index.

Syntax: *object*.**SelectedIndices**

```vb
Dim idx As Variant
For Each idx In File1.SelectedIndices()
    Debug.Print File1.PathWithBackslash & File1.List(idx)
Next
```

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
: *optional* A member of [**ZOrderConstants**](/en/official/Reference/VBRUN/Constants/ZOrderConstants): **vbBringToFront** (0, default) or **vbSendToBack** (1).

## Events

### Click

Raised after the focused item changes --- whether the user clicked a different entry, used the keyboard to move the focus, or code assigned a different value to [**ListIndex**](#listindex) or [**Selected**](#selected). Also raised when the selection is cancelled. **Default event.**

Syntax: *object*\_**Click**( )

### DblClick

Raised when the user double-clicks an entry. Unlike [**DirListBox**](/en/official/Reference/VB/DirListBox), the **FileListBox** does *not* navigate on double-click --- typically the application listens for **DblClick** to open the file the user has chosen.

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

Raised once, immediately after the underlying window is created and the initial list of files has been loaded from [**App.Path**](/en/official/Reference/VB/App#path). New in twinBASIC --- VB6 had no equivalent on this control.

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

Raised on the source control at the start of an OLE drag, so the application can populate the **DataObject** and choose the allowed effects. Fires whether the drag was initiated automatically (with [**OLEDragMode**](#oledragmode) set to **vbOLEDragAutomatic**) or by an explicit [**OLEDrag**](#oledrag) call.

Syntax: *object*\_**OLEStartDrag**( *Data* **As DataObject**, *AllowedEffects* **As Long** )

### PathChange

Raised after [**Path**](#path) has changed --- typically because code assigned a new value to it. Not raised for assignments that match the current value.

Syntax: *object*\_**PathChange**( )

### PatternChange

Raised after [**Pattern**](#pattern) has changed *or* after one of the file-attribute filter properties --- [**Archive**](#archive), [**Hidden**](#hidden), [**Normal**](#normal), [**ReadOnly**](#readonly), [**System**](#system) --- has changed. Not raised for pattern assignments that match the current value. The shared event matches the VB6 behaviour even though the name is misleading.

Syntax: *object*\_**PatternChange**( )

### Scroll

Raised when the visible portion of the list scrolls --- by the scroll bar, the keyboard, or (when [**WheelScrollEvent**](#wheelscrollevent) is **True**) the mouse wheel. The new offset can be read from [**TopIndex**](#topindex).

Syntax: *object*\_**Scroll**( )

### Validate

Raised when the focus is moving to another control whose [**CausesValidation**](#causesvalidation) is **True**. Setting *Cancel* to **True** keeps the focus on this control.

Syntax: *object*\_**Validate**( *Cancel* **As Boolean** )
