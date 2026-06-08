---
title: 特性
parent: Features
nav_order: 1
permalink: /Features/Attributes-Intro
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'efc1a5d0-3af0-488c-bbd6-6a997adf16a3'
  PropagateID: 'efc1a5d0-3af0-488c-bbd6-6a997adf16a3'
  ReservedCode1: '0df17244-81f0-4808-97d7-b6174b110260'
  ReservedCode2: '0df17244-81f0-4808-97d7-b6174b110260'
---

# 特性

twinBASIC 支持直接在代码中定义特性，用于标注模块、类、类型、过程等。这些特性提供编译器指令和元数据。

特性有两个主要功能：

- 可以作为编译器的指令来影响代码的生成方式，或

- 用于标注窗体、模块、类、类型、枚举、声明和[过程](/official/Reference/Glossary#procedure)（即 Sub/Function/Property）。

以前在 VBx 中，这些特性（如过程描述、隐藏、默认成员等）是通过 IDE 编辑器中不可见的隐藏文本设置的，通过"过程属性"对话框或其他地方进行配置。在 tB 中，这些内容都可在代码编辑器中直接看到。VBx 的遗留特性为兼容性而保留，但新特性使用以下语法：
`[Attribute]` 或 `[Attribute(value)]`

许多新特性启用了 twinBASIC 提供的额外语言功能，因此以下某些条目的描述中包含了相关特性。

另请参阅[特性完整参考](/official/Reference/Attributes)。