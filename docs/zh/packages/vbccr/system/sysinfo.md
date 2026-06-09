---
title: 系统信息控件（SysInfo）
description: 系统信息控件（SysInfo） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ce160b84-b502-437e-bd7a-129ff5fdde96'
  PropagateID: 'ce160b84-b502-437e-bd7a-129ff5fdde96'
  ReservedCode1: '682945d6-e5a7-49f9-883b-3f4b6bdf3a20'
  ReservedCode2: '682945d6-e5a7-49f9-883b-3f4b6bdf3a20'
---

# 系统信息控件（SysInfo）

提供系统事件监测，包括设备变更、电源状态、显示设置更改和主题变更等通知。运行时不可见。

## 枚举

### SysDeviceTypeConstants

设备类型常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SysDeviceTypeOEM | DBT_DEVTYP_OEM | OEM设备 |
| SysDeviceTypeDevNode | DBT_DEVTYP_DEVNODE | 设备节点 |
| SysDeviceTypeVolume | DBT_DEVTYP_VOLUME | 卷设备 |
| SysDeviceTypePort | DBT_DEVTYP_PORT | 端口设备 |
| SysDeviceTypeDevInterface | DBT_DEVTYP_DEVICEINTERFACE | 设备接口 |

### SysACStatusConstants

交流电源状态常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SysACStatusOffline | 0 | 离线（使用电池） |
| SysACStatusOnline | 1 | 在线（使用交流电） |
| SysACStatusUnknown | 255 | 未知 |

### SysBatteryStatusConstants

电池状态常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SysBatteryStatusHigh | 1 | 电量高 |
| SysBatteryStatusLow | 2 | 电量低 |
| SysBatteryStatusCritical | 4 | 电量严重不足 |
| SysBatteryStatusCharging | 8 | 正在充电 |
| SysBatteryStatusNone | 128 | 无电池 |
| SysBatteryStatusUnknown | 255 | 未知 |

## 属性

### Name

```vb
Public Property Get Name() As String
```

返回在代码中标识对象的名称。

### Tag

```vb
Public Property Get Tag() As String
Public Property Let Tag(ByVal Value As String)
```

存储程序所需的额外数据。

### Parent

```vb
Public Property Get Parent() As Object
```

返回对象所在的对象。

### hMain

```vb
Public Property Get hMain() As LongPtr
```

返回主窗口句柄。

### ACStatus

```vb
Public Property Get ACStatus() As SysACStatusConstants
```

返回交流电源状态。

### BatteryFullTime

```vb
Public Property Get BatteryFullTime() As Long
```

返回电池完全充满所需的时间（秒）。

### BatteryLifePercent

```vb
Public Property Get BatteryLifePercent() As Integer
```

返回电池剩余电量百分比。

### BatteryLifeTime

```vb
Public Property Get BatteryLifeTime() As Long
```

返回电池剩余使用时间（秒）。

### BatteryStatus

```vb
Public Property Get BatteryStatus() As SysBatteryStatusConstants
```

返回电池状态。

### WorkAreaLeft

```vb
Public Property Get WorkAreaLeft() As Single
```

返回工作区左边距。

### WorkAreaTop

```vb
Public Property Get WorkAreaTop() As Single
```

返回工作区顶边距。

### WorkAreaWidth

```vb
Public Property Get WorkAreaWidth() As Single
```

返回工作区宽度。

### WorkAreaHeight

```vb
Public Property Get WorkAreaHeight() As Single
```

返回工作区高度。

### ScrollBarSize

```vb
Public Property Get ScrollBarSize() As Single
```

返回滚动条尺寸。

## 事件

### SysColorsChanged

```vb
Public Event SysColorsChanged()
```

系统颜色改变时触发。

### SettingChanged

```vb
Public Event SettingChanged(ByVal Item As Long, ByVal Section As String)
```

系统设置改变时触发。Item为设置项，Section为设置节。

### DevModeChanged

```vb
Public Event DevModeChanged()
```

设备模式改变时触发。

### TimeChanged

```vb
Public Event TimeChanged()
```

