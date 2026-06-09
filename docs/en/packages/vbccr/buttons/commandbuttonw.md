---
title: CommandButtonW Control
description: CommandButtonW Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '603bf2dc-660b-4c6a-a6c2-a90984b5e621'
  PropagateID: '603bf2dc-660b-4c6a-a6c2-a90984b5e621'
  ReservedCode1: '65af6899-c1e6-4195-b6b2-01eeacbcaf3e'
  ReservedCode2: '65af6899-c1e6-4195-b6b2-01eeacbcaf3e'
---

# CommandButtonW Control

Enhanced CommandButton control with support for visual styles, split button, owner-draw, and coexistence of picture and caption.

## Enumerations

### CmdImageListAlignmentConstants

| Constant | Value | Description |
|----------|-------|-------------|
| CmdImageListAlignmentLeft | 0 | Left alignment |
| CmdImageListAlignmentRight | 1 | Right alignment |
| CmdImageListAlignmentTop | 2 | Top alignment |
| CmdImageListAlignmentBottom | 3 | Bottom alignment |
| CmdImageListAlignmentCenter | 4 | Center alignment |

### CmdDrawModeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| CmdDrawModeNormal | 0 | Normal mode |
| CmdDrawModeOwnerDraw | 1 | Owner-draw mode |

## Properties

### Default
`Property Get Default() As Boolean`
`Property Let Default(ByVal Value As Boolean)`

Whether this is the default button (triggered by Enter key).

### Cancel
`Property Get Cancel() As Boolean`
`Property Let Cancel(ByVal Value As Boolean)`

Whether this is the cancel button (triggered by Esc key).

### VisualStyles
`Property Get VisualStyles() As Boolean`
`Property Let VisualStyles(ByVal Value As Boolean)`

Whether to enable visual styles.

### Appearance
`Property Get Appearance() As CCAppearanceConstants`
`Property Let Appearance(ByVal Value As CCAppearanceConstants)`

Appearance style. See Common Enumerations.

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

Background color.

### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

Foreground color.

### ImageList
`Property Get ImageList() As Variant`
`Property Let ImageList(ByVal Value As Variant)`
`Property Set ImageList(ByVal Value As Variant)`

Associated ImageList control.

### ImageListAlignment
`Property Get ImageListAlignment() As CmdImageListAlignmentConstants`
`Property Let ImageListAlignment(ByVal Value As CmdImageListAlignmentConstants)`

ImageList icon alignment.

### ImageListMargin
`Property Get ImageListMargin() As Single`
`Property Let ImageListMargin(ByVal Value As Single)`

ImageList icon margin.

### Caption
`Property Get Caption() As String`
`Property Let Caption(ByVal Value As String)`

Caption text.

### Alignment
`Property Get Alignment() As VBRUN.AlignmentConstants`
`Property Let Alignment(ByVal Value As VBRUN.AlignmentConstants)`

Horizontal text alignment.

### VerticalAlignment
`Property Get VerticalAlignment() As CCVerticalAlignmentConstants`
`Property Let VerticalAlignment(ByVal Value As CCVerticalAlignmentConstants)`

Vertical text alignment. See Common Enumerations.

### Picture
`Property Get Picture() As IPictureDisp`
`Property Let Picture(ByVal Value As IPictureDisp)`
`Property Set Picture(ByVal Value As IPictureDisp)`

Picture.

### PictureAndCaption
`Property Get PictureAndCaption() As Boolean`
`Property Let PictureAndCaption(ByVal Value As Boolean)`

Whether to display both picture and caption simultaneously. Requires comctl32.dll 6.1 or later.

### WordWrap
`Property Get WordWrap() As Boolean`
`Property Let WordWrap(ByVal Value As Boolean)`

Whether to enable word wrap.

### Transparent
`Property Get Transparent() As Boolean`
`Property Let Transparent(ByVal Value As Boolean)`

Whether to use a transparent background (effective at run time).

### SplitButton
`Property Get SplitButton() As Boolean`
`Property Let SplitButton(ByVal Value As Boolean)`

Whether to display as a split button. Requires comctl32.dll 6.1 or later.

### SplitButtonAlignment
`Property Get SplitButtonAlignment() As CCLeftRightAlignmentConstants`
`Property Let SplitButtonAlignment(ByVal Value As CCLeftRightAlignmentConstants)`

Split button alignment. See Common Enumerations.

### SplitButtonNoSplit
`Property Get SplitButtonNoSplit() As Boolean`
`Property Let SplitButtonNoSplit(ByVal Value As Boolean)`

Whether the split button hides the split line.

