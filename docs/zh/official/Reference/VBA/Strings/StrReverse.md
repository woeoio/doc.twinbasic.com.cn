---
title: StrReverse
parent: Strings Module
permalink: /tB/Modules/Strings/StrReverse
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5050ee80-f2d1-4001-a0b6-62a035de456e'
  PropagateID: '5050ee80-f2d1-4001-a0b6-62a035de456e'
  ReservedCode1: 'dc449e7f-0f6f-4d16-a919-fca19c33a52c'
  ReservedCode2: 'dc449e7f-0f6f-4d16-a919-fca19c33a52c'
---

# StrReverse

返回一个将指定字符串的字符顺序反转后的字符串。

语法：**StrReverse(** *expression* **)**

*expression*
: *必需* 要反转字符的字符串。如果*expression*为零长度字符串（`""`），则返回零长度字符串。如果*expression*为**Null**，则会出错。

### 示例

本示例使用**StrReverse**反转字符串的字符顺序。

```vb
Debug.Print StrReverse("hello")     ' "olleh"
Debug.Print StrReverse("racecar")   ' "racecar"
Debug.Print StrReverse("AB")        ' "BA"
```