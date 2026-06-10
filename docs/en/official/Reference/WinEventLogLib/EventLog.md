---
title: EventLog
parent: WinEventLogLib Package
permalink: /tB/Packages/WinEventLogLib/EventLog
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "48a39de8-7232-4f8f-aecd-2358454264a3"
  PropagateID: "48a39de8-7232-4f8f-aecd-2358454264a3"
  ReservedCode1: "2b13a4b9-3fe4-44f6-8b46-d8768f39bed6"
  ReservedCode2: "2b13a4b9-3fe4-44f6-8b46-d8768f39bed6"
---

# EventLog class

A generic class representing one Windows Event Log source. The type parameters supply the schema of events the source can report: _T1_ is an enumeration of event IDs, _T2_ is an enumeration of categories. Member names from those enums become the human-readable strings the Event Viewer shows.

Syntax: **New EventLog(Of** _T1_, _T2_ **)** ( _LogName_ )

_T1_
: _required_ The enumeration type whose members name the event IDs this source can report. Passed as the _EventId_ argument of [**LogSuccess**](#logsuccess) / [**LogFailure**](#logfailure).

_T2_
: _required_ The enumeration type whose members name the categories events fall into. Passed as the _CategoryId_ argument of [**LogSuccess**](#logsuccess) / [**LogFailure**](#logfailure). The number of categories declared in _T2_ is what [**Register**](#register) writes as the registry's `CategoryCount`.

_LogName_
: _required_ A **String** naming the event source. A leaf name like `"MyService"` is registered under the **Application** log (`Application\MyService`); a path like `"System\MyService"` is registered under the named parent log. The trailing segment is the source name --- it appears in the Event Viewer's **Source** column.

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

Both type arguments are required at instantiation --- twinBASIC does not deduce them from the _LogName_ constructor argument. See the [Generics](/en/official/Features/Language/Generics) page for the general rules.

A class that needs to expose [**LogSuccess**](#logsuccess) / [**LogFailure**](#logfailure) / [**Register**](#register) as if those methods were its own can mix the **EventLog** members in through [**Implements ... Via**](/en/official/Features/Language/Inheritance) composition --- see the [composition-delegation idiom](/en/official/Reference/WinEventLogLib/#composition-delegation-idiom) section on the package overview for the canonical service-class pattern.

The package [overview](/en/official/Reference/WinEventLogLib/) covers the install-then-log lifecycle, the [`[PopulateFrom("json", ...)]` message-resource convention](/en/official/Reference/WinEventLogLib/#populatefrom-convention), registry layout, and the [composition-delegation idiom](/en/official/Reference/WinEventLogLib/#composition-delegation-idiom).

## Methods

### LogFailure

Writes an **Error**-type entry to the log.

Syntax: _object_.**LogFailure** _EventId_, _CategoryId_ [, *AdditionalStrings* ... ]

_EventId_
: _required_ A _T1_ value naming the event being reported. Becomes the numeric **Event ID** column in the Event Viewer; the corresponding member name from _T1_ is used to look up the message string.

_CategoryId_
: _required_ A _T2_ value naming the category the event belongs to. Becomes the numeric **Task Category** column.

_AdditionalStrings_
: _optional_ A **ParamArray** of values inserted into the event's message string at the `%1`, `%2`, … placeholders. Each value is converted to a **String** before being passed to `ReportEventW`.

::: info
Despite the name, **LogFailure** writes an **Error** entry --- the Windows event type `EVENTLOG_ERROR_TYPE` (= 1). It does _not_ write an _Audit Failure_ entry. That event type, and _Warning_ and _Audit Success_, are not currently reachable through this class.
:::

The first call after construction lazily resolves the source handle via `RegisterEventSourceW`; if [**Register**](#register) has not been run for this _LogName_, the entry is still written but the Event Viewer cannot resolve the message strings and shows _"The description for Event ID X cannot be found"_.

### LogSuccess

Writes an **Information**-type entry to the log.

Syntax: _object_.**LogSuccess** _EventId_, _CategoryId_ [, *AdditionalStrings* ... ]

_EventId_
: _required_ A _T1_ value naming the event being reported. Becomes the numeric **Event ID** column in the Event Viewer.

_CategoryId_
: _required_ A _T2_ value naming the category the event belongs to.

_AdditionalStrings_
: _optional_ A **ParamArray** of values inserted into the event's message string at the `%1`, `%2`, … placeholders.

::: info
The Windows event type for this call is `EVENTLOG_SUCCESS` (= 0), which is the Win32 SDK's literal name for the **Information** event type --- _not_ an Audit Success entry. The class spells the method **LogSuccess** to track the SDK constant, but the entries that appear in `eventvwr.msc` are tagged **Information**.
:::

### New

Constructs an **EventLog** instance bound to a single source name.

Syntax: **New EventLog(Of** _T1_, _T2_ **)** ( _LogName_ )

_LogName_
: _required_ A **String** naming the source. See the top of this page for the leaf-name vs full-path syntax.

The constructor only stores _LogName_. The first call to [**LogSuccess**](#logsuccess) / [**LogFailure**](#logfailure) lazily acquires the Win32 source handle via `RegisterEventSourceW`. [**Register**](#register) writes the registry entries the Event Viewer reads when rendering messages --- it must be run separately, once, with admin rights.

### Register

Writes the registry entries that declare this EXE as the message provider for the source.

Syntax: _object_.**Register**

Creates `HKLM\SYSTEM\CurrentControlSet\Services\EventLog\<LogPath>` (prepending `Application\` if _LogName_ is a leaf name) and writes:

- **EventMessageFile** = `App.ModulePath` (the running EXE)
- **CategoryMessageFile** = `App.ModulePath`
- **CategoryCount** = the largest declared value in _T2_, resolved at compile time via [**GetDeclaredMaxEnumValue**](/en/official/Reference/VBA/HiddenModule/GetDeclaredMaxEnumValue)`(Of T2)`

::: warning
**Register** requires administrator rights --- it writes to `HKEY_LOCAL_MACHINE`. The usual pattern is to call it once from an elevated installer, not from the application's normal startup path.
:::

The Event Viewer renders message strings by loading **EventMessageFile** and looking up the message resource keyed by _EventId_. Because **EventMessageFile** points at `App.ModulePath`, the same EXE that calls **Register** must be the one that later calls [**LogSuccess**](#logsuccess) / [**LogFailure**](#logfailure); otherwise the Event Viewer cannot find the message strings. See [Message resources](/en/official/Reference/WinEventLogLib/#message-resources) and [The `[PopulateFrom("json", ...)]` convention](/en/official/Reference/WinEventLogLib/#populatefrom-convention) on the package landing page for the recommended way to populate the resource.

If the registry key cannot be opened for write, **Register** raises run-time error 5 _"Failed to register event log source (`<LogName>`)"_. Typical causes are insufficient privileges and a _LogPath_ that points at a non-existent parent log.

The lower-level [**EventLogHelperPublic.RegisterEventLogInternal**](/en/official/Reference/WinEventLogLib/EventLogHelperPublic#registereventloginternal) is what **Register** delegates to; use it directly only when registering a source without binding it to a generic _T2_ (and so without using **GetDeclaredMaxEnumValue** to derive the category count).

## See Also

- [WinEventLogLib](/en/official/Reference/WinEventLogLib/) package -- overview, lifecycle, message-resource generation
- [EventLogHelperPublic](/en/official/Reference/WinEventLogLib/EventLogHelperPublic) module -- the lower-level registration helper
- [Generics](/en/official/Features/Language/Generics) feature -- syntax rules for generic class instantiation
