# MonthCalendar Control (VBCCRMonthCalendar)

VBCCRMonthCalendar 控件提供了一个完整的日历界面，用户可以查看和选择日期。它支持多选、范围选择、节假日显示等功能。

## 属性

### 日期相关属性
- `Value`: 当前选中的日期
- `SelectionStart`: 选择范围的起始日期
- `SelectionEnd`: 选择范围的结束日期
- `MinDate`: 可选择的最小日期
- `MaxDate`: 可选择的最大日期
- `FirstDayOfWeek`: 每周的第一天
- `MaxSelCount`: 最大可选择的天数

### 显示属性
- `MonthRows`: 显示的月份行数
- `MonthColumns`: 显示的月份列数
- `ShowToday`: 是否显示今天
- `ShowTodayCircle`: 是否在今天日期周围显示圆圈
- `ShowWeekNumbers`: 是否显示周数
- `DayState`: 日期状态(用于标记特殊日期)
- `BackColor`: 背景颜色
- `TitleBackColor`: 标题背景颜色
- `TitleForeColor`: 标题前景颜色
- `TrailingForeColor`: 非当前月份日期的前景颜色

## 方法

### 日期操作
```vb
' 设置日期范围
SetSelectionRange(StartDate As Date, EndDate As Date)

' 获取选择范围
GetSelectionRange(StartDate As Date, EndDate As Date)

' 设置当前日期
SetCurSel(NewDate As Date)

' 获取当前日期
GetCurSel() As Date

' 设置今天日期
SetToday(NewDate As Date)

' 获取今天日期
GetToday() As Date
```

## 事件

- `DateChanged()`: 选中日期改变时触发
- `SelectionChanged()`: 选择范围改变时触发
- `GetDayBold(ByVal StartDate As Date, ByVal Count As Long, ByRef State() As Boolean)`: 获取日期加粗状态
- `Click()`: 点击日期时触发

## 代码示例

### 基本用法

```vb
Private Sub InitMonthCalendar()
    With MonthCalendar1
        ' 设置日期范围
        .MinDate = DateSerial(2000, 1, 1)
        .MaxDate = DateSerial(2030, 12, 31)
        
        ' 设置当前日期
        .Value = Date
        
        ' 显示设置
        .ShowToday = True
        .ShowTodayCircle = True
        .ShowWeekNumbers = True
        
        ' 设置显示布局
        .MonthRows = 1
        .MonthColumns = 2
    End With
End Sub
```

### 日期范围选择

```vb
Private Type DateRange
    StartDate As Date
    EndDate As Date
    Days As Long
End Type

Private Selection As DateRange

Private Sub MonthCalendar1_SelectionChanged()
    With MonthCalendar1
        ' 获取选择范围
        Selection.StartDate = .SelectionStart
        Selection.EndDate = .SelectionEnd
        
        ' 计算天数
        Selection.Days = DateDiff("d", Selection.StartDate, _
                                Selection.EndDate) + 1
        
        ' 更新显示
        UpdateDateRangeInfo
    End With
End Sub

Private Sub UpdateDateRangeInfo()
    With Selection
        lblDateRange.Caption = "选择范围: " & _
                              Format$(.StartDate, "yyyy-mm-dd") & _
                              " 至 " & _
                              Format$(.EndDate, "yyyy-mm-dd") & _
                              " (" & .Days & " 天)"
    End With
End Sub
```

### 特殊日期标记

```vb
Private Type SpecialDate
    Date As Date
    Description As String
    IsBold As Boolean
    Color As Long
End Type

Private SpecialDates() As SpecialDate
Private SpecialDateCount As Long

Private Sub InitSpecialDates()
    ReDim SpecialDates(0 To 9)
    SpecialDateCount = 0
    
    ' 添加特殊日期
    AddSpecialDate #1/1/2024#, "元旦", True, vbRed
    AddSpecialDate #2/10/2024#, "春节", True, vbRed
    AddSpecialDate #5/1/2024#, "劳动节", True, vbRed
End Sub

Private Sub AddSpecialDate(TheDate As Date, Description As String, _
                         IsBold As Boolean, Color As Long)
    If SpecialDateCount >= UBound(SpecialDates) Then
        ReDim Preserve SpecialDates(0 To UBound(SpecialDates) + 9)
    End If
    
    With SpecialDates(SpecialDateCount)
        .Date = TheDate
        .Description = Description
        .IsBold = IsBold
        .Color = Color
    End With
    
    SpecialDateCount = SpecialDateCount + 1
End Sub

Private Sub MonthCalendar1_GetDayBold(ByVal StartDate As Date, _
                                     ByVal Count As Long, _
                                     ByRef State() As Boolean)
    Dim i As Long, j As Long
    Dim CurrentDate As Date
    
    ' 检查每一天
    For i = 0 To Count - 1
        CurrentDate = DateAdd("d", i, StartDate)
        
        ' 检查是否是特殊日期
        For j = 0 To SpecialDateCount - 1
            If DateValue(CurrentDate) = DateValue(SpecialDates(j).Date) Then
                If SpecialDates(j).IsBold Then
                    State(i) = True
                    Exit For
                End If
            End If
        Next j
    Next i
End Sub
```

