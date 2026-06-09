---
title: RichTextBox Control
description: RichTextBox Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '67f0f285-0ead-47ec-9dd3-7a6dc8128d74'
  PropagateID: '67f0f285-0ead-47ec-9dd3-7a6dc8128d74'
  ReservedCode1: '37b798cb-123f-46b4-ad0a-c542273dd316'
  ReservedCode2: '37b798cb-123f-46b4-ad0a-c542273dd316'
---

# RichTextBox Control

Wraps the RichEdit system rich text editing control, providing formatted text editing, RTF file read/write, OLE object embedding, printing, find/replace, and automatic hyperlink detection.

## Enumerations

### RtfLoadSaveFormatConstants

| Constant | Value | Description |
|----------|-------|-------------|
| RtfLoadSaveFormatRTF | 0 | RTF format |
| RtfLoadSaveFormatText | 1 | Plain text format |
| RtfLoadSaveFormatUnicodeText | 2 | Unicode plain text format |

### RtfFindOptionConstants

| Constant | Value | Description |
|----------|-------|-------------|
| RtfFindOptionWholeWord | &H2 | Match whole word |
| RtfFindOptionMatchCase | &H4 | Case-sensitive |
| RtfFindOptionNoHighlight | &H8 | Do not highlight matches |
| RtfFindOptionReverse | &H10 | Reverse search |

### RtfActionTypeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| RtfActionTypeUnknown | 0 | Unknown action |
| RtfActionTypeTyping | 1 | Typing action |
| RtfActionTypeDelete | 2 | Delete action |
| RtfActionTypeDragDrop | 3 | Drag-and-drop action |
| RtfActionTypeCut | 4 | Cut action |
| RtfActionTypePaste | 5 | Paste action |
| RtfActionTypeAutoTable | 6 | Auto-table action |

### RtfSelAlignmentConstants

| Constant | Value | Description |
|----------|-------|-------------|
| RtfSelAlignmentLeft | 0 | Left-aligned |
| RtfSelAlignmentRight | 1 | Right-aligned |
| RtfSelAlignmentCenter | 2 | Center-aligned |
| RtfSelAlignmentJustified | 3 | Justified |

### RtfSelTypeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| RtfSelTypeEmpty | 0 | Empty selection |
| RtfSelTypeText | 1 | Text |
| RtfSelTypeObject | 2 | OLE object |
| RtfSelTypeMultiChar | 4 | Multiple characters |
| RtfSelTypeMultiObject | 8 | Multiple OLE objects |

### RtfTextModeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| RtfTextModeRichText | 0 | Rich text mode |
| RtfTextModePlainText | 1 | Plain text mode |

### CCMousePointerConstants

See common enumerations.

### OLEDropModeConstants

See common enumerations.

### CCRightToLeftModeConstants

See common enumerations.

### CCIMEModeConstants

See common enumerations.

## Properties

### Text
`Property Get Text() As String`
`Property Let Text(ByVal Value As String)`

The plain text content contained in the control. Default property.

### TextLength
`Property Get TextLength() As Long`

The text length (number of characters). Read-only.

### TextRTF
`Property Get TextRTF() As String`
`Property Let TextRTF(ByVal Value As String)`

The RTF text content containing all RTF codes.

### SelText
`Property Get SelText() As String`
`Property Let SelText(ByVal Value As String)`

The text content of the current selection.

### SelRTF
`Property Get SelRTF() As String`
`Property Let SelRTF(ByVal Value As String)`

The RTF text of the current selection (containing all RTF codes).

### SelStart
`Property Get SelStart() As Long`
`Property Let SelStart(ByVal Value As Long)`

The starting position of the selection; the insertion point when there is no selection.

### SelLength
`Property Get SelLength() As Long`
`Property Let SelLength(ByVal Value As Long)`

The number of characters in the selection.

### SelAlignment
`Property Get SelAlignment() As Variant`
`Property Let SelAlignment(ByVal Value As Variant)`

The paragraph alignment, one of the RtfSelAlignmentConstants values.

