# DTPicker Control (VBCCRDTPicker)

VBCCRDTPicker 控件是一个日期时间选择器，它提供了下拉式日历界面，让用户可以方便地选择日期和时间。

## 属性

### 日期时间属性
- `Value`: 当前选中的日期时间
- `Year`: 当前年份
- `Month`: 当前月份
- `Day`: 当前日期
- `Hour`: 当前小时
- `Minute`: 当前分钟
- `Second`: 当前秒
- `MinDate`: 最小可选日期
- `MaxDate`: 最大可选日期

### 显示属性
- `Format`: 显示格式
  - `dtpShortDate`: 短日期格式
  - `dtpLongDate`: 长日期格式
  - `dtpTime`: 时间格式
  - `dtpCustom`: 自定义格式
- `CustomFormat`: 自定义格式字符串
- `UpDown`: 是否显示上下调节按钮
- `RightToLeft`: 是否从右到左显示
- `CalendarBackColor`: 日历背景色
- `CalendarForeColor`: 日历前景色
- `CalendarTitleBackColor`: 日历标题背景色
- `CalendarTitleForeColor`: 日历标题前景色
- `CalendarTrailingForeColor`: 非当前月份日期前景色
- `CheckBox`: 是否显示复选框
- `Checked`: 复选框状态

## 事件

- `Change`: 值改变时触发
- `CloseUp`: 关闭下拉日历时触发
- `DropDown`: 显示下拉日历时触发
- `Format`: 格式化显示值时触发
- `KeyDown`: 按键事件

## 代码示例

### 基本用法

```vb
Private Sub InitDTPicker()
    With DTPicker1
        ' 设置日期范围
        .MinDate = DateSerial(2000, 1, 1)
        .MaxDate = DateSerial(2030, 12, 31)
        
        ' 设置当前值
        .Value = Now
        
        ' 设置显示格式
        .Format = dtpShortDate
    End With
End Sub
```

### 自定义格式

```vb
Private Sub SetCustomFormat()
    With DTPicker1
        .Format = dtpCustom
        
        ' 格式说明：
        ' yyyy: 4位年份
        ' yy: 2位年份
        ' MMMM: 月份全名
        ' MMM: 月份缩写
        ' MM: 2位月份
        ' dd: 2位日期
        ' ddd: 星期缩写
        ' dddd: 星期全名
        ' HH: 24小时制小时
        ' hh: 12小时制小时
        ' mm: 分钟
        ' ss: 秒
        ' tt: AM/PM
        
        .CustomFormat = "yyyy'年'MM'月'dd'日' dddd"
    End With
End Sub
```

### 日期验证

```vb
Private Sub ValidateDate(ByVal NewDate As Date)
    With DTPicker1
        If NewDate < .MinDate Or NewDate > .MaxDate Then
            MsgBox "请选择 " & Format$(.MinDate, "yyyy-mm-dd") & _
                  " 到 " & Format$(.MaxDate, "yyyy-mm-dd") & " 之间的日期"
            
            ' 恢复为有效值
            If NewDate < .MinDate Then
                .Value = .MinDate
            Else
                .Value = .MaxDate
            End If
        End If
    End With
End Sub

Private Sub DTPicker1_Change()
    ValidateDate DTPicker1.Value
End Sub
```

### 时间选择器

```vb
Private Sub CreateTimePicker()
    With DTPicker1
        ' 设置为时间格式
        .Format = dtpTime
        
        ' 使用上下按钮
        .UpDown = True
        
        ' 设置初始时间
        .Value = Time
        
        ' 自定义时间格式
        .Format = dtpCustom
        .CustomFormat = "HH:mm:ss"
    End With
End Sub
```

### 日期时间组合

```vb
Private Type DateTimeInfo
    Date As Date
    Time As Date
End Type

Private DateTime As DateTimeInfo

Private Sub InitDateTimePickers()
    ' 日期选择器
    With dtpDate
        .Format = dtpShortDate
        .Value = Date
    End With
    
    ' 时间选择器
    With dtpTime
        .Format = dtpTime
        .UpDown = True
        .Value = Time
    End With
End Sub

Private Function GetCombinedDateTime() As Date
    With DateTime
        .Date = dtpDate.Value
        .Time = dtpTime.Value
        
        ' 合并日期和时间
        GetCombinedDateTime = DateSerial(Year(.Date), _
                                       Month(.Date), _
                                       Day(.Date)) + _
                             TimeSerial(Hour(.Time), _
                                      Minute(.Time), _
                                      Second(.Time))
    End With
End Function
```

