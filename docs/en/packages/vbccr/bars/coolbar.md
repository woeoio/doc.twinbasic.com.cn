---
title: CoolBar Control
description: CoolBar Control - VBCCR Developer Reference, complete API documentation based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7967af9d-90cb-4185-9877-00ea7ed9a870'
  PropagateID: '7967af9d-90cb-4185-9877-00ea7ed9a870'
  ReservedCode1: '49ddd282-4029-4b9d-8239-e86dc8a628b4'
  ReservedCode2: '49ddd282-4029-4b9d-8239-e86dc8a628b4'
---

# CoolBar Control

Wraps the ReBar system control, providing a draggable, resizable band container bar.

## Enumerations

### CbrOrientationConstants

| Constant | Value | Description |
|----------|-------|-------------|
| CbrOrientationHorizontal | 0 | Horizontal orientation |
| CbrOrientationVertical | 1 | Vertical orientation |

### CbrBandStyleConstants

| Constant | Value | Description |
|----------|-------|-------------|
| CbrBandStyleNormal | 0 | Normal style, resizable |
| CbrBandStyleFixedSize | 1 | Fixed size |

### CbrBandGripperConstants

| Constant | Value | Description |
|----------|-------|-------------|
| CbrBandGripperNormal | 0 | Default gripper |
| CbrBandGripperAlways | 1 | Always show gripper |
| CbrBandGripperNever | 2 | Never show gripper |

### CbrHitResultConstants

| Constant | Value | Description |
|----------|-------|-------------|
| CbrHitResultNoWhere | 0 | Empty area |
| CbrHitResultCaption | 1 | Caption area |
| CbrHitResultClient | 2 | Client area |
| CbrHitResultGrabber | 3 | Gripper bar |
| CbrHitResultChevron | 4 | Chevron arrow |
| CbrHitResultSplitter | 5 | Splitter bar |

## Properties

### VisualStyles
`Property Get VisualStyles() As Boolean`
`Property Let VisualStyles(ByVal Value As Boolean)`

Whether visual styles are enabled.

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

Whether the control is enabled.

### OLEDropMode
`Property Get OLEDropMode() As OLEDropModeConstants`
`Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)`

OLE drag-and-drop mode. See common enumerations.

### MousePointer
`Property Get MousePointer() As CCMousePointerConstants`
`Property Let MousePointer(ByVal Value As CCMousePointerConstants)`

Mouse pointer. See common enumerations.

### MouseIcon
`Property Get MouseIcon() As IPictureDisp`
`Property Let MouseIcon(ByVal Value As IPictureDisp)`
`Property Set MouseIcon(ByVal Value As IPictureDisp)`

Custom mouse icon.

### MouseTrack
`Property Get MouseTrack() As Boolean`
`Property Let MouseTrack(ByVal Value As Boolean)`

Mouse enter/leave tracking.

### RightToLeft
`Property Get RightToLeft() As Boolean`
`Property Let RightToLeft(ByVal Value As Boolean)`

Right-to-left display.

### RightToLeftLayout
`Property Get RightToLeftLayout() As Boolean`
`Property Let RightToLeftLayout(ByVal Value As Boolean)`

Right-to-left mirrored layout.

### RightToLeftMode
`Property Get RightToLeftMode() As CCRightToLeftModeConstants`
`Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)`

Right-to-left mode. See common enumerations.

### ImageList
`Property Get ImageList() As Variant`
`Property Let ImageList(ByVal Value As Variant)`
`Property Set ImageList(ByVal Value As Variant)`

Associated ImageList control.

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

Background color.

### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

Foreground color.

### BorderStyle
`Property Get BorderStyle() As Integer`
`Property Let BorderStyle(ByVal Value As Integer)`

Border style (0 - no border, 1 - fixed single).

### Orientation
`Property Get Orientation() As CbrOrientationConstants`
`Property Let Orientation(ByVal Value As CbrOrientationConstants)`

Orientation.

### BandBorders
`Property Get BandBorders() As Boolean`
`Property Let BandBorders(ByVal Value As Boolean)`

Whether separator lines are displayed between bands.

### FixedOrder
`Property Get FixedOrder() As Boolean`
`Property Let FixedOrder(ByVal Value As Boolean)`

Whether the user is prevented from reordering bands.

### VariantHeight
`Property Get VariantHeight() As Boolean`
`Property Let VariantHeight(ByVal Value As Boolean)`

Whether bands are allowed to have different heights.

### Picture
`Property Get Picture() As IPictureDisp`
`Property Let Picture(ByVal Value As IPictureDisp)`
`Property Set Picture(ByVal Value As IPictureDisp)`

Background picture.

