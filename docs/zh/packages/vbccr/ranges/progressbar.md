---
title: 进度条控件（ProgressBar）
description: 进度条控件（ProgressBar） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0d9262b6-cebd-4643-9010-23841561513a'
  PropagateID: '0d9262b6-cebd-4643-9010-23841561513a'
  ReservedCode1: '7093ede6-92a1-4465-affb-966497e17333'
  ReservedCode2: '7093ede6-92a1-4465-affb-966497e17333'
---

# 进度条控件（ProgressBar）

封装 msctls_progress32 系统进度条控件，用于显示操作进度，支持标准、平滑、跑马灯等滚动模式及任务栏进度显示。

## 枚举

### PrbOrientationConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| PrbOrientationHorizontal | 0 | 水平方向 |
| PrbOrientationVertical | 1 | 垂直方向 |

### PrbScrollingConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| PrbScrollingStandard | 0 | 标准模式 |
| PrbScrollingSmooth | 1 | 平滑滚动 |
| PrbScrollingMarquee | 2 | 跑马灯模式 |

### PrbStateConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| PrbStateNormal | 1 | 正常状态 |
| PrbStateError | 2 | 错误状态（红色） |
| PrbStatePaused | 3 | 暂停状态（黄色） |

### CCMousePointerConstants

参见通用枚举。

## 属性

### Min
`Property Get Min() As Long`
`Property Let Min(ByVal Value As Long)`

最小值。

### Max
`Property Get Max() As Long`
`Property Let Max(ByVal Value As Long)`

最大值。

### Value
`Property Get Value() As Long`
`Property Let Value(ByVal Value As Long)`

当前值。

### Step
`Property Get Step() As Long`
`Property Let Step(ByVal Value As Long)`

步进增量。

### StepAutoReset
`Property Get StepAutoReset() As Boolean`
`Property Let StepAutoReset(ByVal Value As Boolean)`

StepIt 到达最大值时是否自动重置为最小值。

### MarqueeAnimation
`Property Get MarqueeAnimation() As Boolean`
`Property Let MarqueeAnimation(ByVal Value As Boolean)`

是否启用跑马灯动画。仅在 Scrolling 为 PrbScrollingMarquee 时有效。

### MarqueeSpeed
`Property Get MarqueeSpeed() As Long`
`Property Let MarqueeSpeed(ByVal Value As Long)`

跑马灯动画速度（毫秒）。仅在 Scrolling 为 PrbScrollingMarquee 时有效。

### Orientation
`Property Get Orientation() As PrbOrientationConstants`
`Property Let Orientation(ByVal Value As PrbOrientationConstants)`

进度条方向。

### Scrolling
`Property Get Scrolling() As PrbScrollingConstants`
`Property Let Scrolling(ByVal Value As PrbScrollingConstants)`

滚动模式。

### SmoothReverse
`Property Get SmoothReverse() As Boolean`
`Property Let SmoothReverse(ByVal Value As Boolean)`

是否启用平滑反转效果。需要 comctl32.dll 6.0 或更高版本。

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

背景颜色。

### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

前景颜色。

### State
`Property Get State() As PrbStateConstants`
`Property Let State(ByVal Value As PrbStateConstants)`

进度条状态（正常/错误/暂停）。

### ShowInTaskBar
`Property Get ShowInTaskBar() As Boolean`
`Property Let ShowInTaskBar(ByVal Value As Boolean)`

是否在任务栏上显示进度。需要 Windows 7 或更高版本。

### Text
`Property Get Text() As String`
`Property Let Text(ByVal Value As String)`

覆盖在进度条上的文本，支持占位符：`{0}` 为当前值，`{1}` 为最小值，`{2}` 为最大值，`{3}` 为百分比值。

### TextColor
`Property Get TextColor() As OLE_COLOR`
`Property Let TextColor(ByVal Value As OLE_COLOR)`

覆盖文本的颜色。

### BorderStyle
`Property Get BorderStyle() As Integer`
`Property Let BorderStyle(ByVal Value As Integer)`

边框样式（vbBSNone 或 vbFixedSingle）。

### VisualStyles
`Property Get VisualStyles() As Boolean`
`Property Let VisualStyles(ByVal Value As Boolean)`

是否启用视觉样式。

### hWnd
`Property Get hWnd() As LongPtr`

进度条控件的窗口句柄。

### hWndUserControl
`Property Get hWndUserControl() As LongPtr`

用户控件的窗口句柄。

### Font
`Property Get Font() As StdFont`
`Property Let Font(ByVal NewFont As StdFont)`
`Property Set Font(ByVal NewFont As StdFont)`

字体。

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

是否可用。

