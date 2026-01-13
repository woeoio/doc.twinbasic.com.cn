# DTPicker Control (VBCCRDTPicker)

The VBCCRDTPicker control is a date-time picker that provides a dropdown calendar interface, allowing users to easily select dates and times.

## Properties

### DateTime Properties
- `Value`: Currently selected date and time
- `Year`: Current year
- `Month`: Current month
- `Day`: Current day
- `Hour`: Current hour
- `Minute`: Current minute
- `Second`: Current second
- `MinDate`: Minimum selectable date
- `MaxDate`: Maximum selectable date

### Display Properties
- `Format`: Display format
  - `dtpShortDate`: Short date format
  - `dtpLongDate`: Long date format
  - `dtpTime`: Time format
  - `dtpCustom`: Custom format
- `CustomFormat`: Custom format string
- `UpDown`: Whether to display up/down adjustment buttons
- `RightToLeft`: Whether to display right-to-left
- `CalendarBackColor`: Calendar background color
- `CalendarForeColor`: Calendar foreground color
- `CalendarTitleBackColor`: Calendar title background color
- `CalendarTitleForeColor`: Calendar title foreground color
- `CalendarTrailingForeColor`: Non-current month date foreground color
- `CheckBox`: Whether to display checkbox
- `Checked`: Checkbox state

## Events

- `Change`: Triggered when value changes
- `CloseUp`: Triggered when dropdown calendar closes
- `DropDown`: Triggered when dropdown calendar displays
- `Format`: Triggered when formatting display value
- `KeyDown`: Key press event

## Code Examples

### Basic Usage

```vb
Private Sub InitDTPicker()
    With DTPicker1
        ' Set date range
        .MinDate = DateSerial(2000, 1, 1)
        .MaxDate = DateSerial(2030, 12, 31)
        
        ' Set current value
        .Value = Now
        
        ' Set display format
        .Format = dtpShortDate
    End With
End Sub
```

### Custom Format

```vb
Private Sub SetCustomFormat()
    With DTPicker1
        .Format = dtpCustom
        
        ' Format guide:
        ' yyyy: 4-digit year
        ' yy: 2-digit year
        ' MMMM: Full month name
        ' MMM: Abbreviated month name
        ' MM: 2-digit month
        ' dd: 2-digit day
        ' ddd: Abbreviated weekday
        ' dddd: Full weekday name
        ' HH: 24-hour format
        ' hh: 12-hour format
        ' mm: minutes
        ' ss: seconds
        ' tt: AM/PM
        
        .CustomFormat = "yyyy-MM-dd dddd"
    End With
End Sub
```

### Date Validation

```vb
Private Sub ValidateDate(ByVal NewDate As Date)
    With DTPicker1
        If NewDate < .MinDate Or NewDate > .MaxDate Then
            MsgBox "Please select a date between " & Format$(.MinDate, "yyyy-mm-dd") & _
                  " and " & Format$(.MaxDate, "yyyy-mm-dd")
            
            ' Restore to valid value
            If NewDate < .MinDate Then
```
