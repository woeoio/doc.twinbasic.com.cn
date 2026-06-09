---
title: TabStrip Control
description: TabStrip Control - VBCCR Developer Reference, complete API documentation based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '837c0ae0-e414-4fe8-bc17-7cb082dc165f'
  PropagateID: '837c0ae0-e414-4fe8-bc17-7cb082dc165f'
  ReservedCode1: '03797bd3-af12-4f36-8d24-ca5539dcfccd'
  ReservedCode2: '03797bd3-af12-4f36-8d24-ca5539dcfccd'
---

# TabStrip Control

Provides a customizable tab container, supporting multiple placement positions, multi-row tabs, separators, owner-draw, and OLE drag-and-drop.

## Enumerations

### TbsPlacementConstants

Tab placement position constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TbsPlacementTop | 0 | Top placement |
| TbsPlacementBottom | 1 | Bottom placement |
| TbsPlacementLeft | 2 | Left placement |
| TbsPlacementRight | 3 | Right placement |

### TbsStyleConstants

Tab control style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TbsStyleTab | 0 | Standard tab style |
| TbsStyleButton | 1 | Button style |
| TbsStyleFlatButton | 2 | Flat button style |

### TbsTabStyleConstants

Tab label style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TbsTabStyleTab | 0 | Standard label style |
| TbsTabStyleButton | 1 | Button label style |

### TbsTabWidthStyleConstants

Tab width style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TbsTabWidthStyleJustified | 0 | Auto size to label width |
| TbsTabWidthStyleFixed | 1 | Fixed width |
| TbsTabWidthStyleVariable | 2 | Variable width |

### TbsTabAlignmentConstants

Tab label alignment constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TbsTabAlignmentNear | 0 | Aligned near the leading edge |
| TbsTabAlignmentCenter | 1 | Center aligned |
| TbsTabAlignmentFar | 2 | Aligned near the trailing edge |

### TbsHitResultConstants

Hit test result constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TbsHitNowhere | 0 | No tab hit |
| TbsHitTab | 1 | Tab hit |
| TbsHitDivider | 2 | Divider hit |
| TbsHitDisplay | 3 | Display area hit |

### TbsDrawModeConstants

Owner-draw mode constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TbsDrawModeNormal | 0 | Normal drawing |
| TbsDrawModeOwnerDraw | 1 | Owner-draw mode |

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

Returns/sets the drag mode (manual or automatic).

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

### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

Returns/sets the background color.

### ImageList

```vb
Public Property Get ImageList() As Variant
Public Property Let ImageList(ByVal Value As Variant)
Public Property Set ImageList(ByVal Value As Variant)
```

Returns/sets the associated ImageList control. Can be an object reference, a string key name, or a LongPtr handle.

### Placement

```vb
Public Property Get Placement() As TbsPlacementConstants
Public Property Let Placement(ByVal Value As TbsPlacementConstants)
```

Returns/sets the tab placement position.

### MultiRow

```vb
Public Property Get MultiRow() As Boolean
Public Property Let MultiRow(ByVal Value As Boolean)
```

Returns/sets whether multiple rows of tabs are allowed.

### MultiSelect

```vb
Public Property Get MultiSelect() As Boolean
Public Property Let MultiSelect(ByVal Value As Boolean)
```

Returns/sets whether multiple tabs can be selected.

### HotTracking

```vb
Public Property Get HotTracking() As Boolean
Public Property Let HotTracking(ByVal Value As Boolean)
```

Returns/sets whether hot tracking is enabled.

### Style

```vb
Public Property Get Style() As TbsStyleConstants
Public Property Let Style(ByVal Value As TbsStyleConstants)
```

Returns/sets the tab control style.

### TabStyle

```vb
Public Property Get TabStyle() As TbsTabStyleConstants
Public Property Let TabStyle(ByVal Value As TbsTabStyleConstants)
```

Returns/sets the tab label style.

### TabWidthStyle

```vb
Public Property Get TabWidthStyle() As TbsTabWidthStyleConstants
Public Property Let TabWidthStyle(ByVal Value As TbsTabWidthStyleConstants)
```

Returns/sets the tab width style.

### TabFixedWidth

