# MonthCalendar Control (VBCCRMonthCalendar)

The VBCCRMonthCalendar control provides a complete calendar interface where users can view and select dates. It supports multiple selection, range selection, holiday display, and other features.

## Properties

### Date-related Properties
- `Value`: Currently selected date
- `SelectionStart`: Start date of selection range
- `SelectionEnd`: End date of selection range
- `MinDate`: Minimum selectable date
- `MaxDate`: Maximum selectable date
- `FirstDayOfWeek`: First day of the week
- `MaxSelCount`: Maximum number of days that can be selected

### Display Properties
- `MonthRows`: Number of month rows to display
- `MonthColumns`: Number of month columns to display
- `ShowToday`: Whether to show today
- `ShowTodayCircle`: Whether to show circle around today's date
- `ShowWeekNumbers`: Whether to show week numbers
- `DayState`: Date state (for marking special dates)
- `BackColor`: Background color
- `TitleBackColor`: Title background color
- `TitleForeColor`: Title foreground color
- `TrailingForeColor`: Foreground color for dates not in current month

## Methods

### Date Operations
```vb
' Set date range
SetSelectionRange(StartDate As Date, EndDate As Date)

' Get selection range
GetSelectionRange(StartDate As Date, EndDate As Date)

' Set current date
SetCurSel(NewDate As Date)

' Get current date
GetCurSel() As Date

' Set today's date
SetToday(NewDate As Date)

' Get today's date
GetToday() As Date
```

## Events

- `DateChanged()`: Triggered when selected date changes
- `SelectionChanged()`: Triggered when selection range changes
- `GetDayBold(ByVal StartDate As Date, ByVal Count As Long, ByRef State() As Boolean)`: Get date bold state
- `Click()`: Triggered when date is clicked

## Code Examples

### Basic Usage

```vb
Private Sub InitMonthCalendar()
    With MonthCalendar1
        ' Set date range
        .MinDate = DateSerial(2000, 1, 1)
        .MaxDate = DateSerial(2030, 12, 31)
        
        ' Set current date
        .Value = Date
        
        ' Display settings
        .ShowToday = True
        .ShowTodayCircle = True
        .ShowWeekNumbers = True
        
        ' Set display layout
        .MonthRows = 1
        .MonthColumns = 2
    End With
End Sub
```

### Date Range Selection

```vb
Private Type DateRange
    StartDate As Date
    EndDate As Date
    Days As Long
End Type

Private Selection As DateRange

Private Sub MonthCalendar1_SelectionChanged()
    With MonthCalendar1
        ' Get selection range
        Selection.StartDate = .SelectionStart
        Selection.EndDate = .SelectionEnd
```
