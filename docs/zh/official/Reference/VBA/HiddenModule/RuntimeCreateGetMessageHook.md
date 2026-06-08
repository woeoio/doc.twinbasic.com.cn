---
title: RuntimeCreateGetMessageHook
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/RuntimeCreateGetMessageHook
---
# RuntimeCreateGetMessageHook

创建一个新的[**IGetMessageHook**](./#igetmessagehook-interface)，用于过滤发送到选定窗口及其（可选）后代的Windows消息。

语法：**RuntimeCreateGetMessageHook()** **As IGetMessageHook**

返回的钩子初始为休眠状态。使用[**RegisterMessage**](/official/Reference/VBA/HiddenModule/RegisterMessage)为一个或多个消息类型订阅回调，然后调用[**Start**](/official/Reference/VBA/HiddenModule/Start)激活订阅，调用[**Stop**](/official/Reference/VBA/HiddenModule/Stop)移除订阅。

### 示例

```vb
Const WM_LBUTTONDOWN = &H201

Sub HookClicks()
    Dim Hook As IGetMessageHook = RuntimeCreateGetMessageHook()
    Hook.RegisterMessage Me.hWnd, AllDescendants, _
                         WM_LBUTTONDOWN, AddressOf OnLButtonDown
    Hook.Start
End Sub
```

### 另请参阅

- [IGetMessageHook接口](./#igetmessagehook-interface)
- [GetMessageHookHelper模块](./#getmessagehookhelper-module)
