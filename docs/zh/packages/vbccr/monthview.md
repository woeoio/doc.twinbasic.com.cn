# MonthView Control (VBCCRMonthView)

VBCCRMonthView 控件提供了一个日历界面，允许用户查看和选择日期。它支持单日期选择、日期范围选择，并提供多种自定义显示选项。

## 属性

### 关键属性

- `Value`: 当前选中的日期
- `MinDate`: 可选择的最小日期
- `MaxDate`: 可选择的最大日期
- `MultiSelect`: 是否允许选择多个日期
- `SelectionRange`: 选中的日期范围
- `FirstDayOfWeek`: 每周的第一天
- `ShowToday`: 是否显示今天日期
- `ShowWeekNumbers`: 是否显示周数
- `BackColor`: 背景颜色
- `ForeColor`: 文本颜色
- `MonthColumns`: 水平显示的月份数
- `MonthRows`: 垂直显示的月份数

## 方法

### 主要方法

- `GetSelectedRange(Start As Date, [End] As Date)`: 获取选中的日期范围
- `SetSelectedRange(Start As Date, [End] As Date)`: 设置选中的日期范围
- `HitTest(X As Single, Y As Single)`: 获取指定坐标的日期
- `Navigate(Interval As Integer)`: 导航到下一个/上一个月份
- `Today()`: 导航到今天

## 事件

- `DateClick(ByVal DateClicked As Date)`: 点击日期时触发
- `SelectionChange()`: 日期选择改变时触发
- `GetDayBold(ByVal StartDate As Date, ByVal Count As Long, State() As Boolean)`: 设置日期加粗显示
- `MonthChange()`: 显示月份改变时触发

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    With MonthView1
        .Value = Date ' 设置为今天
        .ShowToday = True
        .ShowWeekNumbers = True
        .FirstDayOfWeek = vbSunday
    End With
End Sub
```

### 日期范围选择

```vb
Private Sub SetupDateRange()
    With MonthView1
        .MultiSelect = True
        .MinDate = DateSerial(Year(Date), 1, 1)
        .MaxDate = DateSerial(Year(Date), 12, 31)
        
        ' 设置默认选择范围
        .SetSelectedRange Date, DateAdd("d", 7, Date)
    End With
End Sub

Private Sub MonthView1_SelectionChange()
    Dim StartDate As Date
    Dim EndDate As Date
    
    MonthView1.GetSelectedRange StartDate, EndDate
    Debug.Print "选择范围: " & StartDate & " 到 " & EndDate
End Sub
```

### 特殊日期标记

```vb
Private Sub MarkSpecialDates()
    ' 在日历中标记特殊日期
    Dim SpecialDates() As Date
    Dim i As Long
    
    ' 添加特殊日期
    ReDim SpecialDates(0 To 2)
    SpecialDates(0) = Date
    SpecialDates(1) = DateAdd("d", 7, Date)
    SpecialDates(2) = DateAdd("d", 14, Date)
    
    ' 存储特殊日期供后续使用
    Set mSpecialDates = New Collection
    For i = 0 To UBound(SpecialDates)
        mSpecialDates.Add SpecialDates(i)
    Next i
End Sub

Private Sub MonthView1_GetDayBold(ByVal StartDate As Date, ByVal Count As Long, State() As Boolean)
    Dim i As Long
    Dim j As Long
    Dim CurrentDate As Date
    
    ' 检查每一天是否是特殊日期
    For i = 0 To Count - 1
        CurrentDate = DateAdd("d", i, StartDate)
        For j = 1 To mSpecialDates.Count
            If CurrentDate = mSpecialDates(j) Then
                State(i) = True
                Exit For
            End If
        Next j
    Next i
End Sub
```

## 常见用例

### 日期选择器

```vb
Private Sub CreateDatePicker()
    With MonthView1
        .MultiSelect = False
        .ShowToday = True
        .ShowWeekNumbers = False
        .MonthColumns = 1
        .MonthRows = 1
    End With
End Sub

Private Sub MonthView1_DateClick(ByVal DateClicked As Date)
    txtSelectedDate.Text = Format$(DateClicked, "yyyy-mm-dd")
