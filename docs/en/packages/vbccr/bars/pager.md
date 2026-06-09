---
title: Pager Control
description: Pager Control - VBCCR Developer Reference, complete API documentation based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9bc2b0a1-f204-42d5-aff9-5d90308d1a6b'
  PropagateID: '9bc2b0a1-f204-42d5-aff9-5d90308d1a6b'
  ReservedCode1: '5f43793a-efdb-4181-82bf-c7f2f743d413'
  ReservedCode2: '5f43793a-efdb-4181-82bf-c7f2f743d413'
---

# Pager Control

Wraps the SysPager system pager control, used to create scrollable control areas by scrolling an associated buddy control via left/right or up/down buttons.

## Enumerations

### PgrOrientationConstants

| Constant | Value | Description |
|----------|-------|-------------|
| PgrOrientationHorizontal | 0 | Horizontal orientation |
| PgrOrientationVertical | 1 | Vertical orientation |

### PgrDirectionConstants

| Constant | Value | Description |
|----------|-------|-------------|
| PgrDirectionLeft | 0 | Scroll left |
| PgrDirectionRight | 1 | Scroll right |
| PgrDirectionUp | 2 | Scroll up |
| PgrDirectionDown | 3 | Scroll down |

### PgrButtonConstants

| Constant | Value | Description |
|----------|-------|-------------|
| PgrButtonLeftTop | 0 | Left/top button |
| PgrButtonRightBottom | 1 | Right/bottom button |

### PgrButtonStateConstants

| Constant | Value | Description |
|----------|-------|-------------|
| PgrButtonStateNormal | 0 | Normal |
| PgrButtonStateInvisible | 1 | Hidden |
| PgrButtonStateGrayed | 2 | Grayed (disabled) |
| PgrButtonStateInactive | 4 | Inactive |
| PgrButtonStateHot | 8 | Hot |

### CCMousePointerConstants

See common enumerations.

## Properties

### BuddyControl

```vb
Property Get BuddyControl() As Variant
Property Let BuddyControl(ByVal Value As Variant)
```

Associated buddy control. Can accept a control object, a control name, or an hWnd.

### Orientation

```vb
Property Get Orientation() As PgrOrientationConstants
Property Let Orientation(ByVal Value As PgrOrientationConstants)
```

Pager control orientation.

### BorderWidth

```vb
Property Get BorderWidth() As Long
Property Let BorderWidth(ByVal Value As Long)
```

Border width (pixels).

### AutoScroll

```vb
Property Get AutoScroll() As Boolean
Property Let AutoScroll(ByVal Value As Boolean)
```

Whether automatic scrolling is enabled.

### ButtonSize

```vb
Property Get ButtonSize() As Long
Property Let ButtonSize(ByVal Value As Long)
```

Button size (pixels).

### OLEDragDropScroll

```vb
Property Get OLEDragDropScroll() As Boolean
Property Let OLEDragDropScroll(ByVal Value As Boolean)
```

Whether automatic scrolling is enabled during OLE drag-and-drop.

### Value

```vb
Property Get Value() As Single
Property Let Value(ByVal Value As Single)
```

Current scroll position.

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

Window handle of the pager control.

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

Right-to-left mode. See common enumerations.

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

Left edge distance.

### Top

```vb
Property Get Top() As Single
Property Let Top(ByVal Value As Single)
```

Top edge distance.

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

Whether visible.

### ToolTipText

```vb
Property Get ToolTipText() As String
Property Let ToolTipText(ByVal Value As String)
```

ToolTip text.

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

"What's This" help ID.

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

### ReCalcSize

```vb
Public Sub ReCalcSize()
```

Recalculates the size of the pager control and the buddy control.

### GetButtonState

```vb
Public Function GetButtonState(ByVal Button As PgrButtonConstants) As PgrButtonStateConstants
```

Returns the state of the specified button.

### Drag

```vb
Public Sub Drag([ByRef Action As Variant])
```

Starts, ends, or cancels a drag-and-drop operation.

### SetFocus

```vb
Public Sub SetFocus()
```

Sets focus to the control.

### ZOrder

```vb
Public Sub ZOrder([ByRef Position As Variant])
```

Sets the control's Z-order.

### OLEDrag

```vb
Public Sub OLEDrag()
```

Initiates an OLE drag-and-drop operation.

### Refresh

```vb
Public Sub Refresh()
```

Forces a redraw of the control.

## Events

### Scroll

```vb
Public Event Scroll()
```

Raised when the scroll position changes.

### CalcSize

```vb
Public Event CalcSize()
```

Raised before the buddy control size needs to be recalculated.

### HotChanged

```vb
Public Event HotChanged()
```

Raised when a button's hot state changes.

### Click

```vb
Public Event Click()
```

Raised when the control is clicked.

### DblClick

```vb
Public Event DblClick()
```

Raised when the control is double-clicked.

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Raised when a mouse button is pressed.

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Raised when a mouse button is released.

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Raised when the mouse is moved.

### MouseEnter

```vb
Public Event MouseEnter()
```

Raised when the mouse enters the control.

### MouseLeave

```vb
Public Event MouseLeave()
```

Raised when the mouse leaves the control.

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Raised when an OLE drag-and-drop operation completes.

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

Raised when an OLE drag-and-drop operation passes over the control.

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

Raised when an OLE drag-and-drop operation needs to change the cursor.

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

Raised when an OLE drag-and-drop operation starts.

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

Raised when an OLE drag-and-drop operation completes.

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

Raised when an OLE drop target requests data.

## Code Examples

```vb
' Set up a horizontal pager control with a picture box as the buddy
Pager1.Orientation = PgrOrientationHorizontal
Set Pager1.BuddyControl = Picture1
Pager1.ButtonSize = 16
Call Pager1.ReCalcSize
```