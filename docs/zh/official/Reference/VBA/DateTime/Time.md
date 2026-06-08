---
title: Time
parent: DateTime Module
permalink: /tB/Modules/DateTime/Time
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '38234836-69ef-4d04-9585-9bd564f10bc6'
  PropagateID: '38234836-69ef-4d04-9585-9bd564f10bc6'
  ReservedCode1: 'd04ffe81-64f3-4384-8464-13a9328bb8a8'
  ReservedCode2: 'd04ffe81-64f3-4384-8464-13a9328bb8a8'
---

# Time

::: info

在 twinBASIC 中，**Time** 和 **Time$** 被实现为模块级属性，而非 VBx 中的函数/语句。这对它们的行为没有影响。这些属性仍然具有 VBx 中 Time 和 Time$ 函数及语句的语法和语义。
:::

## Time 属性

### Get


返回一个 **Variant** (**Date**)，指示当前系统时间。

语法：**Time** [ **()** ]

#### 示例

此示例使用 **Time** 属性返回当前系统时间。

```vb
Dim MyTime As Variant
MyTime = Time   ' MyTime contains the current system time.
```

### Let

设置当前系统时间。

语法：**Time** **=** *time*

*time*

: *必需* 任何可以表示时间的数值表达式、字符串表达式或其任意组合。

如果 *time* 是字符串，**Time** 会尝试使用系统指定的时间分隔符将其转换为时间。如果无法转换为有效时间，则发生错误。

::: info

在某些版本的 Microsoft Windows（包括 Windows 10 和 11）中，设置系统时间是特权操作，需要进程具有相关权限。如果没有这些权限，对 **Time** 赋值将导致"权限被拒绝"运行时错误。
:::

#### 示例

此示例使用 **Time** 属性设置计算机系统时间。

```vb
Dim MyTime
MyTime = #4:35:17 PM#    ' Assign a time.
Time = MyTime             ' Set system time to MyTime.
```

## Time$ 属性

### Get

返回一个 **String**，包含当前系统时间。

语法：**Time$** [ **()** ]

#### 示例

此示例使用 **Time$** 属性以字符串形式返回当前系统时间。

```vb
Dim MyTime$
MyTime = Time$  ' MyTime contains the current system time as a string.
```

### Let

从字符串设置当前系统时间。

语法：**Time$** **=** *time*

*time*

: *必需* 表示从 0:00:00（上午 12:00:00）到 23:59:59（下午 11:59:59）之间时间的字符串表达式。

::: info

在某些版本的 Microsoft Windows（包括 Windows 10 和 11）中，设置系统时间是特权操作，需要进程具有相关权限。如果没有这些权限，对 **Time$** 赋值将导致"权限被拒绝"运行时错误。
:::

#### 示例

此示例使用 **Time$** 属性设置计算机系统时间。

```vb
Dim MyTime$
MyTime = "4:35:17 PM"    ' Assign a time.
Time$ = MyTime           ' Set system time.
```

### 另请参阅

- [Date](/official/Reference/VBA/DateTime/Date) 属性
- [Now](/official/Reference/VBA/DateTime/Now) 函数