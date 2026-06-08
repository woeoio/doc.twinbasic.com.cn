---
title: MonthView
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/MonthView
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '76aaf48a-019c-4b9a-86bb-2334e66c1b9f'
  PropagateID: '76aaf48a-019c-4b9a-86bb-2334e66c1b9f'
  ReservedCode1: '385703a7-f391-4c27-8136-e1a3ce025cc9'
  ReservedCode2: '385703a7-f391-4c27-8136-e1a3ce025cc9'
---

# MonthView 类

**MonthView** 是一个全月日历网格：一个 [**MonthColumns**](#monthcolumns) × [**MonthRows**](#monthrows) 月面板的可见矩阵，可通过月标题向前和向后导航，带可选的今日指示器、周数和通过 [**GetDayBold**](#getdaybold) 回调事件的粗体日期高亮。与 [**DTPicker**](/official/Reference/WinNativeCommonCtls/DTPicker) --- 仅显示其内联值字段并按需弹出日历 --- 不同，**MonthView** 始终在窗体上可见。

```vb
Private Sub Form_Load()
    MonthView1.MonthColumns = 2
    MonthView1.MonthRows = 1
    MonthView1.MultiSelect = True
    MonthView1.MaxSelCount = 7
    MonthView1.ShowWeekNumbers = True
End Sub

Private Sub MonthView1_SelChange( _
        ByVal StartDate As Date, ByVal EndDate As Date, Cancel As Boolean)
    Debug.Print "Selection: " & StartDate & " to " & EndDate
End Sub

Private Sub MonthView1_GetDayBold( _
        ByVal StartDate As Date, ByVal Count As Integer, State() As Boolean)
    Dim i As Integer
    For i = 1 To Count
        State(i) = IsHoliday(DateAdd("d", i - 1, StartDate))
    Next
End Sub
```

控件从 `BaseControlFocusable` 继承可聚焦矩形可停靠成员 --- 大小、位置、**Anchors**、**Dock**、**Font**、**Appearance**、**MousePointer** / **MouseIcon**、**ToolTipText**、**Drag**、**Refresh**、**SetFocus**、**TabIndex** / **TabStop**、**ZOrder**、**CausesValidation**、**VisualStyles**、**hWnd**、**HelpContextID** / **WhatsThisHelpID**。

## 多月布局

**MonthView** 可以同时显示多个日历面板。[**MonthColumns**](#monthcolumns) 和 [**MonthRows**](#monthrows) 设置面板网格（默认 1 × 1）；当 [**ResizeToFit**](#resizetofit) 为 **True**（默认）时，控件根据当前 [**Font**](/official/Reference/VB/CheckBox/#font) 和 [**ShowToday**](#showtoday) / [**ShowWeekNumbers**](#showweeknumbers) 选项自动调整 **Width** 和 **Height** 以适应请求的网格。将 **ResizeToFit** 设为 **False** 允许应用程序自由调整控件大小，日历面板排列以适应可用空间。

[**GetMonthRange**](#getmonthrange) 返回所有面板中当前可见的日期范围 --- 在 [**GetDayBold**](#getdaybold) 中很有用，用于了解需要填充哪些天。

## 单日和多日选择

当 [**MultiSelect**](#multiselect) 为 **False**（默认）时，用户一次只能选择一个日期，[**Value**](#value)、[**SelStart**](#selstart) 和 [**SelEnd**](#selend) 都返回相同值。当 [**MultiSelect**](#multiselect) 为 **True** 时，用户可以拖选最多 [**MaxSelCount**](#maxselcount) 天的连续范围；[**SelStart**](#selstart) 和 [**SelEnd**](#selend) 界定范围，[**Value**](#value) 返回 [**SelStart**](#selstart)。

运行时更改 [**MultiSelect**](#multiselect) 会重新创建底层Win32窗口 --- 该属性无法仅通过 GWL_STYLE 切换。

## 粗体日期高亮

[**GetDayBold**](#getdaybold) 事件在每次可见范围更改后触发，询问应用程序哪些天应以粗体渲染。应用程序用 **True** / **False** 填充可见范围内每一天的 *State* 数组；控件随后缓存结果直到用户导航到不同范围。要强制打开或关闭个别日期而无须重新触发整个事件，请使用 [**DayBold**](#dayboldday)（*date*）= *boolean*。

属性
----------

### Appearance

控件边框的绘制方式。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants) 的成员：**vbAppearFlat** 或 **vbAppear3d**。默认：**vbAppear3d**。继承。

### BackColor

日历面板的主要背景颜色。**OLE_COLOR**。默认：**vbWindowBackground**。

### BorderStyle

控件的边框样式。[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants) 的成员：**vbNoBorder** 或 **vbFixedSingleBorder**。默认：**vbFixedSingleBorder**。

### CalendarCount

底层控件正在渲染的日历面板数。**Byte**，只读。通常等于 [**MonthColumns**](#monthcolumns) × [**MonthRows**](#monthrows)。

### Day

[**Value**](#value) 的月中第几天分量。**Integer**（1--31）。参见 [**DayCount**](#daycount)。

### DayBold(date)

可见范围内特定日期是否以粗体渲染。**Boolean**，读/写。设置器更新底层日期状态位掩码并重新应用；读取返回实时缓存值。

语法：*object*.**DayBold**（*date*）[ **=** *boolean* ]

*date*
: 当前可见范围内的一个 **Date**。超出范围的日期引发运行时错误 380。

### DayCount

当前值所在月份的天数。**Long**，只读。

### DayOfWeek

当前 [**Value**](#value) 是星期几，作为 [**VbDayOfWeek**](/official/Reference/VBA/Constants/VbDayOfWeek) 的成员。只读。

### ForeColor

用于普通日期的文本颜色。**OLE_COLOR**。默认：**vbButtonText**。

### MaxDate

可导航日期范围的上限。**Date**。默认：`9999-12-31`。赋值低于 [**MinDate**](#mindate) 时引发运行时错误 35775。

### MaxSelCount

当 [**MultiSelect**](#multiselect) 为 **True** 时用户可以选择的最大连续天数。**Long**。默认：`7`。

### MinDate

可导航日期范围的下限。**Date**。默认：`1753-01-01`。

### Month

[**Value**](#value) 的月份分量。**Integer**（1--12）。

### MonthBackColor

用于日期单元格的背景颜色。**OLE_COLOR**。默认：**vbWindowBackground**。与 [**BackColor**](#backcolor) 不同，后者覆盖多个面板排列时的周围区域。

### MonthColumns

水平排列的日历面板数。**Long**。默认：`1`。当 [**ResizeToFit**](#resizetofit) 为 **True** 时，更改此值会触发大小调整。

### MonthRows

垂直排列的日历面板数。**Long**。默认：`1`。

### MultiSelect

用户是否可以选择连续多天。**Boolean**。默认：**False**。运行时更改此属性会重新创建底层Win32窗口。

### ResizeToFit

控件是否根据当前 [**Font**](/official/Reference/VB/CheckBox/#font) 自动调整大小以适应请求的 [**MonthColumns**](#monthcolumns) × [**MonthRows**](#monthrows) 网格。**Boolean**。默认：**True**。

### RightToLeft

::: info
**RightToLeft** 标记为 `[Unimplemented]`，对底层控件的渲染方向无效。
:::

一个 **Boolean**。

### ScrollRate

导航箭头滚动可见范围的月数。**Long**。默认：`0` --- 表示"使用日历的自然宽度"（通常为 `MonthColumns`）。传入正整数以覆盖。

### SelEnd

当前选择范围的结束日期。**Date**，读/写。当 [**MultiSelect**](#multiselect) 为 **False** 时，**SelEnd** 等于 [**SelStart**](#selstart) 并等于 [**Value**](#value)。

### SelStart

当前选择范围的开始日期。**Date**，读/写。等于 [**Value**](#value)。

### ShowToday

日历是否在底部显示"Today: …"行。**Boolean**。默认：**True**。

### ShowTodayCircle

日历是否用圆圈高亮今日日期。**Boolean**。默认：**True**。

### ShowTrailingDates

日历是否显示上月末和下月初的日期。**Boolean**。默认：**True**。

### ShowWeekNumbers

日历是否在每个面板的左侧显示周数列。**Boolean**。默认：**False**。

### StartOfWeek

一周中的哪一天渲染为最左列。[**VbDayOfWeek**](/official/Reference/VBA/Constants/VbDayOfWeek) 的成员。默认为系统的一周起始日设置。

### TitleBackColor

标题栏（月份名称 + 年份标题）背景颜色。**OLE_COLOR**。默认：**vbActiveTitleBar**。

### TitleForeColor

标题栏文本颜色。**OLE_COLOR**。默认：**vbActiveTitleBarText**。

### TrailingForeColor

当 [**ShowTrailingDates**](#showtrailingdates) 为 **True** 时用于相邻月份尾随日期的文本颜色。**OLE_COLOR**。默认：**vbGrayText**。

### Value

当前选定的开始日期。**Date**。默认成员。

读取返回 [**SelStart**](#selstart)。赋值触发 [**SelChange**](#selchange)（处理程序可取消更改）。赋值超出 [[**MinDate**](#mindate), [**MaxDate**](#maxdate)] 的日期引发运行时错误 35773。

### VisibleDays(sIndex)

所有可见面板中第 *sIndex* 个单元格的日期。**Date**，只读。

语法：*object*.**VisibleDays**（*sIndex*）

*sIndex*
: 一个从1开始的索引，介于1和 [**GetMonthRange**](#getmonthrange) 返回的总单元格数之间。

### Week

当前 [**Value**](#value) 一年中的第几周。**Integer**（1--53）。

### Year

[**Value**](#value) 的年份分量。**Integer**。

方法
-------

### GetMonthRange

返回所有面板中的第一个和最后一个可见日期。

语法：*object*.**GetMonthRange**（*IncludeTrailing*, [*StartDate*] [, *EndDate*]）**As Long**

*IncludeTrailing*
: 一个 **Boolean**。为 **True** 时，范围包括上月的尾随日期和下月的首导日期，这些日期渲染在第一个/最后一个面板中（用于 [**GetDayBold**](#getdaybold) 填充）。为 **False** 时，范围仅覆盖属于可见月份列的天数。

*StartDate*
: *输出* 一个接收第一个可见日期的 **Date**。

*EndDate*
: *输出* 一个接收最后一个可见日期的 **Date**。

返回可见范围内的月份数。

事件
------

### Click

任何未命中日期单元格的鼠标点击时触发。

语法：*object*\_**Click**( )

### DateClick

用户点击日期单元格时触发。被点击的日期作为参数传入。

语法：*object*\_**DateClick**（**ByVal** *DateClicked* **As Date**）

### DateDblClick

用户双击日期单元格时触发。

语法：*object*\_**DateDblClick**（**ByVal** *DateDblClicked* **As Date**）

### DblClick

任何未命中日期单元格的双击时触发。

语法：*object*\_**DblClick**( )

### DragDrop, DragOver

继承的拖放事件。

### GetDayBold

每次可见范围更改时触发，要求应用程序填充 *State* 数组以指定哪些天应以粗体渲染。第一个数组索引为 `1`；数组从 *StartDate* 到 *StartDate* + *Count* − 1。

语法：*object*\_**GetDayBold**（**ByVal** *StartDate* **As Date**，**ByVal** *Count* **As Integer**，*State*( ) **As Boolean**）

*StartDate*
: 可见范围内的第一天（包括上月的尾随日期）。

*Count*
: 可见范围内的总天数。

*State*
: 一个 **Boolean** 数组，从1开始索引，处理程序将应粗体的每一天设为 **True**。

### GotFocus, LostFocus

继承的焦点事件。

### Initialize

控件窗口创建并从持久化状态初始化属性后触发。每次窗体加载触发一次。

### KeyDown, KeyPress, KeyUp

继承的键盘事件。

### MouseDown, MouseMove, MouseUp

继承的鼠标事件。

### OLECompleteDrag, OLEDragDrop, OLEDragOver, OLEGiveFeedback, OLESetData, OLEStartDrag

继承的OLE拖放事件。

### SelChange

选择更改时触发。将 *Cancel* 设为 **True** 将选择回滚到先前范围（控件恢复旧的 [**SelStart**](#selstart) / [**SelEnd**](#selend)）。

语法：*object*\_**SelChange**（**ByVal** *StartDate* **As Date**，**ByVal** *EndDate* **As Date**，*Cancel* **As Boolean**）

### Validate

继承的验证事件。

## 另见

- [DTPicker](/official/Reference/WinNativeCommonCtls/DTPicker) --- 内联日期选择器，其下拉使用相同的Win32日历控件
- [ControlTypeConstants](/official/Reference/VBRUN/Constants/ControlTypeConstants) --- **vbMonthView** 所在位置