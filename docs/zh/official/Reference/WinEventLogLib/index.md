---
title: "WinEventLogLib 包"
parent: Packages
nav_order: 8
permalink: /tB/Packages/WinEventLogLib/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '163fe8fd-58a9-4eee-b3da-62d1ed2ebc4c'
  PropagateID: '163fe8fd-58a9-4eee-b3da-62d1ed2ebc4c'
  ReservedCode1: '5ac10d35-a577-44a8-a0ba-c7529b62c3ac'
  ReservedCode2: '5ac10d35-a577-44a8-a0ba-c7529b62c3ac'
---

# WinEventLogLib 包

**WinEventLogLib** 内置包从 twinBASIC 向Windows事件日志写入条目。定义两个枚举——一个命名应用程序可报告的事件ID，一个命名这些事件所属的类别——通用 [**EventLog**](/official/Reference/WinEventLogLib/EventLog) 类负责注册、注册表设置和每次事件的 `ReportEventW` 调用。

该包是随 twinBASIC 一起发布的内置包。通过 Project → References（**Ctrl-T**）→ Available Packages 添加。

## 生命周期

典型使用有三个阶段：

1. **声明**两个枚举——事件ID和类别——在项目中的任何位置。赋值成为 `eventvwr.msc` 中可见的数字 **Event ID** 和 **Category** 列。
2. **注册**一次，安装时需要管理员权限。构造 [**EventLog**](/official/Reference/WinEventLogLib/EventLog) 实例并调用 [**Register**](/official/Reference/WinEventLogLib/EventLog#register)；这会在 `HKLM\SYSTEM\CurrentControlSet\Services\EventLog\Application\<LogName>` 下写入源键，并将注册表的 **EventMessageFile** 和 **CategoryMessageFile** 条目指向正在运行的EXE。没有此步骤，事件查看器会为每个条目显示 *"The description for Event ID X cannot be found"*。
3. **记录**在运行时，无需提升权限。用相同的 *LogName* 构造相同的 [**EventLog**](/official/Reference/WinEventLogLib/EventLog)，然后在应用程序有内容需要报告时调用 [**LogSuccess**](/official/Reference/WinEventLogLib/EventLog#logsuccess) 或 [**LogFailure**](/official/Reference/WinEventLogLib/EventLog#logfailure)。

```vb
Public Enum MyEventIds
    StartupOk       = 1000
    StartupFailed   = 1001
    ShutdownClean   = 1100
End Enum

Public Enum MyCategories
    General = 1
    Network = 2
End Enum

' 一次性安装步骤（需要管理员权限）：
Sub Install()
    Dim Log As New EventLog(Of MyEventIds, MyCategories)("MyService")
    Log.Register
End Sub

' 运行时使用（无需管理员权限）：
Sub OnServiceStart()
    Dim Log As New EventLog(Of MyEventIds, MyCategories)("MyService")
    Log.LogSuccess StartupOk, General, "Service started", App.ModulePath
End Sub
```

调用 [**Register**](/official/Reference/WinEventLogLib/EventLog#register) 的同一EXE必须是后来调用 [**LogSuccess**](/official/Reference/WinEventLogLib/EventLog#logsuccess) / [**LogFailure**](/official/Reference/WinEventLogLib/EventLog#logfailure) 的那个——注册的 **EventMessageFile** 指向 `App.ModulePath`，事件查看器在渲染条目时从该文件读取消息字符串。

对于应该将 [**LogSuccess**](/official/Reference/WinEventLogLib/EventLog#logsuccess) / [**LogFailure**](/official/Reference/WinEventLogLib/EventLog#logfailure) / [**Register**](/official/Reference/WinEventLogLib/EventLog#register) 暴露为自身方法的服务/长期运行类，参见下方的[组合委托惯用法](#composition-delegation-idiom)。

## 组合委托惯用法

类可以通过 twinBASIC 的 [`Implements ... Via`](/official/Features/Language/Inheritance) 组合语法将 [**EventLog**](/official/Reference/WinEventLogLib/EventLog)`(Of T1, T2)` 混入，并无条件地继承其公共成员：

```vb
Class MyService
    Implements EventLog(Of MESSAGETABLE.EVENTS, MESSAGETABLE.CATEGORIES) Via _
        EventLog = New EventLog(Of MESSAGETABLE.EVENTS, MESSAGETABLE.CATEGORIES)("Application\" & CurrentComponentName)

    Sub Run()
        LogSuccess service_started, status_changed, CurrentComponentName    ' 通过上面的字段转发
        ' ...
        LogSuccess service_ended,   status_changed, CurrentComponentName
    End Sub
End Class
```

`Implements <Class> Via <field> = <expression>` 子句声明一个私有字段，在首次使用时评估构造函数表达式一次，并通过该字段转发 [**EventLog**](/official/Reference/WinEventLogLib/EventLog) 的每个公共成员——[**LogSuccess**](/official/Reference/WinEventLogLib/EventLog#logsuccess)、[**LogFailure**](/official/Reference/WinEventLogLib/EventLog#logfailure) 和 [**Register**](/official/Reference/WinEventLogLib/EventLog#register)。在 `MyService` 内部，这三个方法看起来就像是在类本身上声明的一样。

需要记住的两点：

- *T1* / *T2* 类型参数在 `Implements` 声明和构造函数表达式之间必须匹配——编译器会强制执行此约束。
- 使用 `"Application\" & CurrentComponentName` 作为 *LogName* 会使日志路径在编译时自动跟踪类名；重命名类会重命名它记录日志的源。

这是 [**WinServicesLib**](/official/Reference/WinServicesLib/) 服务类的规范混入模式（共享一组事件ID的项目中的每个服务类继承日志方法而无需按类编写样板代码）。相同的模式适用于任何想要直接使用 [**EventLog**](/official/Reference/WinEventLogLib/EventLog) 成员的类。

一个类只能对 [**EventLog**](/official/Reference/WinEventLogLib/EventLog)`(Of T1, T2)` 使用一次 `Implements ... Via`。当同一项目中的多个类需要共享日志记录时，声明一个具有一个事件ID枚举和一个类别枚举的单一模块，并从每个类通过 `Implements ... Via` 针对该枚举对进行委托。多个不相关的消息表仍然可行——它们只需要通过显式命名的 [**EventLog**](/official/Reference/WinEventLogLib/EventLog) 字段而非 `Implements ... Via` 快捷方式来访问。

## 消息资源

Windows事件日志仅存储数字 **Event ID** 和 **Category** 值；人类可读的字符串位于注册的 **EventMessageFile** / **CategoryMessageFile** 条目指向的EXE中嵌入的消息表资源中。没有此资源，事件查看器无法渲染条目，而是显示 *"The description for Event ID X cannot be found"*。

对于通用 [**EventLog**](/official/Reference/WinEventLogLib/EventLog)`(Of T1, T2)` 类，*T1*（事件ID）和 *T2*（类别）枚举声明是这些字符串的来源——该类将注册表指向正在运行的EXE，事件查看器按枚举成员值查找消息表资源。直接编写资源（馈送给 `mc.exe` 的 `.mc` 文件，作为资源节嵌入）是一种途径；下面展示的惯例使用 twinBASIC 的 [`[PopulateFrom]`](/official/Reference/Attributes#populatefrom) 枚举填充属性，从单个JSON文件保持枚举、消息字符串和资源发射的同步。

### `[PopulateFrom("json", ...)]` 惯例

声明一个包含两个空枚举存根的模块，每个存根用 [`[PopulateFrom]`](/official/Reference/Attributes#populatefrom) 标记，指向项目相对路径的JSON资源：

```vb
Module MESSAGETABLE
    [PopulateFrom("json", "/Resources/MESSAGETABLE/Strings.json", "events", "name", "id")]
    Enum EVENTS
    End Enum

    [PopulateFrom("json", "/Resources/MESSAGETABLE/Strings.json", "categories", "name", "id")]
    Enum CATEGORIES
    End Enum
End Module
```

五个 [`[PopulateFrom]`](/official/Reference/Attributes#populatefrom) 参数分别是：资源格式（`"json"`）、项目相对路径的文件路径、从中读取条目的JSON数组（`"events"` 对应事件存根，`"categories"` 对应类别存根）、提供每个枚举成员标识符的字段名，以及提供其数字值的字段名。

`Resources/MESSAGETABLE/Strings.json` 为每个事件和每个类别各有一个条目。每个条目有三个字段——数字 `id`、枚举成员 `name` 和 `LCID_XXXX` 键下的每个区域设置的消息文本：

```json
{
    "events": [
        { "id": -1073610751, "name": "service_started",        "LCID_0000": "%1 service started" },
        { "id": -1073610750, "name": "service_startup_failed", "LCID_0000": "%1 service startup failed" },
        { "id": -1073610749, "name": "service_ended",          "LCID_0000": "%1 service ended" }
    ],
    "categories": [
        { "id": 1, "name": "status_changed", "LCID_0000": "Status Changed" }
    ]
}
```

编译器在构建时读取JSON并填充每个枚举体——`Enum EVENTS` 最终包含 `service_started = -1073610751`、`service_startup_failed = -1073610750`、…——同时将消息表资源发射到生成的EXE中。`LCID_0000` 字符串（区域设置中立）成为消息模板；替换/添加 `LCID_0409`（美式英语）、`LCID_040C`（法语）等用于本地化项目。

一旦JSON、枚举存根和 [**Register**](/official/Reference/WinEventLogLib/EventLog#register) 写入的注册表条目到位，运行时调用

```vb
Dim Log As New EventLog(Of MESSAGETABLE.EVENTS, MESSAGETABLE.CATEGORIES)("Application\" & CurrentComponentName)
Log.LogSuccess service_started, status_changed, "MyService"
```

将写入一条事件，事件查看器渲染为 *"MyService service started"*——`%1` 占位符从 [**LogSuccess**](/official/Reference/WinEventLogLib/EventLog#logsuccess) 的 *AdditionalStrings* `ParamArray` 填充，`status_changed` 类别根据消息表解析，两者都由枚举定义的数字值键控。

JSON中的负事件ID值（`-1073610751` 等）遵循Win32文档记录的事件ID位布局——高位编码严重级别、设施和客户定义标志。参见Microsoft的 *"Event Identifiers"* 参考了解编码方式；为新事件选择新的ID，不要跨产品重用标识符。

## 日志类型

[**LogSuccess**](/official/Reference/WinEventLogLib/EventLog#logsuccess) 和 [**LogFailure**](/official/Reference/WinEventLogLib/EventLog#logfailure) 是目前暴露的唯一入口点；它们分别写入 **Information** 类型和 **Error** 类型的条目。名称遵循Win32 SDK的 `EVENTLOG_SUCCESS`（= 0，即*信息*事件类型）和 `EVENTLOG_ERROR_TYPE`（= 1）常量的字面名称——*不是* 安全日志中熟悉的审核成功/审核失败事件类型。

其他三种Windows事件日志条目类型——**Warning**、**Audit Success** 和 **Audit Failure**——目前无法通过公共API访问。

## 类

- [EventLog](/official/Reference/WinEventLogLib/EventLog) -- 通用事件日志源——针对一个事件日志的打开/注册/记录条目，由事件ID枚举和类别枚举参数化

## 模块

- [EventLogHelperPublic](/official/Reference/WinEventLogLib/EventLogHelperPublic) -- [**EventLog.Register**](/official/Reference/WinEventLogLib/EventLog#register) 底层的低级注册表辅助模块；仅在必须在不使用通用类的情况下提供类别计数时直接调用