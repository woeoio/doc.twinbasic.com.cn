---
title: wv2PermissionState
parent: Enumerations
permalink: /tB/Packages/WebView2/Enumerations/wv2PermissionState
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3c73fc4f-6e79-4610-b932-37f9b39d2e9f'
  PropagateID: '3c73fc4f-6e79-4610-b932-37f9b39d2e9f'
  ReservedCode1: '050c617b-4074-4dba-be02-7aac6411b575'
  ReservedCode2: '050c617b-4074-4dba-be02-7aac6411b575'
---

# wv2PermissionState
宿主对权限请求的决策。作为 [**PermissionRequested**](/official/Reference/WebView2/WebView2/#permissionrequested) 事件的 **ByRef** `State` 参数传递——赋以下值之一以控制页面是被允许、被拒绝，还是交由运行时的默认行为。镜像 `COREWEBVIEW2_PERMISSION_STATE` 枚举。

| 常量 | 值 | 描述 |
|------|-----|------|
| **wv2StateDefault** | 0 | 让运行时决定——通常会提示用户。 |
| **wv2StateAllow** | 1 | 静默授予权限。 |
| **wv2StateDeny** | 2 | 静默拒绝权限。 |