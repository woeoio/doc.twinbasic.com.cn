# DriveList Control (VBCCRDriveList)

VBCCRDriveList 控件提供了一个下拉列表框，用于显示和选择系统中可用的驱动器。它支持显示不同类型的驱动器（如固定硬盘、光驱、网络驱动器等），并提供了丰富的事件处理机制。

## 属性

### 基本属性
- `Drive` - 当前选中的驱动器字母
- `DriveLetter` - 当前选中的驱动器字母（仅字母部分）
- `DriveType` - 当前驱动器类型
  - `DRIVE_UNKNOWN` (0) - 未知类型
  - `DRIVE_NO_ROOT_DIR` (1) - 无效驱动器
  - `DRIVE_REMOVABLE` (2) - 可移动驱动器
  - `DRIVE_FIXED` (3) - 固定驱动器
  - `DRIVE_REMOTE` (4) - 网络驱动器
  - `DRIVE_CDROM` (5) - CD-ROM
  - `DRIVE_RAMDISK` (6) - RAM 磁盘
- `List` - 驱动器列表
- `ListCount` - 驱动器数量
- `ListIndex` - 当前选中项的索引

### 外观属性
- `BackColor` - 背景颜色
- `ForeColor` - 前景颜色
- `Enabled` - 是否启用控件
- `Font` - 字体设置
- `Visible` - 是否可见

## 事件

- `Change` - 选中驱动器改变时触发
- `Click` - 点击控件时触发
- `DblClick` - 双击控件时触发
- `GotFocus` - 获得焦点时触发
- `LostFocus` - 失去焦点时触发
- `KeyDown` - 按下键盘时触发
- `KeyPress` - 键盘按键时触发
- `KeyUp` - 释放键盘时触发
- `MouseDown` - 鼠标按下时触发
- `MouseMove` - 鼠标移动时触发
- `MouseUp` - 鼠标释放时触发
- `Scroll` - 滚动列表时触发

## 代码示例

### 基本用法

```vb
Private Sub InitDriveList()
    With DriveList1
        .Drive = "C:"  ' 设置初始驱动器
    End With
End Sub
```

### 驱动器管理器

```vb
Private Type DriveInfo
    Letter As String
    DriveType As Integer
    VolumeName As String
    FileSystem As String
    TotalSize As Currency
    FreeSpace As Currency
    SerialNumber As Long
    IsReady As Boolean
End Type

Private Type DriveManager
    Drives() As DriveInfo
    Count As Long
End Type

Private Manager As DriveManager

Private Sub InitDriveManager()
    With Manager
        ReDim .Drives(1 To 26)  ' A-Z
        .Count = 0
        
        ' 扫描所有驱动器
        RefreshDrives
    End With
End Sub

Private Sub RefreshDrives()
    With Manager
        .Count = 0
        
        ' 扫描驱动器
        Dim Letter As String
        For Letter = "A" To "Z"
            If GetDriveType(Letter & ":\") > DRIVE_NO_ROOT_DIR Then
                .Count = .Count + 1
                GetDriveInfo Letter, .Drives(.Count)
            End If
        Next Letter
    End With
End Sub

Private Sub GetDriveInfo(ByVal Letter As String, ByRef Info As DriveInfo)
    With Info
        .Letter = Letter
        .DriveType = GetDriveType(Letter & ":\")
        
        On Error Resume Next
        
        ' 获取驱动器信息
        Dim FSO As Object
        Set FSO = CreateObject("Scripting.FileSystemObject")
        
        Dim Drive As Object
        Set Drive = FSO.GetDrive(Letter & ":")
        
        .IsReady = Drive.IsReady
        
        If .IsReady Then
            .VolumeName = Drive.VolumeName
            .FileSystem = Drive.FileSystem
            .TotalSize = Drive.TotalSize
            .FreeSpace = Drive.FreeSpace
            .SerialNumber = GetVolumeSerialNumber(Letter)
        End If
    End With
End Sub

Private Function GetVolumeSerialNumber(ByVal Letter As String) As Long
    Dim FSO As Object
    Set FSO = CreateObject("Scripting.FileSystemObject")
    
    Dim TempFile As String
    TempFile = FSO.BuildPath(FSO.GetSpecialFolder(2), "vol.txt")
    
    ' 使用 vol 命令获取序列号
    Shell "cmd /c vol " & Letter & ": > " & TempFile, vbHide
    
    ' 读取结果
    Dim Serial As String
    If FSO.FileExists(TempFile) Then
        Dim ts As Object
        Set ts = FSO.OpenTextFile(TempFile, 1)
        
        If Not ts.AtEndOfStream Then
            Dim Line As String
            Line = ts.ReadLine
            
            ' 解析序列号
            Dim Start As Long
            Start = InStr(1, Line, "是 ")
            
            If Start > 0 Then
                Serial = Mid$(Line, Start + 2)
                Serial = Replace(Serial, "-", "")
                GetVolumeSerialNumber = CLng("&H" & Serial)
            End If
        End If
        
        ts.Close
        FSO.DeleteFile TempFile
    End If
End Function

Private Function GetDriveSpaceInfo(ByVal Letter As String) As String
    On Error Resume Next
    
    Dim FSO As Object
    Set FSO = CreateObject("Scripting.FileSystemObject")
    
    Dim Drive As Object
    Set Drive = FSO.GetDrive(Letter & ":")
    
    If Drive.IsReady Then
        GetDriveSpaceInfo = "总空间: " & FormatSize(Drive.TotalSize) & vbCrLf & _
                           "可用空间: " & FormatSize(Drive.FreeSpace) & vbCrLf & _
                           "已用空间: " & FormatSize(Drive.TotalSize - Drive.FreeSpace)
    Else
        GetDriveSpaceInfo = "驱动器未就绪"
    End If
End Function

Private Function FormatSize(ByVal Size As Currency) As String
    Const KB As Currency = 1024
    Const MB As Currency = KB * 1024
    Const GB As Currency = MB * 1024
    Const TB As Currency = GB * 1024
    
    If Size >= TB Then
        FormatSize = Format(Size / TB, "#,##0.00") & " TB"
    ElseIf Size >= GB Then
        FormatSize = Format(Size / GB, "#,##0.00") & " GB"
    ElseIf Size >= MB Then
        FormatSize = Format(Size / MB, "#,##0.00") & " MB"
    ElseIf Size >= KB Then
        FormatSize = Format(Size / KB, "#,##0.00") & " KB"
    Else
        FormatSize = Format(Size, "#,##0") & " B"
    End If
End Function
```

