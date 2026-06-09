---
title: TextBoxW Control
description: TextBoxW Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b31c1994-27e4-4adf-969e-7647748b93df'
  PropagateID: 'b31c1994-27e4-4adf-969e-7647748b93df'
  ReservedCode1: 'e035e76d-ad0d-406c-8828-db166820b3f6'
  ReservedCode2: 'e035e76d-ad0d-406c-8828-db166820b3f6'
---

# TextBoxW Control

Provides an enhanced text box with support for Unicode, password characters, balloon tips, network address validation, drag-and-drop files, and OLE drag-and-drop.

## Enumerations

### TxtCharacterCasingConstants

Character casing constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TxtCharacterCasingNormal | 0 | Normal (no case conversion) |
| TxtCharacterCasingUpper | 1 | Convert to uppercase |
| TxtCharacterCasingLower | 2 | Convert to lowercase |

### TxtIconConstants

Balloon tip icon constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TxtIconNone | 0 | No icon |
| TxtIconInfo | 1 | Information icon |
| TxtIconWarning | 2 | Warning icon |
| TxtIconError | 3 | Error icon |

### TxtNetAddressFormatConstants

Network address format constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TxtNetAddressFormatString | 0 | String format |
| TxtNetAddressFormatHostName | 1 | Host name format |
| TxtNetAddressFormatIPv4 | 2 | IPv4 format |
| TxtNetAddressFormatIPv6 | 3 | IPv6 format |

### TxtNetAddressTypeConstants

Network address type constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TxtNetAddressTypeNone | 0 | None |
| TxtNetAddressTypeIPv4 | 1 | IPv4 address |
| TxtNetAddressTypeIPv6 | 2 | IPv6 address |
| TxtNetAddressTypeIPv6WithScope | 3 | IPv6 address with scope |
| TxtNetAddressTypeDNS | 4 | DNS name |
| TxtNetAddressTypeNetBIOS | 5 | NetBIOS name |
| TxtNetAddressTypeUnspecified | 6 | Unspecified type |
| TxtNetAddressTypeNamedPipe | 7 | Named pipe |
| TxtNetAddressTypeEmailAddress | 8 | Email address |
| TxtNetAddressTypeURL | 9 | URL address |
| TxtNetAddressTypeURLKnownSuffix | 10 | URL with known suffix |
| TxtNetAddressTypeFriendlyDNS | 11 | Friendly DNS name |
| TxtNetAddressTypeDNSSimpleLabel | 12 | Single-label DNS name |
| TxtNetAddressTypeAddressMask | 13 | Address mask |
| TxtNetAddressTypeFileName | 14 | File name |
| TxtNetAddressTypeAny | 15 | Any address |
| TxtNetAddressTypeAnyLocal | 16 | Any local address |
| TxtNetAddressTypeIPv4MappedIPv6 | 17 | IPv4-mapped IPv6 address |
| TxtNetAddressTypeIPv4TranslatedIPv6 | 18 | IPv4-translated IPv6 address |
| TxtNetAddressTypeIPv4TeredoIPv6 | 19 | Teredo IPv6 address |

## Properties

### Name

```vb
Public Property Get Name() As String
```

Returns the name used to identify the object in code.

### Tag

```vb
Public Property Get Tag() As String
Public Property Let Tag(ByVal Value As String)
```

Stores extra data needed by the program.

### Parent

```vb
Public Property Get Parent() As Object
```

Returns the object that contains the object.

### Container

```vb
Public Property Get Container() As Object
Public Property Set Container(ByVal Value As Object)
```

Returns/sets the container of the object.

### Left

```vb
Public Property Get Left() As Single
Public Property Let Left(ByVal Value As Single)
```

Returns/sets the distance between the internal left edge of the object and the left edge of its container.

### Top

```vb
Public Property Get Top() As Single
Public Property Let Top(ByVal Value As Single)
```

Returns/sets the distance between the internal top edge of the object and the top edge of its container.

### Width

```vb
Public Property Get Width() As Single
Public Property Let Width(ByVal Value As Single)
```

Returns/sets the width of the object.

### Height

```vb
Public Property Get Height() As Single
Public Property Let Height(ByVal Value As Single)
```

Returns/sets the height of the object.

### Visible

```vb
Public Property Get Visible() As Boolean
Public Property Let Visible(ByVal Value As Boolean)
```

Returns/sets whether the object is visible.

### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

Returns/sets the tooltip text displayed when the mouse hovers.

### WhatsThisHelpID

```vb
Public Property Get WhatsThisHelpID() As Long
Public Property Let WhatsThisHelpID(ByVal Value As Long)
```

Returns/sets the associated context help ID.

### DragIcon

```vb
Public Property Get DragIcon() As IPictureDisp
Public Property Let DragIcon(ByVal Value As IPictureDisp)
Public Property Set DragIcon(ByVal Value As IPictureDisp)
```

