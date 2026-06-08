---
title: CurrentComponentCLSID
parent: Compilation Module
permalink: /tB/Modules/Compilation/CurrentComponentCLSID
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '76899d52-5da0-4c98-8738-707e0630129c'
  PropagateID: '76899d52-5da0-4c98-8738-707e0630129c'
  ReservedCode1: '177c32f9-7123-4f1e-bf58-30cf7a35a5bd'
  ReservedCode2: '177c32f9-7123-4f1e-bf58-30cf7a35a5bd'
---

# CurrentComponentCLSID

以 **String** 形式返回当前类的 Class ID (CLSID)。

语法：**CurrentComponentCLSID** [ **()** ]

该值是由类的 [`[ClassId(...)]`](/official/Reference/Core/Attributes#classid) 属性分配给包含类的 GUID。如果未设置 **ClassId**，函数返回全零 GUID。

::: info
**CurrentComponentCLSID** 是编译时内部函数——CLSID 在源代码编译时从类的属性中读取，而非在运行时从 COM 注册表查找。它使用特殊的内部绑定，可能不像普通函数那样运作。
:::

### 示例

```vb
[ClassId("12345678-1234-1234-1234-123456789ABC")]
Class CFoo
    Public Sub PrintId()
        Debug.Print CurrentComponentCLSID()
    End Sub
End Class
```

### 另请参阅

- [CurrentComponentName](/official/Reference/VBA/Compilation/CurrentComponentName) 函数
- [ClassId](/official/Reference/Core/Attributes#classid) 属性