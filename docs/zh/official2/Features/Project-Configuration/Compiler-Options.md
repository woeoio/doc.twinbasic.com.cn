---
title: 编译器选项
parent: 项目配置
nav_order: 2
permalink: /Features/Project-Configuration/Compiler-Options
---

# 编译器选项
twinBASIC 提供了几个编译器选项来控制代码的编译和优化方式。

## COM 初始化

您可以指定隐藏入口点使用的调用，有以下选项：`CoInitialize STA`、`CoInitializeEx MTA`、`OleInitialize STA`。如果您不知道区别，请不要更改默认值。

## 符号表参数

您可以调整以下参数：原始最大大小、查找最大大小和数据类型查找。这些选项允许编译非常大的项目，否则可能会有问题，如果需要增加这些值，编译器将通知您。

## 布尔类型清理

在底层，布尔是 2 字节类型。使用内存 API 或从外部代码接收时，可能会存储除表示`True`和`False`之外的值。此选项验证来自外部源的布尔值，例如 COM 对象和 API，以确保只存储两个支持的值。

## 其他选项

- **LARGEADDRESSAWARE**：项目可以标记为`LARGEADDRESSAWARE`。
- **基地址**：可以指定手动基地址。
- **PE 重定位符号**：剥离 PE 重定位符号的选项。

## 漏洞利用缓解

您可以启用以下安全功能：

- **数据执行预防（DEP）**
- **地址空间布局随机化（ASLR）**