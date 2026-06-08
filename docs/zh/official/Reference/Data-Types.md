---
title: "数据类型"
parent: Reference Section
nav_order: 10
permalink: /Reference/Data-Types
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '12356421-04bc-4a5f-b601-99376b01c386'
  PropagateID: '12356421-04bc-4a5f-b601-99376b01c386'
  ReservedCode1: 'f9c48b68-402b-47fd-af17-ea392b3e4bef'
  ReservedCode2: 'f9c48b68-402b-47fd-af17-ea392b3e4bef'
---

# 数据类型

twinBASIC支持十四种内置数据类型。它们分为四大类别：数值型（整数和浮点）、文本、日期/时间和引用/泛型。本页是存储大小、取值范围和类型声明后缀的权威参考。

关于twinBASIC对此集合的新增类型 --- **LongLong**、**LongPtr**和作为独立类型的**Decimal** --- 参见[功能 → 新数据类型](/official/Features/Language/Data-Types)。

---

## 快速参考

| 类型 | 后缀 | 存储 | 范围 |
|------|--------|---------|-------|
| **Boolean** | (无) | 2字节 | `True`或`False` |
| **Byte** | (无) | 1字节 | 0到255 |
| **Integer** | `%` | 2字节 | -32,768到32,767 |
| **Long** | `&` | 4字节 | -2,147,483,648到2,147,483,647 |
| **LongLong** | `^` | 8字节 | -9,223,372,036,854,775,808到9,223,372,036,854,775,807 |
| **LongPtr** | (无) | 4字节(32位)/8字节(64位) | 取决于目标，与**Long**或**LongLong**相同 |
| **Single** | `!` | 4字节 | ±1.401298E-45到±3.402823E38 |
| **Double** | `#` | 8字节 | ±4.94065645841246E-324到±1.79769313486232E308 |
| **Currency** | `@` | 8字节 | -922,337,203,685,477.5808到922,337,203,685,477.5807 |
| **Decimal** | (无) | 16字节 | ±79,228,162,514,264,337,593,543,950,335（最多28位小数） |
| **Date** | (无) | 8字节 | 100年1月1日到9999年12月31日 |
| **String** | `$` | 可变 | 最多约20亿个字符 |
| **Variant** | (无) | 16字节(+ 堆数据) | 以上任意类型 |
| **Object** | (无) | 4字节(32位)/8字节(64位) | COM接口引用 |

后缀列出了可选择性附加在字面量或标识符后以强制其类型的字符 --- 例如，`42&`是**Long**字面量，`3.14#`是**Double**，`Total!`在类型隐式上下文中声明**Single**变量。

---

## 整数类型

**Boolean**存储`True`(-1)或`False`(0)。当期望**Boolean**时，运行时将任何非零值视为`True`；只有-1是规范的`True`。将任何非零整数赋值给**Boolean**会将其规范化为-1。

**Byte**是唯一的无符号整数类型。它保存0--255的值，使其成为二进制I/O和缓冲区操作中使用的字节数组的天然元素类型。

**Integer**保存小范围有符号整数。在大多数代码中，**Long**是更好的选择：它在32位硬件上并不更慢，且在值超过32,767时绝不会溢出。**Integer**在与声明16位字段的结构或API交互时有用。

**Long**是最常用的整数类型。它覆盖了Win32 `DWORD`和`int`值的完整范围，是索引变量和计数器的默认类型。

**LongLong**是在32位和64位构建中都可用8字节有符号整数。在VBA中它仅限于64位目标；twinBASIC解除了此限制，允许在32位项目中使用**LongLong**。当值可能超过2,147,483,647时使用它 --- 文件大小、滴答计数、GUID和64位Win32句柄。后缀`^`标记**LongLong**字面量：`9_000_000_000^`。

**LongPtr**根据编译目标改变宽度：32位构建4字节，64位构建8字节。它是Win32句柄、窗口句柄(**HWND**)和必须在两种模式下工作的`Declare`语句中指针的正确类型。它没有字面量后缀 --- 使用`Dim x As LongPtr`声明变量并赋值数值表达式。

整数溢出默认引发运行时错误（错误6）。溢出不会静默回绕。

---

## 浮点类型

**Single**和**Double**分别遵循IEEE 754单精度和双精度浮点标准。两者都可以将`NaN`和`Infinity`表示为位模式，但VBA运行时在大多数会产生它们的操作上引发错误。

**Double**是包含小数点的无类型数字字面量的默认类型（`3.14`是**Double**）。精度约为15--16位有效十进制数字。选择它用于通用浮点运算。

