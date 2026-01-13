# MCIWnd Control (VBCCRMCIWnd)

MCIWnd 控件是一个 Media Control Interface (MCI) 窗口控件，用于播放多媒体文件。它支持多种媒体格式，包括音频文件（如 WAV、MP3、MIDI）和视频文件（如 AVI、MPG、WMV）。

## 属性

### 基本属性
- `FileName` - 当前媒体文件名
- `DeviceType` - 设备类型
- `TimeFormat` - 时间格式
- `Mode` - 当前播放模式
- `Position` - 当前播放位置
- `Length` - 媒体文件长度
- `Volume` - 音量（0-1000）
- `Speed` - 播放速度
- `Zoom` - 视频缩放比例
- `Channel` - 音频通道
- `EnableContextMenu` - 是否启用右键菜单
- `Notify` - 是否启用通知事件
- `Wait` - 是否等待命令完成

### 状态属性
- `IsPlaying` - 是否正在播放
- `IsPaused` - 是否已暂停
- `IsOpen` - 是否已打开文件
- `CanPlay` - 是否可以播放
- `CanRecord` - 是否可以录制
- `CanSave` - 是否可以保存
- `CanWindow` - 是否可以显示窗口
- `CanEject` - 是否可以弹出

## 事件

- `PlayCompleted` - 播放完成时触发
- `RecordCompleted` - 录制完成时触发
- `PositionChange` - 播放位置改变时触发
- `ModeChange` - 播放模式改变时触发
- `MediaError` - 媒体错误时触发
- `DeviceError` - 设备错误时触发
- `Click` - 点击控件时触发
- `DblClick` - 双击控件时触发
- `MouseMove` - 鼠标移动时触发

## 代码示例

### 基本播放功能

```vb
Private Sub InitMCIWnd()
    With MCIWnd1
        .EnableContextMenu = True
        .Notify = True
        .TimeFormat = "ms"  ' 使用毫秒作为时间单位
        .Volume = 1000  ' 最大音量
    End With
End Sub

Private Sub PlayMedia(ByVal FilePath As String)
    With MCIWnd1
        ' 关闭当前文件
        If .IsOpen Then
            .Close
        End If
        
        ' 打开并播放新文件
        .FileName = FilePath
        .Play
    End With
End Sub

Private Sub StopMedia()
    With MCIWnd1
        If .IsPlaying Then
            .Stop
        End If
    End With
End Sub

Private Sub PauseMedia()
    With MCIWnd1
        If .IsPlaying Then
            .Pause
        End If
    End With
End Sub

Private Sub ResumeMedia()
    With MCIWnd1
        If .IsPaused Then
            .Play
        End If
    End With
End Sub
```

### 播放器管理器

```vb
Private Type MediaInfo
    FilePath As String
    Title As String
    Artist As String
    Duration As Long
    FileType As String
End Type

Private Type PlaylistItem
    Media As MediaInfo
    Position As Long
End Type

Private Type PlayerManager
    CurrentFile As String
    Playlist() As PlaylistItem
    PlaylistCount As Long
    CurrentIndex As Long
    Volume As Long
    Speed As Long
    Repeat As Boolean
    Shuffle As Boolean
    LastPosition As Long
End Type

Private Player As PlayerManager

Private Sub InitPlayerManager()
    With Player
        .CurrentFile = ""
        ReDim .Playlist(1 To 100)
        .PlaylistCount = 0
        .CurrentIndex = 0
        .Volume = 1000
        .Speed = 1000
        .Repeat = False
        .Shuffle = False
        .LastPosition = 0
    End With
End Sub

Private Function AddToPlaylist(ByVal FilePath As String) As Boolean
    On Error GoTo ErrorHandler
    
    With Player
        ' 获取媒体信息
        Dim Info As MediaInfo
        If GetMediaInfo(FilePath, Info) Then
            .PlaylistCount = .PlaylistCount + 1
            If .PlaylistCount > UBound(.Playlist) Then
                ReDim Preserve .Playlist(1 To .PlaylistCount + 100)
            End If
            
            With .Playlist(.PlaylistCount)
                .Media = Info
                .Position = Player.PlaylistCount
            End With
            
            AddToPlaylist = True
        End If
    End With
    Exit Function
    
ErrorHandler:
    AddToPlaylist = False
End Function

Private Function GetMediaInfo(ByVal FilePath As String, _
                            ByRef Info As MediaInfo) As Boolean
    On Error GoTo ErrorHandler
    
    ' 临时打开文件获取信息
    With MCIWnd1
        .Close
        .FileName = FilePath
        
        Info.FilePath = FilePath
        Info.Title = GetFileTitle(FilePath)
        Info.Duration = .Length
        Info.FileType = GetFileExtension(FilePath)
        
        .Close
    End With
    
    GetMediaInfo = True
    Exit Function
    
ErrorHandler:
    GetMediaInfo = False
End Function

Private Function GetFileTitle(ByVal FilePath As String) As String
    Dim Parts() As String
    Parts = Split(FilePath, "\")
    
    If UBound(Parts) >= 0 Then
        GetFileTitle = Left$(Parts(UBound(Parts)), _
                           InStrRev(Parts(UBound(Parts)), ".") - 1)
    End If
End Function

Private Function GetFileExtension(ByVal FilePath As String) As String
    GetFileExtension = Mid$(FilePath, InStrRev(FilePath, ".") + 1)
End Function

Private Sub PlayNext()
    With Player
        If .PlaylistCount = 0 Then Exit Sub
        
        If .Shuffle Then
            ' 随机播放
            Dim NewIndex As Long
            Do
                NewIndex = Int(Rnd * .PlaylistCount) + 1
            Loop While NewIndex = .CurrentIndex
            
            .CurrentIndex = NewIndex
        Else
            ' 顺序播放
            .CurrentIndex = .CurrentIndex + 1
            If .CurrentIndex > .PlaylistCount Then
                If .Repeat Then
                    .CurrentIndex = 1
                Else
                    .CurrentIndex = 0
                    Exit Sub
                End If
            End If
        End If
        
        ' 播放新文件
        PlayMedia .Playlist(.CurrentIndex).Media.FilePath
    End With
End Sub

Private Sub PlayPrevious()
    With Player
        If .PlaylistCount = 0 Then Exit Sub
        
        If .Shuffle Then
            ' 随机播放
            Dim NewIndex As Long
            Do
                NewIndex = Int(Rnd * .PlaylistCount) + 1
            Loop While NewIndex = .CurrentIndex
            
            .CurrentIndex = NewIndex
        Else
            ' 顺序播放
            .CurrentIndex = .CurrentIndex - 1
            If .CurrentIndex < 1 Then
                If .Repeat Then
                    .CurrentIndex = .PlaylistCount
                Else
                    .CurrentIndex = 0
                    Exit Sub
                End If
            End If
        End If
        
        ' 播放新文件
        PlayMedia .Playlist(.CurrentIndex).Media.FilePath
    End With
End Sub
```

