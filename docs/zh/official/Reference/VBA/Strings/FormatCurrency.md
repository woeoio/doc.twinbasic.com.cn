---
title: FormatCurrency
parent: Strings Module
permalink: /tB/Modules/Strings/FormatCurrency
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '16a0314c-570b-4f39-936d-ce4a3e617b2c'
  PropagateID: '16a0314c-570b-4f39-936d-ce4a3e617b2c'
  ReservedCode1: '4bd6622a-2fd2-4b84-8d89-00ddd376b6a3'
  ReservedCode2: '4bd6622a-2fd2-4b84-8d89-00ddd376b6a3'
---

# FormatCurrency

返回一个使用系统控制面板中定义的货币符号格式化为货币值的表达式。

语法：**FormatCurrency(** *expression* [ **,** *numDigitsAfterDecimal* [ **,** *includeLeadingDigit* [ **,** *useParensForNegativeNumbers* [ **,** *groupDigits* ] ] ] ] **)**

*expression*
: *必需* 要格式化的表达式。

*numDigitsAfterDecimal*
: *可选* 数值，指示小数点右侧显示多少位。默认值为-1，表示使用计算机的区域设置。

*includeLeadingDigit*
: *可选* 三态常量，指示是否为小数值显示前导零。参见下面的设置。

*useParensForNegativeNumbers*
: *可选* 三态常量，指示是否将负值放在括号内。参见下面的设置。

*groupDigits*
: *可选* 三态常量，指示是否使用计算机区域设置中指定的组分隔符对数字进行分组。参见下面的设置。

*includeLeadingDigit*、*useParensForNegativeNumbers*和*groupDigits*参数的设置如下：

| 常量              | 值  | 描述                           |
|-------------------|-----|--------------------------------|
| **vbTrue**        | -1  | True                           |
| **vbFalse**       | 0   | False                          |
| **vbUseDefault**  | -2  | 使用计算机区域设置中的设置。   |

当省略一个或多个可选参数时，省略参数的值由计算机的区域设置提供。货币符号相对于货币值的位置由系统的区域设置决定。

### 另请参阅

- [Format](/official/Reference/VBA/Strings/Format)、[FormatNumber](/official/Reference/VBA/Strings/FormatNumber)、[FormatPercent](/official/Reference/VBA/Strings/FormatPercent)函数