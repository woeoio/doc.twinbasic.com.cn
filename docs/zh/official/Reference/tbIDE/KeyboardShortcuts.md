---
title: KeyboardShortcuts
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/KeyboardShortcuts
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'acfcb712-7979-4471-8177-06f75e0a2034'
  PropagateID: 'acfcb712-7979-4471-8177-06f75e0a2034'
  ReservedCode1: 'ddebe8a9-99a3-46be-9983-1ff6106a4455'
  ReservedCode2: 'ddebe8a9-99a3-46be-9983-1ff6106a4455'
---

# KeyboardShortcuts 类

IDE 的键盘快捷键注册表——通过 [**Host.KeyboardShortcuts**](/official/Reference/tbIDE/Host#keyboardshortcuts) 访问。调用 [**Add**](#add) 将组合键绑定到回调。没有移除 API；当插件卸载时注册被释放。

```vb
Private Sub Host_OnProjectLoaded()
    Host.KeyboardShortcuts.Add "{CTRL}{SHIFT}d", AddressOf ToggleDebugMode
End Sub

Private Sub ToggleDebugMode()
    debugMode = Not debugMode
    Host.DebugConsole.PrintText "Debug mode " & If(debugMode, "ON", "OFF")
End Sub
```

快捷键对 IDE 全局有效，只要 IDE 本身拥有操作系统级焦点，无论哪个窗格获得焦点都会触发。回调在 IDE 的 UI 线程上运行。

## 方法

### Add

注册新的键盘快捷键。

语法：*keyboardShortcuts*.**Add** *keyString*, *Callback*

*keyString*
: *必需* 组合键，为 **String**。字面键字符前有零个或多个来自 `{CTRL}`、`{SHIFT}`、`{ALT}` 集合的修饰符前缀。前缀不区分大小写；尾部键字符与用户按下的键相匹配。

  | 示例         | 组合键               |
  |-----------------|---------------------------|
  | `"{CTRL}d"`     | Ctrl + D                  |
  | `"{CTRL}{SHIFT}d"` | Ctrl + Shift + D       |
  | `"{ALT}f"`      | Alt + F                   |
  | `"f1"`          | F1（无修饰符）            |

*Callback*
: *必需* 回调。传入签名为 `Sub()`（无参数）的子过程的 `AddressOf`。**LongPtr**。

回调在 IDE 的 UI 线程上运行。回调中的长时间运行工作会阻塞 IDE 直到其返回——保持回调简短，需要时将繁重工作卸载到后台机制。