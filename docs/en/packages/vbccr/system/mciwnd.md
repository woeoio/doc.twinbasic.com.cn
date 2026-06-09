---
title: MCIWnd Control
description: MCIWnd Control - VBCCR Development Manual, Complete API Reference Based on Source Code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6760ed1f-228b-4df5-a285-0fdd453fb6c5'
  PropagateID: '6760ed1f-228b-4df5-a285-0fdd453fb6c5'
  ReservedCode1: '70433c6d-5c55-403e-a514-d73b99615e07'
  ReservedCode2: '70433c6d-5c55-403e-a514-d73b99615e07'
---

# MCIWnd Control

Wraps the MCIWnd window class, providing multimedia device control and audio/video playback functionality.

## Enumerations

### MciFormatConstants

| Constant | Value | Description |
|------|-----|------|
| MciFormatMpeg | 0 | MPEG format |
| MciFormatAvi | 1 | AVI format |
| MciFormatMidi | 2 | MIDI format |
| MciFormatWave | 3 | Wave format |
| MciFormatOle | 4 | OLE storage |
| MciFormatOleStream | 5 | OLE stream |
| MciFormatRiff | 6 | RIFF format |
| MciFormatExif | 7 | Exif format |
| MciFormatJpeg | 8 | JPEG format |
| MciFormatPng | 9 | PNG format |
| MciFormatGif | 10 | GIF format |

### MciModeConstants

| Constant | Value | Description |
|------|-----|------|
| MciModeNotOpen | 524 | Device not open |
| MciModeStop | 525 | Device stopped |
| MciModePlay | 526 | Device playing |
| MciModeRecord | 527 | Device recording |
| MciModeSeek | 528 | Device seeking |
| MciModePause | 529 | Device paused |
| MciModeReady | 530 | Device ready |

### MciNotifyConstants

| Constant | Value | Description |
|------|-----|------|
| MciNotifyAborted | &H4 | Operation aborted |
| MciNotifySuperseded | &H8 | Operation superseded |
| MciNotifySuccessful | &H1 | Operation completed successfully |
| MciNotifyFailure | &H2 | Operation failed |

### MciCaptionConstants

| Constant | Value | Description |
|------|-----|------|
| MciCaptionOff | 0 | No caption displayed |
| MciCaptionFileName | 1 | Display file name |
| MciCaptionDevice | 2 | Display device name |
| MciCaptionMode | 3 | Display current mode |
| MciCaptionPosition | 4 | Display current position |
| MciCaptionLength | 5 | Display media length |
| MciCaptionError | 6 | Display error information |
| MciCaptionInfo | 7 | Display all information |

### CCBorderStyleConstants

See Common Enumerations.

### CCMousePointerConstants

See Common Enumerations.

## Properties

### Command

```vb
Property Let Command(ByVal Value As String)
```

Sends a command string to the MCI device.

### CommandReturn

```vb
Property Get CommandReturn() As String
```

Returns the result of the last MCI command. Read-only.

### FileName

```vb
Property Get FileName() As String
Property Let FileName(ByVal Value As String)
```

Media file name to open or load.

### DeviceAlias

```vb
Property Get DeviceAlias() As String
```

Returns the device alias. Read-only.

### DeviceID

```vb
Property Get DeviceID() As Long
```

Returns the device ID. Read-only.

### Device

```vb
Property Get Device() As String
```

Returns the current device type. Read-only.

### NewDevice

```vb
Property Let NewDevice(ByVal Value As String)
```

Sets the new device type to open. Write-only.

### Error

```vb
Property Get Error() As Long
```

Returns the most recent MCI error code. Read-only.

### ErrorString

```vb
Property Get ErrorString() As String
```

Returns the most recent MCI error description string. Read-only.

### TimeFormat

```vb
Property Get TimeFormat() As MciFormatConstants
Property Let TimeFormat(ByVal Value As MciFormatConstants)
```

Time format.

### Mode

```vb
Property Get Mode() As MciModeConstants
```

Returns the current device mode. Read-only.

### ModeString

```vb
Property Get ModeString() As String
```

Returns the string description of the current device mode. Read-only.

### Position

```vb
Property Get Position() As Long
```

Returns the current position. Read-only.

### PositionString

```vb
Property Get PositionString() As String
```

Returns the string representation of the current position. Read-only.

### StartPosition

```vb
Property Get StartPosition() As Long
```

Returns the start position. Read-only.

### Length

```vb
Property Get Length() As Long
```

Returns the total media length. Read-only.

### EndPosition

```vb
Property Get EndPosition() As Long
```

Returns the end position. Read-only.