### DblClickToggle
`Property Get DblClickToggle() As Boolean`
`Property Let DblClickToggle(ByVal Value As Boolean)`

Whether double-click toggles maximize/minimize.

### VerticalGripper
`Property Get VerticalGripper() As Boolean`
`Property Let VerticalGripper(ByVal Value As Boolean)`

Whether a vertical gripper is used in vertical orientation.

### ShowTips
`Property Get ShowTips() As Boolean`
`Property Let ShowTips(ByVal Value As Boolean)`

Whether tooltips are displayed.

### DoubleBuffer
`Property Get DoubleBuffer() As Boolean`
`Property Let DoubleBuffer(ByVal Value As Boolean)`

Whether double buffering is enabled to reduce flicker.

### Bands
`Property Get Bands() As CbrBands`

Bands collection.

### ContainedControls
`Property Get ContainedControls() As VBRUN.ContainedControls`

Contained controls collection. Read-only.

### RowCount
`Property Get RowCount() As Long`

Row count. Read-only.

### hWnd / hWndUserControl / Font

See common properties.

### Name / Tag / Parent / Container / Left / Top / Width / Height / Visible / ToolTipText / WhatsThisHelpID / Align / DragIcon / DragMode

See standard extender properties.

## Methods

### Refresh
`Public Sub Refresh()`

Forces a redraw.

### HitTest
`Public Function HitTest(ByVal X As Single, ByVal Y As Single, Optional ByRef HitResult As CbrHitResultConstants) As CbrBand`

Hit test; returns the band object at the specified coordinates.

### OLEDrag
`Public Sub OLEDrag()`

### Drag / ZOrder

See standard methods.

## Events

### Click
`Public Event Click()`

Click.

### DblClick
`Public Event DblClick()`

Double-click.

### Resize
`Public Event Resize()`

Size changed.

### HeightChanged
`Public Event HeightChanged(ByVal NewHeight As Single)`

Height changed.

### LayoutChanged
`Public Event LayoutChanged()`

Layout changed.

### MinMax
`Public Event MinMax(ByRef Cancel As Boolean)`

A band is about to be maximized or minimized; can be canceled.

### BandBeforeDrag
`Public Event BandBeforeDrag(ByVal Band As CbrBand, ByRef Cancel As Boolean)`

A band is about to be dragged; can be canceled.

### BandAfterDrag
`Public Event BandAfterDrag(ByVal Band As CbrBand, ByVal NewPosition As Long)`

Band drag completed.

### BandChevronPushed
`Public Event BandChevronPushed(ByVal Band As CbrBand, ByVal Left As Single, ByVal Top As Single, ByVal Width As Single, ByVal Height As Single)`

Chevron arrow clicked.

### BandMouseEnter
`Public Event BandMouseEnter(ByVal Band As CbrBand)`

Mouse entered a band.

### BandMouseLeave
`Public Event BandMouseLeave(ByVal Band As CbrBand)`

Mouse left a band.

### MouseDown / MouseMove / MouseUp / MouseEnter / MouseLeave

### OLECompleteDrag / OLEDragDrop / OLEDragOver / OLEGiveFeedback / OLESetData / OLEStartDrag

## CbrBand Object

Band properties and methods.

### Properties

#### Index
`Property Get Index() As Long`

Band index in the collection. Read-only.

#### Key
`Property Get Key() As String`
`Property Let Key(ByVal Value As String)`

Band key.

#### Tag
`Property Get Tag() As Variant`
`Property Let Tag(ByVal Value As Variant)`
`Property Set Tag(ByVal Value As Variant)`

Custom data.

#### ID
`Property Get ID() As Long`

Internal identifier. Read-only.

#### Caption
`Property Get Caption() As String`
`Property Let Caption(ByVal Value As String)`

Band caption.

#### Child
`Property Get Child() As Object`
`Property Let Child(ByVal Value As Object)`
`Property Set Child(ByVal Value As Object)`

Child control contained in the band.

#### Style
`Property Get Style() As CbrBandStyleConstants`
`Property Let Style(ByVal Value As CbrBandStyleConstants)`

Band style.

#### Image
`Property Get Image() As Variant`
`Property Let Image(ByVal Value As Variant)`

Image index or key in the ImageList.

#### ImageIndex
`Property Get ImageIndex() As Long`

Image index. Read-only.

#### Width
`Property Get Width() As Single`
`Property Let Width(ByVal Value As Single)`

Band width. Read-only when Style is FixedSize.

#### Height
`Property Get Height() As Single`

Band height. Read-only.

#### MinWidth
`Property Get MinWidth() As Single`
`Property Let MinWidth(ByVal Value As Single)`

Minimum width.

#### MinHeight
`Property Get MinHeight() As Single`
`Property Let MinHeight(ByVal Value As Single)`

