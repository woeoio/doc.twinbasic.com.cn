---
title: ServiceTypeConstants
parent: Enumerations
permalink: /tB/Packages/WinServicesLib/Enumerations/ServiceTypeConstants
---
# ServiceTypeConstants
Win32 服务类型值。在配置时读入 [**ServiceManager.Type**](/official/Reference/WinServicesLib/ServiceManager#type)，在查询时由 SCM 通过 [**ServiceState.Type**](/official/Reference/WinServicesLib/ServiceState#type) 报告返回。决定服务是在自身进程中运行、在共享宿主进程中运行、还是内核驱动程序——以及在历史上，是否可以与桌面交互。

| 常量 | 值 | 说明 |
|------|----|------|
| **tbServiceTypeKernelDriver**                | 1   | 内核模式驱动程序。**不适用于** twinBASIC 服务——内核驱动程序使用 C 语言编写并基于 Windows DDK 构建。 |
| **tbServiceTypeSystemDriver**                | 2   | 文件系统内核驱动程序。同上。 |
| **tbServiceTypeAdapter**                          | 4   | 旧式适配器服务（网络适配器绑定）。现代服务不使用。 |
| **tbServiceTypeRecognizerDriver**        | 8   | 文件系统识别器驱动程序。仅限内核。 |
| **tbServiceTypeOwnProcess**                    | 16  | 服务在自身专用 EXE 进程中运行。单服务 EXE 的典型设置。 |
| **tbServiceTypeShareProcess**                | 32  | 服务与其他服务一起在共享宿主 EXE 中运行。当一个 EXE 承载多个不同服务时使用（多次调用 `ConfigureNew`）；SCM 保持单个进程存活来为所有服务提供服务。 |
| **tbServiceTypeOwnProcessInteractive**     | 272 | `tbServiceTypeOwnProcess` 加交互位（`SERVICE_INTERACTIVE_PROCESS`）。**Windows Vista 及更高版本不支持**——见下方说明。 |
| **tbServiceTypeShareProcessInteractive** | 288 | `tbServiceTypeShareProcess` 加交互位。同上。 |

::: info
Windows Vista 及更高版本在 *Session 0* 中运行服务，该会话没有用户桌面，也无法与已登录用户进行消息循环交互——`SERVICE_INTERACTIVE_PROCESS` 标志会被**静默忽略**。`Interactive` 常量保留在枚举中是为了兼容性，但需要用户界面元素的服务应使用独立的 UI 进程（通过 Services 包或进程间通信启动），而不是交互式服务机制。
:::

对于用户模式 twinBASIC 服务，实际中只有两个值有用：[**tbServiceTypeOwnProcess**](#tbServiceTypeOwnProcess) 和 [**tbServiceTypeShareProcess**](#tbServiceTypeShareProcess)。