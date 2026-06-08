---
title: CreateGUID
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/CreateGUID
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c2d20913-888a-4289-946e-86db96a12bb2'
  PropagateID: 'c2d20913-888a-4289-946e-86db96a12bb2'
  ReservedCode1: '9f40f9b6-83dc-4afd-af2c-09b73413fd08'
  ReservedCode2: '9f40f9b6-83dc-4afd-af2c-09b73413fd08'
---

# CreateGUID

生成一个新的GUID并以注册表格式字符串返回。

语法：**CreateGUID()** **As String**

结果是一个新的唯一GUID，格式为`{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`——与**InterfaceId**、**ClassId**等使用的格式相同。每次调用返回不同的值。

这是对操作系统GUID生成器（Windows上的`CoCreateGuid`）的轻量封装。生成的GUID适合用作接口或类标识符；但它不是加密随机数——不要在需要不可预测性的场合使用。

### 示例

```vb
Debug.Print CreateGUID()
' {2A1B6F2C-4D9F-4D5E-9C8A-EE9C8B5F3DCE}
```

### 另请参阅

- [vbaCastObj](/official/Reference/VBA/HiddenModule/vbaCastObj)函数