### SelBold
`Property Get SelBold() As Variant`
`Property Let SelBold(ByVal Value As Variant)`

The bold formatting of the current selection.

### SelItalic
`Property Get SelItalic() As Variant`
`Property Let SelItalic(ByVal Value As Variant)`

The italic formatting of the current selection.

### SelStrikethru
`Property Get SelStrikethru() As Variant`
`Property Let SelStrikethru(ByVal Value As Variant)`

The strikethrough formatting of the current selection.

### SelUnderline
`Property Get SelUnderline() As Variant`
`Property Let SelUnderline(ByVal Value As Variant)`

The underline formatting of the current selection.

### SelBullet
`Property Get SelBullet() As Variant`
`Property Let SelBullet(ByVal Value As Variant)`

Whether the paragraph at the current selection or insertion point has a bullet style.

### SelCharOffset
`Property Get SelCharOffset() As Variant`
`Property Let SelCharOffset(ByVal Value As Variant)`

The character offset, determining whether text is displayed on the baseline (normal), above the baseline (superscript), or below the baseline (subscript).

### SelColor
`Property Get SelColor() As Variant`
`Property Let SelColor(ByVal Value As Variant)`

The text color of the current selection.

### SelBkColor
`Property Get SelBkColor() As Variant`
`Property Let SelBkColor(ByVal Value As Variant)`

The text background color of the current selection.

### SelFontName
`Property Get SelFontName() As Variant`
`Property Let SelFontName(ByVal Value As Variant)`

The font name of the current selection.

### SelFontSize
`Property Get SelFontSize() As Variant`
`Property Let SelFontSize(ByVal Value As Variant)`

The font size of the current selection (in points).

### SelFontCharset
`Property Get SelFontCharset() As Variant`
`Property Let SelFontCharset(ByVal Value As Variant)`

The font character set of the current selection.

### SelProtected
`Property Get SelProtected() As Variant`
`Property Let SelProtected(ByVal Value As Variant)`

Whether the text in the current selection is protected (non-editable).

### SelIndent
`Property Get SelIndent() As Variant`
`Property Let SelIndent(ByVal Value As Variant)`

The left indent distance.

### SelRightIndent
`Property Get SelRightIndent() As Variant`
`Property Let SelRightIndent(ByVal Value As Variant)`

The right indent distance.

### SelHangingIndent
`Property Get SelHangingIndent() As Variant`
`Property Let SelHangingIndent(ByVal Value As Variant)`

The first-line indent distance (relative to the left indent).

### SelVisible
`Property Get SelVisible() As Variant`
`Property Let SelVisible(ByVal Value As Variant)`

Whether the text in the current selection is visible.

### SelLink
`Property Get SelLink() As Variant`
`Property Let SelLink(ByVal Value As Variant)`

Whether the text in the current selection is marked as a hyperlink.

### SelTabCount
`Property Get SelTabCount() As Variant`
`Property Let SelTabCount(ByVal Value As Variant)`

The number of tab stops in the current selection.

### SelTabs
`Property Get SelTabs(ByVal Element As Integer) As Variant`
`Property Let SelTabs(ByVal Element As Integer, ByVal Value As Variant)`

The absolute tab stop positions of the current selection.

### Modified
`Property Get Modified() As Boolean`
`Property Let Modified(ByVal Value As Boolean)`

Whether the control content has been modified. Setting the Text property resets this to False; any input operation sets it to True.

### UndoType
`Property Get UndoType() As RtfActionTypeConstants`

The type of the next undo operation. Read-only.

### RedoType
`Property Get RedoType() As RtfActionTypeConstants`

The type of the next redo operation. Read-only.

### LeftMargin
`Property Get LeftMargin() As Single`
`Property Let LeftMargin(ByVal Value As Single)`

The left margin width.

### RightMargin
`Property Get RightMargin() As Single`
`Property Let RightMargin(ByVal Value As Single)`

The right margin width.

### ZoomFactor
`Property Get ZoomFactor() As Double`
`Property Let ZoomFactor(ByVal Value As Double)`

The current zoom factor.

