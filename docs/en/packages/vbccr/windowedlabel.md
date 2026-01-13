# WindowedLabel Control (VBCCRWindowedLabel)

WindowedLabel control is a label control with a window handle that provides more functionality and better performance than standard labels. It supports subclassing and custom drawing, enabling complex visual effects.

## Properties

### Basic Properties
- `Caption` - Display text
- `BackColor` - Background color
- `ForeColor` - Foreground color
- `Enabled` - Whether control is enabled
- `Font` - Font settings
- `Visible` - Whether visible

### Appearance Properties
- `Alignment` - Text alignment
  - `vbLeftAlign` (0) - Left align
  - `vbCenterAlign` (1) - Center align
  - `vbRightAlign` (2) - Right align
- `BorderStyle` - Border style
- `Transparent` - Whether transparent
- `UseMnemonic` - Whether to use shortcut keys (&)
- `AutoSize` - Whether to auto-size
- `WordWrap` - Whether to wrap text

### Advanced Properties
- `hWnd` - Window handle
- `SubclassId` - Subclassing identifier
- `DrawMode` - Drawing mode

## Events

- `Click` - Triggered when control is clicked
- `DblClick` - Triggered when control is double-clicked
- `MouseDown` - Triggered when mouse button is pressed
- `MouseMove` - Triggered when mouse moves
- `MouseUp` - Triggered when mouse button is released
- `Paint` - Triggered when control is repainted
- `WindowProc` - Triggered when processing window messages

## Code Examples

### Basic Usage

```vb
Private Sub InitWindowedLabel()
    With WindowedLabel1
        .Caption = "This is a WindowedLabel control"
        .Alignment = vbCenterAlign
        .BorderStyle = 1  ' Single line border
        .AutoSize = True
        .WordWrap = True
    End With
End Sub
```

### Gradient Background

```vb
Private Type GradientInfo
    StartColor As Long
    EndColor As Long
    Direction As Long  ' 0=Horizontal, 1=Vertical
End Type

Private Type GradientManager
    Gradient As GradientInfo
    Enabled As Boolean
End Type

Private Gradients As GradientManager

Private Sub InitGradientManager()
    With Gradients
        .Enabled = True
        
        With .Gradient
            .StartColor = RGB(255, 255, 255)  ' White
            .EndColor = RGB(200, 220, 255)    ' Light blue
            .Direction = 0  ' Horizontal gradient
        End With
    End With
End Sub

Private Sub WindowedLabel1_Paint()
    If Not Gradients.Enabled Then Exit Sub
    
    With WindowedLabel1
        Dim hDC As Long
        hDC = .hDC
        
        ' Create gradient brush
        DrawGradient hDC, _
                    0, 0, .Width, .Height, _
                    Gradients.Gradient.StartColor, _
                    Gradients.Gradient.EndColor, _
                    Gradients.Gradient.Direction
        
        ' Draw text
        DrawText hDC, _
                .Caption, _
                .Width, .Height, _
                .Alignment
    End With
End Sub
```

### Animation Effects

```vb
Private Type AnimationInfo
    Text As String
    CurrentPos As Long
    Speed As Long
    Timer As Long
    Enabled As Boolean
End Type

Private Animation As AnimationInfo

Private Sub SetupTextAnimation()
    With Animation
        .Text = "Scrolling Text Example"
        .CurrentPos = 0
        .Speed = 50
        .Enabled = True
        .Timer = Timer1.Interval
    End With
    
    Timer1.Enabled = True
End Sub

Private Sub Timer1_Timer()
    With Animation
        If Not .Enabled Then Exit Sub
        
        ' Update position
        .CurrentPos = (.CurrentPos + 1) Mod (Len(.Text) + WindowedLabel1.Width)
        
        ' Update display
        WindowedLabel1.Caption = Right$(.Text & Space$(WindowedLabel1.Width), _
                                      WindowedLabel1.Width)
        WindowedLabel1.Refresh
    End With
End Sub
```

## Common Use Cases

### Status Indicator

```vb
Private Sub CreateStatusIndicator()
    With WindowedLabel1
        .Caption = "System Status: Ready"
        .BackColor = vbGreen
        .ForeColor = vbWhite
        .Alignment = vbCenterAlign
        .BorderStyle = 1
    End With
End Sub

Private Sub UpdateStatus(ByVal Status As String, _
                        ByVal StatusType As Long)
    With WindowedLabel1
        .Caption = "System Status: " & Status
        
        Select Case StatusType
            Case 0  ' Normal
                .BackColor = vbGreen
            Case 1  ' Warning
                .BackColor = vbYellow
                .ForeColor = vbBlack
            Case 2  ' Error
                .BackColor = vbRed
        End Select
        
        .Refresh
    End With
End Sub
```

### Custom Drawing

```vb
Private Sub DrawCustomLabel()
    Dim hDC As Long
    Dim Rect As RECT
    
    With WindowedLabel1
        hDC = .hDC
        
        ' Set up drawing area
        Rect.Left = 0
        Rect.Top = 0
        Rect.Right = .Width
        Rect.Bottom = .Height
        
        ' Draw custom background
        DrawBackground hDC, Rect
        
        ' Draw text with effects
        DrawEffectText hDC, .Caption, Rect
    End With
End Sub

Private Sub DrawEffectText(ByVal hDC As Long, _
                         ByVal Text As String, _
                         ByRef Rect As RECT)
    ' Draw shadow
    OffsetRect Rect, 1, 1
    SetTextColor hDC, RGB(128, 128, 128)
    DrawText hDC, Text, -1, Rect, DT_CENTER
    
    ' Draw main text
    OffsetRect Rect, -1, -1
    SetTextColor hDC, RGB(0, 0, 0)
    DrawText hDC, Text, -1, Rect, DT_CENTER
End Sub
```

## Best Practices

1. Memory Management
```vb
Private Sub CleanupLabel()
    ' Release resources
    DeleteObject WindowedLabel1.hDC
    Set WindowedLabel1 = Nothing
End Sub
```

2. Performance Optimization
```vb
Private Sub OptimizeDrawing()
    ' Double buffering
    WindowedLabel1.LockUpdate = True
    
    ' Perform drawing operations
    UpdateLabelContent
    
    ' Update display
    WindowedLabel1.LockUpdate = False
    WindowedLabel1.Refresh
End Sub
```

## Known Issues and Solutions

1. Flickering Issues
```vb
Private Sub FixFlickering()
    ' Enable double buffering
    SetWindowLong WindowedLabel1.hWnd, _
                 GWL_EXSTYLE, _
                 WS_EX_COMPOSITED
End Sub
```

2. Text Rendering
```vb
Private Sub ImproveTextRendering()
    ' Enable ClearType
    SetTextRenderingHint WindowedLabel1.hDC, _
                        TextRenderingHintClearTypeGridFit
End Sub
```

## Additional Tips

1. Event Handling
```vb
Private Sub WindowedLabel1_WindowProc(ByVal hWnd As Long, _
                                    ByVal uMsg As Long, _
                                    ByVal wParam As Long, _
                                    ByVal lParam As Long, _
                                    ByVal PrevProc As Long, _
                                    Cancel As Boolean)
    ' Handle custom messages
    Select Case uMsg
        Case WM_PAINT
            HandleCustomPaint
            Cancel = True
    End Select
End Sub
```

2. Dynamic Updates
```vb
Private Sub UpdateLabelDynamically()
    Static LastUpdate As Single
    
    ' Limit update frequency
    If Timer - LastUpdate < 0.1 Then Exit Sub
    
    ' Update content
    UpdateContent
    
    LastUpdate = Timer
End Sub
```

3. State Management
```vb
Private Sub ManageLabelState()
    ' Save state
    SaveSetting App.Title, "WindowedLabel", "Text", _
               WindowedLabel1.Caption
               
    ' Restore state
    WindowedLabel1.Caption = GetSetting(App.Title, _
                            "WindowedLabel", "Text", "")
End Sub
```