### SplitButtonGlyph
`Property Get SplitButtonGlyph() As IPictureDisp`
`Property Let SplitButtonGlyph(ByVal Value As IPictureDisp)`
`Property Set SplitButtonGlyph(ByVal Value As IPictureDisp)`

Drop-down arrow icon for the split button.

### Style
`Property Get Style() As VBRUN.ButtonConstants`
`Property Let Style(ByVal Value As VBRUN.ButtonConstants)`

Button style (standard or graphical).

### DisabledPicture
`Property Get DisabledPicture() As IPictureDisp`
`Property Let DisabledPicture(ByVal Value As IPictureDisp)`
`Property Set DisabledPicture(ByVal Value As IPictureDisp)`

Disabled state picture.

### DownPicture
`Property Get DownPicture() As IPictureDisp`
`Property Let DownPicture(ByVal Value As IPictureDisp)`
`Property Set DownPicture(ByVal Value As IPictureDisp)`

Pressed state picture.

### UseMaskColor
`Property Get UseMaskColor() As Boolean`
`Property Let UseMaskColor(ByVal Value As Boolean)`

Whether to use mask color.

### MaskColor
`Property Get MaskColor() As OLE_COLOR`
`Property Let MaskColor(ByVal Value As OLE_COLOR)`

Mask color.

### DrawMode
`Property Get DrawMode() As CmdDrawModeConstants`
`Property Let DrawMode(ByVal Value As CmdDrawModeConstants)`

Draw mode.

### Value
`Property Get Value() As Boolean`
`Property Let Value(ByVal NewValue As Boolean)`

Button value; setting to True triggers the Click event.

### Pushed
`Property Get Pushed() As Boolean`
`Property Let Pushed(ByVal Value As Boolean)`

Whether the control is in a pressed state.

### Hot
`Property Get Hot() As Boolean`

Whether the control is in a hot state. Read-only.

### DroppedDown
`Property Get DroppedDown() As Boolean`
`Property Let DroppedDown(ByVal Value As Boolean)`

Whether the split button is dropped down.

### hWnd / hWndUserControl / Font / Enabled / OLEDropMode / MousePointer / MouseIcon / MouseTrack / RightToLeft / RightToLeftLayout / RightToLeftMode

See common properties.

### Name / Tag / Parent / Container / Left / Top / Width / Height / Visible / ToolTipText / HelpContextID / WhatsThisHelpID / DragIcon / DragMode

See standard extender properties.

## Methods

### Refresh
`Public Sub Refresh()`

Forces a repaint.

### PerformClick
`Public Sub PerformClick()`

Simulates a user clicking the button.

### SetShield
`Public Function SetShield(ByVal State As Boolean) As Long`

Sets the UAC shield icon. Returns 1 on success. Requires comctl32.dll 6.1 or later.

### GetIdealSize
`Public Sub GetIdealSize(ByRef Width As Single, ByRef Height As Single)`

Gets the ideal size for the button. Requires comctl32.dll 6.0 or later.

### OLEDrag
`Public Sub OLEDrag()`

### Drag / ZOrder / SetFocus / Move

See standard methods.

## Events

### Click
`Public Event Click()`

Single click.

### DblClick
`Public Event DblClick()`

Double click.

### HotChanged
`Public Event HotChanged()`

Hot state changed.

### DropDown
`Public Event DropDown()`

Fired when the split button drops down.

### OwnerDraw
`Public Event OwnerDraw(ByVal DisplayAsDefault As Boolean, ByVal ItemAction As Long, ByVal ItemState As Long, ByVal hDC As LongPtr, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)`

Owner-draw event.

### KeyDown / KeyUp / KeyPress

### MouseDown / MouseMove / MouseUp / MouseEnter / MouseLeave

### OLECompleteDrag / OLEDragDrop / OLEDragOver / OLEGiveFeedback / OLESetData / OLEStartDrag

## Code Examples

### Basic Usage

```vb
' Set as default button
CommandButtonW1.Default = True
CommandButtonW1.Caption = "OK"

' Graphical button
CommandButtonW1.Style = vbButtonGraphical
Set CommandButtonW1.Picture = LoadPicture("ok.bmp")

' Picture and caption coexistence
CommandButtonW1.PictureAndCaption = True
```

### Split Button

```vb
CommandButtonW1.SplitButton = True

Private Sub CommandButtonW1_DropDown()
    ' Display context menu
    PopupMenu mnuOptions
End Sub
```

### UAC Shield Icon

```vb
CommandButtonW1.SetShield True
```

### Get Ideal Size

```vb
Dim w As Single, h As Single
CommandButtonW1.GetIdealSize w, h
CommandButtonW1.Width = w
CommandButtonW1.Height = h
```