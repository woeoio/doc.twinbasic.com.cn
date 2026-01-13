# SysInfo Control (VBCCRSysInfo)

The SysInfo control provides functionality to access system information, including operating system information, hardware information, and user information. This control helps developers retrieve various system states and configuration information.

## Properties

### System Information
- `OSPlatform` - Operating system platform
- `OSVersion` - Operating system version
- `OSBuild` - Operating system build number
- `ServicePack` - Service pack version
- `ProcessorArchitecture` - Processor architecture
- `ProcessorCount` - Number of processors
- `SystemType` - System type (32-bit/64-bit)
- `ComputerName` - Computer name
- `UserName` - Current username
- `UserDomain` - User domain

### Memory Information
- `TotalPhysicalMemory` - Total physical memory
- `AvailablePhysicalMemory` - Available physical memory
- `TotalVirtualMemory` - Total virtual memory
- `AvailableVirtualMemory` - Available virtual memory
- `TotalPageFile` - Total page file size
- `AvailablePageFile` - Available page file size

### Disk Information
- `SystemDrive` - System drive
- `SystemDirectory` - System directory
- `WindowsDirectory` - Windows directory
- `TempPath` - Temporary files directory

### Display Information
- `ScreenWidth` - Screen width
- `ScreenHeight` - Screen height
- `ScreenColors` - Screen color depth
- `ScreenRefreshRate` - Screen refresh rate

## Methods

- `GetDriveInfo` - Get drive information
- `GetProcessorInfo` - Get processor information
- `GetMemoryStatus` - Get memory status
- `GetDisplayInfo` - Get display device information
- `GetNetworkInfo` - Get network information
- `GetPowerStatus` - Get power status

## Code Examples

### Basic System Information Retrieval

```vb
Private Sub GetBasicSystemInfo()
    With SysInfo1
        Debug.Print "Operating System: " & .OSPlatform
        Debug.Print "Version: " & .OSVersion
        Debug.Print "Build: " & .OSBuild
        Debug.Print "Service Pack: " & .ServicePack
        Debug.Print "Computer Name: " & .ComputerName
        Debug.Print "User Name: " & .UserName
        Debug.Print "User Domain: " & .UserDomain
    End With
End Sub
```

### System Information Manager

```vb
Private Type SystemInformation
    ' System Information
    OSPlatform As String
    OSVersion As String
    OSBuild As String
    ServicePack As String
    SystemType As String
    ComputerName As String
    UserName As String
    UserDomain As String
    
    ' Processor Information
    ProcessorArchitecture As String
    ProcessorCount As Long
    ProcessorSpeed As Long
    ProcessorDescription As String
    
    ' Memory Information
    TotalPhysicalMemory As Currency
    AvailablePhysicalMemory As Currency
    TotalVirtualMemory As Currency
    AvailableVirtualMemory As Currency
    MemoryLoad As Long
    
    ' Disk Information
    SystemDrive As String
    SystemDirectory As String
    WindowsDirectory As String
    TempPath As String
    
    ' Display Information
    ScreenWidth As Long
    ScreenHeight As Long
    ScreenColors As Long
    ScreenRefreshRate As Long
End Type

Private Sub CollectSystemInformation(ByRef SysInfo As SystemInformation)
    With SysInfo1
        ' System Information
        SysInfo.OSPlatform = .OSPlatform
        SysInfo.OSVersion = .OSVersion
        SysInfo.OSBuild = .OSBuild
        SysInfo.ServicePack = .ServicePack
        SysInfo.SystemType = .SystemType
        SysInfo.ComputerName = .ComputerName
        SysInfo.UserName = .UserName
        SysInfo.UserDomain = .UserDomain
        
        ' Processor Information
        SysInfo.ProcessorArchitecture = .ProcessorArchitecture
        SysInfo.ProcessorCount = .ProcessorCount
        SysInfo.ProcessorSpeed = .GetProcessorInfo.Speed
        SysInfo.ProcessorDescription = .GetProcessorInfo.Description
        
        ' Memory Information
        SysInfo.TotalPhysicalMemory = .TotalPhysicalMemory
        SysInfo.AvailablePhysicalMemory = .AvailablePhysicalMemory
        SysInfo.TotalVirtualMemory = .TotalVirtualMemory
        SysInfo.AvailableVirtualMemory = .AvailableVirtualMemory
        SysInfo.MemoryLoad = .GetMemoryStatus.MemoryLoad
        
        ' Disk Information
        SysInfo.SystemDrive = .SystemDrive
        SysInfo.SystemDirectory = .SystemDirectory
        SysInfo.WindowsDirectory = .WindowsDirectory
        SysInfo.TempPath = .TempPath
        
        ' Display Information
        SysInfo.ScreenWidth = .ScreenWidth
        SysInfo.ScreenHeight = .ScreenHeight
        SysInfo.ScreenColors = .ScreenColors
        SysInfo.ScreenRefreshRate = .ScreenRefreshRate
    End With
End Sub
```

### System Resource Monitor

