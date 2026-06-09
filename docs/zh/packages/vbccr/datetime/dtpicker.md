---
title: 日期时间选择器控件（DTPicker）
description: 日期时间选择器控件（DTPicker） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '998dadc6-a3dd-4ede-80a5-694b21b6f98c'
  PropagateID: '998dadc6-a3dd-4ede-80a5-694b21b6f98c'
  ReservedCode1: '5ae4474a-56e8-41ac-8ede-bd52a7feaacc'
  ReservedCode2: '5ae4474a-56e8-41ac-8ede-bd52a7feaacc'
---

# 日期时间选择器控件（DTPicker）

基于 Windows 日期时间选择器通用控件，提供日期和时间的选取与自定义格式化功能。

## 枚举

### DtpFormatConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| DtpFormatLongDate | 0 | 长日期格式 |
| DtpFormatShortDate | 1 | 短日期格式 |
| DtpFormatTime | 2 | 时间格式 |
| DtpFormatCustom | 3 | 自定义格式 |

## 属性

### Name

```vb
Property Get Name() As String
```

返回在代码中标识对象的名称。

### Tag

```vb
Property Get/Let Tag() As String
```

存储程序所需的附加数据。

### Parent

```vb
Property Get Parent() As Object
```

返回包含此对象的对象。

### Container

`Property Get Container() As Object` / `Property Set Container(ByVal Value As Object)`

返回/设置对象的容器。

### Left

```vb
Property Get/Let Left() As Single
```

返回/设置对象左边缘与其容器左边缘的距离。

### Top

```vb
Property Get/Let Top() As Single
```

返回/设置对象上边缘与其容器上边缘的距离。

### Width

```vb
Property Get/Let Width() As Single
```

返回/设置对象的宽度。

### Height

```vb
Property Get/Let Height() As Single
```

返回/设置对象的高度。

### Visible

```vb
Property Get/Let Visible() As Boolean
```

返回/设置对象是否可见。

### ToolTipText

```vb
Property Get/Let ToolTipText() As String
```

返回/设置鼠标悬停时显示的提示文本。

### HelpContextID

```vb
Property Get/Let HelpContextID() As Long
```

指定对象的默认帮助文件上下文 ID。

### WhatsThisHelpID

```vb
Property Get/Let WhatsThisHelpID() As Long
```

返回/设置与对象关联的上下文编号。

### DragIcon

```vb
Property Get/Let/Set DragIcon() As IPictureDisp
```

返回/设置拖放操作中显示的图标。

### DragMode

```vb
Property Get/Let DragMode() As Integer
```

返回/设置拖动模式（手动或自动）。

### hWnd

```vb
Property Get hWnd() As LongPtr
```

返回日期时间选择器控件的窗口句柄。

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

返回 UserControl 的窗口句柄。

### hWndCalendar

```vb
Property Get hWndCalendar() As LongPtr
```

返回下拉日历控件的窗口句柄。

### Font

```vb
Property Get/Let/Set Font() As StdFont
```

返回/设置控件字体。

### CalendarFont

```vb
Property Get/Let/Set CalendarFont() As StdFont
```

返回/设置下拉日历字体。

### VisualStyles

```vb
Property Get/Let VisualStyles() As Boolean
```

返回/设置是否启用视觉样式。

### Enabled

```vb
Property Get/Let Enabled() As Boolean
```

返回/设置控件是否响应用户事件。

### OLEDropMode

```vb
Property Get/Let OLEDropMode() As OLEDropModeConstants
```

返回/设置对象是否可作为 OLE 放置目标。参见通用枚举。

### MousePointer

```vb
Property Get/Let MousePointer() As CCMousePointerConstants
```

返回/设置鼠标指针类型。参见通用枚举。

### MouseIcon

```vb
Property Get/Let/Set MouseIcon() As IPictureDisp
```

返回/设置自定义鼠标图标。

### MouseTrack

```vb
Property Get/Let MouseTrack() As Boolean
```

返回/设置是否触发 MouseEnter/MouseLeave 事件。

### RightToLeft

```vb
Property Get/Let RightToLeft() As Boolean
```

决定双向系统上的文本显示方向和控件视觉外观。

### RightToLeftLayout

```vb
Property Get/Let RightToLeftLayout() As Boolean
```

返回/设置是否启用从右到左镜像布局。

### RightToLeftMode

