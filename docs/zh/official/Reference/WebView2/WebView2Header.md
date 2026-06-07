---
title: WebView2Header
parent: WebView2 Package
permalink: /tB/Packages/WebView2/WebView2Header
---

# WebView2Header class
A single HTTP header --- a name / value pair. **WebView2Header** is the element type produced by iterating a [**WebView2HeadersCollection**](/official/Reference/WebView2/WebView2HeadersCollection), which in turn comes from a [**WebView2RequestHeaders**](/official/Reference/WebView2/WebView2RequestHeaders) or [**WebView2ResponseHeaders**](/official/Reference/WebView2/WebView2ResponseHeaders) collection.

```vb
Dim h As WebView2Header
For Each h In Request.Headers
    Debug.Print h.Name & ": " & h.Value
Next
```

## Properties

### Name

The header name.

Syntax: *object*.**Name** [ = *string* ]

**String**.

### Value

The header value.

Syntax: *object*.**Value** [ = *string* ]

**String**.

## Methods

### New

Constructs a header. Application code does not normally create headers manually --- instances are produced by the package while iterating a request- or response-header collection --- but the constructor is **Public**.

Syntax: **New WebView2Header** ( *Name*, *Value* )

*Name*
: *required* A **String** header name.

*Value*
: *required* A **String** header value.