系统时间改变时触发。

### FontChanged

```vb
Public Event FontChanged()
```

系统字体改变时触发。

### DisplayChanged

```vb
Public Event DisplayChanged(ByVal NewColorDepth As Long, ByVal NewWidth As Single, ByVal NewHeight As Single)
```

显示设置改变时触发。NewColorDepth为新颜色深度，NewWidth/NewHeight为新分辨率。

### DeviceArrival

```vb
Public Event DeviceArrival(ByVal DeviceType As SysDeviceTypeConstants, ByVal DeviceID As Long, ByVal DeviceName As String, ByVal DeviceData As Long)
```

设备插入时触发。

### DeviceQueryRemove

```vb
Public Event DeviceQueryRemove(ByVal DeviceType As SysDeviceTypeConstants, ByVal DeviceID As Long, ByVal DeviceName As String, ByVal DeviceData As Long, ByRef Cancel As Boolean)
```

设备即将移除时触发。Cancel为True时阻止移除。

### DeviceQueryRemoveFailed

```vb
Public Event DeviceQueryRemoveFailed(ByVal DeviceType As SysDeviceTypeConstants, ByVal DeviceID As Long, ByVal DeviceName As String, ByVal DeviceData As Long)
```

设备移除查询失败时触发。

### DeviceRemoveComplete

```vb
Public Event DeviceRemoveComplete(ByVal DeviceType As SysDeviceTypeConstants, ByVal DeviceID As Long, ByVal DeviceName As String, ByVal DeviceData As Long)
```

设备移除完成时触发。

### DeviceRemovePending

```vb
Public Event DeviceRemovePending(ByVal DeviceType As SysDeviceTypeConstants, ByVal DeviceID As Long, ByVal DeviceName As String, ByVal DeviceData As Long)
```

设备即将被移除时触发。

### DevNodesChanged

```vb
Public Event DevNodesChanged()
```

设备节点改变时触发。

### QueryChangeConfig

```vb
Public Event QueryChangeConfig(ByRef Cancel As Boolean)
```

配置即将改变时触发。Cancel为True时阻止改变。

### ConfigChangeCancelled

```vb
Public Event ConfigChangeCancelled()
```

配置改变被取消时触发。

### ConfigChanged

```vb
Public Event ConfigChanged()
```

配置改变完成时触发。

### PowerQuerySuspend

```vb
Public Event PowerQuerySuspend(ByRef Cancel As Boolean)
```

系统即将挂起时触发。Cancel为True时阻止挂起。

### PowerQuerySuspendFailed

```vb
Public Event PowerQuerySuspendFailed()
```

系统挂起请求失败时触发。

### PowerResume

```vb
Public Event PowerResume()
```

系统从挂起恢复时触发。

### PowerStatusChanged

```vb
Public Event PowerStatusChanged()
```

电源状态改变时触发。

### PowerSuspend

```vb
Public Event PowerSuspend()
```

系统即将挂起时触发。

### ThemeChanged

```vb
Public Event ThemeChanged()
```

系统主题改变时触发。

## 代码示例

### 基本用法

```vb
' 监测电源状态
Private Sub SysInfo1_PowerStatusChanged()
    Select Case SysInfo1.ACStatus
        Case SysACStatusOnline
            Debug.Print "使用交流电源"
        Case SysACStatusOffline
            Debug.Print "使用电池, 剩余: " & SysInfo1.BatteryLifePercent & "%"
    End Select
End Sub

' 监测设备变更
Private Sub SysInfo1_DeviceArrival(ByVal DeviceType As SysDeviceTypeConstants, _
    ByVal DeviceID As Long, ByVal DeviceName As String, ByVal DeviceData As Long)
    Debug.Print "设备插入: " & DeviceName
End Sub

' 监测显示设置变更
Private Sub SysInfo1_DisplayChanged(ByVal NewColorDepth As Long, _
    ByVal NewWidth As Single, ByVal NewHeight As Single)
    Debug.Print "分辨率: " & NewWidth & "x" & NewHeight & " 色深: " & NewColorDepth
End Sub
```