---
title: wv2PermissionKind
parent: Enumerations
permalink: /tB/Packages/WebView2/Enumerations/wv2PermissionKind
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0849c110-3cf3-47c2-9869-a47685775a3f'
  PropagateID: '0849c110-3cf3-47c2-9869-a47685775a3f'
  ReservedCode1: '12f61c91-5c6f-4ee8-aa5f-d1ff055e1751'
  ReservedCode2: '12f61c91-5c6f-4ee8-aa5f-d1ff055e1751'
---

# wv2PermissionKind
标识 Web 页面请求使用的设备或浏览器能力。作为 [**PermissionRequested**](/official/Reference/WebView2/WebView2/#permissionrequested) 事件的 `PermissionKind` 参数传递。镜像 Edge WebView2 运行时中的 `COREWEBVIEW2_PERMISSION_KIND` 枚举。

| 常量 | 值 | 描述 |
|------|-----|------|
| **wv2UnknownPermission** | 0 | 运行时无法识别的权限类型。 |
| **wv2Microphone** | 1 | 从用户麦克风捕获音频的权限。 |
| **wv2Camera** | 2 | 从用户摄像头捕获视频的权限。 |
| **wv2Geolocation** | 3 | 读取设备地理位置的权限。 |
| **wv2Notifications** | 4 | 显示桌面通知的权限。 |
| **wv2Sensors** | 5 | 读取运动、方向、光线等传感器的权限。 |
| **wv2ClipboardRead** | 6 | 读取系统剪贴板的权限。 |