### MousePointer
`Property Get MousePointer() As CCMousePointerConstants`
`Property Let MousePointer(ByVal Value As CCMousePointerConstants)`

鼠标指针样式。参见通用枚举。

### MouseIcon
`Property Get MouseIcon() As IPictureDisp`
`Property Let MouseIcon(ByVal Value As IPictureDisp)`
`Property Set MouseIcon(ByVal Value As IPictureDisp)`

自定义鼠标图标。

### MouseTrack
`Property Get MouseTrack() As Boolean`
`Property Let MouseTrack(ByVal Value As Boolean)`

是否启用鼠标进入/离开跟踪。

### Name
`Property Get Name() As String`

控件名称。只读。

### Tag
`Property Get Tag() As String`
`Property Let Tag(ByVal Value As String)`

自定义数据。

### Parent
`Property Get Parent() As Object`

父对象。只读。

### Container
`Property Get Container() As Object`
`Property Set Container(ByVal Value As Object)`

容器对象。

### Left
`Property Get Left() As Single`
`Property Let Left(ByVal Value As Single)`

左边距。

### Top
`Property Get Top() As Single`
`Property Let Top(ByVal Value As Single)`

顶边距。

### Width
`Property Get Width() As Single`
`Property Let Width(ByVal Value As Single)`

宽度。

### Height
`Property Get Height() As Single`
`Property Let Height(ByVal Value As Single)`

高度。

### Visible
`Property Get Visible() As Boolean`
`Property Let Visible(ByVal Value As Boolean)`

是否可见。

### ToolTipText
`Property Get ToolTipText() As String`
`Property Let ToolTipText(ByVal Value As String)`

工具提示文本。

### HelpContextID
`Property Get HelpContextID() As Long`
`Property Let HelpContextID(ByVal Value As Long)`

帮助上下文 ID。

### WhatsThisHelpID
`Property Get WhatsThisHelpID() As Long`
`Property Let WhatsThisHelpID(ByVal Value As Long)`

"这是什么"帮助 ID。

### DragIcon
`Property Get DragIcon() As IPictureDisp`
`Property Let DragIcon(ByVal Value As IPictureDisp)`
`Property Set DragIcon(ByVal Value As IPictureDisp)`

拖拽图标。

### DragMode
`Property Get DragMode() As Integer`
`Property Let DragMode(ByVal Value As Integer)`

拖拽模式。

## 方法

### StepIt
`Public Sub StepIt()`

按 Step 属性指定的增量推进当前位置。

### Increment
`Public Sub Increment(ByVal Delta As Long)`

按指定增量推进当前位置。

### Drag
`Public Sub Drag([ByRef Action As Variant])`

开始、结束或取消拖放操作。

### SetFocus
`Public Sub SetFocus()`

将焦点移至控件。

### ZOrder
`Public Sub ZOrder([ByRef Position As Variant])`

设置控件的 Z 顺序。

### OLEDrag
`Public Sub OLEDrag()`

启动 OLE 拖放操作。

### Refresh
`Public Sub Refresh()`

强制重绘控件。

## 事件

### Change
`Public Event Change()`

Value 属性值发生改变时触发。

### Click
`Public Event Click()`

单击控件时触发。

### DblClick
`Public Event DblClick()`

双击控件时触发。

### MouseDown
`Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`

按下鼠标按钮时触发。

### MouseUp
`Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

释放鼠标按钮时触发。

### MouseMove
`Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

移动鼠标时触发。

### MouseEnter
`Public Event MouseEnter()`

鼠标进入控件时触发。

### MouseLeave
`Public Event MouseLeave()`

鼠标离开控件时触发。

### KeyDown
`Public Event KeyDown(KeyCode As Integer, Shift As Integer)`

按下按键时触发。

### KeyUp
`Public Event KeyUp(KeyCode As Integer, Shift As Integer)`

释放按键时触发。

### KeyPress
`Public Event KeyPress(KeyChar As Integer)`

按键字符输入时触发。

## 代码示例

```vb
' 标准进度条
ProgressBar1.Min = 0
ProgressBar1.Max = 100
ProgressBar1.Value = 0
ProgressBar1.Step = 10
ProgressBar1.StepIt

' 带文本覆盖的进度条
ProgressBar1.Min = 0
ProgressBar1.Max = 1000
ProgressBar1.Text = "正在处理 {3}%"
ProgressBar1.TextColor = vbWhite

' 跑马灯模式（不确定进度）
ProgressBar1.Scrolling = PrbScrollingMarquee
ProgressBar1.MarqueeAnimation = True
ProgressBar1.MarqueeSpeed = 30

' 任务栏进度显示（Windows 7+）
ProgressBar1.ShowInTaskBar = True
ProgressBar1.State = PrbStateNormal
```