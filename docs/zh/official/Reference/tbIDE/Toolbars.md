---
title: Toolbars
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/Toolbars
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '138ab0a3-1322-487e-848e-49cd11990dcd'
  PropagateID: '138ab0a3-1322-487e-848e-49cd11990dcd'
  ReservedCode1: '9a39af09-7bdf-410d-b580-b1fd34ec1203'
  ReservedCode2: '9a39af09-7bdf-410d-b580-b1fd34ec1203'
---

# Toolbars 类

IDE 工具栏集合。通过 [**Host.Toolbars**](/official/Reference/tbIDE/Host#toolbars) 访问。当前只有一个工具栏——`Host.Toolbars(0)`——但集合接口允许未来 IDE 版本添加更多。

```vb
With Host.Toolbars(0)
    .AddSplitter
    Set Button1 = .AddButton("MyAddIn.Button1", "Refresh")
End With
```

## 属性

### Count

工具栏数量。**Long**，只读。当前始终为 **1**。

### Item

工具栏的索引访问。**DefaultMember**——因此 `Toolbars(0)` 等同于 `Toolbars.Item(0)`。

语法：*toolbars*( *Index* ) **As** [**Toolbar**](/official/Reference/tbIDE/Toolbar)

*Index*
: 一个基于 0 的 **Variant** 索引。当前 `0` 是唯一有效值。