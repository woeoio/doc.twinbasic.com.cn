---
title: 比较运算符
parent: Operators
permalink: /tB/Core/Comparison-Operators
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '02bcf123-2b10-4735-990b-14ffa18f03d9'
  PropagateID: '02bcf123-2b10-4735-990b-14ffa18f03d9'
  ReservedCode1: '8209d04a-ac23-4492-b3dd-e0c2214f1f51'
  ReservedCode2: '8209d04a-ac23-4492-b3dd-e0c2214f1f51'
---

# 比较运算符

用于比较表达式并返回 **Boolean** 结果。

语法：
> *result* **=** *expression1* *comparisonoperator* *expression2*  
> *result* **=** *object1* **Is** *object2*  
> *result* **=** *string* **Like** *pattern*

*result*
: 任意数值变量。

*expression*
: 任意表达式。

*comparisonoperator*
: `<`、`<=`、`>`、`>=`、`=`、`<>` 中的任意一个。

*object*
: 任意对象引用。

*string*
: 任意字符串表达式。

*pattern*
: 任意字符串表达式或字符范围。

下表列出了比较运算符以及确定 *result* 为 **True**、**False** 或 **Null** 的条件：

| 运算符                           | **True** 如果                | **False** 如果               | **Null** 如果                              |
|:----------------------------------|:---------------------------|:---------------------------|:-----------------------------------------|
| `<`  (小于)                  | *expression1* < *expression2*  | *expression1* >= *expression2* | *expression1* 或 *expression2* = **Null** |
| `<=` (小于或等于)      | *expression1* <= *expression2* | *expression1* > *expression2*  | *expression1* 或 *expression2* = **Null** |
| `>`  (大于)               | *expression1* > *expression2*  | *expression1* <= *expression2* | *expression1* 或 *expression2* = **Null** |
| `>=` (大于或等于)   | *expression1* >= *expression2* | *expression1* < *expression2*  | *expression1* 或 *expression2* = **Null** |
| `=`  (等于)                   | *expression1* = *expression2*  | *expression1* <> *expression2* | *expression1* 或 *expression2* = **Null** |
| `<>` (不等于)               | *expression1* <> *expression2* | *expression1* = *expression2*  | *expression1* 或 *expression2* = **Null** |

::: info
[**Is**](/official/Reference/Core/Is) 和 [**Like**](/official/Reference/Core/Like) 运算符有各自专用的比较语义，单独成文。
:::

`=` 符号也是赋值运算符（`*variable* = *expression*`）。上下文——`=` 出现在表达式中还是语句开头——决定了使用哪种含义；无需显式选择。

比较两个表达式时，判断它们是作为数字还是字符串比较可能并不明显。下表显示了表达式的比较方式，或当任一表达式不是 **Variant** 时的结果：

| 如果                                                                                       | 则                                                  |
|:-----------------------------------------------------------------------------------------|:------------------------------------------------------|
| 两个表达式都是数值类型（**Byte**、**Boolean**、**Integer**、**Long**、**LongLong**、**Single**、**Double**、**Date**、**Currency**） | 执行数值比较。                         |
| 两个表达式都是 **String**                                                          | 执行字符串比较。                          |
| 一个表达式是数值类型，另一个是 **Variant** 且是或可以是数字    | 执行数值比较。                         |
| 一个表达式是数值类型，另一个是无法转换为数字的字符串 **Variant** | 发生 `Type Mismatch` 错误。                       |
| 一个表达式是 **String**，另一个是除 **Null** 外的任意 **Variant**        | 执行字符串比较。                          |
| 一个表达式是 **Empty**，另一个是数值数据类型                         | 执行数值比较，**Empty** 表达式使用 0。 |
| 一个表达式是 **Empty**，另一个是 **String**                                | 执行字符串比较，**Empty** 表达式使用 `""`。 |

如果 *expression1* 和 *expression2* 都是 **Variant** 表达式，其底层类型决定比较方式：

| 如果                                                                  | 则                                                  |
|:--------------------------------------------------------------------|:------------------------------------------------------|
| 两个 **Variant** 表达式都是数值                            | 执行数值比较。                         |
| 两个 **Variant** 表达式都是字符串                            | 执行字符串比较。                          |
| 一个 **Variant** 表达式是数值，另一个是字符串     | 数值表达式小于字符串表达式。 |
| 一个 **Variant** 表达式是 **Empty**，另一个是数值    | 执行数值比较，**Empty** 表达式使用 0。 |
| 一个 **Variant** 表达式是 **Empty**，另一个是字符串   | 执行字符串比较，**Empty** 表达式使用 `""`。 |
| 两个 **Variant** 表达式都是 **Empty**                          | 表达式相等。                            |

当 **Single** 与 **Double** 比较时，**Double** 会被舍入到 **Single** 的精度。如果 **Currency** 与 **Single** 或 **Double** 比较，**Single** 或 **Double** 会被转换为 **Currency**。对于 **Currency**，小于 `.0001` 的小数值可能丢失，这可能导致两个实际不同的值比较结果为相等。

字符串比较受模块的 [**Option Compare**](/official/Reference/Core/Option) 设置控制——**Binary**（默认；区分大小写，按序比较）或 **Text**（不区分大小写，受区域设置影响）。

### 示例

```vb
Dim MyResult, Var1, Var2
MyResult = (45 < 35)            ' Returns False.
MyResult = (45 = 45)            ' Returns True.
MyResult = (4 <> 3)             ' Returns True.
MyResult = ("5" > "4")          ' Returns True.

Var1 = "5": Var2 = 4            ' Initialize variables.
MyResult = (Var1 > Var2)        ' Returns True (string compared as string).

Var1 = 5: Var2 = Empty
MyResult = (Var1 > Var2)        ' Returns True (Empty treated as 0).

Var1 = 0: Var2 = Empty
MyResult = (Var1 = Var2)        ' Returns True.
```

### 另请参阅

- [**Is** 运算符](/official/Reference/Core/Is)
- [**IsNot** 运算符](/official/Reference/Core/IsNot)
- [**Like** 运算符](/official/Reference/Core/Like)
- [**Option** 语句](/official/Reference/Core/Option)
- [运算符](/official/Reference/Operators)