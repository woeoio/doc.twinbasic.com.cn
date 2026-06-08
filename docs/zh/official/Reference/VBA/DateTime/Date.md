---
title: Date
parent: DateTime Module
permalink: /tB/Modules/DateTime/Date
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1f1b9dbc-84c2-42b2-b6ec-ecfe6de7aa2b'
  PropagateID: '1f1b9dbc-84c2-42b2-b6ec-ecfe6de7aa2b'
  ReservedCode1: '8c29db63-04cc-4e1a-8b72-ae35d8031774'
  ReservedCode2: '8c29db63-04cc-4e1a-8b72-ae35d8031774'
---

# Date

::: info

在 twinBASIC 中，**Date** 和 **Date$** 实现为模块级属性，而非 VBx 中的函数/语句。这对其行为没有影响。这些属性仍然具有 VBx 中 Date 和 Date$ 函数与语句的语法和语义。
:::

## Date 属性

**Date** 属性的行为不受 [**Calendar**](/official/Reference/VBA/DateTime/Calendar) 属性设置的影响。

### Get

返回一个包含当前系统日期的 **Variant**。

语法：**Date** [ **()** ]

#### 示例

此示例使用 **Date** 属性返回当前系统日期。

```vb
Dim MyDate as Variant
MyDate = Date   ' MyDate contains the current system date.
```

### Let

从 Variant 或 Date 类型的值设置当前系统日期。

语法：**Date** **=** *date*

*date*
: *必需* 对于运行 Microsoft Windows 95 的系统，*date* 必须是从 1980 年 1 月 1 日到 2099 年 12 月 31 日的日期。对于运行 Microsoft Windows NT 的系统，*date* 必须是从 1980 年 1 月 1 日到 2079 年 12 月 31 日的日期。对于 Macintosh，*date* 必须是从 1904 年 1 月 1 日到 2040 年 2 月 5 日的日期。

::: important

在某些版本的 Microsoft Windows（包括 Windows 10 和 11）中，设置系统日期是一项特权操作，需要进程具有相关权限。如果没有这些权限，对 **Date** 的赋值会导致"权限被拒绝"运行时错误。
:::

#### 示例

此示例使用 **Date** 属性设置计算机系统日期。在开发环境中，日期字面量使用代码的区域设置以短日期格式显示。

```vb
Dim MyDate As Date
MyDate = #February 12, 1985#  ' Assign a date to a variable.
Date= MyDate                  ' Change system date. 
```

## Date$ 属性

**Date$** 属性的行为依赖于 [**Calendar**](/official/Reference/VBA/DateTime/Calendar) 属性设置。如果日历为回历，**Date$** 返回或接受一个 10 字符的字符串，格式为 *mm-dd-yyyy*，其中 *mm* (01--12)、*dd* (01--30) 和 *yyyy* (1400--1523) 分别为回历月、日和年。等效的公历范围为 1980 年 1 月 1 日到 2099 年 12 月 31 日。

### Get

返回一个包含当前系统日期的 **String**。

语法：**Date$** [ **()** ]

#### 示例

此示例使用 **Date** 属性以字符串形式返回当前系统日期。

```vb
Dim MyDate$
MyDate = Date$  ' MyDate contains the current system date.
```

### Let

从字符串设置当前系统日期。

语法：**Date$** **=** *date*

*date*
: *必需* 对于运行 Microsoft Windows 95 的系统，*date* 必须是从 1980 年 1 月 1 日到 2099 年 12 月 31 日的日期。对于运行 Microsoft Windows NT 的系统，*date* 必须是从 1980 年 1 月 1 日到 2079 年 12 月 31 日的日期。对于 Macintosh，*date* 必须是从 1904 年 1 月 1 日到 2040 年 2 月 5 日的日期。

::: important

在某些版本的 Microsoft Windows（包括 Windows 10 和 11）中，设置系统日期是一项特权操作，需要进程具有相关权限。如果没有这些权限，对 **Date**$ 的赋值会导致"权限被拒绝"运行时错误。
:::

#### 示例

此示例使用 **Date$** 属性设置计算机系统日期。在开发环境中，日期字面量使用代码的区域设置以短日期格式显示。

```vb
Dim MyDate$
MyDate = "02-12-1985"        ' Assign a date to a variable.
Date$ = MyDate               ' Change the system date. 
```

### 另请参阅

- [Time](/official/Reference/VBA/DateTime/Time) 属性
- [Format](/official/Reference/VBA/Strings/Format) 函数
- [Now](/official/Reference/VBA/DateTime/Now) 函数