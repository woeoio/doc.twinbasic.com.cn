---
title: VbVarType
parent: Constants Module
permalink: /tB/Modules/Constants/VbVarType
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fb8e752f-87a2-4de5-956a-2dec78fb5d78'
  PropagateID: 'fb8e752f-87a2-4de5-956a-2dec78fb5d78'
  ReservedCode1: 'bdefd66d-7622-44cb-baaf-abefa8ac0a7c'
  ReservedCode2: 'bdefd66d-7622-44cb-baaf-abefa8ac0a7c'
---

# VbVarType

**VarType** 函数返回的变体子类型代码。大多数调用返回下表中的单个值。数组报告为 **vbArray** 加上元素子类型——例如，**Long** 数组返回 `vbArray + vbLong` = 8195。

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbEmpty** | 0 | 空（未初始化）。 |
| **vbNull** | 1 | **Null**（无有效数据）。 |
| **vbInteger** | 2 | **Integer**。 |
| **vbLong** | 3 | **Long** 整数。 |
| **vbSingle** | 4 | 单精度浮点数。 |
| **vbDouble** | 5 | 双精度浮点数。 |
| **vbCurrency** | 6 | **Currency** 值。 |
| **vbDate** | 7 | **Date** 值。 |
| **vbString** | 8 | **String**。 |
| **vbObject** | 9 | 对象引用。 |
| **vbError** | 10 | 错误值。 |
| **vbBoolean** | 11 | **Boolean** 值。 |
| **vbVariant** | 12 | **Variant**（仅用于变体数组）。 |
| **vbDataObject** | 13 | 数据访问对象。 |
| **vbDecimal** | 14 | **Decimal** 值。 |
| **vbByte** | 17 | **Byte** 值。 |
| **vbLongLong** | 20 | **LongLong** 整数（仅限 64 位）。 |
| **vbUserDefinedType** | 36 | 包含用户自定义类型的 **Variant**。 |
| **vbArray** | 8192 | 数组。返回时始终与另一个值相加。 |