### Volume

```vb
Property Get Volume() As Long
Property Let Volume(ByVal Value As Long)
```

Volume level.

### Speed

```vb
Property Get Speed() As Long
Property Let Speed(ByVal Value As Long)
```

Playback speed.

### Repeat

```vb
Property Get Repeat() As Boolean
Property Let Repeat(ByVal Value As Boolean)
```

Whether to loop playback.

### ErrorDlg

```vb
Property Get ErrorDlg() As Boolean
Property Let ErrorDlg(ByVal Value As Boolean)
```

Whether to display error dialogs.

### Record

```vb
Property Get Record() As Boolean
Property Let Record(ByVal Value As Boolean)
```

Whether in recording mode.

### Playbar

```vb
Property Get Playbar() As Boolean
Property Let Playbar(ByVal Value As Boolean)
```

Whether to display the playbar.

### Menu

```vb
Property Get Menu() As Boolean
Property Let Menu(ByVal Value As Boolean)
```

Whether to display the menu.

### AllowOpen

```vb
Property Get AllowOpen() As Boolean
Property Let AllowOpen(ByVal Value As Boolean)
```

Whether to allow opening files through the user interface.

### AutoSizeWindow

```vb
Property Get AutoSizeWindow() As Boolean
Property Let AutoSizeWindow(ByVal Value As Boolean)
```

Whether to automatically resize the window to fit the media.

### AutoSizeMovie

```vb
Property Get AutoSizeMovie() As Boolean
Property Let AutoSizeMovie(ByVal Value As Boolean)
```

Whether to automatically resize the media to fit the window.

### TimerFreq

```vb
Property Get TimerFreq() As Long
Property Let TimerFreq(ByVal Value As Long)
```

Timer frequency.

### Zoom

```vb
Property Get Zoom() As Long
Property Let Zoom(ByVal Value As Long)
```

Zoom ratio.

### Caption

```vb
Property Get Caption() As MciCaptionConstants
Property Let Caption(ByVal Value As MciCaptionConstants)
```

Caption display mode.

### BackColor

```vb
Property Get BackColor() As OLE_COLOR
Property Let BackColor(ByVal Value As OLE_COLOR)
```

Background color.

### BorderStyle

```vb
Property Get BorderStyle() As CCBorderStyleConstants
Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

Border style. See Common Enumerations.

### VisualStyles

```vb
Property Get VisualStyles() As Boolean
Property Let VisualStyles(ByVal Value As Boolean)
```

Whether visual styles are enabled.

### hWnd

```vb
Property Get hWnd() As LongPtr
```

Window handle of the MCIWnd control.

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

Window handle of the user control.

### Font

```vb
Property Get Font() As StdFont
Property Let Font(ByVal NewFont As StdFont)
Property Set Font(ByVal NewFont As StdFont)
```

Font.

### Enabled

```vb
Property Get Enabled() As Boolean
Property Let Enabled(ByVal Value As Boolean)
```

Whether the control is enabled.

### MousePointer

```vb
Property Get MousePointer() As CCMousePointerConstants
Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

Mouse pointer style. See Common Enumerations.

### MouseIcon

```vb
Property Get MouseIcon() As IPictureDisp
Property Let MouseIcon(ByVal Value As IPictureDisp)
Property Set MouseIcon(ByVal Value As IPictureDisp)
```

Custom mouse icon.

### MouseTrack

```vb
Property Get MouseTrack() As Boolean
Property Let MouseTrack(ByVal Value As Boolean)
```

Whether mouse enter/leave tracking is enabled.

### RightToLeft

```vb
Property Get RightToLeft() As Boolean
Property Let RightToLeft(ByVal Value As Boolean)
```

Right-to-left display direction.

### RightToLeftMode

