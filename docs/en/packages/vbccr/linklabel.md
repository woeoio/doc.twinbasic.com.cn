# LinkLabel Control (VBCCRLinkLabel)

The VBCCRLinkLabel control is an enhanced label control specifically designed for creating clickable links. It provides webpage-like hyperlink appearance and behavior, suitable for text links requiring user interaction.

## Properties

### Key Properties

- `Caption`: Displayed link text
- `Link`: Link target (can be URL or custom value)
- `AutoSize`: Whether to automatically adjust size
- `LinkColor`: Link color
- `HoverColor`: Color when mouse hovers
- `VisitedColor`: Color for visited links
- `UnderlineStyle`: Underline style
- `Cursor`: Mouse pointer style
- `Enabled`: Enable/disable control
- `WordWrap`: Whether to automatically wrap text
- `Alignment`: Text alignment
- `ToolTipText`: Tooltip text

## Methods

### Main Methods

- `Navigate()`: Trigger link navigation
- `SetFocus()`: Set focus to control
- `Refresh()`: Refresh display

## Events

- `Click()`: Triggered when clicked
- `Navigate(URL As String, Cancel As Boolean)`: Triggered during navigation
- `MouseEnter()`: Triggered when mouse enters
- `MouseLeave()`: Triggered when mouse leaves
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With LinkLabel1
        .Caption = "Visit Our Website"
        .Link = "http://www.example.com"
        .AutoSize = True
        .LinkColor = vbBlue
        .HoverColor = RGB(0, 0, 192)
        .VisitedColor = RGB(128, 0, 128)
    End With
End Sub
```

### Custom Link Behavior

```vb
Private Sub LinkLabel1_Click()
    ' Custom link click behavior
    Select Case LinkLabel1.Tag
        Case "OpenFile"
            OpenDocument LinkLabel1.Link
        Case "SendEmail"
            SendEmail LinkLabel1.Link
        Case "ShowHelp"
            ShowHelpTopic LinkLabel1.Link
    End Select
End Sub

Private Sub OpenDocument(ByVal FilePath As String)
    On Error GoTo ErrorHandler
    Shell "explorer.exe " & FilePath, vbNormalFocus
    Exit Sub
    
ErrorHandler:
    MsgBox "Cannot open document: " & FilePath
End Sub
```

### Dynamic Link Update

```vb
Private Sub UpdateLink(ByVal NewCaption As String, ByVal NewLink As String)
    With LinkLabel1
        .Caption = NewCaption
        .Link = NewLink
        .VisitedColor = .LinkColor ' Reset visited state
        .Refresh
    End With
End Sub
```

## Common Use Cases

### Email Link

```vb
Private Sub CreateEmailLink()
    With LinkLabel1
```
