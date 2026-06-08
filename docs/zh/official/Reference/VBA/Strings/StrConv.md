---
title: StrConv
parent: Strings Module
permalink: /tB/Modules/Strings/StrConv
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ac9cb96c-ad48-44c6-82d2-dd95cd6b5554'
  PropagateID: 'ac9cb96c-ad48-44c6-82d2-dd95cd6b5554'
  ReservedCode1: 'ce1a9e39-b851-40d4-ba11-6c33d35d7faa'
  ReservedCode2: 'ce1a9e39-b851-40d4-ba11-6c33d35d7faa'
---

# StrConv

返回按指定方式转换的**String**。

语法：**StrConv(** *string*, *conversion* [ **,** *LCID* ] **)**

*string*
: *必需* 要转换的字符串表达式。

*conversion*
: *必需* **Integer**。指定要执行的转换类型的值之和。

*LCID*
: *可选* LocaleID，如果与系统LocaleID不同。（系统LocaleID为默认值。）

*conversion*参数的设置为：

| 常量               | 值   | 描述                                                                   |
|--------------------|------|------------------------------------------------------------------------|
| **vbUpperCase**    | 1    | 将字符串转换为大写字符。                                               |
| **vbLowerCase**    | 2    | 将字符串转换为小写字符。                                               |
| **vbProperCase**   | 3    | 将字符串中每个单词的首字母转换为大写。                                 |
| **vbWide**         | 4    | 将字符串中的窄（单字节）字符转换为宽（双字节）字符。                   |
| **vbNarrow**       | 8    | 将字符串中的宽（双字节）字符转换为窄（单字节）字符。                   |
| **vbKatakana**     | 16   | 将字符串中的平假名字符转换为片假名字符。                               |
| **vbHiragana**     | 32   | 将字符串中的片假名字符转换为平假名字符。                               |
| **vbUnicode**      | 64   | 使用系统默认代码页将字符串转换为Unicode。                               |
| **vbFromUnicode**  | 128  | 使用系统默认代码页将字符串从Unicode转换。                               |

::: info
这些常量由twinBASIC指定。因此，它们可以在代码中的任何位置用来代替实际值。大多数可以组合使用，例如**vbUpperCase + vbWide**，除非它们互斥，例如**vbUnicode + vbFromUnicode**。常量**vbWide**、**vbNarrow**、**vbKatakana**和**vbHiragana**在不适用的区域设置中使用时会导致运行时错误。
:::

以下是用于首字母大写的有效单词分隔符：**Null**（`Chr$(0)`）、水平制表符（`Chr$(9)`）、换行符（`Chr$(10)`）、垂直制表符（`Chr$(11)`）、换页符（`Chr$(12)`）、回车符（`Chr$(13)`）、空格（SBCS）（`Chr$(32)`）。空格的实际值因DBCS的国家/地区而异。

从ANSI格式的**Byte**数组转换为字符串时，使用**StrConv**函数。从Unicode格式的此类数组转换时，使用赋值语句。

### 示例

本示例使用**StrConv**函数将Unicode字符串转换为ANSI字符串。

```vb
Dim i As Long
Dim x() As Byte
x = StrConv("ABCDEFG", vbFromUnicode)    ' Convert string.
For i = 0 To UBound(x)
    Debug.Print x(i)
Next
```

### 另请参阅

- [Asc](/official/Reference/VBA/Strings/Asc)、[Chr](/official/Reference/VBA/Strings/Chr)、[LCase](/official/Reference/VBA/Strings/LCase)、[UCase](/official/Reference/VBA/Strings/UCase)函数