---
title: StartupPosition
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/StartupPosition
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6438cd60-5c9a-4170-b598-7290250586bc'
  PropagateID: '6438cd60-5c9a-4170-b598-7290250586bc'
  ReservedCode1: 'e30055d7-41a5-46d2-a9cf-6351344151af'
  ReservedCode2: 'e30055d7-41a5-46d2-a9cf-6351344151af'
---

# StartupPosition
窗体窗口首次显示时的初始位置。由 [**WindowsFormOptions.StartUpPosition**](/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#startupposition) 使用。在窗体首次显示时生效一次；后续移动由用户决定或由代码控制。

| 常量 | 值 | 说明 |
|------|----|------|
| **tbStartUpManual** | 0 | 窗体使用其设计时 **Left** 和 **Top** 值。 |
| **tbStartUpCenterOwner** | 1 | 窗体在其所有者窗口上居中。如果窗体没有所有者则回退到 **tbStartUpCenterScreen**。 |
| **tbStartUpCenterScreen** | 2 | 窗体在屏幕上居中。 |
| **tbStartUpWindowsDefault** | 3 | Windows 使用操作系统应用于新窗口的从左上角级联逻辑选择位置。新构造的 [**WindowsFormOptions**](/official/Reference/CustomControls/WaynesForm/WindowsFormOptions) 的默认值。 |