### VisualStyles
`Property Get VisualStyles() As Boolean`
`Property Let VisualStyles(ByVal Value As Boolean)`

Whether visual styles are enabled. Requires comctl32.dll version 6.0 or later.

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

Whether the control is enabled.

### AllowDropFiles
`Property Get AllowDropFiles() As Boolean`
`Property Let AllowDropFiles(ByVal Value As Boolean)`

Whether drag-and-drop files are allowed. Only applicable when there is no OLE drop target.

### OLEDragDropRTF
`Property Get OLEDragDropRTF() As Boolean`
`Property Let OLEDragDropRTF(ByVal Value As Boolean)`

Whether the RichTextBox control can act as an OLE drag source and drop target.

### OLEDragMode
`Property Get OLEDragMode() As VBRUN.OLEDragConstants`
`Property Let OLEDragMode(ByVal Value As VBRUN.OLEDragConstants)`

The OLE drag mode. Must be Manual when OLEDragDropRTF is True.

### OLEDragDropScroll
`Property Get OLEDragDropScroll() As Boolean`
`Property Let OLEDragDropScroll(ByVal Value As Boolean)`

Whether scrolling is allowed during OLE drag-and-drop operations. Must be True when OLEDragDropRTF is True.

### OLEDropMode
`Property Get OLEDropMode() As OLEDropModeConstants`
`Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)`

The OLE drop target mode. Must be None when OLEDragDropRTF is True. See common enumerations.

### MousePointer
`Property Get MousePointer() As CCMousePointerConstants`
`Property Let MousePointer(ByVal Value As CCMousePointerConstants)`

The mouse pointer style. See common enumerations.

### MouseIcon
`Property Get MouseIcon() As IPictureDisp`
`Property Let MouseIcon(ByVal Value As IPictureDisp)`
`Property Set MouseIcon(ByVal Value As IPictureDisp)`

The custom mouse icon.

### MouseTrack
`Property Get MouseTrack() As Boolean`
`Property Let MouseTrack(ByVal Value As Boolean)`

Whether mouse enter/leave tracking is enabled.

### RightToLeft
`Property Get RightToLeft() As Boolean`
`Property Let RightToLeft(ByVal Value As Boolean)`

The right-to-left display direction.

### RightToLeftMode
`Property Get RightToLeftMode() As CCRightToLeftModeConstants`
`Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)`

The right-to-left mode. See common enumerations.

### BorderStyle
`Property Get BorderStyle() As Integer`
`Property Let BorderStyle(ByVal Value As Integer)`

The border style (vbBSNone or vbFixedSingle).

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

The background color. Only applicable when Enabled is True.

### Locked
`Property Get Locked() As Boolean`
`Property Let Locked(ByVal Value As Boolean)`

Whether the content is locked as read-only.

### HideSelection
`Property Get HideSelection() As Boolean`
`Property Let HideSelection(ByVal Value As Boolean)`

Whether the selection is hidden when the control loses focus.

### PasswordChar
`Property Get PasswordChar() As String`
`Property Let PasswordChar(ByVal Value As String)`

The password character used to display in place of actual characters. This property is ignored when UseSystemPasswordChar is True.

### UseSystemPasswordChar
`Property Get UseSystemPasswordChar() As Boolean`
`Property Let UseSystemPasswordChar(ByVal Value As Boolean)`

Whether to use the default system password character. This property takes precedence over PasswordChar.

### MultiLine
`Property Get MultiLine() As Boolean`
`Property Let MultiLine(ByVal Value As Boolean)`

Whether multi-line text is allowed. Read-only at runtime.

### MaxLength
`Property Get MaxLength() As Long`
`Property Let MaxLength(ByVal Value As Long)`

The maximum number of characters that can be entered.

### ScrollBars
`Property Get ScrollBars() As VBRUN.ScrollBarConstants`
`Property Let ScrollBars(ByVal Value As VBRUN.ScrollBarConstants)`

The scroll bar style.

### WantReturn
`Property Get WantReturn() As Boolean`
`Property Let WantReturn(ByVal Value As Boolean)`

