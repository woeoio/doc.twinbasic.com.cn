# RichTextBox Control (VBCCRRichTextBox)

VBCCRRichTextBox control is a rich text editing control that supports various text formats, styles, and images. It provides more powerful text editing and formatting capabilities than standard textboxes.

## Properties

### Key Properties

- `Text`: Get or set plain text content
- `RTFText`: Get or set RTF format text
- `SelText`: Selected text
- `SelStart`: Selection start position
- `SelLength`: Selection length
- `SelColor`: Selected text color
- `SelBold`: Whether selected text is bold
- `SelItalic`: Whether selected text is italic
- `SelUnderline`: Whether selected text is underlined
- `MultiLine`: Whether multiple lines are supported
- `ScrollBars`: Scrollbar settings
- `ReadOnly`: Whether read-only
- `AutoURLDetect`: Whether to automatically detect URLs

### File Format Constants (RtfLoadSaveFormatConstants)

Used for `LoadFile` and `SaveFile` methods' `Format` parameter:

- `RtfLoadSaveFormatRTF` (0) - RTF format
- `RtfLoadSaveFormatText` (1) - Plain text format
- `RtfLoadSaveFormatUnicodeText` (2) - Unicode text format

### Alignment Constants (RtfSelAlignmentConstants)

Used for `SelAlignment` property:

- `RtfSelAlignmentLeft` (0) - Left align
- `RtfSelAlignmentRight` (1) - Right align
- `RtfSelAlignmentCenter` (2) - Center align
- `RtfSelAlignmentJustified` (3) - Justified align

### Text Mode Constants (RtfTextModeConstants)

Used for `TextMode` property:

- `RtfTextModeRichText` (0) - Rich text mode
- `RtfTextModePlainText` (1) - Plain text mode

## Methods

### Main Methods

- `LoadFile(FileName As String)`: Load file
- `SaveFile(FileName As String)`: Save file
- `Find(Text As String)`: Find text
- `Replace(Text As String)`: Replace text
- `Cut()`: Cut selected content
- `Copy()`: Copy selected content
- `Paste()`: Paste content
- `Undo()`: Undo operation
- `Redo()`: Redo operation

## Events

