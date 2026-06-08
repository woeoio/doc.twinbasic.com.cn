---
title: EventLog
parent: "WinEventLogLib 包"
permalink: /tB/Packages/WinEventLogLib/EventLog
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '552570b8-d21e-4846-90c4-442415455b6c'
  PropagateID: '552570b8-d21e-4846-90c4-442415455b6c'
  ReservedCode1: '454edc8f-189c-418c-bcf8-ca53ff72ffe0'
  ReservedCode2: '454edc8f-189c-418c-bcf8-ca53ff72ffe0'
---

# EventLog 类

表示一个Windows事件日志源的通用类。类型参数提供源可报告的事件架构：*T1* 是事件ID的枚举，*T2* 是类别的枚举。这些枚举的成员名称成为事件查看器显示的人类可读字符串。

语法：**New EventLog(Of** *T1*, *T2* **)** ( *LogName* )

*T1*
: *必需* 其成员命名此源可报告的事件ID的枚举类型。作为 [**LogSuccess**](#logsuccess) / [**LogFailure**](#logfailure) 的 *EventId* 参数传递。

*T2*
: *必需* 其成员命名事件所属类别的枚举类型。作为 [**LogSuccess**](#logsuccess) / [**LogFailure**](#logfailure) 的 *CategoryId* 参数传递。*T2* 中声明的类别数是 [**Register**](#register) 写入注册表 `CategoryCount` 的值。

*LogName*
: *必需* 命名事件源的 **String**。叶名称如 `"MyService"` 注册在 **Application** 日志下（`Application\MyService`）；路径如 `"System\MyService"` 注册在命名的父日志下。尾段是源名称——它出现在事件查看器的 **Source** 列中。

```vb
Public Enum MyEventIds
    StartupOk     = 1000
    StartupFailed = 1001
End Enum

Public Enum MyCategories
    General = 1
    Network = 2
End Enum

Dim Log As New EventLog(Of MyEventIds, MyCategories)("MyService")
```

两个类型参数在实例化时都是必需的——twinBASIC 不会从 *LogName* 构造函数参数推导它们。参见[泛型](/official/Features/Language/Generics)页面了解一般规则。

需要将 [**LogSuccess**](#logsuccess) / [**LogFailure**](#logfailure) / [**Register**](#register) 暴露为自身方法的类可以通过 [**Implements ... Via**](/official/Features/Language/Inheritance) 组合混入 **EventLog** 成员——参见包概述上的[组合委托惯用法](/official/Reference/WinEventLogLib/#composition-delegation-idiom)部分了解规范的服务类模式。

包[概述](/official/Reference/WinEventLogLib/)涵盖了先安装后记录的生命周期、[`[PopulateFrom("json", ...)]` 消息资源惯例](/official/Reference/WinEventLogLib/#populatefrom-convention)、注册表布局和[组合委托惯用法](/official/Reference/WinEventLogLib/#composition-delegation-idiom)。

## 方法

### LogFailure

向日志写入 **Error** 类型条目。

语法：*对象*.**LogFailure** *EventId*, *CategoryId* [, *AdditionalStrings* ... ]

*EventId*
: *必需* 命名所报告事件的 *T1* 值。成为事件查看器中的数字 **Event ID** 列；使用 *T1* 中的对应成员名称查找消息字符串。

*CategoryId*
: *必需* 命名事件所属类别的 *T2* 值。成为数字 **Task Category** 列。

*AdditionalStrings*
: *可选* 在事件消息字符串的 `%1`、`%2`、… 占位符处插入的值的 **ParamArray**。每个值在传递给 `ReportEventW` 之前转换为 **String**。

::: info
尽管名称如此，**LogFailure** 写入的是 **Error** 条目——Windows事件类型 `EVENTLOG_ERROR_TYPE`（= 1）。它*不是*写入审核失败条目。该事件类型以及 *Warning* 和 *Audit Success* 目前无法通过此类访问。
:::

构造后的首次调用通过 `RegisterEventSourceW` 延迟解析源句柄；如果此 *LogName* 尚未运行 [**Register**](#register)，条目仍然会被写入，但事件查看器无法解析消息字符串，显示 *"The description for Event ID X cannot be found"*。

### LogSuccess

向日志写入 **Information** 类型条目。

语法：*对象*.**LogSuccess** *EventId*, *CategoryId* [, *AdditionalStrings* ... ]

*EventId*
: *必需* 命名所报告事件的 *T1* 值。成为事件查看器中的数字 **Event ID** 列。

*CategoryId*
: *必需* 命名事件所属类别的 *T2* 值。

*AdditionalStrings*
: *可选* 在事件消息字符串的 `%1`、`%2`、… 占位符处插入的值的 **ParamArray**。

::: info
此调用的Windows事件类型是 `EVENTLOG_SUCCESS`（= 0），这是Win32 SDK对 **Information** 事件类型的字面名称——*不是*审核成功条目。类将方法命名为 **LogSuccess** 以跟踪SDK常量，但 `eventvwr.msc` 中出现的条目标记为 **Information**。
:::

### New

构造绑定到单个源名称的 **EventLog** 实例。

语法：**New EventLog(Of** *T1*, *T2* **)** ( *LogName* )

*LogName*
: *必需* 命名源的 **String**。参见本页顶部了解叶名称与完整路径的语法。

构造函数仅存储 *LogName*。首次调用 [**LogSuccess**](#logsuccess) / [**LogFailure**](#logfailure) 时通过 `RegisterEventSourceW` 延迟获取Win32源句柄。[**Register**](#register) 写入事件查看器渲染消息时读取的注册表条目——必须单独运行一次，且需要管理员权限。

### Register

写入将此EXE声明为源的消息提供程序的注册表条目。

语法：*对象*.**Register**

创建 `HKLM\SYSTEM\CurrentControlSet\Services\EventLog\<LogPath>`（如果 *LogName* 是叶名称则添加 `Application\` 前缀）并写入：

- **EventMessageFile** = `App.ModulePath`（正在运行的EXE）
- **CategoryMessageFile** = `App.ModulePath`
- **CategoryCount** = *T2* 中声明的最大值，在编译时通过 [**GetDeclaredMaxEnumValue**](/official/Reference/VBA/HiddenModule/GetDeclaredMaxEnumValue)`(Of T2)` 解析

::: important
**Register** 需要管理员权限——它写入 `HKEY_LOCAL_MACHINE`。通常的做法是从提升的安装程序中调用一次，而不是从应用程序的正常启动路径中调用。
:::

事件查看器通过加载 **EventMessageFile** 并按 *EventId* 键控查找消息资源来渲染消息字符串。由于 **EventMessageFile** 指向 `App.ModulePath`，调用 **Register** 的EXE必须是后来调用 [**LogSuccess**](#logsuccess) / [**LogFailure**](#logfailure) 的同一个；否则事件查看器找不到消息字符串。参见包着陆页上的[消息资源](/official/Reference/WinEventLogLib/#message-resources)和[`[PopulateFrom("json", ...)]` 惯例](/official/Reference/WinEventLogLib/#populatefrom-convention)了解填充资源的推荐方式。

如果注册表键无法打开以进行写入，**Register** 引发运行时错误5 *"Failed to register event log source (``<LogName>``)"*。典型原因是权限不足和 *LogPath* 指向不存在的父日志。

更底层的 [**EventLogHelperPublic.RegisterEventLogInternal**](/official/Reference/WinEventLogLib/EventLogHelperPublic#registereventloginternal) 是 **Register** 委托的对象；仅在不将源绑定到通用 *T2*（因此不使用 **GetDeclaredMaxEnumValue** 推导类别计数）的情况下注册源时直接使用。

## 另见

- [WinEventLogLib](/official/Reference/WinEventLogLib/) 包 -- 概述、生命周期、消息资源生成
- [EventLogHelperPublic](/official/Reference/WinEventLogLib/EventLogHelperPublic) 模块 -- 更底层的注册辅助模块
- [泛型](/official/Features/Language/Generics) 功能 -- 泛型类实例化的语法规则