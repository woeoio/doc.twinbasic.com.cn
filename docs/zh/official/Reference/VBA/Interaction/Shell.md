---
title: Shell
parent: Interaction Module
permalink: /tB/Modules/Interaction/Shell
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6daf8eae-f4d9-4814-b8b5-f9a1290c9188'
  PropagateID: '6daf8eae-f4d9-4814-b8b5-f9a1290c9188'
  ReservedCode1: 'ced675b6-f911-41ef-b9c1-b5cfc9dae323'
  ReservedCode2: 'ced675b6-f911-41ef-b9c1-b5cfc9dae323'
---

# Shell

异步运行可执行程序并返回一个**Double**，包含新进程的任务ID，如果无法启动程序则返回零。

语法：**Shell(** *pathname* [ **,** *windowstyle* ] **)**

*pathname*
: *必需* **Variant**（**String**）。要执行的程序名称，可选包含目录或驱动器，以及任何所需的参数或命令行开关。

*windowstyle*
: *可选* [**VbAppWinStyle**](/official/Reference/VBA/Constants/VbAppWinStyle)值，指定程序运行的窗口样式。如果省略，程序以最小化且有焦点的方式启动（`vbMinimizedFocus`）。

如果**Shell**成功启动命名的程序，它返回新进程的任务ID——标识运行程序的唯一编号。如果**Shell**无法启动命名的程序，则引发运行时错误。

::: info
默认情况下，**Shell***异步*运行其他程序：使用**Shell**启动的程序可能在**Shell**之后的语句执行时尚未完成——甚至尚未完全启动。要等待程序完成，请保留返回的任务ID并通过Win32 `OpenProcess`/`WaitForSingleObject` API轮询进程（或使用更高级的辅助工具）。
:::

### 示例

本示例使用**Shell**以正常大小焦点窗口运行记事本。

```vb
Dim TaskId As Double
TaskId = Shell("C:\Windows\Notepad.exe", vbNormalFocus)
```

### 另请参阅

- [AppActivate](/official/Reference/VBA/Interaction/AppActivate)语句
- [SendKeys](/official/Reference/VBA/Interaction/SendKeys)语句
- [VbAppWinStyle](/official/Reference/VBA/Constants/VbAppWinStyle)枚举