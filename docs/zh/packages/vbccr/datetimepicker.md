# DateTimePicker Control (VBCCRDateTimePicker)

VBCCRDateTimePicker 控件提供了一个用户友好的界面来选择日期和时间。它支持多种显示格式、日期范围限制和自定义日历外观。

## 属性

### 日期时间属性
- `Value`: 获取或设置当前选中的日期时间
- `MinDate`: 可选择的最小日期
- `MaxDate`: 可选择的最大日期
- `Year`: 当前选中的年份
- `Month`: 当前选中的月份
- `Day`: 当前选中的日期
- `Hour`: 当前选中的小时
- `Minute`: 当前选中的分钟
- `Second`: 当前选中的秒

### 显示属性
- `Format`: 显示格式(短日期、长日期、时间等)
- `CustomFormat`: 自定义显示格式字符串
- `ShowUpDown`: 是否显示上下调节按钮
- `RightToLeft`: 是否从右到左显示
- `CalendarTitleBackColor`: 日历标题背景色
- `CalendarTrailingForeColor`: 非当前月份日期的前景色

### 行为属性
- `Enabled`: 启用/禁用状态
- `CheckBox`: 是否显示复选框
- `Checked`: 复选框选中状态

## 方法

### 日期操作
```vb
' 设置日期时间
SetValue(NewDate As Date)

' 获取当前值
GetValue() As Date

' 设置日期范围
SetRange(MinDate As Date, MaxDate As Date)

' 设置时间部分
SetTime(Hour As Integer, Minute As Integer, Second As Integer)
```

## 事件

- `Change()`: 日期时间值改变时触发
- `CloseUp()`: 关闭下拉日历时触发
- `DropDown()`: 显示下拉日历时触发
- `Format(ByVal DateString As String)`: 格式化日期时触发
- `KeyDown(KeyCode As Integer, Shift As Integer)`: 按键事件

## 代码示例

### 基本用法

```vb
Private Sub InitDateTimePicker()
    With DateTimePicker1
        ' 设置日期范围
        .MinDate = DateSerial(2000, 1, 1)
        .MaxDate = DateSerial(2030, 12, 31)
        
        ' 设置当前日期
        .Value = Date
        
        ' 设置显示格式
        .Format = dtpShortDate
    End With
End Sub
```

### 自定义格式

```vb
Private Sub SetCustomFormat()
    With DateTimePicker1
        .Format = dtpCustom
        
        ' 自定义格式字符串
        ' yyyy: 年份(4位)
        ' MM: 月份
        ' dd: 日期
        ' HH: 小时(24小时制)
        ' mm: 分钟
        ' ss: 秒
        .CustomFormat = "yyyy年MM月dd日 HH:mm:ss"
    End With
End Sub
```

### 日期范围验证

```vb
Private Sub ValidateDateRange(ByVal NewDate As Date) As Boolean
    With DateTimePicker1
        If NewDate < .MinDate Or NewDate > .MaxDate Then
            MsgBox "日期必须在 " & Format$(.MinDate, "yyyy-mm-dd") & _
                  " 和 " & Format$(.MaxDate, "yyyy-mm-dd") & " 之间"
            ValidateDateRange = False
        Else
            ValidateDateRange = True
        End If
    End With
End Sub

Private Sub DateTimePicker1_Change()
    If Not ValidateDateRange(DateTimePicker1.Value) Then
        ' 恢复到上一个有效值
        DateTimePicker1.Value = LastValidDate
    Else
        LastValidDate = DateTimePicker1.Value
    End If
End Sub
```

### 时间选择器

```vb
Private Sub CreateTimeSelector()
    With DateTimePicker1
        ' 仅显示时间
        .Format = dtpTime
        
        ' 使用上下按钮
        .ShowUpDown = True
        
        ' 设置初始时间
        .Value = TimeSerial(Hour(Now), Minute(Now), Second(Now))
    End With
End Sub
```

### 日期时间同步

