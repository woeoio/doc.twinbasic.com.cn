---
title: ServiceManager
parent: WinServicesLib Package
permalink: /tB/Packages/WinServicesLib/ServiceManager
---

# ServiceManager class

The per-service configuration object. One [**ServiceManager**](/en/official/Reference/WinServicesLib/) describes one Windows service the EXE knows how to host --- its [**Name**](#name), [**Description**](#description), service [**Type**](#type), [**InstallStartMode**](#installstartmode), [**InstanceCreator**](#instancecreator), and the optional fields the SCM cares about --- and exposes the methods that act on a single service: [**Install**](#install), [**Uninstall**](#uninstall), and the [**ReportStatus**](#reportstatus) call the service uses to inform the SCM of state transitions while running.

::: info
Do not construct **ServiceManager** instances directly. Call [**Services.ConfigureNew**](/en/official/Reference/WinServicesLib/Services#configurenew) instead --- it allocates a fresh manager and registers it in the package's internal collection so the dispatcher can find it.
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

See the package [overview](/en/official/Reference/WinServicesLib/) for the broader lifecycle, the [two-thread split](/en/official/Reference/WinServicesLib/#two-thread-split), and the elevation rules around installation.

## Fields

### LaunchArgs

The launch-time arguments the SCM forwarded to the service. **String()**. Populated by the package's dispatcher trampoline when the SCM invokes the service-thread entry-point; _not_ a configuration field. The service-thread [**ITbService.EntryPoint**](/en/official/Reference/WinServicesLib/ITbService#entrypoint) reads it to discover the arguments that [**Services.LaunchService**](/en/official/Reference/WinServicesLib/Services#launchservice) (or the SCM, or `sc.exe`) passed in.

`LaunchArgs(0)` is the _first user-supplied_ argument --- the SCM-supplied service name that comes through as `argv[0]` is dropped before the array is populated, so the indexing matches the caller's mental model.

```vb
Sub EntryPoint(ByVal ServiceManager As ServiceManager) _
        Implements ITbService.EntryPoint
    If Join(ServiceManager.LaunchArgs) <> "MySecretPassword" Then
        ServiceManager.ReportStatus vbServiceStatusStopped, &H12345678
        Exit Sub
    End If
    ' ...steady-state work
End Sub
```

## Properties

### AutoInitializeCOM

Whether the dispatcher trampoline calls `CoInitializeEx(NULL, COINIT_APARTMENTTHREADED)` on the service thread before invoking [**ITbService.EntryPoint**](/en/official/Reference/WinServicesLib/ITbService#entrypoint). **Boolean**, default **True**.

Set to **False** if the service needs a different apartment model --- for example, a service that creates an MTA worker pool. The service must then call `CoInitializeEx` itself from its [**EntryPoint**](/en/official/Reference/WinServicesLib/ITbService#entrypoint) before touching COM-aware objects.

### Description

The human-readable description listed in `services.msc` and `sc.exe query`. **String**, no default.

The value is written to the SCM by [**Install**](#install) via `ChangeServiceConfig2W(SERVICE_CONFIG_DESCRIPTION)` and is applied to a fresh service or refreshed on every re-install. The field must be assigned before [**Install**](#install) is called; changing it at run-time has no effect until the next install.

### DependentServices

A list of service names this service depends on. **Variant()**, no default.

Pass an `Array("OtherSvc1", "OtherSvc2")`. When the SCM is asked to start the service, it auto-starts the listed dependencies first; if any dependency fails to start, the SCM aborts the start of this service. The package packs the array into the double-null-terminated string that `CreateServiceW` expects.

```vb
.DependentServices = Array("MSMQ", "LanmanServer")
```

### InstallCmdLine

The command line the SCM will use when launching the service-host EXE. **String**, default `"""<App.ModulePath>"""` (the running EXE path, quoted).

The default suffices only when the EXE always runs as a service. The conventional pattern is to **override the default** to add a discriminator argument so the EXE's `Sub Main` can tell which mode it is in:

```vb
.InstallCmdLine = """" & App.ModulePath & """ -startService"
```

The matching `If InStr(Command, "-startService") > 0 Then Services.RunServiceDispatcher` branch in `Sub Main` is what makes the same EXE work both as installer / control-panel UI (when launched normally) and as service host (when launched by the SCM).

The value is captured into the SCM database at [**Install**](#install) time. Changing it after install requires uninstalling and re-installing the service.

### InstallStartMode

The SCM start mode the service is registered with. [**ServiceStartConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants), default [**tbServiceStartOnDemand**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants#tbServiceStartOnDemand).

Typical settings:

- [**tbServiceStartOnDemand**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants#tbServiceStartOnDemand) -- the service is **not** started automatically; user / installer / [**Services.LaunchService**](/en/official/Reference/WinServicesLib/Services#launchservice) starts it on demand.
- [**tbServiceStartAuto**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants#tbServiceStartAuto) -- the SCM starts the service at system boot.
- [**tbServiceStartDisabled**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants#tbServiceStartDisabled) -- the service cannot be started until its start mode is changed.

The driver-only modes ([**tbServiceStartBoot**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants#tbServiceStartBoot), [**tbServiceStartDriverSystem**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants#tbServiceStartDriverSystem)) are not meaningful for user-mode twinBASIC services.

### InstanceCreator

The factory the dispatcher uses to create the [**ITbService**](/en/official/Reference/WinServicesLib/ITbService) instance for this service when the SCM launches it. [**IServiceCreator**](/en/official/Reference/WinServicesLib/ServiceCreator), no default.

Assigned `New ServiceCreator(Of MyServiceClass)` where `MyServiceClass` is the user's [**ITbService**](/en/official/Reference/WinServicesLib/ITbService) implementation:

```vb
.InstanceCreator = New ServiceCreator(Of MyService)
```

[**RunServiceDispatcher**](/en/official/Reference/WinServicesLib/Services#runservicedispatcher) calls `InstanceCreator.CreateInstance()` once per service start. **InstanceCreator** is read-write --- the underlying private interface accepts both **Let** and **Set** assignment, so either syntax works.

If only [**Install**](#install) / [**Uninstall**](#uninstall) need to run (e.g. inside a stand-alone installer), **InstanceCreator** can be left **Nothing** --- the dispatcher only needs it when the SCM actually starts the service.

### Name

The service's name in the SCM database, used by `services.msc` and `sc.exe`. **String**, no default.

The name is what the SCM stores at `HKLM\SYSTEM\CurrentControlSet\Services\<Name>`; it is also the name [**Services.LaunchService**](/en/official/Reference/WinServicesLib/Services#launchservice), [**Services.ControlService**](/en/official/Reference/WinServicesLib/Services#controlservice), and [**Services.QueryStateOfService**](/en/official/Reference/WinServicesLib/Services#querystateofservice) take as their _ServiceName_ parameter. The same value is used for the SCM's _DisplayName_ --- the package does not currently expose a distinct display name.

### SupportsPausing

Whether the SCM is told that the service accepts [**SERVICE_CONTROL_PAUSE**](/en/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlPause) / [**SERVICE_CONTROL_CONTINUE**](/en/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlContinue) notifications. **Boolean**, default **False**.

Setting this property immediately resyncs the cached `SERVICE_STATUS` to the SCM via `SetServiceStatus`, so toggling it from inside [**EntryPoint**](/en/official/Reference/WinServicesLib/ITbService#entrypoint) --- once the service is past the `StartPending` phase --- takes effect on the next SCM query. Most services that support pausing set the property to **True** at the top of [**EntryPoint**](/en/official/Reference/WinServicesLib/ITbService#entrypoint) and handle [**vbServiceControlPause**](/en/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlPause) / [**vbServiceControlContinue**](/en/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlContinue) in [**ChangeState**](/en/official/Reference/WinServicesLib/ITbService#changestate).

If the service has not yet reached the started state when **SupportsPausing** is set, the resync raises run-time error 5 _"Can't update the service state until the service has started"_. Wait until after the first [**ReportStatus**](#reportstatus)`(vbServiceStatusRunning)` call before toggling the property.

### Type

The Win32 service type --- controls whether the service runs in its own process, in a shared process, or is a kernel driver. [**ServiceTypeConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants), default [**tbServiceTypeOwnProcess**](/en/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeOwnProcess).

Typical settings:

- [**tbServiceTypeOwnProcess**](/en/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeOwnProcess) -- one service per EXE.
- [**tbServiceTypeShareProcess**](/en/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeShareProcess) -- multiple services hosted in a single EXE; the SCM keeps one process alive that serves all of them. Each [**ServiceManager**](/en/official/Reference/WinServicesLib/) still needs its own configuration and [**InstanceCreator**](#instancecreator).

The driver-only modes ([**tbServiceTypeSystemDriver**](/en/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeSystemDriver), [**tbServiceTypeKernelDriver**](/en/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants#tbServiceTypeKernelDriver), …) are not meaningful for user-mode twinBASIC services.

## Methods

### Install

Registers this service in the SCM database.

Syntax: _manager_.**Install**

Opens the SCM with `SC_MANAGER_CONNECT Or SC_MANAGER_CREATE_SERVICE`, calls `CreateServiceW` with the configured fields. If a service with the same [**Name**](#name) already exists, the method deletes it first (via `OpenServiceW(SERVICE_DELETE)` + `DeleteService`) and retries --- so calling [**Install**](#install) on a service that already exists overwrites the existing registration rather than failing. On a successful create the [**Description**](#description) is written via `ChangeServiceConfig2W(SERVICE_CONFIG_DESCRIPTION)`.

::: warning
[**Install**](#install) writes to the SCM database, which requires administrator rights. The usual pattern is to call it once from an elevated installer, not from the application's normal startup path. Running from within the twinBASIC IDE typically fails --- the IDE is rarely elevated.
:::

Raises run-time error 5 with a descriptive message on permission failure (`"Unable to open the Service manager..."`) or unrecoverable create failure (`"CreateServiceW() failed with error code <N>"`).

### ReportStatus

Informs the SCM of the service's current state. Called by the service from inside [**ITbService.EntryPoint**](/en/official/Reference/WinServicesLib/ITbService#entrypoint) (and from [**ITbService.ChangeState**](/en/official/Reference/WinServicesLib/ITbService#changestate) to acknowledge pending transitions).

Syntax: _manager_.**ReportStatus** _CurrentState_ [, _Win32ExitCode_ [, *WaitHint* ] ]

_CurrentState_
: _required_ A [**ServiceStatusConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) value --- typically [**vbServiceStatusRunning**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusRunning), [**vbServiceStatusStopPending**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopPending), or [**vbServiceStatusStopped**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopped).

_Win32ExitCode_
: _optional_ A **Long** exit code. Default **0** (`NO_ERROR`). When reporting [**vbServiceStatusStopped**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopped) after an error, pass either a Win32 error code or, for service-specific codes, the magic value `ERROR_SERVICE_SPECIFIC_ERROR` (1066) along with placing the real code in the service-specific field --- but the package's API exposes only the _Win32ExitCode_ parameter directly. Most services pass **0** for a clean stop and a small custom code for an error stop.

_WaitHint_
: _optional_ A **Long** giving the SCM an upper-bound milliseconds estimate of how long the current pending transition will take. Default **0**. Only meaningful for pending states ([**vbServiceStatusStartPending**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStartPending), [**vbServiceStatusStopPending**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopPending), [**vbServiceStatusPausePending**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusPausePending), [**vbServiceStatusContinuePending**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusContinuePending)) --- the SCM uses it together with the auto-incremented `dwCheckPoint` field to detect a stuck service.

**ReportStatus** fills the `dwControlsAccepted` field of `SERVICE_STATUS` automatically --- _Stop_ is always accepted except during [**vbServiceStatusStartPending**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStartPending), and _Pause_ / _Continue_ are accepted when [**SupportsPausing**](#supportspausing) is **True**. The `dwCheckPoint` field auto-increments while the service is in a pending state and resets to **0** on [**vbServiceStatusRunning**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusRunning) / [**vbServiceStatusStopped**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopped).

The package's dispatcher trampoline reports [**vbServiceStatusStartPending**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStartPending) immediately before calling [**EntryPoint**](/en/official/Reference/WinServicesLib/ITbService#entrypoint); the user's [**EntryPoint**](/en/official/Reference/WinServicesLib/ITbService#entrypoint) is responsible for the subsequent [**vbServiceStatusRunning**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusRunning) and [**vbServiceStatusStopped**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants#vbServiceStatusStopped) transitions.

### ResyncStatus

Re-applies the cached `SERVICE_STATUS` to the SCM via `SetServiceStatus`. Called automatically by [**ReportStatus**](#reportstatus) and by the [**SupportsPausing**](#supportspausing) setter; consumer code rarely needs to call this directly.

Syntax: _manager_.**ResyncStatus**

Raises run-time error 5 _"Can't update the service state until the service has started"_ if called before the service has acquired its SCM status handle (i.e. before the dispatcher trampoline has called `RegisterServiceCtrlHandlerExW`). From inside [**EntryPoint**](/en/official/Reference/WinServicesLib/ITbService#entrypoint), [**ReportStatus**](#reportstatus) is the right call rather than **ResyncStatus** directly.

### Uninstall

Removes this service from the SCM database.

Syntax: _manager_.**Uninstall**

Opens the SCM, opens the service with `SERVICE_DELETE`, calls `DeleteService`. The actual deletion is queued by the SCM and completes once every open handle to the service is closed --- `services.msc` may show the service as _"Marked for deletion"_ until the host process exits.

::: warning
[**Uninstall**](#uninstall) requires administrator rights. Raises run-time error 5 with a descriptive message if the SCM cannot be opened, the service is not installed, or `DeleteService` fails.
:::

## See Also

- [WinServicesLib package](/en/official/Reference/WinServicesLib/) -- overview, lifecycle, two-thread split
- [Services class](/en/official/Reference/WinServicesLib/Services) -- the predeclared coordinator that **ConfigureNew** comes from
- [ITbService interface](/en/official/Reference/WinServicesLib/ITbService) -- what **InstanceCreator** must produce
- [ServiceCreator(Of T)](/en/official/Reference/WinServicesLib/ServiceCreator) -- the generic factory typically passed to **InstanceCreator**
- [ServiceStatusConstants enum](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) -- the values **ReportStatus** accepts
