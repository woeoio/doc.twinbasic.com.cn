---
title: CType
parent: Conversion Module
permalink: /tB/Modules/Conversion/CType
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cbaed920-32bd-42a9-92f4-acb3b699cb59'
  PropagateID: 'cbaed920-32bd-42a9-92f4-acb3b699cb59'
  ReservedCode1: '08fd5286-c78d-4ae4-bc46-cd277c4cbf6c'
  ReservedCode2: '08fd5286-c78d-4ae4-bc46-cd277c4cbf6c'
---

# CType

执行到由调用者选择的类型的显式类型转换。

语法：**CType(Of** *type* **)** **(** *value* **)**

*type*
: *必需* 要将 *value* 转换为的类型。接受编译器已知的任何类型，包括内置类型、**Enum** 类型、类、接口和用户自定义类型。

*value*
: *必需* 要转换的表达式。

返回类型与 *type* 匹配。

::: info
**CType** 是 twinBASIC 扩展；VBA 没有等效项。
:::

**CType** 有两个作用：

1. **作为显式转换**，在任何隐式转换会被禁止或产生编译器警告的地方使用。它表达了与 [**CInt**](/official/Reference/VBA/Conversion/CInt)、[**CLng**](/official/Reference/VBA/Conversion/CLng) 和其余 C 前缀函数相同的意图，但适用于任何目标类型——最常用的是目标为 **Enum** 或接口的情况。例如，将数值字面量或另一个 **Enum** 成员赋值给 **Enum** 类型的变量会触发编译器警告，而 **CType** 可以消除此警告：

   ```vb
   Dim day As VbDayOfWeek
   day = CType(Of VbDayOfWeek)(1)
   ```

2. **作为指针到 UDT 的转换**，用于将 **LongPtr** 指向的内存视为特定的用户自定义类型而不进行复制。参见[增强指针功能](/official/Features/Language/Pointers#ctypeof-type)中的规范示例。

在这两种角色中，**CType** 都是编译器识别的类似运算符的形式；它不像常规函数那样被调用，未参数化的名称 `CType` 不能赋值给函数引用。

### 另请参阅

- [增强指针功能](/official/Features/Language/Pointers#ctypeof-type)
- [泛型](/official/Features/Language/Generics)
- [编译器警告](/official/Features/Compiler-IDE/Compiler-Warnings)
- [CBool](/official/Reference/VBA/Conversion/CBool)、[CByte](/official/Reference/VBA/Conversion/CByte)、[CInt](/official/Reference/VBA/Conversion/CInt)、[CLng](/official/Reference/VBA/Conversion/CLng)、[CDbl](/official/Reference/VBA/Conversion/CDbl)、[CStr](/official/Reference/VBA/Conversion/CStr)、[CVar](/official/Reference/VBA/Conversion/CVar) 函数