# DrivePath Control (VBCCRDrivePath)

The VBCCRDrivePath control provides an interface for browsing and selecting drive paths. It allows users to browse drives on the computer and select specific paths, typically used in conjunction with the FilePath control.

## Properties

### Key Properties

- `Path`: Currently selected path
- `Drive`: Currently selected drive
- `Pattern`: File filter pattern
- `Enabled`: Enable/disable control
- `BackColor`: Background color
- `ForeColor`: Text color
- `ReadOnly`: Whether in read-only mode
- `ShowNetwork`: Whether to display network drives

## Methods

### Main Methods

- `Refresh()`: Refresh drive list
- `Change()`: Change current path
- `SetFocus()`: Set focus to control

## Events

- `Change()`: Triggered when path changes
- `Click()`: Triggered when clicked
- `PathClick()`: Triggered when path is clicked
- `PathChange()`: Triggered when path change completes
- `DriveChange()`: Triggered when drive changes

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With DrivePath1
        .Path = "C:\"
        .ShowNetwork = True
        .Enabled = True
    End With
End Sub
```

### Monitoring Path Changes

```vb
Private Sub DrivePath1_Change()
    Debug.Print "Current path: " & DrivePath1.Path
End Sub

Private Sub DrivePath1_DriveChange()
    Debug.Print "Current drive: " & DrivePath1.Drive
End Sub
```

### Integration with FilePath Control

```vb
Private Sub SyncPathControls()
    ' Synchronize DrivePath and FilePath controls
    FilePath1.Path = DrivePath1.Path
End Sub

Private Sub DrivePath1_PathChange()
    SyncPathControls
End Sub
```

## Common Use Cases

### File Browser

```vb
Private Sub SetupFileBrowser()
    ' Set up drive browser
    With DrivePath1
        .Path = App.Path
        .ShowNetwork = True
        .Pattern = "*.txt;*.doc;*.docx"
    End With
End Sub

Private Sub DrivePath1_PathClick()
    ' Update file list
    UpdateFileList DrivePath1.Path
End Sub
```

### Backup Location Selector

```vb
Private Sub SetupBackupLocationSelector()
    With DrivePath1
        .ShowNetwork = True
        
        ' Check default backup path
```
