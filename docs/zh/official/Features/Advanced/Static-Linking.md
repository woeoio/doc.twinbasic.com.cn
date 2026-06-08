---
title: 静态链接
parent: Advanced Features
nav_order: 3
permalink: /Features/Advanced/Static-Linking
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd2039c9c-b998-4705-85ce-a933e2152461'
  PropagateID: 'd2039c9c-b998-4705-85ce-a933e2152461'
  ReservedCode1: 'dfa10449-962f-45fc-b7d2-61c39c2bcd55'
  ReservedCode2: 'dfa10449-962f-45fc-b7d2-61c39c2bcd55'
---

# OBJ 和 LIB 文件的静态链接

tB 允许你使用正确编译的 .lib 和 .obj 文件作为静态链接库，使用类似于 DLL 的声明，只需在项目的"杂项文件"文件夹中引用 lib/obj 文件。文件加入项目后，在声明外部使用以下语法进行配置。

## 示例

来自 sqlite 示例的用法：

```vb
#If Win64 Then
    Import Library "/Miscellaneous/sqlite3_64.obj" As SQLITE3 Link "stdlib", "kernel32"
#Else
    Import Library "/Miscellaneous/sqlite3_32.obj" As SQLITE3 Link "stdlib", "kernel32"
#End If
```

### 通用语法

```vb
Import Libary "Relative resource path" As NAMESPACE Link "dependency1", "dependency2", '...
```

## 使用导入的库

之后，你可以在类/模块声明中使用 NAMESPACE 代替 DLL 名称：

```vb
' Compiled sqlite-amalgamation-3440200 (v3.44.2)
'   using cmdline (MSVC):  cl /c /Gw /Gy /GS- /DSQLITE_OMIT_SEH sqlite3.c
#If Win64 Then
    Import Library "/Miscellaneous/sqlite3_64.obj" As SQLITE3 Link "stdlib", "kernel32"
#Else
    Import Library "/Miscellaneous/sqlite3_32.obj" As SQLITE3 Link "stdlib", "kernel32"
#End If

Module MainModule

    Declare PtrSafe Function sqlite3_open CDecl Lib SQLITE3 (ByVal filename As String, ByRef ppDb As LongPtr) As Long
    Declare PtrSafe Function sqlite3_exec CDecl Lib SQLITE3 (ByVal pDb As LongPtr, ByVal sql As String, ByVal exec_callback As LongPtr, ByVal udp As LongPtr, ByRef errmsg As LongPtr) As Long
'...
```

::: info
StdCall 名称会使用参数大小进行修饰，例如 `int myfunc(int x, short y);` 会变成 `myfunc@6`。因此使用 `CDecl` 可能更好。
:::