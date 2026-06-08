---
title: WebView2HeadersCollection
parent: "WebView2 包"
permalink: /tB/Packages/WebView2/WebView2HeadersCollection
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '43647b36-2f1b-4ba8-b791-cacf3eff41fb'
  PropagateID: '43647b36-2f1b-4ba8-b791-cacf3eff41fb'
  ReservedCode1: 'd56a5e5e-4bf3-4f33-861c-cdc14cd1e76f'
  ReservedCode2: 'd56a5e5e-4bf3-4f33-861c-cdc14cd1e76f'
---

# WebView2HeadersCollection 类
逐个产出 [**WebView2Header**](/official/Reference/WebView2/WebView2Header) 值的枚举器。由 **WebView2RequestHeaders.GetHeaders**、**WebView2ResponseHeaders.GetHeaders** 返回，以及对 [**WebView2RequestHeaders**](/official/Reference/WebView2/WebView2RequestHeaders) 或 [**WebView2ResponseHeaders**](/official/Reference/WebView2/WebView2ResponseHeaders) 实例执行 `For Each` 时返回。

集合是仅向前的：一旦迭代即耗尽。它不实现 **Reset**、**Skip** 或 **Clone**，调用这些会引发运行时错误 80004001（*未实现*）。

```vb
Private Sub WebView21_NavigationStarting( _
        ByVal Uri As String, _
        ByVal IsUserInitiated As Boolean, _
        ByVal IsRedirected As Boolean, _
        ByVal RequestHeaders As WebView2RequestHeaders, _
        Cancel As Boolean)

    Dim h As WebView2Header
    For Each h In RequestHeaders
        Debug.Print h.Name & ": " & h.Value
    Next
End Sub
```

## 方法

### New

构造集合。由包在内部创建；应用程序代码通常不调用此方法。

语法：**New WebView2HeadersCollection** ( *Iterator* )

*Iterator*
: *必需* 由运行时传入的内部迭代器。