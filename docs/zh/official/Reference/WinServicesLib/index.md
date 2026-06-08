---
title: "WinServicesLib 包"
parent: Packages
nav_order: 10
permalink: /tB/Packages/WinServicesLib/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '54043392-0823-4951-bc54-4d897d683c04'
  PropagateID: '54043392-0823-4951-bc54-4d897d683c04'
  ReservedCode1: '58bbc3da-75d0-45af-afbe-0c4f398e7921'
  ReservedCode2: '58bbc3da-75d0-45af-afbe-0c4f398e7921'
---

# WinServicesLib 包

**WinServicesLib** 内置包封装了Windows服务控制管理器，使 twinBASIC EXE可以作为一个或多个Windows服务运行。同一EXE通常在正常启动时兼作安装/控制面板工具，在由SCM启动时作为服务宿主；两种模式共存于单个 `Sub Main` 中。该包处理SCM握手、服务线程调度、控制代码路由和安装/卸载的注册表管道。

该包是随 twinBASIC 一起发布的内置包。通过 Project → References（**Ctrl-T**）→ Available Packages 添加。

## 什么是Windows服务

*Windows服务*是由**服务控制管理器（SCM）**监督的长时间运行的后台进程。服务可以在任何用户登录之前启动，在专用账户（`LocalSystem`、`LocalService`、`NetworkService` 或任何显式用户）下运行，并响应从服务控制面板小程序（`services.msc`）、`sc.exe` 命令行工具或编程等效方式发出的生命周期命令——*Start*、*Stop*、*Pause*、*Continue*。

服务托管EXE通过一小部分Win32入口点与SCM通信：`StartServiceCtrlDispatcherW` 将进程移交给SCM，`RegisterServiceCtrlHandlerExW` 钩住控制代码回调，`SetServiceStatus` 报告状态转换，`CreateServiceW` / `DeleteService` 在系统数据库中注册/注销服务。**WinServicesLib** 封装了所有这些——消费者为每个服务写一个类，通过包的协调器声明它，包处理每个Win32细节。

## 生命周期

服务托管EXE经历四个阶段：

