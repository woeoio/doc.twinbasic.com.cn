---
title: Deftype
parent: Statements
permalink: /tB/Core/Deftype
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd01b2e66-0aab-4a42-acdb-6da3e8883cd5'
  PropagateID: 'd01b2e66-0aab-4a42-acdb-6da3e8883cd5'
  ReservedCode1: '802c86c2-95eb-4c8f-90c8-0ffb9d29ba55'
  ReservedCode2: '802c86c2-95eb-4c8f-90c8-0ffb9d29ba55'
---

# DefBool、DefByte、DefInt、DefLng、DefLngLng、DefLngPtr、DefCur、DefSng、DefDbl、DefDec、DefDate、DefStr、DefObj、DefVar

在模块级别用于为名称以指定字符开头的变量、传递给过程的参数以及 **Function** 和 **Property Get** 过程的返回类型设置默认数据类型。

::: warning
**Def**_type_ 系列语句已弃用。它们仅为与遗留代码兼容而受支持，新代码应使用 **As** *type* 显式声明每个变量、参数和返回类型。结合 [**Option Explicit**](/official/Reference/Core/Option#Explicit)，显式声明使代码更易于阅读和维护。
:::

语法：

- > **DefBool** *letterrange* [ **,** *letterrange* ] **. . .**
- > **DefByte** *letterrange* [ **,** *letterrange* ] **. . .**
- > **DefInt** *letterrange* [ **,** *letterrange* ] **. . .**
- > **DefLng** *letterrange* [ **,** *letterrange* ] **. . .**
- > **DefLngLng** *letterrange* [ **,** *letterrange* ] **. . .**
- > **DefLngPtr** *letterrange* [ **,** *letterrange* ] **. . .**
- > **DefCur** *letterrange* [ **,** *letterrange* ] **. . .**
- > **DefSng** *letterrange* [ **,** *letterrange* ] **. . .**
- > **DefDbl** *letterrange* [ **,** *letterrange* ] **. . .**
- > **DefDec** *letterrange* [ **,** *letterrange* ] **. . .**
- > **DefDate** *letterrange* [ **,** *letterrange* ] **. . .**
- > **DefStr** *letterrange* [ **,** *letterrange* ] **. . .**
- > **DefObj** *letterrange* [ **,** *letterrange* ] **. . .**
- > **DefVar** *letterrange* [ **,** *letterrange* ] **. . .**

*letterrange*
: 单个字母，或连字符范围 *letter1*-*letter2*。字母指定采用默认类型的名称的首字母。不区分大小写。

语句名决定数据类型：

| 语句 | 数据类型 |
|:----------|:----------|
| **DefBool**   | **Boolean** |
| **DefByte**   | **Byte** |
| **DefInt**    | **Integer** |
| **DefLng**    | **Long** |
| **DefLngLng** | **LongLong** |
| **DefLngPtr** | **LongPtr** |
| **DefCur**    | **Currency** |
| **DefSng**    | **Single** |
| **DefDbl**    | **Double** |
| **DefDec**    | **Decimal** |
| **DefDate**   | **Date** |
| **DefStr**    | **String** |
| **DefObj**    | **Object** |
| **DefVar**    | **Variant** |

例如，在以下片段中，`Message` 是 **String** 变量：

```vb
DefStr A-Q
. . .
Message = "Out of stack space."
```

**Def**_type_ 语句仅影响使用它的模块。未显式声明且未被 **Def**_type_ 语句覆盖的变量、参数和返回类型的默认数据类型为 **Variant**。

字母范围通常为字符集前128个字符中以这些字母开头的变量定义数据类型。但是，范围A-Z为*所有*名称设置指定的数据类型，包括以字符集扩展部分（128-255）的字符开头的名称。

指定范围A-Z后，子范围不能再使用 **Def**_type_ 语句重新定义。一旦指定了范围，在另一个 **Def**_type_ 语句中包含先前定义的字母将产生错误。任何变量——无论是否已定义——的数据类型仍可以通过使用带 **As** *type* 子句的 [**Dim**](/official/Reference/Core/Dim) 语句显式指定：

```vb
DefInt A-Z
Dim TaxRate As Double   ' explicit declaration overrides the default
```

**Def**_type_ 语句不影响用户自定义类型的元素——那些必须显式声明。

### 另请参阅

- [**Dim** 语句](/official/Reference/Core/Dim)
- [**Option** 语句](/official/Reference/Core/Option)（关于 **Option Explicit**）
- [**Type** 语句](/official/Reference/Core/Type)