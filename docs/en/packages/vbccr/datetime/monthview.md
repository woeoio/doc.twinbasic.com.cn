---
title: MonthView Control
description: MonthView Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4f47842b-835d-4ebb-b924-fc91784ebaf5'
  PropagateID: '4f47842b-835d-4ebb-b924-fc91784ebaf5'
  ReservedCode1: 'dfa84f94-75da-4701-a30d-8dadfd470a8c'
  ReservedCode2: 'dfa84f94-75da-4701-a30d-8dadfd470a8c'
---

# MonthView Control

Wraps the SysMonthCal32 system month calendar control for date selection and calendar display, supporting advanced features such as multi-date selection and multi-month views.

## Enumerations

### MvwViewConstants

| Constant | Value | Description |
|----------|-------|-------------|
| MvwViewMonth | 0 | Month view |
| MvwViewYear | 1 | Year view |
| MvwViewDecade | 2 | Decade view |
| MvwViewCentury | 3 | Century view |

### MvwHitResultConstants

| Constant | Value | Description |
|----------|-------|-------------|
| MvwHitResultNowhere | 0 | No hit |
| MvwHitResultTitleBg | 1 | Title background |
| MvwHitResultTitleMonth | 2 | Title month |
| MvwHitResultTitleYear | 3 | Title year |
| MvwHitResultTitlePrevMonth | 4 | Previous month button |
| MvwHitResultTitleNextMonth | 5 | Next month button |
| MvwHitResultCalendarBg | 6 | Calendar background |
| MvwHitResultCalendarDate | 7 | Calendar date |
| MvwHitResultCalendarDateMin | 8 | Calendar minimum date |
| MvwHitResultCalendarDateMax | 9 | Calendar maximum date |
| MvwHitResultCalendarWeekNumber | 10 | Week number |
| MvwHitResultCalendarPrevMonth | 11 | Previous month's date |
| MvwHitResultCalendarNextMonth | 12 | Next month's date |
| MvwHitResultTodayLink | 13 | "Today" link |

### CCMousePointerConstants

See common enumerations.

## Properties

### Value
`Property Get Value() As Date`
`Property Let Value(ByVal Value As Date)`

Currently selected date.

### MinDate
`Property Get MinDate() As Date`
`Property Let MinDate(ByVal Value As Date)`

Minimum selectable date.

### MaxDate
`Property Get MaxDate() As Date`
`Property Let MaxDate(ByVal Value As Date)`

Maximum selectable date.

### Year
`Property Get Year() As Integer`
`Property Let Year(ByVal Value As Integer)`

Current year.

### Month
`Property Get Month() As Integer`
`Property Let Month(ByVal Value As Integer)`

Current month (1-12).

### Week
`Property Get Week() As Integer`
`Property Let Week(ByVal Value As Integer)`

Current week number.

### Day
`Property Get Day() As Integer`
`Property Let Day(ByVal Value As Integer)`

Current day (1-31).

### DayCount
`Property Get DayCount() As Long`

Number of days in the currently visible month. Read-only.

### CalendarCount
`Property Get CalendarCount() As Long`

Number of months currently displayed. Read-only.

### ShowToday
`Property Get ShowToday() As Boolean`
`Property Let ShowToday(ByVal Value As Boolean)`

Whether to display the "today" date.

### ShowTodayCircle
`Property Get ShowTodayCircle() As Boolean`
`Property Let ShowTodayCircle(ByVal Value As Boolean)`

Whether to circle today's date.

### ShowWeekNumbers
`Property Get ShowWeekNumbers() As Boolean`
`Property Let ShowWeekNumbers(ByVal Value As Boolean)`

Whether to display week numbers.

### ShowTrailingDates
`Property Get ShowTrailingDates() As Boolean`
`Property Let ShowTrailingDates(ByVal Value As Boolean)`

Whether to display trailing dates from the previous/next month.

### ScrollRate
`Property Get ScrollRate() As Long`
`Property Let ScrollRate(ByVal Value As Long)`

Scroll rate.

### StartOfWeek
`Property Get StartOfWeek() As Integer`
`Property Let StartOfWeek(ByVal Value As Integer)`

First day of the week (0=Sunday, 1=Monday...6=Saturday).

### MultiSelect
`Property Get MultiSelect() As Boolean`
`Property Let MultiSelect(ByVal Value As Boolean)`

