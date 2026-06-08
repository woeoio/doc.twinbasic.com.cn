---
title: DebugConsole
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/DebugConsole
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'bce81b38-a999-4ce1-b842-1a14007d0911'
  PropagateID: 'bce81b38-a999-4ce1-b842-1a14007d0911'
  ReservedCode1: '49e35556-f135-40bf-9baf-b7d93b84e7d7'
  ReservedCode2: '49e35556-f135-40bf-9baf-b7d93b84e7d7'
---

# DebugConsole 类

IDE 的调试控制台窗格——通过 [**Host.DebugConsole**](/official/Reference/tbIDE/Host#debugconsole) 访问。插件写入诊断和日志输出的规范位置。

```vb
With Host.DebugConsole
    .PrintText "[MyAddIn] Project: " & Host.CurrentProject.Name
    .PrintText "[MyAddIn] Compiler: " & Host.CompilerVersion
    .PrintText "[MyAddIn] PID: "      & Host.IDEProcessID
End With
```

该窗格在 IDE 自身输出和每个插件的输出之间共享——用插件标签（例如 `"[MyAddIn] "`）作为日志行前缀，以便用户区分来源。


## 方法

### Clear

清除调试控制台窗格的全部内容。

语法：*debugConsole*.**Clear**

### PrintText

向窗格打印一行文本。

语法：*debugConsole*.**PrintText** *Prompt* [, *ColorRGB* ]

*Prompt*
: *必需* 要打印的文本。**String**。

*ColorRGB*
: *可选* 文本颜色，为 RGB **Long**（使用 `RGB(r, g, b)` 函数构造）。默认 0——IDE 的默认调试控制台前景色。

```vb
Host.DebugConsole.PrintText "Operation completed"                           ' 默认颜色
Host.DebugConsole.PrintText "Warning: something looks off", RGB(255, 128, 0) ' 橙色
```

### SetFocus

将键盘焦点给予调试控制台的文本输入点——等同于用户点击控制台。

语法：*debugConsole*.**SetFocus**