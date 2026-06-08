---
title: DTPicker
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/DTPicker
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ec834632-1852-442b-a730-e4fa040f0233'
  PropagateID: 'ec834632-1852-442b-a730-e4fa040f0233'
  ReservedCode1: 'ce442d6d-3173-4d75-96c5-5e8c54e7a9e9'
  ReservedCode2: 'ce442d6d-3173-4d75-96c5-5e8c54e7a9e9'
---

# DTPicker 类

**DTPicker** 是一个日期/时间选择器控件。内联字段按 [**Format**](#format) 显示当前日期或时间；点击下拉箭头打开 [**MonthView**](/official/Reference/WinNativeCommonCtls/MonthView) 风格的日历以选取新日期，关闭日历后更新 [**Value**](#value)。

```vb
Private Sub Form_Load()
    DTPicker1.Format = dtpShortDate
    DTPicker1.MinDate = DateSerial(2020, 1, 1)
    DTPicker1.MaxDate = DateSerial(2030, 12, 31)
    DTPicker1.Value = Date
End Sub

Private Sub DTPicker1_Change()
    Debug.Print "User picked: " & DTPicker1.Value
End Sub
```

控件从 `BaseControlFocusable` 继承可聚焦矩形可停靠成员 --- 大小、位置、**Anchors**、**Dock**、**Font**、**BackColor** / **ForeColor**、**Appearance**、**MousePointer** / **MouseIcon**、**ToolTipText**、**DragMode** / **DragIcon**、**Drag**、**Refresh**、**SetFocus**、**TabIndex** / **TabStop**、**ZOrder**、**CausesValidation**、**VisualStyles**、**hWnd**、**HelpContextID** / **WhatsThisHelpID**。

## 格式和值

[**Format**](#format) 选择四种显示样式之一 --- 长日期、短日期、时间或通过 [**CustomFormat**](#customformat) 提供的自定义格式字符串。内联值始终是 **Date**，但 [**Value**](#value) 类型为 **Variant**，因为带 [**CheckBox**](#checkbox) 的选择器可能没有赋值日期（用户可清除复选框），此时 [**Value**](#value) 读取为 **Null**。

便捷访问器 [**Year**](#year)、[**Month**](#month)、[**Week**](#week)、[**Day**](#day)、[**Hour**](#hour)、[**Minute**](#minute) 和 [**Second**](#second) 将当前值分解为各个分量；对其中任何一个赋值会用更改后分量重写 [**Value**](#value)。[**StartOfWeek**](#startofweek) 属性选择日历下拉和 [**Week**](#week) 所使用的一周起始日。

## 自定义格式和回调事件

当 [**Format**](#format) 设为 **dtpCustom** 时，[**CustomFormat**](#customformat) 字符串控制显示。格式语法遵循Win32 `GetDateFormat` / `GetTimeFormat` 图片字符串（如 `"dddd, MMMM dd, yyyy"`）。包含在回调标记中的标记（格式中的 `X` 字面量）触发 [**Format**](#format-event)、[**FormatSize**](#formatsize) 和 [**CallbackKeyDown**](#callbackkeydown) 事件，以便应用程序渲染自己的字段内容并响应其中的键盘导航。

## 日历外观

当下拉日历显示时，[**CalendarBackColor**](#calendarbackcolor)、[**CalendarForeColor**](#calendarforecolor)、[**CalendarTitleBackColor**](#calendartitlebackcolor)、[**CalendarTitleForeColor**](#calendartitleforecolor) 和 [**CalendarTrailingForeColor**](#calendartrailingforecolor) 属性通过 `DTM_SETMCCOLOR` 控制日历颜色。[**CalendarShowToday**](#calendarshowtoday)、[**CalendarShowTodayCircle**](#calendarshowtodaycircle)、[**CalendarShowWeekNumbers**](#calendarshowweeknumbers) 和 [**CalendarShowTrailingDates**](#calendarshowtrailingdates) 布尔值切换嵌入日历上对应的 `MCS_…` 样式标志。

[**hWndCalendar**](#hwndcalendar) 返回下拉日历窗口的Win32句柄 --- 用于高级自定义。仅在 [**DropDown**](#dropdown) 和 [**CloseUp**](#closeup) 事件之间有效。

属性
----------

### CalendarBackColor

日历下拉的背景颜色。**OLE_COLOR**。默认：**vbWindowBackground**。通过 `DTM_SETMCCOLOR` / `MCSC_MONTHBK` 应用于嵌入的月历。

### CalendarForeColor

日历下拉的文本颜色。**OLE_COLOR**。默认：**vbButtonText**。

### CalendarShowToday

日历下拉是否在底部显示"Today: …"字符串。**Boolean**。默认：**True**。

### CalendarShowTodayCircle

日历下拉是否用圆圈高亮今日日期。**Boolean**。默认：**True**。

### CalendarShowTrailingDates

日历下拉是否显示上月末和下月初的前导和尾随日期。**Boolean**。默认：**True**。

### CalendarShowWeekNumbers

日历下拉是否在左侧显示周数列。**Boolean**。默认：**False**。

### CalendarTitleBackColor

日历下拉的标题栏背景颜色。**OLE_COLOR**。默认：**vb3DFace**。

### CalendarTitleForeColor

日历下拉的标题栏文本颜色。**OLE_COLOR**。默认：**vbButtonText**。

### CalendarTrailingForeColor

当 [**CalendarShowTrailingDates**](#calendarshowtrailingdates) 为 **True** 时用于相邻月份尾随日期的文本颜色。**OLE_COLOR**。默认：**vbGrayText**。

### CheckBox

选择器是否在日期值旁包含复选框。**Boolean**。默认：**False**。为 **True** 时，用户可清除复选框使选择器无值，此时 [**Value**](#value) 返回 **Null**。当 **CheckBox** 为 **False** 时对 [**Value**](#value) 赋值 **Null** 引发运行时错误 35787（*"Can't set Value to NULL when CheckBox property = FALSE"*）。

运行时更改此属性会重新创建底层Win32窗口 --- 该属性无法仅通过 GWL_STYLE 切换。

### CustomFormat

当 [**Format**](#format) 为 **dtpCustom** 时使用的图片字符串。**String**。默认：空。遵循Win32 `GetDateFormat` 语法（如 `"dddd, MMMM dd, yyyy"`、`"hh:mm:ss tt"`）。

### Day

[**Value**](#value) 的月中第几天分量。**Integer**（1--31）。读取返回当前天；赋值以新天重写日期，超出当月范围时引发运行时错误 380。参见 [**DayCount**](#daycount)。

### DayCount

当前值所在月份的天数。**Long**，只读。从 [**Year**](#year) 和 [**Month**](#month) 计算。用于在赋值 [**Day**](#day) 之前进行边界检查。

### DayOfWeek

当前 [**Value**](#value) 是星期几，作为 [**VbDayOfWeek**](/official/Reference/VBA/Constants/VbDayOfWeek) 的成员（`vbSunday` 到 `vbSaturday`）。只读。

### Format

显示格式。[**DTPickerFormatConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/DTPickerFormatConstants) 的成员：**dtpLongDate**、**dtpShortDate**、**dtpTime**、**dtpCustom**。默认：**dtpShortDate**。

### Hour

[**Value**](#value) 的小时分量，24小时制。**Integer**（1--23 --- 注意设置器拒绝 `0` 并引发运行时错误 380；读取返回实时值）。读取不受限制。

### hWndCalendar

下拉日历窗口的Win32句柄。**HWND**，只读。仅在 [**DropDown**](#dropdown) 和 [**CloseUp**](#closeup) 事件之间有效；日历关闭时读取为 0。

### MaxDate

可导航日期范围的上限。**Date**。默认：`9999-12-31`。赋值低于 [**MinDate**](#mindate) 时引发运行时错误 35775。如果当前 [**Value**](#value) 超过新的 **MaxDate**，[**Value**](#value) 被钳位到 **MaxDate**。

### MinDate

可导航日期范围的下限。**Date**。默认：`1601-01-01`。赋值高于 [**MaxDate**](#maxdate) 时引发运行时错误 35775。如果当前 [**Value**](#value) 低于新的 **MinDate**，[**Value**](#value) 被钳位到 **MinDate**。

### Minute

[**Value**](#value) 的分钟分量。**Integer**（赋值时 1--59；读取时 0--59）。

### Month

[**Value**](#value) 的月份分量。**Integer**（1--12）。赋值超出范围时引发运行时错误 380。

### RightToLeft

::: info
**RightToLeft** 标记为 `[Unimplemented]`，没有任何效果；读写该属性可编译，但底层Win32控件的RTL模式不会被切换。
:::

一个 **Boolean**。

### Second

[**Value**](#value) 的秒分量。**Integer**（赋值时 1--59；读取时 0--59）。

### StartOfWeek

日历下拉中哪一天渲染为最左列。[**VbDayOfWeek**](/official/Reference/VBA/Constants/VbDayOfWeek) 的成员。默认为系统的一周起始日设置（通过 `vbUseSystemDayOfWeek` 解析）。

### UpDown

选择器是否使用微调按钮部件代替下拉日历。**Boolean**。默认：**False**。为 **True** 时，用户通过点击每个字段旁的上/下箭头调整日期；日历下拉被抑制。

运行时更改此属性会重新创建底层Win32窗口。

### Value

选定的日期/时间。**Variant**。默认成员。

当复选框选中（或 [**CheckBox**](#checkbox) 为 **False**）时读取为 **Date**，复选框清除时读取为 **Null**。当 [**CheckBox**](#checkbox) 为 **False** 时赋值 **Null** 引发运行时错误 35787。赋值超出 [[**MinDate**](#mindate), [**MaxDate**](#maxdate)] 的日期引发运行时错误 35773。

赋值数值（非 **Date**）类型时隐式通过 **CDate** 转换。赋值 **Empty** 等同于赋值 **Null**。更改 [**Value**](#value) 在控件完成初始化阶段后触发 [**Change**](#change)。

### Week

当前 [**Value**](#value) 的ISO风格年周数。**Integer**（1--53）。设置器应用 `DateAdd("ww", …)` 的差值，因此更改 **Week** 会保留周内的星期几。赋值超出范围时引发运行时错误 380。计算周边界时遵循 [**StartOfWeek**](#startofweek)。

### Year

[**Value**](#value) 的年份分量。**Integer**。

事件
------

### CallbackKeyDown

当自定义回调字段获得焦点时用户按下键触发。让应用程序解释按键（例如上/下箭头循环枚举值）并重写日期。

语法：*object*\_**CallbackKeyDown**（**ByVal** *KeyCode* **As Integer**，**ByVal** *Shift* **As Integer**，**ByVal** *CallbackField* **As String**，*CallbackDate* **As Date**）

*KeyCode*
: 一个 [**KeyCodeConstants**](/official/Reference/VBRUN/Constants/KeyCodeConstants) 值，标识按下的键。

*Shift*
: [**ShiftConstants**](/official/Reference/VBRUN/Constants/ShiftConstants) 值的位掩码。

*CallbackField*
: 标识聚焦的回调字段的图片字符串标记。

*CallbackDate*
: **输入/输出** --- 应用程序可在事件返回前修改的当前值。

### Change

当 [**Value**](#value) 已更改时触发，无论通过用户交互还是代码。在窗体加载的初始属性反序列化期间不触发。

语法：*object*\_**Change**( )

### Click

在控件矩形内鼠标点击时触发。

语法：*object*\_**Click**( )

### CloseUp

当下拉日历关闭时触发 --- 无论用户选取日期、点击日历外部还是按 **Esc**。

语法：*object*\_**CloseUp**( )

### DblClick

在控件矩形内双击时触发。

语法：*object*\_**DblClick**( )

### DragDrop

继承的拖放事件。参见 [**DragMode**](/official/Reference/VB/CheckBox/#dragmode)。

### DragOver

继承的拖放事件。

### DropDown

当下拉日历打开时触发。处理程序可使用 [**hWndCalendar**](#hwndcalendar) 自定义下拉的日历窗口。

语法：*object*\_**DropDown**( )

### Format

当 [**Format**](#format) 为 **dtpCustom** 且 [**CustomFormat**](#customformat) 字符串包含回调标记时，为每个需要渲染的自定义回调字段触发。

语法：*object*\_**Format**（**ByVal** *CallbackField* **As String**，*FormattedString* **As String**）

*CallbackField*
: 标识正在渲染的回调字段的图片字符串标记。

*FormattedString*
: **输出** --- 应用程序将其设为选择器应在字段中显示的文本。

### FormatSize

在 [**Format**](#format-event) 之前触发，询问为回调字段保留多少字符单元格。选择器使用当前 [**Font**](/official/Reference/VB/CheckBox/#font) 测量渲染宽度。

语法：*object*\_**FormatSize**（**ByVal** *CallbackField* **As String**，*Size* **As Integer**）

*CallbackField*
: 标识回调字段的图片字符串标记。

*Size*
: **输出** --- 应用程序将其设为预期字符数。

### GotFocus

继承的焦点事件。

### Initialize

控件窗口创建并从持久化状态初始化属性后触发。每次窗体加载触发一次。

语法：*object*\_**Initialize**( )

### LostFocus

继承的焦点事件。

### MouseDown

继承的鼠标事件。

语法：*object*\_**MouseDown**（*Button* **As Integer**，*Shift* **As Integer**，*X* **As Single**，*Y* **As Single**）

### MouseMove

继承的鼠标事件。

### MouseUp

继承的鼠标事件。

### OLECompleteDrag, OLEDragDrop, OLEDragOver, OLEGiveFeedback, OLESetData, OLEStartDrag

继承的OLE拖放事件。参见 [**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants) 获取 **OLEDropMode** 值。

### Validate

继承的验证事件。将 *Cancel* 设为 **True** 以将焦点保留在控件上。

语法：*object*\_**Validate**（*Cancel* **As Boolean**）

## 另见

- [MonthView](/official/Reference/WinNativeCommonCtls/MonthView) --- 全月日历控件；**DTPicker** 的下拉使用相同的底层Win32控件
- [DTPickerFormatConstants](/official/Reference/WinNativeCommonCtls/Enumerations/DTPickerFormatConstants) --- **Format** 的值
- [ControlTypeConstants](/official/Reference/VBRUN/Constants/ControlTypeConstants) --- **vbDTPicker** 所在位置