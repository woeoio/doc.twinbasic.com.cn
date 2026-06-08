---
title: UpDown
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/UpDown
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f5e487a0-0e15-40d3-90b3-f9fc5a44959c'
  PropagateID: 'f5e487a0-0e15-40d3-90b3-f9fc5a44959c'
  ReservedCode1: '086a429e-e12e-42fc-8df9-40789505faa4'
  ReservedCode2: '086a429e-e12e-42fc-8df9-40789505faa4'
---

# UpDown 类

**UpDown** 是一个小型微调控件 --- 一对上/下箭头按钮，每次点击将内部 [**Value**](#value) 调整 [**Increment**](#increment)。通常与外部文本框或标签配对以显示当前值。

```vb
Private Sub Form_Load()
    UpDown1.Min = 0
    UpDown1.Max = 100
    UpDown1.Increment = 5
    UpDown1.Value = 50
End Sub

Private Sub UpDown1_Change()
    Text1.Text = UpDown1.Value
End Sub

Private Sub Text1_Change()
    If IsNumeric(Text1.Text) Then UpDown1.Value = CLng(Text1.Text)
End Sub
```

控件从 `BaseControlFocusableNoFont` 继承可聚焦矩形可停靠成员 --- 大小、位置、**Anchors**、**Dock**、**Appearance**、**MousePointer** / **MouseIcon**、**ToolTipText**、**DragMode** / **DragIcon**、**Drag**、**Refresh**、**SetFocus**、**TabIndex** / **TabStop**、**ZOrder**、**CausesValidation**、**VisualStyles**、**hWnd**、**HelpContextID** / **WhatsThisHelpID**。**UpDown** 没有 [**Font**](/official/Reference/VB/CheckBox/#font) 属性（箭头由OS主题绘制）。

## 无自动伙伴

与VB6时代的Win32 `msctls_updown32` 控件不同，此 **UpDown** 不自动附加到"伙伴"文本框 --- 没有暴露 `UDS_AUTOBUDDY` 样式。通过处理 [**Change**](#change)、[**UpClick**](#upclick) 和 [**DownClick**](#downclick) 手动将微调控件与另一个控件配对。

## 三种事件形式

三种事件让应用程序以不同粒度观察微调交互：

- **[Change](#change)** 在 [**Value**](#value) 实际更改时触发 --- 包括编程赋值。
- **[UpClick](#upclick)** 在用户点击上箭头且 [**Value**](#value) 增加时触发。
- **[DownClick](#downclick)** 在用户点击下箭头且 [**Value**](#value) 减少时触发。

属性
----------

### Increment

每次点击箭头按钮时 [**Value**](#value) 的变化量。**Long**。默认：`1`。存储为 `UDACCEL` 记录的 `nInc` 字段，通过 `UDM_SETACCEL` 应用。

### Max

范围的上限。**Long**。默认：`10`。通过 `UDM_SETRANGE32` 应用。

### Min

范围的下限。**Long**。默认：`0`。

### Orientation

控件的方向。[**OrientationConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) 的成员（**ccOrientationHorizontal** 或 **ccOrientationVertical**）。默认：**ccOrientationHorizontal**。运行时更改此属性会重新创建底层Win32窗口。

### ToolTipText

用户悬停在控件上时显示的工具提示字符串。**String**。继承但重新暴露。

### Value

当前微调值。**Long**。默认成员。通过 `UDM_GETPOS32` 读取，通过 `UDM_SETPOS32` 写入。编程设置时触发 [**Change**](#change)。钳位到 [[**Min**](#min), [**Max**](#max)]。

### VisualStyles

是否应用OS视觉样式主题。**Boolean**。默认：**True**。继承但重新暴露。

事件
------

### Change

当 [**Value**](#value) 因用户交互、箭头点击或代码而更改时触发。

语法：*object*\_**Change**( )

### DownClick

当用户点击下箭头且 [**Value**](#value) 成功减少时触发。

语法：*object*\_**DownClick**( )

### DragDrop, DragOver

继承的拖放事件。

### GotFocus, LostFocus

继承的焦点事件。

### Initialize

控件窗口创建后触发。

### MouseDown, MouseMove, MouseUp

继承的鼠标事件。

### OLECompleteDrag, OLEDragDrop, OLEDragOver, OLEGiveFeedback, OLESetData, OLEStartDrag

继承的OLE拖放事件。

### UpClick

当用户点击上箭头且 [**Value**](#value) 成功增加时触发。

语法：*object*\_**UpClick**( )

### Validate

继承的验证事件。

## 另见

- [Slider](/official/Reference/WinNativeCommonCtls/Slider) --- 当需要可视化范围时的可拖动滑块
- [OrientationConstants](/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) --- **UpDown** 和 **Slider** 使用的共享水平/垂直枚举
- [ControlTypeConstants](/official/Reference/VBRUN/Constants/ControlTypeConstants) --- **vbUpDown** 所在位置