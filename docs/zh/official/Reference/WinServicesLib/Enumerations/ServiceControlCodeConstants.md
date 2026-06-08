---
title: ServiceControlCodeConstants
parent: Enumerations
permalink: /tB/Packages/WinServicesLib/Enumerations/ServiceControlCodeConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8f10426e-cff2-4351-acb5-6de97c503282'
  PropagateID: '8f10426e-cff2-4351-acb5-6de97c503282'
  ReservedCode1: 'cc543913-42f8-451b-8d24-0951e650d8e9'
  ReservedCode2: 'cc543913-42f8-451b-8d24-0951e650d8e9'
---

# ServiceControlCodeConstants
SCM 可向运行中的服务传递的控制代码。用作 [**ITbService.ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 的 *dwControl* 参数（服务在此响应请求）以及 [**Services.ControlService**](/official/Reference/WinServicesLib/Services#controlservice) 的 *ControlCode* 参数（调用者在此向其他位置运行的服务发出请求）。

这些值与 Win32 `SERVICE_CONTROL_*` 常量完全相同——`vb` 前缀是 VB6 编码约定的历史遗留，不影响数值。

| 常量 | 值 | 说明 |
|------|----|------|
| **vbServiceControlStop**                                   | 0x01 | 请求服务停止。标准关闭信号——每个服务都应在 [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 中处理此代码。 |
| **vbServiceControlPause**                                 | 0x02 | 暂停服务。仅在 [**ServiceManager.SupportsPausing**](/official/Reference/WinServicesLib/ServiceManager#supportspausing) 为 **True** 时传递。 |
| **vbServiceControlContinue**                           | 0x03 | 恢复已暂停的服务。与 [**vbServiceControlPause**](#vbServiceControlPause) 配对使用。 |
| **vbServiceControlInterrogate**                     | 0x04 | SCM 请求服务通过 [**ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus) 重新报告其当前状态。最低限度的处理程序可以忽略——SCM 已从上一次调用中获取最新状态。 |
| **vbServiceControlShutdown**                           | 0x05 | 操作系统正在关闭。大多数服务将此与 [**vbServiceControlStop**](#vbServiceControlStop) 同等处理。 |
| **vbServiceControlParamChange**                     | 0x06 | 管理员已通过 `sc.exe config` 更改服务配置。仅当服务注册了 `SERVICE_ACCEPT_PARAMCHANGE` 时传递——目前未通过包暴露。 |
| **vbServiceControlNetBindAdd**                       | 0x07 | 新的网络绑定可用。仅当接受 `SERVICE_ACCEPT_NETBINDCHANGE` 时传递——目前未暴露。 |
| **vbServiceControlNetBindRemove**                 | 0x08 | 网络绑定已移除。 |
| **vbServiceControlNetBindEnable**                 | 0x09 | 先前禁用的网络绑定已启用。 |
| **vbServiceControlNetBindDisable**               | 0x0A | 网络绑定已禁用。 |
| **vbServiceControlDeviceEvent**                     | 0x0B | 设备到达/移除事件。[**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 的 *dwEventType* 和 *lpEventData* 参数包含 `DBT_*` 子代码和 `DEV_BROADCAST_HDR` 数据。仅当服务已接受 `SERVICE_ACCEPT_HARDWAREPROFILECHANGE` 时传递。 |
| **vbServiceControlHardwareProfileChange** | 0x0C | 硬件配置文件更改（笔记本电脑插接等）。 |
| **vbServiceControlPowerEvent**                       | 0x0D | 系统电源事件（挂起、恢复、电池电量低等）。*dwEventType* 参数包含 `PBT_*` 子代码。 |
| **vbServiceControlSessionChange**                 | 0x0E | 会话更改事件（用户登录、RDP 连接/断开等）。*dwEventType* 参数包含 `WTS_*` 子代码。 |
| **vbServiceControlPreShutdown**                     | 0x0F | 操作系统即将关闭——在 [**vbServiceControlShutdown**](#vbServiceControlShutdown) 之前发送给已注册更长预关闭通知窗口的服务。 |
| **vbServiceControlTimeChange**                       | 0x10 | 系统时间已更改。 |
| **vbServiceControlTriggerEvent**                   | 0x20 | 已注册的触发器事件已触发（通常由触发启动的服务使用）。 |
| **vbServiceControlLowResources**                   | 0x60 | 服务应减少其内存/CPU 占用。 |
| **vbServiceControlSystemLowResources**       | 0x61 | 整个系统资源不足。 |

**128--255** 范围内的控制代码保留给用户自定义代码；将此范围内的任意值传递给 [**Services.ControlService**](/official/Reference/WinServicesLib/Services#controlservice)，包将请求匹配的 `SERVICE_USER_DEFINED_CONTROL` SCM 权限。大多数服务只需处理 [**vbServiceControlStop**](#vbServiceControlStop)，可选处理暂停/继续对。