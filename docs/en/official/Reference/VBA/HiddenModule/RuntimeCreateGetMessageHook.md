---
title: RuntimeCreateGetMessageHook
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/RuntimeCreateGetMessageHook
---
# RuntimeCreateGetMessageHook

Creates a fresh [**IGetMessageHook**](./#igetmessagehook-interface) for filtering Windows messages destined for a chosen window and (optionally) its descendants.

Syntax: **RuntimeCreateGetMessageHook()** **As IGetMessageHook**

The returned hook starts dormant. Subscribe a callback for one or more message types with [**RegisterMessage**](/en/official/Reference/VBA/HiddenModule/RegisterMessage), then call [**Start**](/en/official/Reference/VBA/HiddenModule/Start) to activate the subscriptions and [**Stop**](/en/official/Reference/VBA/HiddenModule/Stop) to remove them.

### Example

```vb
Const WM_LBUTTONDOWN = &H201

Sub HookClicks()
    Dim Hook As IGetMessageHook = RuntimeCreateGetMessageHook()
    Hook.RegisterMessage Me.hWnd, AllDescendants, _
                         WM_LBUTTONDOWN, AddressOf OnLButtonDown
    Hook.Start
End Sub
```

### See Also

- [IGetMessageHook interface](./#igetmessagehook-interface)
- [GetMessageHookHelper module](./#getmessagehookhelper-module)
