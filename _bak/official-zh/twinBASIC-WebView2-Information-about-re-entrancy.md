## 关于重入性的信息

WebView2 API 对于不允许从其事件中重入有严格要求（参见 <a href="https://docs.microsoft.com/en-us/microsoft-edge/webview2/concepts/threading-model">WebView2 应用程序的线程模型</a>）。这意味着当我们处理诸如 `NavigationCompleted` 之类的事件时，在从该事件返回之前，我们通常被禁止对 WebView2 对象模型做任何操作。例如，您不能从 `NavigationCompleted` 事件本身内部导航到新的 URL。

为了解决这些限制，我们的 WebView2 实现通过窗体消息循环重新触发事件来延迟所有事件处理。这允许事件被处理并立即将执行控制权返回给 WebView2，然后我们的延迟事件会在 WebView2 返回到主消息循环时被触发。

由于我们实现的设计，在大多数情况下您可以忽略 WebView2 API 施加的重入限制。但是，如果您使用 WebView2 的 `AddObject` 功能（该功能允许您将 twinBASIC 类实例公开给 JavaScript），那么您需要注意 `AddObject` 功能有两种可用模式。

#### AddObject(ObjectInstance As Object, UseDeferredInvoke As Boolean)

如果您在 `AddObject` 调用的 `UseDeferredInvoke` 参数中传递 `True`，那么从 JavaScript 进入您的类实例的调用将被**异步**处理，因此您不能向 JavaScript 返回值。这非常适合事件通知。

如果您在 `AddObject` 调用的 `UseDeferredInvoke` 参数中传递 `False`，那么从 JavaScript 进入您的类实例的调用将被**同步**处理，因此您可以返回一个值供 JavaScript 使用，但您必须确保不会造成重入，所以您绝对不能调用回 WebView2 控件的方法和属性。请注意：如果您在不使用 `UseDeferredInvoke` 时调用回 WebView2 控件，那么您将导致死锁，使您的应用程序变得不稳定，有时在关闭后仍会在任务管理器中停留。

请注意，添加两个单独的对象是完全可以接受的，一个用于异步事件处理（使用 `UseDeferredInvoke:=True`），另一个用于同步属性（使用 `UseDeferredInvoke:=False`）。