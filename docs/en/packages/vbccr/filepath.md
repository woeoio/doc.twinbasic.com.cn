# FilePath Control (VBCCRFilePath)

The VBCCRFilePath control provides an interface for browsing and selecting file paths. It typically works in conjunction with the DrivePath control, allowing users to browse and select files in the file system.

## Properties

### Key Properties

- `Path`: Currently selected file path
- `Pattern`: File filter pattern (e.g., "*.txt;*.doc")
- `Archive`: Whether to show archive files
- `Hidden`: Whether to show hidden files
- `ReadOnly`: Whether in read-only mode
- `System`: Whether to show system files
- `MultiSelect`: Whether to allow multiple selection
- `Selected()`: Collection of selected files
- `BackColor`: Background color
- `ForeColor`: Text color

## Methods

### Main Methods

- `Refresh()`: Refresh file list
- `SetFocus()`: Set focus to control
- `GetSelected(Index As Integer)`: Get selected file
- `GetSelectedCount()`: Get count of selected files

## Events

- `PathChange()`: Triggered when path changes
- `PathClick()`: Triggered when file is clicked
- `PathSelect()`: Triggered when file is selected
- `DblClick()`: Triggered when file is double-clicked

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With FilePath1
        .Path = App.Path
        .Pattern = "*.txt;*.doc;*.docx"
        .Archive = True
        .Hidden = False
        .System = False
    End With
End Sub
```

### File Selection Handling

```vb
Private Sub FilePath1_PathSelect()
    Dim i As Integer
    
    ' Process selected files
    For i = 0 To FilePath1.GetSelectedCount - 1
        Debug.Print "Selected file: " & FilePath1.GetSelected(i)
    Next i
End Sub
```

### File Filtering

```vb
Private Sub SetFileFilter(ByVal FilterType As String)
    With FilePath1
        Select Case FilterType
            Case "Documents"
                .Pattern = "*.doc;*.docx;*.txt;*.rtf"
            Case "Images"
                .Pattern = "*.jpg;*.jpeg;*.png;*.gif;*.bmp"
            Case "All"
                .Pattern = "*.*"
        End Select
        .Refresh
    End With
End Sub
```

## Common Use Cases

### File Selector

```vb
Private Sub SetupFileSelector()
    ' Set up file selector
    With FilePath1
        .MultiSelect = True
        .Pattern = "*.txt;*.csv"
        .Path = App.Path & "\Data"
    End With
End Sub

Private Sub ProcessSelectedFiles()
    Dim i As Integer
    Dim fileName As String
```
