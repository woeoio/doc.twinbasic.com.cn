---
title: WaynesButton
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/WaynesButton/
---

# WaynesButton class
An owner-drawn push-button. Renders a configurable rectangle (with optional gradient fill, borders, rounded / notched / cut-out corners) and a centred [**Caption**](#caption), in one of four visual states --- normal, hovered, focused, or pressed --- controlled by four parallel [**WaynesButtonState**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState) sub-objects.

The button raises a [**Click**](#click) event when clicked, plus the standard set of mouse, focus, and keyboard events. By default the four state objects are pre-set with a solid mid-blue ([**WAYNESCOLOR_BLUE**](#) --- `&HAC7220`) background and 15-pixel curved corners.

```vb
Private Sub Form_Load()
    btnGo.Caption = "Continue"
    btnGo.NormalState.BackgroundFill.ColorPoints.SetSolidColor vbBlue
    btnGo.HoverState.BackgroundFill.SetSimplePattern vbBlue, vbWhite
    btnGo.NormalState.Corners.SetAll tbCurve, 12
End Sub

Private Sub btnGo_Click()
    MsgBox "Hello"
End Sub
```

## Visual states

The button paints in one of four states, chosen at each repaint:

| State                              | When                                                                            |
|------------------------------------|---------------------------------------------------------------------------------|
| [**PressedState**](#pressedstate)  | The mouse is held down inside the button.                                       |
| [**HoverState**](#hoverstate)      | The mouse is held down outside the button, but began inside; or the mouse is hovering without being pressed. |
| [**FocusedState**](#focusedstate)  | The control has the keyboard focus and the mouse is not hovering or pressing.   |
| [**NormalState**](#normalstate)    | None of the above.                                                              |

Each state is a [**WaynesButtonState**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState) --- a small bundle of [**Corners**](/official/Reference/CustomControls/Styles/Corners), [**BackgroundFill**](/official/Reference/CustomControls/Styles/Fill), [**Borders**](/official/Reference/CustomControls/Styles/Borders), and [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering).

## Properties

### Anchors

Which sides of the control are attached to its container during resize. [**Anchors**](/official/Reference/CustomControls/Styles/Anchors). Inherited.

### Caption

The text shown centred on the button. **String**. Default: `"Button"`.

Syntax: *object*.**Caption** [ = *string* ]

### Dock

How the control is docked inside its container. A member of [**DockMode**](/official/Reference/CustomControls/Enumerations/DockMode). Inherited.

### FocusedState

The [**WaynesButtonState**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState) used when the control has the keyboard focus but is not being hovered or pressed.

### Height

The control's height in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### HoverState

The [**WaynesButtonState**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState) used when the mouse is hovering over the button without being pressed (or when the mouse has been pressed and dragged off the button).

### Left

The horizontal offset of the control's left edge from its container, in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### Name

The unique design-time name of the control on its parent form. **String**. Inherited.

### NormalState

The [**WaynesButtonState**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState) used when the button is idle --- not hovered, not focused, not pressed.

### PressedState

The [**WaynesButtonState**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState) used when the mouse is held down on the button.

### TabIndex

The position of the control in the form's TAB-key navigation order. **Long**. Inherited.

### TabStop

Whether the user can reach the control by pressing **TAB**. **Boolean**. Inherited. Default: **True**.

### Top

The vertical offset of the control's top edge from its container, in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### Visible

Whether the control is currently displayed. **Boolean**. Inherited. Default: **True**.

### Width

The control's width in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

## Events

### Click

Raised when the user clicks the button (mouse down + mouse up inside the control).

Syntax: *object*\_**Click**( )

### GotFocus

Raised when the control receives the keyboard focus.

Syntax: *object*\_**GotFocus**( )

### KeyDown

Raised when the user presses a key while the control has focus.

Syntax: *object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

Raised when the user types a character key while the control has focus.

Syntax: *object*\_**KeyPress**( *KeyCode* **As Integer** )

### KeyUp

Raised when the user releases a key while the control has focus.

Syntax: *object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LostFocus

Raised when the control loses the keyboard focus.

Syntax: *object*\_**LostFocus**( )

### MouseDown

Raised when the user presses a mouse button over the control.

Syntax: *object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseEnter

Raised when the cursor first enters the control.

Syntax: *object*\_**MouseEnter**( )

### MouseLeave

Raised when the cursor leaves the control.

Syntax: *object*\_**MouseLeave**( )

### MouseMove

Raised when the cursor moves over the control.

Syntax: *object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

Raised when the user releases a mouse button over the control.

Syntax: *object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )
