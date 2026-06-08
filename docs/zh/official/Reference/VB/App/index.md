---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'db977484-9a5a-4c87-a1cf-891c33bed600'
  PropagateID: 'db977484-9a5a-4c87-a1cf-891c33bed600'
  ReservedCode1: '02dd35da-c7c3-45d7-969f-2aab67bd7ff7'
  ReservedCode2: '02dd35da-c7c3-45d7-969f-2aab67bd7ff7'
---

---
title: App
parent: VB Package
permalink: /tB/Packages/VB/App/
---

# App 类

**App**类包装运行中应用程序的标识和版本元数据，以及少量进程级状态（模块句柄、主线程ID、进程是否在twinBASIC IDE内运行或具有提升权限等）。它是单例——每个进程恰好有一个**App**实例，由运行时拥有，通过[**Global**](/official/Reference/VB/Global/)对象的全局**App**属性公开。代码无需限定即可访问：

```vb
Debug.Print "Running from " & App.Path
Debug.Print "Version " & App.Major & "." & App.Minor & "." & App.Revision & "." & App.Build

If App.PrevInstance Then
    MsgBox "Another instance is already running.", vbExclamation
    End
End If

App.HelpFile = App.Path & "\help.chm"
```

大多数属性为只读，在构建时从项目设置填充到可执行文件的Win32 `VERSIONINFO`资源中。少数读/写属性——[**Title**](#title)和[**HelpFile**](#helpfile)——允许代码更改少量运行时状态，运行时的其他部分（特别是窗体标题默认值和**F1**帮助分派器）会查询这些状态。


## 单例和访问

**App**不可创建：没有`New App`，也没有可实例化的公共coclass。运行时通过[**Global**](/official/Reference/VB/Global/)应用对象上的[**App**](/official/Reference/VB/Global/#app)属性公开此单例，该对象本身无需限定即可访问。**App**返回的引用在进程生命周期内被缓存且稳定。

## 文件和模块位置

[**Path**](#path)和[**ModulePath**](#modulepath)描述可执行文件所在位置：

- [**Path**](#path)返回包含EXE的文件夹，无尾部反斜杠（例如`"C:\Program Files\MyApp"`）。
- [**ModulePath**](#modulepath)返回EXE本身的完整路径（例如`"C:\Program Files\MyApp\MyApp.exe"`）。
- [**EXEName**](#exename)返回EXE的不含扩展名的基本名称（例如`"MyApp"`）。

当项目在twinBASIC IDE中运行时——`App.IsInIDE`为**True**——[**Path**](#path)是*项目文件*的文件夹而非已编译EXE的文件夹，因此它仍然可用作"应用程序所在位置"的锚点，用于在设计时打开相对路径的资源。

[**LastBuildPath**](#lastbuildpath)是twinBASIC特有的扩展，记录最近IDE构建写入EXE的路径——对于需要在IDE构建后链接步骤的构建脚本很有用。

## 版本元数据

版本信息属性直接从EXE的`VERSIONINFO`资源读取：

- [**Major**](#major)、[**Minor**](#minor)、[**Revision**](#revision)和[**Build**](#build)——项目*Make*选项卡中设置的四部分版本号的四个组成部分。
- [**Comments**](#comments)、[**CompanyName**](#companyname)、[**FileDescription**](#filedescription)、[**LegalCopyright**](#legalcopyright)、[**LegalTrademarks**](#legaltrademarks)和[**ProductName**](#productname)——同一资源的标准文本字段。
- [**Title**](#title)——在任务列表和消息框默认值中显示的友好应用程序标题；可读可写。

[**hInstance**](#hinstance)和[**ThreadID**](#threadid)公开底层Win32模块句柄和应用程序主线程的ID——对于需要它们之一的Windows API函数互操作很有用。

## 属性

### Build

应用程序四部分版本号的**Build**组件，在项目*Make*选项卡中设置。**Integer**，只读。

### Comments

应用程序`VERSIONINFO`资源的自由格式**Comments**字段。**String**，只读。

### CompanyName

应用程序`VERSIONINFO`资源的**CompanyName**字段。**String**，只读。

### EXEName

可执行文件的基本名称——文件名减去其`.exe`扩展名和任何目录部分。**String**，只读。在IDE内运行时，这是项目的编译时输出名称而非IDE宿主的名称。

### FileDescription

应用程序`VERSIONINFO`资源的**FileDescription**字段。**String**，只读。

### HelpFile

应用程序帮助文件（`.hlp`或`.chm`）的完整路径。**String**，可读可写。当控件的[**HelpContextID**](/official/Reference/VB/CheckBox/#helpcontextid)非零且用户按下**F1**时，以及应用程序代码调用带帮助文件参数的`MsgBox`时，运行时查询此属性。

### hInstance

可执行文件的Win32模块句柄（`HINSTANCE`）。**LongPtr**，只读。在调用代表应用程序加载资源或创建窗口的Windows API函数时很有用。

### IsElevated

如果进程以管理员权限（"以管理员身份运行"提升令牌）运行则为**True**，否则为**False**。**Boolean**，只读。

### IsInIDE

如果运行中的进程是twinBASIC IDE宿主而非独立编译的可执行文件则为**True**。**Boolean**，只读。用于仅在设计时运行的代码路径，或应在发布版本中抑制的诊断日志。

### LastBuildPath

IDE写入最近构建的完整路径。**String**，只读。当IDE在当前会话中尚未生成构建时为空。twinBASIC特有——VB6没有对应功能。

### LegalCopyright

应用程序`VERSIONINFO`资源的**LegalCopyright**字段。**String**，只读。

### LegalTrademarks

应用程序`VERSIONINFO`资源的**LegalTrademarks**字段。**String**，只读。

### LogMode

当前日志记录模式，作为[**LogModeConstants**](/official/Reference/VBRUN/Constants/LogModeConstants)的成员。只读。

::: info
twinBASIC目前仅报告**vbLogOff**和**vbLogAuto**，区分IDE检测情况。其他VB6日志记录模式（文件、NT事件日志）尚未支持。
:::

### LogPath

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

### Major

应用程序四部分版本号的**Major**组件。**Integer**，只读。

### Minor

应用程序四部分版本号的**Minor**组件。**Integer**，只读。

### ModulePath

可执行文件的完整路径。**String**，只读。这是`GetModuleFileName(App.hInstance, …)`会返回的值。

### NonModalAllowed

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

### OleRequestPendingMsgText

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

### OleRequestPendingMsgTitle

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

### OleRequestPendingTimeout

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

### OleServerBusyMsgText

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

### OleServerBusyMsgTitle

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

### OleServerBusyRaiseError

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

### OleServerBusyTimeout

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

### Path

包含可执行文件的文件夹，无尾部反斜杠。**String**，只读。在IDE内运行时，这是包含项目文件的文件夹而非IDE宿主的文件夹，因此相对于应用程序位置打开文件的代码在设计时和运行时行为一致。

### PrevInstance

如果应用程序的另一个实例已在运行则为**True**，否则为**False**。**Boolean**，只读。通常在启动时测试，以便第二个实例可以将第一个带到前台或优雅退出。

### ProductName

应用程序`VERSIONINFO`资源的**ProductName**字段。**String**，只读。

### RetainedProject

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

### Revision

应用程序四部分版本号的**Revision**组件。**Integer**，只读。

### StartMode

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

### TaskVisible

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

### ThreadID

应用程序主（UI）线程的Win32线程ID。**Long**，只读。

### Title

向操作系统显示的应用程序标题（在任务列表中）以及`MsgBox`、`InputBox`和其他系统对话框的默认标题。**String**，可读可写。默认为可执行文件的[**FileDescription**](#filedescription)（如果未设置描述则为[**EXEName**](#exename)）。

### UnattendedApp

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

## 方法

### LogEvent

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

语法：*object*.**LogEvent** *LogBuffer*, *EventType*

### StartLogging

::: info
保留用于VB6兼容性；twinBASIC中目前未实现。
:::

语法：*object*.**StartLogging** *LogTarget*, *LogModes*