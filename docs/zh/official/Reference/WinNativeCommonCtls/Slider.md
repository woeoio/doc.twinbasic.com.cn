---
title: Slider
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/Slider
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '865a5d51-5f76-4b14-829b-08a151bce98b'
  PropagateID: '865a5d51-5f76-4b14-829b-08a151bce98b'
  ReservedCode1: '0ba4e472-9ab8-40d2-8de8-9cc43971061e'
  ReservedCode2: '0ba4e472-9ab8-40d2-8de8-9cc43971061e'
---

# Slider 类

**Slider** 是一个轨道条控件 --- 一条水平或垂直通道，带可拖动滑块，让用户在 [**Min**](#min) 和 [**Max**](#max) 之间选取值。可选的刻度标记、浮动值提示和高亮选择范围完善了该控件。

```vb
Private Sub Form_Load()
    Slider1.Min = 0
    Slider1.Max = 100
    Slider1.Value = 50
    Slider1.SmallChange = 1   ' arrow-key step
    Slider1.LargeChange = 10  ' PgUp/PgDn step
    Slider1.TickFrequency = 10
End Sub

Private Sub Slider1_Change()
    Label1.Caption = Slider1.Value & " %"
End Sub
```

控件从 `BaseControlFocusableNoFont` 继承可聚焦矩形可停靠成员 --- 大小、位置、**Anchors**、**Dock**、**Appearance**、**MousePointer** / **MouseIcon**、**ToolTipText**、**DragMode** / **DragIcon**、**Drag**、**Refresh**、**SetFocus**、**TabIndex** / **TabStop**、**ZOrder**、**CausesValidation**、**VisualStyles**、**hWnd**、**HelpContextID** / **WhatsThisHelpID**。Slider没有 [**Font**](/official/Reference/VB/CheckBox/#font) 属性（其滑块和刻度标记由OS主题绘制）。

## Change 与 Scroll

滑块在用户与滑块交互时触发两种不同事件：

- **[Scroll](#scroll)** 在拖动*期间*和键盘导航期间触发 --- 每次滑块位置更新，无论用户是否已松手。
- **[Change](#change)** *仅在拖动完成时*（鼠标释放）或用户通过键盘到达端点时触发。

使用 **Scroll** 进行实时预览（"在用户拖动时显示值"），使用 **Change** 进行提交式处理（"用户松手后应用值"）。

## 选择范围

将 [**SelectRange**](#selectrange) 设为 **True** 以启用通道上的高亮选择带覆盖。[**SelStart**](#selstart) 和 [**SelLength**](#sellength) 随后变为可写并定义选择边界。这适用于"在X和Y之间"的UI模式，用户选取一个值但应用程序想要高亮推荐的子范围。

当 [**SelectRange**](#selectrange) 为 **False**（默认）时，[**SelLength**](#sellength) 始终读取为 `0`，[**SelStart**](#selstart) 读取为 [**Min**](#min) 值。

属性
----------

### BackColor

通道的背景颜色。**OLE_COLOR**。默认：**vbButtonFace**。

### BorderStyle

控件的边框样式。[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants) 的成员。默认：**vbNoBorder**。

### HideThumb

可拖动滑块是否隐藏。**Boolean**。默认：**False**。为 **True** 时通道仍然可用，但用户只能通过键盘导航。

### LargeChange

**PgUp** / **PgDn** 移动滑块的量。**Long**。默认：`2`。

### Max

范围的上限。**Long**。默认：`10`。

### Min

范围的下限。**Long**。默认：`0`。

### Orientation

滑块的方向。[**OrientationConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) 的成员（**ccOrientationHorizontal** 或 **ccOrientationVertical**）。默认：**ccOrientationHorizontal**。

### SelectRange

是否启用高亮选择带覆盖。**Boolean**。默认：**False**。为 **False** 时，[**SelStart**](#selstart) 和 [**SelLength**](#sellength) 无效；赋值被静默丢弃。

### SelLength

高亮选择带的长度。**Long**。仅在 [**SelectRange**](#selectrange) 为 **True** 时可读/写。赋值使末端超过 [**Max**](#max) 时引发运行时错误 380。

### SelStart

高亮选择带的起始位置。**Long**。赋值超出 [[**Min**](#min), [**Max**](#max)] 时引发运行时错误 380。

### ShowTip

滑块在拖动时是否显示当前值的浮动提示。**Boolean**。默认：**True**。提示位置由 [**TextPosition**](#textposition) 控制。

### SmallChange

方向键移动滑块的量。**Long**。默认：`1`。

### TextPosition

浮动提示渲染在通道的哪一侧。[**TextPositionConstants**](#textpositionconstants) 的成员。默认：**sldBelowRight**。名称反映了两个轴：水平方向下，**sldAboveLeft** 渲染在通道上方，**sldBelowRight** 渲染在下方；垂直方向下，**sldAboveLeft** 渲染在左侧，**sldBelowRight** 渲染在右侧。

### TickFrequency

刻度标记在通道上出现的频率。**Long**。默认：`1`（每单位一个刻度）。赋值 `0` 会被静默强制为与 `1` 相同。

### TickStyle

刻度标记出现在通道的哪一侧。[**TickStyleConstants**](#tickstyleconstants) 的成员。默认：**sldBottomRight**。

### Value

当前滑块位置。**Long**。默认成员。编程设置时触发 [**Change**](#change)。

事件
------

### Change

当用户在新位置松开滑块，或键盘导航到轨道端点时触发。与 [**Scroll**](#scroll) 不同，后者在拖动期间持续触发。

语法：*object*\_**Change**( )

### Click

在控件矩形内鼠标点击时触发。

语法：*object*\_**Click**( )

### DragDrop, DragOver

继承的拖放事件。

### GotFocus, LostFocus

继承的焦点事件。

### Initialize

控件窗口创建后触发。

### KeyDown, KeyPress, KeyUp

继承的键盘事件。轨道条消费方向键、**Home**、**End**、**PgUp** 和 **PgDn** 用于导航；事件仍然会触发供应用程序观察。

### MouseDown, MouseMove, MouseUp

继承的鼠标事件。

### OLECompleteDrag, OLEDragDrop, OLEDragOver, OLEGiveFeedback, OLESetData, OLEStartDrag

继承的OLE拖放事件。

### Scroll

在用户与滑块交互期间持续触发。用于实时预览；使用 [**Change**](#change) 进行提交式处理。

语法：*object*\_**Scroll**( )

### Validate

继承的验证事件。

## TickStyleConstants

确定刻度标记渲染在滑块通道的哪一侧。在 **Slider** 类上声明。

| 成员                | 值 | 描述                                                          |
|-----------------------|-------|----------------------------------------------------------------------|
| **sldBottomRight** | 0 | 刻度渲染在通道下方（水平）或右侧（垂直）。 |
| **sldTopLeft**         | 1 | 刻度渲染在通道上方（水平）或左侧（垂直）。 |
| **sldBoth**               | 2 | 刻度渲染在通道两侧。                            |
| **sldNoTicks**         | 3 | 隐藏刻度标记。                                                |

## TextPositionConstants

确定当 [**ShowTip**](#showtip) 为 **True** 时浮动提示渲染在滑块通道的哪一侧。在 **Slider** 类上声明。

| 成员                          | 值 | 描述                                                                  |
|---------------------------------|-------|------------------------------------------------------------------------------|
| **sldAboveLeft** | 0 | 提示渲染在通道上方（水平）或左侧（垂直）。 |
| **sldBelowRight** | 1 | 提示渲染在通道下方（水平）或右侧（垂直）。 |

## 另见

- [ProgressBar](/official/Reference/WinNativeCommonCtls/ProgressBar) --- 当用户只需查看进度，不需要调整值时
- [UpDown](/official/Reference/WinNativeCommonCtls/UpDown) --- 用于数值输入的微调控件
- [OrientationConstants](/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) --- **Slider** 和 **UpDown** 使用的共享水平/垂直枚举
- [ControlTypeConstants](/official/Reference/VBRUN/Constants/ControlTypeConstants) --- **vbSlider** 所在位置