- `Change()`: Triggered when content changes
- `SelChange()`: Triggered when selection changes
- `Click()`: Triggered when clicked
- `DblClick()`: Triggered when double-clicked
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyPress(KeyAscii As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`
- `LinkClick(ByVal URL As String)`: Triggered when a link is clicked

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With RichTextBox1
        .MultiLine = True
        .ScrollBars = vbVertical
        .AutoURLDetect = True
        .Text = "Welcome to Rich Text Editor"
    End With
End Sub
```

### Text Formatting

```vb
Private Sub FormatText()
    With RichTextBox1
        ' Set format for selected text
        .SelStart = 0
        .SelLength = 10
        .SelBold = True
        .SelColor = vbBlue
        
        ' Add new text and set format
        .SelStart = .TextLength
        .SelText = vbCrLf & "New Paragraph"
        .SelItalic = True
        .SelColor = vbRed
    End With
End Sub
```

### Find and Replace

```vb
Private Sub FindAndReplace(ByVal FindText As String, _
                          ByVal ReplaceText As String)
    Dim StartPos As Long
    Dim FindLen As Long
    
    With RichTextBox1
        StartPos = 0
        FindLen = Len(FindText)
        
        Do
            StartPos = .Find(FindText, StartPos)
            If StartPos = -1 Then Exit Do
            
            .SelStart = StartPos
            .SelLength = FindLen
            .SelText = ReplaceText
            
            StartPos = StartPos + Len(ReplaceText)
        Loop
    End With
End Sub
```

## Common Use Cases

### Simple Text Editor

```vb
Private Sub CreateTextEditor()
    ' Set up basic editor functionality
    With RichTextBox1
        .MultiLine = True
        .ScrollBars = vbBoth
        .AutoURLDetect = True
        .HideSelection = False
    End With
    
    ' Add toolbar
    With Toolbar1
        .Buttons.Add , "New", "New"
        .Buttons.Add , "Open", "Open"
        .Buttons.Add , "Save", "Save"
        .Buttons.Add , , , tbrSeparator
        .Buttons.Add , "Cut", "Cut"
        .Buttons.Add , "Copy", "Copy"
        .Buttons.Add , "Paste", "Paste"
    End With
End Sub

Private Sub Toolbar1_ButtonClick(ByVal Button As MSComctlLib.Button)
    Select Case Button.Key
        Case "New"
            RichTextBox1.Text = ""
        Case "Open"
            OpenFile
        Case "Save"
            SaveFile
        Case "Cut"
            RichTextBox1.Cut
        Case "Copy"
            RichTextBox1.Copy
        Case "Paste"
            RichTextBox1.Paste
    End Select
End Sub
```

### HTML Preview

```vb
Private Sub LoadHTMLPreview(ByVal HTMLText As String)
    With RichTextBox1
        .TextMode = rtfHTML
        .Text = HTMLText
        .ReadOnly = True
    End With
End Sub
```

## Best Practices

1. File Operations
```vb
Private Sub SaveDocument(ByVal FilePath As String)
    On Error GoTo ErrorHandler
    
    With RichTextBox1
        If Right$(FilePath, 4) = ".rtf" Then
            .SaveFile FilePath, rtfRTF
        Else
            .SaveFile FilePath, rtfText
        End If
    End With
    Exit Sub
    
ErrorHandler:
    MsgBox "Error saving file: " & Err.Description
End Sub
```

2. Undo/Redo Management
```vb
Private Sub ManageUndoRedo()
    ' Update undo/redo button states
    cmdUndo.Enabled = RichTextBox1.CanUndo
    cmdRedo.Enabled = RichTextBox1.CanRedo
End Sub
```

3. Text Selection
```vb
Private Sub SelectWord()
    Dim StartPos As Long
    Dim EndPos As Long
    
    With RichTextBox1
        StartPos = .SelStart
        
        ' Find word boundaries
        While StartPos > 0 And Mid$(.Text, StartPos, 1) <> " "
            StartPos = StartPos - 1
        Wend
        
        EndPos = .SelStart
        While EndPos < Len(.Text) And Mid$(.Text, EndPos, 1) <> " "
            EndPos = EndPos + 1
        Wend
        
        .SelStart = StartPos
        .SelLength = EndPos - StartPos
    End With
End Sub
```

## Known Issues and Solutions

1. Memory Usage
```vb
Private Sub OptimizeMemoryUsage()
    ' Load large text in chunks
    Const CHUNK_SIZE As Long = 1000000 ' 1MB
    
    With RichTextBox1
        .Text = ""
        
        Open "largefile.txt" For Input As #1
        Do While Not EOF(1)
            .SelStart = .TextLength
            Line Input #1, TextLine
            .SelText = TextLine & vbCrLf
            DoEvents
        Loop
        Close #1
    End With
End Sub
```

2. Performance Optimization
```vb
Private Sub OptimizePerformance()
    ' Disable redrawing
    SendMessage RichTextBox1.hwnd, WM_SETREDRAW, 0, 0
    
    ' Perform batch operations
    ProcessLargeText
    
    ' Enable redrawing
    SendMessage RichTextBox1.hwnd, WM_SETREDRAW, 1, 0
    RichTextBox1.Refresh
End Sub
```

## Additional Tips

- Save backups regularly
- Implement word wrap
- Handle large files
- Provide search functionality
- Support multiple formats
- Implement printing features
- Handle encoding issues
- Provide status information
- Support keyboard shortcuts
- Clean up resources in Form_Unload

### Special Uses

1. Creating Syntax Highlighting
```vb
Private Sub HighlightSyntax()
    Dim Keywords() As String
    Keywords = Split("Function,Sub,Dim,Private,Public,End", ",")
    
    With RichTextBox1
        Dim i As Long
        For i = 0 To UBound(Keywords)
            Dim pos As Long
            pos = 0
            Do
                pos = .Find(Keywords(i), pos)
                If pos = -1 Then Exit Do
                
                .SelStart = pos
                .SelLength = Len(Keywords(i))
                .SelColor = vbBlue
                .SelBold = True
                
                pos = pos + Len(Keywords(i))
            Loop
        Next i
    End With
End Sub
```

2. Creating Auto-Complete
```vb
Private Sub SetupAutoComplete()
    Dim LastWord As String
    
    With RichTextBox1
        ' Get current word
        Dim pos As Long
        pos = .SelStart - 1
        
        While pos >= 0 And Mid$(.Text, pos + 1, 1) <> " "
            LastWord = Mid$(.Text, pos + 1, 1) & LastWord
            pos = pos - 1
        Wend
        
        ' Show suggestions list
        If Len(LastWord) > 2 Then
            ShowSuggestions LastWord
        End If
    End With
End Sub
```

3. Creating Mail Editor
```vb
Private Sub CreateMailEditor()
    With RichTextBox1
        ' Add email header
        .SelText = "To: " & vbCrLf
        .SelText = "Subject: " & vbCrLf
        .SelText = String(50, "-") & vbCrLf & vbCrLf
        
        ' Set signature
        .SelStart = .TextLength
        .SelText = vbCrLf & vbCrLf & "Best regards," & vbCrLf
        .SelText = "Your Name"
    End With
End Sub
```
