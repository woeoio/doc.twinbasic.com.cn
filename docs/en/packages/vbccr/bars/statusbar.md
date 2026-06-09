---
title: StatusBar Control
description: StatusBar Control - VBCCR Developer Reference, complete API documentation based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd04fe776-bfe1-4448-80fc-fdc04733c233'
  PropagateID: 'd04fe776-bfe1-4448-80fc-fdc04733c233'
  ReservedCode1: 'e6be6373-6737-4da6-8cd3-69bd6f5ed93e'
  ReservedCode2: 'e6be6373-6737-4da6-8cd3-69bd6f5ed93e'
---

# StatusBar Control

Provides a customizable status bar, supporting panel collections, simple/normal modes, a sizing grip, and OLE drag-and-drop. Cannot receive focus.

## Enumerations

### SbrStyleConstants

Status bar style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| SbrStyleNormal | 0 | Normal mode (displays panels) |
| SbrStyleSimple | 1 | Simple mode (displays SimpleText only) |

### SbrPanelStyleConstants

Panel style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| SbrPanelStyleText | 0 | Text panel |
| SbrPanelStyleCaps | 1 | Caps Lock state |
| SbrPanelStyleNum | 2 | Num Lock state |
| SbrPanelStyleIns | 3 | Insert state |
| SbrPanelStyleScrl | 4 | Scroll Lock state |
| SbrPanelStyleTime | 5 | Time |
| SbrPanelStyleDate | 6 | Date |
| SbrPanelStyleKana | 7 | Kana state |
| SbrPanelStyleHangul | 8 | Hangul state |
| SbrPanelStyleJunja | 9 | Junja state |
| SbrPanelStyleFinal | 10 | Final state |
| SbrPanelStyleKanji | 11 | Kanji state |
| SbrPanelStyleHanja | 12 | Hanja state |

### SbrPanelBevelConstants

Panel bevel style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| SbrPanelBevelFlat | 0 | Flat |
| SbrPanelBevelInset | 1 | Inset |
| SbrPanelBevelRaised | 2 | Raised |

### SbrPanelAutoSizeConstants

Panel auto-size constants.

| Constant | Value | Description |
|----------|-------|-------------|
| SbrPanelAutoSizeNone | 0 | No auto-size |
| SbrPanelAutoSizeSpring | 1 | Spring (fills remaining space) |
| SbrPanelAutoSizeContent | 2 | Size to content |

### SbrPanelAlignmentConstants

Panel alignment constants.

| Constant | Value | Description |
|----------|-------|-------------|
| SbrPanelAlignmentLeft | 0 | Left aligned |
| SbrPanelAlignmentCenter | 1 | Center aligned |
| SbrPanelAlignmentRight | 2 | Right aligned |
| SbrPanelAlignmentLeftRight | 3 | Left-to-right aligned (RTL support) |

### SbrPanelDTFormatConstants

Panel date/time format constants.

| Constant | Value | Description |
|----------|-------|-------------|
| SbrPanelDTFormatShort | 0 | Short format |
| SbrPanelDTFormatLong | 1 | Long format |

## Properties

### Name

```vb
Public Property Get Name() As String
```

Returns the name used to identify the object in code.

### Tag

```vb
Public Property Get Tag() As String
Public Property Let Tag(ByVal Value As String)
```

Stores extra data needed by the program.

### Parent

```vb
Public Property Get Parent() As Object
```

Returns the object that contains this object.

### Container

```vb
Public Property Get Container() As Object
Public Property Set Container(ByVal Value As Object)
```

Returns/sets the object's container.

### Left

```vb
Public Property Get Left() As Single
Public Property Let Left(ByVal Value As Single)
```

Returns/sets the distance between the object and the left edge of its container.

### Top

```vb
Public Property Get Top() As Single
Public Property Let Top(ByVal Value As Single)
```

Returns/sets the distance between the object and the top edge of its container.

### Width

```vb
Public Property Get Width() As Single
Public Property Let Width(ByVal Value As Single)
```

Returns/sets the width of the object.

### Height

```vb
Public Property Get Height() As Single
Public Property Let Height(ByVal Value As Single)
```

Returns/sets the height of the object.

### Visible

```vb
Public Property Get Visible() As Boolean
Public Property Let Visible(ByVal Value As Boolean)
```

Returns/sets whether the object is visible.

### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

Returns/sets the tooltip text displayed when the mouse hovers over the control.

### WhatsThisHelpID

```vb
Public Property Get WhatsThisHelpID() As Long
Public Property Let WhatsThisHelpID(ByVal Value As Long)
```

Returns/sets the associated context-sensitive help ID.

### Align

```vb
Public Property Get Align() As Integer
Public Property Let Align(ByVal Value As Integer)
```

Returns/sets the alignment of the control on its form.

### DragIcon

```vb
Public Property Get DragIcon() As IPictureDisp
Public Property Let DragIcon(ByVal Value As IPictureDisp)
Public Property Set DragIcon(ByVal Value As IPictureDisp)
```

Returns/sets the icon displayed during a drag-and-drop operation.

