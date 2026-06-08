---
title: Services
parent: "WinServicesLib 包"
permalink: /tB/Packages/WinServicesLib/Services
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '047a3210-3da5-4881-ad2f-6633379f2f78'
  PropagateID: '047a3210-3da5-4881-ad2f-6633379f2f78'
  ReservedCode1: '9d1a672f-f23c-49c4-b724-637ca7c35b38'
  ReservedCode2: '9d1a672f-f23c-49c4-b724-637ca7c35b38'
---

# Services 类

**WinServicesLib** 包的预声明单例协调器。与包的每个交互都从 **Services** 开始：该类标记为 `[PredeclaredId]`，因此项目启动时存在名为 `Services` 的项目范围实例，消费者直接调用 `Services.X` 而无需 `New`。该实例还可作为已配置的 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) 实例的可枚举集合（`For Each manager In Services`）。

```vb
' 在启动时配置两个服务：
With Services.ConfigureNew
    .Name             = "MyServiceA"
    .InstanceCreator  = New ServiceCreator(Of MyServiceA)
End With
With Services.ConfigureNew
    .Name             = "MyServiceB"
    .InstanceCreator  = New ServiceCreator(Of MyServiceB)
End With

' 如果作为服务宿主启动则运行调度器：
If InStr(Command, "-startService") > 0 Then Services.RunServiceDispatcher
```

参见包[概述](/official/Reference/WinServicesLib/)了解更广泛的生命周期、[**双线程分离**](/official/Reference/WinServicesLib/#two-thread-split)以及围绕安装的提升权限规则。

## 方法

### ConfigureNew

分配一个新的 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager)，添加到内部集合，并返回给调用者填充。通常在 `Sub Main` 期间使用，以声明EXE知道如何托管的每个服务。

语法：**Services.ConfigureNew** **As** [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager)

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