Whether pressing Enter activates the default button or inserts a line break. Only applicable for multi-line RichTextBox with a default button.

### DisableNoScroll
`Property Get DisableNoScroll() As Boolean`
`Property Let DisableNoScroll(ByVal Value As Boolean)`

Whether scroll bars are disabled rather than hidden when not needed. Read-only at runtime.

### AutoURLDetect
`Property Get AutoURLDetect() As Boolean`
`Property Let AutoURLDetect(ByVal Value As Boolean)`

Whether automatic hyperlink detection is enabled.

### BulletIndent
`Property Get BulletIndent() As Single`
`Property Let BulletIndent(ByVal Value As Single)`

The indent amount when paragraphs use bullet style.

### SelectionBar
`Property Get SelectionBar() As Boolean`
`Property Let SelectionBar(ByVal Value As Boolean)`

Whether to add a selection bar in the left margin, where the cursor becomes a right-up arrow, allowing the user to select entire lines.

### FileName
`Property Get FileName() As String`
`Property Let FileName(ByVal Value As String)`

The file name to load into the control at design time.

### TextMode
`Property Get TextMode() As RtfTextModeConstants`
`Property Let TextMode(ByVal Value As RtfTextModeConstants)`

The text mode (rich text or plain text).

### UndoLimit
`Property Get UndoLimit() As Long`
`Property Let UndoLimit(ByVal Value As Long)`

The maximum number of actions that can be stored in the undo queue. 0 disables undo functionality.

### IMEMode
`Property Get IMEMode() As CCIMEModeConstants`
`Property Let IMEMode(ByVal Value As CCIMEModeConstants)`

The Input Method Editor (IME) mode. See common enumerations.

### AllowOverType
`Property Get AllowOverType() As Boolean`
`Property Let AllowOverType(ByVal Value As Boolean)`

Whether overtype mode can be activated.

### OverTypeMode
`Property Get OverTypeMode() As Boolean`
`Property Let OverTypeMode(ByVal Value As Boolean)`

Whether overtype mode is active. In overtype mode, typed characters replace existing characters one by one.

### UseCrLf
`Property Get UseCrLf() As Boolean`
`Property Let UseCrLf(ByVal Value As Boolean)`

Whether the control translates each Cr to CrLf for the Text property.

### AutoVerbMenu
`Property Get AutoVerbMenu() As Boolean`
`Property Let AutoVerbMenu(ByVal Value As Boolean)`

Whether to display the verb pop-up menu when right-clicking a selected OLE object.

### Font
`Property Get Font() As StdFont`
`Property Let Font(ByVal NewFont As StdFont)`
`Property Set Font(ByVal NewFont As StdFont)`

The font.

### hWnd
`Property Get hWnd() As LongPtr`

The window handle of the RichTextBox control.

### hWndUserControl
`Property Get hWndUserControl() As LongPtr`

The window handle of the UserControl.

### Name
`Property Get Name() As String`

The control name. Read-only.

### Tag
`Property Get Tag() As String`
`Property Let Tag(ByVal Value As String)`

Custom data.

### Parent
`Property Get Parent() As Object`

The parent object. Read-only.

### Container
`Property Get Container() As Object`
`Property Set Container(ByVal Value As Object)`

The container object.

### Left
`Property Get Left() As Single`
`Property Let Left(ByVal Value As Single)`

The left margin.

### Top
`Property Get Top() As Single`
`Property Let Top(ByVal Value As Single)`

The top margin.

### Width
`Property Get Width() As Single`
`Property Let Width(ByVal Value As Single)`

The width.

### Height
`Property Get Height() As Single`
`Property Let Height(ByVal Value As Single)`

The height.

### Visible
`Property Get Visible() As Boolean`
`Property Let Visible(ByVal Value As Boolean)`

Whether the control is visible.

### ToolTipText
`Property Get ToolTipText() As String`
`Property Let ToolTipText(ByVal Value As String)`

The tooltip text.

### HelpContextID
`Property Get HelpContextID() As Long`
`Property Let HelpContextID(ByVal Value As Long)`

The help context ID.

