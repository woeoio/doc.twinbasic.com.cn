---
title: EnvironmentOptions
parent: CefBrowser
permalink: /tB/Packages/CEF/CefBrowser/EnvironmentOptions
---

# CefEnvironmentOptions class

Pre-creation configuration for the CEF environment --- runtime folder, user-data folder, and the optional debug-log destination. Available on every [**CefBrowser**](/en/official/Reference/CEF/CefBrowser) control as its **EnvironmentOptions** property; the control instantiates one automatically before raising the [**Create**](/en/official/Reference/CEF/CefBrowser#create) event.

The fields below take effect only while the CEF runtime is being launched --- that is, *before or during* the control's [**Create**](/en/official/Reference/CEF/CefBrowser#create) event. Assigning them after that point has no effect on the live environment.

```vb
Private Sub CefBrowser1_Create()
    CefBrowser1.EnvironmentOptions.UserDataFolder = _
        Environ$("APPDATA") & "\MyApp\CEF\"
    CefBrowser1.EnvironmentOptions.LogFilePath = _
        Environ$("APPDATA") & "\MyApp\CEF\debug.log"
    CefBrowser1.EnvironmentOptions.LogSeverity = CefLogWarning
End Sub
```

The type itself is `Private Class` --- instances are reachable only through the control's **EnvironmentOptions** property, and a variable typed as **CefEnvironmentOptions** cannot be declared from outside the package.

## Properties

### BrowserExecutableFolder

Path to the folder containing `libcef.dll` and its accompanying runtime files. **String**. Default: empty (the runtime is loaded from `%LocalAppData%\twinBASIC_CEF_Runtime\<version-stamped-folder>` --- see [Installing runtime files](/en/official/Reference/CEF#installing-runtime-files)).

Set this to point at a portable side-by-side deployment, e.g. a CEF folder shipped beside the application executable:

```vb
Private Sub CefBrowser1_Create()
    CefBrowser1.EnvironmentOptions.BrowserExecutableFolder = _
        App.Path & "\cef145_win64"
End Sub
```

If `libcef.dll` is not found at the configured (or default) location, the [**Error**](/en/official/Reference/CEF/CefBrowser#error) event fires with the exact path that was searched.

### LogFilePath

Path to a writable file CEF will append its debug log to. **String**. Default: empty (no log file is written, regardless of [**LogSeverity**](#logseverity)).

Used together with [**LogSeverity**](#logseverity) --- messages at or above the chosen severity are written to this file. The log is appended across runs; rotate or delete the file as needed.

### LogSeverity

The minimum severity at which CEF records messages to the log file named by [**LogFilePath**](#logfilepath). [**CefLogSeverity**](/en/official/Reference/CEF/Enumerations/CefLogSeverity). Default: **CefLogDisable** (logging off).

Set to **CefLogWarning** or **CefLogError** when investigating runtime issues, and back to **CefLogDisable** for normal use.

### UserDataFolder

Path to the folder CEF uses for the user profile --- cache, cookies, history, local storage, and so on. **String**. Default: empty (the runtime picks a folder under `%LocalAppData%\twinBASIC_CEF\<ProjectName>\`).

Set a writable, application-specific path when the default would end up in a read-only location, or when multiple deployments of the same application must keep their profiles separate. The same folder cannot be opened by two CEF processes simultaneously --- if it's already locked, the [**Error**](/en/official/Reference/CEF/CefBrowser#error) event fires with *"CEF cache path already locked by another process"*.

### See Also

- [CefBrowser control class](/en/official/Reference/CEF/CefBrowser)
- [Create event](/en/official/Reference/CEF/CefBrowser#create)
- [Installing runtime files](/en/official/Reference/CEF#installing-runtime-files)
- [Overriding the runtime location](/en/official/Reference/CEF#overriding-the-runtime-location)
- [WebView2EnvironmentOptions](/en/official/Reference/WebView2/WebView2/EnvironmentOptions) -- the WebView2 counterpart