```vb
Property Get/Let RightToLeftMode() As CCRightToLeftModeConstants
```

返回/设置从右到左模式。参见通用枚举。

### CalendarBackColor

```vb
Property Get/Let CalendarBackColor() As OLE_COLOR
```

返回/设置日历月份区域的背景色。

### CalendarForeColor

```vb
Property Get/Let CalendarForeColor() As OLE_COLOR
```

返回/设置日历月份区域的前景色。

### CalendarTitleBackColor

```vb
Property Get/Let CalendarTitleBackColor() As OLE_COLOR
```

返回/设置日历标题的背景色。

### CalendarTitleForeColor

```vb
Property Get/Let CalendarTitleForeColor() As OLE_COLOR
```

返回/设置日历标题的前景色。

### CalendarTrailingForeColor

```vb
Property Get/Let CalendarTrailingForeColor() As OLE_COLOR
```

返回/设置日历末尾日期的前景色。

### CalendarShowToday

```vb
Property Get/Let CalendarShowToday() As Boolean
```

返回/设置日历是否在底部显示"今天"日期。

### CalendarShowTodayCircle

```vb
Property Get/Let CalendarShowTodayCircle() As Boolean
```

返回/设置是否在今天的日期上画圆圈。

### CalendarShowWeekNumbers

```vb
Property Get/Let CalendarShowWeekNumbers() As Boolean
```

返回/设置日历是否显示周数。

### CalendarShowTrailingDates

```vb
Property Get/Let CalendarShowTrailingDates() As Boolean
```

返回/设置日历是否显示上/下月的日期。

### CalendarAlignment

```vb
Property Get/Let CalendarAlignment() As CCLeftRightAlignmentConstants
```

返回/设置日历的对齐方式。参见通用枚举。

### CalendarDayState

```vb
Property Get/Let CalendarDayState() As Boolean
```

返回/设置日历是否支持 CalendarGetDayBold 事件中的粗体日期。

### CalendarUseShortestDayNames

```vb
Property Get/Let CalendarUseShortestDayNames() As Boolean
```

返回/设置日历是否使用最短日期名称。

### MinDate

```vb
Property Get/Let MinDate() As Date
```

返回/设置可选择的最小日期。

### MaxDate

```vb
Property Get/Let MaxDate() As Date
```

返回/设置可选择的最大日期。

### Value

```vb
Property Get/Let Value() As Variant
```

返回/设置当前日期时间值。

### Year

```vb
Property Get Year() As Integer
```

返回当前日期的年份（只读）。

### Month

```vb
Property Get Month() As Integer
```

返回当前日期的月份（只读）。

### Week

```vb
Property Get Week() As Integer
```

返回当前日期的周数（只读）。

### Day

```vb
Property Get Day() As Integer
```

返回当前日期的日（只读）。

### Hour

```vb
Property Get Hour() As Integer
```

返回当前时间的小时（只读）。

### Minute

```vb
Property Get Minute() As Integer
```

返回当前时间的分钟（只读）。

### Second

```vb
Property Get Second() As Integer
```

返回当前时间的秒（只读）。

### Format

```vb
Property Get/Let Format() As DtpFormatConstants
```

返回/设置日期时间的显示格式。

### CustomFormat

```vb
Property Get/Let CustomFormat() As String
```

返回/设置自定义格式字符串。

### UpDown

```vb
Property Get/Let UpDown() As Boolean
```

返回/设置是否使用上下按钮代替下拉日历。

### CheckBox

```vb
Property Get/Let CheckBox() As Boolean
```

返回/设置是否在控件中显示复选框。

### AllowUserInput

```vb
Property Get/Let AllowUserInput() As Boolean
```

返回/设置是否允许用户直接输入日期。

### StartOfWeek

```vb
Property Get/Let StartOfWeek() As Integer
```

返回/设置一周的起始日（0=系统默认, 1=周一, ..., 7=周日）。

### DroppedDown

```vb
Property Get DroppedDown() As Boolean
```

返回日历是否处于下拉状态（只读）。

### Selected

```vb
Property Get Selected() As Boolean
```

返回复选框是否被选中（只读）。

### DayCount

```vb
Property Get DayCount() As Long
```

返回当前可见的日期数（只读）。

### DayOfWeek

```vb
Property Get DayOfWeek() As Integer
```

返回当前日期是星期几（只读）。

