---
title: ToolBar Control
description: ToolBar Control - VBCCR Developer Reference, complete API documentation based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'da9dfc36-c16b-4726-be15-9b9ee31af3d9'
  PropagateID: 'da9dfc36-c16b-4726-be15-9b9ee31af3d9'
  ReservedCode1: '2b5499cb-d9c2-42c7-a39d-4dfbd2c552b1'
  ReservedCode2: '2b5499cb-d9c2-42c7-a39d-4dfbd2c552b1'
---

# ToolBar Control

Provides a customizable toolbar, supporting flat/standard styles, dropdown buttons, button menus, user customization, and OLE drag-and-drop.

## Enumerations

### TbrStyleConstants

Toolbar style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TbrStyleStandard | 0 | Standard toolbar style |
| TbrStyleFlat | 1 | Flat toolbar style |

### TbrTextAlignConstants

Button text alignment constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TbrTextAlignBottom | 0 | Text displayed at the bottom of the button |
| TbrTextAlignRight | 1 | Text displayed to the right of the button |

### TbrOrientationConstants

Toolbar orientation constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TbrOrientationHorizontal | 0 | Horizontal orientation |
| TbrOrientationVertical | 1 | Vertical orientation |

### TbrButtonStyleConstants

Button style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TbrButtonDefault | 0 | Default button style |
| TbrButtonCheck | 1 | Check button style |
| TbrButtonCheckGroup | 2 | Check group button style (mutually exclusive within group) |
| TbrButtonSeparator | 3 | Separator |
| TbrButtonDropDown | 4 | Dropdown button style |
| TbrButtonWholeDropDown | 5 | Whole dropdown button style |

### TbrButtonValueConstants

Button state value constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TbrButtonUnpressed | 0 | Unpressed state |
| TbrButtonPressed | 1 | Pressed state |

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

### ImageList

```vb
Public Property Get ImageList() As Variant
Public Property Let ImageList(ByVal Value As Variant)
Public Property Set ImageList(ByVal Value As Variant)
```

Returns/sets the associated ImageList control. Can be an object reference, a string key name, or a LongPtr handle.

### DisabledImageList

```vb
Public Property Get DisabledImageList() As Variant
Public Property Let DisabledImageList(ByVal Value As Variant)
Public Property Set DisabledImageList(ByVal Value As Variant)
```

Returns/sets the ImageList control used for the disabled button state.

### HotImageList

```vb
Public Property Get HotImageList() As Variant
Public Property Let HotImageList(ByVal Value As Variant)
Public Property Set HotImageList(ByVal Value As Variant)
```

Returns/sets the ImageList control used for the hot button state.

### PressedImageList

```vb
Public Property Get PressedImageList() As Variant
Public Property Let PressedImageList(ByVal Value As Variant)
Public Property Set PressedImageList(ByVal Value As Variant)
```

Returns/sets the ImageList control used for the pressed button state.

### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

Returns/sets the background color.

### Style

```vb
Public Property Get Style() As TbrStyleConstants
Public Property Let Style(ByVal Value As TbrStyleConstants)
```

Returns/sets the toolbar style.

### TextAlignment

```vb
Public Property Get TextAlignment() As TbrTextAlignConstants
Public Property Let TextAlignment(ByVal Value As TbrTextAlignConstants)
```

Returns/sets the button text alignment.

### Orientation

```vb
Public Property Get Orientation() As TbrOrientationConstants
Public Property Let Orientation(ByVal Value As TbrOrientationConstants)
```

Returns/sets the toolbar orientation.

### Divider

```vb
Public Property Get Divider() As Boolean
Public Property Let Divider(ByVal Value As Boolean)
```

Returns/sets whether a divider line is displayed.

### ShowTips

```vb
Public Property Get ShowTips() As Boolean
Public Property Let ShowTips(ByVal Value As Boolean)
```

Returns/sets whether tooltips are displayed.

### Wrappable

```vb
Public Property Get Wrappable() As Boolean
Public Property Let Wrappable(ByVal Value As Boolean)
```

Returns/sets whether buttons wrap automatically.

### AllowCustomize

```vb
Public Property Get AllowCustomize() As Boolean
Public Property Let AllowCustomize(ByVal Value As Boolean)
```

