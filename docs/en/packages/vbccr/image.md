# Image Control (VBCCRImage)

The VBCCRImage control is an enhanced version of the standard Image control, offering more image processing features and better display capabilities.

## Properties

### Key Properties

- `Picture`: Displayed image
- `Stretch`: Whether to stretch image to fit control size
- `AutoSize`: Whether to automatically adjust control size based on image
- `BorderStyle`: Border style
- `Enabled`: Enable/disable control
- `MaskColor`: Transparent color
- `UseMaskColor`: Whether to use transparent color
- `ScaleMode`: Scaling mode
  - `Clip` - Clip
  - `Stretch` - Stretch
  - `Zoom` - Proportional scaling

## Methods

### Main Methods

- `LoadPicture(FileName As String)`: Load image
- `SavePicture(FileName As String)`: Save image
- `Refresh()`: Refresh display
- `Clear()`: Clear image

## Events

- `Click()`: Triggered when clicked
- `DblClick()`: Triggered when double-clicked
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Triggered when mouse button is pressed
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Triggered when mouse button is released
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`: Triggered when mouse moves

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Basic image loading
    With Image1
        .AutoSize = True
        .BorderStyle = 1 ' Fixed single line
        Set .Picture = LoadPicture("image.jpg")
    End With
End Sub
```

### Image Scaling

```vb
Private Sub SetupImageScaling()
    With Image1
        .Stretch = True
        .Width = 200
        .Height = 150
        Set .Picture = LoadPicture("image.jpg")
    End With
End Sub
```

### Transparent Background Handling

```vb
Private Sub SetTransparency()
    With Image1
        .UseMaskColor = True
        .MaskColor = RGB(255, 0, 255) ' Set magenta as transparent color
    End With
End Sub
```

## Common Use Cases

### Image Viewer

```vb
Private Sub CreateImageViewer()
    ' Set image viewer properties
    With Image1
        .AutoSize = False
        .Stretch = True
        .BorderStyle = 1
    End With
End Sub

Private Sub LoadImageFile(ByVal FilePath As String)
    On Error GoTo ErrorHandler
    
    With Image1
        Set .Picture = LoadPicture(FilePath)
    End With
    Exit Sub
    
ErrorHandler:
    MsgBox "Cannot load image: " & Err.Description
```
