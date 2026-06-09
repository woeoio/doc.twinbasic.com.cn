---
title: 月历视图控件（MonthView）
description: 月历视图控件（MonthView） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f54f7a5d-588e-4c22-8a6b-93f2c33ed135'
  PropagateID: 'f54f7a5d-588e-4c22-8a6b-93f2c33ed135'
  ReservedCode1: 'c6a63640-a595-46ce-876b-929bd0330ec9'
  ReservedCode2: 'c6a63640-a595-46ce-876b-929bd0330ec9'
---

# 月历视图控件（MonthView）

封装 SysMonthCal32 系统月历控件，用于日期选择和日历显示，支持多日期选择、多月份视图等高级功能。

## 枚举

### MvwViewConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| MvwViewMonth | 0 | 月视图 |
| MvwViewYear | 1 | 年视图 |
| MvwViewDecade | 2 | 十年视图 |
| MvwViewCentury | 3 | 百年视图 |

### MvwHitResultConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| MvwHitResultNowhere | 0 | 无命中 |
| MvwHitResultTitleBg | 1 | 标题背景 |
| MvwHitResultTitleMonth | 2 | 标题月份 |
| MvwHitResultTitleYear | 3 | 标题年份 |
| MvwHitResultTitlePrevMonth | 4 | 上一个月按钮 |
| MvwHitResultTitleNextMonth | 5 | 下一个月按钮 |
| MvwHitResultCalendarBg | 6 | 日历背景 |
| MvwHitResultCalendarDate | 7 | 日历日期 |
| MvwHitResultCalendarDateMin | 8 | 日历最小日期 |
| MvwHitResultCalendarDateMax | 9 | 日历最大日期 |
| MvwHitResultCalendarWeekNumber | 10 | 周数 |
| MvwHitResultCalendarPrevMonth | 11 | 上个月的日期 |
| MvwHitResultCalendarNextMonth | 12 | 下个月的日期 |
| MvwHitResultTodayLink | 13 | "今天"链接 |

### CCMousePointerConstants

参见通用枚举。

## 属性

### Value

```vb
Property Get Value() As Date
Property Let Value(ByVal Value As Date)
```

当前选中的日期。

### MinDate

```vb
Property Get MinDate() As Date
Property Let MinDate(ByVal Value As Date)
```

最小可选日期。

### MaxDate

```vb
Property Get MaxDate() As Date
Property Let MaxDate(ByVal Value As Date)
```

最大可选日期。

### Year

```vb
Property Get Year() As Integer
Property Let Year(ByVal Value As Integer)
```

当前年份。

### Month

```vb
Property Get Month() As Integer
Property Let Month(ByVal Value As Integer)
```

当前月份（1-12）。

### Week

```vb
Property Get Week() As Integer
Property Let Week(ByVal Value As Integer)
```

当前周数。

### Day

```vb
Property Get Day() As Integer
Property Let Day(ByVal Value As Integer)
```

当前日（1-31）。

### DayCount

```vb
Property Get DayCount() As Long
```

当前可见月份中包含的天数。只读。

### CalendarCount

```vb
Property Get CalendarCount() As Long
```

当前显示的月份数量。只读。

### ShowToday

```vb
Property Get ShowToday() As Boolean
Property Let ShowToday(ByVal Value As Boolean)
```

是否显示"今天"日期。

### ShowTodayCircle

```vb
Property Get ShowTodayCircle() As Boolean
Property Let ShowTodayCircle(ByVal Value As Boolean)
```

是否用圆圈标记今天。

### ShowWeekNumbers

```vb
Property Get ShowWeekNumbers() As Boolean
Property Let ShowWeekNumbers(ByVal Value As Boolean)
```

是否显示周数。

### ShowTrailingDates

```vb
Property Get ShowTrailingDates() As Boolean
Property Let ShowTrailingDates(ByVal Value As Boolean)
```

是否显示上/下个月的拖尾日期。

### ScrollRate

```vb
Property Get ScrollRate() As Long
Property Let ScrollRate(ByVal Value As Long)
```

滚动速率。

### StartOfWeek

```vb
Property Get StartOfWeek() As Integer
Property Let StartOfWeek(ByVal Value As Integer)
```

一周的开始日（0=周日，1=周一...6=周六）。

### MultiSelect

```vb
Property Get MultiSelect() As Boolean
Property Let MultiSelect(ByVal Value As Boolean)
```

是否允许多日期选择。

### DayState

