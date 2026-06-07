---
title: Enumerations
parent: WinServicesLib Package
permalink: /tB/Packages/WinServicesLib/Enumerations/
---

# Enumerations

The four user-facing enumerations the **WinServicesLib** package exposes. All four come from the public `ServicesConstantsPublic` module in the package source; the larger set of internal `SERVICE_*` constants the source uses to call into `advapi32.dll` lives in a `Private Module` and is not part of the public API.

| Enumeration | Used by |
|-------------|---------|
| [ServiceTypeConstants](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants) | [**ServiceManager.Type**](/official/Reference/WinServicesLib/ServiceManager#type), [**ServiceState.Type**](/official/Reference/WinServicesLib/ServiceState#type) |
| [ServiceStartConstants](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants) | [**ServiceManager.InstallStartMode**](/official/Reference/WinServicesLib/ServiceManager#installstartmode) |
| [ServiceControlCodeConstants](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants) | [**Services.ControlService**](/official/Reference/WinServicesLib/Services#controlservice), the *dwControl* parameter of [**ITbService.ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) |
| [ServiceStatusConstants](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) | [**ServiceManager.ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus) |

The member-name prefixes are inherited from the underlying Win32 SDK constants --- `tb…` on the *configuration* enums ([**ServiceTypeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants), [**ServiceStartConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants)) and `vb…` on the *runtime* enums ([**ServiceControlCodeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants), [**ServiceStatusConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants)). The split is not deliberate; treat the prefixes as part of the member names and ignore the asymmetry.
