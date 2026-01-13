# Animation Control (VBCCRAnimation)

The VBCCRAnimation control provides functionality for displaying AVI video clips or animations in VB6 applications. This control is particularly suitable for displaying simple animation effects such as loading indicators or progress animations.

## Properties

### Key Properties

- `AutoPlay`: Sets whether to automatically play the animation when loaded
- `BackStyle`: Sets the background style (transparent or opaque)
- `Center`: Sets whether the animation is centered in the control
- `BackColor`: Sets the background color
- `Playing`: Gets whether the animation is currently playing (read-only)

## Methods

### Main Methods

- `LoadFile(FileName As String)`: Opens the specified AVI file
- `LoadRes(ResID As Integer, Optional FileName As String)`: Loads animation from a resource file
- `Play(Optional RepeatCount As Long = -1, Optional StartFrame As Integer = 0, Optional EndFrame As Integer = -1)`: Starts playing the animation
- `StopPlay()`: Stops playing the animation

## Events

- `Change()`: Triggered when the animation starts or stops playing
- `Click()`: Click event
- `DblClick()`: Double-click event
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`
- `KeyPress(KeyChar As Integer)`
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseEnter()`: Triggered when mouse enters the control
- `MouseLeave()`: Triggered when mouse leaves the control
- `OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`
- `OLEStartDrag(Data As DataObject, AllowedEffects As Long)`
- `OLES etData(Data As DataObject, DataFormat As Integer)`
- `OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`
- `OLECompleteDrag(Effect As Long)`

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With Animation1
        .AutoPlay = True
        .Center = True
        .LoadFile App.Path & "\loading.avi"
    End With
End Sub
```

### Controlling Animation Playback

```vb
Private Sub PlayAnimation()
    With Animation1
        .LoadFile App.Path & "\process.avi"
        .AutoPlay = True
        .Play -1, 0, -1  ' RepeatCount=-1 means infinite loop
    End With
End Sub

Private Sub StopAnimation()
    Animation1.StopPlay
End Sub
```

### As a Loading Indicator

```vb
Private Sub ShowLoadingAnimation()
    ' Show loading animation
    With Animation1
        .Visible = True
        .LoadFile App.Path & "\loading.avi"
        .Center = True
        .Play -1, 0, -1  ' RepeatCount=-1 means infinite loop
    End With
End Sub

Private Sub HideLoadingAnimation()
    Animation1.StopPlay
    Animation1.Visible = False
End Sub
```

## Common Use Cases

### Progress Indicator

```vb
Private Sub ShowProgress()
    ' Set up progress animation
    With AnimProgress
        .Visible = True
        .LoadFile App.Path & "\progress.avi"
        .AutoPlay = True
        .Center = True
    End With
    
    ' Perform time-consuming operation
    ProcessData
    
    ' Stop animation
    AnimProgress.StopPlay
    AnimProgress.Visible = False
End Sub
```
```
