---
title: Class
parent: 语句
permalink: /zh/tB/Core/Class
---

# Class

{: no_toc }

用于定义类。类是创建对象的模板——类是对象类型，而不是值类型。对象通过引用保存，并且是引用计数的。当没有更多对它的引用时，对象占用的内存被释放——当进程中没有变量引用它们时。

语法：

> [ *属性* ]
> **Class** *名称*
> &nbsp;&nbsp;&nbsp;&nbsp;[ *类成员* ]
> &nbsp;&nbsp;&nbsp;&nbsp;[ *类成员* ] ...
> **End Class**

*属性*
: *可选* 以下之一：
[ArrayBoundsChecks](Attributes#arrayboundschecks), [ClassId](Attributes#classid), [COMCreatable](Attributes#comcreatable), [CustomControl](Attributes#customcontrol), [Description](Attributes#description), [FloatingPointErrorChecks](Attributes#floatingpointerrorchecks), [FormDesignerId](Attributes#formdesignerid), [Hidden](Attributes#hidden), [IntegerOverflowChecks](Attributes#integeroverflowchecks), [PredeclaredID](Attributes#predeclaredid)

*名称*
: 命名类的标识符。

*类成员*
: *可选* 以下任意项：

  - 使用[**Const**](Const)定义的[常量](../Gloss#constant)，
  - 使用[**Public**](Public), [**Protected**](Protected), [**Private**](Private)和[**Dim**](Dim)定义的[变量](../Gloss#variable)，
  - 使用[**Sub**](Sub), [**Function**](Function)和[**Property**](Property)定义的[过程](../Gloss#procedure)，
  - 使用[**Type**](Type)定义的[用户定义类型(UDTs)](../Gloss#user-defined-type)。