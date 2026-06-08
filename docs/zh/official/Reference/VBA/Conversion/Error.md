---
title: "Error 函数"
parent: Conversion Module
permalink: /tB/Modules/Conversion/Error
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5170d3e7-71b6-49f2-b98f-e831a5510fad'
  PropagateID: '5170d3e7-71b6-49f2-b98f-e831a5510fad'
  ReservedCode1: 'fb3ce401-79f5-4b4b-ae49-70a6e96de489'
  ReservedCode2: 'fb3ce401-79f5-4b4b-ae49-70a6e96de489'
---

# Error, Error$

返回与给定错误号对应的错误消息。

语法：

- **Error$** [ **(** *errornumber* **)** ]
- **Error** [ **(** *errornumber* **)** ]

*errornumber*
: *可选* 任何有效的错误号。如果 *errornumber* 是有效的错误号但未定义，**Error** 返回字符串 `"Application-defined or object-defined error"`。如果 *errornumber* 无效，将发生错误。如果省略 *errornumber*，则返回与最近一次运行时错误对应的消息。如果未发生过运行时错误，或 *errornumber* 为 `0`，**Error** 返回零长度字符串（`""`）。

`$` 后缀形式返回 **String**；无后缀形式返回 **Variant** (**String**)。

::: info
**Error** *函数*（此处描述的）与 [**Error**](/official/Reference/Core/Error) *语句*同名但是不同的语言元素。函数返回错误号的消息文本；语句引发运行时错误。
:::

检查 **Err** 对象的属性设置以识别最近的运行时错误。**Error** 函数的返回值对应于 **Err** 对象的 **Description** 属性。

### 示例

此示例使用 **Error** 函数打印与指定错误号对应的错误消息。

```vb
Private Sub PrintError()
    Dim ErrorNumber As Long, count As Long
    count = 1: ErrorNumber = 1
    On Error GoTo EOSb
    Do While count < 100
        Do While Error(ErrorNumber) = "Application-defined or object-defined error"
            ErrorNumber = ErrorNumber + 1
        Loop
        Debug.Print count & "-Error(" & ErrorNumber & "): " & Error(ErrorNumber)
        ErrorNumber = ErrorNumber + 1
        count = count + 1
    Loop
EOSb: Debug.Print ErrorNumber
End Sub
```

### 另请参阅

- [Error](/official/Reference/Core/Error) 语句
- [CVErr](/official/Reference/VBA/Conversion/CVErr) 函数