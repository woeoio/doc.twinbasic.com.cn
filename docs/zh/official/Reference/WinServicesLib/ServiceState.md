---
title: ServiceState
parent: WinServicesLib Package
permalink: /tB/Packages/WinServicesLib/ServiceState
---

# ServiceState class
A read-only snapshot of an installed service's current state as reported by the SCM. Returned by [**Services.QueryStateOfService**](/official/Reference/WinServicesLib/Services#querystateofservice); not directly user-instantiable.

```vb
Dim state As ServiceState
Set state = Services.QueryStateOfService("MyService")

Debug.Print state.CurrentStateText, "PID " & state.ProcessId
```

The snapshot is taken **once at construction time** and never refreshed. To monitor a service over time, call [**Services.QueryStateOfService**](/official/Reference/WinServicesLib/Services#querystateofservice) again at each sampling interval --- typically from a low-frequency Timer.

The constructor opens the SCM with `SC_MANAGER_CONNECT`, opens the service with `SERVICE_QUERY_STATUS`, calls `QueryServiceStatusEx(SC_STATUS_PROCESS_INFO, ...)`, and copies the result into a private buffer. The three failure modes --- SCM open failed, service not installed, status query failed --- all raise run-time error 5 with a descriptive message. Wrap the call in `On Error Resume Next` if the UI needs to distinguish "service exists and is running" from "service is not installed":

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

## Properties

### CheckPoint

The SCM-reported `dwCheckPoint` value. **Long**.

Services in a *Pending* state ([**StartPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStartPending), [**StopPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopPending), [**PausePending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusPausePending), [**ContinuePending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusContinuePending)) report a periodically-incrementing **CheckPoint** so the SCM can tell a slow-but-progressing transition from a hung service. The package's [**ServiceManager.ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus) auto-increments the field while the service is in a pending state and resets it to **0** on [**Running**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusRunning) or [**Stopped**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopped).

### ControlsAccepted

A bitmask of `SERVICE_ACCEPT_*` flags indicating which control codes the service has told the SCM it accepts. **Long**.

::: info
Although the underlying SCM field is a flag bitmask, the property is typed plain **Long** in this release rather than as a typed enum. The bit values follow the Win32 documented constants --- `SERVICE_ACCEPT_STOP` (1), `SERVICE_ACCEPT_PAUSE_CONTINUE` (2), `SERVICE_ACCEPT_SHUTDOWN` (4), `SERVICE_ACCEPT_PARAMCHANGE` (8), `SERVICE_ACCEPT_NETBINDCHANGE` (16), `SERVICE_ACCEPT_HARDWAREPROFILECHANGE` (32), `SERVICE_ACCEPT_POWEREVENT` (64), `SERVICE_ACCEPT_SESSIONCHANGE` (128), `SERVICE_ACCEPT_PRESHUTDOWN` (256), and so on.
:::

### CurrentState

The SCM-reported `dwCurrentState` value. **Long**.

::: info
The property is typed plain **Long** in this release rather than as [**ServiceStatusConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants). The numeric values *do* match the enum (e.g. `4` is [**vbServiceStatusRunning**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusRunning)), so a cast such as `CType(state.CurrentState, ServiceStatusConstants)` recovers typed access if needed. For display purposes [**CurrentStateText**](#currentstatetext) is usually more convenient.
:::

### CurrentStateText

A human-readable rendering of [**CurrentState**](#currentstate). **String**.

The mapping:

| State value | Text |
|-------------|------|
| [**vbServiceStatusContinuePending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusContinuePending) | `CONTINUING` |
| [**vbServiceStatusPausePending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusPausePending)       | `PAUSING` |
| [**vbServiceStatusPaused**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusPaused)                   | `PAUSED` |
| [**vbServiceStatusRunning**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusRunning)                 | `RUNNING` |
| [**vbServiceStatusStartPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStartPending)       | `STARTING` |
| [**vbServiceStatusStopPending**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopPending)         | `STOPPING` |
| [**vbServiceStatusStopped**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopped)                 | `STOPPED` |

Any unrecognised state value is rendered as `UNKNOWN STATE (<n>)`.

### ExitCode

The SCM-reported `dwWin32ExitCode` value. **Long**.

For a normally-stopped service this is **0** (`NO_ERROR`); for a service that stopped due to an error, this is either a Win32 error code or the sentinel `ERROR_SERVICE_SPECIFIC_ERROR` (1066) --- in which case the real code is in [**ServiceSpecificExitCode**](#servicespecificexitcode).

### Flags

The SCM-reported `dwServiceFlags` value. **Long**.

Only one bit is currently documented --- `SERVICE_RUNS_IN_SYSTEM_PROCESS` (1), set when the service is hosted inside the system process (`services.exe`).

### ProcessId

The OS process ID hosting the service, or **0** if the service is not running. **Long**.

Useful for cross-referencing against Task Manager or `tasklist /svc` output, and as a quick "is the service alive?" check that avoids string-comparing [**CurrentStateText**](#currentstatetext).

### ServiceSpecificExitCode

The SCM-reported `dwServiceSpecificExitCode` value. **Long**.

Meaningful only when [**ExitCode**](#exitcode) equals `ERROR_SERVICE_SPECIFIC_ERROR` (1066); otherwise the field is **0** and should be ignored. Services that report custom error codes through [**ServiceManager.ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus) populate this field through the package's machinery.

### Type

The SCM-reported service type. [**ServiceTypeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants).

The value the SCM has on file for the service, typically [**tbServiceTypeOwnProcess**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeOwnProcess) or [**tbServiceTypeShareProcess**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeShareProcess) for twinBASIC services.

### WaitHint

The SCM-reported `dwWaitHint` value in milliseconds. **Long**.

Only meaningful while the service is in a *Pending* state --- it is the upper-bound estimate the service has told the SCM the pending transition will take. The SCM uses [**CheckPoint**](#checkpoint) and **WaitHint** together to determine whether a pending service is making progress.

## See Also

- [WinServicesLib package](/official/Reference/WinServicesLib/) -- overview, lifecycle
- [Services.QueryStateOfService method](/official/Reference/WinServicesLib/Services#querystateofservice) -- the only way to obtain a **ServiceState** instance
- [ServiceStatusConstants enum](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) -- the values **CurrentState** can take
- [ServiceTypeConstants enum](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants) -- the values **Type** can take
