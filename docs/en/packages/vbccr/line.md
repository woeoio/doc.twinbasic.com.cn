# Line Control (VBCCRLine)

The VBCCRLine control is a control for drawing lines, which can create horizontal, vertical, or diagonal lines. It is commonly used for separating and decorating interface elements.

## Properties

### Key Properties

- `X1`, `Y1`: Line start coordinates
- `X2`, `Y2`: Line end coordinates
- `BorderColor`: Line color
- `BorderStyle`: Line style (solid, dashed, etc.)
- `BorderWidth`: Line width
- `Visible`: Show/hide line
- `DrawMode`: Drawing mode
- `Tag`: User-defined data

## Methods

### Main Methods

- `Move(X1 As Single, Y1 As Single, X2 As Single, Y2 As Single)`: Move and adjust line
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
    ' Create horizontal separator
    With Line1
        .X1 = 0
        .X2 = Me.ScaleWidth
        .Y1 = 100
        .Y2 = 100
        .BorderColor = vbBlack
        .BorderStyle = vbSolid
    End With
End Sub
```

### Create Vertical Line

```vb
Private Sub CreateVerticalLine()
    With Line1
        .X1 = 100
        .X2 = 100
        .Y1 = 0
        .Y2 = Me.ScaleHeight
        .BorderColor = RGB(200, 200, 200)
        .BorderWidth = 1
    End With
End Sub
```

### Dynamic Line Adjustment

```vb
Private Sub ResizeLine()
    ' Adjust line with form
    With Line1
        .X1 = 0
        .X2 = Me.ScaleWidth
        .Y1 = 50
        .Y2 = 50
    End With
End Sub

Private Sub Form_Resize()
    ResizeLine
End Sub
```

## Common Use Cases

### Group Separator

```vb
Private Sub CreateGroupSeparator()
    ' Create separator between groups
    With Line1
        .X1 = Frame1.Left
        .X2 = Frame1.Left + Frame1.Width
        .Y1 = Frame1.Top + Frame1.Height + 5
        .Y2 = .Y1
        .BorderStyle = vbSolid
        .BorderColor = RGB(200, 200, 200)
    End With
End Sub
```
