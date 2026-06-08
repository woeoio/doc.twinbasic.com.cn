---
title: wv2ErrorStatus
parent: Enumerations
permalink: /tB/Packages/WebView2/Enumerations/wv2ErrorStatus
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ea1770de-678c-45e3-99d6-96e2ab9f4e5d'
  PropagateID: 'ea1770de-678c-45e3-99d6-96e2ab9f4e5d'
  ReservedCode1: 'bdd98bea-ae15-42d2-8f34-5fc38c510bd3'
  ReservedCode2: 'bdd98bea-ae15-42d2-8f34-5fc38c510bd3'
---

# wv2ErrorStatus
导航失败的原因。作为 [**NavigationComplete**](/official/Reference/WebView2/WebView2/#navigationcomplete) 事件的 `WebErrorStatus` 参数传递——仅在其 `IsSuccess` 参数为 **False** 时有意义。镜像 `COREWEBVIEW2_WEB_ERROR_STATUS` 枚举。

| 常量 | 值 | 描述 |
|------|-----|------|
| **wv2StateUnknown** | 0 | 未指定或无法识别的错误。 |
| **wv2CertificateCommonNameIsIncorrect** | 1 | 服务器证书的公用名与请求的主机不匹配。 |
| **wv2CertificateExpired** | 2 | 服务器证书已过期。 |
| **wv2ClientCertificateContainsErrors** | 3 | 客户端证书包含错误。 |
| **wv2CertificateRevoked** | 4 | 服务器证书已被吊销。 |
| **wv2CertificateIsInvalid** | 5 | 服务器证书其他方面无效。 |
| **wv2ServerUnreachable** | 6 | 无法连接到服务器。 |
| **wv2Timeout** | 7 | 连接或请求超时。 |
| **wv2ErrorHttpInvalidServerResponse** | 8 | 服务器返回了格式错误的 HTTP 响应。 |
| **wv2ConnectionAborted** | 9 | 连接被中止。 |
| **wv2ConnectionReset** | 10 | 连接被重置。 |
| **wv2Disconnected** | 11 | 连接断开。 |
| **wv2CannotConnect** | 12 | 无法建立连接。 |
| **wv2HostNameNotResolved** | 13 | DNS 查找失败。 |
| **wv2OperationCanceled** | 14 | 导航被取消。 |
| **wv2RedirectFailed** | 15 | 无法跟随重定向。 |
| **wv2UnexpectedError** | 16 | 发生意外错误。 |
| **wv2ValidAuthenticationCredentialsRequired** | 17 | 服务器要求提供凭据。 |
| **wv2ValidProxyAuthenticationRequired** | 18 | 配置的代理要求提供凭据。 |