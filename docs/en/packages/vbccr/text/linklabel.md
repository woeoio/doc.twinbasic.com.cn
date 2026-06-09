---
title: LinkLabel Control
description: LinkLabel Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '55e2b1a0-e3ee-4273-821f-343ff7987e5f'
  PropagateID: '55e2b1a0-e3ee-4273-821f-343ff7987e5f'
  ReservedCode1: 'a6008950-5435-4232-8d28-dc368e297e21'
  ReservedCode2: 'a6008950-5435-4232-8d28-dc368e297e21'
---

# LinkLabel Control

Enhanced link label control, supporting hyperlink display and custom link collections.

## Enumerations

### LlbLinkBehaviorConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LlbLinkBehaviorSystemDefault | 0 | System default |
| LlbLinkBehaviorAlwaysUnderline | 1 | Always underline |
| LlbLinkBehaviorHoverUnderline | 2 | Underline on hover |
| LlbLinkBehaviorNeverUnderline | 3 | Never underline |

### CCAppearanceConstants

See common enumerations.

### CCBorderStyleConstants

See common enumerations.

### CCBackStyleConstants

See common enumerations.

### CCMousePointerConstants

See common enumerations.

### CCVerticalAlignmentConstants

See common enumerations.

### CCRightToLeftModeConstants

See common enumerations.

## Properties

### Caption
`Property Get Caption() As String`
`Property Let Caption(ByVal Value As String)`

The display text.

### ActiveLinkColor
`Property Get ActiveLinkColor() As OLE_COLOR`
`Property Let ActiveLinkColor(ByVal Value As OLE_COLOR)`

The active link color.

### LinkColor
`Property Get LinkColor() As OLE_COLOR`
`Property Let LinkColor(ByVal Value As OLE_COLOR)`

The link color.

### VisitedLinkColor
`Property Get VisitedLinkColor() As OLE_COLOR`
`Property Let VisitedLinkColor(ByVal Value As OLE_COLOR)`

The visited link color.

### DisabledLinkColor
`Property Get DisabledLinkColor() As OLE_COLOR`
`Property Let DisabledLinkColor(ByVal Value As OLE_COLOR)`

The disabled link color.

### LinkBehavior
`Property Get LinkBehavior() As LlbLinkBehaviorConstants`
`Property Let LinkBehavior(ByVal Value As LlbLinkBehaviorConstants)`

The link behavior style.

### Text
`Property Get Text() As String`
`Property Let Text(ByVal Value As String)`

The complete text content of the control, including link markup.

### Links
`Property Get Links() As LlbLinks`

The link collection.

### AutoSize
`Property Get AutoSize() As Boolean`
`Property Let AutoSize(ByVal Value As Boolean)`

Whether to automatically resize to fit the content.

### BorderStyle
`Property Get BorderStyle() As CCBorderStyleConstants`
`Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)`

The border style. See common enumerations.

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

The background color.

### BackStyle
`Property Get BackStyle() As CCBackStyleConstants`
`Property Let BackStyle(ByVal Value As CCBackStyleConstants)`

The background style. See common enumerations.

### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

The foreground color.

### Font
`Property Get Font() As StdFont`
`Property Let Font(ByVal NewFont As StdFont)`
`Property Set Font(ByVal NewFont As StdFont)`

The font.

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

Whether the control is enabled.

### MousePointer
`Property Get MousePointer() As CCMousePointerConstants`
`Property Let MousePointer(ByVal Value As CCMousePointerConstants)`

The mouse pointer style. See common enumerations.

### MouseIcon
`Property Get MouseIcon() As IPictureDisp`
`Property Let MouseIcon(ByVal Value As IPictureDisp)`
`Property Set MouseIcon(ByVal Value As IPictureDisp)`

The custom mouse icon.

### MouseTrack
`Property Get MouseTrack() As Boolean`
`Property Let MouseTrack(ByVal Value As Boolean)`

Whether mouse enter/leave tracking is enabled.

### WordWrap
`Property Get WordWrap() As Boolean`
`Property Let WordWrap(ByVal Value As Boolean)`

Whether text wraps automatically.

### UseMnemonic
`Property Get UseMnemonic() As Boolean`
`Property Let UseMnemonic(ByVal Value As Boolean)`

Whether the & character is interpreted as an accelerator prefix.

### RightToLeft
`Property Get RightToLeft() As Boolean`
`Property Let RightToLeft(ByVal Value As Boolean)`

The right-to-left display direction.

### RightToLeftLayout
`Property Get RightToLeftLayout() As Boolean`
`Property Let RightToLeftLayout(ByVal Value As Boolean)`

The right-to-left mirrored layout.

