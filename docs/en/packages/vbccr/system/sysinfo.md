---
title: SysInfo Control
description: SysInfo Control - VBCCR Development Manual, Complete API Reference Based on Source Code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '910a7137-87f4-4f6a-84ee-f1c59684ad96'
  PropagateID: '910a7137-87f4-4f6a-84ee-f1c59684ad96'
  ReservedCode1: '0c5c817a-d23e-41f1-a915-b49f2467aac7'
  ReservedCode2: '0c5c817a-d23e-41f1-a915-b49f2467aac7'
---

# SysInfo Control

Provides system event monitoring, including notifications for device changes, power status, display setting changes, and theme changes. Invisible at runtime.

## Enumerations

### SysDeviceTypeConstants

Device type constants.

| Constant | Value | Description |
|------|-----|------|
| SysDeviceTypeOEM | DBT_DEVTYP_OEM | OEM device |
| SysDeviceTypeDevNode | DBT_DEVTYP_DEVNODE | Device node |
| SysDeviceTypeVolume | DBT_DEVTYP_VOLUME | Volume device |
| SysDeviceTypePort | DBT_DEVTYP_PORT | Port device |
| SysDeviceTypeDevInterface | DBT_DEVTYP_DEVICEINTERFACE | Device interface |

### SysACStatusConstants

AC power status constants.

| Constant | Value | Description |
|------|-----|------|
| SysACStatusOffline | 0 | Offline (on battery) |
| SysACStatusOnline | 1 | Online (on AC power) |
| SysACStatusUnknown | 255 | Unknown |

### SysBatteryStatusConstants

Battery status constants.

| Constant | Value | Description |
|------|-----|------|
| SysBatteryStatusHigh | 1 | Battery high |
| SysBatteryStatusLow | 2 | Battery low |
| SysBatteryStatusCritical | 4 | Battery critically low |
| SysBatteryStatusCharging | 8 | Battery charging |
| SysBatteryStatusNone | 128 | No battery |
| SysBatteryStatusUnknown | 255 | Unknown |

## Properties

### Name

```vb
Public Property Get Name() As String
```

Returns the name used to identify the object in code.

### Tag

```vb
Public Property Get Tag() As String
Public Property Let Tag(ByVal Value As String)
```

Stores extra data needed by the program.

### Parent

```vb
Public Property Get Parent() As Object
```

Returns the object that contains the object.

### hMain

```vb
Public Property Get hMain() As LongPtr
```

Returns the main window handle.

### ACStatus

```vb
Public Property Get ACStatus() As SysACStatusConstants
```

Returns the AC power status.

### BatteryFullTime

```vb
Public Property Get BatteryFullTime() As Long
```

Returns the time remaining for the battery to be fully charged (seconds).

### BatteryLifePercent

```vb
Public Property Get BatteryLifePercent() As Integer
```

Returns the remaining battery life percentage.

### BatteryLifeTime

```vb
Public Property Get BatteryLifeTime() As Long
```

Returns the remaining battery life (seconds).

### BatteryStatus

```vb
Public Property Get BatteryStatus() As SysBatteryStatusConstants
```

Returns the battery status.

### WorkAreaLeft

```vb
Public Property Get WorkAreaLeft() As Single
```

Returns the left margin of the work area.

### WorkAreaTop

```vb
Public Property Get WorkAreaTop() As Single
```

Returns the top margin of the work area.

### WorkAreaWidth

```vb
Public Property Get WorkAreaWidth() As Single
```

Returns the width of the work area.

### WorkAreaHeight

```vb
Public Property Get WorkAreaHeight() As Single
```

Returns the height of the work area.

### ScrollBarSize

```vb
Public Property Get ScrollBarSize() As Single
```

Returns the scrollbar size.

## Events

### SysColorsChanged

```vb
Public Event SysColorsChanged()
```

Fired when system colors change.

### SettingChanged

```vb
Public Event SettingChanged(ByVal Item As Long, ByVal Section As String)
```

Fired when a system setting changes. Item is the setting item, Section is the setting section.

### DevModeChanged

```vb
Public Event DevModeChanged()
```

Fired when device mode changes.

### TimeChanged

