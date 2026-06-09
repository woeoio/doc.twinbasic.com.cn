---
title: DTPicker Control
description: DTPicker Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '93eff13b-fb74-4f74-a323-1858ea68f2dd'
  PropagateID: '93eff13b-fb74-4f74-a323-1858ea68f2dd'
  ReservedCode1: 'c06ae531-2125-46af-8347-f334f01f66f2'
  ReservedCode2: 'c06ae531-2125-46af-8347-f334f01f66f2'
---

# DTPicker Control

Based on the Windows date-time picker common control, provides date and time selection with custom formatting capabilities.

## Enumerations

### DtpFormatConstants

| Constant | Value | Description |
|----------|-------|-------------|
| DtpFormatLongDate | 0 | Long date format |
| DtpFormatShortDate | 1 | Short date format |
| DtpFormatTime | 2 | Time format |
| DtpFormatCustom | 3 | Custom format |

## Properties

### Name

`Property Get Name() As String`

Returns the name used to identify the object in code.

### Tag

`Property Get/Let Tag() As String`

Stores extra data needed by the program.

### Parent

`Property Get Parent() As Object`

Returns the object that contains this object.

### Container

`Property Get Container() As Object` / `Property Set Container(ByVal Value As Object)`

Returns/sets the container of the object.

### Left

`Property Get/Let Left() As Single`

Returns/sets the distance between the left edge of the object and the left edge of its container.

### Top

`Property Get/Let Top() As Single`

Returns/sets the distance between the top edge of the object and the top edge of its container.

### Width

`Property Get/Let Width() As Single`

Returns/sets the width of the object.

### Height

`Property Get/Let Height() As Single`

Returns/sets the height of the object.

### Visible

`Property Get/Let Visible() As Boolean`

Returns/sets whether the object is visible.

### ToolTipText

`Property Get/Let ToolTipText() As String`

Returns/sets the tooltip text displayed when the mouse hovers.

### HelpContextID

`Property Get/Let HelpContextID() As Long`

Specifies the default help file context ID for the object.

### WhatsThisHelpID

`Property Get/Let WhatsThisHelpID() As Long`

Returns/sets the context number associated with the object.

### DragIcon

`Property Get/Let/Set DragIcon() As IPictureDisp`

Returns/sets the icon displayed during a drag-and-drop operation.

### DragMode

`Property Get/Let DragMode() As Integer`

Returns/sets the drag mode (manual or automatic).

### hWnd

`Property Get hWnd() As LongPtr`

Returns the window handle of the date-time picker control.

### hWndUserControl

`Property Get hWndUserControl() As LongPtr`

Returns the window handle of the UserControl.

### hWndCalendar

`Property Get hWndCalendar() As LongPtr`

Returns the window handle of the drop-down calendar control.

### Font

`Property Get/Let/Set Font() As StdFont`

Returns/sets the control font.

### CalendarFont

`Property Get/Let/Set CalendarFont() As StdFont`

Returns/sets the drop-down calendar font.

### VisualStyles

`Property Get/Let VisualStyles() As Boolean`

Returns/sets whether visual styles are enabled.

### Enabled

`Property Get/Let Enabled() As Boolean`

Returns/sets whether the control responds to user events.

### OLEDropMode

`Property Get/Let OLEDropMode() As OLEDropModeConstants`

Returns/sets whether the object can act as an OLE drop target. See common enumerations.

### MousePointer

`Property Get/Let MousePointer() As CCMousePointerConstants`

Returns/sets the mouse pointer type. See common enumerations.

### MouseIcon

`Property Get/Let/Set MouseIcon() As IPictureDisp`

Returns/sets the custom mouse icon.

### MouseTrack

`Property Get/Let MouseTrack() As Boolean`

Returns/sets whether MouseEnter/MouseLeave events are fired.

### RightToLeft

`Property Get/Let RightToLeft() As Boolean`

Determines the text display direction and visual appearance of the control on bidirectional systems.

### RightToLeftLayout

`Property Get/Let RightToLeftLayout() As Boolean`

Returns/sets whether right-to-left mirrored layout is enabled.

### RightToLeftMode

`Property Get/Let RightToLeftMode() As CCRightToLeftModeConstants`

Returns/sets the right-to-left mode. See common enumerations.

### CalendarBackColor

`Property Get/Let CalendarBackColor() As OLE_COLOR`

Returns/sets the background color of the calendar month area.

### CalendarForeColor

