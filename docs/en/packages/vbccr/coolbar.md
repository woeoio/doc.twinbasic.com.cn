# CoolBar Control (VBCCRCoolBar)

The CoolBar control is a modern toolbar container control that allows users to rearrange and resize toolbars through dragging. Each toolbar can contain other controls such as buttons, combo boxes, etc.

## Properties

### Basic Properties
- `Bands` - CoolBar bands collection
- `BandCount` - Number of bands
- `BackColor` - Background color
- `ForeColor` - Foreground color
- `Enabled` - Whether control is enabled
- `Font` - Font settings
- `Visible` - Whether visible

### Band Properties
- `Band(Index).Text` - Band title text
- `Band(Index).Width` - Band width
- `Band(Index).MinWidth` - Band minimum width
- `Band(Index).MinHeight` - Band minimum height
- `Band(Index).NewRow` - Whether to display on new row
- `Band(Index).ImageIndex` - Image index
- `Band(Index).Style` - Band style
  - `RBBS_NORMAL` (0) - Normal style
  - `RBBS_BREAK` (1) - Line break
  - `RBBS_FIXEDSIZE` (2) - Fixed size
  - `RBBS_GRIPPERALWAYS` (4) - Always show gripper
  - `RBBS_NOGRIPPER` (8) - Don't show gripper
- `Band(Index).Child` - Child control
- `Band(Index).ChildEdge` - Whether to show child control border
- `Band(Index).Visible` - Whether visible

## Events

- `BeginBandResize` - Triggered when band resizing begins
- `BeginBandMove` - Triggered when band moving begins
- `EndBandResize` - Triggered when band resizing ends
- `EndBandMove` - Triggered when band moving ends
- `BandClick` - Triggered when band is clicked
- `BandDblClick` - Triggered when band is double-clicked
- `HeightChanged` - Triggered when height changes
- `Change` - Triggered when any change occurs

## Code Examples

### Basic Usage

```vb
Private Sub InitCoolBar()
    With CoolBar1
        ' Add first band (toolbar)
        With .Bands.Add
            .Text = "File"
            .MinWidth = 200
            .Width = 250
            Set .Child = ToolBar1
            .ChildEdge = True
        End With
        
        ' Add second band (combo box)
        With .Bands.Add
            .Text = "Search"
            .MinWidth = 150
            .Width = 200
            Set .Child = ComboBox1
            .ChildEdge = True
        End With
    End With
End Sub
```

### Band Manager

```vb
Private Type BandInfo
    Index As Long
    Text As String
    Width As Long
    MinWidth As Long
    MinHeight As Long
    NewRow As Boolean
    Style As Long
    Visible As Boolean
    Position As Long
End Type

Private Type BandManager
    Bands() As BandInfo
    Count As Long
End Type

Private Manager As BandManager

Private Sub InitBandManager()
    With Manager
        ReDim .Bands(1 To 100)
        .Count = 0
        
        ' Save current band information
        SaveBandInfo
```
