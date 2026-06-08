---
title: Environ
parent: Interaction Module
permalink: /tB/Modules/Interaction/Environ
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0ad7b521-4f4b-4089-9fc0-c96222ea53c9'
  PropagateID: '0ad7b521-4f4b-4089-9fc0-c96222ea53c9'
  ReservedCode1: 'f3d2bb74-1115-4059-a6bb-dfd4e3a378d8'
  ReservedCode2: 'f3d2bb74-1115-4059-a6bb-dfd4e3a378d8'
---

# Environ, Environ$

返回与操作系统环境变量关联的值，可按名称或环境字符串表中基于1的位置查找。

语法：

- **Environ$(** *envstring* **)**, **Environ(** *envstring* **)**
- **Environ$(** *number* **)**, **Environ(** *number* **)**

*envstring*
: *必需* 字符串表达式，包含环境变量的名称。

*number*
: *必需* 数值表达式，给出进程环境字符串表中条目的基于1的位置。*number*可以是任何数值表达式，在求值前四舍五入为整数。

带`$`后缀的形式返回**String**；不带后缀的形式返回**Variant**（**String**）。

使用*envstring*调用时，**Environ**返回分配给该环境变量的值——即该变量在环境字符串表中等号(`=`)后面的文本。如果在表中找不到*envstring*，则返回零长度字符串(`""`)。

使用*number*调用时，**Environ**返回该位置的整个条目，包括变量名、等号和值（例如`"PATH=C:\Windows;C:\Windows\System32"`）。如果该位置没有条目，则返回零长度字符串。

### 示例

本示例遍历环境字符串表以查找`PATH`的条目编号和值长度。

```vb
Dim EnvString As String, Indx As Long, PathLen As Long
Indx = 1
Do
    EnvString = Environ(Indx)
    If Left(EnvString, 5) = "PATH=" Then
        PathLen = Len(Environ("PATH"))
        Debug.Print "PATH entry = " & Indx & " and length = " & PathLen
        Exit Do
    Else
        Indx = Indx + 1
    End If
Loop Until EnvString = ""

If PathLen = 0 Then
    Debug.Print "No PATH environment variable exists."
End If
```