---
title: New
parent: Statements
permalink: /tB/Core/New
---
# New

创建类的新实例。

**New**关键字用于两种上下文：

- 在声明语句（[**Dim**](/official/Reference/Core/Dim)、[**Private**](/official/Reference/Core/Private)、[**Public**](/official/Reference/Core/Public)或[**Static**](/official/Reference/Core/Static)）中启用*隐式*对象创建：首次引用变量时创建新实例。
- 在[**Set**](/official/Reference/Core/Set)语句中，创建类的新实例并将引用赋给变量或属性。

语法：

- > [ **Dim** \| **Private** \| **Public** \| **Static** ] *varname* **As** **New** *type*
- > **Set** *objectvar* **=** **New** *type*

*varname*, *objectvar*
: 接收新对象引用的变量或属性名称。

*type*
: 类名或其他可创建的对象类型。**New**不能用于创建任何内部数据类型（如**Long**或**String**）的新实例，也不能用于创建依赖对象。

在声明中使用**New**时，不会在声明处创建实例。而是在声明后首次引用变量时自动创建实例。每次将变量设置为**Nothing**后再次引用，都会创建新实例。

在**Set**中使用**New**时，会立即创建实例，并将引用赋给*objectvar*。如果*objectvar*先前持有对另一个对象的引用，则在赋新引用时释放旧引用。

::: info
**New**不能与**WithEvents**在声明中一起使用。要连接可感知事件的对象引用，请先用**WithEvents**声明变量，然后再用**Set**赋值。
:::

### 示例

通过声明中的**New**隐式创建。`Worksheet`的实例在首次使用时创建，而非在**Dim**行创建。

```vb
Dim X As New Worksheet
' No instance exists yet.
X.Activate ' First reference - instance is created here.
```

通过**Set ... = New**显式创建。实例在**Set**行创建。这是更常用的形式，因为构造的时刻在调用处可见。

```vb
Dim Forms(1 To 4) As Form1
Dim i As Long
For i = 1 To 4
    Set Forms(i) = New Form1
Next i
```

### 另请参阅

- [**Set** 语句](/official/Reference/Core/Set)
- [**Dim** 语句](/official/Reference/Core/Dim)
- [**Class** 语句](/official/Reference/Core/Class)