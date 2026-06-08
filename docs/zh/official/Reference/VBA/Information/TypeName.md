---
title: TypeName
parent: Information Module
permalink: /tB/Modules/Information/TypeName
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '15666b90-6898-4a54-89b8-5fc9839e0a12'
  PropagateID: '15666b90-6898-4a54-89b8-5fc9839e0a12'
  ReservedCode1: '5ca90abf-dcba-48c7-b7f5-19fc33ebdda8'
  ReservedCode2: '5ca90abf-dcba-48c7-b7f5-19fc33ebdda8'
---

# TypeName

返回一个**String**，命名变量的类型。

语法：**TypeName(** *varname* **)**

*varname*
: *必需* **Variant**，包含除用户自定义类型变量之外的任何变量。

**TypeName**返回的字符串为以下之一：

| 返回字符串 | 变量 |
|------------|------|
| *objecttype* | 类型为*objecttype*的对象。 |
| `Byte` | **Byte**值。 |
| `Integer` | **Integer**。 |
| `Long` | **Long**整数。 |
| `Single` | 单精度浮点数。 |
| `Double` | 双精度浮点数。 |
| `Currency` | **Currency**。 |
| `Decimal` | **Decimal**。 |
| `Date` | **Date**。 |
| `String` | **String**。 |
| `Boolean` | **Boolean**。 |
| `Error` | 错误值。 |
| `Empty` | 未初始化。 |
| `Null` | 无有效数据。 |
| `Object` | 对象。 |
| `Unknown` | 类型未知的对象。 |
| `Nothing` | 不引用对象的对象变量。 |

如果*varname*是数组，返回的字符串可以是上述任何字符串（或`Variant`）附加空括号。例如，整数数组的**TypeName**返回`"Integer()"`。

### 示例

本示例使用**TypeName**返回变量的信息。

```vb
Dim NullVar As Variant, MyType As String
Dim StrVar As String, IntVar As Integer, CurVar As Currency
Dim ArrayVar(1 To 5) As Integer
NullVar = Null
MyType = TypeName(StrVar)             ' Returns "String".
MyType = TypeName(IntVar)             ' Returns "Integer".
MyType = TypeName(CurVar)             ' Returns "Currency".
MyType = TypeName(NullVar)            ' Returns "Null".
MyType = TypeName(ArrayVar)           ' Returns "Integer()".
```

### 另请参阅

- [VarType](/official/Reference/VBA/Information/VarType)函数