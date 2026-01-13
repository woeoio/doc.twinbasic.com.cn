# CheckBox Control (VBCCRCheckBox)

The VBCCRCheckBox control is a checkbox control that allows users to select multiple options from a group. It supports three states (checked, unchecked, and grayed/partially checked).

## Properties

### Appearance Properties
- `Alignment` - Text alignment
  - `vbLeftJustify` (0) - Left alignment
  - `vbRightJustify` (1) - Right alignment
- `Appearance` - Visual style
  - `cc2D` (0) - 2D appearance
  - `cc3D` (1) - 3D appearance
- `BackColor` - Background color
- `ForeColor` - Text color
- `Font` - Font properties
- `Caption` - Checkbox text
- `Picture` - Icon
- `DisabledPicture` - Icon for disabled state
- `DownPicture` - Icon for pressed state
- `Enabled` - Whether the control is enabled
- `Visible` - Whether the control is visible
- `Value` - Check state
  - `vbUnchecked` (0) - Unchecked
  - `vbChecked` (1) - Checked
  - `vbGrayed` (2) - Grayed (partially checked)
- `ToolTipText` - Tooltip text

## Events

- `Click` - Triggered when clicked
- `DblClick` - Triggered when double-clicked
- `MouseDown` - Triggered when mouse button is pressed
- `MouseMove` - Triggered when mouse moves
- `MouseUp` - Triggered when mouse button is released
- `GotFocus` - Triggered when control receives focus
- `LostFocus` - Triggered when control loses focus
- `KeyDown` - Triggered when key is pressed down
- `KeyPress` - Triggered when key is pressed
- `KeyUp` - Triggered when key is released

## Code Examples

### Basic Usage

```vb
Private Sub InitCheckBox()
    With Check1
        .Caption = "Enable Option"
        .Value = vbUnchecked  ' Default unchecked
        .ToolTipText = "Check to enable this option"
    End With
End Sub
```

### Option Group Management

```vb
Private Type CheckGroup
    Name As String
    Boxes() As VBCCRCheckBox
    Count As Long
    MinSelected As Long
    MaxSelected As Long
End Type

Private Type GroupManager
    Groups() As CheckGroup
    Count As Long
End Type

Private Groups As GroupManager

Private Sub InitGroupManager()
    ReDim Groups.Groups(1 To 10)
    Groups.Count = 0
End Sub

Private Function CreateCheckGroup(ByVal Name As String, _
                                Optional ByVal MinSelected As Long = 0, _
                                Optional ByVal MaxSelected As Long = -1) _
                                As Long
    With Groups
        .Count = .Count + 1
        If .Count > UBound(.Groups) Then
            ReDim Preserve .Groups(1 To .Count + 10)
        End If
        
        With .Groups(.Count)
            .Name = Name
            ReDim .Boxes(1 To 10)
            .Count = 0
            .MinSelected = MinSelected
            .MaxSelected = MaxSelected
        End With
        
        CreateCheckGroup = .Count
    End With
End Function
```
