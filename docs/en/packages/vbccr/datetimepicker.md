# DateTimePicker Control (VBCCRDateTimePicker)

The VBCCRDateTimePicker control provides a user-friendly interface for selecting dates and times. It supports various display formats, date range restrictions, and custom calendar appearances.

## Properties

### DateTime Properties
- `Value`: Get or set the currently selected date and time
- `MinDate`: Minimum selectable date
- `MaxDate`: Maximum selectable date
- `Year`: Currently selected year
- `Month`: Currently selected month
- `Day`: Currently selected day
- `Hour`: Currently selected hour
- `Minute`: Currently selected minute
- `Second`: Currently selected second

### Display Properties
- `Format`: Display format (short date, long date, time, etc.)
- `CustomFormat`: Custom display format string
- `ShowUpDown`: Whether to display up/down adjustment buttons
- `RightToLeft`: Whether to display right-to-left
- `CalendarTitleBackColor`: Calendar title background color
- `CalendarTrailingForeColor`: Foreground color for dates not in the current month

### Behavior Properties
- `Enabled`: Enable/disable state
- `CheckBox`: Whether to display checkbox
- `Checked`: Checkbox checked state

## Methods

### Date Operations
```vb
' Set date time
SetValue(NewDate As Date)

' Get current value
GetValue() As Date

' Set date range
SetRange(MinDate As Date, MaxDate As Date)

' Set time portion
SetTime(Hour As Integer, Minute As Integer, Second As Integer)
```

## Events

- `Change()`: Triggered when date time value changes
- `CloseUp()`: Triggered when dropdown calendar closes
- `DropDown()`: Triggered when dropdown calendar displays
- `Format(ByVal DateString As String)`: Triggered when formatting date
- `KeyDown(KeyCode As Integer, Shift As Integer)`: Key press event

## Code Examples

### Basic Usage

```vb
Private Sub InitDateTimePicker()
    With DateTimePicker1
        ' Set date range
        .MinDate = DateSerial(2000, 1, 1)
        .MaxDate = DateSerial(2030, 12, 31)
        
        ' Set current date
        .Value = Date
        
        ' Set display format
        .Format = dtpShortDate
    End With
End Sub
```

### Custom Format

```vb
Private Sub SetCustomFormat()
    With DateTimePicker1
        .Format = dtpCustom
        
        ' Custom format string
        ' yyyy: year (4 digits)
        ' MM: month
        ' dd: day
        ' HH: hour (24-hour format)
        ' mm: minute
        ' ss: second
        .CustomFormat = "yyyy-MM-dd HH:mm:ss"
    End With
End Sub
```

### Date Range Validation

```vb
Private Sub ValidateDateRange(ByVal NewDate As Date) As Boolean
    With DateTimePicker1
        If NewDate < .MinDate Or NewDate > .MaxDate Then
```
