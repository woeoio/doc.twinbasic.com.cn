# Option Control (VBCCROption)

The VBCCROption control is a radio button control used to select one option from a group of options. It is typically used together with other Option controls to form an option group.

## Properties

### Key Properties

- `Value`: Whether selected
- `Caption`: Displayed text
- `Alignment`: Text alignment
- `Enabled`: Enable/disable control
- `BackColor`: Background color
- `ForeColor`: Text color
- `Font`: Font settings
- `Group`: Group settings
- `TabStop`: Whether can receive focus through Tab key
- `ToolTipText`: Tooltip text

## Methods

### Main Methods

- `SetFocus()`: Set focus to control
- `Refresh()`: Refresh display

## Events

- `Click()`: Triggered when clicked
- `GotFocus()`: Triggered when control receives focus
- `LostFocus()`: Triggered when control loses focus
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Set up option group
    With optGender(0)
        .Caption = "Male"
        .Value = True
        .Tag = "M"
    End With
    
    With optGender(1)
        .Caption = "Female"
        .Value = False
        .Tag = "F"
    End With
End Sub
```

### Option Group Handling

```vb
Private Sub HandleOptionGroup()
    Dim i As Integer
    
    ' Get selected option
    For i = 0 To optGender.Count - 1
        If optGender(i).Value Then
            Debug.Print "Selected Gender: " & optGender(i).Tag
            Exit For
        End If
    Next i
End Sub
```

### Dynamic Option Creation

```vb
Private Sub CreateOptions()
    Dim i As Integer
    Dim Top As Integer
    
    Top = 20
    
    ' Dynamically create options
    For i = 0 To 4
        With Controls.Add("VBCCROption", "optChoice" & i)
            .Left = 20
            .Top = Top
            .Caption = "Option " & (i + 1)
            .Tag = i + 1
            Top = Top + 30
        End With
    Next i
End Sub
```

## Common Use Cases

### Settings Dialog