### DragMode

```vb
Public Property Get DragMode() As Integer
Public Property Let DragMode(ByVal Value As Integer)
```

Returns/sets the drag mode.

### hWnd

```vb
Public Property Get hWnd() As LongPtr
```

Returns the control handle.

### hWndUserControl

```vb
Public Property Get hWndUserControl() As LongPtr
```

Returns the UserControl handle.

### Font

```vb
Public Property Get Font() As StdFont
Public Property Let Font(ByVal NewFont As StdFont)
Public Property Set Font(ByVal NewFont As StdFont)
```

Returns/sets the font.

### VisualStyles

```vb
Public Property Get VisualStyles() As Boolean
Public Property Let VisualStyles(ByVal Value As Boolean)
```

Returns/sets whether visual styles are enabled. Requires comctl32.dll 6.0 or later.

### Enabled

```vb
Public Property Get Enabled() As Boolean
Public Property Let Enabled(ByVal Value As Boolean)
```

Returns/sets whether the object can respond to user-generated events.

### OLEDropMode

```vb
Public Property Get OLEDropMode() As OLEDropModeConstants
Public Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)
```

Returns/sets whether the object can act as an OLE drop target.

### MousePointer

```vb
Public Property Get MousePointer() As CCMousePointerConstants
Public Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

Returns/sets the pointer type displayed when the mouse hovers over the control. See common enumerations.

### MouseIcon

```vb
Public Property Get MouseIcon() As IPictureDisp
Public Property Let MouseIcon(ByVal Value As IPictureDisp)
Public Property Set MouseIcon(ByVal Value As IPictureDisp)
```

Returns/sets the custom mouse icon.

### MouseTrack

```vb
Public Property Get MouseTrack() As Boolean
Public Property Let MouseTrack(ByVal Value As Boolean)
```

Returns/sets whether events are raised when the mouse enters or leaves the control.

### RightToLeft

```vb
Public Property Get RightToLeft() As Boolean
Public Property Let RightToLeft(ByVal Value As Boolean)
```

Returns/sets the right-to-left display direction.

### RightToLeftLayout

```vb
Public Property Get RightToLeftLayout() As Boolean
Public Property Let RightToLeftLayout(ByVal Value As Boolean)
```

Returns/sets the right-to-left layout.

### RightToLeftMode

```vb
Public Property Get RightToLeftMode() As CCRightToLeftModeConstants
Public Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

Returns/sets the right-to-left mode. See common enumerations.

### Style

```vb
Public Property Get Style() As SbrStyleConstants
Public Property Let Style(ByVal Value As SbrStyleConstants)
```

Returns/sets the status bar style.

### SimpleText

```vb
Public Property Get SimpleText() As String
Public Property Let SimpleText(ByVal Value As String)
```

Returns/sets the text displayed in simple mode.

### AllowSizeGrip

```vb
Public Property Get AllowSizeGrip() As Boolean
Public Property Let AllowSizeGrip(ByVal Value As Boolean)
```

Returns/sets whether the sizing grip is displayed.

### ShowTips

```vb
Public Property Get ShowTips() As Boolean
Public Property Let ShowTips(ByVal Value As Boolean)
```

Returns/sets whether tooltips are displayed.

### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

Returns/sets the background color.

### DoubleBuffer

```vb
Public Property Get DoubleBuffer() As Boolean
Public Property Let DoubleBuffer(ByVal Value As Boolean)
```

Returns/sets whether double-buffered drawing is enabled.

### Panels

```vb
Public Property Get Panels() As SbrPanels
```

Returns the panels collection.

## Methods

### Refresh

```vb
Public Sub Refresh()
```

Forces a complete redraw of the object.

### IncludesSizeGrip

```vb
Public Function IncludesSizeGrip() As Boolean
```

Determines whether the status bar includes a sizing grip.

### HitTest

```vb
Public Function HitTest(ByVal X As Single, ByVal Y As Single) As SbrPanel
```

Returns the panel at the specified coordinates.

### OLEDrag

```vb
Public Sub OLEDrag()
```

Initiates an OLE drag-and-drop operation.

### Drag

```vb
Public Sub Drag(Optional ByRef Action As Variant)
```

Starts, ends, or cancels a drag operation.

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

Sets the Z-order.

## Events

### Click

```vb
Public Event Click()
```

Raised when the user clicks the control.

### DblClick

```vb
Public Event DblClick()
```

Raised when the user double-clicks the control.

### StyleChange

```vb
Public Event StyleChange()
```

Raised when the status bar style changes.

### PanelClick

```vb
Public Event PanelClick(ByVal Panel As SbrPanel, ByVal Button As Integer)
```

Raised when the user clicks a panel.

### PanelDblClick

```vb
Public Event PanelDblClick(ByVal Panel As SbrPanel, ByVal Button As Integer)
```

Raised when the user double-clicks a panel.

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Raised when a mouse button is pressed.

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Raised when the mouse is moved.

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Raised when a mouse button is released.

### MouseEnter

```vb
Public Event MouseEnter()
```

