---
title: Enumerations
parent: WinServicesLib Package
permalink: /tB/Packages/WinServicesLib/Enumerations/
---

# Enumerations

The four user-facing enumerations the **WinServicesLib** package exposes. All four come from the public `ServicesConstantsPublic` module in the package source; the larger set of internal `SERVICE_*` constants the source uses to call into `advapi32.dll` lives in a `Private Module` and is not part of the public API.

| Enumeration | Used by |
|-------------|---------|
| [ServiceTypeConstants](/en/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants) | [**ServiceManager.Type**](/en/official/Reference/WinServicesLib/ServiceManager#type), [**ServiceState.Type**](/en/official/Reference/WinServicesLib/ServiceState#type) |
| [ServiceStartConstants](/en/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants) | [**ServiceManager.InstallStartMode**](/en/official/Reference/WinServicesLib/ServiceManager#installstartmode) |
| [ServiceControlCodeConstants](/en/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants) | [**Services.ControlService**](/en/official/Reference/WinServicesLib/Services#controlservice), the *dwControl* parameter of [**ITbService.ChangeState**](/en/official/Reference/WinServicesLib/ITbService#changestate) |
| [ServiceStatusConstants](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) | [**ServiceManager.ReportStatus**](/en/official/Reference/WinServicesLib/ServiceManager#reportstatus) |

The member-name prefixes are inherited from the underlying Win32 SDK constants --- `tb…` on the *configuration* enums ([**ServiceTypeConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants), [**ServiceStartConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants)) and `vb…` on the *runtime* enums ([**ServiceControlCodeConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants), [**ServiceStatusConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants)). The split is not deliberate; treat the prefixes as part of the member names and ignore the asymmetry.
