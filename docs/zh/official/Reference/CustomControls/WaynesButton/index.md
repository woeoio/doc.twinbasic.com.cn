---
title: WaynesButton
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/WaynesButton/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6336721b-a2af-4130-a2d9-b437da21da09'
  PropagateID: '6336721b-a2af-4130-a2d9-b437da21da09'
  ReservedCode1: '94dec705-61a8-4391-b107-9f55d134228e'
  ReservedCode2: '94dec705-61a8-4391-b107-9f55d134228e'
---

# WaynesButton 类
自绘按钮。渲染一个可配置的矩形（可选渐变填充、边框、圆角/凹口/切角）和居中的 [**Caption**](#caption)，具有四种视觉状态——正常、悬停、焦点或按下——由四个并行的 [**WaynesButtonState**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState) 子对象控制。

按钮被点击时触发 [**Click**](#click) 事件，以及标准鼠标、焦点和键盘事件集。默认情况下四个状态对象预设为纯中蓝色（[**WAYNESCOLOR_BLUE**](#) —— `&HAC7220`）背景和 15 像素曲线角。

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

## 视觉状态

按钮在每次重绘时选择四种状态之一绘制：

| 状态 | 时机 |
|------|------|
| [**PressedState**](#pressedstate) | 鼠标在按钮内按住不放。 |
| [**HoverState**](#hoverstate) | 鼠标在按钮外按住但开始在按钮内按下；或鼠标悬停但未按下。 |
| [**FocusedState**](#focusedstate) | 控件具有键盘焦点且鼠标未悬停或按下。 |
| [**NormalState**](#normalstate) | 以上均不满足。 |

每个状态是一个 [**WaynesButtonState**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState)——[**Corners**](/official/Reference/CustomControls/Styles/Corners)、[**BackgroundFill**](/official/Reference/CustomControls/Styles/Fill)、[**Borders**](/official/Reference/CustomControls/Styles/Borders) 和 [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) 的小型组合。

## 属性

### Anchors

调整大小时控件的哪些边附着到其容器。[**Anchors**](/official/Reference/CustomControls/Styles/Anchors)。继承。

### Caption

按钮上居中显示的文本。**String**。默认：`"Button"`。

语法：*object*.**Caption** [ = *string* ]

### Dock

控件在其容器内的停靠方式。[**DockMode**](/official/Reference/CustomControls/Enumerations/DockMode) 的成员。继承。

### FocusedState

控件具有键盘焦点但未悬停或按下时使用的 [**WaynesButtonState**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState)。

### Height

控件的高度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### HoverState

鼠标悬停在按钮上但未按下时使用的 [**WaynesButtonState**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState)（或鼠标按下后拖出按钮时）。

### Left

控件左边缘距其容器的水平偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Name

控件在其父窗体上的唯一设计时名称。**String**。继承。

### NormalState

按钮空闲时——未悬停、未焦点、未按下——使用的 [**WaynesButtonState**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState)。

### PressedState

鼠标在按钮上按住时使用的 [**WaynesButtonState**](/official/Reference/CustomControls/WaynesButton/WaynesButtonState)。

### TabIndex

控件在窗体 TAB 键导航顺序中的位置。**Long**。继承。

### TabStop

用户是否可以通过按 **TAB** 到达控件。**Boolean**。继承。默认：**True**。

### Top

控件上边缘距其容器的垂直偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Visible

控件当前是否显示。**Boolean**。继承。默认：**True**。

### Width

控件的宽度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

## 事件

### Click

用户点击按钮时触发（鼠标按下 + 在控件内释放）。

语法：*object*\_**Click**( )

### GotFocus

控件获得键盘焦点时触发。

语法：*object*\_**GotFocus**( )

### KeyDown

控件具有焦点时用户按下按键触发。

语法：*object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

控件具有焦点时用户输入字符键触发。

语法：*object*\_**KeyPress**( *KeyCode* **As Integer** )

### KeyUp

控件具有焦点时用户释放按键触发。

语法：*object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LostFocus

控件失去键盘焦点时触发。

语法：*object*\_**LostFocus**( )

### MouseDown

用户在控件上按下鼠标按钮时触发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseEnter

光标首次进入控件时触发。

语法：*object*\_**MouseEnter**( )

### MouseLeave

光标离开控件时触发。

语法：*object*\_**MouseLeave**( )

### MouseMove

光标在控件上移动时触发。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

用户在控件上释放鼠标按钮时触发。

语法：*object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )