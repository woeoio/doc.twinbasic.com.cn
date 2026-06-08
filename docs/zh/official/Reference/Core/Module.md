---
title: Module
parent: Statements
permalink: /tB/Core/Module
---
# Module

定义一个模块——一个不可实例化的容器，用于存放过程、常量、类型、枚举和模块级变量。模块的成员通过模块名访问（对于非私有模块中的**Public**成员，也可以直接访问）。

::: info
显式的**Module** ... **End Module**块是twinBASIC扩展。经典VBA纯粹通过文件类型（`.bas`与`.cls`）区分"标准模块"和"类模块"；源代码中没有封闭关键字。在`.twin`文件中，twinBASIC要求（并支持）显式块，这允许在同一文件中包含一个类和一个模块，并允许属性应用于整个模块。
:::

语法：
> [ *attributes* ]  
> [ **Public** \| **Private** ] **Module** *name*  
> &nbsp;&nbsp;&nbsp;&nbsp; [ *modulemember* ]  
> &nbsp;&nbsp;&nbsp;&nbsp; ...  
> **End Module**

*attributes*
: *可选* 适用于模块的一个或多个属性。

**Public**
: *可选* 在ActiveX项目中，将模块标记为导出到类型库，以便其他项目中的使用者可以看到其**Public**成员。

**Private**
: *可选* 在ActiveX项目中，阻止模块导出到类型库：其成员仍可在项目内使用，但不会被导出。等效于在经典标准模块顶部放置[**Option Private Module**](/official/Reference/Core/Option)。

*name*
: 命名模块的标识符。

*modulemember*
: *可选* 以下任意项：

  - 使用[**Const**](/official/Reference/Core/Const)定义的常量
  - 使用[**Public**](/official/Reference/Core/Public)、[**Private**](/official/Reference/Core/Private)或[**Dim**](/official/Reference/Core/Dim)定义的模块级变量（模块不参与继承，因此不允许使用[**Protected**](/official/Reference/Core/Protected)）
  - 使用[**Sub**](/official/Reference/Core/Sub)、[**Function**](/official/Reference/Core/Function)或[**Property**](/official/Reference/Core/Property)定义的过程
  - 使用[**Type**](/official/Reference/Core/Type)或[**Enum**](/official/Reference/Core/Enum)定义的用户自定义类型
  - 使用[**Declare**](/official/Reference/Core/Declare)声明的外部过程

模块不能被实例化，也没有`New`构造函数。其**Public**成员表现为项目级的全局变量（受上述**Public**/**Private**模块修饰符约束）。

### 示例

```vb
Public Module StringHelpers
    Public Function Reverse(ByVal s As String) As String
        Dim i As Long, r As String
        For i = Len(s) To 1 Step -1
            r = r & Mid$(s, i, 1)
        Next i
        Reverse = r
    End Function

    Public Function StartsWith(ByVal s As String, ByVal prefix As String) As Boolean
        StartsWith = (Left$(s, Len(prefix)) = prefix)
    End Function
End Module
```

调用者可以通过模块名或直接访问成员：

```vb
Debug.Print StringHelpers.Reverse("hello")  ' "olleh"
Debug.Print StartsWith("hello world", "hi") ' False
```

### 另请参阅

- [**Class** 语句](/official/Reference/Core/Class)
- [**Public** 语句](/official/Reference/Core/Public)
- [**Private** 语句](/official/Reference/Core/Private)
- [**Option** 语句](/official/Reference/Core/Option)
- [类和模块增强](/official/Features/Advanced/Classes-and-Modules)