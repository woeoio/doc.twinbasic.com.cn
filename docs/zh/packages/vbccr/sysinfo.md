# SysInfo Control (VBCCRSysInfo)

SysInfo 控件提供了访问系统信息的功能，包括操作系统信息、硬件信息、用户信息等。这个控件可以帮助开发者获取系统的各种状态和配置信息。

## 属性

### 系统信息
- `OSPlatform` - 操作系统平台
- `OSVersion` - 操作系统版本
- `OSBuild` - 操作系统构建号
- `ServicePack` - 服务包版本
- `ProcessorArchitecture` - 处理器架构
- `ProcessorCount` - 处理器数量
- `SystemType` - 系统类型（32位/64位）
- `ComputerName` - 计算机名称
- `UserName` - 当前用户名
- `UserDomain` - 用户域

### 内存信息
- `TotalPhysicalMemory` - 物理内存总量
- `AvailablePhysicalMemory` - 可用物理内存
- `TotalVirtualMemory` - 虚拟内存总量
- `AvailableVirtualMemory` - 可用虚拟内存
- `TotalPageFile` - 页面文件总量
- `AvailablePageFile` - 可用页面文件

### 磁盘信息
- `SystemDrive` - 系统驱动器
- `SystemDirectory` - 系统目录
- `WindowsDirectory` - Windows 目录
- `TempPath` - 临时文件目录

### 显示信息
- `ScreenWidth` - 屏幕宽度
- `ScreenHeight` - 屏幕高度
- `ScreenColors` - 屏幕颜色深度
- `ScreenRefreshRate` - 屏幕刷新率

## 方法

- `GetDriveInfo` - 获取驱动器信息
- `GetProcessorInfo` - 获取处理器信息
- `GetMemoryStatus` - 获取内存状态
- `GetDisplayInfo` - 获取显示设备信息
- `GetNetworkInfo` - 获取网络信息
- `GetPowerStatus` - 获取电源状态

## 代码示例

### 基本系统信息获取

```vb
Private Sub GetBasicSystemInfo()
    With SysInfo1
        Debug.Print "操作系统: " & .OSPlatform
        Debug.Print "版本: " & .OSVersion
        Debug.Print "构建号: " & .OSBuild
        Debug.Print "服务包: " & .ServicePack
        Debug.Print "计算机名: " & .ComputerName
        Debug.Print "用户名: " & .UserName
        Debug.Print "用户域: " & .UserDomain
    End With
End Sub
```

### 系统信息管理器

