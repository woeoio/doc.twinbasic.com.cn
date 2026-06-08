---
title: WebView2ResponseHeaders
parent: "WebView2 包"
permalink: /tB/Packages/WebView2/WebView2ResponseHeaders
---

# WebView2ResponseHeaders 类
Web 资源响应的 HTTP 响应头集合。在 [**WebResourceRequested**](/official/Reference/WebView2/WebView2/#webresourcerequested) 事件处理程序中通过 [**WebView2Response.Headers**](/official/Reference/WebView2/WebView2Response#headers) 访问。

集合可枚举——`For Each` 对每个条目产出一个 [**WebView2Header**](/official/Reference/WebView2/WebView2Header)。与请求端不同，**AppendHeader** 追加额外值而非覆盖已有值，符合 HTTP 允许重复响应头的规定（例如多个 `Set-Cookie`）。

```vb
Private Sub WebView21_WebResourceRequested( _
        ByVal Request As WebView2Request, _
        ByVal Response As WebView2Response)

    Response.StatusCode = 200
    Response.ReasonPhrase = "OK"
    Response.Headers.AppendHeader "Content-Type", "text/plain; charset=utf-8"
    Response.ContentUTF8 = "Hello from twinBASIC."
End Sub
```

## 方法

### AppendHeader

追加头部——即使同名条目已存在也将其添加到集合中。HTTP 响应中允许重复头。

语法：*object*.**AppendHeader** *name*, *value*

*name*
: *必需* 一个 **String** 头部名称。

*value*
: *必需* 一个 **String** 头部值。

### Contains

指示集合中是否存在具有给定名称的头。

语法：*object*.**Contains** ( *name* ) **As Boolean**

*name*
: *必需* 一个 **String** 头部名称。

### GetHeader

返回指定名称头的值——当有多个时，返回第一个。

语法：*object*.**GetHeader** ( *name* ) **As String**

*name*
: *必需* 一个 **String** 头部名称。

### GetHeaders

返回一个 [**WebView2HeadersCollection**](/official/Reference/WebView2/WebView2HeadersCollection) 迭代器，限定为匹配 *name* 的头。

语法：*object*.**GetHeaders** ( *name* ) **As WebView2HeadersCollection**

*name*
: *必需* 一个 **String** 头部名称。

## 迭代

`For Each` 循环依次产出每个头：

```vb
Dim h As WebView2Header
For Each h In Response.Headers
    Debug.Print h.Name & ": " & h.Value
Next
```

参见 [**WebView2HeadersCollection**](/official/Reference/WebView2/WebView2HeadersCollection) 了解迭代对象。