Returns/sets the icon displayed during drag-and-drop operations.

### DragMode

```vb
Public Property Get DragMode() As Integer
Public Property Let DragMode(ByVal Value As Integer)
```

Returns/sets the drag mode (manual or automatic).

### hWnd

```vb
Public Property Get hWnd() As LongPtr
```

Returns the control handle.

### hWndUserControl

```vb
Public Property Get hWndUserControl() As LongPtr
```

Returns the UserControl handle.

### Font

```vb
Public Property Get Font() As StdFont
Public Property Let Font(ByVal NewFont As StdFont)
Public Property Set Font(ByVal NewFont As StdFont)
```

Returns/sets the font.

### VisualStyles

```vb
Public Property Get VisualStyles() As Boolean
Public Property Let VisualStyles(ByVal Value As Boolean)
```

Returns/sets whether visual styles are enabled. Requires comctl32.dll version 6.0 or later.

### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

Returns/sets the background color.

### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

Returns/sets the foreground color.

### Enabled

```vb
Public Property Get Enabled() As Boolean
Public Property Let Enabled(ByVal Value As Boolean)
```

Returns/sets whether the object can respond to user events.

### AllowDropFiles

```vb
Public Property Get AllowDropFiles() As Boolean
Public Property Let AllowDropFiles(ByVal Value As Boolean)
```

Returns/sets whether drag-and-drop files are allowed.

### OLEDragMode

```vb
Public Property Get OLEDragMode() As Integer
Public Property Let OLEDragMode(ByVal Value As Integer)
```

Returns/sets the OLE drag mode.

### OLEDragDropScroll

```vb
Public Property Get OLEDragDropScroll() As Boolean
Public Property Let OLEDragDropScroll(ByVal Value As Boolean)
```

Returns/sets whether auto-scrolling is enabled during OLE drag-and-drop.

### OLEDropMode

```vb
Public Property Get OLEDropMode() As OLEDropModeConstants
Public Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)
```

Returns/sets whether the object can act as an OLE drop target.

### MousePointer

```vb
Public Property Get MousePointer() As CCMousePointerConstants
Public Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

Returns/sets the type of mouse pointer displayed when the mouse hovers. See common enumerations.

### MouseIcon

```vb
Public Property Get MouseIcon() As IPictureDisp
Public Property Let MouseIcon(ByVal Value As IPictureDisp)
Public Property Set MouseIcon(ByVal Value As IPictureDisp)
```

Returns/sets the custom mouse icon.

### MouseTrack

```vb
Public Property Get MouseTrack() As Boolean
Public Property Let MouseTrack(ByVal Value As Boolean)
```

Returns/sets whether events are triggered when the mouse enters or leaves the control.

### RightToLeft

```vb
Public Property Get RightToLeft() As Boolean
Public Property Let RightToLeft(ByVal Value As Boolean)
```

Returns/sets the right-to-left display direction.

### RightToLeftMode

```vb
Public Property Get RightToLeftMode() As CCRightToLeftModeConstants
Public Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

Returns/sets the right-to-left mode. See common enumerations.

### BorderStyle

```vb
Public Property Get BorderStyle() As Integer
Public Property Let BorderStyle(ByVal Value As Integer)
```

Returns/sets the border style.

### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

Returns/sets the text content.

### Default

```vb
Public Property Get Default() As Boolean
Public Property Let Default(ByVal Value As Boolean)
```

Returns/sets whether this is the default button (activated by pressing Enter).

### Alignment

```vb
Public Property Get Alignment() As AlignmentConstants
Public Property Let Alignment(ByVal Value As AlignmentConstants)
```

Returns/sets the text alignment.

### AllowOnlyNumbers

```vb
Public Property Get AllowOnlyNumbers() As Boolean
Public Property Let AllowOnlyNumbers(ByVal Value As Boolean)
```

Returns/sets whether only numeric input is allowed.

### Locked

```vb
Public Property Get Locked() As Boolean
Public Property Let Locked(ByVal Value As Boolean)
```

Returns/sets whether editing is locked (scrolling and selection are still allowed).

### HideSelection

```vb
Public Property Get HideSelection() As Boolean
Public Property Let HideSelection(ByVal Value As Boolean)
```

Returns/sets whether the highlight of the selected text is hidden when the control loses focus.

### PasswordChar

```vb
Public Property Get PasswordChar() As String
Public Property Let PasswordChar(ByVal Value As String)
```

Returns/sets the password masking character.

### UseSystemPasswordChar

```vb
Public Property Get UseSystemPasswordChar() As Boolean
Public Property Let UseSystemPasswordChar(ByVal Value As Boolean)
```

Returns/sets whether to use the system default password character.

### MultiLine

```vb
Public Property Get MultiLine() As Boolean
Public Property Let MultiLine(ByVal Value As Boolean)
```

