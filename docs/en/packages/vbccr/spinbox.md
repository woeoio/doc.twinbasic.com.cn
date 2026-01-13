# SpinBox Control (VBCCRSpinBox)

VBCCRSpinBox control provides a numeric input control that allows users to modify values by clicking up/down buttons or direct input. It is commonly used in scenarios requiring precise numeric input.

## Properties

### Key Properties

- `Value`: Current value
- `Min`: Minimum value
- `Max`: Maximum value
- `Increment`: Step value
- `Text`: Displayed text
- `Alignment`: Text alignment
- `Enabled`: Enable/disable control
- `ReadOnly`: Whether read-only
- `Wrap`: Whether to wrap around
- `DecimalPlaces`: Number of decimal places
- `Format`: Display format

## Methods

### Main Methods

- `Value = NewValue`: Set current value
- `SetRange(Min As Long, Max As Long)`: Set value range
- `Increment()`: Increase by one step
- `Decrement()`: Decrease by one step

## Events

- `Change()`: Triggered when value changes
- `Scroll()`: Triggered when using up/down buttons
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyPress(KeyAscii As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`
- `GotFocus()`: Triggered when control gains focus
- `LostFocus()`: Triggered when control loses focus

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With SpinBox1
        .Min = 0
        .Max = 100
        .Value = 50
        .Increment = 1
        .DecimalPlaces = 0
        .Alignment = vbCenter
    End With
End Sub
```

### Number Formatting

```vb
Private Sub SetupFormattedSpinBox()
    With SpinBox1
        .DecimalPlaces = 2
        .Increment = 0.25
        .Min = 0
        .Max = 1000
        .Value = 100
        .Format = "###,##0.00"
    End With
End Sub

Private Sub SpinBox1_Change()
    lblValue.Caption = "Current Value: " & Format$(SpinBox1.Value, "Currency Format #,##0.00")
End Sub
```

### Time Selector

```vb
Private Sub CreateTimeSelector()
    ' Hour selector
    With spnHour
        .Min = 0
        .Max = 23
        .Value = Hour(Now)
        .Increment = 1
        .Format = "00"
        .Wrap = True
    End With
    
    ' Minute selector
    With spnMinute
        .Min = 0
        .Max = 59
        .Value = Minute(Now)
        .Increment = 1
        .Format = "00"
        .Wrap = True
    End With
End Sub

Private Sub UpdateTimeDisplay()
    lblTime.Caption = Format$(spnHour.Value, "00") & ":" & _
                     Format$(spnMinute.Value, "00")
End Sub
```

### Quantity Selector

```vb
Private Sub CreateQuantitySelector()
    With SpinBox1
        .Min = 1
        .Max = 999
        .Value = 1
        .Increment = 1
        .DecimalPlaces = 0
        .Format = "###,##0"
    End With
End Sub

Private Sub SpinBox1_Change()
    ' Update total price
    UpdateTotalPrice SpinBox1.Value * UnitPrice
End Sub
```

## Common Use Cases

### Currency Input

```vb
Private Sub SetupCurrencySpinBox()
    With SpinBox1
        .DecimalPlaces = 2
        .Increment = 0.01
        .Min = 0
        .Max = 999999.99
        .Value = 0
        .Format = "$###,##0.00"
    End With
End Sub

Private Sub ValidateCurrencyInput(ByVal NewValue As Double)
    If NewValue > SpinBox1.Max Then
        MsgBox "Amount exceeds maximum limit!", vbExclamation
        SpinBox1.Value = SpinBox1.Max
    End If
End Sub
```

### Percentage Input

```vb
Private Sub CreatePercentageInput()
    With SpinBox1
        .Min = 0
        .Max = 100
        .Value = 0
        .Increment = 1
        .DecimalPlaces = 1
        .Format = "##0.0%"
    End With
End Sub

Private Sub SpinBox1_Change()
    ' Update opacity or other percentage-based property
    UpdateOpacity SpinBox1.Value / 100
End Sub
```

## Best Practices

1. Input Validation
```vb
Private Sub ValidateInput(ByVal NewValue As Double)
    On Error GoTo ErrorHandler
    
    If Not IsNumeric(NewValue) Then
        MsgBox "Please enter a valid number", vbExclamation
        Exit Sub
    End If
    
    If NewValue < SpinBox1.Min Or NewValue > SpinBox1.Max Then
        MsgBox "Value must be between " & SpinBox1.Min & _
               " and " & SpinBox1.Max, vbExclamation
        Exit Sub
    End If
    
    SpinBox1.Value = NewValue
    Exit Sub
    
ErrorHandler:
    MsgBox "Invalid input: " & Err.Description, vbExclamation
End Sub
```

2. Custom Formatting
```vb
Private Sub CustomFormatting()
    Select Case FormatType
        Case "Currency"
            SpinBox1.Format = "$###,##0.00"
        Case "Percentage"
            SpinBox1.Format = "##0.0%"
        Case "Scientific"
            SpinBox1.Format = "0.00E+00"
        Case "Custom"
            SpinBox1.Format = "###,##0.000"
    End Select
End Sub
```

## Known Issues and Solutions

1. Focus Issues
```vb
Private Sub HandleFocusIssues()
    ' Save current value before focus change
    Static LastValue As Double
    
    Private Sub SpinBox1_GotFocus()
        LastValue = SpinBox1.Value
    End Sub
    
    Private Sub SpinBox1_LostFocus()
        If Not IsNumeric(SpinBox1.Text) Then
            SpinBox1.Value = LastValue
        End If
    End Sub
End Sub
```

2. Keyboard Input
```vb
Private Sub SpinBox1_KeyPress(KeyAscii As Integer)
    ' Allow only numbers, decimal point, and control characters
    If Not IsNumeric(Chr$(KeyAscii)) And _
       KeyAscii <> vbKeyBack And _
       KeyAscii <> vbKeyDelete And _
       KeyAscii <> Asc(".") Then
        KeyAscii = 0
    End If
End Sub
```

## Additional Tips

1. Linked Controls
```vb
Private Sub LinkControls()
    ' Update slider based on spinbox
    Slider1.Value = SpinBox1.Value
    
    ' Update progress bar
    ProgressBar1.Value = (SpinBox1.Value - SpinBox1.Min) / _
                        (SpinBox1.Max - SpinBox1.Min) * 100
End Sub
```

2. Dynamic Range Adjustment
```vb
Private Sub AdjustRange(ByVal MinValue As Double, _
                       ByVal MaxValue As Double)
    With SpinBox1
        If MinValue < .Min Then .Min = MinValue
        If MaxValue > .Max Then .Max = MaxValue
        
        ' Adjust increment based on range
        .Increment = (MaxValue - MinValue) / 100
        
        ' Adjust decimal places based on increment
        If .Increment < 1 Then
            .DecimalPlaces = 2
        Else
            .DecimalPlaces = 0
        End If
    End With
End Sub
```

3. Memory Management
```vb
Private Sub Form_Unload(Cancel As Integer)
    ' Clean up any references
    Set SpinBox1 = Nothing
End Sub
```
