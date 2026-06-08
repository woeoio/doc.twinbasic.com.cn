---
title: ServiceState
parent: "WinServicesLib 包"
permalink: /tB/Packages/WinServicesLib/ServiceState
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4b649659-5bf5-44a8-a413-17ec7424a379'
  PropagateID: '4b649659-5bf5-44a8-a413-17ec7424a379'
  ReservedCode1: 'fa784292-8b0c-45d1-8719-c94a89a18513'
  ReservedCode2: 'fa784292-8b0c-45d1-8719-c94a89a18513'
---

# ServiceState 类

已安装服务当前状态的只读快照，由SCM报告。由 [**Services.QueryStateOfService**](/official/Reference/WinServicesLib/Services#querystateofservice) 返回；用户不可直接实例化。

```vb
Dim state As ServiceState
Set state = Services.QueryStateOfService("MyService")

Debug.Print state.CurrentStateText, "PID " & state.ProcessId
```

快照在**构造时一次性**获取，永不刷新。要随时间监控服务，在每个采样间隔再次调用 [**Services.QueryStateOfService**](/official/Reference/WinServicesLib/Services#querystateofservice)——通常从低频率Timer。

构造函数以 `SC_MANAGER_CONNECT` 打开SCM，以 `SERVICE_QUERY_STATUS` 打开服务，调用 `QueryServiceStatusEx(SC_STATUS_PROCESS_INFO, ...)`，并将结果复制到私有缓冲区。三种失败模式——SCM打开失败、服务未安装、状态查询失败——都引发运行时错误5，附带描述性消息。如果UI需要区分"服务存在且正在运行"和"服务未安装"，用 `On Error Resume Next` 包装调用：

```vb
Private Function GetStateText(ByVal serviceName As String) As String
    On Error Resume Next
    Dim state As ServiceState
    Set state = Services.QueryStateOfService(serviceName)
    If Err.Number = 0 Then
        GetStateText = state.CurrentStateText
    Else
        GetStateText = "not installed"
    End If
End Function
```

## 属性

### CheckPoint

SCM报告的 `dwCheckPoint` 值。**Long**。

处于 *Pending* 状态（[**StartPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStartPending)、[**StopPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopPending)、[**PausePending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusPausePending)、[**ContinuePending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusContinuePending)）的服务报告周期性递增的 **CheckPoint**，使得SCM可以区分缓慢但正在进行的转换与挂起的服务。包的 [**ServiceManager.ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus) 在服务处于待处理状态时自动递增该字段，在 [**Running**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusRunning) 或 [**Stopped**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopped) 时重置为 **0**。

### ControlsAccepted

指示服务告知SCM它接受哪些控制代码的 `SERVICE_ACCEPT_*` 标志位掩码。**Long**。

::: info
尽管底层SCM字段是标志位掩码，该属性在此版本中类型为普通 **Long** 而非类型化枚举。位值遵循Win32文档记录的常量——`SERVICE_ACCEPT_STOP`（1）、`SERVICE_ACCEPT_PAUSE_CONTINUE`（2）、`SERVICE_ACCEPT_SHUTDOWN`（4）、`SERVICE_ACCEPT_PARAMCHANGE`（8）、`SERVICE_ACCEPT_NETBINDCHANGE`（16）、`SERVICE_ACCEPT_HARDWAREPROFILECHANGE`（32）、`SERVICE_ACCEPT_POWEREVENT`（64）、`SERVICE_ACCEPT_SESSIONCHANGE`（128）、`SERVICE_ACCEPT_PRESHUTDOWN`（256）等。
:::

### CurrentState

SCM报告的 `dwCurrentState` 值。**Long**。

::: info
该属性在此版本中类型为普通 **Long** 而非 [**ServiceStatusConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants)。数值*确实*与枚举匹配（例如 `4` 是 [**vbServiceStatusRunning**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusRunning)），因此类似 `CType(state.CurrentState, ServiceStatusConstants)` 的转换可在需要时恢复类型化访问。显示用途时 [**CurrentStateText**](#currentstatetext) 通常更方便。
:::

### CurrentStateText

[**CurrentState**](#currentstate) 的人类可读渲染。**String**。

映射：

| 状态值 | 文本 |
|-------------|------|
| [**vbServiceStatusContinuePending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusContinuePending) | `CONTINUING` |
| [**vbServiceStatusPausePending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusPausePending)       | `PAUSING` |
| [**vbServiceStatusPaused**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusPaused)                   | `PAUSED` |
| [**vbServiceStatusRunning**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusRunning)                 | `RUNNING` |
| [**vbServiceStatusStartPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStartPending)       | `STARTING` |
| [**vbServiceStatusStopPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopPending)         | `STOPPING` |
| [**vbServiceStatusStopped**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopped)                 | `STOPPED` |

任何未识别的状态值渲染为 `UNKNOWN STATE (<n>)`。

### ExitCode

SCM报告的 `dwWin32ExitCode` 值。**Long**。

对于正常停止的服务此值为 **0**（`NO_ERROR`）；对于因错误停止的服务，此值是Win32错误代码或哨兵值 `ERROR_SERVICE_SPECIFIC_ERROR`（1066）——此时真实代码在 [**ServiceSpecificExitCode**](#servicespecificexitcode) 中。

### Flags

SCM报告的 `dwServiceFlags` 值。**Long**。

当前仅文档记录了一个位——`SERVICE_RUNS_IN_SYSTEM_PROCESS`（1），当服务托管在系统进程（`services.exe`）内时设置。

### ProcessId

托管服务的OS进程ID，如果服务未运行则为 **0**。**Long**。

用于与任务管理器或 `tasklist /svc` 输出交叉引用，以及作为避免字符串比较 [**CurrentStateText**](#currentstatetext) 的快速"服务是否存活"检查。

### ServiceSpecificExitCode

SCM报告的 `dwServiceSpecificExitCode` 值。**Long**。

仅当 [**ExitCode**](#exitcode) 等于 `ERROR_SERVICE_SPECIFIC_ERROR`（1066）时有意义；否则该字段为 **0**，应忽略。通过 [**ServiceManager.ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus) 报告自定义错误代码的服务通过包的机制填充此字段。

### Type

SCM报告的服务类型。[**ServiceTypeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants)。

SCM为服务记录的值，对于twinBASIC服务通常为 [**tbServiceTypeOwnProcess**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeOwnProcess) 或 [**tbServiceTypeShareProcess**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeShareProcess)。

### WaitHint

SCM报告的 `dwWaitHint` 值（毫秒）。**Long**。

仅在服务处于 *Pending* 状态时有意义——它是服务告知SCM待处理转换预计所需时间的上限估计。SCM将 [**CheckPoint**](#checkpoint) 和 **WaitHint** 一起使用来确定待处理的服务是否在取得进展。

## 另见

- [WinServicesLib 包](/official/Reference/WinServicesLib/) -- 概述、生命周期
- [Services.QueryStateOfService 方法](/official/Reference/WinServicesLib/Services#querystateofservice) -- 获取 **ServiceState** 实例的唯一方式
- [ServiceStatusConstants 枚举](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) -- **CurrentState** 可取的值
- [ServiceTypeConstants 枚举](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants) -- **Type** 可取的值