Returns/sets whether multi-line text input is accepted.

### MaxLength

```vb
Public Property Get MaxLength() As Long
Public Property Let MaxLength(ByVal Value As Long)
```

Returns/sets the maximum number of characters. 0 means no limit.

### ScrollBars

```vb
Public Property Get ScrollBars() As Integer
Public Property Let ScrollBars(ByVal Value As Integer)
```

Returns/sets the scroll bar style.

### CueBanner

```vb
Public Property Get CueBanner() As String
Public Property Let CueBanner(ByVal Value As String)
```

Returns/sets the cue banner text (displayed when the control is empty).

### CueBannerAlways

```vb
Public Property Get CueBannerAlways() As Boolean
Public Property Let CueBannerAlways(ByVal Value As Boolean)
```

Returns/sets whether the cue banner is always displayed (even when the control has focus).

### CharacterCasing

```vb
Public Property Get CharacterCasing() As TxtCharacterCasingConstants
Public Property Let CharacterCasing(ByVal Value As TxtCharacterCasingConstants)
```

Returns/sets the character casing conversion mode.

### WantReturn

```vb
Public Property Get WantReturn() As Boolean
Public Property Let WantReturn(ByVal Value As Boolean)
```

Returns/sets whether pressing Enter in a multi-line text box inserts a line break.

### IMEMode

```vb
Public Property Get IMEMode() As CCIMEModeConstants
Public Property Let IMEMode(ByVal Value As CCIMEModeConstants)
```

Returns/sets the Input Method Editor (IME) mode. See common enumerations.

### NetAddressValidator

```vb
Public Property Get NetAddressValidator() As Boolean
Public Property Let NetAddressValidator(ByVal Value As Boolean)
```

Returns/sets whether network address validation is enabled.

### NetAddressType

```vb
Public Property Get NetAddressType() As TxtNetAddressTypeConstants
Public Property Let NetAddressType(ByVal Value As TxtNetAddressTypeConstants)
```

Returns/sets the type of network address validation.

### AllowOverType

```vb
Public Property Get AllowOverType() As Boolean
Public Property Let AllowOverType(ByVal Value As Boolean)
```

Returns/sets whether overtype mode is allowed.

### OverTypeMode

```vb
Public Property Get OverTypeMode() As Boolean
Public Property Let OverTypeMode(ByVal Value As Boolean)
```

Returns/sets whether overtype mode is active.

### Modified

```vb
Public Property Get Modified() As Boolean
Public Property Let Modified(ByVal Value As Boolean)
```

Returns/sets whether the text has been modified.

### TextLength

```vb
Public Property Get TextLength() As Long
```

Returns the text length.

### SelStart

```vb
Public Property Get SelStart() As Long
Public Property Let SelStart(ByVal Value As Long)
```

Returns/sets the starting position of the selection.

### SelLength

```vb
Public Property Get SelLength() As Long
Public Property Let SelLength(ByVal Value As Long)
```

Returns/sets the length of the selection.

### SelText

```vb
Public Property Get SelText() As String
Public Property Let SelText(ByVal Value As String)
```

Returns/sets the text of the selection.

### LeftMargin

```vb
Public Property Get LeftMargin() As Long
Public Property Let LeftMargin(ByVal Value As Long)
```

Returns/sets the left margin.

### RightMargin

```vb
Public Property Get RightMargin() As Long
Public Property Let RightMargin(ByVal Value As Long)
```

Returns/sets the right margin.

## Methods

### Refresh

```vb
Public Sub Refresh()
```

Forces a complete repaint of the object.

### Copy

```vb
Public Sub Copy()
```

Copies the selection to the clipboard.

### Cut

```vb
Public Sub Cut()
```

Cuts the selection to the clipboard.

### Paste

```vb
Public Sub Paste()
```

Pastes the clipboard contents into the control.

### Clear

```vb
Public Sub Clear()
```

Clears all text.

### Undo

```vb
Public Sub Undo()
```

Undoes the last operation.

### CanUndo

```vb
Public Function CanUndo() As Boolean
```

Returns whether an undo operation is available.

### ResetUndoQueue

```vb
Public Sub ResetUndoQueue()
```

Resets the undo queue.

### OLEDrag

```vb
Public Sub OLEDrag()
```

Initiates an OLE drag-and-drop operation.

### GetLine

```vb
Public Function GetLine(ByVal LineIndex As Long) As String
```

Gets the text content of the specified line.

### GetLineCount

```vb
Public Function GetLineCount() As Long
```

Gets the number of text lines.

### ScrollToLine

```vb
Public Sub ScrollToLine(ByVal LineIndex As Long)
```

Scrolls to the specified line.

### ScrollToCaret

```vb
Public Sub ScrollToCaret()
```

Scrolls to the caret position.

### CharFromPos

```vb
Public Function CharFromPos(ByVal X As Long, ByVal Y As Long) As Long
```

Gets the character index from coordinates.

### GetLineFromChar

```vb
Public Function GetLineFromChar(ByVal CharIndex As Long) As Long
```

Gets the line number from a character index.

### ShowBalloonTip

```vb
Public Sub ShowBalloonTip(ByVal Title As String, ByVal Text As String, ByVal Icon As TxtIconConstants)
```

Displays a balloon tip.

### HideBalloonTip

```vb
Public Sub HideBalloonTip()
```

Hides the balloon tip.

### ValidateNetAddress

```vb
Public Function ValidateNetAddress() As Long
```

Validates the network address. Returns 0 if valid.

### ShowNetAddressErrorTip

```vb
Public Sub ShowNetAddressErrorTip()
```

Displays a network address error tip based on the validation result.

### NetAddressFormat

```vb
Public Property Get NetAddressFormat() As TxtNetAddressFormatConstants
```

Returns the network address format.

### NetAddressString

```vb
Public Property Get NetAddressString() As String
```

Returns the network address string.

### NetAddressPortNumber

```vb
Public Property Get NetAddressPortNumber() As Long
```

Returns the network address port number.

### NetAddressPrefixLength

```vb
Public Property Get NetAddressPrefixLength() As Long
```

Returns the network address prefix length.

### Drag

```vb
Public Sub Drag(Optional ByRef Action As Variant)
```

Starts, ends, or cancels a drag operation.

### SetFocus

```vb
Public Sub SetFocus()
```

Moves the focus to the control.

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

Sets the Z-order.

## Events

### Click

```vb
Public Event Click()
```

Occurs when the user clicks the control.

### DblClick

```vb
Public Event DblClick()
```

Occurs when the user double-clicks the control.

### Change

```vb
Public Event Change()
```

Occurs when the text content changes.

### MaxText

```vb
Public Event MaxText()
```

Occurs when the entered text exceeds the MaxLength limit.

### DropFiles

```vb
Public Event DropFiles(ByVal Files As Variant)
```

Occurs when files are dragged and dropped onto the control. Files is an array of file paths.

### Scroll

```vb
Public Event Scroll()
```

Occurs when the text scrolls.

### ContextMenu

```vb
Public Event ContextMenu(ByVal X As Single, ByVal Y As Single, ByRef Handled As Boolean)
```

Occurs when a context menu is requested. Set Handled to True to cancel the default menu.

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(KeyCode As Integer, Shift As Integer)
```

Occurs before the KeyDown event, for preprocessing keyboard input.

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(KeyCode As Integer, Shift As Integer)
```

Occurs before the KeyUp event.

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

Occurs when a keyboard key is pressed.

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

Occurs when a keyboard key is released.

### KeyPress

```vb
Public Event KeyPress(KeyAscii As Integer)
```

Occurs when an ANSI key is pressed and released.

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Occurs when a mouse button is pressed.

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Occurs when the mouse is moved.

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Occurs when a mouse button is released.

### MouseEnter

```vb
Public Event MouseEnter()
```

Occurs when the mouse enters the control area.

### MouseLeave

```vb
Public Event MouseLeave()
```

Occurs when the mouse leaves the control area.

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

Occurs when an OLE drag-and-drop operation is completed.

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Occurs when data is dropped during an OLE drag-and-drop operation.

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

Occurs when data is dragged over the control during an OLE drag-and-drop operation.

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

Occurs during an OLE drag-and-drop operation to provide feedback.

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

Occurs when data is set during an OLE drag-and-drop operation.

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

Occurs when an OLE drag-and-drop operation starts.

## Code Examples

### Basic Usage

```vb
' Set up a multi-line text box
With TextBoxW1
    .MultiLine = True
    .ScrollBars = 3
    .MaxLength = 5000
    .WantReturn = True
    .CueBanner = "Please enter content..."
End With

' Use as a password box
With TextBoxW1
    .PasswordChar = "*"
    .UseSystemPasswordChar = True
    .MaxLength = 20
End With

' Network address validation
TextBoxW1.NetAddressValidator = True
TextBoxW1.NetAddressType = TxtNetAddressTypeURL

Private Sub Command1_Click()
    If TextBoxW1.ValidateNetAddress() = 0 Then
        MsgBox "Address is valid: " & TextBoxW1.NetAddressString
    Else
        TextBoxW1.ShowNetAddressErrorTip
    End If
End Sub

' Balloon tip
TextBoxW1.ShowBalloonTip "Input Error", "Please enter a valid email address", TxtIconError

' Drag-and-drop files
Private Sub TextBoxW1_DropFiles(ByVal Files As Variant)
    Dim i As Long
    For i = LBound(Files) To UBound(Files)
        Debug.Print "File: " & Files(i)
    Next i
End Sub
```