```vb
Property Get DayState() As String
Property Let DayState(ByVal Value As String)
```

日期状态位图字符串，控制日期的粗体显示。

### MaxSelCount

```vb
Property Get MaxSelCount() As Long
Property Let MaxSelCount(ByVal Value As Long)
```

多选时的最大可选天数。

### MonthColumns

```vb
Property Get MonthColumns() As Long
Property Let MonthColumns(ByVal Value As Long)
```

水平显示的月份数。

### MonthRows

```vb
Property Get MonthRows() As Long
Property Let MonthRows(ByVal Value As Long)
```

垂直显示的月份数。

### View

```vb
Property Get View() As MvwViewConstants
Property Let View(ByVal Value As MvwViewConstants)
```

日历视图模式。

### UseShortestDayNames

```vb
Property Get UseShortestDayNames() As Boolean
Property Let UseShortestDayNames(ByVal Value As Boolean)
```

是否使用最短的星期名称。

### BackColor

```vb
Property Get BackColor() As OLE_COLOR
Property Let BackColor(ByVal Value As OLE_COLOR)
```

背景颜色。

### ForeColor

```vb
Property Get ForeColor() As OLE_COLOR
Property Let ForeColor(ByVal Value As OLE_COLOR)
```

前景颜色。

### TitleBackColor

```vb
Property Get TitleBackColor() As OLE_COLOR
Property Let TitleBackColor(ByVal Value As OLE_COLOR)
```

标题背景颜色。

### TitleForeColor

```vb
Property Get TitleForeColor() As OLE_COLOR
Property Let TitleForeColor(ByVal Value As OLE_COLOR)
```

标题前景颜色。

### TrailingForeColor

```vb
Property Get TrailingForeColor() As OLE_COLOR
Property Let TrailingForeColor(ByVal Value As OLE_COLOR)
```

拖尾日期的前景颜色。

### SelStart

```vb
Property Get SelStart() As Date
Property Let SelStart(ByVal Value As Date)
```

选择范围的起始日期。

### SelEnd

```vb
Property Get SelEnd() As Date
Property Let SelEnd(ByVal Value As Date)
```

选择范围的结束日期。

### Today

```vb
Property Get Today() As Date
```

返回今天的日期。只读。

### SystemStartOfWeek

```vb
Property Get SystemStartOfWeek() As Integer
```

返回系统设置的一周开始日。只读。

### DayOfWeek

```vb
Property Get DayOfWeek() As Integer
```

返回 Value 对应的星期几。只读。

### VisualStyles

```vb
Property Get VisualStyles() As Boolean
Property Let VisualStyles(ByVal Value As Boolean)
```

是否启用视觉样式。

### hWnd

```vb
Property Get hWnd() As LongPtr
```

月历视图控件的窗口句柄。

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

用户控件的窗口句柄。

### Font

```vb
Property Get Font() As StdFont
Property Let Font(ByVal NewFont As StdFont)
Property Set Font(ByVal NewFont As StdFont)
```

字体。

### Enabled

```vb
Property Get Enabled() As Boolean
Property Let Enabled(ByVal Value As Boolean)
```

是否可用。

### MousePointer

```vb
Property Get MousePointer() As CCMousePointerConstants
Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

鼠标指针样式。参见通用枚举。

### MouseIcon

```vb
Property Get MouseIcon() As IPictureDisp
Property Let MouseIcon(ByVal Value As IPictureDisp)
Property Set MouseIcon(ByVal Value As IPictureDisp)
```

自定义鼠标图标。

### MouseTrack

```vb
Property Get MouseTrack() As Boolean
Property Let MouseTrack(ByVal Value As Boolean)
```

是否启用鼠标进入/离开跟踪。

### RightToLeft

```vb
Property Get RightToLeft() As Boolean
Property Let RightToLeft(ByVal Value As Boolean)
```

从右到左显示方向。

### RightToLeftMode

```vb
Property Get RightToLeftMode() As CCRightToLeftModeConstants
Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

从右到左模式。参见通用枚举。

### Name

```vb
Property Get Name() As String
```

控件名称。只读。

### Tag

```vb
Property Get Tag() As String
Property Let Tag(ByVal Value As String)
```

自定义数据。

### Parent

```vb
Property Get Parent() As Object
```

父对象。只读。

### Container

```vb
Property Get Container() As Object
Property Set Container(ByVal Value As Object)
```

容器对象。

### Left

```vb
Property Get Left() As Single
Property Let Left(ByVal Value As Single)
```