```vb
Private Sub SyncDateTimePickers()
    ' 日期选择器
    With DatePicker
        .Format = dtpShortDate
        .Value = Date
    End With
    
    ' 时间选择器
    With TimePicker
        .Format = dtpTime
        .ShowUpDown = True
        .Value = Time
    End With
End Sub

Private Function GetCombinedDateTime() As Date
    ' 合并日期和时间
    GetCombinedDateTime = DateSerial(Year(DatePicker.Value), _
                                   Month(DatePicker.Value), _
                                   Day(DatePicker.Value)) + _
                         TimeSerial(Hour(TimePicker.Value), _
                                  Minute(TimePicker.Value), _
                                  Second(TimePicker.Value))
End Function
```

### 节假日高亮

```vb
Private Type Holiday
    Date As Date
    Description As String
End Type

Private Holidays() As Holiday
Private HolidayCount As Long

Private Sub InitHolidays()
    ReDim Holidays(0 To 9)
    HolidayCount = 0
    
    ' 添加节假日
    AddHoliday #1/1/2024#, "元旦"
    AddHoliday #2/10/2024#, "春节"
    AddHoliday #5/1/2024#, "劳动节"
    ' 添加更多节假日...
End Sub

Private Sub AddHoliday(HolidayDate As Date, Description As String)
    If HolidayCount >= UBound(Holidays) Then
        ReDim Preserve Holidays(0 To UBound(Holidays) + 9)
    End If
    
    With Holidays(HolidayCount)
        .Date = HolidayDate
        .Description = Description
    End With
    
    HolidayCount = HolidayCount + 1
End Sub

Private Sub DateTimePicker1_Format(ByVal DateString As String)
    Dim i As Long
    For i = 0 To HolidayCount - 1
        If DateValue(DateTimePicker1.Value) = DateValue(Holidays(i).Date) Then
            ' 高亮显示节假日
            DateTimePicker1.ForeColor = vbRed
            Exit Sub
        End If
    Next i
    
    ' 恢复正常显示
    DateTimePicker1.ForeColor = vbBlack
End Sub
```

## 最佳实践

1. 日期格式化
```vb
Private Function FormatDateTime(ByVal Value As Date, _
                              Optional ByVal ShowTime As Boolean = False) As String
    If ShowTime Then
        FormatDateTime = Format$(Value, "yyyy-mm-dd hh:nn:ss")
    Else
        FormatDateTime = Format$(Value, "yyyy-mm-dd")
    End If
End Function
```

2. 错误处理
```vb
Private Function SafeSetValue(ByVal NewValue As Date) As Boolean
    On Error GoTo ErrorHandler
    
    DateTimePicker1.Value = NewValue
    SafeSetValue = True
    Exit Function
    
ErrorHandler:
    Debug.Print "设置日期时间失败: " & Err.Description
    SafeSetValue = False
End Function
```

### 高级特性

#### 日期计算

```vb
Private Type DateCalculator
    BaseDate As Date
    Years As Integer
    Months As Integer
    Days As Integer
End Type

Private Calculator As DateCalculator

Private Sub CalculateDate()
    With Calculator
        ' 计算结果日期
        Dim ResultDate As Date
        ResultDate = DateAdd("yyyy", .Years, .BaseDate)
        ResultDate = DateAdd("m", .Months, ResultDate)
        ResultDate = DateAdd("d", .Days, ResultDate)
        
        ' 显示结果
        DateTimePicker1.Value = ResultDate
    End With
End Sub

Private Sub AddInterval(IntervalType As String, Value As Integer)
    With Calculator
        Select Case IntervalType
            Case "Y"
                .Years = .Years + Value
            Case "M"
                .Months = .Months + Value
            Case "D"
                .Days = .Days + Value
        End Select
    End With
    
    CalculateDate
End Sub
```

#### 工作日计算

