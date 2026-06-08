---
title: CompilerVersion
parent: Compilation Module
permalink: /tB/Modules/Compilation/CompilerVersion
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7c2382e9-4505-441e-8bcc-371a88d76d09'
  PropagateID: '7c2382e9-4505-441e-8bcc-371a88d76d09'
  ReservedCode1: '45dd30f8-1c34-4fc0-acc7-09d3c76b79f1'
  ReservedCode2: '45dd30f8-1c34-4fc0-acc7-09d3c76b79f1'
---

# CompilerVersion

返回 twinBASIC 编译器版本号。

语法：**CompilerVersion** [ **()** ]

返回值是一个 **Long**，标识生成运行中代码的编译器。

### 示例

```vb
Debug.Print "Built with twinBASIC compiler build #" & CompilerVersion()
```

### 另请参阅

- [ProcessorArchitecture](/official/Reference/VBA/Compilation/ProcessorArchitecture) 函数