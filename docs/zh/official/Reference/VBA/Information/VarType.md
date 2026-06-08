---
title: VarType
parent: Information Module
permalink: /tB/Modules/Information/VarType
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cdd5c76b-8d80-4c22-bdb5-11219c29c8e5'
  PropagateID: 'cdd5c76b-8d80-4c22-bdb5-11219c29c8e5'
  ReservedCode1: '5a4d63c2-d253-43f0-8e39-14351ed02b33'
  ReservedCode2: '5a4d63c2-d253-43f0-8e39-14351ed02b33'
---

# VarType

返回一个[**VbVarType**](/official/Reference/VBA/Constants/VbVarType)值，标识变量的子类型或对象默认属性的类型。

语法：**VarType(** *varname* **)**

*varname*
: *必需* **Variant**，包含除用户自定义类型变量之外的任何变量。

返回值是[**VbVarType**](/official/Reference/VBA/Constants/VbVarType)枚举的常量之一，或其中一个常量与`vbArray`之和。最常用的值如下：

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbEmpty** | 0 | **Empty**（未初始化）。 |
| **vbNull** | 1 | **Null**（无有效数据）。 |
| **vbInteger** | 2 | **Integer**。 |
| **vbLong** | 3 | **Long**整数。 |
| **vbSingle** | 4 | 单精度浮点数。 |
| **vbDouble** | 5 | 双精度浮点数。 |
| **vbCurrency** | 6 | **Currency**。 |
| **vbDate** | 7 | **Date**。 |
| **vbString** | 8 | **String**。 |
| **vbObject** | 9 | 对象引用。 |
| **vbError** | 10 | 错误值。 |
| **vbBoolean** | 11 | **Boolean**。 |
| **vbVariant** | 12 | **Variant**（仅用于Variant数组）。 |
| **vbDecimal** | 14 | **Decimal**。 |
| **vbByte** | 17 | **Byte**。 |
| **vbLongLong** | 20 | **LongLong**（仅64位）。 |
| **vbUserDefinedType** | 36 | 包含用户自定义类型的**Variant**。 |
| **vbArray** | 8192 | 数组。返回时始终加到另一个值上。 |

如果传入对象且具有默认属性，**VarType(*object*)**返回该默认属性的类型。

**VarType**从不单独返回**vbArray**；它始终加到另一个值上以指示特定子类型的数组。例如，**Integer**数组返回`vbInteger + vbArray`，即8194。常量**vbVariant**仅在与**vbArray**结合时返回，表示**Variant**数组。

::: info
twinBASIC还公开了泛型形式**VarType(Of *T*)**，用于泛型类型说明符的编译时验证。非泛型调用使用特殊的内部绑定，因此其行为可能不像常规函数。
:::

### 示例

本示例使用**VarType**确定多个变量的子类型。

```vb
Dim MyCheck As VbVarType
Dim IntVar As Integer, StrVar As String, DateVar As Date
Dim ArrayVar As Variant
IntVar = 459
StrVar = "Hello World"
DateVar = #2/12/1969#
ArrayVar = Array("1st Element", "2nd Element")

MyCheck = VarType(IntVar)             ' Returns 2  (vbInteger).
MyCheck = VarType(DateVar)            ' Returns 7  (vbDate).
MyCheck = VarType(StrVar)             ' Returns 8  (vbString).
MyCheck = VarType(ArrayVar)           ' Returns 8204 — vbArray + vbVariant.
```

### 另请参阅

- [TypeName](/official/Reference/VBA/Information/TypeName)函数
- [VbVarType](/official/Reference/VBA/Constants/VbVarType)枚举