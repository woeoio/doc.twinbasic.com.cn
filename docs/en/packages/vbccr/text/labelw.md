---
title: LabelW Control
description: LabelW Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '358b3952-681b-4350-84c5-b3c3d745808d'
  PropagateID: '358b3952-681b-4350-84c5-b3c3d745808d'
  ReservedCode1: '71000174-1a9a-4389-b1ad-9e8b4ff3e03c'
  ReservedCode2: '71000174-1a9a-4389-b1ad-9e8b4ff3e03c'
---

# LabelW Control

Enhanced Unicode label control, replacing the standard VB6 Label control, providing text effects, border effects, mouse tracking, and other enhanced features.

## Enumerations

### LblTextEffectsConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LblTextEffectNone | 0 | No effect |
| LblTextEffectShadow | 1 | Shadow |
| LblTextEffectEmboss | 2 | Emboss |
| LblTextEffectEngrave | 3 | Engrave |

### LblBorderEffectsConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LblBorderEffectNone | 0 | No border effect |
| LblBorderEffectSoftEdge | 1 | Soft edge |
| LblBorderEffectEtched | 2 | Etched |

### CCBackStyleConstants

See common enumerations.

### CCAppearanceConstants

See common enumerations.

### CCBorderStyleConstants

See common enumerations.

### CCMousePointerConstants

See common enumerations.

### CCVerticalAlignmentConstants

See common enumerations.

### CCRightToLeftModeConstants

See common enumerations.

## Properties

### Alignment

```vb
Property Get Alignment() As Long
Property Let Alignment(ByVal Value As Long)
```

Text alignment. 0 = Left-aligned, 1 = Right-aligned, 2 = Centered.

### AutoSize

```vb
Property Get AutoSize() As Boolean
Property Let AutoSize(ByVal Value As Boolean)
```

Whether to automatically resize to fit the content.

### BackColor

```vb
Property Get BackColor() As OLE_COLOR
Property Let BackColor(ByVal Value As OLE_COLOR)
```

The background color.

### BackStyle

```vb
Property Get BackStyle() As CCBackStyleConstants
Property Let BackStyle(ByVal Value As CCBackStyleConstants)
```

The background style. See common enumerations.

### BorderStyle

```vb
Property Get BorderStyle() As CCBorderStyleConstants
Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

The border style. See common enumerations.

### Caption

```vb
Property Get Caption() As String
Property Let Caption(ByVal Value As String)
```

The display text.

### Enabled

```vb
Property Get Enabled() As Boolean
Property Let Enabled(ByVal Value As Boolean)
```

Whether the control is enabled.

### Font

```vb
Property Get Font() As StdFont
Property Let Font(ByVal NewFont As StdFont)
Property Set Font(ByVal NewFont As StdFont)
```

The font.

### ForeColor

```vb
Property Get ForeColor() As OLE_COLOR
Property Let ForeColor(ByVal Value As OLE_COLOR)
```

The foreground color.

### MousePointer

```vb
Property Get MousePointer() As CCMousePointerConstants
Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

The mouse pointer style. See common enumerations.

### MouseIcon

```vb
Property Get MouseIcon() As IPictureDisp
Property Let MouseIcon(ByVal Value As IPictureDisp)
Property Set MouseIcon(ByVal Value As IPictureDisp)
```

The custom mouse icon.

### MouseTrack

```vb
Property Get MouseTrack() As Boolean
Property Let MouseTrack(ByVal Value As Boolean)
```

Whether mouse enter/leave tracking is enabled.

### UseMnemonic

```vb
Property Get UseMnemonic() As Boolean
Property Let UseMnemonic(ByVal Value As Boolean)
```

Whether the & character is interpreted as an accelerator prefix.

### TextEffect

```vb
Property Get TextEffect() As LblTextEffectsConstants
Property Let TextEffect(ByVal Value As LblTextEffectsConstants)
```

The text effect.

### TextEffectColor

```vb
Property Get TextEffectColor() As OLE_COLOR
Property Let TextEffectColor(ByVal Value As OLE_COLOR)
```

The text effect color.

### BorderEffect

```vb
Property Get BorderEffect() As LblBorderEffectsConstants
Property Let BorderEffect(ByVal Value As LblBorderEffectsConstants)
```