Whether to allow multi-date selection.

### DayState
`Property Get DayState() As String`
`Property Let DayState(ByVal Value As String)`

Day state bitmap string that controls bold display of dates.

### MaxSelCount
`Property Get MaxSelCount() As Long`
`Property Let MaxSelCount(ByVal Value As Long)`

Maximum selectable days in multi-select mode.

### MonthColumns
`Property Get MonthColumns() As Long`
`Property Let MonthColumns(ByVal Value As Long)`

Number of months displayed horizontally.

### MonthRows
`Property Get MonthRows() As Long`
`Property Let MonthRows(ByVal Value As Long)`

Number of months displayed vertically.

### View
`Property Get View() As MvwViewConstants`
`Property Let View(ByVal Value As MvwViewConstants)`

Calendar view mode.

### UseShortestDayNames
`Property Get UseShortestDayNames() As Boolean`
`Property Let UseShortestDayNames(ByVal Value As Boolean)`

Whether to use the shortest day-of-week names.

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

Background color.

### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

Foreground color.

### TitleBackColor
`Property Get TitleBackColor() As OLE_COLOR`
`Property Let TitleBackColor(ByVal Value As OLE_COLOR)`

Title background color.

### TitleForeColor
`Property Get TitleForeColor() As OLE_COLOR`
`Property Let TitleForeColor(ByVal Value As OLE_COLOR)`

Title foreground color.

### TrailingForeColor
`Property Get TrailingForeColor() As OLE_COLOR`
`Property Let TrailingForeColor(ByVal Value As OLE_COLOR)`

Foreground color for trailing dates.

### SelStart
`Property Get SelStart() As Date`
`Property Let SelStart(ByVal Value As Date)`

Start date of the selection range.

### SelEnd
`Property Get SelEnd() As Date`
`Property Let SelEnd(ByVal Value As Date)`

End date of the selection range.

### Today
`Property Get Today() As Date`

Returns today's date. Read-only.

### SystemStartOfWeek
`Property Get SystemStartOfWeek() As Integer`

Returns the system setting for the first day of the week. Read-only.

### DayOfWeek
`Property Get DayOfWeek() As Integer`

Returns the day of the week corresponding to Value. Read-only.

### VisualStyles
`Property Get VisualStyles() As Boolean`
`Property Let VisualStyles(ByVal Value As Boolean)`

Whether to enable visual styles.

### hWnd
`Property Get hWnd() As LongPtr`

Window handle of the month view control.

### hWndUserControl
`Property Get hWndUserControl() As LongPtr`

Window handle of the user control.

### Font
`Property Get Font() As StdFont`
`Property Let Font(ByVal NewFont As StdFont)`
`Property Set Font(ByVal NewFont As StdFont)`

Font.

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

Whether the control is enabled.

### MousePointer
`Property Get MousePointer() As CCMousePointerConstants`
`Property Let MousePointer(ByVal Value As CCMousePointerConstants)`

Mouse pointer style. See common enumerations.

### MouseIcon
`Property Get MouseIcon() As IPictureDisp`
`Property Let MouseIcon(ByVal Value As IPictureDisp)`
`Property Set MouseIcon(ByVal Value As IPictureDisp)`

Custom mouse icon.

### MouseTrack
`Property Get MouseTrack() As Boolean`
`Property Let MouseTrack(ByVal Value As Boolean)`

Whether to enable mouse enter/leave tracking.

### RightToLeft
`Property Get RightToLeft() As Boolean`
`Property Let RightToLeft(ByVal Value As Boolean)`

Right-to-left display direction.

### RightToLeftMode
`Property Get RightToLeftMode() As CCRightToLeftModeConstants`
`Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)`

Right-to-left mode. See common enumerations.

### Name
`Property Get Name() As String`

Control name. Read-only.

### Tag
`Property Get Tag() As String`
`Property Let Tag(ByVal Value As String)`

Custom data.

### Parent
`Property Get Parent() As Object`

Parent object. Read-only.

### Container
`Property Get Container() As Object`
`Property Set Container(ByVal Value As Object)`

Container object.

### Left
`Property Get Left() As Single`
`Property Let Left(ByVal Value As Single)`

Left position.

### Top
`Property Get Top() As Single`
`Property Let Top(ByVal Value As Single)`

Top position.

### Width
`Property Get Width() As Single`
`Property Let Width(ByVal Value As Single)`

