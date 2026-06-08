---
title: RegisterMessage
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/RegisterMessage
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3212e551-462b-4125-9802-be5a9647972a'
  PropagateID: '3212e551-462b-4125-9802-be5a9647972a'
  ReservedCode1: '258a2a06-4223-4985-a4a8-b0041e97de77'
  ReservedCode2: '258a2a06-4223-4985-a4a8-b0041e97de77'
---

# RegisterMessage

为选定窗口和后代范围的单个Windows消息类型订阅回调。

语法：*hook*.**RegisterMessage** *ParentHWND* **,** *Mode* **,** *MessageType* **,** *Callback*

*hook*
: *必需* 一个[**IGetMessageHook**](./#igetmessagehook-interface)实例，通常由[**RuntimeCreateGetMessageHook**](/official/Reference/VBA/HiddenModule/RuntimeCreateGetMessageHook)返回。

*ParentHWND*
: *必需* **LongPtr**。订阅锚定的窗口。

*Mode*
: *必需* [**EnumDescendantsModeFlags**](./#enumdescendantsmodeflags)。后代范围：仅精确窗口、所有后代或仅直接子级。

*MessageType*
: *必需* **Integer**。要订阅的Windows `WM_*`消息标识符。每次调用订阅一种类型；重复调用**RegisterMessage**可监听多种消息。

*Callback*
: *必需* [**GetMessageHookHelper.GetMessageHandler**](./#getmessagehandler)。接收匹配消息的函数。传递`AddressOf`一个具有匹配签名的函数。

订阅会被记录，但在钩子上调用[**Start**](/official/Reference/VBA/HiddenModule/Start)之前不会开始触发。添加新订阅不会干扰现有订阅。

### 示例

```vb
Const WM_KEYDOWN = &H100
Const WM_CHAR = &H102

Sub HookKeyboard(ByVal h As IGetMessageHook)
    h.RegisterMessage Me.hWnd, AllDescendants, WM_KEYDOWN, AddressOf OnKeyDown
    h.RegisterMessage Me.hWnd, AllDescendants, WM_CHAR,    AddressOf OnChar
    h.Start
End Sub
```

### 另请参阅

- [Start](/official/Reference/VBA/HiddenModule/Start)方法
- [Stop](/official/Reference/VBA/HiddenModule/Stop)方法
- [IGetMessageHook接口](./#igetmessagehook-interface)
- [GetMessageHookHelper模块](./#getmessagehookhelper-module)