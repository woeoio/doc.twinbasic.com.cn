# CommandButton Control (VBCCRCmdBtn)

VBCCRCmdBtn is an enhanced version of the standard CommandButton control, offering more functionality and better visual effects.

## Properties

### Key Properties

- `Caption`: Text displayed on the button
- `Default`: Sets whether it's the form's default button
- `Cancel`: Sets whether it's the cancel button (triggered by ESC key)
- `Picture`: Image displayed on the button
- `Style`: Button style
  - `Standard` - Standard button
  - `Graphical` - Graphical button
- `ImageAlignment`: Image alignment
- `TextAlignment`: Text alignment
- `Enabled`: Enable/disable button
- `ForeColor`: Text color
- `BackColor`: Background color

## Methods

### Main Methods

- `Click()`: Programmatically trigger button click
- `SetFocus()`: Set focus to the button
- `Refresh()`: Refresh button display

## Events

- `Click()`: Triggered when button is clicked
- `GotFocus()`: Triggered when focus is received
- `LostFocus()`: Triggered when focus is lost
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Triggered when mouse button is pressed
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Triggered when mouse button is released
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Triggered when mouse moves

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Basic button setup
    With CommandButton1
        .Caption = "Click Me"
        .Default = True
        .Enabled = True
    End With
End Sub

Private Sub CommandButton1_Click()
    MsgBox "Button was clicked!"
End Sub
```

### Graphical Button

```vb
Private Sub SetupGraphicalButton()
    With CommandButton1
        .Style = Graphical
        Set .Picture = LoadPicture("button.ico")
        .ImageAlignment = ImageAlignmentCenter
        .TextAlignment = TextAlignmentBottom
        .Caption = "Graphical Button"
    End With
End Sub
```

### Dynamic State Control

```vb
Private Sub UpdateButtonState(ByVal IsEnabled As Boolean)
    With CommandButton1
        .Enabled = IsEnabled
        If IsEnabled Then
            .Caption = "Click to Submit"
            .ForeColor = vbBlack
        Else
            .Caption = "Processing..."
            .ForeColor = vbGrayText
        End If
    End With
End Sub
```

## Common Use Cases

### Submit Form Button

```vb
Private Sub SetupSubmitButton()
    With cmdSubmit
        .Caption = "Submit Form"
        .Default = True
        .Enabled = False ' Initially disabled
    End With
End Sub
```
