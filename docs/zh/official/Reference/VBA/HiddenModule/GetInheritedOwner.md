---
title: GetInheritedOwner
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetInheritedOwner
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c674073c-eff4-47eb-a9d1-136c1383f268'
  PropagateID: 'c674073c-eff4-47eb-a9d1-136c1383f268'
  ReservedCode1: '9060de3f-9ec3-405e-9d66-5a04d3f40d63'
  ReservedCode2: '9060de3f-9ec3-405e-9d66-5a04d3f40d63'
---

# GetInheritedOwner

返回控件的继承所有者对象。

语法：**GetInheritedOwner(** *Value* **)** **As Object**

*Value*
: *必需* **Object**。要获取其继承所有者的控件。

对于参与控件容器层次结构的控件，继承所有者是提供环境设置的最上层拥有对象——通常是窗体。当没有设置继承所有者时返回**Nothing**。

### 示例

本示例读取控件的最上层容器并报告其类型。

```vb
' Inside a VB control class
Dim host As Object
host = GetInheritedOwner(Me)
If Not host Is Nothing Then
    Debug.Print "Container: " & TypeName(host)
End If
```

### 另请参阅

- [vbaCastObj](/official/Reference/VBA/HiddenModule/vbaCastObj)函数