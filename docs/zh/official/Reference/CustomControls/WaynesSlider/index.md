---
title: WaynesSlider
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/WaynesSlider/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b0115a90-00be-40ff-b1c2-c389273752f8'
  PropagateID: 'b0115a90-00be-40ff-b1c2-c389273752f8'
  ReservedCode1: 'ec244081-a2f2-4222-ba5c-08ef76b2c97e'
  ReservedCode2: 'ec244081-a2f2-4222-ba5c-08ef76b2c97e'
---

# WaynesSlider 类
水平或垂直滑块控件——轨道上可拖动的滑块——用于编辑范围内的整数值。用户可以拖动滑块、点击轨道按一页步进值、或在控件具有焦点时使用箭头键；在轨道上按住鼠标按钮时激活可选的自动递增定时器。

控件绘制三种视觉状态（[**NormalState**](#normalstate)、[**HoverState**](#hoverstate)、[**FocusedState**](#focusedstate)），由并行的 [**WaynesSliderState**](/official/Reference/CustomControls/WaynesSlider/WaynesSliderState) 子对象控制，每个子对象有独立的背景和滑块的填充/边框/角样式。当前 [**Value**](#value) 可选渲染为滑块上的文本——原始整数或格式化百分比——取决于 [**DisplayFormat**](#displayformat)。

如果控件首次显示时 [**Height**](#height) 大于 [**Width**](#width)，滑块默认 [**Direction**](#direction) = **Vertical**；否则默认 **Horizontal**。

```vb
Private Sub Form_Load()
    sldVolume.MinValue = 0
    sldVolume.MaxValue = 100
    sldVolume.StepValue = 5
    sldVolume.PagingStepValue = 10
    sldVolume.DisplayFormat = SliderDisplayValueFormat.DisplayPercentage
End Sub
```

[**Value**](#value) 只是一个 **Long** 属性——从控件外部赋值会移动滑块并触发重绘。结合 [**WaynesTimer**](/official/Reference/CustomControls/WaynesTimer)，滑块可以在其范围内动画自身：

```vb
Private Sub Form_Load()
    sldProgress.MinValue = 0
    sldProgress.MaxValue = 100
    sldProgress.Value = 0
    Timer1.Interval = 50
    Timer1.Enabled = True
End Sub

Private Sub Timer1_Timer()
    If sldProgress.Value < sldProgress.MaxValue Then
        sldProgress.Value = sldProgress.Value + 1
    Else
        Timer1.Enabled = False
    End If
End Sub
```

## SliderDirection

滑块方向枚举，声明在 **WaynesSlider** 类内部。赋给 [**Direction**](#direction)。

| 常量 | 值 | 说明 |
|------|----|------|
| **Horizontal** | 0 | 轨道从左到右；箭头键 **Left** / **Right** 步进值。 |
| **Vertical** | 1 | 轨道从上到下；箭头键 **Up** / **Down** 步进值。 |

## SliderDisplayValueFormat

[**Value**](#value) 在滑块上的渲染方式，声明在 **WaynesSlider** 类内部。赋给 [**DisplayFormat**](#displayformat)。

| 常量 | 值 | 说明 |
|------|----|------|
| **DisplayValue** | 0 | 显示原始整数值。 |
| **DisplayPercentage** | 1 | 显示值为范围的百分比——`FormatPercent((Value - MinValue) / (MaxValue - MinValue), 1)`。 |
| **DisplayNone** | 2 | 滑块上无文本。 |

## 属性

### Anchors

调整大小时控件的哪些边附着到其容器。[**Anchors**](/official/Reference/CustomControls/Styles/Anchors)。继承。

### Direction

滑块是水平还是垂直布局。[**SliderDirection**](#sliderdirection) 的成员。默认：首次显示时根据控件宽高比选择（**Height** > **Width** 时垂直，否则水平）。

### DisplayFormat

[**Value**](#value) 如何以文本形式渲染在滑块上。[**SliderDisplayValueFormat**](#sliderdisplayvalueformat) 的成员。默认：**DisplayValue**。

### Dock

控件在其容器内的停靠方式。[**DockMode**](/official/Reference/CustomControls/Enumerations/DockMode) 的成员。继承。

### FocusedState

控件具有键盘焦点且鼠标未悬停时使用的 [**WaynesSliderState**](/official/Reference/CustomControls/WaynesSlider/WaynesSliderState)。

### Height

控件的高度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### HoverState

鼠标悬停在滑块或轨道上时使用的 [**WaynesSliderState**](/official/Reference/CustomControls/WaynesSlider/WaynesSliderState)。

### Left

控件左边缘距其容器的水平偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### MaxValue

滑块值范围的上限。**Long**。默认：100。

### MinValue

滑块值范围的下限。**Long**。默认：0。

### MoveInterval

在轨道上按住鼠标按钮时 [**Value**](#value) 自动递增的间隔（毫秒）。**Long**。值为 0 禁用自动重复。

### Name

控件在其父窗体上的唯一设计时名称。**String**。继承。

### NormalState

滑块空闲时——未悬停、未焦点——使用的 [**WaynesSliderState**](/official/Reference/CustomControls/WaynesSlider/WaynesSliderState)。

### PagingStepValue

用户在滑块外点击轨道（或在轨道上按住鼠标按钮）时 [**Value**](#value) 的移动量。**Long**。默认：1。

### StepValue

滑块的粒度——每次绘制前 [**Value**](#value) 被四舍五入为 [**MinValue**](#minvalue) 偏移量的 **StepValue** 倍数。**Long**。默认：1。

### TabIndex

控件在窗体 TAB 键导航顺序中的位置。**Long**。继承。

### TabStop

用户是否可以通过按 **TAB** 到达控件。**Boolean**。继承。默认：**True**。

### Top

控件上边缘距其容器的垂直偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Value

滑块当前在范围内的位置，以整数表示。**Long**。绘制时限制在 `[MinValue, MaxValue]` 内，除非 [**WrapAround**](#wraparound) 为 **True**。

语法：*object*.**Value** [ = *value* ]

### Visible

控件当前是否显示。**Boolean**。继承。默认：**True**。

### Width

控件的宽度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### WrapAround

当 **False**（默认）时，[**Value**](#value) 限制在 `[MinValue, MaxValue]` 范围内。当 **True** 时，允许范围外的值，滑块环绕——滑块在相反边缘绘制额外滑块实例以实现连续的视觉效果。**Boolean**。