配置纯粹在内存中；**ConfigureNew** 不触及SCM。已配置的服务可通过 [**For Each**](#_newenum) 枚举器、[**GetConfiguredService**](#getconfiguredservice) 和批量 [**Install**](#installall) / [**Uninstall**](#uninstallall) / [**RunServiceDispatcher**](#runservicedispatcher) 辅助方法访问。

### ControlService

向运行中的服务发送SCM控制代码。

语法：**Services.ControlService** *ServiceName*, *ControlCode*

*ServiceName*
: *必需* 命名已安装服务的 **String**。

*ControlCode*
: *必需* [**ServiceControlCodeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants) 值——通常为 [**vbServiceControlStop**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlStop)、[**vbServiceControlPause**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlPause)、[**vbServiceControlContinue**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlContinue) 或 [**vbServiceControlInterrogate**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlInterrogate)。128--255范围内的用户定义代码也被接受。

该方法打开SCM，请求所选控制代码所需的最低权限（`SERVICE_STOP`、`SERVICE_PAUSE_CONTINUE`、`SERVICE_INTERROGATE` 或 `SERVICE_USER_DEFINED_CONTROL`），打开服务，调用 `ControlServiceExW`，并关闭句柄。对于 [**vbServiceControlStop**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlStop)，原因代码填充为 `SERVICE_STOP_REASON_FLAG_PLANNED | SERVICE_STOP_REASON_MAJOR_NONE | SERVICE_STOP_REASON_MINOR_NONE`（"计划停止，无特定原因"）。自定义原因代码目前未暴露。

如果无法打开SCM（通常是权限问题）、服务未安装或 `ControlServiceExW` 失败，引发运行时错误5，附带描述性消息。

### GetConfiguredService

按 [**Name**](/official/Reference/WinServicesLib/ServiceManager#name) 查找先前配置的 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager)。

语法：**Services.GetConfiguredService**( *Name* ) **As** [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager)

*Name*
: *必需* 与通过 [**ConfigureNew**](#configurenew) 创建的 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) 实例之一的 [**Name**](/official/Reference/WinServicesLib/ServiceManager#name) 匹配的 **String**。

如果没有配置的服务具有该名称，引发运行时错误5 *"service not found"*。典型用途在 `Sub Main` 的交互/安装分支中，UI按钮需要操作单个已配置服务：

```vb
Private Sub btnInstallA_Click()
    If App.IsInIDE() Then Err.Raise 5, , "Run the compiled EXE as administrator."
    Services.GetConfiguredService("MyServiceA").Install
End Sub
```

尽管使用 `Property Get` 语法，查找是按名称参数化的——在源代码中读来像属性，但行为像函数。

### InstallAll

遍历通过 [**ConfigureNew**](#configurenew) 创建的每个 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) 并调用其 [**Install**](/official/Reference/WinServicesLib/ServiceManager#install) 方法。为EXE在单次调用中注册其托管的每个服务的典型情况提供便利。

语法：**Services.InstallAll**

::: important
**InstallAll** 在 `HKEY_LOCAL_MACHINE` 下写入注册表条目，需要管理员权限。通常的做法是从提升的安装程序中调用一次。
:::

[**ServiceManager.Install**](/official/Reference/WinServicesLib/ServiceManager#install) 内部引发的每服务错误会传播出 **InstallAll** 并中止批量操作——没有每服务的 `On Error Resume Next` 包装。失败前已安装的服务保持已安装状态。

### LaunchService

按名称启动已安装的服务，并可选地将启动参数传递到其 [**ServiceManager.LaunchArgs**](/official/Reference/WinServicesLib/ServiceManager#launchargs) 字段。

语法：**Services.LaunchService** *ServiceName* [, *LaunchArgs* ... ]

*ServiceName*
: *必需* 命名已安装服务的 **String**。

*LaunchArgs*
: *可选* 通过 `StartServiceW` 转发给服务的 `ParamArray` 值。每个值转换为 **String**；服务端的 [**ITbService.EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 通过 [**ServiceManager.LaunchArgs**](/official/Reference/WinServicesLib/ServiceManager#launchargs) 读取它们。

该方法以 `SC_MANAGER_CONNECT` 打开SCM，以 `SERVICE_START` 打开服务，调用 `StartServiceW`。如果无法打开SCM、服务未安装、调用者缺少 *Start* 权限或 `StartServiceW` 失败（通常因为服务已在运行），引发运行时错误5。

启动参数机制通常用于以共享密钥控制启动：

```vb
' UI端——使用密码参数启动服务：
Services.LaunchService "MyService", "MySecretPassword"

' 服务端——在 EntryPoint 内检查参数：
Sub EntryPoint(ByVal ServiceManager As ServiceManager) _
        Implements ITbService.EntryPoint
    If Join(ServiceManager.LaunchArgs) <> "MySecretPassword" Then
        ServiceManager.ReportStatus vbServiceStatusStopped, &H12345678
        Exit Sub
    End If
    ' ...稳态工作
End Sub
```

这可以防止从服务控制面板小程序（不带额外参数调用 `StartServiceW`）意外启动。

### QueryStateOfService

返回已安装服务的全新 [**ServiceState**](/official/Reference/WinServicesLib/ServiceState) 快照。

语法：**Services.QueryStateOfService**( *ServiceName* ) **As** [**ServiceState**](/official/Reference/WinServicesLib/ServiceState)

*ServiceName*
: *必需* 命名已安装服务的 **String**。

如果服务未安装或无法打开SCM，引发运行时错误5。返回的 [**ServiceState**](/official/Reference/WinServicesLib/ServiceState) 是一次性快照；要随时间监控服务状态，在每个采样间隔再次调用 **QueryStateOfService**。

```vb
Private Sub timerRefresh_Timer()
    On Error Resume Next
    Dim state As ServiceState
    Set state = Services.QueryStateOfService("MyService")
    If Err.Number = 0 Then
        lblStatus.Caption = state.CurrentStateText _
                          & " (PID " & state.ProcessId & ")"
    Else
        lblStatus.Caption = "not installed"
    End If
End Sub
```

### RunServiceDispatcher

将主线程控制权交给SCM并运行服务调度器循环。**阻塞**直到SCM发出关闭信号。

语法：**Services.RunServiceDispatcher**

内部从每个已配置的 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) 构建 `SERVICE_TABLE_ENTRYW` 数组并调用 `StartServiceCtrlDispatcherW`。SCM为用户（或 *Start* 配置）想要启动的每个服务生成一个新线程，并在该线程上调用包的调度器跳板；跳板报告 `StartPending`，可选地以STA模式初始化COM（由 [**ServiceManager.AutoInitializeCOM**](/official/Reference/WinServicesLib/ServiceManager#autoinitializecom) 控制），然后调用用户的 [**ITbService.EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint)。

如果 `StartServiceCtrlDispatcherW` 返回零，引发运行时错误5 *"Unable to start the service dispatcher"*。通常原因是EXE被正常启动而非由SCM启动——调度器仅在进程是服务宿主时工作。`Sub Main` 中常规的 `If InStr(Command, "-startService") > 0 Then` 门控可避免此错误。

### UninstallAll

遍历通过 [**ConfigureNew**](#configurenew) 创建的每个 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) 并调用其 [**Uninstall**](/official/Reference/WinServicesLib/ServiceManager#uninstall) 方法。

语法：**Services.UninstallAll**

::: important
**UninstallAll** 在 `HKEY_LOCAL_MACHINE` 下写入注册表条目，需要管理员权限。每服务错误会中止批量操作；失败前已卸载的服务保持已卸载状态。
:::

## 枚举器

### _NewEnum

提供跨项目已配置的每个 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) 的 `For Each` 支持。

语法：**For Each** *manager* **In Services**

```vb
Dim manager As ServiceManager
For Each manager In Services
    Debug.Print manager.Name, manager.Description
Next
```

枚举顺序为插入顺序——服务以 [**ConfigureNew**](#configurenew) 创建的顺序出现。

## 另见

- [WinServicesLib 包](/official/Reference/WinServicesLib/) -- 概述、生命周期、双线程分离、与WinEventLogLib/WinNamedPipesLib的集成
- [ServiceManager 类](/official/Reference/WinServicesLib/ServiceManager) -- **ConfigureNew** 返回的每服务配置对象
- [ServiceState 类](/official/Reference/WinServicesLib/ServiceState) -- **QueryStateOfService** 返回的状态快照
- [ServiceControlCodeConstants 枚举](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants) -- **ControlService** 接受的代码