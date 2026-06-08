---
title: ServiceStartConstants
parent: Enumerations
permalink: /tB/Packages/WinServicesLib/Enumerations/ServiceStartConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9d2f9d6d-6251-4fc1-be2f-5002ac19d18e'
  PropagateID: '9d2f9d6d-6251-4fc1-be2f-5002ac19d18e'
  ReservedCode1: 'f34984bc-1ab5-4c8e-99d5-09e8246d53e6'
  ReservedCode2: 'f34984bc-1ab5-4c8e-99d5-09e8246d53e6'
---

# ServiceStartConstants
SCM 何时及如何启动服务。在配置时赋给 [**ServiceManager.InstallStartMode**](/official/Reference/WinServicesLib/ServiceManager#installstartmode)；该值由 [**ServiceManager.Install**](/official/Reference/WinServicesLib/ServiceManager#install) 写入 SCM 数据库，之后可通过"服务"控制面板小程序或 `sc.exe config` 更改。

| 常量 | 值 | 说明 |
|------|----|------|
| **tbServiceStartBoot**                 | 0 | 由引导加载程序在操作系统启动时启动。**仅限内核驱动程序**——不适用于 twinBASIC 服务。 |
| **tbServiceStartDriverSystem** | 1 | 由 `Ntldr` / `Winload` 在系统初始化期间启动。**仅限内核驱动程序。** |
| **tbServiceStartAuto**                 | 2 | 由 SCM 在系统启动时自动启动，在任何用户登录之前。应始终运行的后台服务的典型设置。 |
| **tbServiceStartOnDemand**         | 3 | 仅当有明确请求时 SCM 才启动（控制面板小程序、`sc.exe start`、[**Services.LaunchService**](/official/Reference/WinServicesLib/Services#launchservice)，或在 [**DependentServices**](/official/Reference/WinServicesLib/ServiceManager#dependentservices) 中列出它的服务）。新 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) 实例的默认值。 |
| **tbServiceStartDisabled**         | 4 | 在管理员更改其启动模式之前无法启动。用于在不卸载服务的情况下停用服务。 |

对于用户模式 twinBASIC 服务，实际中只有三个值有用：[**tbServiceStartAuto**](#tbServiceStartAuto)、[**tbServiceStartOnDemand**](#tbServiceStartOnDemand) 和 [**tbServiceStartDisabled**](#tbServiceStartDisabled)。