### 媒体效果处理

```vb
Private Type AudioEffect
    Volume As Long  ' 0-1000
    Balance As Long  ' -1000 to 1000
    Bass As Long    ' -1000 to 1000
    Treble As Long  ' -1000 to 1000
End Type

Private Type VideoEffect
    Brightness As Long  ' 0-1000
    Contrast As Long    ' 0-1000
    Saturation As Long  ' 0-1000
    Zoom As Long        ' percentage
End Type

Private Type EffectManager
    Audio As AudioEffect
    Video As VideoEffect
End Type

Private Effects As EffectManager

Private Sub InitEffectManager()
    With Effects
        ' 音频效果
        With .Audio
            .Volume = 1000
            .Balance = 0
            .Bass = 0
            .Treble = 0
        End With
        
        ' 视频效果
        With .Video
            .Brightness = 500
            .Contrast = 500
            .Saturation = 500
            .Zoom = 100
        End With
    End With
    
    ApplyEffects
End Sub

Private Sub ApplyEffects()
    With MCIWnd1
        ' 应用音频效果
        .Volume = Effects.Audio.Volume
        
        ' 应用视频效果
        If .CanWindow Then
            .Zoom = Effects.Video.Zoom
        End If
    End With
End Sub

Private Sub SetVolume(ByVal Value As Long)
    If Value < 0 Then Value = 0
    If Value > 1000 Then Value = 1000
    
    Effects.Audio.Volume = Value
    MCIWnd1.Volume = Value
End Sub

Private Sub SetBalance(ByVal Value As Long)
    If Value < -1000 Then Value = -1000
    If Value > 1000 Then Value = 1000
    
    Effects.Audio.Balance = Value
    ' 需要通过其他 API 实现声道平衡
End Sub

Private Sub SetVideoZoom(ByVal Percentage As Long)
    If Percentage < 25 Then Percentage = 25  ' 最小 25%
    If Percentage > 400 Then Percentage = 400  ' 最大 400%
    
    Effects.Video.Zoom = Percentage
    
    If MCIWnd1.CanWindow Then
        MCIWnd1.Zoom = Percentage
    End If
End Sub
```

### 播放进度管理