Returns/sets whether the user can customize the toolbar.

### AltDrag

```vb
Public Property Get AltDrag() As Boolean
Public Property Let AltDrag(ByVal Value As Boolean)
```

Returns/sets whether Alt+drag is allowed to customize the toolbar.

### DoubleBuffer

```vb
Public Property Get DoubleBuffer() As Boolean
Public Property Let DoubleBuffer(ByVal Value As Boolean)
```

Returns/sets whether double-buffered drawing is enabled.

### ButtonHeight

```vb
Public Property Get ButtonHeight() As Single
Public Property Let ButtonHeight(ByVal Value As Single)
```

Returns/sets the button height.

### ButtonWidth

```vb
Public Property Get ButtonWidth() As Single
Public Property Let ButtonWidth(ByVal Value As Single)
```

Returns/sets the button width.

### MinButtonWidth

```vb
Public Property Get MinButtonWidth() As Single
Public Property Let MinButtonWidth(ByVal Value As Single)
```

Returns/sets the minimum button width.

### MaxButtonWidth

```vb
Public Property Get MaxButtonWidth() As Single
Public Property Let MaxButtonWidth(ByVal Value As Single)
```

Returns/sets the maximum button width.

### InsertMarkColor

```vb
Public Property Get InsertMarkColor() As OLE_COLOR
Public Property Let InsertMarkColor(ByVal Value As OLE_COLOR)
```

Returns/sets the insert mark color.

### Transparent

```vb
Public Property Get Transparent() As Boolean
Public Property Let Transparent(ByVal Value As Boolean)
```

Returns/sets whether the toolbar is transparent.

### HotTracking

```vb
Public Property Get HotTracking() As Boolean
Public Property Let HotTracking(ByVal Value As Boolean)
```

Returns/sets whether hot tracking is enabled.

### HideClippedButtons

```vb
Public Property Get HideClippedButtons() As Boolean
Public Property Let HideClippedButtons(ByVal Value As Boolean)
```

Returns/sets whether clipped buttons are hidden.

### AnchorHot

```vb
Public Property Get AnchorHot() As Boolean
Public Property Let AnchorHot(ByVal Value As Boolean)
```

Returns/sets whether hot items are anchored.

### MaxTextRows

```vb
Public Property Get MaxTextRows() As Integer
Public Property Let MaxTextRows(ByVal Value As Integer)
```

Returns/sets the maximum number of text rows.

### Buttons

```vb
Public Property Get Buttons() As TbrButtons
```

Returns the buttons collection.

## Methods

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

### Refresh

```vb
Public Sub Refresh()
```

Forces a complete redraw of the object.

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

### Resize

```vb
Public Event Resize()
```

Raised when the control is resized.

### BeginCustomization

```vb
Public Event BeginCustomization()
```

Raised when toolbar customization begins.

### InitCustomizationDialog

```vb
Public Event InitCustomizationDialog(ByVal hDlg As LongPtr, ByRef HideHelpButton As Boolean)
```

Raised when initializing the customization dialog. hDlg is the dialog handle; HideHelpButton controls whether the Help button is hidden.

### CustomizationChange

```vb
Public Event CustomizationChange()
```

Raised when a toolbar customization change occurs.

### ResetCustomizations

```vb
Public Event ResetCustomizations(ByRef CloseDialog As Boolean)
```

Raised when customizations are reset. CloseDialog controls whether the dialog is closed.

### CustomizationHelp

```vb
Public Event CustomizationHelp()
```

Raised when the user clicks Help in the customization dialog.

### EndCustomization

```vb
Public Event EndCustomization()
```

Raised when toolbar customization ends.

### ButtonClick

```vb
Public Event ButtonClick(ByVal Button As TbrButton)
```

Raised when the user clicks a button.

### ButtonDrag

```vb
Public Event ButtonDrag(ByVal Button As TbrButton, ByVal MouseButton As Integer)
```

Raised when the user drags a button.

### ButtonHotChanged

```vb
Public Event ButtonHotChanged(ByVal Button As TbrButton, ByVal Hot As Boolean)
```

Raised when a button's hot state changes.

### ButtonDropDown

```vb
Public Event ButtonDropDown(ByVal Button As TbrButton)
```

