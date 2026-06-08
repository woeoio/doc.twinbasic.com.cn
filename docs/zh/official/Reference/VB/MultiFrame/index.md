---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ed50fbce-3715-455f-a5e2-a5095ce4f586'
  PropagateID: 'ed50fbce-3715-455f-a5e2-a5095ce4f586'
  ReservedCode1: 'd91a965e-9b3a-4de4-b748-23e80d4f9673'
  ReservedCode2: 'd91a965e-9b3a-4de4-b748-23e80d4f9673'
---

---
title: MultiFrame
parent: VB Package
permalink: /tB/Packages/VB/MultiFrame/
---

# MultiFrame 类

**MultiFrame**是一个布局容器，将一组[**Frame**](/official/Reference/VB/Frame/)控件排列在单条水平或垂直带中，并在**MultiFrame**自身调整大小时调整它们的尺寸。每个包含的框架保留自己的边框、标题和子控件；**MultiFrame**仅决定每个框架的位置和宽度（或高度）。

通过将框架的[**Container**](/official/Reference/VB/Frame/#container)设置为指向**MultiFrame**来关联框架。框架的[**MultiFramePosition**](/official/Reference/VB/Frame/#multiframeposition)选择其在序列中的位置，[**MultiFrameSize**](/official/Reference/VB/Frame/#multiframesize)给出其尺寸作为**MultiFrame**可用范围的百分比。**MultiFrameSize**为`0`的框架共享固定尺寸框架布局后剩余的范围。

默认事件是[**Initialize**](#initialize)。没有默认属性。

```vb
Private Sub Form_Load()
    mfPanels.Direction = vbDirectionHorizontal

    Set fraLeft.Container = mfPanels
    fraLeft.MultiFramePosition = 0
    fraLeft.MultiFrameSize = 30                  ' fixed 30% of the strip

    Set fraCenter.Container = mfPanels
    fraCenter.MultiFramePosition = 1
    fraCenter.MultiFrameSize = 0                 ' shares the remaining space

    Set fraRight.Container = mfPanels
    fraRight.MultiFramePosition = 2
    fraRight.MultiFrameSize = 0                  ' shares the remaining space
End Sub
```


## 方向和尺寸

[**Direction**](#direction)选择**vbDirectionHorizontal**（默认——框架从左到右排列）或**vbDirectionVertical**（框架从上到下堆叠）。在运行时更改**Direction**会触发立即重新布局。

对于每个包含的框架，[**MultiFrameSize**](/official/Reference/VB/Frame/#multiframesize)给出其范围作为**MultiFrame**宽度（水平）或高度（垂直）的百分比。**MultiFrameSize**为`0`的框架平均共享剩余范围——因此典型模式是给边缘面板固定百分比，将一个中心面板保持为`0`使其吸收窗口调整大小。百分比不会被钳制；如果固定尺寸框架已超过**MultiFrame**的范围，自动调整尺寸的框架会收缩为零。

## 位置和重排

每个包含的框架通过其[**MultiFramePosition**](/official/Reference/VB/Frame/#multiframeposition)属性（零基）锚定到顺序位置。位置保持连续：在运行时为框架分配新的**MultiFramePosition**会使**MultiFrame**将其余框架上移或下移，使旧槽位关闭并在请求的索引处打开新槽位。重复或超出范围的位置在下一次布局传递时被规范化——**MultiFrame**回退到父窗体上的原始控件顺序，从`0`开始对框架重新编号。

[**Container**](/official/Reference/VB/Frame/#container)是**MultiFrame**但**MultiFramePosition**为`-1`的框架在首次构建布局时被附加到下一个空闲槽位。

## 在运行时采用框架

框架到**MultiFrame**的映射在每次布局传递时从父窗体的控件集合中发现：当框架的[**Container**](/official/Reference/VB/Frame/#container)属性指向**MultiFrame**时，框架出现在带中。发现集随后被缓存。要强制重建缓存——例如在运行时重新设置框架的父级后——给[**FramesCount**](#framescount)赋任意值：

```vb
Set fraExtra.Container = mfPanels
mfPanels.FramesCount = 0       ' assigned value is ignored; the layout cache is rebuilt
```

**MultiFrame**在原地重新定位框架的现有窗口；它不会更改框架的Win32父级，因此框架仍然是窗体的子级并继续正常引发其事件。

## 属性

### Anchors

决定控件的哪些边随容器对应边调整的**Anchors**对象集合。只读——通过返回的**Anchors**对象设置各个`.Left`、`.Top`、`.Right`、`.Bottom`标志。

### BackColor

**MultiFrame**绘图表面的背景色，作为**OLE_COLOR**。默认为系统窗口背景色。仅在包含的框架未完全覆盖范围时可见——例如当其**MultiFrameSize**之和小于100%时。

### Container

承载此**MultiFrame**的控件——通常是窗体。用**Get**读取，用**Set**更改。设置**Container**在运行时将**MultiFrame**重新设置为其他容器的子级。

### ControlType

标识此控件的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbShape**。

### Direction

包含框架的布局方向。**MultiFrameDirectionConstants**的成员：**vbDirectionHorizontal**（0，默认——框架从左到右排列）或**vbDirectionVertical**（1——框架从上到下堆叠）。更改**Direction**会触发包含框架的立即重新布局。

### Dock

**MultiFrame**在其容器中的停靠位置。[**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants)的成员：**vbDockNone**（默认）、**vbDockLeft**、**vbDockTop**、**vbDockRight**、**vbDockBottom**或**vbDockFill**。停靠的**MultiFrame**忽略[**Anchors**](#anchors)。

### FramesCount

**MultiFrame**布局中当前[**Frame**](/official/Reference/VB/Frame/)控件的数量。**Long**。

语法：*object*.**FramesCount** [ = *value* ]

读取**FramesCount**返回当前布局缓存的大小。赋任意值会丢弃缓存使其在下一次布局传递时重建——所赋的数值本身被忽略。将赋值用作运行时重新设置框架父级后的手动刷新。

### Height

**MultiFrame**的高度，默认以缇为单位（或以容器的**ScaleMode**单位）。**Double**。

### hWnd

**MultiFrame**绘图表面的Win32窗口句柄，作为**LongPtr**。只读。适用于传递给API函数。

### Index

当**MultiFrame**是控件数组的一部分时，此实例在数组中的**Long**零基索引。在非数组实例上读取**Index**会引发运行时错误343（*对象不是数组*）。运行时只读。

### Left

从容器的左边缘到**MultiFrame**左边缘的水平距离。**Double**。

### Name

**MultiFrame**在其父窗体上的唯一设计时名称。运行时只读。

### Parent

对最终包含**MultiFrame**的[**Form**](/official/Reference/VB/Form/)的引用。只读。与[**Container**](#container)不同，后者返回直接父级。

### TabIndex

**MultiFrame**在窗体TAB键导航顺序中的位置。**Long**。

::: info
**MultiFrame**自身从不获取焦点——**TabIndex**保留用于兼容但对用户无可见效果。
:::

### TabStop

**MultiFrame**是否参与TAB键导航。**Boolean**，默认**True**。

::: info
**MultiFrame**自身从不获取焦点——**TabStop**保留用于兼容但对用户无可见效果。
:::

### Tag

应用程序可用于将自定义数据与**MultiFrame**关联的自由格式**String**。框架忽略此属性。

### Top

从容器顶部到**MultiFrame**顶部的垂直距离。**Double**。

### Visible

**MultiFrame**是否显示。**Boolean**，默认**True**。包含框架自身的可见性与此设置无关；隐藏**MultiFrame**隐藏其绘图表面但不直接隐藏框架。

### Width

**MultiFrame**的宽度。**Double**。

## 方法

### Move

在单次调用中重新定位并可选地调整**MultiFrame**的尺寸。包含的框架会重新布局以匹配新的范围。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**。

*Top*、*Width*、*Height*
: *可选* 对应属性的新值。省略的值保持不变。

### Refresh

强制立即重绘**MultiFrame**的绘图表面。

语法：*object*.**Refresh**

### ZOrder

将**MultiFrame**带到容器内同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront**（0，默认）或**vbSendToBack**（1）。

## 事件

### Initialize

在**MultiFrame**的底层窗口已创建但第一次布局传递尚未运行后引发一次。适用于在启动时从代码调整[**Direction**](#direction)或包含框架的尺寸，使第一次布局就反映这些设置。**默认事件。**

语法：*object*\_**Initialize**( )