End Sub
```

### 预约日历

```vb
Private Type Appointment
    AppDate As Date
    Description As String
End Type

Private Appointments() As Appointment

Private Sub SetupAppointmentCalendar()
    With MonthView1
        .MultiSelect = False
        .ShowToday = True
        .MonthColumns = 2
        .MonthRows = 1
    End With
    
    LoadAppointments
End Sub

Private Sub LoadAppointments()
    ' 加载预约数据
    ReDim Appointments(0 To 10)
    ' ... 加载预约数据代码
End Sub

Private Sub MonthView1_GetDayBold(ByVal StartDate As Date, ByVal Count As Long, State() As Boolean)
    Dim i As Long, j As Long
    
    For i = 0 To Count - 1
        For j = 0 To UBound(Appointments)
            If DateAdd("d", i, StartDate) = Appointments(j).AppDate Then
                State(i) = True
                Exit For
            End If
        Next j
    Next i
End Sub
```

## 最佳实践

1. 日期验证
```vb
Private Function IsValidDate(ByVal TestDate As Date) As Boolean
    On Error GoTo ErrorHandler
    
    If TestDate < MonthView1.MinDate Or _
       TestDate > MonthView1.MaxDate Then
        IsValidDate = False
        Exit Function
    End If
    
    IsValidDate = True
    Exit Function
    
ErrorHandler:
    IsValidDate = False
End Function
```

2. 范围选择处理
```vb
Private Sub HandleDateRangeSelection()
    Dim StartDate As Date
    Dim EndDate As Date
    
    On Error GoTo ErrorHandler
    
    MonthView1.GetSelectedRange StartDate, EndDate
    
    ' 验证选择范围
    If DateDiff("d", StartDate, EndDate) > 30 Then
        MsgBox "选择范围不能超过30天"
        MonthView1.SetSelectedRange StartDate, _
            DateAdd("d", 30, StartDate)
    End If
    Exit Sub
    
ErrorHandler:
    Debug.Print "日期范围选择错误: " & Err.Description
End Sub
```

## 已知问题和解决方案

1. 日期格式处理
```vb
Private Function FormatDisplayDate(ByVal TheDate As Date) As String
    On Error GoTo ErrorHandler
    
    FormatDisplayDate = Format$(TheDate, "yyyy年mm月dd日")
    Exit Function
    
ErrorHandler:
    FormatDisplayDate = "无效日期"
End Function
```

2. 性能优化
```vb
Private Sub OptimizeCalendarDisplay()
    ' 禁用重绘
    MonthView1.Visible = False
    
    ' 更新日历内容
    UpdateCalendarContent
    
    ' 重新启用显示
    MonthView1.Visible = True
End Sub
```

## 其他提示

- 注意日期范围限制
- 处理无效日期
- 实现日期格式化
- 考虑节假日显示
- 优化性能
- 处理时区问题
- 提供清晰的视觉反馈
- 实现键盘导航
- 注意可访问性
- 在 Form_Unload 中清理资源

### 特殊用法

1. 创建多月份视图
```vb
Private Sub CreateMultiMonthView()
    With MonthView1
        .MonthColumns = 3
        .MonthRows = 2
        .ShowWeekNumbers = True
        .FirstDayOfWeek = vbMonday
    End With
End Sub
```

2. 创建节假日显示
```vb
Private Sub SetupHolidayDisplay()
    Dim Holidays As New Collection
    
    ' 添加节假日
    Holidays.Add DateSerial(Year(Date), 1, 1), "NewYear"
    Holidays.Add DateSerial(Year(Date), 10, 1), "National"
    
    ' 在日历上标记节假日
    Set mHolidays = Holidays
End Sub
```

3. 创建日程表
```vb
Private Sub CreateScheduleView()
    With MonthView1
        .MultiSelect = True
        .ShowWeekNumbers = True
        .MonthColumns = 1
        .MonthRows = 1
    End With
    
    ' 添加日程显示列表
    lstSchedule.Top = MonthView1.Top
    lstSchedule.Left = MonthView1.Left + MonthView1.Width + 10
    lstSchedule.Height = MonthView1.Height
End Sub
```