### SystemStartOfWeek

```vb
Property Get SystemStartOfWeek() As Integer
```

返回系统一周起始日（只读）。

## 方法

### OLEDrag

```vb
Public Sub OLEDrag()
```

启动 OLE 拖放操作。

### Drag

```vb
Public Sub Drag(Optional ByRef Action As Variant)
```

开始、结束或取消拖动操作。

### SetFocus

```vb
Public Sub SetFocus()
```

将焦点移到控件上。

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

将控件放置在 Z 轴顺序的前面或后面。

### Refresh

```vb
Public Sub Refresh()
```

强制重绘控件。

### GetIdealSize

```vb
Public Sub GetIdealSize(ByRef Width As Long, ByRef Height As Long)
```

获取控件的理想尺寸。

## 事件

### Click

```vb
Public Event Click()
```

用户按下并释放鼠标按钮时发生。

### DropDown

```vb
Public Event DropDown()
```

下拉日历即将展开时发生。

### CloseUp

```vb
Public Event CloseUp()
```

用户关闭日历时发生。

### Change

```vb
Public Event Change()
```

控件内容发生变化时发生。

### ContextMenu

```vb
Public Event ContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)
```

用户右键点击或按 Shift+F10 时发生。

### CalendarGetDayBold

```vb
Public Event CalendarGetDayBold(ByVal StartDate As Date, ByVal Count As Long, ByRef State() As Boolean)
```

日历请求日期粗体信息时发生。需要 comctl32.dll 版本 6.1 或更高。

### CalendarContextMenu

```vb
Public Event CalendarContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)
```

日历区域右键点击时发生。

### CallbackKeyDown

```vb
Public Event CallbackKeyDown(ByVal KeyCode As Integer, ByVal Shift As Integer, ByVal CallbackField As String, ByRef CallbackDate As Date)
```

用户在回调字段上按键时发生。

### FormatString

```vb
Public Event FormatString(ByVal CallbackField As String, ByRef FormattedString As String)
```

控件请求回调字段的显示文本时发生。

### FormatSize

```vb
Public Event FormatSize(ByVal CallbackField As String, ByRef Size As Integer)
```

控件需要知道回调字段的最大允许大小时发生。

### BeforeUserInput

```vb
Public Event BeforeUserInput(ByVal hWndEdit As LongPtr)
```

用户尝试输入字符串时发生。

### ParseUserInput

```vb
Public Event ParseUserInput(ByVal Text As String, ByRef ParseDate As Variant)
```

用户输入完成时发生，需要解析输入字符串。

### AfterUserInput

```vb
Public Event AfterUserInput()
```

用户输入已完成或取消时发生。

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

在 KeyDown 事件之前发生。

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

在 KeyUp 事件之前发生。

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

用户按下键时发生。

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

用户释放键时发生。

### KeyPress

```vb
Public Event KeyPress(KeyChar As Integer)
```

用户按下并释放字符键时发生。

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

用户按下鼠标按钮时发生。

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

用户移动鼠标时发生。

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

用户释放鼠标按钮时发生。

### MouseEnter

```vb
Public Event MouseEnter()
```

鼠标进入控件时发生。

### MouseLeave

```vb
Public Event MouseLeave()
```

鼠标离开控件时发生。

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

OLE 拖放操作完成后发生。

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

数据通过 OLE 拖放操作放置到控件上时发生。

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

鼠标在 OLE 拖放操作期间移过控件时发生。

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

需要更改鼠标光标时发生。

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

放置目标请求数据时发生。

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

OLE 拖放操作启动时发生。

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    With DTPicker1
        .Format = DtpFormatShortDate
        .Value = Date
        .MinDate = #1/1/1900#
        .MaxDate = #12/31/9999#
    End With
End Sub

Private Sub DTPicker1_Change()
    MsgBox "选择的日期: " & DTPicker1.Value
End Sub
```

### 自定义格式与回调

```vb
Private Sub Form_Load()
    DTPicker1.Format = DtpFormatCustom
    DTPicker1.CustomFormat = "yyyy年MM月dd日 '第' w '周'"
End Sub

Private Sub DTPicker1_FormatString(ByVal CallbackField As String, ByRef FormattedString As String)
    Select Case CallbackField
        Case "w"
            FormattedString = CStr(DatePart("ww", DTPicker1.Value, vbMonday))
    End Select
End Sub
```