```vb
Property Get RightToLeftMode() As CCRightToLeftModeConstants
Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

Right-to-left mode. See Common Enumerations.

### Name

```vb
Property Get Name() As String
```

Control name. Read-only.

### Tag

```vb
Property Get Tag() As String
Property Let Tag(ByVal Value As String)
```

Custom data.

### Parent

```vb
Property Get Parent() As Object
```

Parent object. Read-only.

### Container

```vb
Property Get Container() As Object
Property Set Container(ByVal Value As Object)
```

Container object.

### Left

```vb
Property Get Left() As Single
Property Let Left(ByVal Value As Single)
```

Left margin.

### Top

```vb
Property Get Top() As Single
Property Let Top(ByVal Value As Single)
```

Top margin.

### Width

```vb
Property Get Width() As Single
Property Let Width(ByVal Value As Single)
```

Width.

### Height

```vb
Property Get Height() As Single
Property Let Height(ByVal Value As Single)
```

Height.

### Visible

```vb
Property Get Visible() As Boolean
Property Let Visible(ByVal Value As Boolean)
```

Whether the control is visible.

### ToolTipText

```vb
Property Get ToolTipText() As String
Property Let ToolTipText(ByVal Value As String)
```

Tooltip text.

### HelpContextID

```vb
Property Get HelpContextID() As Long
Property Let HelpContextID(ByVal Value As Long)
```

Help context ID.

### WhatsThisHelpID

```vb
Property Get WhatsThisHelpID() As Long
Property Let WhatsThisHelpID(ByVal Value As Long)
```

"What's This" Help ID.

### DragIcon

```vb
Property Get DragIcon() As IPictureDisp
Property Let DragIcon(ByVal Value As IPictureDisp)
Property Set DragIcon(ByVal Value As IPictureDisp)
```

Drag icon.

### DragMode

```vb
Property Get DragMode() As Integer
Property Let DragMode(ByVal Value As Integer)
```

Drag mode.

## Methods

### ShowOpen

```vb
Public Sub ShowOpen()
```

Displays the Open File dialog.

### ShowSave

```vb
Public Sub ShowSave()
```

Displays the Save File dialog.

### CanSave

```vb
Public Function CanSave() As Boolean
```

Determines whether the current media can be saved.

### Eject

```vb
Public Sub Eject()
```

Ejects the current media.

### CanEject

```vb
Public Function CanEject() As Boolean
```

Determines whether the device supports the eject operation.

### PlayFrom

```vb
Public Sub PlayFrom(ByVal StartPosition As Long)
```

Starts playback from the specified position.

### PlayTo

```vb
Public Sub PlayTo(ByVal EndPosition As Long)
```

Plays to the specified position and stops.

### PlayReverse

```vb
Public Sub PlayReverse()
```

Plays in reverse.

### CanPlay

```vb
Public Function CanPlay() As Boolean
```

Determines whether the device supports playback.

### CanRecord

```vb
Public Function CanRecord() As Boolean
```

Determines whether the device supports recording.

### CanConfig

```vb
Public Function CanConfig() As Boolean
```

Determines whether the device supports configuration.

### CanWindow

```vb
Public Function CanWindow() As Boolean
```

Determines whether the device supports window display.

### Drag

```vb
Public Sub Drag([ByRef Action As Variant])
```

Starts, ends, or cancels a drag operation.

### SetFocus

```vb
Public Sub SetFocus()
```

Moves focus to the control.

### ZOrder

```vb
Public Sub ZOrder([ByRef Position As Variant])
```

Sets the Z-order of the control.

### OLEDrag

```vb
Public Sub OLEDrag()
```

Initiates an OLE drag-and-drop operation.

### Refresh

```vb
Public Sub Refresh()
```

Forces a repaint of the control.

## Events

### ModeChange

```vb
Public Event ModeChange()
```

Fired when the device mode changes.

### PositionChange

```vb
Public Event PositionChange()
```

Fired when the current position changes.

### MediaChange

```vb
Public Event MediaChange()
```

Fired when the current media changes.

### Error

```vb
Public Event Error()
```

Fired when an MCI error occurs.

### Notify

```vb
Public Event Notify()
```

MCI operation completion notification.

### Signal

```vb
Public Event Signal()
```

Fired when a signal is received.

### Click

```vb
Public Event Click()
```

Fired when the control is clicked.

### DblClick

```vb
Public Event DblClick()
```

Fired when the control is double-clicked.

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Fired when a mouse button is pressed.

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Fired when a mouse button is released.

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Fired when the mouse is moved.

### MouseEnter

```vb
Public Event MouseEnter()
```

Fired when the mouse enters the control.

### MouseLeave

```vb
Public Event MouseLeave()
```

Fired when the mouse leaves the control.

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Fired when an OLE drag-and-drop operation is completed.

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

Fired when an OLE drag-and-drop operation passes over the control.

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

Fired when the cursor needs to be changed during an OLE drag-and-drop operation.

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

Fired when an OLE drag-and-drop operation starts.

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

Fired when an OLE drag-and-drop operation is completed.

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

Fired when the OLE drop target requests data.

## Code Examples

```vb
' Open and play an AVI file
MCIWnd1.FileName = "C:\video.avi"
MCIWnd1.Playbar = True
MCIWnd1.Command = "play"

' Record audio
MCIWnd1.NewDevice = "waveaudio"
MCIWnd1.Command = "open new"
MCIWnd1.Record = True
MCIWnd1.Command = "record"
```