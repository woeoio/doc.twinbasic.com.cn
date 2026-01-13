# ImageList Control (VBCCRImageList)

The VBCCRImageList control is an image container control used to store and manage multiple images of the same size. It typically works with other controls (such as TreeView, ListView, Toolbar, etc.) to provide icon and image support.

## Properties

### Key Properties

- `ListImages`: Image collection
- `ImageWidth`: Image width
- `ImageHeight`: Image height
- `ColorDepth`: Color depth
- `BackColor`: Background color (transparent color)
- `MaskColor`: Mask color
- `UseMaskColor`: Whether to use mask color
- `ImageCount`: Number of images

## Methods

### Main Methods

- `ListImages.Add(Key As String, [Picture As Picture])`: Add image
- `Remove(Index As Variant)`: Remove image
- `Clear()`: Clear all images
- `Overlay(Image1 As ListImage, Image2 As ListImage)`: Overlay images
- `Extract(Key As Variant) As Picture`: Extract image

## Events

The ImageList control has no events.

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Configure image list
    With ImageList1
        .ImageWidth = 16
        .ImageHeight = 16
        .ColorDepth = cdPalette
        
        ' Load icons
        .ListImages.Add "NEW", LoadPicture(App.Path & "\Icons\new.ico")
        .ListImages.Add "OPEN", LoadPicture(App.Path & "\Icons\open.ico")
        .ListImages.Add "SAVE", LoadPicture(App.Path & "\Icons\save.ico")
    End With
    
    ' Associate with toolbar
    Toolbar1.ImageList = ImageList1
End Sub
```

### Loading Icons from Resources

```vb
Private Sub LoadIconsFromResource()
    ' Load icons from resource file
    With ImageList1
        .ListImages.Clear
        
        ' Load standard icons
        .ListImages.Add "FILE", LoadResPicture(1, vbResIcon)
        .ListImages.Add "FOLDER", LoadResPicture(2, vbResIcon)
        .ListImages.Add "DRIVE", LoadResPicture(3, vbResIcon)
    End With
End Sub
```

### Dynamic Image Management

```vb
Private Sub ManageImages()
    With ImageList1
        ' Add image
        Dim Image As ListImage
        Set Image = .ListImages.Add(, "ICON1", Picture1.Picture)
        
        ' Set image properties
        With Image
            .Tag = "Custom Data"
            .Key = "NEWKEY"  ' Change key name
        End With
        
        ' Remove image
        .ListImages.Remove "OLDKEY"
        
        ' Clear all images
        .ListImages.Clear
    End With
End Sub
```

## Common Use Cases

### File Type Icon Management

```vb
Private Type FileTypeInfo
```
