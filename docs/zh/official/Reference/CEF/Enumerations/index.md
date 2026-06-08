---
title: "枚举"
parent: CEF 包
permalink: /tB/Packages/CEF/Enumerations/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4b9c27c3-b360-4995-a54e-531f47d13f73'
  PropagateID: '4b9c27c3-b360-4995-a54e-531f47d13f73'
  ReservedCode1: '47d746c2-a3d9-4742-8a9c-876ee6bf8bee'
  ReservedCode2: '47d746c2-a3d9-4742-8a9c-876ee6bf8bee'
---

# 枚举

**CEF** 包暴露的两个面向用户的枚举。包中更大的一组内部 `cef_*_t` 枚举（镜像CEF C API）存在于 `Private Module` 包装器中，不属于公共API。

| 枚举 | 使用者 |
|-------------|---------|
| [CefLogSeverity](/official/Reference/CEF/Enumerations/CefLogSeverity) | [**EnvironmentOptions.LogSeverity**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#logseverity) |
| [cefPrintOrientation](/official/Reference/CEF/Enumerations/cefPrintOrientation) | [**PrintToPdf**](/official/Reference/CEF/CefBrowser/#printtopdf) 上的 `Orientation` |