# TextBox Control (VBCCRTextBox)

VBCCRTextBox control is an enhanced text box control that provides more features than standard TextBox, including undo support, cue banner text, and balloon tips. It can be used for single-line or multi-line text input.

## Properties

### Key Properties

- `Text`: Text content
- `SelText`: Selected text
- `SelStart`: Selection start position
- `SelLength`: Selection length
- `MultiLine`: Whether multi-line
- `ScrollBars`: Scroll bars
- `Alignment`: Text alignment
- `MaxLength`: Maximum text length
- `PasswordChar`: Password character
- `UseSystemPasswordChar`: Whether to use system password character
- `Locked`: Whether locked
- `HideSelection`: Whether to hide selection when losing focus
- `OLEDropMode`: OLE drag and drop mode
- `CueBanner`: Hint text (placeholder)
- `CueBannerAlways`: Whether to always show cue banner
- `TextLength`: Gets the length of text (read-only)

## Methods

### Main Methods

- `Undo()`: Undo last operation
- `CanUndo()`: Returns whether undo is available
- `ResetUndoQueue()`: Resets the undo queue
- `ShowBalloonTip(Text As String, Optional Title As String, Optional Icon As TxtIconConstants)`: Shows a balloon tip

## Events

- `Change()`: Text change event
- `Click()`: Click event
- `DblClick()`: Double-click event
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyPress(KeyAscii As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`
- `OLEDragComplete(Effect As Long)`
- `OLEDragStart(Data As DataObject, AllowedEffects As Long)`

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Configure text box
    With TextBox1
        .MultiLine = True
        .ScrollBars = vbVertical
        .Text = "Enter text here..."
        .SelStart = 0
        .SelLength = Len(.Text)
        .CueBanner = "Enter search keywords"
        .MaxLength = 1000
    End With
End Sub
```

### Text Processing

```vb
Private Sub ProcessText()
    With TextBox1
        ' Get selected text
        Dim SelectedText As String
        SelectedText = .SelText
        
        ' Replace selected text
        .SelText = UCase$(SelectedText)
        
        ' Insert text at cursor position
        .SelText = vbNewLine & "New Line"
        
        ' Move cursor to end
        .SelStart = Len(.Text)
    End With
End Sub
```

### Undo Support

```vb
Private Sub SetupUndo()
    ' The TextBox control supports undo automatically
    ' You can check if undo is available
    mnuUndo.Enabled = TextBox1.CanUndo()
End Sub

Private Sub mnuUndo_Click()
    TextBox1.Undo
End Sub
```

### Cue Banner Implementation

```vb
Private Sub SetupCueBanner()
    With TextBox1
        .CueBanner = "Enter your text here..."
        .CueBannerAlways = False  ' Only show when empty and unfocused
    End With
End Sub
```

## Common Use Cases

### Password Input

```vb
Private Sub SetupPasswordInput()
    With txtPassword
        .PasswordChar = "*"
        .UseSystemPasswordChar = False
        .MaxLength = 20
    End With
End Sub
```

### Search Box

```vb
Private Sub CreateSearchBox()
    With txtSearch
        .CueBanner = "Search..."
        .MaxLength = 100
    End With
End Sub

Private Sub txtSearch_Change()
    If Len(txtSearch.Text) >= 3 Then
        PerformSearch txtSearch.Text
    End If
End Sub
```

### Balloon Tip Validation

```vb
Private Sub ValidateInput()
    With TextBox1
        If Len(.Text) = 0 Then
            .ShowBalloonTip "Please enter some text", "Validation Error", TxtIconWarning
        End If
    End With
End Sub
```

### Reset Undo Queue

```vb
Private Sub ResetUndoHistory()
    TextBox1.ResetUndoQueue
End Sub
```

## Best Practices

1. Input Validation
```vb
Private Sub ValidateInput(KeyAscii As Integer)
    ' Allow only numbers
    If Not IsNumeric(Chr$(KeyAscii)) And _
       KeyAscii <> vbKeyBack Then
        KeyAscii = 0
    End If
End Sub

Private Sub TextBox1_KeyPress(KeyAscii As Integer)
    ValidateInput KeyAscii
End Sub
```

2. Text Change Handler
```vb
Private Sub TextBox1_Change()
    Static IsProcessing As Boolean
    
    If IsProcessing Then Exit Sub
    IsProcessing = True
    
    ' Process text changes
    ProcessTextChanges
    
    IsProcessing = False
End Sub
```

## Additional Tips

1. Text Selection
```vb
Private Sub SelectAll()
    TextBox1.SelStart = 0
    TextBox1.SelLength = TextBox1.TextLength
End Sub
```

2. Clipboard Operations
```vb
Private Sub HandleClipboard()
    ' Copy to clipboard
    Clipboard.Clear
    Clipboard.SetText TextBox1.SelText
    
    ' Paste from clipboard
    If Clipboard.GetFormat(vbCFText) Then
        TextBox1.SelText = Clipboard.GetText
    End If
End Sub
```

3. Get Text Length Efficiently
```vb
Private Sub GetTextLength()
    Dim length As Long
    length = TextBox1.TextLength  ' More efficient than Len(TextBox1.Text)
End Sub
```

4. Check Undo Availability
```vb
Private Sub UpdateUndoButton()
    mnuUndo.Enabled = TextBox1.CanUndo()
End Sub
```