```vb
Private Function GetWorkDays(ByVal StartDate As Date, _
                           ByVal EndDate As Date) As Long
    Dim TotalDays As Long
    Dim WeekendDays As Long
    Dim CurrentDate As Date
    
    ' 计算总天数
    TotalDays = DateDiff("d", StartDate, EndDate) + 1
    
    ' 计算周末天数
    CurrentDate = StartDate
    Do While CurrentDate <= EndDate
        If Weekday(CurrentDate) = vbSaturday Or _
           Weekday(CurrentDate) = vbSunday Then
            WeekendDays = WeekendDays + 1
        End If
        CurrentDate = DateAdd("d", 1, CurrentDate)
    Loop
    
    ' 返回工作日数量
    GetWorkDays = TotalDays - WeekendDays
End Function
```

#### 农历转换

```vb
Private Type LunarDate
    Year As Integer
    Month As Integer
    Day As Integer
    IsLeapMonth As Boolean
End Type

Private Function GetLunarDate(ByVal SolarDate As Date) As LunarDate
    ' 注: 这里需要实现具体的农历转换算法
    ' 可以使用查表法或计算法
    
    Dim Lunar As LunarDate
    
    ' 示例实现
    With Lunar
        .Year = Year(SolarDate)
        .Month = Month(SolarDate)
        .Day = Day(SolarDate)
        .IsLeapMonth = False
    End With
    
    GetLunarDate = Lunar
End Function

Private Sub ShowLunarDate()
    Dim Lunar As LunarDate
    Lunar = GetLunarDate(DateTimePicker1.Value)
    
    With Lunar
        Debug.Print "农历: " & .Year & "年" & _
                   IIf(.IsLeapMonth, "闰", "") & .Month & "月" & _
                   .Day & "日"
    End With
End Sub
```

#### 时区转换

```vb
Private Type TimeZoneInfo
    Name As String
    Offset As Double  ' 与UTC的小时差
End Type

Private TimeZones() As TimeZoneInfo

Private Sub InitTimeZones()
    ReDim TimeZones(0 To 2)
    
    ' 添加时区信息
    With TimeZones(0)
        .Name = "北京"
        .Offset = 8
    End With
    
    With TimeZones(1)
        .Name = "伦敦"
        .Offset = 0
    End With
    
    With TimeZones(2)
        .Name = "纽约"
        .Offset = -5
    End With
End Sub

Private Function ConvertTimeZone(ByVal SourceDate As Date, _
                               ByVal SourceZone As Integer, _
                               ByVal TargetZone As Integer) As Date
    ' 计算时差
    Dim HourDiff As Double
    HourDiff = TimeZones(TargetZone).Offset - TimeZones(SourceZone).Offset
    
    ' 转换时间
    ConvertTimeZone = DateAdd("h", HourDiff, SourceDate)
End Function
```

#### 定期日期生成

```vb
Private Type RecurringDate
    StartDate As Date
    EndDate As Date
    Interval As Integer  ' 间隔天数
    ExcludeWeekends As Boolean
    Dates() As Date
    Count As Long
End Type

Private Recurring As RecurringDate

Private Sub GenerateRecurringDates()
    With Recurring
        ReDim .Dates(0 To 99)
        .Count = 0
        
        Dim CurrentDate As Date
        CurrentDate = .StartDate
        
        Do While CurrentDate <= .EndDate
            ' 检查是否需要跳过周末
            If Not .ExcludeWeekends Or _
               (Weekday(CurrentDate) <> vbSaturday And _
                Weekday(CurrentDate) <> vbSunday) Then
                
                ' 添加日期
                If .Count > UBound(.Dates) Then
                    ReDim Preserve .Dates(0 To UBound(.Dates) + 99)
                End If
                
                .Dates(.Count) = CurrentDate
                .Count = .Count + 1
            End If
            
            ' 移动到下一个日期
            CurrentDate = DateAdd("d", .Interval, CurrentDate)
        Loop
    End With
End Sub

Private Sub ShowRecurringDates()
    Dim i As Long
    For i = 0 To Recurring.Count - 1
        Debug.Print Format$(Recurring.Dates(i), "yyyy-mm-dd")
    Next i
End Sub
```

这些示例展示了 DateTimePicker 控件的主要功能和高级用法。它可以用于创建日期选择器、时间选择器，并支持各种日期时间计算和转换功能。
