---
title: DoEvents
parent: Interaction Module
permalink: /tB/Modules/Interaction/DoEvents
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2ede2452-200c-464e-b066-dfc147ccdf74'
  PropagateID: '2ede2452-200c-464e-b066-dfc147ccdf74'
  ReservedCode1: 'b4567f65-e780-4543-83de-5c60fa7f7eb2'
  ReservedCode2: 'b4567f65-e780-4543-83de-5c60fa7f7eb2'
---

# DoEvents

让出执行权，以便操作系统能分派挂起的窗口消息和其他事件。

语法：**DoEvents()**

返回一个**Integer**，指示应用程序中打开的窗体数量；在不维护窗体集合的宿主中返回0。

**DoEvents**将控制权传递给操作系统。在操作系统完成处理其队列中的事件以及[**SendKeys**](/official/Reference/VBA/Interaction/SendKeys)队列中挂起的按键交付后，控制权返回给调用者。

**DoEvents**对于简单的事情最有用，例如在紧密循环期间保持UI响应，或让用户取消长时间运行的操作。对于真正长时间运行的工作，建议使用定时器或后台工作器（例如进程外ActiveX EXE），以便操作系统处理多任务。

::: important
每当在事件过程中让出处理器时，该过程在原始调用返回之前不得从不同的代码路径重新进入；否则程序可能会产生不可预测的行为。同样，在让出控制权期间其他应用程序可能以不可预见的方式与过程交互时，避免使用**DoEvents**。
:::

### 示例

本示例在循环中每1000次迭代让出一次控制权给操作系统。

```vb
Dim I As Long, OpenForms As Long
For I = 1 To 150000
    If I Mod 1000 = 0 Then
        OpenForms = DoEvents()
    End If
Next I
```

### 另请参阅

- [SendKeys](/official/Reference/VBA/Interaction/SendKeys)语句