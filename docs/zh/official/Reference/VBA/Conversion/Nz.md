---
title: Nz
parent: Conversion Module
permalink: /tB/Modules/Conversion/Nz
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f96635d0-4e05-427e-b6b3-c74e248cd9a6'
  PropagateID: 'f96635d0-4e05-427e-b6b3-c74e248cd9a6'
  ReservedCode1: '4c15a737-91b9-4467-bb56-840d9fb0cf88'
  ReservedCode2: '4c15a737-91b9-4467-bb56-840d9fb0cf88'
---

# Nz

用指定的替换值替代 **Null** 值。

语法：**Nz(** *value* [ **,** *valueIfNull* ] **)**

*value*
: *必需* 要检查是否为 **Null** 的 **Variant**。

*valueIfNull*
: *可选* 如果 *value* 为 **Null** 则返回的 **Variant**。如果省略，**Nz** 返回 **Empty**。

返回类型为 **Variant**。

**Nz** 在处理可能计算为 **Null** 的表达式时非常有用——最常见的是从允许 **Null** 列的数据库记录集中读取字段。与直接与 **Null** 比较（其本身产生 **Null**）不同，**Nz** 返回一个可用的替代值。

如果 *value* 不是 **Null**，**Nz** 原样返回 *value*。

::: info
该函数起源于 Microsoft Access。twinBASIC 将其作为内置函数提供，以便在 Access 宿主之外也能使用相同的惯用法。
:::

### 示例

此示例使用 **Nz** 将字符串 `"Unknown"` 替代可能为 **Null** 的记录集字段。

```vb
Dim customerName As Variant
customerName = recordset.Fields("Name").Value
MsgBox "Customer Name: " & Nz(customerName, "Unknown")
```

### 另请参阅

- [IsNull](/official/Reference/VBA/Information/IsNull) 函数
- [IIf](/official/Reference/VBA/Interaction/IIf) 函数