---
title: CustomControlTimer
parent: Framework
permalink: /tB/Packages/CustomControls/Framework/CustomControlTimer
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ffe4ea4a-d8a3-494b-ac3c-996cf9a76934'
  PropagateID: 'ffe4ea4a-d8a3-494b-ac3c-996cf9a76934'
  ReservedCode1: 'a13c6c39-1a4a-45e2-a731-fed6ee903630'
  ReservedCode2: 'a13c6c39-1a4a-45e2-a731-fed6ee903630'
---

# CustomControlTimer 类
由 [**CustomControlContext.CreateTimer**](/official/Reference/CustomControls/Framework/CustomControlContext#createtimer) 创建的定时器，由创建它的控件拥有。定时器以 [**Interval**](#interval) 指定的速率触发 [**OnTimer**](#ontimer)，在将 [**Enabled**](#enabled) 设置为 **True** 启动后开始。

框架以 **stdole.IUnknown** 类型返回定时器；存储前需用 `CType(Of CustomControlTimer)(…)` 转换为 **CustomControlTimer**。控件还应使用 `WithEvents` 声明字段，以便处理 **OnTimer** 事件。

```vb
Private WithEvents InternalTimer As CustomControlTimer

Private Sub OnInitialize(ByVal Ctx As CustomControls.CustomControlContext) _
        Implements CustomControls.ICustomControl.Initialize

    Set Me.ControlContext = Ctx
    Set Me.InternalTimer = CType(Of CustomControlTimer)(Ctx.CreateTimer())
    Me.InternalTimer.Interval = 250
    Me.InternalTimer.Enabled = True
End Sub

Private Sub OnTimer() Handles InternalTimer.OnTimer
    ' fire every 250ms
End Sub
```

[**WaynesTimer**](/official/Reference/CustomControls/WaynesTimer) 封装单个 **CustomControlTimer** 并将其 **Interval** / **Enabled** 作为设计器可见属性重新暴露。[**WaynesSlider**](/official/Reference/CustomControls/WaynesSlider/) 使用一个作为内部鼠标按下自动重复定时器。

## 属性

### Enabled

定时器当前是否正在运行。设置为 **True** 启动；设置为 **False** 停止。**Boolean**。

语法：*object*.**Enabled** [ = *value* ]

### Interval

连续 [**OnTimer**](#ontimer) 事件之间的毫秒数。**Long**。间隔为 0 的定时器永不触发。

语法：*object*.**Interval** [ = *value* ]

在定时器启用时更改 **Interval** 会在下一次计时生效。

## 事件

### OnTimer

在定时器启用时每隔 [**Interval**](#interval) 毫秒触发。

语法：*object*\_**OnTimer**( )