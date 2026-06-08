---
title: Stop
parent: Statements
permalink: /tB/Core/Stop
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3f2331d2-796d-408d-a4e5-54e9d97a1f48'
  PropagateID: '3f2331d2-796d-408d-a4e5-54e9d97a1f48'
  ReservedCode1: '2001bff9-4e8b-4d21-978b-25fca4058c80'
  ReservedCode2: '2001bff9-4e8b-4d21-978b-25fca4058c80'
---

# Stop

暂停执行。

语法：

> **Stop**

**Stop**语句可以放在过程中的任何位置以暂停执行。使用**Stop**语句类似于在代码中设置断点。

**Stop**语句暂停执行，但与[**End**](/official/Reference/Core/End)不同，它不会关闭任何文件或清除变量，除非它在编译后的可执行文件（.exe）中。

### 示例

本示例使用**Stop**语句在**For...Next**循环的每次迭代中暂停执行。

```vb
Dim i As Long
For i = 1 To 10 ' Start For...Next loop.
    Debug.Print i ' Print i to the Immediate window.
    Stop ' Stop during each iteration.
Next i
```

### 另请参阅

- [**End** 语句](/official/Reference/Core/End)