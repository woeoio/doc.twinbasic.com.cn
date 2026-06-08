---
title: ServiceStatusConstants
parent: Enumerations
permalink: /tB/Packages/WinServicesLib/Enumerations/ServiceStatusConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '35e64314-5a03-42e5-9bc7-c34bb03d1687'
  PropagateID: '35e64314-5a03-42e5-9bc7-c34bb03d1687'
  ReservedCode1: '14b3f40e-9073-4642-9251-9f2c9afbb4a2'
  ReservedCode2: '14b3f40e-9073-4642-9251-9f2c9afbb4a2'
---

# ServiceStatusConstants
服务通过 [**ServiceManager.ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus) 向 SCM 报告的运行时状态值。相同的数值由 [**ServiceState.CurrentState**](/official/Reference/WinServicesLib/ServiceState#currentstate) 返回（类型为普通 **Long**），并由 [**ServiceState.CurrentStateText**](/official/Reference/WinServicesLib/ServiceState#currentstatetext) 渲染为文本。

这些值与 Win32 `SERVICE_*` 状态常量一一对应。`vb` 前缀是 VB6 编码约定的历史遗留。

| 常量 | 值 | 说明 |
|------|----|------|
| **vbServiceStatusStopped**                   | 1 | 服务未运行。在 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 返回之前由服务设置；也是服务注册时 SCM 存储的初始状态。 |
| **vbServiceStatusStartPending**         | 2 | 服务正在启动。在调用 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 之前由包的调度跳板设置；启动序列较长的服务还应定期重新报告此状态并提供 `WaitHint`，以免 SCM 判定服务挂起。 |
| **vbServiceStatusStopPending**           | 3 | 服务已确认停止请求并正在关闭。通常在 [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 中收到 [**vbServiceControlStop**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlStop) 后立即报告。 |
| **vbServiceStatusRunning**                   | 4 | 服务已达稳定状态。在初始化完成后从 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 报告；这就是 `services.msc` 显示为"正在运行"的状态。 |
| **vbServiceStatusContinuePending**   | 5 | 服务已确认继续请求并正在恢复。在 [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 中收到 [**vbServiceControlContinue**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlContinue) 后报告。 |
| **vbServiceStatusPausePending**         | 6 | 服务已确认暂停请求。在 [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 中收到 [**vbServiceControlPause**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlPause) 后报告。 |
| **vbServiceStatusPaused**                     | 7 | 服务已达暂停状态。在暂停循环激活后从 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 报告。 |

简单服务的典型状态序列：[**vbServiceStatusStartPending**](#vbServiceStatusStartPending)（包）→ [**vbServiceStatusRunning**](#vbServiceStatusRunning)（从 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint)）→ [**vbServiceStatusStopPending**](#vbServiceStatusStopPending)（从 [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate)）→ [**vbServiceStatusStopped**](#vbServiceStatusStopped)（从 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint)，在返回之前）。