---
title: ServiceStartConstants
parent: Enumerations
permalink: /tB/Packages/WinServicesLib/Enumerations/ServiceStartConstants
---
# ServiceStartConstants
When and how the SCM starts a service. Assigned to [**ServiceManager.InstallStartMode**](/official/Reference/WinServicesLib/ServiceManager#installstartmode) at configuration time; the value is captured into the SCM database by [**ServiceManager.Install**](/official/Reference/WinServicesLib/ServiceManager#install) and can be changed afterwards through the Services control-panel applet or `sc.exe config`.

| Constant | Value | Description |
|----------|-------|-------------|
| **tbServiceStartBoot**                 | 0 | Started by the boot loader at OS boot. **Kernel drivers only** --- not applicable to twinBASIC services. |
| **tbServiceStartDriverSystem** | 1 | Started by `Ntldr` / `Winload` during system initialisation. **Kernel drivers only.** |
| **tbServiceStartAuto**                 | 2 | Automatically started by the SCM at system boot, before any user logs in. The typical setting for a background service that should always be running. |
| **tbServiceStartOnDemand**         | 3 | Started by the SCM only when something explicitly requests it (control-panel applet, `sc.exe start`, [**Services.LaunchService**](/official/Reference/WinServicesLib/Services#launchservice), or a service that lists it in [**DependentServices**](/official/Reference/WinServicesLib/ServiceManager#dependentservices)). The default for new [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) instances. |
| **tbServiceStartDisabled**         | 4 | The service cannot be started until an administrator changes its start mode. Use this to deactivate a service without uninstalling it. |

For user-mode twinBASIC services, the only three values that matter in practice are [**tbServiceStartAuto**](#tbServiceStartAuto), [**tbServiceStartOnDemand**](#tbServiceStartOnDemand), and [**tbServiceStartDisabled**](#tbServiceStartDisabled).
