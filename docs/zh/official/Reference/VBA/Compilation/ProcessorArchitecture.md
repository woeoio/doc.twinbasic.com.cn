---
title: ProcessorArchitecture
parent: Compilation Module
permalink: /tB/Modules/Compilation/ProcessorArchitecture
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '29f99bf0-0414-402d-977b-409c05dfb74b'
  PropagateID: '29f99bf0-0414-402d-977b-409c05dfb74b'
  ReservedCode1: '8915be47-8219-4a0a-8df9-beb2a583cf01'
  ReservedCode2: '8915be47-8219-4a0a-8df9-beb2a583cf01'
---

# ProcessorArchitecture

返回运行中应用程序所构建的处理器架构。

语法：**ProcessorArchitecture** [ **()** ]

返回值是一个 **VbArchitecture** 常量：32 位构建为 **vbArchWin32**，64 位构建为 **vbArchWin64**。

### 示例

```vb
If ProcessorArchitecture() = vbArchWin64 Then
    Debug.Print "Running as 64-bit"
Else
    Debug.Print "Running as 32-bit"
End If
```

### 另请参阅

- [CompilerVersion](/official/Reference/VBA/Compilation/CompilerVersion) 函数