### 多视图同步

```vb
Private Sub SyncCalendars()
    ' 同步两个日历控件
    With MonthCalendar1
        ' 设置为当前月份视图
        .MonthRows = 1
        .MonthColumns = 1
    End With
    
    With MonthCalendar2
        ' 设置为下个月份视图
        .MonthRows = 1
        .MonthColumns = 1
        .Value = DateAdd("m", 1, MonthCalendar1.Value)
    End With
End Sub

Private Sub MonthCalendar1_DateChanged()
    ' 保持第二个日历同步
    MonthCalendar2.Value = DateAdd("m", 1, MonthCalendar1.Value)
End Sub

Private Sub MonthCalendar2_DateChanged()
    ' 保持第一个日历同步
    MonthCalendar1.Value = DateAdd("m", -1, MonthCalendar2.Value)
End Sub
```

### 日程安排

```vb
Private Type Appointment
    Date As Date
    Time As Date
    Description As String
    Duration As Long  ' 分钟
End Type

Private Appointments() As Appointment
Private AppointmentCount As Long

Private Sub InitAppointments()
    ReDim Appointments(0 To 9)
    AppointmentCount = 0
End Sub

Private Sub AddAppointment(AppDate As Date, AppTime As Date, _
                         Description As String, Duration As Long)
    If AppointmentCount >= UBound(Appointments) Then
        ReDim Preserve Appointments(0 To UBound(Appointments) + 9)
    End If
    
    With Appointments(AppointmentCount)
        .Date = AppDate
        .Time = AppTime
        .Description = Description
        .Duration = Duration
    End With
    
    AppointmentCount = AppointmentCount + 1
    
    ' 更新日历显示
    MonthCalendar1.Refresh
End Sub

Private Sub ShowDayAppointments(ByVal SelectedDate As Date)
    Dim i As Long
    
    ' 清除列表
    lstAppointments.Clear
    
    ' 显示选中日期的所有预约
    For i = 0 To AppointmentCount - 1
        With Appointments(i)
            If DateValue(.Date) = DateValue(SelectedDate) Then
                lstAppointments.AddItem Format$(.Time, "hh:nn") & _
                                      " - " & .Description & _
                                      " (" & .Duration & "分钟)"
            End If
        End With
    Next i
End Sub
```

## 最佳实践

1. 日期验证
```vb
Private Function ValidateDate(ByVal NewDate As Date) As Boolean
    With MonthCalendar1
        If NewDate < .MinDate Or NewDate > .MaxDate Then
            MsgBox "日期必须在 " & Format$(.MinDate, "yyyy-mm-dd") & _
                  " 和 " & Format$(.MaxDate, "yyyy-mm-dd") & " 之间"
            ValidateDate = False
        Else
            ValidateDate = True
        End If
    End With
End Function
```

2. 错误处理
```vb
Private Function SafeSetDate(ByVal NewDate As Date) As Boolean
    On Error GoTo ErrorHandler
    
    MonthCalendar1.Value = NewDate
    SafeSetDate = True
    Exit Function
    
ErrorHandler:
    Debug.Print "设置日期失败: " & Err.Description
    SafeSetDate = False
End Function
```

## 高级特性

### 农历显示

```vb
Private Type LunarInfo
    Year As Integer
    Month As Integer
    Day As Integer
    IsLeapMonth As Boolean
    Festival As String
End Type

Private Function GetLunarInfo(ByVal SolarDate As Date) As LunarInfo
    ' 注: 这里需要实现具体的农历转换算法
    
    Dim Lunar As LunarInfo
    
    With Lunar
        .Year = Year(SolarDate)
        .Month = Month(SolarDate)
        .Day = Day(SolarDate)
        .IsLeapMonth = False
        .Festival = ""  ' 农历节日
    End With
    
    GetLunarInfo = Lunar
End Function

Private Sub ShowLunarDate()
    Dim Lunar As LunarInfo
    Lunar = GetLunarInfo(MonthCalendar1.Value)
    
    With Lunar
        lblLunar.Caption = "农历: " & .Year & "年" & _
                          IIf(.IsLeapMonth, "闰", "") & _
                          .Month & "月" & .Day & "日" & _
                          IIf(Len(.Festival) > 0, " " & .Festival, "")
    End With
End Sub
```

### 日程视图

