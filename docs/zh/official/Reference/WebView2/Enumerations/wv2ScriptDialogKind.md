---
title: wv2ScriptDialogKind
parent: Enumerations
permalink: /tB/Packages/WebView2/Enumerations/wv2ScriptDialogKind
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '75b7bd33-2495-4bd3-89ca-35aa55dab12e'
  PropagateID: '75b7bd33-2495-4bd3-89ca-35aa55dab12e'
  ReservedCode1: '243e9862-62e6-4965-b4c2-fde9feda7b4d'
  ReservedCode2: '243e9862-62e6-4965-b4c2-fde9feda7b4d'
---

# wv2ScriptDialogKind
标识页面尝试打开的 JavaScript 对话框基元类型。作为 [**ScriptDialogOpening**](/official/Reference/WebView2/WebView2/#scriptdialogopening) 事件的 `ScriptDialogKind` 参数传递——该事件仅在 **AreDefaultScriptDialogsEnabled** 为 **False** 时触发，以便应用程序实现自己的对话框。镜像 `COREWEBVIEW2_SCRIPT_DIALOG_KIND` 枚举。

| 常量 | 值 | 描述 |
|------|-----|------|
| **wv2DialogAlert** | 0 | `alert()` —— 带有*确定*按钮的单消息通知。 |
| **wv2DialogConfirm** | 1 | `confirm()` —— 带有*确定*和*取消*的问题。 |
| **wv2DialogPrompt** | 2 | `prompt()` —— 带文本输入的问题，含有*确定*和*取消*。 |
| **wv2DialogBeforeUnload** | 3 | 浏览器的*离开此页面？*确认，由 `beforeunload` 触发。 |