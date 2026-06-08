---
title: "Conversion 模块"
parent: VBA Package
permalink: /tB/Modules/Conversion/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '20c7de97-0827-462a-af31-a3bccdd1410d'
  PropagateID: '20c7de97-0827-462a-af31-a3bccdd1410d'
  ReservedCode1: '6400cae4-c504-4336-8c41-24c880ab78a4'
  ReservedCode2: '6400cae4-c504-4336-8c41-24c880ab78a4'
---

# Conversion 模块

**Conversion** 模块汇集了从一种类型的值生成另一种类型的值的过程——在内部数值类型之间强制转换、从字符串解析数字、将数字格式化为字符串，以及处理 **Null**、错误值和替代数字基数的相关工具。

## 强制转换为特定类型

最大的一组是 **C** 前缀函数系列，每种内部数据类型一个。每个函数接受任何有效表达式并生成指定类型的值，如果无法转换则引发运行时错误：[**CBool**](/official/Reference/VBA/Conversion/CBool)、[**CByte**](/official/Reference/VBA/Conversion/CByte)、[**CCur**](/official/Reference/VBA/Conversion/CCur)、[**CDate**](/official/Reference/VBA/Conversion/CDate)、[**CDbl**](/official/Reference/VBA/Conversion/CDbl)、[**CDec**](/official/Reference/VBA/Conversion/CDec)、[**CInt**](/official/Reference/VBA/Conversion/CInt)、[**CLng**](/official/Reference/VBA/Conversion/CLng)、[**CLngLng**](/official/Reference/VBA/Conversion/CLngLng)、[**CLngPtr**](/official/Reference/VBA/Conversion/CLngPtr)、[**CSng**](/official/Reference/VBA/Conversion/CSng)、[**CStr**](/official/Reference/VBA/Conversion/CStr) 和 [**CVar**](/official/Reference/VBA/Conversion/CVar)。

除了其缩窄或扩展行为外，C 前缀函数是*区域设置感知*的——它们遵循当前的小数分隔符和短日期格式——这使它们成为解析源自用户输入的值的正确选择。它们还起到文档作用：编写 `CLng(x)` 可以明确中间结果的预期类型，即使在周围上下文会隐式强制转换 *x* 的情况下也是如此。

```vb
Dim Amount As Currency
Amount = CCur("1,234.56")        ' parses with the local decimal separator
```

另外两个构造函数返回子类型固定的 **Variant**：[**CVDate**](/official/Reference/VBA/Conversion/CVDate) 构建子类型为 **Date** 的 **Variant**（保留用于与 **Date** 成为内部类型之前编写的代码兼容），[**CVErr**](/official/Reference/VBA/Conversion/CVErr) 构建子类型为 **Error** 且包含选定错误号的 **Variant**——这是返回 **Variant** 的函数在不引发运行时错误的情况下表示"此调用失败并返回此错误代码"的规范方式。

## 泛型转换

