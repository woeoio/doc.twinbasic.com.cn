---
title: CStr
parent: Conversion Module
permalink: /tB/Modules/Conversion/CStr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd4423697-74c4-412e-bf4c-674da3df9541'
  PropagateID: 'd4423697-74c4-412e-bf4c-674da3df9541'
  ReservedCode1: '394f2a6b-3ba5-4ad0-b425-ea722902f01a'
  ReservedCode2: '394f2a6b-3ba5-4ad0-b425-ea722902f01a'
---

# CStr

将表达式强制转换为 **String**。

语法：**CStr(** *expression* **)**

*expression*
: *必需* 任何有效的表达式。

返回类型为 **String**。结果取决于 *expression* 的类型：

| 如果 *expression* 为 | CStr 返回 |
|----------------------|-----------|
| **Boolean** | 包含 `"True"` 或 `"False"` 的字符串。 |
| **Date** | 包含系统短日期格式日期的字符串。 |
| **Empty** | 零长度字符串（`""`）。 |
| **Error** | 包含单词 `Error` 后跟错误号的字符串。 |
| **Null** | 运行时错误。 |
| 其他数值 | 包含该数字的字符串。 |

**CStr** 是替代 [**Str**](/official/Reference/VBA/Conversion/Str) 将数字转换为字符串的区域感知方案。**CStr** 根据系统的区域设置正确识别不同的小数分隔符。

### 示例

此示例使用 **CStr** 函数将数值转换为 **String**。

```vb
Dim MyDouble, MyString
MyDouble = 437.324                       ' MyDouble is a Double.
MyString = CStr(MyDouble)                ' MyString contains "437.324".
```

### 另请参阅

- [CBool](/official/Reference/VBA/Conversion/CBool)、[CByte](/official/Reference/VBA/Conversion/CByte)、[CCur](/official/Reference/VBA/Conversion/CCur)、[CDbl](/official/Reference/VBA/Conversion/CDbl)、[CInt](/official/Reference/VBA/Conversion/CInt)、[CLng](/official/Reference/VBA/Conversion/CLng)、[CSng](/official/Reference/VBA/Conversion/CSng)、[CVar](/official/Reference/VBA/Conversion/CVar) 函数
- [Str](/official/Reference/VBA/Conversion/Str)、[Format](/official/Reference/VBA/Strings/Format) 函数