### 驱动器监视器

```vb
Private Type DriveMonitor
    Timer As VBCCRTimer
    LastCheck() As DriveInfo
    LastCount As Long
End Type

Private Monitor As DriveMonitor

Private Sub InitDriveMonitor()
    With Monitor
        Set .Timer = Timer1
        .Timer.Interval = 1000  ' 每秒检查一次
        .Timer.Enabled = True
        
        ReDim .LastCheck(1 To 26)
        .LastCount = 0
        
        ' 初始扫描
        RefreshDriveStatus
    End With
End Sub

Private Sub RefreshDriveStatus()
    With Monitor
        ' 获取当前状态
        Dim CurrentDrives() As DriveInfo
        Dim CurrentCount As Long
        
        ReDim CurrentDrives(1 To 26)
        CurrentCount = 0
        
        Dim Letter As String
        For Letter = "A" To "Z"
            If GetDriveType(Letter & ":\") > DRIVE_NO_ROOT_DIR Then
                CurrentCount = CurrentCount + 1
                GetDriveInfo Letter, CurrentDrives(CurrentCount)
            End If
        Next Letter
        
        ' 检查变化
        Dim i As Long, j As Long
        Dim Found As Boolean
        
        ' 检查新增驱动器
        For i = 1 To CurrentCount
            Found = False
            For j = 1 To .LastCount
                If CurrentDrives(i).Letter = .LastCheck(j).Letter Then
                    Found = True
                    
                    ' 检查驱动器状态变化
                    If CurrentDrives(i).IsReady <> .LastCheck(j).IsReady Then
                        If CurrentDrives(i).IsReady Then
                            RaiseEvent DriveReady(CurrentDrives(i).Letter)
                        Else
                            RaiseEvent DriveNotReady(CurrentDrives(i).Letter)
                        End If
                    End If
                    
                    ' 检查可用空间变化
                    If CurrentDrives(i).FreeSpace <> .LastCheck(j).FreeSpace Then
                        RaiseEvent DriveFreeSpaceChanged(CurrentDrives(i).Letter, _
                                                       CurrentDrives(i).FreeSpace)
                    End If
                    
                    Exit For
                End If
            Next j
            
            If Not Found Then
                RaiseEvent DriveAdded(CurrentDrives(i).Letter)
            End If
        Next i
        
        ' 检查移除的驱动器
        For i = 1 To .LastCount
            Found = False
            For j = 1 To CurrentCount
                If .LastCheck(i).Letter = CurrentDrives(j).Letter Then
                    Found = True
                    Exit For
                End If
            Next j
            
            If Not Found Then
                RaiseEvent DriveRemoved(.LastCheck(i).Letter)
            End If
        Next i
        
        ' 更新状态
        .LastCount = CurrentCount
        For i = 1 To CurrentCount
            .LastCheck(i) = CurrentDrives(i)
        Next i
    End With
End Sub

Private Sub Timer1_Timer()
    RefreshDriveStatus
End Sub
```

