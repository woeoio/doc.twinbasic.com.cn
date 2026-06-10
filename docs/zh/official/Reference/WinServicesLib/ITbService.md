---
title: ITbService
parent: "WinServicesLib 包"
permalink: /tB/Packages/WinServicesLib/ITbService
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "20bcde18-c07c-4168-8f29-a88e55ecacd4"
  PropagateID: "20bcde18-c07c-4168-8f29-a88e55ecacd4"
  ReservedCode1: "2e1bd02b-b340-4647-a5ae-300950f320c5"
  ReservedCode2: "2e1bd02b-b340-4647-a5ae-300950f320c5"
---

# ITbService 接口

每个 **WinServicesLib** 项目中的服务类必须实现的契约。三个子过程，每个在服务生命周期的特定点被调用：

- [**EntryPoint**](#entrypoint) -- 运行服务的实际工作。
- [**StartupFailed**](#startupfailed) -- 当SCM握手在 [**EntryPoint**](#entrypoint) 可以运行之前失败时调用。
- [**ChangeState**](#changestate) -- 当SCM传递控制代码（_Stop_、_Pause_、_Continue_、…）时调用。

包的 [**ServiceCreator**](/official/Reference/WinServicesLib/ServiceCreator)`(Of T)` 工厂为每次服务启动创建一个实例；调度器跳板在服务的整个生命周期内持有该实例，并将三个生命周期子过程路由到它。

```vb
[COMCreatable(False)]
Class MyService
    Implements ITbService

    Public IsStopping As Boolean

    Sub EntryPoint(ByVal ServiceManager As ServiceManager) _
            Implements ITbService.EntryPoint
        ServiceManager.ReportStatus vbServiceStatusRunning
        Do Until IsStopping
            ' ...做工作，然后用 WaitForSingleObject / Sleep 等让出
        Loop
        ServiceManager.ReportStatus vbServiceStatusStopped
    End Sub

    Sub ChangeState(ByVal ServiceManager As ServiceManager, _
                    ByVal dwControl As ServiceControlCodeConstants, _
                    ByVal dwEventType As Long, _
                    ByVal lpEventData As LongPtr) _
            Implements ITbService.ChangeState
        Select Case dwControl
            Case vbServiceControlStop, vbServiceControlShutdown
                ServiceManager.ReportStatus vbServiceStatusStopPending
                IsStopping = True
        End Select
    End Sub

    Sub StartupFailed(ByVal ServiceManager As ServiceManager) _
            Implements ITbService.StartupFailed
        ' …可选的失败报告钩子
    End Sub
End Class
```

::: warning
[**EntryPoint**](#entrypoint) 运行在**服务线程**上。[**ChangeState**](#changestate) 运行在**调度器线程**（EXE的主线程）上。两个方法并发执行，必须通过类上的共享 `Public` 标志进行协调——参见包概述上的[双线程分离](/official/Reference/WinServicesLib/#two-thread-split)。
:::

## 方法

### ChangeState

当控制代码传递给服务时，由SCM调度器线程调用。

语法：_service_.**ChangeState** _ServiceManager_, _dwControl_, _dwEventType_, _lpEventData_

_ServiceManager_
: 此服务的 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager)——与传递给 [**EntryPoint**](#entrypoint) 的实例相同。实现在其上调用 [**ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus) 以确认待处理的转换。

_dwControl_
: 标识控制的 [**ServiceControlCodeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants) 值。SCM可能传递的标准代码包括 [**vbServiceControlStop**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlStop)、[**vbServiceControlShutdown**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlShutdown)、[**vbServiceControlPause**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlPause)、[**vbServiceControlContinue**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlContinue)、[**vbServiceControlInterrogate**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlInterrogate)，以及承载事件的代码（[**vbServiceControlSessionChange**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlSessionChange)、[**vbServiceControlPowerEvent**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlPowerEvent)、[**vbServiceControlDeviceEvent**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlDeviceEvent)、[**vbServiceControlHardwareProfileChange**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlHardwareProfileChange)）。128--255范围内的用户定义代码也可以通过 [**Services.ControlService**](/official/Reference/WinServicesLib/Services#controlservice) 传递。

_dwEventType_
: 包含具有子代码的代码的事件类型子代码的 **Long**。否则为 **0**。参见Microsoft的 `HandlerEx` 文档了解每个代码的解释。

_lpEventData_
: 对于具有事件特定数据结构的代码，为指向该结构的 **LongPtr**。否则为 `vbNullPtr`。

典型模式是 `Select Case dwControl` 处理服务关心的代码并忽略其余代码。服务至少需要处理 _Stop_：

```vb
Select Case dwControl
    Case vbServiceControlStop, vbServiceControlShutdown
        ServiceManager.ReportStatus vbServiceStatusStopPending
        IsStopping = True       ' 向服务线程发出信号
End Select
```

[**ChangeState**](#changestate) **不会停止** [**EntryPoint**](#entrypoint)——它只传递SCM的请求。用户的代码负责实际的关闭逻辑，通常通过设置服务线程轮询的共享 `Public` 标志（`IsStopping`）或调用 [**EntryPoint**](#entrypoint) 拥有的阻塞原语上的信号方法（`NamedPipeServer.ManualMessageLoopLeave`、Win32事件句柄上的 `SetEvent`、…）。

该方法在与 [**EntryPoint**](#entrypoint) 不同的线程上运行；参见[双线程分离](/official/Reference/WinServicesLib/#two-thread-split)了解协调规则。

### EntryPoint

服务的主例程。在SCM握手完成且跳板已报告 [**vbServiceStatusStartPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStartPending) 后，由包的调度器跳板在SCM生成的服务线程上调用。

语法：_service_.**EntryPoint** _ServiceManager_

_ServiceManager_
: 此服务的 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager)。包含在 `Sub Main` 期间设置的配置以及SCM传入的运行时 [**LaunchArgs**](/official/Reference/WinServicesLib/ServiceManager#launchargs)。实现为其调用 [**ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus) 进行每个状态转换。

**EntryPoint** 的主体是服务的实际工作。最低职责：

1. 可选地验证启动条件（通常通过检查 [**LaunchArgs**](/official/Reference/WinServicesLib/ServiceManager#launchargs)）。失败路径应调用 `ServiceManager.ReportStatus vbServiceStatusStopped, <ExitCode>` 和 `Exit Sub`。
2. 一旦达到稳定状态即调用 `ServiceManager.ReportStatus vbServiceStatusRunning`。
3. 运行服务的长时间运行循环。循环通常阻塞在某个东西上（手动重置事件上的 `WaitForSingleObject`、`NamedPipeServer.ManualMessageLoopEnter`、自定义消息循环、…），当 [**ChangeState**](#changestate) 通过共享标志发出关闭信号时跳出。
4. 返回前调用 `ServiceManager.ReportStatus vbServiceStatusStopped`。

**EntryPoint** 子过程返回后，服务线程退出，SCM将服务标记为已停止。

::: warning
**EntryPoint** 运行在**服务线程**上，而非调度器线程。两个线程在服务生命周期内并发执行。实现类上的共享 `Public` 标志（`IsStopping`、`IsPaused`、…）协调从 [**ChangeState**](#changestate) 触发的状态变更。
:::

### StartupFailed

当SCM握手在 [**EntryPoint**](#entrypoint) 可以运行之前失败时调用。

语法：_service_.**StartupFailed** _ServiceManager_

_ServiceManager_
: 此服务的 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager)。

此子过程在 `RegisterServiceCtrlHandlerExW` 返回零句柄时触发——通常是因为服务在SCM上下文之外启动，或SCM的 `RegisterServiceCtrlHandlerExW` 拒绝了注册。服务在此状态下没有SCM状态句柄，因此 [**ServiceManager.ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus) 不能从 **StartupFailed** 内部调用——调用它会引发运行时错误5。

典型实现是仅记录日志的钩子，以便开发人员稍后可以找到失败：

```vb
Sub StartupFailed(ByVal ServiceManager As ServiceManager) _
        Implements ITbService.StartupFailed
    LogFailure service_startup_failed, status_changed, CurrentComponentName
End Sub
```

如果没有有用的失败报告钩子可以添加，空实现也可以——SCM此时已经放弃了启动尝试，无法恢复。

## 另见

- [WinServicesLib 包](/official/Reference/WinServicesLib/) -- 概述、生命周期、[双线程分离](/official/Reference/WinServicesLib/#two-thread-split)
- [ServiceManager 类](/official/Reference/WinServicesLib/ServiceManager) -- 传入每个方法的每服务对象
- [ServiceCreator(Of T) 类](/official/Reference/WinServicesLib/ServiceCreator) -- 为每次服务启动创建 **ITbService** 实例的工厂
- [ServiceControlCodeConstants 枚举](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants) -- **ChangeState** 分发的值
- [ServiceStatusConstants 枚举](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) -- **EntryPoint** 通过 [**ServiceManager.ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus) 报告的值
