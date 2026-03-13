---
title: Continue
parent: 语句
permalink: /zh/tB/Core/Continue
---

# Continue

{: no_toc }

立即开始封闭循环的下一次迭代。

语法：**Continue** [ **Do** \| **For** \| **While** ]

Do

: 在[Do](Do-Loop)循环内使用。

For

: 在[For](For-Next)循环内使用。

While

: 在[While](While-Wend)循环内使用

### 示例

此示例使用**Continue For**跳过字符串某些字符的处理。

```vb
Dim i%, ch$, text$
For i = 1 To 10
    ch = Mid$(text, i, 1)
    If ch = " " Then Continue For
    ' 在此处处理非空格字符
Next i
```