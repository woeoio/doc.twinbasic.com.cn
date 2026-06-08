---
title: Beep
parent: Interaction Module
permalink: /tB/Modules/Interaction/Beep
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '85cad054-5712-40df-968b-663d84a8253e'
  PropagateID: '85cad054-5712-40df-968b-663d84a8253e'
  ReservedCode1: '0fc8aa78-bac7-4587-ade2-d055804be59d'
  ReservedCode2: '0fc8aa78-bac7-4587-ade2-d055804be59d'
---

# Beep

通过计算机扬声器发出提示音。

语法：**Beep**

提示音的频率和持续时间取决于硬件和系统软件，因计算机而异。

### 示例

本示例使用**Beep**语句通过计算机扬声器连续发出三次提示音。

```vb
Dim I%
For I = 1 To 3   ' Loop 3 times.
   Beep          ' Sound a tone.
Next I
```

### 另请参阅

- [DoEvents](/official/Reference/VBA/Interaction/DoEvents)函数
- [Shell](/official/Reference/VBA/Interaction/Shell)函数
- [MsgBox](/official/Reference/VBA/Interaction/MsgBox)函数