---
title: WebView2Request
parent: WebView2 Package
permalink: /tB/Packages/WebView2/WebView2Request
---

# WebView2Request class
The request side of a [**WebResourceRequested**](/en/official/Reference/WebView2/WebView2/#webresourcerequested) event. Exposes the HTTP method, target URI, request headers, and request body of a pending WebView2 request, and lets the event handler edit the body before the runtime sends it.

To be notified, register a URL filter first with [**AddWebResourceRequestedFilter**](/en/official/Reference/WebView2/WebView2/#addwebresourcerequestedfilter); only requests whose URI matches the filter raise the event.

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

## Properties

### ContentBytes

The request body as a byte array. Reading returns **Empty** when the request has no body; assigning installs an in-memory stream containing the bytes. Read / write.

Syntax: *object*.**ContentBytes** [ = *bytes* ]

*bytes*
: A **Byte()** array.

### ContentUTF8

The request body as a UTF-8 **String** --- a convenience over [**ContentBytes**](#contentbytes) that performs the `StrConv` round-trip automatically. Read / write.

Syntax: *object*.**ContentUTF8** [ = *text* ]

*text*
: A **String** that is converted to UTF-8 bytes before being installed as the request body.

### Headers

The request's HTTP headers as a [**WebView2RequestHeaders**](/en/official/Reference/WebView2/WebView2RequestHeaders) collection --- read or modify them before the request is sent. Read-only at the property level (the collection itself is mutable).

### Method

The HTTP method, e.g. `"GET"`, `"POST"`. **String**. Read-only.

### Uri

The target URI of the request. **String**. Read-only.