### 节假日标记

```vb
Private Type Holiday
    Date As Date
    Name As String
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
End Sub

Private Sub AddHoliday(HolidayDate As Date, HolidayName As String)
    If HolidayCount >= UBound(Holidays) Then
        ReDim Preserve Holidays(0 To UBound(Holidays) + 9)
    End If
    
    With Holidays(HolidayCount)
        .Date = HolidayDate
        .Name = HolidayName
    End With
    
    HolidayCount = HolidayCount + 1
End Sub

Private Sub DTPicker1_Format(ByVal DateString As String)
    Dim i As Long
    For i = 0 To HolidayCount - 1
        If DateValue(DTPicker1.Value) = DateValue(Holidays(i).Date) Then
            ' 高亮显示节假日
            DTPicker1.ForeColor = vbRed
            Exit Sub
        End If
    Next i
    
    ' 恢复正常显示
    DTPicker1.ForeColor = vbBlack
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Function SafeSetValue(ByVal NewValue As Date) As Boolean
    On Error GoTo ErrorHandler
    
    DTPicker1.Value = NewValue
    SafeSetValue = True
    Exit Function
    
ErrorHandler:
    Debug.Print "设置日期时间失败: " & Err.Description
    SafeSetValue = False
End Function
```

2. 格式化函数
```vb
Private Function FormatDateTime(ByVal Value As Date, _
                              Optional ByVal IncludeTime As Boolean = False) As String
    If IncludeTime Then
        FormatDateTime = Format$(Value, "yyyy-mm-dd hh:nn:ss")
    Else
        FormatDateTime = Format$(Value, "yyyy-mm-dd")
    End If
End Function
```

## 高级特性

### 农历支持

```vb
Private Type LunarDate
    Year As Integer
    Month As Integer
    Day As Integer
    IsLeapMonth As Boolean
    Festival As String
End Type

Private Function GetLunarDate(ByVal SolarDate As Date) As LunarDate
    ' 注: 这里需要实现具体的农历转换算法
    
    Dim Lunar As LunarDate
    
    With Lunar
        .Year = Year(SolarDate)
        .Month = Month(SolarDate)
        .Day = Day(SolarDate)
        .IsLeapMonth = False
        .Festival = ""
    End With
    
    GetLunarDate = Lunar
End Function

Private Sub ShowLunarInfo()
    Dim Lunar As LunarDate
    Lunar = GetLunarDate(DTPicker1.Value)
    
    With Lunar
        lblLunar.Caption = .Year & "年" & _
                          IIf(.IsLeapMonth, "闰", "") & _
                          .Month & "月" & .Day & "日" & _
                          IIf(Len(.Festival) > 0, " " & .Festival, "")
    End With
End Sub
```

### 日期计算

```vb
Private Type DateCalculator
    BaseDate As Date
    Years As Integer
    Months As Integer
    Days As Integer
    WorkDaysOnly As Boolean
End Type

Private Calculator As DateCalculator

Private Function CalculateDate() As Date
    With Calculator
        Dim ResultDate As Date
        
        ' 基础计算
        ResultDate = DateAdd("yyyy", .Years, .BaseDate)
        ResultDate = DateAdd("m", .Months, ResultDate)
        
        If .WorkDaysOnly Then
            ' 仅计算工作日
            ResultDate = AddWorkDays(ResultDate, .Days)
        Else
            ' 计算所有日期
            ResultDate = DateAdd("d", .Days, ResultDate)
        End If
        
        CalculateDate = ResultDate
    End With
End Function

Private Function AddWorkDays(ByVal StartDate As Date, _
                           ByVal Days As Long) As Date
    Dim CurrentDate As Date
    Dim RemainingDays As Long
    
    CurrentDate = StartDate
    RemainingDays = Abs(Days)
    
    Do While RemainingDays > 0
        ' 移动到下一个日期
        If Days > 0 Then
            CurrentDate = DateAdd("d", 1, CurrentDate)
        Else
            CurrentDate = DateAdd("d", -1, CurrentDate)
        End If
        
        ' 检查是否是工作日
        If Weekday(CurrentDate) <> vbSaturday And _
           Weekday(CurrentDate) <> vbSunday Then
            RemainingDays = RemainingDays - 1
        End If
    Loop
    
    AddWorkDays = CurrentDate
End Function
```

