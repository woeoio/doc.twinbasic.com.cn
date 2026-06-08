---
title: ToolWindows
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/ToolWindows
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'aa25fa94-34e1-41e6-9c59-27ffc7a64d81'
  PropagateID: 'aa25fa94-34e1-41e6-9c59-27ffc7a64d81'
  ReservedCode1: '08c264b3-51c7-4cbe-9146-27f99d19de7b'
  ReservedCode2: '08c264b3-51c7-4cbe-9146-27f99d19de7b'
---

# ToolWindows 类

IDE 的工具窗口工厂——通过 [**Host.ToolWindows**](/official/Reference/tbIDE/Host#toolwindows) 访问。调用 [**Add**](#add) 创建新的 HTML 渲染窗格；通过返回的 [**ToolWindow**](/official/Reference/tbIDE/ToolWindow) 的 [**RootDomElement**](/official/Reference/tbIDE/ToolWindow#rootdomelement) 填充其 DOM；通过设置 [**Visible**](/official/Reference/tbIDE/ToolWindow#visible) = **True** 显示窗格。

```vb
Set myWindow = Host.ToolWindows.Add("MyAddIn.MyWindow", "MyAddIn.MyWindowPosition")
```

## 方法

### Add

创建新的工具窗口并返回其 [**ToolWindow**](/official/Reference/tbIDE/ToolWindow) 对象。新创建的窗格初始 **Visible = False**；先填充内容，然后翻转 [**Visible**](/official/Reference/tbIDE/ToolWindow#visible) = **True** 以显示。

语法：*toolWindows*.**Add**( *Name* [, *UniqueIdForPositionPersistance* ] ) **As** [**ToolWindow**](/official/Reference/tbIDE/ToolWindow)

*Name*
: *必需* 工具窗口的内部名称。**String**。选择带插件前缀的值，以避免多个插件在名称上冲突。

*UniqueIdForPositionPersistance*
: *可选* 一个稳定标识符，IDE 用它来记住窗格的大小、位置和停靠状态，跨 IDE 重启持久化。**String**。省略以使窗格非持久化——每次打开都从 `suggestedWidth` / `suggestedHeight`（参见 [**ToolWindow**](/official/Reference/tbIDE/ToolWindow#建议初始大小)）确定大小，并按 IDE 的默认放置逻辑定位。

```vb
' 持久化（用户可见窗格的首选）：
Set myWindow = Host.ToolWindows.Add("MyAddIn.SearchPane", "MyAddIn.SearchPane.position")

' 非持久化（用于临时一次性对话框）：
Set myWindow = Host.ToolWindows.Add("MyAddIn.QuickPrompt")
```