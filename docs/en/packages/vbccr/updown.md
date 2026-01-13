# UpDown Control (VBCCRUpDown)

VBCCRUpDown control is a spinner control that typically works in conjunction with a text box or other control to adjust numeric values. It provides an intuitive interface for increasing or decreasing values.

## Properties

### Key Properties

- `Value`: Current value
- `Min`: Minimum value
- `Max`: Maximum value
- `Increment`: Step value
- `Buddy`: Associated control
- `BuddyProperty`: Property of associated control
- `Wrap`: Whether to wrap around
- `Orientation`: Direction (vertical/horizontal)
- `AutoBuddy`: Whether to automatically associate with adjacent control
- `Enabled`: Enable/disable state
- `Thousands`: Whether to display thousand separators

## Methods

### Main Methods

- `Value = NewValue`: Set current value
- `GetValue()`: Get current value
- `SetRange(Min As Long, Max As Long)`: Set value range
- `GetRange(Min As Long, Max As Long)`: Get value range
- `SetBuddy(ByVal hWndBuddy As Long)`: Set associated control
- `GetBuddy() As Long`: Get associated control handle

## Events

- `Change()`: Value change event
- `Changing(Cancel As Boolean)`: Value about to change event
- `Delta(ByVal Delta As Long)`: Value delta event
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Configure UpDown control
    With UpDown1
        .Min = 0
        .Max = 100
        .Value = 50
        .Increment = 1
        .Wrap = False
        
        ' Associate with text box
        Set .Buddy = Text1
        .BuddyProperty = "Text"
    End With
End Sub
```

### Using with TextBox

```vb
Private Sub SetupNumericInput()
    ' Configure text box
    With Text1
        .Text = "0"
        .Alignment = vbCenter
    End With
    
    ' Configure UpDown
    With UpDown1
        .SetRange 0, 1000
        .Value = 0
        .Increment = 10
        Set .Buddy = Text1
        .Thousands = True  ' Show thousands separator
    End With
End Sub

Private Sub Text1_Change()
    ' Validate input
    If Not IsNumeric(Text1.Text) Then
        Text1.Text = UpDown1.Value
    End If
End Sub

Private Sub UpDown1_Change()
    ' Update display
    lblValue.Caption = "Current Value: " & Format$(UpDown1.Value, "#,##0")
End Sub
```

### Range Control

```vb
Private Sub CreateRangeControl()
    ' Minimum value control
    With upMin
        .SetRange 0, 1000
        .Value = 0
        .Increment = 10
        Set .Buddy = txtMin
    End With
    
    ' Maximum value control
    With upMax
        .SetRange 0, 1000
        .Value = 1000
        .Increment = 10
        Set .Buddy = txtMax
    End With
End Sub

Private Sub ValidateRange()
    ' Ensure minimum is less than maximum
    If upMin.Value >= upMax.Value Then
        upMin.Value = upMax.Value - 1
    End If
End Sub
```

## Common Use Cases

### Quantity Selection

```vb
Private Sub CreateQuantitySelector()
    ' Configure quantity control
    With UpDown1
        .SetRange 1, 99
        .Value = 1
        .Increment = 1
        Set .Buddy = txtQuantity
        .BuddyProperty = "Text"
    End With
End Sub

Private Sub UpDown1_Change()
    ' Update total price
    Dim Quantity As Long
    Dim UnitPrice As Currency
    
    Quantity = UpDown1.Value
    UnitPrice = 9.99
    
    lblTotal.Caption = "Total: " & Format$(Quantity * UnitPrice, "Currency")
End Sub
```

### Time Input

```vb
Private Sub SetupTimeInput()
    ' Hours control
    With upHours
        .SetRange 0, 23
        .Value = Hour(Now)
        .Wrap = True
        Set .Buddy = txtHours
    End With
    
    ' Minutes control
    With upMinutes
        .SetRange 0, 59
        .Value = Minute(Now)
        .Wrap = True
        Set .Buddy = txtMinutes
    End With
End Sub

Private Sub UpdateTimeDisplay()
    Dim TimeStr As String
    TimeStr = Format$(upHours.Value, "00") & ":" & _
             Format$(upMinutes.Value, "00")
    
    lblTime.Caption = "Time: " & TimeStr
End Sub
```

## Best Practices

1. Input Validation
```vb
Private Sub ValidateInput(ByVal NewValue As String)
    On Error GoTo ErrorHandler
    
    If Not IsNumeric(NewValue) Then
        Beep
        Exit Sub
    End If
    
    Dim Value As Long
    Value = CLng(NewValue)
    
    If Value < UpDown1.Min Or Value > UpDown1.Max Then
        MsgBox "Value must be between " & UpDown1.Min & _
               " and " & UpDown1.Max, vbExclamation
        Exit Sub
    End If
    
    UpDown1.Value = Value
    Exit Sub
    
ErrorHandler:
    Beep
End Sub
```

2. Buddy Control Management
```vb
Private Sub ManageBuddyControl()
    ' Save current value
    Dim CurrentValue As Long
    CurrentValue = UpDown1.Value
    
    ' Update buddy control
    With UpDown1
        Set .Buddy = Nothing
        Set .Buddy = txtInput
        .Value = CurrentValue
    End With
End Sub
```

## Known Issues and Solutions

1. Synchronization Issues
```vb
Private Sub HandleSyncIssues()
    Static IsUpdating As Boolean
    
    If IsUpdating Then Exit Sub
    IsUpdating = True
    
    ' Update related controls
    UpdateDisplay
    
    IsUpdating = False
End Sub
```

2. Range Validation
```vb
Private Sub ValidateRange()
    ' Ensure values stay within range
    With UpDown1
        If .Value < .Min Then .Value = .Min
        If .Value > .Max Then .Value = .Max
    End With
End Sub
```

## Additional Tips

1. Custom Formatting
```vb
Private Sub FormatDisplay()
    Select Case DisplayMode
        Case "Currency"
            Text1.Text = Format$(UpDown1.Value, "Currency")
        Case "Percentage"
            Text1.Text = Format$(UpDown1.Value, "0%")
        Case "Scientific"
            Text1.Text = Format$(UpDown1.Value, "0.00E+00")
    End Select
End Sub
```

2. Keyboard Navigation
```vb
Private Sub HandleKeyPress(KeyCode As Integer)
    Select Case KeyCode
        Case vbKeyUp
            UpDown1.Value = UpDown1.Value + UpDown1.Increment
        Case vbKeyDown
            UpDown1.Value = UpDown1.Value - UpDown1.Increment
        Case vbKeyHome
            UpDown1.Value = UpDown1.Min
        Case vbKeyEnd
            UpDown1.Value = UpDown1.Max
    End Select
End Sub
```

3. State Management
```vb
Private Sub SaveState()
    SaveSetting App.Title, "UpDown", "Value", UpDown1.Value
    SaveSetting App.Title, "UpDown", "Min", UpDown1.Min
    SaveSetting App.Title, "UpDown", "Max", UpDown1.Max
End Sub

Private Sub RestoreState()
    With UpDown1
        .SetRange GetSetting(App.Title, "UpDown", "Min", 0), _
                 GetSetting(App.Title, "UpDown", "Max", 100)
        .Value = GetSetting(App.Title, "UpDown", "Value", 0)
    End With
End Sub
```