Minimum height.

#### IdealWidth
`Property Get IdealWidth() As Single`
`Property Let IdealWidth(ByVal Value As Single)`

Ideal width.

#### Gripper
`Property Get Gripper() As CbrBandGripperConstants`
`Property Let Gripper(ByVal Value As CbrBandGripperConstants)`

Gripper style.

#### ToolTipText
`Property Get ToolTipText() As String`
`Property Let ToolTipText(ByVal Value As String)`

ToolTip text. Requires ShowTips to be True.

#### UseCoolBarPicture
`Property Get UseCoolBarPicture() As Boolean`
`Property Let UseCoolBarPicture(ByVal Value As Boolean)`

Whether the CoolBar's background picture is used.

#### Picture
`Property Get Picture() As IPictureDisp`
`Property Let Picture(ByVal Value As IPictureDisp)`
`Property Set Picture(ByVal Value As IPictureDisp)`

Band background picture.

#### UseCoolBarColors
`Property Get UseCoolBarColors() As Boolean`
`Property Let UseCoolBarColors(ByVal Value As Boolean)`

Whether the CoolBar's foreground/background colors are used.

#### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

Band background color.

#### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

Band foreground color.

#### NewRow
`Property Get NewRow() As Boolean`
`Property Let NewRow(ByVal Value As Boolean)`

Whether the band starts on a new row.

#### Visible
`Property Get Visible() As Boolean`
`Property Let Visible(ByVal Value As Boolean)`

Whether visible.

#### ChildEdge
`Property Get ChildEdge() As Boolean`
`Property Let ChildEdge(ByVal Value As Boolean)`

Whether an edge is displayed around the child control.

#### UseChevron
`Property Get UseChevron() As Boolean`
`Property Let UseChevron(ByVal Value As Boolean)`

Whether a chevron arrow is displayed when the band width is less than the ideal width.

#### HideCaption
`Property Get HideCaption() As Boolean`
`Property Let HideCaption(ByVal Value As Boolean)`

Whether the caption is hidden.

#### FixedBackground
`Property Get FixedBackground() As Boolean`
`Property Let FixedBackground(ByVal Value As Boolean)`

Whether the background picture is fixed in place.

#### Position
`Property Get Position() As Long`
`Property Let Position(ByVal Value As Long)`

Band position.

### Methods

#### Maximize
`Public Sub Maximize()`

Maximizes the band.

#### Minimize
`Public Sub Minimize()`

Minimizes the band.

#### PushChevron
`Public Sub PushChevron()`

Programmatically clicks the chevron arrow.

## CbrBands Collection

Bands collection object.

### Properties

#### Item
`Property Get Item(ByVal Index As Variant) As CbrBand`

Gets a band by index or key.

#### ItemFromPosition
`Property Get ItemFromPosition(ByVal Position As Long) As CbrBand`

Gets a band by position.

#### Count
`Property Get Count() As Long`

Band count.

### Methods

#### Add
`Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Caption As String, Optional ByVal Image As Variant, Optional ByVal NewRow As Boolean, Optional ByVal Child As Variant, Optional ByVal Visible As Boolean = True) As CbrBand`

Adds a new band.

#### Remove
`Public Sub Remove(ByVal Index As Variant)`

Removes a band.

#### Clear
`Public Sub Clear()`

Clears all bands.

#### Exists
`Public Function Exists(ByVal Index As Variant) As Boolean`

Checks if a band exists.

## CbrBandProperties Object

Auxiliary object for band color properties.

### Properties

#### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

Background color.

#### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

Foreground color.

## Code Examples

### Basic Usage

```vb
' Add bands
With CoolBar1.Bands
    .Add Key:="Band1", Caption:="Toolbar", NewRow:=True
    .Add Key:="Band2", Caption:="Format Bar"
End With

' Set child control
Set CoolBar1.Bands("Band1").Child = Toolbar1

' Set band properties
CoolBar1.Bands(1).UseChevron = True
CoolBar1.Bands(1).IdealWidth = 500
```

### Hit Test

```vb
Private Sub CoolBar1_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
    Dim HitResult As CbrHitResultConstants
    Dim Band As CbrBand
    Set Band = CoolBar1.HitTest(X, Y, HitResult)
    If Not Band Is Nothing Then
        Debug.Print "Clicked: " & Band.Caption
    End If
End Sub
```

### Chevron Event

```vb
Private Sub CoolBar1_BandChevronPushed(ByVal Band As CbrBand, _
    ByVal Left As Single, ByVal Top As Single, _
    ByVal Width As Single, ByVal Height As Single)
    ' Display menu at chevron position
    PopupMenu mnuToolbar, , Left, Top + Height
End Sub
```