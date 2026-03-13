---
title: 静态链接
parent: 高级功能
nav_order: 3
permalink: /Features/Advanced/Static-Linking
---

# OBJ 和 LIB 文件的静态链接
tB 允许您将正确编译的 .lib 和 .obj 文件用作静态链接库，使用类似于 DLL 的声明，只是引用项目杂项文件文件夹中的 lib/obj 文件。一旦文件在项目中，它在声明之外使用以下语法设置。

## 示例

来自 sqlite 示例的示例：

```vb
#If Win64 Then
    Import Library "/Miscellaneous/sqlite3_64.obj" As SQLITE3 Link "stdlib", "kernel32"
#Else
    Import Library "/Miscellaneous/sqlite3_32.obj" As SQLITE3 Link "stdlib", "kernel32"
#End If
```

### 通用语法

```
Import Libary "相对资源路径" As 命名空间 Link "依赖1", "依赖2", '...
```

## 使用导入的库

之后，您可以在类/模块声明中使用命名空间代替 DLL 名称：

```vb
' 编译的 sqlite-amalgamation-3440200 (v3.44.2)
'   使用命令行 (MSVC):  cl /c /Gw /Gy /GS- /DSQLITE_OMIT_SEH sqlite3.c
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

> [!注意]
> StdCall 名称将被参数大小混淆，例如 `int myfunc(int x, short y);` 将变成 `myfunc@6`。因此，使用 `CDecl` 可能更好。

将来会有专门用于更充分解释此功能的文档页面；现在如果您需要帮助，请访问 tB Discord 或 GitHub 仓库的讨论部分并提问。