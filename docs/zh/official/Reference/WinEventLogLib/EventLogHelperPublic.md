---
title: EventLogHelperPublic
parent: "WinEventLogLib 包"
permalink: /tB/Packages/WinEventLogLib/EventLogHelperPublic
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "004e43a0-8296-44da-9992-1904371bc68a"
  PropagateID: "004e43a0-8296-44da-9992-1904371bc68a"
  ReservedCode1: "bf07f382-f66c-482a-9250-10d3204b0188"
  ReservedCode2: "bf07f382-f66c-482a-9250-10d3204b0188"
---

# EventLogHelperPublic 模块

一个低级辅助模块，写入Windows在渲染事件日志消息时读取的注册表条目。大多数项目不直接调用此模块——[**EventLog.Register**](/official/Reference/WinEventLogLib/EventLog#register) 包装了该调用并自动从 _T2_ 类型参数提供类别计数。仅在通用 [**EventLog**](/official/Reference/WinEventLogLib/EventLog) 类之外注册源时使用 **EventLogHelperPublic**（例如，当类别计数无法从声明的枚举推导时）。

## RegisterEventLogInternal

写入将正在运行的EXE声明为事件源的消息提供程序的注册表条目。

语法：**EventLogHelperPublic.RegisterEventLogInternal** _LogPath_, _CategoryCount_

_LogPath_
: _必需_ 命名源的 **String**。叶名称如 `"MyService"` 注册在 **Application** 日志下（内部重写为 `"Application\MyService"`）；完整路径如 `"System\MyService"` 注册在命名的父日志下。尾段是事件查看器 **Source** 列中显示的源名称。

_CategoryCount_
: _必需_ 给出为此源声明的类别数的 **Long**——对应类别枚举中的最大值。存储为注册表的 `CategoryCount` DWORD；事件查看器使用它来限制在EXE的消息表资源中查找类别字符串的范围。

创建 `HKLM\SYSTEM\CurrentControlSet\Services\EventLog\<LogPath>` 并写入：

- **EventMessageFile** = `App.ModulePath`（正在运行的EXE；**REG_SZ**）
- **CategoryMessageFile** = `App.ModulePath`（**REG_SZ**）
- **CategoryCount** = _CategoryCount_（**REG_DWORD**）

::: warning
**RegisterEventLogInternal** 写入 `HKEY_LOCAL_MACHINE`，需要管理员权限。通常的做法是从提升的安装程序中调用一次，而不是从应用程序的正常启动路径中调用。
:::

如果注册表键无法打开以进行写入，**RegisterEventLogInternal** 引发运行时错误5，消息为 _"Failed to register event log source (`<LogName>`)"_，其中 `<LogName>` 是 _LogPath_ 的尾段。典型原因是权限不足和 _LogPath_ 的父日志（例如 `"Application"`、`"System"`）不存在。

## 另见

- [WinEventLogLib](/official/Reference/WinEventLogLib/) 包 -- 概述、生命周期、消息资源生成
- [EventLog](/official/Reference/WinEventLogLib/EventLog) 类 -- 其 [**Register**](/official/Reference/WinEventLogLib/EventLog#register) 方法包装了此辅助模块的通用类
