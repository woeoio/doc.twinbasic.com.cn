# MonthView Control (VBCCRMonthView)

The VBCCRMonthView control provides a calendar interface that allows users to view and select dates. It supports single date selection, date range selection, and offers various customization options for display.

## Properties

### Key Properties

- `Value`: Currently selected date
- `MinDate`: Minimum selectable date
- `MaxDate`: Maximum selectable date
- `MultiSelect`: Whether to allow multiple date selection
- `SelectionRange`: Selected date range
- `FirstDayOfWeek`: First day of the week
- `ShowToday`: Whether to show today's date
- `ShowWeekNumbers`: Whether to show week numbers
- `BackColor`: Background color
- `ForeColor`: Text color
- `MonthColumns`: Number of months displayed horizontally
- `MonthRows`: Number of months displayed vertically

## Methods

### Main Methods

- `GetSelectedRange(Start As Date, [End] As Date)`: Get selected date range
- `SetSelectedRange(Start As Date, [End] As Date)`: Set selected date range
- `HitTest(X As Single, Y As Single)`: Get date at specified coordinates
- `Navigate(Interval As Integer)`: Navigate to next/previous month
- `Today()`: Navigate to today

## Events

- `DateClick(ByVal DateClicked As Date)`: Triggered when a date is clicked
- `SelectionChange()`: Triggered when date selection changes
- `GetDayBold(ByVal StartDate As Date, ByVal Count As Long, State() As Boolean)`: Set date bold display
- `MonthChange()`: Triggered when displayed month changes

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With MonthView1
        .Value = Date ' Set to today
        .ShowToday = True
        .ShowWeekNumbers = True
        .FirstDayOfWeek = vbSunday
    End With
End Sub
```

### Date Range Selection

```vb
Private Sub SetupDateRange()
    With MonthView1
        .MultiSelect = True
        .MinDate = DateSerial(Year(Date), 1, 1)
        .MaxDate = DateSerial(Year(Date), 12, 31)
        
        ' Set default selection range
        .SetSelectedRange Date, DateAdd("d", 7, Date)
    End With
End Sub

Private Sub MonthView1_SelectionChange()
    Dim StartDate As Date
    Dim EndDate As Date
    
    MonthView1.GetSelectedRange StartDate, EndDate
    Debug.Print "Selection Range: " & StartDate & " to " & EndDate
End Sub
```

### Special Date Marking

```vb
Private Sub MarkSpecialDates()
    ' Mark special dates in calendar
    Dim SpecialDates() As Date
    Dim i As Long
    
    ' Add special dates
    ReDim SpecialDates(0 To 2)
    SpecialDates(0) = Date
    SpecialDates(1) = DateAdd("d", 7, Date)
    SpecialDates(2) = DateAdd("d", 14, Date)
    
    ' Store special dates for later use
    Set mSpecialDates = New Collection
    For i = 0 To UBound(SpecialDates)
        mSpecialDates.Add SpecialDates(i)
    Next i
End Sub

Private Sub MonthView1_GetDayBold(ByVal StartDate As Date, ByVal Count As Long, State() As Boolean)
    Dim i As Long
    Dim j As Long
```
