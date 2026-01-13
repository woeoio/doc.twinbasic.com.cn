# HotKey Control (VBCCRHotKey)

The VBCCRHotKey control allows users to set and capture keyboard shortcut combinations. This control is typically used in custom shortcut settings interfaces, allowing users to customize application shortcuts.

## Properties

### Key Properties

- `HotKey`: Currently set shortcut combination
- `InvalidKeys`: Set disabled key combinations
- `InvalidCombinations`: Set disabled modifier combinations
- `Modifiers`: Current modifier key state (Alt, Ctrl, Shift)
- `KeyCode`: Current key code
- `AutoRepeat`: Whether to allow key repetition
- `Enabled`: Enable/disable control
- `BackColor`: Background color
- `ForeColor`: Text color

## Methods

### Main Methods

- `SetHotKey(KeyCode As Long, Modifiers As Long)`: Set shortcut
- `GetHotKey()`: Get current shortcut
- `SetFocus()`: Set focus to control
- `Refresh()`: Refresh display

## Events

- `Change()`: Triggered when shortcut changes
- `InvalidKey()`: Triggered when invalid key is input
- `GotFocus()`: Triggered when control receives focus
- `LostFocus()`: Triggered when control loses focus

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With HotKey1
        ' Set initial shortcut (Ctrl+S)
        .SetHotKey vbKeyS, HOTKEYF_CONTROL
        
        ' Disable certain combinations
        .InvalidCombinations = HOTKEYF_ALT Or HOTKEYF_CONTROL Or HOTKEYF_SHIFT
    End With
End Sub
```

### Monitoring Shortcut Changes

```vb
Private Sub HotKey1_Change()
    Dim KeyCode As Long
    Dim Modifiers As Long
    
    ' Get current shortcut
    KeyCode = HotKey1.KeyCode
    Modifiers = HotKey1.Modifiers
    
    ' Display current combination
    ShowHotKeyCombo KeyCode, Modifiers
End Sub

Private Sub ShowHotKeyCombo(ByVal KeyCode As Long, ByVal Modifiers As Long)
    Dim strHotKey As String
    
    If (Modifiers And HOTKEYF_CONTROL) Then strHotKey = strHotKey & "Ctrl+"
    If (Modifiers And HOTKEYF_ALT) Then strHotKey = strHotKey & "Alt+"
    If (Modifiers And HOTKEYF_SHIFT) Then strHotKey = strHotKey & "Shift+"
    
    strHotKey = strHotKey & Chr$(KeyCode)
    
    lblHotKey.Caption = "Current Shortcut: " & strHotKey
End Sub
```

### Shortcut Validation

```vb
Private Sub ValidateHotKey()
    Dim KeyCode As Long
    Dim Modifiers As Long
    
    ' Get current combination
    KeyCode = HotKey1.KeyCode
    Modifiers = HotKey1.Modifiers
    
    ' Validate if combination is valid
    If IsValidHotKey(KeyCode, Modifiers) Then
        SaveHotKey KeyCode, Modifiers
    Else
        MsgBox "Invalid shortcut combination"
    End If
End Sub

Private Function IsValidHotKey(ByVal KeyCode As Long, ByVal Modifiers As Long) As Boolean
    ' Check if at least one modifier is included
    If Modifiers = 0 Then
```
