---
title: WaynesTimer
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/WaynesTimer
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3a657f64-c9fb-416c-a885-7556a7b1ce99'
  PropagateID: '3a657f64-c9fb-416c-a885-7556a7b1ce99'
  ReservedCode1: 'ba6e219a-2a87-431c-9080-92e08b73b281'
  ReservedCode2: 'ba6e219a-2a87-431c-9080-92e08b73b281'
---

# WaynesTimer 类
非可视定时器控件。封装内部 [**CustomControlTimer**](/official/Reference/CustomControls/Framework/CustomControlTimer) 并暴露其 [**Interval**](#interval) / [**Enabled**](#enabled) 作为设计器可见属性——在设计时将 **WaynesTimer** 拖放到 [**WaynesForm**](/official/Reference/CustomControls/WaynesForm/) 上，设置间隔，处理 [**Timer**](#timer) 事件即可按重复计划运行代码。

在设计时，控件在其矩形中居中绘制一个 🕑 时钟图标，背景为浅灰色，缩放以适应控件。在运行时控件不可见——其可见的 **Width** 和 **Height** 在初始化时被限制为 32×32，但控件本身不绘制任何内容。

```vb
Private Sub Form_Load()
    Timer1.Interval = 1000
    Timer1.Enabled = True
End Sub

Private Sub Timer1_Timer()
    lblClock.Caption = Format$(Now(), "hh:nn:ss")
End Sub
```

## 属性

### Anchors

调整大小时控件的哪些边附着到其容器。[**Anchors**](/official/Reference/CustomControls/Styles/Anchors)。继承。（运行时无视觉效果，因为控件不绘制任何内容。）

### Dock

控件在其容器内的停靠方式。[**DockMode**](/official/Reference/CustomControls/Enumerations/DockMode) 的成员。继承。

### Enabled

定时器当前是否正在运行。设置为 **True** 启动；设置为 **False** 停止。**Boolean**。

语法：*object*.**Enabled** [ = *value* ]

### Height

控件的高度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。初始化时强制为 32。

### Interval

连续 [**Timer**](#timer) 事件之间的毫秒数。**Long**。值为 0 表示定时器永不触发。

语法：*object*.**Interval** [ = *value* ]

在定时器启用时更改 **Interval** 会在下一次计时生效。

### Left

控件左边缘距其容器的水平偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Name

控件在其父窗体上的唯一设计时名称。**String**。继承。

### Top

控件上边缘距其容器的垂直偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Visible

控件当前是否显示。**Boolean**。继承。（运行时无视觉效果。）

### Width

控件的宽度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。初始化时强制为 32。

## 事件

### Timer

在 [**Enabled**](#enabled) 为 **True** 时每隔 [**Interval**](#interval) 毫秒触发。

语法：*object*\_**Timer**( )