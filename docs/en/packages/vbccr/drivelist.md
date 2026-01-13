# DriveList Control (VBCCRDriveList)

The VBCCRDriveList control provides a dropdown list box for displaying and selecting available drives in the system. It supports displaying different types of drives (such as fixed disks, optical drives, network drives, etc.) and provides a rich event handling mechanism.

## Properties

### Basic Properties
- `Drive` - Currently selected drive letter
- `DriveLetter` - Currently selected drive letter (letter portion only)
- `DriveType` - Current drive type
  - `DRIVE_UNKNOWN` (0) - Unknown type
  - `DRIVE_NO_ROOT_DIR` (1) - Invalid drive
  - `DRIVE_REMOVABLE` (2) - Removable drive
  - `DRIVE_FIXED` (3) - Fixed drive
  - `DRIVE_REMOTE` (4) - Network drive
  - `DRIVE_CDROM` (5) - CD-ROM
  - `DRIVE_RAMDISK` (6) - RAM disk
- `List` - Drive list
- `ListCount` - Number of drives
- `ListIndex` - Index of currently selected item

### Appearance Properties
- `BackColor` - Background color
- `ForeColor` - Foreground color
- `Enabled` - Whether control is enabled
- `Font` - Font settings
- `Visible` - Whether visible

## Events

- `Change` - Triggered when selected drive changes
- `Click` - Triggered when control is clicked
- `DblClick` - Triggered when control is double-clicked
- `GotFocus` - Triggered when control receives focus
- `LostFocus` - Triggered when control loses focus
- `KeyDown` - Triggered when keyboard key is pressed
- `KeyPress` - Triggered during keyboard key press
- `KeyUp` - Triggered when keyboard key is released
- `MouseDown` - Triggered when mouse button is pressed
- `MouseMove` - Triggered when mouse moves
- `MouseUp` - Triggered when mouse button is released
- `Scroll` - Triggered when list is scrolled

## Code Examples

### Basic Usage

```vb
Private Sub InitDriveList()
    With DriveList1
        .Drive = "C:"  ' Set initial drive
    End With
End Sub
```

### Drive Manager

```vb
Private Type DriveInfo
    Letter As String
    DriveType As Integer
    VolumeName As String
    FileSystem As String
    TotalSize As Currency
    FreeSpace As Currency
    SerialNumber As Long
    IsReady As Boolean
End Type

Private Type DriveManager
    Drives() As DriveInfo
    Count As Long
End Type

Private Manager As DriveManager

Private Sub InitDriveManager()
    With Manager
        ReDim .Drives(1 To 26)  ' A-Z
        .Count = 0
        
        ' Scan all drives
        RefreshDrives
    End With
End Sub

Private Sub RefreshDrives()
    With Manager
        .Count = 0
        
        ' Scan drives
        Dim Letter As String
        For Letter = "A" To "Z"
            If GetDriveType(Letter & ":\") > DRIVE_NO_ROOT_DIR Then
                .Count = .Count + 1
                GetDriveInfo Letter, .Drives(.Count)
            End If
        Next Letter
    End With
End Sub
```
