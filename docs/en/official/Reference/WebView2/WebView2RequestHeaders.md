---
title: WebView2RequestHeaders
parent: WebView2 Package
permalink: /tB/Packages/WebView2/WebView2RequestHeaders
---

# WebView2RequestHeaders class
The mutable HTTP-request-header collection for a navigation or a web-resource request. Reached two ways:

- As the **RequestHeaders** argument of the [**NavigationStarting**](/en/official/Reference/WebView2/WebView2/#navigationstarting) event --- the headers about to be sent for the page navigation. Mutations made before the event handler returns are transmitted.
- Through [**WebView2Request.Headers**](/en/official/Reference/WebView2/WebView2Request#headers) when handling a [**WebResourceRequested**](/en/official/Reference/WebView2/WebView2/#webresourcerequested) event.

The collection is enumerable: a `For Each` loop yields one [**WebView2Header**](/en/official/Reference/WebView2/WebView2Header) per entry.

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

## Methods

### AppendHeader

Sets the value of a header --- replacing the existing value if present, otherwise adding it. The underlying runtime call is `SetHeader`, so existing values for the named header are overwritten rather than appended; the method's name preserves twinBASIC's wrapping convention.

Syntax: *object*.**AppendHeader** *name*, *value*

*name*
: *required* A **String** header name.

*value*
: *required* A **String** header value.

### Contains

Indicates whether a header with the given name is present in the collection.

Syntax: *object*.**Contains** ( *name* ) **As Boolean**

*name*
: *required* A **String** header name.

### GetHeader

Returns the value of the named header.

Syntax: *object*.**GetHeader** ( *name* ) **As String**

*name*
: *required* A **String** header name.

### GetHeaders

Returns a [**WebView2HeadersCollection**](/en/official/Reference/WebView2/WebView2HeadersCollection) iterator restricted to the headers that match *name* --- useful for headers that may have multiple values.

Syntax: *object*.**GetHeaders** ( *name* ) **As WebView2HeadersCollection**

*name*
: *required* A **String** header name.

### RemoveHeader

Removes the named header from the collection.

Syntax: *object*.**RemoveHeader** *name*

*name*
: *required* A **String** header name.

## Iteration

A `For Each` loop over the collection produces every header in turn:

```vb
Dim h As WebView2Header
For Each h In RequestHeaders
    Debug.Print h.Name & ": " & h.Value
Next
```

The enumerator is forward-only and cannot be reset. See [**WebView2HeadersCollection**](/en/official/Reference/WebView2/WebView2HeadersCollection) for the iteration object.
