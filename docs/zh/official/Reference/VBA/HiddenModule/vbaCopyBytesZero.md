---
title: vbaCopyBytesZero
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/vbaCopyBytesZero
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c6919ea0-a33f-478d-98b1-5db4d1425118'
  PropagateID: 'c6919ea0-a33f-478d-98b1-5db4d1425118'
  ReservedCode1: '4f178ede-7b0a-4d92-a555-63dc95ab8342'
  ReservedCode2: '4f178ede-7b0a-4d92-a555-63dc95ab8342'
---

# vbaCopyBytesZero

将一个字节块从一个地址复制到另一个地址，然后将源字节清零。

语法：**vbaCopyBytesZero(** *Length* **,** *Dest* **,** *Src* **)** **As LongPtr**

*Length*
: *必需* **Long**。要复制的字节数。

*Dest*
: *必需* **LongPtr**。目标地址。

*Src*
: *必需* **LongPtr**。源地址。复制完成后，从*Src*开始的*Length*个字节被写入零。

等效于先执行[**vbaCopyBytes**](/official/Reference/VBA/HiddenModule/vbaCopyBytes)，再对源进行内存清除。在移动拥有资源（BSTR、接口指针）而不留下副本时非常有用。返回值为*Dest*。

### 示例

本示例将四个字节从一个缓冲区复制到另一个，然后确认源已被清零。

```vb
Dim src As LongPtr = AllocMem(8)
Dim dst As LongPtr = AllocMem(8)
PutMem4 src, &H12345678
vbaCopyBytesZero 4, dst, src    ' copy; src bytes are zeroed
Dim v As Long
GetMem4 dst, v                  ' v = &H12345678
GetMem4 src, v                  ' v = 0  (source was cleared)
FreeMem src
FreeMem dst
```

### 另请参阅

- [vbaCopyBytes](/official/Reference/VBA/HiddenModule/vbaCopyBytes)函数