```vb
Private Type Schedule
    Date As Date
    TimeStart As Date
    TimeEnd As Date
    Title As String
    Location As String
    Description As String
    Color As Long
End Type

Private Schedules() As Schedule
Private ScheduleCount As Long

Private Sub InitScheduleView()
    ReDim Schedules(0 To 9)
    ScheduleCount = 0
    
    ' 设置视图
    With MonthCalendar1
        .ShowWeekNumbers = True
        .MonthRows = 1
        .MonthColumns = 1
    End With
End Sub

Private Sub AddSchedule(TheDate As Date, StartTime As Date, _
                       EndTime As Date, Title As String, _
                       Location As String, Description As String, _
                       Color As Long)
    If ScheduleCount >= UBound(Schedules) Then
        ReDim Preserve Schedules(0 To UBound(Schedules) + 9)
    End If
    
    With Schedules(ScheduleCount)
        .Date = TheDate
        .TimeStart = StartTime
        .TimeEnd = EndTime
        .Title = Title
        .Location = Location
        .Description = Description
        .Color = Color
    End With
    
    ScheduleCount = ScheduleCount + 1
End Sub

Private Sub ShowDaySchedule(ByVal SelectedDate As Date)
    Dim i As Long
    
    ' 清除日程列表
    lstSchedule.Clear
    
    ' 显示选中日期的所有日程
    For i = 0 To ScheduleCount - 1
        With Schedules(i)
            If DateValue(.Date) = DateValue(SelectedDate) Then
                lstSchedule.AddItem Format$(.TimeStart, "hh:nn") & _
                                   " - " & _
                                   Format$(.TimeEnd, "hh:nn") & _
                                   " " & .Title & _
                                   IIf(Len(.Location) > 0, _
                                       " @ " & .Location, "")
            End If
        End With
    Next i
End Sub
```

### 周视图

```vb
Private Type WeekViewInfo
    StartDate As Date
    EndDate As Date
    WeekNumber As Long
    Days(1 To 7) As Date
End Type

Private WeekView As WeekViewInfo

Private Sub InitWeekView()
    ' 设置周视图
    With MonthCalendar1
        .ShowWeekNumbers = True
        .FirstDayOfWeek = vbSunday
    End With
    
    UpdateWeekView MonthCalendar1.Value
End Sub

Private Sub UpdateWeekView(ByVal SelectedDate As Date)
    With WeekView
        ' 计算周的起始和结束日期
        .StartDate = DateAdd("d", _
                    -(Weekday(SelectedDate) - 1), SelectedDate)
        .EndDate = DateAdd("d", 6, .StartDate)
        
        ' 计算周数
        .WeekNumber = DatePart("ww", SelectedDate)
        
        ' 填充每一天
        Dim i As Long
        For i = 1 To 7
            .Days(i) = DateAdd("d", i - 1, .StartDate)
        Next i
    End With
    
    ' 更新显示
    ShowWeekView
End Sub

Private Sub ShowWeekView()
    With WeekView
        lblWeek.Caption = "第 " & .WeekNumber & " 周 (" & _
                         Format$(.StartDate, "yyyy-mm-dd") & _
                         " 至 " & _
                         Format$(.EndDate, "yyyy-mm-dd") & ")"
                         
        ' 显示每天的日程
        Dim i As Long
        For i = 1 To 7
            ShowDaySchedule .Days(i)
        Next i
    End With
End Sub
```

### 导出功能

```vb
Private Sub ExportToCSV(ByVal FilePath As String)
    Dim FileNum As Integer
    FileNum = FreeFile
    
    On Error GoTo ErrorHandler
    
    Open FilePath For Output As #FileNum
    
    ' 写入标题
    Print #FileNum, "日期,时间,标题,地点,描述"
    
    ' 写入日程数据
    Dim i As Long
    For i = 0 To ScheduleCount - 1
        With Schedules(i)
            Print #FileNum, _
                  Format$(.Date, "yyyy-mm-dd") & "," & _
                  Format$(.TimeStart, "hh:nn") & "," & _
                  .Title & "," & _
                  .Location & "," & _
                  .Description
        End With
    Next i
    
    Close #FileNum
    Exit Sub
    
ErrorHandler:
    If FileNum > 0 Then Close #FileNum
    MsgBox "导出失败: " & Err.Description
End Sub
```

### 打印功能

```vb
Private Sub PrintMonthView()
    On Error GoTo ErrorHandler
    
    With Printer
        .ScaleMode = vbMillimeters
        .Orientation = vbPRORPortrait
        
        ' 设置标题
        .CurrentY = 10
        .CurrentX = 10
        .FontSize = 14
        .FontBold = True
        Print "月历视图 - " & Format$(MonthCalendar1.Value, "yyyy年mm月")
        
        ' 绘制日历网格
        DrawCalendarGrid
        
        ' 填充日期和日程
        FillCalendarContent
        
        ' 输出打印
        .EndDoc
    End With
    Exit Sub
    
ErrorHandler:
    MsgBox "打印失败: " & Err.Description
End Sub

Private Sub DrawCalendarGrid()
    ' 实现日历网格的绘制
End Sub

Private Sub FillCalendarContent()
    ' 填充日期和日程内容
End Sub
```

这些示例展示了 MonthCalendar 控件的主要功能和高级用法。它可以用于创建日历视图、日程管理、农历显示等多种应用场景。