Raised when a dropdown button is clicked.

### ButtonMenuClick

```vb
Public Event ButtonMenuClick(ByVal ButtonMenu As TbrButtonMenu)
```

Raised when a dropdown menu item is clicked.

### ButtonMenuClick2

```vb
Public Event ButtonMenuClick2(ByVal Button As TbrButton, ByVal ID As Long)
```

Raised when a dropdown menu item is clicked, providing both the parent button and the menu item ID.

### ButtonMouseEnter

```vb
Public Event ButtonMouseEnter(ByVal Button As TbrButton)
```

Raised when the mouse enters a button area.

### ButtonMouseLeave

```vb
Public Event ButtonMouseLeave(ByVal Button As TbrButton)
```

Raised when the mouse leaves a button area.

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

### TbrButton Class

Toolbar button object.

#### TbrButton Properties

#### Index

```vb
Public Property Get Index() As Long
```

The index of the button in the collection.

#### Key

```vb
Public Property Get Key() As String
Public Property Let Key(ByVal Value As String)
```

The button's unique identifier key.

#### Tag

```vb
Public Property Get Tag() As Variant
Public Property Let Tag(ByVal Value As Variant)
```

Extra data.

#### ID

```vb
Public Property Get ID() As Long
```

Button ID.

#### Caption

```vb
Public Property Get Caption() As String
Public Property Let Caption(ByVal Value As String)
```

Button caption.

#### Style

```vb
Public Property Get Style() As TbrButtonStyleConstants
Public Property Let Style(ByVal Value As TbrButtonStyleConstants)
```

Button style.

#### Image

```vb
Public Property Get Image() As Variant
Public Property Let Image(ByVal Value As Variant)
```

Button image.

#### ImageIndex

```vb
Public Property Get ImageIndex() As Long
```

Image index.

#### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

ToolTip text.

#### Description

```vb
Public Property Get Description() As String
Public Property Let Description(ByVal Value As String)
```

Button description.

#### Value

```vb
Public Property Get Value() As TbrButtonValueConstants
Public Property Let Value(ByVal Value As TbrButtonValueConstants)
```

Button value (pressed/unpressed state).

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

#### MixedState

```vb
Public Property Get MixedState() As Boolean
Public Property Let MixedState(ByVal Value As Boolean)
```

Whether in mixed state (tri-state checkbox).

#### HighLighted

```vb
Public Property Get HighLighted() As Boolean
Public Property Let HighLighted(ByVal Value As Boolean)
```

Whether highlighted.

#### NoImage

```vb
Public Property Get NoImage() As Boolean
Public Property Let NoImage(ByVal Value As Boolean)
```

Whether no image is displayed.

#### NoPrefix

```vb
Public Property Get NoPrefix() As Boolean
Public Property Let NoPrefix(ByVal Value As Boolean)
```

Whether mnemonic prefix (&) is not processed.

#### AutoSize

```vb
Public Property Get AutoSize() As Boolean
Public Property Let AutoSize(ByVal Value As Boolean)
```

Whether auto-sized.

#### CustomWidth

```vb
Public Property Get CustomWidth() As Single
Public Property Let CustomWidth(ByVal Value As Single)
```

Custom width.

#### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

Foreground color.

#### Position

```vb
Public Property Get Position() As Long
Public Property Let Position(ByVal Value As Long)
```

Button position.

#### Hot

```vb
Public Property Get Hot() As Boolean
```

Whether in hot state.

#### Left

```vb
Public Property Get Left() As Single
```

Button left edge distance.

#### Top

```vb
Public Property Get Top() As Single
```

Button top edge distance.

#### Width

```vb
Public Property Get Width() As Single
```

Button width.

#### Height

```vb
Public Property Get Height() As Single
```

Button height.

#### ButtonMenus

```vb
Public Property Get ButtonMenus() As TbrButtonMenus
```

Dropdown menu collection.

#### hMenu

```vb
Public Property Get hMenu() As LongPtr
```

Menu handle.

### TbrButtonMenu Class

Button dropdown menu item object.

#### TbrButtonMenu Properties

#### Index

```vb
Public Property Get Index() As Long
```

Menu item index.

#### Key

