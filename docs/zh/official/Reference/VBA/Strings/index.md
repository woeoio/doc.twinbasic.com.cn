---
title: Strings Module
parent: VBA Package
permalink: /tB/Modules/Strings/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'af139b7c-4a26-435f-97a4-cfbad371343a'
  PropagateID: 'af139b7c-4a26-435f-97a4-cfbad371343a'
  ReservedCode1: '1f3d90d1-d85b-4786-aaab-a069c97df902'
  ReservedCode2: '1f3d90d1-d85b-4786-aaab-a069c97df902'
---

# Strings模块

**Strings**模块将运行时的文本处理原语组合在一起——测量字符串、查找字符串内部、从旧字符串构建新字符串、拆分和连接字符串数组、以及将非字符串值格式化为文本。大多数成员有两种可调用形式：带`$`后缀的形式（例如**Left$**）返回**String**，不带后缀的形式（例如**Left**）返回**Variant**（**String**）并通过调用传播**Null**。一些成员还有`B`变体——**AscB**、**ChrB**、**InStrB**、**LeftB**、**LenB**、**MidB**、**RightB**——它们在字节位置而非字符位置上操作，用于处理保存在**String**中的字节缓冲区数据。

## 长度和字符代码

[**Len**](/official/Reference/VBA/Strings/Len)返回字符串中的字符数，或者——当给定非字符串变量时——返回变量占用的字节数。[**Asc**](/official/Reference/VBA/Strings/Asc)返回字符串第一个字符的字符代码；[**Chr**](/official/Reference/VBA/Strings/Chr)是其逆操作，从代码点构建单字符字符串。`W`变体（[**AscW**](/official/Reference/VBA/Strings/Asc)、[**ChrW**](/official/Reference/VBA/Strings/Chr)）无论系统代码页如何都在Unicode中工作。

```vb
Debug.Print Len("Hello")            ' 5
Debug.Print Asc("A")                ' 65
Debug.Print Chr(65)                 ' "A"
```

## 搜索和比较

[**StrComp**](/official/Reference/VBA/Strings/StrComp)比较两个字符串，返回-1、0或1来报告哪个更大（或相等）。[**InStr**](/official/Reference/VBA/Strings/InStr)和[**InStrRev**](/official/Reference/VBA/Strings/InStrRev)返回一个字符串在另一个字符串中的位置，分别从选定的起始位置向前扫描或向后扫描。这三者都接受可选的*compare*参数，控制比较是否区分大小写（**vbBinaryCompare**）、不区分大小写（**vbTextCompare**）或由周围的[**Option Compare**](/official/Reference/Core/Option)设置决定（**vbUseCompareOption**）。注意**InStrRev**相对于**InStr**交换了被搜索字符串和搜索字符串参数的顺序。

```vb
Debug.Print InStr("Hello, world", "o")           ' 5  (first match, forward)
Debug.Print InStrRev("Hello, world", "o")        ' 9  (first match, reverse)
Debug.Print StrComp("ABC", "abc", vbTextCompare) ' 0  (equal under text compare)
```

## 子字符串、填充和修剪

[**Left**](/official/Reference/VBA/Strings/Left)、[**Mid**](/official/Reference/VBA/Strings/Mid)和[**Right**](/official/Reference/VBA/Strings/Right)从字符串的开头、中间或末尾提取子字符串。**Mid**还可以通过[**Mid =**](/official/Reference/Core/Mid-equals)语句作为左值使用，将字符就地写回字符串。[**Space**](/official/Reference/VBA/Strings/Space)返回一串空格，[**String**](/official/Reference/VBA/Strings/String)返回一串任意选择的字符——两者都可用于填充固定宽度输出。[**LTrim**](/official/Reference/VBA/Strings/LTrim)、[**RTrim**](/official/Reference/VBA/Strings/RTrim)和[**Trim**](/official/Reference/VBA/Strings/Trim)分别去除字符串的前导空格、尾部空格或两者的空格。

```vb
Dim S As String
S = "  Hello, world  "
Debug.Print "[" & Trim(S) & "]"     ' "[Hello, world]"
Debug.Print Left(Trim(S), 5)        ' "Hello"
Debug.Print String(3, "*") & " " & Space(2) & "!"   ' "***   !"
```

## 大小写转换和其他变换

[**LCase**](/official/Reference/VBA/Strings/LCase)和[**UCase**](/official/Reference/VBA/Strings/UCase)将字符串转换为小写或大写。[**StrReverse**](/official/Reference/VBA/Strings/StrReverse)反转字符顺序。[**StrConv**](/official/Reference/VBA/Strings/StrConv)捆绑了更广泛的转换集——大小写转换、首字母大写、DBCS区域设置的窄/宽和平假名/片假名映射、以及Unicode与ANSI字节数组的往返转换——通过可叠加的标志参数选择。

```vb
Debug.Print UCase("Hello")               ' "HELLO"
Debug.Print StrReverse("Hello")          ' "olleH"
Debug.Print StrConv("hello world", vbProperCase)   ' "Hello World"
```

## 拆分、连接、替换和过滤

