---
title: ImageList Control
description: ImageList Control - VBCCR Development Manual, Complete API Reference Based on Source Code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b81cb137-467f-4417-b7f3-952730830c01'
  PropagateID: 'b81cb137-467f-4417-b7f3-952730830c01'
  ReservedCode1: '205b5365-3586-46b3-afef-ef56da9755ff'
  ReservedCode2: '205b5365-3586-46b3-afef-ef56da9755ff'
---

# ImageList Control

Wraps the ImageList control, used to store and manage image collections for reference by other controls.

## Enumerations

### ImlImageSizeConstants

| Constant | Value | Description |
|------|-----|------|
| imlSmall | 0 | Small icons (16×16) |
| imlLarge | 1 | Large icons (32×32) |
| imlCustom | 2 | Custom size |

### CCBackStyleConstants

See Common Enumerations.

## Properties

### ImageWidth
`Property Get ImageWidth() As Long`
`Property Let ImageWidth(ByVal Value As Long)`

Image width (pixels).

### ImageHeight
`Property Get ImageHeight() As Long`
`Property Let ImageHeight(ByVal Value As Long)`

Image height (pixels).

### ImageSize
`Property Get ImageSize() As ImlImageSizeConstants`
`Property Let ImageSize(ByVal Value As ImlImageSizeConstants)`

Preset image size. Setting this property automatically adjusts ImageWidth and ImageHeight.

### ColorDepth
`Property Get ColorDepth() As Long`
`Property Let ColorDepth(ByVal Value As Long)`

Color depth. Supports 4, 8, 16, 24, 32 bits. Requires comctl32.dll 6.0 or later.

### MaskColor
`Property Get MaskColor() As OLE_COLOR`
`Property Let MaskColor(ByVal Value As OLE_COLOR)`

Mask color.

### UseMaskColor
`Property Get UseMaskColor() As Boolean`
`Property Let UseMaskColor(ByVal Value As Boolean)`

Whether to use mask color.

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

Background color.

### hImageList
`Property Get hImageList() As LongPtr`

Image list handle. Read-only.

### ListImages
`Property Get ListImages() As ImlListImages`

Image collection.

### Name
`Property Get Name() As String`

Control name. Read-only.

### Tag
`Property Get Tag() As Variant`
`Property Let Tag(ByVal Value As Variant)`
`Property Set Tag(ByVal Value As Variant)`

Custom data.

### Parent
`Property Get Parent() As Object`

Parent object. Read-only.

### Container
`Property Get Container() As Object`
`Property Set Container(ByVal Value As Object)`

Container object.

### Left
`Property Get Left() As Single`
`Property Let Left(ByVal Value As Single)`

Left margin.

### Top
`Property Get Top() As Single`
`Property Let Top(ByVal Value As Single)`

Top margin.

### Width
`Property Get Width() As Single`
`Property Let Width(ByVal Value As Single)`

Width (used at design time).

### Height
`Property Get Height() As Single`
`Property Let Height(ByVal Value As Single)`

Height (used at design time).

### Visible
`Property Get Visible() As Boolean`
`Property Let Visible(ByVal Value As Boolean)`

Visibility (used at design time).

### hWnd
`Property Get hWnd() As LongPtr`

Window handle. Read-only.

## Methods

### Refresh
`Sub Refresh()`

Forces a repaint.

### CreateIcon
`Function CreateIcon(ByVal ImageIndex As Long) As IPictureDisp`

Creates an icon from the specified image.

### CreateBitmap
`Function CreateBitmap(ByVal ImageIndex As Long) As IPictureDisp`

Creates a bitmap from the specified image. Requires comctl32.dll 6.0 or later.

### Overlay
`Function Overlay(ByVal ImageIndex1 As Long, ByVal ImageIndex2 As Long) As IPictureDisp`

Overlays two images and returns the resulting image.

### AboutBox
`Sub AboutBox()`

Displays the About dialog.

## Sub-objects

### ListImage (ImlListImage)

Represents a single image in the image list.

#### Properties

| Property | Type | Access | Description |
|------|------|------|------|
| Index | Long | Read-only | Index in the collection |
| Key | String | Read/Write | Key in the collection |
| Tag | Variant | Read/Write | Custom data |
| Picture | IPictureDisp | Read/Write | Image |
| MaskPicture | IPictureDisp | Read/Write | Mask image |
| Overlay | Boolean | Read/Write | Whether this is an overlay image |
| OverlaySourceIndex | Long | Read/Write | Overlay source index |
| ExtractIcon | IPictureDisp | Read-only | Extract icon |
| ExtractBitmap | IPictureDisp | Read-only | Extract bitmap |

### ListImages (ImlListImages)

Image collection object.

#### Properties

| Property | Type | Access | Description |
|------|------|------|------|
| Item(ByVal Index As Variant) | ImlListImage | Read-only | Get image by index or key |
| Count | Long | Read-only | Number of images |

#### Methods

| Method | Description |
|------|------|
| Add([Index], [Key], [Picture], [MaskPicture]) As ImlListImage | Add an image |
| Exists(ByVal Index As Variant) As Boolean | Check if an image exists |
| Clear | Clear all images |
| Remove(ByVal Index As Variant) | Remove the specified image |

## Code Examples

```vb
' Set image size and add images
With ImageList1
    .ImageSize = imlSmall
    .ListImages.Add , "open", LoadPicture("open.ico")
    .ListImages.Add , "save", LoadPicture("save.ico")
    .ListImages.Add , "exit", LoadPicture("exit.ico")
End With

' Reference image by key
Set cmdOpen.Picture = ImageList1.ListImages("open").ExtractIcon

' Create overlay image
ImageList1.ListImages.Add , "overlay1", LoadPicture("ov1.ico")
ImageList1.ListImages("overlay1").Overlay = True
ImageList1.ListImages("overlay1").OverlaySourceIndex = 1

' Use Overlay method to overlay two images
Set imgOverlay = ImageList1.Overlay(1, 2)

' Iterate through all images
Dim img As ImlListImage
For Each img In ImageList1.ListImages
    Debug.Print img.Index; img.Key
Next img
```