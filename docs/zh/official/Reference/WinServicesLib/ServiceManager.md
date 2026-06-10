---
title: ServiceManager
parent: "WinServicesLib 包"
permalink: /tB/Packages/WinServicesLib/ServiceManager
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "f5479d71-5b14-4bf4-aae3-13b10e2bfe3e"
  PropagateID: "f5479d71-5b14-4bf4-aae3-13b10e2bfe3e"
  ReservedCode1: "c33e414c-9540-4b69-9637-e69334b36cbf"
  ReservedCode2: "c33e414c-9540-4b69-9637-e69334b36cbf"
---

# ServiceManager 类

每服务配置对象。一个 [**ServiceManager**](/official/Reference/WinServicesLib/) 描述EXE知道如何托管的一个Windows服务——其 [**Name**](#name)、[**Description**](#description)、服务 [**Type**](#type)、[**InstallStartMode**](#installstartmode)、[**InstanceCreator**](#instancecreator) 以及SCM关心的可选字段——并暴露作用于单个服务的方法：[**Install**](#install)、[**Uninstall**](#uninstall) 以及服务运行时用于通知SCM状态转换的 [**ReportStatus**](#reportstatus) 调用。

::: info
不要直接构造 **ServiceManager** 实例。改为调用 [**Services.ConfigureNew**](/official/Reference/WinServicesLib/Services#configurenew)——它分配一个新的管理器并将其注册到包的内部集合中，以便调度器可以找到它。
:::

```vb
With Services.ConfigureNew
    .Name             = "MyService"
    .Description      = "An example twinBASIC service"
    .Type             = tbServiceTypeOwnProcess
    .InstallStartMode = tbServiceStartOnDemand
    .InstallCmdLine   = """" & App.ModulePath & """ -startService"
    .InstanceCreator  = New ServiceCreator(Of MyService)
End With
```

参见包[概述](/official/Reference/WinServicesLib/)了解更广泛的生命周期、[双线程分离](/official/Reference/WinServicesLib/#two-thread-split)以及围绕安装的提升权限规则。

## 字段

### LaunchArgs

SCM转发给服务的启动时参数。**String()**。由包的调度器跳板在SCM调用服务线程入口点时填充；*不是*配置字段。服务线程的 [**ITbService.EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 读取它以发现 [**Services.LaunchService**](/official/Reference/WinServicesLib/Services#launchservice)（或SCM，或 `sc.exe`）传入的参数。

`LaunchArgs(0)` 是*第一个用户提供的*参数——SCM供应的作为 `argv[0]` 的服务名称在填充数组之前已被丢弃，因此索引与调用者的心智模型匹配。

```vb
Sub EntryPoint(ByVal ServiceManager As ServiceManager) _
        Implements ITbService.EntryPoint
    If Join(ServiceManager.LaunchArgs) <> "MySecretPassword" Then
        ServiceManager.ReportStatus vbServiceStatusStopped, &H12345678
        Exit Sub
    End If
    ' ...稳态工作
End Sub
```

## 属性

### AutoInitializeCOM

调度器跳板是否在调用 [**ITbService.EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 之前在服务线程上调用 `CoInitializeEx(NULL, COINIT_APARTMENTTHREADED)`。**Boolean**，默认 **True**。

如果服务需要不同的单元模型，设置为 **False**——例如创建MTA工作池的服务。服务必须随后从其 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 中自己调用 `CoInitializeEx`，然后才能接触COM感知的对象。

### Description

在 `services.msc` 和 `sc.exe query` 中列出的人类可读描述。**String**，无默认值。

该值由 [**Install**](#install) 通过 `ChangeServiceConfig2W(SERVICE_CONFIG_DESCRIPTION)` 写入SCM，会应用于新服务或在每次重新安装时刷新。该字段必须在调用 [**Install**](#install) 之前赋值；运行时更改直到下次安装才会生效。

### DependentServices

此服务依赖的服务名称列表。**Variant()**，无默认值。

传入 `Array("OtherSvc1", "OtherSvc2")`。当SCM被要求启动该服务时，它首先自动启动列出的依赖项；如果任何依赖项启动失败，SCM会中止此服务的启动。包将数组打包为 `CreateServiceW` 期望的双空终止字符串。

```vb
.DependentServices = Array("MSMQ", "LanmanServer")
```

### InstallCmdLine

SCM启动服务宿主EXE时将使用的命令行。**String**，默认 `"""<App.ModulePath>"""`（正在运行的EXE路径，带引号）。

默认值仅在EXE始终作为服务运行时足够。常规模式是**覆盖默认值**以添加鉴别参数，以便EXE的 `Sub Main` 可以辨别它处于哪种模式：

```vb
.InstallCmdLine = """" & App.ModulePath & """ -startService"
```

`Sub Main` 中匹配的 `If InStr(Command, "-startService") > 0 Then Services.RunServiceDispatcher` 分支是使同一EXE既可作为安装程序/控制面板UI（正常启动时）又可作为服务宿主（由SCM启动时）工作的原因。

该值在 [**Install**](#install) 时被捕获到SCM数据库中。安装后更改需要卸载并重新安装服务。

### InstallStartMode

服务注册的SCM启动模式。[**ServiceStartConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants)，默认 [**tbServiceStartOnDemand**](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants#tbServiceStartOnDemand)。

典型设置：

- [**tbServiceStartOnDemand**](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants#tbServiceStartOnDemand)——服务**不**自动启动；用户/安装程序/[**Services.LaunchService**](/official/Reference/WinServicesLib/Services#launchservice) 按需启动。
- [**tbServiceStartAuto**](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants#tbServiceStartAuto)——SCM在系统启动时启动服务。
- [**tbServiceStartDisabled**](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants#tbServiceStartDisabled)——服务无法启动，直到其启动模式被更改。

仅驱动程序模式（[**tbServiceStartBoot**](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants#tbServiceStartBoot)、[**tbServiceStartDriverSystem**](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants#tbServiceStartDriverSystem)）对用户模式twinBASIC服务没有意义。

### InstanceCreator

调度器在SCM启动服务时用于创建 [**ITbService**](/official/Reference/WinServicesLib/ITbService) 实例的工厂。[**IServiceCreator**](/official/Reference/WinServicesLib/ServiceCreator)，无默认值。

赋值为 `New ServiceCreator(Of MyServiceClass)`，其中 `MyServiceClass` 是用户的 [**ITbService**](/official/Reference/WinServicesLib/ITbService) 实现：

```vb
.InstanceCreator = New ServiceCreator(Of MyService)
```

[**RunServiceDispatcher**](/official/Reference/WinServicesLib/Services#runservicedispatcher) 每次服务启动调用一次 `InstanceCreator.CreateInstance()`。**InstanceCreator** 是可读写的——底层私有接口同时接受 **Let** 和 **Set** 赋值，因此两种语法都可以。

如果只需要运行 [**Install**](#install) / [**Uninstall**](#uninstall)（例如在独立安装程序内），**InstanceCreator** 可以保留为 **Nothing**——调度器仅在SCM实际启动服务时才需要它。

### Name

服务在SCM数据库中的名称，由 `services.msc` 和 `sc.exe` 使用。**String**，无默认值。

名称是SCM存储在 `HKLM\SYSTEM\CurrentControlSet\Services\<Name>` 的内容；它也是 [**Services.LaunchService**](/official/Reference/WinServicesLib/Services#launchservice)、[**Services.ControlService**](/official/Reference/WinServicesLib/Services#controlservice) 和 [**Services.QueryStateOfService**](/official/Reference/WinServicesLib/Services#querystateofservice) 作为 _ServiceName_ 参数接受的名称。相同的值用于SCM的 _DisplayName_——包目前不暴露独立的显示名称。

### SupportsPausing

是否告知SCM服务接受 [**SERVICE_CONTROL_PAUSE**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlPause) / [**SERVICE_CONTROL_CONTINUE**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlContinue) 通知。**Boolean**，默认 **False**。

设置此属性后立即通过 `SetServiceStatus` 将缓存的 `SERVICE_STATUS` 重新同步到SCM，因此从 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 内部切换——一旦服务过了 `StartPending` 阶段——在下次SCM查询时生效。大多数支持暂停的服务在 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 顶部将属性设置为 **True**，并在 [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 中处理 [**vbServiceControlPause**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlPause) / [**vbServiceControlContinue**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlContinue)。

如果设置 **SupportsPausing** 时服务尚未达到已启动状态，重新同步会引发运行时错误5 _"Can't update the service state until the service has started"_。等到第一次 [**ReportStatus**](#reportstatus)`(vbServiceStatusRunning)` 调用之后再切换属性。

### Type

Win32服务类型——控制服务是否在自己的进程、共享进程中运行，或者是内核驱动程序。[**ServiceTypeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants)，默认 [**tbServiceTypeOwnProcess**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeOwnProcess)。

典型设置：

- [**tbServiceTypeOwnProcess**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeOwnProcess)——一个EXE一个服务。
- [**tbServiceTypeShareProcess**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeShareProcess)——多个服务托管在单个EXE中；SCM保持一个进程存活为所有服务服务。每个 [**ServiceManager**](/official/Reference/WinServicesLib/) 仍需要自己的配置和 [**InstanceCreator**](#instancecreator)。

仅驱动程序模式（[**tbServiceTypeSystemDriver**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeSystemDriver)、[**tbServiceTypeKernelDriver**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeKernelDriver)、…）对用户模式twinBASIC服务没有意义。

## 方法

### Install

在SCM数据库中注册此服务。

语法：_manager_.**Install**

以 `SC_MANAGER_CONNECT Or SC_MANAGER_CREATE_SERVICE` 打开SCM，用已配置字段调用 `CreateServiceW`。如果具有相同 [**Name**](#name) 的服务已经存在，方法会先删除它（通过 `OpenServiceW(SERVICE_DELETE)` + `DeleteService`）然后重试——因此对已存在的服务调用 [**Install**](#install) 会覆盖现有注册而非失败。创建成功后，[**Description**](#description) 通过 `ChangeServiceConfig2W(SERVICE_CONFIG_DESCRIPTION)` 写入。

::: warning
[**Install**](#install) 写入SCM数据库，需要管理员权限。通常的做法是从提升的安装程序中调用一次，而不是从应用程序的正常启动路径中调用。从twinBASIC IDE内运行通常会失败——IDE很少以提升权限运行。
:::

权限失败时引发运行时错误5，附带描述性消息（`"Unable to open the Service manager..."`）或不可恢复的创建失败（`"CreateServiceW() failed with error code <N>"`）。

### ReportStatus

通知SCM服务的当前状态。由服务从 [**ITbService.EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 内部调用（以及从 [**ITbService.ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 调用以确认待处理的转换）。

语法：_manager_.**ReportStatus** _CurrentState_ [, _Win32ExitCode_ [, *WaitHint* ] ]

_CurrentState_
: _必需_ [**ServiceStatusConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) 值——通常为 [**vbServiceStatusRunning**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusRunning)、[**vbServiceStatusStopPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopPending) 或 [**vbServiceStatusStopped**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopped)。

_Win32ExitCode_
: _可选_ **Long** 退出代码。默认 **0**（`NO_ERROR`）。当因错误报告 [**vbServiceStatusStopped**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopped) 时，传入Win32错误代码，或者对于服务特定代码使用魔术值 `ERROR_SERVICE_SPECIFIC_ERROR`（1066）并将实际代码放在服务特定字段中——但包的API只直接暴露 _Win32ExitCode_ 参数。大多数服务为干净停止传入 **0**，为错误停止传入小的自定义代码。

_WaitHint_
: _可选_ 给SCM当前待处理转换预计所需的毫秒数上限的 **Long**。默认 **0**。仅对待处理状态有意义（[**vbServiceStatusStartPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStartPending)、[**vbServiceStatusStopPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopPending)、[**vbServiceStatusPausePending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusPausePending)、[**vbServiceStatusContinuePending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusContinuePending)）——SCM将其与自动递增的 `dwCheckPoint` 字段一起使用来检测卡住的服务。

**ReportStatus** 自动填充 `SERVICE_STATUS` 的 `dwControlsAccepted` 字段——_Stop_ 在 [**vbServiceStatusStartPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStartPending) 期间以外总是被接受，_Pause_ / _Continue_ 在 [**SupportsPausing**](#supportspausing) 为 **True** 时被接受。`dwCheckPoint` 字段在服务处于待处理状态时自动递增，在 [**vbServiceStatusRunning**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusRunning) / [**vbServiceStatusStopped**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopped) 时重置为 **0**。

包的调度器跳板在调用 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 之前立即报告 [**vbServiceStatusStartPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStartPending)；用户的 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 负责后续的 [**vbServiceStatusRunning**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusRunning) 和 [**vbServiceStatusStopped**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopped) 转换。

### ResyncStatus

通过 `SetServiceStatus` 将缓存的 `SERVICE_STATUS` 重新应用到SCM。由 [**ReportStatus**](#reportstatus) 和 [**SupportsPausing**](#supportspausing) 设置器自动调用；消费者代码很少需要直接调用此方法。

语法：_manager_.**ResyncStatus**

如果在服务获取其SCM状态句柄之前调用（即在调度器跳板调用 `RegisterServiceCtrlHandlerExW` 之前），引发运行时错误5 _"Can't update the service state until the service has started"_。从 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 内部，[**ReportStatus**](#reportstatus) 是正确的调用，而非直接调用 **ResyncStatus**。

### Uninstall

从SCM数据库中移除此服务。

语法：_manager_.**Uninstall**

打开SCM，以 `SERVICE_DELETE` 打开服务，调用 `DeleteService`。实际删除由SCM排队并在每个打开的服务句柄关闭后完成——`services.msc` 可能将服务显示为 _"Marked for deletion"_ 直到宿主进程退出。

::: warning
[**Uninstall**](#uninstall) 需要管理员权限。如果无法打开SCM、服务未安装或 `DeleteService` 失败，引发运行时错误5，附带描述性消息。
:::

## 另见

- [WinServicesLib 包](/official/Reference/WinServicesLib/) -- 概述、生命周期、双线程分离
- [Services 类](/official/Reference/WinServicesLib/Services) -- **ConfigureNew** 来源的预声明协调器
- [ITbService 接口](/official/Reference/WinServicesLib/ITbService) -- **InstanceCreator** 必须产生的内容
- [ServiceCreator(Of T)](/official/Reference/WinServicesLib/ServiceCreator) -- 通常传递给 **InstanceCreator** 的通用工厂
- [ServiceStatusConstants 枚举](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) -- **ReportStatus** 接受的值