[**Split**](/official/Reference/VBA/Strings/Split)按分隔符将字符串拆分为从零开始的子字符串数组；[**Join**](/official/Reference/VBA/Strings/Join)执行相反的操作，用选定的分隔符将数组重新连接在一起。[**Replace**](/official/Reference/VBA/Strings/Replace)在一个字符串中将一个子字符串替换为另一个，可选择限制替换次数或从给定偏移量开始。[**Filter**](/official/Reference/VBA/Strings/Filter)将字符串数组缩减为仅包含——或将*include*设为**False**时不包含——选定子字符串的元素。

```vb
Dim Parts() As String
Parts = Split("red,green,blue", ",")
Debug.Print Join(Parts, " / ")              ' "red / green / blue"
Debug.Print Replace("red,green,blue", ",", "; ")  ' "red; green; blue"
```

## 将值格式化为文本

[**Format**](/official/Reference/VBA/Strings/Format)是通用格式化函数：它接受任何表达式——数字、日期或字符串——连同命名或用户定义的格式字符串，并返回渲染后的文本。四个命名格式化函数[**FormatCurrency**](/official/Reference/VBA/Strings/FormatCurrency)、[**FormatNumber**](/official/Reference/VBA/Strings/FormatNumber)、[**FormatPercent**](/official/Reference/VBA/Strings/FormatPercent)和[**FormatDateTime**](/official/Reference/VBA/Strings/FormatDateTime)封装了最常见的情况，使用显式参数代替格式字符串，使调用处表达的是意图而非配方。[**MonthName**](/official/Reference/VBA/Strings/MonthName)和[**WeekdayName**](/official/Reference/VBA/Strings/WeekdayName)根据数字索引返回月份或星期几的本地化名称（或缩写）。

```vb
Debug.Print Format(1234.5, "#,##0.00")         ' "1,234.50"
Debug.Print FormatCurrency(1234.5)             ' "$1,234.50"   (US locale)
Debug.Print FormatDateTime(Now, vbLongDate)    ' "Saturday, May 9, 2026"
Debug.Print MonthName(1)                       ' "January"
```

## 成员

- [Asc](/official/Reference/VBA/Strings/Asc) —— 返回字符串中第一个字符的字符代码
- [Chr](/official/Reference/VBA/Strings/Chr) —— 返回与字符代码相关联的字符
- [Filter](/official/Reference/VBA/Strings/Filter) —— 返回匹配（或不匹配）子字符串的字符串数组子集
- [Format](/official/Reference/VBA/Strings/Format) —— 根据格式表达式格式化表达式
- [FormatCurrency](/official/Reference/VBA/Strings/FormatCurrency) —— 将表达式格式化为货币字符串
- [FormatDateTime](/official/Reference/VBA/Strings/FormatDateTime) —— 将表达式格式化为日期/时间字符串
- [FormatNumber](/official/Reference/VBA/Strings/FormatNumber) —— 将表达式格式化为数字字符串
- [FormatPercent](/official/Reference/VBA/Strings/FormatPercent) —— 将表达式格式化为百分比字符串
- [InStr](/official/Reference/VBA/Strings/InStr) —— 返回一个字符串在另一个字符串中的位置
- [InStrRev](/official/Reference/VBA/Strings/InStrRev) —— 从末尾搜索返回一个字符串在另一个字符串中的位置
- [Join](/official/Reference/VBA/Strings/Join) —— 使用给定分隔符连接字符串数组
- [LCase](/official/Reference/VBA/Strings/LCase) —— 返回转换为小写的字符串
- [Left](/official/Reference/VBA/Strings/Left) —— 返回字符串最左侧的子字符串
- [Len](/official/Reference/VBA/Strings/Len) —— 返回字符串的长度或变量的存储大小
- [LTrim](/official/Reference/VBA/Strings/LTrim) —— 去除字符串的前导空格
- [Mid](/official/Reference/VBA/Strings/Mid) —— 返回字符串的子字符串
- [MonthName](/official/Reference/VBA/Strings/MonthName) —— 返回指定月份的名称
- [Replace](/official/Reference/VBA/Strings/Replace) —— 替换字符串中的子字符串
- [Right](/official/Reference/VBA/Strings/Right) —— 返回字符串最右侧的子字符串
- [RTrim](/official/Reference/VBA/Strings/RTrim) —— 去除字符串的尾部空格
- [Space](/official/Reference/VBA/Strings/Space) —— 返回由空格组成的字符串
- [Split](/official/Reference/VBA/Strings/Split) —— 按分隔符将字符串拆分为字符串数组
- [StrComp](/official/Reference/VBA/Strings/StrComp) —— 比较两个字符串
- [StrConv](/official/Reference/VBA/Strings/StrConv) —— 将字符串转换为指定格式
- [String](/official/Reference/VBA/Strings/String) —— 返回由重复字符组成的字符串
- [StrReverse](/official/Reference/VBA/Strings/StrReverse) —— 反转字符串的字符顺序
- [Trim](/official/Reference/VBA/Strings/Trim) —— 去除字符串的前导和尾部空格
- [UCase](/official/Reference/VBA/Strings/UCase) —— 返回转换为大写的字符串
- [WeekdayName](/official/Reference/VBA/Strings/WeekdayName) —— 返回指定星期几的名称