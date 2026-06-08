---
title: HScrollBar
parent: VB Package
permalink: /tB/Packages/VB/HScrollBar/
---

# HScrollBar 类

**HScrollBar**是作为独立控件公开的Win32原生水平滚动条。与自动出现在[**ListBox**](/official/Reference/VB/ListBox/)、[**ComboBox**](/official/Reference/VB/ComboBox/)或[**TextBox**](/official/Reference/VB/TextBox/)内部的滚动条不同，**HScrollBar**独立于任何其他控件——其[**Value**](#value)由代码读写。典型用途是通过将**HScrollBar**的[**Change**](#change)和[**Scroll**](#scroll)事件绑定到值所代表的含义来控制数值设置（音量级别、分页器、颜色通道、自定义绘制表面的偏移量）。

[**VScrollBar**](/official/Reference/VB/VScrollBar/)是垂直对应物；两个类除了方向外完全相同。

默认属性是[**Value**](#value)，默认事件是[**Change**](#change)。

```vb
Private Sub Form_Load()
    hsbVolume.Min = 0
    hsbVolume.Max = 100
    hsbVolume.SmallChange = 1
    hsbVolume.LargeChange = 10
    hsbVolume.Value = 50
End Sub

Private Sub hsbVolume_Change()
    lblVolume.Caption = "Volume: " & hsbVolume.Value & "%"
End Sub

Private Sub hsbVolume_Scroll()
    lblVolume.Caption = "Volume: " & hsbVolume.Value & "%"   ' live update during drag
End Sub
```


## 范围和值

[**Min**](#min)和[**Max**](#max)定义滚动条可以表示的整数闭区间，[**Value**](#value)是该范围内的位置。默认值分别为`0`、`32767`和`0`。赋值超出当前`[Min, Max]`区间的[**Value**](#value)会引发运行时错误380（*无效属性值*）；赋值当前值是无操作（不引发[**Change**](#change)）。

两个端点可以以任意顺序提供。当**Min**大于**Max**时，滚动条*反向*运行——将滑块向右移动会减小[**Value**](#value)，**Max**是合法范围的下界。这便于实现例如"左侧为高值"的颜色或缩放滑块：

```vb
hsbZoom.Min = 400      ' leftmost == 4.00x
hsbZoom.Max = 100      ' rightmost == 1.00x
hsbZoom.Value = 100
```

在运行时更改**Min**或**Max**会静默地将当前[**Value**](#value)钳制到新范围内——不会为隐式钳制引发[**Change**](#change)事件。

## 增量大小

滚动条通过四种用户输入产生值变化：

| 输入                                 | 每步增量                     | 引发的事件       |
|--------------------------------------|------------------------------|------------------|
| 点击末端箭头                         | [**SmallChange**](#smallchange) | [**Change**](#change) |
| 点击滑块两侧的轨道                   | [**LargeChange**](#largechange) | [**Change**](#change) |
| 拖动滑块                             | 连续                         | 拖动时[**Scroll**](#scroll)，释放时[**Change**](#change) |
| 按**Home** / **End**                 | 跳到**Min** / **Max**        | [**Change**](#change) |

[**SmallChange**](#smallchange)和[**LargeChange**](#largechange)默认均为`1`。[**LargeChange**](#largechange)还控制滑块相对于轨道的可见宽度，因此更大的值会产生更宽的滑块。

## Change 与 Scroll 的区别

两个事件的分工让应用程序可以选择对用户输入的响应频率。[**Scroll**](#scroll)在用户拖动滑块时反复触发，因此处理程序可以在滑块移动时更新实时预览。[**Change**](#change)在值稳定后触发一次——用户释放滑块后、点击箭头或轨道后，或代码赋值不同的[**Value**](#value)时。许多应用程序将两个事件连接到同一处理程序，以便绑定显示在拖动期间和之后都更新。

## 属性

### Anchors

决定滚动条的哪些边随父级对应边调整的边集合。只读——通过返回的**Anchors**对象设置各个`.Left`、`.Top`、`.Right`、`.Bottom`标志。

### CausesValidation

决定先前聚焦控件的[**Validate**](#validate)事件是否在此控件获得焦点之前运行。**Boolean**，默认**True**。

### Container

承载此滚动条的控件——通常是窗体、[**Frame**](/official/Reference/VB/Frame/)或**UserControl**。用**Get**读取，用**Set**更改。

### ControlType

标识此控件为水平滚动条的只读[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值。始终为**vbHScrollBar**。

### Dock

滚动条在其容器中的停靠位置。[**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants)的成员：**vbDockNone**（默认）、**vbDockLeft**、**vbDockTop**、**vbDockRight**、**vbDockBottom**或**vbDockFill**。停靠的滚动条忽略[**Anchors**](#anchors)。

### DragIcon

在控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时自行拖动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual**（0，默认——从代码调用[**Drag**](#drag)）或**vbAutomatic**（1）。

### Enabled

决定滚动条是否接受用户输入。禁用的滚动条变灰，不响应鼠标或键盘交互。**Boolean**，默认**True**。

### Height

滚动条的高度，以缇为单位（或以容器的**ScaleMode**单位）。**Double**。对于水平滚动条这是短边——通常为操作系统标准滚动条厚度；大于该值的只会扩大周围的点击区域。

### HelpContextID

标识应用程序帮助文件中主题的**Long**，当用户在控件有焦点时按**F1**时检索。

### hWnd

底层滚动条的Win32窗口句柄，作为**LongPtr**。只读。适用于传递给API函数。

### Index

当滚动条是控件数组的一部分时，此实例在数组中的**Long**零基索引。在非数组实例上读取**Index**会引发运行时错误343（*对象不是数组*）。运行时只读。

### LargeChange

当用户点击滑块两侧的轨道（或在滚动条有焦点时按**Page Up** / **Page Down**）时[**Value**](#value)的调整量。**Long**，默认`1`。还影响滑块的可见宽度：更大的值在轨道上产生更宽的滑块。

### Left

从容器左边缘到滚动条左边缘的水平距离。**Double**。

### Max

滚动条值范围的上端。**Long**，默认`32767`。可以设置得低于[**Min**](#min)以反转移动方向——参见[范围和值](#range-and-value)。

语法：*object*.**Max** [ = *value* ]

更改**Max**会在当前[**Value**](#value)超出新范围时静默钳制。

### Min

滚动条值范围的下端。**Long**，默认`0`。可以设置得高于[**Max**](#max)以反转移动方向。

语法：*object*.**Min** [ = *value* ]

更改**Min**会在当前[**Value**](#value)超出新范围时静默钳制。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针在控件上方时用作鼠标光标的**StdPicture**。

### MousePointer

指针在控件上方时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### Opacity

控件的不透明度百分比（0--100，默认100）。超出范围的值在**Initialize**时被钳制。子控件需要Windows 8或更高版本。

### Parent

对最终包含此滚动条的[**Form**](/official/Reference/VB/Form/)（或**UserControl**）的引用。只读。

### RightToLeft

::: info
保留用于与VB6兼容；目前在twinBASIC中尚未实现。要以反向运行滚动条，交换[**Min**](#min)和[**Max**](#max)。
:::

### SmallChange

当用户点击末端箭头（或在滚动条有焦点时按箭头键）时[**Value**](#value)的调整量。**Long**，默认`1`。

### TabIndex

控件在窗体TAB键导航顺序中的位置。**Long**。

### TabStop

用户是否可以通过按**TAB**键到达控件。**Boolean**，默认**True**。禁用的控件无论此设置如何都会被跳过。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### Top

从容器顶部到滚动条顶部的垂直距离。**Double**。

### TransparencyKey

设置后成为渲染控件中完全透明的**OLE_COLOR**。默认`-1`禁用效果。子控件需要Windows 8或更高版本。

### Value

滚动条在`[Min, Max]`内的当前位置。**Long**，默认`0`。**默认属性。**

语法：*object*.**Value** [ = *value* ]

*value*
: 闭区间`[Min, Max]`（或反向滚动条的`[Max, Min]`）中的**Long**。超出该区间的值引发运行时错误380（*无效属性值*）。

赋值与当前值不同的值会移动滑块并引发单个[**Change**](#change)事件。赋值当前值为静默无操作。

### Visible

滚动条是否显示。**Boolean**，默认**True**。

### VisualStyles

绘制滚动条时是否使用操作系统主题引擎。**Boolean**，默认**True**。

### WhatsThisHelpID

标识应用程序帮助文件中"这是什么？"帮助弹出主题的**Long**。参见[**ShowWhatsThis**](#showwhatsthis)。

### Width

滚动条的宽度——即轨道的长度。**Double**。

## 方法

### Drag

开始、完成或取消手动拖放操作。通常在[**DragMode**](#dragmode)为**vbManual**时从代码调用。

语法：*object*.**Drag** [ *Action* ]

*Action*
: *可选* [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants)的成员：**vbCancel**（0）、**vbBeginDrag**（1，默认）或**vbEndDrag**（2）。

### Move

在单次调用中重新定位并可选地调整滚动条的尺寸。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**。

*Top*、*Width*、*Height*
: *可选* 对应属性的新值。省略的值保持不变。

### Refresh

强制立即重绘滚动条。

语法：*object*.**Refresh**

### SetFocus

将输入焦点移到滚动条。控件必须同时[**Visible**](#visible)和[**Enabled**](#enabled)，否则引发运行时错误5（*无效的过程调用或参数*）。

语法：*object*.**SetFocus**

### ShowWhatsThis

以"这是什么？"弹窗形式显示由[**WhatsThisHelpID**](#whatsthishelpid)标识的主题。

语法：*object*.**ShowWhatsThis**

### SyncScrollBar

将当前[**Min**](#min)、[**Max**](#max)、[**LargeChange**](#largechange)和[**Value**](#value)重新应用到底层Win32滚动条。属性赋值已隐式执行此操作——仅当外部代码（通常是Win32 API调用）绕过控件更改了其原生状态时才调用**SyncScrollBar**。

语法：*object*.**SyncScrollBar**

### ZOrder

将控件带到同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront**（0，默认）或**vbSendToBack**（1）。

## 事件

### Change

在[**Value**](#value)稳定到新值后引发——用户在拖动后释放滑块时、点击箭头或轨道时、在滚动条有焦点时按**Home**、**End**或箭头键时，或代码赋值不同的[**Value**](#value)时。不会在拖动期间的连续更新时引发——参见[**Scroll**](#scroll)。**默认事件。**

语法：*object*\_**Change**( )

### DragDrop

当手动拖动操作在目标控件上结束时在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

当手动拖动操作进行中时在光标下方的控件上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### GotFocus

当滚动条获得输入焦点时引发。

语法：*object*\_**GotFocus**( )

### Initialize

在底层窗口已创建且滚动条已连接到其Win32范围后，但滚动条首次绘制之前引发一次。适用于需要底层句柄的最后一刻设置。

语法：*object*\_**Initialize**( )

### KeyDown

当控件有焦点时用户按下任意键时引发。注意滚动条已在内部处理箭头键、**Page Up** / **Page Down**和**Home** / **End**——但**KeyDown**仍然会为它们触发，除产生[**Change**](#change)外。

语法：*object*\_**KeyDown**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### KeyPress

当用户输入产生ANSI按键的字符时引发。

语法：*object*\_**KeyPress**( *KeyAscii* **As Integer** )

### KeyUp

当控件有焦点时用户释放键时引发。

语法：*object*\_**KeyUp**( *KeyCode* **As Integer**, *Shift* **As Integer** )

### LostFocus

当滚动条失去输入焦点时引发。

语法：*object*\_**LostFocus**( )

### Scroll

在用户拖动滑块期间连续引发，每产生一个不同的[**Value**](#value)一次。用户释放滑块后，会引发单个[**Change**](#change)事件携带最终值。**Scroll**是滑块移动时实时预览的正确事件；[**Change**](#change)仅触发最终值。

语法：*object*\_**Scroll**( )

### Validate

当焦点移动到[**CausesValidation**](#causesvalidation)为**True**的另一个控件时引发。将*Cancel*设为**True**使焦点保留在此控件上。

语法：*object*\_**Validate**( *Cancel* **As Boolean** )