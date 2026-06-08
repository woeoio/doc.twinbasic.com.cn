---
title: Timer
parent: VB Package
permalink: /tB/Packages/VB/Timer/
---

# Timer 类

**Timer**是非可视的Win32控件，以可编程间隔引发[**Timer**](#timer)事件。在设计时将其拖放到[**Form**](/official/Reference/VB/Form/)（或**UserControl**）上，将[**Interval**](#interval)设置为所需的毫秒周期，将[**Enabled**](#enabled)设置为**True**，并处理[**Timer**](#timer)事件。计时器在运行时不可见——它们在设计器中仅显示为图标。

默认属性为[**Enabled**](#enabled)，默认事件为[**Timer**](#timer)。

```vb
Private Sub Form_Load()
    Timer1.Interval = 1000      ' 每秒触发一次
    Timer1.Enabled  = True
End Sub

Private Sub Timer1_Timer()
    lblClock.Caption = Format$(Now, "hh:mm:ss")
End Sub
```


## 启动和停止

两个属性共同决定[**Timer**](#timer)事件是否触发：

- [**Enabled**](#enabled)是主开关。当为**False**时，计时器处于休眠状态，无论[**Interval**](#interval)如何。
- [**Interval**](#interval)是事件之间的周期，以毫秒为单位。设置为`0`时，即使[**Enabled**](#enabled)为**True**也不会触发事件。

任一属性都可以从[**Timer**](#timer)处理器内部切换——一次性计时器在首次计时后禁用自身：

```vb
Private Sub tmrStartup_Timer()
    tmrStartup.Enabled = False      ' 仅触发一次
    LoadInitialData
End Sub
```

为[**Interval**](#interval)赋负值会引发运行时错误380（*无效的属性值*）。

## 精度和分辨率

控件包装Win32的逐窗口计时器队列，运行在标准消息泵上。两个后果：

- **分辨率粗糙。** 操作系统将计时器计时量化为系统时钟周期——桌面Windows上通常约15.6毫秒。短于此的间隔被静默向上取整。对于亚毫秒级定时，请直接使用多媒体计时器或`QueryPerformanceCounter`。
- **高负载下可能跳过计时。** 如果消息泵在计时时被阻塞，事件不会排队——运行时在消息泵恢复时传递单个[**Timer**](#timer)事件，而非每个错过的周期一个。处理器内部的长时间运行工作因此会延长下一个间隔而非产生积压。

对于周期性UI更新（时钟、进度动画、外部状态轮询），**Timer**是正确的工具。对于精确的挂钟定时、音频调度或在重CPU负载下必须跟上的任务，则不是。

## 控件数组

计时器控件数组允许一个处理器服务多个周期性任务，同时保持单一的共享代码路径。数组在设计时在第一个项上声明；后续项在运行时用**Load**添加、用**Unload**移除，与窗口控件完全相同。在共享的[**Timer**](#timer)处理器内部，[**Index**](#index)标识哪个计时器触发了。

```vb
Private Sub tmrPoll_Timer(Index As Integer)
    Select Case Index
        Case 0: RefreshStatus
        Case 1: PollPrinterQueue
        Case 2: TrimLogFile
    End Select
End Sub
```

[**Index**](#index)在不是控件数组一部分的计时器上读取时会引发运行时错误343（*对象不是数组*）。

## 属性

### ControlType

标识此控件为计时器的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbTimer**。

### Enabled

计时器的主开关。当为**False**时，计时器处于休眠状态，无论[**Interval**](#interval)如何，[**Timer**](#timer)事件不会触发。**Boolean**，默认**True**。**默认属性。**

语法：*object*.**Enabled** [ = *boolean* ]

### Index

当计时器是控件数组的一部分时，此实例在数组中从0开始的**Long**索引。运行时只读。在不是数组一部分的计时器上会引发运行时错误343（*对象不是数组*）。

### Interval

[**Timer**](#timer)事件之间的周期，以毫秒为单位。**Long**，默认`0`。

语法：*object*.**Interval** [ = *value* ]

*value*
: 给出毫秒间隔的非负**Long**。设置为`0`停止事件触发。负值引发运行时错误380（*无效的属性值*）。

有效分辨率为操作系统时钟周期（桌面Windows上约15.6毫秒）；更短的间隔被静默向上取整。参见[精度和分辨率](#accuracy-and-resolution)。

### Left

设计器中计时器图标的水平位置，以容器的**ScaleMode**单位。**Single**。运行时值没有视觉效果——计时器不可见——但被保留以便设计器可以将图标放回原位。

### Name

计时器在其父窗体上的唯一设计时名称。**String**，运行时只读。

### Parent

对包含此计时器的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）的引用。只读。

### Tag

应用程序可用于将自定义数据与计时器关联的自由格式**String**。框架忽略。继承自基控件类。对控件数组很有用——例如保存轮询计时器负责的操作名称。

### Top

设计器中计时器图标的垂直位置。[**Left**](#left)的对应项；与[**Left**](#left)一样，运行时没有视觉效果。

## 事件

### Timer

当[**Enabled**](#enabled)为**True**且[**Interval**](#interval)大于零时，每隔[**Interval**](#interval)毫秒引发。**默认事件。**

语法：*object*\_**Timer**( )

对于控件数组一部分的计时器，处理器接收触发计时器的数组[**Index**](#index)：

语法：*object*\_**Timer**( *Index* **As Integer** )

事件通过正常的Win32消息泵传递——参见[精度和分辨率](#accuracy-and-resolution)了解其影响。