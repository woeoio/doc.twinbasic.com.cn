---
title: Split
parent: Strings Module
permalink: /tB/Modules/Strings/Split
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f6575cae-3cc0-433d-a74a-d1c92f887a1c'
  PropagateID: 'f6575cae-3cc0-433d-a74a-d1c92f887a1c'
  ReservedCode1: 'c890e259-b161-474f-95ec-6396bb7bced1'
  ReservedCode2: 'c890e259-b161-474f-95ec-6396bb7bced1'
---

# Split

返回一个从零开始的一维数组，包含指定数量的子字符串。

语法：**Split(** *expression* [ **,** *delimiter* [ **,** *limit* [ **,** *compare* ] ] ] **)**

*expression*
: *必需* 包含子字符串和分隔符的字符串表达式。如果*expression*为零长度字符串（`""`），**Split**返回空数组，即没有元素和数据的数组。

*delimiter*
: *可选* 用于标识子字符串边界的字符串字符。如果省略，则假定空格字符（`" "`)为分隔符。如果*delimiter*为零长度字符串，则返回包含整个*expression*字符串的单元素数组。

*limit*
: *可选* 要返回的子字符串数；-1表示返回所有子字符串。

*compare*
: *可选* 数值，指示在计算子字符串时使用的比较类型。参见下面的设置。

*compare*参数可以取以下值：

| 常量                   | 值  | 描述                                                                             |
|------------------------|-----|----------------------------------------------------------------------------------|
| **vbUseCompareOption** | -1  | 使用[**Option Compare**](/official/Reference/Core/Option)语句的设置进行比较。    |
| **vbBinaryCompare**    | 0   | 执行二进制比较。                                                                  |
| **vbTextCompare**      | 1   | 执行文本比较。                                                                    |

### 示例

本示例展示如何使用**Split**函数。

```vb
Dim strFull As String
Dim arrSplitStrings1() As String
Dim arrSplitStrings2() As String
Dim strSingleString1 As String
Dim strSingleString2 As String
Dim strSingleString3 As String
Dim i As Long

strFull = "Dow - Fonseca - Graham - Kopke - Noval - Offley - Sandeman - Taylor - Warre"

' arrSplitStrings1 will be an array from 0 To 8.
' arrSplitStrings1(0) = "Dow " and arrSplitStrings1(1) = " Fonseca ".
' The delimiter did not include spaces, so the spaces in strFull will be
' included in the returned array values.
arrSplitStrings1 = Split(strFull, "-")

' arrSplitStrings2 will be an array from 0 To 8.
' arrSplitStrings2(0) = "Dow" and arrSplitStrings2(1) = "Fonseca".
' The delimiter includes the spaces, so the spaces will not be included
' in the returned array values.
arrSplitStrings2 = Split(strFull, " - ")

' Multiple examples of how to return the value "Kopke" (array position 3).
strSingleString1 = arrSplitStrings2(3)         ' "Kopke".

' This syntax can be used if the entire array is not needed and the
' position in the returned array for the desired value is known.
strSingleString2 = Split(strFull, " - ")(3)    ' "Kopke".

For i = LBound(arrSplitStrings2, 1) To UBound(arrSplitStrings2, 1)
    If InStr(1, arrSplitStrings2(i), "Kopke", vbTextCompare) > 0 Then
        strSingleString3 = arrSplitStrings2(i)
        Exit For
    End If
Next i
```

### 另请参阅

- [Filter](/official/Reference/VBA/Strings/Filter)、[Join](/official/Reference/VBA/Strings/Join)函数