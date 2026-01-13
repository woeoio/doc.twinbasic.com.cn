# Label Control (VBCCRLabel)

The VBCCRLabel control is an enhanced label control for displaying text and images. It provides more functionality and better display effects than the standard Label control.

## Properties

### Key Properties

- `Caption`: Displayed text content
- `AutoSize`: Whether to automatically adjust size
- `WordWrap`: Whether to automatically wrap text
- `BackStyle`: Background style (transparent or opaque)
- `BackColor`: Background color
- `ForeColor`: Text color
- `Alignment`: Text alignment
- `Font`: Font settings
- `UseMnemonic`: Whether to use shortcut keys (& character)
- `Enabled`: Enable/disable control
- `MousePointer`: Mouse pointer style
- `ToolTipText`: Tooltip text

## Methods

### Main Methods

- `Move(Left As Single, Top As Single, Width As Single, Height As Single)`: Move and resize
- `Refresh()`: Refresh display

## Events

- `Click()`: Triggered when clicked
- `DblClick()`: Triggered when double-clicked
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With Label1
        .Caption = "Welcome"
        .AutoSize = True
        .BackStyle = vbTransparent
        .ForeColor = vbBlue
    End With
End Sub
```

### Dynamic Text Update

```vb
Private Sub UpdateLabel(ByVal NewText As String)
    With Label1
        .AutoSize = True
        .Caption = NewText
        .Refresh
    End With
End Sub
```

### Formatted Display

```vb
Private Sub FormatLabel()
    With Label1
        .Caption = "Important Notice"
        .FontBold = True
        .ForeColor = vbRed
        .BackStyle = vbOpaque
        .BackColor = vbInfoBackground
        .BorderStyle = vbFixedSingle
        .Alignment = vbCenter
    End With
End Sub
```

## Common Use Cases

### Status Display

```vb
Private Sub ShowStatus(ByVal Status As String, Optional ByVal IsError As Boolean = False)
    With lblStatus
        .Caption = Status
        If IsError Then
            .ForeColor = vbRed
            .FontBold = True
        Else
            .ForeColor = vbBlack
            .FontBold = False
        End If
        .Refresh
    End With
End Sub
```

### Counter Display
```