**Single**精度约为6--7位有效十进制数字。它更小，在紧凑循环中可能更快，但精度降低使其不适合舍入误差敏感的金融或科学计算。

**Currency**是定点类型，内部存储为按10,000缩放的64位有符号整数。它避免了IEEE 754类型的二进制舍入误差，恰好携带四位小数。用于货币值和任何需要精确十进制舍入的计算。

---

## Decimal

**Decimal**是16字节类型，使用12字节(96位)整数加上可变小数点位置和符号位。它提供最多29位有效数字和最多28位小数，是可用精度最高的数值类型。

::: info
在twinBASIC中，**Decimal**既可作为**Variant**子类型使用（如VBA中），也可作为独立声明类型使用 --- `Dim x As Decimal`可编译运行。转换函数[**CDec**](/official/Reference/VBA/Conversion/CDec)返回**Decimal**值。
:::

---

## Date

**Date**存储为IEEE 754双精度浮点数：整数部分计算从纪元（1899年12月30日）开始的天数，小数部分表示一天中的时间（午夜为0.0，正午为0.5）。可表示范围为100年1月1日到9999年12月31日。

[**Date**](/official/Reference/Core/Date)和[**Time**](/official/Reference/Core/Time)属性返回当前日期和时间。[**Now**](/official/Reference/VBA/DateTime/Now)返回两者组合。由于**Date**本质上是**Double**，**Date**值上的算术运算有效：加1前进一天，两个日期相减得到它们之间的天数。

---

## String

**String**保存Unicode字符序列，内部存储为COM `BSTR`（长度前缀宽字符字符串）。长度以字符为单位测量，而非字节；每个字符2字节宽(UTF-16 LE)。**String**最多可保存约20亿个字符，实际受可用内存限制。

**String**变量初始化为`vbNullString`（空`BSTR`指针），这与零长度字符串(`""`)不同。大多数字符串操作将两者视为空字符串，但在传递字符串给区分空指针和空缓冲区的API时，这个区别很重要。参见[**StrPtr**](/official/Reference/VBA/Information/StrPtr)获取底层缓冲区的地址。

定长字符串 --- `Dim s As String * 20` --- 恰好占用指定数量的字符，赋值时右侧补空格或截断。适用于固定宽度的二进制文件记录。

---

## Variant

**Variant**是标记联合，可以保存上表中的任何类型，加上`Null`、`Empty`和数组。其16字节头部存储类型标签([**VbVarType**](/official/Reference/VBA/Constants/VbVarType))，后跟类型特定数据。当值为**String**、**Object**或数组时，8字节数据槽保存指向堆分配存储的指针。

`Empty`是未初始化**Variant**的默认状态 --- 它与`0`、`""`、`False`和`Null`不同。使用[**IsEmpty**](/official/Reference/VBA/Information/IsEmpty)检测。`Null`会在算术和比较中传播；使用[**IsNull**](/official/Reference/VBA/Information/IsNull)检测。

**Variant**是后期绑定COM调用中参数和返回值的必需类型，也是运行时返回类型变化的任何函数的必需类型。与有类型变量相比，每次操作都有少量开销，因为运行时必须检查标签。在设计时类型已知的情况下，优先使用有类型变量。

---

## Object

**Object**保存COM接口引用 --- 指向vtable的指针。在32位构建中占用4字节；64位构建中8字节。运行时在赋值时调用`AddRef`，在变量超出作用域或设置为`Nothing`时调用`Release`。

`Nothing`是零值的**Object**引用。使用`If obj Is Nothing Then`检测。

**Object**变量可以保存任何兼容COM的对象；运行时通过`IDispatch`（后期绑定）解析成员调用。使用特定类或接口类型声明变量 --- `Dim fs As FileSystemObject` --- 可启用早期绑定，速度更快并产生编译时类型检查。

---

### 另见

- [新数据类型](/official/Features/Language/Data-Types) -- **LongLong**、**LongPtr**和**Decimal**详解
- [枚举](/official/Reference/Enumerations) -- 所有包中全部枚举类型的索引
- [VbVarType](/official/Reference/VBA/Constants/VbVarType) -- **Variant**子类型标签常量
- [CDec](/official/Reference/VBA/Conversion/CDec)、[CLngLng](/official/Reference/VBA/Conversion/CLngLng)、[CLngPtr](/official/Reference/VBA/Conversion/CLngPtr) -- 三个扩展数值类型的转换函数