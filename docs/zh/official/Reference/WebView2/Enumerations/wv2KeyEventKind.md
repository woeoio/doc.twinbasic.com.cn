---
title: wv2KeyEventKind
parent: Enumerations
permalink: /tB/Packages/WebView2/Enumerations/wv2KeyEventKind
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3e7e6f0a-5b0c-4feb-af5b-4a39be1f7d20'
  PropagateID: '3e7e6f0a-5b0c-4feb-af5b-4a39be1f7d20'
  ReservedCode1: '2262f669-de51-4f4a-b6a1-f1aa741fafd6'
  ReservedCode2: '2262f669-de51-4f4a-b6a1-f1aa741fafd6'
---

# wv2KeyEventKind
触发 [**AcceleratorKeyPressed**](/official/Reference/WebView2/WebView2/#acceleratorkeypressed) 事件的快捷键键盘消息的类型，作为其 **ByRef** `KeyState` 参数传递。镜像 `COREWEBVIEW2_KEY_EVENT_KIND` 枚举。

| 常量 | 值 | 描述 |
|------|-----|------|
| **wv2EventKeyDown** | 0 | 由 `WM_KEYDOWN` 消息触发。 |
| **wv2EventKeyUp** | 1 | 由 `WM_KEYUP` 消息触发。 |
| **wv2EventSystemKeyDown** | 2 | 由 `WM_SYSKEYDOWN` 消息触发——例如 **Alt+** *键*。 |
| **wv2EventSystemKeyUp** | 3 | 由 `WM_SYSKEYUP` 消息触发。 |