```vb
Private Type SystemInformation
    ' 系统信息
    OSPlatform As String
    OSVersion As String
    OSBuild As String
    ServicePack As String
    SystemType As String
    ComputerName As String
    UserName As String
    UserDomain As String
    
    ' 处理器信息
    ProcessorArchitecture As String
    ProcessorCount As Long
    ProcessorSpeed As Long
    ProcessorDescription As String
    
    ' 内存信息
    TotalPhysicalMemory As Currency
    AvailablePhysicalMemory As Currency
    TotalVirtualMemory As Currency
    AvailableVirtualMemory As Currency
    MemoryLoad As Long
    
    ' 磁盘信息
    SystemDrive As String
    SystemDirectory As String
    WindowsDirectory As String
    TempPath As String
    
    ' 显示信息
    ScreenWidth As Long
    ScreenHeight As Long
    ScreenColors As Long
    ScreenRefreshRate As Long
End Type

Private Type SystemMonitor
    Info As SystemInformation
    Timer As VBCCRTimer
    Enabled As Boolean
    Interval As Long
    LastUpdate As Date
End Type

Private Monitor As SystemMonitor

Private Sub InitSystemMonitor()
    With Monitor
        Set .Timer = Timer1
        .Timer.Interval = 1000  ' 每秒更新一次
        .Timer.Enabled = False
        .Enabled = True
        .LastUpdate = Now
        
        ' 初始获取信息
        RefreshSystemInfo
    End With
End Sub

Private Sub RefreshSystemInfo()
    With Monitor.Info
        ' 获取系统信息
        .OSPlatform = SysInfo1.OSPlatform
        .OSVersion = SysInfo1.OSVersion
        .OSBuild = SysInfo1.OSBuild
        .ServicePack = SysInfo1.ServicePack
        .SystemType = IIf(Is64BitSystem(), "64-bit", "32-bit")
        .ComputerName = SysInfo1.ComputerName
        .UserName = SysInfo1.UserName
        .UserDomain = SysInfo1.UserDomain
        
        ' 获取处理器信息
        .ProcessorArchitecture = SysInfo1.ProcessorArchitecture
        .ProcessorCount = SysInfo1.ProcessorCount
        .ProcessorSpeed = GetProcessorSpeed()
        .ProcessorDescription = GetProcessorDescription()
        
        ' 获取内存信息
        GetMemoryInfo
        
        ' 获取磁盘信息
        .SystemDrive = SysInfo1.SystemDrive
        .SystemDirectory = SysInfo1.SystemDirectory
        .WindowsDirectory = SysInfo1.WindowsDirectory
        .TempPath = SysInfo1.TempPath
        
        ' 获取显示信息
        GetDisplayInfo
    End With
    
    Monitor.LastUpdate = Now
End Sub

Private Function Is64BitSystem() As Boolean
    #If Win64 Then
        Is64BitSystem = True
    #Else
        Dim Handle As Long
        Dim IsWow64 As Boolean
        
        Handle = GetCurrentProcess()
        IsWow64Process Handle, IsWow64
        Is64BitSystem = IsWow64
    #End If
End Function

Private Function GetProcessorSpeed() As Long
    ' 从注册表获取处理器速度
    Const HKEY_LOCAL_MACHINE As Long = &H80000002
    Dim hKey As Long
    Dim Speed As Long
    
    If RegOpenKeyEx(HKEY_LOCAL_MACHINE, _
                    "HARDWARE\DESCRIPTION\System\CentralProcessor\0", _
                    0, KEY_READ, hKey) = 0 Then
        Dim Buffer As String * 32
        Dim BufSize As Long
        BufSize = Len(Buffer)
        
        If RegQueryValueEx(hKey, "~MHz", 0, REG_SZ, _
                          ByVal Buffer, BufSize) = 0 Then
            Speed = CLng(Val(Buffer))
        End If
        
        RegCloseKey hKey
    End If
    
    GetProcessorSpeed = Speed
End Function

Private Function GetProcessorDescription() As String
    ' 从注册表获取处理器描述
    Const HKEY_LOCAL_MACHINE As Long = &H80000002
    Dim hKey As Long
    Dim Description As String
    
    If RegOpenKeyEx(HKEY_LOCAL_MACHINE, _
                    "HARDWARE\DESCRIPTION\System\CentralProcessor\0", _
                    0, KEY_READ, hKey) = 0 Then
        Dim Buffer As String * 256
        Dim BufSize As Long
        BufSize = Len(Buffer)
        
        If RegQueryValueEx(hKey, "ProcessorNameString", 0, REG_SZ, _
                          ByVal Buffer, BufSize) = 0 Then
            Description = Left$(Buffer, InStr(Buffer, Chr$(0)) - 1)
        End If
        
        RegCloseKey hKey
    End If
    
    GetProcessorDescription = Description
End Function

Private Sub GetMemoryInfo()
    With Monitor.Info
        Dim MS As MEMORYSTATUS
        MS.dwLength = LenB(MS)
        GlobalMemoryStatus MS
        
        .TotalPhysicalMemory = MS.dwTotalPhys
        .AvailablePhysicalMemory = MS.dwAvailPhys
        .TotalVirtualMemory = MS.dwTotalVirtual
        .AvailableVirtualMemory = MS.dwAvailVirtual
        .MemoryLoad = MS.dwMemoryLoad
    End With
End Sub

Private Sub GetDisplayInfo()
    With Monitor.Info
        .ScreenWidth = GetSystemMetrics(SM_CXSCREEN)
        .ScreenHeight = GetSystemMetrics(SM_CYSCREEN)
        
        Dim DC As Long
        DC = GetDC(0)
        
        .ScreenColors = GetDeviceCaps(DC, BITSPIXEL)
        .ScreenRefreshRate = GetDeviceCaps(DC, VREFRESH)
        
        ReleaseDC 0, DC
    End With
End Sub

Private Sub Timer1_Timer()
    If Monitor.Enabled Then
        RefreshSystemInfo
    End If
End Sub
```

