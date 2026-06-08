---
title: WebView2RequestHeaders
parent: "WebView2 包"
permalink: /tB/Packages/WebView2/WebView2RequestHeaders
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '53f43093-1949-4d2f-8902-ac479402d073'
  PropagateID: '53f43093-1949-4d2f-8902-ac479402d073'
  ReservedCode1: '4dfa700a-f00b-454a-9dbc-1eb5130834d6'
  ReservedCode2: '4dfa700a-f00b-454a-9dbc-1eb5130834d6'
---

# WebView2RequestHeaders 类
导航或 Web 资源请求的可变 HTTP 请求头集合。两种访问方式：

- 作为 [**NavigationStarting**](/official/Reference/WebView2/WebView2/#navigationstarting) 事件的 **RequestHeaders** 参数——即将为页面导航发送的头。在事件处理程序返回前所做的更改会被传输。
- 通过 [**WebView2Request.Headers**](/official/Reference/WebView2/WebView2Request#headers) 在处理 [**WebResourceRequested**](/official/Reference/WebView2/WebView2/#webresourcerequested) 事件时访问。

集合可枚举：`For Each` 循环对每个条目产出一个 [**WebView2Header**](/official/Reference/WebView2/WebView2Header)。

```vb
Private Sub WebView21_NavigationStarting( _
        ByVal Uri As String, _
        ByVal IsUserInitiated As Boolean, _
        ByVal IsRedirected As Boolean, _
        ByVal RequestHeaders As WebView2RequestHeaders, _
        Cancel As Boolean)

    If Not RequestHeaders.Contains("X-Forwarded-For") Then
        RequestHeaders.AppendHeader "X-Forwarded-For", "192.0.2.1"
    End If
End Sub
```

## 方法

### AppendHeader

设置头的值——如已存在则替换，否则添加。底层运行时调用是 `SetHeader`，因此已存在的同名头值会被覆盖而非追加；方法名保留了 twinBASIC 的封装约定。

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

返回指定名称头的值。

语法：*object*.**GetHeader** ( *name* ) **As String**

*name*
: *必需* 一个 **String** 头部名称。

### GetHeaders

返回一个 [**WebView2HeadersCollection**](/official/Reference/WebView2/WebView2HeadersCollection) 迭代器，限定为匹配 *name* 的头——适用于可能有多个值的头。

语法：*object*.**GetHeaders** ( *name* ) **As WebView2HeadersCollection**

*name*
: *必需* 一个 **String** 头部名称。

### RemoveHeader

从集合中移除指定名称的头。

语法：*object*.**RemoveHeader** *name*

*name*
: *必需* 一个 **String** 头部名称。

## 迭代

对集合执行 `For Each` 循环依次产出每个头：

```vb
Dim h As WebView2Header
For Each h In RequestHeaders
    Debug.Print h.Name & ": " & h.Value
Next
```

枚举器是仅向前的且无法重置。参见 [**WebView2HeadersCollection**](/official/Reference/WebView2/WebView2HeadersCollection) 了解迭代对象。