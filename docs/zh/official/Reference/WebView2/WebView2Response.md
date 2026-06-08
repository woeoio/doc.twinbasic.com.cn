---
title: WebView2Response
parent: "WebView2 包"
permalink: /tB/Packages/WebView2/WebView2Response
---

# WebView2Response 类
[**WebResourceRequested**](/official/Reference/WebView2/WebView2/#webresourcerequested) 事件的响应端。填写 [**StatusCode**](#statuscode)、[**ReasonPhrase**](#reasonphrase)、[**Headers**](#headers) 中的任意一个，或任一内容属性，运行时将向页面返回该合成响应，而非访问网络。

如果事件处理程序未触碰响应（未写入任何属性），运行时将执行正常获取——待处理请求保持不变。

```vb
Private Sub Form_Load()
    WebView21.AddWebResourceRequestedFilter "https://api.example.com/*", wv2All
End Sub

Private Sub WebView21_WebResourceRequested( _
        ByVal Request As WebView2Request, _
        ByVal Response As WebView2Response)

    Response.StatusCode = 200
    Response.ReasonPhrase = "OK"
    Response.Headers.AppendHeader "Content-Type", "application/json"
    Response.ContentUTF8 = "{""greeting"":""hello from twinBASIC""}"
End Sub
```

## 属性

### ContentBytes

响应体的字节数组。未设置响应体时读取返回 **Empty**；赋值时安装包含该字节的内存流。可读/写。

语法：*object*.**ContentBytes** [ = *bytes* ]

*bytes*
: 一个 **Byte()** 数组。

### ContentUTF8

响应体的 UTF-8 **String**——是 [**ContentBytes**](#contentbytes) 的便利方法，自动执行 `StrConv` 往返转换。可读/写。

语法：*object*.**ContentUTF8** [ = *text* ]

*text*
: 一个 **String**，在安装为响应体之前转换为 UTF-8 字节。

### Headers

响应的 HTTP 头，为 [**WebView2ResponseHeaders**](/official/Reference/WebView2/WebView2ResponseHeaders) 集合——在此添加或检查头。属性层面只读（集合本身可变）。

### ReasonPhrase

HTTP 原因短语，例如 `"OK"`、`"Not Found"`。**String**。可读/写。

### StatusCode

HTTP 状态码，例如 `200`、`404`。**Long**。可读/写。