---
title: MacID
parent: Conversion Module
permalink: /tB/Modules/Conversion/MacID
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '98f79fc1-6f66-4728-a3e5-795d492fa617'
  PropagateID: '98f79fc1-6f66-4728-a3e5-795d492fa617'
  ReservedCode1: 'd94b5e5e-20f0-410e-b7d1-7649a4739e8e'
  ReservedCode2: 'd94b5e5e-20f0-410e-b7d1-7649a4739e8e'
---

# MacID

在 Macintosh 上用于将 4 字符常量转换为可供 [**Dir**](/official/Reference/VBA/FileSystem/Dir)、[**Kill**](/official/Reference/VBA/FileSystem/Kill)、**Shell** 和 [**AppActivate**](/official/Reference/VBA/Interaction/AppActivate) 使用的值。

语法：**MacID(** *constant* **)**

*constant*
: *必需* 一个 4 字符的 **String**，用于指定资源类型、文件类型、应用程序签名或 Apple Event——例如，`"TEXT"`、`"OBIN"`、Excel 文件用 `"XLS5"`（Excel 97 用 `"XLS8"`）；Microsoft Word 使用 `"W6BN"`（Word 97 用 `"W8BN"`）。

返回类型为 **Long**。

**MacID** 与 **Dir** 和 **Kill** 一起使用以指定 Macintosh 文件类型。由于 Macintosh 不支持 `*` 和 `?` 作为通配符，因此改用四字符常量来标识文件组。例如，以下语句返回当前文件夹中的 `TEXT` 类型文件：

```vb
Dir("SomePath", MacID("TEXT"))
```

**MacID** 与 **Shell** 和 **AppActivate** 一起使用，通过应用程序的唯一签名来指定应用程序。

::: info
twinBASIC 目前面向 Windows。提供 **MacID** 是为了与最初为 Macintosh 编写的 VBA 代码保持源代码兼容性；在 Windows 上，它返回的值对文件系统或 shell 函数没有特殊含义。
:::