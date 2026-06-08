---
title: ProgressBar
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/ProgressBar
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0826353a-8308-4d42-aab8-bc15de42ba5c'
  PropagateID: '0826353a-8308-4d42-aab8-bc15de42ba5c'
  ReservedCode1: '9e4c4e6b-40cc-4bd9-9d58-083f4021faa8'
  ReservedCode2: '9e4c4e6b-40cc-4bd9-9d58-083f4021faa8'
---

# ProgressBar 类

**ProgressBar** 是一个水平或垂直条，可视化表示范围内的进度。三个可配置轴塑造视觉：[**Scrolling**](#scrolling)（分段/平滑/跑马灯）、[**State**](#state)（Normal / Error / Paused，为条着色以匹配OS主题）和 [**Orientation**](#orientation)（水平或垂直）。

```vb
Private Sub StartTask()
    ProgressBar1.Min = 0
    ProgressBar1.Max = ItemCount
    ProgressBar1.Step = 1
    ProgressBar1.Value = 0
End Sub

Private Sub OnItemDone()
    ProgressBar1.StepIt   ' advances by Step (1 here) and fires Change
End Sub

Private Sub OnTaskFailed()
    ProgressBar1.State = PrbStateError
End Sub
```

对于不确定进度（例如等待没有长度信息的服务器响应），使用跑马灯变体：

```vb
ProgressBar1.Scrolling = PrbScrollingMarquee
ProgressBar1.MarqueeSpeed = 30       ' milliseconds per animation step
ProgressBar1.MarqueeAnimation = True ' start animating
```

控件从 `BaseControlNotFocusable2` 继承不可聚焦矩形可停靠成员 --- 大小、位置、**Anchors**、**Dock**、**Appearance**、**MousePointer** / **MouseIcon**、**ToolTipText**、**DragMode** / **DragIcon**、**Drag**、**Refresh**、**ZOrder**、**CausesValidation**、**VisualStyles**、**hWnd**、**HelpContextID** / **WhatsThisHelpID**。

## 三个配置轴

视觉效果是三个属性的笛卡尔积：

- **[Scrolling](#scrolling)** --- *Standard*（默认，动画分段条）、*Smooth*（连续块 --- 结合 [**SmoothReverse**](#smoothreverse) 允许进度条递减）或 *Marquee*（不确定动画条纹；通过 [**MarqueeAnimation**](#marqueeanimation) + [**MarqueeSpeed**](#marqueespeed) 控制）。
- **[State](#state)** --- *Normal*（主题默认颜色，通常为绿色）、*Error*（通常为红色）或 *Paused*（通常为黄色）。OS根据当前主题选择实际颜色。
- **[Orientation](#orientation)** --- *Horizontal* 或 *Vertical*。

三者均可在运行时更改；底层Win32样式重新应用而无需重新创建窗口。

## 范围、值和步进

[**Min**](#min) 和 [**Max**](#max) 界定范围。[**Value**](#value) 是当前位置。[**Step**](#step) 是 [**StepIt**](#stepit) 推进进度条的量，用于驱动常见的循环模式：

```vb
ProgressBar1.Min = 0
ProgressBar1.Max = Items.Count
ProgressBar1.Step = 1
For Each item In Items
    DoWork item
    ProgressBar1.StepIt
Next
```

每次 [**StepIt**](#stepit) 调用将 [**Value**](#value) 增加 [**Step**](#step) 并触发 [**Change**](#change) 事件。

属性
----------

### BackColor

绘制在进度条段后面的背景颜色。**OLE_COLOR**。默认：**vbButtonFace**。通过 `PBM_SETBKCOLOR` 应用。

### BorderStyle

控件的边框样式。[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants) 的成员。默认：**vbNoBorder**。

### ForeColor

进度条段本身的颜色。**OLE_COLOR**。默认：**vbHighlight**。通过 `PBM_SETBARCOLOR` 应用。

::: info
OS视觉样式主题通常会覆盖标准渲染中的此值。要在运行时看到分配的 **ForeColor**，将 [**VisualStyles**](/official/Reference/VB/CheckBox/#visualstyles) 设为 **False** 以禁用视觉样式。
:::

### MarqueeAnimation

跑马灯动画当前是否运行。**Boolean**。默认：**False**。仅在 [**Scrolling**](#scrolling) 为 **PrbScrollingMarquee** 时有意义。设为 **True** 开始，**False** 停止。

### MarqueeSpeed

跑马灯动画更新间隔，以毫秒为单位。**Long**。默认：`80`。

### Max

范围的上限。**Long**。默认：`100`。[**Min**](#min) 和 [**Max**](#max) 的组合通过 `PBM_SETRANGE32` 应用于底层控件。

### Min

范围的下限。**Long**。默认：`0`。

### Orientation

进度条的方向。[**PrbOrientation**](#prborientation) 的成员。默认：**PrbOrientationHorizontal**。

### Scrolling

进度的视觉样式。[**PrbScrolling**](#prbscrolling) 的成员。默认：**PrbScrollingStandard**。

### SmoothReverse

平滑进度条是否可以递减（当 [**Value**](#value) 被设为更小的数时）。**Boolean**。默认：**False**。没有此标志时，已达到比如80%的平滑条在 [**Value**](#value) 减少时不会可见地递减 --- 它只是弹回。仅在 [**Scrolling**](#scrolling) 为 **PrbScrollingSmooth** 时有意义。

### State

进度条的视觉状态。[**PrbState**](#prbstate) 的成员。默认：**PrbStateNormal**。OS使用该值为进度条着色 --- **PrbStateError** 通常渲染为红色，**PrbStatePaused** 通常渲染为黄色，**PrbStateNormal** 使用主题默认进度颜色（通常为绿色）。

### Step

[**StepIt**](#stepit) 推进 [**Value**](#value) 的量。**Long**。默认：`10`。

### Value

范围内的当前位置。**Long**。默认成员。通过 `PBM_GETPOS` / `PBM_SETPOS` 读写。在控件初始化阶段之后更改值时触发 [**Change**](#change)。

方法
-------

### StepIt

将 [**Value**](#value) 推进 [**Step**](#step)，到达 [**Max**](#max) 后回绕到 [**Min**](#min)。触发 [**Change**](#change) 事件。

语法：*object*.**StepIt**

事件
------

### Change

当 [**Value**](#value) 已更改时触发 --- 无论是通过直接赋值、通过 [**StepIt**](#stepit)，还是通过代码调整 [**Step**](#step) 并重新应用。

语法：*object*\_**Change**( )

### Click, DblClick

继承的鼠标事件。

### DragDrop, DragOver

继承的拖放事件。

### Initialize

控件窗口创建后触发。

### MouseDown, MouseMove, MouseUp

继承的鼠标事件。

### OLECompleteDrag, OLEDragDrop, OLEDragOver, OLEGiveFeedback, OLESetData, OLEStartDrag

继承的OLE拖放事件。

## PrbOrientation

确定进度条的方向。在 **ProgressBar** 类上声明。

| 成员                          | 值 | 描述                                |
|---------------------------------|-------|--------------------------------------------|
| **PrbOrientationHorizontal** | 0 | 水平条；进度从左到右流动。 |
| **PrbOrientationVertical** | 1 | 垂直条；进度从下到上流动。 |

## PrbScrolling

确定进度条在值变化时如何动画。在 **ProgressBar** 类上声明。

| 成员                       | 值 | 描述                                                            |
|------------------------------|-------|------------------------------------------------------------------------|
| **PrbScrollingStandard** | 0 | 分段条，带有经典的离散块动画。 |
| **PrbScrollingSmooth** | 1 | 连续块，无段间间隙。配合 [**SmoothReverse**](#smoothreverse) 允许值可见地递减。 |
| **PrbScrollingMarquee** | 2 | 不确定动画条纹。通过 [**MarqueeAnimation**](#marqueeanimation) 和 [**MarqueeSpeed**](#marqueespeed) 控制；实际 [**Value**](#value) 无关。 |

## PrbState

确定进度条的颜色主题。在 **ProgressBar** 类上声明。

| 成员                      | 值 | 描述                                                                       |
|-----------------------------|-------|-----------------------------------------------------------------------------------|
| **PrbStateNormal**   | 1 | 主题默认进度颜色（通常为绿色）。 |
| **PrbStateError**     | 2 | 错误状态（通常为红色）。                    |
| **PrbStatePaused**   | 3 | 暂停状态（通常为黄色）。                |

## 另见

- [Slider](/official/Reference/WinNativeCommonCtls/Slider) --- 当用户需要在范围内设置值，而不仅仅是查看进度时
- [ControlTypeConstants](/official/Reference/VBRUN/Constants/ControlTypeConstants) --- **vbProgressBar** 所在位置