The border effect.

### BorderEffectColor

```vb
Property Get BorderEffectColor() As OLE_COLOR
Property Let BorderEffectColor(ByVal Value As OLE_COLOR)
```

The border effect color.

### WordWrap

```vb
Property Get WordWrap() As Boolean
Property Let WordWrap(ByVal Value As Boolean)
```

Whether text wraps automatically.

### RightToLeft

```vb
Property Get RightToLeft() As Boolean
Property Let RightToLeft(ByVal Value As Boolean)
```

The right-to-left display direction.

### RightToLeftLayout

```vb
Property Get RightToLeftLayout() As Boolean
Property Let RightToLeftLayout(ByVal Value As Boolean)
```

The right-to-left mirrored layout.

### RightToLeftMode

```vb
Property Get RightToLeftMode() As CCRightToLeftModeConstants
Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

The right-to-left mode. See common enumerations.

### Appearance

```vb
Property Get Appearance() As CCAppearanceConstants
Property Let Appearance(ByVal Value As CCAppearanceConstants)
```

The appearance style. See common enumerations.

### VerticalAlignment

```vb
Property Get VerticalAlignment() As CCVerticalAlignmentConstants
Property Let VerticalAlignment(ByVal Value As CCVerticalAlignmentConstants)
```

The vertical alignment. See common enumerations.

### hWnd

```vb
Property Get hWnd() As LongPtr
```

The window handle. Read-only.

### ToolTipText

```vb
Property Get ToolTipText() As String
Property Let ToolTipText(ByVal Value As String)
```

The tooltip text.

### Name

```vb
Property Get Name() As String
```

The control name. Read-only.

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

The parent object. Read-only.

### Container

```vb
Property Get Container() As Object
Property Set Container(ByVal Value As Object)
```

The container object.

### Left

```vb
Property Get Left() As Single
Property Let Left(ByVal Value As Single)
```

The left margin.

### Top

```vb
Property Get Top() As Single
Property Let Top(ByVal Value As Single)
```

The top margin.

### Width

```vb
Property Get Width() As Single
Property Let Width(ByVal Value As Single)
```

The width.

### Height

```vb
Property Get Height() As Single
Property Let Height(ByVal Value As Single)
```

The height.

### Visible

```vb
Property Get Visible() As Boolean
Property Let Visible(ByVal Value As Boolean)
```

The visibility.

## Methods

### Refresh

```vb
Sub Refresh()
```

Forces a repaint.

### AboutBox

```vb
Sub AboutBox()
```

Displays the About dialog.

## Events

### Click

```vb
Event Click()
```

Occurs when the control is clicked.

### DblClick

```vb
Event DblClick()
```

Occurs when the control is double-clicked.

### MouseDown

```vb
Event MouseDown(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)
```

Occurs when a mouse button is pressed.

### MouseUp

```vb
Event MouseUp(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)
```

Occurs when a mouse button is released.

### MouseMove

```vb
Event MouseMove(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)
```

Occurs when the mouse is moved.

### MouseEnter

```vb
Event MouseEnter()
```

Occurs when the mouse enters the control.

### MouseLeave

```vb
Event MouseLeave()
```

Occurs when the mouse leaves the control.

### OLEStartDrag

```vb
Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

Occurs when an OLE drag operation starts.

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

Occurs when data is dragged over during an OLE drag operation.

### OLEDragDrop

```vb
Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Occurs when data is dropped during an OLE drag-and-drop operation.

## Code Examples

```vb
' Label with shadow effect
With LabelW1
    .Caption = "Welcome to VBCCR"
    .TextEffect = LblTextEffectShadow
    .TextEffectColor = vbGrayText
    .Font.Size = 14
    .Font.Bold = True
End With

' Respond to mouse enter/leave
Private Sub LabelW1_MouseEnter()
    LabelW1.ForeColor = vbBlue
End Sub

Private Sub LabelW1_MouseLeave()
    LabelW1.ForeColor = vbWindowText
End Sub

' Vertically centered label with etched border
With LabelW2
    .Caption = "Settings"
    .VerticalAlignment = ccVCenter
    .BorderEffect = LblBorderEffectEtched
    .BorderEffectColor = vb3DShadow
End With
```