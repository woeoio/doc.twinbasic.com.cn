---
title: CommandLink Control
description: CommandLink Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1ed5a753-ab2a-4f89-b1fd-63103e16f871'
  PropagateID: '1ed5a753-ab2a-4f89-b1fd-63103e16f871'
  ReservedCode1: '83200861-c61d-4459-ac22-6968fd73ddb2'
  ReservedCode2: '83200861-c61d-4459-ac22-6968fd73ddb2'
---

# CommandLink Control

Windows CommandLink button control that displays a caption, hint text, and an optional icon.

## Enumerations

No control-specific enumerations.

## Properties

### Default
`Property Get Default() As Boolean`
`Property Let Default(ByVal Value As Boolean)`

Whether this is the default button.

### Cancel
`Property Get Cancel() As Boolean`
`Property Let Cancel(ByVal Value As Boolean)`

Whether this is the cancel button.

### VisualStyles
`Property Get VisualStyles() As Boolean`
`Property Let VisualStyles(ByVal Value As Boolean)`

Whether to enable visual styles.

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

Background color.

### ImageList
`Property Get ImageList() As Variant`
`Property Let ImageList(ByVal Value As Variant)`
`Property Set ImageList(ByVal Value As Variant)`

Associated ImageList control.

### Caption
`Property Get Caption() As String`
`Property Let Caption(ByVal Value As String)`

Caption text.

### Hint
`Property Get Hint() As String`
`Property Let Hint(ByVal Value As String)`

Hint text (description text below the caption).

### Picture
`Property Get Picture() As IPictureDisp`
`Property Let Picture(ByVal Value As IPictureDisp)`
`Property Set Picture(ByVal Value As IPictureDisp)`

Icon.

### Transparent
`Property Get Transparent() As Boolean`
`Property Let Transparent(ByVal Value As Boolean)`

Transparent background (effective at run time).

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

Right-to-left mode. See Common Enumerations.

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

### hWnd / hWndUserControl / Font / Enabled / OLEDropMode / MousePointer / MouseIcon / MouseTrack

See common properties.

### Name / Tag / Parent / Container / Left / Top / Width / Height / Visible / ToolTipText / HelpContextID / WhatsThisHelpID / DragIcon / DragMode

See standard extender properties.

## Methods

### Refresh
`Public Sub Refresh()`

Forces a repaint.

### PerformClick
`Public Sub PerformClick()`

Simulates a user click.

### SetShield
`Public Function SetShield(ByVal State As Boolean) As Long`

Sets the UAC shield icon. Returns 1 on success.

### GetIdealHeight
`Public Function GetIdealHeight() As Single`

Gets the ideal height for the control.

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

### KeyDown / KeyUp / KeyPress

### MouseDown / MouseMove / MouseUp / MouseEnter / MouseLeave

### OLECompleteDrag / OLEDragDrop / OLEDragOver / OLEGiveFeedback / OLESetData / OLEStartDrag

## Code Examples

### Basic Usage

```vb
' Set up a CommandLink
CommandLink1.Caption = "Save File"
CommandLink1.Hint = "Save the current document to disk"
CommandLink1.Default = True

' Set UAC shield icon
CommandLink1.SetShield True

' Get ideal height and adjust
CommandLink1.Height = CommandLink1.GetIdealHeight
```

### Responding to Clicks

```vb
Private Sub CommandLink1_Click()
    MsgBox "You clicked: " & CommandLink1.Caption
End Sub
```