1. **配置**——启动时，通过调用 [**Services.ConfigureNew**](/official/Reference/WinServicesLib/Services#configurenew) 并填充返回的 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) 来声明EXE知道如何托管的每个服务。配置纯粹在内存中，不触及SCM；它构建调度器在EXE*如果*作为服务宿主启动时将使用的映射。
2. **安装**（一次性，需提升权限）——通过 [**ServiceManager.Install**](/official/Reference/WinServicesLib/ServiceManager#install) 或 [**Services.InstallAll**](/official/Reference/WinServicesLib/Services#installall) 在系统数据库中注册已配置的服务。这会在 `HKLM\SYSTEM\CurrentControlSet\Services\<Name>` 下写入指向EXE的注册表条目，需要管理员权限。通常从安装程序运行。
3. **作为服务运行**（当SCM启动EXE时）——EXE的 `Sub Main` 检测到它作为服务宿主启动（通常通过检查 `Command` 中的已知参数如 `"-startService"`）并调用 [**Services.RunServiceDispatcher**](/official/Reference/WinServicesLib/Services#runservicedispatcher)。这会阻塞主线程在 `StartServiceCtrlDispatcherW` 内部直到SCM发出关闭信号。SCM为每个服务生成一个单独的服务线程并调用包的调度器跳板；跳板报告 `StartPending`，然后调用用户在服务线程上的 [**ITbService.EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint)。
4. **正常运行**（当用户启动EXE时）——EXE的 `Sub Main` *不会*看到服务宿主参数，并继续执行EXE为安装、状态显示或交互测试提供的任何UI/CLI逻辑。相同的已配置 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) 实例仍可通过 [**Services.GetConfiguredService**](/official/Reference/WinServicesLib/Services#getconfiguredservice) 和 [**For Each**](/official/Reference/WinServicesLib/Services#_newenum) 枚举器访问，这就是使单EXE安装即托管设计成为可能的原因。

规范的 `Sub Main` 骨架：

```vb
Module Startup
    Public Sub Main()
        With Services.ConfigureNew
            .Name             = "MyService"
            .Description      = "An example twinBASIC service"
            .Type             = tbServiceTypeOwnProcess
            .InstallStartMode = tbServiceStartOnDemand
            .InstallCmdLine   = """" & App.ModulePath & """ -startService"
            .InstanceCreator  = New ServiceCreator(Of MyService)
        End With

        If InStr(Command, "-startService") > 0 Then
            Services.RunServiceDispatcher       ' 阻塞直到SCM发出关闭信号
        Else
            MainForm.Show                       ' 控制面板/安装UI
        End If
    End Sub
End Module
```

`-startService` 鉴别参数是EXE知道自己处于哪种模式的常规方式。`InstallCmdLine` 字段嵌入此参数，以便SCM在启动服务时传回；用户启动的路径不会看到此类参数，会落入UI分支。

## 双线程分离

当SCM将EXE作为服务宿主启动时，twinBASIC的运行时为每个服务运行**两个线程**：

- **服务线程**——由SCM生成的运行用户 [**ITbService.EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 的线程。这是服务做实际工作的地方。该线程由 `StartServiceCtrlDispatcherW` 的机制创建；它*不是*EXE的主线程。
- **调度器线程**——EXE的主线程，也就是当SCM有控制代码要传递（*Stop*、*Pause*、*Continue*、…）时调用的线程。包通过 `RegisterServiceCtrlHandlerExW` 将控制路由到调用用户 [**ITbService.ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 的跳板。

因此两个方法*并发*运行：当 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 在服务线程上做服务工作时，[**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 在调度器线程上空闲等待，SCM按需唤醒它以传递控制代码。两个方法必须通过服务类上的共享 `Public` 标志——`IsStopping`、`IsPaused` 等——进行协调，因为包无法通过用户自己的代码路径之外的方式停止服务线程。

```vb
Class MyService
    Implements ITbService

    Public IsStopping As Boolean

    Sub EntryPoint(ByVal ServiceManager As ServiceManager) _
            Implements ITbService.EntryPoint
        ServiceManager.ReportStatus vbServiceStatusRunning
        Do Until IsStopping
            ' …做工作，然后用 WaitForSingleObject / Sleep 等让出
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
                IsStopping = True       ' 唤醒另一个线程上的 EntryPoint 循环
        End Select
    End Sub

    Sub StartupFailed(ByVal ServiceManager As ServiceManager) _
            Implements ITbService.StartupFailed
        ' …可选的失败报告钩子
    End Sub
End Class
```

共享标志模式是文档记录的协调机制——没有内置的取消原语。对于托管本质上由消息循环驱动的对象（[**NamedPipeServer**](/official/Reference/WinNamedPipesLib/NamedPipeServer)、窗口消息处理程序、…）的服务，该对象自己的 *Stop* 信号方法通常从 [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 调用；参见 [WinNamedPipesLib 服务托管惯用法](/official/Reference/WinNamedPipesLib/#service-host-idiom)获取完整示例。

## 与姐妹"winlibs"包的集成

`WinServicesLib` 最常与 [**WinEventLogLib**](/official/Reference/WinEventLogLib/) 和 [**WinNamedPipesLib**](/official/Reference/WinNamedPipesLib/) 一起使用——Windows服务通常需要一个地方来写入诊断事件（Windows事件日志）和一种与非服务进程通信的方式（命名管道）。三个包集成良好：

- **日志记录**——每个服务类可以通过[组合委托惯用法](/official/Reference/WinEventLogLib/#composition-delegation-idiom)（`Implements EventLog(Of EVENTS, CATEGORIES) Via EventLog = New EventLog(...)`）混入 [**EventLog**](/official/Reference/WinEventLogLib/EventLog) 成员，因此 [**LogSuccess**](/official/Reference/WinEventLogLib/EventLog#logsuccess) / [**LogFailure**](/official/Reference/WinEventLogLib/EventLog#logfailure) 在 `EntryPoint` 和 `ChangeState` 中读来就像普通方法调用。事件在服务账户（通常为 `LocalSystem`）下触发，事件查看器根据EXE中嵌入的消息表资源渲染。
- **IPC**——托管在服务内的 [**NamedPipeServer**](/official/Reference/WinNamedPipesLib/NamedPipeServer) 使用 [**ManualMessageLoopEnter**](/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopenter) 作为 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 的阻塞原语，从 [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 调用 [**ManualMessageLoopLeave**](/official/Reference/WinNamedPipesLib/NamedPipeServer#manualmessageloopleave) 成为 *Stop* 信号机制。参见[在Windows服务中托管](/official/Reference/WinNamedPipesLib/#service-host-idiom)了解完整模式，包括暂停/继续和调度器线程/服务线程交互。

## 安装与提升权限

[**Install**](/official/Reference/WinServicesLib/ServiceManager#install) 和 [**Uninstall**](/official/Reference/WinServicesLib/ServiceManager#uninstall)（及其批量辅助方法 [**Services.InstallAll**](/official/Reference/WinServicesLib/Services#installall) / [**Services.UninstallAll**](/official/Reference/WinServicesLib/Services#uninstallall)）调用 `CreateServiceW` / `DeleteService`，需要以 `SC_MANAGER_CREATE_SERVICE` 打开的SCM句柄。两者仅在调用进程以**管理员权限**运行时成功。典型项目结构：

- 独立安装程序EXE（或同一EXE内的安装模式，以 `-install` 命令行参数控制）以提升权限运行并调用 [**Install**](/official/Reference/WinServicesLib/ServiceManager#install) / [**Uninstall**](/official/Reference/WinServicesLib/ServiceManager#uninstall) 加一次性 [**EventLog.Register**](/official/Reference/WinEventLogLib/EventLog#register) 调用。
- 服务宿主EXE本身运行时不需要提升权限（SCM以服务配置的任何账户启动它）。
- 控制面板/交互式UI也不需要提升权限——它可以使用 [**Services.LaunchService**](/official/Reference/WinServicesLib/Services#launchservice) 和 [**Services.ControlService**](/official/Reference/WinServicesLib/Services#controlservice)，只要用户对相关服务有标准的 *Start* / *Stop* 权限（默认ACL授予 **LocalSystem**、**Administrators** 和运行中的交互用户对*交互*服务的此权限）。

在twinBASIC IDE内运行时调用 [**Install**](/official/Reference/WinServicesLib/ServiceManager#install) 会因SCM访问错误而失败——IDE很少以提升权限运行。以管理员身份运行编译后的EXE，或将调用包装在 `If App.IsInIDE() Then Err.Raise 5, , "Run the compiled EXE as administrator."` 守卫中。

## 类与接口

- [Services](/official/Reference/WinServicesLib/Services) -- 预声明单例协调器：[**ConfigureNew**](/official/Reference/WinServicesLib/Services#configurenew)、[**RunServiceDispatcher**](/official/Reference/WinServicesLib/Services#runservicedispatcher)、批量安装/卸载辅助方法，以及运行时控制方法（[**LaunchService**](/official/Reference/WinServicesLib/Services#launchservice)、[**ControlService**](/official/Reference/WinServicesLib/Services#controlservice)、[**QueryStateOfService**](/official/Reference/WinServicesLib/Services#querystateofservice)）
- [ServiceManager](/official/Reference/WinServicesLib/ServiceManager) -- 每个已配置服务一个；持有SCM关心的字段（名称、描述、类型、启动模式、命令行、依赖项、…）以及服务用于通知SCM状态转换的 [**ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus) 调用
- [ServiceCreator](/official/Reference/WinServicesLib/ServiceCreator) -- 调度器用于按需实例化每个服务类的通用 [**ServiceCreator**](/official/Reference/WinServicesLib/ServiceCreator)`(Of T)` 工厂；*T* 必须实现 [**ITbService**](/official/Reference/WinServicesLib/ITbService)
- [ServiceState](/official/Reference/WinServicesLib/ServiceState) -- 由 [**Services.QueryStateOfService**](/official/Reference/WinServicesLib/Services#querystateofservice) 返回的只读状态快照，给出已安装服务的SCM报告状态和进程ID
- [ITbService](/official/Reference/WinServicesLib/ITbService) -- 每个服务类实现的接口：[**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint)、[**StartupFailed**](/official/Reference/WinServicesLib/ITbService#startupfailed)、[**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate)

## 枚举

- [枚举](/official/Reference/WinServicesLib/Enumerations/) -- 四个面向用户的枚举：[**ServiceTypeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants)、[**ServiceStartConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants)、[**ServiceControlCodeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants)、[**ServiceStatusConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants)