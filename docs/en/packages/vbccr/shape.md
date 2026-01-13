# Shape Control (VBCCRShape)

VBCCRShape control is used to draw various shapes on forms, including rectangles, circles, ellipses, rounded rectangles, and lines. It provides rich style and appearance setting options.

## Properties

### Key Properties

- `Shape`: Shape type (rectangle, circle, ellipse, etc.)
- `BackColor`: Fill color
- `BorderColor`: Border color
- `BorderStyle`: Border style
- `BorderWidth`: Border width
- `FillStyle`: Fill style
- `BackStyle`: Background style (transparent or opaque)
- `Visible`: Show/hide shape
- `Width`: Width
- `Height`: Height

## Methods

### Main Methods

- `Move(Left As Single, Top As Single, Width As Single, Height As Single)`: Move and resize
- `Refresh()`: Refresh display

## Events

- `Click()`: Triggered when clicked
- `DblClick()`: Triggered when double-clicked
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With Shape1
        .Shape = vbShapeRectangle
        .BackColor = vbBlue
        .BorderColor = vbBlack
        .BorderWidth = 2
        .Width = 100
        .Height = 50
    End With
End Sub
```

### Creating Various Shapes

```vb
Private Sub CreateShapes()
    ' Rectangle
    With Shape1
        .Shape = vbShapeRectangle
        .BackColor = vbRed
        .BorderStyle = vbSolid
    End With
    
    ' Circle
    With Shape2
        .Shape = vbShapeCircle
        .BackColor = vbBlue
        .FillStyle = vbFSSolid
    End With
    
    ' Rounded Rectangle
    With Shape3
        .Shape = vbShapeRoundedRectangle
        .BackColor = vbGreen
        .BorderWidth = 2
    End With
End Sub
```

### Dynamic Shape Adjustment

```vb
Private Sub AnimateShape()
    Dim i As Long
    
    With Shape1
        ' Gradually increase size
        For i = 1 To 100 Step 5
            .Width = i
            .Height = i
            DoEvents
            Sleep 50
        Next i
        
        ' Gradually decrease size
        For i = 100 To 1 Step -5
            .Width = i
            .Height = i
            DoEvents
            Sleep 50
        Next i
    End With
End Sub
```

## Common Use Cases

### Status Indicator

```vb
Private Sub CreateStatusIndicator()
    ' Create status light
    With Shape1
        .Shape = vbShapeCircle
        .Width = 20
        .Height = 20
        .BorderStyle = vbSolid
        .BorderWidth = 1
    End With
End Sub

Private Sub UpdateStatus(ByVal Status As String)
    With Shape1
        Select Case Status
            Case "Normal"
                .BackColor = vbGreen
            Case "Warning"
                .BackColor = vbYellow
            Case "Error"
                .BackColor = vbRed
        End Select
    End With
End Sub
```

### Progress Indicator

```vb
Private Sub CreateProgressIndicator()
    Const SEGMENTS As Integer = 5
    Dim i As Integer
    
    For i = 0 To SEGMENTS - 1
        With Controls.Add("VBCCRShape", "shpProgress" & i)
            .Shape = vbShapeRoundedRectangle
            .Left = 10 + (i * 30)
            .Top = 10
            .Width = 25
            .Height = 10
            .BackColor = vbButtonFace
        End With
    Next i
End Sub

Private Sub UpdateProgress(ByVal Step As Integer)
    Dim i As Integer
    
    For i = 0 To Controls.Count - 1
        If TypeOf Controls(i) Is Shape Then
            Controls(i).BackColor = IIf(i <= Step, vbBlue, vbButtonFace)
        End If
    Next i
End Sub
```

## Best Practices

1. Shape Layout
```vb
Private Sub ArrangeShapes()
    Const MARGIN As Integer = 5
    Dim Left As Integer
    
    Left = MARGIN
    
    ' Arrange shapes horizontally
    For i = 1 To 3
        With Controls("Shape" & i)
            .Left = Left
            .Top = MARGIN
            Left = Left + .Width + MARGIN
        End With
    Next i
End Sub
```

2. Error Handling
```vb
Private Sub SafeShapeOperation()
    On Error GoTo ErrorHandler
    
    Shape1.Move 100, 100, 50, 50
    Exit Sub
    
ErrorHandler:
    Debug.Print "Shape operation error: " & Err.Description
End Sub
```

## Known Issues and Solutions

1. Refresh Issues
```vb
Private Sub FixRefreshIssues()
    Shape1.Visible = False
    ' Update shape properties
    Shape1.Visible = True
End Sub
```

2. Scaling Issues
```vb
Private Sub HandleScaling()
    ' Handle different resolutions
    Dim ScaleFactor As Single
    ScaleFactor = Screen.TwipsPerPixelX
    
    Shape1.BorderWidth = ScaleFactor
End Sub
```

## Additional Tips

- Use appropriate shape types
- Mind border styles
- Consider performance impact
- Implement smooth animations
- Handle event bubbling
- Mind z-order
- Optimize refresh
- Maintain consistency
- Implement responsive layout
- Clean up resources in Form_Unload

### Special Uses

1. Creating Gradient Effects
```vb
Private Sub CreateGradientEffect()
    Const STEPS As Integer = 10
    Dim i As Integer
    
    For i = 0 To STEPS - 1
        With Controls.Add("VBCCRShape", "shpGradient" & i)
            .Shape = vbShapeRectangle
            .Left = i * 20
            .Top = 0
            .Width = 20
            .Height = 100
            .BackColor = RGB(0, 0, 255 - (i * 25))
            .BorderStyle = vbBSNone
        End With
    Next i
End Sub
```

2. Creating Chart Elements
```vb
Private Sub CreateChartBars()
    Dim Values() As Integer
    Values = Array(20, 45, 30, 60, 25)
    
    For i = 0 To UBound(Values)
        With Controls.Add("VBCCRShape", "shpBar" & i)
            .Shape = vbShapeRectangle
            .Left = 10 + (i * 30)
            .Top = 100 - Values(i)
            .Width = 25
            .Height = Values(i)
            .BackColor = vbBlue
        End With
    Next i
End Sub
```

3. Creating Connectors
```vb
Private Sub CreateConnector(ByVal X1 As Single, ByVal Y1 As Single, _
                          ByVal X2 As Single, ByVal Y2 As Single)
    With Shape1
        .Shape = vbShapeLine
        .BorderColor = vbBlack
        .BorderWidth = 2
        .X1 = X1
        .Y1 = Y1
        .X2 = X2
        .Y2 = Y2
    End With
End Sub
```