### WhatsThisHelpID
`Property Get WhatsThisHelpID() As Long`
`Property Let WhatsThisHelpID(ByVal Value As Long)`

The "What's This" help ID.

### DragIcon
`Property Get DragIcon() As IPictureDisp`
`Property Let DragIcon(ByVal Value As IPictureDisp)`
`Property Set DragIcon(ByVal Value As IPictureDisp)`

The drag icon.

### DragMode
`Property Get DragMode() As Integer`
`Property Let DragMode(ByVal Value As Integer)`

The drag mode.

## Methods

### Copy
`Public Sub Copy()`

Copies the current selection to the clipboard.

### Cut
`Public Sub Cut()`

Deletes the current selection and copies the text to the clipboard.

### Paste
`Public Sub Paste()`

Pastes the clipboard contents at the current insertion point.

### CanPaste
`Public Function CanPaste(Optional ByVal wFormat As Long) As Boolean`

Determines whether the clipboard contains content that can be pasted in the specified format.

### PasteSpecial
`Public Sub PasteSpecial(ByVal wFormat As Long)`

Pastes content into the RichTextBox in the specified clipboard format.

### PasteSpecialDlg
`Public Sub PasteSpecialDlg()`

Displays the "Paste Special" dialog.

### Clear
`Public Sub Clear()`

Clears the current selection.

### Undo
`Public Sub Undo()`

Undoes the last operation, if any.

### CanUndo
`Public Function CanUndo() As Boolean`

Determines whether there are actions in the undo queue that can be undone.

### StopUndoAction
`Public Sub StopUndoAction()`

Stops the control from collecting subsequent typing actions into the current undo action.

### ResetUndoQueue
`Public Sub ResetUndoQueue()`

Resets the undo queue.

### Redo
`Public Sub Redo()`

Redoes the next operation, if any.

### CanRedo
`Public Function CanRedo() As Boolean`

Determines whether there are actions in the redo queue that can be redone.

### GetTextRange
`Public Function GetTextRange(ByVal Min As Long, ByVal Max As Long) As String`

Gets the text within the specified range.

### Find
`Public Function Find(ByVal Text As String, Optional ByVal Min As Long, Optional ByVal Max As Long = -1, Optional ByVal Options As RtfFindOptionConstants) As Long`

Searches for text in the RichTextBox, returning the character position found, or -1 if not found.

### Span
`Public Sub Span(ByVal CharacterSet As String, Optional ByVal Forward As Boolean, Optional ByVal Negate As Boolean)`

Selects text based on the specified character set.

### UpTo
`Public Sub UpTo(ByVal CharacterSet As String, Optional ByVal Forward As Boolean, Optional ByVal Negate As Boolean)`

Moves the insertion point to but not including the first character in the specified character set.

### SaveFile
`Public Sub SaveFile(ByVal FileName As String, Optional ByVal Format As RtfLoadSaveFormatConstants = RtfLoadSaveFormatRTF, Optional ByVal SelectionOnly As Boolean)`

Saves the control contents to a file.

### LoadFile
`Public Sub LoadFile(ByVal FileName As String, Optional ByVal Format As RtfLoadSaveFormatConstants = RtfLoadSaveFormatRTF, Optional ByVal SelectionOnly As Boolean)`

Loads an RTF or text file into the control.

### GetLine
`Public Function GetLine(ByVal LineNumber As Long) As String`

Gets the text of the specified line. 0 indicates the current line (the line containing the insertion point).

### GetLineCount
`Public Function GetLineCount() As Long`

Gets the number of lines.

### ScrollToLine
`Public Sub ScrollToLine(ByVal LineNumber As Long)`

Scrolls to ensure the specified line is visible.

### ScrollToCaret
`Public Sub ScrollToCaret()`

Scrolls the insertion point into the visible area.

### CharFromPos
`Public Function CharFromPos(ByVal X As Single, ByVal Y As Single) As Long`

Returns the character index closest to the specified point.

### GetLineFromChar
`Public Function GetLineFromChar(ByVal CharIndex As Long) As Long`

Gets the line number containing the specified character index. A character index of -1 returns the current line.

