---
title: TbExpressionService
parent: VBA Package
nav_order: 12
permalink: /tB/Modules/TbExpressionService/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '08d7a26f-56ac-4756-9b13-1c7d30f71ffb'
  PropagateID: '08d7a26f-56ac-4756-9b13-1c7d30f71ffb'
  ReservedCode1: 'd5d7f24c-0b82-4e48-bbab-e4332012fd76'
  ReservedCode2: 'd5d7f24c-0b82-4e48-bbab-e4332012fd76'
---

# TbExpressionService 类

**TbExpressionService** 是 twinBASIC 的运行时表达式引擎：一种将作为普通字符串提供的 twinBASIC 语法表达式即时编译和求值的方式，无需经过单独的构建步骤。它驱动计算器、报表中的公式列、可脚本化属性绑定以及任何需要将用户提供的文本转换为值的功能。

它暴露为一个类和两个接口：

- [**TbExpressionService**](#tbexpressionservice-class) -- 引擎；用 **New** 实例化一个，注册其绑定器，然后对其 [**Compile**](/official/Reference/VBA/TbExpressionService/Compile) 表达式。
- [**ITbExpression**](#itbexpression-interface) -- 由 [**Compile**](/official/Reference/VBA/TbExpressionService/Compile) 返回的编译表达式句柄，通过 [**Evaluate**](/official/Reference/VBA/TbExpressionService/Evaluate) 求值。
- [**ITbCustomBinder**](#itbcustombinder-interface) -- 实现此接口以提供完全自定义的符号解析。

## 编译和求值表达式

创建一个 **TbExpressionService**，注册至少一个绑定器，然后调用 [**Compile**](/official/Reference/VBA/TbExpressionService/Compile) 获取一个 [**ITbExpression**](#itbexpression-interface)。同一个编译表达式可以根据需要求值任意次数，因此在源文本不变时应重用它。

```vb
Sub Demo()
    Dim Service As TbExpressionService = New TbExpressionService
    Service.AddStdLibraryBinder()                       ' enable Sin, Sqr, Len, ...

    Dim Expr As ITbExpression = Service.Compile("2 * (Sqr(2) + 1)")
    Debug.Print Expr.Evaluate()                         ' 4.82842712474619
End Sub
```

## 绑定用户对象

标准库之外的任何内容——应用程序对象、配置值、辅助函数、记录集字段——都必须通过*绑定器*对引擎可见。

最简单的形式是 [**AddCustomBinderObject**](/official/Reference/VBA/TbExpressionService/AddCustomBinderObject)，它接受一个名称和一个对象，并在该名称下暴露对象的公共成员。传入 **IsAppObject** 标志可使对象的行为类似于 Office 宿主的 **Application**：其成员既可以通过限定名访问（`Report.Title`），也可以通过非限定名访问（`Title`）。

```vb
Sub UseCustomObject()
    Dim Service As TbExpressionService = New TbExpressionService
    Service.AddStdLibraryBinder()
    Service.AddCustomBinderObject "Report", Me, IsAppObject

    Debug.Print Service.Compile("Report.Title").Evaluate()  ' qualified
    Debug.Print Service.Compile("Title").Evaluate()         ' unqualified — IsAppObject in effect
End Sub
```

要完全控制符号解析——例如，针对记录集动态查找名称、将名称虚拟化为成员访问之外的其他形式，或回退到自定义默认值——请实现 [**ITbCustomBinder**](#itbcustombinder-interface) 并使用 [**AddCustomBinder**](/official/Reference/VBA/TbExpressionService/AddCustomBinder) 注册它。多个绑定器可以共存；引擎按注册顺序查询它们，直到有一个返回非 **Nothing** 结果。

## TbExpressionService 类

`New TbExpressionService` 返回默认接口 **ITbExpressionService**。多个服务可以共存；每个都有自己的绑定器列表，彼此独立。

### 成员

- [Compile](/official/Reference/VBA/TbExpressionService/Compile) -- 解析表达式字符串并返回可执行的 **ITbExpression**
- [AddStdLibraryBinder](/official/Reference/VBA/TbExpressionService/AddStdLibraryBinder) -- 注册标准运行时库的内置绑定器（**Sin**、**Sqr**、**Len**、**CStr**、...）
- [AddCustomBinderObject](/official/Reference/VBA/TbExpressionService/AddCustomBinderObject) -- 在选定名称下暴露活动对象的成员，可选择作为非限定应用程序对象
- [AddCustomBinder](/official/Reference/VBA/TbExpressionService/AddCustomBinder) -- 注册用户提供的 [**ITbCustomBinder**](#itbcustombinder-interface) 实现

### ExpressionEngineBinderFlags

[**AddCustomBinderObject**](/official/Reference/VBA/TbExpressionService/AddCustomBinderObject) 接受的标志：

| 常量 | 值 | 描述 |
|----------|-------|-------------|
| **IsAppObject** | 1 | 绑定对象的成员无需限定名即可访问，类似于 Office 宿主的 **Application** 成员。 |

## ITbExpression 接口

编译表达式的句柄。由 [**Compile**](/official/Reference/VBA/TbExpressionService/Compile) 和 [**ITbCustomBinder.Bind**](/official/Reference/VBA/TbExpressionService/Bind) 实现返回。调用 [**Evaluate**](/official/Reference/VBA/TbExpressionService/Evaluate) 会根据其绑定的当前状态运行表达式并返回结果；同一实例可以根据需要求值任意次数。

### 成员

- [Evaluate](/official/Reference/VBA/TbExpressionService/Evaluate) -- 运行编译表达式并返回其结果

## ITbCustomBinder 接口

实现此接口以使用 [**AddCustomBinder**](/official/Reference/VBA/TbExpressionService/AddCustomBinder) 注册完全自定义的解析器。引擎在编译期间对表达式源中遇到的每个未解析符号调用 [**Bind**](/official/Reference/VBA/TbExpressionService/Bind)，提供符号名称和调用点的参数数量，并期望返回一个 **ITbExpression**，在调用 **Evaluate** 时产生该值——或返回 **Nothing** 以推迟到下一个绑定器。

### 成员

- [Bind](/official/Reference/VBA/TbExpressionService/Bind) -- 将符号引用解析为 **ITbExpression**，或返回 **Nothing** 以推迟到下一个绑定器