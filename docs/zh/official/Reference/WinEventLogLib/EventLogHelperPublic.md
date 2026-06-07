---
title: EventLogHelperPublic
parent: WinEventLogLib Package
permalink: /tB/Packages/WinEventLogLib/EventLogHelperPublic
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '475a309e-b509-4dd4-8210-30dc25ff2750'
  PropagateID: '475a309e-b509-4dd4-8210-30dc25ff2750'
  ReservedCode1: '8dddc733-c401-41aa-8fdf-535fe2dd9c49'
  ReservedCode2: '8dddc733-c401-41aa-8fdf-535fe2dd9c49'
---

# EventLogHelperPublic module
A single low-level helper that writes the registry entries Windows reads when rendering Event Log messages. Most projects do not call into this module directly --- [**EventLog.Register**](/official/Reference/WinEventLogLib/EventLog#register) wraps the call and automatically supplies the category count from the *T2* type argument. Use **EventLogHelperPublic** only when registering a source outside the generic [**EventLog**](/official/Reference/WinEventLogLib/EventLog) class (for example, when the category count cannot be derived from a declared enum).

## RegisterEventLogInternal

Writes the registry entries that declare the running EXE as the message provider for an event source.

Syntax: **EventLogHelperPublic.RegisterEventLogInternal** *LogPath*, *CategoryCount*

*LogPath*
: *required* A **String** naming the source. A leaf name like `"MyService"` is registered under the **Application** log (rewritten internally to `"Application\MyService"`); a full path like `"System\MyService"` is registered under the named parent log. The trailing segment is the source name displayed in the Event Viewer's **Source** column.

*CategoryCount*
: *required* A **Long** giving the number of categories declared for this source --- the largest value in the corresponding category enum. Stored as the registry's `CategoryCount` DWORD; the Event Viewer uses it to bound category-string lookups in the EXE's message-table resource.

Creates `HKLM\SYSTEM\CurrentControlSet\Services\EventLog\<LogPath>` and writes:

- **EventMessageFile** = `App.ModulePath` (the running EXE; **REG_SZ**)
- **CategoryMessageFile** = `App.ModulePath` (**REG_SZ**)
- **CategoryCount** = *CategoryCount* (**REG_DWORD**)

::: important
**RegisterEventLogInternal** writes under `HKEY_LOCAL_MACHINE` and requires administrator rights. The usual pattern is to call it once from an elevated installer, not from the application's normal startup path.
:::

If the registry key cannot be opened for write, **RegisterEventLogInternal** raises run-time error 5 with the message *"Failed to register event log source (``<LogName>``)"*, where `<LogName>` is the trailing segment of *LogPath*. Typical causes are insufficient privileges and a *LogPath* whose parent log (e.g. `"Application"`, `"System"`) does not exist.

## See Also

- [WinEventLogLib](/official/Reference/WinEventLogLib/) package -- overview, lifecycle, message-resource generation
- [EventLog](/official/Reference/WinEventLogLib/EventLog) class -- the generic class whose [**Register**](/official/Reference/WinEventLogLib/EventLog#register) method wraps this helper

> AI生成