左边距。

### Top

```vb
Property Get Top() As Single
Property Let Top(ByVal Value As Single)
```

顶边距。

### Width

```vb
Property Get Width() As Single
Property Let Width(ByVal Value As Single)
```

宽度。

### Height

```vb
Property Get Height() As Single
Property Let Height(ByVal Value As Single)
```

高度。

### Visible

```vb
Property Get Visible() As Boolean
Property Let Visible(ByVal Value As Boolean)
```

是否可见。

### ToolTipText

```vb
Property Get ToolTipText() As String
Property Let ToolTipText(ByVal Value As String)
```

工具提示文本。

### HelpContextID

```vb
Property Get HelpContextID() As Long
Property Let HelpContextID(ByVal Value As Long)
```

帮助上下文 ID。

### WhatsThisHelpID

```vb
Property Get WhatsThisHelpID() As Long
Property Let WhatsThisHelpID(ByVal Value As Long)
```

"这是什么"帮助 ID。

### DragIcon

```vb
Property Get DragIcon() As IPictureDisp
Property Let DragIcon(ByVal Value As IPictureDisp)
Property Set DragIcon(ByVal Value As IPictureDisp)
```

拖拽图标。

### DragMode

```vb
Property Get DragMode() As Integer
Property Let DragMode(ByVal Value As Integer)
```

拖拽模式。

## 方法

### SetSelRange

```vb
Public Sub SetSelRange(ByVal StartDate As Date, ByVal EndDate As Date)
```

设置日期选择范围。

### ComputeControlSize

```vb
Public Sub ComputeControlSize()
```

根据当前设置重新计算控件大小。

### GetMonthRange

```vb
Public Function GetMonthRange() As String
```

获取当前显示的月份范围。

### HitTest

```vb
Public Function HitTest(ByVal X As Single, ByVal Y As Single) As MvwHitResultConstants
```

测试指定坐标处的命中区域。

### Drag

```vb
Public Sub Drag([ByRef Action As Variant])
```

开始、结束或取消拖放操作。

### SetFocus

```vb
Public Sub SetFocus()
```

将焦点移至控件。

### ZOrder

```vb
Public Sub ZOrder([ByRef Position As Variant])
```

设置控件的 Z 顺序。

### OLEDrag

```vb
Public Sub OLEDrag()
```

启动 OLE 拖放操作。

### Refresh

```vb
Public Sub Refresh()
```

强制重绘控件。

## 事件

### GetDayBold

```vb
Public Event GetDayBold(ByRef DayState As String)
```

需要获取日期粗体状态时触发。

### SelChange

```vb
Public Event SelChange(ByVal StartDate As Date, ByVal EndDate As Date)
```

选择范围发生改变时触发。

### DateClick

```vb
Public Event DateClick(ByVal DateClicked As Date)
```

单击某个日期时触发。

### ViewChange

```vb
Public Event ViewChange()
```

视图模式发生改变时触发。

### ContextMenu

```vb
Public Event ContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)
```

右键单击或按 Shift+F10 时触发。

### Click

```vb
Public Event Click()
```

单击控件时触发。

### DblClick

```vb
Public Event DblClick()
```

双击控件时触发。

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

按下鼠标按钮时触发。

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

释放鼠标按钮时触发。

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

移动鼠标时触发。

### MouseEnter

```vb
Public Event MouseEnter()
```

鼠标进入控件时触发。

### MouseLeave

```vb
Public Event MouseLeave()
```

鼠标离开控件时触发。

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

按下按键时触发。

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

释放按键时触发。

### KeyPress

```vb
Public Event KeyPress(KeyChar As Integer)
```

按键字符输入时触发。

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

OLE 拖放完成时触发。

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

OLE 拖放经过控件时触发。

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

OLE 拖放需要更改光标时触发。

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

OLE 拖放开始时触发。

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

OLE 拖放完成时触发。

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

OLE 放置目标请求数据时触发。

## 代码示例

```vb
' 基本日期选择
MonthView1.Value = Date

' 限制可选日期范围
MonthView1.MinDate = #1/1/2025#
MonthView1.MaxDate = #12/31/2025#

' 多日期选择
MonthView1.MultiSelect = True
MonthView1.MaxSelCount = 7
Call MonthView1.SetSelRange(#1/1/2025#, #1/7/2025#)

' 多月份显示
MonthView1.MonthColumns = 2
MonthView1.MonthRows = 1
```