```vb
Private Sub MonitorSystemResources()
    Dim MemStatus As MemoryStatus
    Dim PowerStatus As PowerStatus
    
    ' Get memory status
    MemStatus = SysInfo1.GetMemoryStatus
    
    ' Update memory information display
    lblMemoryLoad.Caption = "Memory Usage: " & MemStatus.MemoryLoad & "%"
    lblPhysicalMemory.Caption = "Physical Memory Available: " & _
        Format$(MemStatus.AvailablePhysicalMemory / 1024 / 1024, "#,##0.00") & " MB"
    lblVirtualMemory.Caption = "Virtual Memory Available: " & _
        Format$(MemStatus.AvailableVirtualMemory / 1024 / 1024, "#,##0.00") & " MB"
    
    ' Get power status
    PowerStatus = SysInfo1.GetPowerStatus
    
    ' Update power information display
    lblBatteryLife.Caption = "Battery Life: " & PowerStatus.BatteryLifePercent & "%"
    lblPowerLineStatus.Caption = "Power Source: " & _
        IIf(PowerStatus.ACLineStatus = 1, "AC Power", "Battery")
End Sub
```

### Drive Information Display

```vb
Private Sub DisplayDriveInfo()
    Dim DriveInfo As DriveInfo
    Dim Drive As String
    
    ' Get information for each drive
    For Each Drive In Split(SysInfo1.GetDriveInfo.DriveLetters, ";")
        DriveInfo = SysInfo1.GetDriveInfo(Drive)
        
        With lstDrives
            .AddItem "Drive: " & Drive
            .AddItem "Type: " & DriveInfo.DriveType
            .AddItem "File System: " & DriveInfo.FileSystem
            .AddItem "Total Size: " & Format$(DriveInfo.TotalSize / 1024 / 1024 / 1024, "#,##0.00") & " GB"
            .AddItem "Free Space: " & Format$(DriveInfo.FreeSpace / 1024 / 1024 / 1024, "#,##0.00") & " GB"
            .AddItem String(50, "-")
        End With
    Next Drive
End Sub
```

### Network Information

```vb
Private Sub ShowNetworkInfo()
    Dim NetInfo As NetworkInfo
    
    NetInfo = SysInfo1.GetNetworkInfo
    
    With lstNetwork
        .AddItem "Computer Name: " & NetInfo.ComputerName
        .AddItem "Domain Name: " & NetInfo.DomainName
        .AddItem "DNS Name: " & NetInfo.DNSName
        .AddItem "IP Address: " & NetInfo.IPAddress
        .AddItem "Subnet Mask: " & NetInfo.SubnetMask
        .AddItem "Default Gateway: " & NetInfo.DefaultGateway
        .AddItem "DHCP Server: " & NetInfo.DHCPServer
        .AddItem "DNS Servers: " & NetInfo.DNSServers
    End With
End Sub
```

## Best Practices

1. Error Handling
```vb
Private Sub SafeGetSystemInfo()
    On Error GoTo ErrorHandler
    
    Dim SysInfo As SystemInformation
    CollectSystemInformation SysInfo
    DisplaySystemInfo SysInfo
    Exit Sub
    
ErrorHandler:
    MsgBox "Error getting system information: " & Err.Description, _
           vbExclamation, "System Information Error"
End Sub
```

2. Memory Management
```vb
Private Sub MonitorMemoryUsage()
    Const WARNING_THRESHOLD As Long = 80 ' 80% memory usage
    Dim MemStatus As MemoryStatus
    
    MemStatus = SysInfo1.GetMemoryStatus
    
    If MemStatus.MemoryLoad > WARNING_THRESHOLD Then
        NotifyLowMemory MemStatus.MemoryLoad
    End If
End Sub
```

## Additional Tips

1. System Information Logging
```vb
Private Sub LogSystemInfo()
    Dim FileNum As Integer
    FileNum = FreeFile
    
    Open App.Path & "\SystemInfo.log" For Append As #FileNum
        Print #FileNum, "=== System Information Log ==="; Date & " " & Time
        Print #FileNum, "OS: " & SysInfo1.OSPlatform & " " & SysInfo1.OSVersion
        Print #FileNum, "Memory Load: " & SysInfo1.GetMemoryStatus.MemoryLoad & "%"
        Print #FileNum, String(50, "=")
    Close #FileNum
End Sub
```

2. Performance Monitoring
```vb
Private Sub StartPerformanceMonitor()
    Dim PerfData As New Collection
    
    ' Collect performance data every minute
    Do While MonitoringActive
        CollectPerformanceData PerfData
        UpdatePerformanceDisplay PerfData
        DoEvents
        Sleep 60000 ' Wait 1 minute
    Loop
End Sub

Private Sub CollectPerformanceData(ByRef PerfData As Collection)
    Dim MemStatus As MemoryStatus
    MemStatus = SysInfo1.GetMemoryStatus
    
    PerfData.Add Array(Now, MemStatus.MemoryLoad, _
                      MemStatus.AvailablePhysicalMemory, _
                      MemStatus.AvailableVirtualMemory)
                      
    ' Keep only last hour of data
    If PerfData.Count > 60 Then PerfData.Remove 1
End Sub
```

3. System Health Check
```vb
Private Function CheckSystemHealth() As Boolean
    Dim MemStatus As MemoryStatus
    Dim DriveInfo As DriveInfo
    
    ' Check memory status
    MemStatus = SysInfo1.GetMemoryStatus
    If MemStatus.MemoryLoad > 90 Then
        LogWarning "High memory usage: " & MemStatus.MemoryLoad & "%"
    End If
    
    ' Check system drive space
    DriveInfo = SysInfo1.GetDriveInfo(SysInfo1.SystemDrive)
    If (DriveInfo.FreeSpace / DriveInfo.TotalSize) < 0.1 Then
        LogWarning "Low disk space on system drive: " & _
                  Format$((DriveInfo.FreeSpace / DriveInfo.TotalSize) * 100, "0.00") & "%"
    End If
    
    CheckSystemHealth = True
End Function
```
