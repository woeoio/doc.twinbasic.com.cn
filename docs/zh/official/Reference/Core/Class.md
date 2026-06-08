---
title: Class
parent: Statements
permalink: /tB/Core/Class
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4706d98f-6346-4ddf-9f0b-2c18f58f3fa3'
  PropagateID: '4706d98f-6346-4ddf-9f0b-2c18f58f3fa3'
  ReservedCode1: '98824ccd-2ce3-4bb5-bb26-145e050ebdf7'
  ReservedCode2: '98824ccd-2ce3-4bb5-bb26-145e050ebdf7'
---

# Class

定义类。类是创建对象的模板——类是对象类型，与值类型相对。对象通过引用持有并采用引用计数。当不再有引用指向对象时——即进程中没有变量引用它们时——对象占用的内存会被释放。

语法：

> [ *attributes* ]  
> [ **Public** \| **Private** ] **Class** *name* [ **(** **Of** *typevars* **)** ]  
> &nbsp;&nbsp;&nbsp;&nbsp;[ **Inherits** *baseclass* ]  
> &nbsp;&nbsp;&nbsp;&nbsp;[ *classmember* ]  
> &nbsp;&nbsp;&nbsp;&nbsp;[ *classmember* ] ...  
> **End Class**

*attributes*
: *可选* 以下一个或多个：  
[ArrayBoundsChecks](/official/Reference/Attributes#arrayboundschecks)、[ClassId](/official/Reference/Attributes#classid)、[COMCreatable](/official/Reference/Attributes#comcreatable)、[CustomControl](/official/Reference/Attributes#customcontrol)、[Description](/official/Reference/Attributes#description)、[FloatingPointErrorChecks](/official/Reference/Attributes#floatingpointerrorchecks)、[FormDesignerId](/official/Reference/Attributes#formdesignerid)、[Hidden](/official/Reference/Attributes#hidden)、[IntegerOverflowChecks](/official/Reference/Attributes#integeroverflowchecks)、[PredeclaredID](/official/Reference/Attributes#predeclaredid)

**Public**
: *可选* (twinBASIC) 在ActiveX项目中，将类标记为导出到类型库，使其他项目的使用者可以创建和使用它。

**Private**
: *可选* (twinBASIC) 在ActiveX项目中，不将类导出到类型库：它在项目内仍可使用但不导出。与 [**CoClass**](/official/Reference/Core/CoClass) 的常规搭配——一个公共 **CoClass** 作为使用者可见的契约，配对一个 `Private Class` 作为隐藏的实现——依赖此修饰符。

*name*
: 命名类的标识符。

**Of** *typevars*
: *可选* (twinBASIC) 一个或多个用逗号分隔的类型变量名，使类成为*泛型类*。每个类型变量可以在成员声明中像常规类型一样被引用。参见[泛型](/official/Features/Language/Generics)。

**Inherits** *baseclass*
: *可选* (twinBASIC) 指定一个基类，其 **Public** 和 [**Protected**](/official/Reference/Core/Protected) 成员被 *name* 继承。**Inherits** 行（如果存在）必须紧跟在 **Class** 头部之后、任何其他成员之前。**Inherits** 启用 [**Overridable**](/official/Reference/Core/Sub) / **Overrides** 成员、从 `Sub New` 内部的显式 `*baseclass*.New(...)` 链式构造函数调用，以及 **Protected** 成员可见性。参见[继承](/official/Features/Language/Inheritance)。

*classmember*
: *可选* 以下任意项：

  - 使用 [**Const**](/official/Reference/Core/Const) 定义的[常量](/official/Reference/Glossary#constant)，
  - 使用 [**Public**](/official/Reference/Core/Public)、[**Protected**](/official/Reference/Core/Protected)、[**Private**](/official/Reference/Core/Private) 或 [**Dim**](/official/Reference/Core/Dim) 定义的[变量](/official/Reference/Glossary#variable)，
  - 使用 [**Sub**](/official/Reference/Core/Sub)、[**Function**](/official/Reference/Core/Function) 或 [**Property**](/official/Reference/Core/Property) 定义的[过程](/official/Reference/Glossary#procedure)——包括特殊的实例构造函数 `Sub New(`*args*`)`，当使用 [**New**](/official/Reference/Core/New) 创建类时运行时将调用它，
  - 使用 [**Type**](/official/Reference/Core/Type) 定义的[用户自定义类型(UDT)](/official/Reference/Glossary#user-defined-type)，
  - (twinBASIC) [**Implements**](/official/Reference/Core/Implements) 子句，列出了此类提供实现的接口或类的成员。

在 `.twin` 文件中，**Class** 块可以与 [**Interface**](/official/Reference/Core/Interface)、[**CoClass**](/official/Reference/Core/CoClass) 和 [**Alias**](/official/Reference/Core/Alias) 声明（出现在 **Class** 块*之前*）以及 [**Module**](/official/Reference/Core/Module) 块共享同一文件。在传统 `.cls` 文件中，类是隐式的，不写 **Class**/**End Class** 关键字。

### 另请参阅

- [**Module** 语句](/official/Reference/Core/Module)
- [**Interface** 语句](/official/Reference/Core/Interface)
- [**CoClass** 语句](/official/Reference/Core/CoClass)
- [**Implements** 语句](/official/Reference/Core/Implements)
- [**Protected** 语句](/official/Reference/Core/Protected)
- [**New** 语句](/official/Reference/Core/New)
- [继承](/official/Features/Language/Inheritance)
- [泛型](/official/Features/Language/Generics)