```vb
Public Event TimeChanged()
```

Fired when the system time changes.

### FontChanged

```vb
Public Event FontChanged()
```

Fired when the system font changes.

### DisplayChanged

```vb
Public Event DisplayChanged(ByVal NewColorDepth As Long, ByVal NewWidth As Single, ByVal NewHeight As Single)
```

Fired when display settings change. NewColorDepth is the new color depth, NewWidth/NewHeight is the new resolution.

### DeviceArrival

```vb
Public Event DeviceArrival(ByVal DeviceType As SysDeviceTypeConstants, ByVal DeviceID As Long, ByVal DeviceName As String, ByVal DeviceData As Long)
```

Fired when a device is inserted.

### DeviceQueryRemove

```vb
Public Event DeviceQueryRemove(ByVal DeviceType As SysDeviceTypeConstants, ByVal DeviceID As Long, ByVal DeviceName As String, ByVal DeviceData As Long, ByRef Cancel As Boolean)
```

Fired when a device is about to be removed. Set Cancel to True to prevent removal.

### DeviceQueryRemoveFailed

```vb
Public Event DeviceQueryRemoveFailed(ByVal DeviceType As SysDeviceTypeConstants, ByVal DeviceID As Long, ByVal DeviceName As String, ByVal DeviceData As Long)
```

Fired when a device removal query fails.

### DeviceRemoveComplete

```vb
Public Event DeviceRemoveComplete(ByVal DeviceType As SysDeviceTypeConstants, ByVal DeviceID As Long, ByVal DeviceName As String, ByVal DeviceData As Long)
```

Fired when a device removal is completed.

### DeviceRemovePending

```vb
Public Event DeviceRemovePending(ByVal DeviceType As SysDeviceTypeConstants, ByVal DeviceID As Long, ByVal DeviceName As String, ByVal DeviceData As Long)
```

Fired when a device is about to be removed.

### DevNodesChanged

```vb
Public Event DevNodesChanged()
```

Fired when device nodes change.

### QueryChangeConfig

```vb
Public Event QueryChangeConfig(ByRef Cancel As Boolean)
```

Fired when the configuration is about to change. Set Cancel to True to prevent the change.

### ConfigChangeCancelled

```vb
Public Event ConfigChangeCancelled()
```

Fired when a configuration change is cancelled.

### ConfigChanged

```vb
Public Event ConfigChanged()
```

Fired when a configuration change is completed.

### PowerQuerySuspend

```vb
Public Event PowerQuerySuspend(ByRef Cancel As Boolean)
```

Fired when the system is about to suspend. Set Cancel to True to prevent suspension.

### PowerQuerySuspendFailed

```vb
Public Event PowerQuerySuspendFailed()
```

Fired when a system suspend request fails.

### PowerResume

```vb
Public Event PowerResume()
```

Fired when the system resumes from suspension.

### PowerStatusChanged

```vb
Public Event PowerStatusChanged()
```

Fired when power status changes.

### PowerSuspend

```vb
Public Event PowerSuspend()
```

Fired when the system is about to suspend.

### ThemeChanged

```vb
Public Event ThemeChanged()
```

Fired when the system theme changes.

## Code Examples

### Basic Usage

```vb
' Monitor power status
Private Sub SysInfo1_PowerStatusChanged()
    Select Case SysInfo1.ACStatus
        Case SysACStatusOnline
            Debug.Print "On AC power"
        Case SysACStatusOffline
            Debug.Print "On battery, remaining: " & SysInfo1.BatteryLifePercent & "%"
    End Select
End Sub

' Monitor device changes
Private Sub SysInfo1_DeviceArrival(ByVal DeviceType As SysDeviceTypeConstants, _
    ByVal DeviceID As Long, ByVal DeviceName As String, ByVal DeviceData As Long)
    Debug.Print "Device inserted: " & DeviceName
End Sub

' Monitor display setting changes
Private Sub SysInfo1_DisplayChanged(ByVal NewColorDepth As Long, _
    ByVal NewWidth As Single, ByVal NewHeight As Single)
    Debug.Print "Resolution: " & NewWidth & "x" & NewHeight & " Color depth: " & NewColorDepth
End Sub
```