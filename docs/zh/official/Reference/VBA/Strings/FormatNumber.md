---
title: FormatNumber
parent: Strings Module
permalink: /tB/Modules/Strings/FormatNumber
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '80edf99f-4cbb-491d-8a8d-8b8fdbc275ad'
  PropagateID: '80edf99f-4cbb-491d-8a8d-8b8fdbc275ad'
  ReservedCode1: 'ceb33063-1721-42f9-86f2-f59ff3627447'
  ReservedCode2: 'ceb33063-1721-42f9-86f2-f59ff3627447'
---

# FormatNumber

返回一个格式化为数字的表达式。

语法：**FormatNumber(** *expression* [ **,** *numDigitsAfterDecimal* [ **,** *includeLeadingDigit* [ **,** *useParensForNegativeNumbers* [ **,** *groupDigits* ] ] ] ] **)**

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

当省略一个或多个可选参数时，省略参数的值由计算机的区域设置提供。

### 另请参阅

- [Format](/official/Reference/VBA/Strings/Format)、[FormatCurrency](/official/Reference/VBA/Strings/FormatCurrency)、[FormatPercent](/official/Reference/VBA/Strings/FormatPercent)函数