---
title: WebView2Header
parent: "WebView2 包"
permalink: /tB/Packages/WebView2/WebView2Header
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4ff102b7-d87e-4342-9cdd-6e563c28c639'
  PropagateID: '4ff102b7-d87e-4342-9cdd-6e563c28c639'
  ReservedCode1: '3efaffb8-e5e6-4660-b61f-8e6f56a7f8f5'
  ReservedCode2: '3efaffb8-e5e6-4660-b61f-8e6f56a7f8f5'
---

# WebView2Header 类
单个 HTTP 头——一个名称/值对。**WebView2Header** 是迭代 [**WebView2HeadersCollection**](/official/Reference/WebView2/WebView2HeadersCollection) 时产出的元素类型，而集合又来自 [**WebView2RequestHeaders**](/official/Reference/WebView2/WebView2RequestHeaders) 或 [**WebView2ResponseHeaders**](/official/Reference/WebView2/WebView2ResponseHeaders) 集合。

```vb
Dim h As WebView2Header
For Each h In Request.Headers
    Debug.Print h.Name & ": " & h.Value
Next
```

## 属性

### Name

头部名称。

语法：*object*.**Name** [ = *string* ]

**String**。

### Value

头部值。

语法：*object*.**Value** [ = *string* ]

**String**。

## 方法

### New

构造头部。应用程序代码通常不需要手动创建头部——实例由包在迭代请求或响应头集合时产出——但构造函数是 **Public** 的。

语法：**New WebView2Header** ( *Name*, *Value* )

*Name*
: *必需* 一个 **String** 头部名称。

*Value*
: *必需* 一个 **String** 头部值。