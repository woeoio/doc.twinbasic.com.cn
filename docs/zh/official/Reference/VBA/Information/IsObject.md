---
title: IsObject
parent: Information Module
permalink: /tB/Modules/Information/IsObject
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e4b9c219-2575-459a-9015-efe79529ebab'
  PropagateID: 'e4b9c219-2575-459a-9015-efe79529ebab'
  ReservedCode1: 'da19d395-b9af-4383-8e40-433df1a58c96'
  ReservedCode2: 'da19d395-b9af-4383-8e40-433df1a58c96'
---

# IsObject

返回一个**Boolean**，指示标识符是否表示对象变量。

语法：**IsObject(** *identifier* **)**

*identifier*
: *必需* 变量名。

**IsObject**仅用于确定**Variant**是否持有**VarType vbObject**。当**Variant**实际引用——或曾经引用——一个对象，或包含**Nothing**时属于这种情况。

如果*identifier*是用**Object**类型或任何有效类类型声明的变量，或是**VarType vbObject**的**Variant**，或是用户自定义对象，**IsObject**返回**True**；否则返回**False**。

即使变量已设置为**Nothing**，**IsObject**仍返回**True**。在取消引用对象引用之前，请使用错误捕获来确保其有效。

::: info
twinBASIC还公开了泛型形式**IsObject(Of *T*)**，用于泛型类型说明符的编译时验证。非泛型调用使用特殊的内部绑定，因此其行为可能不像常规函数。
:::

### 示例

本示例使用**IsObject**确定标识符是否表示对象变量。*MyObject*和*YourObject*是相同类型的对象变量，在此用于说明。

```vb
Dim MyInt As Integer                  ' Declare variables.
Dim YourObject As Variant, MyCheck As Boolean
Dim MyObject As Object
Set YourObject = MyObject             ' Assign an object reference.
MyCheck = IsObject(YourObject)        ' Returns True.
MyCheck = IsObject(MyInt)             ' Returns False.
MyCheck = IsObject(Nothing)           ' Returns True.
MyCheck = IsObject(Empty)             ' Returns False.
MyCheck = IsObject(Null)              ' Returns False.
```

### 另请参阅

- [VarType](/official/Reference/VBA/Information/VarType)、[TypeName](/official/Reference/VBA/Information/TypeName)函数
- [IsArray](/official/Reference/VBA/Information/IsArray)函数