Raised when the mouse enters the control area.

### MouseLeave

```vb
Public Event MouseLeave()
```

Raised when the mouse leaves the control area.

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

Raised when an OLE drag-and-drop operation is completed.

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Raised when an OLE drag-and-drop operation is dropped.

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

Raised during an OLE drag-and-drop hover.

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

Raised when OLE drag-and-drop gives feedback.

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

Raised when OLE drag-and-drop sets data.

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

Raised when an OLE drag-and-drop operation starts.

## Sub-Objects

### SbrPanel Class

Status bar panel object.

#### SbrPanel Properties

#### Index

```vb
Public Property Get Index() As Long
```

The index of the panel in the collection.

#### Key

```vb
Public Property Get Key() As String
Public Property Let Key(ByVal Value As String)
```

The panel's unique identifier key.

#### Tag

```vb
Public Property Get Tag() As Variant
Public Property Let Tag(ByVal Value As Variant)
Public Property Set Tag(ByVal Value As Variant)
```

Extra data.

#### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

Panel text.

#### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

ToolTip text.

#### Style

```vb
Public Property Get Style() As SbrPanelStyleConstants
Public Property Let Style(ByVal Value As SbrPanelStyleConstants)
```

Panel style.

#### Bevel

```vb
Public Property Get Bevel() As SbrPanelBevelConstants
Public Property Let Bevel(ByVal Value As SbrPanelBevelConstants)
```

Panel bevel style.

#### AutoSize

```vb
Public Property Get AutoSize() As SbrPanelAutoSizeConstants
Public Property Let AutoSize(ByVal Value As SbrPanelAutoSizeConstants)
```

Panel auto-size behavior.

#### Alignment

```vb
Public Property Get Alignment() As SbrPanelAlignmentConstants
Public Property Let Alignment(ByVal Value As SbrPanelAlignmentConstants)
```

Panel alignment.

#### DTFormat

```vb
Public Property Get DTFormat() As SbrPanelDTFormatConstants
Public Property Let DTFormat(ByVal Value As SbrPanelDTFormatConstants)
```

Panel date/time format.

#### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

Foreground color.

#### MinWidth

```vb
Public Property Get MinWidth() As Single
Public Property Let MinWidth(ByVal Value As Single)
```

Minimum width.

#### Picture

```vb
Public Property Get Picture() As IPictureDisp
Public Property Let Picture(ByVal Value As IPictureDisp)
Public Property Set Picture(ByVal Value As IPictureDisp)
```

Panel picture.

#### Enabled

```vb
Public Property Get Enabled() As Boolean
Public Property Let Enabled(ByVal Value As Boolean)
```

Whether enabled.

#### Visible

```vb
Public Property Get Visible() As Boolean
Public Property Let Visible(ByVal Value As Boolean)
```

Whether visible.

#### Bold

```vb
Public Property Get Bold() As Boolean
Public Property Let Bold(ByVal Value As Boolean)
```

Whether text is displayed in bold.

#### PictureOnRight

```vb
Public Property Get PictureOnRight() As Boolean
Public Property Let PictureOnRight(ByVal Value As Boolean)
```

Whether the picture is displayed on the right side.

#### Left

```vb
Public Property Get Left() As Single
```

Panel left edge distance (read-only).

#### Width

```vb
Public Property Get Width() As Single
Public Property Let Width(ByVal Value As Single)
```

Panel width.

### SbrPanels Class

Status bar panels collection.

#### SbrPanels Members

#### NewEnum

```vb
Public Function NewEnum() As IEnumVARIANT
```

Enumerator (hidden).

#### Add

```vb
Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Text As String, Optional ByVal Style As SbrPanelStyleConstants) As SbrPanel
```

Adds a panel.

#### Item

```vb
Public Property Get Item(ByVal Index As Variant) As SbrPanel
```

Gets a panel (default member).

#### Exists

```vb
Public Function Exists(ByVal Index As Variant) As Boolean
```

Checks if a panel exists.

#### Count

```vb
Public Property Get Count() As Long
```

Panel count.

#### Clear

```vb
Public Sub Clear()
```

Clears all panels.

#### Remove

```vb
Public Sub Remove(ByVal Index As Variant)
```

Removes a panel.

### SbrPanelProperties Class

Internal panel properties object.

#### SbrPanelProperties Properties

#### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

Foreground color.

## Code Examples

### Basic Usage

```vb
' Add status bar panels
With StatusBar1.Panels
    .Add , "Status", "Ready", sbrText
    .Add , "Caps", , sbrCaps
    .Add , "Time", , sbrTime
End With

' Customize panel style
With StatusBar1.Panels(1)
    .AutoSize = sbrSpring
    .Bevel = sbrInset
End With

' Switch to simple mode
StatusBar1.Style = sbrSimple
StatusBar1.SimpleText = "Loading data..."

' Handle panel click
Private Sub StatusBar1_PanelClick(ByVal Panel As SbrPanel, ByVal Button As Integer)
    Debug.Print "Panel clicked: " & Panel.Key
End Sub
```