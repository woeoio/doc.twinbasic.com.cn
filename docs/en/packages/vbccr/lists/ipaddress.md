---
title: IPAddress Control
description: IPAddress Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'caf1cb81-89c3-44f5-b2df-ac1e239b990e'
  PropagateID: 'caf1cb81-89c3-44f5-b2df-ac1e239b990e'
  ReservedCode1: '15f3d720-a187-4b5b-8f66-de478d1f219a'
  ReservedCode2: '15f3d720-a187-4b5b-8f66-de478d1f219a'
---

# IPAddress Control

Wraps the SysIPAddress32 system control for entering and displaying IPv4 addresses.

## Enumerations

### IPATextConstants

| Constant | Value | Description |
|----------|-------|-------------|
| IPAEmpty | 0 | Empty address |
| IPAInvalid | -1 | Invalid address |

### IPAFocusConstants

| Constant | Value | Description |
|----------|-------|-------------|
| IPAFocusField1 | 0 | Field 1 |
| IPAFocusField2 | 1 | Field 2 |
| IPAFocusField3 | 2 | Field 3 |
| IPAFocusField4 | 3 | Field 4 |

### CCAppearanceConstants

See common enumerations.

### CCBorderStyleConstants

See common enumerations.

### CCMousePointerConstants

See common enumerations.

### CCIMEModeConstants

See common enumerations.

### CCRightToLeftModeConstants

See common enumerations.

### OLEDropModeConstants

See common enumerations.

## Properties

### Text

```vb
Property Get Text() As IPATextConstants
Property Let Text(ByVal Value As IPATextConstants)
```

Numeric representation of the IP address. IPAEmpty (0) indicates an empty address, IPAInvalid (-1) indicates an invalid address.

### Field1

```vb
Property Get Field1() As Byte
Property Let Field1(ByVal Value As Byte)
```

Field 1 value (0-255).

### Field2

```vb
Property Get Field2() As Byte
Property Let Field2(ByVal Value As Byte)
```

Field 2 value (0-255).

### Field3

```vb
Property Get Field3() As Byte
Property Let Field3(ByVal Value As Byte)
```

Field 3 value (0-255).

### Field4

```vb
Property Get Field4() As Byte
Property Let Field4(ByVal Value As Byte)
```

Field 4 value (0-255).

### Field1RangeMin

```vb
Property Get Field1RangeMin() As Byte
Property Let Field1RangeMin(ByVal Value As Byte)
```

Minimum value for field 1. Default is 0.

### Field1RangeMax

```vb
Property Get Field1RangeMax() As Byte
Property Let Field1RangeMax(ByVal Value As Byte)
```

Maximum value for field 1. Default is 255.

### Field2RangeMin

```vb
Property Get Field2RangeMin() As Byte
Property Let Field2RangeMin(ByVal Value As Byte)
```

Minimum value for field 2. Default is 0.

### Field2RangeMax

```vb
Property Get Field2RangeMax() As Byte
Property Let Field2RangeMax(ByVal Value As Byte)
```

Maximum value for field 2. Default is 255.

### Field3RangeMin

```vb
Property Get Field3RangeMin() As Byte
Property Let Field3RangeMin(ByVal Value As Byte)
```

Minimum value for field 3. Default is 0.

### Field3RangeMax

```vb
Property Get Field3RangeMax() As Byte
Property Let Field3RangeMax(ByVal Value As Byte)
```

Maximum value for field 3. Default is 255.

### Field4RangeMin

```vb
Property Get Field4RangeMin() As Byte
Property Let Field4RangeMin(ByVal Value As Byte)
```

Minimum value for field 4. Default is 0.

### Field4RangeMax

```vb
Property Get Field4RangeMax() As Byte
Property Let Field4RangeMax(ByVal Value As Byte)
```

Maximum value for field 4. Default is 255.

### FocusField

```vb
Property Get FocusField() As IPAFocusConstants
Property Let FocusField(ByVal Value As IPAFocusConstants)
```

Current focus field.

### BorderStyle

```vb
Property Get BorderStyle() As CCBorderStyleConstants
Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

Border style. See common enumerations.

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

### BackColor

```vb
Property Get BackColor() As OLE_COLOR
Property Let BackColor(ByVal Value As OLE_COLOR)
```

Background color.

### ForeColor

```vb
Property Get ForeColor() As OLE_COLOR
Property Let ForeColor(ByVal Value As OLE_COLOR)
```

Foreground color.

### MousePointer

```vb
Property Get MousePointer() As CCMousePointerConstants
Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

Mouse pointer style. See common enumerations.

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

Whether to enable mouse enter/leave tracking.

### RightToLeft

```vb
Property Get RightToLeft() As Boolean
Property Let RightToLeft(ByVal Value As Boolean)
```

Right-to-left display direction.

### RightToLeftLayout

