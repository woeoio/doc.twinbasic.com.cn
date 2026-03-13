---
title: 字面量
parent: 语言语法
nav_order: 8
permalink: /Features/Language/Literals
---

# 新字面量表示法
twinBASIC 为编写数字字面量提供了新选项。

## 二进制字面量

除了十六进制字面量的`&H`和八进制表示法的`&O`，twinBASIC 还提供`&B`用于二进制表示法。例如，`Dim b As Long = &B010110`是有效语法，且 b = 22。

## 数字分组

`&H`、`&O`和`&B`字面量都可以使用下划线分组，例如，按其二进制字节组分组`Long`：`&B10110101_10100011_10000011_01101110`，或将`LongLong`分组为两个`Long`组：`&H01234567_89ABCDEF`。