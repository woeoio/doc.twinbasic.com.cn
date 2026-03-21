---
title: 模块组织
parent: 语言语法
nav_order: 16
permalink: /Features/Language/Module-Organization
---

# 模块级代码组织

现在可以在方法或属性之间插入模块级代码。以前所有`Declare`语句、`Enum`、`Type`等都必须出现在第一个`Sub/Function/Property`之前，现在以下代码将是有效的：

```vb
Private Const foo = "foo"
Sub SomeMethod()
'...
End Sub
Private Const bar = "bar"
Sub SomeOtherMethod()
'...
End Sub
```

## 代码部分名称的预设方法

以下可以使用，它们代表的内容将自动作为`String`插入：

- `CurrentComponentName`，例如"Form1"
- `CurrentProcedureName`，例如在`Sub Foo()`中的"Foo"
- `CurrentProjectName`
- `CurrentSourceFile`
- `CurrentComponentCLSID`

## 移除限制
twinBASIC 对行继续、过程大小、窗体上控件数量、模块大小等没有人为限制。