### 系统信息报告生成器

```vb
Private Type ReportGenerator
    OutputPath As String
    Formats As Collection  ' 支持的输出格式
End Type

Private Report As ReportGenerator

Private Sub InitReportGenerator()
    With Report
        .OutputPath = App.Path
        Set .Formats = New Collection
        
        ' 添加支持的格式
        .Formats.Add "TXT"
        .Formats.Add "HTML"
        .Formats.Add "CSV"
    End With
End Sub

Private Function GenerateReport(ByVal Format As String, _
                              Optional ByVal FilePath As String) As Boolean
    On Error GoTo ErrorHandler
    
    If LenB(FilePath) = 0 Then
        FilePath = Report.OutputPath & "\SystemInfo." & LCase$(Format)
    End If
    
    Dim FileNum As Long
    FileNum = FreeFile
    
    Open FilePath For Output As #FileNum
    
    Select Case UCase$(Format)
        Case "TXT"
            GenerateTextReport FileNum
        
        Case "HTML"
            GenerateHtmlReport FileNum
        
        Case "CSV"
            GenerateCsvReport FileNum
        
        Case Else
            Close #FileNum
            Kill FilePath
            GenerateReport = False
            Exit Function
    End Select
    
    Close #FileNum
    GenerateReport = True
    Exit Function
    
ErrorHandler:
    If FileNum > 0 Then Close #FileNum
    GenerateReport = False
End Function

Private Sub GenerateTextReport(ByVal FileNum As Long)
    With Monitor.Info
        Print #FileNum, "系统信息报告"
        Print #FileNum, "生成时间: " & Now
        Print #FileNum, String$(50, "-")
        Print #FileNum, ""
        
        Print #FileNum, "操作系统信息"
        Print #FileNum, "--------------"
        Print #FileNum, "平台: " & .OSPlatform
        Print #FileNum, "版本: " & .OSVersion
        Print #FileNum, "构建号: " & .OSBuild
        Print #FileNum, "服务包: " & .ServicePack
        Print #FileNum, "系统类型: " & .SystemType
        Print #FileNum, ""
        
        Print #FileNum, "处理器信息"
        Print #FileNum, "--------------"
        Print #FileNum, "架构: " & .ProcessorArchitecture
        Print #FileNum, "数量: " & .ProcessorCount
        Print #FileNum, "速度: " & .ProcessorSpeed & " MHz"
        Print #FileNum, "描述: " & .ProcessorDescription
        Print #FileNum, ""
        
        Print #FileNum, "内存信息"
        Print #FileNum, "--------------"
        Print #FileNum, "物理内存: " & FormatBytes(.TotalPhysicalMemory)
        Print #FileNum, "可用物理内存: " & FormatBytes(.AvailablePhysicalMemory)
        Print #FileNum, "虚拟内存: " & FormatBytes(.TotalVirtualMemory)
        Print #FileNum, "可用虚拟内存: " & FormatBytes(.AvailableVirtualMemory)
        Print #FileNum, "内存使用率: " & .MemoryLoad & "%"
        Print #FileNum, ""
        
        Print #FileNum, "显示信息"
        Print #FileNum, "--------------"
        Print #FileNum, "分辨率: " & .ScreenWidth & " x " & .ScreenHeight
        Print #FileNum, "颜色深度: " & .ScreenColors & " 位"
        Print #FileNum, "刷新率: " & .ScreenRefreshRate & " Hz"
    End With
End Sub

Private Sub GenerateHtmlReport(ByVal FileNum As Long)
    Print #FileNum, "<!DOCTYPE html>"
    Print #FileNum, "<html>"
    Print #FileNum, "<head>"
    Print #FileNum, "<title>系统信息报告</title>"
    Print #FileNum, "<style>"
    Print #FileNum, "body { font-family: Arial; margin: 20px; }"
    Print #FileNum, "h1 { color: #333; }"
    Print #FileNum, "h2 { color: #666; margin-top: 20px; }"
    Print #FileNum, "table { border-collapse: collapse; width: 100%; }"
    Print #FileNum, "th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }"
    Print #FileNum, "th { background-color: #f5f5f5; }"
    Print #FileNum, "</style>"
    Print #FileNum, "</head>"
    Print #FileNum, "<body>"
    
    With Monitor.Info
        Print #FileNum, "<h1>系统信息报告</h1>"
        Print #FileNum, "<p>生成时间: " & Now & "</p>"
        
        Print #FileNum, "<h2>操作系统信息</h2>"
        Print #FileNum, "<table>"
        Print #FileNum, "<tr><th>项目</th><th>值</th></tr>"
        Print #FileNum, "<tr><td>平台</td><td>" & .OSPlatform & "</td></tr>"
        Print #FileNum, "<tr><td>版本</td><td>" & .OSVersion & "</td></tr>"
        Print #FileNum, "<tr><td>构建号</td><td>" & .OSBuild & "</td></tr>"
        Print #FileNum, "<tr><td>服务包</td><td>" & .ServicePack & "</td></tr>"
        Print #FileNum, "<tr><td>系统类型</td><td>" & .SystemType & "</td></tr>"
        Print #FileNum, "</table>"
        
        ' ... 其他部分类似
    End With
    
    Print #FileNum, "</body>"
    Print #FileNum, "</html>"
End Sub

Private Sub GenerateCsvReport(ByVal FileNum As Long)
    With Monitor.Info
        ' 写入标题行
        Print #FileNum, "项目,值"
        
        ' 操作系统信息
        Print #FileNum, "操作系统平台," & .OSPlatform
        Print #FileNum, "操作系统版本," & .OSVersion
        Print #FileNum, "构建号," & .OSBuild
        Print #FileNum, "服务包," & .ServicePack
        Print #FileNum, "系统类型," & .SystemType
        
        ' ... 其他信息类似
    End With
End Sub

Private Function FormatBytes(ByVal Bytes As Currency) As String
    Const KB As Currency = 1024
    Const MB As Currency = KB * 1024
    Const GB As Currency = MB * 1024
    
    If Bytes >= GB Then
        FormatBytes = Format(Bytes / GB, "#,##0.00") & " GB"
    ElseIf Bytes >= MB Then
        FormatBytes = Format(Bytes / MB, "#,##0.00") & " MB"
    ElseIf Bytes >= KB Then
        FormatBytes = Format(Bytes / KB, "#,##0.00") & " KB"
    Else
        FormatBytes = Format(Bytes, "#,##0") & " bytes"
    End If
End Function
```

