---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7c7e138c-89c0-43a3-8d26-f3e938227e07'
  PropagateID: '7c7e138c-89c0-43a3-8d26-f3e938227e07'
  ReservedCode1: '33a10c3b-efa0-4763-b7f3-77b1caed6fe1'
  ReservedCode2: '33a10c3b-efa0-4763-b7f3-77b1caed6fe1'
---

---
title: ErrorContext
parent: VBRUN Package
nav_order: 14
permalink: /tB/Packages/VBRUN/ErrorContext/
---

# ErrorContext 类

**ErrorContext**对象捕获运行时关于运行时错误的所有信息：其标识（[**Number**](#number)、[**Description**](#description)、[**Source**](#source)）、帮助引用（[**HelpFile**](#helpfile)、[**HelpContext**](#helpcontext)）、引发时的操作系统错误代码（[**LastDLLError**](#lastdllerror)）、错误处理机制的[**State**](#state)以及故障时刻的[**Callstack**](#callstack)快照。它是twinBASIC对较简单的[**Err**](/official/Reference/VBA/ErrObject/)对象的结构化对应。

错误标识属性（**Number**、**Description**、**Source**、**HelpFile**、**HelpContext**、**LastDLLError**）在此处的含义与**Err**对象上相同——参见[**ErrObject**](/official/Reference/VBA/ErrObject/)模块中各项的讨论。**State**和**Callstack**是**ErrorContext**独有的，反映了旧版**Err**对象上没有对应功能的结构化错误处理机制。

## 成员

### Callstack

返回错误引发时调用堆栈的快照，类型为[**ErrorCallstack**](/official/Reference/VBRUN/ErrorCallstack/)。

语法：*object*.**Callstack**

*object*
: *必需* 求值为**ErrorContext**对象的对象表达式。

快照按最外层在前列出每个活动过程；最内层帧是引发错误的过程。此集合为只读——参见[**ErrorCallstack**](/official/Reference/VBRUN/ErrorCallstack/)了解如何迭代。

### Description

返回错误的简短文本描述，类型为**String**。只读。

语法：*object*.**Description**

*object*
: *必需* 求值为**ErrorContext**对象的对象表达式。

对于运行时定义的错误，这是运行时将在未处理错误对话框中显示的消息。对于用户定义的错误，它是传递给**Err.Raise**的字符串。

### HelpContext

返回与错误关联的帮助文件上下文ID，类型为**Long**。只读。

语法：*object*.**HelpContext**

*object*
: *必需* 求值为**ErrorContext**对象的对象表达式。

当[**HelpFile**](#helpfile)指定帮助文件时，**HelpContext**标识该文件中记录错误的主题。如果没有关联的帮助上下文则为**0**。

### HelpFile

返回与错误关联的帮助文件路径，类型为**String**。只读。

语法：*object*.**HelpFile**

*object*
: *必需* 求值为**ErrorContext**对象的对象表达式。

如果没有关联的帮助文件则为零长度字符串。

### LastDLLError

返回Windows DLL调用记录的最后一个操作系统错误代码，类型为**Long**。只读。

语法：*object*.**LastDLLError**

*object*
: *必需* 求值为**ErrorContext**对象的对象表达式。

twinBASIC的错误捕获不会捕获Declare声明的Windows API调用内部的失败——这些调用通过返回值报告失败，调用代码必须检查此属性来了解底层Win32错误。此值仅在Windows上有意义。

### Number

返回运行时错误编号，类型为**Long**。只读。

语法：*object*.**Number**

*object*
: *必需* 求值为**ErrorContext**对象的对象表达式。

内置错误使用标准VBA错误代码（例如，9表示"下标越范围"，91表示"对象变量或With块变量未设置"）。使用**Err.Raise**引发的用户定义错误通常将**vbObjectError**偏移量加到每个应用程序的小代码上。

### Source

返回引发错误的对象或应用程序名称，类型为**String**。只读。

语法：*object*.**Source**

*object*
: *必需* 求值为**ErrorContext**对象的对象表达式。

对于在twinBASIC项目内部引发的错误，这是项目名称；对于由Automation服务器引发的错误，这是应用程序的编程标识符。用户代码在调用**Err.Raise**时可提供任意字符串。

### State

返回或设置标识当前活动错误处理构造的值，类型为**OnErrorStatus**值。

语法：*object*.**State** [ **=** *value* ]

*object*
: *必需* 求值为**ErrorContext**对象的对象表达式。

运行时在控制流经过错误处理器、**Try**/**Catch**/**Finally**块以及各种传播路径时更新**State**。读取此属性可告诉诊断代码它是从哪个构造调用的。对其赋值会覆盖运行时对下一步操作的决定——这是一种刻意设计的高级操作，主要用于诊断工具和管理自身错误流的库。

**OnErrorStatus**枚举值为：

OnErrorGoto0（&H1）
: 当前生效**On Error GoTo 0**——未安装处理器。

OnErrorResumeNext（&H2）
: 当前生效**On Error Resume Next**。

OnErrorGotoLabel（&H3）
: 当前生效**On Error GoTo** *label*。

OnErrorEnd（&H4）
: 因未处理错误导致执行终止。

OnErrorDebug（&H5）
: 运行时即将中断进入调试器。

CalledByLocalHandler（&H6）
: 当前执行的代码由本地错误处理器调用。

OnErrorRetry（&H7）
: 正在重试失败语句（**Resume**的结构化等价）。

OnErrorPropagate（&H8）
: 未处理的错误正在沿调用堆栈向上传播。

OnErrorExitProcedure（&H9）
: 错误正在强制当前过程退出。

OnErrorCatch（&Ha）
: 控制在匹配特定错误的**Catch**块内。

OnErrorCatchAll（&Hb）
: 控制在通用的"捕获全部"块内。

OnErrorInsideCatch（&Hc）
: 控制嵌套在**Catch**块内（处理器内部又引发了错误）。

OnErrorInsideCatchAll（&Hd）
: 控制嵌套在"捕获全部"块内。

OnErrorInsideFinally（&He）
: 控制在**Finally**块内。

OnErrorPropagateCatch（&Hf）
: 错误正在从**Catch**块传播出去。

OnErrorPropagateCatchAll（&H10）
: 错误正在从"捕获全部"块传播出去。