# MCIWnd Control (VBCCRMCIWnd)

The MCIWnd control is a Media Control Interface (MCI) window control used for playing multimedia files. It supports various media formats, including audio files (such as WAV, MP3, MIDI) and video files (such as AVI, MPG, WMV).

## Properties

### Basic Properties
- `FileName` - Current media file name
- `DeviceType` - Device type
- `TimeFormat` - Time format
- `Mode` - Current playback mode
- `Position` - Current playback position
- `Length` - Media file length
- `Volume` - Volume (0-1000)
- `Speed` - Playback speed
- `Zoom` - Video zoom ratio
- `Channel` - Audio channel
- `EnableContextMenu` - Whether to enable context menu
- `Notify` - Whether to enable notification events
- `Wait` - Whether to wait for command completion

### Status Properties
- `IsPlaying` - Whether currently playing
- `IsPaused` - Whether paused
- `IsOpen` - Whether file is open
- `CanPlay` - Whether can play
- `CanRecord` - Whether can record
- `CanSave` - Whether can save
- `CanWindow` - Whether can display window
- `CanEject` - Whether can eject

## Events

- `PlayCompleted` - Triggered when playback completes
- `RecordCompleted` - Triggered when recording completes
- `PositionChange` - Triggered when playback position changes
- `ModeChange` - Triggered when playback mode changes
- `MediaError` - Triggered on media error
- `DeviceError` - Triggered on device error
- `Click` - Triggered when control is clicked
- `DblClick` - Triggered when control is double-clicked
- `MouseMove` - Triggered when mouse moves

## Code Examples

### Basic Playback Functions

```vb
Private Sub InitMCIWnd()
    With MCIWnd1
        .EnableContextMenu = True
        .Notify = True
        .TimeFormat = "ms"  ' Use milliseconds as time unit
        .Volume = 1000  ' Maximum volume
    End With
End Sub

Private Sub PlayMedia(ByVal FilePath As String)
    With MCIWnd1
        ' Close current file
        If .IsOpen Then
            .Close
        End If
        
        ' Open and play new file
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

### Player Manager

```vb
Private Type MediaInfo
    FilePath As String
```
