# CommonDialog Class Module (VBCCRCommonDialog)

The CommonDialog class module provides standard Windows common dialog functionality, including Open File, Save File, Color Selection, Font Selection, and Print dialogs.

## Properties

### Basic Properties
- `CancelError` - Whether to generate an error on cancel
- `Flags` - Dialog flags
- `FilterIndex` - Currently selected file type index
- `DefaultExt` - Default file extension
- `DialogTitle` - Dialog title
- `FileName` - File name
- `Filter` - File type filter
- `InitDir` - Initial directory
- `MaxFileSize` - Maximum file name length

### Font Dialog Properties
- `FontBold` - Whether font is bold
- `FontItalic` - Whether font is italic
- `FontName` - Font name
- `FontSize` - Font size
- `FontStrikethru` - Whether font has strikethrough
- `FontUnderline` - Whether font is underlined
- `Min` - Minimum font size
- `Max` - Maximum font size

### Color Dialog Properties
- `Color` - Selected color
- `CustomColors` - Custom colors array

### Print Dialog Properties
- `Copies` - Number of copies
- `FromPage` - Starting page
- `ToPage` - Ending page
- `Min` - Minimum page number
- `Max` - Maximum page number
- `PrinterDefault` - Whether to use default printer
- `Orientation` - Print orientation

## Methods

- `ShowOpen` - Display Open File dialog
- `ShowSave` - Display Save File dialog
- `ShowColor` - Display Color Selection dialog
- `ShowFont` - Display Font Selection dialog
- `ShowPrinter` - Display Print dialog
- `ShowHelp` - Display Help dialog

## Code Examples

### File Dialogs

```vb
Private Sub ShowOpenFileDialog()
    Dim CommonDialog1 As New VBCCRCommonDialog
    
    With CommonDialog1
        .DialogTitle = "Open File"
        .CancelError = True
        .Filter = "Text Files (*.txt)|*.txt|All Files (*.*)|*.*"
        .FilterIndex = 1
        .DefaultExt = "txt"
        .InitDir = App.Path
        
        On Error GoTo CancelError
        .ShowOpen
        
        ' Process selected file
        If LenB(.FileName) > 0 Then
            Debug.Print "Selected file: " & .FileName
        End If
    End With
    Exit Sub
    
CancelError:
    If Err.Number = cdlCancel Then
        Debug.Print "User cancelled the operation"
    End If
End Sub

Private Sub ShowSaveFileDialog()
    Dim CommonDialog1 As New VBCCRCommonDialog
    
    With CommonDialog1
        .DialogTitle = "Save File"
        .CancelError = True
        .Filter = "Text Files (*.txt)|*.txt|All Files (*.*)|*.*"
        .FilterIndex = 1
        .DefaultExt = "txt"
        .InitDir = App.Path
        
        On Error GoTo CancelError
        .ShowSave
        
        ' Process selected file
        If LenB(.FileName) > 0 Then
            Debug.Print "Save file as: " & .FileName
        End If
    End With
```