[**CType**](/official/Reference/VBA/Conversion/CType) 是 twinBASIC 扩展，它以泛型参数接收目标类型，写作 `CType(Of `*type*`)(`*value*`)`。它与 C 前缀函数扮演相同的角色，但适用于编译器已知的任何类型，这使其成为没有固定名称函数的 **Enum** 值、接口和用户自定义类型的标准转换方式。**CType** 还可以用作指针到 UDT 的转换——参见[增强指针功能](/official/Features/Language/Pointers#ctypeof-type)。

```vb
Dim day As VbDayOfWeek
day = CType(Of VbDayOfWeek)(1)
```

## 截断为整数

[**Int**](/official/Reference/VBA/Conversion/Int) 和 [**Fix**](/official/Reference/VBA/Conversion/Fix) 都丢弃数字的小数部分，但对于负数输入，它们的舍入方向相反。**Int** 向负无穷舍入，因此 `Int(-8.4)` 为 `-9`；**Fix** 向零截断，因此 `Fix(-8.4)` 为 `-8`。对于正值，两者相同。两者都不改变其参数的数据类型，这与 [**CInt**](/official/Reference/VBA/Conversion/CInt) 和 [**CLng**](/official/Reference/VBA/Conversion/CLng) 不同，后者既舍入又缩窄到特定的整数类型。

```vb
Debug.Print Int(-8.4)            ' -9
Debug.Print Fix(-8.4)            ' -8
```

## 数字、字符串和进制

[**Str**](/official/Reference/VBA/Conversion/Str)、[**Hex**](/official/Reference/VBA/Conversion/Hex) 和 [**Oct**](/official/Reference/VBA/Conversion/Oct) 都返回数字的可打印字符串表示——**Str** 为十进制，**Hex** 为十六进制，**Oct** 为八进制。反过来，[**Val**](/official/Reference/VBA/Conversion/Val) 和 [**ValDec**](/official/Reference/VBA/Conversion/ValDec) 从字符串中解析前导数字，分别返回 **Double** 或 **Decimal**；两者都在第一个无法识别的字符处停止，并且都识别十六进制和八进制字面量的 `&H` 和 `&O` 基数前缀。

这五个函数是*区域性不变*的——它们始终使用句点（`.`）作为小数分隔符，且从不读取或写入千位分隔符——这使它们适合在固定文件格式或通信协议中往返使用。对于区域设置感知的文本转换，请改用 [**CStr**](/official/Reference/VBA/Conversion/CStr) 和 [**CDbl**](/official/Reference/VBA/Conversion/CDbl)（或 [**CDec**](/official/Reference/VBA/Conversion/CDec)）。

```vb
Debug.Print Hex(255)             ' "FF"
Debug.Print Oct(8)               ' "10"
Debug.Print Val("&HFF")          ' 255
```

## 处理 Null 和错误值

[**Nz**](/official/Reference/VBA/Conversion/Nz) 在其参数为 **Null** 时返回替代值，其他值保持不变。它最常用于从数据库记录集读取可为空的列，其中直接将该字段与另一个值进行拼接或算术组合会导致 **Null** 传播到表达式的其余部分。

[**Error**](/official/Reference/VBA/Conversion/Error) 返回与错误号关联的描述性文本——与使用该错误号引发的 [**ErrObject**](/official/Reference/VBA/ErrObject/) 的 **Description** 中显示的文本相同。它是同名 [**Error** 语句](/official/Reference/Core/Error)的函数对应形式——语句*引发*运行时错误，而非描述错误。

## Macintosh 兼容性

[**MacID**](/official/Reference/VBA/Conversion/MacID) 将四字符的 Macintosh 资源类型或应用程序签名打包为 **Long**，用于 [**Dir**](/official/Reference/VBA/FileSystem/Dir)、[**Kill**](/official/Reference/VBA/FileSystem/Kill)、**Shell** 或 [**AppActivate**](/official/Reference/VBA/Interaction/AppActivate)。twinBASIC 目前面向 Windows，在这些函数中该值没有特殊含义；提供 **MacID** 是为了与最初为经典 Mac 编写的 VBA 代码保持源代码兼容性。

## 成员

- [CBool](/official/Reference/VBA/Conversion/CBool) -- 将表达式转换为 **Boolean**
- [CByte](/official/Reference/VBA/Conversion/CByte) -- 将表达式转换为 **Byte**
- [CCur](/official/Reference/VBA/Conversion/CCur) -- 将表达式转换为 **Currency**
- [CDate](/official/Reference/VBA/Conversion/CDate) -- 将日期/时间表达式转换为 **Date**
- [CDbl](/official/Reference/VBA/Conversion/CDbl) -- 将表达式转换为 **Double**
- [CDec](/official/Reference/VBA/Conversion/CDec) -- 将表达式转换为 **Decimal**
- [CInt](/official/Reference/VBA/Conversion/CInt) -- 将表达式转换为 **Integer**
- [CLng](/official/Reference/VBA/Conversion/CLng) -- 将表达式转换为 **Long**
- [CLngLng](/official/Reference/VBA/Conversion/CLngLng) -- 将表达式转换为 **LongLong**
- [CLngPtr](/official/Reference/VBA/Conversion/CLngPtr) -- 将表达式转换为 **LongPtr**
- [CSng](/official/Reference/VBA/Conversion/CSng) -- 将表达式转换为 **Single**
- [CStr](/official/Reference/VBA/Conversion/CStr) -- 将表达式转换为 **String**
- [CType](/official/Reference/VBA/Conversion/CType) -- 泛型类型转换，支持 **CType(Of *type*)** 转换运算符
- [CVar](/official/Reference/VBA/Conversion/CVar) -- 将表达式转换为 **Variant**
- [CVDate](/official/Reference/VBA/Conversion/CVDate) -- 将日期/时间表达式转换为子类型为 **Date** 的 **Variant**
- [CVErr](/official/Reference/VBA/Conversion/CVErr) -- 将数值表达式转换为子类型为 **Error** 的 **Variant**
- [Error](/official/Reference/VBA/Conversion/Error) -- 返回与给定错误号对应的错误消息
- [Fix](/official/Reference/VBA/Conversion/Fix) -- 返回数字的整数部分，向零截断
- [Hex](/official/Reference/VBA/Conversion/Hex) -- 返回数字的十六进制字符串表示
- [Int](/official/Reference/VBA/Conversion/Int) -- 返回数字的整数部分，向负无穷舍入
- [MacID](/official/Reference/VBA/Conversion/MacID) -- 在 Macintosh 上，将 4 字符常量转换为可供 **Dir**、**Kill**、**Shell** 或 **AppActivate** 使用的值
- [Nz](/official/Reference/VBA/Conversion/Nz) -- 用指定的替换值替代 **Null** 值
- [Oct](/official/Reference/VBA/Conversion/Oct) -- 返回数字的八进制字符串表示
- [Str](/official/Reference/VBA/Conversion/Str) -- 返回数字的字符串表示
- [Val](/official/Reference/VBA/Conversion/Val) -- 将字符串解析为 **Double**
- [ValDec](/official/Reference/VBA/Conversion/ValDec) -- 将字符串解析为 **Decimal**