```vb
Public Property Get Key() As String
Public Property Let Key(ByVal Value As String)
```

Unique identifier key.

#### Tag

```vb
Public Property Get Tag() As Variant
Public Property Let Tag(ByVal Value As Variant)
```

Extra data.

#### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

Menu item text.

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

#### Checked

```vb
Public Property Get Checked() As Boolean
Public Property Let Checked(ByVal Value As Boolean)
```

Whether checked.

#### Separator

```vb
Public Property Get Separator() As Boolean
Public Property Let Separator(ByVal Value As Boolean)
```

Whether it is a separator.

#### Picture

```vb
Public Property Get Picture() As IPictureDisp
Public Property Set Picture(ByVal Value As IPictureDisp)
```

Menu item icon.

#### Parent

```vb
Public Property Get Parent() As TbrButton
```

Parent button.

### TbrButtonMenus Class

Button dropdown menu item collection.

#### TbrButtonMenus Members

#### NewEnum

```vb
Public Function NewEnum() As IUnknown
```

Enumerator (hidden).

#### Add

```vb
Public Function Add(Optional ByVal Index As Variant, Optional ByVal Key As Variant, Optional ByVal Text As Variant) As TbrButtonMenu
```

Adds a menu item.

#### Item

```vb
Public Function Item(ByVal Index As Variant) As TbrButtonMenu
```

Gets a menu item (default member).

#### Exists

```vb
Public Function Exists(ByVal Index As Variant) As Boolean
```

Checks if a menu item exists.

#### Count

```vb
Public Property Get Count() As Long
```

Menu item count.

#### Clear

```vb
Public Sub Clear()
```

Clears all menu items.

#### Remove

```vb
Public Sub Remove(ByVal Index As Variant)
```

Removes a menu item.

### TbrButtons Class

Toolbar buttons collection.

#### TbrButtons Members

#### NewEnum

```vb
Public Function NewEnum() As IUnknown
```

Enumerator (hidden).

#### Add

```vb
Public Function Add(Optional ByVal Index As Variant, Optional ByVal Key As Variant, Optional ByVal Caption As Variant, Optional ByVal Style As Variant, Optional ByVal Image As Variant) As TbrButton
```

Adds a button.

#### Item

```vb
Public Function Item(ByVal Index As Variant) As TbrButton
```

Gets a button (default member).

#### Exists

```vb
Public Function Exists(ByVal Index As Variant) As Boolean
```

Checks if a button exists.

#### Count

```vb
Public Property Get Count() As Long
```

Button count.

#### Clear

```vb
Public Sub Clear()
```

Clears all buttons.

#### Remove

```vb
Public Sub Remove(ByVal Index As Variant)
```

Removes a button.

### TbrButtonProperties Class

Internal button properties object (Friend access).

#### FInit

```vb
Friend Property Get FInit() As Boolean
Friend Property Let FInit(ByVal Value As Boolean)
```

Internal initialization flag.

#### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

Foreground color.

## Code Examples

### Basic Usage

```vb
' Create toolbar and add buttons
With ToolBar1.Buttons
    .Add , "New", "New", tbrButtonDefault, 1
    .Add , "Open", "Open", tbrButtonDefault, 2
    .Add , , , tbrButtonSeparator
    .Add , "Bold", "Bold", tbrButtonCheck, 3
End With

' Add dropdown menu to a button
Dim btn As TbrButton
Set btn = ToolBar1.Buttons.Add(, "Font", "Font", tbrButtonDropDown, 4)
With btn.ButtonMenus
    .Add , "Arial", "Arial"
    .Add , "Courier", "Courier New"
    .Add , , , , , True  ' Separator
    .Add , "Tahoma", "Tahoma"
End With

' Handle button click
Private Sub ToolBar1_ButtonClick(ByVal Button As TbrButton)
    Select Case Button.Key
        Case "New": MsgBox "New file"
        Case "Open": MsgBox "Open file"
        Case "Bold": MsgBox "Bold: " & Button.Value
    End Select
End Sub

' Handle dropdown menu click
Private Sub ToolBar1_ButtonMenuClick(ByVal ButtonMenu As TbrButtonMenu)
    MsgBox "Selected font: " & ButtonMenu.Text
End Sub
```