### RightToLeftMode
`Property Get RightToLeftMode() As CCRightToLeftModeConstants`
`Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)`

The right-to-left mode. See common enumerations.

### Appearance
`Property Get Appearance() As CCAppearanceConstants`
`Property Let Appearance(ByVal Value As CCAppearanceConstants)`

The appearance style. See common enumerations.

### VerticalAlignment
`Property Get VerticalAlignment() As CCVerticalAlignmentConstants`
`Property Let VerticalAlignment(ByVal Value As CCVerticalAlignmentConstants)`

The vertical alignment. See common enumerations.

### hWnd
`Property Get hWnd() As LongPtr`

The window handle. Read-only.

### ToolTipText
`Property Get ToolTipText() As String`
`Property Let ToolTipText(ByVal Value As String)`

The tooltip text.

### Name
`Property Get Name() As String`

The control name. Read-only.

### Tag
`Property Get Tag() As Variant`
`Property Let Tag(ByVal Value As Variant)`
`Property Set Tag(ByVal Value As Variant)`

Custom data.

### Parent
`Property Get Parent() As Object`

The parent object. Read-only.

### Container
`Property Get Container() As Object`
`Property Set Container(ByVal Value As Object)`

The container object.

### Left
`Property Get Left() As Single`
`Property Let Left(ByVal Value As Single)`

The left margin.

### Top
`Property Get Top() As Single`
`Property Let Top(ByVal Value As Single)`

The top margin.

### Width
`Property Get Width() As Single`
`Property Let Width(ByVal Value As Single)`

The width.

### Height
`Property Get Height() As Single`
`Property Let Height(ByVal Value As Single)`

The height.

### Visible
`Property Get Visible() As Boolean`
`Property Let Visible(ByVal Value As Boolean)`

The visibility.

## Methods

### Refresh
`Sub Refresh()`

Forces a repaint.

### AboutBox
`Sub AboutBox()`

Displays the About dialog.

## Events

### LinkClick
`Event LinkClick(ByVal Link As LlbLink)`

Occurs when a link is clicked.

### Click
`Event Click()`

Occurs when the control is clicked.

### DblClick
`Event DblClick()`

Occurs when the control is double-clicked.

### MouseDown
`Event MouseDown(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)`

Occurs when a mouse button is pressed.

### MouseUp
`Event MouseUp(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)`

Occurs when a mouse button is released.

### MouseMove
`Event MouseMove(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)`

Occurs when the mouse is moved.

### MouseEnter
`Event MouseEnter()`

Occurs when the mouse enters the control.

### MouseLeave
`Event MouseLeave()`

Occurs when the mouse leaves the control.

## Sub-objects

### Link (LlbLink)

Represents a single link within the link label.

#### Properties

| Property | Type | Access | Description |
|----------|------|--------|-------------|
| Start As Long | Long | Read/Write | Starting position of the link text (0-based) |
| Length As Long | Long | Read/Write | Length of the link text |
| Visited As Boolean | Boolean | Read/Write | Whether the link has been visited |
| Key As String | String | Read/Write | Link key |
| Tag As Variant | Variant | Read/Write | Custom data |

### Links (LlbLinks)

The link collection object.

#### Properties

| Property | Type | Access | Description |
|----------|------|--------|-------------|
| Item(ByVal Index As Variant) As LlbLink | LlbLink | Read-only | Gets a link by index |
| Count As Long | Long | Read-only | Number of links |

#### Methods

| Method | Description |
|--------|-------------|
| Add(ByVal Start As Long, ByVal Length As Long, Optional ByVal Key As String) As LlbLink | Adds a link |
| Clear() | Clears all links |
| Remove(ByVal Index As Variant) | Removes the specified link |

## Code Examples

```vb
' Set up text with links
With LinkLabel1
    .Caption = "Visit the VBCCR project homepage for more information"
    .LinkColor = vbBlue
    .VisitedLinkColor = vbPurple
    .LinkBehavior = LlbLinkBehaviorHoverUnderline
    ' Add links
    .Links.Add 2, 7, "url_main"
    .Links.Add 15, 4, "url_more"
End With

' Handle link clicks
Private Sub LinkLabel1_LinkClick(ByVal Link As LlbLink)
    Select Case Link.Key
        Case "url_main"
            ShellExecute 0, "open", "https://github.com/Kr00l/VBCCR", vbNullString, vbNullString, 1
        Case "url_more"
            MsgBox "More information..."
    End Select
    Link.Visited = True
End Sub

' Create multi-link text
With LinkLabel2
    .Caption = "Please read the License Agreement and Privacy Policy"
    .Links.Clear
    .Links.Add 3, 4, "license"
    .Links.Add 10, 4, "privacy"
End With
```