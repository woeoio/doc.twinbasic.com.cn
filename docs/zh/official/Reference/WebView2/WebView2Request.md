---
title: WebView2Request
parent: "WebView2 包"
permalink: /tB/Packages/WebView2/WebView2Request
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '82d24308-5cd2-41b4-8da6-06fbf136d931'
  PropagateID: '82d24308-5cd2-41b4-8da6-06fbf136d931'
  ReservedCode1: '90bfaff8-605d-4885-9b02-1b7a0e343490'
  ReservedCode2: '90bfaff8-605d-4885-9b02-1b7a0e343490'
---

# WebView2Request 类
[**WebResourceRequested**](/official/Reference/WebView2/WebView2/#webresourcerequested) 事件的请求端。暴露待处理 WebView2 请求的 HTTP 方法、目标 URI、请求头和请求体，并允许事件处理程序在运行时发送请求前编辑请求体。

要接收通知，需先用 [**AddWebResourceRequestedFilter**](/official/Reference/WebView2/WebView2/#addwebresourcerequestedfilter) 注册 URL 过滤器；只有 URI 匹配过滤器的请求才会触发事件。

```vb
Private Sub Form_Load()
    WebView21.AddWebResourceRequestedFilter "https://api.example.com/*", wv2All
End Sub

Private Sub WebView21_WebResourceRequested( _
        ByVal Request As WebView2Request, _
        ByVal Response As WebView2Response)

    Debug.Print Request.Method & " " & Request.Uri
End Sub
```

## 属性

### ContentBytes

请求体的字节数组。当请求没有请求体时读取返回 **Empty**；赋值时安装包含该字节的内存流。可读/写。

语法：*object*.**ContentBytes** [ = *bytes* ]

*bytes*
: 一个 **Byte()** 数组。

### ContentUTF8

请求体的 UTF-8 **String**——是 [**ContentBytes**](#contentbytes) 的便利方法，自动执行 `StrConv` 往返转换。可读/写。

语法：*object*.**ContentUTF8** [ = *text* ]

*text*
: 一个 **String**，在安装为请求体之前转换为 UTF-8 字节。

### Headers

请求的 HTTP 头，为 [**WebView2RequestHeaders**](/official/Reference/WebView2/WebView2RequestHeaders) 集合——在请求发送前读取或修改。属性层面只读（集合本身可变）。

### Method

HTTP 方法，例如 `"GET"`、`"POST"`。**String**。只读。

### Uri

请求的目标 URI。**String**。只读。