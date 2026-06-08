---
title: "枚举"
parent: WinServicesLib Package
permalink: /tB/Packages/WinServicesLib/Enumerations/
---

# 枚举

**WinServicesLib** 包暴露的四个面向用户的枚举。这四个枚举均来自包源码中的公共 `ServicesConstantsPublic` 模块；源码中调用 `advapi32.dll` 时使用的更大一组内部 `SERVICE_*` 常量位于 `Private Module` 中，不属于公共 API。

| 枚举 | 使用者 |
|------|--------|
| [ServiceTypeConstants](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants) | [**ServiceManager.Type**](/official/Reference/WinServicesLib/ServiceManager#type), [**ServiceState.Type**](/official/Reference/WinServicesLib/ServiceState#type) |
| [ServiceStartConstants](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants) | [**ServiceManager.InstallStartMode**](/official/Reference/WinServicesLib/ServiceManager#installstartmode) |
| [ServiceControlCodeConstants](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants) | [**Services.ControlService**](/official/Reference/WinServicesLib/Services#controlservice), [**ITbService.ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 的 *dwControl* 参数 |
| [ServiceStatusConstants](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) | [**ServiceManager.ReportStatus**](/official/Reference/WinServicesLib/ServiceManager#reportstatus) |

成员名称前缀继承自底层 Win32 SDK 常量——*配置*枚举（[**ServiceTypeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants)、[**ServiceStartConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants)）使用 `tb…`，*运行时*枚举（[**ServiceControlCodeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants)、[**ServiceStatusConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants)）使用 `vb…`。这种分裂并非刻意设计；请将前缀视为成员名称的一部分，忽略这种不对称性。