### GetSelType
`Public Function GetSelType() As Integer`

Determines the current selection type, returning a combination of RtfSelTypeConstants flags.

### SelPrint
`Public Sub SelPrint(ByVal hDC As LongPtr, Optional ByVal CallStartEndDoc As Boolean = True, Optional ByVal DocName As String = "RICHTEXT", Optional ByVal LeftMargin As Long, Optional ByVal TopMargin As Long, Optional ByVal RightMargin As Long, Optional ByVal BottomMargin As Long)`

Sends the formatted text in the RichTextBox to a device for printing. If there is no selection, all content is printed.

### PrintDoc
`Public Sub PrintDoc(ByVal hDC As LongPtr, Optional ByVal CallStartEndDoc As Boolean = True, Optional ByVal DocName As String = "RICHTEXT", Optional ByVal LeftMargin As Long, Optional ByVal TopMargin As Long, Optional ByVal RightMargin As Long, Optional ByVal BottomMargin As Long)`

Sends all formatted text in the RichTextBox to a device for printing.

### GetOLEInterface
`Public Function GetOLEInterface() As IUnknown`

Retrieves the IRichEditOle object for accessing COM functionality.

### OLEObjectsAdd
`Public Sub OLEObjectsAdd(ByVal LpOleObject As LongPtr)`

Inserts an OLE object into the RichTextBox.

### OLEObjectsAddFromFile
`Public Sub OLEObjectsAddFromFile(ByVal FileName As String, Optional ByVal LinkToFile As Boolean)`

Inserts an OLE object from a file into the RichTextBox.

### OLEObjectsAddFromPicture
`Public Sub OLEObjectsAddFromPicture(ByVal Picture As IPictureDisp, Optional ByVal ClipFormat As Variant)`

Inserts an OLE object from a picture object into the RichTextBox.

### OLEObjectsGet
`Public Function OLEObjectsGet(ByVal IndexObj As Long, Optional ByVal CharPos As Long) As LongPtr`

Retrieves an OLE object from the RichTextBox.

### OLEObjectsCount
`Public Function OLEObjectsCount() As Long`

Returns the number of OLE objects currently contained in the RichTextBox.

### Drag
`Public Sub Drag([ByRef Action As Variant])`

Starts, ends, or cancels a drag operation.

### SetFocus
`Public Sub SetFocus()`

Moves the focus to the control.

### ZOrder
`Public Sub ZOrder([ByRef Position As Variant])`

Sets the Z-order of the control.

### OLEDrag
`Public Sub OLEDrag()`

Initiates an OLE drag-and-drop operation.

### Refresh
`Public Sub Refresh()`

Forces the control to repaint.

## Events

### Change
`Public Event Change()`

Occurs when the control content changes.

### MaxText
`Public Event MaxText()`

Occurs when the current text insertion exceeds the maximum character limit.

### SelChange
`Public Event SelChange(ByVal SelType As Integer, ByVal SelStart As Long, ByVal SelEnd As Long)`

Occurs when the current text selection changes or the insertion point moves.

### LinkEvent
`Public Event LinkEvent(ByVal wMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr, ByVal LinkStart As Long, ByVal LinkEnd As Long)`

Occurs when the mouse clicks or hovers over text with hyperlink formatting.

### DropFiles
`Public Event DropFiles(ByRef FileList As Variant, ByVal X As Single, ByVal Y As Single, ByVal CharPos As Long, ByVal Protected As Boolean, ByRef Cancel As Boolean)`

Occurs when the user drags and drops files onto the control. Only applicable when there is no OLE drop target and AllowDropFiles is True.

### ModifyProtected
`Public Event ModifyProtected(ByRef Allow As Boolean, ByVal SelStart As Long, ByVal SelEnd As Long)`

Occurs when the user attempts to edit protected text.

### Scroll
`Public Event Scroll()`

Occurs when scroll bars are repositioned.

### ContextMenu
`Public Event ContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)`

Occurs when the user right-clicks or presses Shift+F10. Set Handled to True to cancel the default menu.

