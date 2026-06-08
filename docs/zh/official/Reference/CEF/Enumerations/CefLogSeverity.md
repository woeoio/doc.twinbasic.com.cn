---
title: CefLogSeverity
parent: "枚举"
permalink: /tB/Packages/CEF/Enumerations/CefLogSeverity
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8047901e-7fef-4ce9-bf24-02a667e53af1'
  PropagateID: '8047901e-7fef-4ce9-bf24-02a667e53af1'
  ReservedCode1: 'c2e7906d-b07f-4360-9f43-6586d50176bd'
  ReservedCode2: 'c2e7906d-b07f-4360-9f43-6586d50176bd'
---

# CefLogSeverity

CEF 运行时将消息记录到其调试日志的最低严重级别。在 [**Create**](/official/Reference/CEF/CefBrowser/#create) 事件之前或期间赋值给 [**EnvironmentOptions.LogSeverity**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#logseverity)；低于所选级别的消息被丢弃，等于或高于它的消息写入由 [**LogFilePath**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#logfilepath) 命名的文件。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **CefLogDisable** | 0 | 默认——日志记录已禁用。 |
| **CefLogVerbose** | 1 | 所有消息，包括详细跟踪。 |
| **CefLogInfo** | 2 | 信息消息及以上。 |
| **CefLogWarning** | 3 | 警告及以上。 |
| **CefLogError** | 4 | 错误及以上。 |
| **CefLogFatal** | 5 | 仅致命错误。 |