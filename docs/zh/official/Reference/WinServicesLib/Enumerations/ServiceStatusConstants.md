---
title: ServiceStatusConstants
parent: Enumerations
permalink: /tB/Packages/WinServicesLib/Enumerations/ServiceStatusConstants
---
# ServiceStatusConstants
The runtime-state values a service reports to the SCM through [**ServiceManager.ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus). The same numeric values are returned by [**ServiceState.CurrentState**](/official/Reference/WinServicesLib/ServiceState#currentstate) (typed as a plain **Long**) and rendered as text by [**ServiceState.CurrentStateText**](/official/Reference/WinServicesLib/ServiceState#currentstatetext).

The values mirror the Win32 `SERVICE_*` state constants. The `vb` prefix is a historical hold-over from VB6's coding conventions.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbServiceStatusStopped**                   | 1 | The service is not running. Set by the service immediately before [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) returns; also the initial state the SCM stores when the service is registered. |
| **vbServiceStatusStartPending**         | 2 | The service is starting up. Set by the package's dispatcher trampoline before it calls [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint); services with long start-up sequences should also re-report this state periodically together with a `WaitHint` so the SCM does not declare the service hung. |
| **vbServiceStatusStopPending**           | 3 | The service has acknowledged a stop request and is shutting down. Typically reported from [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) immediately on receipt of [**vbServiceControlStop**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlStop). |
| **vbServiceStatusRunning**                   | 4 | The service has reached steady state. Reported from [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) once initialisation is complete; this is what `services.msc` shows as "Running". |
| **vbServiceStatusContinuePending**   | 5 | The service has acknowledged a continue request and is resuming. Reported from [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) on [**vbServiceControlContinue**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlContinue). |
| **vbServiceStatusPausePending**         | 6 | The service has acknowledged a pause request. Reported from [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) on [**vbServiceControlPause**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants#vbServiceControlPause). |
| **vbServiceStatusPaused**                     | 7 | The service has reached the paused state. Reported from [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) once the pause loop is active. |

The typical state sequence for a simple service: [**vbServiceStatusStartPending**](#vbServiceStatusStartPending) (package) → [**vbServiceStatusRunning**](#vbServiceStatusRunning) (from [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint)) → [**vbServiceStatusStopPending**](#vbServiceStatusStopPending) (from [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate)) → [**vbServiceStatusStopped**](#vbServiceStatusStopped) (from [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint), before returning).
