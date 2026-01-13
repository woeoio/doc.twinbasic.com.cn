# Frame Control (VBCCRFrame)

The VBCCRFrame control is a container control used to organize and manage other controls. It provides a visual border and caption, helping to create organized user interfaces.

## Properties

### Key Properties

- `Caption`: Frame title
- `BackColor`: Background color
- `ForeColor`: Text color
- `BorderStyle`: Border style
- `Enabled`: Enable/disable control (affects all child controls)
- `Font`: Caption font settings
- `MousePointer`: Mouse pointer style
- `Visible`: Show/hide frame and its child controls

## Methods

### Main Methods

- `Move(Left As Single, Top As Single, Width As Single, Height As Single)`: Move and resize
- `SetFocus()`: Set focus to frame
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
    With Frame1
        .Caption = "Settings Options"
        .BorderStyle = vbFixedSingle
        .BackColor = vbButtonFace
    End With
End Sub
```

### Dynamic Control Management

```vb
Private Sub ManageFrameControls()
    ' Enable/disable all controls within frame
    Dim ctl As Control
    
    For Each ctl In Me.Controls
        If TypeOf ctl Is CommandButton Then
            If ctl.Container Is Frame1 Then
                ctl.Enabled = Frame1.Enabled
            End If
        End If
    Next ctl
End Sub
```

### Option Grouping

```vb
Private Sub SetupOptionGroups()
    ' Set up two option groups
    With Frame1 ' First group
        .Caption = "Display Options"
        With .Controls
            ' Add option buttons
            optShowAll.Caption = "Show All"
            optShowSelected.Caption = "Show Selected Only"
        End With
    End With
    
    With Frame2 ' Second group
        .Caption = "Sort Options"
        With .Controls
            ' Add option buttons
            optSortName.Caption = "Sort by Name"
            optSortDate.Caption = "Sort by Date"
        End With
    End With
End Sub
```

## Common Use Cases

### Settings Dialog

```vb
Private Sub CreateSettingsDialog()
    ' Create settings group
    With fraGeneral
        .Caption = "General Settings"
        .Top = 20
        .Left = 20
```
