---
title: "字面量"
parent: Language Syntax
nav_order: 8
permalink: /Features/Language/Literals
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5c7ce77f-8dd2-475d-9ee1-75abe5407aee'
  PropagateID: '5c7ce77f-8dd2-475d-9ee1-75abe5407aee'
  ReservedCode1: '036e54a0-1ba4-4475-9eb4-621592ac6fea'
  ReservedCode2: '036e54a0-1ba4-4475-9eb4-621592ac6fea'
---

# 新字面量表示法

twinBASIC 为编写数字字面量提供了新选项。

## 二进制字面量

除了 `&H` 十六进制字面量和 `&O` 八进制表示法外，twinBASIC 还提供了 `&B` 二进制表示法。例如，`Dim b As Long = &B010110` 是有效语法，b = 22。

## 数字分组

`&H`、`&O` 和 `&B` 字面量都可以使用下划线进行分组，例如按二进制字节分组一个 `Long`：`&B10110101_10100011_10000011_01101110`，或将 `LongLong` 分为两个 `Long` 组：`&H01234567_89ABCDEF`。

## 示例

```vb
Dim flags  As Long     = &B1010                       ' 10 in decimal
Dim perms  As Long     = &O17                         ' 15 in decimal
Dim colour As Long     = &HFF                         ' 255 in decimal
Dim mask   As Long     = &B10110101_10100011          ' grouped binary bytes
Dim wide   As LongLong = &H01234567_89ABCDEF          ' grouped hex halves
```