Width.

### Height
`Property Get Height() As Single`
`Property Let Height(ByVal Value As Single)`

Height.

### Visible
`Property Get Visible() As Boolean`
`Property Let Visible(ByVal Value As Boolean)`

Whether the control is visible.

### ToolTipText
`Property Get ToolTipText() As String`
`Property Let ToolTipText(ByVal Value As String)`

Tooltip text.

### HelpContextID
`Property Get HelpContextID() As Long`
`Property Let HelpContextID(ByVal Value As Long)`

Help context ID.

### WhatsThisHelpID
`Property Get WhatsThisHelpID() As Long`
`Property Let WhatsThisHelpID(ByVal Value As Long)`

"What's This" help ID.

### DragIcon
`Property Get DragIcon() As IPictureDisp`
`Property Let DragIcon(ByVal Value As IPictureDisp)`
`Property Set DragIcon(ByVal Value As IPictureDisp)`

Drag icon.

### DragMode
`Property Get DragMode() As Integer`
`Property Let DragMode(ByVal Value As Integer)`

Drag mode.

## Methods

### SetSelRange
`Public Sub SetSelRange(ByVal StartDate As Date, ByVal EndDate As Date)`

Sets the date selection range.

### ComputeControlSize
`Public Sub ComputeControlSize()`

Recalculates the control size based on current settings.

### GetMonthRange
`Public Function GetMonthRange() As String`

Retrieves the currently displayed month range.

### HitTest
`Public Function HitTest(ByVal X As Single, ByVal Y As Single) As MvwHitResultConstants`

Tests the hit area at the specified coordinates.

### Drag
`Public Sub Drag([ByRef Action As Variant])`

Starts, ends, or cancels a drag operation.

### SetFocus
`Public Sub SetFocus()`

Moves focus to the control.

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

### GetDayBold
`Public Event GetDayBold(ByRef DayState As String)`

Fired when bold state for dates is needed.

### SelChange
`Public Event SelChange(ByVal StartDate As Date, ByVal EndDate As Date)`

Fired when the selection range changes.

### DateClick
`Public Event DateClick(ByVal DateClicked As Date)`

Fired when a date is clicked.

### ViewChange
`Public Event ViewChange()`

Fired when the view mode changes.

### ContextMenu
`Public Event ContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)`

Fired when right-clicking or pressing Shift+F10.

### Click
`Public Event Click()`

Fired when the control is clicked.

### DblClick
`Public Event DblClick()`

Fired when the control is double-clicked.

### MouseDown
`Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Fired when a mouse button is pressed.

### MouseUp
`Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Fired when a mouse button is released.

### MouseMove
`Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Fired when the mouse is moved.

### MouseEnter
`Public Event MouseEnter()`

Fired when the mouse enters the control.

### MouseLeave
`Public Event MouseLeave()`

Fired when the mouse leaves the control.

### KeyDown
`Public Event KeyDown(KeyCode As Integer, Shift As Integer)`

Fired when a key is pressed.

### KeyUp
`Public Event KeyUp(KeyCode As Integer, Shift As Integer)`

Fired when a key is released.

### KeyPress
`Public Event KeyPress(KeyChar As Integer)`

Fired when a key character is input.

### OLEDragDrop
`Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`

Fired when an OLE drag-and-drop operation is completed.

### OLEDragOver
`Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`

Fired when an OLE drag-and-drop operation passes over the control.

### OLEGiveFeedback
`Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`

Fired when the OLE drag-and-drop operation needs to change the cursor.

### OLEStartDrag
`Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)`

Fired when an OLE drag-and-drop operation starts.

### OLECompleteDrag
`Public Event OLECompleteDrag(Effect As Long)`

Fired when an OLE drag-and-drop operation completes.

### OLESetData
`Public Event OLESetData(Data As DataObject, DataFormat As Integer)`

Fired when the OLE drop target requests data.

## Code Examples

```vb
' Basic date selection
MonthView1.Value = Date

' Limit selectable date range
MonthView1.MinDate = #1/1/2025#
MonthView1.MaxDate = #12/31/2025#

' Multi-date selection
MonthView1.MultiSelect = True
MonthView1.MaxSelCount = 7
Call MonthView1.SetSelRange(#1/1/2025#, #1/7/2025#)

' Multi-month display
MonthView1.MonthColumns = 2
MonthView1.MonthRows = 1
```