### PreviewKeyDown
`Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)`

Occurs before the KeyDown event.

### PreviewKeyUp
`Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)`

Occurs before the KeyUp event.

### MouseEnter
`Public Event MouseEnter()`

Occurs when the mouse enters the control.

### MouseLeave
`Public Event MouseLeave()`

Occurs when the mouse leaves the control.

### OLEDragDropDone
`Public Event OLEDragDropDone()`

Occurs after the RichTextBox control completes or cancels an OLE drag-and-drop operation.

### OLEGetDropEffect
`Public Event OLEGetDropEffect(ByRef Effect As Long, ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)`

Raised by the control during an OLE drag-and-drop operation to specify the resulting effect of the drop operation.

### OLEGetDragEffect
`Public Event OLEGetDragEffect(ByRef AllowedEffects As Long)`

Occurs when the control initiates an OLE drag-and-drop operation.

### OLEGetContextMenu
`Public Event OLEGetContextMenu(ByVal SelType As Integer, ByVal LpOleObject As LongPtr, ByVal SelStart As Long, ByVal SelEnd As Long, ByRef hMenu As LongPtr)`

Raised to request a pop-up menu for the control's right-click. The control destroys this menu after use.

### OLEContextMenuClick
`Public Event OLEContextMenuClick(ByVal ID As Long)`

Occurs when the user selects an item from the pop-up menu provided by the OLEGetContextMenu event.

### OLEDeleteObject
`Public Event OLEDeleteObject(ByVal LpOleObject As LongPtr)`

Occurs when an OLE object is about to be deleted in the control. The OLE object is not necessarily released.

### Click
`Public Event Click()`

Occurs when a mouse button is pressed and released on the control.

### DblClick
`Public Event DblClick()`

Occurs when the mouse is double-clicked on the control.

### KeyDown
`Public Event KeyDown(KeyCode As Integer, Shift As Integer)`

Occurs when a key is pressed.

### KeyUp
`Public Event KeyUp(KeyCode As Integer, Shift As Integer)`

Occurs when a key is released.

### KeyPress
`Public Event KeyPress(KeyChar As Integer)`

Occurs when a key character is input.

### MouseDown
`Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Occurs when a mouse button is pressed.

### MouseMove
`Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Occurs when the mouse is moved.

### MouseUp
`Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Occurs when a mouse button is released.

### OLECompleteDrag
`Public Event OLECompleteDrag(Effect As Long)`

Occurs after an OLE drag-and-drop operation has been completed or canceled.

### OLEDragDrop
`Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`

Occurs when data is dropped onto the control via an OLE drag-and-drop operation.

### OLEDragOver
`Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`

Occurs when the mouse moves over the control during an OLE drag-and-drop operation.

### OLEGiveFeedback
`Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`

Occurs when the mouse cursor needs to be changed during an OLE drag-and-drop operation.

### OLESetData
`Public Event OLESetData(Data As DataObject, DataFormat As Integer)`

Occurs when the drop target requests data that was not provided during OLEDragStart.

### OLEStartDrag
`Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)`

Occurs when an OLE drag-and-drop operation is initiated.

## Code Examples

```vb
' Load an RTF file
RichTextBox1.LoadFile "C:\doc.rtf", RtfLoadSaveFormatRTF

' Set selection formatting
RichTextBox1.SelStart = 0
RichTextBox1.SelLength = 10
RichTextBox1.SelBold = True
RichTextBox1.SelColor = vbRed
RichTextBox1.SelFontSize = 14

' Find text
Dim pos As Long
pos = RichTextBox1.Find("keyword", 0, -1, RtfFindOptionMatchCase)

' Undo/Redo
If RichTextBox1.CanUndo Then RichTextBox1.Undo
If RichTextBox1.CanRedo Then RichTextBox1.Redo

' Print
RichTextBox1.SelPrint Printer.hDC

' Insert OLE object
RichTextBox1.OLEObjectsAddFromPicture LoadPicture("C:\image.bmp")

' Save as plain text
RichTextBox1.SaveFile "C:\output.txt", RtfLoadSaveFormatText
```