`Property Get/Let CalendarForeColor() As OLE_COLOR`

Returns/sets the foreground color of the calendar month area.

### CalendarTitleBackColor

`Property Get/Let CalendarTitleBackColor() As OLE_COLOR`

Returns/sets the background color of the calendar title.

### CalendarTitleForeColor

`Property Get/Let CalendarTitleForeColor() As OLE_COLOR`

Returns/sets the foreground color of the calendar title.

### CalendarTrailingForeColor

`Property Get/Let CalendarTrailingForeColor() As OLE_COLOR`

Returns/sets the foreground color of the calendar trailing dates.

### CalendarShowToday

`Property Get/Let CalendarShowToday() As Boolean`

Returns/sets whether the calendar displays the "today" date at the bottom.

### CalendarShowTodayCircle

`Property Get/Let CalendarShowTodayCircle() As Boolean`

Returns/sets whether a circle is drawn around today's date.

### CalendarShowWeekNumbers

`Property Get/Let CalendarShowWeekNumbers() As Boolean`

Returns/sets whether the calendar displays week numbers.

### CalendarShowTrailingDates

`Property Get/Let CalendarShowTrailingDates() As Boolean`

Returns/sets whether the calendar displays dates from the previous/next month.

### CalendarAlignment

`Property Get/Let CalendarAlignment() As CCLeftRightAlignmentConstants`

Returns/sets the alignment of the calendar. See common enumerations.

### CalendarDayState

`Property Get/Let CalendarDayState() As Boolean`

Returns/sets whether the calendar supports bold dates in the CalendarGetDayBold event.

### CalendarUseShortestDayNames

`Property Get/Let CalendarUseShortestDayNames() As Boolean`

Returns/sets whether the calendar uses the shortest day names.

### MinDate

`Property Get/Let MinDate() As Date`

Returns/sets the minimum selectable date.

### MaxDate

`Property Get/Let MaxDate() As Date`

Returns/sets the maximum selectable date.

### Value

`Property Get/Let Value() As Variant`

Returns/sets the current date-time value.

### Year

`Property Get Year() As Integer`

Returns the year of the current date (read-only).

### Month

`Property Get Month() As Integer`

Returns the month of the current date (read-only).

### Week

`Property Get Week() As Integer`

Returns the week number of the current date (read-only).

### Day

`Property Get Day() As Integer`

Returns the day of the current date (read-only).

### Hour

`Property Get Hour() As Integer`

Returns the hour of the current time (read-only).

### Minute

`Property Get Minute() As Integer`

Returns the minute of the current time (read-only).

### Second

`Property Get Second() As Integer`

Returns the second of the current time (read-only).

### Format

`Property Get/Let Format() As DtpFormatConstants`

Returns/sets the display format of the date-time.

### CustomFormat

`Property Get/Let CustomFormat() As String`

Returns/sets the custom format string.

### UpDown

`Property Get/Let UpDown() As Boolean`

Returns/sets whether to use up/down buttons instead of a drop-down calendar.

### CheckBox

`Property Get/Let CheckBox() As Boolean`

Returns/sets whether a check box is displayed in the control.

### AllowUserInput

`Property Get/Let AllowUserInput() As Boolean`

Returns/sets whether the user can directly input dates.

### StartOfWeek

`Property Get/Let StartOfWeek() As Integer`

Returns/sets the first day of the week (0=system default, 1=Monday, ..., 7=Sunday).

### DroppedDown

`Property Get DroppedDown() As Boolean`

Returns whether the calendar is in the dropped-down state (read-only).

### Selected

`Property Get Selected() As Boolean`

Returns whether the check box is checked (read-only).

### DayCount

`Property Get DayCount() As Long`

Returns the number of currently visible dates (read-only).

### DayOfWeek

`Property Get DayOfWeek() As Integer`

Returns the day of the week for the current date (read-only).

### SystemStartOfWeek

`Property Get SystemStartOfWeek() As Integer`

Returns the system setting for the first day of the week (read-only).

## Methods

### OLEDrag

`Public Sub OLEDrag()`

Initiates an OLE drag-and-drop operation.

### Drag

`Public Sub Drag(Optional ByRef Action As Variant)`

Starts, ends, or cancels a drag operation.

### SetFocus

`Public Sub SetFocus()`

Moves focus to the control.

### ZOrder

`Public Sub ZOrder(Optional ByRef Position As Variant)`

Places the control at the front or back of the Z-order.

### Refresh

