# CommandLink Control (VBCCRCmdLink)

The VBCCRCmdLink control is a modern command button control that combines the features of buttons and links, commonly used in wizard interfaces or option dialogs. It can display primary text, note text, and an optional icon.

## Properties

### Key Properties

- `Caption`: Main display text
- `Note`: Explanatory text (secondary text)
- `ShieldIcon`: Whether to display UAC shield icon
- `Picture`: Custom icon
- `Enabled`: Enable/disable control
- `Default`: Whether it's the default button
- `TextAlignment`: Text alignment
- `NoteAlignment`: Note text alignment
- `Themed`: Whether to use Windows theme style

## Methods

### Main Methods

- `Click()`: Programmatically trigger click event
- `SetFocus()`: Set focus
- `Refresh()`: Refresh display

## Events

- `Click()`: Triggered when clicked
- `GotFocus()`: Triggered when focus is received
- `LostFocus()`: Triggered when focus is lost
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With CommandLink1
        .Caption = "Backup Data"
        .Note = "Create a complete backup of your data, including all documents and settings."
        .ShieldIcon = True ' Show administrator privilege icon
    End With
End Sub
```

### Wizard Interface Options

```vb
Private Sub SetupWizardOptions()
    ' Option 1
    With cmdOption1
        .Caption = "Full Installation"
        .Note = "Install all components, requires 1.2GB disk space"
    End With
    
    ' Option 2
    With cmdOption2
        .Caption = "Custom Installation"
        .Note = "Choose which components to install"
    End With
    
    ' Option 3
    With cmdOption3
        .Caption = "Minimal Installation"
        .Note = "Install basic components only, requires 300MB disk space"
    End With
End Sub
```

### Dynamic Update

```vb
Private Sub UpdateCommandLink(ByVal Status As String)
    With CommandLink1
        Select Case Status
            Case "Ready"
                .Caption = "Start Sync"
                .Note = "Click to start syncing your files"
                .Enabled = True
            Case "Processing"
                .Caption = "Syncing"
                .Note = "Please wait while sync completes..."
                .Enabled = False
            Case "Done"
                .Caption = "Sync Complete"
                .Note = "All files have been synchronized"
                .Enabled = True
        End Select
    End With
End Sub
```

## Common Use Cases

### Configuration Wizard
