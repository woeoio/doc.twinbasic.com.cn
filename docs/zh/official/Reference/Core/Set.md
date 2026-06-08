---
title: Set
parent: Statements
permalink: /tB/Core/Set
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3b98ca2b-47f8-4c7f-933b-6ceaf6cc697e'
  PropagateID: '3b98ca2b-47f8-4c7f-933b-6ceaf6cc697e'
  ReservedCode1: '73cb280e-7c74-43ea-b207-2773fc195d28'
  ReservedCode2: '73cb280e-7c74-43ea-b207-2773fc195d28'
---

# Set

将对象引用赋给变量或属性。

语法：
> **Set** *objectvar* **=** { [ **New** ] *objectexpression* \| **Nothing** }

*objectvar*
: 变量或属性的名称；遵循标准变量命名约定。

**[New](/official/Reference/Core/New)**
: *可选* **New**通常在声明期间使用以启用隐式对象创建。当**New**与**Set**一起使用时，它创建类的新实例。如果*objectvar*包含对对象的引用，则在赋新引用时释放旧引用。**New**关键字不能用于创建任何内部数据类型的新实例，也不能用于创建依赖对象。

*objectexpression*
: 由对象名称、同一对象类型的另一个已声明变量，或返回同一对象类型对象的函数或方法组成的表达式。

**Nothing**
: *可选* 中断*objectvar*与任何特定对象的关联。将**Nothing**赋给*objectvar*时，如果没有其他变量引用先前引用的对象，将释放与该对象关联的所有系统和内存资源。

要有效，*objectvar*必须是与其赋值对象一致的对象类型。

[**Dim**](/official/Reference/Core/Dim)、[**Private**](/official/Reference/Core/Private)、[**Public**](/official/Reference/Core/Public)、[**ReDim**](/official/Reference/Core/ReDim)和[**Static**](/official/Reference/Core/Static)语句仅声明引用对象的变量。在**Set**语句赋值特定对象之前，没有实际对象被引用。

以下示例说明如何使用**Dim**声明类型为`Form1`的数组。`Form1`的实例实际不存在。然后**Set**将`Form1`新实例的引用赋给`myChildForms`变量。此类代码可用于在MDI应用程序中创建子窗体。

```vb
Dim myChildForms(1 To 4) As Form1
Set myChildForms(1) = New Form1
Set myChildForms(2) = New Form1
Set myChildForms(3) = New Form1
Set myChildForms(4) = New Form1
```

通常，当**Set**用于将对象引用赋给变量时，不会为该变量创建对象的副本。而是创建对对象的引用。多个对象变量可以引用同一个对象。由于这些变量是对对象的引用而非对象的副本，对象中的任何更改都会反映在所有引用它的变量中。但是，当在**Set**语句中使用**New**关键字时，会实际创建对象的实例。

### 示例

本示例使用**Set**语句将对象引用赋给变量。假设*YourObject*是具有**Text**属性的有效对象。

```vb
Dim YourObject, MyObject, MyStr
Set MyObject = YourObject    ' Assign object reference.
' MyObject and YourObject refer to the same object.
YourObject.Text = "Hello World"    ' Initialize property.
MyStr = MyObject.Text    ' Returns "Hello World".

' Discontinue association. MyObject no longer refers to YourObject.
Set MyObject = Nothing    ' Release the object.
```

### 另请参阅

- [**Let** 语句](/official/Reference/Core/Let)
- [**New** 关键字](/official/Reference/Core/New)
- [**Dim** 语句](/official/Reference/Core/Dim)
- [**Property** 语句](/official/Reference/Core/Property)