### 性能监控器

```vb
Private Type PerformanceCounter
    Name As String
    Value As Double
    Min As Double
    Max As Double
    Average As Double
    SampleCount As Long
End Type

Private Type PerformanceMonitor
    Counters() As PerformanceCounter
    Count As Long
    Timer As VBCCRTimer
    Enabled As Boolean
    Interval As Long
End Type

Private Performance As PerformanceMonitor

Private Sub InitPerformanceMonitor()
    With Performance
        ReDim .Counters(1 To 10)
        .Count = 0
        Set .Timer = Timer1
        .Timer.Interval = 1000  ' 每秒更新一次
        .Timer.Enabled = False
        .Enabled = True
        
        ' 添加性能计数器
        AddCounter "CPU使用率"
        AddCounter "可用物理内存"
        AddCounter "可用虚拟内存"
        AddCounter "磁盘活动"
    End With
End Sub

Private Function AddCounter(ByVal Name As String) As Long
    With Performance
        .Count = .Count + 1
        If .Count > UBound(.Counters) Then
            ReDim Preserve .Counters(1 To .Count + 10)
        End If
        
        With .Counters(.Count)
            .Name = Name
            .Value = 0
            .Min = 999999999
            .Max = -999999999
            .Average = 0
            .SampleCount = 0
        End With
        
        AddCounter = .Count
    End With
End Function

Private Sub UpdateCounter(ByVal Index As Long, ByVal Value As Double)
    With Performance.Counters(Index)
        .Value = Value
        .Min = Min(.Min, Value)
        .Max = Max(.Max, Value)
        .Average = ((.Average * .SampleCount) + Value) / (.SampleCount + 1)
        .SampleCount = .SampleCount + 1
    End With
End Sub

Private Sub Timer1_Timer()
    If Not Performance.Enabled Then Exit Sub
    
    With Monitor.Info
        ' 更新 CPU 使用率
        UpdateCounter 1, GetCPUUsage()
        
        ' 更新内存信息
        UpdateCounter 2, .AvailablePhysicalMemory
        UpdateCounter 3, .AvailableVirtualMemory
        
        ' 更新磁盘活动
        UpdateCounter 4, GetDiskActivity()
    End With
End Sub

Private Function GetCPUUsage() As Double
    ' 需要通过 Performance Counter API 实现
    ' 这里只是示例
    GetCPUUsage = Rnd * 100
End Function

Private Function GetDiskActivity() As Double
    ' 需要通过 Performance Counter API 实现
    ' 这里只是示例
    GetDiskActivity = Rnd * 100
End Function
```

