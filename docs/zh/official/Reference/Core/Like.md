---
title: Like
parent: Operators
permalink: /tB/Core/Like
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fa166732-495f-4e69-97be-0c17ae356f08'
  PropagateID: 'fa166732-495f-4e69-97be-0c17ae356f08'
  ReservedCode1: '92512627-b292-4c8b-b40c-9faf6a9d7d1f'
  ReservedCode2: '92512627-b292-4c8b-b40c-9faf6a9d7d1f'
---

# Like 运算符

用于将字符串与通配符模式进行比较。

语法：
> *result* **=** *string* **Like** *pattern*

*result*
: 任意数值变量。

*string*
: 任意字符串表达式。

*pattern*
: 符合以下描述的模式匹配约定的任意字符串表达式。

如果 *string* 匹配 *pattern*，*result* 为 **True**；如果不匹配，*result* 为 **False**。如果 *string* 或 *pattern* 为 **Null**，则 *result* 为 **Null**。

**Like** 运算符的行为取决于 [**Option Compare**](/official/Reference/Core/Option) 语句。每个模块默认为 **Option Compare Binary**，按内部二进制表示比较字符（区分大小写，按序比较）。**Option Compare Text** 执行不区分大小写、受区域设置影响的比较。

例如，在 **Option Compare Binary** 下，典型的排序顺序为：

`A < B < E < Z < a < b < e < z < À < Ê < Ø < à < ê < ø`

在 **Option Compare Text** 下，相同字符在不区分大小写和重音时比较相等：

`(A=a) < (À=à) < (B=b) < (E=e) < (Ê=ê) < (Z=z) < (Ø=ø)`

模式匹配语法支持通配符、字符列表和字符范围。*pattern* 中的以下字符具有特殊含义：

| *pattern* 中的       | *string* 中的匹配                                  |
|:-------------------|:-----------------------------------------------------|
| `?`                | 任意单个字符。                                |
| `*`                | 零个或多个字符。                             |
| `#`                | 任意单个数字（`0`--`9`）。                          |
| `[`*charlist*`]`   | *charlist* 中的任意单个字符。                  |
| `[!`*charlist*`]`  | 不在 *charlist* 中的任意单个字符。            |

方括号中包含的一个或多个字符组（*charlist*）可以匹配 *string* 中的任意单个字符，几乎可以包含任何字符代码，包括数字。

::: info
要匹配特殊字符左方括号（`[`）、问号（`?`）、数字符号（`#`）或星号（`*`），请将它们括在方括号中。右方括号（`]`）不能在组内用于匹配自身，但可以在组外作为字面字符使用。
:::

*charlist* 中的连字符（`-`）分隔字符范围的上界和下界——例如，`[A-Z]` 匹配任何大写字母。多个范围放置在相同方括号内，没有分隔符。

范围的含义取决于活动的 **Option Compare** 模式和系统区域设置。在 **Option Compare Binary** 下，范围 `[A-E]` 匹配 `A`、`B`、`E`；在 **Option Compare Text** 下，它匹配 `A`、`a`、`À`、`à`、`B`、`b`、`E`、`e`（但不匹配 `Ê`/`ê`，它们排在基本字母之后）。

其他规则：

- *charlist* 开头的感叹号（`!`）取反字符类。方括号外，`!` 匹配自身。
- *charlist* 开头（如果有 `!` 则在其后）或末尾的连字符（`-`）匹配自身；其他位置标识范围。
- 范围必须从低到高指定：`[A-Z]` 有效；`[Z-A]` 无效。
- 字符序列 `[]` 被视为零长度字符串。

在某些语言中，单个字符表示两个字位（如 `æ` 表示 `a`+`e`）。当系统区域设置指定此类语言时，**Like** 将单个字符和等效的2字符序列视为可互换的，无论作为 *string* 还是在 *charlist* 中。

### 示例

```vb
Dim MyCheck
MyCheck = "aBBBa" Like "a*a"              ' Returns True.
MyCheck = "F" Like "[A-Z]"                ' Returns True.
MyCheck = "F" Like "[!A-Z]"               ' Returns False.
MyCheck = "a2a" Like "a#a"                ' Returns True.
MyCheck = "aM5b" Like "a[L-P]#[!c-e]"     ' Returns True.
MyCheck = "BAT123khg" Like "B?T*"         ' Returns True.
MyCheck = "CAT123khg" Like "B?T*"         ' Returns False.
MyCheck = "ab" Like "a*b"                 ' Returns True.
MyCheck = "a*b" Like "a[*]b"              ' Returns True (literal asterisk).
MyCheck = "axxxxxb" Like "a[*]b"          ' Returns False.
MyCheck = "a[xyz" Like "a[[]*"            ' Returns True.
```

### 另请参阅

- [比较运算符](/official/Reference/Core/Comparison-Operators)
- [**Option** 语句](/official/Reference/Core/Option)
- [**InStr** 函数](/official/Reference/VBA/Strings/InStr)
- [运算符](/official/Reference/Operators)