```vb
Public Property Get TabFixedWidth() As Single
Public Property Let TabFixedWidth(ByVal Value As Single)
```

Returns/sets the tab width in fixed width style.

### TabFixedHeight

```vb
Public Property Get TabFixedHeight() As Single
Public Property Let TabFixedHeight(ByVal Value As Single)
```

Returns/sets the tab height in fixed height style.

### TabMinWidth

```vb
Public Property Get TabMinWidth() As Single
Public Property Let TabMinWidth(ByVal Value As Single)
```

Returns/sets the minimum tab width.

### TabAlignment

```vb
Public Property Get TabAlignment() As TbsTabAlignmentConstants
Public Property Let TabAlignment(ByVal Value As TbsTabAlignmentConstants)
```

Returns/sets the tab label alignment.

### Separators

```vb
Public Property Get Separators() As Boolean
Public Property Let Separators(ByVal Value As Boolean)
```

Returns/sets whether separators are displayed between tabs.

### ShowTips

```vb
Public Property Get ShowTips() As Boolean
Public Property Let ShowTips(ByVal Value As Boolean)
```

Returns/sets whether tooltips are displayed.

### DrawMode

```vb
Public Property Get DrawMode() As TbsDrawModeConstants
Public Property Let DrawMode(ByVal Value As TbsDrawModeConstants)
```

Returns/sets the draw mode.

### TabScrollWheel

```vb
Public Property Get TabScrollWheel() As Boolean
Public Property Let TabScrollWheel(ByVal Value As Boolean)
```

Returns/sets whether the mouse scroll wheel can be used to switch tabs.

### DoubleBuffer

```vb
Public Property Get DoubleBuffer() As Boolean
Public Property Let DoubleBuffer(ByVal Value As Boolean)
```

Returns/sets whether double-buffered drawing is enabled.

### Transparent

```vb
Public Property Get Transparent() As Boolean
Public Property Let Transparent(ByVal Value As Boolean)
```

Returns/sets whether the tab control is transparent.

### Tabs

```vb
Public Property Get Tabs() As TbsTabs
```

Returns the tabs collection.

### ClientLeft

```vb
Public Property Get ClientLeft() As Single
```

Returns the left edge distance of the client area.

### ClientTop

```vb
Public Property Get ClientTop() As Single
```

Returns the top edge distance of the client area.

### ClientWidth

```vb
Public Property Get ClientWidth() As Single
```

Returns the width of the client area.

### ClientHeight

```vb
Public Property Get ClientHeight() As Single
```

Returns the height of the client area.

### SelectedItem

```vb
Public Property Get SelectedItem() As TbsTab
Public Property Let SelectedItem(ByVal Value As TbsTab)
```

Returns/sets the currently selected tab.

### RowCount

```vb
Public Property Get RowCount() As Long
```

Returns the number of tab rows.

## Methods

### Refresh

```vb
Public Sub Refresh()
```

Forces a complete redraw of the object.

### DeselectAll

```vb
Public Sub DeselectAll()
```

Deselects all tabs.

### HitTest

```vb
Public Function HitTest(ByVal X As Single, ByVal Y As Single) As TbsHitResultConstants
```

Performs a hit test at the specified coordinates and returns the hit result.

### DrawBackground

```vb
Public Sub DrawBackground(ByVal hdc As LongPtr, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
```

Draws the tab control background in the specified device context.

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

### SetFocus

```vb
Public Sub SetFocus()
```

Sets focus to the control.

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

Sets the Z-order.

## Events

### TabBeforeClick

```vb
Public Event TabBeforeClick(ByVal Tab As TbsTab, ByRef Cancel As Boolean)
```

Raised before a tab is about to be clicked. Set Cancel to True to prevent the switch.

### TabClick

```vb
Public Event TabClick(ByVal Tab As TbsTab)
```

Raised when a tab is clicked.

### ItemDraw

```vb
Public Event ItemDraw(ByVal Index As Long, ByVal ItemData As Long, ByVal hdc As LongPtr, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
```

Raised when a tab is drawn in owner-draw mode.

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(KeyCode As Integer, Shift As Integer)
```

Raised before the KeyDown event, for preprocessing keyboard input.

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(KeyCode As Integer, Shift As Integer)
```

