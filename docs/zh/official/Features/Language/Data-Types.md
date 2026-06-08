---
title: "数据类型"
parent: Language Syntax
nav_order: 1
permalink: /Features/Language/Data-Types
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '89bfaaaa-fb2b-49de-9380-062651444778'
  PropagateID: '89bfaaaa-fb2b-49de-9380-062651444778'
  ReservedCode1: 'cf9514b5-91ba-4264-84c1-2868c22027e5'
  ReservedCode2: 'cf9514b5-91ba-4264-84c1-2868c22027e5'
---

# 新数据类型

twinBASIC 引入了多种新数据类型来增强编程能力。

## LongPtr

主要用于处理指针，`LongPtr` 在 32 位模式下是 4 字节（32 位）有符号整数，在 64 位模式下是有符号的 8 字节（64 位）整数。

## LongLong

有符号 8 字节（64 位）整数，范围从 -9,223,372,036,854,775,808 到 9,223,372,036,854,775,807。注意此类型在 32 位和 64 位模式下都可用（VBA 将其限制为 64 位模式）。

## Decimal

在 twinBASIC 中，`Decimal` 作为完整的常规数据类型实现，除了在 `Variant` 中使用外也可以独立使用。这是一个 16 字节（128 位）类型，包含一个 12 字节（96 位）整数和可变的小数点缩放及符号位信息。值范围从 -79,228,162,514,264,337,593,543,950,335 到 79,228,162,514,264,337,593,543,950,335。

## 类型支持

所有数据类型管理功能也适用于这些类型：
- `DefDec`/`DefLngLng`/`DefLongPtr` - 默认类型声明
- `CDec`/`CLngLng`/`CLongPtr` - 类型转换函数
- `vbDecimal`/`vbLongLong`/`vbLongPtr` - 类型检查常量