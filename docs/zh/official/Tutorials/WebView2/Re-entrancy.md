## 关于重入性的信息

WebView2 API 对于不允许从其事件中重入非常特别（参见 <a href="https://docs.microsoft.com/en-us/microsoft-edge/webview2/concepts/threading-model">WebView2 应用线程模型</a>）。这意味着当我们处理 `NavigationCompleted` 等事件时，通常禁止在从该事件返回之前对 WebView2 对象模型执行任何操作。例如，您不能在 `NavigivationCompleted` 事件本身内导航到新 URL。

为了克服这些限制，我们的 WebView2 实现通过窗体消息循环重新触发事件来推迟所有事件处理。这允许事件被处理，执行控制权立即返回给 WebView2，然后一旦 WebView2 返回到主消息循环，我们的推迟事件就会被触发。

由于我们的实现设计，在大多数情况下，您可以忘记 WebView2 API 施加的重入性限制。但是，如果您使用 WebView2 的 `AddObject` 功能（允许您将 twinBASIC 类实例暴露给 javascript），那么您需要注意 `AddObject` 功能有两种模式可用。

#### AddObject(ObjectInstance As Object, UseDeferredInvoke As Boolean)

如果您将 `True` 传递给 `AddObject` 调用的 `UseDeferredInvoke` 参数，那么从 javascript 到您的类实例的调用将被**异步**处理，因此您无法向 javascript 返回值。这非常适合事件通知。

如果您将 `False` 传递给 `AddObject` 调用的 `UseDeferredInvoke` 参数，那么从 javascript 到您的类实例的调用将被**同步**处理，因此您可以返回值供 javascript 使用，但您必须确保不会导致重入性，因此您绝不能调用回到 WebView2 控件的方法和属性。请注意：如果您在不使用 `UseDeferredInvoke` 时调用回到 WebView2 控件，将导致死锁，使您的应用程序变得不稳定，有时在关闭后仍会在任务管理器中残留。

注意，完全可以添加两个单独的对象，一个用于异步事件处理（使用 `UseDeferredInvoke:=True`），另一个用于同步属性（使用 `UseDeferredInvoke:=False`）。
