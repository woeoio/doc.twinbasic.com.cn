# IPAddress Control (VBCCRIPAddress)

The VBCCRIPAddress control is a specialized control for inputting and displaying IP addresses. It divides the IP address into four fields, each accepting values from 0-255, and provides convenient validation and formatting features.

## Properties

### Key Properties

- `Text`: IP address string
- `Address`: IP address value (long integer)
- `Field1`, `Field2`, `Field3`, `Field4`: Individual field values
- `Enabled`: Enable/disable state
- `ReadOnly`: Whether read-only
- `BorderStyle`: Border style
- `BackColor`: Background color
- `ForeColor`: Foreground color
- `Font`: Font settings

## Methods

### Main Methods

- `Clear()`: Clear all fields
- `SetAddress(Address As Long)`: Set IP address
- `GetAddress(Address As Long)`: Get IP address
- `SetRange(Field As Long, Min As Long, Max As Long)`: Set field range
- `SetFocus(Field As Long)`: Set focus to specified field

## Events

- `Change()`: IP address change event
- `FieldChange(Field As Long)`: Field value change event
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyPress(KeyAscii As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`
- `GotFocus()`: Got focus event
- `LostFocus()`: Lost focus event

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Configure IP address control
    With IPAddress1
        .Clear
        .Text = "192.168.1.1"  ' Set default IP
        .Enabled = True
        .ReadOnly = False
    End With
End Sub
```

### IP Address Validation

```vb
Private Function ValidateIPAddress() As Boolean
    With IPAddress1
        ' Check if empty
        If .Text = "..." Then
            MsgBox "Please enter an IP address!", vbExclamation
            ValidateIPAddress = False
            Exit Function
        End If
        
        ' Validate fields
        If .Field1 = 0 Then
            MsgBox "First field cannot be 0!", vbExclamation
            ValidateIPAddress = False
            Exit Function
        End If
        
        ' Validate private network range
        If .Field1 = 192 And .Field2 = 168 Then
            ValidateIPAddress = True
        Else
            MsgBox "IP address must be in the 192.168.x.x range!", vbExclamation
            ValidateIPAddress = False
        End If
    End With
End Function
```

### Address Range Setup

```vb
Private Sub SetupIPRanges()
    With IPAddress1
        ' Set first field range
        .SetRange 1, 192, 192  ' Only allow 192
        
        ' Set second field range
        .SetRange 2, 168, 168  ' Only allow 168
        
        ' Set third field range
        .SetRange 3, 0, 255  ' Allow 0-255
        
        ' Set fourth field range
        .SetRange 4, 1, 254  ' Don't allow 0 and 255
```
