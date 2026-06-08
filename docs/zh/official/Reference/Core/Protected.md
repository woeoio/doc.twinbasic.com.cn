---
title: Protected
parent: Statements
permalink: /tB/Core/Protected
---
# Protected

声明可从声明类的内部和通过[**Inherits**](/official/Features/Language/Inheritance#inherits-for-complete-oop)派生的类中访问的类成员（变量、过程或属性），但外部调用者不能访问。

::: info
**Protected**访问修饰符是twinBASIC对经典VBA的扩展，VBA只有**Public**、**Private**和**Friend**。**Protected**仅在[**Inherits**](/official/Features/Language/Inheritance#inherits-for-complete-oop)层次结构中有意义；在没有继承的类中，其行为类似于[**Private**](/official/Reference/Core/Private)。
:::

语法：

- > **Protected** *varname* [ **(** [ *subscripts* ] **)** ] [ **As** [ **New** ] *type* ] [ **,** *varname* ... ]
- > **Protected** [ **Overridable** ] **Sub** \| **Function** \| **Property Get** \| **Property Let** \| **Property Set** *name* ...

在变量声明中，**Protected**的形式与[**Private**](/official/Reference/Core/Private)/[**Public**](/official/Reference/Core/Public)相同：逗号分隔的名称列表，带有可选的`WithEvents`/`New`和`As`子句。**Protected**仅在类作用域中有效；不能在过程内部使用（请使用[**Dim**](/official/Reference/Core/Dim)或[**Static**](/official/Reference/Core/Static)），也不能在[**Module**](/official/Reference/Core/Module)中使用（模块没有派生类型的概念）。

在过程声明中，**Protected**替换**Public**/**Private**/**Friend**修饰符。与**Overridable**关键字组合使用，它声明一个继承钩子——派生类允许覆盖的方法或属性。

### 可见性摘要

| 修饰符 | 同一类 | 派生类（通过**Inherits**） | 其他代码 |
|:---|:---:|:---:|:---:|
| **Public**    | 是 | 是 | 是 |
| **Friend**    | 是 | 是 | 仅在项目内 |
| **Protected** | 是 | 是 | 否 |
| **Private**   | 是 | 否  | 否 |

### 示例

以下模式使用**Protected**状态加上**Overridable** **Protected**方法作为继承钩子。基类`Animal`公开一个公共的`Speak`，委托给`GetSound`，派生类覆盖它：

```vb
Private Class Animal
    Protected _name As String
    Protected _dob As Date  ' date of birth

    Public Sub New(name As String, dob As Date)
        _name = name
        _dob = dob
    End Sub

    Public Property Get Name() As String
        Name = _name
    End Property

    Public Sub Speak()
        Debug.Print _name & " says: " & GetSound()
    End Sub

    ' Overridable hook for derived classes.
    Protected Overridable Function GetSound() As String
        GetSound = ""
    End Function
End Class

Private Class Dog
    Inherits Animal

    Public Sub New(name As String, dob As Date)
        Animal.New(name, dob)               ' explicit base constructor call
    End Sub

    Protected Function GetSound() As String Overrides Animal.GetSound
        GetSound = "woof"
    End Function
End Class
```

`_name`和`_dob`在`Dog`内部可见（因为`Dog`继承自`Animal`），但对于从层次结构外部持有`Animal`或`Dog`引用的任何代码不可见。

### 另请参阅

- [**Public** 语句](/official/Reference/Core/Public)
- [**Private** 语句](/official/Reference/Core/Private)
- [**Class** 语句](/official/Reference/Core/Class)
- [继承](/official/Features/Language/Inheritance)