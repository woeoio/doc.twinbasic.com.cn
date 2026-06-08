---
title: "编译器选项"
parent: Project Configuration
nav_order: 2
permalink: /Features/Project-Configuration/Compiler-Options
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f3a47b56-0bed-4f12-a3a6-3c1a4ccda016'
  PropagateID: 'f3a47b56-0bed-4f12-a3a6-3c1a4ccda016'
  ReservedCode1: 'f3098601-c030-4801-a424-072f6cc4ddee'
  ReservedCode2: 'f3098601-c030-4801-a424-072f6cc4ddee'
---

# 编译器选项

twinBASIC 提供了多个编译器选项来控制代码的编译和优化方式。

## COM 初始化

你可以使用以下选项指定隐藏入口点使用的调用：`CoInitialize STA`、`CoInitializeEx MTA`、`OleInitialize STA`。如果你不知道它们之间的区别，请不要更改默认值。

## 符号表参数

你可以调整以下参数：Max Size Raw、Max Size Lookup 和 Data Type Lookup。这些选项允许编译非常大的项目（否则可能会有问题），编译器会在这些值需要增加时通知你。

## Boolean 类型净化

内部布尔值是 2 字节类型。使用内存 API 或从外部代码接收时，可能会存储 `True` 和 `False` 之外的值。此选项验证来自外部来源的布尔值（例如 COM 对象和 API），确保只存储两个支持的值。

## 附加选项

- **LARGEADDRESSAWARE**：项目可以标记为 `LARGEADDRESSAWARE`。
- **基址**：可以指定手动基址。
- **PE 重定位符号**：剥离 PE 重定位符号的选项。

## 利用缓解

你可以启用以下安全功能：

- **数据执行保护 (DEP)**
- **地址空间布局随机化 (ASLR)**