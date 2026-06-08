---
title: Timer
parent: DateTime Module
permalink: /tB/Modules/DateTime/Timer
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '27cf2724-1392-4075-863f-ae627a860205'
  PropagateID: '27cf2724-1392-4075-863f-ae627a860205'
  ReservedCode1: 'c44c4f34-2a9c-4071-a405-68bb076aedab'
  ReservedCode2: 'c44c4f34-2a9c-4071-a405-68bb076aedab'
---

# Timer

返回一个 **Single**，表示自午夜以来经过的秒数。

语法：**Timer**

**Timer** 函数返回秒的小数部分。

### 示例

此示例使用 **Timer** 函数测量经过的时间。

```vb
Dim Start As Single, Finish As Single
Start = Timer                   ' Record start time.
' ... perform some operation ...
Finish = Timer                  ' Record end time.
Debug.Print "Elapsed: " & Finish - Start & " seconds"
```

### 另请参阅

- [Time](/official/Reference/VBA/DateTime/Time) 属性
- [Now](/official/Reference/VBA/DateTime/Now) 函数