```vb
Property Get RightToLeftLayout() As Boolean
Property Let RightToLeftLayout(ByVal Value As Boolean)
```

Right-to-left mirrored layout.

### RightToLeftMode

```vb
Property Get RightToLeftMode() As CCRightToLeftModeConstants
Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

Right-to-left mode. See common enumerations.

### IMEMode

```vb
Property Get IMEMode() As CCIMEModeConstants
Property Let IMEMode(ByVal Value As CCIMEModeConstants)
```

Input method editor mode. See common enumerations.

### OLEDropMode

```vb
Property Get OLEDropMode() As OLEDropModeConstants
Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)
```

OLE drag-drop mode. See common enumerations.

### Appearance

```vb
Property Get Appearance() As CCAppearanceConstants
Property Let Appearance(ByVal Value As CCAppearanceConstants)
```

Appearance style. See common enumerations.

### hWnd

```vb
Property Get hWnd() As LongPtr
```

Window handle of the IP address control. Read-only.

### ToolTipText

```vb
Property Get ToolTipText() As String
Property Let ToolTipText(ByVal Value As String)
```

Tooltip text.

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

Window handle of the UserControl. Read-only.

### Name

```vb
Property Get Name() As String
```

Control name. Read-only.

### Tag

```vb
Property Get Tag() As Variant
Property Let Tag(ByVal Value As Variant)
Property Set Tag(ByVal Value As Variant)
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

Left position.

### Top

```vb
Property Get Top() As Single
Property Let Top(ByVal Value As Single)
```

Top position.

### Width

```vb
Property Get Width() As Single
Property Let Width(ByVal Value As Single)
```

Width (used at design time).

### Height

```vb
Property Get Height() As Single
Property Let Height(ByVal Value As Single)
```

Height (used at design time).

### Visible

```vb
Property Get Visible() As Boolean
Property Let Visible(ByVal Value As Boolean)
```

Visibility.

## Methods

### Refresh

```vb
Sub Refresh()
```

Forces a redraw.

### Clear

```vb
Sub Clear()
```

Clears the IP address, setting all fields to empty.

### SetFocusField

```vb
Sub SetFocusField(ByVal FocusField As IPAFocusConstants)
```

Sets focus to the specified field.

### AboutBox

```vb
Sub AboutBox()
```

Displays the About dialog.

## Events

### Change

```vb
Event Change()
```

Fired when the IP address changes.

### FieldChange

```vb
Event FieldChange(ByVal Field As Integer)
```

Fired when a specific field changes.

### KeyDown

```vb
Event KeyDown(KeyCode As Integer, Shift As Integer)
```

Fired when a key is pressed.

### KeyUp

```vb
Event KeyUp(KeyCode As Integer, Shift As Integer)
```

Fired when a key is released.

### KeyPress

```vb
Event KeyPress(KeyChar As Integer)
```

Fired on key input.

### Click

```vb
Event Click()
```

Fired on click.

### DblClick

```vb
Event DblClick()
```

Fired on double-click.

### MouseDown

```vb
Event MouseDown(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)
```

Fired when a mouse button is pressed.

### MouseUp

```vb
Event MouseUp(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)
```

Fired when a mouse button is released.

### MouseMove

```vb
Event MouseMove(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)
```

Fired when the mouse is moved.

### MouseEnter

```vb
Event MouseEnter()
```

Fired when the mouse enters the control.

### MouseLeave

```vb
Event MouseLeave()
```

Fired when the mouse leaves the control.

### OLEStartDrag

```vb
Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

Fired when an OLE drag starts.

### OLEGiveFeedback

```vb
Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

OLE drag feedback.

### OLESetData

```vb
Event OLESetData(Data As DataObject, DataFormat As Integer)
```

OLE set data.

### OLECompleteDrag

```vb
Event OLECompleteDrag(Effect As Long)
```

OLE drag completed.

### OLEDragOver

```vb
Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

Fired when an OLE drag passes over.

### OLEDragDrop

```vb
Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Fired on OLE drag-drop.

## Code Examples

```vb
' Set IP address (numeric form)
IPAddress1.Text = &H0100007F  ' 127.0.0.1

' Set field by field
IPAddress1.Field1 = 192
IPAddress1.Field2 = 168
IPAddress1.Field3 = 1
IPAddress1.Field4 = 100

' Read IP address
If IPAddress1.Text <> IPAEmpty Then
    MsgBox "IP: " & IPAddress1.Field1 & "." & IPAddress1.Field2 & "." & _
           IPAddress1.Field3 & "." & IPAddress1.Field4
End If

' Set field range limits
IPAddress1.Field1RangeMin = 10
IPAddress1.Field1RangeMax = 192

' Listen for changes
Private Sub IPAddress1_FieldChange(ByVal Field As Integer)
    Debug.Print "Field " & Field & " changed"
End Sub
```