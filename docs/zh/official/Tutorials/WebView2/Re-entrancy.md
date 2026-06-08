---
title: "重入性"
parent: WebView2
nav_order: 3
permalink: /Tutorials/WebView2/Re-entrancy
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'deda59d9-134d-43ed-ba00-6e0a5af8604d'
  PropagateID: 'deda59d9-134d-43ed-ba00-6e0a5af8604d'
  ReservedCode1: '744f1003-893d-477d-b24a-c2e85bc04f3d'
  ReservedCode2: '744f1003-893d-477d-b24a-c2e85bc04f3d'
---

# 重入性

WebView2 API对不允许从其事件中重入非常严格（参见<a href="https://docs.microsoft.com/en-us/microsoft-edge/webview2/concepts/threading-model">WebView2应用的线程模型</a>）。这意味着当我们处理 `NavigationCompleted` 等事件时，通常禁止在从该事件返回之前对WebView2对象模型执行任何操作。例如，你不能在 `NavigationCompleted` 事件本身内导航到新的URL。

为了解决这些限制，我们的WebView2实现通过窗体消息循环重新触发事件来延迟所有事件处理。这允许事件被处理后立即将执行控制权返回WebView2，然后我们的延迟事件在WebView2返回主消息循环时被触发。

由于我们实现的设计，在大多数情况下你可以忽略WebView2 API施加的重入限制。但是，如果你使用WebView2的 `AddObject` 功能（允许你将twinBASIC类实例暴露给JavaScript），则需要注意 `AddObject` 功能有两种可用模式。

## AddObject(ObjectInstance As Object, UseDeferredInvoke As Boolean)

如果你向 `AddObject` 调用的 `UseDeferredInvoke` 参数传递 `True`，则从JavaScript进入你的类实例的调用将被视为**异步**的，因此你不能向JavaScript返回值。这非常适合事件通知。

如果你向 `AddObject` 调用的 `UseDeferredInvoke` 参数传递 `False`，则从JavaScript进入你的类实例的调用将被视为**同步**的，因此你可以返回供JavaScript使用的值，但你必须确保不会导致重入，因此绝不能回调到WebView2控件的方法和属性中。警告：如果你在不使用 `UseDeferredInvoke` 时确实回调了WebView2控件，你将导致死锁，使应用程序变得不稳定，有时关闭后仍停留在任务管理器中。

::: info
添加两个单独的对象是完全可以接受的：一个用于异步事件处理（使用 `UseDeferredInvoke:=True`），另一个用于同步属性（使用 `UseDeferredInvoke:=False`）。
:::