Raised before the KeyUp event.

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

Raised when a keyboard key is pressed.

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

Raised when a keyboard key is released.

### KeyPress

```vb
Public Event KeyPress(KeyAscii As Integer)
```

Raised when an ANSI key is pressed and released.

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

### TbsTab Class

Tab object.

#### TbsTab Properties

#### Index

```vb
Public Property Get Index() As Long
```

The index of the tab in the collection.

#### Key

```vb
Public Property Get Key() As String
Public Property Let Key(ByVal Value As String)
```

The tab's unique identifier key.

#### Tag

```vb
Public Property Get Tag() As Variant
Public Property Let Tag(ByVal Value As Variant)
```

Extra data.

#### Caption

```vb
Public Property Get Caption() As String
Public Property Let Caption(ByVal Value As String)
```

Tab caption.

#### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

ToolTip text.

#### Image

```vb
Public Property Get Image() As Variant
Public Property Let Image(ByVal Value As Variant)
```

Tab image.

#### ImageIndex

```vb
Public Property Get ImageIndex() As Long
```

Image index.

#### Selected

```vb
Public Property Get Selected() As Boolean
Public Property Let Selected(ByVal Value As Boolean)
```

Whether selected.

#### Pressed

```vb
Public Property Get Pressed() As Boolean
Public Property Let Pressed(ByVal Value As Boolean)
```

Whether pressed.

#### HighLighted

```vb
Public Property Get HighLighted() As Boolean
Public Property Let HighLighted(ByVal Value As Boolean)
```

Whether highlighted.

#### Left

```vb
Public Property Get Left() As Single
```

Tab left edge distance.

#### Top

```vb
Public Property Get Top() As Single
```

Tab top edge distance.

#### Width

```vb
Public Property Get Width() As Single
```

Tab width.

#### Height

```vb
Public Property Get Height() As Single
```

Tab height.

### TbsTabs Class

Tabs collection.

#### TbsTabs Members

#### NewEnum

```vb
Public Function NewEnum() As IUnknown
```

Enumerator (hidden).

#### Add

```vb
Public Function Add(Optional ByVal Index As Variant, Optional ByVal Key As Variant, Optional ByVal Caption As Variant, Optional ByVal Image As Variant) As TbsTab
```

Adds a tab.

#### Item

```vb
Public Function Item(ByVal Index As Variant) As TbsTab
```

Gets a tab (default member).

#### Exists

```vb
Public Function Exists(ByVal Index As Variant) As Boolean
```

Checks if a tab exists.

#### Count

```vb
Public Property Get Count() As Long
```

Tab count.

#### Clear

```vb
Public Sub Clear()
```

Clears all tabs.

#### Remove

```vb
Public Sub Remove(ByVal Index As Variant)
```

Removes a tab.

## Code Examples

### Basic Usage

```vb
' Create tabs
With TabStrip1.Tabs
    .Add , "Tab1", "General"
    .Add , "Tab2", "Advanced"
    .Add , "Tab3", "About"
End With

' Set tab style
TabStrip1.Placement = TbsPlacementTop
TabStrip1.Style = TbsStyleTab
TabStrip1.TabWidthStyle = TbsTabWidthStyleFixed
TabStrip1.TabFixedWidth = 80
TabStrip1.MultiRow = False
TabStrip1.HotTracking = True

' Handle tab switching
Private Sub TabStrip1_TabBeforeClick(ByVal Tab As TbsTab, ByRef Cancel As Boolean)
    If Tab.Key = "Tab3" Then
        Cancel = True
        MsgBox "This tab is disabled"
    End If
End Sub

Private Sub TabStrip1_TabClick(ByVal Tab As TbsTab)
    MsgBox "Selected tab: " & Tab.Caption
End Sub

' Use client area to position child controls
Private Sub TabStrip1_TabClick(ByVal Tab As TbsTab)
    Dim l As Single, t As Single
    l = TabStrip1.ClientLeft
    t = TabStrip1.ClientTop
    Frame1.Move l, t, TabStrip1.ClientWidth, TabStrip1.ClientHeight
End Sub
```