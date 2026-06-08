---
title: "模块组织"
parent: Language Syntax
nav_order: 16
permalink: /Features/Language/Module-Organization
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c650af72-282f-420b-b7de-a54ba1865552'
  PropagateID: 'c650af72-282f-420b-b7de-a54ba1865552'
  ReservedCode1: '0cb1b044-ef0d-405e-a401-00958735757b'
  ReservedCode2: '0cb1b044-ef0d-405e-a401-00958735757b'
---

# 模块级代码组织

现在可以在方法或属性之间插入模块级代码。以前所有 `Declare` 语句、`Enum`、`Type` 等都必须出现在第一个 `Sub/Function/Property` 之前，现在以下写法是有效的：

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

## 代码部件名称的预设方法

以下可用，它们代表的内容将自动作为 `String` 插入：

- `CurrentComponentName`，例如 "Form1"
- `CurrentProcedureName`，例如在 `Sub Foo()` 中为 "Foo"
- `CurrentProjectName`
- `CurrentSourceFile`
- `CurrentComponentCLSID`

## 限制的移除

twinBASIC 对续行、过程大小、窗体上的控件数量、模块大小等不施加人为限制。