`Public Sub Refresh()`

Forces the control to repaint.

### GetIdealSize

`Public Sub GetIdealSize(ByRef Width As Long, ByRef Height As Long)`

Retrieves the ideal size of the control.

## Events

### Click

`Public Event Click()`

Occurs when the user presses and releases a mouse button.

### DropDown

`Public Event DropDown()`

Occurs when the drop-down calendar is about to be displayed.

### CloseUp

`Public Event CloseUp()`

Occurs when the user closes the calendar.

### Change

`Public Event Change()`

Occurs when the contents of the control change.

### ContextMenu

`Public Event ContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)`

Occurs when the user right-clicks or presses Shift+F10.

### CalendarGetDayBold

`Public Event CalendarGetDayBold(ByVal StartDate As Date, ByVal Count As Long, ByRef State() As Boolean)`

Occurs when the calendar requests bold date information. Requires comctl32.dll version 6.1 or later.

### CalendarContextMenu

`Public Event CalendarContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)`

Occurs when the calendar area is right-clicked.

### CallbackKeyDown

`Public Event CallbackKeyDown(ByVal KeyCode As Integer, ByVal Shift As Integer, ByVal CallbackField As String, ByRef CallbackDate As Date)`

Occurs when the user presses a key on a callback field.

### FormatString

`Public Event FormatString(ByVal CallbackField As String, ByRef FormattedString As String)`

Occurs when the control requests the display text for a callback field.

### FormatSize

`Public Event FormatSize(ByVal CallbackField As String, ByRef Size As Integer)`

Occurs when the control needs to know the maximum allowed size of a callback field.

### BeforeUserInput

`Public Event BeforeUserInput(ByVal hWndEdit As LongPtr)`

Occurs when the user attempts to input a string.

### ParseUserInput

`Public Event ParseUserInput(ByVal Text As String, ByRef ParseDate As Variant)`

Occurs when the user has finished input, requiring parsing of the input string.

### AfterUserInput

`Public Event AfterUserInput()`

Occurs when user input has been completed or cancelled.

### PreviewKeyDown

`Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)`

Occurs before the KeyDown event.

### PreviewKeyUp

`Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)`

Occurs before the KeyUp event.

### KeyDown

`Public Event KeyDown(KeyCode As Integer, Shift As Integer)`

Occurs when the user presses a key.

### KeyUp

`Public Event KeyUp(KeyCode As Integer, Shift As Integer)`

Occurs when the user releases a key.

### KeyPress

`Public Event KeyPress(KeyChar As Integer)`

Occurs when the user presses and releases a character key.

### MouseDown

`Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Occurs when the user presses a mouse button.

### MouseMove

`Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Occurs when the user moves the mouse.

### MouseUp

`Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Occurs when the user releases a mouse button.

### MouseEnter

`Public Event MouseEnter()`

Occurs when the mouse enters the control.

### MouseLeave

`Public Event MouseLeave()`

Occurs when the mouse leaves the control.

### OLECompleteDrag

`Public Event OLECompleteDrag(Effect As Long)`

Occurs when an OLE drag-and-drop operation has completed.

### OLEDragDrop

`Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`

Occurs when data is dropped on the control via an OLE drag-and-drop operation.

### OLEDragOver

`Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`

Occurs when the mouse passes over the control during an OLE drag-and-drop operation.

### OLEGiveFeedback

`Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`

Occurs when the mouse cursor needs to be changed.

### OLESetData

`Public Event OLESetData(Data As DataObject, DataFormat As Integer)`

Occurs when the drop target requests data.

### OLEStartDrag

`Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)`

Occurs when an OLE drag-and-drop operation is initiated.

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With DTPicker1
        .Format = DtpFormatShortDate
        .Value = Date
        .MinDate = #1/1/1900#
        .MaxDate = #12/31/9999#
    End With
End Sub

Private Sub DTPicker1_Change()
    MsgBox "Selected date: " & DTPicker1.Value
End Sub
```

### Custom Format and Callback

```vb
Private Sub Form_Load()
    DTPicker1.Format = DtpFormatCustom
    DTPicker1.CustomFormat = "yyyy年MM月dd日 '第' w '周'"
End Sub

Private Sub DTPicker1_FormatString(ByVal CallbackField As String, ByRef FormattedString As String)
    Select Case CallbackField
        Case "w"
            FormattedString = CStr(DatePart("ww", DTPicker1.Value, vbMonday))
    End Select
End Sub
```