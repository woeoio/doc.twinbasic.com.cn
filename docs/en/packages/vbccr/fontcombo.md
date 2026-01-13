# FontCombo Control (VBCCRFontCombo)

The FontCombo control is a specialized combo box control for font selection, which automatically lists all fonts installed in the system and provides font preview functionality.

## Properties

### Basic Properties
- `Text` - Currently selected font name
- `List` - Font list
- `ListCount` - Number of list items
- `ListIndex` - Index of currently selected item
- `BackColor` - Background color
- `ForeColor` - Foreground color
- `Enabled` - Whether control is enabled
- `Font` - Font settings
- `Visible` - Whether visible

### Specific Properties
- `FontType` - Type of fonts to display
  - `ALL_FONTS` (0) - All fonts
  - `TT_FONTS_ONLY` (1) - TrueType fonts only
  - `DEVICE_FONTS_ONLY` (2) - Device fonts only
  - `RASTER_FONTS_ONLY` (3) - Raster fonts only
- `PreviewText` - Preview text
- `ShowPreview` - Whether to show preview
- `ShowSymbols` - Whether to show symbol fonts
- `MaxMRUCount` - Maximum number of recently used fonts

## Events

- `Change` - Triggered when selection changes
- `Click` - Triggered when control is clicked
- `DblClick` - Triggered when control is double-clicked
- `DropDown` - Triggered when list drops down
- `GotFocus` - Triggered when control receives focus
- `KeyDown` - Triggered when keyboard key is pressed
- `KeyPress` - Triggered during keyboard key press
- `KeyUp` - Triggered when keyboard key is released
- `LostFocus` - Triggered when control loses focus
- `MouseDown` - Triggered when mouse button is pressed
- `MouseMove` - Triggered when mouse moves
- `MouseUp` - Triggered when mouse button is released
- `Scroll` - Triggered when list is scrolled
- `CloseUp` - Triggered when dropdown list closes

## Code Examples

### Basic Usage

```vb
Private Sub InitFontCombo()
    With FontCombo1
        .FontType = ALL_FONTS  ' Show all fonts
        .ShowPreview = True  ' Show preview
        .PreviewText = "AaBbYyZz"  ' Set preview text
        .ShowSymbols = False  ' Don't show symbol fonts
    End With
End Sub
```

### Font Classifier

```vb
Private Type FontInfo
    Name As String
    Type As Long
    CharSet As Long
    IsSymbol As Boolean
    IsTrueType As Boolean
    IsVertical As Boolean
End Type

Private Type FontManager
    Fonts() As FontInfo
    Count As Long
    
    TTFonts() As String
    TTCount As Long
    
    SymbolFonts() As String
    SymbolCount As Long
    
    VerticalFonts() As String
    VerticalCount As Long
End Type

Private Manager As FontManager

Private Sub InitFontManager()
    With Manager
        ReDim .Fonts(1 To 1000)
        .Count = 0
        
        ReDim .TTFonts(1 To 100)
        .TTCount = 0
        
        ReDim .SymbolFonts(1 To 50)
        .SymbolCount = 0
        
        ReDim .VerticalFonts(1 To 50)
```