## 最佳实践

1. 错误处理
```vb
Private Function GetSystemValue(ByVal ValueName As String) As Variant
    On Error GoTo ErrorHandler
    
    Select Case ValueName
        Case "OSVersion"
            GetSystemValue = SysInfo1.OSVersion
        Case "ProcessorCount"
            GetSystemValue = SysInfo1.ProcessorCount
        ' ... 其他值
        Case Else
            Err.Raise 1001, "GetSystemValue", "未知的系统值: " & ValueName
    End Select
    Exit Function
    
ErrorHandler:
    Debug.Print "获取系统值失败: " & Err.Description
    GetSystemValue = Null
End Function
```

2. 系统更改监测
```vb
Private Type SystemChange
    ParameterName As String
    OldValue As Variant
    NewValue As Variant
    ChangeTime As Date
End Type

Private Type ChangeTracker
    Changes() As SystemChange
    Count As Long
End Type

Private Tracker As ChangeTracker

Private Sub TrackSystemChanges()
    Static LastValues As Collection
    
    If LastValues Is Nothing Then
        Set LastValues = New Collection
        ' 初始化上次的值
        LastValues.Add SysInfo1.OSVersion, "OSVersion"
        ' ... 其他值
    End If
    
    ' 检查变化
    CheckValueChange LastValues, "OSVersion", SysInfo1.OSVersion
    ' ... 检查其他值
End Sub

Private Sub CheckValueChange(ByRef LastValues As Collection, _
                           ByVal Name As String, _
                           ByVal NewValue As Variant)
    If LastValues(Name) <> NewValue Then
        With Tracker
            .Count = .Count + 1
            ReDim Preserve .Changes(1 To .Count)
            
            With .Changes(.Count)
                .ParameterName = Name
                .OldValue = LastValues(Name)
                .NewValue = NewValue
                .ChangeTime = Now
            End With
        End With
        
        ' 更新最后的值
        LastValues.Remove Name
        LastValues.Add NewValue, Name
    End If
End Sub
```

3. 状态保存
```vb
Private Sub SaveMonitorState()
    SaveSetting App.Title, "SysInfo", "MonitorEnabled", CStr(Monitor.Enabled)
    SaveSetting App.Title, "SysInfo", "MonitorInterval", CStr(Monitor.Timer.Interval)
    
    ' 保存性能监控设置
    SaveSetting App.Title, "SysInfo", "PerformanceEnabled", CStr(Performance.Enabled)
    SaveSetting App.Title, "SysInfo", "PerformanceInterval", CStr(Performance.Timer.Interval)
End Sub

Private Sub RestoreMonitorState()
    Monitor.Enabled = CBool(GetSetting(App.Title, "SysInfo", "MonitorEnabled", "True"))
    Monitor.Timer.Interval = CLng(GetSetting(App.Title, "SysInfo", "MonitorInterval", "1000"))
    
    Performance.Enabled = CBool(GetSetting(App.Title, "SysInfo", "PerformanceEnabled", "True"))
    Performance.Timer.Interval = CLng(GetSetting(App.Title, "SysInfo", "PerformanceInterval", "1000"))
End Sub
```

SysInfo 控件提供了全面的系统信息访问功能。通过合理的扩展，可以实现系统监控、性能分析和报告生成等功能。上述示例展示了 SysInfo 控件的多种用法，开发者可以根据具体需求选择合适的实现方式。
