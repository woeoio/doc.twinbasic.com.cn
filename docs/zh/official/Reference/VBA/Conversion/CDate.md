---
title: CDate
parent: Conversion Module
permalink: /tB/Modules/Conversion/CDate
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5fc9b356-2344-420d-857a-18f7d0735015'
  PropagateID: '5fc9b356-2344-420d-857a-18f7d0735015'
  ReservedCode1: '6c875cd7-d872-48c2-9e3d-9d328a9eb2d5'
  ReservedCode2: '6c875cd7-d872-48c2-9e3d-9d328a9eb2d5'
---

# CDate

将表达式强制转换为 **Date**。

语法：**CDate(** *expression* **)**

*expression*
: *必需* 任何有效的日期表达式——日期字面量、日期/时间字符串，或在可接受日期范围内的数字。

返回类型为 **Date**。

使用 **IsDate** 函数可以确定 *expression* 是否可以转换为日期或时间。**CDate** 可以识别日期字面量和时间字面量，以及在可接受日期范围内的一些数字。将数字转换为日期时，整数部分转换为日期。数字的小数部分转换为一天中的时间，从午夜开始。

**CDate** 根据系统区域设置识别日期格式。如果提供的日期格式不在已识别的日期设置之中，可能无法确定日、月、年的正确顺序。此外，如果长日期格式还包含星期字符串，则无法被识别。

同样提供了 [**CVDate**](/official/Reference/VBA/Conversion/CVDate) 以与先前版本的 Visual Basic 兼容。**CVDate** 的语法与 **CDate** 相同；但是，**CVDate** 返回的是子类型为 **Date** 的 **Variant**，而非实际的 **Date** 类型。

### 示例

此示例使用 **CDate** 函数将字符串转换为 **Date**。通常，不建议将日期和时间硬编码为字符串（如本示例所示）。请改用日期字面量和时间字面量，例如 `#2/12/1969#` 和 `#4:45:23 PM#`。

```vb
Dim MyDate, MyShortDate, MyTime, MyShortTime
MyDate = "February 12, 1969"             ' Define date.
MyShortDate = CDate(MyDate)              ' Convert to Date data type.

MyTime = "4:35:47 PM"                    ' Define time.
MyShortTime = CDate(MyTime)              ' Convert to Date data type.
```

### 另请参阅

- [CVDate](/official/Reference/VBA/Conversion/CVDate)、[DateValue](/official/Reference/VBA/DateTime/DateValue)、[TimeValue](/official/Reference/VBA/DateTime/TimeValue) 函数