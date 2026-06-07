---
title: CefLogSeverity
parent: Enumerations
permalink: /tB/Packages/CEF/Enumerations/CefLogSeverity
---
# CefLogSeverity

The minimum severity at which the CEF runtime records messages to its debug log. Assigned to [**EnvironmentOptions.LogSeverity**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#logseverity) before or during the [**Create**](/official/Reference/CEF/CefBrowser/#create) event; messages below the chosen level are discarded, messages at or above it are written to the file named by [**LogFilePath**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#logfilepath).

| Constant | Value | Description |
|----------|-------|-------------|
| **CefLogDisable** | 0 | Default --- logging is disabled. |
| **CefLogVerbose** | 1 | All messages, including verbose tracing. |
| **CefLogInfo** | 2 | Informational messages and above. |
| **CefLogWarning** | 3 | Warnings and above. |
| **CefLogError** | 4 | Errors and above. |
| **CefLogFatal** | 5 | Fatal errors only. |
