---
title: AddinTimer
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/AddinTimer
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'df4bf19d-f0fb-4c9c-ab8e-909dc958147a'
  PropagateID: 'df4bf19d-f0fb-4c9c-ab8e-909dc958147a'
  ReservedCode1: '932e303c-5f4f-45ad-8de5-55a043a02c6e'
  ReservedCode2: '932e303c-5f4f-45ad-8de5-55a043a02c6e'
---

# AddinTimer 类

一个简单的周期性回调辅助类。**AddinTimer** 是包中**唯一可由用户实例化的类**——其他每个 CoClass 都由 IDE 提供给插件；这个类由插件用 `New` 创建。内部封装了 Win32 的 `SetTimer` / `KillTimer` 对，针对 `hwnd = 0`，并从 IDE 的 UI 线程触发其 [**Timer**](#timer) 事件。

```vb
Private WithEvents Timer As AddinTimer

Private Sub Button1_OnClick()
    Set Timer = New AddinTimer
    Timer.Interval = 500          ' 毫秒
    Timer.Enabled  = True
End Sub

Private Sub Timer_Timer()
    ' 每 500 毫秒在 IDE 的 UI 线程上触发
End Sub
```

通过设置 [**Enabled**](#enabled) = **False** 来停止计时器，或者简单地释放最后一个引用——`Class_Terminate` 会自动取消底层 Win32 计时器。[**Enabled**](#enabled) 和 [**Interval**](#interval) 都是实时的：对任一属性赋值都会用新值重新启动底层 Win32 计时器，因此在计时器运行时更改间隔会立即生效。

包中没有任何内容*要求*使用此辅助类——直接使用 `SetTimer` / `KillTimer` 对（或任何其他周期性机制）同样有效；示例 15 的停留时间模式就使用了原始 Win32 调用。当事件绑定类的便利性优于直接管理 Win32 管道时，**AddinTimer** 是正确的选择。


## 属性

### Enabled

控制底层 Win32 计时器是否运行。**Boolean**，默认 **False**。对 **Enabled** 赋值会立即重新启动（或取消）计时器。

语法：*timer*.**Enabled** [ = *value* ]

### Interval

计时器的周期，以毫秒为单位。**Long**，默认 **0**。**Interval = 0** 时计时器实际上是惰性的；设置一个正值并将 [**Enabled**](#enabled) 设为 **True** 以启动周期性回调。对 **Interval** 赋值会用新值重新启动计时器，因此下一次触发将在新间隔后发生，而非旧间隔。

语法：*timer*.**Interval** [ = *milliseconds* ]

## 事件

### Timer

当 [**Enabled**](#enabled) 为 **True** 时，每隔 [**Interval**](#interval) 毫秒触发一次。在 IDE 的 UI 线程上运行。

语法：*timer*_**Timer**()

处理程序中的长时间运行工作会阻塞 UI 线程直到其返回——保持处理程序简短，需要时将繁重工作卸载到后台机制。