```vb
Private Type ProgressManager
    Timer As VBCCRTimer
    Enabled As Boolean
    Interval As Long
    LastPosition As Long
    TotalLength As Long
End Type

Private Progress As ProgressManager

Private Sub InitProgressManager()
    With Progress
        Set .Timer = Timer1
        .Timer.Interval = 100  ' 每 100ms 更新一次
        .Timer.Enabled = False
        .Enabled = True
        .LastPosition = 0
        .TotalLength = 0
    End With
End Sub

Private Sub Timer1_Timer()
    If Not Progress.Enabled Then Exit Sub
    
    With MCIWnd1
        If .IsPlaying Then
            Dim NewPosition As Long
            NewPosition = .Position
            
            If NewPosition <> Progress.LastPosition Then
                Progress.LastPosition = NewPosition
                UpdateProgress NewPosition, .Length
            End If
        End If
    End With
End Sub

Private Sub UpdateProgress(ByVal Position As Long, _
                         ByVal Total As Long)
    ' 计算进度百分比
    Dim Percent As Long
    If Total > 0 Then
        Percent = (Position * 100) \ Total
    End If
    
    ' 转换为时间格式
    Dim CurrentTime As String
    CurrentTime = FormatTime(Position)
    
    Dim TotalTime As String
    TotalTime = FormatTime(Total)
    
    ' 更新界面显示
    Debug.Print "进度: " & Percent & "% (" & CurrentTime & " / " & TotalTime & ")"
End Sub

Private Function FormatTime(ByVal Milliseconds As Long) As String
    Dim Seconds As Long
    Seconds = Milliseconds \ 1000
    
    Dim Minutes As Long
    Minutes = Seconds \ 60
    Seconds = Seconds Mod 60
    
    Dim Hours As Long
    Hours = Minutes \ 60
    Minutes = Minutes Mod 60
    
    FormatTime = Format$(Hours, "00") & ":" & _
                 Format$(Minutes, "00") & ":" & _
                 Format$(Seconds, "00")
End Function

Private Sub SeekToPosition(ByVal Position As Long)
    If Position < 0 Then Position = 0
    If Position > MCIWnd1.Length Then Position = MCIWnd1.Length
    
    MCIWnd1.Position = Position
End Sub

Private Sub SeekToPercent(ByVal Percent As Long)
    If Percent < 0 Then Percent = 0
    If Percent > 100 Then Percent = 100
    
    Dim Position As Long
    Position = (MCIWnd1.Length * Percent) \ 100
    
    MCIWnd1.Position = Position
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Function SafeOpenMedia(ByVal FilePath As String) As Boolean
    On Error GoTo ErrorHandler
    
    With MCIWnd1
        If .IsOpen Then .Close
        .FileName = FilePath
        .Play
    End With
    
    SafeOpenMedia = True
    Exit Function
    
ErrorHandler:
    Debug.Print "打开媒体文件失败: " & Err.Description
    SafeOpenMedia = False
End Function
```

2. 状态检查
```vb
Private Function IsMediaReady() As Boolean
    With MCIWnd1
        IsMediaReady = .IsOpen And .CanPlay
    End With
End Function

Private Function CanPerformAction(ByVal Action As String) As Boolean
    Select Case UCase$(Action)
        Case "PLAY"
            CanPerformAction = MCIWnd1.CanPlay
        Case "RECORD"
            CanPerformAction = MCIWnd1.CanRecord
        Case "SAVE"
            CanPerformAction = MCIWnd1.CanSave
        Case "WINDOW"
            CanPerformAction = MCIWnd1.CanWindow
        Case Else
            CanPerformAction = False
    End Select
End Function
```

3. 状态保存
```vb
Private Sub SavePlayerState()
    With Player
        SaveSetting App.Title, "MCIWnd", "CurrentFile", .CurrentFile
        SaveSetting App.Title, "MCIWnd", "Volume", CStr(.Volume)
        SaveSetting App.Title, "MCIWnd", "Speed", CStr(.Speed)
        SaveSetting App.Title, "MCIWnd", "Repeat", CStr(.Repeat)
        SaveSetting App.Title, "MCIWnd", "Shuffle", CStr(.Shuffle)
        SaveSetting App.Title, "MCIWnd", "LastPosition", CStr(.LastPosition)
    End With
End Sub

Private Sub RestorePlayerState()
    With Player
        .CurrentFile = GetSetting(App.Title, "MCIWnd", "CurrentFile", "")
        .Volume = CLng(GetSetting(App.Title, "MCIWnd", "Volume", "1000"))
        .Speed = CLng(GetSetting(App.Title, "MCIWnd", "Speed", "1000"))
        .Repeat = CBool(GetSetting(App.Title, "MCIWnd", "Repeat", "False"))
        .Shuffle = CBool(GetSetting(App.Title, "MCIWnd", "Shuffle", "False"))
        .LastPosition = CLng(GetSetting(App.Title, "MCIWnd", "LastPosition", "0"))
        
        ' 恢复播放
        If LenB(.CurrentFile) > 0 Then
            If SafeOpenMedia(.CurrentFile) Then
                MCIWnd1.Position = .LastPosition
            End If
        End If
    End With
End Sub
```

MCIWnd 控件提供了强大的多媒体播放功能。通过合理的扩展，可以实现播放列表管理、媒体效果控制和进度管理等功能。上述示例展示了 MCIWnd 控件的多种用法，开发者可以根据具体需求选择合适的实现方式。