### 驱动器过滤器

```vb
Private Type DriveFilter
    ShowRemovable As Boolean
    ShowFixed As Boolean
    ShowNetwork As Boolean
    ShowCDROM As Boolean
    ShowRAM As Boolean
    MinimumFreeSpace As Currency
End Type

Private Filter As DriveFilter

Private Sub InitDriveFilter()
    With Filter
        .ShowRemovable = True
        .ShowFixed = True
        .ShowNetwork = True
        .ShowCDROM = True
        .ShowRAM = True
        .MinimumFreeSpace = 0
    End With
End Sub

Private Sub ApplyFilter()
    With DriveList1
        ' 保存当前选择
        Dim CurrentDrive As String
        CurrentDrive = .Drive
        
        ' 清空列表
        Do While .ListCount > 0
            .RemoveItem 0
        Loop
        
        ' 添加符合条件的驱动器
        Dim Letter As String
        For Letter = "A" To "Z"
            If IsValidDrive(Letter) Then
                .AddItem Letter & ":"
            End If
        Next Letter
        
        ' 恢复选择
        On Error Resume Next
        .Drive = CurrentDrive
    End With
End Sub

Private Function IsValidDrive(ByVal Letter As String) As Boolean
    Dim DriveType As Long
    DriveType = GetDriveType(Letter & ":\")
    
    With Filter
        Select Case DriveType
            Case DRIVE_REMOVABLE
                IsValidDrive = .ShowRemovable
            
            Case DRIVE_FIXED
                IsValidDrive = .ShowFixed
                
                ' 检查可用空间
                If IsValidDrive And .MinimumFreeSpace > 0 Then
                    Dim FSO As Object
                    Set FSO = CreateObject("Scripting.FileSystemObject")
                    
                    Dim Drive As Object
                    Set Drive = FSO.GetDrive(Letter & ":")
                    
                    If Drive.IsReady Then
                        IsValidDrive = (Drive.FreeSpace >= .MinimumFreeSpace)
                    End If
                End If
            
            Case DRIVE_REMOTE
                IsValidDrive = .ShowNetwork
            
            Case DRIVE_CDROM
                IsValidDrive = .ShowCDROM
            
            Case DRIVE_RAMDISK
                IsValidDrive = .ShowRAM
            
            Case Else
                IsValidDrive = False
        End Select
    End With
End Function
```

## 最佳实践

1. 错误处理
```vb
Private Function SafeSetDrive(ByVal Drive As String) As Boolean
    On Error GoTo ErrorHandler
    
    DriveList1.Drive = Drive
    SafeSetDrive = True
    Exit Function
    
ErrorHandler:
    Debug.Print "设置驱动器失败: " & Err.Description
    SafeSetDrive = False
End Function
```

2. 驱动器访问
```vb
Private Function IsDriveAccessible(ByVal Drive As String) As Boolean
    On Error GoTo ErrorHandler
    
    Dim FSO As Object
    Set FSO = CreateObject("Scripting.FileSystemObject")
    
    Dim DriveObj As Object
    Set DriveObj = FSO.GetDrive(Drive)
    
    IsDriveAccessible = DriveObj.IsReady
    Exit Function
    
ErrorHandler:
    IsDriveAccessible = False
End Function
```

3. 状态保存
```vb
Private Sub SaveDriveListState()
    SaveSetting App.Title, "DriveList", "LastDrive", DriveList1.Drive
End Sub

Private Sub RestoreDriveListState()
    Dim LastDrive As String
    LastDrive = GetSetting(App.Title, "DriveList", "LastDrive", "C:")
    
    If SafeSetDrive(LastDrive) = False Then
        DriveList1.Drive = "C:"  ' 使用默认驱动器
    End If
End Sub
```

DriveList 控件提供了方便的驱动器选择功能。通过合理的扩展，可以实现驱动器管理、监视和过滤等功能。上述示例展示了 DriveList 控件的多种用法，开发者可以根据具体需求选择合适的实现方式。
