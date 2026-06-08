---
title: QueryUnloadConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/QueryUnloadConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ae43b604-3efa-4d83-83c6-22e455adac02'
  PropagateID: 'ae43b604-3efa-4d83-83c6-22e455adac02'
  ReservedCode1: '3d29b19e-610e-421f-ba51-edfa9159654b'
  ReservedCode2: '3d29b19e-610e-421f-ba51-edfa9159654b'
---

# QueryUnloadConstants

窗体**QueryUnload**事件的*UnloadMode*参数中报告的原因代码，标识触发卸载的原因。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbFormControlMenu** | 0 | 用户点击了窗体的关闭按钮（或从系统菜单选择了关闭）。 |
| **vbFormCode** | 1 | 卸载由代码调用**Unload**发起。 |
| **vbAppWindows** | 2 | Windows正在关机。 |
| **vbAppTaskManager** | 3 | 应用程序正在被任务管理器关闭。 |
| **vbFormMDIForm** | 4 | MDI父窗体正在被卸载。 |
| **vbFormOwner** | 5 | 所有者窗体正在被卸载。 |