### 时区支持

```vb
Private Type TimeZone
    Name As String
    Offset As Double  ' 与UTC的小时差
End Type

Private TimeZones() As TimeZone

Private Sub InitTimeZones()
    ReDim TimeZones(0 To 2)
    
    ' 添加时区
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
    HourDiff = TimeZones(TargetZone).Offset - _
               TimeZones(SourceZone).Offset
    
    ' 转换时间
    ConvertTimeZone = DateAdd("h", HourDiff, SourceDate)
End Function
```

### 自定义下拉日历

```vb
Private Type CalendarColors
    BackColor As Long
    ForeColor As Long
    TitleBackColor As Long
    TitleForeColor As Long
    TrailingForeColor As Long
End Type

Private Colors As CalendarColors

Private Sub CustomizeCalendar()
    ' 设置颜色
    With Colors
        .BackColor = RGB(255, 255, 255)
        .ForeColor = RGB(0, 0, 0)
        .TitleBackColor = RGB(0, 0, 128)
        .TitleForeColor = RGB(255, 255, 255)
        .TrailingForeColor = RGB(128, 128, 128)
    End With
    
    ' 应用颜色
    With DTPicker1
        .CalendarBackColor = Colors.BackColor
        .CalendarForeColor = Colors.ForeColor
        .CalendarTitleBackColor = Colors.TitleBackColor
        .CalendarTitleForeColor = Colors.TitleForeColor
        .CalendarTrailingForeColor = Colors.TrailingForeColor
    End With
End Sub
```

### 批量日期处理

```vb
Private Type DateBatch
    Dates() As Date
    Count As Long
    CurrentIndex As Long
End Type

Private Batch As DateBatch

Private Sub InitDateBatch()
    ReDim Batch.Dates(0 To 99)
    Batch.Count = 0
    Batch.CurrentIndex = -1
End Sub

Private Sub AddToBatch(ByVal NewDate As Date)
    With Batch
        If .Count >= UBound(.Dates) Then
            ReDim Preserve .Dates(0 To UBound(.Dates) + 99)
        End If
        
        .Dates(.Count) = NewDate
        .Count = .Count + 1
    End With
End Sub

Private Sub ProcessBatch(Optional ByVal SortDates As Boolean = False)
    With Batch
        If .Count = 0 Then Exit Sub
        
        ' 排序日期
        If SortDates Then
            QuickSort .Dates, 0, .Count - 1
        End If
        
        ' 处理每个日期
        Dim i As Long
        For i = 0 To .Count - 1
            ProcessDate .Dates(i)
        Next i
    End With
End Sub

Private Sub ProcessDate(ByVal TheDate As Date)
    ' 在这里处理单个日期
    Debug.Print Format$(TheDate, "yyyy-mm-dd")
End Sub

Private Sub QuickSort(Dates() As Date, ByVal Low As Long, ByVal High As Long)
    Dim i As Long, j As Long
    Dim Pivot As Date, Temp As Date
    
    If Low < High Then
        i = Low
        j = High
        Pivot = Dates((Low + High) \ 2)
        
        Do
            Do While Dates(i) < Pivot
                i = i + 1
            Loop
            
            Do While Dates(j) > Pivot
                j = j - 1
            Loop
            
            If i <= j Then
                Temp = Dates(i)
                Dates(i) = Dates(j)
                Dates(j) = Temp
                i = i + 1
                j = j - 1
            End If
        Loop Until i > j
        
        If Low < j Then QuickSort Dates, Low, j
        If i < High Then QuickSort Dates, i, High
    End If
End Sub
```

这些示例展示了 DTPicker 控件的主要功能和高级用法，包括基本的日期时间选择、自定义格式、农历支持、时区转换等功能。
